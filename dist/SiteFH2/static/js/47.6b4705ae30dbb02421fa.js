webpackJsonp([47],{346:function(e,t,s){var i=s(0)(s(644),s(960),null,null);e.exports=i.exports},644:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(6);t.default={name:"PageAccountForgotPassword",data:function(){return{step:0,user_name:"",secure_code:"",find_type:"",answer:"",password:"",confirmedPassword:"",hasEmail:!1,question:!1,secureCodeVersion:Math.random(),isPC:!1}},computed:{secureCodeUrl:function(){return"base/find_password_qr.ashx?v="+this.secureCodeVersion},disableNext:function(){return"email"===this.find_type&&!1===this.hasEmail||"answer"===this.find_type&&!1===this.question}},created:function(){this.$store.commit("setPage",{pageTitle:"找回密码",className:"page-account-forgot-password"})},methods:{changeSecureCode:function(){this.secureCodeVersion=Math.random(),this.secure_code=""},backToLogin:function(){this.step=0,this.$router.push({name:"AccountLogin"})},check:function(){return i.apiFindPassword({user_name:this.user_name,secure_code:this.secure_code,find_type:this.find_type,answer:this.answer,password:this.password}).then(function(e){return e.json()})},firstStep:function(e){if("182"===e.S){if(0===e.E&&""===e.Q)return void this.$message({message:"由于您未设置安全问题或邮箱，无法找回密码，请联系客服！",type:"error"});this.step=1,this.hasEmail=1===e.E,this.question=""!==e.Q&&e.Q,this.find_type=!1!==this.question?"answer":"email"}else this.$message({message:e.S+": "+e.D,type:"error"})},secondStep:function(e){"email"===this.find_type&&"184"===e.S?this.step=2:"190"===e.S?this.step=2:this.$message({message:e.S+": "+e.D,type:"error"})},thirdStep:function(e){"189"===e.S?(this.step=0,this.$message({message:"恭喜你，新密码设置成功！",type:"success"}),this.$router.push({name:"AccountLogin"})):this.$message({message:e.S+": "+e.D,type:"error"})},fourthStep:function(e){this.step=4,this.$message({message:e.S+": "+e.D,type:"error"})},validators:function(){if(0===this.step){if(""===this.user_name)return this.$message({message:"账号不能为空！",type:"warning"}),!1;if(!1===/^[a-zA-Z0-9]+$/.test(this.user_name))return this.$message({message:"用户名只能是数字、字母组合，<br>或者是手机号码！",type:"warning"}),!1;if(this.user_name.length>20||this.user_name.length<2)return this.$message({message:"用户名长度必须在2-20个字符，<br>手机号码必须是11位标准号码！",type:"warning"}),!1}else if(1===this.step&&"answer"===this.find_type){if(""===this.answer)return this.$message({message:"答案不能为空！",type:"warning"}),!1}else if(2===this.step){if(""===this.password)return this.$message({message:"新密码不能为空！",type:"warning"}),!1;if(/[\s\t\n\r]+/.test(this.password))return this.$message({message:"新密码不能包含空格！",type:"warning"}),!1;if(this.password.length>20||this.password.length<6)return this.$message({message:"新密码长度只能是6-20个字符！",type:"warning"}),!1;if(this.password!==this.confirmedPassword)return this.$message({message:"密码确认和新密码不一致！",type:"warning"}),!1}return""===this.secure_code?(this.$message({message:"验证码不能为空！",type:"warning"}),!1):!1!==/^[a-zA-Z0-9]+$/.test(this.secure_code)||(this.$message({message:"验证码格式不正确！",type:"warning"}),!1)},submitToFindPassword:function(){var e=this;!1!==this.validators()&&this.check().then(function(t){e.changeSecureCode(),0===e.step?e.firstStep(t):1===e.step?e.secondStep(t):2===e.step?e.thirdStep(t):3===e.step&&e.fourthStep(t)}).catch(function(t){console.log(t),e.$message({message:"找回密码出错啦！",type:"error",force:!0})})}}}},960:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{staticClass:"kd-body"},[s("form",{staticClass:"kd-form kd-container forgot-password-form",on:{submit:function(e){e.preventDefault()}}},[s("ul",{staticClass:"nostyle kd-row step",class:"step"+e.step},[s("li",[e._v("第一步")]),e._v(" "),s("li",[e._v("第二步")]),e._v(" "),s("li",[e._v("第三步")])]),e._v(" "),0===e.step?[s("div",{staticClass:"kd-field"},[s("label",{staticClass:"kd-field-title",attrs:{for:"user_name_in_finding"}},[e._v("请输入账号")]),e._v(" "),s("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user_name,expression:"user_name",modifiers:{trim:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"text",id:"user_name_in_finding",placeholder:"用户名 / 手机号 / 用户ID"},domProps:{value:e.user_name},on:{input:function(t){t.target.composing||(e.user_name=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])])]:1===e.step?[s("div",{staticClass:"kd-field"},[s("label",{staticClass:"kd-field-title"},[e._v("请选择方式")]),e._v(" "),s("div",{directives:[{name:"select",rawName:"v-select"}],staticClass:"kd-select"},[s("span",{staticClass:"value"},[e._v(e._s("email"===e.find_type?"电子邮箱":"安全问题"))]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.find_type,expression:"find_type"},{name:"focus-fixed",rawName:"v-focus-fixed"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.find_type=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"answer"}},[e._v("安全问题")]),e._v(" "),s("option",{attrs:{value:"email"}},[e._v("电子邮箱")])])])]),e._v(" "),"email"===e.find_type&&!1===e.hasEmail?[s("div",{staticClass:"kd-field important"},[e._v("您没有设置邮箱，无法通过邮箱找回密码！")])]:e._e(),e._v(" "),"answer"===e.find_type?[!1===e.question?[s("div",{staticClass:"kd-field important"},[e._v("您没有设置安全问题，无法通过安全问题找回密码！")])]:[e.isPC?s("div",{staticClass:"kd-field"},[s("label",{staticClass:"kd-field-title"},[e._v("安全问题：")]),e._v(" "),s("div",{staticClass:"kd-field-display"},[e._v("\n                            "+e._s(e.question)+"\n                        ")])]):s("div",{staticClass:"kd-field"},[s("label",{staticClass:"kd-field-title"},[e._v(e._s(e.question))])]),e._v(" "),s("div",{staticClass:"kd-field"},[s("label",{staticClass:"kd-field-title"},[e._v("答案：")]),e._v(" "),s("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.answer,expression:"answer",modifiers:{trim:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"text",id:"secure_code_in_finding",placeholder:"请输入您设定的安全问题答案"},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])])]]:e._e()]:2===e.step&&"email"===e.find_type?[s("div",[e._v("登录密码已发送至您的邮箱，请前往查看！")])]:[s("div",{staticClass:"kd-field required"},[s("label",{staticClass:"kd-field-title required",attrs:{for:"password_in_edit"}},[e._v("新的密码")]),e._v(" "),s("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"password",id:"password_in_edit",placeholder:"密码长度只能是6-20个字符！"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"kd-field"},[s("label",{staticClass:"kd-field-title required",attrs:{for:"confirmed_password_in_edit"}},[e._v("密码确认")]),e._v(" "),s("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmedPassword,expression:"confirmedPassword"},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"password",id:"confirmed_password_in_edit",placeholder:"密码长度只能是6-20个字符！"},domProps:{value:e.confirmedPassword},on:{input:function(t){t.target.composing||(e.confirmedPassword=t.target.value)}}})])])],e._v(" "),2!==e.step||"email"!==e.find_type?s("div",{staticClass:"kd-field"},[s("label",{staticClass:"kd-field-title",attrs:{for:"secure_code_in_finding"}},[e._v("验证码")]),e._v(" "),s("div",{directives:[{name:"textinput",rawName:"v-textinput"}],staticClass:"kd-textinput secure-code"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.secure_code,expression:"secure_code",modifiers:{trim:!0}},{name:"focus-fixed",rawName:"v-focus-fixed"}],attrs:{type:"text",id:"secure_code_in_finding",placeholder:"请输入验证码"},domProps:{value:e.secure_code},on:{input:function(t){t.target.composing||(e.secure_code=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),s("img",{staticClass:"photo-secure-code",attrs:{src:e.secureCodeUrl,alt:"验证码"},on:{click:e.changeSecureCode}})]):e._e(),e._v(" "),2!==e.step||"email"!==e.find_type?s("kd-button",{staticClass:"main-button",attrs:{disabled:e.disableNext},on:{click:e.submitToFindPassword}},[s("span",[e._v("下一步")])]):e._e(),e._v(" "),s("kd-button",{staticClass:"hollow back-to-login",on:{click:e.backToLogin}},[s("span",[e._v("想起密码？返回登录")])])],2)])},staticRenderFns:[]}}});