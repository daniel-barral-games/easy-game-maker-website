(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c70180ce"],{"0e5e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner-border",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[e._v("Loading...")])])}]},2375:function(e,t,n){"use strict";var a=n("0e5e"),s=n("9260"),i=n("2877"),r=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,"04361f22",null);t["default"]=r.exports},"29fa":function(e,t,n){"use strict";function a(e){for(var t=o(),n=l(t),a=0;a<n.length;a++){var s=n[a];if(s.id==e)return{previous:a>0?n[a-1]:null,next:a<n.length-1?n[a+1]:null}}return null}function s(){return[{id:"home",name:"Home",url:"/",parentId:null},{id:"games",name:"Games",url:"/games",parentId:"home"},{id:"examples",name:"Examples",url:"/examples",parentId:"home"},{id:"help",name:"Help",url:"/help",parentId:"home"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"help"},{id:"introduction",name:"Introduction",url:"/docs/introduction",parentId:"documentation"},{id:"game-properties",name:"Game properties",url:"/docs/game-properties",parentId:"documentation"},{id:"levels",name:"Levels",url:"/docs/levels",parentId:"documentation"},{id:"level-editor",name:"Level editor",url:"/docs/levels/level-editor",parentId:"levels"},{id:"object-types",name:"Object types",url:"/docs/object-types",parentId:"documentation"},{id:"behaviours",name:"Behaviours",url:"/docs/object-types/behaviours",parentId:"object-types"},{id:"animations",name:"Animations",url:"/docs/object-types/animations",parentId:"object-types"},{id:"resources",name:"Resources",url:"/docs/resources",parentId:"documentation"},{id:"images",name:"Images",url:"/docs/resources/images",parentId:"resources"},{id:"audios",name:"Audios",url:"/docs/resources/audios",parentId:"resources"},{id:"physics-engine",name:"Physics engine",url:"/docs/physics-engine",parentId:"documentation"},{id:"matter-js",name:"Matter.js",url:"/docs/physics-engine/matter-js",parentId:"physics-engine"},{id:"matter-js-constraints",name:"Matter.js constraints",url:"/docs/physics-engine/matter-js-constraints",parentId:"physics-engine"},{id:"visual-scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"visual-script-actions",name:"Actions",url:"/docs/visual-scripts/actions",parentId:"visual-scripts"},{id:"visual-script-conditions",name:"Conditions",url:"/docs/visual-scripts/conditions",parentId:"visual-scripts"},{id:"visual-script-loops",name:"Loops",url:"/docs/visual-scripts/loops",parentId:"visual-scripts"},{id:"visual-script-comments",name:"Comments",url:"/docs/visual-scripts/comments",parentId:"visual-scripts"},{id:"expressions",name:"Expressions",url:"/docs/visual-scripts/expressions",parentId:"visual-scripts"},{id:"visual-script-functions",name:"Visual script functions",url:"/docs/visual-scripts/visual-script-functions",parentId:"visual-scripts"},{id:"global-variables",name:"Global variables",url:"/docs/global-variables",parentId:"documentation"},{id:"export",name:"Export",url:"/docs/export",parentId:"documentation"},{id:"import",name:"Import",url:"/docs/import",parentId:"documentation"},{id:"extensions",name:"Extensions",url:"/docs/extensions",parentId:"documentation"},{id:"neuroevolution",name:"Neuroevolution",url:"/docs/extensions/neuroevolution",parentId:"extensions"},{id:"advanced-audio",name:"Advanced audio",url:"/docs/extensions/advanced-audio",parentId:"extensions"},{id:"advanced-settings",name:"Advanced settings",url:"/docs/advanced-settings",parentId:"documentation"},{id:"tutorials",name:"Tutorials",url:"/tutorials",parentId:"help"},{id:"how-to-create-a-platform-game",name:"How to create a platform game",url:"/tutorials/how-to-create-a-platform-game",parentId:"tutorials"},{id:"creating-a-top-down-shooter-game",name:"Creating a top down shooter game",url:"/tutorials/creating-a-top-down-shooter-game",parentId:"tutorials"},{id:"how-to-publish-your-game-on-itch-io",name:"How to publish your game on itch.io",url:"/tutorials/how-to-publish-your-game-on-itch-io",parentId:"tutorials"}]}function i(){return r("documentation")}function r(e){for(var t=s(),n=[],a=0;a<t.length;a++){var i=t[a];i.parentId==e&&n.push(i)}return n}function o(){for(var e=s(),t=[],n=0;n<e.length;n++){var a=e[n],i=r(a.id);a.children=i,"documentation"==a.parentId&&t.push(a)}return t}function l(e){for(var t=[],n=0;n<e.length;n++){var a=e[n];t.push(a);var s=a.children;if(null!=s)for(var i=0;i<s.length;i++){var r=s[i];t.push(r)}}return t}t["a"]={listMenuItems:s,listDocumentationMenuItems:i,listDocumentationMenuItemsWithChildren:o,getPreviousAndNextMenuItems:a}},"2fbc":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"div_breadcrumb"},[n("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},e._l(e.items,(function(t){return n("li",{key:t.id,class:t.active?"breadcrumb-item active":"breadcrumb-item"},[t.active?e._e():n("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]),t.active?n("span",[e._v(e._s(t.name))]):e._e()])})),0)])])])},s=[],i=(n("b0c0"),n("ad29")),r=n("92dc"),o=n("29fa"),l={name:"Breadcrumb",components:{},props:{pageId:String},data:function(){return{pages:[]}},mounted:function(){this.pages=o["a"].listMenuItems();for(var e=i["a"].listGames(),t=0;t<e.length;t++){var n=e[t];this.pages.push({id:"example-game-"+n.slug,name:n.name,url:"/games/"+n.slug,parentId:"games"})}for(var a=r["a"].listExamples(),s=0;s<a.length;s++){var l=a[s];this.pages.push({id:"example-"+l.slug,name:l.name,url:"/examples/"+l.slug,parentId:"examples"})}},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(e){for(var t=0;t<this.pages.length;t++){var n=this.pages[t];if(n.id==e)return n}return null},buildItems:function(){var e=[],t=this.getPageById(this.pageId);if(null==t)return[];t.active=!0,e.push(t);var n=t.parentId,a=0;while(null!=n||a>=10){var s=this.getPageById(n);e.unshift(s),n=s.parentId,a++}return e}}},u=l,c=(n("b650"),n("2877")),d=Object(c["a"])(u,a,s,!1,null,"1c7f9e99",null);t["a"]=d.exports},3870:function(e,t){},3890:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-div"},[n("Header"),null!=e.pageId?n("Breadcrumb",{attrs:{pageId:e.pageId}}):e._e(),n("h1",[e._v(e._s(e.exampleName))]),n("div",{staticClass:"game-editor-div"},[e.loading?n("div",[n("Spinner")],1):e._e(),e._m(0),n("div",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.restartGame()}}},[n("IconRestart"),e._v(" Restart")],1),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return e.editGame()}}},[n("IconEdit"),e._v(" Edit this example")],1)]),n("br"),n("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),e._m(1),n("br")]),n("div",{staticClass:"footer-div"},[n("Footer",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{linkTarget:"_blank"}})],1)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"flex-container-canvas"},[n("canvas",{staticClass:"item-box",staticStyle:{border:"1px solid #000000"},attrs:{id:"myCanvas",width:"600",height:"500"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[n("b",[e._v("More info")])]),n("p",[e._v("This example was created with EasyGameMaker.")]),n("p",[e._v('You can click on the button "Edit this example" above to see how it was made and also make some changes to experiment.')])])}],i=(n("99af"),n("b0c0"),n("ac1f"),n("1276"),n("78bb")),r=n("92dc"),o=n("f24e"),l=n("0418"),u=n("fd2d"),c=n("2375"),d=n("6ec5"),m=n("4905"),p=n("2fbc"),v={name:"Example",components:{Header:l["a"],Spinner:c["default"],IconRestart:d["default"],IconEdit:m["default"],Breadcrumb:p["a"],Footer:u["a"]},data:function(){return{exampleSlug:null,exampleName:null,templateVersion:null,shortDescription:null,htmlContent:null,pageId:null,loading:!0,vm:{}}},methods:{playGame:function(){this.vm.initGame(),this.registerGoogleAnalyticsEvent("PLAY")},restartGame:function(){this.vm.initGame(),this.registerGoogleAnalyticsEvent("RESTART")},editGame:function(){localStorage.setItem("_egm_example",this.exampleSlug),this.$router.push({path:"/create/".concat(this.templateVersion)})},registerGoogleAnalyticsEvent:function(e){var t="".concat(e,"_EXAMPLE_").concat(this.exampleSlug);t=t.toUpperCase(),i["a"].registerEvent(t,"engagement",null,null)},setCanvasSize:function(){document.getElementById("myCanvas").width=this.vm.gameParamsJson.canvasWidth,document.getElementById("myCanvas").height=this.vm.gameParamsJson.canvasHeight}},mounted:function(){var e=this.$route.path,t=e.split("/"),n=t[2],a=r["a"].findExampleBySlug(n);this.exampleSlug=a.slug,this.exampleName=a.name,this.templateVersion=a.engineVersion,this.shortDescription=a.shortDescription,this.htmlContent=a.htmlContent,this.pageId="example-"+a.slug;var s=this,i="";o["a"].loadEngine(this.templateVersion).then((function(){o["a"].loadMatterjs()})).then((function(){return r["a"].downloadExampleJsonBySlug(n)})).then((function(e){i=e;var t=function(e){console.log(e)},n=new EasyGameMakerLibrary.ActionTemplateController("https://www.easygamemaker.com/resources/");n.onGameError=t,s.vm=n,s.loading=!1,s.vm.setGameJson(i),s.vm.setIsAutoSaveEnabled(!1),s.setCanvasSize(),s.playGame()}))},destroyed:function(){this.vm.removeEventListeners()}},h=v,f=(n("c755"),n("2877")),g=Object(f["a"])(h,a,s,!1,null,null,null);t["default"]=g.exports},4905:function(e,t,n){"use strict";var a=n("b4e0"),s=n("55ce"),i=n("2877"),r=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,"00a9ef7d",null);t["default"]=r.exports},"516f":function(e,t,n){},"55ce":function(e,t,n){"use strict";var a=n("3870"),s=n.n(a);t["default"]=s.a},"6ec5":function(e,t,n){"use strict";var a=n("c040"),s=n("a5ff"),i=n("2877"),r=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,"547eaf40",null);t["default"]=r.exports},"78bb":function(e,t,n){"use strict";function a(e,t,n,a){window.gtag("event",e,{event_category:t,event_label:n,value:a})}t["a"]={registerEvent:a}},9260:function(e,t,n){"use strict";var a=n("ee63"),s=n.n(a);t["default"]=s.a},"9edd":function(e,t,n){},a5ff:function(e,t,n){"use strict";var a=n("cae9"),s=n.n(a);t["default"]=s.a},b4e0:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticStyle:{"margin-top":"-4px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"20px",height:"20px"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}})])},s=[]},b650:function(e,t,n){"use strict";var a=n("9edd"),s=n.n(a);s.a},c040:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticStyle:{"margin-top":"-4px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"20px",height:"20px"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}})])},s=[]},c755:function(e,t,n){"use strict";var a=n("516f"),s=n.n(a);s.a},cae9:function(e,t){},ee63:function(e,t){}}]);