(function(e){function t(t){for(var n,o,u=t[0],p=t[1],m=t[2],l=t[3]||[],c=0,d=[];c<u.length;c++)o=u[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);g&&g(t),i.push.apply(i,l);while(d.length)d.shift()();return s.push.apply(s,m||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var m=a[o];0!==r[m]&&(n=!1)}n&&(s.splice(t--,1),e=p(p.s=a[0]))}return 0===s.length&&(i.forEach((function(e){if(void 0===r[e]){r[e]=null;var t=document.createElement("link");p.nc&&t.setAttribute("nonce",p.nc),t.rel="prefetch",t.as="script",t.href=u(e),document.head.appendChild(t)}})),i.length=0),e}var n={},o={app:0},r={app:0},s=[],i=[];function u(e){return p.p+"js/"+({"gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3":"gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3","gameeditor-snapshot":"gameeditor-snapshot","gameeditor-v0.1.3":"gameeditor-v0.1.3","group-1":"group-1","playgame-snapshot":"playgame-snapshot","playgame-v0.1.3":"playgame-v0.1.3"}[e]||e)+"."+{"gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3":"653be19e","gameeditor-snapshot":"cf1f1c2a","gameeditor-v0.1.3":"8812dbd8","group-1":"979cedde","playgame-snapshot":"4c9c40dc","playgame-v0.1.3":"b4a4462d"}[e]+".js"}function p(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,p),a.l=!0,a.exports}p.e=function(e){var t=[],a={"gameeditor-snapshot":1,"gameeditor-v0.1.3":1,"group-1":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({"gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3":"gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3","gameeditor-snapshot":"gameeditor-snapshot","gameeditor-v0.1.3":"gameeditor-v0.1.3","group-1":"group-1","playgame-snapshot":"playgame-snapshot","playgame-v0.1.3":"playgame-v0.1.3"}[e]||e)+"."+{"gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3":"31d6cfe0","gameeditor-snapshot":"efc9390f","gameeditor-v0.1.3":"448b0f0d","group-1":"e36cd71c","playgame-snapshot":"31d6cfe0","playgame-v0.1.3":"31d6cfe0"}[e]+".css",r=p.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],m=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(m===n||m===r))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],m=u.getAttribute("data-href");if(m===n||m===r)return t()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=t,c.onerror=function(t){var n=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],c.parentNode.removeChild(c),a(s)},c.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(c)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=s);var i,m=document.createElement("script");m.charset="utf-8",m.timeout=120,p.nc&&m.setAttribute("nonce",p.nc),m.src=u(e);var l=new Error;i=function(t){m.onerror=m.onload=null,clearTimeout(c);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:m})}),12e4);m.onerror=m.onload=i,document.head.appendChild(m)}return Promise.all(t)},p.m=e,p.c=n,p.d=function(e,t,a){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,t){if(1&t&&(e=p(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(p.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)p.d(a,n,function(t){return e[t]}.bind(null,n));return a},p.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/",p.oe=function(e){throw console.error(e),e};var m=window["webpackJsonp"]=window["webpackJsonp"]||[],l=m.push.bind(m);m.push=t,m=m.slice();for(var c=0;c<m.length;c++)t(m[c]);var g=l,d=function(){return s.push([0,"chunk-vendors"]),a()}();t([[],{},0,["gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3","group-1"]])})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"0418":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"menuBarLogo"},[n("router-link",{staticClass:"menu-item-logo",attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{alt:"EasyGameMaker logo",src:a("5233")}})])],1),n("Menu",{ref:"menu"}),n("br")],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menuBar"},[a("router-link",{staticClass:"menu-item",attrs:{tag:"a",to:"/"}},[a("span",{staticClass:"menu-link"},[e._v("Home")])]),"true"==e.authenticated?a("router-link",{staticClass:"menu-item",attrs:{tag:"a",to:"/my-games"}},[a("span",{staticClass:"menu-link"},[e._v("My Games")])]):e._e(),"true"==e.authenticated?a("router-link",{staticClass:"menu-item",attrs:{tag:"a",to:"/my-profile"}},[a("span",{staticClass:"menu-link"},[e._v("My Profile")])]):e._e(),a("router-link",{staticClass:"menu-item",attrs:{tag:"a",to:"/create"}},[a("span",{staticClass:"menu-link"},[e._v("Create Game")])]),a("router-link",{staticClass:"menu-item",attrs:{tag:"a",to:"/support-us"}},[a("span",{staticClass:"menu-link"},[e._v("Support Us")])]),a("router-link",{staticClass:"menu-item",attrs:{tag:"a",to:"/help"}},[a("span",{staticClass:"menu-link"},[e._v("Help")])]),"true"==e.authenticated?a("router-link",{staticClass:"menu-item",attrs:{tag:"a",to:"/logout"}},[a("span",{staticClass:"menu-link"},[e._v("Logout")])]):e._e()],1)},s=[],i=a("f24e"),u={name:"Menu",components:{},methods:{update:function(){this.authenticated=Object(i["b"])("authenticated")}},data:function(){return{authenticated:null}},mounted:function(){this.update()}},p=u,m=(a("b272"),a("2877")),l=Object(m["a"])(p,r,s,!1,null,"1c488396",null),c=l.exports,g={name:"Header",components:{Menu:c},methods:{update:function(){this.$refs.menu.update()}},data:function(){return{}},mounted:function(){}},d=g,h=(a("f95a"),Object(m["a"])(d,n,o,!1,null,"2174fdd6",null));t["a"]=h.exports},1335:function(e,t,a){},"15e4":function(e,t,a){},5233:function(e,t,a){e.exports=a.p+"img/easy-game-maker-logo.2079c96d.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],s=(a("034f"),a("2877")),i={},u=Object(s["a"])(i,o,r,!1,null,null,null),p=u.exports,m=(a("d3b7"),a("8c4f")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),a("div",{staticClass:"home"},[a("p",[e._v("EasyGameMaker is a free tool to create online games.")]),a("p",[e._v("You can create your own online games in minutes, with no coding skills required.")]),a("p",[a("router-link",{staticClass:"btn btn-danger",attrs:{to:"/create"}},[e._v("Create game")])],1),a("p",[e._v("Support us on Patreon.")]),e._m(0),e._m(1)])],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[n("a",{attrs:{href:"https://www.patreon.com/bePatron?u=35546418","data-patreon-widget-type":"become-patron-button"}},[n("img",{staticStyle:{width:"160px"},attrs:{src:a("71ac")}})])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"50px"}},[n("p",[n("a",{attrs:{href:"https://www.youtube.com/channel/UCZyU80zuPtOEYfNViTT1c1Q"}},[n("img",{staticStyle:{width:"32px",margin:"10px"},attrs:{src:a("aaba")}})]),n("a",{attrs:{href:"https://www.reddit.com/r/EasyGameMaker/"}},[n("img",{staticStyle:{width:"32px",margin:"8px"},attrs:{src:a("8f63")}})])])])}],g=a("0418"),d={name:"Home",components:{Header:g["a"]}},h=d,f=(a("7646"),Object(s["a"])(h,l,c,!1,null,"b80ef71a",null)),v=f.exports;n["a"].use(m["a"]);var y=[{path:"/",name:"Home",meta:{title:"Easy Game Maker"},component:v},{path:"/about",name:"About",meta:{title:"Easy Game Maker - About"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"f820"))}},{path:"/sign-up",name:"SignUp",meta:{title:"Easy Game Maker - Sign-up"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"5c9c"))}},{path:"/sign-in",name:"SignIn",meta:{title:"Easy Game Maker - Sign-in"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"54e2"))}},{path:"/games",name:"Games",meta:{title:"Easy Game Maker - Games"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"a2e9"))}},{path:"/create",meta:{title:"Easy Game Maker - Create Game"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("gameeditor-v0.1.3")]).then(a.bind(null,"6d14"))}},{path:"/create/snapshot",meta:{title:"Easy Game Maker - Create Game"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("gameeditor-snapshot")]).then(a.bind(null,"4cd0"))}},{path:"/create/v0.1.3",meta:{title:"Easy Game Maker - Create Game"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("gameeditor-v0.1.3")]).then(a.bind(null,"6d14"))}},{path:"/play/snapshot/:id",meta:{title:"Easy Game Maker - Play Game"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("playgame-snapshot")]).then(a.bind(null,"5889"))}},{path:"/play/v0.1.3/:id",meta:{title:"Easy Game Maker - Play Game"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("playgame-v0.1.3")]).then(a.bind(null,"52cf"))}},{path:"/my-games",name:"MyGames",meta:{title:"Easy Game Maker - My Games"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"62aa"))}},{path:"/my-profile",name:"MyProfile",meta:{title:"Easy Game Maker - My Profile"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"1c3d"))}},{path:"/logout",name:"Logout",meta:{title:"Easy Game Maker - Logout"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"c100"))}},{path:"/support-us",name:"SupportUs",meta:{title:"Easy Game Maker - Support Us"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"3961"))}},{path:"/contact-us",name:"ContactUs",meta:{title:"Easy Game Maker - Contact Us"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"e9bb"))}},{path:"/help",name:"Help",meta:{title:"Easy Game Maker - Help"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"c3ef"))}},{path:"/features",name:"Features",meta:{title:"Easy Game Maker - Features"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"ae1c"))}},{path:"*",name:"NotFound",meta:{title:"Easy Game Maker - Not Found"},component:function(){return Promise.all([a.e("gameeditor-snapshot~gameeditor-v0.1.3~group-1~playgame-snapshot~playgame-v0.1.3"),a.e("group-1")]).then(a.bind(null,"9703"))}}],b=new m["a"]({mode:"history",routes:y});b.beforeEach((function(e,t,a){document.title=e.meta.title,a()})),b.afterEach((function(e){gtag("config","UA-22463531-4",{page_path:e.fullPath,page_title:e.meta.title,send_page_view:!0})}));var k=b;a("5aea");n["a"].config.productionTip=!1,new n["a"]({router:k,render:function(e){return e(p)}}).$mount("#app")},"5aea":function(e,t,a){},"71ac":function(e,t,a){e.exports=a.p+"img/become_a_patron_button.8b4321f7.png"},"726c":function(e,t,a){},7646:function(e,t,a){"use strict";var n=a("15e4"),o=a.n(n);o.a},"85ec":function(e,t,a){},"8f63":function(e,t,a){e.exports=a.p+"img/reddit.23c98c58.svg"},aaba:function(e,t,a){e.exports=a.p+"img/youtube-round.fcbe244c.svg"},b272:function(e,t,a){"use strict";var n=a("1335"),o=a.n(n);o.a},f24e:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return u}));a("c975"),a("d3b7"),a("ac1f"),a("1276");function n(e){for(var t=e+"=",a=decodeURIComponent(document.cookie),n=a.split(";"),o=0;o<n.length;o++){var r=n[o];while(" "==r.charAt(0))r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null}function o(e,t){document.cookie=e+"="+t+"; path=/"}function r(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}function s(e,t){return new Promise((function(a,n){var o=document.createElement("script");o.onload=function(){a()},o.onerror=function(){n()},o.setAttribute("src",e),o.setAttribute("id",t),document.head.appendChild(o)}))}function i(e){var t=document.querySelector('script[id="'+e+'"]');null!=t&&document.head.removeChild(t)}function u(e){var t="engine",a="/mmg/js/mmg/".concat(e,"/mmg.js");return i(t),s(a,t)}},f95a:function(e,t,a){"use strict";var n=a("726c"),o=a.n(n);o.a}});
//# sourceMappingURL=app.e2c17b81.js.map