(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-067baed8"],{"20ae":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("DocumentationLayout",{attrs:{pageId:"export"}},[n("h1",[t._v("Export")]),n("br"),n("div",{staticClass:"documentationContent"},[n("h2",[t._v("Export game to HTML")]),n("p",[t._v("You can export your games to HTML if you want to download a standalone playable version of your game.")]),n("p",[t._v('To export you game to HTML, click on the button "Export", and then click on the button "Export to HTML".')]),n("p",[t._v("When you export to HTML, a ZIP file will be created. Download the ZIP file and extract its contents.")]),n("p",[t._v('Open the file "index.html" to play the game.')]),n("p",[t._v("The exported game can be played locally or on a server.")]),n("p",[t._v('If you upload your game to a server, include the "resources" folder together with the "index.html" file.')]),n("h2",[t._v("Export game to JSON")]),n("p",[t._v("Export your game to JSON if you want to save your game to continue creating it later.")]),n("p",[t._v('To export to JSON, click on the button "Export" and then, in the "Export to JSON" section, click on the button "Download JSON".')]),n("p",[t._v("Save the JSON file in your machine. When you want to continue creating the game, you can "),n("router-link",{attrs:{to:"/docs/import"}},[t._v("import")]),t._v(" it and continue creating.")],1)])])],1)},r=[],o=n("9ecf"),s={name:"Export",components:{DocumentationLayout:o["a"]}},i=s,u=n("2877"),c=Object(u["a"])(i,a,r,!1,null,"3cedbb1a",null);e["default"]=c.exports},"24b6":function(t,e,n){"use strict";var a=n("51cd"),r=n.n(a);r.a},"29fa":function(t,e,n){"use strict";function a(t){for(var e=i(),n=u(e),a=0;a<n.length;a++){var r=n[a];if(r.id==t)return{previous:a>0?n[a-1]:null,next:a<n.length-1?n[a+1]:null}}return null}function r(){return[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"game-properties",name:"Game properties",url:"/docs/game-properties",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/levels",parentId:"documentation"},{id:"level-editor",name:"Level editor",url:"/docs/levels/level-editor",parentId:"levels"},{id:"object-types",name:"Object types",url:"/docs/object-types",parentId:"documentation"},{id:"behaviours",name:"Behaviours",url:"/docs/object-types/behaviours",parentId:"object-types"},{id:"animations",name:"Animations",url:"/docs/object-types/animations",parentId:"object-types"},{id:"resources",name:"Resources",url:"/docs/resources",parentId:"documentation"},{id:"images",name:"Images",url:"/docs/resources/images",parentId:"resources"},{id:"audios",name:"Audios",url:"/docs/resources/audios",parentId:"resources"},{id:"physics-engine",name:"Physics engine",url:"/docs/physics-engine",parentId:"documentation"},{id:"matter-js",name:"Matter.js",url:"/docs/physics-engine/matter-js",parentId:"physics-engine"},{id:"matter-js-constraints",name:"Matter.js constraints",url:"/docs/physics-engine/matter-js-constraints",parentId:"physics-engine"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"visual-script-actions",name:"Actions",url:"/docs/visual-scripts/actions",parentId:"visual-scripts"},{id:"visual-script-conditions",name:"Conditions",url:"/docs/visual-scripts/conditions",parentId:"visual-scripts"},{id:"visual-script-loops",name:"Loops",url:"/docs/visual-scripts/loops",parentId:"visual-scripts"},{id:"visual-script-comments",name:"Comments",url:"/docs/visual-scripts/comments",parentId:"visual-scripts"},{id:"expressions",name:"Expressions",url:"/docs/visual-scripts/expressions",parentId:"visual-scripts"},{id:"visual-script-functions",name:"Visual script functions",url:"/docs/visual-scripts/visual-script-functions",parentId:"visual-scripts"},{id:"global-variables",name:"Global variables",url:"/docs/global-variables",parentId:"documentation"},{id:"export",name:"Export",url:"/docs/export",parentId:"documentation"},{id:"import",name:"Import",url:"/docs/import",parentId:"documentation"},{id:"extensions",name:"Extensions",url:"/docs/extensions",parentId:"documentation"},{id:"neuroevolution",name:"Neuroevolution",url:"/docs/extensions/neuroevolution",parentId:"extensions"},{id:"advanced-settings",name:"Advanced settings",url:"/docs/advanced-settings",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}function o(){return s("documentation")}function s(t){for(var e=r(),n=[],a=0;a<e.length;a++){var o=e[a];o.parentId==t&&n.push(o)}return n}function i(){for(var t=r(),e=[],n=0;n<t.length;n++){var a=t[n],o=s(a.id);a.children=o,"documentation"==a.parentId&&e.push(a)}return e}function u(t){for(var e=[],n=0;n<t.length;n++){var a=t[n];e.push(a);var r=a.children;if(null!=r)for(var o=0;o<r.length;o++){var s=r[o];e.push(s)}}return e}e["a"]={listMenuItems:r,listDocumentationMenuItems:o,listDocumentationMenuItemsWithChildren:i,getPreviousAndNextMenuItems:a}},"2fbc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"div_breadcrumb"},[n("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(e){return n("li",{key:e.id,class:e.active?"breadcrumb-item active":"breadcrumb-item"},[e.active?t._e():n("a",{attrs:{href:e.url}},[t._v(t._s(e.name))]),e.active?n("span",[t._v(t._s(e.name))]):t._e()])})),0)])])])},r=[],o=(n("b0c0"),n("ad29")),s=n("29fa"),i={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[]}},mounted:function(){this.pages=s["a"].listMenuItems();for(var t=o["a"].listGames(),e=0;e<t.length;e++){var n=t[e];this.pages.push({id:"example-game-"+n.slug,name:n.name,url:"/games/"+n.slug,parentId:"games"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(t){for(var e=0;e<this.pages.length;e++){var n=this.pages[e];if(n.id==t)return n}return null},buildItems:function(){var t=[],e=this.getPageById(this.pageId);if(null==e)return[];e.active=!0,t.push(e);var n=e.parentId,a=0;while(null!=n||a>=10){var r=this.getPageById(n);t.unshift(r),n=r.parentId,a++}return t}}},u=i,c=(n("9463"),n("2877")),l=Object(c["a"])(u,a,r,!1,null,"d9d29192",null);e["a"]=l.exports},"51cd":function(t,e,n){},7830:function(t,e,n){},9463:function(t,e,n){"use strict";var a=n("9510"),r=n.n(a);r.a},9510:function(t,e,n){},"9ecf":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{addMargin:!1}}),n("div",{staticClass:"parent"},[n("DocumentationLateralMenu",{attrs:{currentPageId:t.pageId}}),n("div",{staticClass:"documentationDivParent"},[n("Breadcrumb",{attrs:{pageId:t.pageId}}),n("div",[t._t("default"),n("br")],2),n("DocumentationFooter",{attrs:{pageId:t.pageId}}),n("div")],1)],1),n("Footer")],1)},r=[],o=n("0418"),s=n("fd2d"),i=n("2fbc"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"documentatioLateralMenu"},t._l(t.menuItems,(function(e){return n("div",{key:e.id},[n("router-link",{class:e.id==t.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:e.url}},[n("span",{staticClass:"menu-link"},[t._v(t._s(e.name))])]),t._l(e.children,(function(e){return n("div",{key:e.id},[n("router-link",{class:e.id==t.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:e.url}},[n("span",{staticClass:"menu-link",staticStyle:{"margin-left":"15px"}},[t._v(t._s(e.name))])])],1)}))],2)})),0)},c=[],l=n("29fa"),d={name:"DocumentationLateralMenu",components:{},props:{currentPageId:String},data:function(){return{menuItems:[]}},mounted:function(){this.menuItems=l["a"].listDocumentationMenuItemsWithChildren()},computed:{},methods:{}},m=d,p=(n("24b6"),n("2877")),v=Object(p["a"])(m,u,c,!1,null,"4deb2c60",null),h=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[null!=t.previous?n("div",{staticClass:"documentationPreviousAndNext home"},[t._v(" Previous: "),n("router-link",{attrs:{to:t.previous.url}},[t._v(t._s(t.previous.name))])],1):t._e(),null!=t.next?n("div",{staticClass:"documentationPreviousAndNext home"},[t._v(" Next: "),n("router-link",{attrs:{to:t.next.url}},[t._v(t._s(t.next.name))])],1):t._e(),null!=t.next||null!=t.previous?n("br"):t._e(),null!=t.next||null!=t.previous?n("br"):t._e(),n("div",{staticClass:"documentationSeeAlso home"},[t._v(" See also: "),n("br"),n("router-link",{attrs:{to:"/tutorials"}},[t._v("Tutorials")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://www.youtube.com/@easygamemaker"}},[t._v("Video tutorials")]),n("br"),n("router-link",{attrs:{to:"/community"}},[t._v("Community")])],1)])},f=[],I={name:"DocumentationFooter",components:{},props:{pageId:String},data:function(){return{previous:null,next:null}},mounted:function(){var t=l["a"].getPreviousAndNextMenuItems(this.pageId);this.previous=t.previous,this.next=t.next},computed:{},methods:{}},b=I,_=(n("a0c6"),Object(p["a"])(b,g,f,!1,null,"40a41340",null)),x=_.exports,y={name:"Documentation",components:{Header:o["a"],Footer:s["a"],Breadcrumb:i["a"],DocumentationLateralMenu:h,DocumentationFooter:x},props:{pageId:String}},w=y,k=(n("d033"),Object(p["a"])(w,a,r,!1,null,"ce7abb88",null));e["a"]=k.exports},a0c6:function(t,e,n){"use strict";var a=n("7830"),r=n.n(a);r.a},ce5b:function(t,e,n){},d033:function(t,e,n){"use strict";var a=n("ce5b"),r=n.n(a);r.a}}]);