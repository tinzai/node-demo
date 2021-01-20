webpackJsonp([0],{

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(906)
__webpack_require__(907)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(808),
  /* template */
  __webpack_require__(1216),
  /* scopeId */
  "data-v-985dc34a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(917)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(816),
  /* template */
  __webpack_require__(1246),
  /* scopeId */
  "data-v-f717de7c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(913)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(833),
  /* template */
  __webpack_require__(1234),
  /* scopeId */
  "data-v-c1a9bd7c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(892)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(834),
  /* template */
  __webpack_require__(1159),
  /* scopeId */
  "data-v-4fe57030",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(849),
  /* template */
  __webpack_require__(1122),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1087:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "promptcon",
    class: {
      'iszfb': _vm.iszfb, 'isweixin': _vm.isweixin
    }
  }, [_c('div', {
    staticClass: "prompthead"
  }, [_vm._v("\n        " + _vm._s(_vm.outprompt ? _vm.currentItem.name : _vm.currentItem.type) + "\n        "), _c('span', {
    staticClass: "back",
    on: {
      "click": _vm.close
    }
  }), _vm._v(" "), (!_vm.outprompt) ? _c('span', {
    staticClass: "backr",
    on: {
      "click": _vm.close
    }
  }, [_vm._v("人工协助")]) : _vm._e()]), _vm._v(" "), (_vm.isbankcard) ? _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "promptbody"
  }, [_c('div', {
    staticClass: "title"
  }, [(_vm.outprompt) ? _c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.tname)
  }) : _c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.name)
  }), _vm._v("\n                " + _vm._s(_vm.outprompt ? _vm.currentItem.name : _vm.currentItem.title) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n                " + _vm._s(_vm.currentItem.top) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("银行卡姓名")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.buname))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copyname",
    attrs: {
      "data-clipboard-text": _vm.currentItem.buname
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copyname')
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("银行卡号")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.bcard))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copycode",
    attrs: {
      "data-clipboard-text": _vm.currentItem.bcard
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copycode')
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("开户银行")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.bname))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copybank",
    attrs: {
      "data-clipboard-text": _vm.currentItem.bname
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copybank')
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("开户支行")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.bdetail))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copycbank",
    attrs: {
      "data-clipboard-text": _vm.currentItem.bdetail
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copycbank')
      }
    }
  }, [_vm._v("复制")])])])])])]), _vm._v(" "), (_vm.currentItem.tip) ? _c('div', {
    staticClass: "promptfoot"
  }, [_c('div', {
    staticClass: "tiptitle"
  }, [_vm._v("温馨提示")]), _vm._v(" "), _c('div', {
    staticClass: "content",
    domProps: {
      "innerHTML": _vm._s(_vm.currentItem.tip)
    }
  })]) : _vm._e()]) : (_vm.iszfb) ? _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "promptbody"
  }, [_c('div', {
    staticClass: "title"
  }, [(_vm.outprompt) ? _c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.tname)
  }) : _c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.name)
  }), _vm._v("\n                " + _vm._s(_vm.outprompt ? _vm.currentItem.name : _vm.currentItem.title) + "\n            ")]), _vm._v(" "), (_vm.currentItem.pic || _vm.currentItem.img) ? _c('div', {
    staticClass: "tips",
    staticStyle: {
      "border-bottom": "1px solid #efefef"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.currentItem.top) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [(_vm.outprompt) ? _c('div', {
    staticClass: "qcodewrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentItem.img
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "savebtn",
    on: {
      "click": function($event) {
        return _vm.saveimg(_vm.currentItem.img)
      }
    }
  }, [_vm._v("保存图片")])]) : _c('div', {
    staticClass: "qcodewrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentItem.pic
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "savebtn",
    on: {
      "click": function($event) {
        return _vm.saveimg(_vm.currentItem.pic)
      }
    }
  }, [_vm._v("保存图片")])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n                " + _vm._s(_vm.currentItem.tip) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("支付宝账号")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.account))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copyname",
    attrs: {
      "data-clipboard-text": _vm.currentItem.account
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copyname')
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("支付宝姓名")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.aname))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copycode",
    attrs: {
      "data-clipboard-text": _vm.currentItem.aname
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copycode')
      }
    }
  }, [_vm._v("复制")])])])])])])]) : (_vm.isweixin) ? _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "promptbody"
  }, [_c('div', {
    staticClass: "title"
  }, [(_vm.outprompt) ? _c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.tname)
  }) : _c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.name)
  }), _vm._v("\n                " + _vm._s(_vm.outprompt ? _vm.currentItem.name : _vm.currentItem.title) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n                " + _vm._s(_vm.currentItem.top) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [(_vm.outprompt) ? _c('div', {
    staticClass: "qcodewrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentItem.img
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "savebtn",
    on: {
      "click": function($event) {
        return _vm.saveimg(_vm.currentItem.img)
      }
    }
  }, [_vm._v("保存图片")])]) : _c('div', {
    staticClass: "qcodewrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentItem.pic
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "savebtn",
    on: {
      "click": function($event) {
        return _vm.saveimg(_vm.currentItem.pic)
      }
    }
  }, [_vm._v("保存图片")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n                " + _vm._s(_vm.currentItem.tip) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("微信账号")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.account))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copyname",
    attrs: {
      "data-clipboard-text": _vm.currentItem.account
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copyname')
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("微信姓名")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.aname))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copycode",
    attrs: {
      "data-clipboard-text": _vm.currentItem.aname
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copycode')
      }
    }
  }, [_vm._v("复制")])])])])])])]) : _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "promptbody"
  }, [_c('div', {
    staticClass: "title"
  }, [(_vm.outprompt) ? _c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.tname)
  }) : _c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.name)
  }), _vm._v("\n                " + _vm._s(_vm.outprompt ? _vm.currentItem.name : _vm.currentItem.title) + "\n            ")]), _vm._v(" "), (_vm.currentItem.pic || _vm.currentItem.img) ? _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n                " + _vm._s(_vm.currentItem.top) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [(_vm.outprompt) ? _c('div', {
    staticClass: "qcodewrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentItem.img
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "savebtn",
    on: {
      "click": function($event) {
        return _vm.saveimg(_vm.currentItem.img)
      }
    }
  }, [_vm._v("保存图片")])]) : _c('div', {
    staticClass: "qcodewrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentItem.pic
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "savebtn",
    on: {
      "click": function($event) {
        return _vm.saveimg(_vm.currentItem.pic)
      }
    }
  }, [_vm._v("保存图片")])])])])]) : _vm._e(), _vm._v(" "), (_vm.currentItem.account) ? _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n               " + _vm._s(_vm.currentItem.top) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.currentItem.tname) + "账号")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.account))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copyname",
    attrs: {
      "data-clipboard-text": _vm.currentItem.account
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copyname')
      }
    }
  }, [_vm._v("复制")])])])])]) : _vm._e()]), _vm._v(" "), (_vm.currentItem.tip) ? _c('div', {
    staticClass: "promptfoot"
  }, [_c('div', {
    staticClass: "tiptitle"
  }, [_vm._v("温馨提示")]), _vm._v(" "), _c('div', {
    staticClass: "content",
    domProps: {
      "innerHTML": _vm._s(_vm.currentItem.tip)
    }
  })]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),

/***/ 1122:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main', {
    staticClass: "kd-body container-lg account__main mone-in-out"
  }, [_c('mod-account-main', [_c('div', {
    staticClass: "account__sidebar"
  }, [_c('mod-account-sub-nav-public')], 1), _vm._v(" "), _c('div', {
    staticClass: "account__body"
  }, [_c('div', {
    staticClass: "account__body-title"
  }, [_vm._v("公司入款")]), _vm._v(" "), _c('div', {
    staticClass: "account__body-content"
  }, [(_vm.zxsfstatus && this.$route.query.chargeType == 'xrsf') ? _c('div', [_c('account-money-in-company2')], 1) : _c('div', [_c('ul', {
    staticClass: "nostyle account-nav type-title kd-row-middle"
  }, [(_vm.bankCardShow) ? _c('li', {
    class: {
      active: _vm.selectedWyzz
    },
    on: {
      "click": _vm.openWYZZ
    }
  }, [_c('a', [_vm._v("银行卡转账充值")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.methodsOfMoneyIn), function(method, id) {
    return (method.status !== -1 && !~id.indexOf('WYZZ')) ? _c('li', {
      class: {
        active: _vm.selectedMethodOfMoneyIn === id
      },
      on: {
        "click": function($event) {
          return _vm.openOverride(id, method)
        }
      }
    }, [_c('a', [_vm._v(_vm._s(method.title))])]) : _vm._e()
  }), _vm._v(" "), _c('li', {
    on: {
      "click": _vm.openOnlineService
    }
  }, [_c('a', [_vm._v("客服充值")])])], 2), _vm._v(" "), (_vm.bankCardShow && _vm.selectedWyzz) ? _c('div', {
    staticClass: "account__form type-body method-wyzz__banks"
  }, [_c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("充值方式")]), _vm._v(" "), _c('div', {
    staticClass: "text checkbox-tab"
  }, [_c('ul', {
    staticClass: "nostyle clearfix"
  }, _vm._l((_vm.methodsOfMoneyIn), function(method, id) {
    return (method.status !== -1 && ~id.indexOf('WYZZ')) ? _c('li', {
      class: {
        active: _vm.selectedMethodOfMoneyIn === id
      },
      on: {
        "click": function($event) {
          return _vm.openOverride(id, method)
        }
      }
    }, [_c('a', [_vm._v(_vm._s(method.rechargeType || method.title))])]) : _vm._e()
  }), 0)])])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.methodsOfMoneyIn), function(method, id) {
    return (_vm.selectedMethodOfMoneyIn === id && method.iconName !== 'payquick') ? _c('mod-account-money-in-type-body', {
      key: id,
      attrs: {
        "type": method
      }
    }) : _vm._e()
  }), _vm._v(" "), (_vm.notChargeTips) ? _c('div', {
    staticClass: "not-charge-methods"
  }, [_vm._v(_vm._s(_vm.notChargeTips))]) : _vm._e()], 2)])])]), _vm._v(" "), (_vm.visibleService) ? _c('mod-online-service-float') : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1159:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "usermsgwrap clearfix"
  }, [_c('div', {
    staticClass: "headimgwrap"
  }, [_c('img', {
    attrs: {
      "src": '/static/images/defaulthead.png'
    }
  })]), _vm._v(" "), (_vm.imageurl) ? _c('div', {
    staticClass: "imagecontent"
  }, [_c('img', {
    attrs: {
      "src": _vm.imageurl
    }
  })]) : _c('div', {
    staticClass: "textcontent"
  }, [(_vm.isLoadingMsg(_vm.currentGuid)) ? _c('i', {
    class: _vm.currentGuid && _vm.isLoadingMsg(_vm.currentGuid) ? 'iconfont icon-msg-loading' : _vm.currentGuid
  }) : (_vm.currentJsonData && _vm.isResendMsg(_vm.currentJsonData)) ? _c('i', {
    class: _vm.currentJsonData && _vm.isResendMsg(_vm.currentJsonData) ? 'iconfont icon-msg-fail' : _vm.currentJsonData,
    on: {
      "click": function($event) {
        return _vm.resend(_vm.currentJsonData)
      }
    }
  }) : _c('i'), _vm._v(" "), _c('span', {
    staticClass: "triangleright"
  }), _vm._v(" "), _c('span', {
    staticClass: "text",
    domProps: {
      "innerHTML": _vm._s(_vm.msgText)
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ 1216:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "clearfix payment-quick"
  }, [_c('div', {
    staticClass: "charge-banner"
  }, [_c('span', {
    staticClass: "line"
  }, [_vm._v("—")]), _c('span', {
    staticClass: "dotl"
  }), _vm._v(" 殿堂级支付体验，专人全程服务5秒内火速到账 "), _c('span', {
    staticClass: "dotr"
  }), _c('span', {
    staticClass: "line"
  }, [_vm._v("—")]), _vm._v(" "), _c('span', {
    staticClass: "message",
    on: {
      "click": _vm.goUnread
    }
  }, [_c('img', {
    attrs: {
      "src": '/static/images/message.svg'
    }
  }), _vm._v(" "), (_vm.showdot) ? _c('span', {
    staticClass: "dotmsg"
  }) : _vm._e()])]), _vm._v(" "), (!_vm.hasunread) ? _c('div', {
    staticClass: "charge-main"
  }, [_c('div', {
    staticClass: "charge-main-title"
  }, [_vm._v("专享闪付")]), _vm._v(" "), _c('ul', {
    staticClass: "charge-type-list nostyle"
  }, [_vm._l((_vm.addchargelist), function(type, now) {
    return _c('div', {
      key: 'type' + now,
      staticClass: "charge-type module",
      class: {
        'active': _vm.currentslide === type.id
      }
    }, [_c('div', {
      staticClass: "contentwrap",
      on: {
        "click": function($event) {
          return _vm.currentClick(type)
        }
      }
    }, [_c('div', {
      staticClass: "headimg",
      class: 'head-' + _vm.logoclass(type.tname)
    }, [_c('img', {
      attrs: {
        "src": '/static/images/' + _vm.translogo(type.tname)
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "type-content"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(type.name) + "充值")]), _vm._v(" "), _vm._m(0, true)]), _vm._v(" "), _vm._m(1, true)]), _vm._v(" "), (_vm.currentslide === type.id) ? _c('div', {
      staticClass: "slidecon money-in"
    }, [_c('div', {
      staticClass: "kd-field"
    }, [_c('label', {
      staticClass: "kd-field-title"
    }, [_vm._v("充值金额：")]), _vm._v(" "), _c('div', {
      directives: [{
        name: "textinput",
        rawName: "v-textinput"
      }],
      staticClass: "kd-textinput"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number.lazy",
        value: (_vm.amount),
        expression: "amount",
        modifiers: {
          "number": true,
          "lazy": true
        }
      }, {
        name: "focus-fixed",
        rawName: "v-focus-fixed"
      }, {
        name: "money",
        rawName: "v-money"
      }],
      attrs: {
        "type": "number",
        "placeholder": "请输入金额",
        "step": "0.01"
      },
      domProps: {
        "value": (_vm.amount)
      },
      on: {
        "change": function($event) {
          _vm.amount = _vm._n($event.target.value)
        },
        "blur": function($event) {
          return _vm.$forceUpdate()
        }
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "notice"
    }, [_vm._v(" 充值金额范围 " + _vm._s(_vm.min) + "-" + _vm._s(_vm.max))])]), _vm._v(" "), (type.tname == '银行卡') ? _c('div', {
      staticClass: "kd-field"
    }, [_c('label', {
      staticClass: "kd-field-title"
    }, [_vm._v("姓 名：")]), _vm._v(" "), _c('div', {
      directives: [{
        name: "textinput",
        rawName: "v-textinput"
      }],
      staticClass: "kd-textinput"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.uname),
        expression: "uname"
      }],
      attrs: {
        "type": "text",
        "placeholder": "请输入姓名"
      },
      domProps: {
        "value": (_vm.uname)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.uname = $event.target.value
        }
      }
    })])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "kd-chips"
    }, _vm._l((_vm.selectmoney), function(chip, inde) {
      return _c('div', {
        key: inde,
        staticClass: "kd-chip",
        class: 'chip' + inde,
        on: {
          "click": function($event) {
            return _vm.addamount(chip)
          }
        }
      }, [_c('i', {
        staticClass: "icon"
      }), _vm._v(" "), _c('span', {
        class: {
          'active': _vm.current === chip
        }
      }, [_vm._v(_vm._s(chip) + "\n                                "), _vm._t("default")], 2)])
    }), 0), _vm._v(" "), _c('kd-button', {
      staticClass: "main-button",
      on: {
        "click": function($event) {
          return _vm.submit(type.id)
        }
      }
    }, [_c('span', [_vm._v("提 交")])])], 1) : _vm._e()])
  }), _vm._v(" "), _vm._l((_vm.paylist), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "charge-type",
      class: {
        'active': _vm.chatdata.wayid === item.id
      },
      on: {
        "click": function($event) {
          return _vm.switchConditions(item.id, item.name, item.img)
        }
      }
    }, [_c('div', {
      staticClass: "contentwrap"
    }, [_c('div', {
      staticClass: "headimg"
    }, [(item.img) ? _c('img', {
      attrs: {
        "src": item.img
      }
    }) : _c('span', [_vm._v("官")])]), _vm._v(" "), _c('div', {
      staticClass: "type-content"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "bar-cons"
    }, [_c('span', {
      staticClass: "bar bar1"
    }, [_vm._v("官方认证")]), _vm._v(" "), _c('span', {
      staticClass: "bar bar2"
    }, [_vm._v("高效快捷")]), _vm._v(" "), _vm._l((item.pay), function(ico, inow) {
      return _c('i', {
        key: inow,
        class: 'icon icon-' + ico
      })
    })], 2)]), _vm._v(" "), _vm._m(2, true)])])
  })], 2)]) : _c('div', {
    staticClass: "chatunread"
  }, [_c('div', {
    staticClass: "chathead"
  }, [_c('span', {
    staticClass: "backbtn",
    on: {
      "click": _vm.goback
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('ul', {
    staticClass: "unread-list nostyle"
  }, _vm._l((_vm.unreadlist), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "unread-item clearfix",
      class: {
        'active': _vm.chatdata.wayid === item.wayid
      },
      on: {
        "click": function($event) {
          return _vm.switchConditions(item.wayid, item.admin, item.img)
        }
      }
    }, [_c('div', {
      staticClass: "headimg"
    }, [(item.img) ? _c('img', {
      attrs: {
        "src": item.img
      }
    }) : _c('span', {
      staticClass: "defaultimg"
    }, [_vm._v("官")]), _vm._v(" "), (item.noread != 0) ? _c('span', {
      staticClass: "count"
    }, [_vm._v(_vm._s(item.noread))]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.admin))]), _vm._v(" "), _c('p', {
      staticClass: "disc",
      domProps: {
        "innerHTML": _vm._s(_vm.transface(item.einfo))
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "datetime"
    }, [_vm._v("\n                    " + _vm._s(item.time.substring(0, 10)) + "\n                ")])])
  }), 0)]), _vm._v(" "), _c('transition', {
    attrs: {
      "enter-class": "enter",
      "enter-active-class": "transin",
      "leave-class": "leave",
      "leave-active-class": "transout"
    }
  }, [(_vm.showchat) ? _c('chargechat', {
    ref: "chatDom",
    attrs: {
      "chatdata": _vm.chatdata,
      "hideprompt": _vm.hideprompt
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "enter-class": "enter",
      "enter-active-class": "transin",
      "leave-class": "leave",
      "leave-active-class": "transout"
    }
  }, [(_vm.detailshow) ? _c('div', {
    staticClass: "outprompt"
  }, [_c('promptcharge', {
    attrs: {
      "outprompt": true,
      "chargeType": _vm.chargeType,
      "chargeList": _vm.addchargelist
    },
    on: {
      "closeprompt": _vm.closeprompt
    }
  })], 1) : _vm._e()])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bar-cons"
  }, [_c('span', {
    staticClass: "bar bar1"
  }, [_vm._v("官方认证")]), _vm._v(" "), _c('span', {
    staticClass: "bar bar2"
  }, [_vm._v("高效快捷")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "charge-btnwrap"
  }, [_c('i', {
    staticClass: "trigler"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "charge-btnwrap"
  }, [_c('a', {
    staticClass: "chargebtn"
  }, [_vm._v("充值>>")])])
}]}

/***/ }),

/***/ 1223:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main', {
    staticClass: "kd-body mone-in-out"
  }, [_c('mod-account-sub-nav-money-in-out2', {
    attrs: {
      "chargeType": 'gsrk'
    }
  }), _vm._v(" "), (_vm.zxsfstatus) ? _c('mod-account-money-in-cs-ditch') : _vm._e(), _vm._v(" "), _c('div', [(_vm.message) ? _c('div', {
    staticClass: "money-wrapper money-in-closed"
  }, [_c('i', {
    staticClass: "icon icon-nav-about"
  }), _vm._v(" " + _vm._s(_vm.message) + "\n        ")]) : _c('div', {
    staticClass: "money-wrapper"
  }, [_c('div', {
    staticClass: "money-in"
  }, [_vm._l((_vm.methodsOfMoneyIn), function(method, id) {
    return (method.status !== -1) ? _c('div', {
      staticClass: "type",
      class: {
        opened: _vm.selectedMethodOfMoneyIn === id
      }
    }, [_c('div', {
      staticClass: "type-title kd-container",
      on: {
        "click": function($event) {
          return _vm.open(id, method)
        }
      }
    }, [(/^(\/|http)/i.test(method.iconName)) ? _c('i', {
      staticClass: "icon icon--img",
      style: ({
        backgroundImage: 'url(' + method.iconName + ')'
      })
    }) : _c('i', {
      staticClass: "icon",
      class: 'icon-' + method.iconName
    }), _vm._v(" "), _c('h5', {
      staticClass: "title"
    }, [_vm._v(_vm._s(method.title))]), _vm._v(" "), _c('p', {
      staticClass: "info"
    }, [_vm._v(_vm._s(method.info))])]), _vm._v(" "), _c('mod-account-money-in-type-body', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.selectedMethodOfMoneyIn === id),
        expression: "selectedMethodOfMoneyIn === id"
      }],
      attrs: {
        "type": method
      }
    })], 1) : _vm._e()
  }), _vm._v(" "), _c('div', {
    staticClass: "type"
  }, [_c('a', {
    staticClass: "type-title kd-container",
    on: {
      "click": function($event) {
        return _vm.openOnlineService()
      }
    }
  }, [_c('i', {
    staticClass: "icon icon-payservice"
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("客服充值")]), _vm._v(" "), _c('span', {
    staticClass: "info"
  }, [_vm._v("24小时为您服务，安全、稳定")])])])], 2)])]), _vm._v(" "), _c('mod-apple-pay')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1234:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "servicemsgwrap clearfix"
  }, [_c('div', {
    staticClass: "headimgwrap"
  }, [(_vm.headurl) ? _c('img', {
    attrs: {
      "src": _vm.headurl
    }
  }) : _c('span', [_vm._v("官")])]), _vm._v(" "), (_vm.imageurl) ? _c('div', {
    staticClass: "imagecontent"
  }, [_c('img', {
    attrs: {
      "src": _vm.imageurl
    }
  })]) : (_vm.iskp) ? _c('div', {
    staticClass: "cardcontent",
    on: {
      "click": function($event) {
        return _vm.showprompt(_vm.msgText)
      }
    }
  }, [_c('span', {
    staticClass: "triangleleft"
  }), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "topcon clearfix"
  }, [_c('div', {
    staticClass: "iconwrap"
  }, [_c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.kplogo)
  })]), _vm._v(" "), _c('div', {
    staticClass: "cardname"
  }, [_c('p', [_vm._v(_vm._s(_vm.msgText))]), _vm._v(" "), _c('p', [_vm._v("点击开始充值")])])]), _vm._v(" "), _c('div', {
    staticClass: "bottomcon"
  }, [_vm._v("\n                收款\n            ")])])]) : _c('div', {
    staticClass: "textcontent"
  }, [_c('span', {
    staticClass: "triangleleft"
  }), _vm._v(" "), _c('span', {
    staticClass: "text",
    domProps: {
      "innerHTML": _vm._s(_vm.msgText)
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ 1246:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chatpage"
  }, [_c('div', {
    staticClass: "chathead"
  }, [_vm._v("\n        " + _vm._s(_vm.chatdata.name) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "chatbody clearfix",
    on: {
      "click": function($event) {
        _vm.faceshow = false
      }
    }
  }, _vm._l((_vm.allMsgList), function(item, index) {
    return _c('div', {
      key: index
    }, [(item.type === 'servicer') ? _c('servicemsg', {
      attrs: {
        "msgText": _vm.transface(item.text),
        "imageurl": (item.src ? item.src : ''),
        "iskp": item.iskp,
        "kplogo": item.kplogo,
        "headurl": _vm.chatdata.headurl
      },
      on: {
        "showprompt": _vm.showprompt
      }
    }) : _vm._e(), _vm._v(" "), (item.type === 'user') ? _c('usermsg', {
      attrs: {
        "msgText": _vm.transface(item.text),
        "imageurl": (item.src ? item.src : ''),
        "currentGuid": item.guid ? item.guid : '',
        "currentJsonData": item.jsonData ? item.jsonData : ''
      }
    }) : _vm._e()], 1)
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "chatfoot"
  }, [_c('div', {
    attrs: {
      "id": "toolcon"
    }
  }, [(_vm.faceshow) ? _c('div', {
    staticClass: "facewrap"
  }, [_c('div', {
    staticClass: "pagelist clear",
    class: 'screen' + _vm.currentIndex
  }, _vm._l((_vm.groups), function(group, index) {
    return _c('ul', {
      key: index,
      staticClass: "facelist"
    }, [_vm._l((group), function(face, index) {
      return _c('li', {
        key: index,
        staticClass: "faceitem",
        on: {
          "click": function($event) {
            return _vm.addface(_vm.datalist[face].name)
          }
        }
      }, [_c('img', {
        attrs: {
          "src": '/static/images/faces/' + _vm.datalist[face].src
        }
      })])
    }), _vm._v(" "), _c('li', {
      staticClass: "faceitem",
      on: {
        "click": _vm.delface
      }
    }, [_c('img', {
      attrs: {
        "src": '/static/images/faces/delete.gif'
      }
    })])], 2)
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "dots"
  }, _vm._l((_vm.groups.length), function(item) {
    return _c('span', {
      staticClass: "dot",
      class: {
        active: item === _vm.currentIndex
      },
      on: {
        "click": function($event) {
          _vm.currentIndex = item
        }
      }
    })
  }), 0)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "quickcon"
  }, [_c('div', {
    staticClass: "quicklist"
  }, [_vm._l((_vm.quickList), function(item, index) {
    return _c('span', {
      key: index,
      staticClass: "quickitem",
      on: {
        "click": function($event) {
          return _vm.quicksend(item.name + '充值', item.id)
        }
      }
    }, [_c('span', {
      staticClass: "text"
    }, [_vm._v(_vm._s(item.name) + "充值")])])
  }), _vm._v(" "), _c('span', {
    staticClass: "quickitem",
    on: {
      "click": function($event) {
        return _vm.quicksend('我充好了')
      }
    }
  }, [_c('span', {
    staticClass: "text"
  }, [_vm._v("我充好了")])])], 2)]), _vm._v(" "), _c('div', {
    staticClass: "sendmessage"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.message),
      expression: "message"
    }],
    staticClass: "textinput",
    attrs: {
      "name": "input"
    },
    domProps: {
      "value": (_vm.message)
    },
    on: {
      "keydown": function($event) {
        return _vm.inpKeyDown()
      },
      "focus": _vm.onfocus,
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.sendmessage($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.message = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "face",
    on: {
      "click": function($event) {
        _vm.faceshow = !_vm.faceshow
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "picture"
  }, [_c('input', {
    staticClass: "fileinput",
    attrs: {
      "type": "file",
      "accept": "image/gif,image/png,image/bmp,image/jpeg,image/jpg"
    },
    on: {
      "change": _vm.upload
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "send",
    on: {
      "click": _vm.sendmessage
    }
  }, [_vm._v("发送")])])]), _vm._v(" "), _c('transition', {
    attrs: {
      "enter-class": "enter",
      "enter-active-class": "transin",
      "leave-class": "leave",
      "leave-active-class": "transout"
    }
  }, [(_vm.promptshow) ? _c('promptcharge', {
    attrs: {
      "chargeType": _vm.chargeType,
      "chargeList": _vm.quickList
    },
    on: {
      "closeprompt": _vm.closeprompt
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(793),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(398),
  /* template */
  __webpack_require__(399),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ComAccountNav'
});

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "nostyle account-nav account-sub-nav kd-row-middle"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(401),
  /* template */
  __webpack_require__(410),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_AccountSubNav__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_AccountSubNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_AccountSubNav__);






/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ComAccountSubNavMoneyInOut',
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapState */])({
        userType: function userType(state) {
            return state.user.userType;
        },
        isUserLogined: function isUserLogined(state) {
            return state.user.isUserLogined;
        }
    }), {
        isMoneyOut: function isMoneyOut() {
            return this.$route.name === 'AccountMoneyOut';
        }
    }),
    methods: {
        goToMoneOut: function goToMoneOut() {
            if (this.userType === 2) {
                this.$message({
                    message: "该会员暂时不支持提现！",
                    type: "warning"
                });
                return;
            } else {
                this.$router.push({
                    name: 'AccountMoneyOut'
                });
            }
        }
    },
    components: {
        modAccountSubNav: __WEBPACK_IMPORTED_MODULE_2_components_AccountSubNav___default.a
    }
});

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ComAccountBody'
});

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_common_AccountSubNavMoneyInOut__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_common_AccountSubNavMoneyInOut___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_common_AccountSubNavMoneyInOut__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_game__ = __webpack_require__(68);






/* harmony default export */ __webpack_exports__["default"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_1_components_common_AccountSubNavMoneyInOut___default.a,
    data: function data() {
        return {
            showedAccountPrizes: true
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* mapState */])(['ifShowRechargeDraw', 'ifShowShowLiCai', 'ifShowTransfer', 'ifShowBbin', 'ifShowQP', 'hgtyStatus', 'sbtyStatus']), {
        hasTransfer: function hasTransfer() {
            return (this.ifShowTransfer || this.ifShowBbin || this.ifShowQP || this.hgtyStatus || this.sbtyStatus) && this.userType == 1;
        },
        zxsfstatus: function zxsfstatus() {
            return this.$store.state.zxsfstatus;
        },
        zxsfName: function zxsfName() {
            return this.$store.state.zxsfName;
        },
        gameRecordLink: function gameRecordLink() {
            var firstGame = 'c';
            for (var game in __WEBPACK_IMPORTED_MODULE_3_store_game__["a" /* default */].instance.modules) {
                firstGame = __WEBPACK_IMPORTED_MODULE_3_store_game__["a" /* default */].instance.modules[game].gameId;
                break;
            }
            return '/game-record/' + firstGame;
        }
    }),
    methods: {
        goPromotion: function goPromotion() {
            if (this.userType == 2) {
                this.$message({
                    message: '只有正式会员才能进行代理推广'
                });
            } else {
                this.$router.push({
                    name: 'AccountPromotion'
                });
            }
        }
    }
});

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(404)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(402),
  /* template */
  __webpack_require__(408),
  /* scopeId */
  "data-v-4275a0c0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(405)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(403),
  /* template */
  __webpack_require__(409),
  /* scopeId */
  "data-v-797fef6f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "account__main"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nostyle account-nav account-sub-nav kd-row-middle"
  }, [_c('ul', {
    staticClass: "account-nav-item account-nav-money-in-company"
  }, [_c('h3', {
    staticClass: "account-nav-icon icon-money-in-company"
  }, [_vm._v("个人钱包")]), _vm._v(" "), (_vm.zxsfstatus) ? _c('router-link', {
    attrs: {
      "to": {
        path: '/account/money-in-company-zxsf',
        query: {
          chargeType: 'xrsf'
        }
      },
      "tag": "li"
    }
  }, [_c('a', [_vm._v(_vm._s(_vm.zxsfName))])]) : _vm._e(), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/money-in",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("在线充值")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/money-in-company",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("公司入款")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": _vm.goToMoneOut
    }
  }, [_vm._v("线上出款")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/record-of-money-in",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("交易记录")])]), _vm._v(" "), (_vm.showedAccountPrizes) ? _c('router-link', {
    attrs: {
      "to": "/account/prizes",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("抽奖记录")])]) : _vm._e(), _vm._v(" "), (_vm.hasTransfer) ? _c('router-link', {
    attrs: {
      "to": "/account/transfer-money",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("额度转换")])]) : _vm._e(), _vm._v(" "), (_vm.hasTransfer) ? _c('router-link', {
    attrs: {
      "to": "/account/money-collection",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("资金归集")])]) : _vm._e()], 1), _vm._v(" "), _c('ul', {
    staticClass: "account-nav-item account-nav-record-of-playing"
  }, [_c('h3', {
    staticClass: "account-nav-icon icon-record-of-playing"
  }, [_vm._v("我的购彩")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/record-of-playing",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("投注记录")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": _vm.gameRecordLink,
      "tag": "li"
    }
  }, [_c('a', [_vm._v("开奖记录")])])], 1), _vm._v(" "), _c('ul', {
    staticClass: "account-nav-item account-nav-edit-profile"
  }, [_c('h3', {
    staticClass: "account-nav-icon icon-edit-profile"
  }, [_vm._v("账户设置")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/edit-profile",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("基本信息")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/bank-info",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("提款卡绑定")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/setting",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("基本设置")])])], 1), _vm._v(" "), _c('ul', {
    staticClass: "account-nav-item account-nav-liquidity-of-balance-sheet"
  }, [_c('h3', {
    staticClass: "account-nav-icon icon-liquidity-of-balance-sheet"
  }, [_vm._v("账户清单")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/liquidity-of-balance-sheet",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("账户清单")])])], 1), _vm._v(" "), _c('ul', {
    staticClass: "account-nav-item account-nav-promotion"
  }, [_c('h3', {
    staticClass: "account-nav-icon icon-promotion"
  }, [_vm._v("代理推广")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/promotion",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("代理推广")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/my-downline-members",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("推广用户")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": {
        name: 'AccountDownlineRecords'
      },
      "tag": "li"
    }
  }, [_c('a', [_vm._v("代理报表")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": {
        name: 'AccountDownlineList'
      },
      "tag": "li"
    }
  }, [_c('a', [_vm._v("代理管理")])])], 1), _vm._v(" "), _c('ul', {
    staticClass: "account-nav-item account-nav-messages"
  }, [_c('h3', {
    staticClass: "account-nav-icon icon-messages"
  }, [_vm._v("消息中心")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/messages",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("消息中心")])])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('mod-account-sub-nav', {
    staticClass: "account-sub-nav--money"
  }, [_c('router-link', {
    attrs: {
      "to": "/account/money-in",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("在线充值")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/money-in-company",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("公司入款")])]), _vm._v(" "), _c('li', {
    class: {
      active: _vm.isMoneyOut
    }
  }, [_c('a', {
    on: {
      "click": _vm.goToMoneOut
    }
  }, [_vm._v("线上出款")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/record-of-money-in",
      "tag": "li"
    }
  }, [_c('a', [_vm._v("交易记录")])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "AccountSubNavMoneyInOut2",
    props: ["chargeType"],
    data: function data() {
        return {};
    },

    computed: {
        userType: function userType() {
            return this.$store.state.user.userType;
        },
        zxsfstatus: function zxsfstatus() {
            return this.$store.state.zxsfstatus;
        },
        zxsfName: function zxsfName() {
            return this.$store.state.zxsfName;
        }
    },
    methods: {
        goToMoneOut: function goToMoneOut() {
            if (this.userType === 2) {
                this.$message({
                    message: "该会员暂时不支持提现！",
                    type: "warning"
                });
                return;
            } else {
                this.$router.push({
                    name: 'AccountMoneyOut'
                });
            };
        }
    }
});

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SiteAK_src_components_OnlineServiceFloat__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SiteAK_src_components_OnlineServiceFloat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__SiteAK_src_components_OnlineServiceFloat__);



/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__SiteAK_src_components_OnlineServiceFloat___default.a],
    computed: {
        appQrcode: function appQrcode() {
            var downloadUrl = '';
            if (this.contactWay.qrurl) {
                downloadUrl = this.contactWay.qrurl;
            } else {
                downloadUrl = window.location.protocol + '//' + window.location.host + '/#/app';
            }
            return 'base/url_qr.ashx?url=' + encodeURIComponent(downloadUrl);
        }
    }
});

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_OnlineServicePromptbox__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_OnlineServicePromptbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_OnlineServicePromptbox__);




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'OnlineServiceFloat',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_components_OnlineServicePromptbox___default.a],
    data: function data() {
        return {
            visible: true,
            phone: '',
            serviceTitleHHGj: false
        };
    },

    methods: {
        close2: function close2() {
            this.visible = false;
        }
    }
});

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(459),
  /* template */
  __webpack_require__(536),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(462),
  /* template */
  __webpack_require__(537),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(575),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(464),
  /* template */
  __webpack_require__(541),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ul', {
    staticClass: "charge-titles nostyle"
  }, [_c('li', {
    staticClass: "title-item"
  }, [_c('div', [_c('div', {
    staticClass: "wrap iwrapgsrk"
  }, [_c('img', {
    attrs: {
      "src": '/static/images/gsrk.svg'
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "titlename",
    class: {
      active: _vm.chargeType === 'gsrk'
    }
  }, [_vm._v("公司入款")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/money-in-company"
    }
  }, [_vm._v("公司入款")])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "title-item"
  }, [_c('div', [_c('div', {
    staticClass: "wrap iwrapzxcz"
  }, [_c('img', {
    attrs: {
      "src": '/static/images/zxcz.svg'
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "titlename",
    class: {
      active: _vm.chargeType === 'zxcz'
    }
  }, [_vm._v("在线充值")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/money-in"
    }
  }, [_vm._v("在线充值")])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "title-item"
  }, [_c('div', {
    staticClass: "wrap iwrapxsck"
  }, [_c('img', {
    attrs: {
      "src": '/static/images/xsck.svg'
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "titlename",
    class: {
      active: _vm.chargeType === 'xsck'
    }
  }, [_vm._v("线上出款")]), _vm._v(" "), _c('a', {
    on: {
      "click": _vm.goToMoneOut
    }
  }, [_vm._v("线上出款")])]), _vm._v(" "), _c('li', {
    staticClass: "title-item"
  }, [_c('div', {
    staticClass: "wrap iwrapjyjl"
  }, [_c('img', {
    attrs: {
      "src": '/static/images/jyjl.svg'
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "titlename",
    class: {
      active: _vm.chargeType === 'jyjl'
    }
  }, [_vm._v("交易记录")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/account/record-of-money-in"
    }
  }, [_vm._v("交易记录")])], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "float-online-service"
  }, [_c('a', {
    staticClass: "float-online-service__head",
    on: {
      "click": _vm.goChat
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/float-redpack.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "float-online-service__body"
  }, [_c('ul', {
    staticClass: "nostyle float-call__list"
  }, [_vm._l((_vm.custOrder), function(x) {
    return [(x === 'W') ? _vm._l((_vm.contactWeixin), function(weixin, wxIndex) {
      return _c('li', {
        key: weixin,
        staticClass: "float-call__item js-copy-weixin",
        attrs: {
          "data-clipboard-text": weixin
        },
        on: {
          "click": function($event) {
            return _vm.manualCopy(weixin)
          },
          "mouseenter": function($event) {
            return _vm.showQrcode(weixin, wxIndex)
          },
          "mouseleave": _vm.hideQrcode
        }
      }, [_vm._v("\n                        微信客服\n                    ")])
    }) : (x === 'Q') ? _vm._l((_vm.qqLinks), function(qq) {
      return _c('li', {
        key: qq,
        staticClass: "float-call__item float-call__item--qq"
      }, [_vm._v("\n                        QQ客服\n                        "), _c('a', {
        staticClass: "kd-cover-hidden",
        attrs: {
          "href": qq
        }
      })])
    }) : (x === 'Z') ? [_c('li', {
      staticClass: "float-call__item float-call__item--chat",
      class: {
        'float-call__item--off': !!_vm.inlineCustMsg
      },
      on: {
        "click": _vm.openOnlineService
      }
    }, [_vm._v("\n                        在线客服\n                    ")])] : _vm._e()]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "float-online-service__qrcode"
  }, [_vm._l((4), function(x) {
    return _c('div', {
      staticClass: "float-online-service__qrcorner"
    })
  }), _vm._v(" "), _c('img', {
    staticClass: "float-online-service__qrimg",
    attrs: {
      "src": _vm.appQrcode,
      "alt": "二维码"
    }
  }), _vm._v(" "), _c('p', [_vm._v("手机APP下载")])], 2), _vm._v(" "), (_vm.qrcode && _vm.qrcode.img && _vm.contactWay.CusWxImgsUrl) ? _c('div', {
    staticClass: "float-online-service__wxqrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrcode.img,
      "alt": "二维码"
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.qrcode.weixin))])]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    staticClass: "float-online-service"
  }, [_c('a', {
    staticClass: "float-online-service__close",
    on: {
      "click": _vm.close2
    }
  }, [_c('i', {
    staticClass: "icon icon-times"
  })]), _vm._v(" "), _c('div', {
    staticClass: "float-online-service__head"
  }, [(_vm.showRedpack) ? _c('a', {
    staticClass: "float-online-service__chat",
    on: {
      "click": _vm.goChat
    }
  }, [_c('span', {
    staticClass: "float-online-service__textlg"
  }, [_vm._v("\n                红包福利\n            ")])]) : (_vm.serviceTitleHHGj) ? _c('span', {
    staticClass: "float-online-service__chat float-online-service__textlg"
  }, [_vm._v("在线客服")]) : _c('span', {
    staticClass: "float-online-service__chat float-online-service__textlg"
  }, [_vm._v("在线联系")])]), _vm._v(" "), _c('ul', {
    staticClass: "nostyle float-call__list"
  }, [_vm._l((_vm.custOrder), function(x) {
    return [(x === 'W') ? _vm._l((_vm.contactWeixin), function(weixin, wxIndex) {
      return _c('li', {
        key: weixin,
        staticClass: "float-call__item js-copy-weixin",
        attrs: {
          "data-clipboard-text": weixin
        },
        on: {
          "click": function($event) {
            return _vm.manualCopy(weixin)
          },
          "mouseenter": function($event) {
            return _vm.showQrcode(weixin, wxIndex)
          },
          "mouseleave": _vm.hideQrcode
        }
      }, [_vm._v("\n                    微信客服\n                ")])
    }) : (x === 'Q') ? _vm._l((_vm.qqLinks), function(qq) {
      return _c('li', {
        key: qq,
        staticClass: "float-call__item float-call__item--qq"
      }, [_vm._v("\n                    QQ客服\n                    "), _c('a', {
        staticClass: "kd-cover-hidden",
        attrs: {
          "href": qq
        }
      })])
    }) : (x === 'Z') ? [_c('li', {
      staticClass: "float-call__item float-call__item--chat",
      class: {
        'float-call__item--off': !!_vm.inlineCustMsg
      },
      on: {
        "click": _vm.openOnlineService
      }
    }, [_vm._v("\n                    在线客服\n                ")])] : _vm._e()]
  })], 2), _vm._v(" "), (_vm.qrcode && _vm.qrcode.img && _vm.contactWay.CusWxImgsUrl) ? _c('div', {
    staticClass: "float-online-service__wxqrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrcode.img,
      "alt": "二维码"
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.qrcode.weixin))])]) : _vm._e()]) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = __webpack_require__.i({"NODE_ENV":"production"}).NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(593);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(592);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(119)))

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInCsDitch__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInCsDitch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInCsDitch__);



/* harmony default export */ __webpack_exports__["default"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInCsDitch___default.a
});

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInCompany2__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInCompany2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInCompany2__);



var isUc = /UCBrowser/i.test(window.navigator.userAgent);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "ApplyPay",
    data: function data() {
        return {
            clipboard: false,
            supportClipboard: false,
            redpackTitle: '专享闪付',
            isPC: false
        };
    },

    computed: {
        isOpened: function isOpened() {
            return this.$store.state.isOpenedApplyPay;
        },
        isOpenService: function isOpenService() {
            return this.$store.state.isOpenedOnlineService;
        }
    },

    beforeDestroy: function beforeDestroy() {
        if (this.clipboard !== false) {
            this.clipboard.destroy();
            this.clipboard = false;
        }
    },

    methods: {
        close: function close() {
            this.$store.commit('setOpenedApplePay', false);
        }
    },
    components: {
        modAccountMoneyInCompany2: __WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInCompany2___default.a
    }
});

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_AccountMoneyInTypeBody__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_AccountMoneyInTypeBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_AccountMoneyInTypeBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_common_promptcharge__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_common_promptcharge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_common_promptcharge__);







/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'PageAccountMoneyInCompany2',
    components: {
        promptcharge: __WEBPACK_IMPORTED_MODULE_3_components_common_promptcharge___default.a
    },
    data: function data() {
        return {
            paylist: [],
            showdot: false,
            currentslide: '',
            current: 0,
            amount: '',
            uname: '',
            promptshow: false,
            min: 1,
            max: 10000000,
            chargeType: '',
            ORDER_NO: ''
        };
    },
    created: function created() {
        this.fetchPayList();
        this.getNewMsg();
    },

    computed: {
        userid: function userid() {
            return this.$store.state.user.userId;
        },
        token: function token() {
            return this.$store.state.user.token;
        },
        selectmoney: function selectmoney() {
            if (this.$store.state.selectmoney) {
                return this.$store.state.selectmoney.split(",");
            };
        },
        addchargelist: function addchargelist() {
            return this.$store.state.addchargelist;
        }
    },
    watch: {
        amount: function amount(val) {
            if (val !== '' && val < 1) {
                this.amount = 1;
            }
            if (val > this.max && this.max > 0) {
                this.amount = this.max;
            }
        },
        current: function current(val) {
            if (val) {
                this.amount = val;
            }
        }
    },
    methods: {
        replaceIcons: function replaceIcons(str) {
            return str.replace('支付宝', 'payalipay').replace('微信', 'payweixin').replace('银行卡', 'unionPay').replace('财付通', 'paytenpay').replace('QQ钱包', 'payqq').replace('百度钱包', 'paybaidu').replace('京东支付', 'payjd').replace('CGPAY', 'cgpay').replace('信用卡', 'unionPay').replace('花呗', 'payhb');
        },
        translogo: function translogo(name) {
            switch (name) {
                case '支付宝':
                    return "payalipay.svg";break;
                case '微信':
                    return "payweixin.svg";break;
                case '银行卡':
                    return "union-pay.svg";break;
                case '财付通':
                    return "paytenpay.svg";break;
                case 'QQ钱包':
                    return "qq.svg";break;
                case '百度钱包':
                    return "baidu.svg";break;
                case '京东支付':
                    return "jdpay.svg";break;
                case 'CGPAY':
                    return "cgpay.png";break;
                case '信用卡':
                    return "unionPay.png";break;
                case '花呗':
                    return "payhb.png";break;
                case '云闪付':
                    return "payysf.png";break;
                case '其它':
                    return "payother.png";break;
                default:
                    return;
            }
        },
        logoclass: function logoclass(name) {
            return this.translogo(name).split('.')[0];
        },
        fetchPayList: function fetchPayList() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_api__["apiGetKeFuPayList"]().then(function (response) {
                var json = response.body;
                json.list.forEach(function (element) {
                    if (element.pay) {
                        var payarr = _this.replaceIcons(element.pay).split(",");
                        if (payarr.length > 3) {
                            return element.pay = payarr.splice(0, 3);
                        } else {
                            return element.pay = payarr;
                        }
                    }
                });
                _this.paylist = json.list;
            }).catch(function (e) {
                console.log(e);
            });
        },
        goToCharge: function goToCharge(wayId, name) {
            var _this2 = this;

            var data = { wayid: wayId };
            __WEBPACK_IMPORTED_MODULE_0_api__["apiGotoPay"](data).then(function (response) {
                var json = response.body;
                if (json && json.S === "200") {
                    var oid = json.result ? json.result.oid : "";
                    var url = "chat.html#/?";

                    var params = "wayid=" + wayId + "&oid=" + oid + "&name=" + name + "&apiuserid=" + _this2.userid + "&apitoken=" + _this2.token;
                    params = encodeURIComponent(params);
                    window.location.href = url + params;
                } else {
                    _this2.$message({
                        message: json.S + ':' + json.D,
                        type: "warning"
                    });
                }
            }).catch(function (e) {
                console.log(e);
            });
        },
        goUnread: function goUnread() {
            var url = "chat.html#/chatlist?";

            var params = "apiuserid=" + this.userid + "&apitoken=" + this.token;
            params = encodeURIComponent(params);
            window.location.href = url + params;
        },
        getNewMsg: function getNewMsg() {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_0_api__["apiGetMsgNew"]().then(function (response) {
                var json = response.body;
                if (json == '1') {
                    _this3.showdot = true;
                }
            });
        },
        addamount: function addamount(num) {
            if (num) {
                this.current = num;
                if (this.amount) {
                    this.amount = parseInt(this.amount) + parseInt(num);
                } else {
                    this.amount = parseInt(num);
                }
            }
        },
        closeprompt: function closeprompt(data) {
            if (data) {
                this.promptshow = false;
            }
        },
        submit: function submit(wayid) {
            var _this4 = this;

            if (!this.amount) {
                this.$message({
                    message: "充值金额不能为空！",
                    type: "error"
                });
                return;
            }
            if (this.chargeType == '银行卡') {
                if (!this.uname) {
                    this.$message({
                        message: "姓名不能为空！",
                        type: "error"
                    });
                    return;
                } else if (!/^[\u4e00-\u9fa5]+[·]?[\u4e00-\u9fa5]+[0-9]*$/.test(this.uname)) {
                    this.$message({
                        message: '姓名只能是中文或中文+数字结尾！',
                        type: "warning"
                    });
                    return;
                }
            }

            var data = {
                id: wayid,
                amount: this.amount,
                uname: this.uname
            };
            __WEBPACK_IMPORTED_MODULE_0_api__["apiCreateKefuOrder"](data).then(function (res) {
                try {
                    if (res && res.body) {
                        var json = res.body;
                        if (json.ORDER_NO) {
                            _this4.ORDER_NO = res.ORDER_NO;
                            _this4.promptshow = true;
                            _this4.amount = '';
                            _this4.uname = '';
                            _this4.currentslide = '';
                        } else {
                            _this4.$message({
                                message: json.S + ':' + json.D,
                                type: "error"
                            });
                            return;
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            });
        },
        currentClick: function currentClick(item) {
            this.amount = '';
            this.uname = '';
            this.current = 0;
            this.chatdata = {};
            this.currentslide = this.currentslide === item.id ? '' : item.id;
            this.chargeType = item.tname;
        }
    }
});

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api__ = __webpack_require__(7);



var isUc = /UCBrowser/i.test(window.navigator.userAgent);
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'AccountMoneyInCsDitch',
    data: function data() {
        return {
            currentslide: ''
        };
    },

    computed: {
        addchargelist: function addchargelist() {
            return this.$store.state.csDitchList;
        }
    },
    mounted: function mounted() {},

    watch: {},
    methods: {
        openApplyPay: function openApplyPay() {
            this.$store.commit('setOpenedApplePay', true);
        },
        goUnread: function goUnread() {
            var url = "chat.html#/chatlist?";

            var params = "apiuserid=" + this.userid + "&apitoken=" + this.token;
            params = encodeURIComponent(params);
            window.location.href = url + params;
        },
        replaceIcons: function replaceIcons(str) {
            return str.replace('支付宝', 'payalipay').replace('微信', 'payweixin').replace('银行卡', 'unionPay').replace('财付通', 'paytenpay').replace('QQ钱包', 'payqq').replace('百度钱包', 'paybaidu').replace('京东支付', 'payjd').replace('CGPAY', 'cgpay').replace('信用卡', 'unionPay').replace('花呗', 'payhb');
        },
        translogo: function translogo(name) {
            switch (name) {
                case '支付宝':
                    return "payalipay.svg";break;
                case '微信':
                    return "payweixin.svg";break;
                case '银行卡':
                    return "union-pay.svg";break;
                case '财付通':
                    return "paytenpay.svg";break;
                case 'QQ钱包':
                    return "qq.svg";break;
                case '百度钱包':
                    return "baidu.svg";break;
                case '京东支付':
                    return "jdpay.svg";break;
                case 'CGPAY':
                    return "cgpay.png";break;
                case '信用卡':
                    return "unionPay.png";break;
                case '花呗':
                    return "payhb.png";break;
                case '云闪付':
                    return "payysf.png";break;
                case '新人闪付':
                    return "zxsf.svg";break;
                case '其它':
                    return "payother.png";break;
                default:
                    return;
            }
        },
        logoclass: function logoclass(name) {
            return this.translogo(name).split('.')[0];
        },
        currentClick: function currentClick(item) {
            this.amount = '';
            this.uname = '';
            this.current = 0;
            this.chatdata = {};
            this.currentslide = this.currentslide === item.id ? '' : item.id;
            this.chargeType = item.tname;
        }
    }
});

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api__ = __webpack_require__(7);



var isUc = /UCBrowser/i.test(window.navigator.userAgent);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ComAccountMoneyInTypeBody',
    props: ['type'],
    data: function data() {
        return {
            amount: '',
            name: '',
            clipboard: false,
            remark: '',
            isPC: false,
            version: 0,
            rechargeTypeField: false,
            openRemarks: true,
            isHCW: false,
            current: 0,
            showSelectMoney: false
        };
    },

    computed: {
        onlineServiceLink: function onlineServiceLink() {
            return this.$store.state.techInfo;
        },
        isZFBQRCode: function isZFBQRCode() {
            return this.type.code.indexOf('ZFBQRCode') > -1;
        },
        isWYZZ: function isWYZZ() {
            return this.type.code.indexOf('WYZZ') > -1;
        },
        isJiaoCheng: function isJiaoCheng() {
            return this.type.code.indexOf('INTRO') > -1;
        },
        theme: function theme() {
            if (this.isZFBQRCode) {
                return 'zfbqrcode';
            }
            if (this.isWYZZ) {
                return 'wyzz';
            }
            return this.type.code.toLowerCase();
        },
        nickName: function nickName() {
            return this.$store.state.user.nickName;
        },
        supportClipboard: function supportClipboard() {
            var flag = false,
                cb = null,
                el = document.documentElement;
            if (typeof Clipboard !== 'undefined' && (cb = new Clipboard(el)).constructor.isSupported()) {
                flag = 'clipboard';
            } else if (typeof ZeroClipboard !== 'undefined' && (cb = new ZeroClipboard(el)).constructor.isFlashUnusable()) {
                flag = 'zeroclipboard';
            } else {
                if (cb !== null) {
                    cb.destroy();
                }
                if (typeof ZeroClipboard !== 'undefined') {
                    ZeroClipboard.destroy();
                }
            }
            return flag;
        },
        userType: function userType() {
            return this.$store.state.user.userType;
        },
        ifApplyBankCard: function ifApplyBankCard() {
            return this.$store.state.ifApplyBankCard;
        },
        accountNumDisplay: function accountNumDisplay() {
            if (this.version > 0 && this.type.accountNum && this.type.accountNum.length > 10) {
                return this.type.accountNum.substring(0, 6) + '***' + this.type.accountNum.substring(this.type.accountNum.length - 4);
            }
            return this.type.accountNum;
        },
        selectmoney: function selectmoney() {
            if (this.$store.state.selectmoney) {
                return this.$store.state.selectmoney.split(",");
            };
        }
    },
    mounted: function mounted() {
        this.name = this.nickName;
    },

    watch: {
        amount: function amount(val) {
            if (val !== '' && val < 1) {
                this.amount = 1;
            }
            if (val > this.type.max && this.type.max > 0) {
                this.amount = this.type.max;
            }
        },
        current: function current(val) {
            if (val) {
                this.amount = val;
            }
        }
    },
    methods: {
        validators: function validators() {
            if (this.amount === '') {
                this.$message({
                    message: "充值金额不能为空哦！"
                });
                return false;
            }

            return true;
        },
        contactService: function contactService() {
            this.$router.push({
                name: 'OnlineService'
            });
        },
        goToRecharge: function goToRecharge() {
            if (this.validators() === false) return;

            this.createOrderNo({
                method: this.type.name,
                amount: this.amount,
                type: this.type.code
            });
        },
        createOrderNo: function createOrderNo(payload) {
            var _this = this;

            if (this.isPC) {
                window.open('money/I_create_payment_order_pc.ashx?payment_platform=' + payload.method + '&payment_amount=' + payload.amount + '&payment_type=' + payload.type);
                return;
            }
            return __WEBPACK_IMPORTED_MODULE_0_api__["apiCreateOrderOfMoneyIn"]({
                payment_platform: payload.method,
                payment_amount: payload.amount,
                payment_type: payload.type
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
                if (typeof json.S !== 'undefined') {
                    _this.$message({
                        message: json.S + ': ' + json.D,
                        type: "warning"
                    });
                    return;
                }
                var url = json.PAY_URL + (json.PAY_URL.indexOf('?') > -1 ? '&' : '?') + 'ORDER_NO=' + json.ORDER_NO + '&ORDER_AMOUNT=' + _this.amount + '&BACK_URL=' + encodeURIComponent(json.BACK_URL);
                _this.amount = '';

                window.location.href = url;
            }).catch(function (error) {
                console.log(error);
                _this.$message({
                    message: "充值出错啦！",
                    type: "error",
                    force: true
                });
            });
        },
        createTransferOrderNo: function createTransferOrderNo() {
            var _this2 = this;

            if (this.amount === '') {
                this.$message({
                    message: "充值金额不能为空哦！"
                });
                return;
            }
            var notBankCard = this.type.rechargeType === '微信转账到银行卡' || this.type.rechargeType === '支付宝转账到银行卡';
            if (this.rechargeTypeField && this.remark === '' && notBankCard) {
                this.$message({
                    message: (this.type.rechargeType === '微信转账到银行卡' ? '微信上的真实姓名' : '支付宝上的真实姓名') + "不能为空哦！"
                });
                return;
            }
            return __WEBPACK_IMPORTED_MODULE_0_api__["apiCreateMoneyTransferOrder"]({
                id: this.type.id,
                payment_amount: this.amount,
                remark: this.remark
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
                if (typeof json.S !== 'undefined') {
                    _this2.$message({
                        message: json.S + ': ' + json.D,
                        type: "warning"
                    });
                    return;
                }
                _this2.$message({
                    message: "提交成功",
                    type: "success"
                });
                _this2.$router.push({
                    name: 'AccountRecordOfMoneyIn',
                    query: {
                        ORDER_NO: json.ORDER_NO
                    }
                });
            }).catch(function (error) {
                console.log(error);
                _this2.$message({
                    message: "充值出错啦！",
                    type: "error"
                });
            });
        },
        createQrcodeOrderNo: function createQrcodeOrderNo() {
            var _this3 = this;

            if (this.validators() === false) return;
            if (this.type.remarkTitle && this.remark === '') {
                this.$message({
                    message: this.type.remarkTitle + "不能为空哦！"
                });
                return;
            }
            return __WEBPACK_IMPORTED_MODULE_0_api__["apiCreateMoneyQrcodeOrder"]({
                id: this.type.id,
                payment_amount: this.amount,
                remark: this.remark
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
                if (typeof json.Msg !== 'undefined') {
                    _this3.$message({
                        message: json.Msg,
                        type: "warning"
                    });
                    return;
                }
                _this3.$message({
                    message: "提交成功",
                    type: "success"
                });
                _this3.$router.push({
                    name: 'AccountRecordOfMoneyIn',
                    query: {
                        ORDER_NO: json.ORDER_NO
                    }
                });
            }).catch(function (error) {
                console.log(error);
                _this3.$message({
                    message: "充值出错啦！",
                    type: "error"
                });
            });
        },
        beforeDestroy: function beforeDestroy() {
            if (this.clipboard !== false) {
                this.clipboard.destroy();
                this.clipboard = false;
            }
        },
        copy: function copy(_text) {
            this.clipboard && this.clipboard.destroy();
            var vm = this,
                clipboard = false,
                selector = '.bank-order-item-copy',
                message = '\u6210\u529F\u590D\u5236<strong class="important">' + _text + '</strong>\u5230\u526A\u8D34\u677F\uFF01';
            if (this.supportClipboard === 'clipboard') {
                clipboard = new Clipboard(selector, {
                    text: function text() {
                        return _text;
                    }
                });
                if (!isUc) {
                    clipboard.on('success', function (e) {
                        vm.$message({
                            type: "success",
                            message: message
                        });
                    });
                }
                clipboard.on('error', function (e) {
                    console.log(e);
                });
            } else if (this.supportClipboard === 'zeroclipboard') {
                clipboard = new ZeroClipboard();
                clipboard.setText(_text);
                if (!isUc) {
                    clipboard.on('ready', function () {
                        this.on('copy', function () {
                            vm.$message({
                                type: "success",
                                message: message
                            });
                        });
                    });
                }
                clipboard.on('error', function (event) {
                    console.log('error[name="' + event.name + '"]: ' + event.message);
                    ZeroClipboard.destroy();
                });
            } else {
                this.$message({
                    message: '\u60A8\u7684\u6D4F\u89C8\u5668\u7248\u672C\u8F83\u4F4E\uFF0C\u8BF7\u624B\u52A8\u590D\u5236<strong class="important">' + _text + '</strong>\uFF0C\u6216\u8005\u66F4\u6362\u6D4F\u89C8\u5668\u540E\u518D\u8BD5\uFF01',
                    force: true
                });
            }
            if (this.supportClipboard && isUc) {
                this.$message({
                    type: "success",
                    message: message
                });
            }
            this.clipboard = clipboard;
        },
        addamount: function addamount(num) {
            if (num) {
                this.current = num;
                if (this.amount) {
                    this.amount = parseInt(this.amount) + parseInt(num);
                } else {
                    this.amount = parseInt(num);
                }
            }
        }
    }
});

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "promptcharge",
    data: function data() {
        return {
            clipcopy: null,
            currentItem: {},
            iszfb: false,
            isbankcard: false,
            isweixin: false
        };
    },

    props: ["chargeType", "chargeList"],
    mounted: function mounted() {
        this.getCurrentItem();
    },

    methods: {
        copyFun: function copyFun(btnclass) {
            var vm = this;
            if (Clipboard.isSupported()) {
                vm.clipcopy = new Clipboard(btnclass);
                vm.clipcopy.on('success', function (e) {
                    vm.$message({
                        message: "复制成功！",
                        type: 'success'
                    });
                    e.clearSelection();
                });
                vm.clipcopy.on('error', function (e) {
                    vm.$message({
                        message: "请手动长按文字选择[拷贝]复制！",
                        type: 'warn'
                    });
                });
            } else {
                vm.$message({
                    message: "请手动长按文字选择[拷贝]复制！",
                    type: 'warn'
                });
            }
        },
        close: function close() {
            this.$emit("closeprompt", { promptshow: false });
        },
        getCurrentItem: function getCurrentItem() {
            var _this = this;

            this.chargeList.forEach(function (item) {
                if (_this.chargeType.indexOf(item.tname) !== -1) {
                    if (item.tname == '银行卡') {
                        item.tip = item.tip.replace(/\|/g, '<br>');
                    }
                    _this.currentItem = item;
                    _this.getType();
                    return;
                }
            });
        },
        getType: function getType() {
            switch (this.currentItem.tname) {
                case "银行卡":
                    this.isbankcard = true;break;
                case "支付宝":
                    this.iszfb = true;break;
                case "微信":
                    this.isweixin = true;break;
                default:
                    return;
            }
        },
        saveimg: function saveimg(Url) {
            var oa = document.createElement('a');
            oa.href = Url;
            oa.download = '';
            var evt = document.createEvent("MouseEvents");
            evt.initEvent("click", true, true);
            oa.dispatchEvent(evt);
        },
        translogo: function translogo(name) {
            switch (name) {
                case "支付宝":
                    return "payalipay";break;
                case "微信":
                    return "payweixin";break;
                case "银行卡":
                    return "unionPay";break;
                case "财付通":
                    return "paytenpay";break;
                case "QQ钱包":
                    return "payqq";break;
                case "百度钱包":
                    return "paybaidu";break;
                case "京东支付":
                    return "payjd";break;
                case "CGPAY":
                    return "cgpay";break;
                case "云闪付":
                    return "payysf";break;
                case "其它":
                    return "payother";break;
                default:
                    return;
            }
        },
        logoname: function logoname(name) {
            if (this.translogo(name)) {
                return this.translogo(name).split('.')[0];
            }
        }
    }
});

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SiteAK_src_components_AccountMoneyInTypeBody__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SiteAK_src_components_AccountMoneyInTypeBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__SiteAK_src_components_AccountMoneyInTypeBody__);



/* harmony default export */ __webpack_exports__["default"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_0__SiteAK_src_components_AccountMoneyInTypeBody___default.a
});

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInTypeBody__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInTypeBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInTypeBody__);




/* harmony default export */ __webpack_exports__["default"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_0_components_common_AccountMoneyInTypeBody___default.a,
    data: function data() {
        return {
            version: 0,
            isPC: true
        };
    }
});

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(552),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(588)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(554),
  /* template */
  __webpack_require__(627),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(587)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(560),
  /* template */
  __webpack_require__(626),
  /* scopeId */
  "data-v-0c3460fd",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(589)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(561),
  /* template */
  __webpack_require__(639),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(562),
  /* template */
  __webpack_require__(644),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(590)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(565),
  /* template */
  __webpack_require__(646),
  /* scopeId */
  "data-v-6598f830",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(578),
  /* template */
  __webpack_require__(624),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "account__form type-body",
    class: 'method-' + _vm.theme
  }, [(_vm.type.status === 1) ? [(_vm.isZFBQRCode) ? [_c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("充值方式")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('p', {
    staticClass: "info__title"
  }, [_vm._v(_vm._s(_vm.type.title))]), _vm._v(" "), _c('p', {
    staticClass: "info__intro"
  }, [_vm._v(_vm._s(_vm.type.info))])])]), _vm._v(" "), _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("扫码充值")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [(_vm.type.QRCode) ? _c('figure', {
    staticClass: "qrcode"
  }, [_c('img', {
    staticClass: "qrcode__img",
    attrs: {
      "src": _vm.type.QRCode
    }
  }), _vm._v(" "), (_vm.type.caption) ? _c('figcaption', {
    staticClass: "notices-list notices-list--qrcode",
    domProps: {
      "innerHTML": _vm._s(_vm.type.caption)
    }
  }) : _vm._e()]) : _vm._e()])]), _vm._v(" "), (_vm.type.isUse == 1) ? [_c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("充值金额")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number.lazy",
      value: (_vm.amount),
      expression: "amount",
      modifiers: {
        "number": true,
        "lazy": true
      }
    }, {
      name: "money",
      rawName: "v-money"
    }],
    attrs: {
      "type": "number",
      "placeholder": _vm.type.min + '-' + _vm.type.max + '元',
      "step": "0.01"
    },
    domProps: {
      "value": (_vm.amount)
    },
    on: {
      "change": function($event) {
        _vm.amount = _vm._n($event.target.value)
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), (_vm.type.remarkTitle) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v(_vm._s(_vm.type.remarkTitle))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.remark),
      expression: "remark",
      modifiers: {
        "trim": true
      }
    }, {
      name: "focus-fixed",
      rawName: "v-focus-fixed"
    }],
    attrs: {
      "type": "text",
      "placeholder": '请输入' + _vm.type.remarkTitle
    },
    domProps: {
      "value": (_vm.remark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.remark = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.type.remarkTitle) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }), _vm._v(" "), _c('kd-button', {
    staticClass: "main-button",
    on: {
      "click": _vm.createQrcodeOrderNo
    }
  }, [_c('span', [_vm._v("确认提交")])])], 1) : _vm._e()] : _vm._e()] : (_vm.isWYZZ) ? [(_vm.type.info) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("\n                   " + _vm._s(_vm.type.info) + "\n                ")])]) : _vm._e(), _vm._v(" "), (_vm.type.bankinfo !== 0) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("收款账号")]), _vm._v(" "), _c('div', {
    staticClass: "info bank-order"
  }, [_c('table', {
    staticClass: "bank-order-list"
  }, [_c('tr', [_c('td', [_vm._v("收款银行")]), _c('td', [(/^(\/|http)/i.test(_vm.type.iconName)) ? _c('i', {
    staticClass: "icon icon--img",
    style: ({
      backgroundImage: 'url(' + _vm.type.iconName + ')'
    })
  }) : _c('i', {
    staticClass: "icon",
    class: 'icon-' + _vm.type.iconName
  }), _vm._v(" " + _vm._s(_vm.type.detail) + " "), _c('a', {
    staticClass: "info__link bank-order-item-copy",
    on: {
      "click": function($event) {
        return _vm.copy(_vm.type.detail)
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("收款账号")]), _c('td', [_vm._v(_vm._s(_vm.accountNumDisplay) + " "), _c('a', {
    staticClass: "info__link bank-order-item-copy",
    on: {
      "click": function($event) {
        return _vm.copy(_vm.type.accountNum)
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("收款姓名")]), _c('td', [_vm._v(_vm._s(_vm.type.accountName) + " "), _c('a', {
    staticClass: "info__link bank-order-item-copy",
    on: {
      "click": function($event) {
        return _vm.copy(_vm.type.accountName)
      }
    }
  }, [_vm._v("复制")])])])])])]) : _vm._e(), _vm._v(" "), (_vm.type.commit !== 0) ? [_c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("充值金额")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number.lazy",
      value: (_vm.amount),
      expression: "amount",
      modifiers: {
        "number": true,
        "lazy": true
      }
    }, {
      name: "money",
      rawName: "v-money"
    }],
    attrs: {
      "type": "number",
      "placeholder": _vm.type.min + '-' + _vm.type.max + '元',
      "step": "0.01"
    },
    domProps: {
      "value": (_vm.amount)
    },
    on: {
      "change": function($event) {
        _vm.amount = _vm._n($event.target.value)
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("  备注：")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput kd-textinput--remarkbank"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.remark),
      expression: "remark",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "rows": "5",
      "maxlength": "165"
    },
    domProps: {
      "value": (_vm.remark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.remark = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])])] : _vm._e(), _vm._v(" "), (_vm.type.reminder || _vm.type.friendshipTips) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.type.reminder)
    }
  }), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.type.friendshipTips)
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.type.commit !== 0) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }), _vm._v(" "), _c('kd-button', {
    staticClass: "main-button",
    on: {
      "click": _vm.createTransferOrderNo
    }
  }, [_c('span', [_vm._v("确认提交")])])], 1) : _vm._e()] : (_vm.isJiaoCheng) ? _c('div', {
    staticClass: "article",
    domProps: {
      "innerHTML": _vm._s(_vm.type.Content)
    }
  }) : [_c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("充值方式")]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('p', {
    staticClass: "info__title"
  }, [_vm._v(_vm._s(_vm.type.title))]), _vm._v(" "), _c('p', {
    staticClass: "info__intro"
  }, [_vm._v(_vm._s(_vm.type.info))])])]), _vm._v(" "), _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("充值金额")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number.lazy",
      value: (_vm.amount),
      expression: "amount",
      modifiers: {
        "number": true,
        "lazy": true
      }
    }, {
      name: "money",
      rawName: "v-money"
    }],
    attrs: {
      "type": "number",
      "placeholder": _vm.type.min + '-' + _vm.type.max + '元',
      "step": "0.01"
    },
    domProps: {
      "value": (_vm.amount)
    },
    on: {
      "change": function($event) {
        _vm.amount = _vm._n($event.target.value)
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }), _vm._v(" "), (_vm.type.remark) ? _c('div', {
    staticClass: "info",
    domProps: {
      "innerHTML": _vm._s(_vm.type.remark)
    }
  }) : _c('div', {
    staticClass: "info"
  }, [_vm._m(0)])]), _vm._v(" "), _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }), _vm._v(" "), _c('kd-button', {
    staticClass: "main-button",
    on: {
      "click": _vm.goToRecharge
    }
  }, [_c('span', [_vm._v("确认提交")])])], 1)]] : [_c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("\n                    " + _vm._s(_vm.userType == 2 ? '该会员暂时不支持充值' : '此充值通道不可用') + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }), _vm._v(" "), (!!_vm.onlineServiceLink === true) ? _c('a', {
    staticClass: "kd-button main-button",
    attrs: {
      "href": _vm.onlineServiceLink,
      "target": "_blank"
    }
  }, [_vm._v("请联系客服充值！")]) : _c('kd-button', {
    staticClass: "main-button",
    on: {
      "click": _vm.contactService
    }
  }, [_vm._v("请联系客服充值！")])], 1)]], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "nostyle notices-list"
  }, [_c('li', [_c('span', {
    staticClass: "notices-list__index"
  }, [_vm._v("1")]), _vm._v("使用电脑银行网银24小时实现在线支付实时到账！")]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "notices-list__index"
  }, [_vm._v("2")]), _vm._v("持有储蓄卡网银用户，请使用电脑在线支付充值，无需联系客服，24小时内实时到账！")]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "notices-list__index"
  }, [_vm._v("3")]), _vm._v("温馨提示：在您需要进行网银在线支付前，请先选择网站上的（电脑版）进行充值。")])])
}]}

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "charge-main"
  }, [_c('ul', {
    staticClass: "charge-type-list nostyle"
  }, [_vm._l((_vm.addchargelist), function(type, now) {
    return _c('div', {
      key: 'type' + now,
      staticClass: "charge-type module",
      class: {
        'active': _vm.currentslide === type.id
      }
    }, [_c('div', {
      staticClass: "contentwrap",
      on: {
        "click": function($event) {
          return _vm.currentClick(type)
        }
      }
    }, [_c('div', {
      staticClass: "headimg",
      class: 'head-' + _vm.logoclass(type.tname)
    }, [_c('img', {
      attrs: {
        "src": '/static/images/' + _vm.translogo(type.tname)
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "type-content"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(type.name) + "充值")]), _vm._v(" "), _vm._m(0, true)]), _vm._v(" "), _vm._m(1, true)]), _vm._v(" "), (_vm.currentslide === type.id) ? _c('div', {
      staticClass: "slidecon money-in"
    }, [_c('div', {
      staticClass: "kd-field"
    }, [_c('label', {
      staticClass: "kd-field-title"
    }, [_vm._v("充值金额：")]), _vm._v(" "), _c('div', {
      directives: [{
        name: "textinput",
        rawName: "v-textinput"
      }],
      staticClass: "kd-textinput"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number.lazy",
        value: (_vm.amount),
        expression: "amount",
        modifiers: {
          "number": true,
          "lazy": true
        }
      }, {
        name: "focus-fixed",
        rawName: "v-focus-fixed"
      }, {
        name: "money",
        rawName: "v-money"
      }],
      attrs: {
        "type": "number",
        "placeholder": "请输入金额",
        "step": "0.01"
      },
      domProps: {
        "value": (_vm.amount)
      },
      on: {
        "change": function($event) {
          _vm.amount = _vm._n($event.target.value)
        },
        "blur": function($event) {
          return _vm.$forceUpdate()
        }
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "notice"
    }, [_vm._v(" 充值金额范围 " + _vm._s(_vm.min) + "-" + _vm._s(_vm.max))])]), _vm._v(" "), (type.tname == '银行卡') ? _c('div', {
      staticClass: "kd-field"
    }, [_c('label', {
      staticClass: "kd-field-title"
    }, [_vm._v("姓 名：")]), _vm._v(" "), _c('div', {
      directives: [{
        name: "textinput",
        rawName: "v-textinput"
      }],
      staticClass: "kd-textinput"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.uname),
        expression: "uname"
      }],
      attrs: {
        "type": "text",
        "placeholder": "请输入姓名"
      },
      domProps: {
        "value": (_vm.uname)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.uname = $event.target.value
        }
      }
    })])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "kd-chips"
    }, _vm._l((_vm.selectmoney), function(chip, inde) {
      return _c('div', {
        key: inde,
        staticClass: "kd-chip",
        class: 'chip' + inde,
        on: {
          "click": function($event) {
            return _vm.addamount(chip)
          }
        }
      }, [_c('i', {
        staticClass: "icon"
      }), _vm._v(" "), _c('span', {
        class: {
          'active': _vm.current === chip
        }
      }, [_vm._v(_vm._s(chip) + "\n                            "), _vm._t("default")], 2)])
    }), 0), _vm._v(" "), _c('kd-button', {
      staticClass: "main-button",
      on: {
        "click": function($event) {
          return _vm.submit(type.id)
        }
      }
    }, [_c('span', [_vm._v("提 交")])])], 1) : _vm._e()])
  }), _vm._v(" "), _vm._l((_vm.paylist), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "charge-type",
      on: {
        "click": function($event) {
          return _vm.goToCharge(item.id, item.name)
        }
      }
    }, [_c('div', {
      staticClass: "contentwrap"
    }, [_c('div', {
      staticClass: "headimg"
    }, [(item.img) ? _c('img', {
      attrs: {
        "src": item.img
      }
    }) : _c('span', [_vm._v("官")])]), _vm._v(" "), _c('div', {
      staticClass: "type-content"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "bar-cons"
    }, [_c('span', {
      staticClass: "bar bar1"
    }, [_vm._v("官方快捷")]), _vm._v(" "), _vm._l((item.pay), function(ico, inow) {
      return _c('i', {
        key: inow,
        class: 'icon icon-' + ico
      })
    })], 2)]), _vm._v(" "), _vm._m(2, true)])])
  })], 2), _vm._v(" "), _c('transition', {
    attrs: {
      "enter-class": "enter",
      "enter-active-class": "transin",
      "leave-class": "leave",
      "leave-active-class": "transout"
    }
  }, [(_vm.promptshow) ? _c('promptcharge', {
    attrs: {
      "chargeType": _vm.chargeType,
      "chargeList": _vm.addchargelist
    },
    on: {
      "closeprompt": _vm.closeprompt
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bar-cons"
  }, [_c('span', {
    staticClass: "bar bar1"
  }, [_vm._v("官方认证")]), _vm._v(" "), _c('span', {
    staticClass: "bar bar2"
  }, [_vm._v("高效快捷")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "charge-btnwrap"
  }, [_c('i', {
    staticClass: "trigler"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "charge-btnwrap"
  }, [_c('a', {
    staticClass: "chargebtn"
  }, [_vm._v("充值")])])
}]}

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enter-active-class": "animated zoom-in",
      "leave-active-class": "animated bounce-out"
    }
  }, [(_vm.isOpened) ? _c('div', {
    staticClass: "apple-pay-wrapper"
  }, [_c('div', {
    staticClass: "icon-close",
    on: {
      "click": _vm.close
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('div', {
    staticClass: "apple-pay-components-box"
  }, [_c('div', {
    staticClass: "charge-banner"
  }, [_c('span', {
    staticClass: "dotl"
  }), _vm._v("\n          殿堂级支付体验，专人全程服务5秒内火速到账 \n          "), _c('span', {
    staticClass: "dotr"
  })]), _vm._v(" "), _c('div', {
    staticClass: "apple-pay-components-main"
  }, [_c('mod-account-money-in-company2')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "apple-pay-overlay",
    on: {
      "click": _vm.close
    }
  })]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cs-ditch-wrap"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        return _vm.openApplyPay()
      }
    }
  }, _vm._l((_vm.addchargelist), function(type, now) {
    return _c('div', {
      key: 'type' + now,
      staticClass: "charge-type module"
    }, [_c('div', {
      staticClass: "contentwrap",
      on: {
        "click": function($event) {
          return _vm.currentClick(type)
        }
      }
    }, [_c('div', {
      staticClass: "headimg",
      class: 'head-' + _vm.logoclass(type.tname)
    }, [_c('img', {
      attrs: {
        "src": '/static/images/' + _vm.translogo(type.tname)
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "type-content"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(type.name))]), _vm._v(" "), _c('div', {
      staticClass: "bar-cons"
    }, [_c('span', {
      staticClass: "bar bar2"
    }, [_vm._v(_vm._s(type.tname))]), _vm._v(" "), _c('span', {
      staticClass: "bar bar1"
    }, [_vm._v("高效快捷")])])]), _vm._v(" "), _vm._m(0, true)])])
  }), 0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "charge-btnwrap"
  }, [_c('span', {
    staticClass: "chargebtn"
  }, [_vm._v("充值")])])
}]}

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "type-body",
    class: 'method-' + _vm.theme
  }, [(_vm.type.status === 1) ? [(_vm.isZFBQRCode) ? [(_vm.type.QRCode) ? _c('figure', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.type.QRCode
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.type.caption) ? _c('div', {
    staticClass: "notices-list--qrcode",
    domProps: {
      "innerHTML": _vm._s(_vm.type.caption)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type.isUse == 1) ? [_c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("充值金额：")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number.lazy",
      value: (_vm.amount),
      expression: "amount",
      modifiers: {
        "number": true,
        "lazy": true
      }
    }, {
      name: "focus-fixed",
      rawName: "v-focus-fixed"
    }, {
      name: "money",
      rawName: "v-money"
    }],
    attrs: {
      "type": "number",
      "placeholder": "请输入金额",
      "step": "0.01"
    },
    domProps: {
      "value": (_vm.amount)
    },
    on: {
      "change": function($event) {
        _vm.amount = _vm._n($event.target.value)
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "notice"
  }, [_vm._v(" 充值金额范围" + _vm._s(_vm.type.min) + "-" + _vm._s(_vm.type.max) + "。")])]), _vm._v(" "), (_vm.showSelectMoney) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('div', {
    staticClass: "kd-chips"
  }, _vm._l((_vm.selectmoney), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "kd-chip",
      class: 'chip' + index,
      on: {
        "click": function($event) {
          return _vm.addamount(item)
        }
      }
    }, [_c('i', {
      staticClass: "icon"
    }), _vm._v(" "), _c('span', {
      class: {
        'active': _vm.current === item
      }
    }, [_vm._v(_vm._s(item) + "\n                                "), _vm._t("default")], 2)])
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.type.remarkTitle) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v(_vm._s(_vm.type.remarkTitle) + "：")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.remark),
      expression: "remark",
      modifiers: {
        "trim": true
      }
    }, {
      name: "focus-fixed",
      rawName: "v-focus-fixed"
    }],
    attrs: {
      "type": "text",
      "placeholder": '请输入' + _vm.type.remarkTitle
    },
    domProps: {
      "value": (_vm.remark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.remark = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c('kd-button', {
    staticClass: "main-button",
    on: {
      "click": _vm.createQrcodeOrderNo
    }
  }, [_c('span', [_vm._v("提 交")])])] : _vm._e()] : (_vm.isWYZZ) ? [(_vm.type.bankinfo !== 0) ? _c('div', {
    staticClass: "bank-order-list"
  }, [_c('p', [_c('span', {
    staticClass: "bank-order__title"
  }, [_vm._v("收款银行：")]), _c('span', {
    staticClass: "bank-order__text"
  }, [_vm._v(_vm._s(_vm.type.detail) + " "), _c('a', {
    staticClass: "bank-order-item-copy",
    on: {
      "click": function($event) {
        return _vm.copy(_vm.type.detail)
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "bank-order__title"
  }, [_vm._v("收款账号：")]), _c('span', {
    staticClass: "bank-order__text"
  }, [_vm._v(_vm._s(_vm.accountNumDisplay) + " "), _c('a', {
    staticClass: "bank-order-item-copy",
    on: {
      "click": function($event) {
        return _vm.copy(_vm.type.accountNum)
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "bank-order__title"
  }, [_vm._v("收 款 人：")]), _c('span', {
    staticClass: "bank-order__text"
  }, [_vm._v(_vm._s(_vm.type.accountName) + " "), _c('a', {
    staticClass: "bank-order-item-copy",
    on: {
      "click": function($event) {
        return _vm.copy(_vm.type.accountName)
      }
    }
  }, [_vm._v("复制")])])])]) : _vm._e(), _vm._v(" "), (_vm.type.commit !== 0) ? [_c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("充值金额：")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number.lazy",
      value: (_vm.amount),
      expression: "amount",
      modifiers: {
        "number": true,
        "lazy": true
      }
    }, {
      name: "focus-fixed",
      rawName: "v-focus-fixed"
    }, {
      name: "money",
      rawName: "v-money"
    }],
    attrs: {
      "type": "number",
      "placeholder": "请输入金额",
      "step": "0.01"
    },
    domProps: {
      "value": (_vm.amount)
    },
    on: {
      "change": function($event) {
        _vm.amount = _vm._n($event.target.value)
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "notice"
  }, [_vm._v(" 充值金额范围" + _vm._s(_vm.type.min) + "-" + _vm._s(_vm.type.max) + "。")])]), _vm._v(" "), (_vm.showSelectMoney) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('div', {
    staticClass: "kd-chips"
  }, _vm._l((_vm.selectmoney), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "kd-chip",
      class: 'chip' + index,
      on: {
        "click": function($event) {
          return _vm.addamount(item)
        }
      }
    }, [_c('i', {
      staticClass: "icon"
    }), _vm._v(" "), _c('span', {
      class: {
        'active': _vm.current === item
      }
    }, [_vm._v(_vm._s(item) + "\n                                "), _vm._t("default")], 2)])
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.rechargeTypeField && _vm.type.rechargeType === '微信转账到银行卡') ? _c('div', {
    staticClass: "kd-field"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.remark),
      expression: "remark",
      modifiers: {
        "trim": true
      }
    }, {
      name: "focus-fixed",
      rawName: "v-focus-fixed"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入微信上的真实姓名"
    },
    domProps: {
      "value": (_vm.remark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.remark = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]) : (_vm.rechargeTypeField && _vm.type.rechargeType === '支付宝转账到银行卡') ? _c('div', {
    staticClass: "kd-field"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.remark),
      expression: "remark",
      modifiers: {
        "trim": true
      }
    }, {
      name: "focus-fixed",
      rawName: "v-focus-fixed"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入支付宝上的真实姓名"
    },
    domProps: {
      "value": (_vm.remark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.remark = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "kd-field"
  }, [(_vm.isHCW) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title inline"
  }, [_vm._v("填写备注：")]), _vm._v(" "), _c('div', {
    staticClass: "kd-remark-switch"
  }, [_c('kd-switch', {
    model: {
      value: (_vm.openRemarks),
      callback: function($$v) {
        _vm.openRemarks = $$v
      },
      expression: "openRemarks"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), (_vm.openRemarks) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("  备注：")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput kd-textinput--remarkbank"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.remark),
      expression: "remark",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "rows": "5",
      "maxlength": "165"
    },
    domProps: {
      "value": (_vm.remark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.remark = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]) : _vm._e()]), _vm._v(" "), _c('kd-button', {
    staticClass: "main-button",
    on: {
      "click": _vm.createTransferOrderNo
    }
  }, [_c('span', [_vm._v("提 交")])])] : _vm._e(), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "notices-list",
    style: (_vm.type.bankinfo === 0 && _vm.type.commit === 0 ? {
      'margin-top': 0
    } : null)
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.type.reminder)
    }
  }), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.type.friendshipTips)
    }
  })])])] : (_vm.isJiaoCheng) ? _c('div', {
    staticClass: "article",
    domProps: {
      "innerHTML": _vm._s(_vm.type.Content)
    }
  }) : [_c('div', {
    staticClass: "kd-field"
  }, [_c('label', {
    staticClass: "kd-field-title"
  }, [_vm._v("充值金额：")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "textinput",
      rawName: "v-textinput"
    }],
    staticClass: "kd-textinput"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number.lazy",
      value: (_vm.amount),
      expression: "amount",
      modifiers: {
        "number": true,
        "lazy": true
      }
    }, {
      name: "focus-fixed",
      rawName: "v-focus-fixed"
    }, {
      name: "money",
      rawName: "v-money"
    }],
    attrs: {
      "type": "number",
      "placeholder": "请输入金额",
      "step": "0.01"
    },
    domProps: {
      "value": (_vm.amount)
    },
    on: {
      "change": function($event) {
        _vm.amount = _vm._n($event.target.value)
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "notice"
  }, [_vm._v(" 充值金额范围" + _vm._s(_vm.type.min) + "-" + _vm._s(_vm.type.max))])]), _vm._v(" "), (_vm.showSelectMoney) ? _c('div', {
    staticClass: "kd-field"
  }, [_c('div', {
    staticClass: "kd-chips"
  }, _vm._l((_vm.selectmoney), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "kd-chip",
      class: 'chip' + index,
      on: {
        "click": function($event) {
          return _vm.addamount(item)
        }
      }
    }, [_c('i', {
      staticClass: "icon"
    }), _vm._v(" "), _c('span', {
      class: {
        'active': _vm.current === item
      }
    }, [_vm._v(_vm._s(item) + "\n                            "), _vm._t("default")], 2)])
  }), 0)]) : _vm._e(), _vm._v(" "), _c('kd-button', {
    staticClass: "main-button",
    on: {
      "click": _vm.goToRecharge
    }
  }, [_c('span', [_vm._v("提 交")])]), _vm._v(" "), _c('div', [(_vm.type.remark) ? _c('div', {
    staticClass: "notices-list",
    domProps: {
      "innerHTML": _vm._s(_vm.type.remark)
    }
  }) : _c('ul', {
    staticClass: "nostyle notices-list"
  }, [_c('li', [_vm._v("使用电脑银行网银24小时实现在线支付实时到账！")]), _vm._v(" "), _c('li', [_vm._v("持有储蓄卡网银用户，请使用电脑在线支付充值，无需联系客服，24小时内实时到账！")]), _vm._v(" "), _c('li', [_vm._v("温馨提示：在您需要进行网银在线支付前，请先选择网站上的（电脑版）进行充值。")])])])]] : [_c('p', {
    staticClass: "maintaining"
  }, [_vm._v(_vm._s(_vm.userType == 2 ? '该会员暂时不支持充值' : '此充值通道不可用'))]), _vm._v(" "), (!!_vm.onlineServiceLink === true) ? _c('a', {
    staticClass: "kd-button main-button",
    attrs: {
      "href": _vm.onlineServiceLink,
      "target": "_blank"
    }
  }, [_vm._v("请联系客服充值！")]) : _c('kd-button', {
    staticClass: "main-button",
    on: {
      "click": _vm.contactService
    }
  }, [_vm._v("请联系客服充值！")])]], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "kd-field-title"
  }, [_c('p', {
    staticClass: "kd-field-title-two"
  }, [_vm._v("微信上的"), _c('br'), _vm._v("真实姓名")]), _c('p', {
    staticClass: "kd-field-title-two"
  }, [_vm._v("：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "kd-field-title",
    staticStyle: {
      "text-align": "right",
      "margin-left": "-1rem"
    }
  }, [_c('p', {
    staticClass: "kd-field-title-two"
  }, [_vm._v("支付宝上的"), _c('br'), _vm._v("真实姓名")]), _c('p', {
    staticClass: "kd-field-title-two"
  }, [_vm._v("：")])])
}]}

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "promptcon",
    class: {
      'iszfb': _vm.iszfb, 'isweixin': _vm.isweixin
    }
  }, [_c('div', {
    staticClass: "prompthead"
  }, [_vm._v("\n        " + _vm._s(_vm.currentItem.name) + "\n        "), _c('span', {
    staticClass: "back",
    on: {
      "click": _vm.close
    }
  })]), _vm._v(" "), (_vm.isbankcard) ? _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "promptbody"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.tname)
  }), _vm._v("\n                " + _vm._s(_vm.currentItem.name) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n                " + _vm._s(_vm.currentItem.top) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("银行卡姓名")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.buname))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copyname",
    attrs: {
      "data-clipboard-text": _vm.currentItem.buname
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copyname')
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("银行卡号")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.bcard))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copycode",
    attrs: {
      "data-clipboard-text": _vm.currentItem.bcard
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copycode')
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("开户银行")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.bname))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copybank",
    attrs: {
      "data-clipboard-text": _vm.currentItem.bname
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copybank')
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("开户支行")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.bdetail))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copycbank",
    attrs: {
      "data-clipboard-text": _vm.currentItem.bdetail
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copycbank')
      }
    }
  }, [_vm._v("复制")])])])])])]), _vm._v(" "), (_vm.currentItem.tip) ? _c('div', {
    staticClass: "promptfoot"
  }, [_c('div', {
    staticClass: "tiptitle"
  }, [_vm._v("温馨提示")]), _vm._v(" "), _c('div', {
    staticClass: "content",
    domProps: {
      "innerHTML": _vm._s(_vm.currentItem.tip)
    }
  })]) : _vm._e()]) : (_vm.iszfb) ? _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "promptbody"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.tname)
  }), _vm._v("\n                " + _vm._s(_vm.currentItem.name) + "\n            ")]), _vm._v(" "), (_vm.currentItem.img) ? _c('div', {
    staticClass: "tips",
    staticStyle: {
      "border-bottom": "1px solid #efefef"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.currentItem.top) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [_c('div', {
    staticClass: "qcodewrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentItem.img
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "savebtn",
    on: {
      "click": function($event) {
        return _vm.saveimg(_vm.currentItem.img)
      }
    }
  }, [_vm._v("保存图片")])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n                " + _vm._s(_vm.currentItem.tip) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("支付宝账号")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.account))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copyname",
    attrs: {
      "data-clipboard-text": _vm.currentItem.account
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copyname')
      }
    }
  }, [_vm._v("复制")])])]), _vm._v(" "), _c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("支付宝姓名")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.aname))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copycode",
    attrs: {
      "data-clipboard-text": _vm.currentItem.aname
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copycode')
      }
    }
  }, [_vm._v("复制")])])])])])])]) : (_vm.isweixin) ? _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "promptbody"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.tname)
  }), _vm._v("\n                " + _vm._s(_vm.currentItem.name) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n                " + _vm._s(_vm.currentItem.top) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [_c('div', {
    staticClass: "qcodewrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentItem.img
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "savebtn",
    on: {
      "click": function($event) {
        return _vm.saveimg(_vm.currentItem.img)
      }
    }
  }, [_vm._v("保存图片")])])])])])])]) : _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "promptbody"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', {
    class: 'icon icon-' + _vm.logoname(_vm.currentItem.tname)
  }), _vm._v("\n                " + _vm._s(_vm.currentItem.name) + "\n            ")]), _vm._v(" "), (_vm.currentItem.img) ? _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n                " + _vm._s(_vm.currentItem.top) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [_c('div', {
    staticClass: "qcodewrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentItem.img
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "savebtn",
    on: {
      "click": function($event) {
        return _vm.saveimg(_vm.currentItem.img)
      }
    }
  }, [_vm._v("保存图片")])])])])]) : _vm._e(), _vm._v(" "), (_vm.currentItem.account) ? _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n               " + _vm._s(_vm.currentItem.top) + "\n                "), _c('ul', {
    staticClass: "infolist"
  }, [_c('li', {
    staticClass: "infoitem"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.currentItem.tname) + "账号")]), _vm._v(" "), _c('span', {
    staticClass: "context"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentItem.account))]), _vm._v(" "), _c('span', {
    staticClass: "copybtn copyname",
    attrs: {
      "data-clipboard-text": _vm.currentItem.account
    },
    on: {
      "click": function($event) {
        return _vm.copyFun('.copyname')
      }
    }
  }, [_vm._v("复制")])])])])]) : _vm._e()]), _vm._v(" "), (_vm.currentItem.tip) ? _c('div', {
    staticClass: "promptfoot"
  }, [_c('div', {
    staticClass: "tiptitle"
  }, [_vm._v("温馨提示")]), _vm._v(" "), _c('div', {
    staticClass: "content",
    domProps: {
      "innerHTML": _vm._s(_vm.currentItem.tip)
    }
  })]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(877)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(832),
  /* template */
  __webpack_require__(1087),
  /* scopeId */
  "data-v-07887c2e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var cachedToken = '';
/* unused harmony default export */ var _unused_webpack_default_export = ({
    parseParams(){
        var mapping = {};
    
        var href = window.location.href;
        href = decodeURIComponent(href);
        
        var re = /^[^\?]+\?((?:[^=&]+(?:=[^=&]+)?&?)+)$/g;
        if(re.test(href)){
            href = href.replace(re, '$1');
    
            var groups = href.split('&');
            for(var i = 0; i < groups.length; i++){
                var item = groups[i];
                var kv = item.split('=');
    
                mapping[kv[0]] = kv[1] || '';
            }
        }
    
        return mapping;
    },
    addToken(url) {
        if(cachedToken === ''){
            var params = this.parseParams(); 
            var fields = []; 
            if(typeof params.apiuserid !== 'undefined'){
                fields.push('apiuserid=' + params.apiuserid);
            }
            if(typeof params.apitoken !== 'undefined'){
                fields.push('apitoken=' + params.apitoken);
            } 
            cachedToken = fields.join('&');
        } 
        return url + (cachedToken !== '' ? (url.indexOf('?') > -1 ? '&' : '?') + cachedToken : '');
    } 
});

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_AccountMoneyInTypeBody__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_AccountMoneyInTypeBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_AccountMoneyInTypeBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_common_AccountSubNavMoneyInOut2__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_common_AccountSubNavMoneyInOut2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_common_AccountSubNavMoneyInOut2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_AccountMoneyInCsDitch__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_AccountMoneyInCsDitch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_AccountMoneyInCsDitch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_ApplePay__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_ApplePay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_ApplePay__);










/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'PageAccountMoneyInCompany',
    data: function data() {
        return {
            methodsOfMoneyIn: {},
            selectedMethodOfMoneyIn: '',
            isOpenService: false,
            message: '',
            bankNumber: '',
            isPC: false,
            notChargeTips: false
        };
    },

    computed: {
        onlineServiceLink: function onlineServiceLink() {
            return this.$store.state.techInfo;
        },
        ifApplyBankCard: function ifApplyBankCard() {
            return this.$store.state.ifApplyBankCard;
        },
        zxsfstatus: function zxsfstatus() {
            return this.$store.state.zxsfstatus;
        }
    },
    created: function created() {
        this.$store.commit('setPage', {
            pageTitle: this.$labels.accountMoneyInAndOut,
            className: 'page-account-money-in'
        });
        this.fetchInfoOfPaymentMethod();
    },

    methods: {
        fetchInfoOfPaymentMethod: function fetchInfoOfPaymentMethod() {
            var _this = this;

            return __WEBPACK_IMPORTED_MODULE_0_api__["apiGetInfoOfPaymentMethodCompany"]({
                t: this.isPC ? 1 : 0
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
                if (typeof json.S !== 'undefined') {
                    if (json.S == 1368) {
                        _this.message = json.D;
                        _this.notChargeTips = json.D;
                    } else {
                        _this.$message({
                            message: json.S + ':' + json.D
                        });
                        _this.notChargeTips = false;
                    }
                } else {
                    _this.message = '';

                    _this.methodsOfMoneyIn = json;
                }
            });
        },
        open: function open(id, type) {
            var _this2 = this;

            if (this.selectedMethodOfMoneyIn === id) {
                this.selectedMethodOfMoneyIn = '';
            } else {
                if (type.status === 1 && id.indexOf('WYZZ') > -1 && !this.bankNumber && this.ifApplyBankCard) {
                    this.$store.dispatch('uFetchBankInfo').then(function (json) {
                        if (json.Number && json.Bank && json.Detail && json.Name) {
                            _this2.selectedMethodOfMoneyIn = id;
                            _this2.bankNumber = json.Number;
                        } else {
                            _this2.$message({
                                message: "请先完善银行卡信息！"
                            });
                            _this2.$router.push({
                                name: 'AccountBankInfo'
                            });
                        }
                    }).catch(function (error) {
                        _this2.selectedMethodOfMoneyIn = id;
                        console.log(error);
                        _this2.$message({
                            message: "获取银行卡信息出错啦！",
                            type: "error"
                        });
                    });
                } else if (type.status === 1 && type.iconName === 'payquick') {
                    this.selectedMethodOfMoneyIn = '';
                    window.open(type.QRCode);
                } else {
                    this.selectedMethodOfMoneyIn = id;
                }
            }
        },
        goToRechargeByService: function goToRechargeByService() {
            this.$router.push({
                name: 'OnlineService'
            });
        },
        openOnlineService: function openOnlineService() {
            this.$store.commit('setOpenedOnlineService', true);
        }
    },
    components: {
        modAccountMoneyInTypeBody: __WEBPACK_IMPORTED_MODULE_1_components_AccountMoneyInTypeBody___default.a,
        modAccountSubNavMoneyInOut2: __WEBPACK_IMPORTED_MODULE_2_components_common_AccountSubNavMoneyInOut2___default.a,
        modAccountMoneyInCsDitch: __WEBPACK_IMPORTED_MODULE_3_components_AccountMoneyInCsDitch___default.a,
        modApplePay: __WEBPACK_IMPORTED_MODULE_4_components_ApplePay___default.a
    }
});

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SiteAK_src_pages_AccountMoneyInCompanyV2_vue__ = __webpack_require__(1061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SiteAK_src_pages_AccountMoneyInCompanyV2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__SiteAK_src_pages_AccountMoneyInCompanyV2_vue__);


/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__SiteAK_src_pages_AccountMoneyInCompanyV2_vue___default.a]
});

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_common_facesMapping__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Chargechat__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Chargechat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_Chargechat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_promptcharge__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_promptcharge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_promptcharge__);








/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'PageAccountMoneyInCompany2',
    data: function data() {
        return {
            paylist: [],
            showdot: false,
            showchat: false,
            chatdata: {
                wayid: '',
                name: '',
                oid: '',
                headurl: '',
                wayidType: false
            },
            hasunread: false,
            title: "消息",
            totalnum: 0,
            unreadlist: [],
            hideprompt: false,

            currentslide: '',
            current: 0,
            amount: '',
            uname: '',
            min: 1,
            max: 1000000,
            chargeType: '',
            ORDER_NO: '',
            detailshow: false
        };
    },

    components: {
        chargechat: __WEBPACK_IMPORTED_MODULE_3_components_Chargechat___default.a,
        promptcharge: __WEBPACK_IMPORTED_MODULE_4_components_promptcharge___default.a
    },
    created: function created() {
        this.fetchPayList();
        this.getNewMsg();
        this.fetchUnread();
    },

    computed: {
        userid: function userid() {
            return this.$store.state.user.userId;
        },
        token: function token() {
            return this.$store.state.user.token;
        },
        selectmoney: function selectmoney() {
            if (this.$store.state.selectmoney) {
                return this.$store.state.selectmoney.split(",");
            };
        },
        addchargelist: function addchargelist() {
            return this.$store.state.addchargelist;
        }
    },
    watch: {
        amount: function amount(val) {
            if (val && this.detailshow) {
                this.detailshow = false;
            }
            if (val !== '' && val < 1) {
                this.amount = 1;
            }
            if (val > this.max && this.max > 0) {
                this.amount = this.max;
            }
        },
        uname: function uname(val) {
            if (val && this.detailshow) {
                this.detailshow = false;
            }
        },
        current: function current(val) {
            if (val) {
                this.amount = val;
            }
        }
    },
    methods: {
        replaceIcons: function replaceIcons(str) {
            return str.replace('支付宝', 'payalipay').replace('微信', 'payweixin').replace('银行卡', 'unionPay').replace('财付通', 'paytenpay').replace('QQ钱包', 'payqq').replace('百度钱包', 'paybaidu').replace('京东支付', 'payjd').replace('CGPAY', 'cgpay').replace('信用卡', 'unionPay').replace('花呗', 'payhb');
        },
        translogo: function translogo(name) {
            switch (name) {
                case '支付宝':
                    return "payalipay.svg";break;
                case '微信':
                    return "payweixin.svg";break;
                case '银行卡':
                    return "union-pay.svg";break;
                case '财付通':
                    return "paytenpay.svg";break;
                case 'QQ钱包':
                    return "qq.svg";break;
                case '百度钱包':
                    return "baidu.svg";break;
                case '京东支付':
                    return "payjd.svg";break;
                case 'CGPAY':
                    return "cgpay.png";break;
                case '信用卡':
                    return "unionPay.png";break;
                case '花呗':
                    return "payhb.png";break;
                case '云闪付':
                    return "payysf.png";break;
                case '其它':
                    return "payother.png";break;
                default:
                    return;
            }
        },
        logoclass: function logoclass(name) {
            return this.translogo(name).split('.')[0];
        },
        fetchPayList: function fetchPayList() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_api__["apiGetKeFuPayList"]().then(function (response) {
                var json = response.body;
                json.list.forEach(function (element) {
                    if (element.pay) {
                        var payarr = _this.replaceIcons(element.pay).split(",");
                        if (payarr.length > 3) {
                            return element.pay = payarr.splice(0, 3);
                        } else {
                            return element.pay = payarr;
                        }
                    }
                });
                _this.paylist = json.list;
            }).catch(function (e) {
                console.log(e);
            });
        },
        switchConditions: function switchConditions(wayId, name, headurl) {
            if (!this.showchat) {
                if (!!this.$store.state.wayid) {
                    if (this.$store.state.wayid === wayId) {
                        this.goToCharge(this.$store.state.wayid, this.chatdata.name, this.chatdata.headurl);
                    } else {
                        this.goToCharge(wayId, name, headurl, true);
                    }
                } else {
                    this.goToCharge(wayId, name, headurl);
                }
            } else {
                if (!!this.$store.state.wayid && this.$store.state.wayid === wayId) {
                    return;
                }
                this.goToCharge(wayId, name, headurl);
            }
        },
        goToCharge: function goToCharge(wayId, name, headurl, sEvent) {
            var _this2 = this;

            this.hideprompt = true;
            this.detailshow = false;
            this.currentslide = '';

            var data = { wayid: wayId };
            __WEBPACK_IMPORTED_MODULE_0_api__["apiGotoPay"](data).then(function (response) {
                var json = response.body;
                if (json && json.S === "200") {
                    var oid = json.result ? json.result.oid : "";
                    _this2.showchat = true;
                    _this2.chatdata = {
                        wayid: wayId,
                        name: name,
                        oid: oid,
                        headurl: headurl,
                        wayidType: wayId === _this2.$store.state.wayid ? true : false
                    };
                    if (sEvent) {
                        _this2.$nextTick(function () {
                            _this2.$refs['chatDom'].upInit();
                        });
                    }
                } else {
                    _this2.$message({
                        message: json.S + ':' + json.D,
                        type: "warning"
                    });
                }
            }).catch(function (e) {
                console.log(e);
            });
        },
        goUnread: function goUnread() {
            this.hasunread = true;
        },
        getNewMsg: function getNewMsg() {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_0_api__["apiGetMsgNew"]().then(function (response) {
                var json = response.body;
                if (json == '1') {
                    _this3.showdot = true;
                } else {
                    _this3.showdot = false;
                }
            });
        },
        fetchUnread: function fetchUnread() {
            var _this4 = this;

            this.totalnum = 0;
            __WEBPACK_IMPORTED_MODULE_0_api__["apiGetUnread"]().then(function (response) {
                var json = response.body;
                if (json && json.Code === "200") {
                    if (json.Result) {
                        _this4.unreadlist = json.Result.list;
                        _this4.unreadlist.forEach(function (item) {
                            return _this4.totalnum += +item.noread;
                        });
                        _this4.title = '消息(' + _this4.totalnum + ')';

                        if (!!_this4.$store.state.wayid) {
                            var chatdata = _this4.unreadlist.find(function (item) {
                                return parseInt(_this4.$store.state.wayid) == parseInt(item.wayid);
                            });
                            _this4.goToCharge(_this4.$store.state.wayid, chatdata.admin, chatdata.img);
                        }
                    }
                } else {
                    _this4.$message({
                        message: json.S + ':' + json.D,
                        type: "error"
                    });
                };
            });
        },
        transface: function transface(text) {
            text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            __WEBPACK_IMPORTED_MODULE_2_common_facesMapping__["a" /* default */].list.forEach(function (item) {
                if (text.indexOf('[' + item.name + ']') >= 0) {
                    var reg = new RegExp("\\[" + item.name + "\\]", "gi");
                    text = text.replace(reg, "<img src='/static/images/faces/" + item.src + "'/>");
                }
            });
            return text;
        },
        goback: function goback() {
            this.hasunread = false;
            this.getNewMsg();
        },
        addamount: function addamount(num) {
            if (num) {
                this.current = num;
                if (this.amount) {
                    this.amount = parseInt(this.amount) + parseInt(num);
                } else {
                    this.amount = parseInt(num);
                }
            }
        },
        closeprompt: function closeprompt(data) {
            if (data) {
                this.promptshow = false;
                this.detailshow = false;
                this.amount = '';
                this.uname = '';
                this.currentslide = '';
            }
        },
        submit: function submit(wayid) {
            var _this5 = this;

            if (this.detailshow) {
                this.$message({
                    message: '订单已提交，请按所示信息转账充值',
                    type: 'warn'
                });
                return;
            }
            if (!this.amount) {
                this.$message({
                    message: "充值金额不能为空！",
                    type: "error"
                });
                return;
            }
            if (this.chargeType == '银行卡') {
                if (!this.uname) {
                    this.$message({
                        message: "姓名不能为空！",
                        type: "error"
                    });
                    return;
                } else if (!/^[\u4e00-\u9fa5]+[·]?[\u4e00-\u9fa5]+[0-9]*$/.test(this.uname)) {
                    this.$message({
                        message: '姓名只能是中文或中文+数字结尾！',
                        type: "warning"
                    });
                    return;
                }
            }
            var data = {
                id: wayid,
                amount: this.amount,
                uname: this.uname
            };
            __WEBPACK_IMPORTED_MODULE_0_api__["apiCreateKefuOrder"](data).then(function (res) {
                try {
                    if (res && res.body) {
                        var json = res.body;
                        if (json.ORDER_NO) {
                            _this5.ORDER_NO = res.ORDER_NO;
                            _this5.detailshow = true;
                        } else {
                            _this5.$message({
                                message: json.S + ':' + json.D,
                                type: "error"
                            });
                            return;
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            });
        },
        currentClick: function currentClick(item) {
            this.amount = '';
            this.uname = '';
            this.current = 0;
            this.showchat = false;
            this.detailshow = false;
            this.currentslide = this.currentslide === item.id ? '' : item.id;
            this.chargeType = item.tname;
        }
    }
});

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usermsg__ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usermsg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__usermsg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicemsg__ = __webpack_require__(1048);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicemsg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__servicemsg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_common_facesMapping__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_promptcharge__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_promptcharge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_promptcharge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_timers__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Chat_src_common_utils__ = __webpack_require__(659);










/* harmony default export */ __webpack_exports__["default"] = ({
    name: "chargechat",
    components: {
        usermsg: __WEBPACK_IMPORTED_MODULE_1__usermsg___default.a,
        servicemsg: __WEBPACK_IMPORTED_MODULE_2__servicemsg___default.a,
        promptcharge: __WEBPACK_IMPORTED_MODULE_5_components_promptcharge___default.a
    },
    data: function data() {
        return {
            messagelist: [],
            fetchFlag: true,
            fetchTime: '',
            message: "",
            quickList: [],
            datalist: {},
            perGroupLength: 23,
            currentIndex: 1,
            faceshow: false,
            promptshow: false,
            chargeType: "",
            currentSendingMsgList: [],
            currentResendMsgList: [],
            $hub: {},
            urseId: null,
            isReady: false,

            dependencies: {
                jquery: './static/onlineServiceScript/jquery-1.10.2.min.js',
                signalr: './static/onlineServiceScript/jquery.signalR-2.1.2.js',
                signalrhub: './static/onlineServiceScript/signalRServer.js'
            }
        };
    },

    computed: {
        groups: function groups() {
            var floorGroup = Math.floor(this.datalist.length / this.perGroupLength);
            var groups = [],
                group,
                i,
                index,
                last;
            for (i = 0; i < floorGroup; i++) {
                group = [];
                last = this.perGroupLength - 1 + i * (this.perGroupLength - 1);
                for (index = i + i * (this.perGroupLength - 1); index <= last; index++) {
                    group.push(index);
                }
                groups.push(group);
            }
            if (this.datalist.length % this.perGroupLength !== 0) {
                group = [];
                for (index = last + 1; index <= this.datalist.length - 1; index++) {
                    group.push(index);
                }
                groups.push(group);
            }
            return groups;
        },
        currentMsg: function currentMsg() {
            return this.$store.state.currentMessage;
        },
        prjcode: function prjcode() {
            return this.$store.state.prjcode;
        },
        allMsgList: function allMsgList() {
            return this.$store.state.allMsgList;
        },
        signalrUrl: function signalrUrl() {
            return this.$store.state.signalrUrl;
        }
    },
    props: ["chatdata", "hideprompt"],
    created: function created() {
        this.initData();
        this.datalist = __WEBPACK_IMPORTED_MODULE_4_common_facesMapping__["a" /* default */].list;
        this.fetchQuick();
        if (this.chatdata.wayidType) {
            this.initOnlineService();
        }
    },

    watch: {
        currentMsg: function currentMsg(val, oval) {
            if (val) {
                var itemArr = this.allMsgList;
                itemArr.push(val);
                this.$store.dispatch("setAllMsgList", itemArr);
            }
        },
        chatdata: function chatdata(val, oval) {
            if (val) {
                this.upInit();
            }
        },
        isReady: function isReady(val) {
            if (val === false) return;
            this.initOnlineService();
        },
        prjcode: function prjcode(val, oval) {
            this.installSignalR();
        }
    },
    methods: {
        initData: function initData() {
            this.$store.dispatch("asetInfo", {
                "oid": this.chatdata.oid ? this.chatdata.oid : "",
                "wayid": this.chatdata.wayid ? this.chatdata.wayid : ""
            });
        },
        inpKeyDown: function inpKeyDown() {
            var e = window.event;
            if (e.keyCode === 13) {
                window.event.returnValue = false;
            }
        },
        scrollToBottom: function scrollToBottom() {
            this.$nextTick(function () {
                var chatbody = document.getElementsByClassName("chatbody")[0],
                    scrollH = chatbody.scrollHeight;
                chatbody.scrollTop = scrollH;
            });
        },
        transface: function transface(text) {
            text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            __WEBPACK_IMPORTED_MODULE_4_common_facesMapping__["a" /* default */].list.forEach(function (item) {
                if (text.indexOf('[' + item.name + ']') >= 0) {
                    var reg = new RegExp("\\[" + item.name + "\\]", "gi");
                    text = text.replace(reg, "<img src='/static/images/faces/" + item.src + "'/>");
                }
            });
            return text;
        },
        sendmessage: function sendmessage() {
            if (!this.message.trim()) {
                this.$message({
                    message: "发送内容不能为空！",
                    type: "warn"
                });
                return;
            }
            this.send(this.message.trim());
        },
        quicksend: function quicksend(msg, tid) {
            this.send(msg, tid);
        },
        send: function send(msg, tid) {
            var guid = this.guid();
            var data = {
                wayid: this.chatdata.wayid,
                oid: this.chatdata.oid,
                info: msg,
                isimg: 0,
                pid: tid ? tid : "",
                guid: guid

            };
            var jsonData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(data);
            this.$store.commit("addSendingMsgListElement", { guid: guid });
            this.$store.commit("changeMessage", { type: "user", text: msg, guid: guid, jsonData: jsonData });
            this.messagelist.push({
                type: "user",
                text: msg,
                guid: guid,
                jsonData: jsonData
            });
            this.message = "";
            this.$hub.server.userPostMsg(data);
        },
        fetchQuick: function fetchQuick() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_3_api__["apiGetPayWay"]({
                wayid: this.chatdata.wayid
            }).then(function (response) {
                var json = response.body;
                if (json && json.S == '200') {
                    _this.quickList = json.result.list;
                    _this.$store.dispatch("setPrjcode", json.result.prjcode);
                    _this.$store.dispatch("setSignalrUrl", json.result.signalurl);
                    _this.$nextTick(function () {
                        _this.getbodyheight();
                    });
                } else {
                    _this.$message({
                        message: json.S + ':' + json.D,
                        type: "error",
                        afterClose: function afterClose() {
                            window.history.go(-1);
                        }
                    });
                }
            });
        },
        addface: function addface(data) {
            if (data) {
                this.message += '[' + data + ']';
            };
        },
        delface: function delface(data) {
            if (data) {
                var len = this.message.length;
                if (this.message.charAt(len - 1) === "]") {
                    var index = this.message.indexOf('[');
                    if (this.message.charAt(len - 3) === "[") {
                        this.message = this.message.substring(0, len - 3);
                    } else if (this.message.charAt(len - 4) === "[") {
                        this.message = this.message.substring(0, len - 4);
                    } else if (this.message.charAt(len - 5) === "[") {
                        this.message = this.message.substring(0, len - 5);
                    }
                } else {
                    this.message = this.message.substring(0, len - 1);
                };
            };
        },
        onfocus: function onfocus() {
            this.faceshow = false;
        },
        _compressImage: function _compressImage(imageBase64, type, quality, maxWidth, maxHeight, callback) {
            var img = new Image(),
                canvas = void 0,
                ctx = void 0,
                vm = this;

            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');

            img.onload = function () {
                var w = img.naturalWidth,
                    h = img.naturalHeight;
                if (w <= maxWidth && h <= maxHeight) {
                    callback.apply(vm, [imageBase64]);
                    return;
                }

                var w2 = maxWidth,
                    h2 = maxHeight;
                if (w > h) {
                    h2 = h * w2 / w;
                } else {
                    w2 = w * h2 / h;
                }
                canvas.width = w2;
                canvas.height = h2;

                ctx.drawImage(img, 0, 0, w, h, 0, 0, w2, h2);

                callback.apply(vm, [canvas.toDataURL(type, quality > 1 ? 1 : quality)]);
            };
            img.src = imageBase64;
        },
        upload: function upload(event) {
            var el = event.target,
                file = el.files[0];

            if (!/\.(jpeg|jpg|gif|bmp|png)$/.test(file.name.toLowerCase())) {
                el.value = '';
                this.$message({
                    message: "对不起，请选择有效的图片文件！",
                    type: "error"
                });
                return;
            }

            var maxSize = 1024 * 1024 * 3;
            if (file.size > maxSize) {
                this.$message({
                    message: "对不起，请选择少于 3M 的图片文件！",
                    type: "error"
                });
                return;
            }

            var fileReader = new FileReader(),
                vm = this;
            fileReader.onload = function (e) {
                var base64 = e.target.result;
                var quality = 1024 * 1024 * 0.29296875 / file.size;

                vm._compressImage(base64, file.type, quality, 800, 800, function (x) {
                    this.sendImage({
                        target: el,
                        file: x,
                        name: file.name
                    });
                });
            };
            fileReader.readAsDataURL(file);
        },
        sendImage: function sendImage(data) {
            var _this2 = this;

            var el = data.target,
                base64 = data.file,
                name = data.name,
                guid = this.guid();
            this.messagelist.push({
                type: "user",
                text: "",
                src: base64
            });
            this.$store.commit("changeMessage", {
                type: "user",
                text: "",
                src: base64,
                isLoading: true,
                guid: guid
            });
            this.$store.commit("addNewImgMsg", {
                guid: guid
            });
            __WEBPACK_IMPORTED_MODULE_3_api__["getPicServiceURL"]().then(function (response) {
                return response.json();
            }).then(function (url) {
                if ('https:' == document.location.protocol) {
                    url = 'https://' + url;
                } else {
                    url = 'http://' + url;
                }
                __WEBPACK_IMPORTED_MODULE_3_api__["uploadKeFuPic"]({
                    Filename: name,
                    Image: base64,
                    prjcode: _this2.prjcode,
                    url: url
                }).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    if (json.S === '1406') {
                        var _data = {
                            wayid: _this2.chatdata.wayid,
                            oid: _this2.chatdata.oid,
                            info: json.D,
                            isimg: 1
                        };
                        _this2.$store.commit("removeNewImg");
                        _this2.$hub.server.userPostMsg(_data);
                        el.value = '';
                    } else {
                        _this2.$store.commit("removeNewImg");
                        _this2.$message({
                            message: json.S + ": " + json.D,
                            type: "warning"
                        });
                    }
                });
            });
        },
        guid: function guid() {
            return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : r & 0x3 | 0x8;
                return v.toString(16);
            });
        },
        showprompt: function showprompt(data) {
            if (data.promptshow) {
                this.promptshow = true;
                this.chargeType = data.currentType;
            }
        },
        closeprompt: function closeprompt(data) {
            if (data) {
                this.promptshow = false;
            }
        },
        getquickwidth: function getquickwidth() {
            var cl = document.querySelectorAll(".quickitem");
            var ow = 0;
            cl.forEach(function (item) {
                var iw = window.getComputedStyle(item, null).getPropertyValue("width").replace("px", "");
                ow += +iw;
            });
            var olist = document.querySelector(".quicklist");
            olist.style.width = ow + 100 + "px";
        },
        getbodyheight: function getbodyheight() {
            var fl = document.getElementsByClassName("chatfoot")[0];
            var oh = 490 - fl.offsetHeight;
            document.getElementsByClassName("chatbody")[0].style.height = oh + "px";
        },
        initOnlineService: function initOnlineService() {
            var _this3 = this;

            var url = document.location.protocol == 'https:' ? 'https://' + this.signalrUrl : 'http://' + this.signalrUrl;

            $.connection.hub.url = url + "/signalr";

            this.$hub = $.connection.msgHub;
            $.extend(this.$hub.client, {
                errormsg: this.kfError,
                userInWay: this.kfUserInWay,
                userGetMsgList: this.kfuserGetMsgList,
                getMsgList: this.kfuserGetMsgListAll,
                userPostMsg: this.userPostMsg });

            $.connection.hub.start({ xdomain: true }).done(function () {
                _this3.$hub.server.userInWay(_this3.chatdata.wayid, _this3.$store.state.user.userId, _this3.prjcode);
            }).fail(function (error) {
                console.log(error);
            });
        },
        userPostMsg: function userPostMsg(res) {
            var json = JSON.parse(res),
                vm = this;
            if (json.result.isimg == 1) {
                this.$store.dispatch("ahidefaceadd", true);
                return;
            }
            this.$store.commit("removeSendingMsgeListElement", { guid: json.result.guid });
            if (json.S == '200') {
                if (this.$store.state.resendMsgList) {
                    this.$store.commit("removeResendMsgListElement", { json: json });
                }
            } else if (json.S == '201') {
                if (this.$store.state.resendMsgList) {
                    this.$store.commit("removeResendMsgListElement", { json: json });
                }
                vm.$message({
                    message: json.S + ':' + json.D,
                    type: "error"
                });
            } else {
                this.$store.commit("addResendMsgList", { json: json });
                vm.$message({
                    message: json.S + ':' + json.D,
                    type: "error"
                });
            }
        },
        kfuserGetMsgList: function kfuserGetMsgList(res) {
            var _this4 = this;

            var vm = this;
            var json = JSON.parse(res);
            if (json.S !== '200') {
                return this.$message({
                    message: json.S + ':' + json.D,
                    type: "error"
                });
            }

            var list = json.list,
                arr = [];
            if (list.length === 0) return;

            list.forEach(function (item) {
                arr.push({
                    type: item.s === "客服" ? "servicer" : "user",
                    text: item.isimg ? "" : item.msg,
                    src: item.isimg ? item.msg : "",
                    iskp: item.iskp,
                    kplogo: _this4.translogo(item.msg)
                });
            });
            if (this.allMsgList.length === 0) {
                this.$store.dispatch("setAllMsgList", arr);
                this.initData();
            } else {
                if (this.$store.state.wayid !== this.chatdata.wayid) {
                    this.$store.dispatch("setAllMsgList", arr);
                    this.initData();
                } else {
                    this.$store.dispatch("setAllMsgList", arr);
                }
            }
            this.$hub.server.userRead(this.chatdata.wayid);
        },
        kfuserGetMsgListAll: function kfuserGetMsgListAll(res) {
            var _this5 = this;

            var vm = this;
            var json = JSON.parse(res);
            if (json.S !== '200') {
                return this.$message({
                    message: json.S + ':' + json.D,
                    type: "error"
                });
            }

            var list = json.list,
                arr = [];
            if (list.length === 0) return;

            list.forEach(function (item) {
                arr.push({
                    type: item.s === "客服" ? "servicer" : "user",
                    text: item.isimg ? "" : item.msg,
                    src: item.isimg ? item.msg : "",
                    iskp: item.iskp,
                    kplogo: _this5.translogo(item.msg)
                });
            });
            var itemArr = this.allMsgList;
            this.$store.dispatch("setAllMsgList", itemArr.concat(arr));
            this.$hub.server.userRead(this.chatdata.wayid);
        },
        adminLeave: function adminLeave(res) {
            var vm = this;
            var json = JSON.parse(res);
            if (json.S !== '200') {
                return this.$message({
                    message: json.S + ':' + json.D,
                    type: "error"
                });
            }
            var list = json.list,
                arr = [];
            if (list.length === 0) return;
        },
        kfUserInWay: function kfUserInWay(res) {
            console.log('red', res);
            var json = JSON.parse(res);
            if (json.S !== '200') {
                return this.$message({
                    message: json.S + ':' + json.D,
                    type: "error"
                });
            }
            this.$hub.server.userGetMsgList(this.chatdata.wayid, 1);
        },
        kfError: function kfError(error) {
            var json = JSON.parse(error);
            if (json.Code == '222') {
                this.$message({
                    message: json.Code + ':' + json.Msg,
                    type: "error",
                    afterClose: function afterClose() {
                        window.history.go(-1);
                    }
                });
                this.closeConnection();
            } else {
                this.$message({
                    message: json.Code + ':' + json.Msg,
                    type: "warning"
                });
            }
        },
        closeConnection: function closeConnection() {
            $.connection.hub.stop();
        },
        installSignalR: function installSignalR() {
            var vm = this,
                el = null,
                n = void 0,
                version = Math.random(),
                scripts = {};

            this.isReady = false;
            for (n in this.dependencies) {
                if (!this.dependencies.hasOwnProperty(n)) continue;

                el = document.createElement('script');
                el.id = n;
                el.src = this.dependencies[n] + '?v=' + version;

                scripts[n] = el;
            }

            scripts.jquery.onload = function () {
                document.body.appendChild(scripts.signalr);
            };
            scripts.signalr.onload = function () {
                document.body.appendChild(scripts.signalrhub);
            };
            scripts.signalrhub.onload = function () {
                vm.isReady = true;
            };
            document.body.appendChild(scripts.jquery);
        },
        translogo: function translogo(name) {
            switch (name) {
                case "支付宝充值":
                    return "payalipay.svg";break;
                case "微信充值":
                    return "payweixin.svg";break;
                case "银行卡充值":
                    return "union-pay.svg";break;
                case "财付通充值":
                    return "tenpay.svg";break;
                case "QQ钱包充值":
                    return "payqq.svg";break;
                case "百度钱包充值":
                    return "paybaidu.svg";break;
                case "京东支付充值":
                    return "payjd.svg";break;
                case "CGPAY充值":
                    return "cgpay.png";break;
                case "信用卡充值":
                    return "unionPay.svg";break;
                case "花呗充值":
                    return "payhb.png";break;
                default:
                    return;
            }
        },
        upInit: function upInit() {
            this.messagelist = [];
            this.quickList = [];
            this.fetchFlag = true;
            if (this.hideprompt) {
                this.promptshow = false;
            };
            this.closeConnection();
            this.initOnlineService();
            this.fetchQuick();
        }
    },
    updated: function updated() {
        var _this6 = this;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_timers__["setTimeout"])(function () {
            _this6.scrollToBottom();
        }, 0);
    },
    beforeDestroy: function beforeDestroy() {
        this.closeConnection();
    }
});

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "promptcharge",
    data: function data() {
        return {
            clipcopy: null,
            currentItem: {},
            iszfb: false,
            isbankcard: false,
            isweixin: false
        };
    },

    props: ["chargeType", "chargeList", "outprompt"],
    mounted: function mounted() {
        this.getCurrentItem();
    },

    methods: {
        copyFun: function copyFun(btnclass) {
            var vm = this;
            if (Clipboard.isSupported()) {
                vm.clipcopy = new Clipboard(btnclass);
                vm.clipcopy.on('success', function (e) {
                    vm.$message({
                        message: "复制成功！",
                        type: 'success'
                    });
                    e.clearSelection();
                });
                vm.clipcopy.on('error', function (e) {
                    vm.$message({
                        message: "请手动长按文字选择[拷贝]复制！",
                        type: 'warn'
                    });
                });
            } else {
                vm.$message({
                    message: "请手动长按文字选择[拷贝]复制！",
                    type: 'warn'
                });
            }
        },
        close: function close() {
            this.$emit("closeprompt", { promptshow: false });
        },
        getCurrentItem: function getCurrentItem() {
            var _this = this;

            var str = this.outprompt ? "tname" : "name";
            this.chargeList.forEach(function (item) {
                if (_this.chargeType.indexOf(item[str]) !== -1) {
                    if (item[str] == '银行卡') {
                        item.tip = item.tip.replace(/\|/g, '<br>');
                    }
                    _this.currentItem = item;
                    _this.getType();
                    return;
                }
            });
        },
        getType: function getType() {
            var str = this.outprompt ? this.currentItem.tname : this.currentItem.name;
            switch (str) {
                case "银行卡":
                    this.isbankcard = true;break;
                case "支付宝":
                    this.iszfb = true;break;
                case "微信":
                    this.isweixin = true;break;
                default:
                    return;
            }
        },
        saveimg: function saveimg(Url) {
            var oa = document.createElement('a');
            oa.href = Url;
            oa.download = '';
            var evt = document.createEvent("MouseEvents");
            evt.initEvent("click", true, true);
            oa.dispatchEvent(evt);
        },
        translogo: function translogo(name) {
            switch (name) {
                case "支付宝":
                    return "payalipay";break;
                case "微信":
                    return "payweixin";break;
                case "银行卡":
                    return "unionPay";break;
                case "财付通":
                    return "paytenpay";break;
                case "QQ钱包":
                    return "payqq";break;
                case "百度钱包":
                    return "paybaidu";break;
                case "京东支付":
                    return "payjd";break;
                case "CGPAY":
                    return "cgpay";break;
                case "云闪付":
                    return "payysf";break;
                case "信用卡":
                    return "payxyk";break;
                case "花呗":
                    return "payhb";break;
                case "其它":
                    return "payother";break;
                default:
                    return;
            }
        },
        logoname: function logoname(name) {
            if (this.translogo(name)) {
                return this.translogo(name).split('.')[0];
            }
        }
    }
});

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "servicemsg",
    props: ["msgText", "imageurl", "iskp", "kplogo", "headurl"],
    data: function data() {
        return {
            message: "",
            type: ""
        };
    },

    methods: {
        logoname: function logoname(str) {
            return str.split('.')[0];
        },
        showprompt: function showprompt(type) {
            this.$emit("showprompt", {
                promptshow: true,
                currentType: type
            });
        }
    }
});

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_api__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "usermsg",
    props: ["msgText", "imageurl", "currentGuid", "currentJsonData"],
    data: function data() {
        return {
            message: "",
            currentSendingMsgList: [],
            currentResendMsgList: []
        };
    },

    computed: {
        sendingMsgList: function sendingMsgList() {
            if (this.$store.state.sendingMsgList) {
                this.currentSendingMsgList = this.$store.state.sendingMsgList;
            }
            return this.currentSendingMsgList;
        },
        resendMsgList: function resendMsgList() {
            if (this.$store.state.resendMsgList) {
                this.currentResendMsgList = this.$store.state.resendMsgList;
            }
            return this.currentResendMsgList;
        }
    },
    watch: {
        sendingMsgList: function sendingMsgList(newVal, oldVal) {
            this.currentSendingMsgList = newVal;
        },
        resendMsgList: function resendMsgList(newVal, oldVal) {
            this.currentResendMsgList = newVal;
        }
    },
    methods: {
        isLoadingMsg: function isLoadingMsg(currentGuid) {
            if (this.currentSendingMsgList) {
                if (this.currentSendingMsgList.indexOf(currentGuid) != -1) {
                    return true;
                }
                return false;
            }
        },
        isResendMsg: function isResendMsg(currentJsonData) {
            if (this.currentResendMsgList) {
                if (this.currentResendMsgList.indexOf(currentJsonData) != -1) {
                    return true;
                }
                return false;
            }
        },
        resend: function resend(jsonData) {
            var data = JSON.parse(jsonData);
            this.$store.commit("addSendingMsgListElement", { 'guid': data.guid });
            this.$hub.server.userPostMsg(data);
        }
    }
});

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_AccountMain__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_AccountMain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_AccountMain__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_AccountSubNavPublicV2__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_AccountSubNavPublicV2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_AccountSubNavPublicV2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pages_common_AccountMoneyInCompany__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pages_common_AccountMoneyInCompany___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pages_common_AccountMoneyInCompany__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_OnlineServiceFloat__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_OnlineServiceFloat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_OnlineServiceFloat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_AccountMoneyInCompanyV2__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_AccountMoneyInCompanyV2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_AccountMoneyInCompanyV2__);








/* harmony default export */ __webpack_exports__["default"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_2_pages_common_AccountMoneyInCompany___default.a,
    data: function data() {
        return {
            isPC: true,
            visibleService: false,
            selectedWyzz: true,
            bankCardShow: false,
            version: 0,
            selectedMethodOfMoneyIn: ''
        };
    },

    computed: {
        zxsfstatus: function zxsfstatus() {
            return this.$store.state.zxsfstatus;
        }
    },
    beforeUpdate: function beforeUpdate() {
        for (var key in this.methodsOfMoneyIn) {
            if (this.selectedMethodOfMoneyIn == '') {
                this.selectedMethodOfMoneyIn = key;
            }
            if (!this.bankCardShow && key.indexOf('WYZZ') != -1) {
                this.bankCardShow = true;
            }
        }
    },

    methods: {
        openOverride: function openOverride(id, type) {
            if (!~id.indexOf('WYZZ')) {
                this.selectedWyzz = false;
            }
            this.open(id, type);
            this.selectedMethodOfMoneyIn = id;
        },
        openWYZZ: function openWYZZ() {
            this.selectedWyzz = true;
            this.selectedMethodOfMoneyIn = '';
            for (var tab in this.methodsOfMoneyIn) {
                var type = this.methodsOfMoneyIn[tab];
                if (type.status !== -1 && tab.indexOf('WYZZ') !== -1) {
                    this.openOverride(tab, type);
                    break;
                }
            }
        }
    },
    watch: {
        methodsOfMoneyIn: function methodsOfMoneyIn() {
            var defaultTab = this.$route.query.type;
            if (defaultTab) {
                if (~defaultTab.indexOf('WYZZ')) {
                    this.openWYZZ();
                } else {
                    this.openOverride(defaultTab, this.methodsOfMoneyIn[defaultTab]);
                }
            } else {
                for (var tab in this.methodsOfMoneyIn) {
                    var type = this.methodsOfMoneyIn[tab];
                    if (type.status !== 1 || tab.indexOf('WYZZ') === -1 && type.iconName !== 'payquick') {
                        this.selectedMethodOfMoneyIn = tab;
                    }
                    break;
                }
            }
        }
    },
    components: {
        modAccountMain: __WEBPACK_IMPORTED_MODULE_0_components_AccountMain___default.a,
        modAccountSubNavPublic: __WEBPACK_IMPORTED_MODULE_1_components_AccountSubNavPublicV2___default.a,
        modOnlineServiceFloat: __WEBPACK_IMPORTED_MODULE_3_components_OnlineServiceFloat___default.a,
        AccountMoneyInCompany2: __WEBPACK_IMPORTED_MODULE_4_components_AccountMoneyInCompanyV2___default.a
    }
});

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 906:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 913:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 917:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(726),
  /* template */
  __webpack_require__(1223),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});