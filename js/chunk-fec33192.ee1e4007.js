(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fec33192"],{"096d":function(e,t,a){e.exports=a.p+"img/levels.ec9d5c92.png"},"24b6":function(e,t,a){"use strict";var n=a("51cd"),s=a.n(n);s.a},"29fa":function(e,t,a){"use strict";function n(e){for(var t=r(),a=l(t),n=0;n<a.length;n++){var s=a[n];if(s.id==e)return{previous:n>0?a[n-1]:null,next:n<a.length-1?a[n+1]:null}}return null}function s(){return[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"game-properties",name:"Game properties",url:"/docs/game-properties",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/levels",parentId:"documentation"},{id:"level-editor",name:"Level editor",url:"/docs/levels/level-editor",parentId:"levels"},{id:"object-types",name:"Object types",url:"/docs/object-types",parentId:"documentation"},{id:"behaviours",name:"Behaviours",url:"/docs/object-types/behaviours",parentId:"object-types"},{id:"animations",name:"Animations",url:"/docs/object-types/animations",parentId:"object-types"},{id:"resources",name:"Resources",url:"/docs/resources",parentId:"documentation"},{id:"images",name:"Images",url:"/docs/resources/images",parentId:"resources"},{id:"audios",name:"Audios",url:"/docs/resources/audios",parentId:"resources"},{id:"physics-engine",name:"Physics engine",url:"/docs/physics-engine",parentId:"documentation"},{id:"matter-js",name:"Matter.js",url:"/docs/physics-engine/matter-js",parentId:"physics-engine"},{id:"matter-js-constraints",name:"Matter.js constraints",url:"/docs/physics-engine/matter-js-constraints",parentId:"physics-engine"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"visual-script-actions",name:"Actions",url:"/docs/visual-scripts/actions",parentId:"visual-scripts"},{id:"visual-script-conditions",name:"Conditions",url:"/docs/visual-scripts/conditions",parentId:"visual-scripts"},{id:"visual-script-loops",name:"Loops",url:"/docs/visual-scripts/loops",parentId:"visual-scripts"},{id:"visual-script-comments",name:"Comments",url:"/docs/visual-scripts/comments",parentId:"visual-scripts"},{id:"expressions",name:"Expressions",url:"/docs/visual-scripts/expressions",parentId:"visual-scripts"},{id:"visual-script-functions",name:"Visual script functions",url:"/docs/visual-scripts/visual-script-functions",parentId:"visual-scripts"},{id:"global-variables",name:"Global variables",url:"/docs/global-variables",parentId:"documentation"},{id:"export",name:"Export",url:"/docs/export",parentId:"documentation"},{id:"import",name:"Import",url:"/docs/import",parentId:"documentation"},{id:"extensions",name:"Extensions",url:"/docs/extensions",parentId:"documentation"},{id:"neuroevolution",name:"Neuroevolution",url:"/docs/extensions/neuroevolution",parentId:"extensions"},{id:"advanced-settings",name:"Advanced settings",url:"/docs/advanced-settings",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"}]}function i(){return o("documentation")}function o(e){for(var t=s(),a=[],n=0;n<t.length;n++){var i=t[n];i.parentId==e&&a.push(i)}return a}function r(){for(var e=s(),t=[],a=0;a<e.length;a++){var n=e[a],i=o(n.id);n.children=i,"documentation"==n.parentId&&t.push(n)}return t}function l(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];t.push(n);var s=n.children;if(null!=s)for(var i=0;i<s.length;i++){var o=s[i];t.push(o)}}return t}t["a"]={listMenuItems:s,listDocumentationMenuItems:i,listDocumentationMenuItemsWithChildren:r,getPreviousAndNextMenuItems:n}},"2fbc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"div_breadcrumb"},[a("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(t){return a("li",{key:t.id,class:t.active?"breadcrumb-item active":"breadcrumb-item"},[t.active?e._e():a("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]),t.active?a("span",[e._v(e._s(t.name))]):e._e()])})),0)])])])},s=[],i=(a("b0c0"),a("ad29")),o=a("29fa"),r={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[]}},mounted:function(){this.pages=o["a"].listMenuItems();for(var e=i["a"].listGames(),t=0;t<e.length;t++){var a=e[t];this.pages.push({id:"example-game-"+a.slug,name:a.name,url:"/games/"+a.slug,parentId:"games"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(e){for(var t=0;t<this.pages.length;t++){var a=this.pages[t];if(a.id==e)return a}return null},buildItems:function(){var e=[],t=this.getPageById(this.pageId);if(null==t)return[];t.active=!0,e.push(t);var a=t.parentId,n=0;while(null!=a||n>=10){var s=this.getPageById(a);e.unshift(s),a=s.parentId,n++}return e}}},l=r,c=(a("9463"),a("2877")),u=Object(c["a"])(l,n,s,!1,null,"d9d29192",null);t["a"]=u.exports},"51cd":function(e,t,a){},7830:function(e,t,a){},"92df":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("DocumentationLayout",{attrs:{pageId:"levels"}},[n("h1",[e._v("Levels")]),n("br"),n("div",{staticClass:"documentationContent"},[n("h3",[e._v("What are levels?")]),n("p",[e._v("Each game contain one or more levels.")]),n("p",[e._v('Each level is a "scene" and contain a set of initial objects, a background and some other attributes like gravity and electric constant.')]),n("p",[e._v("Levels can also contain buttons, texts and level variables.")]),n("p",[e._v("At any point in time during the game, it will be running in one of the levels (and only one). Based on the game logic, you can jump from one level to another.")]),n("p",[e._v('For example, you can start at the level named "Title screen". When the player press a button it can go to a level named "Stage 01". And when player character dies, the game can go to level named "Game Over".')]),n("h3",[e._v("How to create a level")]),n("p",[e._v('To create a new level, select the "Levels" tab and click on the button "Add level".')]),n("p",[e._v("This will create a new level, with some default attributes.")]),n("p",[e._v("To add objects, texts and buttons to that level, go to the "),n("router-link",{attrs:{to:"/docs/levels/level-editor"}},[e._v("level editor")]),e._v(".")],1),n("h3",[e._v("Level properties")]),n("table",{staticClass:"doc_table"},[n("tr",[n("th",[e._v("Attribute")]),n("th",[e._v("Description")])]),n("tr",[n("td",[e._v("name")]),n("td",[e._v("The game name.")])]),n("tr",[n("td",[e._v("background type")]),n("td",[e._v("The level background can be an image or a solid color.")])]),n("tr",[n("td",[e._v("backgound color")]),n("td",[e._v('If background type is "solid color", you can configure that color using RGB (red, green, blue). Each color component (red, green, and blue) defines the intensity of the color with a value between 0 and 255.')])]),n("tr",[n("td",[e._v("background image")]),n("td",[e._v('If background type is "image", you can configure that image.')])]),n("tr",[n("td",[e._v("background image width")]),n("td",[e._v("The width of the background image.")])]),n("tr",[n("td",[e._v("background image height")]),n("td",[e._v("The height of the background image.")])]),n("tr",[n("td",[e._v("gravity")]),n("td",[e._v("The level gravity.")])]),n("tr",[n("td",[e._v("electric constant")]),n("td",[e._v('If level objects are of "Basic" physics engine and have electric change different than zero, the level electric constant will affect the force in which objects will attract or repel each other. Greater electric constant will result in greater forces.')])]),n("tr",[n("td",[e._v("center camera at object")]),n("td",[e._v("If you check this option, you can choose an object type for the camera to center automatically when playing the level.")])]),n("tr",[n("td",[e._v("apply gravitational force between objects")]),n("td",[e._v("If you check this option, objects will automatically attract each other, based on their mass.")])]),n("tr",[n("td",[e._v("gravitational constant")]),n("td",[e._v('If you check the option "apply gravitational force between objects", the level gravitational constant will affect the force in which objects will attract each other.')])])]),n("br"),n("br"),n("h3",[e._v("Level editor")]),n("p",[e._v("The level editor allows you to add initial objects, texts, buttons and constraints to the level.")]),n("p",[e._v("Learn more about the level editor in the "),n("router-link",{attrs:{to:"/docs/levels/level-editor"}},[e._v("level editor")]),e._v(" page.")],1),n("h3",[e._v("Level variables")]),n("p",[e._v("Level variables are variables associated to a specific level.")]),n("p",[e._v("You can create as many level variables as you want.")]),n("p",[e._v("When playing a game, every time you start a level, all the variables of that level are reset to their initial values. If you restart a level, the level variables are also reset.")]),n("p",[e._v("Level variables are used in "),n("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual scripts")]),e._v(" to process the logic of the level.")],1),n("p",[e._v("To create a level variable, follow these steps:")]),n("ol",[n("li",[e._v('Select the "Levels" tab.')]),n("li",[e._v('Select the level that you want (by clicking in the level name or in the "Edit" button).')]),n("li",[e._v('Select the "Level variables" tab.')]),n("li",[e._v('Click on the button "Add level variable".')]),n("li",[e._v('Click on the "edit" link.')]),n("li",[e._v("Choose a name for the variable, a type and an initial value.")]),n("li",[e._v('Click on the button "save changes".')])]),n("p",[e._v("If you need a variable that is not reset every time the level starts, you can use "),n("router-link",{attrs:{to:"/docs/global-variables"}},[e._v("global variables")]),e._v(" instead of level variables.")],1),n("h3",[e._v("Level scripts")]),n("p",[e._v("Each level has two "),n("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual scripts")]),e._v(":")],1),n("ul",[n("li",[e._v("On animation frame")]),n("li",[e._v("On level start")])]),n("p",[e._v("These level scripts contain the logic of the game level.")]),n("p",[e._v('The script "on level start" run only once, when the level start.')]),n("p",[e._v('The script "on animation frame" runs every frame (typically 60 times per second).')]),n("p",[e._v("Learn more about visual scripts in the "),n("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual scripts")]),e._v(" page.")],1),n("h3",[e._v("Changing from one level to another")]),n("p",[e._v('When you start playing a game, it will always start from the first level in the list of levels. You can reorder the levels using the "up" and "down" links in the list of levels at the "Levels" tab.')]),n("p",[e._v("During the game, you can go from one level to another. This is done using "),n("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual scripts")]),e._v('. To do that, in the "visual scripts editor", create an '),n("router-link",{attrs:{to:"/docs/visual-scripts/actions"}},[e._v("action")]),e._v(' of category "Level".')],1),n("p",[e._v("There are 3 different "),n("router-link",{attrs:{to:"/docs/visual-scripts/actions"}},[e._v("action")]),e._v(" types that allow you to change from one level to another:")],1),n("ul",[n("li",[e._v("Go to next level")]),n("li",[e._v("Go to previous level")]),n("li",[e._v("Go to level")])]),n("h3",[e._v("Examples")]),n("p",[e._v('For example, your game can have a level named "Title Screen" which can contain buttons "play", "hiscores" and "help".')]),n("div",{staticClass:"div_shadow"},[n("img",{attrs:{src:a("096d")}})]),n("br"),n("br"),n("p",[e._v('The level "Stage 01" can contain many initial objects: the player, enemies, coins, obstacles and bonus items.')]),n("p",[e._v('This level can also contain level variables "energy" and "time_left".')]),n("p",[e._v("Your level can also contain "),n("router-link",{attrs:{to:"/docs/visual-scripts"}},[e._v("visual script")]),e._v(" to check collision between the player and enemies, shoot bullets, remove enemies when they got hit by bullets, add score when player kill enemies and so on.")],1)])])],1)},s=[],i=a("9ecf"),o={name:"Levels",components:{DocumentationLayout:i["a"]}},r=o,l=a("2877"),c=Object(l["a"])(r,n,s,!1,null,"24fd2a08",null);t["default"]=c.exports},9463:function(e,t,a){"use strict";var n=a("9510"),s=a.n(n);s.a},9510:function(e,t,a){},"9ecf":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{attrs:{addMargin:!1}}),a("div",{staticClass:"parent"},[a("DocumentationLateralMenu",{attrs:{currentPageId:e.pageId}}),a("div",{staticClass:"documentationDivParent"},[a("Breadcrumb",{attrs:{pageId:e.pageId}}),a("div",[e._t("default"),a("br")],2),a("DocumentationFooter",{attrs:{pageId:e.pageId}}),a("div")],1)],1),a("Footer")],1)},s=[],i=a("0418"),o=a("fd2d"),r=a("2fbc"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"documentatioLateralMenu"},e._l(e.menuItems,(function(t){return a("div",{key:t.id},[a("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[a("span",{staticClass:"menu-link"},[e._v(e._s(t.name))])]),e._l(t.children,(function(t){return a("div",{key:t.id},[a("router-link",{class:t.id==e.currentPageId?"menu-item current-menu-item":"menu-item",attrs:{tag:"a",to:t.url}},[a("span",{staticClass:"menu-link",staticStyle:{"margin-left":"15px"}},[e._v(e._s(t.name))])])],1)}))],2)})),0)},c=[],u=a("29fa"),d={name:"DocumentationLateralMenu",components:{},props:{currentPageId:String},data:function(){return{menuItems:[]}},mounted:function(){this.menuItems=u["a"].listDocumentationMenuItemsWithChildren()},computed:{},methods:{}},v=d,m=(a("24b6"),a("2877")),p=Object(m["a"])(v,l,c,!1,null,"4deb2c60",null),h=p.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[null!=e.previous?a("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Previous: "),a("router-link",{attrs:{to:e.previous.url}},[e._v(e._s(e.previous.name))])],1):e._e(),null!=e.next?a("div",{staticClass:"documentationPreviousAndNext home"},[e._v(" Next: "),a("router-link",{attrs:{to:e.next.url}},[e._v(e._s(e.next.name))])],1):e._e(),null!=e.next||null!=e.previous?a("br"):e._e(),null!=e.next||null!=e.previous?a("br"):e._e(),a("div",{staticClass:"documentationSeeAlso home"},[e._v(" See also: "),a("br"),a("router-link",{attrs:{to:"/tutorials"}},[e._v("Tutorials")]),a("br"),a("a",{attrs:{target:"_blank",href:"https://www.youtube.com/@easygamemaker"}},[e._v("Video tutorials")]),a("br"),a("router-link",{attrs:{to:"/community"}},[e._v("Community")])],1)])},b=[],_={name:"DocumentationFooter",components:{},props:{pageId:String},data:function(){return{previous:null,next:null}},mounted:function(){var e=u["a"].getPreviousAndNextMenuItems(this.pageId);this.previous=e.previous,this.next=e.next},computed:{},methods:{}},f=_,y=(a("a0c6"),Object(m["a"])(f,g,b,!1,null,"40a41340",null)),I=y.exports,w={name:"Documentation",components:{Header:i["a"],Footer:o["a"],Breadcrumb:r["a"],DocumentationLateralMenu:h,DocumentationFooter:I},props:{pageId:String}},k=w,x=(a("d033"),Object(m["a"])(k,n,s,!1,null,"ce7abb88",null));t["a"]=x.exports},a0c6:function(e,t,a){"use strict";var n=a("7830"),s=a.n(n);s.a},ce5b:function(e,t,a){},d033:function(e,t,a){"use strict";var n=a("ce5b"),s=a.n(n);s.a}}]);