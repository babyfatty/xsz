webpackJsonp([2,8],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"checkOrder.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
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

/***/ 177:
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
    return _c('span', [_vm._v("\n        " + _vm._s(item.row) + "排" + _vm._s(item.column) + "座\n      ")])
  })), _vm._v(" "), _c('div', [_vm._v("\n      " + _vm._s(_vm.phone) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "price"
  }, [_vm._v("\n    预约费用总计：4元\n  ")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "statement"
  }, [_c('h5', [_vm._v("购票须知")]), _vm._v(" "), _c('div', [_vm._v("1,本场讲座位公益讲座，所有预约费用讲捐献给学习基金")]), _vm._v(" "), _c('div', [_vm._v("2,本场讲座设计大量人力物力，预约成功不可退款")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "priceInfo"
  }, [_c('span', [_vm._v("本场讲座不支持退换票")]), _vm._v(" "), _c('span', [_vm._v("应付4元")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "payBtn"
  }, [_c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("立即付款")])])
}]}

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(140)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(177),
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
  mounted() {},
  computed: {
    chosen() {
      return JSON.parse(this.$route.query.chosen);
    }
  }
};

/***/ })

});
//# sourceMappingURL=2.5ea935cdfb2b82cf2d74.js.map