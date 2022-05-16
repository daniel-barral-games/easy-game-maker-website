(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34f1d301"],{"2fbc":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"div_breadcrumb"},[a("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(e){return a("li",{key:e.id,class:e.active?"breadcrumb-item active":"breadcrumb-item"},[e.active?t._e():a("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),e.active?a("span",[t._v(t._s(e.name))]):t._e()])})),0)])])])},n=[],r={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[{id:"home",name:"Home",url:"/",parentId:null},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/introduction/levels",parentId:"introduction"},{id:"events",name:"Events",url:"/docs/introduction/events",parentId:"introduction"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/introduction/visual-scripts",parentId:"introduction"},{id:"object-types",name:"Object types",url:"/docs/introduction/object-types",parentId:"introduction"},{id:"images",name:"Images",url:"/docs/introduction/images",parentId:"introduction"},{id:"audios",name:"Audios",url:"/docs/introduction/audios",parentId:"introduction"},{id:"global-variables",name:"Global variables",url:"/docs/introduction/global-variables",parentId:"introduction"},{id:"export",name:"Export",url:"/docs/introduction/export",parentId:"introduction"},{id:"expressions",name:"Expressions",url:"/docs/expressions",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}},mounted:function(){},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(t){for(var e=0;e<this.pages.length;e++){var a=this.pages[e];if(a.id==t)return a}return null},buildItems:function(){var t=[],e=this.getPageById(this.pageId);e.active=!0,t.push(e);var a=e.parentId,o=0;while(null!=a||o>=10){var n=this.getPageById(a);t.unshift(n),a=n.parentId,o++}return t}}},i=r,s=(a("9ea4"),a("2877")),d=Object(s["a"])(i,o,n,!1,null,"5963f6d7",null);e["a"]=d.exports},"620b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("Breadcrumb",{attrs:{pageId:"audios"}}),a("h1",[t._v("Audios")]),a("br"),t._m(0),a("br"),a("br"),a("div",{staticClass:"div_shadow home"},[t._v(" Previous: "),a("router-link",{attrs:{to:"/docs/introduction/images"}},[t._v("Images")])],1),a("div",{staticClass:"div_shadow home"},[t._v(" Next: "),a("router-link",{attrs:{to:"/docs/introduction/global-variables"}},[t._v("Global variables")])],1),a("br"),a("br"),a("br"),a("Footer")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"normalText"},[a("p",[t._v("EasyGameMaker has dozens of sounds and music available ready to use in your games.")]),a("p",[t._v("You can also upload your own sounds and music for your game.")]),a("p",[t._v('To upload a custom audio, select the "Audios" tab and upload your custom sound or music.')]),a("p",[t._v("Then, you will be able to use that custom audio in your game.")]),a("p",[t._v('On the "Events" tab, create an event and an event action. Then, on the event action, select category "AUDIO" and type "Play audio".')]),a("p",[t._v('Click on the button "Select audio", then select the tab "Uploaded audios".')]),a("p",[t._v("You will then see all uploaded audios. Select any audio that you uploaded.")])])}],r=a("0418"),i=a("fd2d"),s=a("2fbc"),d={name:"Audios",components:{Header:r["a"],Footer:i["a"],Breadcrumb:s["a"]}},u=d,c=(a("c8ca"),a("2877")),l=Object(c["a"])(u,o,n,!1,null,"05933510",null);e["default"]=l.exports},"9ea4":function(t,e,a){"use strict";var o=a("ef44"),n=a.n(o);n.a},c8ca:function(t,e,a){"use strict";var o=a("f376"),n=a.n(o);n.a},ef44:function(t,e,a){},f376:function(t,e,a){}}]);