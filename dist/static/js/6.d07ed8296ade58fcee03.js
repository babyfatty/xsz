webpackJsonp([6,11],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.front[data-v-ac2ff24a]{\n    width: 300px;\n    margin: 5px 32px 45px 32px;\n    background-color: #f0f0f0;\n    color: #666;\n    text-align: center;\n    padding: 3px;\n    border-radius: 5px;\n}\ndiv.seatCharts-row[data-v-ac2ff24a] {\n    height: 35px;\n    width: 400px;\n}\ndiv.seatCharts-cell[data-v-ac2ff24a] {\n    color: #182C4E;\n    height: 25px;\n    width: 25px;\n    line-height: 25px;\n    margin: 3px;\n    float: left;\n    text-align: center;\n    outline: none;\n    font-size: 13px;\n}\ndiv.seatCharts-seat[data-v-ac2ff24a] {\n    color: #fff;\n    cursor: pointer;\n    border-radius: 5px;\n}\ndiv.seatCharts-seat.available[data-v-ac2ff24a] {\n    background-color: #B9DEA0;\n}\ndiv.seatCharts-seat.unavailable[data-v-ac2ff24a] {\n    background-color: #472B34;\n    cursor: not-allowed;\n}\ndiv.seatCharts-seat.selected[data-v-ac2ff24a] {\n    background-color: #E6CAC4;\n}\n.seatsSection[data-v-ac2ff24a]{\n  overflow: scroll;\n}\n.infoSection[data-v-ac2ff24a]{\n  padding: 10px 16px;\n}\n.submitBtn[data-v-ac2ff24a]{\n  width: 100%;\n}\n", "", {"version":3,"sources":["/Users/babyfat/Desktop/XHS/rlp-fe/src/components/Seats.vue"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,0BAA0B;IAC1B,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,aAAa;CAChB;AACD;IACI,eAAe;IACf,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,cAAc;IACd,gBAAgB;CACnB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;CACtB;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,0BAA0B;IAC1B,oBAAoB;CACvB;AACD;IACI,0BAA0B;CAC7B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;CACb","file":"Seats.vue","sourcesContent":["\n.front[data-v-ac2ff24a]{\n    width: 300px;\n    margin: 5px 32px 45px 32px;\n    background-color: #f0f0f0;\n    color: #666;\n    text-align: center;\n    padding: 3px;\n    border-radius: 5px;\n}\ndiv.seatCharts-row[data-v-ac2ff24a] {\n    height: 35px;\n    width: 400px;\n}\ndiv.seatCharts-cell[data-v-ac2ff24a] {\n    color: #182C4E;\n    height: 25px;\n    width: 25px;\n    line-height: 25px;\n    margin: 3px;\n    float: left;\n    text-align: center;\n    outline: none;\n    font-size: 13px;\n}\ndiv.seatCharts-seat[data-v-ac2ff24a] {\n    color: #fff;\n    cursor: pointer;\n    border-radius: 5px;\n}\ndiv.seatCharts-seat.available[data-v-ac2ff24a] {\n    background-color: #B9DEA0;\n}\ndiv.seatCharts-seat.unavailable[data-v-ac2ff24a] {\n    background-color: #472B34;\n    cursor: not-allowed;\n}\ndiv.seatCharts-seat.selected[data-v-ac2ff24a] {\n    background-color: #E6CAC4;\n}\n.seatsSection[data-v-ac2ff24a]{\n  overflow: scroll;\n}\n.infoSection[data-v-ac2ff24a]{\n  padding: 10px 16px;\n}\n.submitBtn[data-v-ac2ff24a]{\n  width: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("33ec425b", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ac2ff24a&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Seats.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ac2ff24a&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Seats.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "seats"
  }, [_c('div', {
    staticClass: "front"
  }, [_vm._v("屏幕")]), _vm._v(" "), _c('div', {
    staticClass: "seatsSection"
  }, _vm._l((_vm.rows), function(row, rindex) {
    return _c('div', {
      staticClass: "seatCharts-row"
    }, [_c('div', {
      staticClass: "seatCharts-cell seatCharts-space"
    }, [_vm._v(_vm._s(rindex))]), _vm._v(" "), _vm._l((_vm.columns), function(column, cindex) {
      return _c('div', {
        staticClass: "seatCharts-seat seatCharts-cell available",
        class: {
          selected: _vm.chosenArray.indexOf(rindex + '' + cindex) !== -1, unavailable: _vm.selected.indexOf(rindex + '' + cindex) !== -1
        },
        attrs: {
          "role": "checkbox"
        },
        on: {
          "click": function($event) {
            _vm.handleClick(rindex, cindex)
          }
        }
      }, [_vm._v("\n          " + _vm._s(cindex) + " \n        ")])
    })], 2)
  })), _vm._v(" "), _c('div', {
    staticClass: "infoSection"
  }, [_c('div', {
    staticClass: "reserveInfo lead"
  }, [_vm._v("预约信息")]), _vm._v(" "), _c('ul', [_c('li', [_c('div', {
    staticClass: "speachName"
  }, [_c('span', [_vm._v("讲座名：")]), _c('span', [_vm._v(_vm._s(_vm.session.name))])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "speachTime"
  }, [_c('span', [_vm._v("讲座时间：")]), _c('span', [_vm._v(_vm._s(_vm.session.time))])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "speachTime"
  }, [_c('span', [_vm._v("讲座location：")]), _c('span', [_vm._v(_vm._s(_vm.session.location))])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "seatsChosen"
  }, [_c('span', [_vm._v("已选座位：")]), _vm._v(" "), _vm._l((_vm.chosen), function(csn) {
    return _c('span', [_vm._v("\n              " + _vm._s(csn.row) + "排" + _vm._s(csn.column) + "座\n            ")])
  })], 2)])])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary submitBtn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.chooseSeat
    }
  }, [_vm._v("确认选座")])])
},staticRenderFns: []}

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(163)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(206),
  /* scopeId */
  "data-v-ac2ff24a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 99:
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

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'Seats',
  data() {
    return {
      rows: new Array(10),
      columns: new Array(10),
      chosen: [],
      chosenArray: [],
      session: {},
      selected: []
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.changeTitle('在线选座-橡树籽讲座报名');
    this.getSessionInfo().then(res => {
      this.session = res.data[0];
    });
    // this.$http.get('http://localhost:8889/api/bookedSeats').then((res)=>{
    this.$http.get('http://xesfun.com/xsz/api/bookedSeats').then(res => {
      var temp = [];
      res.data.forEach((element, index) => {
        console.log(element.chosen);
        temp = temp.concat(JSON.parse(element.chosen));
      });
      temp.forEach((element, index) => {
        // statements
        if (!!element) {
          this.selected.push(element.row + "" + element.column);
        } else {
          return;
        }
      });
      console.log('selectef', this.selected);
    });
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
    handleClick(r, c) {
      var temp = r + '' + c;
      var index = this.chosenArray.indexOf(temp);
      var sindex = this.selected.indexOf(temp);
      if (sindex !== -1) {
        return;
      }
      if (index === -1) {
        if (this.chosenArray.length >= 2) {
          alert('只能选两个座位');
          return;
        }
        this.chosenArray.push(temp);
        this.chosen.push({
          row: r,
          column: c
        });
      } else {
        this.chosenArray.splice(index, 1);
        this.chosen.splice(index, 1);
      }
    },
    chooseSeat() {
      if (this.chosen.length === 0) {
        alert('you have not chosen a seat');
        return;
      }
      this.$router.replace({ name: 'checkorder', params: { chosen: JSON.stringify(this.chosen), user: this.$route.params.user, session: this.session } });
    },
    getSessionInfo() {
      return this.$http.get('http://xesfun.com/xsz/api/sessionInfo');
      // return this.$http.get('http://localhost:8889/api/sessionInfo')
    }
  }

};

/***/ })

});
//# sourceMappingURL=6.d07ed8296ade58fcee03.js.map