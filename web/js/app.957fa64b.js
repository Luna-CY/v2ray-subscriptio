(function(e){function t(t){for(var n,r,l=t[0],i=t[1],d=t[2],u=0,s=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&s.push(c[r][0]),c[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);b&&b(t);while(s.length)s.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,r=1;r<o.length;r++){var l=o[r];0!==c[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},c={app:0},a=[];function l(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0e9cc528":"fc117d05","chunk-1e80c40e":"4e9d0c8e","chunk-1fdb5426":"d3762498","chunk-4469a79b":"b4576984","chunk-4796b3c0":"b427afb5","chunk-eb5472ae":"8a21b069"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o={"chunk-0e9cc528":1,"chunk-1e80c40e":1,"chunk-1fdb5426":1,"chunk-4469a79b":1,"chunk-4796b3c0":1,"chunk-eb5472ae":1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-0e9cc528":"73ce7de9","chunk-1e80c40e":"5bb0cfac","chunk-1fdb5426":"1b52665c","chunk-4469a79b":"e5b533d9","chunk-4796b3c0":"c5d9e088","chunk-eb5472ae":"5ae726d0"}[e]+".css",c=i.p+n,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var d=a[l],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===n||u===c))return t()}var s=document.getElementsByTagName("style");for(l=0;l<s.length;l++){d=s[l],u=d.getAttribute("data-href");if(u===n||u===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete r[e],b.parentNode.removeChild(b),o(a)},b.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){r[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,o){n=c[e]=[t,o]}));t.push(n[2]=a);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(e);var s=new Error;d=function(t){u.onerror=u.onload=null,clearTimeout(b);var o=c[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,o[1](s)}c[e]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var b=u;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},"0613":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o("d4ec"),r=o("5502"),c="V2RAY-SUBSCRIPTION-APP-TOKEN",a=function e(){Object(n["a"])(this,e),this.token="",this.expired=0},l=function e(){Object(n["a"])(this,e)},i=function e(){Object(n["a"])(this,e),this.token=new a,this.local=new l};t["b"]=Object(r["a"])({state:new i,getters:{token:function(e){return e.token},local:function(e){return e.local}},mutations:{token:function(e,t){e.token=t,sessionStorage.setItem(c,JSON.stringify(t))}},actions:{logout:function(e){e.state.token=new a,sessionStorage.removeItem(c)},load:function(e){var t=sessionStorage.getItem(c);if(null!=t){var o=Date.parse(new Date)/1e3,n=JSON.parse(t);return!(n.expired<o)&&(e.state.token=n,!0)}return!0}},modules:{}})},"2b7f":function(e,t,o){},"3a65":function(e,t,o){"use strict";o("d838")},6136:function(e,t,o){"use strict";o("2b7f")},"736b":function(e,t,o){"use strict";o("cc58")},"89df":function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o("d4ec"),r=function e(){Object(n["a"])(this,e),this.code=0,this.message=""}},"99b1":function(e,t,o){},b751:function(e,t,o){},cc58:function(e,t,o){},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("ac1f"),o("5319"),o("4d63"),o("25f0");var n=o("7a23");function r(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createBlock"])(l)}var c=Object(n["defineComponent"])({name:"App"});o("736b");c.render=r;var a=c,l=o("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0");var i=o("6c02"),d=o("0613"),u={class:"content-center el-container"},s={class:"el-main el-main-md-and-up hidden-sm-and-down"},b=["onMouseover","onMouseout"],m={class:"el-col-2"},p={class:"el-col-2"},f={class:"el-col-4"},h={class:"el-col-2"},O={class:"el-col-2"},j={class:"el-col-xl-10 el-col-lg-10 el-col-md-10"},v={class:"el-col-xl-2 el-col-lg-2 el-col-md-2"},g=Object(n["createTextVNode"])("生成配置"),w={key:0,class:"endpoint-box el-row margin-bottom-2x"},V=Object(n["createElementVNode"])("div",{class:"el-col-24"},"暂时没有可用的节点列表",-1),N=[V],y={class:"el-row"},C={class:"el-col-24"},k=Object(n["createTextVNode"])("添加节点"),_=Object(n["createTextVNode"])("下载客户端"),x={class:"el-main el-main-sm-and-down hidden-md-and-up"},E={class:"endpoint-box el-row margin-bottom"},S={class:"el-col-12"},B={class:"el-col-9"},M={class:"el-col-3"},T={class:"endpoint-box el-row margin-bottom"},D={class:"el-col-21"},R=Object(n["createTextVNode"])("生成配置"),I=Object(n["createTextVNode"])("删除"),U={class:"el-col-3"},P={key:0,class:"endpoint-box el-row margin-bottom"},A=Object(n["createElementVNode"])("div",{class:"el-col-24"},"暂时没有可用的节点列表",-1),$=[A],q={class:"el-row"},H={class:"el-col-24"},F=Object(n["createTextVNode"])("添加节点"),L=Object(n["createTextVNode"])("下载客户端");function z(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("el-button"),i=Object(n["resolveComponent"])("Remove"),d=Object(n["resolveComponent"])("NewV2rayEndpoint"),V=Object(n["resolveComponent"])("Download"),A=Object(n["resolveComponent"])("QRCode");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",s,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.data,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:t.id,class:"endpoint-box el-row margin-bottom-2x",onMouseover:function(e){return t.show_delete_button=!0},onMouseout:function(e){return t.show_delete_button=!1}},[Object(n["createElementVNode"])("div",m,Object(n["toDisplayString"])(e.getCloud(t.cloud)),1),Object(n["createElementVNode"])("div",p,Object(n["toDisplayString"])(e.getEndpoint(t.endpoint)),1),Object(n["createElementVNode"])("div",f,Object(n["toDisplayString"])(t.host),1),Object(n["createElementVNode"])("div",h,Object(n["toDisplayString"])(t.rate?t.rate:"-"),1),Object(n["createElementVNode"])("div",O,Object(n["toDisplayString"])(e.getMode(t.transport_type)),1),Object(n["createElementVNode"])("div",j,Object(n["toDisplayString"])(t.remark?t.remark:"-"),1),Object(n["createElementVNode"])("div",v,[Object(n["createVNode"])(l,{type:"primary",loading:t.downloading,onClick:function(o){return e.download(t)}},{default:Object(n["withCtx"])((function(){return[g]})),_:2},1032,["loading","onClick"]),Object(n["withDirectives"])(Object(n["createVNode"])(l,{type:"danger",class:"delete-button",icon:"el-icon-delete",circle:"",onClick:function(o){e.removeItem=t,e.showRemoveModal=!0}},null,8,["onClick"]),[[n["vShow"],t.show_delete_button]])])],40,b)})),128)),0===e.data.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",w,N)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",y,[Object(n["createElementVNode"])("div",C,[Object(n["createVNode"])(l,{type:"success",size:"medium",onClick:t[0]||(t[0]=function(t){return e.showNewModal=!0})},{default:Object(n["withCtx"])((function(){return[k]})),_:1}),Object(n["createVNode"])(l,{type:"primary",size:"medium",onClick:t[1]||(t[1]=function(t){return e.showDownloadModal=!0})},{default:Object(n["withCtx"])((function(){return[_]})),_:1})])])]),Object(n["createElementVNode"])("div",x,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.data,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:t.id},[Object(n["withDirectives"])(Object(n["createElementVNode"])("div",E,[Object(n["createElementVNode"])("div",S,Object(n["toDisplayString"])(t.host),1),Object(n["createElementVNode"])("div",B,Object(n["toDisplayString"])(e.getMode(t.transport_type)),1),Object(n["createElementVNode"])("div",M,[Object(n["createVNode"])(l,{type:"primary",icon:"el-icon-menu",circle:"",onClick:function(e){return t.show_generate_menu=!0}},null,8,["onClick"])])],512),[[n["vShow"],!t.show_generate_menu]]),Object(n["withDirectives"])(Object(n["createElementVNode"])("div",T,[Object(n["createElementVNode"])("div",D,[Object(n["createVNode"])(l,{type:"primary",loading:t.downloading,onClick:function(o){return e.download(t)}},{default:Object(n["withCtx"])((function(){return[R]})),_:2},1032,["loading","onClick"]),Object(n["createVNode"])(l,{type:"danger",onClick:function(o){e.removeItem=t,e.showRemoveModal=!0}},{default:Object(n["withCtx"])((function(){return[I]})),_:2},1032,["onClick"])]),Object(n["createElementVNode"])("div",U,[Object(n["createVNode"])(l,{type:"primary",icon:"el-icon-menu",circle:"",onClick:function(e){return t.show_generate_menu=!1}},null,8,["onClick"])])],512),[[n["vShow"],t.show_generate_menu]])],64)})),128)),0===e.data.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",P,$)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",q,[Object(n["createElementVNode"])("div",H,[Object(n["createVNode"])(l,{type:"success",size:"medium",onClick:t[2]||(t[2]=function(t){return e.showNewModal=!0})},{default:Object(n["withCtx"])((function(){return[F]})),_:1}),Object(n["createVNode"])(l,{type:"primary",size:"medium",onClick:t[3]||(t[3]=function(t){return e.showDownloadModal=!0})},{default:Object(n["withCtx"])((function(){return[L]})),_:1})])])])]),Object(n["createVNode"])(i,{show:e.showRemoveModal,"onUpdate:show":t[4]||(t[4]=function(t){return e.showRemoveModal=t}),loading:e.removing,onConfirm:e.remove},null,8,["show","loading","onConfirm"]),Object(n["createVNode"])(d,{show:e.showNewModal,"onUpdate:show":t[5]||(t[5]=function(t){return e.showNewModal=t}),onSuccess:e.load},null,8,["show","onSuccess"]),Object(n["createVNode"])(V,{show:e.showDownloadModal,"onUpdate:show":t[6]||(t[6]=function(t){return e.showDownloadModal=t})},null,8,["show"]),Object(n["createVNode"])(A,{show:e.showQRCodeModal,"onUpdate:show":t[7]||(t[7]=function(t){return e.showQRCodeModal=t}),content:e.v2rayNgVMessString},null,8,["show","content"])],64)}var Q=o("bc3a"),G=o.n(Q),X=o("d4ec"),J=o("262e"),K=o("2caf"),W=o("89df"),Y="/api/v2ray-endpoint",Z=(W["a"],function e(){Object(X["a"])(this,e),this.id=0,this.cloud=0,this.endpoint=0,this.rate="",this.remark="",this.host="",this.transport_type=0,this.downloading=!1,this.show_delete_button=!1,this.show_generate_menu=!1}),ee="/api/v2ray-endpoint/download",te=function e(){Object(X["a"])(this,e),this.id=0},oe=(W["a"],"/api/v2ray-endpoint/remove"),ne=function e(){Object(X["a"])(this,e),this.id=0,this.password=""},re={class:"content-center"},ce=Object(n["createTextVNode"])("取消"),ae=Object(n["createTextVNode"])("确认");function le(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("el-input"),i=Object(n["resolveComponent"])("el-form-item"),d=Object(n["resolveComponent"])("el-form"),u=Object(n["resolveComponent"])("el-button"),s=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{width:"60%","model-value":e.show,onClose:e.close,"destroy-on-close":""},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(d,{model:e.form,"label-width":"0",ref:"RemoveEndpointForm",onsubmit:"return false",onSubmit:e.confirm,rules:e.rules},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{prop:"password"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{modelValue:e.form.password,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.password=t}),placeholder:"请输入密码",autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","onSubmit","rules"])]),Object(n["createElementVNode"])("div",re,[Object(n["createVNode"])(u,{onClick:e.close},{default:Object(n["withCtx"])((function(){return[ce]})),_:1},8,["onClick"]),Object(n["createVNode"])(u,{type:"danger",onClick:e.confirm,loading:e.loading},{default:Object(n["withCtx"])((function(){return[ae]})),_:1},8,["onClick","loading"])])]})),_:1},8,["model-value","onClose"])}var ie=Object(n["defineComponent"])({name:"Remove",props:{show:Boolean,loading:Boolean},emits:["update:show","confirm"],data:function(){return{form:new ne,rules:{password:[{required:!0,message:"必须填写删除密码",trigger:"blur"}]}}},methods:{close:function(){this.$emit("update:show",!1),this.form.password=""},confirm:function(){var e=this,t=this.$refs["RemoveEndpointForm"];t.validate((function(t){t&&e.$emit("confirm",e.form.password)}))}}});ie.render=le;var de=ie,ue=Object(n["createTextVNode"])("取消"),se=Object(n["createTextVNode"])("保存");function be(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("el-option"),i=Object(n["resolveComponent"])("el-select"),d=Object(n["resolveComponent"])("el-form-item"),u=Object(n["resolveComponent"])("el-input"),s=Object(n["resolveComponent"])("el-switch"),b=Object(n["resolveComponent"])("el-button"),m=Object(n["resolveComponent"])("el-form"),p=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createBlock"])(p,{width:"60%","model-value":e.show,onClose:e.close,"close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":""},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{model:e.form,"label-width":"120px",ref:"NewV2rayEndpointForm",rules:e.rules},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{label:"服务商",prop:"cloud"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{modelValue:e.form.cloud,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.cloud=t})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{value:0,label:"请选择服务商"}),Object(n["createVNode"])(l,{value:1,label:"Vultr"}),Object(n["createVNode"])(l,{value:2,label:"阿里云"}),Object(n["createVNode"])(l,{value:3,label:"腾讯云"}),Object(n["createVNode"])(l,{value:4,label:"华为云"})]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(d,{label:"节点位置",prop:"endpoint"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{modelValue:e.form.endpoint,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.endpoint=t})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{value:0,label:"请选择节点位置"}),Object(n["createVNode"])(l,{value:1,label:"日本"}),Object(n["createVNode"])(l,{value:2,label:"香港"})]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(d,{label:"带宽上限"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{modelValue:e.form.rate,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.rate=t}),placeholder:"e.g.: 100M"},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(d,{label:"备注信息"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{modelValue:e.form.remark,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.remark=t}),placeholder:"备注信息"},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(d,{label:"主机HOST",prop:"host"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{modelValue:e.form.host,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.form.host=t}),placeholder:"主机地址: IP或域名"},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(d,{label:"端口",prop:"port"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{modelValue:e.form.port,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.form.port=t}),placeholder:"端口"},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(d,{label:"用户ID",prop:"user_id"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{modelValue:e.form.user_id,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.form.user_id=t}),placeholder:"用户身份ID"},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(d,{label:"AlterId",prop:"alter_id"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{modelValue:e.form.alter_id,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.form.alter_id=t}),placeholder:"e.g.: 64"},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(d,{label:"SNI"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{modelValue:e.form.sni,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.form.sni=t}),placeholder:""},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(d,{label:"使用TLS"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{modelValue:e.form.use_tls,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.form.use_tls=t})},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(d,{label:"传输方式",prop:"transport_type"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{modelValue:e.form.transport_type,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.form.transport_type=t})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{value:1,label:"TCP"}),Object(n["createVNode"])(l,{value:2,label:"WebSocket"}),Object(n["createVNode"])(l,{value:3,label:"KCP"}),Object(n["createVNode"])(l,{value:4,label:"HTTP2"})]})),_:1},8,["modelValue"])]})),_:1}),1===parseInt(e.form.transport_type.toString())?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:0,label:"伪装类型"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{modelValue:e.form.tcp.type,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.form.tcp.type=t})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{value:"none",label:"none"}),Object(n["createVNode"])(l,{value:"http",label:"http"})]})),_:1},8,["modelValue"])]})),_:1})):Object(n["createCommentVNode"])("",!0),3===parseInt(e.form.transport_type.toString())?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:1,label:"伪装类型"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{modelValue:e.form.kcp.type,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.form.kcp.type=t})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{value:"none",label:"none"}),Object(n["createVNode"])(l,{value:"srtp",label:"srtp"}),Object(n["createVNode"])(l,{value:"utp",label:"utp"}),Object(n["createVNode"])(l,{value:"wechat-video",label:"wechat-video"}),Object(n["createVNode"])(l,{value:"dtls",label:"dtls"}),Object(n["createVNode"])(l,{value:"wireguard",label:"wireguard"})]})),_:1},8,["modelValue"])]})),_:1})):Object(n["createCommentVNode"])("",!0),2===parseInt(e.form.transport_type.toString())?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:2,label:"路径"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{modelValue:e.form.web_socket.path,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.form.web_socket.path=t}),placeholder:"URI路径"},null,8,["modelValue"])]})),_:1})):Object(n["createCommentVNode"])("",!0),4===parseInt(e.form.transport_type.toString())?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:3,label:"域名"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{modelValue:e.form.http2.host,"onUpdate:modelValue":t[14]||(t[14]=function(t){return e.form.http2.host=t}),placeholder:"HTTP2的域名，多个使用英文,分隔"},null,8,["modelValue"])]})),_:1})):Object(n["createCommentVNode"])("",!0),4===parseInt(e.form.transport_type.toString())?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:4,label:"路径"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{modelValue:e.form.http2.path,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.form.http2.path=t}),placeholder:"URI路径"},null,8,["modelValue"])]})),_:1})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(d,{"label-width":"0",class:"content-center"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{type:"danger",onClick:e.close},{default:Object(n["withCtx"])((function(){return[ue]})),_:1},8,["onClick"]),Object(n["createVNode"])(b,{type:"primary",onClick:e.save,loading:e.saving},{default:Object(n["withCtx"])((function(){return[se]})),_:1},8,["onClick","loading"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["model-value","onClose"])}var me="/api/v2ray-endpoint/new",pe=function e(){Object(X["a"])(this,e),this.cloud=0,this.endpoint=0,this.rate="",this.remark="",this.host="",this.port=443,this.user_id="",this.alter_id=64,this.use_tls=!1,this.sni="",this.transport_type=1,this.tcp=new(function(){function e(){Object(X["a"])(this,e),this.type="none"}return e}()),this.web_socket=new(function(){function e(){Object(X["a"])(this,e),this.path=""}return e}()),this.kcp=new(function(){function e(){Object(X["a"])(this,e),this.type="none"}return e}()),this.http2=new(function(){function e(){Object(X["a"])(this,e),this.host="",this.path=""}return e}())},fe=Object(n["defineComponent"])({name:"NewV2rayEndpoint",props:{show:Boolean},emits:["update:show","success"],data:function(){return{saving:!1,form:new pe,rules:{cloud:[{required:!0,message:"必须选择服务提供商",trigger:"blur"}],endpoint:[{required:!0,message:"必须选择节点所在位置",trigger:"blur"}],host:[{required:!0,message:"必须填写主机地址",trigger:"blur"}],port:[{required:!0,message:"必须填写端口号",trigger:"blur"}],user_id:[{required:!0,message:"必须填写用户ID",trigger:"blur"}]}}},methods:{close:function(){this.form=new pe,this.$emit("update:show",!1)},success:function(){this.close(),this.$emit("success")},save:function(){var e=this,t=this.$refs.NewV2rayEndpointForm;t.validate((function(t){t&&(e.form.port=parseInt(e.form.port.toString()),e.form.alter_id=parseInt(e.form.alter_id.toString()),e.saving=!0,G.a.post(me,e.form).then((function(t){e.saving=!1,0==t.data.code?(e.$message.success("添加节点成功"),e.success()):e.$message.error(t.data.message)})))}))}}});fe.render=be;var he=fe;Object(n["pushScopeId"])("data-v-33b980b0");var Oe=Object(n["createTextVNode"])("GitHub"),je=Object(n["createTextVNode"])("下载 "),ve=Object(n["createTextVNode"])("配置帮助");function ge(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("el-table-column"),i=Object(n["resolveComponent"])("el-link"),d=Object(n["resolveComponent"])("el-table"),u=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createBlock"])(u,{width:"60%","model-value":e.show,onClose:e.close,"destroy-on-close":""},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{data:e.data,border:"",style:{width:"100%"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{prop:"os",label:"系统类型"}),Object(n["createVNode"])(l,{prop:"client",label:"客户端"}),Object(n["createVNode"])(l,{label:"操作",width:"200"},{default:Object(n["withCtx"])((function(e){return[Object(n["createVNode"])(i,{type:"primary",underline:!1,href:e.row.git,target:"_blank"},{default:Object(n["withCtx"])((function(){return[Oe]})),_:2},1032,["href"]),Object(n["createVNode"])(i,{type:"primary",underline:!1,href:e.row.address,class:"margin-left",target:"_blank"},{default:Object(n["withCtx"])((function(){return[je]})),_:2},1032,["href"]),Object(n["createVNode"])(i,{type:"primary",underline:!1,href:e.row.helper,class:"margin-left"},{default:Object(n["withCtx"])((function(){return[ve]})),_:2},1032,["href"])]})),_:1})]})),_:1},8,["data"])]})),_:1},8,["model-value","onClose"])}Object(n["popScopeId"])();var we=Object(n["defineComponent"])({name:"Download",props:{show:Boolean},emits:["update:show"],data:function(){return{data:[{os:"Windows",client:"V2rayN",git:"https://github.com/2dust/v2rayN/releases",address:"https://github.com/2dust/v2rayN/releases/download/4.20/v2rayN-Core.zip",helper:"/helper/v2ray-n"},{os:"MacOSX",client:"V2rayX",git:"https://github.com/Cenmrev/V2RayX/releases",address:"https://github.com/Cenmrev/V2RayX/releases/download/v1.5.1/V2RayX.app.zip",helper:"/helper/v2ray-x"},{os:"Android",client:"V2rayNG",git:"https://github.com/2dust/v2rayNG/releases",address:"https://github.com/2dust/v2rayNG/releases/download/1.6.18/v2rayNG_1.6.18.apk",helper:"/helper/v2ray-ng"}]}},methods:{close:function(){this.$emit("update:show",!1)}}});o("3a65");we.render=ge,we.__scopeId="data-v-33b980b0";var Ve=we,Ne={class:"content-center hidden-sm-and-down"},ye=Object(n["createElementVNode"])("div",{class:"content-center"},"扫描二维码或复制下方字符串到剪贴板并通过剪贴板导入",-1),Ce={class:"qr-code margin-top"},ke={class:"margin-top"},_e={class:"content-center hidden-md-and-up"},xe=Object(n["createElementVNode"])("div",{class:"content-center"},"扫描二维码或复制下方字符串到剪贴板并通过剪贴板导入",-1),Ee={class:"qr-code margin-top"},Se={class:"margin-top"};function Be(e,t,o,r,c,a){var l=Object(n["resolveComponent"])("qrcode-vue"),i=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createBlock"])(i,{width:"60%","model-value":e.show,onClose:e.close,"destroy-on-close":""},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",Ne,[ye,Object(n["createElementVNode"])("div",Ce,[Object(n["createVNode"])(l,{value:e.content,size:350,level:"H"},null,8,["value"])]),Object(n["createElementVNode"])("div",ke,Object(n["toDisplayString"])(e.content),1)]),Object(n["createElementVNode"])("div",_e,[xe,Object(n["createElementVNode"])("div",Ee,[Object(n["createVNode"])(l,{value:e.content,size:180,level:"H"},null,8,["value"])]),Object(n["createElementVNode"])("div",Se,Object(n["toDisplayString"])(e.content),1)])]})),_:1},8,["model-value","onClose"])}var Me=o("d39c"),Te=o.n(Me),De=Object(n["defineComponent"])({name:"QRCode",components:{QrcodeVue:Te.a},props:{show:Boolean,content:String},emits:["update:show"],methods:{close:function(){this.$emit("update:show",!1)}}});De.render=Be;var Re=De,Ie=o("6821"),Ue=Object(n["defineComponent"])({name:"Home",components:{QRCode:Re,Download:Ve,NewV2rayEndpoint:he,Remove:de},data:function(){return{loading:!0,data:new Array,showRemoveModal:!1,removeItem:new Z,removing:!1,showNewModal:!1,showDownloadModal:!1,showQRCodeModal:!1,v2rayNgVMessString:""}},mounted:function(){this.load()},methods:{load:function(){var e=this;this.loading=!0,G.a.get(Y).then((function(t){e.loading=!1,0==t.data.code?e.data=t.data.data.data:e.$message.error(t.data.message)}))},getCloud:function(e){var t={1:"Vultr",2:"阿里云",3:"腾讯云",4:"华为云"};return t[e]},getEndpoint:function(e){var t={1:"日本",2:"香港"};return t[e]},getMode:function(e){var t={1:"TCP",2:"WebSocket",3:"KCP",4:"HTTP2"};return t[e]},download:function(e){var t=this;e.downloading=!0;var o=new te;o.id=e.id,G.a.post(ee,o).then((function(o){e.downloading=!1,0==o.data.code?(t.v2rayNgVMessString=o.data.data.content,t.showQRCodeModal=!0):t.$message.error(o.data.message)}))},remove:function(e){var t=this,o=new ne;o.id=this.removeItem.id,o.password=Ie(e),this.removing=!0,G.a.post(oe,o).then((function(e){t.removing=!1,0==e.data.code?(t.showRemoveModal=!1,t.$message.success("删除成功"),t.load()):t.$message.error(e.data.message)}))}}});o("6136"),o("f5cb");Ue.render=z;var Pe=Ue,Ae=o("4995"),$e=[{path:"/",name:"Home",component:Pe,meta:{title:"节点列表"}},{path:"/helper/v2ray-x",name:"HelperV2rayX",component:function(){return o.e("chunk-0e9cc528").then(o.bind(null,"96ce"))},meta:{title:"V2rayX配置帮助"}},{path:"/helper/v2ray-n",name:"HelperV2rayN",component:function(){return o.e("chunk-1fdb5426").then(o.bind(null,"42c1"))},meta:{title:"V2rayN配置帮助"}},{path:"/helper/v2ray-ng",name:"HelperV2rayNG",component:function(){return o.e("chunk-1e80c40e").then(o.bind(null,"6d7e"))},meta:{title:"V2rayNG配置帮助"}},{path:"/auth/login",name:"Login",component:function(){return o.e("chunk-4796b3c0").then(o.bind(null,"5326"))},meta:{title:"验证"}},{name:"401",path:"/401",component:function(){return o.e("chunk-4469a79b").then(o.bind(null,"ec55"))},meta:{title:"401"}},{path:"/404",name:"404",component:function(){return o.e("chunk-eb5472ae").then(o.bind(null,"2754"))},meta:{title:"404"}},{path:"/:catchAll(.*)",name:"NotFound",redirect:"/404"}],qe=Object(i["a"])({history:Object(i["b"])("/"),routes:$e});qe.beforeEach((function(e,t,o){var n=Date.parse(new Date)/1e3;if("Login"!=e.name&&(""==d["b"].getters.token.token||d["b"].getters.token.expired<n))return d["b"].getters.token.expired<n&&Ae["a"].info("登录信息已失效，请重新登录"),void d["b"].dispatch("logout").then((function(){qe.push({name:"Login",query:{redirect:e.path}}).then()}));e.meta.hasOwnProperty("title")&&(document.title=e.meta.title+" - V2ray Subscription"),o()}));var He=qe,Fe=o("1250");o("fa6d"),o("7437"),o("76be"),o("b751");Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var o in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[o]:("00"+t[o]).substr((""+t[o]).length)));return e},d["b"].dispatch("load").then(),G.a.interceptors.request.use((function(e){return""!=d["b"].getters.token.token&&(e.headers["Authorization"]="Bearer "+d["b"].getters.token.token),e})),G.a.interceptors.response.use((function(e){return 200!=e.status||20001!=e.data.code&&20002!=e.data.code||(d["b"].dispatch("logout").then(),He.push({name:"Login"}).then()),e}),(function(e){if(e.response){if(400<=e.response.status&&e.response.status<500)return void Ae["a"].error("无效的数据请求");if(500<=e.response.status)return void Ae["a"].error("服务器异常, 请稍后重试");console.log("请求失败, 未知异常, 请联系管理员")}})),Object(n["createApp"])(a).use(d["b"]).use(He).use(Fe["a"],{size:"mini"}).mount("#app")},d838:function(e,t,o){},f5cb:function(e,t,o){"use strict";o("99b1")}});
//# sourceMappingURL=app.957fa64b.js.map