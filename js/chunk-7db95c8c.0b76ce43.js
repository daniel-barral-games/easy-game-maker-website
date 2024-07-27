(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7db95c8c"],{"24b6":function(e,t,a){"use strict";var n=a("51cd"),i=a.n(n);i.a},"29fa":function(e,t,a){"use strict";function n(e){for(var t=o(),a=u(t),n=0;n<a.length;n++){var i=a[n];if(i.id==e)return{previous:n>0?a[n-1]:null,next:n<a.length-1?a[n+1]:null}}return null}function i(){return[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"examples",name:"Examples",url:"/examples",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"game-properties",name:"Game properties",url:"/docs/game-properties",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/levels",parentId:"documentation"},{id:"level-editor",name:"Level editor",url:"/docs/levels/level-editor",parentId:"levels"},{id:"object-types",name:"Object types",url:"/docs/object-types",parentId:"documentation"},{id:"behaviours",name:"Behaviours",url:"/docs/object-types/behaviours",parentId:"object-types"},{id:"animations",name:"Animations",url:"/docs/object-types/animations",parentId:"object-types"},{id:"resources",name:"Resources",url:"/docs/resources",parentId:"documentation"},{id:"images",name:"Images",url:"/docs/resources/images",parentId:"resources"},{id:"audios",name:"Audios",url:"/docs/resources/audios",parentId:"resources"},{id:"physics-engine",name:"Physics engine",url:"/docs/physics-engine",parentId:"documentation"},{id:"matter-js",name:"Matter.js",url:"/docs/physics-engine/matter-js",parentId:"physics-engine"},{id:"matter-js-constraints",name:"Matter.js constraints",url:"/docs/physics-engine/matter-js-constraints",parentId:"physics-engine"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"visual-script-actions",name:"Actions",url:"/docs/visual-scripts/actions",parentId:"visual-scripts"},{id:"visual-script-conditions",name:"Conditions",url:"/docs/visual-scripts/conditions",parentId:"visual-scripts"},{id:"visual-script-loops",name:"Loops",url:"/docs/visual-scripts/loops",parentId:"visual-scripts"},{id:"visual-script-comments",name:"Comments",url:"/docs/visual-scripts/comments",parentId:"visual-scripts"},{id:"expressions",name:"Expressions",url:"/docs/visual-scripts/expressions",parentId:"visual-scripts"},{id:"visual-script-functions",name:"Visual script functions",url:"/docs/visual-scripts/visual-script-functions",parentId:"visual-scripts"},{id:"global-variables",name:"Global variables",url:"/docs/global-variables",parentId:"documentation"},{id:"export",name:"Export",url:"/docs/export",parentId:"documentation"},{id:"import",name:"Import",url:"/docs/import",parentId:"documentation"},{id:"extensions",name:"Extensions",url:"/docs/extensions",parentId:"documentation"},{id:"neuroevolution",name:"Neuroevolution",url:"/docs/extensions/neuroevolution",parentId:"extensions"},{id:"advanced-audio",name:"Advanced audio",url:"/docs/extensions/advanced-audio",parentId:"extensions"},{id:"advanced-settings",name:"Advanced settings",url:"/docs/advanced-settings",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"},{id:"how-to-publish-your-game-on-itch-io",name:"How to publish your game on itch.io",url:"/tutorials/how-to-publish-your-game-on-itch-io",parentId:"tutorials"}]}function s(){return r("documentation")}function r(e){for(var t=i(),a=[],n=0;n<t.length;n++){var s=t[n];s.parentId==e&&a.push(s)}return a}function o(){for(var e=i(),t=[],a=0;a<e.length;a++){var n=e[a],s=r(n.id);n.children=s,"documentation"==n.parentId&&t.push(n)}return t}function u(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];t.push(n);var i=n.children;if(null!=i)for(var s=0;s<i.length;s++){var r=i[s];t.push(r)}}return t}t["a"]={listMenuItems:i,listDocumentationMenuItems:s,listDocumentationMenuItemsWithChildren:o,getPreviousAndNextMenuItems:n}},"2fbc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"div_breadcrumb"},[a("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(t){return a("li",{key:t.id,class:t.active?"breadcrumb-item active":"breadcrumb-item"},[t.active?e._e():a("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]),t.active?a("span",[e._v(e._s(t.name))]):e._e()])})),0)])])])},i=[],s=(a("b0c0"),a("ad29")),r=a("92dc"),o=a("29fa"),u={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[]}},mounted:function(){this.pages=o["a"].listMenuItems();for(var e=s["a"].listGames(),t=0;t<e.length;t++){var a=e[t];this.pages.push({id:"example-game-"+a.slug,name:a.name,url:"/games/"+a.slug,parentId:"games"})}for(var n=r["a"].listExamples(),i=0;i<n.length;i++){var u=n[i];this.pages.push({id:"example-"+u.slug,name:u.name,url:"/examples/"+u.slug,parentId:"examples"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(e){for(var t=0;t<this.pages.length;t++){var a=this.pages[t];if(a.id==e)return a}return null},buildItems:function(){var e=[],t=this.getPageById(this.pageId);if(null==t)return[];t.active=!0,e.push(t);var a=t.parentId,n=0;while(null!=a||n>=10){var i=this.getPageById(a);e.unshift(i),a=i.parentId,n++}return e}}},d=u,l=(a("b650"),a("2877")),c=Object(l["a"])(d,n,i,!1,null,"1c7f9e99",null);t["a"]=c.exports},"51cd":function(e,t,a){},7830:function(e,t,a){},"9ecf":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{attrs:{addMargin:!1}}),a("div",{staticClass:"parent"},[a("DocumentationLateralMenu",{attrs:{currentPageId:e.pageId}}),a("div",{staticClass:"documentationDivParent"},[a("Breadcrumb",{attrs:{pageId:e.pageId}}),a("div",[e._t("default"),a("br")],2),a("DocumentationFooter",{attrs:{pageId:e.pageId}}),a("div")],1)],1),a("Footer")],1)},i=[],s=a("0418"),r=a("fd2d"),o=a("2fbc"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"documentatioLateralMenu"},e._l(e.menuItems,(function(t){return a("div",{key:t.id},[a("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[a("span",{staticClass:"menu-link"},[e._v(e._s(t.name))])]),e._l(t.children,(function(t){return a("div",{key:t.id},[a("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[a("span",{staticClass:"menu-link",staticStyle:{"margin-left":"15px"}},[e._v(e._s(t.name))])])],1)}))],2)})),0)},d=[],l=a("29fa"),c={name:"DocumentationLateralMenu",components:{},props:{currentPageId:String},data:function(){return{menuItems:[]}},mounted:function(){this.menuItems=l["a"].listDocumentationMenuItemsWithChildren()},computed:{},methods:{}},m=c,p=(a("24b6"),a("2877")),h=Object(p["a"])(m,u,d,!1,null,"4deb2c60",null),v=h.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[null!=e.previous?a("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Previous: "),a("router-link",{attrs:{to:e.previous.url}},[e._v(e._s(e.previous.name))])],1):e._e(),null!=e.next?a("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Next: "),a("router-link",{attrs:{to:e.next.url}},[e._v(e._s(e.next.name))])],1):e._e(),null!=e.next||null!=e.previous?a("br"):e._e(),null!=e.next||null!=e.previous?a("br"):e._e(),a("div",{staticClass:"documentationSeeAlso home"},[e._v(" See also: "),a("br"),a("router-link",{attrs:{to:"/tutorials"}},[e._v("Tutorials")]),a("br"),a("a",{attrs:{target:"_blank",href:"https://www.youtube.com/@easygamemaker"}},[e._v("Video tutorials")]),a("br"),a("router-link",{attrs:{to:"/community"}},[e._v("Community")])],1)])},g=[],b={name:"DocumentationFooter",components:{},props:{pageId:String},data:function(){return{previous:null,next:null}},mounted:function(){var e=l["a"].getPreviousAndNextMenuItems(this.pageId);this.previous=e.previous,this.next=e.next},computed:{},methods:{}},_=b,I=(a("a0c6"),Object(p["a"])(_,f,g,!1,null,"40a41340",null)),y=I.exports,x={name:"Documentation",components:{Header:s["a"],Footer:r["a"],Breadcrumb:o["a"],DocumentationLateralMenu:v,DocumentationFooter:y},props:{pageId:String}},w=x,k=(a("d033"),Object(p["a"])(w,n,i,!1,null,"ce7abb88",null));t["a"]=k.exports},"9edd":function(e,t,a){},a0c6:function(e,t,a){"use strict";var n=a("7830"),i=a.n(n);i.a},b650:function(e,t,a){"use strict";var n=a("9edd"),i=a.n(n);i.a},ce5b:function(e,t,a){},cf36:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("DocumentationLayout",{attrs:{pageId:"advanced-settings"}},[a("h1",[e._v("Advanced settings")]),a("br"),a("div",{staticClass:"documentationContent"},[a("p",[e._v("In the advanced settings you can configure game frame rate (FPS) and time step (delta time).")]),a("p",[e._v("To open the advanced settings, select the "),a("router-link",{attrs:{to:"/docs/game-properties"}},[e._v("Game Properties")]),e._v(' tab and click on the button "Advanced settings".')],1),a("h3",[e._v("Advanced settings")]),a("p",[e._v("Below are attributes that you can configure in the advanced settings page.")]),a("table",{staticClass:"doc_table"},[a("tr",[a("th",[e._v("Attribute")]),a("th",[e._v("Description")])]),a("tr",[a("td",[e._v("Fixed delta time")]),a("td",[e._v("A flag that indicates if the game will use a fixed (constant) delta time or not. If you check this option, you must also choose the value of the fixed delta time (in milliseconds). If you keep the checkbox unchecked, the game will have a variable time step, so each frame can have a different delta time.")])]),a("tr",[a("td",[e._v("Frame rate limit")]),a("td",[e._v("Set a limit to the frame rate. You can limit the frame rate to test how your game would behave on a slower machine.")])]),a("tr",[a("td",[e._v("Max delta time")]),a("td",[e._v('Sets an upper limit on the amount of time (in milliseconds) the engine will report as having passed by the "delta time".')])])]),a("br"),a("br"),a("h3",[e._v("What is delta time?")]),a("p",[e._v("Delta time is the amount of time that elapsed since the last frame completed.")]),a("p",[e._v("This value varies depending on the frames per second (FPS) rate at which your game is running.")]),a("p",[e._v("When handling time-based actions, it's important to remember that the game's frame rate can vary and so the length of time between calls to the \"On animation frame\" "),a("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("script")]),e._v(" also varies.")],1),a("h3",[e._v("What is frame rate?")]),a("p",[e._v("Frame rate (expressed in frames per second or FPS) is the frequency (rate) at which consecutive frames are displayed in the game.")]),a("p",[e._v("At each frame, the "),a("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual script")]),e._v(' "On animation frame" of the current '),a("router-link",{attrs:{to:"/docs/levels"}},[e._v("game level")]),e._v(" is executed with the game logic and then the game is rendered at the screen.")],1),a("p",[e._v("The frame rate of your game can vary because of the time it takes to display and execute the scripts for each frame. This is affected by the capabilities of the device on which it is running, and also on the varying amount of complexity of the graphics displayed and computation required each frame. For example, your game may run at a slower frame rate when there are one hundred characters, compared to when there is only one.")]),a("p",[e._v("An FPS of 60 means the game is drawing a frame to the screen 60 times per second.")]),a("h3",[e._v("When to use fixed delta time")]),a("p",[e._v("In general, you should prefer fixed delta time for physics games, and if you want to create deterministic time-based game logic.")]),a("p",[e._v("Fixed time step is important for the accuracy and consistency of physics simulations.")]),a("p",[e._v('The attribute "fixed delta time" controls the interval of game time (in milliseconds) between each animation frame. If the machine is not able to perform all the computation in that time, the game time will slow down, causing the effect of "slow motion". This can happen, for example, if the game is under heavy load, or if "fixed delta time" is too small.')]),a("h3",[e._v("Frame rate limit")]),a("p",[e._v("The engine will try to run your game at the fastest frame rate possible, unless you limit the frame rate at the advanced settings.")]),a("p",[e._v("You can limit the frame rate to test how your game would behave on a slower machine.")]),a("h3",[e._v("Maximum delta time")]),a("p",[e._v('Maximum delta time sets an upper limit on the amount of time (in milliseconds) the engine will report as having passed by the "delta time".')]),a("p",[e._v('When a very slow frame happens, the "maximum delta time" attribute limits the value of "delta time" in the following frame to avoid undesirable side-effects from very large "delta time" values.')]),a("h3",[e._v("Additional game properties")]),a("p",[e._v("In the advanced settings page you can also view some additional game properties (read only).")]),a("table",{staticClass:"doc_table"},[a("tr",[a("th",[e._v("Attribute")]),a("th",[e._v("Description")])]),a("tr",[a("td",[e._v("Created at")]),a("td",[e._v("The date in which the game was created.")])]),a("tr",[a("td",[e._v("Updated at")]),a("td",[e._v("The date in which the game last updated.")])])])])])],1)},i=[],s=a("9ecf"),r={name:"AdvancedSettings",components:{DocumentationLayout:s["a"]}},o=r,u=a("2877"),d=Object(u["a"])(o,n,i,!1,null,"abb93f3c",null);t["default"]=d.exports},d033:function(e,t,a){"use strict";var n=a("ce5b"),i=a.n(n);i.a}}]);