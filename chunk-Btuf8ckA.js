import{$ as Q,$n as pe$1,A as Jm,Ar as vI,At as Zg,B as Ky,Bn as lm,Br as wu,C as Ht,Cn as hr$1,Cr as ts$1,Ct as Xy,Dn as il$1,Dt as Yo,E as Iv,F as KD,Fn as kr$1,Fr as wb,G as N$1,Gr as xr$1,Hn as mi$1,Hr as xe$1,I as Kg,In as kw,J as Ni$1,Jt as cm,K as Ne,Kn as nm,Kt as ch,Lr as wh,Lt as al$1,M as Jw,Mn as ji$1,Mr as vj,Mt as _,N as Jy,Nr as vn,Nt as _c$1,O as JE,On as im,Or as um,Ot as Yy,P as K,Pr as vw,Q as Py,Qr as zn$1,R as Ko,S as Hr$1,Sn as hd,Sr as tm,Tr as uh,Tt as Ye$1,U as Lr$1,Un as mj,Ur as xg,Vn as md,Vt as b,W as Mh,Wn as nD,Wr as xh,Xr as yy,Y as Oh,Yn as oe$1,Yr as yw,Yt as cn,Z as Pn$1,Zn as ou,_n as gd,_r as tD,an as ei$1,at as So$1,br as tg,c as Bg,cn as ev,cr as rh,d as Dw,dn as fe$1,dr as ru,dt as Vg,en as dj,et as Qn$1,f as Ea$1,fr as sD,ft as Vh,gr as sn,gt as Wt,h as Ew,ht as W$1,i as Ag,in as ec$1,ir as qt$1,j as Jv,jn as jh,jr as ve$1,jt as Zv,kr as uw,kt as ZD,lt as Th,mn as fm,mr as sl$1,n as A,nn as dw,nr as q,nt as Rl$1,o as Al$1,or as qy,ot as Sr$1,p as Ej,pn as fl$1,pt as Vr$1,qr as yj,st as Tc$1,t as $p,tn as dm,tr as pm,un as ey,ut as V,v as Ge$1,vn as gi$1,vt as Xc,wt as YE,xt as Xm,y as Gs$1,yn as gj,yr as te$1,yt as Xg,z as Kt$1,zt as an$1}from"./chunk-BzcoOg1T.js";function Re(i,n){n=encodeURIComponent(n);for(let t of i.split(`;`)){let e=t.indexOf(`=`),[o,a]=e==-1?[t,``]:[t.slice(0,e),t.slice(e+1)];if(o.trim()!==n)continue;let r=a;try{r=decodeURIComponent(a)}catch{}return r.length>1&&r[0]===`"`&&r[r.length-1]===`"`&&(r=r.slice(1,-1)),r}return null}var ya=null;function St(){return ya}function ki(i){ya??=i}var Pe=class{};var pe=(()=>{class i{historyGo(t){throw new Error(``)}static ɵfac=function(e){return new(e||i)};static ɵprov=te$1({token:i,factory:()=>b(va),providedIn:`platform`})}return i})();var va=(()=>{class i extends pe{_location;_history;_doc=b(Yo);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return St().getBaseHref(this._doc)}onPopState(t){let e=St().getGlobalEventTarget(this._doc,`window`);return e.addEventListener(`popstate`,t,!1),()=>e.removeEventListener(`popstate`,t)}onHashChange(t){let e=St().getGlobalEventTarget(this._doc,`window`);return e.addEventListener(`hashchange`,t,!1),()=>e.removeEventListener(`hashchange`,t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,e,o){this._history.pushState(t,e,o)}replaceState(t,e,o){this._history.replaceState(t,e,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static ɵfac=function(e){return new(e||i)};static ɵprov=te$1({token:i,factory:()=>new i,providedIn:`platform`})}return i})();var Et=class i{headers;normalizedNames=/* @__PURE__ */ new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n==`string`?this.lazyInit=()=>{this.headers=/* @__PURE__ */ new Map,n.split(`
`).forEach(t=>{let e=t.indexOf(`:`);if(e>0){let o=t.slice(0,e),a=t.slice(e+1).trim();this.addHeaderEntry(o,a)}})}:typeof Headers<`u`&&n instanceof Headers?(this.headers=/* @__PURE__ */ new Map,n.forEach((t,e)=>{this.addHeaderEntry(e,t)})):this.lazyInit=()=>{this.headers=/* @__PURE__ */ new Map,Object.entries(n).forEach(([t,e])=>{this.setHeaderEntries(t,e)})}:this.headers=/* @__PURE__ */ new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:`a`})}set(n,t){return this.clone({name:n,value:t,op:`s`})}delete(n,t){return this.clone({name:n,value:t,op:`d`})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[t,e]of n.headers.entries())this.headers.set(t,e),this.normalizedNames.set(t,n.normalizedNames.get(t))}clone(n){let t=new i;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case`a`:case`s`:let e=n.value;if(typeof e==`string`&&(e=[e]),e.length===0)return;this.maybeSetNormalizedName(n.name,t);let o=n.op===`a`?(this.headers.get(t)||[]).slice():[];o.push(...e),this.headers.set(t,o);break;case`d`:let a=n.value;if(a===void 0)this.headers.delete(t),this.normalizedNames.delete(t);else{let r=Array.isArray(a)?a:[a],s=this.headers.get(t);if(!s)return;s=s.filter(c=>r.indexOf(c)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}}}addHeaderEntry(n,t){let e=n.toLowerCase();this.maybeSetNormalizedName(n,e),this.headers.has(e)?this.headers.get(e).push(t):this.headers.set(e,[t])}setHeaderEntries(n,t){let e=(Array.isArray(t)?t:[t]).map(a=>a.toString()),o=n.toLowerCase();this.headers.set(o,e),this.maybeSetNormalizedName(n,o)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var xn=class{map=/* @__PURE__ */ new Map;set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};var An=class{encodeKey(n){return _a(n)}encodeValue(n){return _a(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function As(i,n){let t=/* @__PURE__ */ new Map;return i.length>0&&i.replace(/^\?/,``).split(`&`).forEach(o=>{let a=o.indexOf(`=`),[r,s]=a==-1?[n.decodeKey(o),``]:[n.decodeKey(o.slice(0,a)),n.decodeValue(o.slice(a+1))],c=t.get(r)||[];c.push(s),t.set(r,c)}),t}var Ms=/[&+#]/g;function _a(i){return encodeURI(i).replace(Ms,encodeURIComponent)}function En(i){return`${i}`}var Ct=class i{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new An,n.fromString){if(n.fromObject)throw new N$1(2805,!1);this.map=As(n.fromString,this.encoder)}else n.fromObject?(this.map=/* @__PURE__ */ new Map,Object.keys(n.fromObject).forEach(t=>{let e=n.fromObject[t],o=Array.isArray(e)?e.map(En):[En(e)];this.map.set(t,o)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:`a`})}appendAll(n){let t=[];return Object.keys(n).forEach(e=>{let o=n[e];Array.isArray(o)?o.forEach(a=>{t.push({param:e,value:a,op:`a`})}):t.push({param:e,value:o,op:`a`})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:`s`})}delete(n,t){return this.clone({param:n,value:t,op:`d`})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(e=>t+`=`+this.encoder.encodeValue(e)).join(`&`)}).filter(n=>n!==``).join(`&`)}clone(n){let t=new i({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){if(this.map===null&&(this.map=/* @__PURE__ */ new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,t]of this.cloneFrom.map.entries())this.map.set(n,t);this.updates.forEach(n=>{switch(n.op){case`a`:case`s`:let t=n.op===`a`?(this.map.get(n.param)||[]).slice():[];t.push(En(n.value)),this.map.set(n.param,t);break;case`d`:if(n.value!==void 0){let e=(this.map.get(n.param)||[]).slice(),o=e.indexOf(En(n.value));o!==-1&&e.splice(o,1),e.length>0?this.map.set(n.param,e):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function ks(i){switch(i){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function Da(i){return typeof ArrayBuffer<`u`&&i instanceof ArrayBuffer}function wa(i){return typeof Blob<`u`&&i instanceof Blob}function Sa(i){return typeof FormData<`u`&&i instanceof FormData}function Is(i){return typeof URLSearchParams<`u`&&i instanceof URLSearchParams}var Ii=`Content-Type`;var Ca=`Accept`;var Ma=`text/plain`;var ka=`application/json`;var Ns=`${ka}, ${Ma}, */*`;var fe=class i{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(n,t,e,o){this.url=t,this.method=n.toUpperCase();let a;if(ks(this.method)||o?(this.body=e!==void 0?e:null,a=o):a=e,a){if(this.reportProgress=!!a.reportProgress,this.reportUploadProgress=!!a.reportUploadProgress,this.reportDownloadProgress=!!a.reportDownloadProgress,this.withCredentials=!!a.withCredentials,this.keepalive=!!a.keepalive,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params),a.priority&&(this.priority=a.priority),a.cache&&(this.cache=a.cache),a.credentials&&(this.credentials=a.credentials),typeof a.timeout==`number`){if(a.timeout<1||!Number.isInteger(a.timeout))throw new N$1(2822,``);this.timeout=a.timeout}a.mode&&(this.mode=a.mode),a.redirect&&(this.redirect=a.redirect),a.integrity&&(this.integrity=a.integrity),a.referrer!==void 0&&(this.referrer=a.referrer),a.referrerPolicy&&(this.referrerPolicy=a.referrerPolicy),this.transferCache=a.transferCache}if(this.headers??=new Et,this.context??=new xn,!this.params)this.params=new Ct,this.urlWithParams=t;else{let r=this.params.toString();if(r.length===0)this.urlWithParams=t;else{let s=t,c=``,d=t.indexOf(`#`);d!==-1&&(c=t.substring(d),s=t.substring(0,d));let u=s.indexOf(`?`),m=u===-1?`?`:u<s.length-1?`&`:``;this.urlWithParams=s+m+r+c}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||Da(this.body)||wa(this.body)||Sa(this.body)||Is(this.body)?this.body:this.body instanceof Ct?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Sa(this.body)?null:wa(this.body)?this.body.type||null:Da(this.body)?null:typeof this.body==`string`?Ma:this.body instanceof Ct?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?ka:null}clone(n={}){let t=n.method||this.method,e=n.url||this.url,o=n.responseType||this.responseType,a=n.keepalive??this.keepalive,r=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,d=n.redirect||this.redirect,u=n.credentials||this.credentials,m=n.referrer??this.referrer,y=n.integrity||this.integrity,D=n.referrerPolicy||this.referrerPolicy,k=n.transferCache??this.transferCache,I=n.timeout??this.timeout,R=n.body!==void 0?n.body:this.body,Ut=n.withCredentials??this.withCredentials,lt=n.reportProgress??this.reportProgress,Ht=n.reportUploadProgress??this.reportUploadProgress,Ae=n.reportDownloadProgress??this.reportDownloadProgress,It=n.headers||this.headers,Me=n.params||this.params,ke=n.context??this.context;return n.setHeaders!==void 0&&(It=Object.keys(n.setHeaders).reduce((ae,Nt)=>ae.set(Nt,n.setHeaders[Nt]),It)),n.setParams&&(Me=Object.keys(n.setParams).reduce((ae,Nt)=>ae.set(Nt,n.setParams[Nt]),Me)),new i(t,e,R,{params:Me,headers:It,context:ke,reportProgress:lt,reportUploadProgress:Ht,reportDownloadProgress:Ae,responseType:o,withCredentials:Ut,transferCache:k,keepalive:a,cache:s,priority:r,timeout:I,mode:c,redirect:d,credentials:u,referrer:m,integrity:y,referrerPolicy:D})}};var Zt=(function(i){return i[i.Sent=0]=`Sent`,i[i.UploadProgress=1]=`UploadProgress`,i[i.ResponseHeader=2]=`ResponseHeader`,i[i.DownloadProgress=3]=`DownloadProgress`,i[i.Response=4]=`Response`,i[i.User=5]=`User`,i})(Zt||{});var be=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,t=200,e=`OK`){this.headers=n.headers||new Et,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||e,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}};var Mn=class i extends be{constructor(n={}){super(n)}type=Zt.ResponseHeader;clone(n={}){return new i({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}};var Fe=class i extends be{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Zt.Response;clone(n={}){return new i({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}};var Xt=class extends be{name=`HttpErrorResponse`;message;error;ok=!1;constructor(n){super(n,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||`(unknown url)`}`:this.message=`Http failure response for ${n.url||`(unknown url)`}: ${n.status} ${n.statusText}`,this.error=n.error||null}};var Ts=200;var Os=/^\)\]\}',?\n/;var Ia=new A(``,{factory:()=>null});var kn=(()=>{class i{fetchImpl=b(Ti,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=b(ve$1);destroyRef=b(pe$1);maxResponseSize=b(Ia);handle(t){return new _(e=>{let o=new AbortController,a=!1,r={next:c=>{c.type===Zt.Response&&(a=!0),e.next(c)},error:c=>{a=!0,e.error(c)},complete:()=>{a=!0,e.complete()}};this.doRequest(t,o.signal,r).then(Oi,c=>r.error(new Xt({error:c})));let s;return t.timeout&&(s=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{o.signal.aborted||o.abort(new DOMException(`signal timed out`,`TimeoutError`))},t.timeout))),()=>{s!==void 0&&clearTimeout(s),!a&&!o.signal.aborted&&o.abort()}})}async doRequest(t,e,o){let a=this.createRequestInit(t),r;try{let R=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,W$1({signal:e},a)));Rs(R),o.next({type:Zt.Sent}),r=await R}catch(R){o.error(new Xt({error:R,status:R.status??0,statusText:R.statusText,url:t.urlWithParams,headers:R.headers}));return}let s=new Et(r.headers),c=r.statusText,d=r.url||t.urlWithParams,u=r.status,m=null,y=t.reportProgress||t.reportDownloadProgress;if(y&&o.next(new Mn({headers:s,status:u,statusText:c,url:d})),r.body){let R=r.headers.get(Ii)??``,Ut=r.headers.get(`content-length`),lt=Ut!==null?Number(Ut):NaN;this.maxResponseSize!==null&&Number.isFinite(lt)&&lt>this.maxResponseSize&&(await r.body.cancel(),Ea(this.maxResponseSize));let Ht=[],Ae=r.body.getReader(),It=0,Me,ke,ae=typeof Zone<`u`&&Zone.current,Nt=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await Ae.cancel(),Nt=!0;break}let{done:_i,value:Di}=await Ae.read();if(_i)break;if(Ht.push(Di),It+=Di.length,this.maxResponseSize!==null&&It>this.maxResponseSize&&(await Ae.cancel(),Ea(this.maxResponseSize)),y){ke=t.responseType===`text`?(ke??``)+(Me??=xa(R)).decode(Di,{stream:!0}):void 0;let No=()=>o.next({type:Zt.DownloadProgress,total:Number.isFinite(lt)?lt:void 0,loaded:It,partialText:ke});ae?ae.run(No):No()}}}),Nt){o.complete();return}let Es=this.concatChunks(Ht,It);try{m=this.parseBody(t,Es,R,u)}catch(_i){o.error(new Xt({error:_i,headers:new Et(r.headers),status:r.status,statusText:r.statusText,url:r.url||t.urlWithParams}));return}}u===0&&(u=m?Ts:0);let D=u>=200&&u<300,k=r.redirected,I=r.type;D?(o.next(new Fe({body:m,headers:s,status:u,statusText:c,url:d,redirected:k,responseType:I})),o.complete()):o.error(new Xt({error:m,headers:s,status:u,statusText:c,url:d,redirected:k,responseType:I}))}parseBody(t,e,o,a){switch(t.responseType){case`json`:let r=new TextDecoder().decode(e).replace(Os,``);if(r===``)return null;try{return JSON.parse(r)}catch(s){if(a<200||a>=300)return r;throw s}case`text`:return xa(o).decode(e);case`blob`:return new Blob([e],{type:o});case`arraybuffer`:return e.buffer}}createRequestInit(t){if(t.reportUploadProgress)throw new N$1(2824,!1);let e={},o;if(o=t.credentials,t.withCredentials&&(o=`include`),t.headers.forEach((a,r)=>e[a]=r.join(`,`)),t.headers.has(Ca)||(e[Ca]=Ns),!t.headers.has(Ii)){let a=t.detectContentTypeHeader();a!==null&&(e[Ii]=a)}return{body:t.serializeBody(),method:t.method,headers:e,credentials:o,keepalive:t.keepalive,cache:t.cache,priority:t.priority,mode:t.mode,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity,referrerPolicy:t.referrerPolicy}}concatChunks(t,e){let o=new Uint8Array(e),a=0;for(let r of t)o.set(r,a),a+=r.length;return o}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var Ti=class{};function Oi(){}function Rs(i){i.then(Oi,Oi)}function Ea(i){throw new N$1(-2825,!1)}var Ps=/charset=\s*["']?([^;"'\s]+)["']?/i;function xa(i){let n=i.match(Ps);if(n!==null)try{return new TextDecoder(n[1])}catch{}return new TextDecoder}var Fs=new A(``,{factory:()=>!0});var Ls=`XSRF-TOKEN`;var Bs=new A(``,{factory:()=>Ls});var zs=`X-XSRF-TOKEN`;var Vs=new A(``,{factory:()=>zs});var js=(()=>{class i{cookieName=b(Bs);doc=b(Yo);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||``;return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Re(t,this.cookieName),this.lastCookieString=t),this.lastToken}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var Na=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵprov=te$1({token:i,factory:function(e){let o=null;return e?o=new(e||i):o=xe$1(js),o},providedIn:`root`})}return i})();function Ta(i,n){if(!b(Fs)||i.method===`GET`||i.method===`HEAD`)return n(i);try{let o=b(pe).href,{origin:a}=new URL(o),{origin:r}=new URL(i.url,a);if(a!==r)return n(i)}catch{return n(i)}let t=b(Na).getToken(),e=b(Vs);return t!=null&&!i.headers.has(e)&&(i=i.clone({headers:i.headers.set(e,t)})),n(i)}function Us(i,n){return n(i)}function Hs(i,n,t){return(e,o)=>hr$1(t,()=>n(e,a=>i(a,o)))}var Oa=new A(``,{factory:()=>[Ta]});var Ra=new A(``);var Pa=new A(``,{factory:()=>!0});var Ri=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵprov=te$1({token:i,factory:function(e){let o=null;return e?o=new(e||i):o=xe$1(kn),o},providedIn:`root`})}return i})();var In=(()=>{class i{backend;injector;chain=null;pendingTasks=b(ei$1);contributeToStability=b(Pa);constructor(t,e){this.backend=t,this.injector=e}handle(t){if(this.chain===null){let o=this.injector.get(Nn,null,{skipSelf:!0}),a=o!==null&&this.backend===o,r=this.injector.get(Ra,[],a?{self:!0}:void 0),s=Array.from(/* @__PURE__ */ new Set([...this.injector.get(Oa),...r]));this.chain=s.reduceRight((c,d)=>Hs(c,d,this.injector),Us)}let e=this.chain;if(this.contributeToStability){let o=this.pendingTasks.add();return tg(()=>e(t,a=>this.backend.handle(a))).pipe(im(o))}else return tg(()=>e(t,o=>this.backend.handle(o)))}static ɵfac=function(e){return new(e||i)(xe$1(Ri),xe$1(fe$1))};static ɵprov=te$1({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var Nn=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵprov=te$1({token:i,factory:function(e){let o=null;return e?o=new(e||i):o=xe$1(In),o},providedIn:`root`})}return i})();function Ni(i,n){return W$1({body:n},i)}var Fa=(()=>{class i{handler;constructor(t){this.handler=t}request(t,e,o={}){let a;if(t instanceof fe)a=t;else{let c;o.headers instanceof Et?c=o.headers:c=new Et(o.headers);let d;o.params&&(o.params instanceof Ct?d=o.params:d=new Ct({fromObject:o.params})),a=new fe(t,e,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:d,reportProgress:o.reportProgress,reportUploadProgress:o.reportUploadProgress,reportDownloadProgress:o.reportDownloadProgress,responseType:o.responseType||`json`,withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let r=Vg(a).pipe(nm(c=>this.handler.handle(c)));if(t instanceof fe||o.observe===`events`)return r;let s=r.pipe(an$1(c=>c instanceof Fe));switch(o.observe||`body`){case`body`:switch(a.responseType){case`arraybuffer`:return s.pipe(Ne(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new N$1(2806,!1);return c.body}));case`blob`:return s.pipe(Ne(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new N$1(2807,!1);return c.body}));case`text`:return s.pipe(Ne(c=>{if(c.body!==null&&typeof c.body!=`string`)throw new N$1(2808,!1);return c.body}));default:return s.pipe(Ne(c=>c.body))}case`response`:return s;default:throw new N$1(2809,!1)}}delete(t,e={}){return this.request(`DELETE`,t,e)}get(t,e={}){return this.request(`GET`,t,e)}head(t,e={}){return this.request(`HEAD`,t,e)}jsonp(t,e){return this.request(`JSONP`,t,{params:new Ct().append(e,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(t,e={}){return this.request(`OPTIONS`,t,e)}patch(t,e,o={}){return this.request(`PATCH`,t,Ni(o,e))}post(t,e,o={}){return this.request(`POST`,t,Ni(o,e))}put(t,e,o={}){return this.request(`PUT`,t,Ni(o,e))}static ɵfac=function(e){return new(e||i)(xe$1(Nn))};static ɵprov=te$1({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();function $s(...i){let n=[Fa,kn,In,{provide:Nn,useExisting:In},{provide:Ri,useFactory:()=>b(kn)},{provide:Oa,useValue:Ta,multi:!0}];for(let t of i)n.push(...t.ɵproviders);return vn(n)}function za(i,n){return i?n?i.endsWith(`/`)?n.startsWith(`/`)?i+n.slice(1):i+n:n.startsWith(`/`)?i+n:`${i}/${n}`:i:n}function La(i){let n=i.search(/#|\?|$/);return i[n-1]===`/`?i.slice(0,n-1)+i.slice(n):i}function Bt(i){return i&&i[0]!==`?`?`?${i}`:i}var Tn=(()=>{class i{historyGo(t){throw new Error(``)}static ɵfac=function(e){return new(e||i)};static ɵprov=te$1({token:i,factory:()=>b(Gs),providedIn:`root`})}return i})();var Ws=new A(``);var Gs=(()=>{class i extends Tn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,e){super(),this._platformLocation=t,this._baseHref=e??this._platformLocation.getBaseHrefFromDOM()??b(Yo).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return za(this._baseHref,t)}path(t=!1){let e=this._platformLocation.pathname+Bt(this._platformLocation.search),o=this._platformLocation.hash;return o&&t?`${e}${o}`:e}pushState(t,e,o,a){let r=this.prepareExternalUrl(o+Bt(a));this._platformLocation.pushState(t,e,r)}replaceState(t,e,o,a){let r=this.prepareExternalUrl(o+Bt(a));this._platformLocation.replaceState(t,e,r)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static ɵfac=function(e){return new(e||i)(xe$1(pe),xe$1(Ws,8))};static ɵprov=te$1({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var On=(()=>{class i{_subject=new K;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let e=this._locationStrategy.getBaseHref();this._basePath=Zs(La(Ba(e))),this._locationStrategy.onPopState(o=>{let a={url:this.path(!0),pop:!0,state:o.state,type:o.type};o.hasUAVisualTransition&&(a.hasUAVisualTransition=!0),this._subject.next(a)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,e=``){return this.path()==this.normalize(t+Bt(e))}normalize(t){return i.stripTrailingSlash(Xs(this._basePath,Ba(t)))}prepareExternalUrl(t){return t&&t[0]!==`/`&&(t=`/`+t),this._locationStrategy.prepareExternalUrl(t)}go(t,e=``,o=null){this._locationStrategy.pushState(o,``,t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Bt(e)),o)}replaceState(t,e=``,o=null){this._locationStrategy.replaceState(o,``,t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Bt(e)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(e=>{this._notifyUrlChangeListeners(e.url,e.state)}),()=>{let e=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(e,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t=``,e){this._urlChangeListeners.forEach(o=>o(t,e))}subscribe(t,e,o){return this._subject.subscribe({next:t,error:e??void 0,complete:o??void 0})}static normalizeQueryParams=Bt;static joinWithSlash=za;static stripTrailingSlash=La;static ɵfac=function(e){return new(e||i)(xe$1(Tn))};static ɵprov=te$1({token:i,factory:()=>Ys(),providedIn:`root`})}return i})();function Ys(){return new On(xe$1(Tn))}function Xs(i,n){if(!i||!n.startsWith(i))return n;let t=n.substring(i.length);return t===``||[`/`,`;`,`?`,`#`].includes(t[0])?t:n}function Ba(i){return i.replace(/\/index\.html$/,``)}function Zs(i){if((/* @__PURE__ */ new RegExp(`^(https?:)?//`)).test(i)){let[,t]=i.split(/\/\/[^\/]+/);return t}return i}var W=(function(i){return i[i.Format=0]=`Format`,i[i.Standalone=1]=`Standalone`,i})(W||{});var M=(function(i){return i[i.Narrow=0]=`Narrow`,i[i.Abbreviated=1]=`Abbreviated`,i[i.Wide=2]=`Wide`,i[i.Short=3]=`Short`,i})(M||{});var X=(function(i){return i[i.Short=0]=`Short`,i[i.Medium=1]=`Medium`,i[i.Long=2]=`Long`,i[i.Full=3]=`Full`,i})(X||{});var At={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Ua(i){return uw(i)[dw.LocaleId]}function Ha(i,n,t){let e=uw(i);return et(et([e[dw.DayPeriodsFormat],e[dw.DayPeriodsStandalone]],n),t)}function $a(i,n,t){let e=uw(i);return et(et([e[dw.DaysFormat],e[dw.DaysStandalone]],n),t)}function Wa(i,n,t){let e=uw(i);return et(et([e[dw.MonthsFormat],e[dw.MonthsStandalone]],n),t)}function Ga(i,n){let e=uw(i)[dw.Eras];return et(e,n)}function Le(i,n){return et(uw(i)[dw.DateFormat],n)}function Be(i,n){return et(uw(i)[dw.TimeFormat],n)}function ze(i,n){let e=uw(i)[dw.DateTimeFormat];return et(e,n)}function Ve(i,n){let t=uw(i),e=t[dw.NumberSymbols][n];if(typeof e>`u`){if(n===At.CurrencyDecimal)return t[dw.NumberSymbols][At.Decimal];if(n===At.CurrencyGroup)return t[dw.NumberSymbols][At.Group]}return e}function Ya(i){if(!i[dw.ExtraData])throw new N$1(2303,!1)}function Xa(i){let n=uw(i);return Ya(n),(n[dw.ExtraData][2]||[]).map(e=>typeof e==`string`?Pi(e):[Pi(e[0]),Pi(e[1])])}function Za(i,n,t){let e=uw(i);Ya(e);return et(et([e[dw.ExtraData][0],e[dw.ExtraData][1]],n)||[],t)||[]}function et(i,n){for(let t=n;t>-1;t--)if(typeof i[t]<`u`)return i[t];throw new N$1(2304,!1)}function Pi(i){let[n,t]=i.split(`:`);return{hours:+n,minutes:+t}}var Ks=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;var Rn=Object.create(null);var qs=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var Js=256;function Ka(i,n,t,e){let o=ll(i);Qs(n),n=xt(t,n)||n;let r=[],s;for(;n;)if(s=qs.exec(n),s){r=r.concat(s.slice(1));let u=r.pop();if(!u)break;n=u}else{r.push(n);break}let c=o.getTimezoneOffset();e&&(c=Ja(e,c),o=sl(o,e));let d=``;return r.forEach(u=>{let m=al(u);d+=m?m(o,t,c):u===`''`?`'`:u.replace(/(^'|'$)/g,``).replace(/''/g,`'`)}),d}function Qs(i){if(i.length>Js)throw new N$1(2300,!1)}function zn(i,n,t){let e=/* @__PURE__ */ new Date(0);return e.setFullYear(i,n,t),e.setHours(0,0,0),e}function xt(i,n){let t=Ua(i);if(Rn[t]??=Object.create(null),Rn[t][n])return Rn[t][n];let e=``;switch(n){case`shortDate`:e=Le(i,X.Short);break;case`mediumDate`:e=Le(i,X.Medium);break;case`longDate`:e=Le(i,X.Long);break;case`fullDate`:e=Le(i,X.Full);break;case`shortTime`:e=Be(i,X.Short);break;case`mediumTime`:e=Be(i,X.Medium);break;case`longTime`:e=Be(i,X.Long);break;case`fullTime`:e=Be(i,X.Full);break;case`short`:let o=xt(i,`shortTime`),a=xt(i,`shortDate`);e=Pn(ze(i,X.Short),[o,a]);break;case`medium`:let r=xt(i,`mediumTime`),s=xt(i,`mediumDate`);e=Pn(ze(i,X.Medium),[r,s]);break;case`long`:let c=xt(i,`longTime`),d=xt(i,`longDate`);e=Pn(ze(i,X.Long),[c,d]);break;case`full`:let u=xt(i,`fullTime`),m=xt(i,`fullDate`);e=Pn(ze(i,X.Full),[u,m])}return e&&(Rn[t][n]=e),e}function Pn(i,n){return n&&(i=i.replace(/\{([^}]+)}/g,function(t,e){return Object.hasOwn(n,e)?n[e]:t})),i}function at(i,n,t=`-`,e,o){let a=``;(i<0||o&&i<=0)&&(o?i=-i+1:(i=-i,a=t));let r=String(i);for(;r.length<n;)r=`0`+r;return e&&(r=r.slice(r.length-n)),a+r}function tl(i,n){return at(i,3).substring(0,n)}function z(i,n,t=0,e=!1,o=!1){return function(a,r){let s=el(i,a);if((t>0||s>-t)&&(s+=t),i===3)s===0&&t===-12&&(s=12);else if(i===6)return tl(s,n);let c=Ve(r,At.MinusSign);return at(s,n,c,e,o)}}function el(i,n){switch(i){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new N$1(2301,!1)}}function N(i,n,t=W.Format,e=!1){return function(o,a){return nl(o,a,i,n,t,e)}}function nl(i,n,t,e,o,a){switch(t){case 2:return Wa(n,o,e)[i.getMonth()];case 1:return $a(n,o,e)[i.getDay()];case 0:let r=i.getHours(),s=i.getMinutes();if(a){let d=Xa(n),u=Za(n,o,e),m=d.findIndex(y=>{if(Array.isArray(y)){let[D,k]=y,I=r>=D.hours&&s>=D.minutes,R=r<k.hours||r===k.hours&&s<k.minutes;if(D.hours<k.hours){if(I&&R)return!0}else if(I||R)return!0}else if(y.hours===r&&y.minutes===s)return!0;return!1});if(m!==-1)return u[m]}return Ha(n,o,e)[r<12?0:1];case 3:return Ga(n,e)[i.getFullYear()<=0?0:1];default:throw new N$1(2302,!1)}}function Fn(i){return function(n,t,e){let o=-1*e,a=Ve(t,At.MinusSign),r=o>0?Math.floor(o/60):Math.ceil(o/60);switch(i){case 0:return(o>=0?`+`:``)+at(r,2,a)+at(Math.abs(o%60),2,a);case 1:return`GMT`+(o>=0?`+`:``)+at(r,1,a);case 2:return`GMT`+(o>=0?`+`:``)+at(r,2,a)+`:`+at(Math.abs(o%60),2,a);case 3:return e===0?`Z`:(o>=0?`+`:``)+at(r,2,a)+`:`+at(Math.abs(o%60),2,a);default:throw new N$1(2310,!1)}}}var il=0;var Bn=4;function ol(i){let n=zn(i,il,1).getDay();return zn(i,0,1+(n<=Bn?Bn:Bn+7)-n)}function qa(i){let n=i.getDay(),t=n===0?-3:Bn-n;return zn(i.getFullYear(),i.getMonth(),i.getDate()+t)}function Fi(i,n=!1){return function(t,e){let o;if(n){let a=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,r=t.getDate();o=1+Math.floor((r+a)/7)}else{let a=qa(t),r=ol(a.getFullYear()),s=a.getTime()-r.getTime();o=1+Math.round(s/6048e5)}return at(o,i,Ve(e,At.MinusSign))}}function Ln(i,n=!1){return function(t,e){return at(qa(t).getFullYear(),i,Ve(e,At.MinusSign),n)}}var Li=Object.create(null);function al(i){if(Li[i])return Li[i];let n;switch(i){case`G`:case`GG`:case`GGG`:n=N(3,M.Abbreviated);break;case`GGGG`:n=N(3,M.Wide);break;case`GGGGG`:n=N(3,M.Narrow);break;case`y`:n=z(0,1,0,!1,!0);break;case`yy`:n=z(0,2,0,!0,!0);break;case`yyy`:n=z(0,3,0,!1,!0);break;case`yyyy`:n=z(0,4,0,!1,!0);break;case`Y`:n=Ln(1);break;case`YY`:n=Ln(2,!0);break;case`YYY`:n=Ln(3);break;case`YYYY`:n=Ln(4);break;case`M`:case`L`:n=z(1,1,1);break;case`MM`:case`LL`:n=z(1,2,1);break;case`MMM`:n=N(2,M.Abbreviated);break;case`MMMM`:n=N(2,M.Wide);break;case`MMMMM`:n=N(2,M.Narrow);break;case`LLL`:n=N(2,M.Abbreviated,W.Standalone);break;case`LLLL`:n=N(2,M.Wide,W.Standalone);break;case`LLLLL`:n=N(2,M.Narrow,W.Standalone);break;case`w`:n=Fi(1);break;case`ww`:n=Fi(2);break;case`W`:n=Fi(1,!0);break;case`d`:n=z(2,1);break;case`dd`:n=z(2,2);break;case`c`:case`cc`:n=z(7,1);break;case`ccc`:n=N(1,M.Abbreviated,W.Standalone);break;case`cccc`:n=N(1,M.Wide,W.Standalone);break;case`ccccc`:n=N(1,M.Narrow,W.Standalone);break;case`cccccc`:n=N(1,M.Short,W.Standalone);break;case`E`:case`EE`:case`EEE`:n=N(1,M.Abbreviated);break;case`EEEE`:n=N(1,M.Wide);break;case`EEEEE`:n=N(1,M.Narrow);break;case`EEEEEE`:n=N(1,M.Short);break;case`a`:case`aa`:case`aaa`:n=N(0,M.Abbreviated);break;case`aaaa`:n=N(0,M.Wide);break;case`aaaaa`:n=N(0,M.Narrow);break;case`b`:case`bb`:case`bbb`:n=N(0,M.Abbreviated,W.Standalone,!0);break;case`bbbb`:n=N(0,M.Wide,W.Standalone,!0);break;case`bbbbb`:n=N(0,M.Narrow,W.Standalone,!0);break;case`B`:case`BB`:case`BBB`:n=N(0,M.Abbreviated,W.Format,!0);break;case`BBBB`:n=N(0,M.Wide,W.Format,!0);break;case`BBBBB`:n=N(0,M.Narrow,W.Format,!0);break;case`h`:n=z(3,1,-12);break;case`hh`:n=z(3,2,-12);break;case`H`:n=z(3,1);break;case`HH`:n=z(3,2);break;case`m`:n=z(4,1);break;case`mm`:n=z(4,2);break;case`s`:n=z(5,1);break;case`ss`:n=z(5,2);break;case`S`:n=z(6,1);break;case`SS`:n=z(6,2);break;case`SSS`:n=z(6,3);break;case`Z`:case`ZZ`:case`ZZZ`:n=Fn(0);break;case`ZZZZZ`:n=Fn(3);break;case`O`:case`OO`:case`OOO`:case`z`:case`zz`:case`zzz`:n=Fn(1);break;case`OOOO`:case`ZZZZ`:case`zzzz`:n=Fn(2);break;default:return null}return Li[i]=n,n}function Ja(i,n){i=i.replace(/:/g,``);let t=Date.parse(`Jan 01, 1970 00:00:00 `+i)/6e4;return isNaN(t)?n:t}function rl(i,n){return i=new Date(i.getTime()),i.setMinutes(i.getMinutes()+n),i}function sl(i,n,t){let o=i.getTimezoneOffset();return rl(i,-1*(Ja(n,o)-o))}function ll(i){if(Va(i))return i;if(typeof i==`number`&&!isNaN(i))return new Date(i);if(typeof i==`string`){if(i=i.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(i)){let[o,a=1,r=1]=i.split(`-`).map(s=>+s);return zn(o,a-1,r)}let t=parseFloat(i);if(!isNaN(i-t))return new Date(t);let e;if(e=i.match(Ks))return cl(e)}let n=new Date(i);if(!Va(n))throw new N$1(2311,!1);return n}function cl(i){let n=/* @__PURE__ */ new Date(0),t=0,e=0,o=i[8]?n.setUTCFullYear:n.setFullYear,a=i[8]?n.setUTCHours:n.setHours;i[9]&&(t=Number(i[9]+i[10]),e=Number(i[9]+i[11])),o.call(n,Number(i[1]),Number(i[2])-1,Number(i[3]));let r=Number(i[4]||0)-t,s=Number(i[5]||0)-e,c=Number(i[6]||0),d=Math.floor(parseFloat(`0.`+(i[7]||0))*1e3);return a.call(n,r,s,c,d),n}function Va(i){return i instanceof Date&&!isNaN(i.valueOf())}var Bi=/\s+/;var ja=[];var dl=(()=>{class i{_ngEl;_renderer;initialClasses=ja;rawClass;stateMap=/* @__PURE__ */ new Map;constructor(t,e){this._ngEl=t,this._renderer=e}set klass(t){this.initialClasses=t!=null?t.trim().split(Bi):ja}set ngClass(t){this.rawClass=typeof t==`string`?t.trim().split(Bi):t}ngDoCheck(){for(let e of this.initialClasses)this._updateState(e,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let e of t)this._updateState(e,!0);else if(t!=null)for(let e of Object.keys(t))this._updateState(e,!!t[e]);this._applyStateDiff()}_updateState(t,e){let o=this.stateMap.get(t);o!==void 0?(o.enabled!==e&&(o.changed=!0,o.enabled=e),o.touched=!0):this.stateMap.set(t,{enabled:e,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let e=t[0],o=t[1];o.changed?(this._toggleClass(e,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(e,!1),this.stateMap.delete(e)),o.touched=!1}}_toggleClass(t,e){t=t.trim(),t.length>0&&t.split(Bi).forEach(o=>{e?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static ɵfac=function(e){return new(e||i)(Vr$1(Lr$1),Vr$1(ec$1))};static ɵdir=tD({type:i,selectors:[[``,`ngClass`,``]],inputs:{klass:[0,`class`,`klass`],ngClass:`ngClass`}})}return i})();var ul=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=b(oe$1);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let e=this._viewContainerRef;if(this._viewRef&&e.remove(e.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=e.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,e,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,e,o):!1,get:(t,e,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,e,o)}})}static ɵfac=function(e){return new(e||i)(Vr$1(ji$1))};static ɵdir=tD({type:i,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[yy]})}return i})();function Qa(i,n){return new N$1(2100,!1)}var zi=class{createSubscription(n,t,e){return tg(()=>n.subscribe({next:t,error:e}))}dispose(n){tg(()=>n.unsubscribe())}};var Vi=class{createSubscription(n,t,e){return n.then(o=>t?.(o),o=>e?.(o)),{unsubscribe:()=>{t=null,e=null}}}dispose(n){n.unsubscribe()}};var ml=new Vi;var hl=new zi;var pl=(()=>{class i{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=b(Ht);constructor(t){this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){if(!this._obj){if(t)try{this.markForCheckOnValueUpdate=!1,this._subscribe(t)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,e=>this._updateLatestValue(t,e),e=>this.applicationErrorHandler(e))}_selectStrategy(t){if(Xc(t))return ml;if(rh(t))return hl;throw Qa(i,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,e){t===this._obj&&(this._latestValue=e,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static ɵfac=function(e){return new(e||i)(Vr$1(gj,16))};static ɵpipe=nD({name:`async`,type:i,pure:!1})}return i})();var fl=`mediumDate`;var tr=new A(``);var er=new A(``);var bl=(()=>{class i{locale;defaultTimezone;defaultOptions;constructor(t,e,o){this.locale=t,this.defaultTimezone=e,this.defaultOptions=o}transform(t,e,o,a){if(t==null||t===``||t!==t)return null;try{let r=e??this.defaultOptions?.dateFormat??fl,s=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Ka(t,r,a||this.locale,s)}catch(r){throw Qa(i,r.message)}}static ɵfac=function(e){return new(e||i)(Vr$1(fl$1,16),Vr$1(tr,24),Vr$1(er,24))};static ɵpipe=nD({name:`date`,type:i,pure:!0})}return i})();var nr=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=JE({type:i});static ɵinj=wu({})}return i})();var ji=`browser`;function ir(i){return i===ji}var je=class{_doc;constructor(n){this._doc=n}manager};var Vn=(()=>{class i extends je{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,o,a){return t.addEventListener(e,o,a),()=>this.removeEventListener(t,e,o,a)}removeEventListener(t,e,o,a){return t.removeEventListener(e,o,a)}static ɵfac=function(e){return new(e||i)(xe$1(Yo))};static ɵprov=te$1({token:i,factory:i.ɵfac})}return i})();var Hn=new A(``);var Wi=(()=>{class i{_zone;_plugins;_eventNameToPlugin=/* @__PURE__ */ new Map;constructor(t,e){this._zone=e,t.forEach(r=>{r.manager=this});let o=t.filter(r=>!(r instanceof Vn));this._plugins=o.slice().reverse();let a=t.find(r=>r instanceof Vn);a&&this._plugins.push(a)}addEventListener(t,e,o,a){return this._findPluginFor(e).addEventListener(t,e,o,a)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(a=>a.supports(t)),!e)throw new N$1(-5101,!1);return this._eventNameToPlugin.set(t,e),e}static ɵfac=function(e){return new(e||i)(xe$1(Hn),xe$1(ve$1))};static ɵprov=te$1({token:i,factory:i.ɵfac})}return i})();var Ui=`ng-app-id`;function or(i){for(let n of i)n.remove()}function ar(i,n){let t=n.createElement(`style`);return t.textContent=i,t}function yl(i,n,t,e){let o=i.head?.querySelectorAll(`style[${Ui}="${n}"],link[${Ui}="${n}"]`);if(!o||o.length===0)return!1;for(let a of o)a.removeAttribute(Ui),a instanceof HTMLLinkElement?e.set(a.href.slice(a.href.lastIndexOf(`/`)+1),{usage:0,elements:[a]}):a.textContent&&t.set(a.textContent,{usage:0,elements:[a]});return!0}function $i(i,n){let t=n.createElement(`link`);return t.setAttribute(`rel`,`stylesheet`),t.setAttribute(`href`,i),t}var Gi=(()=>{class i{doc;appId;nonce;inline=/* @__PURE__ */ new Map;external=/* @__PURE__ */ new Map;hosts=/* @__PURE__ */ new Set;constructor(t,e,o,a={}){this.doc=t,this.appId=e,this.nonce=o,yl(t,e,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,e){for(let o of t)this.addUsage(o,this.inline,ar);e?.forEach(o=>this.addUsage(o,this.external,$i))}removeStyles(t,e){for(let o of t)this.removeUsage(o,this.inline);e?.forEach(o=>this.removeUsage(o,this.external))}addUsage(t,e,o){let a=e.get(t);a?a.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,o(t,this.doc)))})}removeUsage(t,e){let o=e.get(t);o&&(o.usage--,o.usage<=0&&(or(o.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])or(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[e,{elements:o}]of this.inline)o.push(this.addElement(t,ar(e,this.doc)));for(let[e,{elements:o}]of this.external)o.push(this.addElement(t,$i(e,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let e of[...this.inline.values(),...this.external.values()]){let o=[];for(let a of e.elements)a.parentNode===t?a.remove():o.push(a);e.elements=o}}addElement(t,e){return this.nonce&&e.setAttribute(`nonce`,this.nonce),t.appendChild(e)}static ɵfac=function(e){return new(e||i)(xe$1(Yo),xe$1(hd),xe$1(ey,8),xe$1(Jm))};static ɵprov=te$1({token:i,factory:i.ɵfac})}return i})();var Hi={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var Yi=/%COMP%/g;var sr=`%COMP%`;var vl=`_nghost-${sr}`;var _l=`_ngcontent-${sr}`;var Dl=!0;var wl=new A(``,{factory:()=>Dl});var Sl=new A(``);function Cl(i){return _l.replace(Yi,i)}function El(i){return vl.replace(Yi,i)}function lr(i,n){return n.map(t=>t.replace(Yi,i))}var Xi=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=/* @__PURE__ */ new Map;defaultRenderer;cssVarNamespace;constructor(t,e,o,a,r,s,c=null,d=null,u=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=o,this.removeStylesOnCompDestroy=a,this.doc=r,this.ngZone=s,this.nonce=c,this.tracingService=d,this.cssVarNamespace=u??``,this.defaultRenderer=new Ue(t,r,s,this.tracingService,this.cssVarNamespace)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;let o=this.getOrCreateRenderer(t,e);return o instanceof Un?o.applyToHost(t):o instanceof He&&o.applyStyles(),o}getOrCreateRenderer(t,e){let o=this.rendererByCompId,a=o.get(e.id);if(!a){let r=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,m=this.tracingService;switch(e.encapsulation){case Wt.Emulated:a=new Un(c,d,e,this.appId,u,r,s,m,this.cssVarNamespace);break;case Wt.ShadowDom:return new jn(c,t,e,r,s,this.nonce,m,this.cssVarNamespace,d);case Wt.ExperimentalIsolatedShadowDom:return new jn(c,t,e,r,s,this.nonce,m,this.cssVarNamespace);default:a=new He(c,d,e,u,r,s,m,this.cssVarNamespace)}o.set(e.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static ɵfac=function(e){return new(e||i)(xe$1(Wi),xe$1($p),xe$1(hd),xe$1(wl),xe$1(Yo),xe$1(ve$1),xe$1(ey),xe$1(Kt$1,8),xe$1(Sl,8))};static ɵprov=te$1({token:i,factory:i.ɵfac})}return i})();var Ue=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,e,o,a=``){this.eventManager=n,this.doc=t,this.ngZone=e,this.tracingService=o,this.cssVarNamespace=a}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(Hi[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(rr(n)?n.content:n).appendChild(t)}insertBefore(n,t,e){if(n){let o=rr(n)?n.content:n;if(e!=null&&e.parentNode!==o)throw new N$1(-5106,!1);o.insertBefore(t,e)}}removeChild(n,t){t.remove()}selectRootElement(n,t){let e=typeof n==`string`?this.doc.querySelector(n):n;if(!e)throw new N$1(-5104,!1);return t||(e.textContent=``),e}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,e,o){if(o){t=o+`:`+t;let a=Hi[o];a?n.setAttributeNS(a,t,e):n.setAttribute(t,e)}else n.setAttribute(t,e)}removeAttribute(n,t,e){if(e){let o=Hi[e];o?n.removeAttributeNS(o,t):n.removeAttribute(`${e}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,e,o){let a=t.startsWith(`--`);a&&(t=t.replace(`%NS%`,this.cssVarNamespace)),a||o&(mi$1.DashCase|mi$1.Important)?n.style.setProperty(t,e,o&mi$1.Important?`important`:``):n.style[t]=e}removeStyle(n,t,e){let o=t.startsWith(`--`);o&&(t=t.replace(`%NS%`,this.cssVarNamespace)),o||e&mi$1.DashCase?n.style.removeProperty(t):n.style[t]=``}setProperty(n,t,e){n!=null&&(n[t]=e)}setValue(n,t){n.nodeValue=t}listen(n,t,e,o){if(typeof n==`string`&&(n=St().getGlobalEventTarget(this.doc,n),!n))throw new N$1(-5102,!1);let a=this.decoratePreventDefault(e);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(n,t,a)),this.eventManager.addEventListener(n,t,a,o)}decoratePreventDefault(n){return t=>{if(t===`__ngUnwrap__`)return n;n(t)===!1&&t.preventDefault()}}};function rr(i){return i.tagName===`TEMPLATE`&&i.content!==void 0}var jn=class extends Ue{hostEl;sharedStylesHost;shadowRoot;constructor(n,t,e,o,a,r,s,c,d){super(n,o,a,s,c),this.hostEl=t,this.sharedStylesHost=d,this.shadowRoot=t.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=e.styles;u=lr(e.id,u).map(y=>y.replace(/%NS%/g,c));for(let y of u){let D=document.createElement(`style`);r&&D.setAttribute(`nonce`,r),D.textContent=y,this.shadowRoot.appendChild(D)}let m=e.getExternalStyles?.();if(m)for(let y of m){let D=$i(y,o);r&&D.setAttribute(`nonce`,r),this.shadowRoot.appendChild(D)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,e){return super.insertBefore(this.nodeOrShadowRoot(n),t,e)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var He=class extends Ue{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,e,o,a,r,s,c,d){super(n,a,r,s,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o;let u=e.styles,m=d?lr(d,u):u;this.styles=m.map(y=>y.replace(/%NS%/g,c)),this.styleUrls=e.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Zv.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var Un=class extends He{contentAttr;hostAttr;constructor(n,t,e,o,a,r,s,c,d){let u=o+`-`+e.id;super(n,t,e,a,r,s,c,d,u),this.contentAttr=Cl(u),this.hostAttr=El(u)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,``)}createElement(n,t){let e=super.createElement(n,t);return super.setAttribute(e,this.contentAttr,``),e}};var $n=class i extends Pe{supportsDOMEvents=!0;static makeCurrent(){ki(new i)}onAndCancel(n,t,e,o){return n.addEventListener(t,e,o),()=>{n.removeEventListener(t,e,o)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t===`window`?window:t===`document`?n:t===`body`?n.body:null}getBaseHref(n){let t=Al();return t==null?null:Ml(t)}resetBaseElement(){$e=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Re(document.cookie,n)}};var $e=null;function Al(){return $e=$e||document.head.querySelector(`base`),$e?$e.getAttribute(`href`):null}function Ml(i){return new URL(i,document.baseURI).pathname}var cr=[`alt`,`control`,`meta`,`shift`];var kl={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var Il={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey};var dr=(()=>{class i extends je{constructor(t){super(t)}supports(t){return i.parseEventName(t)!=null}addEventListener(t,e,o,a){let r=i.parseEventName(e),s=i.eventCallback(r.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>St().onAndCancel(t,r.domEventName,s,a))}static parseEventName(t){let e=t.toLowerCase().split(`.`),o=e.shift();if(e.length===0||!(o===`keydown`||o===`keyup`))return null;let a=i._normalizeKey(e.pop()),r=``,s=e.indexOf(`code`);if(s>-1&&(e.splice(s,1),r=`code.`),cr.forEach(d=>{let u=e.indexOf(d);u>-1&&(e.splice(u,1),r+=d+`.`)}),r+=a,e.length!=0||a.length===0)return null;let c={};return c.domEventName=o,c.fullKey=r,c}static matchEventFullKeyCode(t,e){let o=kl[t.key]||t.key,a=``;return e.indexOf(`code.`)>-1&&(o=t.code,a=`code.`),o==null||!o?!1:(o=o.toLowerCase(),o===` `?o=`space`:o===`.`&&(o=`dot`),cr.forEach(r=>{if(r!==o){let s=Il[r];s(t)&&(a+=r+`.`)}}),a+=o,a===e)}static eventCallback(t,e,o){return a=>{i.matchEventFullKeyCode(a,t)&&o.runGuarded(()=>e(a))}}static _normalizeKey(t){return t===`esc`?`escape`:t}static ɵfac=function(e){return new(e||i)(xe$1(Yo))};static ɵprov=te$1({token:i,factory:i.ɵfac})}return i})();async function Nl(i,n,t){let e=W$1({rootComponent:i},Tl(n,t));return mj(e)}function Tl(i,n){return{platformRef:n?.platformRef,appProviders:[...Ll,...i?.providers??[]],platformProviders:Fl}}function Ol(){$n.makeCurrent()}function Rl(){return new Ye$1}function Pl(){return qy(document),document}var Fl=[{provide:Jm,useValue:ji},{provide:gd,useValue:Ol,multi:!0},{provide:Yo,useFactory:Pl}];var Ll=[{provide:Gs$1,useValue:`root`},{provide:Ye$1,useFactory:Rl},{provide:Hn,useClass:Vn,multi:!0},{provide:Hn,useClass:dr,multi:!0},Xi,{provide:$p,useClass:Gi},{provide:Gi,useExisting:$p},Wi,{provide:xr$1,useExisting:Xi},[]];var Gm=(()=>{class i{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||``}static ɵfac=function(e){return new(e||i)(xe$1(Yo))};static ɵprov=te$1({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var Zi=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵprov=te$1({token:i,factory:function(e){let o=null;return e?o=new(e||i):o=xe$1(Bl),o},providedIn:`root`})}return i})();var Bl=(()=>{class i extends Zi{_doc=b(Yo);sanitize(t,e){if(e==null)return null;switch(t){case Q.NONE:return e;case Q.HTML:return Tc$1(e,`HTML`)?qt$1(e):Iv(this._doc,String(e)).toString();case Q.STYLE:return Tc$1(e,`Style`)?qt$1(e):e;case Q.SCRIPT:if(Tc$1(e,`Script`))return qt$1(e);throw new N$1(5200,!1);case Q.URL:return Tc$1(e,`URL`)?qt$1(e):_c$1(String(e));case Q.RESOURCE_URL:if(Tc$1(e,`ResourceURL`))return qt$1(e);throw new N$1(-5201,!1);default:throw new N$1(5202,!1)}}bypassSecurityTrustHtml(t){return Yy(t)}bypassSecurityTrustStyle(t){return Ky(t)}bypassSecurityTrustScript(t){return Jy(t)}bypassSecurityTrustUrl(t){return Xy(t)}bypassSecurityTrustResourceUrl(t){return ev(t)}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();function We(i){return i.buttons===0||i.detail===0}function Ge(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Ki;function ur(){if(Ki==null){let i=typeof document<`u`?document.head:null;Ki=!!(i&&(i.createShadowRoot||i.attachShadow))}return Ki}function qi(i){if(ur()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Kt(){let i=typeof document<`u`&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function G(i){if(i.composedPath)try{return i.composedPath()[0]}catch{}return i.target}var Ji;try{Ji=typeof Intl<`u`&&Intl.v8BreakIterator}catch{Ji=!1}var T=(()=>{class i{_platformId=b(Jm);isBrowser=this._platformId?ir(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ji)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var Ye;function mr(){if(Ye==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Ye=!0}))}finally{Ye=Ye||!1}return Ye}function ge(i){return mr()?i:!!i.capture}function rt(i,n=0){return hr(i)?Number(i):arguments.length===2?n:0}function hr(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function nt(i){return i instanceof Lr$1?i.nativeElement:i}var pr=new A(`cdk-input-modality-detector-options`);var fr={ignoreKeys:[18,17,224,91,16]};var br=650;var Qi={passive:!0,capture:!0};var gr=(()=>{class i{_platform=b(T);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new zn$1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=G(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<br||(this._modality.next(We(t)?`keyboard`:`mouse`),this._mostRecentTarget=G(t))};_onTouchstart=t=>{if(Ge(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=G(t)};constructor(){let t=b(ve$1),e=b(Yo),o=b(pr,{optional:!0});if(this._options=W$1(W$1({},fr),o),this.modalityDetected=this._modality.pipe(lm(1)),this.modalityChanged=this.modalityDetected.pipe(Rl$1()),this._platform.isBrowser){let a=b(xr$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[a.listen(e,`keydown`,this._onKeydown,Qi),a.listen(e,`mousedown`,this._onMousedown,Qi),a.listen(e,`touchstart`,this._onTouchstart,Qi)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var Xe=(function(i){return i[i.IMMEDIATE=0]=`IMMEDIATE`,i[i.EVENTUAL=1]=`EVENTUAL`,i})(Xe||{});var yr=new A(`cdk-focus-monitor-default-options`);var Wn=ge({passive:!0,capture:!0});var Ze=(()=>{class i{_ngZone=b(ve$1);_platform=b(T);_inputModalityDetector=b(gr);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=b(Yo);_stopInputModalityDetector=new K;constructor(){let t=b(yr,{optional:!0});this._detectionMode=t?.detectionMode||Xe.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=G(t);for(let o=e;o;o=o.parentElement)t.type===`focus`?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=nt(t);if(!this._platform.isBrowser||o.nodeType!==1)return Vg();let a=qi(o)||this._document,r=this._elementInfo.get(o);if(r)return e&&(r.checkChildren=!0),r.subject;let s={checkChildren:e,subject:new K,rootNode:a};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let e=nt(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let a=nt(t);a===this._document.activeElement?this._getClosestElementsInfo(a).forEach(([s,c])=>this._originChanged(s,e,c)):(this._setOrigin(e),typeof a.focus==`function`&&a.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===Xe.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle(`cdk-focused`,!!e),t.classList.toggle(`cdk-touch-focused`,e===`touch`),t.classList.toggle(`cdk-keyboard-focused`,e===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,e===`mouse`),t.classList.toggle(`cdk-program-focused`,e===`program`)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&e,this._detectionMode===Xe.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?br:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),a=G(t);!o||!o.checkChildren&&e!==a||this._originChanged(e,this._getFocusOrigin(a),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Wn),e.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Wn)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(dm(this._stopInputModalityDetector)).subscribe(a=>{this._setOrigin(a,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Wn),e.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Wn),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,a)=>{(a===t||o.checkChildren&&a.contains(t))&&e.push([a,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!e||e===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let a=t.labels;if(a){for(let r=0;r<a.length;r++)if(a[r].contains(e))return!0}return!1}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var Gn=/* @__PURE__ */ new WeakMap;var it=(()=>{class i{_appRef;_injector=b(oe$1);_environmentInjector=b(fe$1);load(t){let e=this._appRef=this._appRef||this._injector.get(Hr$1),o=Gn.get(e);o||(o={loaders:/* @__PURE__ */ new Set,refs:[]},Gn.set(e,o),e.onDestroy(()=>{Gn.get(e)?.refs.forEach(a=>a.destroy()),Gn.delete(e)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(Ej(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var Xn=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=YE({type:i,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return i})();var Yn;function zl(){if(Yn===void 0&&(Yn=null,typeof window<`u`)){let i=window;if(i.trustedTypes!==void 0)try{Yn=i.trustedTypes.createPolicy(`angular#components`,{createHTML:n=>n})}catch(n){console.error(n)}}return Yn}function Vl(i){return zl()?.createHTML(i)||i}function vr(i,n,t){i.innerHTML=Vl(t.sanitize(Q.HTML,n)||``)}function ye(i){return Array.isArray(i)?i:[i]}var _r=/* @__PURE__ */ new Set;var qt;var Zn=(()=>{class i{_platform=b(T);_nonce=b(ey,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ul}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&jl(t,this._nonce),this._matchMedia(t)}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();function jl(i,n){if(!_r.has(i))try{qt||(qt=document.createElement(`style`),n&&qt.setAttribute(`nonce`,n),qt.setAttribute(`type`,`text/css`),document.head.appendChild(qt)),qt.sheet&&(qt.sheet.insertRule(`@media ${i.replace(/[{}]/g,``)} {body{ }}`,0),_r.add(i))}catch(t){console.error(t)}}function Ul(i){return{matches:i===`all`||i===``,media:i,addListener:()=>{},removeListener:()=>{}}}var to=(()=>{class i{_mediaMatcher=b(Zn);_zone=b(ve$1);_queries=/* @__PURE__ */ new Map;_destroySubject=new K;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Dr(ye(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Dr(ye(t)).map(r=>this._registerQuery(r).observable),a=Zg(o);return a=sn(a.pipe(cn(1)),a.pipe(lm(1),Al$1(0))),a.pipe(Ne(r=>{let s={matches:!1,breakpoints:{}};return r.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),a={observable:new _(r=>{let s=c=>this._zone.run(()=>r.next(c));return e.addListener(s),()=>{e.removeListener(s)}}).pipe(ou(e),Ne(({matches:r})=>({query:t,matches:r})),dm(this._destroySubject)),mql:e};return this._queries.set(t,a),a}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();function Dr(i){return i.map(n=>n.split(`,`)).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}function Hl(i){if(i.type===`characterData`&&i.target instanceof Comment)return!0;if(i.type===`childList`){for(let n=0;n<i.addedNodes.length;n++)if(!(i.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<i.removedNodes.length;n++)if(!(i.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var wr=(()=>{class i{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var Sr=(()=>{class i{_mutationObserverFactory=b(wr);_observedElements=/* @__PURE__ */ new Map;_ngZone=b(ve$1);ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){let e=nt(t);return new _(o=>{let r=this._observeElement(e).pipe(Ne(s=>s.filter(c=>!Hl(c))),an$1(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{o.next(s)})});return()=>{r.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let e=new K,o=this._mutationObserverFactory.create(a=>e.next(a));o&&o.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:o,stream:e,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:e,stream:o}=this._observedElements.get(t);e&&e.disconnect(),o.complete(),this._observedElements.delete(t)}}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var Yh=(()=>{class i{_contentObserver=b(Sr);_elementRef=b(Lr$1);event=new Ge$1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=rt(t),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(Al$1(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,yj],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return i})();var Cr=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=JE({type:i});static ɵinj=wu({providers:[wr]})}return i})();var qn=(()=>{class i{_platform=b(T);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return Wl(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=$l(Ql(t));if(e&&(Er(e)===-1||!this.isVisible(e)))return!1;let o=t.nodeName.toLowerCase(),a=Er(t);return t.hasAttribute(`contenteditable`)?a!==-1:o===`iframe`||o===`object`||this._platform.WEBKIT&&this._platform.IOS&&!ql(t)?!1:o===`audio`?t.hasAttribute(`controls`)?a!==-1:!1:o===`video`?a===-1?!1:a!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,e){return Jl(t)&&!this.isDisabled(t)&&(e?.ignoreInert||!t.closest?.(`[inert]`))&&(e?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();function $l(i){try{return i.frameElement}catch{return null}}function Wl(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects==`function`&&i.getClientRects().length)}function Gl(i){let n=i.nodeName.toLowerCase();return n===`input`||n===`select`||n===`button`||n===`textarea`}function Yl(i){return Zl(i)&&i.type==`hidden`}function Xl(i){return Kl(i)&&i.hasAttribute(`href`)}function Zl(i){return i.nodeName.toLowerCase()==`input`}function Kl(i){return i.nodeName.toLowerCase()==`a`}function Mr(i){if(!i.hasAttribute(`tabindex`)||i.tabIndex===void 0)return!1;let n=i.getAttribute(`tabindex`);return!!(n&&!isNaN(parseInt(n,10)))}function Er(i){if(!Mr(i))return null;let n=parseInt(i.getAttribute(`tabindex`)||``,10);return isNaN(n)?-1:n}function ql(i){let n=i.nodeName.toLowerCase(),t=n===`input`&&i.type;return t===`text`||t===`password`||n===`select`||n===`textarea`}function Jl(i){return Yl(i)?!1:Gl(i)||Xl(i)||i.hasAttribute(`contenteditable`)||Mr(i)}function Ql(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var Kn=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,e,o,a=!1,r){this._element=n,this._checker=t,this._ngZone=e,this._document=o,this._injector=r,a||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener(`focus`,this.startAnchorListener),n.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(n),!!e}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary(`start`);return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary(`end`);return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=0;e<t.length;e++){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(o)return o}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=t.length-1;e>=0;e--){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(o)return o}return null}_createAnchor(){let n=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add(`cdk-visually-hidden`),n.classList.add(`cdk-focus-trap-anchor`),n.setAttribute(`aria-hidden`,`true`),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){Jv(n,{injector:this._injector})}};var Jn=(()=>{class i{_checker=b(qn);_ngZone=b(ve$1);_document=b(Yo);_injector=b(oe$1);constructor(){b(it).load(Xn)}create(t,e=!1){return new Kn(t,this._checker,this._ngZone,this._document,e,this._injector)}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var tc=(()=>{class i{_elementRef=b(Lr$1);_focusTrapFactory=b(Jn);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(t){this.focusTrap&&(this.focusTrap.enabled=t)}autoCapture=!1;constructor(){b(T).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(t){let e=t.autoCapture;e&&!e.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Kt(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,yj],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,yj]},exportAs:[`cdkTrapFocus`],features:[yy]})}return i})();var kr=new A(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Ir=new A(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var ec=0;var nc=(()=>{class i{_ngZone=b(ve$1);_defaultOptions=b(Ir,{optional:!0});_liveElement;_document=b(Yo);_sanitizer=b(Zi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=b(kr,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let o=this._defaultOptions,a,r;return e.length===1&&typeof e[0]==`number`?r=e[0]:[a,r]=e,this.clear(),clearTimeout(this._previousTimeout),a||(a=o&&o.politeness?o.politeness:`polite`),r==null&&o&&(r=o.duration),this._liveElement.setAttribute(`aria-live`,a),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:vr(this._liveElement,t,this._sanitizer),typeof r==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,e=this._document.getElementsByClassName(t),o=this._document.createElement(`div`);for(let a=0;a<e.length;a++)e[a].remove();return o.classList.add(t),o.classList.add(`cdk-visually-hidden`),o.setAttribute(`aria-atomic`,`true`),o.setAttribute(`aria-live`,`polite`),o.id=`cdk-live-announcer-${ec++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<e.length;o++){let a=e[o],r=a.getAttribute(`aria-owns`);r?r.indexOf(t)===-1&&a.setAttribute(`aria-owns`,r+` `+t):a.setAttribute(`aria-owns`,t)}}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var zt=(function(i){return i[i.NONE=0]=`NONE`,i[i.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,i[i.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,i})(zt||{});var xr=`cdk-high-contrast-black-on-white`;var Ar=`cdk-high-contrast-white-on-black`;var eo=`cdk-high-contrast-active`;var Nr=(()=>{class i{_platform=b(T);_hasCheckedHighContrastMode=!1;_document=b(Yo);_breakpointSubscription;constructor(){this._breakpointSubscription=b(to).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return zt.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let e=this._document.defaultView||window,o=e&&e.getComputedStyle?e.getComputedStyle(t):null,a=(o&&o.backgroundColor||``).replace(/ /g,``);switch(t.remove(),a){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return zt.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return zt.BLACK_ON_WHITE}return zt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(eo,xr,Ar),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===zt.BLACK_ON_WHITE?t.add(eo,xr):e===zt.WHITE_ON_BLACK&&t.add(eo,Ar)}}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var Tr=(()=>{class i{constructor(){b(Nr)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(e){return new(e||i)};static ɵmod=JE({type:i});static ɵinj=wu({imports:[Cr]})}return i})();var ic=200;var Qn=class{_letterKeyStream=new K;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new K;selectedItem=this._selectedItem;constructor(n,t){let e=typeof t?.debounceInterval==`number`?t.debounceInterval:ic;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(n),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let t=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(pm(t=>this._pressedLetters.push(t)),Al$1(n),an$1(()=>this._pressedLetters.length>0),Ne(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let o=(this._selectedItemIndex+e)%this._items.length,a=this._items[o];if(!this._skipPredicateFn?.(a)&&a.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(a);break}}this._pressedLetters=[]})}};function Vt(i,...n){return n.length?n.some(t=>i[t]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var ve=class{_items;_activeItemIndex=Ko(-1);_activeItem=Ko(null);_wrap=!1;_typeaheadSubscription=V.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,t){this._items=n,n instanceof gi$1?this._itemChangesSubscription=n.changes.subscribe(e=>this._itemsChanged(e.toArray())):Ea$1(n)&&(this._effectRef=md(()=>this._itemsChanged(n()),{injector:t}))}tabOut=new K;change=new K;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Qn(t,{debounceInterval:typeof n==`number`?n:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,t=10){return this._pageUpAndDown={enabled:n,delta:t},this}setActiveItem(n){let t=this._activeItem();this.updateActiveItem(n),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(n){let t=n.keyCode,o=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(a=>!n[a]||this._allowedModifierKeys.indexOf(a)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let a=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(a>0?a:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let a=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(a<r?a:r-1,-1);break}else return;default:(o||Vt(n,`shiftKey`))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let t=this._getItemsArray(),e=typeof n==`number`?n:t.indexOf(n),o=t[e];this._activeItem.set(o??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let o=(this._activeItemIndex()+n*e+t.length)%t.length,a=t[o];if(!this._skipPredicateFn(a)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,t){let e=this._getItemsArray();if(e[n]){for(;this._skipPredicateFn(e[n]);)if(n+=t,!e[n])return;this.setActiveItem(n)}}_getItemsArray(){return Ea$1(this._items)?this._items():this._items instanceof gi$1?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let t=this._activeItem();if(t){let e=n.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var no=class extends ve{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var io=class extends ve{_origin=`program`;setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Or=/* @__PURE__ */ new Map;var ht=class i{_appId=b(hd);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){this._appId!==`ng`&&(n+=this._appId);let e=Or.get(n);return e===void 0?e=0:e++,Or.set(n,e),`${n}${t?i._infix+`-`:``}${e}`}static ɵfac=function(t){return new(t||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})};var Pr=` `;function oc(i,n,t){let e=ei(i,n);t=t.trim(),!e.some(o=>o.trim()===t)&&(e.push(t),i.setAttribute(n,e.join(Pr)))}function ac(i,n,t){let e=ei(i,n);t=t.trim();let o=e.filter(a=>a!==t);o.length?i.setAttribute(n,o.join(Pr)):i.removeAttribute(n)}function ei(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var Fr=`cdk-describedby-message`;var ti=`cdk-describedby-host`;var ao=0;var Gp=(()=>{class i{_platform=b(T);_document=b(Yo);_messageRegistry=/* @__PURE__ */ new Map;_messagesContainer=null;_id=`${ao++}`;constructor(){b(it).load(Xn),this._id=b(hd)+`-`+ao++}describe(t,e,o){if(!this._canBeDescribed(t,e))return;let a=oo(e,o);typeof e!=`string`?(Rr(e,this._id),this._messageRegistry.set(a,{messageElement:e,referenceCount:0})):this._messageRegistry.has(a)||this._createMessageElement(e,o),this._isElementDescribedByMessage(t,a)||this._addMessageReference(t,a)}removeDescription(t,e,o){if(!e||!this._isElementNode(t))return;let a=oo(e,o);if(this._isElementDescribedByMessage(t,a)&&this._removeMessageReference(t,a),typeof e==`string`){let r=this._messageRegistry.get(a);r&&r.referenceCount===0&&this._deleteMessageElement(a)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${ti}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(ti);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let o=this._document.createElement(`div`);Rr(o,this._id),o.textContent=t,e&&o.setAttribute(`role`,e),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(oo(t,e),{messageElement:o,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let a=0;a<e.length;a++)e[a].remove();let o=this._document.createElement(`div`);o.style.visibility=`hidden`,o.classList.add(t),o.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||o.setAttribute(`platform`,`server`),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(t){let e=ei(t,`aria-describedby`).filter(o=>o.indexOf(Fr)!=0);t.setAttribute(`aria-describedby`,e.join(` `))}_addMessageReference(t,e){let o=this._messageRegistry.get(e);oc(t,`aria-describedby`,o.messageElement.id),t.setAttribute(ti,this._id),o.referenceCount++}_removeMessageReference(t,e){let o=this._messageRegistry.get(e);o.referenceCount--,ac(t,`aria-describedby`,o.messageElement.id),t.removeAttribute(ti)}_isElementDescribedByMessage(t,e){let o=ei(t,`aria-describedby`),a=this._messageRegistry.get(e),r=a&&a.messageElement.id;return!!r&&o.indexOf(r)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e==`object`)return!0;let o=e==null?``:`${e}`.trim(),a=t.getAttribute(`aria-label`);return o?!a||a.trim()!==o:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();function oo(i,n){return typeof i==`string`?`${n||``}/${i}`:i}function Rr(i,n){i.id||(i.id=`${Fr}-${n}-${ao++}`)}function ro(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}function B(i){return i==null?``:typeof i==`string`?i:`${i}px`}var rc=new A(`cdk-dir-doc`,{providedIn:`root`,factory:()=>b(Yo)});var sc=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Lr(i){let n=i?.toLowerCase()||``;return n===`auto`&&typeof navigator<`u`&&navigator?.language?sc.test(navigator.language)?`rtl`:`ltr`:n===`rtl`?`rtl`:`ltr`}var Mt=(()=>{class i{get value(){return this.valueSignal()}valueSignal=Ko(`ltr`);change=new Ge$1;constructor(){let t=b(rc,{optional:!0});if(t){let e=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(Lr(e||o||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var st=(function(i){return i[i.NORMAL=0]=`NORMAL`,i[i.NEGATED=1]=`NEGATED`,i[i.INVERTED=2]=`INVERTED`,i})(st||{});var ni;var Jt;function ii(){if(Jt==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return Jt=!1,Jt;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)Jt=!0;else{let i=Element.prototype.scrollTo;i?Jt=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Jt=!1}}return Jt}function _e(){if(typeof document!=`object`||!document)return st.NORMAL;if(ni==null){let i=document.createElement(`div`),n=i.style;i.dir=`rtl`,n.width=`1px`,n.overflow=`auto`,n.visibility=`hidden`,n.pointerEvents=`none`,n.position=`absolute`;let t=document.createElement(`div`),e=t.style;e.width=`2px`,e.height=`1px`,i.appendChild(t),document.body.appendChild(i),ni=st.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,ni=i.scrollLeft===0?st.NEGATED:st.INVERTED),i.remove()}return ni}var oi=class{};function Br(i){return i&&typeof i.connect==`function`&&!(i instanceof ts$1)}var ai=class extends oi{_data;constructor(n){super(),this._data=n}connect(){return Bg(this._data)?this._data:Vg(this._data)}disconnect(){}};var Ke=(function(i){return i[i.REPLACED=0]=`REPLACED`,i[i.INSERTED=1]=`INSERTED`,i[i.MOVED=2]=`MOVED`,i[i.REMOVED=3]=`REMOVED`,i})(Ke||{});var ri=class{viewCacheSize=20;_viewCache=[];applyChanges(n,t,e,o,a){n.forEachOperation((r,s,c)=>{let d,u;if(r.previousIndex==null){let m=()=>e(r,s,c);d=this._insertView(m,c,t,o(r)),u=d?Ke.INSERTED:Ke.REPLACED}else c==null?(this._detachAndCacheView(s,t),u=Ke.REMOVED):(d=this._moveView(s,c,t,o(r)),u=Ke.MOVED);a&&a({context:d?.context,operation:u,record:r})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,t,e,o){let a=this._insertViewFromCache(t,e);if(a){a.context.$implicit=o;return}let r=n();return e.createEmbeddedView(r.templateRef,r.context,r.index)}_detachAndCacheView(n,t){let e=t.detach(n);this._maybeCacheView(e,t)}_moveView(n,t,e,o){let a=e.get(n);return e.move(a,t),a.context.$implicit=o,a}_maybeCacheView(n,t){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let e=t.indexOf(n);e===-1?n.destroy():t.remove(e)}}_insertViewFromCache(n,t){let e=this._viewCache.pop();return e&&t.insert(e,n),e||null}};var Qt=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=JE({type:i});static ɵinj=wu({})}return i})();var jr=new A(`VIRTUAL_SCROLL_STRATEGY`);var so=class{_scrolledIndexChange=new K;scrolledIndexChange=this._scrolledIndexChange.pipe(Rl$1());_viewport=null;_itemSize;_minBufferPx;_maxBufferPx;constructor(n,t,e){this._itemSize=n,this._minBufferPx=t,this._maxBufferPx=e}attach(n){this._viewport=n,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(n,t,e){this._itemSize=n,this._minBufferPx=t,this._maxBufferPx=e,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(n,t){this._viewport&&this._viewport.scrollToOffset(n*this._itemSize,t)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;let n=this._viewport.getRenderedRange(),t={start:n.start,end:n.end},e=this._viewport.getViewportSize(),o=this._viewport.getDataLength(),a=this._viewport.measureScrollOffset(),r=this._itemSize>0?a/this._itemSize:0;if(t.end>o){let c=Math.ceil(e/this._itemSize),d=Math.max(0,Math.min(r,o-c));r!=d&&(r=d,a=d*this._itemSize,t.start=Math.floor(r)),t.end=Math.max(0,Math.min(o,t.start+c))}let s=a-t.start*this._itemSize;if(s<this._minBufferPx&&t.start!=0){let c=Math.ceil((this._maxBufferPx-s)/this._itemSize);t.start=Math.max(0,t.start-c),t.end=Math.min(o,Math.ceil(r+(e+this._minBufferPx)/this._itemSize))}else{let c=t.end*this._itemSize-(a+e);if(c<this._minBufferPx&&t.end!=o){let d=Math.ceil((this._maxBufferPx-c)/this._itemSize);d>0&&(t.end=Math.min(o,t.end+d),t.start=Math.max(0,Math.floor(r-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(t),this._viewport.setRenderedContentOffset(Math.round(this._itemSize*t.start)),this._scrolledIndexChange.next(Math.floor(r))}};function lc(i){return i._scrollStrategy}var cc=(()=>{class i{get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=rt(t)}_itemSize=20;get minBufferPx(){return this._minBufferPx}set minBufferPx(t){this._minBufferPx=rt(t)}_minBufferPx=100;get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(t){this._maxBufferPx=rt(t)}_maxBufferPx=200;_scrollStrategy=new so(this.itemSize,this.minBufferPx,this.maxBufferPx);ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i,selectors:[[`cdk-virtual-scroll-viewport`,`itemSize`,``]],inputs:{itemSize:`itemSize`,minBufferPx:`minBufferPx`,maxBufferPx:`maxBufferPx`},features:[Jw([{provide:jr,useFactory:lc,deps:[So$1(()=>i)]}]),yy]})}return i})();var dc=20;var qe=(()=>{class i{_ngZone=b(ve$1);_platform=b(T);_renderer=b(xr$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new K;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=dc){return this._platform.isBrowser?new _(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(tm(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Vg()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let o=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(an$1(a=>!a||o.indexOf(a)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((o,a)=>{this._targetContainsElement(a,t)&&e.push(a)}),e}_targetContainsElement(t,e){let o=nt(e),a=t.getElementRef().nativeElement;do if(o==a)return!0;while(o=o.parentElement);return!1}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var Je=(()=>{class i{elementRef=b(Lr$1);scrollDispatcher=b(qe);ngZone=b(ve$1);dir=b(Mt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new K;_renderer=b(ec$1);_cleanupScroll;_elementScrolled=new K;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,o=this.dir&&this.dir.value==`rtl`;t.left??=o?t.end:t.start,t.right??=o?t.start:t.end,t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),o&&_e()!=st.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),_e()==st.INVERTED?t.left=t.right:_e()==st.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;ii()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e=`left`,o=`right`,a=this.elementRef.nativeElement;if(t==`top`)return a.scrollTop;if(t==`bottom`)return a.scrollHeight-a.clientHeight-a.scrollTop;let r=this.dir&&this.dir.value==`rtl`;return t==`start`?t=r?o:e:t==`end`&&(t=r?e:o),r&&_e()==st.INVERTED?t==e?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:r&&_e()==st.NEGATED?t==e?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:t==e?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return i})();var uc=20;var te=(()=>{class i{_platform=b(T);_listeners;_viewportSize=null;_change=new K;_document=b(Yo);constructor(){let t=b(ve$1),e=b(xr$1).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=a=>this._change.next(a);this._listeners=[e.listen(`window`,`resize`,o),e.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+e,height:o,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),o=t.documentElement,a=o.getBoundingClientRect();return{top:-a.top||t.body?.scrollTop||e.scrollY||o.scrollTop||0,left:-a.left||t.body?.scrollLeft||e.scrollX||o.scrollLeft||0}}change(t=uc){return t>0?this._change.pipe(tm(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var zr=new A(`VIRTUAL_SCROLLABLE`);var mc=(()=>{class i extends Je{measureViewportSize(t){let e=this.elementRef.nativeElement;return t===`horizontal`?e.clientWidth:e.clientHeight}static ɵfac=(()=>{let t;return function(o){return(t||(t=Py(i)))(o||i)}})();static ɵdir=tD({type:i,features:[ch]})}return i})();function hc(i,n){return i.start==n.start&&i.end==n.end}var pc=typeof requestAnimationFrame<`u`?Ag:xg;var Ur=new A(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var fc=(()=>{class i extends mc{elementRef=b(Lr$1);_changeDetectorRef=b(gj);_scrollStrategy=b(jr,{optional:!0});scrollable=b(zr,{optional:!0});_platform=b(T);_detachedSubject=new K;_renderedRangeSubject=new K;_renderedContentOffsetSubject=new K;get orientation(){return this._orientation}set orientation(t){this._orientation!==t&&(this._orientation=t,this._calculateSpacerSize())}_orientation=`vertical`;appendOnly=!1;scrolledIndexChange=new _(t=>this._scrollStrategy.scrolledIndexChange.subscribe(e=>Promise.resolve().then(()=>this.ngZone.run(()=>t.next(e)))));_contentWrapper;renderedRangeStream=this._renderedRangeSubject;renderedContentOffset=this._renderedContentOffsetSubject.pipe(an$1(t=>t!==null),Rl$1());_totalContentSize=0;_totalContentWidth=Ko(``);_totalContentHeight=Ko(``);_renderedContentTransform;_renderedRange={start:0,end:0};_dataLength=0;_viewportSize=0;_forOf=null;_renderedContentOffset=0;_renderedContentOffsetNeedsRewrite=!1;_changeDetectionNeeded=Ko(!1);_runAfterChangeDetection=[];_viewportChanges=V.EMPTY;_injector=b(oe$1);_isDestroyed=!1;constructor(){super();let t=b(te);this._scrollStrategy,this._viewportChanges=t.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add(`cdk-virtual-scrollable`),this.scrollable=this);let e=md(()=>{this._changeDetectionNeeded()&&this._doChangeDetection()},{injector:b(Hr$1).injector});b(pe$1).onDestroy(()=>{e.destroy()})}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe(ou(null),tm(0,pc),dm(this._destroyed)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),this._isDestroyed=!0,super.ngOnDestroy()}attach(t){this._forOf,this.ngZone.runOutsideAngular(()=>{this._forOf=t,this._forOf.dataStream.pipe(dm(this._detachedSubject)).subscribe(e=>{let o=e.length;o!==this._dataLength&&(this._dataLength=o,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(t){return this.getElementRef().nativeElement.getBoundingClientRect()[t]}setTotalContentSize(t){this._totalContentSize!==t&&(this._totalContentSize=t,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(t){hc(this._renderedRange,t)||(this.appendOnly&&(t={start:0,end:Math.max(this._renderedRange.end,t.end)}),this._renderedRangeSubject.next(this._renderedRange=t),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(t,e=`to-start`){t=this.appendOnly&&e===`to-start`?0:t;let o=this.dir&&this.dir.value==`rtl`,a=this.orientation==`horizontal`,r=a?`X`:`Y`,c=`translate${r}(${Number((a&&o?-1:1)*t)}px)`;this._renderedContentOffset=t,e===`to-end`&&(c+=` translate${r}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=c&&(this._renderedContentTransform=c,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(t,e=`auto`){let o={behavior:e};this.orientation===`horizontal`?o.start=t:o.top=t,this.scrollable.scrollTo(o)}scrollToIndex(t,e=`auto`){this._scrollStrategy.scrollToIndex(t,e)}measureScrollOffset(t){let e;return this.scrollable==this?e=o=>super.measureScrollOffset(o):e=o=>this.scrollable.measureScrollOffset(o),Math.max(0,e(t??(this.orientation===`horizontal`?`start`:`top`))-this.measureViewportOffset())}measureViewportOffset(t){let e,o=`left`,a=`right`,r=this.dir?.value==`rtl`;t==`start`?e=r?a:o:t==`end`?e=r?o:a:t?e=t:e=this.orientation===`horizontal`?`left`:`top`;let s=this.scrollable.measureBoundingClientRectWithScrollOffset(e);return this.elementRef.nativeElement.getBoundingClientRect()[e]-s}measureRenderedContentSize(){let t=this._contentWrapper.nativeElement;return this.orientation===`horizontal`?t.offsetWidth:t.offsetHeight}measureRangeSize(t){return this._forOf?this._forOf.measureRangeSize(t,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(t){t&&this._runAfterChangeDetection.push(t),!tg(this._changeDetectionNeeded)&&this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this.ngZone.run(()=>{this._changeDetectionNeeded.set(!0)})})})}_doChangeDetection(){this._isDestroyed||this.ngZone.run(()=>{this._changeDetectorRef.markForCheck(),this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart()),Jv(()=>{this._changeDetectionNeeded.set(!1);let t=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(let e of t)e()},{injector:this._injector})})}_calculateSpacerSize(){this._totalContentHeight.set(this.orientation===`horizontal`?``:`${this._totalContentSize}px`),this._totalContentWidth.set(this.orientation===`horizontal`?`${this._totalContentSize}px`:``)}static ɵfac=function(e){return new(e||i)};static ɵcmp=(function(){let t=[`contentWrapper`];return YE({type:i,selectors:[[`cdk-virtual-scroll-viewport`]],viewQuery:function(a,r){if(a&1&&Oh(t,7),a&2){let s;Ew(s=Dw())&&(r._contentWrapper=s.first)}},hostAttrs:[1,`cdk-virtual-scroll-viewport`],hostVars:4,hostBindings:function(a,r){a&2&&Vh(`cdk-virtual-scroll-orientation-horizontal`,r.orientation===`horizontal`)(`cdk-virtual-scroll-orientation-vertical`,r.orientation!==`horizontal`)},inputs:{orientation:`orientation`,appendOnly:[2,`appendOnly`,`appendOnly`,yj]},outputs:{scrolledIndexChange:`scrolledIndexChange`},features:[Jw([{provide:Je,useFactory:()=>b(zr,{optional:!0})||b(i)},{provide:Ur,useExisting:i}]),ch],ngContentSelectors:[`*`],decls:4,vars:4,consts:[[`contentWrapper`,``],[1,`cdk-virtual-scroll-content-wrapper`],[1,`cdk-virtual-scroll-spacer`]],template:function(a,r){a&1&&(yw(),sl$1(0,`div`,1,0),vw(2),al$1(),Th(3,`div`,2)),a&2&&(vI(3),jh(`width`,r._totalContentWidth())(`height`,r._totalContentHeight()))},styles:[`cdk-virtual-scroll-viewport {
  display: block;
  position: relative;
  transform: translateZ(0);
}

.cdk-virtual-scrollable {
  overflow: auto;
  will-change: scroll-position;
  contain: strict;
  overflow-anchor: none;
  scroll-behavior: auto;
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
`],encapsulation:2})})()}return i})();function Vr(i,n,t){let e=t;if(!e.getBoundingClientRect)return 0;let o=e.getBoundingClientRect();return i===`horizontal`?n===`start`?o.left:o.right:n===`start`?o.top:o.bottom}var bc=(()=>{class i{_viewContainerRef=b(ji$1);_template=b(Sr$1);_differs=b(wb);_viewRepeater=new ri;_viewport=b(Ur,{skipSelf:!0});viewChange=new K;_dataSourceChanges=new K;get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(t){this._cdkVirtualForOf=t,Br(t)?this._dataSourceChanges.next(t):this._dataSourceChanges.next(new ai(Bg(t)?t:Array.from(t||[])))}_cdkVirtualForOf;get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(t){this._needsUpdate=!0,this._cdkVirtualForTrackBy=t?(e,o)=>t(e+(this._renderedRange?this._renderedRange.start:0),o):void 0}_cdkVirtualForTrackBy;set cdkVirtualForTemplate(t){t&&(this._needsUpdate=!0,this._template=t)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(t){this._viewRepeater.viewCacheSize=rt(t)}dataStream=this._dataSourceChanges.pipe(ou(null),cm(),um(([t,e])=>this._changeDataSource(t,e)),ru(1));_differ=null;_data=[];_renderedItems=[];_renderedRange={start:0,end:0};_needsUpdate=!1;_destroyed=new K;constructor(){let t=b(ve$1);this.dataStream.subscribe(e=>{this._data=e,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe(dm(this._destroyed)).subscribe(e=>{this._renderedRange=e,this.viewChange.observers.length&&t.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(t,e){if(t.start>=t.end)return 0;t.start<this._renderedRange.start||(t.end,this._renderedRange.end);let o=t.start-this._renderedRange.start,a=t.end-t.start,r,s;for(let c=0;c<a;c++){let d=this._viewContainerRef.get(c+o);if(d&&d.rootNodes.length){r=s=d.rootNodes[0];break}}for(let c=a-1;c>-1;c--){let d=this._viewContainerRef.get(c+o);if(d&&d.rootNodes.length){s=d.rootNodes[d.rootNodes.length-1];break}}return r&&s?Vr(e,`end`,s)-Vr(e,`start`,r):0}ngDoCheck(){if(this._differ&&this._needsUpdate){let t=this._differ.diff(this._renderedItems);t?this._applyChanges(t):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((t,e)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(t,e):e)),this._needsUpdate=!0)}_changeDataSource(t,e){return t&&t.disconnect(this),this._needsUpdate=!0,e?e.connect(this):Vg()}_updateContext(){let t=this._data.length,e=this._viewContainerRef.length;for(;e--;){let o=this._viewContainerRef.get(e);o.context.index=this._renderedRange.start+e,o.context.count=t,this._updateComputedContextProperties(o.context),o.detectChanges()}}_applyChanges(t){this._viewRepeater.applyChanges(t,this._viewContainerRef,(a,r,s)=>this._getEmbeddedViewArgs(a,s),a=>a.item),t.forEachIdentityChange(a=>{let r=this._viewContainerRef.get(a.currentIndex);r.context.$implicit=a.item});let e=this._data.length,o=this._viewContainerRef.length;for(;o--;){let a=this._viewContainerRef.get(o);a.context.index=this._renderedRange.start+o,a.context.count=e,this._updateComputedContextProperties(a.context)}}_updateComputedContextProperties(t){t.first=t.index===0,t.last=t.index===t.count-1,t.even=t.index%2===0,t.odd=!t.even}_getEmbeddedViewArgs(t,e){return{templateRef:this._template,context:{$implicit:t.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:e}}static ngTemplateContextGuard(t,e){return!0}static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i,selectors:[[``,`cdkVirtualFor`,``,`cdkVirtualForOf`,``]],inputs:{cdkVirtualForOf:`cdkVirtualForOf`,cdkVirtualForTrackBy:`cdkVirtualForTrackBy`,cdkVirtualForTemplate:`cdkVirtualForTemplate`,cdkVirtualForTemplateCacheSize:`cdkVirtualForTemplateCacheSize`}})}return i})();var lo=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=JE({type:i});static ɵinj=wu({})}return i})();var co=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=JE({type:i});static ɵinj=wu({imports:[Qt,lo,Qt,lo]})}return i})();var Qe=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}};var De=class extends Qe{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,t,e,o,a,r){super(),this.component=n,this.viewContainerRef=t,this.injector=e,this.projectableNodes=o,this.bindings=a||null,this.directives=r||null}};var ee=class extends Qe{templateRef;viewContainerRef;context;injector;constructor(n,t,e,o){super(),this.templateRef=n,this.viewContainerRef=t,this.context=e,this.injector=o}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}};var uo=class extends Qe{element;constructor(n){super(),this.element=n instanceof Lr$1?n.nativeElement:n}};var we=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof De)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ee)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof uo)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var si=class extends we{outletElement;_appRef;_defaultInjector;constructor(n,t,e){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=e}attachComponentPortal(n){let t;if(n.viewContainerRef){let e=n.injector||n.viewContainerRef.injector,o=e.get(Pn$1,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:e,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,o=n.injector||this._defaultInjector||oe$1.NULL,a=o.get(fe$1,e.injector);t=Ej(n.component,{elementInjector:o,environmentInjector:a,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,e=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return e.rootNodes.forEach(o=>this.outletElement.appendChild(o)),e.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(e);o!==-1&&t.remove(o)}),this._attachedPortal=n,e}attachDomPortal=n=>{let t=n.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var tn=(()=>{class i extends we{_moduleRef=b(Pn$1,{optional:!0});_document=b(Yo);_viewContainerRef=b(ji$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new Ge$1;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return e!==this._viewContainerRef&&this._insertContent(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let o=this._document.createComment(`dom-portal`);t.setAttachedHost(this),e.parentNode.insertBefore(o,e),this._insertContent(e),this._attachedPortal=t,super.setDisposeFn(()=>o.parentNode?.replaceChild(e,o))};_insertContent(t){let e=this._viewContainerRef.element.nativeElement;e.nodeType===e.ELEMENT_NODE?e.appendChild(t):e.parentNode?.insertBefore(t,e)}static ɵfac=(()=>{let t;return function(o){return(t||(t=Py(i)))(o||i)}})();static ɵdir=tD({type:i,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[ch]})}return i})();var li=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=JE({type:i});static ɵinj=wu({})}return i})();var Hr=ii();function Ce(i){return new ci(i.get(te),i.get(Yo))}var ci=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||``,this._previousHTMLStyles.top=n.style.top||``,n.style.left=B(-this._previousScrollPosition.left),n.style.top=B(-this._previousScrollPosition.top),n.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,e=n.style,o=t.style,a=e.scrollBehavior||``,r=o.scrollBehavior||``;this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,n.classList.remove(`cdk-global-scrollblock`),Hr&&(e.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Hr&&(e.scrollBehavior=a,o.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function Kr(i,n){return new di(i.get(qe),i.get(ve$1),i.get(te),n)}var di=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,e,o){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=e,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(an$1(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var en=class{enable(){}disable(){}attach(){}};function ho(i,n){return n.some(t=>{let e=i.bottom<t.top,o=i.top>t.bottom,a=i.right<t.left,r=i.left>t.right;return e||o||a||r})}function $r(i,n){return n.some(t=>{let e=i.top<t.top,o=i.bottom>t.bottom,a=i.left<t.left,r=i.right>t.right;return e||o||a||r})}function go(i,n){return new ui(i.get(qe),i.get(te),i.get(ve$1),n)}var ui=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,e,o){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=e,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:o}=this._viewportRuler.getViewportSize();ho(t,[{width:e,height:o,bottom:o,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var qr=(()=>{class i{_injector=b(oe$1);noop=()=>new en;close=t=>Kr(this._injector,t);block=()=>Ce(this._injector);reposition=t=>go(this._injector,t);static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var ie=class{positionStrategy;scrollStrategy=new en;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let e of t)n[e]!==void 0&&(this[e]=n[e])}}};var mi=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var Jr=(()=>{class i{_attachedOverlays=[];_document=b(Yo);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var Qr=(()=>{class i extends Jr{_ngZone=b(ve$1);_renderer=b(xr$1).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let o=e.length-1;o>-1;o--){let a=e[o];if(this.canReceiveEvent(a,t,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(t));break}}};static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var ts=(()=>{class i extends Jr{_platform=b(T);_ngZone=b(ve$1);_renderer=b(xr$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,o={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(e,`pointerdown`,this._pointerDownListener,o),a.listen(e,`click`,this._clickListener,o),a.listen(e,`auxclick`,this._clickListener,o),a.listen(e,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=G(t)};_clickListener=t=>{let e=G(t),o=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let s=a[r],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,c))){if(Wr(s.overlayElement,e)||Wr(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();function Wr(i,n){let t=typeof ShadowRoot<`u`&&ShadowRoot,e=n;for(;e;){if(e===i)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var es=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=YE({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return i})();var fi=(()=>{class i{_platform=b(T);_containerElement;_document=b(Yo);_styleLoader=b(it);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||ro()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let a=0;a<o.length;a++)o[a].remove()}let e=this._document.createElement(`div`);e.classList.add(t),ro()?e.setAttribute(`platform`,`test`):this._platform.isBrowser||e.setAttribute(`platform`,`server`),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(es)}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var po=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,e,o){this._renderer=t,this._ngZone=e,this.element=n.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents=`none`,n.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function yo(i){return i&&i.nodeType===1}var mo=Ko([]);var Se=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new K;_attachments=new K;_detachments=new K;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new K;_outsidePointerEvents=new K;_afterNextRenderRef;constructor(n,t,e,o,a,r,s,c,d,u=!1,m,y){this._portalOutlet=n,this._host=t,this._pane=e,this._config=o,this._ngZone=a,this._keyboardDispatcher=r,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=m,this._renderer=y,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),tg(()=>{mo.update(e=>e.includes(this)?e:[...e,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Jv(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let e=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>e.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),tg(()=>{mo.update(t=>t.filter(e=>e!==this))}),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,tg(()=>{mo.update(t=>t.filter(e=>e!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=W$1(W$1({},this._config),n),this._updateElementSize()}setDirection(n){this._config=q(W$1({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n==`string`?n:n.value:`ltr`}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=B(this._config.width),n.height=B(this._config.height),n.minWidth=B(this._config.minWidth),n.minHeight=B(this._config.minHeight),n.maxWidth=B(this._config.maxWidth),n.maxHeight=B(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?``:`none`}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;yo(n)?n.after(this._host):n?.type===`parent`?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new po(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,e){let o=ye(t||[]).filter(a=>!!a);o.length&&(e?n.classList.add(...o):n.classList.remove(...o))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Jv(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}};var Gr=`cdk-overlay-connected-position-bounding-box`;var yc=/([A-Za-z%]+)$/;function vo(i,n){return new hi(n,i.get(te),i.get(Yo),i.get(T),i.get(fi))}var hi=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new K;_resizeSubscription=V.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,e,o,a){this._viewportRuler=t,this._document=e,this._platform=o,this._overlayContainer=a,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Gr),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,e=this._viewportRect,o=this._containerRect,a=[],r;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,o,s),d=this._getOverlayPoint(c,t,s),u=this._getOverlayFit(d,t,e,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(u,d,e)){a.push({position:s,origin:c,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!r||r.overlayFit.visibleArea<u.visibleArea)&&(r={overlayFit:u,overlayPoint:d,originPoint:c,position:s,overlayRect:t})}if(a.length){let s=null,c=-1;for(let d of a){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>c&&(c=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ne(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Gr),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Lr$1?this._origin.nativeElement:yo(this._origin)?this._origin:null}_getOriginPoint(n,t,e){let o;if(e.originX==`center`)o=n.left+n.width/2;else{let r=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;o=e.originX==`start`?r:s}t.left<0&&(o-=t.left);let a;return e.originY==`center`?a=n.top+n.height/2:a=e.originY==`top`?n.top:n.bottom,t.top<0&&(a-=t.top),{x:o,y:a}}_getOverlayPoint(n,t,e){let o;e.overlayX==`center`?o=-t.width/2:e.overlayX===`start`?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let a;return e.overlayY==`center`?a=-t.height/2:a=e.overlayY==`top`?0:-t.height,{x:n.x+o,y:n.y+a}}_getOverlayFit(n,t,e,o){let a=Xr(t),{x:r,y:s}=n,c=this._getOffset(o,`x`),d=this._getOffset(o,`y`);c&&(r+=c),d&&(s+=d);let u=0-r,m=r+a.width-e.width,y=0-s,D=s+a.height-e.height,k=this._subtractOverflows(a.width,u,m),I=this._subtractOverflows(a.height,y,D),R=k*I;return{visibleArea:R,isCompletelyWithinViewport:a.width*a.height===R,fitsInViewportVertically:I===a.height,fitsInViewportHorizontally:k==a.width}}_canFitWithFlexibleDimensions(n,t,e){if(this._hasFlexibleDimensions){let o=e.bottom-t.y,a=e.right-t.x,r=Yr(this._overlayRef.getConfig().minHeight),s=Yr(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||r!=null&&r<=o,d=n.fitsInViewportHorizontally||s!=null&&s<=a;return c&&d}return!1}_pushOverlayOnScreen(n,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=Xr(t),a=this._viewportRect,r=Math.max(n.x+o.width-a.width,0),s=Math.max(n.y+o.height-a.height,0),c=Math.max(a.top-e.top-n.y,0),d=Math.max(a.left-e.left-n.x,0),u=0,m=0;return o.width<=a.width?u=d||-r:u=n.x<this._getViewportMarginStart()?a.left-e.left-n.x:0,o.height<=a.height?m=c||-s:m=n.y<this._getViewportMarginTop()?a.top-e.top-n.y:0,this._previousPushAmount={x:u,y:m},{x:n.x+u,y:n.y+m}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!vc(this._lastScrollVisibility,e)){let o=new mi(n,e);this._positionChanges.next(o)}this._lastScrollVisibility=e}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,o=n.overlayY;n.overlayX===`center`?e=`center`:this._isRtl()?e=n.overlayX===`start`?`right`:`left`:e=n.overlayX===`start`?`left`:`right`;for(let a=0;a<t.length;a++)t[a].style.transformOrigin=`${e} ${o}`}_calculateBoundingBoxRect(n,t){let e=this._viewportRect,o=this._isRtl(),a,r,s;if(t.overlayY===`top`)r=n.y,a=e.height-r+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)s=e.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=e.height-s+this._getViewportMarginTop();else{let D=Math.min(e.bottom-n.y+e.top,n.y),k=this._lastBoundingBoxSize.height;a=D*2,r=n.y-D,a>k&&!this._isInitialRender&&!this._growAfterOpen&&(r=n.y-k/2)}let c=t.overlayX===`start`&&!o||t.overlayX===`end`&&o,d=t.overlayX===`end`&&!o||t.overlayX===`start`&&o,u,m,y;if(d)y=e.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(c)m=n.x,u=e.right-n.x-this._getViewportMarginEnd();else{let D=Math.min(e.right-n.x+e.left,n.x),k=this._lastBoundingBoxSize.width;u=D*2,m=n.x-D,u>k&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-k/2)}return{top:r,left:m,bottom:s,right:y,width:u,height:a}}_setBoundingBoxStyles(n,t){let e=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let a=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;o.width=B(e.width),o.height=B(e.height),o.top=B(e.top)||`auto`,o.bottom=B(e.bottom)||`auto`,o.left=B(e.left)||`auto`,o.right=B(e.right)||`auto`,t.overlayX===`center`?o.alignItems=`center`:o.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,a&&(o.maxHeight=B(a)),r&&(o.maxWidth=B(r))}this._lastBoundingBoxSize=e,ne(this._boundingBox.style,o)}_resetBoundingBoxStyles(){ne(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){ne(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(n,t){let e={},o=this._hasExactPosition(),a=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(o){let u=this._viewportRuler.getViewportScrollPosition();ne(e,this._getExactOverlayY(t,n,u)),ne(e,this._getExactOverlayX(t,n,u))}else e.position=`static`;let s=``,c=this._getOffset(t,`x`),d=this._getOffset(t,`y`);c&&(s+=`translateX(${c}px) `),d&&(s+=`translateY(${d}px)`),e.transform=s.trim(),r.maxHeight&&(o?e.maxHeight=B(r.maxHeight):a&&(e.maxHeight=``)),r.maxWidth&&(o?e.maxWidth=B(r.maxWidth):a&&(e.maxWidth=``)),ne(this._pane.style,e)}_getExactOverlayY(n,t,e){let o={top:``,bottom:``},a=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,e)),n.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(a.y+this._overlayRect.height)}px`;else o.top=B(a.y);return o}_getExactOverlayX(n,t,e){let o={left:``,right:``},a=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,e));let r;if(this._isRtl()?r=n.overlayX===`end`?`left`:`right`:r=n.overlayX===`end`?`right`:`left`,r===`right`)o.right=`${this._document.documentElement.clientWidth-(a.x+this._overlayRect.width)}px`;else o.left=B(a.x);return o}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:$r(n,e),isOriginOutsideView:ho(n,e),isOverlayClipped:$r(t,e),isOverlayOutsideView:ho(t,e)}}_subtractOverflows(n,...t){return t.reduce((e,o)=>e-Math.max(o,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+n-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t===`x`?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ye(n).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof Lr$1)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,e=n.height||0;return{top:n.y,bottom:n.y+e,left:n.x,right:n.x+t,height:e,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();n&&(t.style.display=`block`);let e=t.getBoundingClientRect();return n&&(t.style.display=``),e}};function ne(i,n){for(let t in n)Object.hasOwn(n,t)&&(i[t]=n[t]);return i}function Yr(i){if(typeof i!=`number`&&i!=null){let[n,t]=i.split(yc);return!t||t===`px`?parseFloat(n):null}return i||null}function Xr(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function vc(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Zr=`cdk-global-overlay-wrapper`;function Ee(i){return new pi}var pi=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Zr),this._isDisposed=!1}top(n=``){return this._bottomOffset=``,this._topOffset=n,this._alignItems=`flex-start`,this}left(n=``){return this._xOffset=n,this._xPosition=`left`,this}bottom(n=``){return this._topOffset=``,this._bottomOffset=n,this._alignItems=`flex-end`,this}right(n=``){return this._xOffset=n,this._xPosition=`right`,this}start(n=``){return this._xOffset=n,this._xPosition=`start`,this}end(n=``){return this._xOffset=n,this._xPosition=`end`,this}width(n=``){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=``){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=``){return this.left(n),this._xPosition=`center`,this}centerVertically(n=``){return this.top(n),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:o,height:a,maxWidth:r,maxHeight:s}=this._overlayRef.getConfig(),c=(o===`100%`||o===`100vw`)&&(!r||r===`100%`||r===`100vw`),d=(a===`100%`||a===`100vh`)&&(!s||s===`100%`||s===`100vh`),u=this._xPosition,m=this._xOffset,y=this._overlayRef.getConfig().direction===`rtl`,D=``,k=``,I=``;c?I=`flex-start`:u===`center`?(I=`center`,y?k=m:D=m):y?u===`left`||u===`end`?(I=`flex-end`,D=m):(u===`right`||u===`start`)&&(I=`flex-start`,k=m):u===`left`||u===`start`?(I=`flex-start`,D=m):(u===`right`||u===`end`)&&(I=`flex-end`,k=m),n.position=this._cssPosition,n.marginLeft=c?`0`:D,n.marginTop=d?`0`:this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?`0`:k,t.justifyContent=I,t.alignItems=d?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(Zr),e.justifyContent=e.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position=``,this._overlayRef=null,this._isDisposed=!0}};var ns=(()=>{class i{_injector=b(oe$1);global(){return Ee()}flexibleConnectedTo(t){return vo(this._injector,t)}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var _o=new A(`OVERLAY_DEFAULT_CONFIG`);function nn(i,n){i.get(it).load(es);let t=i.get(fi),e=i.get(Yo),o=i.get(ht),a=i.get(Hr$1),r=i.get(Mt),s=i.get(ec$1,null,{optional:!0})||i.get(xr$1).createRenderer(null,null),c=new ie(n),d=i.get(_o,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,!e.body||!(`showPopover`in e.body)?c.usePopover=!1:c.usePopover=n?.usePopover??d;let u=e.createElement(`div`),m=e.createElement(`div`);u.id=o.getId(`cdk-overlay-`),u.classList.add(`cdk-overlay-pane`),m.appendChild(u),c.usePopover&&(m.setAttribute(`popover`,`manual`),m.classList.add(`cdk-overlay-popover`));let y=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return yo(y)?y.after(m):y?.type===`parent`?y.element.appendChild(m):t.getContainerElement().appendChild(m),new Se(new si(u,a,i),m,u,c,i.get(ve$1),i.get(Qr),e,i.get(On),i.get(ts),n?.disableAnimations??i.get(Xm,null,{optional:!0})===`NoopAnimations`,i.get(fe$1),s)}var is=(()=>{class i{scrollStrategies=b(qr);_positionBuilder=b(ns);_injector=b(oe$1);create(t){return nn(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var _c=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var Dc=new A(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=b(oe$1);return()=>go(i)}});var fo=(()=>{class i{elementRef=b(Lr$1);static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return i})();var os=new A(`cdk-connected-overlay-default-config`);var wc=(()=>{class i{_dir=b(Mt,{optional:!0});_injector=b(oe$1);_overlayRef;_templatePortal;_backdropSubscription=V.EMPTY;_attachSubscription=V.EMPTY;_detachSubscription=V.EMPTY;_positionSubscription=V.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=b(Dc);_ngZone=b(ve$1);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!=`string`&&this._assignConfig(t)}backdropClick=new Ge$1;positionChange=new Ge$1;attach=new Ge$1;detach=new Ge$1;overlayKeydown=new Ge$1;overlayOutsideClick=new Ge$1;constructor(){let t=b(Sr$1),e=b(ji$1),o=b(os,{optional:!0}),a=b(_o,{optional:!0});this.usePopover=a?.usePopover===!1?null:`global`,this._templatePortal=new ee(t,e),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=_c);let t=this._overlayRef=nn(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(e=>{this.overlayKeydown.next(e),e.keyCode===27&&!this.disableClose&&!Vt(e)&&(e.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(e=>{let o=this._getOriginElement(),a=G(e);(!o||o!==a&&!o.contains(a))&&this.overlayOutsideClick.next(e)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),e=new ie({direction:this._dir||`ltr`,positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(e.height=this.height),(this.minWidth||this.minWidth===0)&&(e.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(e.minHeight=this.minHeight),this.backdropClass&&(e.backdropClass=this.backdropClass),this.panelClass&&(e.panelClass=this.panelClass),e}_updatePositionStrategy(t){let e=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let t=vo(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof fo?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof fo?this.origin.elementRef.nativeElement:this.origin instanceof Lr$1?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(e=>this.backdropClick.emit(e)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(fm(()=>this.positionChange.observers.length>0)).subscribe(e=>{this._ngZone.run(()=>this.positionChange.emit(e)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,yj],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,yj],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,yj],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,yj],push:[2,`cdkConnectedOverlayPush`,`push`,yj],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,t=>t===`url-change`||t===`pop-state`?t:yj(t)],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,yj],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[yy]})}return i})();var Do=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=JE({type:i});static ɵinj=wu({providers:[is],imports:[Qt,li,co,co]})}return i})();var jt=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var So=(()=>{class i extends we{_elementRef=b(Lr$1);_focusTrapFactory=b(Jn);_config;_interactivityChecker=b(qn);_ngZone=b(ve$1);_focusMonitor=b(Ze);_renderer=b(ec$1);_changeDetectorRef=b(gj);_injector=b(oe$1);_platform=b(T);_document=b(Yo);_portalOutlet;_focusTrapped=new K;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=b(jt,{optional:!0})||new jt,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{a(),r(),t.removeAttribute(`tabindex`)},a=this._renderer.listen(t,`blur`,o),r=this._renderer.listen(t,`mousedown`,o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_trapFocus(t){this._isDestroyed||Jv(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||e.focus(t);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,t);break;default:this._focusByCssSelector(this._config.autoFocus,t)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t==`string`?e=this._document.querySelector(t):typeof t==`boolean`?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus==`function`){let o=Kt(),a=this._elementRef.nativeElement;(!o||o===this._document.body||o===a||a.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=Kt();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Kt()))}static ɵfac=function(e){return new(e||i)};static ɵcmp=(function(){function t(e,o){}return YE({type:i,selectors:[[`cdk-dialog-container`]],viewQuery:function(o,a){if(o&1&&Oh(tn,7),o&2){let r;Ew(r=Dw())&&(a._portalOutlet=r.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(o,a){o&2&&wh(`id`,a._config.id||null)(`role`,a._config.role)(`aria-modal`,a._config.ariaModal)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null)},features:[ch],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(o,a){o&1&&uh(0,t,0,0,`ng-template`,0)},dependencies:[tn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return i})();var oe=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new K;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,t){this.overlayRef=n,this.config=t,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Vt(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(n,t){if(this._canClose(n)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(n),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n=``,t=``){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(n,t,this.componentInstance))}};var Sc=new A(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let i=b(oe$1);return()=>Ce(i)}});var Cc=new A(`DialogData`);var Ec=new A(`DefaultDialogConfig`);function xc(i){let n=Ko(i),t=new Ge$1;return{valueSignal:n,get value(){return n()},change:t,ngOnDestroy(){t.complete()}}}var as=(()=>{class i{_injector=b(oe$1);_defaultOptions=b(Ec,{optional:!0});_parentDialog=b(i,{optional:!0,skipSelf:!0});_overlayContainer=b(fi);_idGenerator=b(ht);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new K;_afterOpenedAtThisLevel=new K;_ariaHiddenElements=/* @__PURE__ */ new Map;_scrollStrategy=b(Sc);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Kg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ou(void 0)));open(t,e){let o=this._defaultOptions||new jt;e=W$1(W$1({},o),e),e.id=e.id||this._idGenerator.getId(`cdk-dialog-`),e.id&&this.getDialogById(e.id);let a=this._getOverlayConfig(e),r=nn(this._injector,a),s=new oe(r,e),c=this._attachContainer(r,s,e);if(s.containerInstance=c,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(cn(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(t,s,c,e),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){wo(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){wo(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),wo(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new ie({positionStrategy:t.positionStrategy||Ee().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,o){let a=o.injector||o.viewContainerRef?.injector,r=[{provide:jt,useValue:o},{provide:oe,useValue:e},{provide:Se,useValue:t}],s;o.container?typeof o.container==`function`?s=o.container:(s=o.container.type,r.push(...o.container.providers(o))):s=So;let c=new De(s,o.viewContainerRef,oe$1.create({parent:a||this._injector,providers:r}));return t.attach(c).instance}_attachDialogContent(t,e,o,a){if(t instanceof Sr$1){let r=this._createInjector(a,e,o,void 0),s={$implicit:a.data,dialogRef:e};a.templateContext&&(s=W$1(W$1({},s),typeof a.templateContext==`function`?a.templateContext():a.templateContext)),o.attachTemplatePortal(new ee(t,null,s,r))}else{let r=this._createInjector(a,e,o,this._injector),s=o.attachComponentPortal(new De(t,a.viewContainerRef,r,null,a.bindings));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,o,a){let r=t.injector||t.viewContainerRef?.injector,s=[{provide:Cc,useValue:t.data},{provide:oe,useValue:e}];return t.providers&&(typeof t.providers==`function`?s.push(...t.providers(e,t,o)):s.push(...t.providers)),t.direction&&(!r||!r.get(Mt,null,{optional:!0}))&&s.push({provide:Mt,useValue:xc(t.direction)}),oe$1.create({parent:r||a,providers:s})}_removeOpenDialog(t,e){let o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,r)=>{a?r.setAttribute(`aria-hidden`,a):r.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){let a=e[o];a!==t&&a.nodeName!==`SCRIPT`&&a.nodeName!==`STYLE`&&!a.hasAttribute(`aria-live`)&&!a.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(a,a.getAttribute(`aria-hidden`)),a.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();function wo(i,n){let t=i.length;for(;t--;)n(i[t])}function Ub(i){return i!=null&&`${i}`!=`false`}var Wb={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Ac=new A(`MATERIAL_ANIMATIONS`);var rs=null;function Mc(){return b(Ac,{optional:!0})?.animationsDisabled||b(Xm,{optional:!0})===`NoopAnimations`?`di-disabled`:(rs??=b(Zn).matchMedia(`(prefers-reduced-motion)`).matches,rs?`reduced-motion`:`enabled`)}function kt(){return Mc()!==`enabled`}var gi=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Co=`mdc-dialog--open`;var ss=`mdc-dialog--opening`;var ls=`mdc-dialog--closing`;var kc=150;var Ic=75;var Nc=(()=>{class i extends So{_animationStateChanged=new Ge$1;_animationsEnabled=!kt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?ds(this._config.enterAnimationDuration)??kc:0;_exitAnimationDuration=this._animationsEnabled?ds(this._config.exitAnimationDuration)??Ic:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(cs,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ss,Co)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Co),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Co),this._animationsEnabled?(this._hostElement.style.setProperty(cs,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ls)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(ss,ls)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),e}static ɵfac=(()=>{let t;return function(o){return(t||(t=Py(i)))(o||i)}})();static ɵcmp=(function(){function t(e,o){}return YE({type:i,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(o,a){o&2&&(Mh(`id`,a._config.id),wh(`aria-modal`,a._config.ariaModal)(`role`,a._config.role)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null),Vh(`_mat-animation-noopable`,!a._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,a._actionSectionCount>0))},features:[ch],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(o,a){o&1&&(Ni$1(0,`div`,0)(1,`div`,1),uh(2,t,0,0,`ng-template`,2),il$1()())},dependencies:[tn],styles:[`.mat-mdc-dialog-container {
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
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
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
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
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
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
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
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
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
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
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
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
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
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
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
`],encapsulation:2,changeDetection:1})})()}return i})();var cs=`--mat-dialog-transition-duration`;function ds(i){return i==null?null:typeof i==`number`?i:i.endsWith(`ms`)?rt(i.substring(0,i.length-2)):i.endsWith(`s`)?rt(i.substring(0,i.length-1))*1e3:i===`0`?0:null}var bi=(function(i){return i[i.OPEN=0]=`OPEN`,i[i.CLOSING=1]=`CLOSING`,i[i.CLOSED=2]=`CLOSED`,i})(bi||{});var on=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Qn$1(1);_beforeClosed=new Qn$1(1);_result;_closeFallbackTimeout;_state=bi.OPEN;_closeInteractionType;constructor(n,t,e){this._ref=n,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=n.id,n.addPanelClass(`mat-mdc-dialog-panel`),e._animationStateChanged.pipe(an$1(o=>o.state===`opened`),cn(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(an$1(o=>o.state===`closed`),cn(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Xg(this.backdropClick(),this.keydownEvents().pipe(an$1(o=>o.keyCode===27&&!this.disableClose&&!Vt(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),us(this,o.type===`keydown`?`keyboard`:`mouse`))})}close(n){let t=this._config.closePredicate;t&&!t(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(an$1(e=>e.state===`closing`),cn(1)).subscribe(e=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=bi.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n=``,t=``){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=bi.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function us(i,n,t){return i._closeInteractionType=n,i.close(t)}var Tc=new A(`MatMdcDialogData`);var Oc=new A(`mat-mdc-dialog-default-options`);var Rc=new A(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=b(oe$1);return()=>Ce(i)}});var ms=(()=>{class i{_defaultOptions=b(Oc,{optional:!0});_scrollStrategy=b(Rc);_parentDialog=b(i,{optional:!0,skipSelf:!0});_idGenerator=b(ht);_injector=b(oe$1);_dialog=b(as);_animationsDisabled=kt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new K;_afterOpenedAtThisLevel=new K;dialogConfigClass=gi;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Kg(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ou(void 0)));constructor(){this._dialogRefConstructor=on,this._dialogContainerType=Nc,this._dialogDataToken=Tc}open(t,e){let o;e=W$1(W$1({},this._defaultOptions||new gi),e),e.id=e.id||this._idGenerator.getId(`mat-mdc-dialog-`),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(t,q(W$1({},e),{positionStrategy:Ee(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()===`0`||e.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:jt,useValue:e}]},templateContext:()=>({dialogRef:o}),providers:(r,s,c)=>(o=new this._dialogRefConstructor(r,e,c),o.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:o},{provide:oe,useValue:null}])}));return o.componentRef=a.componentRef,o.componentInstance=a.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(o);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var fg=(()=>{class i{dialogRef=b(on,{optional:!0});_elementRef=b(Lr$1);_dialog=b(ms);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=ps(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&us(this.dialogRef,t.screenX===0&&t.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(e,o){e&1&&xh(`click`,function(r){return o._onButtonClick(r)}),e&2&&wh(`aria-label`,o.ariaLabel||null)(`type`,o.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[yy]})}return i})();var hs=(()=>{class i{_dialogRef=b(on,{optional:!0});_elementRef=b(Lr$1);_dialog=b(ms);ngOnInit(){this._dialogRef||(this._dialogRef=ps(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i})}return i})();var bg=(()=>{class i extends hs{id=b(ht).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let t;return function(o){return(t||(t=Py(i)))(o||i)}})();static ɵdir=tD({type:i,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(e,o){e&2&&Mh(`id`,o.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[ch]})}return i})();var gg=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[sD([Je])]})}return i})();var yg=(()=>{class i extends hs{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let t;return function(o){return(t||(t=Py(i)))(o||i)}})();static ɵdir=tD({type:i,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(e,o){e&2&&Vh(`mat-mdc-dialog-actions-align-start`,o.align===`start`)(`mat-mdc-dialog-actions-align-center`,o.align===`center`)(`mat-mdc-dialog-actions-align-end`,o.align===`end`)},inputs:{align:`align`},features:[ch]})}return i})();function ps(i,n){let t=i.nativeElement.parentElement;for(;t&&!t.classList.contains(`mat-mdc-dialog-container`);)t=t.parentElement;return t?n.find(e=>e.id===t.id):null}var xe;var fs=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Dg(){if(xe)return xe;if(typeof document!=`object`||!document)return xe=new Set(fs),xe;let i=document.createElement(`input`);return xe=new Set(fs.filter(n=>(i.setAttribute(`type`,n),i.type===n))),xe}var ot=(function(i){return i[i.FADING_IN=0]=`FADING_IN`,i[i.VISIBLE=1]=`VISIBLE`,i[i.FADING_OUT=2]=`FADING_OUT`,i[i.HIDDEN=3]=`HIDDEN`,i})(ot||{});var Eo=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ot.HIDDEN;constructor(n,t,e,o=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var bs=ge({passive:!0,capture:!0});var xo=class{_events=/* @__PURE__ */ new Map;addHandler(n,t,e,o){let a=this._events.get(t);if(a){let r=a.get(e);r?r.add(o):a.set(e,/* @__PURE__ */ new Set([o]))}else this._events.set(t,/* @__PURE__ */ new Map([[e,/* @__PURE__ */ new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,bs)})}removeHandler(n,t,e){let o=this._events.get(n);if(!o)return;let a=o.get(t);a&&(a.delete(e),a.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,bs)))}_delegateEventHandler=n=>{let t=G(n);t&&this._events.get(n.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(a=>a.handleEvent(n))})}};var an={enterDuration:225,exitDuration:150};var Pc=800;var gs=ge({passive:!0,capture:!0});var ys=[`mousedown`,`touchstart`];var vs=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Fc=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=YE({type:i,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
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
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})();var rn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new xo;constructor(n,t,e,o,a){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=nt(e)),a&&a.get(it).load(Fc)}fadeInRipple(n,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=W$1(W$1({},an),e.animation);e.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let r=e.radius||Lc(n,t,o),s=n-o.left,c=t-o.top,d=a.enterDuration,u=document.createElement(`div`);u.classList.add(`mat-ripple-element`),u.style.left=`${s-r}px`,u.style.top=`${c-r}px`,u.style.height=`${r*2}px`,u.style.width=`${r*2}px`,e.color!=null&&(u.style.backgroundColor=e.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let m=window.getComputedStyle(u),y=m.transitionProperty,D=m.transitionDuration,k=y===`none`||D===`0s`||D===`0s, 0s`||o.width===0&&o.height===0,I=new Eo(this,u,e,k);u.style.transform=`scale3d(1, 1, 1)`,I.state=ot.FADING_IN,e.persistent||(this._mostRecentTransientRipple=I);let R=null;return!k&&(d||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ut=()=>{R&&(R.fallbackTimer=null),clearTimeout(Ht),this._finishRippleTransition(I)},lt=()=>this._destroyRipple(I),Ht=setTimeout(lt,d+100);u.addEventListener(`transitionend`,Ut),u.addEventListener(`transitioncancel`,lt),R={onTransitionEnd:Ut,onTransitionCancel:lt,fallbackTimer:Ht}}),this._activeRipples.set(I,R),(k||!d)&&this._finishRippleTransition(I),I}fadeOutRipple(n){if(n.state===ot.FADING_OUT||n.state===ot.HIDDEN)return;let t=n.element,e=W$1(W$1({},an),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity=`0`,n.state=ot.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=nt(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,ys.forEach(e=>{i._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type===`mousedown`?this._onMousedown(n):n.type===`touchstart`?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{vs.forEach(t=>{this._triggerElement.addEventListener(t,this,gs)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===ot.FADING_IN?this._startFadeOutTransition(n):n.state===ot.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=ot.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=ot.HIDDEN,t!==null&&(n.element.removeEventListener(`transitionend`,t.onTransitionEnd),n.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=We(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Pc;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Ge(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===ot.VISIBLE||n.config.terminateOnPointerUp&&n.state===ot.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(ys.forEach(t=>i._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(vs.forEach(t=>n.removeEventListener(t,this,gs)),this._pointerUpEventsRegistered=!1))}};function Lc(i,n,t){let e=Math.max(Math.abs(i-t.left),Math.abs(i-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+o*o)}var Ao=new A(`mat-ripple-global-options`);var Fg=(()=>{class i{_elementRef=b(Lr$1);_animationsDisabled=kt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=b(ve$1),e=b(T),o=b(Ao,{optional:!0}),a=b(oe$1);this._globalOptions=o||{},this._rippleRenderer=new rn(this,t,this._elementRef,e,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:W$1(W$1(W$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,e,W$1(W$1({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,W$1(W$1({},this.rippleConfig),t))}static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(e,o){e&2&&Vh(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return i})();var Bc={capture:!0};var zc=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Mo=`mat-ripple-loader-uninitialized`;var ko=`mat-ripple-loader-class-name`;var _s=`mat-ripple-loader-centered`;var yi=`mat-ripple-loader-disabled`;var Ds=(()=>{class i{_document=b(Yo);_animationsDisabled=kt();_globalRippleOptions=b(Ao,{optional:!0});_platform=b(T);_ngZone=b(ve$1);_injector=b(oe$1);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let t=b(xr$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>zc.map(e=>t.listen(this._document,e,this._onInteraction,Bc)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Mo,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(ko))&&t.setAttribute(ko,e.className||``),e.centered&&t.setAttribute(_s,``),e.disabled&&t.setAttribute(yi,``)}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(yi,``):t.removeAttribute(yi)}_onInteraction=t=>{let e=G(t);if(e instanceof HTMLElement){let o=e.closest(`[${Mo}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(ko)),t.append(e);let o=this._globalRippleOptions,a=this._animationsDisabled?0:o?.animation?.enterDuration??an.enterDuration,r=this._animationsDisabled?0:o?.animation?.exitDuration??an.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(yi),rippleConfig:{centered:t.hasAttribute(_s),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:r}}},c=new rn(s,this._ngZone,e,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:c,hasSetUpEvents:d}),t.removeAttribute(Mo)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||i)};static ɵprov=kr$1({token:i,factory:i.ɵfac})}return i})();var ws=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=YE({type:i,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
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
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return i})();var Vc=new A(`MAT_BUTTON_CONFIG`);function Ss(i){return i==null?void 0:vj(i)}var vi=(()=>{class i{_elementRef=b(Lr$1);_ngZone=b(ve$1);_animationsDisabled=kt();_config=b(Vc,{optional:!0});_focusMonitor=b(Ze);_cleanupClick;_renderer=b(ec$1);_rippleLoader=b(Ds);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=dj(!1,{transform:yj});constructor(){b(it).load(ws);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||i)};static ɵdir=tD({type:i,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,o){e&2&&(wh(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),kw(o.color?`mat-`+o.color:``),Vh(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,yj],disabled:[2,`disabled`,`disabled`,yj],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,yj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,yj],tabIndex:[2,`tabIndex`,`tabIndex`,Ss],_tabindex:[2,`tabindex`,`_tabindex`,Ss],showProgress:[1,`showProgress`]}})}return i})();var jc=(()=>{class i extends vi{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(e){return new(e||i)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],e=[`*`,`[progressIndicator]`];function o(a,r){a&1&&(sl$1(0,`div`,1),vw(1,1),al$1())}return YE({type:i,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[ch],ngContentSelectors:e,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,s){r&1&&(yw(t),Th(0,`span`,0),vw(1),ZD(2,o,2,0,`div`,1),Th(3,`span`,2)(4,`span`,3)),r&2&&(vI(2),KD(s.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
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
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
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
`],encapsulation:2})})()}return i})();var ay=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=JE({type:i});static ɵinj=wu({imports:[Qt]})}return i})();var Cs=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var hy=(()=>{class i extends vi{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Uc(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?Cs.get(this._appearance):null,a=Cs.get(t);o&&e.remove(...o),e.add(...a),this._appearance=t}static ɵfac=function(e){return new(e||i)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(a,r){a&1&&(sl$1(0,`div`,2),vw(1,3),al$1())}return YE({type:i,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[ch],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,s){r&1&&(yw(t),Th(0,`span`,0),vw(1),sl$1(2,`span`,1),vw(3,1),al$1(),vw(4,2),ZD(5,o,2,0,`div`,2),Th(6,`span`,3)(7,`span`,4)),r&2&&(Vh(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),vI(5),KD(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
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
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
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
`],encapsulation:2})})()}return i})();function Uc(i){return i.hasAttribute(`mat-raised-button`)?`elevated`:i.hasAttribute(`mat-stroked-button`)?`outlined`:i.hasAttribute(`mat-flat-button`)?`filled`:i.hasAttribute(`mat-button`)?`text`:null}var Hc=new A(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>Io});var Io={color:`accent`};var py=(()=>{class i extends vi{_options=b(Hc,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Io,this.color=this._options.color||Io.color}static ɵfac=function(e){return new(e||i)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(a,r){a&1&&(sl$1(0,`div`,2),vw(1,3),al$1())}return YE({type:i,selectors:[[`button`,`mat-fab`,``],[`a`,`mat-fab`,``],[`button`,`matFab`,``],[`a`,`matFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mat-mdc-fab`],hostVars:4,hostBindings:function(r,s){r&2&&Vh(`mdc-fab--extended`,s.extended)(`mat-mdc-extended-fab`,s.extended)},inputs:{extended:[2,`extended`,`extended`,yj]},exportAs:[`matButton`,`matAnchor`],features:[ch],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,s){r&1&&(yw(t),Th(0,`span`,0),vw(1),sl$1(2,`span`,1),vw(3,1),al$1(),vw(4,2),ZD(5,o,2,0,`div`,2),Th(6,`span`,3)(7,`span`,4)),r&2&&(Vh(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),vI(5),KD(s.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
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
.mat-mdc-fab-base .mat-icon,
.mat-mdc-fab-base .material-icons,
.mat-mdc-fab-base .material-symbols-outlined,
.mat-mdc-fab-base .material-symbols-rounded,
.mat-mdc-fab-base .material-symbols-sharp {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
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
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
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
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons,
.mat-mdc-extended-fab > .material-symbols-outlined,
.mat-mdc-extended-fab > .material-symbols-rounded,
.mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})})()}return i})();export{hy as $,Wb as A,ws as At,bc as B,T as C,te as Ct,Ur as D,vo as Dt,Ub as E,ul as Et,Ze as F,dl as G,bl as H,Zi as I,fg as J,ee as K,Zn as L,Xi as M,yg as Mt,Xn as N,Vl as O,wc as Ot,Yh as P,ht as Q,_o as R,St as S,tc as St,Tr as T,to as Tt,cc as U,bg as V,co as W,gg as X,fo as Y,go as Z,Mt as _,qn as _t,Dg as a,lo as at,On as b,rt as bt,Fa as c,nn as ct,Ge as d,nt as dt,ie as et,Gm as f,ot as ft,Ke as g,qi as gt,Jn as h,qe as ht,De as i,kt as it,We as j,ye as jt,Vt as k,we as kt,Fg as l,no as lt,Je as m,py as mt,Ao as n,it as nt,Do as o,ms as ot,Gp as p,pl as pt,fc as q,Br as r,jc as rt,Ee as s,nc as st,$s as t,io as tt,G as u,nr as ut,Nl as v,ri as vt,Tn as w,tn as wt,Qt as x,si as xt,Oc as y,rn as yt,ay as z};
//# debugId=1d5d713a-de87-5457-a656-9a013f2a73d8
//# sourceMappingURL=chunk-Btuf8ckA.js.map