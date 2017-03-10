webpackJsonp([4,8],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\nh1[data-v-46075134], h2[data-v-46075134] {\n  font-weight: normal;\n}\nul[data-v-46075134] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-46075134] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-46075134] {\n  color: #42b983;\n}\n", "", {"version":3,"sources":["/Users/babyfat/Desktop/XHS/rlp-fe/src/components/Register.vue"],"names":[],"mappings":";AACA;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,eAAe;CAChB","file":"Register.vue","sourcesContent":["\nh1[data-v-46075134], h2[data-v-46075134] {\n  font-weight: normal;\n}\nul[data-v-46075134] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-46075134] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-46075134] {\n  color: #42b983;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("05478f3f", content, true);
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

/***/ 174:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('h2', [_vm._v("注册")]), _vm._v(" "), _c('form', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("姓名")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "",
      "placeholder": "姓名"
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("年级")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.grade),
      expression: "grade"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "",
      "placeholder": "年级"
    },
    domProps: {
      "value": (_vm.grade)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.grade = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("学校")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.school),
      expression: "school"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "",
      "placeholder": "学校"
    },
    domProps: {
      "value": (_vm.school)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.school = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("手机号")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phone),
      expression: "phone"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "",
      "placeholder": "手机号"
    },
    domProps: {
      "value": (_vm.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.phone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("验证码")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.varyCode),
      expression: "varyCode"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "",
      "placeholder": "验证码"
    },
    domProps: {
      "value": (_vm.varyCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.varyCode = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.vary
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.sendSms
    }
  }, [_vm._v("发送")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")])])])
},staticRenderFns: []}

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(137)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(174),
  /* scopeId */
  "data-v-46075134",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 91:
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

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'Login',
  data() {
    return {
      name: '',
      school: '',
      grade: '',
      phone: '',
      varyCode: ''
    };
  },
  mounted() {},
  methods: {
    submit() {
      this.$http.post('http://localhost:8889/api/addUser', {
        name: this.name,
        grade: this.grade,
        school: this.school,
        phone: this.phone
      }).then(res => {
        console.log(res.data);
        if (res.data.success) {
          this.$router.replace({ name: 'seats', params: { user: res.data.user } });
        } else {
          alert('注册失败');
        }
      });
    },
    vary() {
      this.$http.get('http://localhost:8889/api/varyCode', {
        params: {
          code: this.varyCode
        }
      }).then(res => {
        console.log(res);
      });
    },
    sendSms() {
      this.$http.get('http://localhost:8889/api/sendSMS').then(res => {
        console.log(res);
      });
    }
  }
};

/***/ })

});
//# sourceMappingURL=4.e57993e1a8c32b834f7f.js.map