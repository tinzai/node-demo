webpackJsonp([41],{382:function(a,o,t){var s=t(0)(t(743),t(940),null,null);a.exports=s.exports},743:function(a,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});t(6);o.default={name:"PageDownloadApp",data:function(){return{download:{android:null,ios:null,yb_appurl:null,title:"",content:"",iosUrl:"",iosText:"",iosIcon:""},ifShowOverlay:!1}},created:function(){this.init()},computed:{appSetting:function(){return this.$store.state.appSetting},canShowOverlay:function(){var a=window.navigator.userAgent.toLowerCase();return!("ios"===this.$store.state.device&&/safari/.test(a)&&/webkit/.test(a)&&!/crios/.test(a))&&!!this.download.ios},appLogo:function(){return this.$store.state.appDownloadLogo||"/static/images/download-app-logo.png?v=1.1"},siteName:function(){return this.$store.state.siteName}},methods:{init:function(){this.$store.commit("setPage",{pageTitle:"App下载",className:"download-app"}),this.fetchAppSetting()},fetchAppSetting:function(){var a=this;return this.$store.dispatch("fetchAppSetting").then(function(o){void 0!==o.S?a.$message({message:o.S+":"+o.D}):(o.A&&(a.download.android=o.A),o.I&&(a.download.ios=o.I),o.yb_appurl&&(a.download.yb_appurl=o.yb_appurl),a.download.title=o.DID,a.download.content=o.DMD,a.download.iosUrl=o.APPSTOREURL,a.download.iosText=o.IOSICOTXT,a.download.iosIcon=o.IOSICOURL)})},showOverlay:function(){this.ifShowOverlay=this.canShowOverlay}}}},940:function(a,o){a.exports={render:function(){var a=this,o=a.$createElement,t=a._self._c||o;return t("main",{staticClass:"kd-body"},[t("router-link",{staticClass:"download-app-link",attrs:{to:{name:"Home"}}},[a._v("返回")]),a._v(" "),t("div",{staticClass:"download-app-section"},[t("div",{staticClass:"download-app-logo"},[t("img",{attrs:{src:a.appLogo,alt:"logo"}}),a._v(" "),t("div",{staticClass:"download-app-logo__title",domProps:{innerHTML:a._s(a.download.title)}},[a._v("免费送28元")])]),a._v(" "),t("h1",{staticClass:"download-app-title"},[a._v(a._s(a.siteName))]),a._v(" "),t("div",{staticClass:"download-app-text",domProps:{innerHTML:a._s(a.download.content)}},[a._v("手机下载APP并成功注册新用户"),t("strong",[a._v("即送28元")])]),a._v(" "),a.download.iosUrl?t("p",[t("a",{staticClass:"download-app-btn download-app-btn--ios",attrs:{href:a.download.iosUrl}},[a.download.iosIcon?t("img",{staticClass:"download-app-btn__img",attrs:{src:a.download.iosIcon}}):a._e(),a._v(" "),t("strong",{staticClass:"download-app-btn__iostext"},[a._v(a._s(a.download.iosText))]),a._v(" "),t("span",{staticClass:"download-app-btn__text"},[a._v("iPhone(app store官方下载)")])])]):a._e(),a._v(" "),!a.download.iosUrl||a.download.ios?t("p",[t("a",{staticClass:"download-app-btn",attrs:{href:a.canShowOverlay?null:a.download.ios},on:{click:a.showOverlay}},[t("i",{staticClass:"icon icon-apple"}),a._v("iPhone下载"),a.download.ios?a._e():t("span",{staticClass:"coming-soon"},[a._v("即将上线")])])]):a._e(),a._v(" "),t("p",[t("a",{staticClass:"download-app-btn download-app-btn--android",attrs:{href:a.download.android}},[t("i",{staticClass:"icon icon-android"}),a._v("Android下载"),a.download.android?a._e():t("span",{staticClass:"coming-soon"},[a._v("即将上线")])])]),a._v(" "),a.download.yb_appurl?t("p",[t("a",{staticClass:"download-app-btn download-app-btn--android",attrs:{href:a.download.yb_appurl}},[t("i",{staticClass:"icon icon-yuanbao"}),a._v("缘宝APP下载"),a.download.yb_appurl?a._e():t("span",{staticClass:"coming-soon"},[a._v("即将上线")])])]):a._e()]),a._v(" "),a.ifShowOverlay?t("div",{staticClass:"download-app-overlay"},[a._m(0),t("p"),t("p",[a._v("请复制该地址，回到桌面")]),a._v(" "),t("p",[a._v("在自带浏览器 Safari 中， 粘贴打开")]),a._v(" "),a._m(1)]):a._e()],1)},staticRenderFns:[function(){var a=this,o=a.$createElement,t=a._self._c||o;return t("p",{staticClass:"download-app-overlay__arrow"},[t("img",{attrs:{src:"/static/images/download-app-arrow.png"}})])},function(){var a=this,o=a.$createElement,t=a._self._c||o;return t("div",{staticClass:"download-app-overlay__safari"},[t("p",{staticClass:"download-app-overlay__safari-img"},[t("img",{attrs:{src:"/static/images/download-app-safari.png"}})]),a._v(" "),t("p",{staticClass:"download-app-overlay__safari-text"},[a._v("Safari")])])}]}}});