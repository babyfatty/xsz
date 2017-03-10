webpackJsonp([3,8],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"checkOrder.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("caf6fde2", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7cf2bb89&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checkOrder.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7cf2bb89&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checkOrder.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "checkOrder"
  }, [_c('div', {
    staticClass: "confirm-seats-info"
  }, [_c('h3', [_vm._v(_vm._s(_vm.sname))]), _vm._v(" "), _c('div', {
    staticClass: "location"
  }, [_vm._v("\n      " + _vm._s(_vm.slocation) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [_vm._v("\n      " + _vm._s(_vm.stime) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "seats"
  }, _vm._l((_vm.chosen), function(item) {
    return _c('span', [_vm._v("\n        " + _vm._s(item.row * 1 + 1) + "排" + _vm._s(item.column * 1 + 1) + "座\n      ")])
  })), _vm._v(" "), _c('div', [_vm._v("\n      电话：" + _vm._s(_vm.user.phone) + "\n    ")]), _vm._v(" "), _c('div', [_vm._v("\n      预订人：" + _vm._s(_vm.user.username) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "price"
  }, [_vm._v("\n    预约费用总计：4元\n  ")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "payBtn"
  }, [_c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.goToPay
    }
  }, [_vm._v("立即付款")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "statement"
  }, [_c('h5', [_vm._v("购票须知")]), _vm._v(" "), _c('div', [_vm._v("1,本场讲座位公益讲座，所有预约费用讲捐献给学习基金")]), _vm._v(" "), _c('div', [_vm._v("2,本场讲座设计大量人力物力，预约成功不可退款")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "priceInfo"
  }, [_c('span', [_vm._v("本场讲座不支持退换票")]), _vm._v(" "), _c('span', [_vm._v("应付4元")])])
}]}

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(142)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(179),
  /* scopeId */
  "data-v-7cf2bb89",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'checkOrder',
  data() {
    return {
      sname: '小高考公益讲座',
      slocation: '南京市中山会议中心中山厅',
      phone: '13222001020',
      stime: '03-15 09:25-11:04'
    };
  },
  mounted() {
    console.log(this.$route.params);
    var self = this;
    this.$http.get('/xsz/api/sign', {
      params: {
        url: location.href
      }
    }).then(res => {
      var data = res.data;
      console.log('data', data);
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx829b884172f246ea', // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名，见附录1
        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
    });
  },
  computed: {
    chosen() {
      return JSON.parse(this.$route.params.chosen);
    },
    user() {
      return this.$route.params.user;
    }
  },
  methods: {
    goToPay() {
      var self = this;
      wx.ready(function () {
        self.$http.get('/xsz/api/unifiedorder').then(res => {
          console.log(res);
          var nonceStr = md5(new Date().getTime()).substring(0, 32);
          var time = Math.floor(new Date().getTime() / 1000);
          var payload = {
            appId: 'wx829b884172f246ea',
            nonceStr: nonceStr,
            package: 'prepay_id=' + res.data, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: 'MD5',
            timeStamp: time
          };
          let genSign = function () {
            var stringA = "";
            for (var i in payload) {
              stringA += i + '=' + payload[i] + '&';
            }
            var stringSignTemp = stringA + "key=d41d8cd98f00b204e9800998ecf8427e";
            console.log(stringSignTemp);
            var sign = md5(stringSignTemp).toUpperCase();
            return sign;
          };
          console.log(payload);
          wx.chooseWXPay({
            nonceStr: nonceStr,
            package: 'prepay_id=' + res.data,
            signType: 'MD5',
            timestamp: time,
            paySign: genSign(),
            success: function (res) {
              alert(JSON.stringify(res));
              self.$router.replace({ "name": "orderdetail" });
              console.log('success', res);
            },
            fail: function (res) {
              alert(res);
            },
            cancel: function (res) {
              alert(res);
              self.$router.replace({ "name": "orderdetail" });
            }
          });
        });
      });
      // this.$router.replace({'name':'payment'})
    }
  }
};

/***/ })

});
//# sourceMappingURL=3.5517f7deba640efe2475.js.map