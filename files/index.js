import{D as h,E as T,H as f,N as y,a as s,o as n,p as F,s as d,t as x,w,x as v,z as R}from"./chunk-7DO7UQJB.js";n();n();n();n();var E=s(e=>w()>=e.showAfter,"executeVisitFilter");n();var k=s(()=>{var r;let e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(((r=window==null?void 0:window.navigator)==null?void 0:r.userAgent)||""),t=window.matchMedia&&window.matchMedia("(max-width: 767px)").matches;return e||t},"isMobile"),I=s(e=>!e||e==="all"?!0:k()?e==="mobile":e==="desktop","executeDeviceTypeFilter");n();n();function P(e){let t=e.includePageTypes;return e.showOnAllPageTypes||!t?{shouldTrigger:!0,delay:e.delay}:{shouldTrigger:t==null?void 0:t.includes(R()),delay:e.delay}}s(P,"executePageTypeRule");n();var D=s((e,t)=>{let r=s(i=>{i.clientY<=150&&(window.ShopifyForms={...window.ShopifyForms,triggerExitIntent:!0},t(),document.dispatchEvent(o),document.removeEventListener("mouseleave",r))},"handler"),o=new Event(`forms:exit-intent:${e}`);document.addEventListener("mouseleave",r)},"detectExitIntent");n();var g=s(async(e,t,r)=>{let{triggers:o,filters:i}=t,a=!1;if(!o.navigation||!I(i.device))return!1;let m=P(o.navigation);return m.shouldTrigger?(o.displayDetectLeave&&(D(e,r),a=!0),(i.visit?E(i.visit):!0)?(await F(m.delay),r(),!0):a):!1},"executeDisplayRules");x(!1);var b=s(async(e,t,r,o,i)=>{if(document.getElementById(`app-embed-container-${e}`)&&r.form.layout!=="inline")return;let{setupApp:l}=await import("./App-D563ASNB.js");l(e,t,r,i,o)},"importAndRenderApp"),A=s(async(e,t,r,o,i)=>{let{setupApp:a}=await import("./App-D563ASNB.js");for(let l of i)a(e,t,r,l,o)},"importAndRenderInlineForms"),S=!1;(async()=>{try{let e=new T({version:2}),{formInstances:t,clientCountry:r}=await e.getMultipleInstances();if(!t||(t==null?void 0:t.length)===0)return;v(),S?await V(t,r):await B(t,r)}catch(e){if(e instanceof h&&e.status===404)return;if(e.message&&e.message.match(/(Load failed|Failed to fetch|NetworkError when attempting to fetch resource|cancelled)/)){d.fromError(e,{type:"NetworkError",severity:"info"}).notify();return}d.fromError(e).notify()}})();async function B(e,t){return Promise.all(e.map(async r=>{let{id:o,styles:i,formDefinition:a,displayRules:l}=r,m=y(o),c=a.form.layout==="inline";if(c&&(m==null?void 0:m.length)>0)return A(o,i,a,t,m);if(!(c&&m.length<1||new f(o).isFormDismissed()))return g(o,l,async()=>{await b(o,i,a,t)})}))}s(B,"renderAllForms");async function V(e,t){let r=!1;for(let o of e){let{id:i,styles:a,formDefinition:l,displayRules:m}=o,c=y(i);if(l.form.layout==="inline"&&(c==null?void 0:c.length)>0){A(i,a,l,t,c);continue}if(r)return;new f(i).isFormDismissed()||(r=await g(i,m,async()=>{await b(i,a,l,t)}))}}s(V,"renderFormsByPriority");
//# sourceMappingURL=index.js.map
