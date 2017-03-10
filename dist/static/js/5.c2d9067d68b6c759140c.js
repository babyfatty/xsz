webpackJsonp([5,8],{

/***/ 161:
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

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'Login',
  data() {
    return {
      name: '',
      school: '',
      grade: '',
      phone: '',
      varyCode: '',
      wait: 10,
      btnShow: true
    };
  },
  mounted() {},
  methods: {
    submit() {
      this.$http.post('http://xesfun.com/xsz/api/addUser', {
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
      this.$http.get('http://xesfun.com/xsz/api/varyCode', {
        params: {
          code: this.varyCode
        }
      }).then(res => {
        console.log(res);
      });
    },
    sendSms() {
      this.$http.get('http://xesfun.com/xsz/api/sendSMS').then(res => {
        console.log(res);
        if (res.success) {
          this.btnShow = false;
          var interval = setInterval(() => {
            if (this.wait > 0) {
              this.wait--;
            } else {
              this.btnShow = true;
              this.wait = 30;
              clearInterval(interval);
            }
          }, 1000);
        }
      });
    }
  }
};

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.registerTitle[data-v-46075134]{\n  font-size: 17px;\n}\n.loginLink[data-v-46075134]{\n  float: right;\n}\n.codeBtn[data-v-46075134]{\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.form-group[data-v-46075134]{\n  position: relative;\n}\n.submitBtn[data-v-46075134]{\n  width: 100%;\n}\n", "", {"version":3,"sources":["/Users/babyfat/Desktop/XHS/rlp-fe/src/components/Register.vue"],"names":[],"mappings":";AACA;EACE,gBAAgB;CACjB;AACD;EACE,aAAa;CACd;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,SAAS;CACV;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;CACb","file":"Register.vue","sourcesContent":["\n.registerTitle[data-v-46075134]{\n  font-size: 17px;\n}\n.loginLink[data-v-46075134]{\n  float: right;\n}\n.codeBtn[data-v-46075134]{\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.form-group[data-v-46075134]{\n  position: relative;\n}\n.submitBtn[data-v-46075134]{\n  width: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(173)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(161),
  /* template */
  __webpack_require__(180),
  /* scopeId */
  "data-v-46075134",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('span', {
    staticClass: "registerTitle"
  }, [_vm._v("注册")]), _vm._v(" "), _c('router-link', {
    staticClass: "loginLink",
    attrs: {
      "to": {
        name: 'login'
      }
    }
  }, [_vm._v("已经注册过，直接登录 >>")]), _vm._v(" "), _c('div', {
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
    staticClass: "form-inline"
  }, [_c('div', {
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.btnShow),
      expression: "!btnShow"
    }],
    staticClass: "btn btn-default codeBtn",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("等待" + _vm._s(_vm.wait) + "s")]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.btnShow),
      expression: "btnShow"
    }],
    staticClass: "btn btn-primary codeBtn",
    on: {
      "click": _vm.sendSms
    }
  }, [_vm._v("发送")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.vary
    }
  }, [_vm._v("提交")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary submitBtn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")])], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=5.c2d9067d68b6c759140c.js.map