(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["playgame-v0.0.23"],{"097b":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("Header"),null!=e.errorMessage?t("div",[t("br"),t("div",{staticClass:"alert alert-danger",staticStyle:{display:"inline-block"},attrs:{role:"alert"}},[e._v(e._s(e.errorMessage))])]):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:e.vm.isPlayingGame,expression:"vm.isPlayingGame"}]},[t("canvas",{staticStyle:{border:"1px solid #000000"},attrs:{id:"myCanvas",width:"600",height:"500"}})]),e.loading?t("div",[t("Spinner")],1):e._e(),t("h1",[e._v(e._s(e.vm.gameName))]),t("div",[e._v(e._s(e.vm.gameDescription))]),t("div",[e._v("Created by: "+e._s(e.gameDetails.userId))]),t("div",[e._v("Created: "+e._s(e.gameDetails.createdDate))]),t("div",[e._v("Updated: "+e._s(e.gameDetails.updatedDate))]),e.vm.game?t("div",[e._v("Engine version: "+e._s(e.vm.game.templateVersion.S))]):e._e()],1)},i=[],s=t("bc3a"),r=t.n(s),l=t("0418"),m=t("2375"),d=t("f24e"),v={name:"PlayGame",components:{Header:l["a"],Spinner:m["default"]},methods:{getGame:function(e){var a="https://api.easygamemaker.com/",t=a+"games/"+e,n={};return r.a.get(t,n)}},data:function(){return{game:null,loading:!1,errorMessage:null,info:null,sessionId:null,gameDetails:{name:"",userId:"",createdDate:"",updatedDate:""},vm:{isPlayingGame:!1,oldLevel:null,newLevelVariable:null}}},mounted:function(){var e=this;e.loading=!0;var a=this.$route.params.id;this.getGame(a).then((function(a){e.game=a.data.Item;var t=e.game.templateVersion.S;return Object(d["c"])(t)})).then((function(){e.vm=new ActionTemplateController,e.vm.setGame(e.game),e.vm.initGame(),e.loading=!1,e.gameDetails.userId=e.vm.game.userId.S,e.gameDetails.createdDate=e.vm.game.createdDate.S,e.gameDetails.updatedDate=e.vm.game.updatedDate.S}))}},o=v,g=t("2877"),u=Object(g["a"])(o,n,i,!1,null,"8ea30076",null);a["default"]=u.exports}}]);
//# sourceMappingURL=playgame-v0.0.23.44b56688.js.map