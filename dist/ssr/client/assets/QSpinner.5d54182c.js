import{c as t,X as u,F as f,h as s,z as S}from"./index.80fb070d.js";const r={xs:18,sm:24,md:32,lg:38,xl:46},h={size:String};function x(e,n=r){return t(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const m=e=>u(f(e)),g=e=>u(e);function k(e,n){return e!==void 0&&e()||n}function p(e,n){if(e!==void 0){const i=e();if(i!=null)return i.slice()}return n}function w(e,n){return e!==void 0?n.concat(e()):n}function y(e,n,i,a,c,l){n.key=a+c;const o=s(e,n,i);return c===!0?S(o,l()):o}const v={size:{type:[Number,String],default:"1em"},color:String};function z(e){return{cSize:t(()=>e.size in r?`${r[e.size]}px`:e.size),classes:t(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var D=m({name:"QSpinner",props:{...v,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:i}=z(e);return()=>s("svg",{class:i.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[s("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});export{D as Q,p as a,g as b,m as c,y as d,w as e,x as f,k as h,h as u};
