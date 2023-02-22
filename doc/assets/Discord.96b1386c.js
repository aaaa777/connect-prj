import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";import{g as $,m as L,p as P,t as v,c as o,r as R,a as e,o as l,b as T,w as t,d as r,e as n,f as i,F as d}from"./index.74b7fc90.js";import{m as z,a as F,b as N,c as A,u as D,d as E,e as j,f as q,g as M,h as G,V as H,i as _,j as u,k as J,l as k,n as K}from"./VTextField.cfffc508.js";import{V as b}from"./VAvatar.22d66bb6.js";import{V as O,a as w,b as Q,c as x}from"./VList.40f39bd7.js";import{V as c,a as U,b as W}from"./VSheet.b7198b28.js";const X=$()({name:"VSystemBar",props:{color:String,height:[Number,String],window:Boolean,...z(),...F(),...N(),...A(),...L()},setup(a,m){let{slots:g}=m;const{themeClasses:h}=P(a),{backgroundColorClasses:f,backgroundColorStyles:y}=D(v(a,"color")),{elevationClasses:s}=E(a),{roundedClasses:S}=j(a),{ssrBootStyles:B}=q(),V=o(()=>{var p;return(p=a.height)!=null?p:a.window?32:24}),{layoutItemStyles:C}=M({id:a.name,order:o(()=>parseInt(a.order,10)),position:R("top"),layoutSize:V,elementSize:V,active:o(()=>!0),absolute:v(a,"absolute")});return G(()=>e(a.tag,{class:["v-system-bar",{"v-system-bar--window":a.window},h.value,f.value,s.value,S.value],style:[y.value,C.value,B.value]},g)),{}}}),Y={};function Z(a,m,g,h,f,y){return l(),T(H,{id:"inspire"},{default:t(()=>[e(X,null,{default:t(()=>[e(_),e(u,null,{default:t(()=>[r("mdi-square")]),_:1}),e(u,null,{default:t(()=>[r("mdi-circle")]),_:1}),e(u,null,{default:t(()=>[r("mdi-triangle")]),_:1})]),_:1}),e(c,{absolute:"",color:"grey-lighten-3",rail:""},{default:t(()=>[e(b,{class:"d-block text-center mx-auto mt-4",color:"grey-darken-1",size:"36"}),e(O,{class:"mx-3 my-5"}),(l(),n(d,null,i(6,s=>e(b,{key:s,class:"d-block text-center mx-auto mb-9",color:"grey-lighten-1",size:"28"})),64))]),_:1}),e(c,{width:"244"},{default:t(()=>[e(U,{color:"grey-lighten-5",height:"128",width:"100%"}),e(w,null,{default:t(()=>[(l(),n(d,null,i(5,s=>e(x,{key:s,title:`Item ${s}`,link:""},null,8,["title"])),64))]),_:1})]),_:1}),e(K,{class:"px-3",color:"grey-lighten-4",flat:"",height:"72"},{default:t(()=>[e(_),e(J,{"max-width":"156"},{default:t(()=>[e(k,{"bg-color":"grey-lighten-2",class:"rounded-pill overflow-hidden",density:"compact","hide-details":"",variant:"solo"})]),_:1})]),_:1}),e(W),e(c,{location:"right"},{default:t(()=>[e(w,null,{default:t(()=>[(l(),n(d,null,i(5,s=>e(x,{key:s,title:`Item ${s}`,link:""},null,8,["title"])),64))]),_:1})]),_:1}),e(Q,{app:"",height:"72"},{default:t(()=>[e(k,{"bg-color":"grey-lighten-1",class:"rounded-pill overflow-hidden",density:"compact","hide-details":"",variant:"solo"})]),_:1})]),_:1})}const re=I(Y,[["render",Z]]);export{re as default};