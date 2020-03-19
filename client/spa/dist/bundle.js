!function(e){var n={};function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(o,s,function(n){return e[n]}.bind(null,s));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=12)}([function(e,n){e.exports='<div class="navbar" id="navbar">\n    <div class="navbar-inner nav-container">\n        <a class="site-title no-decoration" style="font-weight:bolder;" href="//{hostname}:8080/">\n            <div class="left"><i class="fas fa-bezier-curve"></i><span class="hide-mobile"> OakFrame</span></div>\n        </a>\n        <div class="dropdown right"><span><i class="fas fa-bars"></i></span>\n            <div class="dropdown-content">\n                <div class="dropdown-inner">\n\n                    <a href="//{hostname}:8080/blog">Blog</a><br>\n                    <a href="//{hostname}:8080/contact">Contact</a><br>\n                    <a href="//{hostname}:8080/privacy">Privacy Policy</a><br>\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class="right" id="pill-search-expand" style="z-index:-3;"><input id="pill-search" placeholder="Search ..."\n                                                                              type="text"\n                                                                              value="{search_safe}"><i\n                id="pill-search-icon" class="fas fa-search"></i></div>\n\n        <a href="/{profile_link}" class="right" style="z-index:-3;"><i class="far fa-user-circle"></i><span\n                class="hide-mobile"> Log In</span></a><a href="/free-to-play-games" class="right" style="z-index:-3;"><i\n            class="fas fa-ghost"></i><span class="hide-mobile"> Games</span></a>\n    </div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n    <h1>Page Not Found</h1>\n        <p>Perhaps try searching for it:</p>\n        <p class="flex">\n            <input type="text" placeholder="Search..." value="{search_safe}"/>\n            <button>Search</button>\n        </p>\n</div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <h1>Search For a Thing</h1>\n        <p>Go ahead:</p>\n        <p class="flex">\n            <input type="text" placeholder="Search..." value="{search_safe}"/>\n            <button>Search</button>\n        </p>\n    </div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <h1>Sign Up</h1>\n        <p>It\'s free and there are a lots of great reasons to become a member!</p>\n        <p class="flex-col">\n            <input id="signup-first-name" type="text" placeholder="First Name" value=""/>\n            <input id="signup-email" type="email" placeholder="Email Address" value=""/>\n            <input id="signup-password" type="password" placeholder="New Password" value=""/>\n            <button>Sign Up</button>\n        <p>Have an Account? <a href="/login">Log In</a>.<br/>\n            Forgot your Password? <a href="/reset">Reset Password</a>.\n        </p>\n        </p>\n    </div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <h1>Log In</h1>\n        <p>Do the thing!</p>\n        <p class="flex-col">\n            <input type="email" placeholder="Email Address" value=""/>\n            <input type="password" placeholder="Password" value=""/>\n            <button>Sign Up</button>\n        <p>\n            Don\'t have an Account? <a href="/signup">Sign Up</a>.<br/>\n            Forgot your Password? <a href="/reset">Reset Password</a>.\n        </p>\n        </p>\n    </div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <h1>Reset Password</h1>\n        <p>We\'ll send you an email.</p>\n        <p class="flex-col">\n            <input type="email" placeholder="Email Address" value=""/>\n            <button>Submit</button>\n        <p>\n            Have an Account? <a href="/login">Log In</a>.<br/>\n            Don\'t have an Account? <a href="/signup">Sign Up</a>.<br/>\n        </p>\n        </p>\n    </div>\n</div>'},function(e,n){e.exports='<div class="container">\n    <h1>Privacy Policy</h1>\n    <p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of\n        Personal Information if you decided to use our Service, the OakFrame website, or any associated properties\n        operated by OakFrame.</p>\n    <p>If you choose to use our Service, then you agree to the collection and use of information in relation with this\n        policy. The Personal Information that we collect are used for providing and improving the Service. We will not\n        use or share your information with anyone except as described in this Privacy Policy.</p>\n\n    <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible\n    at <a href="/terms-of-service">//{hostname}:{port}/terms-of-service</a>, unless otherwise defined in this Privacy Policy.</p>\n\n    <h2>Information Collection and Use</h2>\n    <p>For a better experience while using our Service, we may require you to provide us with certain personally\n        identifiable information, including but not limited to your name, phone number, and postal address. The\n        information that we collect will be used to contact or identify you.</p>\n\n    <h2>Log Data</h2>\n    <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us\n        that is called Log Data. This Log Data may include information such as your computer\'s Internet Protocol (“IP”)\n        address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent\n        on those pages, and other statistics.</p>\n\n    <h2>Cookies</h2>\n    <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent\n        to your browser from the website that you visit and are stored on your computer\'s hard drive.</p>\n\n    <p>Our website uses these "cookies" to collection information and to improve our Service. You have the option to\n        either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to\n        refuse our cookies, you may not be able to use some portions of our Service.</p>\n\n    <h2>Service Providers</h2>\n    <p>We may employ third-party companies and individuals due to the following reasons:</p>\n\n    <p>\n    <ul>\n        <li>To facilitate our Service;</li>\n        <li>To provide the Service on our behalf;</li>\n        <li>To perform Service-related services; or</li>\n        <li>To assist us in analyzing how our Service is used.</li>\n    </ul>\n    We want to inform our Service users that these third parties have access to your Personal Information. The reason is\n    to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the\n    information for any other purpose.</p>\n\n    <h2>Security</h2>\n    <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially\n        acceptable means of protecting it. But remember that no method of transmission over the internet, or method of\n        electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>\n\n    <h2>Links to Other Sites</h2>\n    <p>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that\n        site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the\n        Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy\n        policies, or practices of any third-party sites or services.</p>\n\n    <h2>Children\'s Privacy</h2>\n\n    <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable\n        information from children under 13. In the case we discover that a child under 13 has provided us with personal\n        information, we will immediately delete this from our servers. If you are a parent or guardian and you are aware that\n        your child has provided us with personal information, please contact us so that we will be able to do necessary\n        actions.</p>\n\n    <h2>Changes to This Privacy Policy</h2>\n    <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any\n        changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are\n        effective immediately after they are posted on this page.</p>\n\n    <h2>Contact Us</h2>\n    <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>\n</div>'},function(e,n){e.exports='<div class="container">\n    <h1>About OakFrame Application Service</h1>\n    <p>OakFrame should make your life easier.</p>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <div class="text-center icon-huge"><i class="fas fa-bezier-curve"></i></div>\n        <h1 class="text-center">Welcome to an OakFrame Application.</h1>\n        <p>\n            <a href="//{hostname}:8080/about"><input type="submit" value="Get Started"/></a>\n        </p>\n    </div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <h1>Contact Us</h1>\n        <p>We\'re always open and ready to hear your comments, questions, and concerns. Let us know with the form below!</p>\n        <input type="text" placeholder="Your Name"/><br/>\n        <input type="text" placeholder="Contact Email"/><br/>\n        <textarea placeholder="Enter your text here"></textarea><br />\n        <input type="submit" value="Submit" />\n    </div>\n\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <h1>Counter Test</h1>\n        <p>The current count is <span id="count">{count}</span></p>\n    </div>\n</div>'},function(e,n){e.exports='<div class="hero graph">\n\n    <div id="graph-render-area"></div>\n\n</div>'},function(e,n,t){"use strict";t.r(n),t.d(n,"generateStateTemplate",(function(){return G}));class o{constructor(e,n){e instanceof RegExp||(e=new RegExp("^"+e+"$")),this.route=e,this.fn=n}}class s{constructor(e){this.contents=e}getContents(){return this.contents}apply(e){let n="".concat(this.getContents());for(let i in e)t=n,o="{"+i+"}",s=e[i],n=t.replace(new RegExp(""+o,"g"),s);var t,o,s;return n}}var i=t(0),a=t.n(i),r=t(1),c=t.n(r),l=t(2),u=t.n(l);class h{constructor(){this._initialized=!1,this.init=()=>{},this.update=()=>{},this.focus=()=>{},this.defocus=()=>{},this.render=()=>{},this.use=e=>{}}isInitialized(){return this._initialized}}var d=t(3),p=t.n(d);var f=t(4),m=t.n(f);var v=t(5),y=t.n(v);var w=t(6),g=t.n(w);var b=t(7),_=t.n(b);var x=t(8),P=t.n(x);var S=t(9),k=t.n(S);var T=t(10),E=t.n(T);var L=t(11),I=t.n(L);class O{constructor(){this._nodes=[]}attachNode(e){this._nodes.push(e)}render(e){console.log("rendering",e),this._nodes.forEach((function(n){n._render(e)}));var n,t,o,s,i,a;document.body.addEventListener("mousedown",(function(e){let t=e.srcElement||e.target;a=null,-1!==t.className.indexOf("node")?a=t:e.path&&e.path.forEach((function(e){a||-1!==e.className.indexOf("node")&&(a=e)})),console.log(e),console.log("SELECTED NODE",a),a&&(n=!0,document.body.classList.add("no-select"),a.offsetHeight,a.offsetWidth)})),document.addEventListener("mousemove",(function(e){if(n&&a){t||o||s||i||(s=e.pageX,i=e.pageY,t=a.offsetLeft||0,o=a.offsetTop||0),console.log(e),console.log("MOUSE MOVE",e.pageX,e.pageY,s,i,t,o);var r=e.pageX-s+t,c=e.pageY-i+o;console.log(r,c),r<0&&(r=0),c<0&&(c=0),console.log(r,c),a.style.left=r+"px",a.style.top=c+"px"}})),document.addEventListener("mouseup",(function(){n=!1,a=null,t=null,o=null,s=null,i=null,document.body.classList.remove("no-select")}))}get onComplete(){return this._oncomplete}set onComplete(e){this._oncomplete=e}_oncomplete(){}}class C{constructor(e,n,t){this._parent=e,this._element=document.createElement(n),this._element.className=t,this._element.id=(12e4*Math.random()+1|0)+""}render(e){}get element(){return this._element}}class M{constructor(e){this._name="Button",this._inputs=[],this._outputs=[],this._element=new C(this,"div","node"),this._graph=e}attachOutput(e){this._outputs.push(e)}_render(e){let n=this,t=(12e4*Math.random()+1|0)+"";this._element.element.innerHTML=`<p>${this._name}<br /><button id="${t}">Activate</button></p>`,console.log(e),console.log(this._name),e.appendChild(this._element.element),document.getElementById(t).onclick=function(){n._evaluate()}}_evaluate(){console.log("button node evaluate");for(let e=0;e<this._outputs.length;e++)this._outputs[e]._evaluate({});this._graph.onComplete()}}class H{constructor(e){this._inputs=[],this._outputs=[],this._name="Log",this._element=new C(this,"div","node"),this._value=[],this._graph=e}attachOutput(e){this._outputs.push(e)}_render(e){let n="<p>Log</p><br />";for(let e=0;e<this._value.length;e++)n=n+this._value[e]+"<br>";this._element.element.innerHTML=n,console.log(e),console.log(this._name),e.appendChild(this._element.element)}_evaluate(e){console.log("log node evaluate",this._value,e),this._value.push(e)}}class N{constructor(e){this._inputs=[],this._outputs=[],this._value="default",this._name="Text",this._element=new C(this,"div","node"),this._graph=e}attachOutput(e){this._outputs.push(e)}_render(e){let n=this,t=(12e4*Math.random()+1|0)+"";this._element.element.innerHTML=`<p>${this._name}<br /><input id="${t}" type="text" value="${this._value}"/></p>`,console.log(e),console.log(this._name),e.appendChild(this._element.element);let o=document.getElementById(t);o.onkeyup=function(){n._value=o.value}}_evaluate(e){console.log("text node evaluate",this._value);for(let e=0;e<this._outputs.length;e++)this._outputs[e]._evaluate(this._value)}}let A=new class{constructor(){this._modules=[],this._subscribers=[];let e=this;this._modules=[],this.stack=[],this.error_stack=[],document.body.addEventListener("click",(function(n){let t=n.target.closest("a");if(t&&t.hasAttribute("href")){let o=t.getAttribute("href").replace(`//${window.location.hostname}:8080`,"");window.navigator.standalone||window.history.pushState({data:"okay"},"unknown",t.getAttribute("href")),e.route(o),n.preventDefault()}}),!1),window.addEventListener("popstate",(function(n){e.route()}))}focusModule(e){this._modules.push(e)}use(e,n){this.stack.push(new o(e,n))}error(e,n){this.error_stack.push(new o(e,n))}route(e){let n=this,t=e||window.location.pathname||window.location.href,o=[];return this.stack.forEach((function(e){t.match(e.route)&&o.push(e)})),this._modules.forEach((function(e){e.defocus()})),this._modules=[],new Promise((function(e,t){o.length>0?function s(){if(o.length>0){o.shift().fn(n).then((function(){s()})).catch((function(e){console.trace(e,"chain failure"),t("Chain Failed")}))}else e()}():(o=n.error_stack.slice(0,n.error_stack.length),function s(){if(o.length>0){o.shift().fn(n).then((function(){s()})).catch((function(e){console.trace(e,"chain failure"),t("Chain Failed")}))}else e()}())})).then((function(){n.publish("route",!1),n._modules.forEach((function(e){e.focus()}))}))}subscribe(e,n){this._subscribers[e]||(this._subscribers[e]=[]),this._subscribers[e].push(n)}publish(e,n){this._subscribers[e]&&this._subscribers[e].forEach((function(e){e(n)}))}},U=new class{isAuthenticated(){return!1}},F=new class extends h{constructor(){super(...arguments),this.use=e=>new Promise((function(e,n){document.body.innerHTML=new s(P.a).apply(G()),e()}))}},R=new class extends h{constructor(){super(...arguments),this.use=e=>new Promise((function(e,n){document.body.innerHTML=new s(a.a).apply(G())+new s(p.a).apply(G()),e()}))}},$=new class extends h{constructor(){super(...arguments),this.use=e=>new Promise((function(e,n){document.body.innerHTML=new s(a.a).apply(G())+new s(m.a).apply(G()),e()}))}},W=new class extends h{constructor(){super(...arguments),this.use=e=>new Promise((function(e,n){document.body.innerHTML=new s(a.a).apply(G())+new s(y.a).apply(G()),e()}))}},B=new class extends h{constructor(){super(...arguments),this.use=e=>new Promise((function(e,n){document.body.innerHTML=new s(a.a).apply(G())+new s(g.a).apply(G()),e()}))}},z=new class extends h{constructor(){super(...arguments),this.use=e=>new Promise((function(e,n){document.body.innerHTML=new s(a.a).apply(G())+new s(_.a).apply(G()),e()}))}},D=new class extends h{constructor(){super(...arguments),this.use=e=>new Promise((function(e,n){document.body.innerHTML=new s(a.a).apply(G())+new s(k.a).apply(G()),e()}))}},j=new class extends h{constructor(){super(...arguments),this.count=0,this.use=e=>{let n=this;return e.focusModule(this),new Promise((function(e,t){document.body.innerHTML=new s(a.a).apply(G())+new s(E.a).apply(function(e){let n={};return e.forEach((function(e){Object.assign(n,e)})),n}([{count:n.count},G()])),e()}))},this.focus=()=>{let e=this;this.loop=window.setInterval((function(){e.update()}),41)},this.update=()=>{this.count++,document.getElementById("count").innerText=`${this.count}`},this.defocus=()=>{window.clearInterval(this.loop)}}},q=new class extends h{constructor(){super(),this.use=e=>(e.focusModule(this),new Promise((function(e,n){document.body.innerHTML=new s(a.a).apply(G())+new s(I.a).apply(G()),e()}))),this.focus=e=>{console.log("FOCUSING ON GRAPH CONTROLLER");let n=document.getElementById("graph-render-area");this.graph.render(n)},this.graph=new O;let e=new M(this.graph),n=new N(this.graph),t=new H(this.graph);e.attachOutput(n),n.attachOutput(t),this.graph.attachNode(e),this.graph.attachNode(n),this.graph.attachNode(t)}};function G(){let e=window.location.pathname.split("/")[2]||"",n={hostname:window.location.hostname,search:decodeURIComponent(e),search_safe:decodeURIComponent(e).replace(/"/g,"&quot;")};return U.isAuthenticated()?n.profile_link="profile":n.profile_link="login",n}A.use("/",F.use),A.use("/about",z.use),A.use("/signup",R.use),A.use("/login",$.use),A.use("/reset",W.use),A.use("/privacy",B.use),A.use("/contact",D.use),A.use("/counter",j.use),A.use("/graph",q.use),A.use("/search/?(.+)?",(function(){return new Promise((function(e,n){document.body.innerHTML=new s(a.a).apply(G())+new s(u.a).apply(G()),e()}))})),A.error("/([a-zA-Z0-9-]+)?",(function(){return new Promise((function(e,n){document.body.innerHTML=document.body.innerHTML=new s(a.a).apply(G())+new s(c.a).apply(G()),e()}))})),A.subscribe("route",(function(){const e=document.getElementById("pill-search-expand"),n=document.getElementById("pill-search"),t=document.getElementById("pill-search-icon"),o=document.getElementById("navbar");if(!o)return!1;function s(){var o;""!==n.value||document.activeElement===n||(o=e).parentElement.querySelector(":hover")===o?n.className="pill-search-open":n.className="",""!==n.value?t.className="fas fa-arrow-right":t.className="fas fa-search"}e.onmouseenter=s,o.onmouseleave=s,n.onblur=s,e.onclick=function(){n.focus(),s()},n.onkeypress=function(e){13!==e.keyCode&&13!==e.which&&"Enter"!==e.key||(""!==n.value?(window.navigator.standalone||window.history.pushState({data:"okay"},"unknown",`//${window.location.hostname}:8080/search/${encodeURIComponent(n.value)}`),A.route(`/search/${encodeURIComponent(n.value)}`)):this.blur()),s()},t.onclick=function(e){e.preventDefault(),""!==n.value&&(window.navigator.standalone||window.history.pushState({data:"okay"},"unknown",`//${window.location.hostname}:8080/search/${encodeURIComponent(n.value)}`),A.route(`/search/${encodeURIComponent(n.value)}`))},s()})),A.route()}]);