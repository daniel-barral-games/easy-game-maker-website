(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gameeditor-snapshot~gameeditor-v0.5.0~gameeditor-v0.5.1"],{"0883":function(t,e){},"0932":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{width:"20px",height:"20px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"white"}},[a("path",{attrs:{d:"M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"}})])},r=[]},1148:function(t,e,a){"use strict";var n=a("a691"),r=a("1d80");t.exports="".repeat||function(t){var e=String(r(this)),a="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(a+=e);return a}},"1b4b":function(t,e,a){"use strict";var n=a("c849"),r=a("50df"),i=a("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"cd8d0e86",null);e["default"]=u.exports},"24dd":function(t,e){},"408a":function(t,e,a){var n=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"50df":function(t,e,a){"use strict";var n=a("64fd"),r=a.n(n);e["default"]=r.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),i="["+r+"]",u=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(u,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"64fd":function(t,e){},"78bb":function(t,e,a){"use strict";function n(t,e,a,n){window.gtag("event",t,{event_category:e,event_label:a,value:n})}e["a"]={registerEvent:n}},"7db0":function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").find,i=a("44d2"),u=a("ae40"),o="find",c=!0,s=u(o);o in[]&&Array(1)[o]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!s},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},"90ab":function(t,e,a){"use strict";var n=a("e369"),r=a("ff1c"),i=a("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"073f85b6",null);e["default"]=u.exports},"9c61":function(t,e){},a242:function(t,e){},a9e3:function(t,e,a){"use strict";var n=a("83ab"),r=a("da84"),i=a("94ca"),u=a("6eeb"),o=a("5135"),c=a("c6b6"),s=a("7156"),f=a("c04e"),l=a("d039"),g=a("7c73"),v=a("241c").f,d=a("06cf").f,h=a("9bf2").f,p=a("58a8").trim,m="Number",w=r[m],b=w.prototype,x=c(g(b))==m,A=function(t){var e,a,n,r,i,u,o,c,s=f(t,!1);if("string"==typeof s&&s.length>2)if(s=p(s),e=s.charCodeAt(0),43===e||45===e){if(a=s.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+s}for(i=s.slice(2),u=i.length,o=0;o<u;o++)if(c=i.charCodeAt(o),c<48||c>r)return NaN;return parseInt(i,n)}return+s};if(i(m,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var S,I=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof I&&(x?l((function(){b.valueOf.call(a)})):c(a)!=m)?s(new w(A(e)),a,I):A(e)},y=n?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;y.length>L;L++)o(w,S=y[L])&&!o(I,S)&&h(I,S,d(w,S));I.prototype=b,b.constructor=I,u(r,m,I)}},aad1:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticStyle:{"margin-top":"-3px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"20px",width:"20px",fill:"#ffffff"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M12 8V4l8 8-8 8v-4H4V8z"}})])},r=[]},aefd:function(t,e,a){"use strict";var n=a("0932"),r=a("e883"),i=a("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"97d3b2e4",null);e["default"]=u.exports},b680:function(t,e,a){"use strict";var n=a("23e7"),r=a("a691"),i=a("408a"),u=a("1148"),o=a("d039"),c=1..toFixed,s=Math.floor,f=function(t,e,a){return 0===e?a:e%2===1?f(t,e-1,a*t):f(t*t,e/2,a)},l=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},g=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));n({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,a,n,o,c=i(this),g=r(t),v=[0,0,0,0,0,0],d="",h="0",p=function(t,e){var a=-1,n=e;while(++a<6)n+=t*v[a],v[a]=n%1e7,n=s(n/1e7)},m=function(t){var e=6,a=0;while(--e>=0)a+=v[e],v[e]=s(a/t),a=a%t*1e7},w=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==v[t]){var a=String(v[t]);e=""===e?a:e+u.call("0",7-a.length)+a}return e};if(g<0||g>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(d="-",c=-c),c>1e-21)if(e=l(c*f(2,69,1))-69,a=e<0?c*f(2,-e,1):c/f(2,e,1),a*=4503599627370496,e=52-e,e>0){p(0,a),n=g;while(n>=7)p(1e7,0),n-=7;p(f(10,n,1),0),n=e-1;while(n>=23)m(1<<23),n-=23;m(1<<n),p(1,1),m(2),h=w()}else p(0,a),p(1<<-e,0),h=w()+u.call("0",g);return g>0?(o=h.length,h=d+(o<=g?"0."+u.call("0",g-o)+h:h.slice(0,o-g)+"."+h.slice(o-g))):h=d+h,h}})},ba45:function(t,e,a){"use strict";var n=a("0883"),r=a.n(n);e["default"]=r.a},c6c2:function(t,e,a){"use strict";var n=a("aad1"),r=a("e3ff"),i=a("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"1e075e21",null);e["default"]=u.exports},c849:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{width:"20px",height:"20px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"white"}},[a("path",{attrs:{d:"M8.71,7.71,11,5.41V15a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4A1,1,0,1,0,8.71,7.71ZM21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Z"}})])},r=[]},cea0:function(t,e,a){"use strict";var n=a("edff"),r=a("ba45"),i=a("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"2b6c389c",null);e["default"]=u.exports},d5a6:function(t,e,a){"use strict";a("96cf");var n=a("1da1"),r=a("bc3a"),i=a.n(r),u=0,o=0,c=new Date,s=new Date,f=0,l=0,g=5e3,v=2e5,d=2e5;function h(t){for(var e="",a=t.customAudios,n=0;n<a.length;n++){var r=a[n];null!=r.audioData&&(r.audioData=e)}for(var i=0;i<t.events.length;i++)for(var u=t.events[i],o=0;o<u.actions.length;o++){var c=u.actions[o],s=c.audio;null!=s&&null!=s.customAudio&&null!=s.customAudio.audioData&&(s.customAudio.audioData=e)}}function p(t){for(var e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NgYGD4DwABBAEAwS2OUAAAAABJRU5ErkJggg==",a=t.customImages,n=0;n<a.length;n++){var r=a[n];null!=r.imageData&&(r.imageData=e)}for(var i=0;i<t.customObjectTypes.length;i++){var u=t.customObjectTypes[i],o=u.image;null!=o&&null!=o.customImage&&null!=o.customImage.imageData&&(o.customImage.imageData=e)}for(var c=0;c<t.events.length;c++)for(var s=t.events[c],f=0;f<s.actions.length;f++){var l=s.actions[f],g=l.image;null!=g&&null!=g.customImage&&null!=g.customImage.imageData&&(g.customImage.imageData=e)}for(var v=0;v<t.levels.length;v++)for(var d=t.levels[v],h=0;h<d.initialObjects.length;h++){var p=d.initialObjects[h],m=p.objectType.image;null!=m&&null!=m.customImage&&null!=m.customImage.imageData&&(m.customImage.imageData=e)}for(var w=0;w<t.levels.length;w++){var b=t.levels[w],x=b.backgroundImage;null!=x&&null!=x.customImage&&null!=x.customImage.imageData&&(x.customImage.imageData=e)}}function m(t,e){return w.apply(this,arguments)}function w(){return w=Object(n["a"])(regeneratorRuntime.mark((function t(e,a){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(u++,n=new Date,r=n-c,!(r<f)){t.next=6;break}return t.abrupt("return");case 6:A(e,u,a,{maxJsonSize:v,apiPath:"playLogs"}),c=n,f+=g;case 9:case"end":return t.stop()}}),t)}))),w.apply(this,arguments)}function b(t,e){return x.apply(this,arguments)}function x(){return x=Object(n["a"])(regeneratorRuntime.mark((function t(e,a){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o++,n=new Date,r=n-s,!(r<l)){t.next=6;break}return t.abrupt("return");case 6:A(e,o,a,{maxJsonSize:d,apiPath:"exportLogs"}),s=n,l+=g;case 9:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function A(t,e,a,n){return S.apply(this,arguments)}function S(){return S=Object(n["a"])(regeneratorRuntime.mark((function t(e,a,n,r){var u,o,c,s,f,l,g,v,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:u=r.maxJsonSize,o=r.apiPath,c=e.util.decycle(e.gameParamsJson,void 0),s=JSON.stringify(c),f=s.length,f>u&&(p(c),h(c)),s=JSON.stringify(c),l="https://api.easygamemaker.com/",g=l+o,v={withCredentials:!0},d={json:s,num:a,success:n},i.a.post(g,d,v).then((function(t){})).catch((function(t){}));case 12:case"end":return t.stop()}}),t)}))),S.apply(this,arguments)}e["a"]={savePlay:m,saveExport:b}},ddb0:function(t,e,a){var n=a("da84"),r=a("fdbc"),i=a("e260"),u=a("9112"),o=a("b622"),c=o("iterator"),s=o("toStringTag"),f=i.values;for(var l in r){var g=n[l],v=g&&g.prototype;if(v){if(v[c]!==f)try{u(v,c,f)}catch(h){v[c]=f}if(v[s]||u(v,s,l),r[l])for(var d in i)if(v[d]!==i[d])try{u(v,d,i[d])}catch(h){v[d]=i[d]}}}},e369:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticStyle:{"margin-top":"-2px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#007bff",width:"24px",height:"24px"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}})])},r=[]},e3ff:function(t,e,a){"use strict";var n=a("9c61"),r=a.n(n);e["default"]=r.a},e883:function(t,e,a){"use strict";var n=a("a242"),r=a.n(n);e["default"]=r.a},edff:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticStyle:{"margin-top":"-3px",transform:"scale(-1,1)"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"20px",width:"20px",fill:"#ffffff"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M12 8V4l8 8-8 8v-4H4V8z"}})])},r=[]},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},ff1c:function(t,e,a){"use strict";var n=a("24dd"),r=a.n(n);e["default"]=r.a}}]);