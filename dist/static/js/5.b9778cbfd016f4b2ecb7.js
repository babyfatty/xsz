webpackJsonp([5,11],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n#app{\n  padding: 20px;\n  padding-top: 10px;\n}\n", "", {"version":3,"sources":["/Users/babyfat/Desktop/XHS/rlp-fe/src/components/Login.vue"],"names":[],"mappings":";AACA;EACE,cAAc;EACd,kBAAkB;CACnB","file":"Login.vue","sourcesContent":["\n#app{\n  padding: 20px;\n  padding-top: 10px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.submitBtn[data-v-55a34494]{\n  width: 100%;\n}\n.codeBtn[data-v-55a34494]{\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.form-group[data-v-55a34494]{\n  position: relative;\n}\n", "", {"version":3,"sources":["/Users/babyfat/Desktop/XHS/rlp-fe/src/components/Login.vue"],"names":[],"mappings":";AACA;EACE,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,SAAS;CACV;AACD;EACE,mBAAmB;CACpB","file":"Login.vue","sourcesContent":["\n.submitBtn[data-v-55a34494]{\n  width: 100%;\n}\n.codeBtn[data-v-55a34494]{\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.form-group[data-v-55a34494]{\n  position: relative;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("133caa92", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-55a34494!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-55a34494!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("a423043e", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-55a34494&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Login.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-55a34494&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Login.vue");
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
__webpack_require__(159)
__webpack_require__(160)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(204),
  /* scopeId */
  "data-v-55a34494",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label",
    attrs: {
      "for": "inputEmail3"
    }
  }, [_vm._v("手机号")]), _vm._v(" "), _c('div', {}, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phone),
      expression: "phone"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "inputEmail3",
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
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label",
    attrs: {
      "for": "inputEmail3"
    }
  }, [_vm._v("验证码")]), _vm._v(" "), _c('div', {}, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.varyCode),
      expression: "varyCode"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "numbder",
      "id": "inputEmail3",
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
  })]), _vm._v(" "), _c('button', {
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
    staticClass: "btn btn-primary submitBtn",
    on: {
      "click": _vm.vary
    }
  }, [_vm._v("提交")])])
},staticRenderFns: []}

/***/ }),

/***/ 94:
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

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'Login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      wait: 30,
      btnShow: true,
      varyCode: "",
      phone: ""
    };
  },
  mounted() {
    this.changeTitle('登录-橡树籽讲座报名');
  },
  methods: {
    changeTitle(t) {
      document.title = t;
      var i = document.createElement('iframe');
      i.src = '//m.baidu.com/favicon.ico';
      i.style.display = 'none';
      i.onload = function () {
        setTimeout(function () {
          i.remove();
        }, 9);
      };
      document.body.appendChild(i);
    },
    vary() {
      this.$http.get('http://xesfun.com/xsz/api/varyLogin', {
        // this.$http.get('http://localhost:8889/api/varyLogin',{
        params: {
          code: this.varyCode,
          phone: this.phone
        }
      }).then(res => {
        console.log(res.data);
        if (res.data.success) {
          this.$router.replace({ name: 'payment', params: { user: res.data.user } });
        } else {
          alert(res.data.msg);
        }
        console.log(res);
      });
    },
    sendSms() {
      this.$http.get('http://xesfun.com/xsz/api/sendSMS', {
        params: {
          phone: this.phone
        }
      }).then(res => {
        console.log(res);
        if (res.data.success) {
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

/***/ })

});
//# sourceMappingURL=5.b9778cbfd016f4b2ecb7.js.map