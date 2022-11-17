(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42b3f5b8"],{"24a4":function(e,t,n){},"2fbc":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"div_breadcrumb"},[n("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(t){return n("li",{key:t.id,class:t.active?"breadcrumb-item active":"breadcrumb-item"},[t.active?e._e():n("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]),t.active?n("span",[e._v(e._s(t.name))]):e._e()])})),0)])])])},o=[],i=(n("b0c0"),n("ad29")),r={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/introduction/levels",parentId:"introduction"},{id:"events",name:"Events",url:"/docs/introduction/events",parentId:"introduction"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/introduction/visual-scripts",parentId:"introduction"},{id:"object-types",name:"Object types",url:"/docs/introduction/object-types",parentId:"introduction"},{id:"images",name:"Images",url:"/docs/introduction/images",parentId:"introduction"},{id:"audios",name:"Audios",url:"/docs/introduction/audios",parentId:"introduction"},{id:"global-variables",name:"Global variables",url:"/docs/introduction/global-variables",parentId:"introduction"},{id:"export",name:"Export",url:"/docs/introduction/export",parentId:"introduction"},{id:"expressions",name:"Expressions",url:"/docs/expressions",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}},mounted:function(){for(var e=i["a"].listGames(),t=0;t<e.length;t++){var n=e[t];this.pages.push({id:"example-game-"+n.slug,name:n.name,url:"/games/"+n.slug,parentId:"games"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(e){for(var t=0;t<this.pages.length;t++){var n=this.pages[t];if(n.id==e)return n}return null},buildItems:function(){var e=[],t=this.getPageById(this.pageId);if(null==t)return[];t.active=!0,e.push(t);var n=t.parentId,a=0;while(null!=n||a>=10){var o=this.getPageById(n);e.unshift(o),n=o.parentId,a++}return e}}},s=r,d=(n("a844"),n("2877")),l=Object(d["a"])(s,a,o,!1,null,"5575ea52",null);t["a"]=l.exports},"411d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("Breadcrumb",{attrs:{pageId:"events"}}),n("h1",[e._v("Events")]),n("br"),e._m(0),n("br"),n("br"),n("div",{staticClass:"div_shadow home"},[e._v(" Previous: "),n("router-link",{attrs:{to:"/docs/introduction/global-variables"}},[e._v("Global variables")])],1),n("div",{staticClass:"div_shadow home"},[e._v(" Next: "),n("router-link",{attrs:{to:"/docs/introduction/export"}},[e._v("Export")])],1),n("br"),n("br"),n("br"),n("Footer")],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"normalText"},[n("p",[e._v("Events allow you to create the logic and rules of your game.")]),n("p",[e._v("Every animation frame, the engine will run through all events and evaluate them.")]),n("p",[e._v("Events are composed of 3 elements: loops, contitions and actions.")]),n("p",[e._v("The main part of the event is the event action. It indicates what will happen if the condition is true.")]),n("p",[e._v("The condition indicates when the event action will be executed. If the condition evaluates to true, the actions will be executed, otherwise the event actions will not be executed. An event can contain one or more conditions. If it contain more than one condition, all of them must be evaluated to true for the event actions to be executed.")]),n("p",[e._v("Loops are optional. An event can contain zero or more loops. If an event contain a loop, it will repeat for every element of the loop.")])])}],i=n("0418"),r=n("fd2d"),s=n("2fbc"),d={name:"Events",components:{Header:i["a"],Footer:r["a"],Breadcrumb:s["a"]}},l=d,c=(n("dd43"),n("2877")),u=Object(c["a"])(l,a,o,!1,null,"713d238a",null);t["default"]=u.exports},6708:function(e,t,n){},a844:function(e,t,n){"use strict";var a=n("6708"),o=n.n(a);o.a},dd43:function(e,t,n){"use strict";var a=n("24a4"),o=n.n(a);o.a}}]);