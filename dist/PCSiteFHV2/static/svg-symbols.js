(function(window){
    var svgSprite = `<svg xmlns="http://www.w3.org/2000/svg" class="kd-virtual-hidden"></svg>`; // #
    var prepend = function(el, target){
        if(target.firstChild){
            target.firstChild.parentNode.insertBefore(el, target.firstChild);
        }else{
            target.appendChild(el);
        }
    };

    var divID = 'install-svg-symbols';
    var div = document.getElementById(divID);
    if(!div){
        div = document.createElement('div');
        div.id = divID;
        prepend(div, document.body);
    }
    div.setAttribute('aria-hidden', 'true');
    div.style.position = 'absolute';
    div.style.width = 0;
    div.style.height = 0;
    div.style.overflow = 'hidden';
    div.innerHTML = svgSprite;
    svgSprite = null;
})(window);
