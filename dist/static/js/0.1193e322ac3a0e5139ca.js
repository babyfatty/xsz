webpackJsonp([0,8],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(45),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_script_loader_assets_wx_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_script_loader_assets_wx_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_script_loader_assets_wx_js__);
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
  mounted() {
    var self = this;
    this.$http.get('/api/sign', {
      params: {
        url: location.href
      }
    }).then(res => {
      var data = res.data;
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx829b884172f246ea', // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名，见附录1
        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wx.ready(function () {
        self.$http.get('/api/unifiedorder', {
          params: {
            code: self.$route.params.code
          }
        }).then(res => {
          console.log(res);
          wx.chooseWXPay({
            timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: '123', // 支付签名随机串，不长于 32 位
            package: res.body, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            paySign: '12', // 支付签名
            signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            success: function (res) {
              // 支付成功后的回调函数
              console.log('success', res);
            }
          });
        });
      });
    });
  },
  methods: {
    pay() {}
  }
};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Payment.vue","sourceRoot":""}]);

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

/***/ 40:
/***/ (function(module, exports) {

module.exports = "!function (a, b) {\n  \"function\" == typeof define && (define.amd || define.cmd) ? define(function () {\n    return b(a);\n  }) : b(a, !0);\n}(this, function (a, b) {\n  function c(b, c, d) {\n    a.WeixinJSBridge ? WeixinJSBridge.invoke(b, e(c), function (a) {\n      g(b, a, d);\n    }) : j(b, d);\n  }function d(b, c, d) {\n    a.WeixinJSBridge ? WeixinJSBridge.on(b, function (a) {\n      d && d.trigger && d.trigger(a), g(b, a, c);\n    }) : d ? j(b, d) : j(b, c);\n  }function e(a) {\n    return a = a || {}, a.appId = E.appId, a.verifyAppId = E.appId, a.verifySignType = \"sha1\", a.verifyTimestamp = E.timestamp + \"\", a.verifyNonceStr = E.nonceStr, a.verifySignature = E.signature, a;\n  }function f(a) {\n    return { timeStamp: a.timestamp + \"\", nonceStr: a.nonceStr, \"package\": a.package, paySign: a.paySign, signType: a.signType || \"SHA1\" };\n  }function g(a, b, c) {\n    var d, e, f;switch (delete b.err_code, delete b.err_desc, delete b.err_detail, d = b.errMsg, d || (d = b.err_msg, delete b.err_msg, d = h(a, d), b.errMsg = d), c = c || {}, c._complete && (c._complete(b), delete c._complete), d = b.errMsg || \"\", E.debug && !c.isInnerInvoke && alert(JSON.stringify(b)), e = d.indexOf(\":\"), f = d.substring(e + 1)) {case \"ok\":\n        c.success && c.success(b);break;case \"cancel\":\n        c.cancel && c.cancel(b);break;default:\n        c.fail && c.fail(b);}c.complete && c.complete(b);\n  }function h(a, b) {\n    var e,\n        f,\n        c = a,\n        d = p[c];return d && (c = d), e = \"ok\", b && (f = b.indexOf(\":\"), e = b.substring(f + 1), \"confirm\" == e && (e = \"ok\"), \"failed\" == e && (e = \"fail\"), -1 != e.indexOf(\"failed_\") && (e = e.substring(7)), -1 != e.indexOf(\"fail_\") && (e = e.substring(5)), e = e.replace(/_/g, \" \"), e = e.toLowerCase(), (\"access denied\" == e || \"no permission to execute\" == e) && (e = \"permission denied\"), \"config\" == c && \"function not exist\" == e && (e = \"ok\"), \"\" == e && (e = \"fail\")), b = c + \":\" + e;\n  }function i(a) {\n    var b, c, d, e;if (a) {\n      for (b = 0, c = a.length; c > b; ++b) d = a[b], e = o[d], e && (a[b] = e);return a;\n    }\n  }function j(a, b) {\n    if (!(!E.debug || b && b.isInnerInvoke)) {\n      var c = p[a];c && (a = c), b && b._complete && delete b._complete, console.log('\"' + a + '\",', b || \"\");\n    }\n  }function k() {\n    0 != D.preVerifyState && (u || v || E.debug || \"6.0.2\" > z || D.systemType < 0 || A || (A = !0, D.appId = E.appId, D.initTime = C.initEndTime - C.initStartTime, D.preVerifyTime = C.preVerifyEndTime - C.preVerifyStartTime, H.getNetworkType({ isInnerInvoke: !0, success: function (a) {\n        var b, c;D.networkType = a.networkType, b = \"http://open.weixin.qq.com/sdk/report?v=\" + D.version + \"&o=\" + D.preVerifyState + \"&s=\" + D.systemType + \"&c=\" + D.clientVersion + \"&a=\" + D.appId + \"&n=\" + D.networkType + \"&i=\" + D.initTime + \"&p=\" + D.preVerifyTime + \"&u=\" + D.url, c = new Image(), c.src = b;\n      } })));\n  }function l() {\n    return new Date().getTime();\n  }function m(b) {\n    w && (a.WeixinJSBridge ? b() : q.addEventListener && q.addEventListener(\"WeixinJSBridgeReady\", b, !1));\n  }function n() {\n    H.invoke || (H.invoke = function (b, c, d) {\n      a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d);\n    }, H.on = function (b, c) {\n      a.WeixinJSBridge && WeixinJSBridge.on(b, c);\n    });\n  }var o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H;if (!a.jWeixin) return o = { config: \"preVerifyJSAPI\", onMenuShareTimeline: \"menu:share:timeline\", onMenuShareAppMessage: \"menu:share:appmessage\", onMenuShareQQ: \"menu:share:qq\", onMenuShareWeibo: \"menu:share:weiboApp\", onMenuShareQZone: \"menu:share:QZone\", previewImage: \"imagePreview\", getLocation: \"geoLocation\", openProductSpecificView: \"openProductViewWithPid\", addCard: \"batchAddCard\", openCard: \"batchViewCard\", chooseWXPay: \"getBrandWCPayRequest\" }, p = function () {\n    var b,\n        a = {};for (b in o) a[o[b]] = b;return a;\n  }(), q = a.document, r = q.title, s = navigator.userAgent.toLowerCase(), t = navigator.platform.toLowerCase(), u = !(!t.match(\"mac\") && !t.match(\"win\")), v = -1 != s.indexOf(\"wxdebugger\"), w = -1 != s.indexOf(\"micromessenger\"), x = -1 != s.indexOf(\"android\"), y = -1 != s.indexOf(\"iphone\") || -1 != s.indexOf(\"ipad\"), z = function () {\n    var a = s.match(/micromessenger\\/(\\d+\\.\\d+\\.\\d+)/) || s.match(/micromessenger\\/(\\d+\\.\\d+)/);return a ? a[1] : \"\";\n  }(), A = !1, B = !1, C = { initStartTime: l(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0 }, D = { version: 1, appId: \"\", initTime: 0, preVerifyTime: 0, networkType: \"\", preVerifyState: 1, systemType: y ? 1 : x ? 2 : -1, clientVersion: z, url: encodeURIComponent(location.href) }, E = {}, F = { _completes: [] }, G = { state: 0, data: {} }, m(function () {\n    C.initEndTime = l();\n  }), H = { config: function (a) {\n      E = a, j(\"config\", a);var b = E.check === !1 ? !1 : !0;m(function () {\n        var a, d, e;if (b) c(o.config, { verifyJsApiList: i(E.jsApiList) }, function () {\n          F._complete = function (a) {\n            C.preVerifyEndTime = l(), G.state = 1, G.data = a;\n          }, F.success = function () {\n            D.preVerifyState = 0;\n          }, F.fail = function (a) {\n            F._fail ? F._fail(a) : G.state = -1;\n          };var a = F._completes;return a.push(function () {\n            k();\n          }), F.complete = function () {\n            for (var c = 0, d = a.length; d > c; ++c) a[c]();F._completes = [];\n          }, F;\n        }()), C.preVerifyStartTime = l();else {\n          for (G.state = 1, a = F._completes, d = 0, e = a.length; e > d; ++d) a[d]();F._completes = [];\n        }\n      }), E.beta && n();\n    }, ready: function (a) {\n      0 != G.state ? a() : (F._completes.push(a), !w && E.debug && a());\n    }, error: function (a) {\n      \"6.0.2\" > z || B || (B = !0, -1 == G.state ? a(G.data) : F._fail = a);\n    }, checkJsApi: function (a) {\n      var b = function (a) {\n        var c,\n            d,\n            b = a.checkResult;for (c in b) d = p[c], d && (b[d] = b[c], delete b[c]);return a;\n      };c(\"checkJsApi\", { jsApiList: i(a.jsApiList) }, function () {\n        return a._complete = function (a) {\n          if (x) {\n            var c = a.checkResult;c && (a.checkResult = JSON.parse(c));\n          }a = b(a);\n        }, a;\n      }());\n    }, onMenuShareTimeline: function (a) {\n      d(o.onMenuShareTimeline, { complete: function () {\n          c(\"shareTimeline\", { title: a.title || r, desc: a.title || r, img_url: a.imgUrl || \"\", link: a.link || location.href, type: a.type || \"link\", data_url: a.dataUrl || \"\" }, a);\n        } }, a);\n    }, onMenuShareAppMessage: function (a) {\n      d(o.onMenuShareAppMessage, { complete: function () {\n          c(\"sendAppMessage\", { title: a.title || r, desc: a.desc || \"\", link: a.link || location.href, img_url: a.imgUrl || \"\", type: a.type || \"link\", data_url: a.dataUrl || \"\" }, a);\n        } }, a);\n    }, onMenuShareQQ: function (a) {\n      d(o.onMenuShareQQ, { complete: function () {\n          c(\"shareQQ\", { title: a.title || r, desc: a.desc || \"\", img_url: a.imgUrl || \"\", link: a.link || location.href }, a);\n        } }, a);\n    }, onMenuShareWeibo: function (a) {\n      d(o.onMenuShareWeibo, { complete: function () {\n          c(\"shareWeiboApp\", { title: a.title || r, desc: a.desc || \"\", img_url: a.imgUrl || \"\", link: a.link || location.href }, a);\n        } }, a);\n    }, onMenuShareQZone: function (a) {\n      d(o.onMenuShareQZone, { complete: function () {\n          c(\"shareQZone\", { title: a.title || r, desc: a.desc || \"\", img_url: a.imgUrl || \"\", link: a.link || location.href }, a);\n        } }, a);\n    }, startRecord: function (a) {\n      c(\"startRecord\", {}, a);\n    }, stopRecord: function (a) {\n      c(\"stopRecord\", {}, a);\n    }, onVoiceRecordEnd: function (a) {\n      d(\"onVoiceRecordEnd\", a);\n    }, playVoice: function (a) {\n      c(\"playVoice\", { localId: a.localId }, a);\n    }, pauseVoice: function (a) {\n      c(\"pauseVoice\", { localId: a.localId }, a);\n    }, stopVoice: function (a) {\n      c(\"stopVoice\", { localId: a.localId }, a);\n    }, onVoicePlayEnd: function (a) {\n      d(\"onVoicePlayEnd\", a);\n    }, uploadVoice: function (a) {\n      c(\"uploadVoice\", { localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a);\n    }, downloadVoice: function (a) {\n      c(\"downloadVoice\", { serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a);\n    }, translateVoice: function (a) {\n      c(\"translateVoice\", { localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a);\n    }, chooseImage: function (a) {\n      c(\"chooseImage\", { scene: \"1|2\", count: a.count || 9, sizeType: a.sizeType || [\"original\", \"compressed\"], sourceType: a.sourceType || [\"album\", \"camera\"] }, function () {\n        return a._complete = function (a) {\n          if (x) {\n            var b = a.localIds;b && (a.localIds = JSON.parse(b));\n          }\n        }, a;\n      }());\n    }, previewImage: function (a) {\n      c(o.previewImage, { current: a.current, urls: a.urls }, a);\n    }, uploadImage: function (a) {\n      c(\"uploadImage\", { localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a);\n    }, downloadImage: function (a) {\n      c(\"downloadImage\", { serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1 }, a);\n    }, getNetworkType: function (a) {\n      var b = function (a) {\n        var c,\n            d,\n            e,\n            b = a.errMsg;if (a.errMsg = \"getNetworkType:ok\", c = a.subtype, delete a.subtype, c) a.networkType = c;else switch (d = b.indexOf(\":\"), e = b.substring(d + 1)) {case \"wifi\":case \"edge\":case \"wwan\":\n            a.networkType = e;break;default:\n            a.errMsg = \"getNetworkType:fail\";}return a;\n      };c(\"getNetworkType\", {}, function () {\n        return a._complete = function (a) {\n          a = b(a);\n        }, a;\n      }());\n    }, openLocation: function (a) {\n      c(\"openLocation\", { latitude: a.latitude, longitude: a.longitude, name: a.name || \"\", address: a.address || \"\", scale: a.scale || 28, infoUrl: a.infoUrl || \"\" }, a);\n    }, getLocation: function (a) {\n      a = a || {}, c(o.getLocation, { type: a.type || \"wgs84\" }, function () {\n        return a._complete = function (a) {\n          delete a.type;\n        }, a;\n      }());\n    }, hideOptionMenu: function (a) {\n      c(\"hideOptionMenu\", {}, a);\n    }, showOptionMenu: function (a) {\n      c(\"showOptionMenu\", {}, a);\n    }, closeWindow: function (a) {\n      a = a || {}, c(\"closeWindow\", {}, a);\n    }, hideMenuItems: function (a) {\n      c(\"hideMenuItems\", { menuList: a.menuList }, a);\n    }, showMenuItems: function (a) {\n      c(\"showMenuItems\", { menuList: a.menuList }, a);\n    }, hideAllNonBaseMenuItem: function (a) {\n      c(\"hideAllNonBaseMenuItem\", {}, a);\n    }, showAllNonBaseMenuItem: function (a) {\n      c(\"showAllNonBaseMenuItem\", {}, a);\n    }, scanQRCode: function (a) {\n      a = a || {}, c(\"scanQRCode\", { needResult: a.needResult || 0, scanType: a.scanType || [\"qrCode\", \"barCode\"] }, function () {\n        return a._complete = function (a) {\n          var b, c;y && (b = a.resultStr, b && (c = JSON.parse(b), a.resultStr = c && c.scan_code && c.scan_code.scan_result));\n        }, a;\n      }());\n    }, openProductSpecificView: function (a) {\n      c(o.openProductSpecificView, { pid: a.productId, view_type: a.viewType || 0, ext_info: a.extInfo }, a);\n    }, addCard: function (a) {\n      var e,\n          f,\n          g,\n          h,\n          b = a.cardList,\n          d = [];for (e = 0, f = b.length; f > e; ++e) g = b[e], h = { card_id: g.cardId, card_ext: g.cardExt }, d.push(h);c(o.addCard, { card_list: d }, function () {\n        return a._complete = function (a) {\n          var c,\n              d,\n              e,\n              b = a.card_list;if (b) {\n            for (b = JSON.parse(b), c = 0, d = b.length; d > c; ++c) e = b[c], e.cardId = e.card_id, e.cardExt = e.card_ext, e.isSuccess = e.is_succ ? !0 : !1, delete e.card_id, delete e.card_ext, delete e.is_succ;a.cardList = b, delete a.card_list;\n          }\n        }, a;\n      }());\n    }, chooseCard: function (a) {\n      c(\"chooseCard\", { app_id: E.appId, location_id: a.shopId || \"\", sign_type: a.signType || \"SHA1\", card_id: a.cardId || \"\", card_type: a.cardType || \"\", card_sign: a.cardSign, time_stamp: a.timestamp + \"\", nonce_str: a.nonceStr }, function () {\n        return a._complete = function (a) {\n          a.cardList = a.choose_card_info, delete a.choose_card_info;\n        }, a;\n      }());\n    }, openCard: function (a) {\n      var e,\n          f,\n          g,\n          h,\n          b = a.cardList,\n          d = [];for (e = 0, f = b.length; f > e; ++e) g = b[e], h = { card_id: g.cardId, code: g.code }, d.push(h);c(o.openCard, { card_list: d }, a);\n    }, chooseWXPay: function (a) {\n      c(o.chooseWXPay, f(a), a);\n    } }, b && (a.wx = a.jWeixin = H), H;\n});"

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)(__webpack_require__(40))

/***/ }),

/***/ 45:
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
//# sourceMappingURL=0.1193e322ac3a0e5139ca.js.map