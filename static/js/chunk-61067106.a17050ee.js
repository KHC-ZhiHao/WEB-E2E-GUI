(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61067106"],{aeb1:function(t,e,a){var o,r,n;(function(a,i){r=[],o=i,n="function"===typeof o?o.apply(e,r):o,void 0===n||(t.exports=n)})(0,(function(){return function t(e,a,o){var r,n,i=window,c="application/octet-stream",s=o||c,l=e,v=!a&&!o&&l,d=document.createElement("a"),p=function(t){return String(t)},u=i.Blob||i.MozBlob||i.WebKitBlob||p,m=a||"download";if(u=u.call?u.bind(i):Blob,"true"===String(this)&&(l=[l,s],s=l[0],l=l[1]),v&&v.length<2048&&(m=v.split("/").pop().split("?")[0],d.href=v,-1!==d.href.indexOf(v))){var f=new XMLHttpRequest;return f.open("GET",v,!0),f.responseType="blob",f.onload=function(e){t(e.target.response,m,c)},setTimeout((function(){f.send()}),0),f}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(l)){if(!(l.length>2096103.424&&u!==p))return navigator.msSaveBlob?navigator.msSaveBlob(j(l),m):$(l);l=j(l),s=l.type||c}else if(/([\x80-\xff])/.test(l)){var b=0,g=new Uint8Array(l.length),_=g.length;for(b;b<_;++b)g[b]=l.charCodeAt(b);l=new u([g],{type:s})}function j(t){var e=t.split(/[:;,]/),a=e[1],o="base64"==e[2]?atob:decodeURIComponent,r=o(e.pop()),n=r.length,i=0,c=new Uint8Array(n);for(i;i<n;++i)c[i]=r.charCodeAt(i);return new u([c],{type:a})}function $(t,e){if("download"in d)return d.href=t,d.setAttribute("download",m),d.className="download-js-link",d.innerHTML="downloading...",d.style.display="none",document.body.appendChild(d),setTimeout((function(){d.click(),document.body.removeChild(d),!0===e&&setTimeout((function(){i.URL.revokeObjectURL(d.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,c)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var a=document.createElement("iframe");document.body.appendChild(a),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,c)),a.src=t,setTimeout((function(){document.body.removeChild(a)}),333)}if(r=l instanceof u?l:new u([l],{type:s}),navigator.msSaveBlob)return navigator.msSaveBlob(r,m);if(i.URL)$(i.URL.createObjectURL(r),!0);else{if("string"===typeof r||r.constructor===p)try{return $("data:"+s+";base64,"+i.btoa(r))}catch(k){return $("data:"+s+","+encodeURIComponent(r))}n=new FileReader,n.onload=function(t){$(this.result)},n.readAsDataURL(r)}return!0}}))},d675:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grey lighten-3",staticStyle:{"min-height":"100vh"}},[a("ui-app-bar",{attrs:{title:"專案 - "+t.$.project.name,back:{name:"home"}}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({staticClass:"mr-2",attrs:{small:"",icon:""},on:{click:t.outputJS}},o),[a("v-icon",[t._v("mdi-language-javascript")])],1)]}}])},[a("span",[t._v("輸出Protractor專案")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({staticClass:"mr-2",attrs:{small:"",icon:""},on:{click:t.outputProject}},o),[a("v-icon",[t._v("mdi-location-exit")])],1)]}}])},[a("span",[t._v("輸出專案")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({staticClass:"mr-2",attrs:{small:"",icon:""},on:{click:function(e){t.$.dependencie=!0}}},o),[a("v-icon",[t._v("mdi-graph-outline")])],1)]}}])},[a("span",[t._v("npm依賴控管")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({staticClass:"mr-2",attrs:{small:"",icon:""},on:{click:function(e){t.$.variable=!0}}},o),[a("v-icon",[t._v("mdi-variable")])],1)]}}])},[a("span",[t._v("設定變數")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({staticClass:"mr-2",attrs:{small:"",icon:""},on:{click:function(e){return t.$router.push({name:"project.custombtn"})}}},o),[a("v-icon",[t._v("mdi-gamepad")])],1)]}}])},[a("span",[t._v("自定義按鈕")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({staticClass:"mr-2",attrs:{small:"",icon:"",color:t.$.removeMode?"red":void 0},on:{click:function(e){t.$.removeMode=!t.$.removeMode}}},o),[a("v-icon",[t._v("mdi-trash-can-outline")])],1)]}}])},[a("span",[t._v("刪除測試")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({attrs:{small:"",icon:""},on:{click:function(e){t.$.group=!0}}},o),[a("v-icon",[t._v("mdi-group")])],1)]}}])},[a("span",[t._v("建立分類")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({attrs:{small:"",icon:""},on:{click:function(e){return t.invokeTest()}}},o),[a("v-icon",[t._v("mdi-play")])],1)]}}])},[a("span",[t._v("運行所有測試")])])],1),0===t.$.project.specs.size?a("div",{staticClass:"text-center pt-5 subtitle-1 grey--text"},[a("div",[t._v("😥")]),a("div",[t._v("一個測試也沒有")])]):a("div",[t._l(t.$.project.groups.items,(function(e,o){return a("div",{key:o+"t",staticClass:"pa-5"},[a("div",{staticClass:"title"},[t._v(t._s(e.name))]),a("v-divider",{staticClass:"mt-3 mb-1"}),a("v-row",[t._l(t.$.project.specs.items,(function(o,r){return[o.group===e.id?a("v-col",{key:r,attrs:{cols:4}},[a("v-card",{staticClass:"pa-5",attrs:{to:t.$.removeMode?void 0:t.target(o)}},[a("v-row",{attrs:{align:"center"}},[a("div",{staticClass:"ml-3"},[t._v(t._s(o.name))]),a("v-spacer"),t.$.removeMode?a("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.remove(o.id)}}},[a("v-icon",[t._v("mdi-trash-can-outline")])],1):t._e()],1)],1)],1):t._e()]}))],2)],1)})),t.$.project.specs.views.hasNoCategory?a("div",{staticClass:"pa-5"},[a("div",{staticClass:"title"},[t._v("無分類")]),a("v-divider",{staticClass:"mt-3 mb-1"}),a("v-row",[t._l(t.$.project.specs.items,(function(e,o){return[t.$.project.groups.fetch(e.group)?t._e():a("v-col",{key:o,attrs:{cols:4}},[a("v-card",{staticClass:"pa-5",attrs:{to:t.$.removeMode?void 0:t.target(e)}},[a("v-row",{attrs:{align:"center"}},[a("div",{staticClass:"ml-3"},[t._v(t._s(e.name))]),a("v-spacer"),t.$.removeMode?a("v-btn",{attrs:{icon:""},on:{click:function(a){return a.stopPropagation(),t.remove(e.id)}}},[a("v-icon",[t._v("mdi-trash-can-outline")])],1):t._e()],1)],1)],1)]}))],2)],1):t._e()],2),a("v-dialog",{attrs:{"max-width":"800px",transition:"dialog-transition"},model:{value:t.$.variable,callback:function(e){t.$set(t.$,"variable",e)},expression:"$.variable"}},[a("self-variable",{attrs:{project:t.$.project}})],1),a("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.$.dependencie,callback:function(e){t.$set(t.$,"dependencie",e)},expression:"$.dependencie"}},[a("self-dependencie",{attrs:{project:t.$.project}})],1),a("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.$.group,callback:function(e){t.$set(t.$,"group",e)},expression:"$.group"}},[a("self-group",{attrs:{project:t.$.project}})],1),a("ui-select-spec",{ref:"selectSpecInvoke"}),a("ui-invoke",{ref:"invoke"}),a("ui-form",{ref:"createForm",attrs:{title:"建立測試"}},[a("v-text-field",{attrs:{label:"名稱",outlined:"",rules:t.$.alas.rules(["#ms.required"])},model:{value:t.$.createName,callback:function(e){t.$set(t.$,"createName",e)},expression:"$.createName"}}),a("v-select",{attrs:{outlined:"",items:t.$.project.groups.items,clearable:"","item-text":"name","item-value":"id",label:"分類"},model:{value:t.$.createGroup,callback:function(e){t.$set(t.$,"createGroup",e)},expression:"$.createGroup"}}),a("v-select",{attrs:{outlined:"",items:t.$.project.specs.items,clearable:"","item-text":"$v.typeAndName","return-object":"",label:"引用模板"},model:{value:t.$.createCopyTarget,callback:function(e){t.$set(t.$,"createCopyTarget",e)},expression:"$.createCopyTarget"}})],1),a("v-btn",{attrs:{fab:"",dark:"",fixed:"",right:"",bottom:"",color:"primary"},on:{click:t.create}},[a("v-icon",[t._v("mdi-plus")])],1)],1)},r=[],n=a("9ab4"),i=a("aeb1"),c=a.n(i),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("span",[t._v("分類")]),a("v-spacer"),a("v-btn",{attrs:{text:"",icon:""},on:{click:function(e){return t.project.groups.methods.sort()}}},[a("v-icon",[t._v("mdi-refresh")])],1)],1),a("v-divider",{staticClass:"mb-5 mt-1"}),a("v-card-text",[0===t.project.groups.size?a("div",{staticClass:"mt-1 body-2 grey--text"},[t._v("本專案沒有分類")]):t._e(),t._l(t.project.groups.items,(function(e,o){return a("v-row",{key:o+"t",staticClass:"mt-3 mx-0",attrs:{"hide-details":"","no-gutters":"",align:"center"}},[a("v-col",{staticClass:"mr-2",attrs:{cols:"5"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"",label:"名稱"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"group.name"}})],1),a("v-col",{staticClass:"mr-2",attrs:{cols:"5"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"",label:"優先級"},model:{value:e.level,callback:function(a){t.$set(e,"level",a)},expression:"group.level"}})],1),a("v-col",{attrs:{cols:"1"}},[a("v-btn",{attrs:{outlined:""},on:{click:function(a){return t.remove(e.id)}}},[t._v(" 刪除 ")])],1)],1)}))],2),a("v-btn",{staticClass:"mt-2",attrs:{tile:"",block:"",color:"primary"},on:{click:t.create}},[t._v("加入一個分類")])],1)},l=[],v=a("a6f4"),d=Object(v["c"])({props:{project:Object},setup(t){let e=e=>{t.project.groups.remove(e)},a=()=>{t.project.groups.write({name:"",level:0})};return{remove:e,create:a}}}),p=d,u=a("2877"),m=a("6544"),f=a.n(m),b=a("8336"),g=a("b0af"),_=a("99d9"),j=a("62ad"),$=a("ce7e"),k=a("132d"),y=a("0fd9"),C=a("2fa4"),h=a("8654"),x=Object(u["a"])(p,s,l,!1,null,null,null),w=x.exports;f()(x,{VBtn:b["a"],VCard:g["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:j["a"],VDivider:$["a"],VIcon:k["a"],VRow:y["a"],VSpacer:C["a"],VTextField:h["a"]});var V=a("0d09"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("ui-install",{ref:"installUI"}),a("v-card-title",{attrs:{"primary-title":""}},[t._v(" npm依賴套件 "),a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:t.install}},[t._v("安裝")])],1),a("v-divider",{staticClass:"mb-5 mt-1"}),a("v-card-text",[0===t.project.dependencies.size?a("div",{staticClass:"mt-1 body-2 grey--text"},[t._v("本專案沒有依賴套件")]):t._e(),t._l(t.project.dependencies.items,(function(e,o){return a("v-row",{key:o+"t",staticClass:"mt-3 mx-0",attrs:{"hide-details":"","no-gutters":"",align:"center"}},[a("v-col",{staticClass:"mr-2",attrs:{cols:"5"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"",label:"name"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"dependencie.name"}})],1),a("v-col",{staticClass:"mr-2",attrs:{cols:"5"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"",label:"version"},model:{value:e.version,callback:function(a){t.$set(e,"version",a)},expression:"dependencie.version"}})],1),a("v-col",{attrs:{cols:"1"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on;return[a("v-btn",t._g({attrs:{outlined:""},on:{click:function(a){return t.remove(e.id)}}},r),[t._v(" 刪除 ")])]}}],null,!0)},[a("span",[t._v("刪除依賴可能導致測試失敗")])])],1)],1)}))],2),a("v-btn",{staticClass:"mt-2",attrs:{tile:"",block:"",color:"primary"},on:{click:t.addDependencie}},[t._v("加入一個依賴")])],1)},T=[],O=Object(v["c"])({props:{project:Object},setup(t){let e=Object(v["g"])(null),a=Object(v["f"])({});Object(v["d"])(()=>{});let o=e=>{t.project.dependencies.remove(e)},r=()=>{e.value.open(t.project)},n=()=>{t.project.dependencies.write({name:""})};return{$:a,remove:o,install:r,installUI:e,addDependencie:n}}}),R=O,U=a("3a2f"),B=Object(u["a"])(R,S,T,!1,null,null,null),M=B.exports;f()(B,{VBtn:b["a"],VCard:g["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:j["a"],VDivider:$["a"],VRow:y["a"],VSpacer:C["a"],VTextField:h["a"],VTooltip:U["a"]});var N=a("b529"),A=Object(v["c"])({props:{},components:{"self-group":w,"self-variable":V["a"],"self-dependencie":M},setup(){let t=Object(v["f"])({alas:N["b"],project:N["d"].fetch("project"),createName:"",createGroup:"",createCopyTarget:null,variable:!1,group:!1,removeMode:!1,dependencie:!1}),e=Object(v["g"])(null),a=Object(v["g"])(null),o=Object(v["g"])(null),r=()=>Object(n["a"])(this,void 0,void 0,(function*(){yield t.project.$o.save.start(),c()(JSON.stringify(t.project.$v.output,null,4),`project-${t.project.name}.json`,"text/plain")})),i=()=>Object(n["a"])(this,void 0,void 0,(function*(){yield t.project.$o.save.start();let e=yield t.project.$m.zip();c()(e,`project-${t.project.name}.zip`,"text/plain")})),s=()=>{a.value.open(a=>Object(n["a"])(this,void 0,void 0,(function*(){yield t.project.$o.save.start(),e.value.play(a.map(t=>t.id))})))},l=t=>({name:"project.specs",params:{id:t.id}}),d=()=>{o.value.open(()=>{if(t.createCopyTarget){let e=t.createCopyTarget.$export();e.id=void 0,e.name=t.createName,e.group=t.createGroup,t.project.specs.write(e)}else t.project.specs.write({name:t.createName,group:t.createGroup})})},p=e=>{N["a"].confirm("確定刪除測試？",a=>{t.project.specs.remove(e),a()})};return{$:t,invoke:e,selectSpecInvoke:a,createForm:o,outputProject:r,outputJS:i,invokeTest:s,target:l,create:d,remove:p}}}),D=A,I=a("169a"),L=a("b974"),G=Object(u["a"])(D,o,r,!1,null,null,null);e["default"]=G.exports;f()(G,{VBtn:b["a"],VCard:g["a"],VCol:j["a"],VDialog:I["a"],VDivider:$["a"],VIcon:k["a"],VRow:y["a"],VSelect:L["a"],VSpacer:C["a"],VTextField:h["a"],VTooltip:U["a"]})}}]);