(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"01da":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:["content","show"],methods:{onMaskClick:function(){this.$emit("maskClick")}}};e.default=r},"0bee":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","container"),attrs:{_i:0}},[n("button",{attrs:{disabled:t._$s(1,"a-disabled",t.disabled),_i:1},on:{click:t.onClick}},[t._v(t._$s(1,"t0-0",t._s(t.text)))])])},i=[]},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[i].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),a="";if(u.length>1){var s=u.pop();a=u.join("---COMMA---"),0===s.indexOf(" at ")?a+=s:a+="---COMMA---"+s}else a=u[0];console[i](a)}n.r(e),n.d(e,"log",(function(){return i})),n.d(e,"default",(function(){return u}))},1622:function(t,e,n){"use strict";n.r(e);var r=n("8ef9"),o=n("5348");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u,a=n("f0c5"),s=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=s.exports},"1bd6":function(t,e,n){"use strict";n.r(e);var r=n("c5ce");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);var i,u,a,s,c=n("f0c5"),f=Object(c["a"])(r["default"],i,u,!1,null,null,null,!1,a,s);e["default"]=f.exports},"33a8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("b0ac"));function o(t){return t&&t.__esModule?t:{default:t}}var i={components:{Title:r.default},props:["question","index"],methods:{checkboxChange:function(t){this.$emit("change",{questionIndex:this.index,answerIndices:t.detail.value})}}};e.default=i},3915:function(t,e,n){"use strict";n.r(e);var r=n("dab7"),o=n("a5b0");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u,a=n("f0c5"),s=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=s.exports},"3db0":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","question"),attrs:{_i:0}},[n("text",[t._v(t._$s(1,"t0-0",t._s(t.content)))])])},i=[]},"51ee":function(t,e,n){"use strict";n.r(e);var r=n("5a97"),o=n("943b");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u,a=n("f0c5"),s=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=s.exports},5348:function(t,e,n){"use strict";n.r(e);var r=n("61e4"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"58f7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},"5a97":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{directives:[{name:"show",rawName:"v-show",value:t._$s(0,"v-show",t.show),expression:"_$s(0,'v-show',show)"}],staticClass:t._$s(0,"sc","dialog"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","mask"),attrs:{_i:1},on:{click:t.onMaskClick}}),n("view",{staticClass:t._$s(2,"sc","content"),attrs:{_i:2}},[t._v(t._$s(2,"t0-0",t._s(t.content)))])])},i=[]},"5e4f":function(t,e,n){"use strict";n.r(e);var r=n("7ea9"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"61e4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("b0ac"));function o(t){return t&&t.__esModule?t:{default:t}}var i={components:{Title:r.default},props:["question","index"],methods:{change:function(t){this.$emit("change",{questionIndex:this.index,answerIndex:t.detail.value})}}};e.default=i},"671a":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("7f6a").default)}))},"6a27":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(n("3915")),o=s(n("1622")),i=s(n("df93")),u=s(n("51ee")),a=s(n("8579"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){return v(t)||d(t)||l(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function d(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function v(t){if(Array.isArray(t))return p(t)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var _={components:{CheckQuestion:r.default,RadioQuestion:o.default,FooterButton:i.default,Dialog:u.default},data:function(){var t=c(new Array(a.default.length)).map((function(){return{answerIndices:[]}}));return{showDialog:!1,title:"\u5c0f\u5de5\u5177",questions:a.default,results:t,indexMap:{0:"A",1:"B",2:"C",3:"D",4:"E"}}},computed:{disabled:function(){return this.results.some((function(t){return 0===t.answerIndices.length}))},score:function(){for(var t=this,e=0,n=0,r=this.results.length;n<r;n++){var o=this.questions[n],i=o.rightAnswers;if(i)(function(){var r=t.results[n].answerIndices;i.every((function(t){return r.includes(t.toString())}))&&(e+=o.score)})();else for(var u=this.results[n].answerIndices,a=0,s=u.length;a<s;a++){var c=o.answers[u[a]];e+=c.score}}return e}},methods:{onClick:function(){this.showDialog=!0},onCheckQuestionChange:function(e){this.results[e.questionIndex].answerIndices=e.answerIndices,t("log",e," at pages/index/index.vue:79")},onRadioQuestionChange:function(e){this.results[e.questionIndex].answerIndices=[e.answerIndex],t("log",e," at pages/index/index.vue:83")},checkboxChange:function(e){t("log",e," at pages/index/index.vue:86")}}};e.default=_}).call(this,n("0de9")["default"])},"73f2":function(t,e,n){"use strict";n.r(e);var r=n("6a27"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"7ea9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:["text","disabled"],methods:{onClick:function(){this.$emit("click")}}};e.default=r},"7f6a":function(t,e,n){"use strict";n.r(e);var r=n("ce6f"),o=n("73f2");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u,a=n("f0c5"),s=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=s.exports},8579:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=["\u6211\u611f\u5230\u60c5\u7eea\u6cae\u4e27\uff0c\u90c1\u95f7","\u6211\u611f\u5230\u6e05\u6668\u5fc3\u60c5\u5f88\u597d","\u6211\u8981\u54ed\u6216\u60f3\u54ed","\u6211\u591c\u95f4\u7761\u7720\u4e0d\u597d","\u6211\u5403\u996d\u50cf\u5e73\u65f6\u4e00\u6837\u591a","\u6211\u7684\u6027\u529f\u80fd\u6b63\u5e38","\u6211\u611f\u5230\u4f53\u91cd\u51cf\u8f7b","\u6211\u4e3a\u4fbf\u79d8\u70e6\u607c","\u6211\u7684\u5fc3\u8df3\u6bd4\u5e73\u65f6\u5feb","\u6211\u65e0\u6545\u611f\u5230\u75b2\u52b3","\u6211\u7684\u5934\u8111\u50cf\u5f80\u5e38\u4e00\u6837\u6e05\u695a","\u6211\u505a\u4e8b\u60c5\u50cf\u5e73\u65f6\u4e00\u6837\u4e0d\u89c9\u5f97\u56f0\u96be","\u6211\u5750\u5367\u4e0d\u5b89\uff0c\u96be\u4ee5\u4fdd\u6301\u5e73\u9759","\u6211\u5bf9\u672a\u6765\u62b1\u6709\u5e0c\u671b","\u6211\u6bd4\u5e73\u65f6\u66f4\u5bb9\u6613\u6fc0\u6012","\u6211\u505a\u51b3\u5b9a\u5f88\u5bb9\u6613","\u6211\u611f\u5230\u81ea\u5df1\u662f\u6709\u7528\u7684\u548c\u4e0d\u53ef\u7f3a\u5c11\u7684\u4eba","\u6211\u7684\u751f\u6d3b\u5f88\u6709\u610f\u4e49","\u5047\u82e5\u6211\u6b7b\u4e86\u522b\u4eba\u4f1a\u8fc7\u7684\u66f4\u597d","\u6211\u4ecd\u65e7\u559c\u7231\u81ea\u5df1\u5e73\u65f6\u559c\u7231\u7684\u4e1c\u897f"],o=r.map((function(t){return{title:"".concat(t,"\uff1f"),answers:[{text:"\u6ca1\u6709",score:1},{text:"\u6709\u65f6",score:2},{text:"\u7ecf\u5e38",score:3},{text:"\u6301\u7eed",score:4}]}}));e.default=o},"8bbf":function(t,e){t.exports=Vue},"8d42":function(t,e,n){"use strict";n.r(e);var r=n("94b9"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"8ef9":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("Title",{attrs:{content:t.index+1+". "+t.question.title,_i:1}}),n("radio-group",{attrs:{_i:2},on:{change:t.change}},t._l(t._$s(3,"f",{forItems:t.question.answers}),(function(e,r,o,i){return n("view",{key:t._$s(3,"f",{forIndex:o,key:r}),staticClass:t._$s("3-"+i,"sc","answer"),attrs:{_i:"3-"+i}},[n("label",{staticClass:t._$s("4-"+i,"sc","text"),attrs:{_i:"4-"+i}},[n("radio",{attrs:{value:t._$s("5-"+i,"a-value",r.toString()),_i:"5-"+i}}),t._v(t._$s("4-"+i,"t1-0",t._s(e.text)))])])})),0)],1)},i=[]},"943b":function(t,e,n){"use strict";n.r(e);var r=n("01da"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"94b9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:["content"]};e.default=r},a5b0:function(t,e,n){"use strict";n.r(e);var r=n("33a8"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},b0ac:function(t,e,n){"use strict";n.r(e);var r=n("3db0"),o=n("8d42");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u,a=n("f0c5"),s=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=s.exports},c5ce:function(t,e,n){"use strict";n.r(e);var r=n("58f7"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},ce6f:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticClass:t._$s(0,"sc","scroll-view"),attrs:{_i:0}},[t._l(t._$s(1,"f",{forItems:t.questions}),(function(e,r,o,i){return n("view",{key:t._$s(1,"f",{forIndex:o,key:r}),staticClass:t._$s("1-"+i,"sc","cell"),attrs:{_i:"1-"+i}},[t._$s("2-"+i,"i",e.check)?n("CheckQuestion",{attrs:{question:e,index:r,_i:"2-"+i},on:{change:t.onCheckQuestionChange}}):n("RadioQuestion",{attrs:{question:e,index:r,_i:"3-"+i},on:{change:t.onRadioQuestionChange}})],1)})),n("FooterButton",{attrs:{text:"\u5b8c\u6210",disabled:t.disabled,_i:4},on:{click:t.onClick}}),n("Dialog",{attrs:{show:t.showDialog,content:t.score,_i:5},on:{maskClick:function(e){t.showDialog=!1}}})],2)},i=[]},dab7:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("Title",{attrs:{content:t.index+1+". "+t.question.title,_i:1}}),n("checkbox-group",{attrs:{_i:2},on:{change:t.checkboxChange}},t._l(t._$s(3,"f",{forItems:t.question.answers}),(function(e,r,o,i){return n("view",{key:t._$s(3,"f",{forIndex:o,key:r}),staticClass:t._$s("3-"+i,"sc","answer"),attrs:{_i:"3-"+i}},[n("label",{staticClass:t._$s("4-"+i,"sc","checkbox-text"),attrs:{_i:"4-"+i}},[n("checkbox",{attrs:{value:t._$s("5-"+i,"a-value",r.toString()),_i:"5-"+i}}),t._v(t._$s("4-"+i,"t1-0",t._s(e.text)))])])})),0)],1)},i=[]},df93:function(t,e,n){"use strict";n.r(e);var r=n("0bee"),o=n("5e4f");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u,a=n("f0c5"),s=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=s.exports},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,o,i,u,a,s,c){var f,l="function"===typeof t?t.options:t;if(s){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var v in s)d.call(s,v)&&!d.call(l.components,v)&&(l.components[v]=s[v])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),u?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},l._ssrRegister=f):o&&(f=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(l.functional){l._injectStyles=f;var p=l.render;l.render=function(t,e){return f.call(e),p(t,e)}}else{var _=l.beforeCreate;l.beforeCreate=_?[].concat(_,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},f100:function(t,e,n){"use strict";n("671a");var r=i(n("8bbf")),o=i(n("1bd6"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r.default.config.productionTip=!1,o.default.mpType="app";var c=new r.default(a({},o.default));c.$mount()}},[["f100","app-config"]]]);