(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75690026"],{"2fbc":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"div_breadcrumb"},[a("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(e){return a("li",{key:e.id,class:e.active?"breadcrumb-item active":"breadcrumb-item"},[e.active?t._e():a("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),e.active?a("span",[t._v(t._s(e.name))]):t._e()])})),0)])])])},o=[],n={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[{id:"home",name:"Home",url:"/",parentId:null},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/introduction/levels",parentId:"introduction"},{id:"events",name:"Events",url:"/docs/introduction/events",parentId:"introduction"},{id:"object-types",name:"Object types",url:"/docs/introduction/object-types",parentId:"introduction"},{id:"images",name:"Images",url:"/docs/introduction/images",parentId:"introduction"},{id:"global-variables",name:"Global variables",url:"/docs/introduction/global-variables",parentId:"introduction"},{id:"export",name:"Export",url:"/docs/introduction/export",parentId:"introduction"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}},mounted:function(){},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(t){for(var e=0;e<this.pages.length;e++){var a=this.pages[e];if(a.id==t)return a}return null},buildItems:function(){var t=[],e=this.getPageById(this.pageId);e.active=!0,t.push(e);var a=e.parentId,r=0;while(null!=a||r>=10){var o=this.getPageById(a);t.unshift(o),a=o.parentId,r++}return t}}},i=n,s=(a("7c96"),a("2877")),d=Object(s["a"])(i,r,o,!1,null,"7deedde3",null);e["a"]=d.exports},"7b58":function(t,e,a){},"7c96":function(t,e,a){"use strict";var r=a("7b58"),o=a.n(r);o.a},"9ed7":function(t,e,a){"use strict";var r=a("e0b2"),o=a.n(r);o.a},d223:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("Breadcrumb",{attrs:{pageId:"introduction"}}),a("h1",[t._v("Introduction")]),a("br"),t._m(0),a("div",{staticClass:"home"},[a("p",[a("router-link",{attrs:{to:"/docs/introduction/levels"}},[t._v("Levels")])],1),a("p",[a("router-link",{attrs:{to:"/docs/introduction/object-types"}},[t._v("Object types")])],1),a("p",[a("router-link",{attrs:{to:"/docs/introduction/images"}},[t._v("Images")])],1),a("p",[a("router-link",{attrs:{to:"/docs/introduction/global-variables"}},[t._v("Global variables")])],1),a("p",[a("router-link",{attrs:{to:"/docs/introduction/events"}},[t._v("Events")])],1),a("p",[a("router-link",{attrs:{to:"/docs/introduction/export"}},[t._v("Export")])],1)]),a("br"),a("div",{staticClass:"div_shadow home"},[t._v(" See also: "),a("router-link",{attrs:{to:"/tutorials"}},[t._v("Tutorials")])],1),a("br"),a("br"),a("br"),a("Footer")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"normalText"},[a("p",[t._v("EasyGameMaker is a free online game engine that allows you to create games with no coding skills required.")]),a("p",[t._v("Below you will learn about the basics of EasyGameMaker.")])])}],n=a("0418"),i=a("fd2d"),s=a("2fbc"),d={name:"Introduction",components:{Header:n["a"],Footer:i["a"],Breadcrumb:s["a"]}},c=d,u=(a("9ed7"),a("2877")),l=Object(u["a"])(c,r,o,!1,null,"01c4d916",null);e["default"]=l.exports},e0b2:function(t,e,a){}}]);