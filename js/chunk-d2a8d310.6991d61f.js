(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2a8d310"],{"2fbc":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"div_breadcrumb"},[a("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(e){return a("li",{key:e.id,class:e.active?"breadcrumb-item active":"breadcrumb-item"},[e.active?t._e():a("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),e.active?a("span",[t._v(t._s(e.name))]):t._e()])})),0)])])])},r=[],o={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"snake-game",name:"Snake",url:"/games/snake-game",parentId:"games"},{id:"ball-bounce-game",name:"Ball Bounce",url:"/games/ball-bounce",parentId:"games"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/introduction/levels",parentId:"introduction"},{id:"events",name:"Events",url:"/docs/introduction/events",parentId:"introduction"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/introduction/visual-scripts",parentId:"introduction"},{id:"object-types",name:"Object types",url:"/docs/introduction/object-types",parentId:"introduction"},{id:"images",name:"Images",url:"/docs/introduction/images",parentId:"introduction"},{id:"audios",name:"Audios",url:"/docs/introduction/audios",parentId:"introduction"},{id:"global-variables",name:"Global variables",url:"/docs/introduction/global-variables",parentId:"introduction"},{id:"export",name:"Export",url:"/docs/introduction/export",parentId:"introduction"},{id:"expressions",name:"Expressions",url:"/docs/expressions",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}},mounted:function(){},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(t){for(var e=0;e<this.pages.length;e++){var a=this.pages[e];if(a.id==t)return a}return null},buildItems:function(){var t=[],e=this.getPageById(this.pageId);e.active=!0,t.push(e);var a=e.parentId,n=0;while(null!=a||n>=10){var r=this.getPageById(a);t.unshift(r),a=r.parentId,n++}return t}}},i=o,s=(a("5aad"),a("2877")),d=Object(s["a"])(i,n,r,!1,null,"053d58d7",null);e["a"]=d.exports},"5aad":function(t,e,a){"use strict";var n=a("c7d0"),r=a.n(n);r.a},"8bae":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("Breadcrumb",{attrs:{pageId:"documentation"}}),a("h1",[t._v("Documentation")]),a("br"),a("div",{staticClass:"home"},[a("p",[a("router-link",{attrs:{to:"/docs/introduction"}},[t._v("Introduction")])],1),a("p",[a("router-link",{attrs:{to:"/tutorials"}},[t._v("Tutorials")])],1),t._m(0),a("p",[a("router-link",{attrs:{to:"/docs/introduction/visual-scripts"}},[t._v("Visual scripts")])],1),a("p",[a("router-link",{attrs:{to:"/docs/expressions"}},[t._v("Expressions")])],1),a("p",[a("router-link",{attrs:{to:"/versions"}},[t._v("Versions")])],1),a("p",[a("router-link",{attrs:{to:"/changelog"}},[t._v("Changelog")])],1)]),a("br"),a("br"),a("Footer")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("a",{attrs:{target:"_blank",href:"https://www.youtube.com/channel/UCZyU80zuPtOEYfNViTT1c1Q"}},[t._v("Video tutorials")])])}],o=a("0418"),i=a("fd2d"),s=a("2fbc"),d={name:"Documentation",components:{Header:o["a"],Footer:i["a"],Breadcrumb:s["a"]}},u=d,c=(a("d873"),a("2877")),l=Object(c["a"])(u,n,r,!1,null,"370afd3c",null);e["default"]=l.exports},c7d0:function(t,e,a){},d229:function(t,e,a){},d873:function(t,e,a){"use strict";var n=a("d229"),r=a.n(n);r.a}}]);