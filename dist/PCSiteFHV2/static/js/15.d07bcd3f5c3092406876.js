webpackJsonp([15],{1077:function(t,e,a){a(899);var s=a(0)(a(866),a(1180),null,null);t.exports=s.exports},1180:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"kd-body container-lg account__main game-record"},[a("mod-account-main",[a("div",{staticClass:"account__sidebar"},[a("mod-account-sub-nav-public")],1),t._v(" "),a("div",{staticClass:"account__body"},[a("div",{staticClass:"account__body-title"},[t._v("开奖记录")]),t._v(" "),a("div",{staticClass:"account__body-content"},[a("ul",{staticClass:"nostyle account-nav"},t._l(t.games,function(e){return a("li",{staticClass:"account-nav__game",class:{active:e.gameId===t.gameId}},[a("router-link",{attrs:{to:"/game-record/"+e.gameId}},[t._v(t._s(t.changeGameName(e.gameName)))])],1)}),0),t._v(" "),a("div",{staticClass:"account__content-table"},[a("mod-account-sub-nav-money-record",{staticClass:"account-nav-title"},[a("li",{staticClass:"account__search"},[a("div",{staticClass:"kd-field"},[a("label",{staticClass:"kd-field-title"},[t._v("起始时间")]),t._v(" "),a("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.startDateFilter,expression:"startDateFilter"},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"date"},domProps:{value:t.startDateFilter},on:{input:function(e){e.target.composing||(t.startDateFilter=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"kd-field"},[a("label",{staticClass:"kd-field-title"},[t._v("截止时间")]),t._v(" "),a("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.endDateFilter,expression:"endDateFilter"},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"date"},domProps:{value:t.endDateFilter},on:{input:function(e){e.target.composing||(t.endDateFilter=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"kd-field"},[a("label",{staticClass:"kd-field-title"},[t._v("期号")]),t._v(" "),a("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[a("input",{directives:[{name:"model",rawName:"v-model.trim.number",value:t.number,expression:"number",modifiers:{trim:!0,number:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"number"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=t._n(e.target.value.trim()))},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),a("kd-button",{on:{click:t.filterList}},[a("span",[t._v("确定")])])],1)]),t._v(" "),a("table",{staticClass:"account__table playing-record-list"},[a("thead",[a("tr",[a("th",{staticStyle:{width:"20%"}},[t._v("期号")]),t._v(" "),a("th",{staticStyle:{width:"20%"}},[t._v("开奖日期")]),t._v(" "),a("th",[t._v("开奖结果")])])]),t._v(" "),a("tbody",[0===t.list.length?a("tr",[a("td",{attrs:{colspan:"3"}},[t._v(t._s(t.loading?"正在加载数据":"没有数据!"))])]):t._l(t.list,function(e){return a("tr",[a("td",[t._v(t._s(e.number))]),t._v(" "),a("td",[t._v(t._s(e.date))]),t._v(" "),2==e.isSettlement?a("td",[t._v("官方异常")]):a("td",[t.is_baccarat?a("ul",{staticClass:"nostyle item-body balls"},[t._l(e.balls,function(s,n){return[1===n?a("li",{staticStyle:{"margin-left":"10px"}}):t._e(),t._v(" "),a("li",[a("span",{staticClass:"lottery-ball-title"},[t._v(t._s(0===n?"庄":"闲"))])]),t._v(" "),t._l(s,function(s,i){return a("li",[a("span",{staticClass:"lottery-ball",class:[t.gameId,"group-"+(0===n?"bank":"player"),e.suits[n][i]]},[t._v(t._s(s))])])})]})],2):t.is_longhu?a("ul",{staticClass:"nostyle item-body balls"},[a("li",[a("span",{staticClass:"lottery-ball-title"},[t._v("龙")])]),t._v(" "),a("li",[a("span",{staticClass:"lottery-ball dragon",class:[t.gameId,e.suits[0]]},[t._v(t._s(e.balls[0]))])]),t._v(" "),a("li",[a("span",{staticClass:"lottery-ball-title"},[t._v("虎")])]),t._v(" "),a("li",[a("span",{staticClass:"lottery-ball tiger",class:[t.gameId,e.suits[1]]},[t._v(t._s(e.balls[1]))])])]):t.is_jinhua?a("ul",{staticClass:"nostyle item-body balls"},[t._l(e.balls,function(s,n){return[1===n?a("li",{staticStyle:{"margin-left":"10px"}}):t._e(),t._v(" "),a("li",[a("span",{staticClass:"lottery-ball-title"},[t._v(t._s(0===n?"龙":"凤"))])]),t._v(" "),t._l(s,function(s,i){return a("li",[a("span",{staticClass:"lottery-ball",class:[t.gameId,"group-"+(0===n?"bank":"player"),e.suits[n][i]]},[t._v(t._s(s))])])})]})],2):t.is_six?a("ul",{staticClass:"nostyle item-body balls"},[t._l(e.balls,function(s,n){return[6===n?a("li",[a("span",{staticClass:"lottery-plus",class:t.gameType})]):t._e(),a("li",[a("span",{staticClass:"lottery-ball",class:["marksix solid",e.colors?t.colors[e.colors[n]-1]:""]},[t._v(t._s(s))]),e.zodiac?[a("br"),a("span",{staticClass:"lottery-prop"},[t._v(t._s(e.zodiac[n]))])]:t._e()],2)]})],2):t.is_car||t.is_farm||t.is_kuai3?a("ul",{staticClass:"nostyle item-body balls"},t._l(e.balls,function(e,s){return a("li",[a("span",{staticClass:"lottery-ball",class:[t.gameClass,"solid","ball"+parseInt(e,10)]},[t._v(t._s(e))])])}),0):a("ul",{staticClass:"nostyle item-body balls"},[t._l(e.balls,function(e,s){return[a("li",[a("span",{staticClass:"lottery-ball",class:["cqssc solid"]},[t._v(t._s(e))])])]})],2),t._v(" "),t.is_six?a("p",[t._v("\n                                    特码："+t._s(t.getSpecialMark(e.balls[6]))+"\n                                ")]):t._e(),t._v(" "),t.is_ssc||t.isFssc?a("p",[t._v("\n                                    龙虎："+t._s(t.getDragonAndTiger(e.balls[0],e.balls[4]))+"\n                                ")]):t._e(),t._v(" "),t.is_car?a("p",[t._v("\n                                    冠亚和值："+t._s(t.computeAndValue([e.balls[0],e.balls[1]]))+"\n                                ")]):t.is_baccarat||t.is_longhu||t.is_jinhua?t._e():a("p",[t._v("\n                                    "+t._s(t.is_six?"总和":"和值")+"："+t._s(t.computeAndValue(e.balls))+"\n                                ")])])])})],2)]),t._v(" "),t.list.length>0?a("kd-pager",{attrs:{currentPage:t.currentPage,totalPages:t.totalPages},on:{toPage:t.fetchList}}):t._e()],1)])])])],1)},staticRenderFns:[]}},389:function(t,e,a){var s=a(0)(a(805),null,null,null);t.exports=s.exports},397:function(t,e,a){var s=a(0)(a(398),a(399),null,null);t.exports=s.exports},398:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ComAccountNav"}},399:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{staticClass:"nostyle account-nav account-sub-nav kd-row-middle"},[t._t("default")],2)},staticRenderFns:[]}},400:function(t,e,a){var s=a(0)(a(401),a(410),null,null);t.exports=s.exports},401:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(24),n=a.n(s),i=a(42),r=a(397),l=a.n(r);e.default={name:"ComAccountSubNavMoneyInOut",computed:n()({},a.i(i.a)({userType:function(t){return t.user.userType},isUserLogined:function(t){return t.user.isUserLogined}}),{isMoneyOut:function(){return"AccountMoneyOut"===this.$route.name}}),methods:{goToMoneOut:function(){if(2===this.userType)return void this.$message({message:"该会员暂时不支持提现！",type:"warning"});this.$router.push({name:"AccountMoneyOut"})}},components:{modAccountSubNav:l.a}}},402:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ComAccountBody"}},403:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(24),n=a.n(s),i=a(400),r=a.n(i),l=a(42),o=a(68);e.default={extends:r.a,data:function(){return{showedAccountPrizes:!0}},computed:n()({},a.i(l.a)(["ifShowRechargeDraw","ifShowShowLiCai","ifShowTransfer","ifShowBbin","ifShowQP","hgtyStatus","sbtyStatus"]),{hasTransfer:function(){return(this.ifShowTransfer||this.ifShowBbin||this.ifShowQP||this.hgtyStatus||this.sbtyStatus)&&1==this.userType},zxsfstatus:function(){return this.$store.state.zxsfstatus},zxsfName:function(){return this.$store.state.zxsfName},gameRecordLink:function(){var t="c";for(var e in o.a.instance.modules){t=o.a.instance.modules[e].gameId;break}return"/game-record/"+t}}),methods:{goPromotion:function(){2==this.userType?this.$message({message:"只有正式会员才能进行代理推广"}):this.$router.push({name:"AccountPromotion"})}}}},404:function(t,e){},405:function(t,e){},406:function(t,e,a){a(404);var s=a(0)(a(402),a(408),"data-v-4275a0c0",null);t.exports=s.exports},407:function(t,e,a){a(405);var s=a(0)(a(403),a(409),"data-v-797fef6f",null);t.exports=s.exports},408:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"account__main"},[t._t("default")],2)},staticRenderFns:[]}},409:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nostyle account-nav account-sub-nav kd-row-middle"},[a("ul",{staticClass:"account-nav-item account-nav-money-in-company"},[a("h3",{staticClass:"account-nav-icon icon-money-in-company"},[t._v("个人钱包")]),t._v(" "),t.zxsfstatus?a("router-link",{attrs:{to:{path:"/account/money-in-company-zxsf",query:{chargeType:"xrsf"}},tag:"li"}},[a("a",[t._v(t._s(t.zxsfName))])]):t._e(),t._v(" "),a("router-link",{attrs:{to:"/account/money-in",tag:"li"}},[a("a",[t._v("在线充值")])]),t._v(" "),a("router-link",{attrs:{to:"/account/money-in-company",tag:"li"}},[a("a",[t._v("公司入款")])]),t._v(" "),a("li",[a("a",{on:{click:t.goToMoneOut}},[t._v("线上出款")])]),t._v(" "),a("router-link",{attrs:{to:"/account/record-of-money-in",tag:"li"}},[a("a",[t._v("交易记录")])]),t._v(" "),t.showedAccountPrizes?a("router-link",{attrs:{to:"/account/prizes",tag:"li"}},[a("a",[t._v("抽奖记录")])]):t._e(),t._v(" "),t.hasTransfer?a("router-link",{attrs:{to:"/account/transfer-money",tag:"li"}},[a("a",[t._v("额度转换")])]):t._e(),t._v(" "),t.hasTransfer?a("router-link",{attrs:{to:"/account/money-collection",tag:"li"}},[a("a",[t._v("资金归集")])]):t._e()],1),t._v(" "),a("ul",{staticClass:"account-nav-item account-nav-record-of-playing"},[a("h3",{staticClass:"account-nav-icon icon-record-of-playing"},[t._v("我的购彩")]),t._v(" "),a("router-link",{attrs:{to:"/account/record-of-playing",tag:"li"}},[a("a",[t._v("投注记录")])]),t._v(" "),a("router-link",{attrs:{to:t.gameRecordLink,tag:"li"}},[a("a",[t._v("开奖记录")])])],1),t._v(" "),a("ul",{staticClass:"account-nav-item account-nav-edit-profile"},[a("h3",{staticClass:"account-nav-icon icon-edit-profile"},[t._v("账户设置")]),t._v(" "),a("router-link",{attrs:{to:"/account/edit-profile",tag:"li"}},[a("a",[t._v("基本信息")])]),t._v(" "),a("router-link",{attrs:{to:"/account/bank-info",tag:"li"}},[a("a",[t._v("提款卡绑定")])]),t._v(" "),a("router-link",{attrs:{to:"/account/setting",tag:"li"}},[a("a",[t._v("基本设置")])])],1),t._v(" "),a("ul",{staticClass:"account-nav-item account-nav-liquidity-of-balance-sheet"},[a("h3",{staticClass:"account-nav-icon icon-liquidity-of-balance-sheet"},[t._v("账户清单")]),t._v(" "),a("router-link",{attrs:{to:"/account/liquidity-of-balance-sheet",tag:"li"}},[a("a",[t._v("账户清单")])])],1),t._v(" "),a("ul",{staticClass:"account-nav-item account-nav-promotion"},[a("h3",{staticClass:"account-nav-icon icon-promotion"},[t._v("代理推广")]),t._v(" "),a("router-link",{attrs:{to:"/account/promotion",tag:"li"}},[a("a",[t._v("代理推广")])]),t._v(" "),a("router-link",{attrs:{to:"/account/my-downline-members",tag:"li"}},[a("a",[t._v("推广用户")])]),t._v(" "),a("router-link",{attrs:{to:{name:"AccountDownlineRecords"},tag:"li"}},[a("a",[t._v("代理报表")])]),t._v(" "),a("router-link",{attrs:{to:{name:"AccountDownlineList"},tag:"li"}},[a("a",[t._v("代理管理")])])],1),t._v(" "),a("ul",{staticClass:"account-nav-item account-nav-messages"},[a("h3",{staticClass:"account-nav-icon icon-messages"},[t._v("消息中心")]),t._v(" "),a("router-link",{attrs:{to:"/account/messages",tag:"li"}},[a("a",[t._v("消息中心")])])],1)])},staticRenderFns:[]}},410:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mod-account-sub-nav",{staticClass:"account-sub-nav--money"},[a("router-link",{attrs:{to:"/account/money-in",tag:"li"}},[a("a",[t._v("在线充值")])]),t._v(" "),a("router-link",{attrs:{to:"/account/money-in-company",tag:"li"}},[a("a",[t._v("公司入款")])]),t._v(" "),a("li",{class:{active:t.isMoneyOut}},[a("a",{on:{click:t.goToMoneOut}},[t._v("线上出款")])]),t._v(" "),a("router-link",{attrs:{to:"/account/record-of-money-in",tag:"li"}},[a("a",[t._v("交易记录")])])],1)},staticRenderFns:[]}},412:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(397),n=a.n(s);e.default={name:"ComAccountSubNavMoneyRecord",components:{modAccountSubNav:n.a}}},417:function(t,e,a){var s=a(0)(a(412),a(423),null,null);t.exports=s.exports},423:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mod-account-sub-nav",{staticClass:"for-money-record"},[a("router-link",{attrs:{to:"/account/record-of-money-in",tag:"li"}},[a("a",[t._v(t._s(t.$labels.accountRecordOfMoneyIn))])]),t._v(" "),a("router-link",{attrs:{to:"/account/record-of-money-out",tag:"li"}},[a("a",[t._v(t._s(t.$labels.accountRecordOfMoneyOut))])]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},437:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(397),n=a.n(s),i=a(68);e.default={name:"AccountSubNavLottery",components:{modAccountSubNav:n.a},computed:{isGameRecord:function(){return"GameRecord"===this.$route.name},gameRecordLink:function(){var t="c";for(var e in i.a.instance.modules){t=i.a.instance.modules[e].gameId;break}return"/game-record/"+t}}}},440:function(t,e,a){var s=a(0)(a(437),a(444),null,null);t.exports=s.exports},444:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mod-account-sub-nav",[a("router-link",{attrs:{to:"/account/record-of-playing",tag:"li"}},[a("a",[t._v("投注记录")])]),t._v(" "),a("router-link",{class:{active:t.isGameRecord},attrs:{to:t.gameRecordLink,tag:"li"}},[a("a",[t._v("开奖记录")])])],1)},staticRenderFns:[]}},450:function(t,e,a){var s=a(0)(a(461),a(540),null,null);t.exports=s.exports},461:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(35),n=a.n(s),i=a(69),r=a(43),l=a(67);e.default={name:"PageGameRecord",mixins:[l.a],computed:{gameName:function(){var t=this,e=this.$store.state.CustomizeNames.find(function(e){return e.GameNo===t.$store.state[t.gameType].gameId});return e&&this.redefine?e.Name_Customize:this.$store.state[this.gameType].gameName.replace(/\w盘$/,"")},zodiac:function(){return!!this.is_six&&this.$store.state[this.gameType].zodiac},andValueLarge:function(){return!!this.game&&this.game.andValueLarge},andValueMiddle:function(){return this.game?this.game.andValueMiddle:0}},data:function(){return{startDate:"",endDate:"",startDateFilter:a.i(i.c)("","Y-M-D"),endDateFilter:a.i(i.c)("","Y-M-D"),number:"",currentPage:1,totalPages:1,totalCount:0,recordsLengthPerPage:20,list:[],colors:["red","blue","green"],cardNames:{1:"A",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K"},suits:{S:"spade",H:"heart",D:"diamond",C:"club"},isOpenedFilterPrompt:!1,loading:!0,redefine:!0}},created:function(){"GameRecord"===this.$route.name&&this.$store.commit("setPage",{pageTitle:"开奖记录",className:"page-game-record"}),this.fetchList(1)},watch:{$route:function(){this.startDate="",this.endDate="",this.number="",this.fetchList(1)}},methods:{fetchRecords:function(t){var e=this;return this.loading=!0,this.$store.dispatch(this.gameType+"FetchRecords",t).then(function(a){if(void 0===a.List)e.$message({message:a.S+": "+a.D,type:"warning"});else{var s=[],i=void 0;a.List.forEach(function(t){if(i={number:t.Numbers,date:t.Date,isSettlement:t.Is_settlement,balls:[]},"gbaccarat"===e.gameType||"gjinhua"===e.gameType){var a=[];t.Results.split("|").forEach(function(t){var s=[];t.split(",").forEach(function(t){s.push(e.cardNames[t])}),a.push(s)}),i.balls=a}else"glonghu"===e.gameType?t.Results.split("|").forEach(function(t){i.balls.push(e.cardNames[t])}):i.balls=t.Results.split(",");if(e.is_six)i.zodiac=t.Results_SX.split(","),i.colors=t.Results_SB.split(","),i.elements=t.Results_WX.split(","),i.animals=t.Results_JY.split(","),i.world=t.Results_TD.split(","),i.head=t.Results_TS.split(","),i.end=t.Results_WS.split(",");else if("gbaccarat"===e.gameType||"gjinhua"===e.gameType){var n=[];t.RESULTS_SB.split("|").forEach(function(t){var a=[];t.split(",").forEach(function(t){a.push(e.suits[t])}),n.push(a)}),i.suits=n}else if("glonghu"===e.gameType){var r=[];t.RESULTS_SB.split("|").forEach(function(t){r.push(e.suits[t])}),i.suits=r}s.push(i)}),e.loading=!1,t.additional?e.list=[].concat(n()(e.list),s):e.list=s,e.currentPage=a.NowPage,e.totalCount=a.TotalCount,e.totalPages=a.TotalPage}}).catch(function(t){console.log(t),e.loading=!1,e.$message({message:"获取开奖记录出错啦！",type:"error",force:!0})})},fetchList:function(t,e){if(!(t>this.totalPages)){if(""!==this.number&&/[^\d]/.test(this.number))return void this.$message({message:"对不起，请填写正确的期号！"});var a={currentPage:t||this.currentPage,recordsLengthPerPage:this.recordsLengthPerPage,startDate:this.startDate,endDate:this.endDate,number:this.number,additional:e};this.fetchRecords(a),this.closeFilterPrompt()}},validateFields:function(){if(this.startDateFilter&&this.endDateFilter){var t=new Date(this.endDateFilter),e=["l","a","b","fc3d","tcpl3"].indexOf(this.gameId)>-1;if(e?a.i(i.e)(t,-3):t.setDate(t.getDate()-10),t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),new Date(this.startDateFilter)<t)return this.$message({message:e?"只能查询3个月范围内的记录!":"只能查询10天范围内的记录!",type:"warning"}),!1}return!0},filterList:function(){this.validateFields()&&(this.startDate=this.startDateFilter,this.endDate=this.endDateFilter,this.fetchList(1))},openFilterPrompt:function(){this.isOpenedFilterPrompt=!0},closeFilterPrompt:function(){this.isOpenedFilterPrompt=!1},getSpecialMark:function(t){var e="",s="";return e=(a.i(r.c)(t,25,49)+"").replace("large","大").replace("small","小").replace("middle","和"),s=(a.i(r.a)(t)+"").replace("odd","单").replace("even","双").replace("middle","和"),t+", "+e+", "+s},getDragonAndTiger:function(t,e){return t=parseInt(t,10),e=parseInt(e,10),!isNaN(t)&&!isNaN(e)&&(t===e?"和":t>e?"龙":"虎")},computeSumValues:function(t){var e=0,s="",n="";return t.forEach(function(t){t=parseInt(t,10),e+=isNaN(t)?0:t}),this.andValueLarge&&(s=a.i(r.c)(e,this.andValueLarge,this.andValueMiddle).replace("large","大").replace("small","小").replace("middle","和")),n=a.i(r.a)(e).replace("odd","单").replace("even","双").replace("middle","和"),{andValue:e,ls:s,oe:n}},computeAndValue:function(t){var e=this.computeSumValues(t);return e.andValue+", "+(""===e.ls?"":e.ls+", ")+e.oe},computeAndValueShort:function(t){var e=this.computeSumValues(t);return e.ls+e.oe},shortNumber:function(t){var e=""+t.number;return e.length>10?e.substr(2):e},changeGameName:function(t){return this.sfk3Bh?t.replace("十分快3","海南快3"):this.sfk3Yl?t.replace("十分快3","新疆快3"):t}}}},540:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"kd-body game-record",class:"game-record--"+t.gameClass},[a("h1",{staticClass:"page-title"},[t._v(t._s(t.changeGameName(t.gameName)))]),t._v(" "),a("div",{staticClass:"game-record-container"},[t.is_car||t.is_farm||t.is_six?a("table",{staticClass:"game-account__table game-record-short"},[a("tr",[a("th",{attrs:{width:"23%"}},[t._v("期号")]),t._v(" "),a("th",{attrs:{width:"67%"}},[t._v("开奖号码")]),t._v(" "),a("th",{attrs:{width:"10%"}},[t._v(t._s(t.is_car?"冠亚":"和值"))])]),t._v(" "),0===t.list.length?a("tr",[a("td",{attrs:{colspan:"3"}},[t._v("\n                    "+t._s(t.loading?"正在加载数据":"没有数据!")+"\n                ")])]):t._l(t.list,function(e,s){return a("tr",[a("td",{staticClass:"im-td"},[t._v(t._s(t.shortNumber(e)))]),t._v(" "),2==e.isSettlement?[a("td",[t._v("\n                            官方异常\n                        ")]),t._v(" "),a("td",[t._v("官方异常")])]:[a("td",[t.is_six?a("ul",{staticClass:"nostyle balls balls-trim"},[t._l(e.balls,function(s,n){return[6===n?a("li",[a("span",{staticClass:"lottery-plus",class:t.gameType})]):t._e(),t._v(" "),a("li",[a("span",{staticClass:"lottery-ball",class:["marksix solid",e.colors?t.colors[e.colors[n]-1]:""]},[t._v(t._s(s))]),e.zodiac?[a("br"),a("span",{staticClass:"lottery-prop"},[t._v(t._s(e.zodiac[n]))])]:t._e()],2)]})],2):a("p",{staticClass:"span-balls"},[t._l(e.balls,function(e,s){return[a("span",{staticClass:"lottery-ball",class:[t.gameClass,"solid","ball"+parseInt(e,10)]},[t._v(t._s(e))])]})],2),t._v(" "),t.is_six?a("div",{staticClass:"result-intro"},[t._v("\n                                特码："+t._s(t.getSpecialMark(e.balls[6]))+"\n                            ")]):t._e()]),t._v(" "),a("td",[t._v(t._s(t.is_car?t.computeAndValueShort([e.balls[0],e.balls[1]]):t.computeAndValueShort(e.balls)))])]],2)})],2):a("table",{staticClass:"game-account__table"},[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("期号")]),t._v(" "),a("th",{attrs:{width:"36%"}},[t._v("开奖号码")]),t._v(" "),a("th",{attrs:{width:"22%"}},[t._v("日期")]),t._v(" "),t.is_longhu||t.is_baccarat||t.is_jinhua?t._e():a("th",{attrs:{width:"17%"}},[t._v(t._s(t.is_car?"冠亚和值":"和值"))])]),t._v(" "),0===t.list.length?a("tr",[a("td",{attrs:{colspan:"4"}},[t._v("\n                    "+t._s(t.loading?"正在加载数据":"没有数据!")+"\n                ")])]):t._l(t.list,function(e,s){return a("tr",[a("td",{staticClass:"im-td"},[t._v(t._s(e.number))]),t._v(" "),2==e.isSettlement?[a("td",[t._v("\n                            官方异常\n                        ")]),t._v(" "),a("td",[t._v(t._s(e.date))]),t._v(" "),t.is_longhu||t.is_baccarat||t.is_jinhua?t._e():a("td",[t._v("官方异常")])]:[a("td",[t.is_baccarat?a("ul",{staticClass:"nostyle balls"},[t._l(e.balls,function(s,n){return[1===n?a("li",{staticClass:"ball-break"}):t._e(),t._v(" "),a("li",[a("span",{staticClass:"lottery-ball-title"},[t._v(t._s(0===n?"庄":"闲"))])]),t._v(" "),t._l(s,function(s,i){return a("li",[a("span",{staticClass:"lottery-ball",class:[t.gameId,"group-"+(0===n?"bank":"player"),e.suits[n][i]]},[t._v(t._s(s))])])}),t._v(" "),s&&s.length<3?a("li",[a("span",{staticClass:"lottery-ball",class:[t.gameId],staticStyle:{border:"none"}})]):t._e()]})],2):t.is_longhu?a("ul",{staticClass:"nostyle balls"},[t._m(0,!0),t._v(" "),a("li",[a("span",{staticClass:"lottery-ball dragon",class:[t.gameId,e.suits[0]]},[t._v(t._s(e.balls[0]))])]),t._v(" "),t._m(1,!0),t._v(" "),a("li",[a("span",{staticClass:"lottery-ball tiger",class:[t.gameId,e.suits[1]]},[t._v(t._s(e.balls[1]))])])]):t.is_jinhua?a("ul",{staticClass:"nostyle balls"},[t._l(e.balls,function(s,n){return[1===n?a("li",{staticClass:"ball-break"}):t._e(),t._v(" "),a("li",[a("span",{staticClass:"lottery-ball-title"},[t._v(t._s(0===n?"龙":"凤"))])]),t._v(" "),t._l(s,function(s,i){return a("li",[a("span",{staticClass:"lottery-ball",class:[t.gameId,"group-"+(0===n?"bank":"player"),e.suits[n][i]]},[t._v(t._s(s))])])}),t._v(" "),s&&s.length<3?a("li",[a("span",{staticClass:"lottery-ball",class:[t.gameId],staticStyle:{border:"none"}})]):t._e()]})],2):a("p",{staticClass:"span-balls"},[t._l(e.balls,function(e,s){return[t.is_kuai3?a("span",{staticClass:"lottery-ball",class:[t.gameClass,"solid","ball"+parseInt(e,10)]},[t._v(t._s(e))]):a("span",{staticClass:"lottery-ball",class:["cqssc solid"]},[t._v(t._s(e))])]})],2),t._v(" "),t.is_ssc||t.isFssc?a("div",{staticClass:"result-intro"},[t._v("\n                                龙虎："+t._s(t.getDragonAndTiger(e.balls[0],e.balls[4]))+"\n                            ")]):t._e()]),t._v(" "),a("td",[t._v(t._s(e.date))]),t._v(" "),t.is_longhu||t.is_baccarat||t.is_jinhua?t._e():a("td",[t._v(t._s(t.computeAndValue(e.balls)))])]],2)})],2)]),t._v(" "),t.list.length>0?a("kd-pager",{attrs:{currentPage:t.currentPage,totalPages:t.totalPages},on:{toPage:t.fetchList}}):t._e(),t._v(" "),a("transition",{attrs:{"enter-active-class":"animated zoom-in","leave-active-class":"animated bounce-out"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpenedFilterPrompt,expression:"isOpenedFilterPrompt"}],staticClass:"promptbox-wrapper"},[a("section",{staticClass:"promptbox filter-tool"},[a("div",{staticClass:"prompt-head"},[t._v("过滤")]),t._v(" "),a("div",{staticClass:"prompt-body kd-form"},[a("div",{staticClass:"filter-tool-body"},[a("div",{staticClass:"kd-field"},[a("label",{staticClass:"kd-field-title"},[t._v("起始时间")]),t._v(" "),a("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.startDateFilter,expression:"startDateFilter"},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"date"},domProps:{value:t.startDateFilter},on:{input:function(e){e.target.composing||(t.startDateFilter=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"kd-field"},[a("label",{staticClass:"kd-field-title"},[t._v("截止时间")]),t._v(" "),a("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.endDateFilter,expression:"endDateFilter"},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"date"},domProps:{value:t.endDateFilter},on:{input:function(e){e.target.composing||(t.endDateFilter=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"kd-field"},[a("label",{staticClass:"kd-field-title"},[t._v("期号")]),t._v(" "),a("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[a("input",{directives:[{name:"model",rawName:"v-model.trim.number",value:t.number,expression:"number",modifiers:{trim:!0,number:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"number"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=t._n(e.target.value.trim()))},blur:function(e){return t.$forceUpdate()}}})])])]),t._v(" "),a("kd-button",{on:{click:t.filterList}},[a("span",[t._v("确 定")])])],1),t._v(" "),a("a",{staticClass:"prompt-close kd-close",attrs:{href:"javascript:;"},on:{click:t.closeFilterPrompt}},[t._v("close")])]),t._v(" "),a("div",{staticClass:"promptbox-overlay"})])]),t._v(" "),a("a",{staticClass:"filter-tool-toggle",attrs:{href:"javascript:;"},on:{click:t.openFilterPrompt}},[t._v("过滤球")])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("span",{staticClass:"lottery-ball-title"},[t._v("龙")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("span",{staticClass:"lottery-ball-title"},[t._v("虎")])])}]}},805:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1077),n=a.n(s);e.default={mixins:[n.a]}},866:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(44),n=a.n(s),i=a(450),r=a.n(i),l=a(440),o=a.n(l),c=a(68),u=a(37),d=a(406),m=a.n(d),_=a(407),v=a.n(_),p=a(417),f=a.n(p);e.default={extends:r.a,data:function(){return{games:[],recordsLengthPerPage:10,GameList:[]}},methods:{setGames:function(t){var e=this,a=[];u.a.redefine?(t.forEach(function(t,e){c.a.instance.modules.hasOwnProperty("g"+t)&&a.push(c.a.instance.modules["g"+t])}),a.forEach(function(t,a){var s=e.customizeNames.find(function(e){return e.GameNo===t.gameId});s&&(t.gameName=s.Name_Customize)}),this.games=a):this.games=c.a.instance.modules},getAllGames:function(){var t=this;this.fetchGameOrders().then(function(e){var a=[],s=[];e.GroupOrderBy&&e.GroupOrderBy.forEach(function(e,s){var n=e.split("-");n.length>=2?a.find(function(t){return"彩票"===t.name})||n[0].indexOf("彩票")>-1&&a.push({name:"彩票",theme:"cp",code:"彩票",nav:[],games:[]}):1===n.length&&"六合彩"!=n[0]&&a.push({name:n[0],code:n[0],games:[],theme:t.classGroups(n[0])})}),a.forEach(function(a,n){t.gameGroups(a.code,e.GameOrderBy).forEach(function(t){-1===s.indexOf(t)&&s.push(t)})}),t.setGames(s)}).catch(function(){t.loading=!1})},gameGroups:function(t,e){var a=[];return e&&e.forEach(function(e,s){"彩票"==t?(e.GroupName.indexOf(t)>-1||e.GroupName.indexOf("六合彩")>-1)&&-1===a.indexOf(e.GameNo)&&e.Display&&a.push(e.GameNo):e.GroupName===t&&-1===a.indexOf(e.GameNo)&&e.Display&&a.push(e.GameNo)}),a},fetchGameOrders:function(){return this.gameOrders.length<=0?this.$store.dispatch("fetchGameOrders",{t:1,noloading:this.noloading}):n.a.resolve(this.gameOrders)},classGroups:function(t){switch(t){case"彩票":return"cp";case"真人视讯":return"sx";case"体育赛事":return"ty";case"棋牌游戏":return"qipai";case"PC28":return"PC28";case"电子游艺":return"dz";case"电竞":return"dj"}}},computed:{gameOrders:function(){return this.$store.state.gameOrders},customizeNames:function(){return this.$store.state.CustomizeNames}},components:{modAccountSubNavLottery:o.a,modAccountMain:m.a,modAccountSubNavPublic:v.a,modAccountSubNavMoneyRecord:f.a},created:function(){this.getAllGames()}}},899:function(t,e){}});