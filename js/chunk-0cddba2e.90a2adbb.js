(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cddba2e"],{"06e9":function(t,e,a){},"083e":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("Breadcrumb",{attrs:{pageId:"images"}}),a("h1",[t._v("Images")]),a("br"),t._m(0),a("br"),a("br"),a("div",{staticClass:"div_shadow home"},[t._v(" Previous: "),a("router-link",{attrs:{to:"/docs/introduction/object-types"}},[t._v("Object types")])],1),a("div",{staticClass:"div_shadow home"},[t._v(" Next: "),a("router-link",{attrs:{to:"/docs/introduction/global-variables"}},[t._v("Global variables")])],1),a("br"),a("br"),a("br"),a("Footer")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"normalText"},[a("p",[t._v("EasyGameMaker has hundreds of images available ready to use in your games.")]),a("p",[t._v("You can also upload custom images for your game objects.")]),a("p",[t._v('First, select the "Images" tab and upload your custom images.')]),a("p",[t._v("Then, you will be able to use that custom images in any object types.")]),a("p",[t._v('On the "Object Types" tab, select the object type that you want to use that image. Click "change image", select the "Uploaded images" tab and click on the image that you uploaded.')])])}],n=a("0418"),i=a("fd2d"),s=a("2fbc"),d={name:"Images",components:{Header:n["a"],Footer:i["a"],Breadcrumb:s["a"]}},c=d,u=(a("cd99"),a("2877")),l=Object(u["a"])(c,o,r,!1,null,"79337e36",null);e["default"]=l.exports},"2fbc":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"div_breadcrumb"},[a("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(e){return a("li",{key:e.id,class:e.active?"breadcrumb-item active":"breadcrumb-item"},[e.active?t._e():a("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),e.active?a("span",[t._v(t._s(e.name))]):t._e()])})),0)])])])},r=[],n={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[{id:"home",name:"Home",url:"/",parentId:null},{id:"documentation",name:"Documentation",url:"/docs",parentId:"home"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/introduction/levels",parentId:"introduction"},{id:"events",name:"Events",url:"/docs/introduction/events",parentId:"introduction"},{id:"object-types",name:"Object types",url:"/docs/introduction/object-types",parentId:"introduction"},{id:"images",name:"Images",url:"/docs/introduction/images",parentId:"introduction"},{id:"global-variables",name:"Global variables",url:"/docs/introduction/global-variables",parentId:"introduction"},{id:"export",name:"Export",url:"/docs/introduction/export",parentId:"introduction"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"home"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}},mounted:function(){},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(t){for(var e=0;e<this.pages.length;e++){var a=this.pages[e];if(a.id==t)return a}return null},buildItems:function(){var t=[],e=this.getPageById(this.pageId);e.active=!0,t.push(e);var a=e.parentId,o=0;while(null!=a||o>=10){var r=this.getPageById(a);t.unshift(r),a=r.parentId,o++}return t}}},i=n,s=(a("e109"),a("2877")),d=Object(s["a"])(i,o,r,!1,null,"3d457c7d",null);e["a"]=d.exports},"95d1":function(t,e,a){},cd99:function(t,e,a){"use strict";var o=a("95d1"),r=a.n(o);r.a},e109:function(t,e,a){"use strict";var o=a("06e9"),r=a.n(o);r.a}}]);