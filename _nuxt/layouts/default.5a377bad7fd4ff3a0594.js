webpackJsonp([2],{DLCH:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"nuxt-content"}},[e("NavBar",{attrs:{ingame:this.isInGame}}),e("main",[e("nuxt")],1)],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},GLTl:function(t,e,a){"use strict";var n=a("LSqA"),o=a("Y3xP"),i=!1;var s=function(t){i||a("nKSb")},r=a("VU/8")(n.a,o.a,!1,s,null,null);r.options.__file="components/NavBar.vue",e.a=r.exports},"JV+Y":function(t,e,a){var n=a("SA2c");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("05a0d06e",n,!1)},LSqA:function(t,e,a){"use strict";var n=a("Dd8w"),o=a.n(n),i=a("NYxO"),s=a("ZJ2w");e.a={computed:o()({},Object(i.mapState)(["teslaMode"])),methods:o()({toggleTeslaMode:function(){this.teslaMode?this.disableTeslaMode():this.enableTeslaMode()},showQRCode:function(){this.$root.$emit("bv::show::modal","qrModal")}},Object(i.mapMutations)({enableTeslaMode:s.ENABLE_TESLA_MODE,disableTeslaMode:s.DISABLE_TESLA_MODE})),props:{ingame:{type:Boolean,default:!1}}}},Ma2J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("qRci"),o=a("DLCH"),i=!1;var s=function(t){i||a("JV+Y")},r=a("VU/8")(n.a,o.a,!1,s,null,null);r.options.__file="layouts/default.vue",e.default=r.exports},PD5w:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".hidden-on-top,.navbar-expand-md .navbar-collapse.hidden-on-top{display:none!important}",""])},SA2c:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-box-sizing:border-box;box-sizing:border-box}body,html{height:100%}#__layout,#__nuxt,#nuxt-content{height:100%;position:relative}main{height:100%;padding-top:56px}",""])},Y3xP:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"success",fixed:"top"}},[a("b-navbar-brand",{attrs:{to:{name:"index"}}},[t._v("CivBG Support")]),a("b-navbar-toggle",{class:{"hidden-on-top":!t.ingame},attrs:{target:"nav_collapse"}}),a("b-collapse",{class:{"hidden-on-top":!t.ingame},attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{on:{click:t.toggleTeslaMode}},[t._v("テスラの効果を切り替える ["+t._s(t.teslaMode?"ON":"OFF")+"]")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{href:"https://hobbyjapan.co.jp/civ/",target:"_blank"}},[t._v("ホビジャパ訂正")]),a("b-nav-item",{attrs:{href:"http://vivit-jc.hatenablog.com/entry/2013/09/17/060839",target:"_blank"}},[t._v("エラッタ（前半）")]),a("b-nav-item",{attrs:{href:"http://vivit-jc.hatenablog.com/entry/2013/09/26/224115",target:"_blank"}},[t._v("エラッタ（後半）")]),a("b-nav-item",{on:{click:t.showQRCode}},[t._v("QRを表示")])],1)],1)],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},nKSb:function(t,e,a){var n=a("PD5w");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("0d294edf",n,!1)},qRci:function(t,e,a){"use strict";var n=a("fZjL"),o=a.n(n),i=a("GLTl");e.a={computed:{isInGame:function(){return"game"===this.$route.name&&!!o()(this.$route.query).length>0}},components:{NavBar:i.a}}}});