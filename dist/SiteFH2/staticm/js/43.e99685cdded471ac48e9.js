webpackJsonp([43],{357:function(t,e,i){var n=i(0)(i(667),i(906),null,null);t.exports=n.exports},667:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(6),s=i(2);e.default={name:"PageNoticesList",data:function(){return{list:[]}},created:function(){this.$store.commit("setPage",{pageTitle:"最新公告",className:"page-notices-list"}),this.fetchNoticeList()},methods:{fetchNoticeList:function(){var t=this;return n.apiGetNotice().then(function(t){return t.json()}).then(function(e){if(void 0!==e.S)return void t.$message({type:"warning",message:e.S+": "+e.D});if("array"===i.i(s.f)(e)){var n=[];e.forEach(function(t){n.push({id:t.Id,title:t.Title})}),t.list=n}}).catch(function(e){console.log(e),t.$message({type:"error",message:"获取公告列出错啦！",force:!0})})}}}},906:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"kd-body"},[t.list.length>0?i("ol",{staticClass:"kd-container"},t._l(t.list,function(e){return i("li",[i("router-link",{attrs:{to:"/article/notice-"+e.id}},[t._v(t._s(e.title))])],1)}),0):i("div",{staticClass:"kd-container kd-align-center"},[t._v("暂时没有数据！")])])},staticRenderFns:[]}}});