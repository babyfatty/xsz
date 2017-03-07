webpackJsonp([4,8],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  "data-v-505a5eda",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'payment',
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    pay() {
      function onBridgeReady() {
        WeixinJSBridge.invoke('getBrandWCPayRequest', {
          "appId": "wx829b884172f246ea", //公众号名称，由商户传入     
          "timeStamp": "1395712654", //时间戳，自1970年以来的秒数     
          "nonceStr": "e61463f8efa94090b1f366cccfbbb444", //随机串     
          "package": "prepay_id=u802345jgfjsdfgsdg888",
          "signType": "MD5", //微信签名方式：     
          "paySign": "70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
        }, function (res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {} // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
        });
      }
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
          document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
      } else {
        onBridgeReady();
      }
    }
  }
};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Payment.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("6772d99e", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-505a5eda&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Payment.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-505a5eda&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Payment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "payment"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.pay
    }
  }, [_vm._v("付款")])])
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=4.8def4fb1777eb3edf065.js.map