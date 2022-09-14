var v=(a,e,i)=>new Promise((f,c)=>{var d=t=>{try{n(i.next(t))}catch(u){c(u)}},m=t=>{try{n(i.throw(t))}catch(u){c(u)}},n=t=>t.done?f(t.value):Promise.resolve(t.value).then(d,m);n((i=i.apply(a,e)).next())});import{aG as b,I as F,c as M,m as T,r as h,a as P,B as A,aI as r,o as U,aJ as $,p as s,i as l,j as o,q as w,t as z,s as L,b5 as N,x as V}from"./index.82c0877f.js";import{B as K,A as j}from"./BasicForm.f0a3b275.js";import{B as O,a as q}from"./index.6147345a.js";import{b as E}from"./common.e975f21d.js";import{a as G,b as J}from"./useLogin.dd808e9c.js";import"./index.b826f11b.js";import{F as B}from"./index.75341559.js";import{T as S}from"./index.3f591fb8.js";import{C as H,R as Q}from"./index.15c3cdec.js";import"./index.34c27c3b.js";import"./index.8abbad91.js";import"./index.ac6fee30.js";import"./index.966faded.js";import"./index.d9c8ab71.js";import"./_baseIteratee.5798a650.js";import"./uniqBy.f755cc70.js";import"./download.0b8d409d.js";import"./useWindowSizeFn.4c098757.js";const W=H,X=Q,Y=B.Item,Z=F.Password,{t:x}=M(),aa=T({username:"",password:"",captcha:""}),y=h(),C=h(""),g=h(!1),{validForm:ea}=J(y),{getFormRules:oa}=G();function _(){C.value="/app/admin/plugin/app/captcha?r="+new Date().getTime()}_();const sa=P({components:{BasicForm:K,BasicModal:O,FormItem:Y,ACol:W,ARow:X,Input:F,Form:B,Button:A,InputPassword:Z,Tag:S,Alert:j},emits:["reload","register"],setup(){const[a,{closeModal:e}]=q(),{createMessage:i}=V(),{success:f}=i;function c(){return v(this,null,function*(){const d=yield ea();if(!d)return;const m=setTimeout(()=>{_(),g.value=!1},2e3);g.value=!0,yield E("/app/admin/plugin/app/login",d),g.value=!1,clearTimeout(m),e(),f("\u767B\u5F55\u6210\u529F")})}return{formRef:y,formData:aa,loading:g,handleLogin:c,register:a,getFormRules:oa,captchaUrl:C,t:x}}}),ta=l("div",{class:"px-4 py-2"},[l("div",{role:"alert",class:"mb-4 ant-alert ant-alert-info ant-alert-no-icon","data-show":"true"},[l("div",{class:"ant-alert-content"},[l("div",{class:"ant-alert-message"},[l("b",null,[w("\u6CE8\u610F\uFF1A\u6B64\u5904\u767B\u5F55 "),l("a",{href:"https://www.workerman.net",target:"_blank"},"workerman.net\u5B98\u7F51"),w(" \u8D26\u53F7")])])])])],-1),na={class:"p-4"},ra=["src"];function la(a,e,i,f,c,d){const m=r("Input"),n=r("FormItem"),t=r("InputPassword"),u=r("a-col"),I=r("a-row"),k=r("Button"),D=r("Form"),R=r("BasicModal");return U(),$(R,N(a.$attrs,{destroyOnClose:"",onRegister:a.register,title:"\u767B\u5F55workerman",showCancelBtn:!1,showOkBtn:!1}),{default:s(()=>[ta,l("div",na,[o(D,{class:"p-4 enter-x",model:a.formData,rules:a.getFormRules,ref:"formRef",onKeypress:L(a.handleLogin,["enter"])},{default:s(()=>[o(n,{name:"username",class:"enter-x"},{default:s(()=>[o(m,{size:"large",value:a.formData.username,"onUpdate:value":e[0]||(e[0]=p=>a.formData.username=p),placeholder:a.t("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),o(n,{name:"password",class:"enter-x"},{default:s(()=>[o(t,{size:"large",visibilityToggle:"",value:a.formData.password,"onUpdate:value":e[1]||(e[1]=p=>a.formData.password=p),placeholder:a.t("sys.login.password")},null,8,["value","placeholder"])]),_:1}),o(n,{name:"captcha",class:"enter-x"},{default:s(()=>[o(I,{type:"flex",justify:"space-between",align:"middle"},{default:s(()=>[o(u,null,{default:s(()=>[o(m,{size:"large",value:a.formData.captcha,"onUpdate:value":e[2]||(e[2]=p=>a.formData.captcha=p),placeholder:a.t("sys.login.captcha"),class:"fix-auto-fill captcha-input",maxlength:5},null,8,["value","placeholder"])]),_:1}),o(u,null,{default:s(()=>[l("img",{src:a.captchaUrl,onClick:e[3]||(e[3]=(...p)=>a.switchCatpcha&&a.switchCatpcha(...p))},null,8,ra)]),_:1})]),_:1})]),_:1}),o(n,{class:"enter-x"},{default:s(()=>[o(k,{type:"primary",size:"large",block:"",onClick:a.handleLogin,loading:a.loading},{default:s(()=>[w(z(a.t("sys.login.loginButton")),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["model","rules","onKeypress"])])]),_:1},16,["onRegister"])}var Ra=b(sa,[["render",la]]);export{Ra as default};