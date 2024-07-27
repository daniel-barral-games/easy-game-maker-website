(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36eb8260"],{"24b6":function(e,t,n){"use strict";var a=n("51cd"),i=n.n(a);i.a},"29fa":function(e,t,n){"use strict";function a(e){for(var t=r(),n=u(t),a=0;a<n.length;a++){var i=n[a];if(i.id==e)return{previous:a>0?n[a-1]:null,next:a<n.length-1?n[a+1]:null}}return null}function i(){return[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"examples",name:"Examples",url:"/examples",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"game-properties",name:"Game properties",url:"/docs/game-properties",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/levels",parentId:"documentation"},{id:"level-editor",name:"Level editor",url:"/docs/levels/level-editor",parentId:"levels"},{id:"object-types",name:"Object types",url:"/docs/object-types",parentId:"documentation"},{id:"behaviours",name:"Behaviours",url:"/docs/object-types/behaviours",parentId:"object-types"},{id:"animations",name:"Animations",url:"/docs/object-types/animations",parentId:"object-types"},{id:"resources",name:"Resources",url:"/docs/resources",parentId:"documentation"},{id:"images",name:"Images",url:"/docs/resources/images",parentId:"resources"},{id:"audios",name:"Audios",url:"/docs/resources/audios",parentId:"resources"},{id:"physics-engine",name:"Physics engine",url:"/docs/physics-engine",parentId:"documentation"},{id:"matter-js",name:"Matter.js",url:"/docs/physics-engine/matter-js",parentId:"physics-engine"},{id:"matter-js-constraints",name:"Matter.js constraints",url:"/docs/physics-engine/matter-js-constraints",parentId:"physics-engine"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"visual-script-actions",name:"Actions",url:"/docs/visual-scripts/actions",parentId:"visual-scripts"},{id:"visual-script-conditions",name:"Conditions",url:"/docs/visual-scripts/conditions",parentId:"visual-scripts"},{id:"visual-script-loops",name:"Loops",url:"/docs/visual-scripts/loops",parentId:"visual-scripts"},{id:"visual-script-comments",name:"Comments",url:"/docs/visual-scripts/comments",parentId:"visual-scripts"},{id:"expressions",name:"Expressions",url:"/docs/visual-scripts/expressions",parentId:"visual-scripts"},{id:"visual-script-functions",name:"Visual script functions",url:"/docs/visual-scripts/visual-script-functions",parentId:"visual-scripts"},{id:"global-variables",name:"Global variables",url:"/docs/global-variables",parentId:"documentation"},{id:"export",name:"Export",url:"/docs/export",parentId:"documentation"},{id:"import",name:"Import",url:"/docs/import",parentId:"documentation"},{id:"extensions",name:"Extensions",url:"/docs/extensions",parentId:"documentation"},{id:"neuroevolution",name:"Neuroevolution",url:"/docs/extensions/neuroevolution",parentId:"extensions"},{id:"advanced-audio",name:"Advanced audio",url:"/docs/extensions/advanced-audio",parentId:"extensions"},{id:"advanced-settings",name:"Advanced settings",url:"/docs/advanced-settings",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"},{id:"how-to-publish-your-game-on-itch-io",name:"How to publish your game on itch.io",url:"/tutorials/how-to-publish-your-game-on-itch-io",parentId:"tutorials"}]}function s(){return o("documentation")}function o(e){for(var t=i(),n=[],a=0;a<t.length;a++){var s=t[a];s.parentId==e&&n.push(s)}return n}function r(){for(var e=i(),t=[],n=0;n<e.length;n++){var a=e[n],s=o(a.id);a.children=s,"documentation"==a.parentId&&t.push(a)}return t}function u(e){for(var t=[],n=0;n<e.length;n++){var a=e[n];t.push(a);var i=a.children;if(null!=i)for(var s=0;s<i.length;s++){var o=i[s];t.push(o)}}return t}t["a"]={listMenuItems:i,listDocumentationMenuItems:s,listDocumentationMenuItemsWithChildren:r,getPreviousAndNextMenuItems:a}},"2fbc":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"div_breadcrumb"},[n("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(t){return n("li",{key:t.id,class:t.active?"breadcrumb-item active":"breadcrumb-item"},[t.active?e._e():n("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]),t.active?n("span",[e._v(e._s(t.name))]):e._e()])})),0)])])])},i=[],s=(n("b0c0"),n("ad29")),o=n("92dc"),r=n("29fa"),u={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[]}},mounted:function(){this.pages=r["a"].listMenuItems();for(var e=s["a"].listGames(),t=0;t<e.length;t++){var n=e[t];this.pages.push({id:"example-game-"+n.slug,name:n.name,url:"/games/"+n.slug,parentId:"games"})}for(var a=o["a"].listExamples(),i=0;i<a.length;i++){var u=a[i];this.pages.push({id:"example-"+u.slug,name:u.name,url:"/examples/"+u.slug,parentId:"examples"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(e){for(var t=0;t<this.pages.length;t++){var n=this.pages[t];if(n.id==e)return n}return null},buildItems:function(){var e=[],t=this.getPageById(this.pageId);if(null==t)return[];t.active=!0,e.push(t);var n=t.parentId,a=0;while(null!=n||a>=10){var i=this.getPageById(n);e.unshift(i),n=i.parentId,a++}return e}}},c=u,l=(n("b650"),n("2877")),d=Object(l["a"])(c,a,i,!1,null,"1c7f9e99",null);t["a"]=d.exports},"51cd":function(e,t,n){},7830:function(e,t,n){},"9ecf":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{attrs:{addMargin:!1}}),n("div",{staticClass:"parent"},[n("DocumentationLateralMenu",{attrs:{currentPageId:e.pageId}}),n("div",{staticClass:"documentationDivParent"},[n("Breadcrumb",{attrs:{pageId:e.pageId}}),n("div",[e._t("default"),n("br")],2),n("DocumentationFooter",{attrs:{pageId:e.pageId}}),n("div")],1)],1),n("Footer")],1)},i=[],s=n("0418"),o=n("fd2d"),r=n("2fbc"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"documentatioLateralMenu"},e._l(e.menuItems,(function(t){return n("div",{key:t.id},[n("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[n("span",{staticClass:"menu-link"},[e._v(e._s(t.name))])]),e._l(t.children,(function(t){return n("div",{key:t.id},[n("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[n("span",{staticClass:"menu-link",staticStyle:{"margin-left":"15px"}},[e._v(e._s(t.name))])])],1)}))],2)})),0)},c=[],l=n("29fa"),d={name:"DocumentationLateralMenu",components:{},props:{currentPageId:String},data:function(){return{menuItems:[]}},mounted:function(){this.menuItems=l["a"].listDocumentationMenuItemsWithChildren()},computed:{},methods:{}},m=d,p=(n("24b6"),n("2877")),v=Object(p["a"])(m,u,c,!1,null,"4deb2c60",null),h=v.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[null!=e.previous?n("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Previous: "),n("router-link",{attrs:{to:e.previous.url}},[e._v(e._s(e.previous.name))])],1):e._e(),null!=e.next?n("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Next: "),n("router-link",{attrs:{to:e.next.url}},[e._v(e._s(e.next.name))])],1):e._e(),null!=e.next||null!=e.previous?n("br"):e._e(),null!=e.next||null!=e.previous?n("br"):e._e(),n("div",{staticClass:"documentationSeeAlso home"},[e._v(" See also: "),n("br"),n("router-link",{attrs:{to:"/tutorials"}},[e._v("Tutorials")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://www.youtube.com/@easygamemaker"}},[e._v("Video tutorials")]),n("br"),n("router-link",{attrs:{to:"/community"}},[e._v("Community")])],1)])},g=[],b={name:"DocumentationFooter",components:{},props:{pageId:String},data:function(){return{previous:null,next:null}},mounted:function(){var e=l["a"].getPreviousAndNextMenuItems(this.pageId);this.previous=e.previous,this.next=e.next},computed:{},methods:{}},I=b,_=(n("a0c6"),Object(p["a"])(I,f,g,!1,null,"40a41340",null)),y=_.exports,x={name:"Documentation",components:{Header:s["a"],Footer:o["a"],Breadcrumb:r["a"],DocumentationLateralMenu:h,DocumentationFooter:y},props:{pageId:String}},k=x,w=(n("d033"),Object(p["a"])(k,a,i,!1,null,"ce7abb88",null));t["a"]=w.exports},"9edd":function(e,t,n){},a0c6:function(e,t,n){"use strict";var a=n("7830"),i=n.n(a);i.a},a322:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("DocumentationLayout",{attrs:{pageId:"visual-script-functions"}},[n("h1",[e._v("Visual script functions")]),n("br"),n("div",{staticClass:"documentationContent"},[n("h3",[e._v("What are visual script functions?")]),n("p",[e._v("In EasyGameMaker, a function is a group of blocks designed to perform a particular task.")]),n("p",[e._v('For example, you can create functions called "update physics", "draw HUD" or "create enemies". The blocks in the function are executed in sequence, the same way any other '),n("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual script")]),e._v(".")],1),n("p",[e._v('A function is very similar to the level scripts ("on animation frame" and "on level start") but with some differences:')]),n("ul",[n("li",[e._v("the function is not tied to any specific "),n("router-link",{attrs:{to:"/docs/levels"}},[e._v("level")])],1),n("li",[e._v("you can assign a name to it")]),n("li",[e._v("you can reuse it, by calling the same function from multiple visual scripts (from multiple levels) or even from other functions")])]),n("h3",[e._v("Advantages of using visual script functions")]),n("p",[e._v("The main advantage of using functions is that they can be reused in different game "),n("router-link",{attrs:{to:"/docs/levels"}},[e._v("levels")]),e._v(". The same function can be called from different level scripts, and from different blocks in the same level script. Functions can also be called from other functions.")],1),n("p",[e._v("For example, imagine you are developing a platform game with many levels. You will have some logic that you want to be executed in every level. Instead of copying and pasting all the visual script blocks from one level to the others, you can create a function with all the logic common to all levels. Then, you just need a single block on each level, to call that function.")]),n("p",[e._v("If you need to change some logic, you will need to change only in one place (the function) instead of needing to change in every level script.")]),n("p",[e._v("Another advantage is that using functions make your scripts easier to understand and mantain, because you break big and complex scripts into smaller and simpler ones.")]),n("h3",[e._v("How to create a visual script function")]),n("p",[e._v("You can create visual script functions in the visual scripts editor.")]),n("p",[e._v('To open the visual scripts editor, select the "Visual scripts" tab and click on the button "Open visual scripts editor".')]),n("p",[e._v('To create a function, click on the button "Create function", give it a name and a description (optional), and click on the button "Create".')]),n("p",[e._v("Then you can start adding blocks to the function, the same way you do with the level scripts.")]),n("h3",[e._v("How to call a function")]),n("p",[e._v("Just creating a function is not enough to make it execute. A function is executed when an "),n("router-link",{attrs:{to:"/docs/visual-scripts/actions"}},[e._v("action")]),e._v(' block invokes it (calls it). You need to call it from the level scripts ("on animation frame" or "on level start").')],1),n("p",[e._v('To execute a function, create an event action of category "Functions" and type "Execute function". Then, select the name of the function that you want to execute.')]),n("h3",[e._v("Recursive functions")]),n("p",[e._v('You can also make a function call itself. We call this a recursive function. Be careful when using recursive functions, to avoid creating infinite recursion, which will cause your game to "crash".')])])])],1)},i=[],s=n("9ecf"),o={name:"VisualScriptFunctions",components:{DocumentationLayout:s["a"]}},r=o,u=n("2877"),c=Object(u["a"])(r,a,i,!1,null,"50ca9dea",null);t["default"]=c.exports},b650:function(e,t,n){"use strict";var a=n("9edd"),i=n.n(a);i.a},ce5b:function(e,t,n){},d033:function(e,t,n){"use strict";var a=n("ce5b"),i=n.n(a);i.a}}]);