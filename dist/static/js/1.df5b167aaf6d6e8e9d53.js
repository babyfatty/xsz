webpackJsonp([1,8],{

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(34)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  "data-v-15830e28",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 27:
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
//
//


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'orderDetail',
  data() {
    return {
      sname: '小高考公益讲座',
      slocation: '南京市中山会议中心中山厅',
      phone: '13222001020',
      stime: '03-15 09:25-11:04',
      price: '123',
      order: '123412412',
      btime: '03-15 09:25-11:04'
    };
  },
  props: [],
  mounted() {},
  computed: {}
};

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"orderDetail.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("6d006f82", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-15830e28&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./orderDetail.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-15830e28&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./orderDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 43:
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
  })]), _vm._v(" "), _c('div', {
    staticClass: "price"
  }, [_c('div', [_c('span', [_vm._v("实付金额")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.price) + "元")])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("订单号")]), _c('span', [_vm._v(_vm._s(_vm.order))])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("购买时间")]), _c('span', [_vm._v(_vm._s(_vm.btime))])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("手机号")]), _c('span', [_vm._v(_vm._s(_vm.phone))])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "statement"
  }, [_c('h5', [_vm._v("取票须知")]), _vm._v(" "), _c('div', [_vm._v("1,本场讲座位公益讲座，所有预约费用讲捐献给学习基金")]), _vm._v(" "), _c('div', [_vm._v("2,本场讲座设计大量人力物力，预约成功不可退款")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "kfInfo"
  }, [_c('span', [_vm._v("客服联系")]), _vm._v(" "), _c('span', [_vm._v("吴老师：12341231")])])
}]}

/***/ })

});
//# sourceMappingURL=1.df5b167aaf6d6e8e9d53.js.map