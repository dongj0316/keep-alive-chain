(function(e){function n(n){for(var a,i,c=n[0],u=n[1],l=n[2],s=0,f=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},r={index:0},o=[];function i(e){return c.p+"js/"+({address:"address",info:"info",list:"list","page-a":"page-a","page-b":"page-b","page-c":"page-c","page-form":"page-form"}[e]||e)+"."+{address:"f32017cc",info:"96340341",list:"7507cbb5","page-a":"8dab36ef","page-b":"e7278ff2","page-c":"0da6fe79","page-form":"99c00b8c"}[e]+".js"}function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,a){t=r[e]=[n,a]}));n.push(t[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var l=new Error;o=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,t[1](l)}r[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var p=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("c31f")},"0fe2":function(e,n,t){n=e.exports=t("24fb")(!1),n.push([e.i,"a{line-height:30px}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50}#nav{padding:30px}#nav a{font-weight:700;color:#2c3e50}#nav a.router-link-exact-active{color:#42b983}",""])},"20d3":function(e,n,t){"use strict";var a=t("8152"),r=t.n(a);r.a},8152:function(e,n,t){var a=t("ca39");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=t("499e").default;r("730c23f1",a,!0,{sourceMap:!1,shadowMode:!1})},c31f:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",[e.$route.meta.cache?t("router-view"):e._e()],1),t("KeepAliveChain",[e.$route.meta.cache?e._e():t("router-view")],1)],1)},o=[],i=(t("e780"),t("2877")),c={},u=Object(i["a"])(c,r,o,!1,null,null,null),l=u.exports,s=(t("d3b7"),t("8c4f")),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("h2",[e._v("Index")]),t("ul",[t("li",[t("router-link",{attrs:{to:"/list"}},[e._v("列表页 List")])],1),t("li",[t("router-link",{attrs:{to:"/form"}},[e._v("表单页 Form")])],1)])])},f=[],d={name:"home"},h=d,m=(t("20d3"),Object(i["a"])(h,p,f,!1,null,"7a39f391",null)),v=m.exports;a["a"].use(s["a"]);var g=[{path:"/",name:"home",component:v},{path:"/list",name:"list",meta:{cacheTo:["info","page-b"]},component:function(){return t.e("list").then(t.bind(null,"5ea4"))}},{path:"/info",name:"info",component:function(){return t.e("info").then(t.bind(null,"17a8"))}},{path:"/page-a",name:"page-a",component:function(){return t.e("page-a").then(t.bind(null,"2177"))}},{path:"/page-b",name:"page-b",meta:{cacheTo:["info","page-c"]},component:function(){return t.e("page-b").then(t.bind(null,"2061"))}},{path:"/page-c",name:"page-c",component:function(){return t.e("page-c").then(t.bind(null,"1820"))}},{path:"/form",name:"page-form",meta:{cacheTo:["page-address"]},component:function(){return t.e("page-form").then(t.bind(null,"8088"))}},{path:"/address",name:"page-address",component:function(){return t.e("address").then(t.bind(null,"ed1d"))}}],b=new s["a"]({mode:"hash",scrollBehavior:function(e,n,t){return t||{x:0,y:0}},base:"",routes:g}),y=b,x=t("2f62");a["a"].use(x["a"]);var w=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=(t("c975"),t("b0c0"),"cacheTo"),_=a["a"].observable({caches:[]}),j=function(){_.caches.length>0&&(_.caches=[])},k=function(e){return _.caches.push(e)},T=function(e,n,t){return t()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return function(n,t,a){var r=n.name,o=(n.meta||{})[O],i=o&&o.length>0,c=t.name,u=(t.meta||{})[O],l=u&&u.length>0;return i||l?i&&l?(-1===u.indexOf(r)&&j(),k(r)):i?-1===o.indexOf(c)&&(j(),k(r)):l&&-1===u.indexOf(r)&&j():j(),e(n,t,a)}},M={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{key:"cacheTo"},t=n.key;t&&(O=t);var a={name:"KeepAliveChain",functional:!0,render:function(e,n){var t=n.children;return e("keep-alive",{props:{include:_.caches}},t)}};e.component("KeepAliveChain",a)}};a["a"].use(M),y.beforeEach(P()),a["a"].config.productionTip=!1,new a["a"]({router:y,store:w,render:function(e){return e(l)}}).$mount("#app")},ca39:function(e,n,t){n=e.exports=t("24fb")(!1),n.push([e.i,".home ul[data-v-7a39f391]{list-style:none;padding:0;line-height:50px;font-size:30px}",""])},d691:function(e,n,t){var a=t("0fe2");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=t("499e").default;r("3d538edb",a,!0,{sourceMap:!1,shadowMode:!1})},e780:function(e,n,t){"use strict";var a=t("d691"),r=t.n(a);r.a}});