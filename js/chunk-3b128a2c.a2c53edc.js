(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b128a2c"],{"083e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),a("Breadcrumb",{attrs:{pageId:"images"}}),a("h1",[e._v("Images")]),a("br"),e._m(0),a("br"),a("br"),a("div",{staticClass:"div_shadow home"},[e._v(" Previous: "),a("router-link",{attrs:{to:"/docs/introduction/object-types"}},[e._v("Object types")])],1),a("div",{staticClass:"div_shadow home"},[e._v(" Next: "),a("router-link",{attrs:{to:"/docs/introduction/audios"}},[e._v("Audios")])],1),a("br"),a("br"),a("br"),a("Footer")],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"normalText"},[a("p",[e._v("EasyGameMaker has hundreds of images available ready to use in your games.")]),a("p",[e._v("You can also upload custom images for your game objects.")]),a("p",[e._v('First, select the "Images" tab and upload your custom images.')]),a("p",[e._v("Then, you will be able to use that custom images in any object types.")]),a("p",[e._v('On the "Object Types" tab, select the object type that you want to use that image. Click "change image", select the "Uploaded images" tab and click on the image that you uploaded.')])])}],r=a("0418"),i=a("fd2d"),s=a("2fbc"),d={name:"Images",components:{Header:r["a"],Footer:i["a"],Breadcrumb:s["a"]}},u=d,c=(a("1409"),a("2877")),l=Object(c["a"])(u,n,o,!1,null,"f07f1f3a",null);t["default"]=l.exports},1409:function(e,t,a){"use strict";var n=a("d00c"),o=a.n(n);o.a},"2fbc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"div_breadcrumb"},[a("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(t){return a("li",{key:t.id,class:t.active?"breadcrumb-item active":"breadcrumb-item"},[t.active?e._e():a("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]),t.active?a("span",[e._v(e._s(t.name))]):e._e()])})),0)])])])},o=[],r={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"snake-game",name:"Snake",url:"/games/snake-game",parentId:"games"},{id:"ball-bounce-game",name:"Ball Bounce",url:"/games/ball-bounce",parentId:"games"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/introduction/levels",parentId:"introduction"},{id:"events",name:"Events",url:"/docs/introduction/events",parentId:"introduction"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/introduction/visual-scripts",parentId:"introduction"},{id:"object-types",name:"Object types",url:"/docs/introduction/object-types",parentId:"introduction"},{id:"images",name:"Images",url:"/docs/introduction/images",parentId:"introduction"},{id:"audios",name:"Audios",url:"/docs/introduction/audios",parentId:"introduction"},{id:"global-variables",name:"Global variables",url:"/docs/introduction/global-variables",parentId:"introduction"},{id:"export",name:"Export",url:"/docs/introduction/export",parentId:"introduction"},{id:"expressions",name:"Expressions",url:"/docs/expressions",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}},mounted:function(){},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(e){for(var t=0;t<this.pages.length;t++){var a=this.pages[t];if(a.id==e)return a}return null},buildItems:function(){var e=[],t=this.getPageById(this.pageId);t.active=!0,e.push(t);var a=t.parentId,n=0;while(null!=a||n>=10){var o=this.getPageById(a);e.unshift(o),a=o.parentId,n++}return e}}},i=r,s=(a("5aad"),a("2877")),d=Object(s["a"])(i,n,o,!1,null,"053d58d7",null);t["a"]=d.exports},"5aad":function(e,t,a){"use strict";var n=a("c7d0"),o=a.n(n);o.a},c7d0:function(e,t,a){},d00c:function(e,t,a){}}]);