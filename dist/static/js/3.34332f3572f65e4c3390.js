webpackJsonp([3,8],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  "data-v-46075134",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 22:
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

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'Login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  mounted() {}
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "\nh1[data-v-46075134], h2[data-v-46075134] {\n  font-weight: normal;\n}\nul[data-v-46075134] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-46075134] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-46075134] {\n  color: #42b983;\n}\n", "", {"version":3,"sources":["/./src/components/Register.vue"],"names":[],"mappings":";AACA;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,eAAe;CAChB","file":"Register.vue","sourcesContent":["\nh1[data-v-46075134], h2[data-v-46075134] {\n  font-weight: normal;\n}\nul[data-v-46075134] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-46075134] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-46075134] {\n  color: #42b983;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("05478f3f", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-46075134&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Register.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-46075134&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('h2', [_vm._v("注册")]), _vm._v(" "), _c('form', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("姓名")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "",
      "placeholder": "姓名"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("年级")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "",
      "placeholder": "年级"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("学校")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "",
      "placeholder": "学校"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("手机号")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "",
      "placeholder": "手机号"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("验证码")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "",
      "placeholder": "验证码"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("提交")])])])
}]}

/***/ })

});
//# sourceMappingURL=3.34332f3572f65e4c3390.js.map