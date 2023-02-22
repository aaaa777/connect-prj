import{c as I,I as se,f as Z,h as J,y as K,m as U,a as re,b as G,z as j,u as _,d as Q,e as ee,J as ce,g as ve,K as de,E as me,L as he,M as fe,H as ge,N as ye,O as we}from"./VTextField.cfffc508.js";import{g as W,a as k,r as B,c as w,C as Y,y as te,q as N,n as ae,af as be,m as ne,G as Se,p as oe,t as D,ag as ke,Y as Me,M as Ee,J as Te,L as Ce,K as xe,F as Be,N as Ve}from"./index.74b7fc90.js";const We=W()({name:"VMain",props:{scrollable:Boolean,...I({tag:"main"})},setup(e,s){let{slots:n}=s;const{mainStyles:l}=se(),{ssrBootStyles:a}=Z();return J(()=>k(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[l.value,a.value]},{default:()=>{var t,c;return[e.scrollable?k("div",{class:"v-main__scroller"},[(t=n.default)==null?void 0:t.call(n)]):(c=n.default)==null?void 0:c.call(n)]}})),{}}});function Pe(e){let{rootEl:s,isSticky:n,layoutItemStyles:l}=e;const a=B(!1),t=B(0),c=w(()=>{const m=typeof a.value=="boolean"?"top":a.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[m]:Y(t.value)}:{top:l.value.top}]});te(()=>{N(n,m=>{m?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),ae(()=>{document.removeEventListener("scroll",b)});let f=0;function b(){var g;const m=f>window.scrollY?"up":"down",i=s.value.getBoundingClientRect(),v=parseFloat((g=l.value.top)!=null?g:0),d=window.scrollY-Math.max(0,t.value-v),h=i.height+Math.max(t.value,v)-window.scrollY-window.innerHeight;i.height<window.innerHeight-v?(a.value="top",t.value=v):m==="up"&&a.value==="bottom"||m==="down"&&a.value==="top"?(t.value=window.scrollY+i.top,a.value=!0):m==="down"&&h<=0?(t.value=0,a.value="bottom"):m==="up"&&d<=0&&(t.value=i.top+d,a.value="top"),f=window.scrollY}return{isStuck:a,stickyStyles:c}}const Le=100,He=20;function q(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function F(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const l=q(s),a=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);s+=(a-l)*Math.abs(a),n===e.length-1&&(s*=.5)}return q(s)*1e3}function Re(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{var f;((f=e[t.identifier])!=null?f:e[t.identifier]=new be(He)).push([a.timeStamp,t])})}function n(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function l(a){var m;const t=(m=e[a])==null?void 0:m.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const c=t[0],f=[],b=[];for(const i of t){if(c[0]-i[0]>Le)break;f.push({t:i[0],d:i[1].clientX}),b.push({t:i[0],d:i[1].clientY})}return{x:F(f),y:F(b),get direction(){const{x:i,y:v}=this,[d,h]=[Math.abs(i),Math.abs(v)];return d>h&&i>=0?"right":d>h&&i<=0?"left":h>d&&v>=0?"down":h>d&&v<=0?"up":Ye()}}}return{addMovement:s,endTouch:n,getVelocity:l}}function Ye(){throw new Error}function Ne(e){let{isActive:s,isTemporary:n,width:l,touchless:a,position:t}=e;te(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",V,{passive:!1}),window.addEventListener("touchend",x,{passive:!0})}),ae(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",V),window.removeEventListener("touchend",x)});const c=w(()=>["left","right"].includes(t.value)),{addMovement:f,endTouch:b,getVelocity:m}=Re();let i=!1;const v=B(!1),d=B(0),h=B(0);let g;function H(o,u){return(t.value==="left"?o:t.value==="right"?document.documentElement.clientWidth-o:t.value==="top"?o:t.value==="bottom"?document.documentElement.clientHeight-o:L())-(u?l.value:0)}function R(o){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const r=t.value==="left"?(o-h.value)/l.value:t.value==="right"?(document.documentElement.clientWidth-o-h.value)/l.value:t.value==="top"?(o-h.value)/l.value:t.value==="bottom"?(document.documentElement.clientHeight-o-h.value)/l.value:L();return u?Math.max(0,Math.min(1,r)):r}function C(o){if(a.value)return;const u=o.changedTouches[0].clientX,r=o.changedTouches[0].clientY,y=25,E=t.value==="left"?u<y:t.value==="right"?u>document.documentElement.clientWidth-y:t.value==="top"?r<y:t.value==="bottom"?r>document.documentElement.clientHeight-y:L(),T=s.value&&(t.value==="left"?u<l.value:t.value==="right"?u>document.documentElement.clientWidth-l.value:t.value==="top"?r<l.value:t.value==="bottom"?r>document.documentElement.clientHeight-l.value:L());(E||T||s.value&&n.value)&&(i=!0,g=[u,r],h.value=H(c.value?u:r,s.value),d.value=R(c.value?u:r),b(o),f(o))}function V(o){const u=o.changedTouches[0].clientX,r=o.changedTouches[0].clientY;if(i){if(!o.cancelable){i=!1;return}const E=Math.abs(u-g[0]),T=Math.abs(r-g[1]);(c.value?E>T&&E>3:T>E&&T>3)?(v.value=!0,i=!1):(c.value?T:E)>3&&(i=!1)}if(!v.value)return;o.preventDefault(),f(o);const y=R(c.value?u:r,!1);d.value=Math.max(0,Math.min(1,y)),y>1?h.value=H(c.value?u:r,!0):y<0&&(h.value=H(c.value?u:r,!1))}function x(o){if(i=!1,!v.value)return;f(o),v.value=!1;const u=m(o.changedTouches[0].identifier),r=Math.abs(u.x),y=Math.abs(u.y);(c.value?r>y&&r>400:y>r&&y>3)?s.value=u.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||L()):s.value=d.value>.5}const M=w(()=>v.value?{transform:t.value==="left"?`translateX(calc(-100% + ${d.value*l.value}px))`:t.value==="right"?`translateX(calc(100% - ${d.value*l.value}px))`:t.value==="top"?`translateY(calc(-100% + ${d.value*l.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${d.value*l.value}px))`:L(),transition:"none"}:void 0);return{isDragging:v,dragProgress:d,dragStyles:M}}function L(){throw new Error}const _e=["start","end","left","right","top","bottom"],Oe=W()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>_e.includes(e)},sticky:Boolean,...K(),...U(),...re(),...G(),...I({tag:"nav"}),...ne()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:n,emit:l,slots:a}=s;const{isRtl:t}=Se(),{themeClasses:c}=oe(e),{borderClasses:f}=j(e),{backgroundColorClasses:b,backgroundColorStyles:m}=_(D(e,"color")),{elevationClasses:i}=Q(e),{mobile:v}=ke(),{roundedClasses:d}=ee(e),h=ce(),g=Me(e,"modelValue",null,S=>!!S),{ssrBootStyles:H}=Z(),R=B(),C=B(!1),V=w(()=>e.rail&&e.expandOnHover&&C.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),x=w(()=>de(e.location,t.value)),M=w(()=>!e.permanent&&(v.value||e.temporary)),o=w(()=>e.sticky&&!M.value&&x.value!=="bottom");e.expandOnHover&&e.rail!=null&&N(C,S=>l("update:rail",!S)),e.disableResizeWatcher||N(M,S=>!e.permanent&&Ve(()=>g.value=!S)),!e.disableRouteWatcher&&h&&N(h.currentRoute,()=>M.value&&(g.value=!1)),N(()=>e.permanent,S=>{S&&(g.value=!0)}),Ee(()=>{e.modelValue!=null||M.value||(g.value=e.permanent||!v.value)});const{isDragging:u,dragProgress:r,dragStyles:y}=Ne({isActive:g,isTemporary:M,width:V,touchless:D(e,"touchless"),position:x}),E=w(()=>{const S=M.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):V.value;return u.value?S*r.value:S}),{layoutItemStyles:T,layoutRect:P,layoutItemScrimStyles:le}=ve({id:e.name,order:w(()=>parseInt(e.order,10)),position:x,layoutSize:E,elementSize:V,active:w(()=>g.value||u.value),disableTransitions:w(()=>u.value),absolute:w(()=>e.absolute||o.value&&typeof O.value!="string")}),{isStuck:O,stickyStyles:ue}=Pe({rootEl:R,isSticky:o,layoutItemStyles:T}),$=_(w(()=>typeof e.scrim=="string"?e.scrim:null)),ie=w(()=>({...u.value?{opacity:r.value*.2,transition:"none"}:void 0,...P.value?{left:Y(P.value.left),right:Y(P.value.right),top:Y(P.value.top),bottom:Y(P.value.bottom)}:void 0,...le.value}));return Te({VList:{bgColor:"transparent"}}),J(()=>{const S=a.image||e.image;return k(Be,null,[k(e.tag,Ce({ref:R,onMouseenter:()=>C.value=!0,onMouseleave:()=>C.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${x.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":C.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":M.value,"v-navigation-drawer--active":g.value,"v-navigation-drawer--sticky":o.value},c.value,b.value,f.value,i.value,d.value],style:[m.value,T.value,y.value,H.value,ue.value]},n),{default:()=>{var X,z,p,A;return[S&&k("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(X=a.image)==null?void 0:X.call(a,{image:e.image}):k("img",{src:e.image,alt:""},null)]),a.prepend&&k("div",{class:"v-navigation-drawer__prepend"},[(z=a.prepend)==null?void 0:z.call(a)]),k("div",{class:"v-navigation-drawer__content"},[(p=a.default)==null?void 0:p.call(a)]),a.append&&k("div",{class:"v-navigation-drawer__append"},[(A=a.append)==null?void 0:A.call(a)])]}}),k(xe,{name:"fade-transition"},{default:()=>[M.value&&(u.value||g.value)&&!!e.scrim&&k("div",{class:["v-navigation-drawer__scrim",$.backgroundColorClasses.value],style:[ie.value,$.backgroundColorStyles.value],onClick:()=>g.value=!1},null)]})])}),{isStuck:O}}});const $e=W()({name:"VSheet",props:{color:String,...K(),...me(),...U(),...he(),...fe(),...G(),...I(),...ne()},setup(e,s){let{slots:n}=s;const{themeClasses:l}=oe(e),{backgroundColorClasses:a,backgroundColorStyles:t}=_(D(e,"color")),{borderClasses:c}=j(e),{dimensionStyles:f}=ge(e),{elevationClasses:b}=Q(e),{locationStyles:m}=ye(e),{positionClasses:i}=we(e),{roundedClasses:v}=ee(e);return()=>k(e.tag,{class:["v-sheet",l.value,a.value,c.value,b.value,i.value,v.value],style:[t.value,f.value,m.value]},n)}});export{Oe as V,$e as a,We as b};