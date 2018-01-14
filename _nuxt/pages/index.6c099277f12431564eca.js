webpackJsonp([1],{"+ptz":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"container"},[i("div",[i("h1",{staticClass:"title"},[t._v("\n      CivBG Support\n    ")]),i("h2",{staticClass:"subtitle"},[t._v("\n      manage players' tech-tree\n    ")]),i("div",{staticClass:"buttons"},[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.newGameModal",modifiers:{newGameModal:!0}}],attrs:{size:"lg",variant:"primary"}},[t._v("\n        ゲームを開始する\n      ")])],1)]),i("new-game-modal",{attrs:{id:"newGameModal"},on:{ok:t.handleOk}})],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("osuu"),r=i("+ptz"),o=!1;var s=function(t){o||i("QNc/")},a=i("VU/8")(n.a,r.a,!1,s,null,null);a.options.__file="pages/index.vue",e.default=a.exports},"5zde":function(t,e,i){i("zQR9"),i("qyJz"),t.exports=i("FeBl").Array.from},Gu7T:function(t,e,i){"use strict";e.__esModule=!0;var n,r=i("c/Tr"),o=(n=r)&&n.__esModule?n:{default:n};e.default=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return(0,o.default)(t)}},"QNc/":function(t,e,i){var n=i("hvcb");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("3ff7982d",n,!1)},"c/Tr":function(t,e,i){t.exports={default:i("5zde"),__esModule:!0}},fBQ2:function(t,e,i){"use strict";var n=i("evD5"),r=i("X8DO");t.exports=function(t,e,i){e in t?n.f(t,e,r(0,i)):t[e]=i}},flBc:function(t,e,i){"use strict";var n=i("gXdf"),r=i("k5dm"),o=i("VU/8")(n.a,r.a,!1,null,null,null);o.options.__file="components/NewGameModal.vue",e.a=o.exports},gXdf:function(t,e,i){"use strict";var n=i("Dd8w"),r=i.n(n),o=i("Gu7T"),s=i.n(o),a=i("NYxO"),l=i("QcAg"),c=["RED","GREEN","BLUE","YELLOW","PURPLE"].map(function(t){return{id:t,name:t}});e.a={created:function(){this.players.length>0&&(this.civilizations=[].concat(s()(this.players.map(function(t){return t.civilization})),s()(new Array(5-this.players.length).fill(null))),this.colors=[].concat(s()(this.players.map(function(t){return t.color})),s()(new Array(5-this.players.length).fill(null))))},data:function(){return{civilizations:new Array(5).fill(null),colors:new Array(5).fill(null)}},computed:r()({validCivilizations:function(){return this.civilizations.filter(this.isValid)},validColors:function(){return this.colors.filter(this.isValid)},isReady:function(){var t=this;return this.validCivilizations.length===this.validColors.length&&this.civilizations.filter(function(e,i){return t.isValid(e)&&t.isValid(t.colors[i])}).length>=2}},Object(a.mapState)(["players"])),methods:{isValid:function(t){return t&&""!==t},restCivilizationsFor:function(t){return this.restItems(t,l.a,this.civilizations)},restColorsFor:function(t){return this.restItems(t,c,this.colors)},restItems:function(t,e,i){var n=i.filter(this.isValid);return[].concat(s()(e.map(function(t){return{value:t.id,text:t.name}}).filter(function(e){return-1===n.indexOf(e.value)||e.value===i[t]})))},handleOk:function(){var t=this;this.$emit("ok",this.validCivilizations.map(function(e,i){return{civilization:e,color:t.validColors[i]}}))}},props:{id:{type:String,required:!0}}}},hvcb:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".container{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:80px;font-size:5rem;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:32px;font-size:2rem;color:#526488;word-spacing:5px;padding-bottom:15px}.buttons{padding-top:15px}",""])},k5dm:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{attrs:{id:t.id,title:"ゲームの開始","ok-title":"開始","cancel-title":"キャンセル",centered:"","ok-disabled":!t.isReady},on:{ok:t.handleOk}},[i("p",[t._v("プレイヤーの文明とカラーを選んでください。")]),t._l(5,function(e){return i("b-form-group",{key:e,attrs:{"label-cols":2,label:e+"人目",horizontal:""}},[i("b-form-row",[i("b-col",[i("b-form-select",{attrs:{options:t.restCivilizationsFor(e-1)},model:{value:t.civilizations[e-1],callback:function(i){t.$set(t.civilizations,e-1,i)},expression:"civilizations[i - 1]"}},[i("template",{slot:"first"},[i("option",{attrs:{disabled:e<=2},domProps:{value:null}},[t._v("---")])])],2)],1),i("b-col",[i("b-form-select",{attrs:{options:t.restColorsFor(e-1)},model:{value:t.colors[e-1],callback:function(i){t.$set(t.colors,e-1,i)},expression:"colors[i - 1]"}},[i("template",{slot:"first"},[i("option",{attrs:{disabled:e<=2},domProps:{value:null}},[t._v("---")])])],2)],1)],1)],1)})],2)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},osuu:function(t,e,i){"use strict";var n=i("Xxa5"),r=i.n(n),o=i("exGp"),s=i.n(o),a=i("Dd8w"),l=i.n(a),c=i("flBc"),u=i("NYxO"),f=i("qesP");e.a={methods:l()({handleOk:function(){var t=s()(r.a.mark(function t(e){var i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.startGame(e);case 2:i=t.sent,this.$router.push("game/?"+i);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},Object(u.mapActions)({startGame:f.START_GAME})),components:{NewGameModal:c.a}}},qyJz:function(t,e,i){"use strict";var n=i("+ZMJ"),r=i("kM2E"),o=i("sB3e"),s=i("msXi"),a=i("Mhyx"),l=i("QRG4"),c=i("fBQ2"),u=i("3fs2");r(r.S+r.F*!i("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,r,f,d=o(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,h=void 0!==m,y=0,b=u(d);if(h&&(m=n(m,v>2?arguments[2]:void 0,2)),void 0==b||p==Array&&a(b))for(i=new p(e=l(d.length));e>y;y++)c(i,y,h?m(d[y],y):d[y]);else for(f=b.call(d),i=new p;!(r=f.next()).done;y++)c(i,y,h?s(f,m,[r.value,y],!0):r.value);return i.length=y,i}})}});