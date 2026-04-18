import{$ as h,$b as ae,Aa as xe,C as Ar,Ca as C,Cb as Oe,Da as mi,E as $,Ea as Nr,F as nn,Fa as je,Ga as Br,H as Sr,Ha as tt,I as et,Ia as an,Ic as ot,J as Te,Ja as nt,Jc as bi,Ka as cn,Kb as qr,Kc as io,L as wt,La as it,Lb as Jr,Lc as ro,M as Tr,Ma as rt,Mc as L,Na as jr,Nb as Et,Nc as oo,Oa as zr,Ob as Ct,P as Rr,Pa as Vr,Pb as fe,Pc as gn,Qa as Ur,R as xr,Ra as Hr,S as rn,Sa as $r,T as be,Ta as Wr,U as on,Ua as ve,Ub as gi,V as Re,Vb as J,W as Mr,Wb as z,X as Ir,Xa as Gr,Xb as Qr,Y as O,Ya as ze,Za as Yr,_ as Or,_a as ln,_b as Ue,a as D,aa as k,ab as ye,b as Qe,bb as Me,bc as fn,ca as m,cb as Z,cc as mn,da as b,db as oe,dc as pn,ea as a,eb as se,f as ie,ga as ui,gb as Ie,h as ge,hb as dn,i as vr,ia as Fr,ic as eo,j as p,ja as _e,jc as K,k as yr,ka as kr,kb as j,kc as to,l as di,lb as P,m as Dr,mb as E,n as wr,nb as pi,oa as w,ob as Xr,oc as At,pa as g,pb as H,q as ue,qa as hi,qb as un,s as en,sa as U,ta as v,tb as hn,u as q,ua as fi,ub as Zr,v as Er,va as Pr,vb as Kr,wa as re,xa as Lr,y as Cr,ya as sn,yc as no,z as tn,za as he,zb as Ve,zc as St}from"./chunk-33GRFTX6.js";function Tt(i,n){n=encodeURIComponent(n);for(let e of i.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var He=class{};var so=null;function De(){return so}function _i(i){so??=i}var Rt=class{},st=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:()=>a(ao),providedIn:"platform"})}return i})();var ao=(()=>{class i extends st{_location;_history;_doc=a(g);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return De().getBaseHref(this._doc)}onPopState(e){let t=De().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=De().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:()=>new i,providedIn:"platform"})}return i})();var Fe=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(c=>o.indexOf(c)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let t=n.toLowerCase();this.maybeSetNormalizedName(n,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(n,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var _n=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},vn=class{encodeKey(n){return co(n)}encodeValue(n){return co(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function ha(i,n){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,c]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(c),e.set(s,l)}),e}var fa=/%(\d[a-f0-9])/gi,ma={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function co(i){return encodeURIComponent(i).replace(fa,(n,e)=>ma[e]??n)}function bn(i){return`${i}`}var we=class i{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new vn,n.fromString){if(n.fromObject)throw new O(2805,!1);this.map=ha(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let t=n.fromObject[e],r=Array.isArray(t)?t.map(bn):[bn(t)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(t=>{let r=n[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(bn(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let t=this.map.get(n.param)||[],r=t.indexOf(bn(n.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function pa(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function lo(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function uo(i){return typeof Blob<"u"&&i instanceof Blob}function ho(i){return typeof FormData<"u"&&i instanceof FormData}function ga(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var fo="Content-Type",mo="Accept",go="text/plain",bo="application/json",ba=`${bo}, ${go}, */*`,at=class i{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,t,r){this.url=e,this.method=n.toUpperCase();let o;if(pa(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new O(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Fe,this.context??=new _n,!this.params)this.params=new we,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),l=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||lo(this.body)||uo(this.body)||ho(this.body)||ga(this.body)?this.body:this.body instanceof we?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ho(this.body)?null:uo(this.body)?this.body.type||null:lo(this.body)?null:typeof this.body=="string"?go:this.body instanceof we?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?bo:null}clone(n={}){let e=n.method||this.method,t=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,c=n.cache||this.cache,l=n.mode||this.mode,d=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer||this.referrer,y=n.integrity||this.integrity,F=n.referrerPolicy||this.referrerPolicy,T=n.transferCache??this.transferCache,x=n.timeout??this.timeout,_=n.body!==void 0?n.body:this.body,R=n.withCredentials??this.withCredentials,Y=n.reportProgress??this.reportProgress,pe=n.headers||this.headers,V=n.params||this.params,yt=n.context??this.context;return n.setHeaders!==void 0&&(pe=Object.keys(n.setHeaders).reduce((Dt,Be)=>Dt.set(Be,n.setHeaders[Be]),pe)),n.setParams&&(V=Object.keys(n.setParams).reduce((Dt,Be)=>Dt.set(Be,n.setParams[Be]),V)),new i(e,t,_,{params:V,headers:pe,context:yt,reportProgress:Y,responseType:r,withCredentials:R,transferCache:T,keepalive:o,cache:c,priority:s,timeout:x,mode:l,redirect:d,credentials:u,referrer:f,integrity:y,referrerPolicy:F})}},$e=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})($e||{}),lt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,t="OK"){this.headers=n.headers||new Fe,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||t,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},yn=class i extends lt{constructor(n={}){super(n)}type=$e.ResponseHeader;clone(n={}){return new i({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},xt=class i extends lt{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=$e.Response;clone(n={}){return new i({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},ct=class extends lt{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},_a=200,va=204;var ya=new m("");var Da=/^\)\]\}',?\n/;var yi=(()=>{class i{xhrFactory;tracingService=a(ln,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new O(-2800,!1);let t=this.xhrFactory;return ue(null).pipe(on(()=>new ge(o=>{let s=t.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((_,R)=>s.setRequestHeader(_,R.join(","))),e.headers.has(mo)||s.setRequestHeader(mo,ba),!e.headers.has(fo)){let _=e.detectContentTypeHeader();_!==null&&s.setRequestHeader(fo,_)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let _=e.responseType.toLowerCase();s.responseType=_!=="json"?_:"text"}let c=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let _=s.statusText||"OK",R=new Fe(s.getAllResponseHeaders()),Y=s.responseURL||e.url;return l=new yn({headers:R,status:s.status,statusText:_,url:Y}),l},u=this.maybePropagateTrace(()=>{let{headers:_,status:R,statusText:Y,url:pe}=d(),V=null;R!==va&&(V=typeof s.response>"u"?s.responseText:s.response),R===0&&(R=V?_a:0);let yt=R>=200&&R<300;if(e.responseType==="json"&&typeof V=="string"){let Dt=V;V=V.replace(Da,"");try{V=V!==""?JSON.parse(V):null}catch(Be){V=Dt,yt&&(yt=!1,V={error:Be,text:V})}}yt?(o.next(new xt({body:V,headers:_,status:R,statusText:Y,url:pe||void 0})),o.complete()):o.error(new ct({error:V,headers:_,status:R,statusText:Y,url:pe||void 0}))}),f=this.maybePropagateTrace(_=>{let{url:R}=d(),Y=new ct({error:_,status:s.status||0,statusText:s.statusText||"Unknown Error",url:R||void 0});o.error(Y)}),y=f;e.timeout&&(y=this.maybePropagateTrace(_=>{let{url:R}=d(),Y=new ct({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:R||void 0});o.error(Y)}));let F=!1,T=this.maybePropagateTrace(_=>{F||(o.next(d()),F=!0);let R={type:$e.DownloadProgress,loaded:_.loaded};_.lengthComputable&&(R.total=_.total),e.responseType==="text"&&s.responseText&&(R.partialText=s.responseText),o.next(R)}),x=this.maybePropagateTrace(_=>{let R={type:$e.UploadProgress,loaded:_.loaded};_.lengthComputable&&(R.total=_.total),o.next(R)});return s.addEventListener("load",u),s.addEventListener("error",f),s.addEventListener("timeout",y),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",T),c!==null&&s.upload&&s.upload.addEventListener("progress",x)),s.send(c),o.next({type:$e.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",u),s.removeEventListener("timeout",y),e.reportProgress&&(s.removeEventListener("progress",T),c!==null&&s.upload&&s.upload.removeEventListener("progress",x)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(t){return new(t||i)(b(He))};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function wa(i,n){return n(i)}function Ea(i,n,e){return(t,r)=>kr(e,()=>n(t,o=>i(o,r)))}var _o=new m("",{factory:()=>[]}),vo=new m(""),yo=new m("",{factory:()=>!0});var Di=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=b(yi),r},providedIn:"root"})}return i})();var Dn=(()=>{class i{backend;injector;chain=null;pendingTasks=a(Lr);contributeToStability=a(yo);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(_o),...this.injector.get(vo,[])]));this.chain=t.reduceRight((r,o)=>Ea(r,o,this.injector),wa)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Tr(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||i)(b(Di),b(_e))};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),wi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=b(Dn),r},providedIn:"root"})}return i})();function vi(i,n){return{body:n,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,credentials:i.credentials,transferCache:i.transferCache,timeout:i.timeout,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,integrity:i.integrity,referrer:i.referrer,referrerPolicy:i.referrerPolicy}}var Do=(()=>{class i{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof at)o=e;else{let l;r.headers instanceof Fe?l=r.headers:l=new Fe(r.headers);let d;r.params&&(r.params instanceof we?d=r.params:d=new we({fromObject:r.params})),o=new at(e,t,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=ue(o).pipe(Sr(l=>this.handler.handle(l)));if(e instanceof at||r.observe==="events")return s;let c=s.pipe($(l=>l instanceof xt));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(q(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new O(2806,!1);return l.body}));case"blob":return c.pipe(q(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new O(2807,!1);return l.body}));case"text":return c.pipe(q(l=>{if(l.body!==null&&typeof l.body!="string")throw new O(2808,!1);return l.body}));default:return c.pipe(q(l=>l.body))}case"response":return c;default:throw new O(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new we().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,vi(r,t))}post(e,t,r={}){return this.request("POST",e,vi(r,t))}put(e,t,r={}){return this.request("PUT",e,vi(r,t))}static \u0275fac=function(t){return new(t||i)(b(wi))};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ca=new m("",{factory:()=>!0}),Aa="XSRF-TOKEN",Sa=new m("",{factory:()=>Aa}),Ta="X-XSRF-TOKEN",Ra=new m("",{factory:()=>Ta}),xa=(()=>{class i{cookieName=a(Sa);doc=a(g);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Tt(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),wo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=b(xa),r},providedIn:"root"})}return i})();function Ma(i,n){if(!a(Ca)||i.method==="GET"||i.method==="HEAD")return n(i);try{let r=a(st).href,{origin:o}=new URL(r),{origin:s}=new URL(i.url,o);if(o!==s)return n(i)}catch{return n(i)}let e=a(wo).getToken(),t=a(Ra);return e!=null&&!i.headers.has(t)&&(i=i.clone({headers:i.headers.set(t,e)})),n(i)}function Ia(...i){let n=[Do,Dn,{provide:wi,useExisting:Dn},{provide:Di,useFactory:()=>a(ya,{optional:!0})??a(yi)},{provide:_o,useValue:Ma,multi:!0}];for(let e of i)n.push(...e.\u0275providers);return ui(n)}function Ao(i,n){return i?n?i.endsWith("/")?n.startsWith("/")?i+n.slice(1):i+n:n.startsWith("/")?i+n:`${i}/${n}`:i:n}function Eo(i){let n=i.search(/#|\?|$/);return i[n-1]==="/"?i.slice(0,n-1)+i.slice(n):i}function ke(i){return i&&i[0]!=="?"?`?${i}`:i}var wn=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:()=>a(Fa),providedIn:"root"})}return i})(),Oa=new m(""),Fa=(()=>{class i extends wn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??a(g).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ao(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+ke(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let s=this.prepareExternalUrl(r+ke(o));this._platformLocation.pushState(e,t,s)}replaceState(e,t,r,o){let s=this.prepareExternalUrl(r+ke(o));this._platformLocation.replaceState(e,t,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(b(st),b(Oa,8))};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var En=(()=>{class i{_subject=new p;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=La(Eo(Co(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+ke(t))}normalize(e){return i.stripTrailingSlash(Pa(this._basePath,Co(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ke(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ke(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=ke;static joinWithSlash=Ao;static stripTrailingSlash=Eo;static \u0275fac=function(t){return new(t||i)(b(wn))};static \u0275prov=h({token:i,factory:()=>ka(),providedIn:"root"})}return i})();function ka(){return new En(b(wn))}function Pa(i,n){if(!i||!n.startsWith(i))return n;let e=n.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Co(i){return i.replace(/\/index.html$/,"")}function La(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var W=(function(i){return i[i.Format=0]="Format",i[i.Standalone=1]="Standalone",i})(W||{}),S=(function(i){return i[i.Narrow=0]="Narrow",i[i.Abbreviated=1]="Abbreviated",i[i.Wide=2]="Wide",i[i.Short=3]="Short",i})(S||{}),X=(function(i){return i[i.Short=0]="Short",i[i.Medium=1]="Medium",i[i.Long=2]="Long",i[i.Full=3]="Full",i})(X||{}),Ce={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Ro(i){return J(i)[z.LocaleId]}function xo(i,n,e){let t=J(i),r=[t[z.DayPeriodsFormat],t[z.DayPeriodsStandalone]],o=Q(r,n);return Q(o,e)}function Mo(i,n,e){let t=J(i),r=[t[z.DaysFormat],t[z.DaysStandalone]],o=Q(r,n);return Q(o,e)}function Io(i,n,e){let t=J(i),r=[t[z.MonthsFormat],t[z.MonthsStandalone]],o=Q(r,n);return Q(o,e)}function Oo(i,n){let t=J(i)[z.Eras];return Q(t,n)}function Mt(i,n){let e=J(i);return Q(e[z.DateFormat],n)}function It(i,n){let e=J(i);return Q(e[z.TimeFormat],n)}function Ot(i,n){let t=J(i)[z.DateTimeFormat];return Q(t,n)}function Ft(i,n){let e=J(i),t=e[z.NumberSymbols][n];if(typeof t>"u"){if(n===Ce.CurrencyDecimal)return e[z.NumberSymbols][Ce.Decimal];if(n===Ce.CurrencyGroup)return e[z.NumberSymbols][Ce.Group]}return t}function Fo(i){if(!i[z.ExtraData])throw new O(2303,!1)}function ko(i){let n=J(i);return Fo(n),(n[z.ExtraData][2]||[]).map(t=>typeof t=="string"?Ei(t):[Ei(t[0]),Ei(t[1])])}function Po(i,n,e){let t=J(i);Fo(t);let r=[t[z.ExtraData][0],t[z.ExtraData][1]],o=Q(r,n)||[];return Q(o,e)||[]}function Q(i,n){for(let e=n;e>-1;e--)if(typeof i[e]<"u")return i[e];throw new O(2304,!1)}function Ei(i){let[n,e]=i.split(":");return{hours:+n,minutes:+e}}var Na=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Cn={},Ba=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Lo(i,n,e,t){let r=Ya(i);n=Ee(e,n)||n;let s=[],c;for(;n;)if(c=Ba.exec(n),c){s=s.concat(c.slice(1));let u=s.pop();if(!u)break;n=u}else{s.push(n);break}let l=r.getTimezoneOffset();t&&(l=Bo(t,l),r=Ga(r,t));let d="";return s.forEach(u=>{let f=$a(u);d+=f?f(r,e,l):u==="''"?"'":u.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),d}function xn(i,n,e){let t=new Date(0);return t.setFullYear(i,n,e),t.setHours(0,0,0),t}function Ee(i,n){let e=Ro(i);if(Cn[e]??={},Cn[e][n])return Cn[e][n];let t="";switch(n){case"shortDate":t=Mt(i,X.Short);break;case"mediumDate":t=Mt(i,X.Medium);break;case"longDate":t=Mt(i,X.Long);break;case"fullDate":t=Mt(i,X.Full);break;case"shortTime":t=It(i,X.Short);break;case"mediumTime":t=It(i,X.Medium);break;case"longTime":t=It(i,X.Long);break;case"fullTime":t=It(i,X.Full);break;case"short":let r=Ee(i,"shortTime"),o=Ee(i,"shortDate");t=An(Ot(i,X.Short),[r,o]);break;case"medium":let s=Ee(i,"mediumTime"),c=Ee(i,"mediumDate");t=An(Ot(i,X.Medium),[s,c]);break;case"long":let l=Ee(i,"longTime"),d=Ee(i,"longDate");t=An(Ot(i,X.Long),[l,d]);break;case"full":let u=Ee(i,"fullTime"),f=Ee(i,"fullDate");t=An(Ot(i,X.Full),[u,f]);break}return t&&(Cn[e][n]=t),t}function An(i,n){return n&&(i=i.replace(/\{([^}]+)}/g,function(e,t){return n!=null&&t in n?n[t]:e})),i}function ce(i,n,e="-",t,r){let o="";(i<0||r&&i<=0)&&(r?i=-i+1:(i=-i,o=e));let s=String(i);for(;s.length<n;)s="0"+s;return t&&(s=s.slice(s.length-n)),o+s}function ja(i,n){return ce(i,3).substring(0,n)}function B(i,n,e=0,t=!1,r=!1){return function(o,s){let c=za(i,o);if((e>0||c>-e)&&(c+=e),i===3)c===0&&e===-12&&(c=12);else if(i===6)return ja(c,n);let l=Ft(s,Ce.MinusSign);return ce(c,n,l,t,r)}}function za(i,n){switch(i){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new O(2301,!1)}}function M(i,n,e=W.Format,t=!1){return function(r,o){return Va(r,o,i,n,e,t)}}function Va(i,n,e,t,r,o){switch(e){case 2:return Io(n,r,t)[i.getMonth()];case 1:return Mo(n,r,t)[i.getDay()];case 0:let s=i.getHours(),c=i.getMinutes();if(o){let d=ko(n),u=Po(n,r,t),f=d.findIndex(y=>{if(Array.isArray(y)){let[F,T]=y,x=s>=F.hours&&c>=F.minutes,_=s<T.hours||s===T.hours&&c<T.minutes;if(F.hours<T.hours){if(x&&_)return!0}else if(x||_)return!0}else if(y.hours===s&&y.minutes===c)return!0;return!1});if(f!==-1)return u[f]}return xo(n,r,t)[s<12?0:1];case 3:return Oo(n,t)[i.getFullYear()<=0?0:1];default:let l=e;throw new O(2302,!1)}}function Sn(i){return function(n,e,t){let r=-1*t,o=Ft(e,Ce.MinusSign),s=r>0?Math.floor(r/60):Math.ceil(r/60);switch(i){case 0:return(r>=0?"+":"")+ce(s,2,o)+ce(Math.abs(r%60),2,o);case 1:return"GMT"+(r>=0?"+":"")+ce(s,1,o);case 2:return"GMT"+(r>=0?"+":"")+ce(s,2,o)+":"+ce(Math.abs(r%60),2,o);case 3:return t===0?"Z":(r>=0?"+":"")+ce(s,2,o)+":"+ce(Math.abs(r%60),2,o);default:throw new O(2310,!1)}}}var Ua=0,Rn=4;function Ha(i){let n=xn(i,Ua,1).getDay();return xn(i,0,1+(n<=Rn?Rn:Rn+7)-n)}function No(i){let n=i.getDay(),e=n===0?-3:Rn-n;return xn(i.getFullYear(),i.getMonth(),i.getDate()+e)}function Ci(i,n=!1){return function(e,t){let r;if(n){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();r=1+Math.floor((s+o)/7)}else{let o=No(e),s=Ha(o.getFullYear()),c=o.getTime()-s.getTime();r=1+Math.round(c/6048e5)}return ce(r,i,Ft(t,Ce.MinusSign))}}function Tn(i,n=!1){return function(e,t){let o=No(e).getFullYear();return ce(o,i,Ft(t,Ce.MinusSign),n)}}var Ai={};function $a(i){if(Ai[i])return Ai[i];let n;switch(i){case"G":case"GG":case"GGG":n=M(3,S.Abbreviated);break;case"GGGG":n=M(3,S.Wide);break;case"GGGGG":n=M(3,S.Narrow);break;case"y":n=B(0,1,0,!1,!0);break;case"yy":n=B(0,2,0,!0,!0);break;case"yyy":n=B(0,3,0,!1,!0);break;case"yyyy":n=B(0,4,0,!1,!0);break;case"Y":n=Tn(1);break;case"YY":n=Tn(2,!0);break;case"YYY":n=Tn(3);break;case"YYYY":n=Tn(4);break;case"M":case"L":n=B(1,1,1);break;case"MM":case"LL":n=B(1,2,1);break;case"MMM":n=M(2,S.Abbreviated);break;case"MMMM":n=M(2,S.Wide);break;case"MMMMM":n=M(2,S.Narrow);break;case"LLL":n=M(2,S.Abbreviated,W.Standalone);break;case"LLLL":n=M(2,S.Wide,W.Standalone);break;case"LLLLL":n=M(2,S.Narrow,W.Standalone);break;case"w":n=Ci(1);break;case"ww":n=Ci(2);break;case"W":n=Ci(1,!0);break;case"d":n=B(2,1);break;case"dd":n=B(2,2);break;case"c":case"cc":n=B(7,1);break;case"ccc":n=M(1,S.Abbreviated,W.Standalone);break;case"cccc":n=M(1,S.Wide,W.Standalone);break;case"ccccc":n=M(1,S.Narrow,W.Standalone);break;case"cccccc":n=M(1,S.Short,W.Standalone);break;case"E":case"EE":case"EEE":n=M(1,S.Abbreviated);break;case"EEEE":n=M(1,S.Wide);break;case"EEEEE":n=M(1,S.Narrow);break;case"EEEEEE":n=M(1,S.Short);break;case"a":case"aa":case"aaa":n=M(0,S.Abbreviated);break;case"aaaa":n=M(0,S.Wide);break;case"aaaaa":n=M(0,S.Narrow);break;case"b":case"bb":case"bbb":n=M(0,S.Abbreviated,W.Standalone,!0);break;case"bbbb":n=M(0,S.Wide,W.Standalone,!0);break;case"bbbbb":n=M(0,S.Narrow,W.Standalone,!0);break;case"B":case"BB":case"BBB":n=M(0,S.Abbreviated,W.Format,!0);break;case"BBBB":n=M(0,S.Wide,W.Format,!0);break;case"BBBBB":n=M(0,S.Narrow,W.Format,!0);break;case"h":n=B(3,1,-12);break;case"hh":n=B(3,2,-12);break;case"H":n=B(3,1);break;case"HH":n=B(3,2);break;case"m":n=B(4,1);break;case"mm":n=B(4,2);break;case"s":n=B(5,1);break;case"ss":n=B(5,2);break;case"S":n=B(6,1);break;case"SS":n=B(6,2);break;case"SSS":n=B(6,3);break;case"Z":case"ZZ":case"ZZZ":n=Sn(0);break;case"ZZZZZ":n=Sn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=Sn(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=Sn(2);break;default:return null}return Ai[i]=n,n}function Bo(i,n){i=i.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+i)/6e4;return isNaN(e)?n:e}function Wa(i,n){return i=new Date(i.getTime()),i.setMinutes(i.getMinutes()+n),i}function Ga(i,n,e){let r=i.getTimezoneOffset(),o=Bo(n,r);return Wa(i,-1*(o-r))}function Ya(i){if(So(i))return i;if(typeof i=="number"&&!isNaN(i))return new Date(i);if(typeof i=="string"){if(i=i.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(i)){let[r,o=1,s=1]=i.split("-").map(c=>+c);return xn(r,o-1,s)}let e=parseFloat(i);if(!isNaN(i-e))return new Date(e);let t;if(t=i.match(Na))return Xa(t)}let n=new Date(i);if(!So(n))throw new O(2311,!1);return n}function Xa(i){let n=new Date(0),e=0,t=0,r=i[8]?n.setUTCFullYear:n.setFullYear,o=i[8]?n.setUTCHours:n.setHours;i[9]&&(e=Number(i[9]+i[10]),t=Number(i[9]+i[11])),r.call(n,Number(i[1]),Number(i[2])-1,Number(i[3]));let s=Number(i[4]||0)-e,c=Number(i[5]||0)-t,l=Number(i[6]||0),d=Math.floor(parseFloat("0."+(i[7]||0))*1e3);return o.call(n,s,c,l,d),n}function So(i){return i instanceof Date&&!isNaN(i.valueOf())}var Si=/\s+/,To=[],Za=(()=>{class i{_ngEl;_renderer;initialClasses=To;rawClass;stateMap=new Map;constructor(e,t){this._ngEl=e,this._renderer=t}set klass(e){this.initialClasses=e!=null?e.trim().split(Si):To}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Si):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==t&&(r.changed=!0,r.enabled=t),r.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],r=e[1];r.changed?(this._toggleClass(t,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),r.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(Si).forEach(r=>{t?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(t){return new(t||i)(se(C),se(oe))};static \u0275dir=E({type:i,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return i})();var Ka=(()=>{class i{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,t,r){this._ngEl=e,this._differs=t,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:ze.DashCase;t!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${t}${o}`:t,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(t=>this._setStyle(t.key,null)),e.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}static \u0275fac=function(t){return new(t||i)(se(C),se(io),se(oe))};static \u0275dir=E({type:i,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return i})(),qa=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=a(w);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||i)(se(Ie))};static \u0275dir=E({type:i,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[he]})}return i})();function jo(i,n){return new O(2100,!1)}var Ti=class{createSubscription(n,e,t){return St(()=>n.subscribe({next:e,error:t}))}dispose(n){St(()=>n.unsubscribe())}},Ri=class{createSubscription(n,e,t){return n.then(r=>e?.(r),r=>t?.(r)),{unsubscribe:()=>{e=null,t=null}}}dispose(n){n.unsubscribe()}},Ja=new Ri,Qa=new Ti,ec=(()=>{class i{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=a(Pr);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(Zr(e))return Ja;if(Kr(e))return Qa;throw jo(i,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(t){return new(t||i)(se(ot,16))};static \u0275pipe=pi({name:"async",type:i,pure:!1})}return i})();var tc="mediumDate",zo=new m(""),Vo=new m(""),nc=(()=>{class i{locale;defaultTimezone;defaultOptions;constructor(e,t,r){this.locale=e,this.defaultTimezone=t,this.defaultOptions=r}transform(e,t,r,o){if(e==null||e===""||e!==e)return null;try{let s=t??this.defaultOptions?.dateFormat??tc,c=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Lo(e,s,o||this.locale,c)}catch(s){throw jo(i,s.message)}}static \u0275fac=function(t){return new(t||i)(se(no,16),se(zo,24),se(Vo,24))};static \u0275pipe=pi({name:"date",type:i,pure:!0})}return i})();var Uo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=k({})}return i})();var xi="browser";function Ho(i){return i===xi}var kt=class{_doc;constructor(n){this._doc=n}manager},Mn=(()=>{class i extends kt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||i)(b(g))};static \u0275prov=h({token:i,factory:i.\u0275fac})}return i})(),Fn=new m(""),Fi=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof Mn));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof Mn);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new O(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||i)(b(Fn),b(v))};static \u0275prov=h({token:i,factory:i.\u0275fac})}return i})(),Mi="ng-app-id";function $o(i){for(let n of i)n.remove()}function Wo(i,n){let e=n.createElement("style");return e.textContent=i,e}function rc(i,n,e,t){let r=i.head?.querySelectorAll(`style[${Mi}="${n}"],link[${Mi}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Mi),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Oi(i,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var ki=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,rc(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Wo);t?.forEach(r=>this.addUsage(r,this.external,Oi))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&($o(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])$o(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Wo(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,Oi(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||i)(b(g),b(je),b(nt,8),b(tt))};static \u0275prov=h({token:i,factory:i.\u0275fac})}return i})(),Ii={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Pi=/%COMP%/g;var Yo="%COMP%",oc=`_nghost-${Yo}`,sc=`_ngcontent-${Yo}`,ac=!0,cc=new m("",{factory:()=>ac});function lc(i){return sc.replace(Pi,i)}function dc(i){return oc.replace(Pi,i)}function Xo(i,n){return n.map(e=>e.replace(Pi,i))}var Li=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,s,c,l=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=c,this.nonce=l,this.tracingService=d,this.defaultRenderer=new Pt(e,s,c,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof On?r.applyToHost(e):r instanceof Lt&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let s=this.doc,c=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(t.encapsulation){case cn.Emulated:o=new On(l,d,t,this.appId,u,s,c,f);break;case cn.ShadowDom:return new In(l,e,t,s,c,this.nonce,f,d);case cn.ExperimentalIsolatedShadowDom:return new In(l,e,t,s,c,this.nonce,f);default:o=new Lt(l,d,t,u,s,c,f);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||i)(b(Fi),b(ki),b(je),b(cc),b(g),b(v),b(nt),b(ln,8))};static \u0275prov=h({token:i,factory:i.\u0275fac})}return i})(),Pt=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,r){this.eventManager=n,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Ii[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Go(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(Go(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new O(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,r){if(r){e=r+":"+e;let o=Ii[r];o?n.setAttributeNS(o,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let r=Ii[t];r?n.removeAttributeNS(r,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,r){r&(ze.DashCase|ze.Important)?n.style.setProperty(e,t,r&ze.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&ze.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,r){if(typeof n=="string"&&(n=De().getGlobalEventTarget(this.doc,n),!n))throw new O(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Go(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var In=class extends Pt{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,t,r,o,s,c,l){super(n,r,o,c),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=Xo(t.id,d);for(let f of d){let y=document.createElement("style");s&&y.setAttribute("nonce",s),y.textContent=f,this.shadowRoot.appendChild(y)}let u=t.getExternalStyles?.();if(u)for(let f of u){let y=Oi(f,r);s&&y.setAttribute("nonce",s),this.shadowRoot.appendChild(y)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Lt=class extends Pt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,r,o,s,c,l){super(n,o,s,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=l?Xo(l,d):d,this.styleUrls=t.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Yr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},On=class extends Lt{contentAttr;hostAttr;constructor(n,e,t,r,o,s,c,l){let d=r+"-"+t.id;super(n,e,t,o,s,c,l,d),this.contentAttr=lc(d),this.hostAttr=dc(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}};var kn=class i extends Rt{supportsDOMEvents=!0;static makeCurrent(){_i(new i)}onAndCancel(n,e,t,r){return n.addEventListener(e,t,r),()=>{n.removeEventListener(e,t,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=hc();return e==null?null:fc(e)}resetBaseElement(){Nt=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Tt(document.cookie,n)}},Nt=null;function hc(){return Nt=Nt||document.head.querySelector("base"),Nt?Nt.getAttribute("href"):null}function fc(i){return new URL(i,document.baseURI).pathname}var mc=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac})}return i})(),Zo=["alt","control","meta","shift"],pc={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},gc={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Ko=(()=>{class i extends kt{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,t,r,o){let s=i.parseEventName(t),c=i.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>De().onAndCancel(e,s.domEventName,c,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=i._normalizeKey(t.pop()),s="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),s="code."),Zo.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),s+=d+".")}),s+=o,t.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,t){let r=pc[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Zo.forEach(s=>{if(s!==r){let c=gc[s];c(e)&&(o+=s+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{i.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||i)(b(g))};static \u0275prov=h({token:i,factory:i.\u0275fac})}return i})();async function bc(i,n,e){let t=D({rootComponent:i},_c(n,e));return ro(t)}function _c(i,n){return{platformRef:n?.platformRef,appProviders:[...Ec,...i?.providers??[]],platformProviders:wc}}function vc(){kn.makeCurrent()}function yc(){return new fi}function Dc(){return Nr(document),document}var wc=[{provide:tt,useValue:xi},{provide:Br,useValue:vc,multi:!0},{provide:g,useFactory:Dc}];var Ec=[{provide:Fr,useValue:"root"},{provide:fi,useFactory:yc},{provide:Fn,useClass:Mn,multi:!0},{provide:Fn,useClass:Ko,multi:!0},Li,ki,Fi,{provide:Z,useExisting:Li},{provide:He,useClass:mc},[]];var Ih=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||i)(b(g))};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ni=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=b(Cc),r},providedIn:"root"})}return i})(),Cc=(()=>{class i extends Ni{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case ve.NONE:return t;case ve.HTML:return rt(t,"HTML")?it(t):Wr(this._doc,String(t)).toString();case ve.STYLE:return rt(t,"Style")?it(t):t;case ve.SCRIPT:if(rt(t,"Script"))return it(t);throw new O(5200,!1);case ve.URL:return rt(t,"URL")?it(t):$r(String(t));case ve.RESOURCE_URL:if(rt(t,"ResourceURL"))return it(t);throw new O(5201,!1);default:throw new O(5202,!1)}}bypassSecurityTrustHtml(e){return jr(e)}bypassSecurityTrustStyle(e){return zr(e)}bypassSecurityTrustScript(e){return Vr(e)}bypassSecurityTrustUrl(e){return Ur(e)}bypassSecurityTrustResourceUrl(e){return Hr(e)}static \u0275fac=function(t){return new(t||i)(b(g))};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Bt(i){return i.buttons===0||i.detail===0}function jt(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Bi;function qo(){if(Bi==null){let i=typeof document<"u"?document.head:null;Bi=!!(i&&(i.createShadowRoot||i.attachShadow))}return Bi}function ji(i){if(qo()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function We(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function G(i){return i.composedPath?i.composedPath()[0]:i.target}var zi;try{zi=typeof Intl<"u"&&Intl.v8BreakIterator}catch{zi=!1}var I=(()=>{class i{_platformId=a(tt);isBrowser=this._platformId?Ho(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||zi)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var zt;function Jo(){if(zt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>zt=!0}))}finally{zt=zt||!1}return zt}function dt(i){return Jo()?i:!!i.capture}function le(i,n=0){return Qo(i)?Number(i):arguments.length===2?n:0}function Qo(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function ee(i){return i instanceof C?i.nativeElement:i}var es=new m("cdk-input-modality-detector-options"),ts={ignoreKeys:[18,17,224,91,16]},ns=650,Vi={passive:!0,capture:!0},is=(()=>{class i{_platform=a(I);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new yr(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=G(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ns||(this._modality.next(Bt(e)?"keyboard":"mouse"),this._mostRecentTarget=G(e))};_onTouchstart=e=>{if(jt(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=G(e)};constructor(){let e=a(v),t=a(g),r=a(es,{optional:!0});if(this._options=D(D({},ts),r),this.modalityDetected=this._modality.pipe(rn(1)),this.modalityChanged=this.modalityDetected.pipe(wt()),this._platform.isBrowser){let o=a(Z).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Vi),o.listen(t,"mousedown",this._onMousedown,Vi),o.listen(t,"touchstart",this._onTouchstart,Vi)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Vt=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Vt||{}),rs=new m("cdk-focus-monitor-default-options"),Pn=dt({passive:!0,capture:!0}),Ut=(()=>{class i{_ngZone=a(v);_platform=a(I);_inputModalityDetector=a(is);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=a(g);_stopInputModalityDetector=new p;constructor(){let e=a(rs,{optional:!0});this._detectionMode=e?.detectionMode||Vt.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=G(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=ee(e);if(!this._platform.isBrowser||r.nodeType!==1)return ue();let o=ji(r)||this._document,s=this._elementInfo.get(r);if(s)return t&&(s.checkChildren=!0),s.subject;let c={checkChildren:t,subject:new p,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=ee(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=ee(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([c,l])=>this._originChanged(c,t,l)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Vt.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Vt.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?ns:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=G(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Pn),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Pn)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Re(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Pn),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Pn),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ln=new WeakMap,te=(()=>{class i{_appRef;_injector=a(w);_environmentInjector=a(_e);load(e){let t=this._appRef=this._appRef||this._injector.get(Ve),r=Ln.get(t);r||(r={loaders:new Set,refs:[]},Ln.set(t,r),t.onDestroy(()=>{Ln.get(t)?.refs.forEach(o=>o.destroy()),Ln.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(gn(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Bn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),Nn;function Ac(){if(Nn===void 0&&(Nn=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Nn=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Nn}function Sc(i){return Ac()?.createHTML(i)||i}function os(i,n,e){let t=e.sanitize(ve.HTML,n);i.innerHTML=Sc(t||"")}function ut(i){return Array.isArray(i)?i:[i]}var ss=new Set,Ge,jn=(()=>{class i{_platform=a(I);_nonce=a(nt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Rc}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Tc(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Tc(i,n){if(!ss.has(i))try{Ge||(Ge=document.createElement("style"),n&&Ge.setAttribute("nonce",n),Ge.setAttribute("type","text/css"),document.head.appendChild(Ge)),Ge.sheet&&(Ge.sheet.insertRule(`@media ${i} {body{ }}`,0),ss.add(i))}catch(e){console.error(e)}}function Rc(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Ui=(()=>{class i{_mediaMatcher=a(jn);_zone=a(v);_queries=new Map;_destroySubject=new p;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return as(ut(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=as(ut(e)).map(s=>this._registerQuery(s).observable),o=Er(r);return o=Cr(o.pipe(Te(1)),o.pipe(rn(1),et(0))),o.pipe(q(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:d})=>{c.matches=c.matches||l,c.breakpoints[d]=l}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new ge(s=>{let c=l=>this._zone.run(()=>s.next(l));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(be(t),q(({matches:s})=>({query:e,matches:s})),Re(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function as(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function xc(i){if(i.type==="characterData"&&i.target instanceof Comment)return!0;if(i.type==="childList"){for(let n=0;n<i.addedNodes.length;n++)if(!(i.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<i.removedNodes.length;n++)if(!(i.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var cs=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ls=(()=>{class i{_mutationObserverFactory=a(cs);_observedElements=new Map;_ngZone=a(v);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=ee(e);return new ge(r=>{let s=this._observeElement(t).pipe(q(c=>c.filter(l=>!xc(l))),$(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{r.next(c)})});return()=>{s.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new p,r=this._mutationObserverFactory.create(o=>t.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:r}=this._observedElements.get(e);t&&t.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),kf=(()=>{class i{_contentObserver=a(ls);_elementRef=a(C);event=new U;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=le(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(et(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",L],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return i})(),ds=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=k({providers:[cs]})}return i})();var Vn=(()=>{class i{_platform=a(I);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Ic(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=Mc(jc(e));if(t&&(us(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=us(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Nc(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return Bc(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Mc(i){try{return i.frameElement}catch{return null}}function Ic(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function Oc(i){let n=i.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function Fc(i){return Pc(i)&&i.type=="hidden"}function kc(i){return Lc(i)&&i.hasAttribute("href")}function Pc(i){return i.nodeName.toLowerCase()=="input"}function Lc(i){return i.nodeName.toLowerCase()=="a"}function ms(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let n=i.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function us(i){if(!ms(i))return null;let n=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function Nc(i){let n=i.nodeName.toLowerCase(),e=n==="input"&&i.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function Bc(i){return Fc(i)?!1:Oc(i)||kc(i)||i.hasAttribute("contenteditable")||ms(i)}function jc(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var zn=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,t,r,o=!1,s){this._element=n,this._checker=e,this._ngZone=t,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(n),!!t}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?ye(n,{injector:this._injector}):setTimeout(n)}},Un=(()=>{class i{_checker=a(Vn);_ngZone=a(v);_document=a(g);_injector=a(w);constructor(){a(te).load(Bn)}create(e,t=!1){return new zn(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),zc=(()=>{class i{_elementRef=a(C);_focusTrapFactory=a(Un);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){a(I).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=We(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",L],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",L]},exportAs:["cdkTrapFocus"],features:[he]})}return i})(),ps=new m("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),gs=new m("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Vc=0,Uc=(()=>{class i{_ngZone=a(v);_defaultOptions=a(gs,{optional:!0});_liveElement;_document=a(g);_sanitizer=a(Ni);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=a(ps,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,s;return t.length===1&&typeof t[0]=="number"?s=t[0]:[o,s]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),s==null&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:os(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${Vc++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Pe=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(Pe||{}),hs="cdk-high-contrast-black-on-white",fs="cdk-high-contrast-white-on-black",Hi="cdk-high-contrast-active",bs=(()=>{class i{_platform=a(I);_hasCheckedHighContrastMode=!1;_document=a(g);_breakpointSubscription;constructor(){this._breakpointSubscription=a(Ui).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Pe.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Pe.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Pe.BLACK_ON_WHITE}return Pe.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Hi,hs,fs),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Pe.BLACK_ON_WHITE?e.add(Hi,hs):t===Pe.WHITE_ON_BLACK&&e.add(Hi,fs)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),_s=(()=>{class i{constructor(){a(bs)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=k({imports:[ds]})}return i})();var Hc=200,Hn=class{_letterKeyStream=new p;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new p;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Hc;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Ir(e=>this._pressedLetters.push(e)),et(n),$(()=>this._pressedLetters.length>0),q(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Le(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var ht=class{_items;_activeItemIndex=re(-1);_activeItem=re(null);_wrap=!1;_typeaheadSubscription=ie.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof mi?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):hn(n)&&(this._effectRef=sn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new p;change=new p;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Hn(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||Le(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+n*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return hn(this._items)?this._items():this._items instanceof mi?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var $i=class extends ht{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Wi=class extends ht{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Gi={},me=class i{_appId=a(je);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Gi.hasOwnProperty(n)||(Gi[n]=0),`${n}${e?i._infix+"-":""}${Gi[n]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})};var ys=" ";function $c(i,n,e){let t=Wn(i,n);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(ys)))}function Wc(i,n,e){let t=Wn(i,n);e=e.trim();let r=t.filter(o=>o!==e);r.length?i.setAttribute(n,r.join(ys)):i.removeAttribute(n)}function Wn(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var Ds="cdk-describedby-message",$n="cdk-describedby-host",Xi=0,Fm=(()=>{class i{_platform=a(I);_document=a(g);_messageRegistry=new Map;_messagesContainer=null;_id=`${Xi++}`;constructor(){a(te).load(Bn),this._id=a(je)+"-"+Xi++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=Yi(t,r);typeof t!="string"?(vs(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=Yi(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${$n}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute($n);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");vs(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Yi(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=Wn(e,"aria-describedby").filter(r=>r.indexOf(Ds)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);$c(e,"aria-describedby",r.messageElement.id),e.setAttribute($n,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,Wc(e,"aria-describedby",r.messageElement.id),e.removeAttribute($n)}_isElementDescribedByMessage(e,t){let r=Wn(e,"aria-describedby"),o=this._messageRegistry.get(t),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Yi(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function vs(i,n){i.id||(i.id=`${Ds}-${n}-${Xi++}`)}function Zi(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function N(i){return i==null?"":typeof i=="string"?i:`${i}px`}var Gc=new m("cdk-dir-doc",{providedIn:"root",factory:()=>a(g)}),Yc=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ws(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Yc.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Ae=(()=>{class i{get value(){return this.valueSignal()}valueSignal=re("ltr");change=new U;constructor(){let e=a(Gc,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ws(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var de=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(de||{}),Gn,Ye;function Yn(){if(Ye==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Ye=!1,Ye;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Ye=!0;else{let i=Element.prototype.scrollTo;i?Ye=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Ye=!1}}return Ye}function ft(){if(typeof document!="object"||!document)return de.NORMAL;if(Gn==null){let i=document.createElement("div"),n=i.style;i.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",i.appendChild(e),document.body.appendChild(i),Gn=de.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,Gn=i.scrollLeft===0?de.NEGATED:de.INVERTED),i.remove()}return Gn}var Xn=class{};function Es(i){return i&&typeof i.connect=="function"&&!(i instanceof vr)}var Zn=class extends Xn{_data;constructor(n){super(),this._data=n}connect(){return en(this._data)?this._data:ue(this._data)}disconnect(){}},Ht=(function(i){return i[i.REPLACED=0]="REPLACED",i[i.INSERTED=1]="INSERTED",i[i.MOVED=2]="MOVED",i[i.REMOVED=3]="REMOVED",i})(Ht||{}),Kn=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,t,r,o){n.forEachOperation((s,c,l)=>{let d,u;if(s.previousIndex==null){let f=()=>t(s,c,l);d=this._insertView(f,l,e,r(s)),u=d?Ht.INSERTED:Ht.REPLACED}else l==null?(this._detachAndCacheView(c,e),u=Ht.REMOVED):(d=this._moveView(c,l,e,r(s)),u=Ht.MOVED);o&&o({context:d?.context,operation:u,record:s})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,t,r){let o=this._insertViewFromCache(e,t);if(o){o.context.$implicit=r;return}let s=n();return t.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(n,e){let t=e.detach(n);this._maybeCacheView(t,e)}_moveView(n,e,t,r){let o=t.get(n);return t.move(o,e),o.context.$implicit=r,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let t=e.indexOf(n);t===-1?n.destroy():e.remove(t)}}_insertViewFromCache(n,e){let t=this._viewCache.pop();return t&&e.insert(t,n),t||null}};var Xe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=k({})}return i})();var Xc=["contentWrapper"],Zc=["*"],As=new m("VIRTUAL_SCROLL_STRATEGY"),Ki=class{_scrolledIndexChange=new p;scrolledIndexChange=this._scrolledIndexChange.pipe(wt());_viewport=null;_itemSize;_minBufferPx;_maxBufferPx;constructor(n,e,t){this._itemSize=n,this._minBufferPx=e,this._maxBufferPx=t}attach(n){this._viewport=n,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(n,e,t){t<e,this._itemSize=n,this._minBufferPx=e,this._maxBufferPx=t,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(n,e){this._viewport&&this._viewport.scrollToOffset(n*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;let n=this._viewport.getRenderedRange(),e={start:n.start,end:n.end},t=this._viewport.getViewportSize(),r=this._viewport.getDataLength(),o=this._viewport.measureScrollOffset(),s=this._itemSize>0?o/this._itemSize:0;if(e.end>r){let l=Math.ceil(t/this._itemSize),d=Math.max(0,Math.min(s,r-l));s!=d&&(s=d,o=d*this._itemSize,e.start=Math.floor(s)),e.end=Math.max(0,Math.min(r,e.start+l))}let c=o-e.start*this._itemSize;if(c<this._minBufferPx&&e.start!=0){let l=Math.ceil((this._maxBufferPx-c)/this._itemSize);e.start=Math.max(0,e.start-l),e.end=Math.min(r,Math.ceil(s+(t+this._minBufferPx)/this._itemSize))}else{let l=e.end*this._itemSize-(o+t);if(l<this._minBufferPx&&e.end!=r){let d=Math.ceil((this._maxBufferPx-l)/this._itemSize);d>0&&(e.end=Math.min(r,e.end+d),e.start=Math.max(0,Math.floor(s-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(Math.round(this._itemSize*e.start)),this._scrolledIndexChange.next(Math.floor(s))}};function Kc(i){return i._scrollStrategy}var qc=(()=>{class i{get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=le(e)}_itemSize=20;get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=le(e)}_minBufferPx=100;get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=le(e)}_maxBufferPx=200;_scrollStrategy=new Ki(this.itemSize,this.minBufferPx,this.maxBufferPx);ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[At([{provide:As,useFactory:Kc,deps:[Or(()=>i)]}]),he]})}return i})(),Jc=20,$t=(()=>{class i{_ngZone=a(v);_platform=a(I);_renderer=a(Z).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new p;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Jc){return this._platform.isBrowser?new ge(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(nn(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ue()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe($(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=ee(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Wt=(()=>{class i{elementRef=a(C);scrollDispatcher=a($t);ngZone=a(v);dir=a(Ae,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new p;_renderer=a(oe);_cleanupScroll;_elementScrolled=new p;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&ft()!=de.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),ft()==de.INVERTED?e.left=e.right:ft()==de.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Yn()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:t:e=="end"&&(e=s?t:r),s&&ft()==de.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&ft()==de.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Qc=20,Ze=(()=>{class i{_platform=a(I);_listeners;_viewportSize=null;_change=new p;_document=a(g);constructor(){let e=a(v),t=a(Z).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,c=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:s,left:c}}change(e=Qc){return e>0?this._change.pipe(nn(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),qi=new m("VIRTUAL_SCROLLABLE"),Ss=(()=>{class i extends Wt{constructor(){super()}measureViewportSize(e){let t=this.elementRef.nativeElement;return e==="horizontal"?t.clientWidth:t.clientHeight}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,features:[H]})}return i})();function el(i,n){return i.start==n.start&&i.end==n.end}var tl=typeof requestAnimationFrame<"u"?wr:Dr,Ts=new m("CDK_VIRTUAL_SCROLL_VIEWPORT"),nl=(()=>{class i extends Ss{elementRef=a(C);_changeDetectorRef=a(ot);_scrollStrategy=a(As,{optional:!0});scrollable=a(qi,{optional:!0});_platform=a(I);_detachedSubject=new p;_renderedRangeSubject=new p;_renderedContentOffsetSubject=new p;get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}_orientation="vertical";appendOnly=!1;scrolledIndexChange=new ge(e=>this._scrollStrategy.scrolledIndexChange.subscribe(t=>Promise.resolve().then(()=>this.ngZone.run(()=>e.next(t)))));_contentWrapper;renderedRangeStream=this._renderedRangeSubject;renderedContentOffset=this._renderedContentOffsetSubject.pipe($(e=>e!==null),wt());_totalContentSize=0;_totalContentWidth=re("");_totalContentHeight=re("");_renderedContentTransform;_renderedRange={start:0,end:0};_dataLength=0;_viewportSize=0;_forOf=null;_renderedContentOffset=0;_renderedContentOffsetNeedsRewrite=!1;_changeDetectionNeeded=re(!1);_runAfterChangeDetection=[];_viewportChanges=ie.EMPTY;_injector=a(w);_isDestroyed=!1;constructor(){super();let e=a(Ze);this._scrollStrategy,this._viewportChanges=e.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this);let t=sn(()=>{this._changeDetectionNeeded()&&this._doChangeDetection()},{injector:a(Ve).injector});a(hi).onDestroy(()=>{t.destroy()})}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe(be(null),nn(0,tl),Re(this._destroyed)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),this._isDestroyed=!0,super.ngOnDestroy()}attach(e){this._forOf,this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe(Re(this._detachedSubject)).subscribe(t=>{let r=t.length;r!==this._dataLength&&(this._dataLength=r,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){el(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&t==="to-start"?0:e;let r=this.dir&&this.dir.value=="rtl",o=this.orientation=="horizontal",s=o?"X":"Y",l=`translate${s}(${Number((o&&r?-1:1)*e)}px)`;this._renderedContentOffset=e,t==="to-end"&&(l+=` translate${s}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=l&&(this._renderedContentTransform=l,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){let r={behavior:t};this.orientation==="horizontal"?r.start=e:r.top=e,this.scrollable.scrollTo(r)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return this.scrollable==this?t=r=>super.measureScrollOffset(r):t=r=>this.scrollable.measureScrollOffset(r),Math.max(0,t(e??(this.orientation==="horizontal"?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t,r="left",o="right",s=this.dir?.value=="rtl";e=="start"?t=s?o:r:e=="end"?t=s?r:o:e?t=e:t=this.orientation==="horizontal"?"left":"top";let c=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-c}measureRenderedContentSize(){let e=this._contentWrapper.nativeElement;return this.orientation==="horizontal"?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),!St(this._changeDetectionNeeded)&&this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this.ngZone.run(()=>{this._changeDetectionNeeded.set(!0)})})})}_doChangeDetection(){this._isDestroyed||this.ngZone.run(()=>{this._changeDetectorRef.markForCheck(),this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart()),ye(()=>{this._changeDetectionNeeded.set(!1);let e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(let t of e)t()},{injector:this._injector})})}_calculateSpacerSize(){this._totalContentHeight.set(this.orientation==="horizontal"?"":`${this._totalContentSize}px`),this._totalContentWidth.set(this.orientation==="horizontal"?`${this._totalContentSize}px`:"")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(t,r){if(t&1&&fn(Xc,7),t&2){let o;mn(o=pn())&&(r._contentWrapper=o.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(t,r){t&2&&K("cdk-virtual-scroll-orientation-horizontal",r.orientation==="horizontal")("cdk-virtual-scroll-orientation-vertical",r.orientation!=="horizontal")},inputs:{orientation:"orientation",appendOnly:[2,"appendOnly","appendOnly",L]},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[At([{provide:Wt,useFactory:()=>a(qi,{optional:!0})||a(i)},{provide:Ts,useExisting:i}]),H],ngContentSelectors:Zc,decls:4,vars:4,consts:[["contentWrapper",""],[1,"cdk-virtual-scroll-content-wrapper"],[1,"cdk-virtual-scroll-spacer"]],template:function(t,r){t&1&&(Ue(),Et(0,"div",1,0),ae(2),Ct(),fe(3,"div",2)),t&2&&(Gr(3),eo("width",r._totalContentWidth())("height",r._totalContentHeight()))},styles:[`cdk-virtual-scroll-viewport {
  display: block;
  position: relative;
  transform: translateZ(0);
}

.cdk-virtual-scrollable {
  overflow: auto;
  will-change: scroll-position;
  contain: strict;
}

.cdk-virtual-scroll-content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  contain: content;
}
[dir=rtl] .cdk-virtual-scroll-content-wrapper {
  right: 0;
  left: auto;
}

.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {
  min-height: 100%;
}
.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
  border-left-width: 0;
  border-right-width: 0;
  outline: none;
}

.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {
  min-width: 100%;
}
.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  outline: none;
}

.cdk-virtual-scroll-spacer {
  height: 1px;
  transform-origin: 0 0;
  flex: 0 0 auto;
}
[dir=rtl] .cdk-virtual-scroll-spacer {
  transform-origin: 100% 0;
}
`],encapsulation:2,changeDetection:0})}return i})();function Cs(i,n,e){let t=e;if(!t.getBoundingClientRect)return 0;let r=t.getBoundingClientRect();return i==="horizontal"?n==="start"?r.left:r.right:n==="start"?r.top:r.bottom}var il=(()=>{class i{_viewContainerRef=a(Ie);_template=a(Me);_differs=a(bi);_viewRepeater=new Kn;_viewport=a(Ts,{skipSelf:!0});viewChange=new p;_dataSourceChanges=new p;get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,Es(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new Zn(en(e)?e:Array.from(e||[])))}_cdkVirtualForOf;get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,r)=>e(t+(this._renderedRange?this._renderedRange.start:0),r):void 0}_cdkVirtualForTrackBy;set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=le(e)}dataStream=this._dataSourceChanges.pipe(be(null),Rr(),on(([e,t])=>this._changeDataSource(e,t)),xr(1));_differ=null;_data=[];_renderedItems=[];_renderedRange={start:0,end:0};_needsUpdate=!1;_destroyed=new p;constructor(){let e=a(v);this.dataStream.subscribe(t=>{this._data=t,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe(Re(this._destroyed)).subscribe(t=>{this._renderedRange=t,this.viewChange.observers.length&&e.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,t){if(e.start>=e.end)return 0;e.start<this._renderedRange.start||e.end>this._renderedRange.end;let r=e.start-this._renderedRange.start,o=e.end-e.start,s,c;for(let l=0;l<o;l++){let d=this._viewContainerRef.get(l+r);if(d&&d.rootNodes.length){s=c=d.rootNodes[0];break}}for(let l=o-1;l>-1;l--){let d=this._viewContainerRef.get(l+r);if(d&&d.rootNodes.length){c=d.rootNodes[d.rootNodes.length-1];break}}return s&&c?Cs(t,"end",c)-Cs(t,"start",s):0}ngDoCheck(){if(this._differ&&this._needsUpdate){let e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):ue()}_updateContext(){let e=this._data.length,t=this._viewContainerRef.length;for(;t--;){let r=this._viewContainerRef.get(t);r.context.index=this._renderedRange.start+t,r.context.count=e,this._updateComputedContextProperties(r.context),r.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(o,s,c)=>this._getEmbeddedViewArgs(o,c),o=>o.item),e.forEachIdentityChange(o=>{let s=this._viewContainerRef.get(o.currentIndex);s.context.$implicit=o.item});let t=this._data.length,r=this._viewContainerRef.length;for(;r--;){let o=this._viewContainerRef.get(r);o.context.index=this._renderedRange.start+r,o.context.count=t,this._updateComputedContextProperties(o.context)}}_updateComputedContextProperties(e){e.first=e.index===0,e.last=e.index===e.count-1,e.even=e.index%2===0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"}})}return i})(),rl=(()=>{class i extends Ss{constructor(){super()}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]-this.measureScrollOffset(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdkVirtualScrollingElement",""]],hostAttrs:[1,"cdk-virtual-scrollable"],features:[At([{provide:qi,useExisting:i}]),H]})}return i})();var Ji=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=k({})}return i})(),Qi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=k({imports:[Xe,Ji,Xe,Ji]})}return i})();var Gt=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},mt=class extends Gt{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},Ke=class extends Gt{templateRef;viewContainerRef;context;injector;constructor(n,e,t,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},er=class extends Gt{element;constructor(n){super(),this.element=n instanceof C?n.nativeElement:n}},pt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof mt)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Ke)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof er)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},qn=class extends pt{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,r=t.get(dn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=n.injector||this._defaultInjector||w.NULL,o=r.get(_e,t.injector);e=gn(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Yt=(()=>{class i extends pt{_moduleRef=a(dn,{optional:!0});_document=a(g);_viewContainerRef=a(Ie);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new U;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[H]})}return i})(),Jn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=k({})}return i})();var Rs=Yn();function bt(i){return new Qn(i.get(Ze),i.get(g))}var Qn=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=N(-this._previousScrollPosition.left),n.style.top=N(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,r=e.style,o=t.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Rs&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Rs&&(t.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Ps(i,n){return new ei(i.get($t),i.get(v),i.get(Ze),n)}var ei=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe($(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Xt=class{enable(){}disable(){}attach(){}};function tr(i,n){return n.some(e=>{let t=i.bottom<e.top,r=i.top>e.bottom,o=i.right<e.left,s=i.left>e.right;return t||r||o||s})}function xs(i,n){return n.some(e=>{let t=i.top<e.top,r=i.bottom>e.bottom,o=i.left<e.left,s=i.right>e.right;return t||r||o||s})}function or(i,n){return new ti(i.get($t),i.get(Ze),i.get(v),n)}var ti=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();tr(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Ls=(()=>{class i{_injector=a(w);constructor(){}noop=()=>new Xt;close=e=>Ps(this._injector,e);block=()=>bt(this._injector);reposition=e=>or(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Je=class{positionStrategy;scrollStrategy=new Xt;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var ni=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Ns=(()=>{class i{_attachedOverlays=[];_document=a(g);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Bs=(()=>{class i extends Ns{_ngZone=a(v);_renderer=a(Z).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(i)))(r||i)}})();static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),js=(()=>{class i extends Ns{_platform=a(I);_ngZone=a(v);_renderer=a(Z).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=G(e)};_clickListener=e=>{let t=G(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let c=o[s],l=c._outsidePointerEvents;if(!(!c.hasAttached()||!this.canReceiveEvent(c,e,l))){if(Ms(c.overlayElement,t)||Ms(c.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(i)))(r||i)}})();static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ms(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var zs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),oi=(()=>{class i{_platform=a(I);_containerElement;_document=a(g);_styleLoader=a(te);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Zi()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Zi()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(zs)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),nr=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,r){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function sr(i){return i&&i.nodeType===1}var gt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new p;_attachments=new p;_detachments=new p;_positionStrategy;_scrollStrategy;_locationChanges=ie.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new p;_outsidePointerEvents=new p;_afterNextRenderRef;constructor(n,e,t,r,o,s,c,l,d,u=!1,f,y){this._portalOutlet=n,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=c,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=f,this._renderer=y,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ye(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=D(D({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Qe(D({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=N(this._config.width),n.height=N(this._config.height),n.minWidth=N(this._config.minWidth),n.minHeight=N(this._config.minHeight),n.maxWidth=N(this._config.maxWidth),n.maxHeight=N(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;sr(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new nr(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let r=ut(e||[]).filter(o=>!!o);r.length&&(t?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ye(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Is="cdk-overlay-connected-position-bounding-box",sl=/([A-Za-z%]+)$/;function ar(i,n){return new ii(n,i.get(Ze),i.get(g),i.get(I),i.get(oi))}var ii=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new p;_resizeSubscription=ie.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Is),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],s;for(let c of this._preferredPositions){let l=this._getOriginPoint(n,r,c),d=this._getOverlayPoint(l,e,c),u=this._getOverlayFit(d,e,t,c);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(c,l);return}if(this._canFitWithFlexibleDimensions(u,d,t)){o.push({position:c,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,c)});continue}(!s||s.overlayFit.visibleArea<u.visibleArea)&&(s={overlayFit:u,overlayPoint:d,originPoint:l,position:c,overlayRect:e})}if(o.length){let c=null,l=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,c=d)}this._isPushed=!1,this._applyPosition(c.position,c.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&qe(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Is),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof C?this._origin.nativeElement:sr(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let r;if(t.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,c=this._isRtl()?n.left:n.right;r=t.originX=="start"?s:c}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=n.top+n.height/2:o=t.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,t,r){let o=Fs(e),{x:s,y:c}=n,l=this._getOffset(r,"x"),d=this._getOffset(r,"y");l&&(s+=l),d&&(c+=d);let u=0-s,f=s+o.width-t.width,y=0-c,F=c+o.height-t.height,T=this._subtractOverflows(o.width,u,f),x=this._subtractOverflows(o.height,y,F),_=T*x;return{visibleArea:_,isCompletelyWithinViewport:o.width*o.height===_,fitsInViewportVertically:x===o.height,fitsInViewportHorizontally:T==o.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,s=Os(this._overlayRef.getConfig().minHeight),c=Os(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=r,d=n.fitsInViewportHorizontally||c!=null&&c<=o;return l&&d}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=Fs(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),c=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-t.top-n.y,0),d=Math.max(o.left-t.left-n.x,0),u=0,f=0;return r.width<=o.width?u=d||-s:u=n.x<this._getViewportMarginStart()?o.left-t.left-n.x:0,r.height<=o.height?f=l||-c:f=n.y<this._getViewportMarginTop()?o.top-t.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!al(this._lastScrollVisibility,t)){let r=new ni(n,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,r=this._isRtl(),o,s,c;if(e.overlayY==="top")s=n.y,o=t.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")c=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-c+this._getViewportMarginTop();else{let F=Math.min(t.bottom-n.y+t.top,n.y),T=this._lastBoundingBoxSize.height;o=F*2,s=n.y-F,o>T&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-T/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,y;if(d)y=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)f=n.x,u=t.right-n.x-this._getViewportMarginEnd();else{let F=Math.min(t.right-n.x+t.left,n.x),T=this._lastBoundingBoxSize.width;u=F*2,f=n.x-F,u>T&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-T/2)}return{top:s,left:f,bottom:c,right:y,width:u,height:o}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=N(t.width),r.height=N(t.height),r.top=N(t.top)||"auto",r.bottom=N(t.bottom)||"auto",r.left=N(t.left)||"auto",r.right=N(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=N(o)),s&&(r.maxWidth=N(s))}this._lastBoundingBoxSize=t,qe(this._boundingBox.style,r)}_resetBoundingBoxStyles(){qe(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){qe(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();qe(t,this._getExactOverlayY(e,n,u)),qe(t,this._getExactOverlayX(e,n,u))}else t.position="static";let c="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(c+=`translateX(${l}px) `),d&&(c+=`translateY(${d}px)`),t.transform=c.trim(),s.maxHeight&&(r?t.maxHeight=N(s.maxHeight):o&&(t.maxHeight="")),s.maxWidth&&(r?t.maxWidth=N(s.maxWidth):o&&(t.maxWidth="")),qe(this._pane.style,t)}_getExactOverlayY(n,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=N(o.y);return r}_getExactOverlayX(n,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let c=this._document.documentElement.clientWidth;r.right=`${c-(o.x+this._overlayRect.width)}px`}else r.left=N(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:xs(n,t),isOriginOutsideView:tr(n,t),isOverlayClipped:xs(e,t),isOverlayOutsideView:tr(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,r)=>t-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ut(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof C)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function qe(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i}function Os(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(sl);return!e||e==="px"?parseFloat(n):null}return i||null}function Fs(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function al(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var ks="cdk-global-overlay-wrapper";function _t(i){return new ri}var ri=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(ks),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:c}=t,l=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),d=(o==="100%"||o==="100vh")&&(!c||c==="100%"||c==="100vh"),u=this._xPosition,f=this._xOffset,y=this._overlayRef.getConfig().direction==="rtl",F="",T="",x="";l?x="flex-start":u==="center"?(x="center",y?T=f:F=f):y?u==="left"||u==="end"?(x="flex-end",F=f):(u==="right"||u==="start")&&(x="flex-start",T=f):u==="left"||u==="start"?(x="flex-start",F=f):(u==="right"||u==="end")&&(x="flex-end",T=f),n.position=this._cssPosition,n.marginLeft=l?"0":F,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":T,e.justifyContent=x,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(ks),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Vs=(()=>{class i{_injector=a(w);constructor(){}global(){return _t()}flexibleConnectedTo(e){return ar(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),cr=new m("OVERLAY_DEFAULT_CONFIG");function Zt(i,n){i.get(te).load(zs);let e=i.get(oi),t=i.get(g),r=i.get(me),o=i.get(Ve),s=i.get(Ae),c=i.get(oe,null,{optional:!0})||i.get(Z).createRenderer(null,null),l=new Je(n),d=i.get(cr,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in t.body?l.usePopover=n?.usePopover??d:l.usePopover=!1;let u=t.createElement("div"),f=t.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let y=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return sr(y)?y.after(f):y?.type==="parent"?y.element.appendChild(f):e.getContainerElement().appendChild(f),new gt(new qn(u,o,i),f,u,l,i.get(v),i.get(Bs),t,i.get(En),i.get(js),n?.disableAnimations??i.get(an,null,{optional:!0})==="NoopAnimations",i.get(_e),c)}var Us=(()=>{class i{scrollStrategies=a(Ls);_positionBuilder=a(Vs);_injector=a(w);constructor(){}create(e){return Zt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),cl=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],ll=new m("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=a(w);return()=>or(i)}}),ir=(()=>{class i{elementRef=a(C);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Hs=new m("cdk-connected-overlay-default-config"),dl=(()=>{class i{_dir=a(Ae,{optional:!0});_injector=a(w);_overlayRef;_templatePortal;_backdropSubscription=ie.EMPTY;_attachSubscription=ie.EMPTY;_detachSubscription=ie.EMPTY;_positionSubscription=ie.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=a(ll);_ngZone=a(v);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new U;positionChange=new U;attach=new U;detach=new U;overlayKeydown=new U;overlayOutsideClick=new U;constructor(){let e=a(Me),t=a(Ie),r=a(Hs,{optional:!0}),o=a(cr,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Ke(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=cl);let e=this._overlayRef=Zt(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Le(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=G(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Je({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=ar(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof ir?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof ir?this.origin.elementRef.nativeElement:this.origin instanceof C?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Mr(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",L],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",L],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",L],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",L],push:[2,"cdkConnectedOverlayPush","push",L],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",L],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",L],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[he]})}return i})(),lr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=k({providers:[Us],imports:[Xe,Jn,Qi,Qi]})}return i})();function ul(i,n){}var Ne=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var ur=(()=>{class i extends pt{_elementRef=a(C);_focusTrapFactory=a(Un);_config;_interactivityChecker=a(Vn);_ngZone=a(v);_focusMonitor=a(Ut);_renderer=a(oe);_changeDetectorRef=a(ot);_injector=a(w);_platform=a(I);_document=a(g);_portalOutlet;_focusTrapped=new p;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=a(Ne,{optional:!0})||new Ne,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),s=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_trapFocus(e){this._isDestroyed||ye(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let r=We(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=We();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=We()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,r){if(t&1&&fn(Yt,7),t&2){let o;mn(o=pn())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,r){t&2&&Oe("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[H],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,r){t&1&&un(0,ul,0,0,"ng-template",0)},dependencies:[Yt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),Kt=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new p;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Le(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(n),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},hl=new m("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=a(w);return()=>bt(i)}}),fl=new m("DialogData"),ml=new m("DefaultDialogConfig");function pl(i){let n=re(i),e=new U;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var $s=(()=>{class i{_injector=a(w);_defaultOptions=a(ml,{optional:!0});_parentDialog=a(i,{optional:!0,skipSelf:!0});_overlayContainer=a(oi);_idGenerator=a(me);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;_ariaHiddenElements=new Map;_scrollStrategy=a(hl);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=tn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(be(void 0)));constructor(){}open(e,t){let r=this._defaultOptions||new Ne;t=D(D({},r),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),s=Zt(this._injector,o),c=new Kt(s,t),l=this._attachContainer(s,c,t);if(c.containerInstance=l,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(Te(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,c,l,t),this.openDialogs.push(c),c.closed.subscribe(()=>this._removeOpenDialog(c,!0)),this.afterOpened.next(c),c}closeAll(){dr(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){dr(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),dr(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Je({positionStrategy:e.positionStrategy||_t().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,r){let o=r.injector||r.viewContainerRef?.injector,s=[{provide:Ne,useValue:r},{provide:Kt,useValue:t},{provide:gt,useValue:e}],c;r.container?typeof r.container=="function"?c=r.container:(c=r.container.type,s.push(...r.container.providers(r))):c=ur;let l=new mt(c,r.viewContainerRef,w.create({parent:o||this._injector,providers:s}));return e.attach(l).instance}_attachDialogContent(e,t,r,o){if(e instanceof Me){let s=this._createInjector(o,t,r,void 0),c={$implicit:o.data,dialogRef:t};o.templateContext&&(c=D(D({},c),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Ke(e,null,c,s))}else{let s=this._createInjector(o,t,r,this._injector),c=r.attachComponentPortal(new mt(e,o.viewContainerRef,s));t.componentRef=c,t.componentInstance=c.instance}}_createInjector(e,t,r,o){let s=e.injector||e.viewContainerRef?.injector,c=[{provide:fl,useValue:e.data},{provide:Kt,useValue:t}];return e.providers&&(typeof e.providers=="function"?c.push(...e.providers(t,e,r)):c.push(...e.providers)),e.direction&&(!s||!s.get(Ae,null,{optional:!0}))&&c.push({provide:Ae,useValue:pl(e.direction)}),w.create({parent:s||o,providers:c})}_removeOpenDialog(e,t){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute("aria-hidden",o):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let r=t.length-1;r>-1;r--){let o=t[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function dr(i,n){let e=i.length;for(;e--;)n(i[e])}function xg(i){return i!=null&&`${i}`!="false"}var Og={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var gl=new m("MATERIAL_ANIMATIONS"),Ws=null;function bl(){return a(gl,{optional:!0})?.animationsDisabled||a(an,{optional:!0})==="NoopAnimations"?"di-disabled":(Ws??=a(jn).matchMedia("(prefers-reduced-motion)").matches,Ws?"reduced-motion":"enabled")}function Se(){return bl()!=="enabled"}function _l(i,n){}var ai=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},hr="mdc-dialog--open",Gs="mdc-dialog--opening",Ys="mdc-dialog--closing",vl=150,yl=75,Dl=(()=>{class i extends ur{_animationStateChanged=new U;_animationsEnabled=!Se();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Zs(this._config.enterAnimationDuration)??vl:0;_exitAnimationDuration=this._animationsEnabled?Zs(this._config.exitAnimationDuration)??yl:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Xs,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Gs,hr)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(hr),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(hr),this._animationsEnabled?(this._hostElement.style.setProperty(Xs,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ys)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Gs,Ys)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(i)))(r||i)}})();static \u0275cmp=j({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,r){t&2&&(gi("id",r._config.id),Oe("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),K("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[H],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(qr(0,"div",0)(1,"div",1),un(2,_l,0,0,"ng-template",2),Jr()())},dependencies:[Yt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),Xs="--mat-dialog-transition-duration";function Zs(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?le(i.substring(0,i.length-2)):i.endsWith("s")?le(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var si=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(si||{}),qt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new di(1);_beforeClosed=new di(1);_result;_closeFallbackTimeout;_state=si.OPEN;_closeInteractionType;constructor(n,e,t){this._ref=n,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe($(r=>r.state==="opened"),Te(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe($(r=>r.state==="closed"),Te(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ar(this.backdropClick(),this.keydownEvents().pipe($(r=>r.keyCode===27&&!this.disableClose&&!Le(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),Ks(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe($(t=>t.state==="closing"),Te(1)).subscribe(t=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=si.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=si.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Ks(i,n,e){return i._closeInteractionType=n,i.close(e)}var wl=new m("MatMdcDialogData"),El=new m("mat-mdc-dialog-default-options"),Cl=new m("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=a(w);return()=>bt(i)}}),qs=(()=>{class i{_defaultOptions=a(El,{optional:!0});_scrollStrategy=a(Cl);_parentDialog=a(i,{optional:!0,skipSelf:!0});_idGenerator=a(me);_injector=a(w);_dialog=a($s);_animationsDisabled=Se();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;dialogConfigClass=ai;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=tn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(be(void 0)));constructor(){this._dialogRefConstructor=qt,this._dialogContainerType=Dl,this._dialogDataToken=wl}open(e,t){let r;t=D(D({},this._defaultOptions||new ai),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,Qe(D({},t),{positionStrategy:_t(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:Ne,useValue:t}]},templateContext:()=>({dialogRef:r}),providers:(s,c,l)=>(r=new this._dialogRefConstructor(s,t,l),r.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:c.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(r);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),nb=(()=>{class i{dialogRef=a(qt,{optional:!0});_elementRef=a(C);_dialog=a(qs);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Qs(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Ks(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,r){t&1&&Qr("click",function(s){return r._onButtonClick(s)}),t&2&&Oe("aria-label",r.ariaLabel||null)("type",r.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[he]})}return i})(),Js=(()=>{class i{_dialogRef=a(qt,{optional:!0});_elementRef=a(C);_dialog=a(qs);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Qs(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i})}return i})(),ib=(()=>{class i extends Js{id=a(me).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(i)))(r||i)}})();static \u0275dir=E({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,r){t&2&&gi("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[H]})}return i})(),rb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Xr([Wt])]})}return i})(),ob=(()=>{class i extends Js{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=xe(i)))(r||i)}})();static \u0275dir=E({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,r){t&2&&K("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[H]})}return i})();function Qs(i,n){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?n.find(t=>t.id===e.id):null}var vt,ea=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function cb(){if(vt)return vt;if(typeof document!="object"||!document)return vt=new Set(ea),vt;let i=document.createElement("input");return vt=new Set(ea.filter(n=>(i.setAttribute("type",n),i.type===n))),vt}var ne=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(ne||{}),fr=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ne.HIDDEN;constructor(n,e,t,r=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},ta=dt({passive:!0,capture:!0}),mr=class{_events=new Map;addHandler(n,e,t,r){let o=this._events.get(e);if(o){let s=o.get(t);s?s.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ta)})}removeHandler(n,e,t){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,ta)))}_delegateEventHandler=n=>{let e=G(n);e&&this._events.get(n.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(n))})}},Jt={enterDuration:225,exitDuration:150},Al=800,na=dt({passive:!0,capture:!0}),ia=["mousedown","touchstart"],ra=["mouseup","mouseleave","touchend","touchcancel"],Sl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Qt=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new mr;constructor(n,e,t,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=ee(t)),o&&o.get(te).load(Sl)}fadeInRipple(n,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=D(D({},Jt),t.animation);t.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=t.radius||Tl(n,e,r),c=n-r.left,l=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${c-s}px`,u.style.top=`${l-s}px`,u.style.height=`${s*2}px`,u.style.width=`${s*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),y=f.transitionProperty,F=f.transitionDuration,T=y==="none"||F==="0s"||F==="0s, 0s"||r.width===0&&r.height===0,x=new fr(this,u,t,T);u.style.transform="scale3d(1, 1, 1)",x.state=ne.FADING_IN,t.persistent||(this._mostRecentTransientRipple=x);let _=null;return!T&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let R=()=>{_&&(_.fallbackTimer=null),clearTimeout(pe),this._finishRippleTransition(x)},Y=()=>this._destroyRipple(x),pe=setTimeout(Y,d+100);u.addEventListener("transitionend",R),u.addEventListener("transitioncancel",Y),_={onTransitionEnd:R,onTransitionCancel:Y,fallbackTimer:pe}}),this._activeRipples.set(x,_),(T||!d)&&this._finishRippleTransition(x),x}fadeOutRipple(n){if(n.state===ne.FADING_OUT||n.state===ne.HIDDEN)return;let e=n.element,t=D(D({},Jt),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=ne.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=ee(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ia.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ra.forEach(e=>{this._triggerElement.addEventListener(e,this,na)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===ne.FADING_IN?this._startFadeOutTransition(n):n.state===ne.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=ne.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=ne.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Bt(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Al;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!jt(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===ne.VISIBLE||n.config.terminateOnPointerUp&&n.state===ne.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(ia.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(ra.forEach(e=>n.removeEventListener(e,this,na)),this._pointerUpEventsRegistered=!1))}};function Tl(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+r*r)}var pr=new m("mat-ripple-global-options"),Cb=(()=>{class i{_elementRef=a(C);_animationsDisabled=Se();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=a(v),t=a(I),r=a(pr,{optional:!0}),o=a(w);this._globalOptions=r||{},this._rippleRenderer=new Qt(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:D(D(D({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,D(D({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,D(D({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&K("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Rl={capture:!0},xl=["focus","mousedown","mouseenter","touchstart"],gr="mat-ripple-loader-uninitialized",br="mat-ripple-loader-class-name",oa="mat-ripple-loader-centered",ci="mat-ripple-loader-disabled",sa=(()=>{class i{_document=a(g);_animationsDisabled=Se();_globalRippleOptions=a(pr,{optional:!0});_platform=a(I);_ngZone=a(v);_injector=a(w);_eventCleanups;_hosts=new Map;constructor(){let e=a(Z).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>xl.map(t=>e.listen(this._document,t,this._onInteraction,Rl)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(gr,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(br))&&e.setAttribute(br,t.className||""),t.centered&&e.setAttribute(oa,""),t.disabled&&e.setAttribute(ci,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(ci,""):e.removeAttribute(ci)}_onInteraction=e=>{let t=G(e);if(t instanceof HTMLElement){let r=t.closest(`[${gr}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(br)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Jt.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Jt.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(ci),rippleConfig:{centered:e.hasAttribute(oa),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new Qt(c,this._ngZone,t,this._platform,this._injector),d=!c.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:l,hasSetUpEvents:d}),e.removeAttribute(gr)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var aa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Ml=["mat-icon-button",""],Il=["*"],Ol=new m("MAT_BUTTON_CONFIG");function ca(i){return i==null?void 0:oo(i)}var li=(()=>{class i{_elementRef=a(C);_ngZone=a(v);_animationsDisabled=Se();_config=a(Ol,{optional:!0});_focusMonitor=a(Ut);_cleanupClick;_renderer=a(oe);_rippleLoader=a(sa);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){a(te).load(aa);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=E({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(Oe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),to(r.color?"mat-"+r.color:""),K("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",L],disabled:[2,"disabled","disabled",L],ariaDisabled:[2,"aria-disabled","ariaDisabled",L],disabledInteractive:[2,"disabledInteractive","disabledInteractive",L],tabIndex:[2,"tabIndex","tabIndex",ca],_tabindex:[2,"tabindex","_tabindex",ca]}})}return i})(),Fl=(()=>{class i extends li{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[H],attrs:Ml,ngContentSelectors:Il,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Ue(),fe(0,"span",0),ae(1),fe(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Yb=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=k({imports:[Xe]})}return i})();var kl=["matButton",""],da=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ua=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],Pl=["mat-fab",""];var la=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),n_=(()=>{class i extends li{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Ll(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?la.get(this._appearance):null,o=la.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[H],attrs:kl,ngContentSelectors:ua,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Ue(da),fe(0,"span",0),ae(1),Et(2,"span",1),ae(3,1),Ct(),ae(4,2),fe(5,"span",2)(6,"span",3)),t&2&&K("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Ll(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Nl=new m("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>_r}),_r={color:"accent"},i_=(()=>{class i extends li{_options=a(Nl,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||_r,this.color=this._options.color||_r.color}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=j({type:i,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(t,r){t&2&&K("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",L]},exportAs:["matButton","matAnchor"],features:[H],attrs:Pl,ngContentSelectors:ua,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Ue(da),fe(0,"span",0),ae(1),Et(2,"span",1),ae(3,1),Ct(),ae(4,2),fe(5,"span",2)(6,"span",3)),t&2&&K("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`],encapsulation:2,changeDetection:0})}return i})();export{De as a,Do as b,Ia as c,wn as d,En as e,Za as f,Ka as g,qa as h,ec as i,nc as j,Uo as k,I as l,ji as m,G as n,te as o,ut as p,le as q,ee as r,Ae as s,Xe as t,qc as u,$t as v,Wt as w,Ze as x,nl as y,il as z,rl as A,Ji as B,Qi as C,me as D,mt as E,Ke as F,pt as G,qn as H,Yt as I,Le as J,or as K,Je as L,ar as M,_t as N,cr as O,Zt as P,ir as Q,dl as R,lr as S,Bt as T,jt as U,Ut as V,Bn as W,Sc as X,jn as Y,Ui as Z,Li as _,bc as $,Ih as aa,Ni as ba,kf as ca,Vn as da,Un as ea,zc as fa,Uc as ga,_s as ha,xg as ia,Og as ja,Se as ka,$i as la,Wi as ma,$c as na,Wc as oa,Fm as pa,El as qa,qs as ra,nb as sa,ib as ta,rb as ua,ob as va,cb as wa,ne as xa,Qt as ya,pr as za,Cb as Aa,aa as Ba,Fl as Ca,Yb as Da,n_ as Ea,i_ as Fa};
//# sourceMappingURL=chunk-CVT4RZLN.js.map
