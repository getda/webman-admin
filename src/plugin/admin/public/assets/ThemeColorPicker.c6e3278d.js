import{aH as l,a as m,aE as c,b as d,o as i,h as r,F as _,b3 as f,n as a,aJ as u,aX as k,j as h}from"./index.bde7963b.js";import{b as v}from"./index.ed1d4028.js";import"./index.c5b98ab4.js";import"./uniqBy.3333e3da.js";import"./_baseIteratee.34b68bfe.js";import"./index.706d2d48.js";import"./useWindowSizeFn.ada338ad.js";import"./useContentViewHeight.9a4f8bdd.js";import"./index.357d6afd.js";import"./RedoOutlined.4aa527e6.js";import"./lock.e24f9ae8.js";import"./ArrowLeftOutlined.284f8ef3.js";import"./index.9b1e5ec7.js";const C=m({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:n}=d("setting-theme-picker");function s(o){e.event&&v(e.event,o)}return{prefixCls:n,handleClick:s}}}),b=["onClick"];function g(e,n,s,o,x,y){const p=u("CheckOutlined");return i(),r("div",{class:a(e.prefixCls)},[(i(!0),r(_,null,f(e.colorList||[],t=>(i(),r("span",{key:t,onClick:$=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:k({background:t})},[h(p)],14,b))),128))],2)}var A=l(C,[["render",g]]);export{A as default};