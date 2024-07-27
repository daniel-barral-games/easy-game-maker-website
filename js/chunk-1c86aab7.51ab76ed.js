(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c86aab7"],{"24b6":function(t,e,n){"use strict";var a=n("51cd"),i=n.n(a);i.a},"29fa":function(t,e,n){"use strict";function a(t){for(var e=o(),n=u(e),a=0;a<n.length;a++){var i=n[a];if(i.id==t)return{previous:a>0?n[a-1]:null,next:a<n.length-1?n[a+1]:null}}return null}function i(){return[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"examples",name:"Examples",url:"/examples",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"game-properties",name:"Game properties",url:"/docs/game-properties",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/levels",parentId:"documentation"},{id:"level-editor",name:"Level editor",url:"/docs/levels/level-editor",parentId:"levels"},{id:"object-types",name:"Object types",url:"/docs/object-types",parentId:"documentation"},{id:"behaviours",name:"Behaviours",url:"/docs/object-types/behaviours",parentId:"object-types"},{id:"animations",name:"Animations",url:"/docs/object-types/animations",parentId:"object-types"},{id:"resources",name:"Resources",url:"/docs/resources",parentId:"documentation"},{id:"images",name:"Images",url:"/docs/resources/images",parentId:"resources"},{id:"audios",name:"Audios",url:"/docs/resources/audios",parentId:"resources"},{id:"physics-engine",name:"Physics engine",url:"/docs/physics-engine",parentId:"documentation"},{id:"matter-js",name:"Matter.js",url:"/docs/physics-engine/matter-js",parentId:"physics-engine"},{id:"matter-js-constraints",name:"Matter.js constraints",url:"/docs/physics-engine/matter-js-constraints",parentId:"physics-engine"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"visual-script-actions",name:"Actions",url:"/docs/visual-scripts/actions",parentId:"visual-scripts"},{id:"visual-script-conditions",name:"Conditions",url:"/docs/visual-scripts/conditions",parentId:"visual-scripts"},{id:"visual-script-loops",name:"Loops",url:"/docs/visual-scripts/loops",parentId:"visual-scripts"},{id:"visual-script-comments",name:"Comments",url:"/docs/visual-scripts/comments",parentId:"visual-scripts"},{id:"expressions",name:"Expressions",url:"/docs/visual-scripts/expressions",parentId:"visual-scripts"},{id:"visual-script-functions",name:"Visual script functions",url:"/docs/visual-scripts/visual-script-functions",parentId:"visual-scripts"},{id:"global-variables",name:"Global variables",url:"/docs/global-variables",parentId:"documentation"},{id:"export",name:"Export",url:"/docs/export",parentId:"documentation"},{id:"import",name:"Import",url:"/docs/import",parentId:"documentation"},{id:"extensions",name:"Extensions",url:"/docs/extensions",parentId:"documentation"},{id:"neuroevolution",name:"Neuroevolution",url:"/docs/extensions/neuroevolution",parentId:"extensions"},{id:"advanced-audio",name:"Advanced audio",url:"/docs/extensions/advanced-audio",parentId:"extensions"},{id:"advanced-settings",name:"Advanced settings",url:"/docs/advanced-settings",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"},{id:"how-to-publish-your-game-on-itch-io",name:"How to publish your game on itch.io",url:"/tutorials/how-to-publish-your-game-on-itch-io",parentId:"tutorials"}]}function s(){return r("documentation")}function r(t){for(var e=i(),n=[],a=0;a<e.length;a++){var s=e[a];s.parentId==t&&n.push(s)}return n}function o(){for(var t=i(),e=[],n=0;n<t.length;n++){var a=t[n],s=r(a.id);a.children=s,"documentation"==a.parentId&&e.push(a)}return e}function u(t){for(var e=[],n=0;n<t.length;n++){var a=t[n];e.push(a);var i=a.children;if(null!=i)for(var s=0;s<i.length;s++){var r=i[s];e.push(r)}}return e}e["a"]={listMenuItems:i,listDocumentationMenuItems:s,listDocumentationMenuItemsWithChildren:o,getPreviousAndNextMenuItems:a}},"2fbc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"div_breadcrumb"},[n("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(e){return n("li",{key:e.id,class:e.active?"breadcrumb-item active":"breadcrumb-item"},[e.active?t._e():n("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),e.active?n("span",[t._v(t._s(e.name))]):t._e()])})),0)])])])},i=[],s=(n("b0c0"),n("ad29")),r=n("92dc"),o=n("29fa"),u={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[]}},mounted:function(){this.pages=o["a"].listMenuItems();for(var t=s["a"].listGames(),e=0;e<t.length;e++){var n=t[e];this.pages.push({id:"example-game-"+n.slug,name:n.name,url:"/games/"+n.slug,parentId:"games"})}for(var a=r["a"].listExamples(),i=0;i<a.length;i++){var u=a[i];this.pages.push({id:"example-"+u.slug,name:u.name,url:"/examples/"+u.slug,parentId:"examples"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(t){for(var e=0;e<this.pages.length;e++){var n=this.pages[e];if(n.id==t)return n}return null},buildItems:function(){var t=[],e=this.getPageById(this.pageId);if(null==e)return[];e.active=!0,t.push(e);var n=e.parentId,a=0;while(null!=n||a>=10){var i=this.getPageById(n);t.unshift(i),n=i.parentId,a++}return t}}},c=u,d=(n("b650"),n("2877")),l=Object(d["a"])(c,a,i,!1,null,"1c7f9e99",null);e["a"]=l.exports},"315d":function(t,e,n){t.exports=n.p+"img/animations.4120af54.png"},"51cd":function(t,e,n){},"712c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("DocumentationLayout",{attrs:{pageId:"animations"}},[a("h1",[t._v("Animations")]),a("br"),a("div",{staticClass:"documentationContent"},[a("p",[t._v("Each "),a("router-link",{attrs:{to:"/docs/object-types"}},[t._v("object type")]),t._v(" can have one or more animations.")],1),a("p",[t._v("An animation is a sequence of animation frames (images).")]),a("p",[t._v('To create animations, select the object type that you want, select the "Animations" tab, and then click the button "Add animation". Then, add the animation frames by clicking button "Add frame" and selecting individual images.')]),a("br"),a("div",{staticClass:"div_shadow"},[a("img",{attrs:{src:n("315d")}})]),a("br"),a("p",[t._v('If you don\'t add any animation for an object type, objects of this type will be rendered with a static image: the default image, defined in the "Properties" tab.')]),a("p",[t._v('You can set an initial animation for objects of the type. If you don\'t set any initial animation, objects will be rendered initially with the default image, defined in the "Properties" tab.')]),a("p",[t._v("During the game, objects can change animations at any time. You can change the object current animation using "),a("router-link",{attrs:{to:"/docs/visual-scripts"}},[t._v("visual scripts")]),t._v(". In the Visual Scripts Editor, create an "),a("router-link",{attrs:{to:"/docs/visual-scripts/actions"}},[t._v("action")]),t._v(' of category "Object" and type "Set object animation", then choose the object and animation that you want.')],1)])])],1)},i=[],s=n("9ecf"),r={name:"Animations",components:{DocumentationLayout:s["a"]}},o=r,u=n("2877"),c=Object(u["a"])(o,a,i,!1,null,"3473f977",null);e["default"]=c.exports},7830:function(t,e,n){},"9ecf":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{addMargin:!1}}),n("div",{staticClass:"parent"},[n("DocumentationLateralMenu",{attrs:{currentPageId:t.pageId}}),n("div",{staticClass:"documentationDivParent"},[n("Breadcrumb",{attrs:{pageId:t.pageId}}),n("div",[t._t("default"),n("br")],2),n("DocumentationFooter",{attrs:{pageId:t.pageId}}),n("div")],1)],1),n("Footer")],1)},i=[],s=n("0418"),r=n("fd2d"),o=n("2fbc"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"documentatioLateralMenu"},t._l(t.menuItems,(function(e){return n("div",{key:e.id},[n("router-link",{class:e.id==t.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:e.url}},[n("span",{staticClass:"menu-link"},[t._v(t._s(e.name))])]),t._l(e.children,(function(e){return n("div",{key:e.id},[n("router-link",{class:e.id==t.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:e.url}},[n("span",{staticClass:"menu-link",staticStyle:{"margin-left":"15px"}},[t._v(t._s(e.name))])])],1)}))],2)})),0)},c=[],d=n("29fa"),l={name:"DocumentationLateralMenu",components:{},props:{currentPageId:String},data:function(){return{menuItems:[]}},mounted:function(){this.menuItems=d["a"].listDocumentationMenuItemsWithChildren()},computed:{},methods:{}},m=l,p=(n("24b6"),n("2877")),v=Object(p["a"])(m,u,c,!1,null,"4deb2c60",null),h=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[null!=t.previous?n("div",{staticClass:"documentationPreviousAndNext home"},[t._v(" Previous: "),n("router-link",{attrs:{to:t.previous.url}},[t._v(t._s(t.previous.name))])],1):t._e(),null!=t.next?n("div",{staticClass:"documentationPreviousAndNext home"},[t._v(" Next: "),n("router-link",{attrs:{to:t.next.url}},[t._v(t._s(t.next.name))])],1):t._e(),null!=t.next||null!=t.previous?n("br"):t._e(),null!=t.next||null!=t.previous?n("br"):t._e(),n("div",{staticClass:"documentationSeeAlso home"},[t._v(" See also: "),n("br"),n("router-link",{attrs:{to:"/tutorials"}},[t._v("Tutorials")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://www.youtube.com/@easygamemaker"}},[t._v("Video tutorials")]),n("br"),n("router-link",{attrs:{to:"/community"}},[t._v("Community")])],1)])},f=[],b={name:"DocumentationFooter",components:{},props:{pageId:String},data:function(){return{previous:null,next:null}},mounted:function(){var t=d["a"].getPreviousAndNextMenuItems(this.pageId);this.previous=t.previous,this.next=t.next},computed:{},methods:{}},I=b,_=(n("a0c6"),Object(p["a"])(I,g,f,!1,null,"40a41340",null)),y=_.exports,x={name:"Documentation",components:{Header:s["a"],Footer:r["a"],Breadcrumb:o["a"],DocumentationLateralMenu:h,DocumentationFooter:y},props:{pageId:String}},j=x,w=(n("d033"),Object(p["a"])(j,a,i,!1,null,"ce7abb88",null));e["a"]=w.exports},"9edd":function(t,e,n){},a0c6:function(t,e,n){"use strict";var a=n("7830"),i=n.n(a);i.a},b650:function(t,e,n){"use strict";var a=n("9edd"),i=n.n(a);i.a},ce5b:function(t,e,n){},d033:function(t,e,n){"use strict";var a=n("ce5b"),i=n.n(a);i.a}}]);