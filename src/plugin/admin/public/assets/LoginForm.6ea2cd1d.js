var F=(x,d,c)=>new Promise((i,f)=>{var s=o=>{try{u(c.next(o))}catch(p){f(p)}},h=o=>{try{u(c.throw(o))}catch(p){f(p)}},u=o=>o.done?i(o.value):Promise.resolve(o.value).then(s,h);u((c=c.apply(x,d)).next())});import{a as D,I as v,c as N,b as U,l as z,r as y,m as E,f as V,k as e,o as $,h as K,w as I,v as b,j as a,p as n,i as M,B as j,q,t as A,s as P,F as G,x as O}from"./index.82c0877f.js";import{F as L}from"./index.75341559.js";import"./index.b826f11b.js";import H from"./LoginFormTitle.55aee464.js";import{u as J,a as Q,L as W,b as X}from"./useLogin.dd808e9c.js";import{C as Y,R as Z}from"./index.15c3cdec.js";import"./_baseIteratee.5798a650.js";const ee=["src"],ue=D({setup(x){const d=Y,c=Z,i=L.Item,f=v.Password,{t:s}=N(),{notification:h,createErrorModal:u}=O(),{prefixCls:o}=U("login"),p=z(),{setLoginState:ae,getLoginState:R}=J(),{getFormRules:T}=Q(),_=y(),w=y(!1);y(!1);const S=y(""),r=E({account:"",password:"",captcha:""}),{validForm:B}=X(_),C=V(()=>e(R)===W.LOGIN);function g(){S.value="/app/admin/common/account/captcha?r="+new Date().getTime()}g();function k(){return F(this,null,function*(){const m=yield B();if(!m)return;const l=setTimeout(()=>{g()},2e3);try{w.value=!0;const t=yield p.login({password:m.password,username:m.account,captcha:m.captcha,mode:"none"});clearTimeout(l),t?h.success({message:s("sys.login.loginSuccessTitle"),description:`${s("sys.login.loginSuccessDesc")}: ${t.nickname}`,duration:3}):g()}catch(t){u({title:s("sys.api.errorTip"),content:t.message||s("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${o}`)||document.body})}finally{w.value=!1}})}return(m,l)=>($(),K(G,null,[I(a(H,{class:"enter-x"},null,512),[[b,e(C)]]),I(a(e(L),{class:"p-4 enter-x",model:e(r),rules:e(T),ref_key:"formRef",ref:_,onKeypress:P(k,["enter"])},{default:n(()=>[a(e(i),{name:"account",class:"enter-x"},{default:n(()=>[a(e(v),{size:"large",value:e(r).account,"onUpdate:value":l[0]||(l[0]=t=>e(r).account=t),placeholder:e(s)("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),a(e(i),{name:"password",class:"enter-x"},{default:n(()=>[a(e(f),{size:"large",visibilityToggle:"",value:e(r).password,"onUpdate:value":l[1]||(l[1]=t=>e(r).password=t),placeholder:e(s)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),a(e(i),{name:"captcha",class:"enter-x"},{default:n(()=>[a(e(c),{type:"flex",justify:"space-between",align:"middle"},{default:n(()=>[a(e(d),null,{default:n(()=>[a(e(v),{size:"large",value:e(r).captcha,"onUpdate:value":l[2]||(l[2]=t=>e(r).captcha=t),placeholder:e(s)("sys.login.captcha"),class:"fix-auto-fill captcha-input",maxlength:5},null,8,["value","placeholder"])]),_:1}),a(e(d),null,{default:n(()=>[M("img",{src:S.value,onClick:g},null,8,ee)]),_:1})]),_:1})]),_:1}),a(e(i),{class:"enter-x"},{default:n(()=>[a(e(j),{type:"primary",size:"large",block:"",onClick:k,loading:w.value},{default:n(()=>[q(A(e(s)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules","onKeypress"]),[[b,e(C)]])],64))}});export{ue as default};