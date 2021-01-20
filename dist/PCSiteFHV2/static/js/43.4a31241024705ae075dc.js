webpackJsonp([43],{349:function(a,t,o){var s=o(0)(o(577),o(633),null,null);a.exports=s.exports},572:function(a,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(7);t.default={name:"PageDownloadApp",data:function(){return{download:{android:null,ios:null,yb_appurl:null,title:"",content:"",iosUrl:"",iosText:"",iosIcon:""},ifShowOverlay:!1}},created:function(){this.init()},computed:{appSetting:function(){return this.$store.state.appSetting},canShowOverlay:function(){var a=window.navigator.userAgent.toLowerCase();return!("ios"===this.$store.state.device&&/safari/.test(a)&&/webkit/.test(a)&&!/crios/.test(a))&&!!this.download.ios},appLogo:function(){return this.$store.state.appDownloadLogo||"/static/images/download-app-logo.png?v=1.1"},siteName:function(){return this.$store.state.siteName}},methods:{init:function(){this.$store.commit("setPage",{pageTitle:"App下载",className:"download-app"}),this.fetchAppSetting()},fetchAppSetting:function(){var a=this;return this.$store.dispatch("fetchAppSetting").then(function(t){void 0!==t.S?a.$message({message:t.S+":"+t.D}):(t.A&&(a.download.android=t.A),t.I&&(a.download.ios=t.I),t.yb_appurl&&(a.download.yb_appurl=t.yb_appurl),a.download.title=t.DID,a.download.content=t.DMD,a.download.iosUrl=t.APPSTOREURL,a.download.iosText=t.IOSICOTXT,a.download.iosIcon=t.IOSICOURL)})},showOverlay:function(){this.ifShowOverlay=this.canShowOverlay}}}},577:function(a,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(623),n=o.n(s);t.default={extends:n.a,computed:{mobileurl:function(){var a=this.$store.state.appSetting.mobileurl;return a&&(a=a.replace(/^http[s]?:\/\//i,"")),a}}}},582:function(a,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(616),n=o.n(s);t.default={name:"PageDownloadApp",extends:n.a,data:function(){return{visibleMobileBtn:!1}},computed:{contactWay:function(){return this.$store.state.appSetting},qrcode:function(){var a="";return a=this.appSetting.mobileurl?this.appSetting.mobileurl:window.location.protocol+"//"+window.location.host+"/m.html#/index?m=1&dl=1","base/url_qr.ashx?url="+encodeURIComponent(a)},mobileurl:function(){if(this.visibleMobileBtn){var a=this.$store.state.mobileurl;if(a){~a.indexOf("#")||(a+="#/"),a+="?m=1";var t=this.$route.query.p||this.$route.query.P;t&&(a+="&p="+t)}return a}}}}},616:function(a,t,o){var s=o(0)(o(572),o(642),null,null);a.exports=s.exports},623:function(a,t,o){var s=o(0)(o(582),o(641),null,null);a.exports=s.exports},633:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("main",{staticClass:"kd-body"},[o("div",{staticClass:"container-lg download-app-container"},[o("div",{staticClass:"download-app-section"},[o("div",{staticClass:"download-app__main clearfix"},[o("div",{staticClass:"download-app-qrcode"},[o("img",{staticClass:"download-app-qrcode-img",attrs:{src:a.qrcode,alt:"二维码"}}),a._v(" "),o("p",[a._v("手机浏览器扫码下载")])]),a._v(" "),o("div",{staticClass:"download-app-buttons"},[a.download.iosUrl?o("div",{staticClass:"download-app-btn"},[o("a",{attrs:{href:a.download.iosUrl,target:"_blank"}},[o("i",{staticClass:"icon icon-apple"}),a._v(" "),o("p",{staticClass:"download-app-text"},[a._v("iPhone下载")])])]):a.download.ios?o("div",{staticClass:"download-app-btn"},[o("a",{attrs:{href:a.download.ios,target:"_blank"}},[o("i",{staticClass:"icon icon-apple"}),a._v(" "),o("p",{staticClass:"download-app-text"},[a._v("iPhone下载")])])]):a._e(),a._v(" "),a.download.android?o("div",{staticClass:"download-app-btn download-app-android"},[o("a",{attrs:{href:a.download.android,target:"_blank"}},[o("i",{staticClass:"icon icon-android"}),a._v(" "),o("p",{staticClass:"download-app-text"},[a._v("Android下载")])])]):a._e(),a._v(" "),a.download.yb_appurl?o("div",{staticClass:"download-app-btn download-app-yb_appurl"},[o("a",{attrs:{href:a.download.yb_appurl,target:"_blank"}},[o("i",{staticClass:"icon icon-yuanbao"}),a._v(" "),o("p",{staticClass:"download-app-text"},[a._v("缘宝APP下载")])])]):a._e()])]),a._v(" "),a.mobileurl?o("div",{staticClass:"download-app__intro"},[a._v("\n                用手机浏览器访问："),o("span",{staticClass:"download-app__domain"},[a._v(a._s(a.mobileurl))])]):a._e()])])])},staticRenderFns:[]}},641:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("main",{staticClass:"kd-body"},[o("div",{staticClass:"container-lg download-app-container"},[o("div",{staticClass:"download-app-section"},[o("div",{staticClass:"download-app-qrcode"},[o("img",{staticClass:"download-app-qrcode-img",attrs:{src:a.qrcode,alt:"二维码"}}),a._v(" "),o("p",[a._v("手机浏览器扫码下载")])]),a._v(" "),o("div",{staticClass:"download-app-buttons"},[a.download.iosUrl?o("div",{staticClass:"download-app-btn"},[o("a",{attrs:{href:a.download.iosUrl,target:"_blank"}},[o("i",{staticClass:"icon icon-apple"}),a._v(" "),a._m(0)])]):a.download.ios?o("div",{staticClass:"download-app-btn"},[o("a",{attrs:{href:a.download.ios,target:"_blank"}},[o("i",{staticClass:"icon icon-apple"}),a._v(" "),a._m(1)])]):a._e(),a._v(" "),a.download.android?o("div",{staticClass:"download-app-btn download-app-android"},[o("a",{attrs:{href:a.download.android,target:"_blank"}},[o("i",{staticClass:"icon icon-android"}),a._v(" "),a._m(2)])]):a._e(),a._v(" "),a.mobileurl?o("div",{staticClass:"download-app-btn download-app-mobile"},[o("a",{attrs:{href:a.mobileurl}},[o("i",{staticClass:"icon icon-mobile"}),a._v(" "),a._m(3)])]):a._e()])])])])},staticRenderFns:[function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("p",{staticClass:"download-app-text"},[o("span",{staticClass:"download-btn-title"},[a._v("iPhone版")]),a._v("App store下载")])},function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("p",{staticClass:"download-app-text"},[o("span",{staticClass:"download-btn-title"},[a._v("iPhone版")]),a._v("App store下载")])},function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("p",{staticClass:"download-app-text"},[o("span",{staticClass:"download-btn-title"},[a._v("Android版")]),a._v("APK下载")])},function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("p",{staticClass:"download-app-text"},[o("span",{staticClass:"download-btn-title"},[a._v("访问手机版")])])}]}},642:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("main",{staticClass:"kd-body"},[o("router-link",{staticClass:"download-app-link",attrs:{to:{name:"Home"}}},[a._v("返回")]),a._v(" "),o("div",{staticClass:"download-app-section"},[o("div",{staticClass:"download-app-logo"},[o("img",{attrs:{src:a.appLogo,alt:"logo"}}),a._v(" "),o("div",{staticClass:"download-app-logo__title",domProps:{innerHTML:a._s(a.download.title)}},[a._v("免费送28元")])]),a._v(" "),o("h1",{staticClass:"download-app-title"},[a._v(a._s(a.siteName))]),a._v(" "),o("div",{staticClass:"download-app-text",domProps:{innerHTML:a._s(a.download.content)}},[a._v("手机下载APP并成功注册新用户"),o("strong",[a._v("即送28元")])]),a._v(" "),a.download.iosUrl?o("p",[o("a",{staticClass:"download-app-btn download-app-btn--ios",attrs:{href:a.download.iosUrl}},[a.download.iosIcon?o("img",{staticClass:"download-app-btn__img",attrs:{src:a.download.iosIcon}}):a._e(),a._v(" "),o("strong",{staticClass:"download-app-btn__iostext"},[a._v(a._s(a.download.iosText))]),a._v(" "),o("span",{staticClass:"download-app-btn__text"},[a._v("iPhone(app store官方下载)")])])]):a._e(),a._v(" "),!a.download.iosUrl||a.download.ios?o("p",[o("a",{staticClass:"download-app-btn",attrs:{href:a.canShowOverlay?null:a.download.ios},on:{click:a.showOverlay}},[o("i",{staticClass:"icon icon-apple"}),a._v("iPhone下载"),a.download.ios?a._e():o("span",{staticClass:"coming-soon"},[a._v("即将上线")])])]):a._e(),a._v(" "),o("p",[o("a",{staticClass:"download-app-btn download-app-btn--android",attrs:{href:a.download.android}},[o("i",{staticClass:"icon icon-android"}),a._v("Android下载"),a.download.android?a._e():o("span",{staticClass:"coming-soon"},[a._v("即将上线")])])])]),a._v(" "),a.ifShowOverlay?o("div",{staticClass:"download-app-overlay"},[a._m(0),o("p"),o("p",[a._v("请复制该地址，回到桌面")]),a._v(" "),o("p",[a._v("在自带浏览器 Safari 中， 粘贴打开")]),a._v(" "),a._m(1)]):a._e()],1)},staticRenderFns:[function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("p",{staticClass:"download-app-overlay__arrow"},[o("img",{attrs:{src:"/static/images/download-app-arrow.png"}})])},function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"download-app-overlay__safari"},[o("p",{staticClass:"download-app-overlay__safari-img"},[o("img",{attrs:{src:"/static/images/download-app-safari.png"}})]),a._v(" "),o("p",{staticClass:"download-app-overlay__safari-text"},[a._v("Safari")])])}]}}});