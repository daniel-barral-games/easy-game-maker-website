(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fcc79cc"],{"15ab":function(e,t,a){"use strict";var n=a("70d3"),s=a.n(n);s.a},"24b6":function(e,t,a){"use strict";var n=a("51cd"),s=a.n(n);s.a},"29fa":function(e,t,a){"use strict";function n(e){for(var t=i(),a=l(t),n=0;n<a.length;n++){var s=a[n];if(s.id==e)return{previous:n>0?a[n-1]:null,next:n<a.length-1?a[n+1]:null}}return null}function s(){return[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"examples",name:"Examples",url:"/examples",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"game-properties",name:"Game properties",url:"/docs/game-properties",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/levels",parentId:"documentation"},{id:"level-editor",name:"Level editor",url:"/docs/levels/level-editor",parentId:"levels"},{id:"object-types",name:"Object types",url:"/docs/object-types",parentId:"documentation"},{id:"behaviours",name:"Behaviours",url:"/docs/object-types/behaviours",parentId:"object-types"},{id:"animations",name:"Animations",url:"/docs/object-types/animations",parentId:"object-types"},{id:"resources",name:"Resources",url:"/docs/resources",parentId:"documentation"},{id:"images",name:"Images",url:"/docs/resources/images",parentId:"resources"},{id:"audios",name:"Audios",url:"/docs/resources/audios",parentId:"resources"},{id:"physics-engine",name:"Physics engine",url:"/docs/physics-engine",parentId:"documentation"},{id:"matter-js",name:"Matter.js",url:"/docs/physics-engine/matter-js",parentId:"physics-engine"},{id:"matter-js-constraints",name:"Matter.js constraints",url:"/docs/physics-engine/matter-js-constraints",parentId:"physics-engine"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"visual-script-actions",name:"Actions",url:"/docs/visual-scripts/actions",parentId:"visual-scripts"},{id:"visual-script-conditions",name:"Conditions",url:"/docs/visual-scripts/conditions",parentId:"visual-scripts"},{id:"visual-script-loops",name:"Loops",url:"/docs/visual-scripts/loops",parentId:"visual-scripts"},{id:"visual-script-comments",name:"Comments",url:"/docs/visual-scripts/comments",parentId:"visual-scripts"},{id:"expressions",name:"Expressions",url:"/docs/visual-scripts/expressions",parentId:"visual-scripts"},{id:"visual-script-functions",name:"Visual script functions",url:"/docs/visual-scripts/visual-script-functions",parentId:"visual-scripts"},{id:"global-variables",name:"Global variables",url:"/docs/global-variables",parentId:"documentation"},{id:"export",name:"Export",url:"/docs/export",parentId:"documentation"},{id:"import",name:"Import",url:"/docs/import",parentId:"documentation"},{id:"extensions",name:"Extensions",url:"/docs/extensions",parentId:"documentation"},{id:"neuroevolution",name:"Neuroevolution",url:"/docs/extensions/neuroevolution",parentId:"extensions"},{id:"advanced-audio",name:"Advanced audio",url:"/docs/extensions/advanced-audio",parentId:"extensions"},{id:"advanced-settings",name:"Advanced settings",url:"/docs/advanced-settings",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"},{id:"how-to-publish-your-game-on-itch-io",name:"How to publish your game on itch.io",url:"/tutorials/how-to-publish-your-game-on-itch-io",parentId:"tutorials"}]}function o(){return r("documentation")}function r(e){for(var t=s(),a=[],n=0;n<t.length;n++){var o=t[n];o.parentId==e&&a.push(o)}return a}function i(){for(var e=s(),t=[],a=0;a<e.length;a++){var n=e[a],o=r(n.id);n.children=o,"documentation"==n.parentId&&t.push(n)}return t}function l(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];t.push(n);var s=n.children;if(null!=s)for(var o=0;o<s.length;o++){var r=s[o];t.push(r)}}return t}t["a"]={listMenuItems:s,listDocumentationMenuItems:o,listDocumentationMenuItemsWithChildren:i,getPreviousAndNextMenuItems:n}},"2fbc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"div_breadcrumb"},[a("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(t){return a("li",{key:t.id,class:t.active?"breadcrumb-item active":"breadcrumb-item"},[t.active?e._e():a("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]),t.active?a("span",[e._v(e._s(t.name))]):e._e()])})),0)])])])},s=[],o=(a("b0c0"),a("ad29")),r=a("92dc"),i=a("29fa"),l={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[]}},mounted:function(){this.pages=i["a"].listMenuItems();for(var e=o["a"].listGames(),t=0;t<e.length;t++){var a=e[t];this.pages.push({id:"example-game-"+a.slug,name:a.name,url:"/games/"+a.slug,parentId:"games"})}for(var n=r["a"].listExamples(),s=0;s<n.length;s++){var l=n[s];this.pages.push({id:"example-"+l.slug,name:l.name,url:"/examples/"+l.slug,parentId:"examples"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(e){for(var t=0;t<this.pages.length;t++){var a=this.pages[t];if(a.id==e)return a}return null},buildItems:function(){var e=[],t=this.getPageById(this.pageId);if(null==t)return[];t.active=!0,e.push(t);var a=t.parentId,n=0;while(null!=a||n>=10){var s=this.getPageById(a);e.unshift(s),a=s.parentId,n++}return e}}},u=l,c=(a("b650"),a("2877")),d=Object(c["a"])(u,n,s,!1,null,"1c7f9e99",null);t["a"]=d.exports},"51cd":function(e,t,a){},"70d3":function(e,t,a){},7830:function(e,t,a){},"9ecf":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{attrs:{addMargin:!1}}),a("div",{staticClass:"parent"},[a("DocumentationLateralMenu",{attrs:{currentPageId:e.pageId}}),a("div",{staticClass:"documentationDivParent"},[a("Breadcrumb",{attrs:{pageId:e.pageId}}),a("div",[e._t("default"),a("br")],2),a("DocumentationFooter",{attrs:{pageId:e.pageId}}),a("div")],1)],1),a("Footer")],1)},s=[],o=a("0418"),r=a("fd2d"),i=a("2fbc"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"documentatioLateralMenu"},e._l(e.menuItems,(function(t){return a("div",{key:t.id},[a("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[a("span",{staticClass:"menu-link"},[e._v(e._s(t.name))])]),e._l(t.children,(function(t){return a("div",{key:t.id},[a("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[a("span",{staticClass:"menu-link",staticStyle:{"margin-left":"15px"}},[e._v(e._s(t.name))])])],1)}))],2)})),0)},u=[],c=a("29fa"),d={name:"DocumentationLateralMenu",components:{},props:{currentPageId:String},data:function(){return{menuItems:[]}},mounted:function(){this.menuItems=c["a"].listDocumentationMenuItemsWithChildren()},computed:{},methods:{}},m=d,p=(a("24b6"),a("2877")),v=Object(p["a"])(m,l,u,!1,null,"4deb2c60",null),b=v.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[null!=e.previous?a("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Previous: "),a("router-link",{attrs:{to:e.previous.url}},[e._v(e._s(e.previous.name))])],1):e._e(),null!=e.next?a("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Next: "),a("router-link",{attrs:{to:e.next.url}},[e._v(e._s(e.next.name))])],1):e._e(),null!=e.next||null!=e.previous?a("br"):e._e(),null!=e.next||null!=e.previous?a("br"):e._e(),a("div",{staticClass:"documentationSeeAlso home"},[e._v(" See also: "),a("br"),a("router-link",{attrs:{to:"/tutorials"}},[e._v("Tutorials")]),a("br"),a("a",{attrs:{target:"_blank",href:"https://www.youtube.com/@easygamemaker"}},[e._v("Video tutorials")]),a("br"),a("router-link",{attrs:{to:"/community"}},[e._v("Community")])],1)])},h=[],f={name:"DocumentationFooter",components:{},props:{pageId:String},data:function(){return{previous:null,next:null}},mounted:function(){var e=c["a"].getPreviousAndNextMenuItems(this.pageId);this.previous=e.previous,this.next=e.next},computed:{},methods:{}},_=f,I=(a("a0c6"),Object(p["a"])(_,g,h,!1,null,"40a41340",null)),y=I.exports,x={name:"Documentation",components:{Header:o["a"],Footer:r["a"],Breadcrumb:i["a"],DocumentationLateralMenu:b,DocumentationFooter:y},props:{pageId:String}},w=x,k=(a("d033"),Object(p["a"])(w,n,s,!1,null,"ce7abb88",null));t["a"]=k.exports},"9edd":function(e,t,a){},a0c6:function(e,t,a){"use strict";var n=a("7830"),s=a.n(n);s.a},b650:function(e,t,a){"use strict";var n=a("9edd"),s=a.n(n);s.a},ce5b:function(e,t,a){},d033:function(e,t,a){"use strict";var n=a("ce5b"),s=a.n(n);s.a},e1c8c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("DocumentationLayout",{attrs:{pageId:"global-variables"}},[a("h1",[e._v("Global variables")]),a("br"),a("div",{staticClass:"documentationContent"},[a("h3",[e._v("What are global variables?")]),a("p",[e._v("Global variables are variables that keep state even when you change "),a("router-link",{attrs:{to:"/docs/levels"}},[e._v("levels")]),e._v(".")],1),a("p",[e._v('Commom global variables are "life", "money", "coins" and so on. You can create as many global variable as you want, and choose any name for them.')]),a("p",[e._v("Every variable has an initial value. You can change the value of global variables by using "),a("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual scripts")]),e._v('. For example, you can create a script to add 10 to global variable "money" every time the player collides with a coin.')],1),a("p",[e._v("Global variables are reset when you restart the game.")]),a("h3",[e._v("How to create global variables")]),a("p",[e._v('To create a global variable, select the "Global variables" tab and click on the button "Add global variable". A new global variable will be created with some default values. Click on the link "edit" to set global variable name, type and initial value.')]),a("h3",[e._v("How to change the value of global variables")]),a("p",[e._v("During the game, you will probably want the variables to change value under some conditions.")]),a("p",[e._v("This is done using "),a("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual scripts")]),e._v(", by using one of the following "),a("router-link",{attrs:{to:"/docs/visual-scripts/actions"}},[e._v("actions")]),e._v(":")],1),a("ul",[a("li",[e._v("Set global variable")]),a("li",[e._v("Add to global variable")])]),a("p",[e._v('Both are found under the category "game", when creating an action block.')]),a("h3",[e._v("How to access the value of a global variable")]),a("p",[e._v("Global variable values can be accessed in visual scripts, by using "),a("router-link",{attrs:{to:"/docs/visual-scripts/expressions"}},[e._v("expressions")]),e._v(".")],1),a("p",[e._v("To get the value of a global variable, you can use the expression:")]),a("p",[a("code",[e._v('play.getGlobalVariable("global_variable_name")')])]),a("p",[e._v('Replace "global_variable_name" with the name of the global variable that you want to access. For example:')]),a("p",[a("code",[e._v('play.getGlobalVariable("money")')])]),a("h3",[e._v("Local storage")]),a("p",[e._v('If you want to persist variables even between different plays, you need to use "Local Storage" instead.')]),a("p",[e._v("To set a local storage variable, on the "),a("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual script")]),e._v(", create an "),a("router-link",{attrs:{to:"/docs/visual-scripts/actions"}},[e._v("action")]),e._v(' of category "storage" and type "set local storage variable".')],1),a("p",[e._v("To get a local storage value, use "),a("router-link",{attrs:{to:"/docs/visual-scripts/expressions"}},[e._v("expression")]),e._v(":")],1),a("p",[a("code",[e._v('localStorage.getItem("local_storage_variable_name")')])])])])],1)},s=[],o=a("9ecf"),r={name:"GlobalVariables",components:{DocumentationLayout:o["a"]}},i=r,l=(a("15ab"),a("2877")),u=Object(l["a"])(i,n,s,!1,null,"944e7a6c",null);t["default"]=u.exports}}]);