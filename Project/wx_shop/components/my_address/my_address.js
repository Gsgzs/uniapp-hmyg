(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/my_address/my_address"],{7480:function(e,t,r){"use strict";r.r(t);var n=r("be03"),o=r("9135");for(var u in o)"default"!==u&&function(e){r.d(t,e,(function(){return o[e]}))}(u);r("c31f");var c,a=r("f0c5"),s=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);t["default"]=s.exports},"8d09":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r("a34a")),o=r("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return l(e)||f(e,t)||s(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done);n=!0)if(r.push(c.value),t&&r.length===t)break}catch(s){o=!0,u=s}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw u}}return r}}function l(e){if(Array.isArray(e))return e}function d(e,t,r,n,o,u,c){try{var a=e[u](c),s=a.value}catch(i){return void r(i)}a.done?t(s):Promise.resolve(s).then(n,o)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function c(e){d(u,n,o,c,a,"next",e)}function a(e){d(u,n,o,c,a,"throw",e)}c(void 0)}))}}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h={name:"my_address",computed:m(m({},(0,o.mapState)("m_user",["address"])),(0,o.mapGetters)("m_user",["addressTotal"])),data:function(){return{}},methods:{chooseAddress:function(){var t=this;return p(n.default.mark((function r(){var o,u,a,s;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.chooseAddress().catch((function(e){return e}));case 2:if(o=r.sent,u=c(o,2),a=u[0],s=u[1],console.log(a),console.log(s),null!==a||"chooseAddress:ok"!==s.errMsg){r.next=10;break}return r.abrupt("return",t.$store.commit("m_user/updateAddress",s));case 10:t.addressTotal||!a||"chooseAddress:cancel"!==a.errMsg&&"chooseAddress:fail cancel"!==a.errMsg||t.reAddress();case 11:case"end":return r.stop()}}),r)})))()},reAddress:function(){return p(n.default.mark((function t(){var r,o,u,a;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.showModal({content:"检测到您没打开地址权限，是否去设置打开？",confrimText:"确认",cancelTetxt:"取消"});case 2:if(r=t.sent,o=c(r,2),u=o[0],a=o[1],!u){t.next=8;break}return t.abrupt("return");case 8:if(!a.cancel){t.next=10;break}return t.abrupt("return",e.$showMsg("您取消了地址授权！"));case 10:if(!a.confirm){t.next=12;break}return t.abrupt("return",e.openSetting({success:function(t){return t.authSetting["scope.address"]?e.$showMsg("授权成功！请选择地址"):e.$showMsg("您取消了地址授权！")}}));case 12:case"end":return t.stop()}}),t)})))()}}};t.default=h}).call(this,r("543d")["default"])},9135:function(e,t,r){"use strict";r.r(t);var n=r("8d09"),o=r.n(n);for(var u in n)"default"!==u&&function(e){r.d(t,e,(function(){return n[e]}))}(u);t["default"]=o.a},be03:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return n}));var n={uniIcons:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(r.bind(null,"7f4d"))}},o=function(){var e=this,t=e.$createElement,r=(e._self._c,JSON.stringify(e.address));e.$mp.data=Object.assign({},{$root:{g0:r}})},u=[]},c31f:function(e,t,r){"use strict";var n=r("dce0"),o=r.n(n);o.a},dce0:function(e,t,r){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/my_address/my_address-create-component',
    {
        'components/my_address/my_address-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7480"))
        })
    },
    [['components/my_address/my_address-create-component']]
]);
