import{bm as C,C as H,j as p,aO as R,ao as U,a as $,U as N,r as z,m as M,V as X,ac as w,ak as J,aX as W,eX as q,a7 as G,_ as D,J as O,b9 as Q,w as Y,v as Z,T as E,ba as K,bQ as tt,aG as et,dl as L,dv as nt,eY as rt,b as at,f as I,aI as T,o as _,h as ot,aJ as k,aK as P,n as it,F as st,k as b,dD as V}from"./index.82c0877f.js";import{c as x,u as ct}from"./index.3a8c46be.js";import lt from"./SessionTimeoutLogin.33e8657c.js";import{s as ut,g as vt}from"./scrollTo.b00e6666.js";import"./uniqBy.f755cc70.js";import"./_baseIteratee.5798a650.js";import"./index.dacd76fc.js";import"./useWindowSizeFn.4c098757.js";import"./useContentViewHeight.d9006a19.js";import"./index.c5230f8e.js";import"./RedoOutlined.aaf6c144.js";import"./lock.feaa9ad0.js";import"./Login.4992a66d.js";import"./LoginForm.6ea2cd1d.js";import"./index.75341559.js";import"./index.b826f11b.js";import"./LoginFormTitle.55aee464.js";import"./useLogin.dd808e9c.js";import"./index.15c3cdec.js";function pt(e){var t,n=function(s){return function(){t=null,e.apply(void 0,H(s))}},r=function(){if(t==null){for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];t=C(n(c))}};return r.cancel=function(){return C.cancel(t)},r}var ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},gt=ft;function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){mt(e,a,n[a])})}return e}function mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(t,n){var r=F({},t,n.attrs);return p(R,F({},r,{icon:gt}),null)};A.displayName="VerticalAlignTopOutlined";A.inheritAttrs=!1;var dt=A,Tt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},_t=$({name:"ABackTop",inheritAttrs:!1,props:Tt(),setup:function(t,n){var r=n.slots,a=n.attrs,s=n.emit,c=N("back-top",t),o=c.prefixCls,g=c.direction,l=z(),m=M({visible:!1,scrollEvent:null}),B=function(){return l.value&&l.value.ownerDocument?l.value.ownerDocument:window},j=function(u){var v=t.target,f=v===void 0?B:v,d=t.duration;ut(0,{getContainer:f,duration:d}),s("click",u)},S=pt(function(i){var u=t.visibilityHeight,v=vt(i.target,!0);m.visible=v>u}),h=function(){var u=t.target,v=u||B,f=v();m.scrollEvent=tt(f,"scroll",function(d){S(d)}),S({target:f})},y=function(){m.scrollEvent&&m.scrollEvent.remove(),S.cancel()};return X(function(){return t.target},function(){y(),w(function(){h()})}),J(function(){w(function(){h()})}),W(function(){w(function(){h()})}),q(function(){y()}),G(function(){y()}),function(){var i,u,v=p("div",{class:"".concat(o.value,"-content")},[p("div",{class:"".concat(o.value,"-icon")},[p(dt,null,null)])]),f=D(D({},a),{onClick:j,class:(i={},O(i,"".concat(o.value),!0),O(i,"".concat(a.class),a.class),O(i,"".concat(o.value,"-rtl"),g.value==="rtl"),i)}),d=Q("fade");return p(K,d,{default:function(){return[Y(p("div",E(E({},f),{},{ref:l}),[((u=r.default)===null||u===void 0?void 0:u.call(r))||v]),[[Z,m.visible]])]}})}}}),bt=U(_t);const St=$({name:"LayoutFeatures",components:{BackTop:bt,LayoutLockPage:x(()=>L(()=>import("./index.66c69d03.js"),["assets/index.66c69d03.js","assets/index.82c0877f.js","assets/index.189d4760.css","assets/LockPage.aad37059.js","assets/LockPage.6755d871.css","assets/lock.feaa9ad0.js","assets/header.d801b988.js"])),SettingDrawer:x(()=>L(()=>import("./index.fdaeb054.js").then(function(e){return e.i}),["assets/index.fdaeb054.js","assets/index.5c7227e9.css","assets/index.82c0877f.js","assets/index.189d4760.css","assets/index.3a8c46be.js","assets/index.50de4ef0.css","assets/uniqBy.f755cc70.js","assets/_baseIteratee.5798a650.js","assets/index.dacd76fc.js","assets/index.55076fdd.css","assets/useWindowSizeFn.4c098757.js","assets/useContentViewHeight.d9006a19.js","assets/index.c5230f8e.js","assets/index.a2831ae3.css","assets/RedoOutlined.aaf6c144.js","assets/lock.feaa9ad0.js","assets/ArrowLeftOutlined.7608b6bc.js","assets/index.34c27c3b.js","assets/index.3a3c1369.css"])),SessionTimeoutLogin:lt},setup(){const{getUseOpenBackTop:e,getShowSettingButton:t,getSettingButtonPosition:n,getFullContent:r}=nt(),a=rt(),{prefixCls:s}=at("setting-drawer-feature"),{getShowHeader:c}=ct(),o=I(()=>a.getSessionTimeout),g=I(()=>{if(!b(t))return!1;const l=b(n);return l===V.AUTO?!b(c)||b(r):l===V.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:g,prefixCls:s,getIsSessionTimeout:o}}});function ht(e,t,n,r,a,s){const c=T("LayoutLockPage"),o=T("BackTop"),g=T("SettingDrawer"),l=T("SessionTimeoutLogin");return _(),ot(st,null,[p(c),e.getUseOpenBackTop?(_(),k(o,{key:0,target:e.getTarget},null,8,["target"])):P("",!0),e.getIsFixedSettingDrawer?(_(),k(g,{key:1,class:it(e.prefixCls)},null,8,["class"])):P("",!0),e.getIsSessionTimeout?(_(),k(l,{key:2})):P("",!0)],64)}var Nt=et(St,[["render",ht]]);export{Nt as default};