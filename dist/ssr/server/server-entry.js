"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var e=require("vue"),Y=require("quasar"),r=require("vue/server-renderer"),Z=require("quasar/wrappers"),j=require("vue-router");var T=(t,o)=>{const n=t.__vccOpts||t;for(const[a,l]of o)n[a]=l;return n};const B=e.defineComponent({name:"App"});function ee(t,o,n,a,l,v,h,N){const i=e.resolveComponent("router-view");o(r.ssrRenderComponent(i,a,null,n))}const z=B.setup;B.setup=(t,o)=>{const n=e.useSSRContext();return(n.modules||(n.modules=new Set)).add("src/App.vue"),z?z(t,o):void 0};var te=T(B,[["ssrRender",ee]]);const ne=[{path:"/",component:()=>Promise.resolve().then(function(){return me}),children:[{path:"",component:()=>Promise.resolve().then(function(){return _e})}]},{path:"/:catchAll(.*)*",component:()=>Promise.resolve().then(function(){return ge})}];var M=Z.route(function(){const t=j.createMemoryHistory;return j.createRouter({scrollBehavior:()=>({left:0,top:0}),routes:ne,history:t("/")})});const oe=e.defineComponent({name:"AppWrapper",setup(t){return e.onMounted(()=>{const{proxy:{$q:o}}=e.getCurrentInstance();o.onSSRHydrated!==void 0&&o.onSSRHydrated()}),()=>e.h(te,t)}});async function re(t,o,n){const a=t(oe);a.use(Y.Quasar,o,n);const l=e.markRaw(typeof M=="function"?await M({ssrContext:n}):M);return{app:a,router:l}}var ae={config:{}};const{components:he,directives:qe,...se}=ae;var le=t=>new Promise(async(o,n)=>{const{app:a,router:l}=await re(e.createApp,se,t);a.use(l);const v=t.req.url,{fullPath:h}=l.resolve(v);if(h!==v)return n({url:h});l.push(v).catch(()=>{}),l.isReady().then(()=>{if(l.currentRoute.value.matched.filter(i=>i.components!==void 0).flatMap(i=>Object.values(i.components)).length===0)return n({code:404});o(a)}).catch(n)});const E=e.defineComponent({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function ie(t,o,n,a,l,v,h,N){const i=e.resolveComponent("q-item"),u=e.resolveComponent("q-item-section"),_=e.resolveComponent("q-icon"),s=e.resolveComponent("q-item-label");o(r.ssrRenderComponent(i,e.mergeProps({clickable:"",tag:"a",target:"_blank",href:t.link},a),{default:e.withCtx((C,c,y,q)=>{if(c)t.icon?c(r.ssrRenderComponent(u,{avatar:""},{default:e.withCtx((x,m,w,b)=>{if(m)m(r.ssrRenderComponent(_,{name:t.icon},null,w,b));else return[e.createVNode(_,{name:t.icon},null,8,["name"])]}),_:1},y,q)):c("<!---->"),c(r.ssrRenderComponent(u,null,{default:e.withCtx((x,m,w,b)=>{if(m)m(r.ssrRenderComponent(s,null,{default:e.withCtx((R,f,$,d)=>{if(f)f(`${r.ssrInterpolate(t.title)}`);else return[e.createTextVNode(e.toDisplayString(t.title),1)]}),_:1},w,b)),m(r.ssrRenderComponent(s,{caption:""},{default:e.withCtx((R,f,$,d)=>{if(f)f(`${r.ssrInterpolate(t.caption)}`);else return[e.createTextVNode(e.toDisplayString(t.caption),1)]}),_:1},w,b));else return[e.createVNode(s,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.title),1)]),_:1}),e.createVNode(s,{caption:""},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.caption),1)]),_:1})]}),_:1},y,q));else return[t.icon?(e.openBlock(),e.createBlock(u,{key:0,avatar:""},{default:e.withCtx(()=>[e.createVNode(_,{name:t.icon},null,8,["name"])]),_:1})):e.createCommentVNode("",!0),e.createVNode(u,null,{default:e.withCtx(()=>[e.createVNode(s,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.title),1)]),_:1}),e.createVNode(s,{caption:""},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.caption),1)]),_:1})]),_:1})]}),_:1},n))}const H=E.setup;E.setup=(t,o)=>{const n=e.useSSRContext();return(n.modules||(n.modules=new Set)).add("src/components/EssentialLink.vue"),H?H(t,o):void 0};var ue=T(E,[["ssrRender",ie]]);const de=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],A=e.defineComponent({name:"MainLayout",components:{EssentialLink:ue},setup(){const t=e.ref(!1);return{essentialLinks:de,leftDrawerOpen:t,toggleLeftDrawer(){t.value=!t.value}}}});function ce(t,o,n,a,l,v,h,N){const i=e.resolveComponent("q-layout"),u=e.resolveComponent("q-header"),_=e.resolveComponent("q-toolbar"),s=e.resolveComponent("q-btn"),C=e.resolveComponent("q-toolbar-title"),c=e.resolveComponent("q-drawer"),y=e.resolveComponent("q-list"),q=e.resolveComponent("q-item-label"),x=e.resolveComponent("EssentialLink"),m=e.resolveComponent("q-page-container"),w=e.resolveComponent("router-view");o(r.ssrRenderComponent(i,e.mergeProps({view:"lHh Lpr lFf"},a),{default:e.withCtx((b,R,f,$)=>{if(R)R(r.ssrRenderComponent(u,{elevated:""},{default:e.withCtx((d,g,S,L)=>{if(g)g(r.ssrRenderComponent(_,null,{default:e.withCtx((O,p,D,V)=>{if(p)p(r.ssrRenderComponent(s,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,D,V)),p(r.ssrRenderComponent(C,null,{default:e.withCtx((k,P,K,X)=>{if(P)P(" Quasar App ");else return[e.createTextVNode(" Quasar App ")]}),_:1},D,V)),p(`<div${V}>Quasar v${r.ssrInterpolate(t.$q.version)}</div>`);else return[e.createVNode(s,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e.createVNode(C,null,{default:e.withCtx(()=>[e.createTextVNode(" Quasar App ")]),_:1}),e.createVNode("div",null,"Quasar v"+e.toDisplayString(t.$q.version),1)]}),_:1},S,L));else return[e.createVNode(_,null,{default:e.withCtx(()=>[e.createVNode(s,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e.createVNode(C,null,{default:e.withCtx(()=>[e.createTextVNode(" Quasar App ")]),_:1}),e.createVNode("div",null,"Quasar v"+e.toDisplayString(t.$q.version),1)]),_:1})]}),_:1},f,$)),R(r.ssrRenderComponent(c,{modelValue:t.leftDrawerOpen,"onUpdate:modelValue":d=>t.leftDrawerOpen=d,"show-if-above":"",bordered:""},{default:e.withCtx((d,g,S,L)=>{if(g)g(r.ssrRenderComponent(y,null,{default:e.withCtx((O,p,D,V)=>{if(p)p(r.ssrRenderComponent(q,{header:""},{default:e.withCtx((k,P,K,X)=>{if(P)P(" Essential Links ");else return[e.createTextVNode(" Essential Links ")]}),_:1},D,V)),p("<!--[-->"),r.ssrRenderList(t.essentialLinks,k=>{p(r.ssrRenderComponent(x,e.mergeProps({key:k.title},k),null,D,V))}),p("<!--]-->");else return[e.createVNode(q,{header:""},{default:e.withCtx(()=>[e.createTextVNode(" Essential Links ")]),_:1}),(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(t.essentialLinks,k=>(e.openBlock(),e.createBlock(x,e.mergeProps({key:k.title},k),null,16))),128))]}),_:1},S,L));else return[e.createVNode(y,null,{default:e.withCtx(()=>[e.createVNode(q,{header:""},{default:e.withCtx(()=>[e.createTextVNode(" Essential Links ")]),_:1}),(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(t.essentialLinks,O=>(e.openBlock(),e.createBlock(x,e.mergeProps({key:O.title},O),null,16))),128))]),_:1})]}),_:1},f,$)),R(r.ssrRenderComponent(m,null,{default:e.withCtx((d,g,S,L)=>{if(g)g(r.ssrRenderComponent(w,null,null,S,L));else return[e.createVNode(w)]}),_:1},f,$));else return[e.createVNode(u,{elevated:""},{default:e.withCtx(()=>[e.createVNode(_,null,{default:e.withCtx(()=>[e.createVNode(s,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e.createVNode(C,null,{default:e.withCtx(()=>[e.createTextVNode(" Quasar App ")]),_:1}),e.createVNode("div",null,"Quasar v"+e.toDisplayString(t.$q.version),1)]),_:1})]),_:1}),e.createVNode(c,{modelValue:t.leftDrawerOpen,"onUpdate:modelValue":d=>t.leftDrawerOpen=d,"show-if-above":"",bordered:""},{default:e.withCtx(()=>[e.createVNode(y,null,{default:e.withCtx(()=>[e.createVNode(q,{header:""},{default:e.withCtx(()=>[e.createTextVNode(" Essential Links ")]),_:1}),(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(t.essentialLinks,d=>(e.openBlock(),e.createBlock(x,e.mergeProps({key:d.title},d),null,16))),128))]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"]),e.createVNode(m,null,{default:e.withCtx(()=>[e.createVNode(w)]),_:1})]}),_:1},n))}const I=A.setup;A.setup=(t,o)=>{const n=e.useSSRContext();return(n.modules||(n.modules=new Set)).add("src/layouts/MainLayout.vue"),I?I(t,o):void 0};var pe=T(A,[["ssrRender",ce]]),me=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"})),U="/assets/Jura_neige_p\xE2ture.6ed90b3b.jpg",G="/assets/Jura_en_hiver.4b463b85.jpg";const Q=e.defineComponent({name:"IndexPage"});function fe(t,o,n,a,l,v,h,N){const i=e.resolveComponent("q-page"),u=e.resolveComponent("q-img");o(r.ssrRenderComponent(i,e.mergeProps({class:"flex flex-center"},a),{default:e.withCtx((_,s,C,c)=>{if(s)s(r.ssrRenderComponent(u,{src:U,style:{width:"200px",height:"200px"}},null,C,c)),s(r.ssrRenderComponent(u,{loading:"lazy",src:G,style:{width:"200px",height:"200px"}},null,C,c));else return[e.createVNode(u,{src:U,style:{width:"200px",height:"200px"}}),e.createVNode(u,{loading:"lazy",src:G,style:{width:"200px",height:"200px"}})]}),_:1},n))}const J=Q.setup;Q.setup=(t,o)=>{const n=e.useSSRContext();return(n.modules||(n.modules=new Set)).add("src/pages/IndexPage.vue"),J?J(t,o):void 0};var ve=T(Q,[["ssrRender",fe]]),_e=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"}));const F=e.defineComponent({name:"ErrorNotFound"});function Ce(t,o,n,a,l,v,h,N){const i=e.resolveComponent("q-btn");o(`<div${r.ssrRenderAttrs(e.mergeProps({class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},a))}><div><div style="${r.ssrRenderStyle({"font-size":"30vh"})}"> 404 </div><div class="text-h2" style="${r.ssrRenderStyle({opacity:".4"})}"> Oops. Nothing here... </div>`),o(r.ssrRenderComponent(i,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""},null,n)),o("</div></div>")}const W=F.setup;F.setup=(t,o)=>{const n=e.useSSRContext();return(n.modules||(n.modules=new Set)).add("src/pages/ErrorNotFound.vue"),W?W(t,o):void 0};var we=T(F,[["ssrRender",Ce]]),ge=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));exports.default=le;
