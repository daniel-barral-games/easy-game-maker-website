(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58cc7c31"],{"24b6":function(t,e,n){"use strict";var s=n("51cd"),a=n.n(s);a.a},"29fa":function(t,e,n){"use strict";function s(t){for(var e=o(),n=c(e),s=0;s<n.length;s++){var a=n[s];if(a.id==t)return{previous:s>0?n[s-1]:null,next:s<n.length-1?n[s+1]:null}}return null}function a(){return[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"game-properties",name:"Game properties",url:"/docs/game-properties",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/levels",parentId:"documentation"},{id:"level-editor",name:"Level editor",url:"/docs/levels/level-editor",parentId:"levels"},{id:"object-types",name:"Object types",url:"/docs/object-types",parentId:"documentation"},{id:"behaviours",name:"Behaviours",url:"/docs/object-types/behaviours",parentId:"object-types"},{id:"animations",name:"Animations",url:"/docs/object-types/animations",parentId:"object-types"},{id:"resources",name:"Resources",url:"/docs/resources",parentId:"documentation"},{id:"images",name:"Images",url:"/docs/resources/images",parentId:"resources"},{id:"audios",name:"Audios",url:"/docs/resources/audios",parentId:"resources"},{id:"physics-engine",name:"Physics engine",url:"/docs/physics-engine",parentId:"documentation"},{id:"matter-js",name:"Matter.js",url:"/docs/physics-engine/matter-js",parentId:"physics-engine"},{id:"matter-js-constraints",name:"Matter.js constraints",url:"/docs/physics-engine/matter-js-constraints",parentId:"physics-engine"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"visual-script-actions",name:"Actions",url:"/docs/visual-scripts/actions",parentId:"visual-scripts"},{id:"visual-script-conditions",name:"Conditions",url:"/docs/visual-scripts/conditions",parentId:"visual-scripts"},{id:"visual-script-loops",name:"Loops",url:"/docs/visual-scripts/loops",parentId:"visual-scripts"},{id:"visual-script-comments",name:"Comments",url:"/docs/visual-scripts/comments",parentId:"visual-scripts"},{id:"expressions",name:"Expressions",url:"/docs/visual-scripts/expressions",parentId:"visual-scripts"},{id:"visual-script-functions",name:"Visual script functions",url:"/docs/visual-scripts/visual-script-functions",parentId:"visual-scripts"},{id:"global-variables",name:"Global variables",url:"/docs/global-variables",parentId:"documentation"},{id:"export",name:"Export",url:"/docs/export",parentId:"documentation"},{id:"import",name:"Import",url:"/docs/import",parentId:"documentation"},{id:"extensions",name:"Extensions",url:"/docs/extensions",parentId:"documentation"},{id:"neuroevolution",name:"Neuroevolution",url:"/docs/extensions/neuroevolution",parentId:"extensions"},{id:"advanced-settings",name:"Advanced settings",url:"/docs/advanced-settings",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}function i(){return r("documentation")}function r(t){for(var e=a(),n=[],s=0;s<e.length;s++){var i=e[s];i.parentId==t&&n.push(i)}return n}function o(){for(var t=a(),e=[],n=0;n<t.length;n++){var s=t[n],i=r(s.id);s.children=i,"documentation"==s.parentId&&e.push(s)}return e}function c(t){for(var e=[],n=0;n<t.length;n++){var s=t[n];e.push(s);var a=s.children;if(null!=a)for(var i=0;i<a.length;i++){var r=a[i];e.push(r)}}return e}e["a"]={listMenuItems:a,listDocumentationMenuItems:i,listDocumentationMenuItemsWithChildren:o,getPreviousAndNextMenuItems:s}},"2fbc":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"div_breadcrumb"},[n("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(e){return n("li",{key:e.id,class:e.active?"breadcrumb-item active":"breadcrumb-item"},[e.active?t._e():n("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),e.active?n("span",[t._v(t._s(e.name))]):t._e()])})),0)])])])},a=[],i=(n("b0c0"),n("ad29")),r=n("29fa"),o={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[]}},mounted:function(){this.pages=r["a"].listMenuItems();for(var t=i["a"].listGames(),e=0;e<t.length;e++){var n=t[e];this.pages.push({id:"example-game-"+n.slug,name:n.name,url:"/games/"+n.slug,parentId:"games"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(t){for(var e=0;e<this.pages.length;e++){var n=this.pages[e];if(n.id==t)return n}return null},buildItems:function(){var t=[],e=this.getPageById(this.pageId);if(null==e)return[];e.active=!0,t.push(e);var n=e.parentId,s=0;while(null!=n||s>=10){var a=this.getPageById(n);t.unshift(a),n=a.parentId,s++}return t}}},c=o,u=(n("9463"),n("2877")),l=Object(u["a"])(c,s,a,!1,null,"d9d29192",null);e["a"]=l.exports},"51cd":function(t,e,n){},5608:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("DocumentationLayout",{attrs:{pageId:"physics-engine"}},[n("h1",[t._v("Physics engine")]),n("br"),n("div",{staticClass:"documentationContent"},[n("h3",[t._v("Types of physics engine")]),n("p",[t._v("EasyGameMaker has two types of physics engine: Basic and "),n("router-link",{attrs:{to:"/docs/physics-engine/matter-js"}},[t._v("Matter.js")]),t._v(".")],1),n("p",[t._v('The "Basic" physics engine is very basic and has only gravity, electric charge, and gravitational force between objects done automatically. Everything else must be done using '),n("router-link",{attrs:{to:"/docs/visual-scripts"}},[t._v("visual scripts")]),t._v(" or "),n("router-link",{attrs:{to:"/docs/object-types/behaviours"}},[t._v("object type behaviours")]),t._v(".")],1),n("p",[t._v('The "Matter.js" physics engine is much more powerful and has automatic collision detection and response, gravity, object rotation, elasticity, friction, air friction and '),n("router-link",{attrs:{to:"/docs/physics-engine/matter-js-constraints"}},[t._v("constraints")]),t._v(".")],1),n("table",{staticClass:"doc_table"},[n("tr",[n("th"),n("th",[t._v("Basic")]),n("th",[t._v("Matter.js")])]),n("tr",[n("td",[t._v("gravity")]),n("td",[t._v("yes")]),n("td",[t._v("yes")])]),n("tr",[n("td",[t._v("collision detection and response")]),n("td",[t._v("using visual scripts")]),n("td",[t._v("yes, automatic")])]),n("tr",[n("td",[t._v("collision shapes")]),n("td",[t._v("circle and retangle")]),n("td",[t._v("circle, retangle and polygon")])]),n("tr",[n("td",[t._v("object rotation")]),n("td",[t._v("no")]),n("td",[t._v("yes")])]),n("tr",[n("td",[t._v("elasticity")]),n("td",[t._v("no")]),n("td",[t._v("yes")])]),n("tr",[n("td",[t._v("friction")]),n("td",[t._v("no")]),n("td",[t._v("yes")])]),n("tr",[n("td",[t._v("air friction")]),n("td",[t._v("no")]),n("td",[t._v("yes")])]),n("tr",[n("td",[t._v("constraints")]),n("td",[t._v("no")]),n("td",[t._v("yes")])]),n("tr",[n("td",[t._v("support platformer behaviour")]),n("td",[t._v("yes")]),n("td",[t._v("no (you need to use visual scripts)")])])]),n("br"),n("br"),n("h3",[t._v("How to choose the physics engine type")]),n("p",[t._v('If you want to create simple platform games, like Sonic or Mario, the easiest option will be Basic physics engine, together with "Platformer" '),n("router-link",{attrs:{to:"/docs/object-types/behaviours"}},[t._v("behaviour")]),t._v('. If you want to create top down shooters, the easiest option will be Basic physics engine, together with "Keyboard movement" '),n("router-link",{attrs:{to:"/docs/object-types/behaviours"}},[t._v("behaviour")]),t._v(".")],1),n("p",[t._v("If you want to create physics games like Pinball, Angry Birds, Hill Climb Racing, People Playground, the best choice will be "),n("router-link",{attrs:{to:"/docs/physics-engine/matter-js"}},[t._v("Matter.js physics engine")]),t._v(". Matter.js will automatically handle collisions between objects. You can configure object elasticity (boucyness), friction (between objects), air friction and so on.")],1),n("p",[t._v("Learn more about Matter.js at the "),n("router-link",{attrs:{to:"/docs/physics-engine/matter-js"}},[t._v("Matter.js")]),t._v(" page.")],1)])])],1)},a=[],i=n("9ecf"),r={name:"PhysicsEngine",components:{DocumentationLayout:i["a"]}},o=r,c=n("2877"),u=Object(c["a"])(o,s,a,!1,null,"219f9a3c",null);e["default"]=u.exports},7830:function(t,e,n){},9463:function(t,e,n){"use strict";var s=n("9510"),a=n.n(s);a.a},9510:function(t,e,n){},"9ecf":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{addMargin:!1}}),n("div",{staticClass:"parent"},[n("DocumentationLateralMenu",{attrs:{currentPageId:t.pageId}}),n("div",{staticClass:"documentationDivParent"},[n("Breadcrumb",{attrs:{pageId:t.pageId}}),n("div",[t._t("default"),n("br")],2),n("DocumentationFooter",{attrs:{pageId:t.pageId}}),n("div")],1)],1),n("Footer")],1)},a=[],i=n("0418"),r=n("fd2d"),o=n("2fbc"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"documentatioLateralMenu"},t._l(t.menuItems,(function(e){return n("div",{key:e.id},[n("router-link",{class:e.id==t.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:e.url}},[n("span",{staticClass:"menu-link"},[t._v(t._s(e.name))])]),t._l(e.children,(function(e){return n("div",{key:e.id},[n("router-link",{class:e.id==t.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:e.url}},[n("span",{staticClass:"menu-link",staticStyle:{"margin-left":"15px"}},[t._v(t._s(e.name))])])],1)}))],2)})),0)},u=[],l=n("29fa"),d={name:"DocumentationLateralMenu",components:{},props:{currentPageId:String},data:function(){return{menuItems:[]}},mounted:function(){this.menuItems=l["a"].listDocumentationMenuItemsWithChildren()},computed:{},methods:{}},m=d,p=(n("24b6"),n("2877")),v=Object(p["a"])(m,c,u,!1,null,"4deb2c60",null),h=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[null!=t.previous?n("div",{staticClass:"documentationPreviousAndNext home"},[t._v(" Previous: "),n("router-link",{attrs:{to:t.previous.url}},[t._v(t._s(t.previous.name))])],1):t._e(),null!=t.next?n("div",{staticClass:"documentationPreviousAndNext home"},[t._v(" Next: "),n("router-link",{attrs:{to:t.next.url}},[t._v(t._s(t.next.name))])],1):t._e(),null!=t.next||null!=t.previous?n("br"):t._e(),null!=t.next||null!=t.previous?n("br"):t._e(),n("div",{staticClass:"documentationSeeAlso home"},[t._v(" See also: "),n("br"),n("router-link",{attrs:{to:"/tutorials"}},[t._v("Tutorials")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://www.youtube.com/@easygamemaker"}},[t._v("Video tutorials")]),n("br"),n("router-link",{attrs:{to:"/community"}},[t._v("Community")])],1)])},_=[],b={name:"DocumentationFooter",components:{},props:{pageId:String},data:function(){return{previous:null,next:null}},mounted:function(){var t=l["a"].getPreviousAndNextMenuItems(this.pageId);this.previous=t.previous,this.next=t.next},computed:{},methods:{}},f=b,y=(n("a0c6"),Object(p["a"])(f,g,_,!1,null,"40a41340",null)),I=y.exports,j={name:"Documentation",components:{Header:i["a"],Footer:r["a"],Breadcrumb:o["a"],DocumentationLateralMenu:h,DocumentationFooter:I},props:{pageId:String}},w=j,x=(n("d033"),Object(p["a"])(w,s,a,!1,null,"ce7abb88",null));e["a"]=x.exports},a0c6:function(t,e,n){"use strict";var s=n("7830"),a=n.n(s);a.a},ce5b:function(t,e,n){},d033:function(t,e,n){"use strict";var s=n("ce5b"),a=n.n(s);a.a}}]);