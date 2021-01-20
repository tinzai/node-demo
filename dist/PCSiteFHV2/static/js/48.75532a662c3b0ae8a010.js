webpackJsonp([48],{1147:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",{staticClass:"kd-body kd-body--register"},[i("form",{staticClass:"kd-form kd-container",on:{submit:function(e){e.preventDefault()}}},[i("div",{staticClass:"kd-field"},[i("label",{staticClass:"kd-field-title required",attrs:{for:"user_name_in_register"}},[e._v("用户名")]),e._v(" "),i("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.user_name,expression:"user.user_name",modifiers:{trim:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"text",id:"user_name_in_register",placeholder:"输入数字、字母，2-20个字符"},domProps:{value:e.user.user_name},on:{input:function(t){t.target.composing||e.$set(e.user,"user_name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),e.ifNeedPhoneNumber?[i("div",{staticClass:"kd-field"},[i("label",{staticClass:"kd-field-title required",attrs:{for:"mobile_in_register"}},[e._v("手机号码")]),e._v(" "),e.mobileCode.enable?i("kd-button",{staticClass:"mobile_code-btn",attrs:{disabled:e.mobileCode.countDown>0},on:{click:e.openVerifyPrompt}},[i("span",[e._v(e._s(e.mobileCode.countDown>0?e.mobileCode.countDown+"秒后重新获取验证码":"获取手机验证码"))])]):e._e(),e._v(" "),i("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput",class:{textinput_mobile:e.mobileCode.enable}},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.mobile,expression:"user.mobile",modifiers:{trim:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"text",id:"mobile_in_register",placeholder:"输入11位手机号码"},domProps:{value:e.user.mobile},on:{input:function(t){t.target.composing||e.$set(e.user,"mobile",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])],1),e._v(" "),e.mobileCode.enable?i("div",{staticClass:"kd-field"},[i("label",{staticClass:"kd-field-title required",attrs:{for:"mobile_code_in_register"}},[e._v("手机验证码")]),e._v(" "),i("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.verify_code,expression:"user.verify_code",modifiers:{trim:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"number",id:"mobile_code_in_register",placeholder:"输入验证码",maxlength:"4"},domProps:{value:e.user.verify_code},on:{input:function(t){t.target.composing||e.$set(e.user,"verify_code",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]):e._e()]:e._e(),e._v(" "),1===e.IsWriteName?i("div",{staticClass:"kd-field"},[i("label",{staticClass:"kd-field-title required",attrs:{for:"real_name_in_register"}},[e._v("姓名")]),e._v(" "),i("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.real_name,expression:"user.real_name",modifiers:{trim:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"text",id:"real_name_in_register",placeholder:"请输入您的银行账户名"},domProps:{value:e.user.real_name},on:{input:function(t){t.target.composing||e.$set(e.user,"real_name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]):e._e(),e._v(" "),e.showNickname?i("div",{staticClass:"kd-field kd-field-nickname"},[i("label",{staticClass:"kd-field-title",attrs:{for:"nickname_in_register"}},[e._v("昵称")]),e._v(" "),i("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.nickname,expression:"user.nickname",modifiers:{trim:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"text",id:"nickname_in_register",placeholder:"输入中文、英文"},domProps:{value:e.user.nickname},on:{input:function(t){t.target.composing||e.$set(e.user,"nickname",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]):e._e(),e._v(" "),i("div",{staticClass:"kd-field"},[i("label",{staticClass:"kd-field-title required",attrs:{for:"password_in_register"}},[e._v("登录密码")]),e._v(" "),i("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"password",id:"password_in_register",placeholder:"6-20位，须包含数字和字母"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"kd-field"},[i("label",{staticClass:"kd-field-title required",attrs:{for:"confirmed_password_in_register"}},[e._v("密码确认")]),e._v(" "),i("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmedPassword,expression:"confirmedPassword"},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"password",id:"confirmed_password_in_register",placeholder:"6-20位，须包含数字和字母"},domProps:{value:e.confirmedPassword},on:{input:function(t){t.target.composing||(e.confirmedPassword=t.target.value)}}})])]),e._v(" "),e.showRecommandInput&&0!==e.ifInvitation?i("div",{staticClass:"kd-field"},[i("label",{staticClass:"kd-field-title required",attrs:{for:"recommand_code"}},[e._v("邀请码")]),e._v(" "),i("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[2===e.ifInvitation?i("input",{directives:[{name:"model",rawName:"v-model",value:e.user.invitation,expression:"user.invitation"},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"text",id:"recommand_code",placeholder:"请输入邀请码(非必填)"},domProps:{value:e.user.invitation},on:{input:function(t){t.target.composing||e.$set(e.user,"invitation",t.target.value)}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:e.user.invitation,expression:"user.invitation"},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"text",id:"recommand_code",placeholder:"请输入邀请码！"},domProps:{value:e.user.invitation},on:{input:function(t){t.target.composing||e.$set(e.user,"invitation",t.target.value)}}})])]):e._e(),e._v(" "),1===e.IsWriteName?i("div",{staticClass:"nametips"},[e._v("姓名必须与您的银行账户名相同，否则不能出款 !")]):e._e(),e._v(" "),i("div",{staticClass:"kd-field agree"},[i("kd-checkbox",{attrs:{id:"agree_terms"},model:{value:e.agreed,callback:function(t){e.agreed=t},expression:"agreed"}}),e._v(" "),i("label",{attrs:{for:"agree_terms"}},[e._v("我已届满合法博彩年龄，且同意各项开户条约。")]),e._v(" "),i("br"),e._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:e.openRulePrompt}},[e._v("查看《所有规则与条例以及隐私声明》")])],1),e._v(" "),i("div",{staticClass:"kd-buttons"},[i("kd-button",{staticClass:"main-button",on:{click:e.doRegister}},[i("span",[e._v("马上注册")])]),e._v(" "),i("kd-button",{staticClass:"hollow",on:{click:e.goToLogin}},[e._v("立即登录")])],1)],2),e._v(" "),i("transition",{attrs:{"enter-active-class":"animated zoom-in","leave-active-class":"animated bounce-out"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpenedRulePrompt,expression:"isOpenedRulePrompt"}],staticClass:"promptbox-wrapper"},[i("section",{staticClass:"promptbox prompt-rule"},[i("div",{staticClass:"prompt-head"},[e._v("规则条例及隐私声明")]),e._v(" "),i("div",{staticClass:"prompt-body",domProps:{innerHTML:e._s(!1==!!e.rulesOfSite?"<p>暂时没有内容！</p>":e.rulesOfSite)}}),e._v(" "),i("a",{staticClass:"prompt-close kd-close",attrs:{href:"javascript:;"},on:{click:e.closeRulePrompt}},[e._v("close")])]),e._v(" "),i("div",{staticClass:"promptbox-overlay"})])]),e._v(" "),i("transition",{attrs:{"enter-active-class":"animated zoom-in","leave-active-class":"animated bounce-out"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpenedVerifyPrompt,expression:"isOpenedVerifyPrompt"}],staticClass:"promptbox-wrapper"},[i("section",{staticClass:"promptbox prompt-verifycode"},[i("div",{staticClass:"prompt-head"},[e._v("请先输入验证码")]),e._v(" "),i("div",{staticClass:"prompt-body"},[i("div",{staticClass:"kd-field"},[i("img",{staticClass:"prompt-verifycode__img",attrs:{src:e.verifyCodeUrl,alt:"验证码",title:"点击刷新验证码"},on:{click:e.changeVerifyCode}}),e._v(" "),i("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput prompt-verifycode__input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.secure_code,expression:"secure_code",modifiers:{trim:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.secure_code},on:{input:function(t){t.target.composing||(e.secure_code=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),i("kd-button",{on:{click:e.getMobileCode}},[e._v("发送短信")])],1),e._v(" "),i("a",{staticClass:"prompt-close kd-close",attrs:{href:"javascript:;"},on:{click:e.closeVerifyPrompt}},[e._v("close")])]),e._v(" "),i("div",{staticClass:"promptbox-overlay"})])]),e._v(" "),i("transition",{attrs:{"enter-active-class":"animated zoom-in","leave-active-class":"animated bounce-out"}},[e.regVerifyOn?i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpenedVerifyPrompt2,expression:"isOpenedVerifyPrompt2"}],staticClass:"promptbox-wrapper"},[i("section",{staticClass:"promptbox prompt-verifycode"},[i("div",{staticClass:"prompt-head"},[e._v("请先输入验证码")]),e._v(" "),i("div",{staticClass:"prompt-body"},[i("div",{staticClass:"kd-field kd-field-verify",staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:e.verifyCodeUrl2,alt:"验证码",title:"点击刷新验证码"},on:{click:e.changeVerifyCode2}})]),e._v(" "),i("div",{staticClass:"kd-field"},[i("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput",staticStyle:{overflow:"hidden"}},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.regVerify,expression:"user.regVerify",modifiers:{trim:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"text",id:"code_in_register",placeholder:"请输入验证码"},domProps:{value:e.user.regVerify},on:{input:function(t){t.target.composing||e.$set(e.user,"regVerify",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),i("kd-button",{on:{click:e.doRegister}},[e._v("确定")])],1),e._v(" "),i("a",{staticClass:"prompt-close kd-close",attrs:{href:"javascript:;"},on:{click:e.closeVerifyPrompt2}},[e._v("close")])]),e._v(" "),i("div",{staticClass:"promptbox-overlay"})]):e._e()])],1)},staticRenderFns:[]}},384:function(e,t,i){var s=i(0)(i(799),null,null,null);e.exports=s.exports},731:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(44),r=i.n(s),a=i(7),n=i(36),o=i(72),u=i.n(o);t.default={name:"PageAccountRegister",data:function(){return{user:{user_name:"",real_name:"",mobile:"",password:"",verify_code:"",nickname:"",regVerify:"",invitation:""},showRecommandInput:!1,confirmedPassword:"",agreed:!1,isOpenedRulePrompt:!1,rulesOfSite:"",mobileCode:{enable:!1,countDown:0,timer:0},isOpenedVerifyPrompt:!1,verifyCodeVersion:0,verifyCodeVersion2:0,secure_code:"",verifyCodeColor:"#01beb8",toRouterName:"Account",showNickname:!1,isOpenedVerifyPrompt2:!1}},computed:{verifyCodeUrl:function(){return"base/get_qr.ashx?v="+this.verifyCodeVersion+"&bcolor="+escape(this.verifyCodeColor)},verifyCodeUrl2:function(){return"base/get_regverify.ashx?v="+this.verifyCodeVersion2+"&bcolor="+escape(this.verifyCodeColor)},userType:function(){return this.$store.state.user.userType},IsWriteName:function(){return this.$store.state.IsWriteName},ifNeedPhoneNumber:function(){return this.$store.state.ifNeedPhoneNumber},introducer:function(){var e=this.$route.query.p||this.$route.query.P;return e||!1},regVerifyOn:function(){return this.$store.state.regVerifyOn},ifInvitation:function(){return this.$store.state.ifInvitationCheck}},created:function(){this.$store.commit("setPage",{pageTitle:"注册",className:"page-register"}),this.writeIntroducer(),this.ifNeedPhoneNumber&&this.fetchRegConfig(),this.stopMobileCodeCountDown(),i.i(n.b)(document,"keyup",this.handleEnterUp),this.$store.state.user.recommand_user_id?this.user.invitation=this.$store.state.user.recommand_user_id:u.a.get("recommand_user_id")&&(this.user.invitation=u.a.get("recommand_user_id").value)},watch:{"user.mobile":{handler:function(e){e=e.toString(),e.length>11&&(this.user.mobile=e.substr(0,11))},deep:!0}},methods:{setUser:function(e){return this.$store.commit("uSetUser",e)},fetchUserInfo:function(){return this.$store.dispatch("uFetchUserInfo",{vm:this})},fetchSetting:function(){var e=this;return this.$store.dispatch("uFetchSetting").catch(function(t){console.log(t),e.$message({message:"获取账号个性化设置出错啦！",type:"error",force:!0})})},register:function(e){return this.$store.dispatch("uRegister",e)},fetchRulesOfSite:function(){var e=this;return a.apiGetRulesOfSite().then(function(t){void 0!==t.data.S?(e.rulesOfSite="",e.$message({message:t.data.S+":"+t.data.D})):e.rulesOfSite=t.data}).catch(function(t){console.log(t),e.$message({message:"获取规则条例及隐私声明出错啦！"})})},openRulePrompt:function(){this.isOpenedRulePrompt=!0,""===this.rulesOfSite&&this.fetchRulesOfSite()},closeRulePrompt:function(){this.isOpenedRulePrompt=!1},openVerifyPrompt:function(){!1!==this.validateMobile()&&(this.isOpenedVerifyPrompt=!0,this.changeVerifyCode())},closeVerifyPrompt:function(){this.isOpenedVerifyPrompt=!1},changeVerifyCode:function(){this.secure_code="",this.verifyCodeVersion=Math.random()},closeVerifyPrompt2:function(){this.isOpenedVerifyPrompt2=!1},changeVerifyCode2:function(){this.user.regVerify="",this.verifyCodeVersion2=Math.random()},validateMobile:function(){return""===this.user.mobile?(this.$message({message:"手机号码不能为空!",type:"warning"}),!1):/[^\d]/g.test(this.user.mobile)?(this.$message({message:"手机号码只能是数字组成！",type:"warning"}),!1):/^1[3-9]\d+$/.test(this.user.mobile)?11===this.user.mobile.length||(this.$message({message:"手机号码必须是11位标准号码！",type:"warning"}),!1):(this.$message({message:"手机号码无效！",type:"warning"}),!1)},validateUserName:function(){return""===this.user.user_name?(this.$message({message:"用户名不能为空!",type:"warning"}),!1):/^[a-zA-Z0-9]+$/.test(this.user.user_name)?this.user.user_name.length>20||this.user.user_name.length<2?(this.$message({message:"用户名长度必须在2-20个字符！",type:"warning"}),!1):!(/^\d+$/.test(this.user.user_name)&&!/^1[3-9]\d{9}$/.test(this.user.user_name))||(this.$message({message:"纯数字用户名必须为11位手机号！",type:"warning"}),!1):(this.$message({message:"用户名只能是数字、字母组合！",type:"warning"}),!1)},validateRealName:function(){if(this.IsWriteName){if(""===this.user.real_name)return this.$message({message:"姓名不能为空!",type:"warning"}),!1;if(this.user.real_name.length>16||this.user.real_name.length<2)return this.$message({message:"姓名长度必须在2-16个中文字！",type:"warning"}),!1;if(!/^[\u4e00-\u9fa5]+[·]?[\u4e00-\u9fa5]+[0-9]*$/.test(this.user.real_name))return this.$message({message:"姓名只能是中文或中文+数字结尾！",type:"warning"}),!1}return!0},validators:function(){if(!1===this.validateUserName())return!1;if(this.ifNeedPhoneNumber){if(!1===this.validateMobile())return!1;if(this.mobileCode.enable){if(""===this.user.verify_code)return this.$message({message:"验证码不能为空!",type:"warning"}),!1;if(!/^\d{4}$/.test(this.user.verify_code))return this.$message({message:"验证码只能是4位数字！",type:"warning"}),!1}}if(!1===this.validateRealName())return!1;if(this.user.nickname){var e=this.user.nickname.length<=30;if(e&&(e=/^[\u4e00-\u9fa5a-zA-Z]+$/.test(this.user.nickname)),e){var t=this.user.nickname.replace(/[a-zA-Z]+/g,"").length;e=t<=10,e&&(e=this.user.nickname.length-t<=20)}if(!e)return this.$message({message:"昵称只允许中文英文，中文不超过10个字符，英文不超多20个字符！",type:"warning"}),!1}if(""===this.user.password)return this.$message({message:"密码不能为空!",type:"warning"}),!1;if(/[\s\t\n\r]+/.test(this.user.password))return this.$message({message:"密码不能包含空格！",type:"warning"}),!1;if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/g.test(this.user.password))return this.$message({message:"密码为6-20位，须包含数字和字母！",type:"warning"}),!1;if(this.confirmedPassword!==this.user.password)return this.$message({message:"确认密码与登录密码不一致！",type:"warning"}),!1;if(this.showRecommandInput&&this.ifInvitation)if(2!==this.ifInvitation){if(!this.user.invitation)return this.$message({message:"请填写邀请码！",type:"warning"}),!1;if(!/\d/g.test(this.user.invitation))return this.$message({message:"邀请码必须为数字！",type:"warning"}),!1}else if(this.user.invitation&&!/\d/g.test(this.user.invitation))return this.$message({message:"邀请码必须为数字！",type:"warning"}),!1;return!1!==this.agreed||(this.$message({message:"请先同意各项条约！",type:"warning"}),!1)},logoutFakeUser:function(){var e=this;return new r.a(function(t){2===e.userType&&e.$store.dispatch("uLogout").then(function(){return t()}).catch(function(){return t()}),t()})},doRegister:function(){var e=this;if(!1!==this.validators()){if(this.regVerifyOn){if(!this.isOpenedVerifyPrompt2)return this.isOpenedVerifyPrompt2=!0,this.changeVerifyCode2(),void(this.user.regVerify="");if(""===this.user.regVerify)return void this.$message({message:"验证码不能为空!",type:"warning"})}this.logoutFakeUser().then(function(){e.setUser({isManualLogout:!1}),e.register({data:e.user}).then(function(t){var i=t.S;if("146"===i||"143"===i)e.$message({message:i+"：对不起，该用户名已被注册！",type:"warning"});else if("147"===i)e.$message({message:i+": 对不起，该手机号码已被注册！",type:"warning"});else if("444"===i)e.$message({message:"444: 您已登录，请先退出登录！",type:"warning"});else if("150"===i){var s=e;e.isOpenedVerifyPrompt2=!1,e.$message({message:"恭喜你，注册成功！",type:"success"}),e.fetchUserInfo().then(function(){s.$route.query.redirect?s.$router.push({path:s.$route.query.redirect}):s.$router.push({name:s.toRouterName})}),e.fetchSetting()}else e.$message({message:i+": "+t.D,type:"error"})}).catch(function(t){console.log(t),e.$message({message:"注册出错啦！",type:"error",force:!0})})})}},goToLogin:function(){this.$router.push({name:"AccountLogin"})},fetchRegConfig:function(){var e=this;a.apiGetRegConfig().then(function(t){1===t.data.MC&&(e.mobileCode.enable=!0)})},stopMobileCodeCountDown:function(){this.mobileCode.timer&&clearInterval(this.mobileCode.timer),this.mobileCode.countDown=0},getMobileCode:function(){var e=this;if(""===this.secure_code)return this.$message({message:"请先输入验证码",type:"warning"}),!1;a.apiVerifyCode({mobile:this.user.mobile,code:this.secure_code}).then(function(t){"200"!==t.data.S?(e.$message({message:t.data.S+": "+t.data.D,type:"error"}),e.changeVerifyCode(),e.stopMobileCodeCountDown()):(e.isOpenedVerifyPrompt=!1,e.$message({message:"验证码已发送，30分钟内有效，请查收。",type:"success"}),e.mobileCode.countDown=180,e.mobileCode.timer=setInterval(function(){--e.mobileCode.countDown<=0&&e.stopMobileCodeCountDown()},1e3))}).catch(function(t){e.$message({message:"验证码获取出错啦！",type:"error",force:!0}),e.stopMobileCodeCountDown(),console.error(t)})},handleEnterUp:function(e){13===e.keyCode&&this.doRegister()},writeIntroducer:function(){var e=this;!1!==this.introducer&&a.apiSaveIntroducer({recommand_user_id:this.introducer}).then(function(e){return e.json()}).then(function(t){"180"!==t.S&&e.$message({message:t.S+": "+t.D,type:"warning"})}).catch(function(t){console.log(t),e.$message({message:"写入推荐人出错啦！",type:"error",force:!0})})}},beforeDestroy:function(){this.stopMobileCodeCountDown(),i.i(n.c)(document,"keyup",this.handleEnterUp)}}},799:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(993),r=i.n(s);t.default={mixins:[r.a],data:function(){return{showRecommandInput:!0}}}},993:function(e,t,i){var s=i(0)(i(731),i(1147),null,null);e.exports=s.exports}});