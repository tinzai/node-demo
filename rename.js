const e = require('cors')
const fs = require('fs')
const path = require('path')
const PATH = path.resolve(__dirname, 'dist')
async function fileDisplay(filePath,callback){
    const files = await fs.readdirSync(filePath)
    files.forEach((fileName)=>{
        const filedir = path.resolve(filePath, fileName);
        fs.stat(filedir,function(err, stats){
            if (err) throw err;
            if(stats.isDirectory()){
                fileDisplay(filedir,callback);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                callback(filedir,fileName)
            }else{
                callback(filedir,fileName,stats.isFile())
            }
        })
    })
}
function reName(oldPath,newPath,callback){
    fs.rename(oldPath,newPath,(err)=>{
        if (err) throw err;
        typeof callback === 'function' ? callback() : null
    })
}
/**
 * @读取文件
 * type => base64(图片文件),binary(字体图标),utf8(常规文件)
 */
function readFile(fileName,filePath){
    let buffer = null,type = undefined;
    if(/\.(svg|png|gif|jpeg|jpg)$/.test(fileName)){
        type = 'base64'
    } else if(/\.(eot|ttf|woff|woff2)$/.test(fileName)){
        type = 'binary'
    } else{
        type = 'utf8'
    }
    buffer = fs.readFileSync(filePath,type)
    if(/\.(html|css|js|txt)$/.test(fileName)){
        buffer = buffer.replace(/static+[/\\]{1}/g,'staticm/')
    } 
    return {
        buffer:buffer,
        type:type
    }
}
fileDisplay(PATH,(filedir,fileName,stats)=>{
    let oldPath = newPath = filedir,
    isPC = filedir.includes('PCS') ? true : false;
    newPath = filedir.replace(/static+[/\\]{1}/g,'staticm\\') //目标地址
    // 1 创建staticm
    if(fileName === 'static'){
        let staticmPath = filedir.replace(/static/g,'staticm')
        if(!fs.existsSync(staticmPath) && !isPC){
            fs.mkdirSync(staticmPath);
        } 
    }
    // 2 copy文件至staticm
    if(!isPC){
        if(stats){
            // 对有依赖关系的重新写入
            let {buffer,type} = readFile(fileName,oldPath)
            fs.writeFileSync(newPath,buffer,type,(err)=>{
                if (err) throw err;
            })
        }else{
            if(!fs.existsSync(newPath)){
                fs.mkdirSync(newPath);
            }
        }
    }
    // 入口文件更名
    if(fileName.includes('index.html')){
        const name = filedir.includes('PCSite') ? 'pc.html' : 'm.html'
        newPath = filedir.replace(new RegExp('index.html','gi'),name)
        reName(oldPath,newPath)
    }
})