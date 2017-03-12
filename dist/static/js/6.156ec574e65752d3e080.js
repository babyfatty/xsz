webpackJsonp([6,9],{

/***/ 162:
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


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'orderDetail',
  data() {
    return {
      session: "",
      user: "",
      transID: "",
      chosen: "",
      amount: ""
    };
  },
  mounted() {
    this.session = this.$route.query.session;
    this.user = this.$route.query.user;
    this.transID = this.$route.query.transID;
    this.chosen = JSON.parse(this.$route.query.chosen);
    this.amount = this.$route.query.amount;
    this.$http.post('/xsz/api/savePay', {
      uid: this.user.id + "",
      sid: this.session.id + "",
      chosen: JSON.stringify(this.chosen),
      transID: res.data.transId,
      amount: this.amount
    }).then(() => {
      alert('success');
    });
  }
  // computed:{
  //   session(){
  //     return this.$route.query.session
  //   },
  //   user(){
  //     return this.$route.query.user
  //   },
  //   transID(){
  //     return this.$route.query.transID
  //   },
  //   chosen(){
  //     return JSON.parse(this.$route.query.chosen)
  //   },
  //   amount(){
  //     return this.$route.query.amount
  //   }
  // }
};

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"OrderDetail.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(183)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(190),
  /* scopeId */
  "data-v-8c5d9e68",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(174);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("4cb174b1", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8c5d9e68&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderDetail.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8c5d9e68&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "checkOrder"
  }, [_c('div', {
    staticClass: "confirm-seats-info"
  }, [_c('h3', [_vm._v(_vm._s(_vm.session.name))]), _vm._v(" "), _c('div', {
    staticClass: "location"
  }, [_vm._v("\n      " + _vm._s(_vm.session.location) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [_vm._v("\n      " + _vm._s(_vm.session.time) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "seats"
  }, _vm._l((_vm.chosen), function(item) {
    return _c('span', [_vm._v("\n        " + _vm._s(item.row * 1 + 1) + "排" + _vm._s(item.column * 1 + 1) + "座\n      ")])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "price"
  }, [_c('div', [_c('span', [_vm._v("实付金额")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.amount) + "元")])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("订单号")]), _c('span', [_vm._v(_vm._s(_vm.transID))])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("手机号")]), _c('span', [_vm._v(_vm._s(_vm.user.phone))])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])
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
//# sourceMappingURL=6.156ec574e65752d3e080.js.map