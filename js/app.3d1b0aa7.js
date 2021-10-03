(function(e){function t(t){for(var a,r,c=t[0],i=t[1],u=t[2],l=0,p=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({about:"about",others:"others",sauce:"sauce"}[e]||e)+"."+{about:"13a735bb",others:"7e0f74b4",sauce:"faf1697a"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1,others:1,sauce:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about",others:"others",sauce:"sauce"}[e]||e)+"."+{about:"aa35bca3",others:"9735b08b",sauce:"aa35bca3"}[e]+".css",o=i.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],d.parentNode.removeChild(d),n(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:e.color,dark:"",dense:"",collapse:!0}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Navbar Logo",contain:"",src:"https://cdn.discordapp.com/avatars/427448982118334474/6b32fec4e537ebff6dd0a428f6b38cce.png",transition:"scale-transition",width:"55"}})],1),n("v-spacer")],1),n("v-main",[n("router-view")],1),n("v-alert",{attrs:{outlined:"",type:"warning",dense:"",border:"left"}},[e._v(" Made in Vue.js ")]),n("v-bottom-navigation",{attrs:{"background-color":e.color,dark:"",shift:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-btn",{attrs:{to:"about"}},[n("span",[e._v("About Me")]),n("v-icon",[e._v("mdi-account")])],1),n("v-btn",{attrs:{to:"/"}},[n("span",[e._v("Home")]),n("v-icon",[e._v("mdi-home")])],1),n("v-btn",{attrs:{to:"sauce"}},[n("span",[e._v("Sauce")]),n("v-icon",[e._v("mdi-book")])],1),n("v-btn",{attrs:{to:"others"}},[n("span",[e._v("Others")]),n("v-icon",[e._v("mdi-water")])],1),n("v-bottom-sheet",{attrs:{persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({},"v-btn",r,!1),a),[e._v(" Spotify "),n("v-icon",[e._v("mdi-music-box")])],1)]}}]),model:{value:e.sheet,callback:function(t){e.sheet=t},expression:"sheet"}},[n("v-sheet",{staticClass:"text-center",attrs:{height:"300px"}},[n("v-btn",{staticClass:"mt-6",attrs:{text:"",color:"error"},on:{click:function(t){e.sheet=!e.sheet}}},[e._v(" close ")]),n("iframe",{attrs:{src:"https://open.spotify.com/embed/playlist/1xJHqlxa9sEryQlGdXwIY8?theme=0",width:"100%",height:"80",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}}),n("iframe",{attrs:{src:"https://open.spotify.com/embed/playlist/6MLL089pnjC9T1vzXpWwHK",width:"100%",height:"80",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}})],1)],1)],1)],1)},o=[],s={name:"App",data:function(){return{value:1,active:!0,dialog:!1,notifications:!1,sound:!0,widgets:!1,sheet:!1}},computed:{color:function(){switch(this.value){case 0:return"purple";case 1:return"pink";case 2:return"#FF7F7FFF";case 3:return"#FFD8D8FF";default:return"pink"}}}},c=s,i=n("2877"),u=n("6544"),l=n.n(u),p=n("0798"),d=n("7496"),f=n("40dc"),v=n("b81c"),b=n("288c"),h=n("8336"),m=n("132d"),g=n("adda"),y=n("f6c4"),w=n("8dd9"),_=n("2fa4"),k=Object(i["a"])(c,r,o,!1,null,null,null),x=k.exports;l()(k,{VAlert:p["a"],VApp:d["a"],VAppBar:f["a"],VBottomNavigation:v["a"],VBottomSheet:b["a"],VBtn:h["a"],VIcon:m["a"],VImg:g["a"],VMain:y["a"],VSheet:w["a"],VSpacer:_["a"]});var C=n("f309");a["a"].use(C["a"]);var V=new C["a"]({theme:{dark:!0}}),O=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("cf05"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Welcome to Rin's Page ")]),a("p",{staticClass:"subheading font-weight-regular"},[e._v(" This page is my education page, "),a("br"),e._v("Am learning Vue.js"),a("br"),a("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[a("v-btn",e._b({attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",n,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" ")])],1)])],1)],1)},j=[],A={name:"Home",data:function(){return{snackbar:!1,text:"Opened link"}}},E=A,F=n("62ad"),P=n("a523"),B=n("0fd9"),T=n("2db4"),L=Object(i["a"])(E,S,j,!1,null,null,null),M=L.exports;l()(L,{VBtn:h["a"],VCol:F["a"],VContainer:P["a"],VImg:g["a"],VRow:B["a"],VSnackbar:T["a"]}),a["a"].use(O["a"]);var N=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/sauce",name:"Sauce",component:function(){return n.e("sauce").then(n.bind(null,"d0e5"))}},{path:"/Others",name:"Others",component:function(){return n.e("others").then(n.bind(null,"916b"))}}],H=new O["a"]({mode:"history",base:"/",routes:N}),I=H;a["a"].config.productionTip=!1,new a["a"]({vuetify:V,router:I,render:function(e){return e(x)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.757b706b.png"}});
//# sourceMappingURL=app.3d1b0aa7.js.map