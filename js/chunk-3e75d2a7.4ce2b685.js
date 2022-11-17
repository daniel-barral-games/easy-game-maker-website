(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e75d2a7"],{"2fbc":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"div_breadcrumb"},[a("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(e){return a("li",{key:e.id,class:e.active?"breadcrumb-item active":"breadcrumb-item"},[e.active?t._e():a("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),e.active?a("span",[t._v(t._s(e.name))]):t._e()])})),0)])])])},r=[],n=(a("b0c0"),a("ad29")),i={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/introduction/levels",parentId:"introduction"},{id:"events",name:"Events",url:"/docs/introduction/events",parentId:"introduction"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/introduction/visual-scripts",parentId:"introduction"},{id:"object-types",name:"Object types",url:"/docs/introduction/object-types",parentId:"introduction"},{id:"images",name:"Images",url:"/docs/introduction/images",parentId:"introduction"},{id:"audios",name:"Audios",url:"/docs/introduction/audios",parentId:"introduction"},{id:"global-variables",name:"Global variables",url:"/docs/introduction/global-variables",parentId:"introduction"},{id:"export",name:"Export",url:"/docs/introduction/export",parentId:"introduction"},{id:"expressions",name:"Expressions",url:"/docs/expressions",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}},mounted:function(){for(var t=n["a"].listGames(),e=0;e<t.length;e++){var a=t[e];this.pages.push({id:"example-game-"+a.slug,name:a.name,url:"/games/"+a.slug,parentId:"games"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(t){for(var e=0;e<this.pages.length;e++){var a=this.pages[e];if(a.id==t)return a}return null},buildItems:function(){var t=[],e=this.getPageById(this.pageId);if(null==e)return[];e.active=!0,t.push(e);var a=e.parentId,o=0;while(null!=a||o>=10){var r=this.getPageById(a);t.unshift(r),a=r.parentId,o++}return t}}},s=i,u=(a("a844"),a("2877")),d=Object(u["a"])(s,o,r,!1,null,"5575ea52",null);e["a"]=d.exports},6708:function(t,e,a){},a309:function(t,e,a){"use strict";var o=a("c5d5"),r=a.n(o);r.a},a844:function(t,e,a){"use strict";var o=a("6708"),r=a.n(o);r.a},b7ee:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("Breadcrumb",{attrs:{pageId:"export"}}),a("h1",[t._v("Export")]),a("br"),t._m(0),a("br"),a("br"),a("div",{staticClass:"div_shadow home"},[t._v(" Previous: "),a("router-link",{attrs:{to:"/docs/introduction/visual-scripts"}},[t._v("Visual scripts")])],1),a("div",{staticClass:"div_shadow home"},[t._v(" Next: "),a("router-link",{attrs:{to:"/tutorials"}},[t._v("Tutorials")])],1),a("br"),a("br"),a("br"),a("Footer")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"normalText"},[a("h2",[t._v("Export to HTML")]),a("p",[t._v("You can export your games to HTML.")]),a("p",[t._v("Export to HTML if you want to download standalone playable version of your game.")]),a("p",[t._v("When you export to HTML, a ZIP file will be created. Download the ZIP file and extract its contents.")]),a("p",[t._v('Open the file "index.html" to play the game.')]),a("p",[t._v("The exported game can be played locally or on a server.")]),a("p",[t._v('If you upload your game to a server, include the "resources" folder together with the "index.html" file.')]),a("h2",[t._v("Export to JSON")]),a("p",[t._v("Export to JSON if you want to save your game to continue editing it later.")]),a("p",[t._v('Save the JSON to a file in your machine. When you want to continue editing the game, paste the content of the JSON in the textarea at "Import from JSON".')]),a("h2",[t._v("Import from JSON")]),a("p",[t._v("If you previously exported your game to JSON, you can later import it from JSON when you want to continue editing your game.")]),a("p",[t._v('Just paste the contents of the JSON in the textarea at "Import from JSON" and click button "Import".')]),a("h2",[t._v("Generate source code")]),a("p",[t._v("On the Export tab, you can generate the source code of your game. This source code is only for debugging purposes and is relative to the events only.")]),a("p",[t._v("The source code is in Javascript.")])])}],n=a("0418"),i=a("fd2d"),s=a("2fbc"),u={name:"Export",components:{Header:n["a"],Footer:i["a"],Breadcrumb:s["a"]}},d=u,c=(a("a309"),a("2877")),l=Object(c["a"])(d,o,r,!1,null,"100fae41",null);e["default"]=l.exports},c5d5:function(t,e,a){}}]);