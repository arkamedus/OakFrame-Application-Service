!function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);class s{constructor(){this._initialized=!1,this.init=()=>{},this.update=()=>{},this.focus=()=>{},this.defocus=()=>{},this.render=()=>{},this.use=t=>{}}isInitialized(){return this._initialized}}class o{constructor(t){this.contents=t}getContents(){return this.contents}apply(t){let e="".concat(this.getContents());for(let r in t)n=e,s="{"+r+"}",o=t[r],e=n.replace(new RegExp(""+s,"g"),o);var n,s,o;return e}}class r{constructor(t,e){t instanceof RegExp||(t=new RegExp("^"+t+"$")),this.route=t,this.fn=e}}const i=new class{constructor(){this._modules=[],this._subscribers=[];let t=this;this._modules=[],this.stack=[],this.error_stack=[],document.body.addEventListener("click",(function(e){let n=e.target.closest("a");n&&n.hasAttribute("href")&&t.goToPage(n.getAttribute("href"),e)}),!1),window.addEventListener("popstate",(function(e){t.route()}))}goToPage(t,e){let n=t.replace(`//${window.location.hostname}:8080`,"");window.navigator.standalone||window.history.pushState({data:"okay"},"unknown",t),this.route(n),e&&e.preventDefault()}focusModule(t){this._modules.push(t)}use(t,e){this.stack.push(new r(t,e))}error(t,e){this.error_stack.push(new r(t,e))}route(t){let e=this,n=t||window.location.pathname||window.location.href,s=[];return this.stack.forEach((function(t){n.match(t.route)&&s.push(t)})),this._modules.forEach((function(t){t.defocus()})),this._modules=[],new Promise((function(t,n){s.length>0?function o(){if(s.length>0){s.shift().fn(e).then((function(){o()})).catch((function(t){console.trace(t,"chain failure"),n("Chain Failed")}))}else t()}():(s=e.error_stack.slice(0,e.error_stack.length),function o(){if(s.length>0){s.shift().fn(e).then((function(){o()})).catch((function(t){console.trace(t,"chain failure"),n("Chain Failed")}))}else t()}())})).then((function(){e.publish("route",!1),e._modules.forEach((function(t){t.focus()}))}))}subscribe(t,e){this._subscribers[t]||(this._subscribers[t]=[]),this._subscribers[t].push(e)}publish(t,e){this._subscribers[t]&&this._subscribers[t].forEach((function(t){t(e)}))}};let u=new class extends s{constructor(){super(...arguments),this.use=t=>new Promise((function(t,e){document.body.innerHTML=new o('<h1>\nHello, welcome to the App.\n    </h1>\n\n<p>\n    <a href="/about">About Page</a>\n</p>').getContents(),t()}))}},c=new class extends s{constructor(){super(...arguments),this.use=t=>new Promise((function(t,e){document.body.innerHTML=new o("<h1>\n    This is the About page, yeah boi!\n</h1>").getContents(),t()}))}};i.use("/",u.use),i.use("/about",c.use),i.route()}]);