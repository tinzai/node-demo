webpackJsonp([33],{1059:function(e,s,t){var a=t(0)(t(847),t(1177),null,null);e.exports=a.exports},1177:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("main",{staticClass:"kd-body container-lg account__main"},[t("mod-account-main",[t("div",{staticClass:"account__sidebar"},[t("mod-account-sub-nav-public")],1),e._v(" "),t("div",{staticClass:"account__body"},[t("div",{staticClass:"account__body-title"},[e._v("消息中心")]),e._v(" "),t("div",{staticClass:"account__body-content"},[t("ul",{staticClass:"nostyle account-nav"},[t("li",{class:{active:!e.showRedMessages}},[t("a",{attrs:{href:"javascript:;"},on:{click:function(s){return e.switchMessageEx(0)}}},[e._v("未读消息("+e._s(e.totalCountOfMessages)+"封)")])]),e._v(" "),t("li",{class:{active:e.showRedMessages}},[t("a",{attrs:{href:"javascript:;"},on:{click:function(s){return e.switchMessageEx(1)}}},[e._v("已读消息"+e._s(e.totalCountOfRedMessages)+"封")])])]),e._v(" "),t("div",{staticClass:"account__content-table"},[t("table",{staticClass:"account__table"},[t("thead",[t("tr",[t("th",{staticStyle:{width:"100px"}}),e._v(" "),t("th",[e._v("消息标题")]),e._v(" "),t("th",{staticStyle:{width:"200px"}},[e._v("发布时间")]),e._v(" "),t("th",{staticStyle:{width:"100px"}},[e._v("操作")])])]),e._v(" "),t("tbody",{directives:[{name:"show",rawName:"v-show",value:!e.showRedMessages,expression:"!showRedMessages"}]},[0===e.messages.length?t("tr",[t("td",{attrs:{colspan:"4"}},[e._v("没有消息")])]):e._l(e.messages,function(s,a){return t("tr",{key:s.id},[t("td",[t("kd-checkbox",{attrs:{cvalue:s.id},model:{value:e.selectedMessages,callback:function(s){e.selectedMessages=s},expression:"selectedMessages"}})],1),e._v(" "),t("td",[t("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.openPrompt(s.id,a)}}},[e._v(e._s(s.title))])]),e._v(" "),t("td",[e._v(e._s(s.date))]),e._v(" "),t("td",[t("a",{staticClass:"info__link",on:{click:function(t){return e.deleteMessage(s.id)}}},[e._v("删除")])])])})],2),e._v(" "),t("tbody",{directives:[{name:"show",rawName:"v-show",value:e.showRedMessages,expression:"showRedMessages"}]},[0===e.redMessages.length?t("tr",[t("td",{attrs:{colspan:"4"}},[e._v("没有消息")])]):e._l(e.redMessages,function(s,a){return t("tr",{key:s.id},[t("td",[t("kd-checkbox",{attrs:{cvalue:s.id},model:{value:e.selectedRedMessages,callback:function(s){e.selectedRedMessages=s},expression:"selectedRedMessages"}})],1),e._v(" "),t("td",[t("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.openPrompt(s.id,a)}}},[e._v(e._s(s.title))])]),e._v(" "),t("td",[e._v(e._s(s.date))]),e._v(" "),t("td",[t("a",{staticClass:"info__link",on:{click:function(t){return e.deleteMessage(s.id)}}},[e._v("删除")])])])})],2)]),e._v(" "),!e.showRedMessages&&e.messages.length>0||e.showRedMessages&&e.redMessages.length>0?t("kd-pager",{staticClass:"pager--right",attrs:{currentPage:e.currentPage,totalPages:e.totalPages},on:{toPage:e.fetchMessages}}):e._e(),e._v(" "),t("div",{staticClass:"message-actions"},[t("kd-checkbox",{model:{value:e.selectAll,callback:function(s){e.selectAll=s},expression:"selectAll"}}),t("span",[e._v("全选")]),e._v(" "),t("a",{attrs:{href:"javascript:;"},on:{click:e.deleteMessageEx}},[e._v("删除")]),e._v(" "),e.showRedMessages?e._e():t("a",{attrs:{href:"javascript:;"},on:{click:e.setRedForSelectedEx}},[e._v("标记为已读")])],1)],1)])])]),e._v(" "),t("transition",{attrs:{"enter-active-class":"animated zoom-in","leave-active-class":"animated bounce-out"}},[e.isPromptOpened?t("div",{staticClass:"promptbox-wrapper prompt-message"},[t("section",{staticClass:"promptbox"},[t("div",{staticClass:"prompt-head"},[e._v("消息详情")]),e._v(" "),t("div",{staticClass:"prompt-body"},[t("h5",{staticClass:"message-title"},[e._v(e._s(e.message.title))]),e._v(" "),t("p",[t("time",[e._v(e._s(e.message.date))])]),e._v(" "),t("div",{staticClass:"article"},[e._v(e._s(e.message.content))])]),e._v(" "),t("a",{staticClass:"prompt-close kd-close",on:{click:e.closePrompt}},[e._v("close")])]),e._v(" "),t("div",{staticClass:"promptbox-overlay"})]):e._e()])],1)},staticRenderFns:[]}},1198:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("main",{staticClass:"kd-body"},[t("ul",{staticClass:"nostyle kd-container kd-row messages-nav"},[t("li",{class:{active:!e.showRedMessages}},[t("a",{attrs:{href:"javascript:;"},on:{click:function(s){return e.switchMessage(0)}}},[e._v("未读消息("+e._s(e.totalCountOfMessages)+")")])]),e._v(" "),t("li",{class:{active:e.showRedMessages}},[t("a",{attrs:{href:"javascript:;"},on:{click:function(s){return e.switchMessage(1)}}},[e._v("已读消息")])])]),e._v(" "),t("div",{staticClass:"kd-container message-actions"},[t("a",{attrs:{href:"javascript:;"},on:{click:e.selectAllMessages}},[e._v("选择所有")]),e._v(" "),e.selectedMessages.length>0||e.selectedRedMessages.length>0?t("a",{attrs:{href:"javascript:;"},on:{click:e.cancelSelectMessages}},[e._v("取消选择")]):e._e(),e._v(" "),e.selectedMessages.length>0?t("a",{attrs:{href:"javascript:;"},on:{click:e.setRedForSelected}},[e._v("标记已读")]):e._e(),e._v(" "),e.selectedMessages.length>0||e.selectedRedMessages.length>0?t("a",{attrs:{href:"javascript:;"},on:{click:e.deleteMessage}},[e._v("删除消息")]):e._e()]),e._v(" "),t("div",{staticClass:"kd-container"},[t("ul",{directives:[{name:"show",rawName:"v-show",value:!e.showRedMessages,expression:"!showRedMessages"}],staticClass:"nostyle messages-list"},[0===e.messages.length?t("li",[e._v("没有消息")]):e._l(e.messages,function(s,a){return t("li",{key:s.id,class:{red:s.red}},[t("kd-checkbox",{attrs:{cvalue:s.id},model:{value:e.selectedMessages,callback:function(s){e.selectedMessages=s},expression:"selectedMessages"}}),t("a",{on:{click:function(t){return e.openPrompt(s.id,a)}}},[e._v(e._s(s.title)+"-"+e._s(s.date))]),e._v(" "),t("a",{staticClass:"delete",on:{click:function(t){return e.deleteMessage(s.id)}}},[e._v("删除")])],1)})],2),e._v(" "),t("ul",{directives:[{name:"show",rawName:"v-show",value:e.showRedMessages,expression:"showRedMessages"}],staticClass:"nostyle messages-list"},[0===e.redMessages.length?t("li",[e._v("没有消息")]):e._l(e.redMessages,function(s,a){return t("li",{key:s.id,class:{red:s.red}},[t("kd-checkbox",{attrs:{cvalue:s.id},model:{value:e.selectedRedMessages,callback:function(s){e.selectedRedMessages=s},expression:"selectedRedMessages"}}),t("a",{on:{click:function(t){return e.openPrompt(s.id,a)}}},[e._v(e._s(s.title)+"-"+e._s(s.date))]),e._v(" "),t("a",{staticClass:"delete",on:{click:function(t){return e.deleteMessage(s.id)}}},[e._v("删除")])],1)})],2),e._v(" "),!e.showRedMessages&&e.messages.length>0||e.showRedMessages&&e.redMessages.length>0?t("kd-pager",{attrs:{currentPage:e.currentPage,totalPages:e.totalPages},on:{toPage:e.fetchMessages}}):e._e()],1),e._v(" "),t("transition",{attrs:{"enter-active-class":"animated zoom-in","leave-active-class":"animated bounce-out"}},[e.isPromptOpened?t("div",{staticClass:"promptbox-wrapper prompt-message"},[t("section",{staticClass:"promptbox"},[t("div",{staticClass:"prompt-head"},[e._v("消息详情")]),e._v(" "),t("div",{staticClass:"prompt-body"},[t("h5",{staticClass:"message-title"},[e._v(e._s(e.message.title))]),e._v(" "),t("p",[t("time",[e._v(e._s(e.message.date))])]),e._v(" "),t("div",{staticClass:"article"},[e._v(e._s(e.message.content))])]),e._v(" "),t("a",{staticClass:"prompt-close kd-close",on:{click:e.closePrompt}},[e._v("close")])]),e._v(" "),t("div",{staticClass:"promptbox-overlay"})]):e._e()])],1)},staticRenderFns:[]}},376:function(e,s,t){var a=t(0)(t(790),null,null,null);e.exports=a.exports},397:function(e,s,t){var a=t(0)(t(398),t(399),null,null);e.exports=a.exports},398:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"ComAccountNav"}},399:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement;return(e._self._c||s)("ul",{staticClass:"nostyle account-nav account-sub-nav kd-row-middle"},[e._t("default")],2)},staticRenderFns:[]}},400:function(e,s,t){var a=t(0)(t(401),t(410),null,null);e.exports=a.exports},401:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(24),n=t.n(a),o=t(42),c=t(397),i=t.n(c);s.default={name:"ComAccountSubNavMoneyInOut",computed:n()({},t.i(o.a)({userType:function(e){return e.user.userType},isUserLogined:function(e){return e.user.isUserLogined}}),{isMoneyOut:function(){return"AccountMoneyOut"===this.$route.name}}),methods:{goToMoneOut:function(){if(2===this.userType)return void this.$message({message:"该会员暂时不支持提现！",type:"warning"});this.$router.push({name:"AccountMoneyOut"})}},components:{modAccountSubNav:i.a}}},402:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"ComAccountBody"}},403:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(24),n=t.n(a),o=t(400),c=t.n(o),i=t(42),r=t(68);s.default={extends:c.a,data:function(){return{showedAccountPrizes:!0}},computed:n()({},t.i(i.a)(["ifShowRechargeDraw","ifShowShowLiCai","ifShowTransfer","ifShowBbin","ifShowQP","hgtyStatus","sbtyStatus"]),{hasTransfer:function(){return(this.ifShowTransfer||this.ifShowBbin||this.ifShowQP||this.hgtyStatus||this.sbtyStatus)&&1==this.userType},zxsfstatus:function(){return this.$store.state.zxsfstatus},zxsfName:function(){return this.$store.state.zxsfName},gameRecordLink:function(){var e="c";for(var s in r.a.instance.modules){e=r.a.instance.modules[s].gameId;break}return"/game-record/"+e}}),methods:{goPromotion:function(){2==this.userType?this.$message({message:"只有正式会员才能进行代理推广"}):this.$router.push({name:"AccountPromotion"})}}}},404:function(e,s){},405:function(e,s){},406:function(e,s,t){t(404);var a=t(0)(t(402),t(408),"data-v-4275a0c0",null);e.exports=a.exports},407:function(e,s,t){t(405);var a=t(0)(t(403),t(409),"data-v-797fef6f",null);e.exports=a.exports},408:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement;return(e._self._c||s)("div",{staticClass:"account__main"},[e._t("default")],2)},staticRenderFns:[]}},409:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"nostyle account-nav account-sub-nav kd-row-middle"},[t("ul",{staticClass:"account-nav-item account-nav-money-in-company"},[t("h3",{staticClass:"account-nav-icon icon-money-in-company"},[e._v("个人钱包")]),e._v(" "),e.zxsfstatus?t("router-link",{attrs:{to:{path:"/account/money-in-company-zxsf",query:{chargeType:"xrsf"}},tag:"li"}},[t("a",[e._v(e._s(e.zxsfName))])]):e._e(),e._v(" "),t("router-link",{attrs:{to:"/account/money-in",tag:"li"}},[t("a",[e._v("在线充值")])]),e._v(" "),t("router-link",{attrs:{to:"/account/money-in-company",tag:"li"}},[t("a",[e._v("公司入款")])]),e._v(" "),t("li",[t("a",{on:{click:e.goToMoneOut}},[e._v("线上出款")])]),e._v(" "),t("router-link",{attrs:{to:"/account/record-of-money-in",tag:"li"}},[t("a",[e._v("交易记录")])]),e._v(" "),e.showedAccountPrizes?t("router-link",{attrs:{to:"/account/prizes",tag:"li"}},[t("a",[e._v("抽奖记录")])]):e._e(),e._v(" "),e.hasTransfer?t("router-link",{attrs:{to:"/account/transfer-money",tag:"li"}},[t("a",[e._v("额度转换")])]):e._e(),e._v(" "),e.hasTransfer?t("router-link",{attrs:{to:"/account/money-collection",tag:"li"}},[t("a",[e._v("资金归集")])]):e._e()],1),e._v(" "),t("ul",{staticClass:"account-nav-item account-nav-record-of-playing"},[t("h3",{staticClass:"account-nav-icon icon-record-of-playing"},[e._v("我的购彩")]),e._v(" "),t("router-link",{attrs:{to:"/account/record-of-playing",tag:"li"}},[t("a",[e._v("投注记录")])]),e._v(" "),t("router-link",{attrs:{to:e.gameRecordLink,tag:"li"}},[t("a",[e._v("开奖记录")])])],1),e._v(" "),t("ul",{staticClass:"account-nav-item account-nav-edit-profile"},[t("h3",{staticClass:"account-nav-icon icon-edit-profile"},[e._v("账户设置")]),e._v(" "),t("router-link",{attrs:{to:"/account/edit-profile",tag:"li"}},[t("a",[e._v("基本信息")])]),e._v(" "),t("router-link",{attrs:{to:"/account/bank-info",tag:"li"}},[t("a",[e._v("提款卡绑定")])]),e._v(" "),t("router-link",{attrs:{to:"/account/setting",tag:"li"}},[t("a",[e._v("基本设置")])])],1),e._v(" "),t("ul",{staticClass:"account-nav-item account-nav-liquidity-of-balance-sheet"},[t("h3",{staticClass:"account-nav-icon icon-liquidity-of-balance-sheet"},[e._v("账户清单")]),e._v(" "),t("router-link",{attrs:{to:"/account/liquidity-of-balance-sheet",tag:"li"}},[t("a",[e._v("账户清单")])])],1),e._v(" "),t("ul",{staticClass:"account-nav-item account-nav-promotion"},[t("h3",{staticClass:"account-nav-icon icon-promotion"},[e._v("代理推广")]),e._v(" "),t("router-link",{attrs:{to:"/account/promotion",tag:"li"}},[t("a",[e._v("代理推广")])]),e._v(" "),t("router-link",{attrs:{to:"/account/my-downline-members",tag:"li"}},[t("a",[e._v("推广用户")])]),e._v(" "),t("router-link",{attrs:{to:{name:"AccountDownlineRecords"},tag:"li"}},[t("a",[e._v("代理报表")])]),e._v(" "),t("router-link",{attrs:{to:{name:"AccountDownlineList"},tag:"li"}},[t("a",[e._v("代理管理")])])],1),e._v(" "),t("ul",{staticClass:"account-nav-item account-nav-messages"},[t("h3",{staticClass:"account-nav-icon icon-messages"},[e._v("消息中心")]),e._v(" "),t("router-link",{attrs:{to:"/account/messages",tag:"li"}},[t("a",[e._v("消息中心")])])],1)])},staticRenderFns:[]}},410:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("mod-account-sub-nav",{staticClass:"account-sub-nav--money"},[t("router-link",{attrs:{to:"/account/money-in",tag:"li"}},[t("a",[e._v("在线充值")])]),e._v(" "),t("router-link",{attrs:{to:"/account/money-in-company",tag:"li"}},[t("a",[e._v("公司入款")])]),e._v(" "),t("li",{class:{active:e.isMoneyOut}},[t("a",{on:{click:e.goToMoneOut}},[e._v("线上出款")])]),e._v(" "),t("router-link",{attrs:{to:"/account/record-of-money-in",tag:"li"}},[t("a",[e._v("交易记录")])])],1)},staticRenderFns:[]}},724:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(46),n=t.n(a),o=t(7);s.default={name:"PageAccountMessagesList",data:function(){return{showRedMessages:0,messages:[],selectedMessages:[],redMessages:[],selectedRedMessages:[],totalPages:1,currentPage:1,totalCountOfMessages:0,totalCountOfRedMessages:0,recordsLengthPerPage:50,isPromptOpened:!1,message:{index:!1,title:"",date:"",content:""}}},created:function(){this.$store.commit("setPage",{pageTitle:this.$labels.accountMessagesList,className:"page-account-messages-list"}),this.fetchMessages()},methods:{switchMessage:function(e){this.currentPage=1,this.showRedMessages=e,this.selectedMessages=[],this.selectedRedMessages=[],this.fetchMessages()},fetchMessages:function(e){var s=this;if(/^\d+$/.test(e)||(e=this.currentPage),!(e>this.totalPages))return this.currentPage=e,this.$store.dispatch("uFetchMessages",{currentPage:this.currentPage,recordsLengthPerPage:this.recordsLengthPerPage,status:this.showRedMessages}).then(function(e){if(void 0===e.List)115!=e.S&&s.$message({message:e.S+": "+e.D,type:"warning"});else{var t=[],a=void 0;e.List.forEach(function(e){a={id:e.Id,title:e.Title,date:e.Date,description:e.Content||"",red:s.showRedMessages},t.push(a)}),0===s.showRedMessages?s.messages=t:1===s.showRedMessages&&(s.redMessages=t),s.currentPage=e.NowPage,0===s.showRedMessages?s.totalCountOfMessages=e.TotalCount:1===s.showRedMessages&&(s.totalCountOfRedMessages=e.TotalCount),s.totalPages=e.TotalPage}}).catch(function(e){console.log(e),s.$message({message:"获取消息列表出错啦！",type:"error",force:!0})})},fetchMessageDetail:function(e,s){var t=this;return this.$store.dispatch("uFetchMessageDetail",{id:e}).then(function(e){e.S?t.$message({message:e.S+": "+e.D,type:"warning"}):(t.message.index=s,t.message.title=e.Title,t.message.content=e.Content,t.message.date=e.Add_Date,0===t.showRedMessages&&(t.messages[s].red=1))}).catch(function(e){console.log(e),t.$message({message:"查看消息详情出错啦！",type:"error",force:!0})})},fetchUnredMessagesLength:function(){return this.$store.dispatch("uFetchUnredMessagesLength",{vm:this})},openPrompt:function(e,s){this.fetchMessageDetail(e,s),this.isPromptOpened=!0},closePrompt:function(){this.isPromptOpened=!1,this.message.title="",this.message.date="",this.message.content="",this.showRedMessages||(this.fetchMessages(),this.fetchUnredMessagesLength())},selectAllMessages:function(){var e=this.showRedMessages?this.redMessages:this.messages,s=[];e.forEach(function(e){s.push(e.id)}),this.showRedMessages?this.selectedRedMessages=s:this.selectedMessages=s},cancelSelectMessages:function(){this.showRedMessages?this.selectedRedMessages=[]:this.selectedMessages=[]},deleteMessage:function(e){var s=this;"object"===(void 0===e?"undefined":n()(e))&&(0===this.showRedMessages?e=this.selectedMessages:1===this.showRedMessages&&(e=this.selectedRedMessages),e=e.join(",")),o.apiDeleteMessage({i:e}).then(function(e){return e.json()}).then(function(e){"796"===e.S?(s.$message({message:"删除成功！",type:"success"}),s.selectedMessages=[],s.selectedRedMessages=[],s.fetchMessages(),s.fetchUnredMessagesLength()):s.$message({message:e.S+": "+e.D,type:"warning"})}).catch(function(e){console.log(e),s.$message({message:"删除消息出错啦！",type:"error",force:!0})})},setRedForSelected:function(){var e=this;0!==this.selectedMessages.length&&o.apiSetStatusOfMessageRed({i:this.selectedMessages.join(",")}).then(function(e){return e.json()}).then(function(s){"795"===s.S?(e.$message({message:"标记已读成功！",type:"success"}),e.selectedMessages=[],e.selectedRedMessages=[],e.fetchMessages(),e.fetchUnredMessagesLength()):e.$message({message:s.S+": "+s.D,type:"warning"})}).catch(function(s){console.log(s),e.$message({message:"删除消息出错啦！",type:"error",force:!0})})}}}},790:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(1059),n=t.n(a);s.default={mixins:[n.a]}},847:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(986),n=t.n(a),o=t(406),c=t.n(o),i=t(407),r=t.n(i);s.default={extends:n.a,data:function(){return{selectAll:!1,recordsLengthPerPage:15}},methods:{switchMessageEx:function(e){this.selectAll=!1,this.switchMessage(e)},deleteMessageEx:function(e){this.warnNoneSelected()||this.deleteMessage(e)},setRedForSelectedEx:function(){this.warnNoneSelected()||this.setRedForSelected()},warnNoneSelected:function(){return!!(!this.showRedMessages&&0===this.selectedMessages.length||this.showRedMessages&&0===this.selectedRedMessages.length)&&(this.$message({message:"至少选择一条消息",type:"warning"}),!0)}},watch:{selectAll:function(e){e?this.selectAllMessages():this.cancelSelectMessages()}},components:{modAccountMain:c.a,modAccountSubNavPublic:r.a}}},986:function(e,s,t){var a=t(0)(t(724),t(1198),null,null);e.exports=a.exports}});