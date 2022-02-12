(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-000cab68"],{"07a7":function(e,t,a){},"2fbc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"div_breadcrumb"},[a("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(t){return a("li",{key:t.id,class:t.active?"breadcrumb-item active":"breadcrumb-item"},[t.active?e._e():a("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]),t.active?a("span",[e._v(e._s(t.name))]):e._e()])})),0)])])])},o=[],r={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[{id:"home",name:"Home",url:"/",parentId:null},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/introduction/levels",parentId:"introduction"},{id:"events",name:"Events",url:"/docs/introduction/events",parentId:"introduction"},{id:"object-types",name:"Object types",url:"/docs/introduction/object-types",parentId:"introduction"},{id:"images",name:"Images",url:"/docs/introduction/images",parentId:"introduction"},{id:"global-variables",name:"Global variables",url:"/docs/introduction/global-variables",parentId:"introduction"},{id:"export",name:"Export",url:"/docs/introduction/export",parentId:"introduction"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}},mounted:function(){},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(e){for(var t=0;t<this.pages.length;t++){var a=this.pages[t];if(a.id==e)return a}return null},buildItems:function(){var e=[],t=this.getPageById(this.pageId);t.active=!0,e.push(t);var a=t.parentId,n=0;while(null!=a||n>=10){var o=this.getPageById(a);e.unshift(o),a=o.parentId,n++}return e}}},i=r,s=(a("7c96"),a("2877")),c=Object(s["a"])(i,n,o,!1,null,"7deedde3",null);t["a"]=c.exports},"7b58":function(e,t,a){},"7c96":function(e,t,a){"use strict";var n=a("7b58"),o=a.n(n);o.a},cbfe:function(e,t,a){"use strict";var n=a("07a7"),o=a.n(n);o.a},f9fc:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),a("Breadcrumb",{attrs:{pageId:"object-types"}}),a("h1",[e._v("Object types")]),a("br"),e._m(0),a("br"),a("br"),a("div",{staticClass:"div_shadow home"},[e._v(" Previous: "),a("router-link",{attrs:{to:"/docs/introduction/levels"}},[e._v("Levels")])],1),a("div",{staticClass:"div_shadow home"},[e._v(" Next: "),a("router-link",{attrs:{to:"/docs/introduction/images"}},[e._v("Images")])],1),a("br"),a("br"),a("br"),a("Footer")],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"normalText"},[a("p",[e._v("An object type can be a character, a weapon, the player, an enemy, a wall, an item or anything you can think of.")]),a("p",[e._v("Each object type has a sprite image, width, height and other properties.")]),a("p",[e._v("You can create as many object types as you want.")]),a("p",[e._v("You can also configure some behaviours to object types, like a keyboard movement, mouse movement or a platform behaviour.")]),a("p",[e._v("You can also add custom object variables for your object types. For example: life, energy, timeLeft, money, fuel, and so on.")]),a("p",[e._v('After creating object types, you need to add them to your levels, as initial objects. Each object type can have one or many instances of it in each level. For example, if you create an object type for the "enemy", each level can have many copies of this enemy.')]),a("p",[e._v("Another option to create instances of your object type is using events. For example, you can create an event to create a new instance of the enemy every second.")])])}],r=a("0418"),i=a("fd2d"),s=a("2fbc"),c={name:"ObjectTypes",components:{Header:r["a"],Footer:i["a"],Breadcrumb:s["a"]}},u=c,d=(a("cbfe"),a("2877")),l=Object(d["a"])(u,n,o,!1,null,"c38759b0",null);t["default"]=l.exports}}]);