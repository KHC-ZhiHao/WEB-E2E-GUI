(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85560ecc"],{"6fdc":function(e,t,a){},d7d6:function(e,t,a){"use strict";var s=a("6fdc"),n=a.n(s);n.a},e9c4:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.$.spec?a("div",{staticClass:"grey lighten-3",staticStyle:{"min-height":"100vh"}},[a("ui-app-bar",{attrs:{title:"測試 - "+e.$.spec.name,back:{name:"project.overview"}}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({staticClass:"mr-2",attrs:{small:"",icon:""},on:{click:function(t){e.$.variable=!0}}},s),[a("v-icon",[e._v("mdi-variable")])],1)]}}],null,!1,1057100871)},[a("span",[e._v("設定變數")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({attrs:{small:"",icon:""},on:{click:function(t){return e.invokeTest()}}},s),[a("v-icon",[e._v("mdi-play")])],1)]}}],null,!1,1578736239)},[a("span",[e._v("運行測試")])])],1),a("v-btn",{attrs:{fab:"",dark:"",fixed:"",right:"",bottom:"",color:"primary"},on:{click:e.createStep}},[a("v-icon",[e._v("mdi-plus")])],1),a("div",{staticClass:"pa-5"},[a("v-row",{staticClass:"mx-0",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"4"}},[a("v-select",{staticClass:"mb-4",attrs:{outlined:"",items:e.$.project.groups.items,clearable:"","hide-details":"","item-text":"name","item-value":"id",label:"分類"},model:{value:e.$.spec.group,callback:function(t){e.$set(e.$.spec,"group",t)},expression:"$.spec.group"}})],1),a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{staticClass:"mb-4",attrs:{label:"名子","hide-details":"",outlined:""},model:{value:e.$.spec.name,callback:function(t){e.$set(e.$.spec,"name",t)},expression:"$.spec.name"}})],1)],1),a("v-select",{staticClass:"mb-4",attrs:{outlined:"",items:e.specs,"hide-details":"",clearable:"","item-text":"name","item-value":"id",label:"繼承對象"},model:{value:e.$.spec.parent,callback:function(t){e.$set(e.$.spec,"parent",t)},expression:"$.spec.parent"}}),a("v-toolbar",{attrs:{dense:"",elevation:"1",color:"cyan lighten-5"}},[a("span",[e._v("說明")]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[a("v-icon",e._g(e._b({},"v-icon",n,!1),s),[e._v("mdi-help-circle-outline")])]}}],null,!1,2718131089)},[a("span",[e._v("你可以在這裡紀錄或說明整個測試過程，採用Makedown格式，在輸出檔案時也會連同說明一起輸出。")])])],1),a("markdown-editor",{staticClass:"mb-3",attrs:{height:"250px"},model:{value:e.$.spec.desc,callback:function(t){e.$set(e.$.spec,"desc",t)},expression:"$.spec.desc"}}),e._l(e.$.spec.steps.items,(function(t,s){return a("div",{key:t.name+s},[a("v-toolbar",{attrs:{dense:"",elevation:"1",color:"cyan lighten-5"}},[a("v-toolbar-title",[e._v(e._s(t.name))]),a("v-spacer"),a("v-btn",{staticClass:"mx-1",attrs:{icon:"",small:""},on:{click:function(a){return e.updateStep(t)}}},[a("v-icon",[e._v("mdi-square-edit-outline")])],1),a("v-btn",{staticClass:"mx-1",attrs:{icon:"",small:""},on:{click:function(a){return e.removeStep(t.id)}}},[a("v-icon",[e._v("mdi-delete")])],1),e.canPasteStep?a("v-btn",{staticClass:"mx-1",attrs:{icon:"",small:""},on:{click:function(t){return e.pasteStep({spec:e.$.spec,index:s+1})}}},[a("v-icon",[e._v("mdi-content-paste")])],1):e._e(),a("v-btn",{staticClass:"mx-1",attrs:{icon:"",small:""},on:{click:function(a){return e.copyStep(t)}}},[a("v-icon",[e._v("mdi-content-copy")])],1),a("v-btn",{staticClass:"mx-1",attrs:{icon:"",small:""},on:{click:function(t){return e.stepIndexUp(s)}}},[a("v-icon",[e._v("mdi-chevron-down")])],1),a("v-btn",{staticClass:"mx-1",attrs:{icon:"",small:""},on:{click:function(t){return e.stepIndexDown(s)}}},[a("v-icon",[e._v("mdi-chevron-up")])],1)],1),a("div",{staticClass:"py-4"},[0===t.templates.size?a("v-btn",{attrs:{outlined:"",block:""},on:{click:function(a){return e.openCreateTemplate(t,-1)}}},[e._v(" 建立第一個模板 ")]):e._e(),e._l(t.templates.items,(function(s,n){return a("self-template",{key:n+"t",ref:"templates",refInFor:!0,staticClass:"draggable-template",attrs:{step:t,index:n,template:s},on:{add:e.openCreateTemplate,help:e.openHelp,write:e.openWrite}})}))],2)],1)})),e.canPasteStep?a("v-btn",{attrs:{block:"",light:""},on:{click:function(t){return e.pasteStep({spec:e.$.spec,index:e.$.spec.steps.length})}}},[e._v(" 貼上步驟 ")]):e._e()],2),a("ui-form",{ref:"create",attrs:{title:"加入步驟"}},[a("v-text-field",{attrs:{rules:e.$.alas.rules(["#ms.required"]),label:"名稱",outlined:""},model:{value:e.$.createName,callback:function(t){e.$set(e.$,"createName",t)},expression:"$.createName"}})],1),a("ui-form",{ref:"update",attrs:{title:"更新步驟","confirm-name":"更新"}},[a("v-text-field",{attrs:{rules:e.$.alas.rules(["#ms.required"]),label:"名稱",outlined:""},model:{value:e.$.renameName,callback:function(t){e.$set(e.$,"renameName",t)},expression:"$.renameName"}})],1),a("ui-invoke",{ref:"invoke"}),a("v-dialog",{attrs:{"max-width":"800px"},model:{value:e.$.variable,callback:function(t){e.$set(e.$,"variable",t)},expression:"$.variable"}},[a("self-variable",{attrs:{project:e.$.project}})],1),e.$.write?a("v-card",{staticStyle:{position:"fixed",bottom:"0",width:"100vw","z-index":"100"}},[a("v-card-title",[e._v(" 輸出程式碼 "),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:e.copyCode}},[a("v-icon",[e._v("mdi-content-copy")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.$.write=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),a("v-divider"),a("codemirror",{attrs:{options:{mode:"text/javascript",readOnly:!0,lineNumbers:!0,line:!0,lineWrapping:!0}},model:{value:e.$.writeContent,callback:function(t){e.$set(e.$,"writeContent",t)},expression:"$.writeContent"}})],1):e._e(),a("self-help",{ref:"help"}),a("self-temp-btn",{ref:"createTemplate",on:{add:e.openTemplateEdit}})],1):e._e()},n=[],l=a("9ab4"),i=a("5339"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.$.help,callback:function(t){e.$set(e.$,"help",t)},expression:"$.help"}},[e.$.template?a("v-card",[a("v-card-title",[e._v(e._s(e.$.core.templates[e.$.template.name].btnText))]),a("p",{staticClass:"body-2 px-5 mx-1 grey--text"},[e._v(e._s(e.$.core.templates[e.$.template.name].info))]),a("v-divider",{staticClass:"mb-4"}),a("v-card-text",[a("div",{domProps:{innerHTML:e._s(e.$.content)}})])],1):e._e()],1)},r=[],c=a("a6f4"),p=Object(c["c"])({props:{},setup(){let e=Object(c["f"])({core:i["a"],help:!1,content:"",template:null}),t=t=>{let a=i["a"].templates[t.name].help;e.template=t,e.content=a||"無說明",e.help=!0};return{$:e,open:t}}}),d=p,m=a("2877"),v=a("6544"),u=a.n(v),b=a("b0af"),f=a("99d9"),$=a("169a"),g=a("ce7e"),_=Object(m["a"])(d,o,r,!1,null,null,null),x=_.exports;u()(_,{VCard:b["a"],VCardText:f["b"],VCardTitle:f["c"],VDialog:$["a"],VDivider:g["a"]});var h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{staticClass:"temp-btn-list",attrs:{scrollable:""},model:{value:e.$.dialog,callback:function(t){e.$set(e.$,"dialog",t)},expression:"$.dialog"}},[a("v-card",[a("v-card-title",[a("span",[e._v("新增模板")]),a("v-spacer"),a("span",{staticClass:"caption"},[e._v(e._s(e.$.info))])],1),a("v-divider",{staticClass:"mb-4 mt-1"}),a("v-card-text",[e._l(e.$.core.types,(function(t){return a("div",{key:t,staticClass:"mb-3"},[a("div",{staticStyle:{"font-size":"18px"}},[e._v(e._s(e.getTypeName(t)))]),e._l(e.$.core.templates,(function(s,n){return a("span",{key:n},[t===s.type?a("v-btn",{staticClass:"mt-2 mr-2",attrs:{dark:"",color:s.color},on:{mouseenter:function(t){e.$.info=s.info},mouseleave:function(t){e.$.info=""},click:function(t){return e.addTemplate(n,s)}}},[e._v(" "+e._s(s.btnText)+" ")]):e._e()],1)})),"custom"===t?a("v-btn",{staticClass:"mt-2 mr-2",attrs:{dark:"",to:{name:"project.custombtn"}}},[e._v(" 新增自訂按鈕 ")]):e._e()],2)})),e.$.copy.templates.length>0?a("div",{staticClass:"mb-3"},[a("div",{staticClass:"mb-3",staticStyle:{"font-size":"18px"}},[e._v("剪貼簿")]),e._l(e.$.copy.templates,(function(t,s){return a("v-toolbar",{key:t.id+"key",staticClass:"elevation-1",attrs:{dense:""}},[a("v-card",{attrs:{width:"5px",height:"25px",color:e.$.core.templates[t.name].color}}),a("span",{staticClass:"ml-3"},[e._v(e._s(e.$.core.templates[t.name].display(t.props)))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.removeTemplate(s)}}},[a("v-icon",[e._v("mdi-trash-can-outline")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.addPasteTemplate(s)}}},[a("v-icon",[e._v("mdi-content-paste")])],1)],1)}))],2):e._e()],2)],1)],1)},y=[],k=a("6c47"),w=a("b529"),C=Object(c["c"])({props:{},setup(e,t){let a=new k["a"](t),s=Object(c["f"])({core:i["a"],alas:w["b"],copy:w["d"].fetch("copy"),info:"",step:null,index:null,dialog:!1}),n=(e,t)=>{s.step=e,s.index=t,s.dialog=!0},l=e=>"action"===e?"動作":"system"===e?"系統":"verify"===e?"驗證":"engineer"===e?"開發人員專用":"custom"===e?"自訂":e,o=(e,t)=>{let n={};for(let a in t.props)n[a]=t.props[a].default;s.dialog=!1;let l=w["b"].make("project","template").$init({name:e,props:n});s.step.templates.once("$writeSuccess",()=>a.emit("add",l)),s.step.templates.write(l,{insert:s.index+1})},r=e=>{s.copy.$m.pasteTemplate({step:s.step,insert:s.index,index:e}),s.dialog=!1},p=e=>{s.copy.$m.removeTemplate(e)};return{$:s,open:n,getTypeName:l,addTemplate:o,addPasteTemplate:r,removeTemplate:p}}}),T=C,j=a("8336"),V=a("132d"),O=a("2fa4"),S=a("71d9"),N=Object(m["a"])(T,h,y,!1,null,null,null),E=N.exports;u()(N,{VBtn:j["a"],VCard:b["a"],VCardText:f["b"],VCardTitle:f["c"],VDialog:$["a"],VDivider:g["a"],VIcon:V["a"],VSpacer:O["a"],VToolbar:S["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:!e.$.draging,expression:"!$.draging"}],ref:"main",attrs:{id:"template"}},[a("v-card",{staticClass:"px-4",class:e.$.edit?"pt-4 pb-5":"",style:e.$.edit?"border: 1px solid cyan":"",attrs:{light:"",draggable:!e.$.edit},on:{dragstart:e.dragStart,dragend:e.dragEnd}},[a("v-row",{staticClass:"px-3 py-1",attrs:{align:"center"}},[a("v-card",{attrs:{color:e.coreTemplate.color,width:"5px",height:"25px"}}),a("div",{staticClass:"ml-3"},[a("div",[e._v(e._s(e.coreTemplate.display(e.template.props)))]),!0!==e.validate?a("div",{staticClass:"caption red--text"},[e._v(e._s(e.validate))]):e._e()]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.$.edit=!e.$.edit}}},[a("v-icon",[e._v("mdi-square-edit-outline")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.copyTemplate(e.template)}}},[a("v-icon",[e._v("mdi-content-copy")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("write",e.template)}}},[a("v-icon",[e._v("mdi-language-javascript")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("help",e.template)}}},[a("v-icon",[e._v("mdi-help-circle-outline")])],1),a("v-btn",{attrs:{icon:""},on:{click:e.remove}},[a("v-icon",[e._v("mdi-delete")])],1)],1),e.$.edit?a("div",[a("v-divider",{staticClass:"mt-3 mb-4"}),e._l(e.coreTemplate.props,(function(t,s,n){return a("div",{key:s+"t",staticClass:"mt-3"},["text"===t.type?a("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.show(e.template.props),expression:"prop.show(template.props)"}],attrs:{label:t.info,autofocus:0===n,"hide-details":"",outlined:""},model:{value:e.template.props[s],callback:function(t){e.$set(e.template.props,s,t)},expression:"template.props[key]"}}):e._e(),"javascript"===t.type?a("div",{directives:[{name:"show",rawName:"v-show",value:t.show(e.template.props),expression:"prop.show(template.props)"}]},[a("div",{staticClass:"mb-2"},[e._v(e._s(t.info))]),a("div",{staticStyle:{height:"200px","overflow-y":"scroll"}},[a("codemirror",{attrs:{options:{mode:"text/javascript"}},model:{value:e.template.props[s],callback:function(t){e.$set(e.template.props,s,t)},expression:"template.props[key]"}})],1)]):e._e(),"radio-group"===t.type?a("div",{directives:[{name:"show",rawName:"v-show",value:t.show(e.template.props),expression:"prop.show(template.props)"}]},[a("div",[e._v(e._s(t.info))]),a("v-radio-group",{model:{value:e.template.props[s],callback:function(t){e.$set(e.template.props,s,t)},expression:"template.props[key]"}},e._l(t.options,(function(e,t){return a("v-radio",{key:t+"rg",attrs:{label:e.text,value:e.value}})})),1)],1):e._e()],1)})),a("v-btn",{staticClass:"mt-3",attrs:{block:"",color:"primary",outlined:""},on:{click:function(t){e.$.edit=!1}}},[e._v("關閉")])],2):e._e()],1),e.$.drag.$v.draging?a("div",{staticClass:"template-drag-btn",class:{"template-drag-btn-drag-here":e.dragHere},on:{dragenter:e.dragEnter}},[e._v(" 拖曳模板至此 ")]):a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("div",e._g({staticClass:"template-add-btn",on:{click:function(t){return e.$emit("add",e.step,e.index)}}},s))]}}])},[a("span",[e._v("加入模板")])])],1)},I=[],P=Object(c["c"])({props:{step:Object,index:Number,template:Object},setup(e){let t=Object(c["g"])(null),a=Object(c["f"])({edit:!1,copy:w["d"].fetch("copy"),drag:w["d"].fetch("drag"),draging:!1}),s=Object(c["a"])(()=>i["a"].templates[e.template.name]),n=Object(c["a"])(()=>i["a"].templates[e.template.name].validate(e.template.props)),l=Object(c["a"])(()=>!!a.drag.templateTarget&&e.template===a.drag.templateTarget.template);Object(c["h"])(()=>a.edit,()=>window.scrollTo(0,t.value.offsetTop-50));let o=e=>{a.copy.$m.copyTemplate(e)},r=()=>{e.step.templates.remove(e.template.id)},p=()=>{a.drag.$m.startTemplate(e.template),setTimeout(()=>{a.draging=!0},10)},d=()=>{let e=!!a.drag.templateTarget;a.drag.$m.endTemplate(),a.draging=!1,e&&r()},m=()=>{a.drag.$m.enterTemplate({step:e.step,index:e.index,template:e.template})};return{$:a,main:t,coreTemplate:s,copyTemplate:o,validate:n,remove:r,dragStart:p,dragEnd:d,dragHere:l,dragEnter:m}}}),H=P,q=(a("d7d6"),a("67b6")),z=a("43a6"),R=a("0fd9"),B=a("8654"),F=a("3a2f"),W=Object(m["a"])(H,D,I,!1,null,null,null),J=W.exports;u()(W,{VBtn:j["a"],VCard:b["a"],VDivider:g["a"],VIcon:V["a"],VRadio:q["a"],VRadioGroup:z["a"],VRow:R["a"],VSpacer:O["a"],VTextField:B["a"],VTooltip:F["a"]});var M=a("0d09"),U=a("7dda"),A=a("1f61"),G=Object(c["c"])({props:{},components:{"self-help":x,"self-temp-btn":E,"self-variable":M["a"],"self-template":J},setup(e,t){let a=new k["a"](t),s=Object(c["g"])(null),n=Object(c["g"])(null),o=Object(c["g"])(null),r=Object(c["g"])(null),p=Object(c["g"])(null),d=Object(c["g"])(null),m=Object(c["f"])({alas:w["b"],project:w["d"].fetch("project"),copy:w["d"].fetch("copy"),spec:null,write:!1,writeContent:"",variable:!1,renameName:"",createName:""}),v=Object(c["a"])(()=>null!=m.copy.step),u=Object(c["a"])(()=>m.project.specs.items.filter(e=>e.id!==m.spec.id).map(e=>({id:e.id,name:e.$v.typeAndName})));Object(c["d"])(()=>{m.spec=m.project.specs.items.find(e=>e.id===a.route.params.id)});let b=(e,t)=>{p.value.open(e,t)},f=()=>{m.project.$o.save.start(),r.value.play([m.spec.id])},$=()=>{n.value.open(()=>{m.spec.steps.write({name:m.createName})})},g=e=>{m.renameName=e.name,o.value.open(()=>{e.name=m.renameName})},_=e=>{w["a"].confirm("確定刪除步驟？",t=>{m.spec.steps.remove(e),t()})},x=e=>{setTimeout(()=>{let t=0;for(let a of d.value){if(a.template===e){d.value[t].$.edit=!0;break}t+=1}},100)},h=e=>{s.value.open(e)},y=e=>Object(l["a"])(this,void 0,void 0,(function*(){m.write=!0,m.writeContent=yield Object(A["b"])(i["a"].templates[e.name].write(e.props),4)})),C=()=>{Object(U["a"])(m.writeContent),w["a"].message("success","已複製到剪貼簿")},T=e=>{m.copy.$m.copyStep(e)},j=({spec:e,index:t})=>{m.copy.$m.pasteStep({spec:e,index:t})},V=e=>{Object(U["d"])(m.spec.steps,e)},O=e=>{Object(U["c"])(m.spec.steps,e)};return{$:m,specs:u,openCreateTemplate:b,invokeTest:f,createStep:$,updateStep:g,removeStep:_,openTemplateEdit:x,openHelp:h,openWrite:y,copyCode:C,help:s,create:n,update:o,invoke:r,createTemplate:p,templates:d,copyStep:T,canPasteStep:v,pasteStep:j,stepIndexUp:V,stepIndexDown:O}}}),L=G,K=a("62ad"),Q=a("b974"),X=a("2a7f"),Y=Object(m["a"])(L,s,n,!1,null,null,null);t["default"]=Y.exports;u()(Y,{VBtn:j["a"],VCard:b["a"],VCardTitle:f["c"],VCol:K["a"],VDialog:$["a"],VDivider:g["a"],VIcon:V["a"],VRow:R["a"],VSelect:Q["a"],VSpacer:O["a"],VTextField:B["a"],VToolbar:S["a"],VToolbarTitle:X["a"],VTooltip:F["a"]})}}]);