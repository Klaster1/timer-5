import{a as P,b as It,e as Fs,f as Nn,h as Te,i as Ai,j as Je,l as le,m as Ni,n as ce,o as de,p as Vs}from"./chunk-ESNZLXWH.js";import{a as to,b as eo,c as io,d as no,e as ro,f as so,g as oo,h as ao,i as lo,j as co,k as mo,l as ho,m as po,n as uo,o as fo,p as Vi}from"./chunk-4GPB5ERY.js";import"./chunk-YGKLZFBI.js";import{a as Rs,b as kt,c as Ns,d as ae}from"./chunk-ZLRYOQKC.js";import{A as Hs,B as Fe,C as Us,D as qs,E as Gs,F as Qs,G as Ws,H as zi,I as $s,S as Bn,T as Ys,U as Zs,V as Xs,W as Be,X as ze,Y as Js,Z as _t,a as In,c as Oi,d as Ne,e as Xt,f as Li,g as Bs,h as zs,v as Bi,w as Ks,x as Fn,z as Q}from"./chunk-S6J337JV.js";import{a as Fi,b as De,c as js}from"./chunk-R6VKPHW6.js";import{a as ji}from"./chunk-ROAV26JI.js";import{$ as xs,Aa as As,B as ft,Ba as Os,C as ps,D as An,Da as Ls,E as Di,Ea as oe,F as Mi,G as On,Ga as Ii,H as us,Ha as Ri,I as fs,K as Ln,L as _s,N as gs,P as bs,R as vs,V as ys,W as ws,X as ks,aa as Ss,ba as Es,c as cs,da as Pi,ea as Cs,f as ds,fa as Ts,ga as Ds,i as ms,ia as Ms,k as qt,ka as Dt,l as xi,la as Ps,m as Ye,ma as Ce,n as Si,o as hs,p as Le,q as Zt,r as Ze,sa as Is,v as Rn,w as Ei,x as Ci,y as Ti,z as Xe}from"./chunk-7IAKU4ID.js";import{$ as st,$a as Jr,$b as Y,Aa as ve,Ab as Dn,Ac as wt,B as _i,Bb as Mn,C as ie,Ca as it,Cb as jt,D as ne,Da as Zr,Db as U,E as re,Eb as q,Ec as ut,Fb as is,Fc as ki,Hb as ns,Hc as as,I as Gr,Ia as xn,Ib as rs,Ic as Ut,J as Nt,Jb as g,K as wn,Kb as u,Lb as p,Lc as Ee,Mb as w,Mc as ls,Qb as ye,Rb as we,T as Oe,Tb as G,U as ge,V as J,Va as Xr,X as Qr,Xa as f,Xb as O,Y as D,Z as Wr,Zb as T,_b as Kt,a as Et,aa as Wt,ab as yt,ac as ke,bb as Sn,bc as xe,c as Kr,ca as tt,cb as We,cc as Z,da as be,db as $e,dc as X,ea as d,f as ee,fc as bi,ga as $r,gb as ts,gc as vi,h as _e,ha as Yr,hc as nt,ic as Pn,j as C,jc as at,k as Hr,kb as R,kc as ss,la as N,lb as $t,lc as E,ma as F,mb as A,mc as yi,n as Ur,nb as gi,nc as Tt,oa as $,oc as Ht,pa as pt,pb as Vt,pc as wi,q as qr,qa as Ft,qb as ct,qc as se,rb as En,rc as Se,sa as ot,sc as B,ta as et,tc as dt,u as Ct,uc as Yt,wa as Bt,wb as Cn,xb as es,xc as os,ya as zt,za as kn,zb as Tn}from"./chunk-WFWAAGEL.js";function yl(r,e){if(r&1){let t=G();u(0,"div",1)(1,"button",2),O("click",function(){N(t);let n=T();return F(n.action())}),E(2),p()()}if(r&2){let t=T();f(2),Tt(" ",t.data.action," ")}}var wl=["label"];function kl(r,e){}var xl=Math.pow(2,31)-1,ti=class{_overlayRef;instance;containerInstance;_afterDismissed=new C;_afterOpened=new C;_onAction=new C;_durationTimeoutId;_dismissedByAction=!1;constructor(e,t){this._overlayRef=t,this.containerInstance=e,e._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(e){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(e,xl))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},_o=new tt("MatSnackBarData"),Ve=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Sl=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return r})(),El=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return r})(),Cl=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return r})(),Tl=(()=>{class r{snackBarRef=d(ti);data=d(_o);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,n){i&1&&(u(0,"div",0),E(1),p(),U(2,yl,3,1,"div",1)),i&2&&(f(),Tt(" ",n.data.message,`
`),f(),q(n.hasAction?2:-1))},dependencies:[Ii,Sl,El,Cl],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return r})(),zn="_mat-snack-bar-enter",Vn="_mat-snack-bar-exit",Dl=(()=>{class r extends fs{_ngZone=d(et);_elementRef=d(it);_changeDetectorRef=d(Ut);_platform=d(qt);_animationsDisabled=Ce();snackBarConfig=d(Ve);_document=d(pt);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=d($);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new C;_onExit=new C;_onEnter=new C;_animationState="void";_live;_label;_role;_liveElementId=d(Mi).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),i}attachTemplatePortal(t){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),i}attachDomPortal=t=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),i};onAnimationEnd(t){t===Vn?this._completeExit():t===zn&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?yt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(zn)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(zn)},200)))}exit(){return this._destroyed?qr(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?yt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Vn)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Vn),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(o=>t.classList.add(o)):t.classList.add(i)),this._exposeToModals();let n=this._label.nativeElement,s="mdc-snackbar__label";n.classList.toggle(s,!n.querySelector(`.${s}`))}_exposeToModals(){let t=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<i.length;n++){let s=i[n],o=s.getAttribute("aria-owns");this._trackedModals.add(s),o?o.indexOf(t)===-1&&s.setAttribute("aria-owns",o+" "+t):s.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let i=t.getAttribute("aria-owns");if(i){let n=i.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,i=t.querySelector("[aria-hidden]"),n=t.querySelector("[aria-live]");if(i&&n){let s=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(s=document.activeElement),i.removeAttribute("aria-hidden"),n.appendChild(i),s?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,n){if(i&1&&xe(Ln,7)(wl,7),i&2){let s;Z(s=X())&&(n._portalOutlet=s.first),Z(s=X())&&(n._label=s.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,n){i&1&&O("animationend",function(o){return n.onAnimationEnd(o.animationName)})("animationcancel",function(o){return n.onAnimationEnd(o.animationName)}),i&2&&at("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[Vt],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,n){i&1&&(u(0,"div",1)(1,"div",2,0)(3,"div",3),ct(4,kl,0,0,"ng-template",4),p(),w(5,"div"),p()()),i&2&&(f(5),jt("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[Ln],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return r})(),Ml=new tt("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Ve}),go=(()=>{class r{_live=d(Ms);_injector=d($);_breakpointObserver=d(xs);_parentSnackBar=d(r,{optional:!0,skipSelf:!0});_defaultConfig=d(Ml);_animationsDisabled=Ce();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Tl;snackBarContainerComponent=Dl;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,i){return this._attach(t,i)}openFromTemplate(t,i){return this._attach(t,i)}open(t,i="",n){let s=Et(Et({},this._defaultConfig),n);return s.data={message:t,action:i},s.announcementMessage===t&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,i){let n=i&&i.viewContainerRef&&i.viewContainerRef.injector,s=$.create({parent:n||this._injector,providers:[{provide:Ve,useValue:i}]}),o=new On(this.snackBarContainerComponent,i.viewContainerRef,s),a=t.attach(o);return a.instance.snackBarConfig=i,a.instance}_attach(t,i){let n=Et(Et(Et({},new Ve),this._defaultConfig),i),s=this._createOverlay(n),o=this._attachSnackBarContainer(s,n),a=new ti(o,s);if(t instanceof Sn){let l=new us(t,null,{$implicit:n.data,snackBarRef:a});a.instance=o.attachTemplatePortal(l)}else{let l=this._createInjector(n,a),c=new On(t,void 0,l),m=o.attachComponentPortal(c);a.instance=m.instance}return this._breakpointObserver.observe(Ps.HandsetPortrait).pipe(J(s.detachments())).subscribe(l=>{s.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(a,n),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(t,i){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let i=new gs;i.direction=t.direction;let n=bs(this._injector),s=t.direction==="rtl",o=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!s||t.horizontalPosition==="end"&&s,a=!o&&t.horizontalPosition!=="center";return o?n.left("0"):a?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),i.positionStrategy=n,i.disableAnimations=this._animationsDisabled,vs(this._injector,i)}_createInjector(t,i){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return $.create({parent:n||this._injector,providers:[{provide:ti,useValue:i},{provide:_o,useValue:t.data}]})}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function bo(r){return new D(3e3,!1)}function Pl(){return new D(3100,!1)}function Il(){return new D(3101,!1)}function Rl(r){return new D(3001,!1)}function Al(r){return new D(3003,!1)}function Ol(r){return new D(3004,!1)}function yo(r,e){return new D(3005,!1)}function wo(){return new D(3006,!1)}function ko(){return new D(3007,!1)}function xo(r,e){return new D(3008,!1)}function So(r){return new D(3002,!1)}function Eo(r,e,t,i,n){return new D(3010,!1)}function Co(){return new D(3011,!1)}function To(){return new D(3012,!1)}function Do(){return new D(3200,!1)}function Mo(){return new D(3202,!1)}function Po(){return new D(3013,!1)}function Io(r){return new D(3014,!1)}function Ro(r){return new D(3015,!1)}function Ao(r){return new D(3016,!1)}function Oo(r,e){return new D(3404,!1)}function Ll(r){return new D(3502,!1)}function Lo(r){return new D(3503,!1)}function No(){return new D(3300,!1)}function Fo(r){return new D(3504,!1)}function Bo(r){return new D(3301,!1)}function zo(r,e){return new D(3302,!1)}function Vo(r){return new D(3303,!1)}function jo(r,e){return new D(3400,!1)}function Ko(r){return new D(3401,!1)}function Ho(r){return new D(3402,!1)}function Uo(r,e){return new D(3505,!1)}function Jt(r){switch(r.length){case 0:return new Te;case 1:return r[0];default:return new Ai(r)}}function Un(r,e,t=new Map,i=new Map){let n=[],s=[],o=-1,a=null;if(e.forEach(l=>{let c=l.get("offset"),m=c==o,h=m&&a||new Map;l.forEach((x,S)=>{let b=S,k=x;if(S!=="offset")switch(b=r.normalizePropertyName(b,n),k){case Je:k=t.get(S);break;case It:k=i.get(S);break;default:k=r.normalizeStyleValue(S,b,k,n);break}h.set(b,k)}),m||s.push(h),a=h,o=c}),n.length)throw Ll(n);return s}function Ki(r,e,t,i){switch(e){case"start":r.onStart(()=>i(t&&jn(t,"start",r)));break;case"done":r.onDone(()=>i(t&&jn(t,"done",r)));break;case"destroy":r.onDestroy(()=>i(t&&jn(t,"destroy",r)));break}}function jn(r,e,t){let i=t.totalTime,n=!!t.disabled,s=Hi(r.element,r.triggerName,r.fromState,r.toState,e||r.phaseName,i??r.totalTime,n),o=r._data;return o!=null&&(s._data=o),s}function Hi(r,e,t,i,n="",s=0,o){return{element:r,triggerName:e,fromState:t,toState:i,phaseName:n,totalTime:s,disabled:!!o}}function gt(r,e,t){let i=r.get(e);return i||r.set(e,i=t),i}function qn(r){let e=r.indexOf(":"),t=r.substring(1,e),i=r.slice(e+1);return[t,i]}var Nl=typeof document>"u"?null:document.documentElement;function Ui(r){let e=r.parentNode||r.host||null;return e===Nl?null:e}function Fl(r){return r.substring(1,6)=="ebkit"}var Me=null,vo=!1;function qo(r){Me||(Me=Bl()||{},vo=Me.style?"WebkitAppearance"in Me.style:!1);let e=!0;return Me.style&&!Fl(r)&&(e=r in Me.style,!e&&vo&&(e="Webkit"+r.charAt(0).toUpperCase()+r.slice(1)in Me.style)),e}function Bl(){return typeof document<"u"?document.body:null}function Gn(r,e){for(;e;){if(e===r)return!0;e=Ui(e)}return!1}function Qn(r,e,t){if(t)return Array.from(r.querySelectorAll(e));let i=r.querySelector(e);return i?[i]:[]}var zl=1e3,Wn="{{",Vl="}}",$n="ng-enter",qi="ng-leave",ei="ng-trigger",ii=".ng-trigger",Yn="ng-animating",Gi=".ng-animating";function Gt(r){if(typeof r=="number")return r;let e=r.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:Kn(parseFloat(e[1]),e[2])}function Kn(r,e){return e==="s"?r*zl:r}function ni(r,e,t){return r.hasOwnProperty("duration")?r:Kl(r,e,t)}var jl=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function Kl(r,e,t){let i,n=0,s="";if(typeof r=="string"){let o=r.match(jl);if(o===null)return e.push(bo(r)),{duration:0,delay:0,easing:""};i=Kn(parseFloat(o[1]),o[2]);let a=o[3];a!=null&&(n=Kn(parseFloat(a),o[4]));let l=o[5];l&&(s=l)}else i=r;if(!t){let o=!1,a=e.length;i<0&&(e.push(Pl()),o=!0),n<0&&(e.push(Il()),o=!0),o&&e.splice(a,0,bo(r))}return{duration:i,delay:n,easing:s}}function Go(r){return r.length?r[0]instanceof Map?r:r.map(e=>new Map(Object.entries(e))):[]}function Rt(r,e,t){e.forEach((i,n)=>{let s=Qi(n);t&&!t.has(n)&&t.set(n,r.style[s]),r.style[s]=i})}function me(r,e){e.forEach((t,i)=>{let n=Qi(i);r.style[n]=""})}function je(r){return Array.isArray(r)?r.length==1?r[0]:Fs(r):r}function Qo(r,e,t){let i=e.params||{},n=Zn(r);n.length&&n.forEach(s=>{i.hasOwnProperty(s)||t.push(Rl(s))})}var Hn=new RegExp(`${Wn}\\s*(.+?)\\s*${Vl}`,"g");function Zn(r){let e=[];if(typeof r=="string"){let t;for(;t=Hn.exec(r);)e.push(t[1]);Hn.lastIndex=0}return e}function Ke(r,e,t){let i=`${r}`,n=i.replace(Hn,(s,o)=>{let a=e[o];return a==null&&(t.push(Al(o)),a=""),a.toString()});return n==i?r:n}var Hl=/-+([a-z0-9])/g;function Qi(r){return r.replace(Hl,(...e)=>e[1].toUpperCase())}function Wo(r,e){return r===0||e===0}function $o(r,e,t){if(t.size&&e.length){let i=e[0],n=[];if(t.forEach((s,o)=>{i.has(o)||n.push(o),i.set(o,s)}),n.length)for(let s=1;s<e.length;s++){let o=e[s];n.forEach(a=>o.set(a,Wi(r,a)))}}return e}function bt(r,e,t){switch(e.type){case P.Trigger:return r.visitTrigger(e,t);case P.State:return r.visitState(e,t);case P.Transition:return r.visitTransition(e,t);case P.Sequence:return r.visitSequence(e,t);case P.Group:return r.visitGroup(e,t);case P.Animate:return r.visitAnimate(e,t);case P.Keyframes:return r.visitKeyframes(e,t);case P.Style:return r.visitStyle(e,t);case P.Reference:return r.visitReference(e,t);case P.AnimateChild:return r.visitAnimateChild(e,t);case P.AnimateRef:return r.visitAnimateRef(e,t);case P.Query:return r.visitQuery(e,t);case P.Stagger:return r.visitStagger(e,t);default:throw Ol(e.type)}}function Wi(r,e){return window.getComputedStyle(r)[e]}var ur=(()=>{class r{validateStyleProperty(t){return qo(t)}containsElement(t,i){return Gn(t,i)}getParentElement(t){return Ui(t)}query(t,i,n){return Qn(t,i,n)}computeStyle(t,i,n){return n||""}animate(t,i,n,s,o,a=[],l){return new Te(n,s)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac})}return r})(),Ie=class{static NOOP=new ur},Re=class{};var Ul=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Ji=class extends Re{normalizePropertyName(e,t){return Qi(e)}normalizeStyleValue(e,t,i,n){let s="",o=i.toString().trim();if(Ul.has(t)&&i!==0&&i!=="0")if(typeof i=="number")s="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&n.push(yo(e,i))}return o+s}};var tn="*";function ql(r,e){let t=[];return typeof r=="string"?r.split(/\s*,\s*/).forEach(i=>Gl(i,t,e)):t.push(r),t}function Gl(r,e,t){if(r[0]==":"){let l=Ql(r,t);if(typeof l=="function"){e.push(l);return}r=l}let i=r.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return t.push(Ro(r)),e;let n=i[1],s=i[2],o=i[3];e.push(Yo(n,o));let a=n==tn&&o==tn;s[0]=="<"&&!a&&e.push(Yo(o,n))}function Ql(r,e){switch(r){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,i)=>parseFloat(i)>parseFloat(t);case":decrement":return(t,i)=>parseFloat(i)<parseFloat(t);default:return e.push(Ao(r)),"* => *"}}var $i=new Set(["true","1"]),Yi=new Set(["false","0"]);function Yo(r,e){let t=$i.has(r)||Yi.has(r),i=$i.has(e)||Yi.has(e);return(n,s)=>{let o=r==tn||r==n,a=e==tn||e==s;return!o&&t&&typeof n=="boolean"&&(o=n?$i.has(r):Yi.has(r)),!a&&i&&typeof s=="boolean"&&(a=s?$i.has(e):Yi.has(e)),o&&a}}var oa=":self",Wl=new RegExp(`s*${oa}s*,?`,"g");function aa(r,e,t,i){return new nr(r).build(e,t,i)}var Zo="",nr=class{_driver;constructor(e){this._driver=e}build(e,t,i){let n=new rr(t);return this._resetContextStyleTimingState(n),bt(this,je(e),n)}_resetContextStyleTimingState(e){e.currentQuerySelector=Zo,e.collectedStyles=new Map,e.collectedStyles.set(Zo,new Map),e.currentTime=0}visitTrigger(e,t){let i=t.queryCount=0,n=t.depCount=0,s=[],o=[];return e.name.charAt(0)=="@"&&t.errors.push(wo()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),a.type==P.State){let l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(m=>{l.name=m,s.push(this.visitState(l,t))}),l.name=c}else if(a.type==P.Transition){let l=this.visitTransition(a,t);i+=l.queryCount,n+=l.depCount,o.push(l)}else t.errors.push(ko())}),{type:P.Trigger,name:e.name,states:s,transitions:o,queryCount:i,depCount:n,options:null}}visitState(e,t){let i=this.visitStyle(e.styles,t),n=e.options&&e.options.params||null;if(i.containsDynamicStyles){let s=new Set,o=n||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{Zn(l).forEach(c=>{o.hasOwnProperty(c)||s.add(c)})})}),s.size&&t.errors.push(xo(e.name,[...s.values()]))}return{type:P.State,name:e.name,style:i,options:n?{params:n}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let i=bt(this,je(e.animation),t),n=ql(e.expr,t.errors);return{type:P.Transition,matchers:n,animation:i,queryCount:t.queryCount,depCount:t.depCount,options:Pe(e.options)}}visitSequence(e,t){return{type:P.Sequence,steps:e.steps.map(i=>bt(this,i,t)),options:Pe(e.options)}}visitGroup(e,t){let i=t.currentTime,n=0,s=e.steps.map(o=>{t.currentTime=i;let a=bt(this,o,t);return n=Math.max(n,t.currentTime),a});return t.currentTime=n,{type:P.Group,steps:s,options:Pe(e.options)}}visitAnimate(e,t){let i=Xl(e.timings,t.errors);t.currentAnimateTimings=i;let n,s=e.styles?e.styles:Nn({});if(s.type==P.Keyframes)n=this.visitKeyframes(s,t);else{let o=e.styles,a=!1;if(!o){a=!0;let c={};i.easing&&(c.easing=i.easing),o=Nn(c)}t.currentTime+=i.duration+i.delay;let l=this.visitStyle(o,t);l.isEmptyStep=a,n=l}return t.currentAnimateTimings=null,{type:P.Animate,timings:i,style:n,options:null}}visitStyle(e,t){let i=this._makeStyleAst(e,t);return this._validateStyleAst(i,t),i}_makeStyleAst(e,t){let i=[],n=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of n)typeof a=="string"?a===It?i.push(a):t.errors.push(So(a)):i.push(new Map(Object.entries(a)));let s=!1,o=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(o=a.get("easing"),a.delete("easing")),!s)){for(let l of a.values())if(l.toString().indexOf(Wn)>=0){s=!0;break}}}),{type:P.Style,styles:i,easing:o,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,t){let i=t.currentAnimateTimings,n=t.currentTime,s=t.currentTime;i&&s>0&&(s-=i.duration+i.delay),e.styles.forEach(o=>{typeof o!="string"&&o.forEach((a,l)=>{let c=t.collectedStyles.get(t.currentQuerySelector),m=c.get(l),h=!0;m&&(s!=n&&s>=m.startTime&&n<=m.endTime&&(t.errors.push(Eo(l,m.startTime,m.endTime,s,n)),h=!1),s=m.startTime),h&&c.set(l,{startTime:s,endTime:n}),t.options&&Qo(a,t.options,t.errors)})})}visitKeyframes(e,t){let i={type:P.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(Co()),i;let n=1,s=0,o=[],a=!1,l=!1,c=0,m=e.steps.map(z=>{let V=this._makeStyleAst(z,t),H=V.offset!=null?V.offset:Zl(V.styles),K=0;return H!=null&&(s++,K=V.offset=H),l=l||K<0||K>1,a=a||K<c,c=K,o.push(K),V});l&&t.errors.push(To()),a&&t.errors.push(Do());let h=e.steps.length,x=0;s>0&&s<h?t.errors.push(Mo()):s==0&&(x=n/(h-1));let S=h-1,b=t.currentTime,k=t.currentAnimateTimings,M=k.duration;return m.forEach((z,V)=>{let H=x>0?V==S?1:x*V:o[V],K=H*M;t.currentTime=b+k.delay+K,k.duration=K,this._validateStyleAst(z,t),z.offset=H,i.styles.push(z)}),i}visitReference(e,t){return{type:P.Reference,animation:bt(this,je(e.animation),t),options:Pe(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:P.AnimateChild,options:Pe(e.options)}}visitAnimateRef(e,t){return{type:P.AnimateRef,animation:this.visitReference(e.animation,t),options:Pe(e.options)}}visitQuery(e,t){let i=t.currentQuerySelector,n=e.options||{};t.queryCount++,t.currentQuery=e;let[s,o]=$l(e.selector);t.currentQuerySelector=i.length?i+" "+s:s,gt(t.collectedStyles,t.currentQuerySelector,new Map);let a=bt(this,je(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=i,{type:P.Query,selector:s,limit:n.limit||0,optional:!!n.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:Pe(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(Po());let i=e.timings==="full"?{duration:0,delay:0,easing:"full"}:ni(e.timings,t.errors,!0);return{type:P.Stagger,animation:bt(this,je(e.animation),t),timings:i,options:null}}};function $l(r){let e=!!r.split(/\s*,\s*/).find(t=>t==oa);return e&&(r=r.replace(Wl,"")),r=r.replace(/@\*/g,ii).replace(/@\w+/g,t=>ii+"-"+t.slice(1)).replace(/:animating/g,Gi),[r,e]}function Yl(r){return r?Et({},r):null}var rr=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(e){this.errors=e}};function Zl(r){if(typeof r=="string")return null;let e=null;if(Array.isArray(r))r.forEach(t=>{if(t instanceof Map&&t.has("offset")){let i=t;e=parseFloat(i.get("offset")),i.delete("offset")}});else if(r instanceof Map&&r.has("offset")){let t=r;e=parseFloat(t.get("offset")),t.delete("offset")}return e}function Xl(r,e){if(r.hasOwnProperty("duration"))return r;if(typeof r=="number"){let s=ni(r,e).duration;return Xn(s,0,"")}let t=r;if(t.split(/\s+/).some(s=>s.charAt(0)=="{"&&s.charAt(1)=="{")){let s=Xn(0,0,"");return s.dynamic=!0,s.strValue=t,s}let n=ni(t,e);return Xn(n.duration,n.delay,n.easing)}function Pe(r){return r?(r=Et({},r),r.params&&(r.params=Yl(r.params))):r={},r}function Xn(r,e,t){return{duration:r,delay:e,easing:t}}function fr(r,e,t,i,n,s,o=null,a=!1){return{type:1,element:r,keyframes:e,preStyleProps:t,postStyleProps:i,duration:n,delay:s,totalTime:n+s,easing:o,subTimeline:a}}var si=class{_map=new Map;get(e){return this._map.get(e)||[]}append(e,t){let i=this._map.get(e);i||this._map.set(e,i=[]),i.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}},Jl=1,tc=":enter",ec=new RegExp(tc,"g"),ic=":leave",nc=new RegExp(ic,"g");function la(r,e,t,i,n,s=new Map,o=new Map,a,l,c=[]){return new sr().buildKeyframes(r,e,t,i,n,s,o,a,l,c)}var sr=class{buildKeyframes(e,t,i,n,s,o,a,l,c,m=[]){c=c||new si;let h=new or(e,t,c,n,s,m,[]);h.options=l;let x=l.delay?Gt(l.delay):0;h.currentTimeline.delayNextStep(x),h.currentTimeline.setStyles([o],null,h.errors,l),bt(this,i,h);let S=h.timelines.filter(b=>b.containsAnimation());if(S.length&&a.size){let b;for(let k=S.length-1;k>=0;k--){let M=S[k];if(M.element===t){b=M;break}}b&&!b.allowOnlyTimelineStyles()&&b.setStyles([a],null,h.errors,l)}return S.length?S.map(b=>b.buildKeyframes()):[fr(t,[],[],[],0,x,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let i=t.subInstructions.get(t.element);if(i){let n=t.createSubContext(e.options),s=t.currentTimeline.currentTime,o=this._visitSubInstructions(i,n,n.options);s!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){let i=t.createSubContext(e.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,i),this.visitReference(e.animation,i),t.transformIntoNewTimeline(i.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,i){for(let n of e){let s=n?.delay;if(s){let o=typeof s=="number"?s:Gt(Ke(s,n?.params??{},t.errors));i.delayNextStep(o)}}}_visitSubInstructions(e,t,i){let s=t.currentTimeline.currentTime,o=i.duration!=null?Gt(i.duration):null,a=i.delay!=null?Gt(i.delay):null;return o!==0&&e.forEach(l=>{let c=t.appendInstructionToTimeline(l,o,a);s=Math.max(s,c.duration+c.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),bt(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let i=t.subContextCount,n=t,s=e.options;if(s&&(s.params||s.delay)&&(n=t.createSubContext(s),n.transformIntoNewTimeline(),s.delay!=null)){n.previousNode.type==P.Style&&(n.currentTimeline.snapshotCurrentStyles(),n.previousNode=en);let o=Gt(s.delay);n.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>bt(this,o,n)),n.currentTimeline.applyStylesToKeyframe(),n.subContextCount>i&&n.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let i=[],n=t.currentTimeline.currentTime,s=e.options&&e.options.delay?Gt(e.options.delay):0;e.steps.forEach(o=>{let a=t.createSubContext(e.options);s&&a.delayNextStep(s),bt(this,o,a),n=Math.max(n,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(n),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let i=e.strValue,n=t.params?Ke(i,t.params,t.errors):i;return ni(n,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let i=t.currentAnimateTimings=this._visitTiming(e.timings,t),n=t.currentTimeline;i.delay&&(t.incrementTime(i.delay),n.snapshotCurrentStyles());let s=e.style;s.type==P.Keyframes?this.visitKeyframes(s,t):(t.incrementTime(i.duration),this.visitStyle(s,t),n.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let i=t.currentTimeline,n=t.currentAnimateTimings;!n&&i.hasCurrentStyleProperties()&&i.forwardFrame();let s=n&&n.easing||e.easing;e.isEmptyStep?i.applyEmptyStep(s):i.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let i=t.currentAnimateTimings,n=t.currentTimeline.duration,s=i.duration,a=t.createSubContext().currentTimeline;a.easing=i.easing,e.styles.forEach(l=>{let c=l.offset||0;a.forwardTime(c*s),a.setStyles(l.styles,l.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(n+s),t.previousNode=e}visitQuery(e,t){let i=t.currentTimeline.currentTime,n=e.options||{},s=n.delay?Gt(n.delay):0;s&&(t.previousNode.type===P.Style||i==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=en);let o=i,a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!n.optional,t.errors);t.currentQueryTotal=a.length;let l=null;a.forEach((c,m)=>{t.currentQueryIndex=m;let h=t.createSubContext(e.options,c);s&&h.delayNextStep(s),c===t.element&&(l=h.currentTimeline),bt(this,e.animation,h),h.currentTimeline.applyStylesToKeyframe();let x=h.currentTimeline.currentTime;o=Math.max(o,x)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let i=t.parentContext,n=t.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(t.currentQueryTotal-1),l=o*t.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":l=a-l;break;case"full":l=i.currentStaggerTime;break}let m=t.currentTimeline;l&&m.delayNextStep(l);let h=m.currentTime;bt(this,e.animation,t),t.previousNode=e,i.currentStaggerTime=n.currentTime-h+(n.startTime-i.currentTimeline.startTime)}},en={},or=class r{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=en;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(e,t,i,n,s,o,a,l){this._driver=e,this.element=t,this.subInstructions=i,this._enterClassName=n,this._leaveClassName=s,this.errors=o,this.timelines=a,this.currentTimeline=l||new nn(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let i=e,n=this.options;i.duration!=null&&(n.duration=Gt(i.duration)),i.delay!=null&&(n.delay=Gt(i.delay));let s=i.params;if(s){let o=n.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!t||!o.hasOwnProperty(a))&&(o[a]=Ke(s[a],o,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let i=e.params={};Object.keys(t).forEach(n=>{i[n]=t[n]})}}return e}createSubContext(e=null,t,i){let n=t||this.element,s=new r(this._driver,n,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(n,i||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=en,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,i){let n={duration:t??e.duration,delay:this.currentTimeline.currentTime+(i??0)+e.delay,easing:""},s=new ar(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,n,e.stretchStartingKeyframe);return this.timelines.push(s),n}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,i,n,s,o){let a=[];if(n&&a.push(this.element),e.length>0){e=e.replace(ec,"."+this._enterClassName),e=e.replace(nc,"."+this._leaveClassName);let l=i!=1,c=this._driver.query(this.element,e,l);i!==0&&(c=i<0?c.slice(c.length+i,c.length):c.slice(0,i)),a.push(...c)}return!s&&a.length==0&&o.push(Io(t)),a}},nn=class r{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(e,t,i,n){this._driver=e,this.element=t,this.startTime=i,this._elementTimelineStylesLookup=n,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new r(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Jl,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,i]of this._globalTimelineStyles)this._backFill.set(t,i||It),this._currentKeyframe.set(t,It);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,i,n){t&&this._previousKeyframe.set("easing",t);let s=n&&n.params||{},o=rc(e,this._globalTimelineStyles);for(let[a,l]of o){let c=Ke(l,s,i);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??It),this._updateStyle(a,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,i)=>{let n=this._styleSummary.get(i);(!n||t.time>n.time)&&this._updateStyle(i,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,i=this._keyframes.size===1&&this.duration===0,n=[];this._keyframes.forEach((a,l)=>{let c=new Map([...this._backFill,...a]);c.forEach((m,h)=>{m===Je?e.add(h):m===It&&t.add(h)}),i||c.set("offset",l/this.duration),n.push(c)});let s=[...e.values()],o=[...t.values()];if(i){let a=n[0],l=new Map(a);a.set("offset",0),l.set("offset",1),n=[a,l]}return fr(this.element,n,s,o,this.duration,this.startTime,this.easing,!1)}},ar=class extends nn{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(e,t,i,n,s,o,a=!1){super(e,t,o.delay),this.keyframes=i,this.preStyleProps=n,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:i,easing:n}=this.timings;if(this._stretchStartingKeyframe&&t){let s=[],o=i+t,a=t/o,l=new Map(e[0]);l.set("offset",0),s.push(l);let c=new Map(e[0]);c.set("offset",Xo(a)),s.push(c);let m=e.length-1;for(let h=1;h<=m;h++){let x=new Map(e[h]),S=x.get("offset"),b=t+S*i;x.set("offset",Xo(b/o)),s.push(x)}i=o,t=0,n="",e=s}return fr(this.element,e,this.preStyleProps,this.postStyleProps,i,t,n,!0)}};function Xo(r,e=3){let t=Math.pow(10,e-1);return Math.round(r*t)/t}function rc(r,e){let t=new Map,i;return r.forEach(n=>{if(n==="*"){i??=e.keys();for(let s of i)t.set(s,It)}else for(let[s,o]of n)t.set(s,o)}),t}function Jo(r,e,t,i,n,s,o,a,l,c,m,h,x){return{type:0,element:r,triggerName:e,isRemovalTransition:n,fromState:t,fromStyles:s,toState:i,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:m,totalTime:h,errors:x}}var Jn={},rn=class{_triggerName;ast;_stateStyles;constructor(e,t,i){this._triggerName=e,this.ast=t,this._stateStyles=i}match(e,t,i,n){return sc(this.ast.matchers,e,t,i,n)}buildStyles(e,t,i){let n=this._stateStyles.get("*");return e!==void 0&&(n=this._stateStyles.get(e?.toString())||n),n?n.buildStyles(t,i):new Map}build(e,t,i,n,s,o,a,l,c,m){let h=[],x=this.ast.options&&this.ast.options.params||Jn,S=a&&a.params||Jn,b=this.buildStyles(i,S,h),k=l&&l.params||Jn,M=this.buildStyles(n,k,h),z=new Set,V=new Map,H=new Map,K=n==="void",Qt={params:ca(k,x),delay:this.ast.options?.delay},Ot=m?[]:la(e,t,this.ast.animation,s,o,b,M,Qt,c,h),lt=0;return Ot.forEach(ht=>{lt=Math.max(ht.duration+ht.delay,lt)}),h.length?Jo(t,this._triggerName,i,n,K,b,M,[],[],V,H,lt,h):(Ot.forEach(ht=>{let pe=ht.element,Ae=gt(V,pe,new Set);ht.preStyleProps.forEach(ue=>Ae.add(ue));let Br=gt(H,pe,new Set);ht.postStyleProps.forEach(ue=>Br.add(ue)),pe!==t&&z.add(pe)}),Jo(t,this._triggerName,i,n,K,b,M,Ot,[...z.values()],V,H,lt))}};function sc(r,e,t,i,n){return r.some(s=>s(e,t,i,n))}function ca(r,e){let t=Et({},e);return Object.entries(r).forEach(([i,n])=>{n!=null&&(t[i]=n)}),t}var lr=class{styles;defaultParams;normalizer;constructor(e,t,i){this.styles=e,this.defaultParams=t,this.normalizer=i}buildStyles(e,t){let i=new Map,n=ca(e,this.defaultParams);return this.styles.styles.forEach(s=>{typeof s!="string"&&s.forEach((o,a)=>{o&&(o=Ke(o,n,t));let l=this.normalizer.normalizePropertyName(a,t);o=this.normalizer.normalizeStyleValue(a,l,o,t),i.set(a,o)})}),i}};function oc(r,e,t){return new cr(r,e,t)}var cr=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(e,t,i){this.name=e,this.ast=t,this._normalizer=i,t.states.forEach(n=>{let s=n.options&&n.options.params||{};this.states.set(n.name,new lr(n.style,s,i))}),ta(this.states,"true","1"),ta(this.states,"false","0"),t.transitions.forEach(n=>{this.transitionFactories.push(new rn(e,n,this.states))}),this.fallbackTransition=ac(e,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,i,n){return this.transitionFactories.find(o=>o.match(e,t,i,n))||null}matchStyles(e,t,i){return this.fallbackTransition.buildStyles(e,t,i)}};function ac(r,e,t){let i=[(o,a)=>!0],n={type:P.Sequence,steps:[],options:null},s={type:P.Transition,animation:n,matchers:i,options:null,queryCount:0,depCount:0};return new rn(r,s,e)}function ta(r,e,t){r.has(e)?r.has(t)||r.set(t,r.get(e)):r.has(t)&&r.set(e,r.get(t))}var lc=new si,dr=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i}register(e,t){let i=[],n=[],s=aa(this._driver,t,i,n);if(i.length)throw Lo(i);this._animations.set(e,s)}_buildPlayer(e,t,i){let n=e.element,s=Un(this._normalizer,e.keyframes,t,i);return this._driver.animate(n,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,i={}){let n=[],s=this._animations.get(e),o,a=new Map;if(s?(o=la(this._driver,t,s,$n,qi,new Map,new Map,i,lc,n),o.forEach(m=>{let h=gt(a,m.element,new Map);m.postStyleProps.forEach(x=>h.set(x,null))})):(n.push(No()),o=[]),n.length)throw Fo(n);a.forEach((m,h)=>{m.forEach((x,S)=>{m.set(S,this._driver.computeStyle(h,S,It))})});let l=o.map(m=>{let h=a.get(m.element);return this._buildPlayer(m,new Map,h)}),c=Jt(l);return this._playersById.set(e,c),c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let i=this.players.indexOf(t);i>=0&&this.players.splice(i,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw Bo(e);return t}listen(e,t,i,n){let s=Hi(t,"","","");return Ki(this._getPlayer(e),i,s,n),()=>{}}command(e,t,i,n){if(i=="register"){this.register(e,n[0]);return}if(i=="create"){let o=n[0]||{};this.create(e,t,o);return}let s=this._getPlayer(e);switch(i){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(n[0]));break;case"destroy":this.destroy(e);break}}},ea="ng-animate-queued",cc=".ng-animate-queued",tr="ng-animate-disabled",dc=".ng-animate-disabled",mc="ng-star-inserted",hc=".ng-star-inserted",pc=[],da={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},uc={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},At="__ng_removed",oi=class{namespaceId;value;options;get params(){return this.options.params}constructor(e,t=""){this.namespaceId=t;let i=e&&e.hasOwnProperty("value"),n=i?e.value:e;if(this.value=_c(n),i){let s=e,{value:o}=s,a=Kr(s,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let i=this.options.params;Object.keys(t).forEach(n=>{i[n]==null&&(i[n]=t[n])})}}},ri="void",er=new oi(ri),mr=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(e,t,i){this.id=e,this.hostElement=t,this._engine=i,this._hostClassName="ng-tns-"+e,Mt(t,this._hostClassName)}listen(e,t,i,n){if(!this._triggers.has(t))throw zo(i,t);if(i==null||i.length==0)throw Vo(t);if(!gc(i))throw jo(i,t);let s=gt(this._elementListeners,e,[]),o={name:t,phase:i,callback:n};s.push(o);let a=gt(this._engine.statesByElement,e,new Map);return a.has(t)||(Mt(e,ei),Mt(e,ei+"-"+t),a.set(t,er)),()=>{this._engine.afterFlush(()=>{let l=s.indexOf(o);l>=0&&s.splice(l,1),this._triggers.has(t)||a.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw Ko(e);return t}trigger(e,t,i,n=!0){let s=this._getTrigger(t),o=new ai(this.id,t,e),a=this._engine.statesByElement.get(e);a||(Mt(e,ei),Mt(e,ei+"-"+t),this._engine.statesByElement.set(e,a=new Map));let l=a.get(t),c=new oi(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),a.set(t,c),l||(l=er),!(c.value===ri)&&l.value===c.value){if(!yc(l.params,c.params)){let k=[],M=s.matchStyles(l.value,l.params,k),z=s.matchStyles(c.value,c.params,k);k.length?this._engine.reportError(k):this._engine.afterFlush(()=>{me(e,M),Rt(e,z)})}return}let x=gt(this._engine.playersByElement,e,[]);x.forEach(k=>{k.namespaceId==this.id&&k.triggerName==t&&k.queued&&k.destroy()});let S=s.matchTransition(l.value,c.value,e,c.params),b=!1;if(!S){if(!n)return;S=s.fallbackTransition,b=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:S,fromState:l,toState:c,player:o,isFallbackTransition:b}),b||(Mt(e,ea),o.onStart(()=>{He(e,ea)})),o.onDone(()=>{let k=this.players.indexOf(o);k>=0&&this.players.splice(k,1);let M=this._engine.playersByElement.get(e);if(M){let z=M.indexOf(o);z>=0&&M.splice(z,1)}}),this.players.push(o),x.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,i)=>{this._elementListeners.set(i,t.filter(n=>n.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(i=>i.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let i=this._engine.driver.query(e,ii,!0);i.forEach(n=>{if(n[At])return;let s=this._engine.fetchNamespacesByElement(n);s.size?s.forEach(o=>o.triggerLeaveAnimation(n,t,!1,!0)):this.clearElementCache(n)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(n=>this.clearElementCache(n)))}triggerLeaveAnimation(e,t,i,n){let s=this._engine.statesByElement.get(e),o=new Map;if(s){let a=[];if(s.forEach((l,c)=>{if(o.set(c,l.value),this._triggers.has(c)){let m=this.trigger(e,c,ri,n);m&&a.push(m)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),i&&Jt(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),i=this._engine.statesByElement.get(e);if(t&&i){let n=new Set;t.forEach(s=>{let o=s.name;if(n.has(o))return;n.add(o);let l=this._triggers.get(o).fallbackTransition,c=i.get(o)||er,m=new oi(ri),h=new ai(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:l,fromState:c,toState:m,player:h,isFallbackTransition:!0})})}}removeNode(e,t){let i=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let n=!1;if(i.totalAnimations){let s=i.players.length?i.playersByQueriedElement.get(e):[];if(s&&s.length)n=!0;else{let o=e;for(;o=o.parentNode;)if(i.statesByElement.get(o)){n=!0;break}}}if(this.prepareLeaveAnimationListeners(e),n)i.markElementAsRemoved(this.id,e,!1,t);else{let s=e[At];(!s||s===da)&&(i.afterFlush(()=>this.clearElementCache(e)),i.destroyInnerAnimations(e),i._onRemovalComplete(e,t))}}insertNode(e,t){Mt(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(i=>{let n=i.player;if(n.destroyed)return;let s=i.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==i.triggerName){let l=Hi(s,i.triggerName,i.fromState.value,i.toState.value);l._data=e,Ki(i.player,a.phase,l,a.callback)}}),n.markedForDestroy?this._engine.afterFlush(()=>{n.destroy()}):t.push(i)}),this._queue=[],t.sort((i,n)=>{let s=i.transition.ast.depCount,o=n.transition.ast.depCount;return s==0||o==0?s-o:this._engine.driver.containsElement(i.element,n.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}},hr=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(e,t)=>{};_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,i){this.bodyNode=e,this.driver=t,this._normalizer=i}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(i=>{i.queued&&e.push(i)})}),e}createNamespace(e,t){let i=new mr(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(i,t):(this.newHostElements.set(t,i),this.collectEnterElement(t)),this._namespaceLookup[e]=i}_balanceNamespaceList(e,t){let i=this._namespaceList,n=this.namespacesByHostElement;if(i.length-1>=0){let o=!1,a=this.driver.getParentElement(t);for(;a;){let l=n.get(a);if(l){let c=i.indexOf(l);i.splice(c+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||i.unshift(e)}else i.push(e);return n.set(t,e),e}register(e,t){let i=this._namespaceLookup[e];return i||(i=this.createNamespace(e,t)),i}registerTrigger(e,t,i){let n=this._namespaceLookup[e];n&&n.register(t,i)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(e);this.namespacesByHostElement.delete(i.hostElement);let n=this._namespaceList.indexOf(i);n>=0&&this._namespaceList.splice(n,1),i.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,i=this.statesByElement.get(e);if(i){for(let n of i.values())if(n.namespaceId){let s=this._fetchNamespace(n.namespaceId);s&&t.add(s)}}return t}trigger(e,t,i,n){if(Zi(t)){let s=this._fetchNamespace(e);if(s)return s.trigger(t,i,n),!0}return!1}insertNode(e,t,i,n){if(!Zi(t))return;let s=t[At];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){let o=this._fetchNamespace(e);o&&o.insertNode(t,i)}n&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),Mt(e,tr)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),He(e,tr))}removeNode(e,t,i){if(Zi(t)){let n=e?this._fetchNamespace(e):null;n?n.removeNode(t,i):this.markElementAsRemoved(e,t,!1,i);let s=this.namespacesByHostElement.get(t);s&&s.id!==e&&s.removeNode(t,i)}else this._onRemovalComplete(t,i)}markElementAsRemoved(e,t,i,n,s){this.collectedLeaveElements.push(t),t[At]={namespaceId:e,setForRemoval:n,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,i,n,s){return Zi(t)?this._fetchNamespace(e).listen(t,i,n,s):()=>{}}_buildInstruction(e,t,i,n,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,i,n,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,ii,!0);t.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,Gi,!0),t.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return Jt(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[At];if(t&&t.setForRemoval){if(e[At]=da,t.namespaceId){this.destroyInnerAnimations(e);let i=this._fetchNamespace(t.namespaceId);i&&i.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(tr)&&this.markElementAsDisabled(e,!1),this.driver.query(e,dc,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,n)=>this._balanceNamespaceList(i,n)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let n=this.collectedEnterElements[i];Mt(n,mc)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{t=this._flushAnimations(i,e)}finally{for(let n=0;n<i.length;n++)i[n]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let n=this.collectedLeaveElements[i];this.processLeaveNode(n)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],t.length?Jt(t).onDone(()=>{i.forEach(n=>n())}):i.forEach(n=>n())}}reportError(e){throw Ho(e)}_flushAnimations(e,t){let i=new si,n=[],s=new Map,o=[],a=new Map,l=new Map,c=new Map,m=new Set;this.disabledNodes.forEach(_=>{m.add(_);let v=this.driver.query(_,cc,!0);for(let y=0;y<v.length;y++)m.add(v[y])});let h=this.bodyNode,x=Array.from(this.statesByElement.keys()),S=ra(x,this.collectedEnterElements),b=new Map,k=0;S.forEach((_,v)=>{let y=$n+k++;b.set(v,y),_.forEach(I=>Mt(I,y))});let M=[],z=new Set,V=new Set;for(let _=0;_<this.collectedLeaveElements.length;_++){let v=this.collectedLeaveElements[_],y=v[At];y&&y.setForRemoval&&(M.push(v),z.add(v),y.hasAnimation?this.driver.query(v,hc,!0).forEach(I=>z.add(I)):V.add(v))}let H=new Map,K=ra(x,Array.from(z));K.forEach((_,v)=>{let y=qi+k++;H.set(v,y),_.forEach(I=>Mt(I,y))}),e.push(()=>{S.forEach((_,v)=>{let y=b.get(v);_.forEach(I=>He(I,y))}),K.forEach((_,v)=>{let y=H.get(v);_.forEach(I=>He(I,y))}),M.forEach(_=>{this.processLeaveNode(_)})});let Qt=[],Ot=[];for(let _=this._namespaceList.length-1;_>=0;_--)this._namespaceList[_].drainQueuedTransitions(t).forEach(y=>{let I=y.player,W=y.element;if(Qt.push(I),this.collectedEnterElements.length){let rt=W[At];if(rt&&rt.setForMove){if(rt.previousTriggersValues&&rt.previousTriggersValues.has(y.triggerName)){let fe=rt.previousTriggersValues.get(y.triggerName),St=this.statesByElement.get(y.element);if(St&&St.has(y.triggerName)){let fi=St.get(y.triggerName);fi.value=fe,St.set(y.triggerName,fi)}}I.destroy();return}}let Lt=!h||!this.driver.containsElement(h,W),vt=H.get(W),te=b.get(W),L=this._buildInstruction(y,i,te,vt,Lt);if(L.errors&&L.errors.length){Ot.push(L);return}if(Lt){I.onStart(()=>me(W,L.fromStyles)),I.onDestroy(()=>Rt(W,L.toStyles)),n.push(I);return}if(y.isFallbackTransition){I.onStart(()=>me(W,L.fromStyles)),I.onDestroy(()=>Rt(W,L.toStyles)),n.push(I);return}let jr=[];L.timelines.forEach(rt=>{rt.stretchStartingKeyframe=!0,this.disabledNodes.has(rt.element)||jr.push(rt)}),L.timelines=jr,i.append(W,L.timelines);let vl={instruction:L,player:I,element:W};o.push(vl),L.queriedElements.forEach(rt=>gt(a,rt,[]).push(I)),L.preStyleProps.forEach((rt,fe)=>{if(rt.size){let St=l.get(fe);St||l.set(fe,St=new Set),rt.forEach((fi,yn)=>St.add(yn))}}),L.postStyleProps.forEach((rt,fe)=>{let St=c.get(fe);St||c.set(fe,St=new Set),rt.forEach((fi,yn)=>St.add(yn))})});if(Ot.length){let _=[];Ot.forEach(v=>{_.push(Uo(v.triggerName,v.errors))}),Qt.forEach(v=>v.destroy()),this.reportError(_)}let lt=new Map,ht=new Map;o.forEach(_=>{let v=_.element;i.has(v)&&(ht.set(v,v),this._beforeAnimationBuild(_.player.namespaceId,_.instruction,lt))}),n.forEach(_=>{let v=_.element;this._getPreviousPlayers(v,!1,_.namespaceId,_.triggerName,null).forEach(I=>{gt(lt,v,[]).push(I),I.destroy()})});let pe=M.filter(_=>sa(_,l,c)),Ae=new Map;na(Ae,this.driver,V,c,It).forEach(_=>{sa(_,l,c)&&pe.push(_)});let ue=new Map;S.forEach((_,v)=>{na(ue,this.driver,new Set(_),l,Je)}),pe.forEach(_=>{let v=Ae.get(_),y=ue.get(_);Ae.set(_,new Map([...v?.entries()??[],...y?.entries()??[]]))});let vn=[],zr=[],Vr={};o.forEach(_=>{let{element:v,player:y,instruction:I}=_;if(i.has(v)){if(m.has(v)){y.onDestroy(()=>Rt(v,I.toStyles)),y.disabled=!0,y.overrideTotalTime(I.totalTime),n.push(y);return}let W=Vr;if(ht.size>1){let vt=v,te=[];for(;vt=vt.parentNode;){let L=ht.get(vt);if(L){W=L;break}te.push(vt)}te.forEach(L=>ht.set(L,W))}let Lt=this._buildAnimation(y.namespaceId,I,lt,s,ue,Ae);if(y.setRealPlayer(Lt),W===Vr)vn.push(y);else{let vt=this.playersByElement.get(W);vt&&vt.length&&(y.parentPlayer=Jt(vt)),n.push(y)}}else me(v,I.fromStyles),y.onDestroy(()=>Rt(v,I.toStyles)),zr.push(y),m.has(v)&&n.push(y)}),zr.forEach(_=>{let v=s.get(_.element);if(v&&v.length){let y=Jt(v);_.setRealPlayer(y)}}),n.forEach(_=>{_.parentPlayer?_.syncPlayerEvents(_.parentPlayer):_.destroy()});for(let _=0;_<M.length;_++){let v=M[_],y=v[At];if(He(v,qi),y&&y.hasAnimation)continue;let I=[];if(a.size){let Lt=a.get(v);Lt&&Lt.length&&I.push(...Lt);let vt=this.driver.query(v,Gi,!0);for(let te=0;te<vt.length;te++){let L=a.get(vt[te]);L&&L.length&&I.push(...L)}}let W=I.filter(Lt=>!Lt.destroyed);W.length?bc(this,v,W):this.processLeaveNode(v)}return M.length=0,vn.forEach(_=>{this.players.push(_),_.onDone(()=>{_.destroy();let v=this.players.indexOf(_);this.players.splice(v,1)}),_.play()}),vn}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,i,n,s){let o=[];if(t){let a=this.playersByQueriedElement.get(e);a&&(o=a)}else{let a=this.playersByElement.get(e);if(a){let l=!s||s==ri;a.forEach(c=>{c.queued||!l&&c.triggerName!=n||o.push(c)})}}return(i||n)&&(o=o.filter(a=>!(i&&i!=a.namespaceId||n&&n!=a.triggerName))),o}_beforeAnimationBuild(e,t,i){let n=t.triggerName,s=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:n;for(let l of t.timelines){let c=l.element,m=c!==s,h=gt(i,c,[]);this._getPreviousPlayers(c,m,o,a,t.toState).forEach(S=>{let b=S.getRealPlayer();b.beforeDestroy&&b.beforeDestroy(),S.destroy(),h.push(S)})}me(s,t.fromStyles)}_buildAnimation(e,t,i,n,s,o){let a=t.triggerName,l=t.element,c=[],m=new Set,h=new Set,x=t.timelines.map(b=>{let k=b.element;m.add(k);let M=k[At];if(M&&M.removedBeforeQueried)return new Te(b.duration,b.delay);let z=k!==l,V=vc((i.get(k)||pc).map(lt=>lt.getRealPlayer())).filter(lt=>{let ht=lt;return ht.element?ht.element===k:!1}),H=s.get(k),K=o.get(k),Qt=Un(this._normalizer,b.keyframes,H,K),Ot=this._buildPlayer(b,Qt,V);if(b.subTimeline&&n&&h.add(k),z){let lt=new ai(e,a,k);lt.setRealPlayer(Ot),c.push(lt)}return Ot});c.forEach(b=>{gt(this.playersByQueriedElement,b.element,[]).push(b),b.onDone(()=>fc(this.playersByQueriedElement,b.element,b))}),m.forEach(b=>Mt(b,Yn));let S=Jt(x);return S.onDestroy(()=>{m.forEach(b=>He(b,Yn)),Rt(l,t.toStyles)}),h.forEach(b=>{gt(n,b,[]).push(S)}),S}_buildPlayer(e,t,i){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,i):new Te(e.duration,e.delay)}},ai=class{namespaceId;triggerName;element;_player=new Te;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(e,t,i){this.namespaceId=e,this.triggerName=t,this.element=i}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,i)=>{t.forEach(n=>Ki(e,i,void 0,n))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){gt(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function fc(r,e,t){let i=r.get(e);if(i){if(i.length){let n=i.indexOf(t);i.splice(n,1)}i.length==0&&r.delete(e)}return i}function _c(r){return r??null}function Zi(r){return r&&r.nodeType===1}function gc(r){return r=="start"||r=="done"}function ia(r,e){let t=r.style.display;return r.style.display=e??"none",t}function na(r,e,t,i,n){let s=[];t.forEach(l=>s.push(ia(l)));let o=[];i.forEach((l,c)=>{let m=new Map;l.forEach(h=>{let x=e.computeStyle(c,h,n);m.set(h,x),(!x||x.length==0)&&(c[At]=uc,o.push(c))}),r.set(c,m)});let a=0;return t.forEach(l=>ia(l,s[a++])),o}function ra(r,e){let t=new Map;if(r.forEach(a=>t.set(a,[])),e.length==0)return t;let i=1,n=new Set(e),s=new Map;function o(a){if(!a)return i;let l=s.get(a);if(l)return l;let c=a.parentNode;return t.has(c)?l=c:n.has(c)?l=i:l=o(c),s.set(a,l),l}return e.forEach(a=>{let l=o(a);l!==i&&t.get(l).push(a)}),t}function Mt(r,e){r.classList?.add(e)}function He(r,e){r.classList?.remove(e)}function bc(r,e,t){Jt(t).onDone(()=>r.processLeaveNode(e))}function vc(r){let e=[];return ma(r,e),e}function ma(r,e){for(let t=0;t<r.length;t++){let i=r[t];i instanceof Ai?ma(i.players,e):e.push(i)}}function yc(r,e){let t=Object.keys(r),i=Object.keys(e);if(t.length!=i.length)return!1;for(let n=0;n<t.length;n++){let s=t[n];if(!e.hasOwnProperty(s)||r[s]!==e[s])return!1}return!0}function sa(r,e,t){let i=t.get(r);if(!i)return!1;let n=e.get(r);return n?i.forEach(s=>n.add(s)):e.set(r,i),t.delete(r),!0}var Ue=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(e,t)=>{};constructor(e,t,i){this._driver=t,this._normalizer=i,this._transitionEngine=new hr(e.body,t,i),this._timelineEngine=new dr(e.body,t,i),this._transitionEngine.onRemovalComplete=(n,s)=>this.onRemovalComplete(n,s)}registerTrigger(e,t,i,n,s){let o=e+"-"+n,a=this._triggerCache[o];if(!a){let l=[],c=[],m=aa(this._driver,s,l,c);if(l.length)throw Oo(n,l);a=oc(n,m,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,n,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,i,n){this._transitionEngine.insertNode(e,t,i,n)}onRemove(e,t,i){this._transitionEngine.removeNode(e,t,i)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,i,n){if(i.charAt(0)=="@"){let[s,o]=qn(i),a=n;this._timelineEngine.command(s,t,o,a)}else this._transitionEngine.trigger(e,t,i,n)}listen(e,t,i,n,s){if(i.charAt(0)=="@"){let[o,a]=qn(i);return this._timelineEngine.listen(o,t,a,s)}return this._transitionEngine.listen(e,t,i,n,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function wc(r,e){let t=null,i=null;return Array.isArray(e)&&e.length?(t=ir(e[0]),e.length>1&&(i=ir(e[e.length-1]))):e instanceof Map&&(t=ir(e)),t||i?new kc(r,t,i):null}var kc=(()=>{class r{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(t,i,n){this._element=t,this._startStyles=i,this._endStyles=n;let s=r.initialStylesByElement.get(t);s||r.initialStylesByElement.set(t,s=new Map),this._initialStyles=s}start(){this._state<1&&(this._startStyles&&Rt(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Rt(this._element,this._initialStyles),this._endStyles&&(Rt(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(r.initialStylesByElement.delete(this._element),this._startStyles&&(me(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(me(this._element,this._endStyles),this._endStyles=null),Rt(this._element,this._initialStyles),this._state=3)}}return r})();function ir(r){let e=null;return r.forEach((t,i)=>{xc(i)&&(e=e||new Map,e.set(i,t))}),e}function xc(r){return r==="display"||r==="position"}var sn=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(e,t,i,n){this.element=e,this.keyframes=t,this.options=i,this._specialStyles=n,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let e=this.keyframes,t=this._triggerWebAnimation(this.element,e,this.options);if(!t)return this._onFinish(),null;this.domPlayer=t,this._finalKeyframe=e.length?e[e.length-1]:new Map;let i=()=>this._onFinish();return t.addEventListener("finish",i),this.onDestroy(()=>{t.removeEventListener("finish",i)}),t}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(i=>{t.push(Object.fromEntries(i))}),t}_triggerWebAnimation(e,t,i){let n=this._convertKeyframesToObject(t);try{return e.animate(n,i)}catch{return null}}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){let e=this._buildPlayer();e&&(this.hasStarted()||(this._onStartFns.forEach(t=>t()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),e.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=e*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,n)=>{n!=="offset"&&e.set(n,this._finished?i:Wi(this.element,n))}),this.currentSnapshot=e}triggerCallback(e){let t=e==="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},on=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}containsElement(e,t){return Gn(e,t)}getParentElement(e){return Ui(e)}query(e,t,i){return Qn(e,t,i)}computeStyle(e,t,i){return Wi(e,t)}animate(e,t,i,n,s,o=[]){let a=n==0?"both":"forwards",l={duration:i,delay:n,fill:a};s&&(l.easing=s);let c=new Map,m=o.filter(S=>S instanceof sn);Wo(i,n)&&m.forEach(S=>{S.currentSnapshot.forEach((b,k)=>c.set(k,b))});let h=Go(t).map(S=>new Map(S));h=$o(e,h,c);let x=wc(e,h);return new sn(e,h,l,x)}};var Xi="@",ha="@.disabled",an=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(e,t,i,n){this.namespaceId=e,this.delegate=t,this.engine=i,this._onDestroy=n}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,i,n=!0){this.delegate.insertBefore(e,t,i),this.engine.onInsert(this.namespaceId,t,e,n)}removeChild(e,t,i,n){if(n){this.delegate.removeChild(e,t,i,n);return}this.parentNode(t)&&this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,n){this.delegate.setAttribute(e,t,i,n)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,n){this.delegate.setStyle(e,t,i,n)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){t.charAt(0)==Xi&&t==ha?this.disableAnimations(e,!!i):this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i,n){return this.delegate.listen(e,t,i,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}},pr=class extends an{factory;constructor(e,t,i,n,s){super(t,i,n,s),this.factory=e,this.namespaceId=t}setProperty(e,t,i){t.charAt(0)==Xi?t.charAt(1)=="."&&t==ha?(i=i===void 0?!0:!!i,this.disableAnimations(e,i)):this.engine.process(this.namespaceId,e,t.slice(1),i):this.delegate.setProperty(e,t,i)}listen(e,t,i,n){if(t.charAt(0)==Xi){let s=Sc(e),o=t.slice(1),a="";return o.charAt(0)!=Xi&&([o,a]=Ec(o)),this.engine.listen(this.namespaceId,s,o,a,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,i,l)})}return this.delegate.listen(e,t,i,n)}};function Sc(r){switch(r){case"body":return document.body;case"document":return document;case"window":return window;default:return r}}function Ec(r){let e=r.indexOf("."),t=r.substring(0,e),i=r.slice(e+1);return[t,i]}var ln=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(e,t,i){this.delegate=e,this.engine=t,this._zone=i,t.onRemovalComplete=(n,s)=>{s?.removeChild(null,n)}}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let c=this._rendererCache,m=c.get(n);if(!m){let h=()=>c.delete(n);m=new an("",n,this.engine,h),c.set(n,m)}return m}let s=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);let a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(s,o,e,c.name,c)};return t.data.animation.forEach(a),new pr(this,o,n,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,i){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(i));return}let n=this._animationCallbacksBuffer;n.length==0&&queueMicrotask(()=>{this._zone.run(()=>{n.forEach(s=>{let[o,a]=s;o(a)}),this._animationCallbacksBuffer=[]})}),n.push([t,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(e){this.engine.flush(),this.delegate.componentReplaced?.(e)}};var Tc=(()=>{class r extends Ue{constructor(t,i,n){super(t,i,n)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||r)(be(pt),be(Ie),be(Re))};static \u0275prov=st({token:r,factory:r.\u0275fac})}return r})();function Dc(){return new Ji}function Mc(){return new ln(d(Ss),d(Ue),d(et))}var pa=[{provide:Re,useFactory:Dc},{provide:Ue,useClass:Tc},{provide:We,useFactory:Mc}],yh=[{provide:Ie,useClass:ur},{provide:xn,useValue:"NoopAnimations"},...pa],Pc=[{provide:Ie,useFactory:()=>new on},{provide:xn,useFactory:()=>"BrowserAnimations"},...pa];function ua(){return Jr("NgEagerAnimations"),[...Pc]}var _r="Service workers are disabled or not supported by this browser",qe=class{serviceWorker;worker;registration;events;constructor(e,t){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=new _e(i=>i.error(new D(5601,!1)));else{let i=null,n=new C;this.worker=new _e(c=>(i!==null&&c.next(i),n.subscribe(m=>c.next(m))));let s=()=>{let{controller:c}=e;c!==null&&(i=c,n.next(i))};e.addEventListener("controllerchange",s),s(),this.registration=this.worker.pipe(ge(()=>e.getRegistration().then(c=>{if(!c)throw new D(5601,!1);return c})));let o=new C;this.events=o.asObservable();let a=c=>{let{data:m}=c;m?.type&&o.next(m)};e.addEventListener("message",a),t?.get(Tn,null,{optional:!0})?.onDestroy(()=>{e.removeEventListener("controllerchange",s),e.removeEventListener("message",a)})}}postMessage(e,t){return new Promise(i=>{this.worker.pipe(Nt(1)).subscribe(n=>{n.postMessage(Et({action:e},t)),i()})})}postMessageWithOperation(e,t,i){let n=this.waitForOperationCompleted(i),s=this.postMessage(e,t);return Promise.all([s,n]).then(([,o])=>o)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let t;return typeof e=="string"?t=i=>i.type===e:t=i=>e.includes(i.type),this.events.pipe(re(t))}nextEventOfType(e){return this.eventsOfType(e).pipe(Nt(1))}waitForOperationCompleted(e){return new Promise((t,i)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(re(n=>n.nonce===e),Nt(1),Ct(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:t,error:i})})}get isEnabled(){return!!this.serviceWorker}},Ic=(()=>{class r{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new C;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=ne,this.notificationClicks=ne,this.notificationCloses=ne,this.pushSubscriptionChanges=ne,this.subscription=ne;return}this.messages=this.sw.eventsOfType("PUSH").pipe(Ct(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(Ct(n=>n.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(Ct(n=>n.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(Ct(n=>n.data)),this.pushManager=this.sw.registration.pipe(Ct(n=>n.pushManager));let i=this.pushManager.pipe(ge(n=>n.getSubscription()));this.subscription=new _e(n=>{let s=i.subscribe(n),o=this.subscriptionChanges.subscribe(n);return()=>{s.unsubscribe(),o.unsubscribe()}})}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(_r));let i={userVisibleOnly:!0},n=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(n.length));for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return i.applicationServerKey=s,new Promise((o,a)=>{this.pushManager.pipe(ge(l=>l.subscribe(i)),Nt(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),o(l)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(_r));let t=i=>{if(i===null)throw new D(5602,!1);return i.unsubscribe().then(n=>{if(!n)throw new D(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((i,n)=>{this.subscription.pipe(Nt(1),ge(t)).subscribe({next:i,error:n})})}decodeBase64(t){return atob(t)}static \u0275fac=function(i){return new(i||r)(be(qe))};static \u0275prov=st({token:r,factory:r.\u0275fac})}return r})(),gr=(()=>{class r{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=ne,this.unrecoverable=ne;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(_r));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let t=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new D(5601,!1));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static \u0275fac=function(i){return new(i||r)(be(qe))};static \u0275prov=st({token:r,factory:r.\u0275fac})}return r})(),_a=new tt("");function Rc(){let r=d(li);if(!("serviceWorker"in navigator&&r.enabled!==!1))return;let e=d(_a),t=d(et),i=d(Tn);t.runOutsideAngular(()=>{let n=navigator.serviceWorker,s=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",s),i.onDestroy(()=>{n.removeEventListener("controllerchange",s)})}),t.runOutsideAngular(()=>{let n,{registrationStrategy:s}=r;if(typeof s=="function")n=new Promise(o=>s().subscribe(()=>o()));else{let[o,...a]=(s||"registerWhenStable:30000").split(":");switch(o){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=fa(+a[0]||0);break;case"registerWhenStable":n=Promise.race([i.whenStable(),fa(+a[0])]);break;default:throw new D(5600,!1)}}n.then(()=>{i.destroyed||navigator.serviceWorker.register(e,{scope:r.scope,updateViaCache:r.updateViaCache,type:r.type}).catch(o=>console.error(Wr(5604,!1)))})})}function fa(r){return new Promise(e=>setTimeout(e,r))}function Ac(){let r=d(li),e=d($),t=!0;return new qe(t&&r.enabled!==!1?navigator.serviceWorker:void 0,e)}var li=class{enabled;updateViaCache;type;scope;registrationStrategy};function ga(r,e={}){return $r([Ic,gr,{provide:_a,useValue:r},{provide:li,useValue:e},{provide:qe,useFactory:Ac},es(Rc)])}function yr(r){let e=r.cloneNode(!0),t=e.querySelectorAll("[id]"),i=r.nodeName.toLowerCase();e.removeAttribute("id");for(let n=0;n<t.length;n++)t[n].removeAttribute("id");return i==="canvas"?ya(r,e):(i==="input"||i==="select"||i==="textarea")&&va(r,e),ba("canvas",r,e,ya),ba("input, textarea, select",r,e,va),e}function ba(r,e,t,i){let n=e.querySelectorAll(r);if(n.length){let s=t.querySelectorAll(r);for(let o=0;o<n.length;o++)i(n[o],s[o])}}var Oc=0;function va(r,e){e.type!=="file"&&(e.value=r.value),e.type==="radio"&&e.name&&(e.name=`mat-clone-${e.name}-${Oc++}`)}function ya(r,e){let t=e.getContext("2d");if(t)try{t.drawImage(r,0,0)}catch{}}function Tr(r){let e=r.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height,x:e.x,y:e.y}}function wr(r,e,t){let{top:i,bottom:n,left:s,right:o}=r;return t>=i&&t<=n&&e>=s&&e<=o}function Lc(r,e){let t=e.left<r.left,i=e.left+e.width>r.right,n=e.top<r.top,s=e.top+e.height>r.bottom;return t||i||n||s}function mi(r,e,t){r.top+=e,r.bottom=r.top+r.height,r.left+=t,r.right=r.left+r.width}function wa(r,e,t,i){let{top:n,right:s,bottom:o,left:a,width:l,height:c}=r,m=l*e,h=c*e;return i>n-h&&i<o+h&&t>a-m&&t<s+m}var cn=class{_document;positions=new Map;constructor(e){this._document=e}clear(){this.positions.clear()}cache(e){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),e.forEach(t=>{this.positions.set(t,{scrollPosition:{top:t.scrollTop,left:t.scrollLeft},clientRect:Tr(t)})})}handleScroll(e){let t=Ye(e),i=this.positions.get(t);if(!i)return null;let n=i.scrollPosition,s,o;if(t===this._document){let c=this.getViewportScrollPosition();s=c.top,o=c.left}else s=t.scrollTop,o=t.scrollLeft;let a=n.top-s,l=n.left-o;return this.positions.forEach((c,m)=>{c.clientRect&&t!==m&&t.contains(m)&&mi(c.clientRect,a,l)}),n.top=s,n.left=o,{top:a,left:l}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function Aa(r,e){let t=r.rootNodes;if(t.length===1&&t[0].nodeType===e.ELEMENT_NODE)return t[0];let i=e.createElement("div");return t.forEach(n=>i.appendChild(n)),i}function Dr(r,e,t){for(let i in e)if(e.hasOwnProperty(i)){let n=e[i];n?r.setProperty(i,n,t?.has(i)?"important":""):r.removeProperty(i)}return r}function Ge(r,e){let t=e?"":"none";Dr(r.style,{"touch-action":e?"":"none","-webkit-user-drag":e?"":"none","-webkit-tap-highlight-color":e?"":"transparent","user-select":t,"-ms-user-select":t,"-webkit-user-select":t,"-moz-user-select":t})}function ka(r,e,t){Dr(r.style,{position:e?"":"fixed",top:e?"":"0",opacity:e?"":"0",left:e?"":"-999em"},t)}function dn(r,e){return e&&e!="none"?r+" "+e:r}function xa(r,e){r.style.width=`${e.width}px`,r.style.height=`${e.height}px`,r.style.transform=hi(e.left,e.top)}function hi(r,e){return`translate3d(${Math.round(r)}px, ${Math.round(e)}px, 0)`}var ci={capture:!0},br={passive:!1,capture:!0},Nc=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(i,n){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return r})(),Mr=(()=>{class r{_ngZone=d(et);_document=d(pt);_styleLoader=d(Si);_renderer=d(We).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new C;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=Bt([]);_globalListeners;_draggingPredicate=t=>t.isDragging();_domNodesToDirectives=null;pointerMove=new C;pointerUp=new C;constructor(){}registerDropContainer(t){this._dropInstances.has(t)||this._dropInstances.add(t)}registerDragItem(t){this._dragInstances.add(t),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,br)})}removeDropContainer(t){this._dropInstances.delete(t)}removeDragItem(t){this._dragInstances.delete(t),this.stopDragging(t),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(t,i){if(!(this._activeDragInstances().indexOf(t)>-1)&&(this._styleLoader.load(Nc),this._activeDragInstances.update(n=>[...n,t]),this._activeDragInstances().length===1)){let n=i.type.startsWith("touch"),s=a=>this.pointerUp.next(a),o=[["scroll",a=>this._scroll.next(a),ci],["selectstart",this._preventDefaultWhileDragging,br]];n?o.push(["touchend",s,ci],["touchcancel",s,ci]):o.push(["mouseup",s,ci]),n||o.push(["mousemove",a=>this.pointerMove.next(a),br]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=o.map(([a,l,c])=>this._renderer.listen(this._document,a,l,c))})}}stopDragging(t){this._activeDragInstances.update(i=>{let n=i.indexOf(t);return n>-1?(i.splice(n,1),[...i]):i}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(t){return this._activeDragInstances().indexOf(t)>-1}scrolled(t){let i=[this._scroll];return t&&t!==this._document&&i.push(new _e(n=>this._ngZone.runOutsideAngular(()=>{let s=this._renderer.listen(t,"scroll",o=>{this._activeDragInstances().length&&n.next(o)},ci);return()=>{s()}}))),ie(...i)}registerDirectiveNode(t,i){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(t,i)}removeDirectiveNode(t){this._domNodesToDirectives?.delete(t)}getDragDirectiveForNode(t){return this._domNodesToDirectives?.get(t)||null}ngOnDestroy(){this._dragInstances.forEach(t=>this.removeDragItem(t)),this._dropInstances.forEach(t=>this.removeDropContainer(t)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=t=>{this._activeDragInstances().length>0&&t.preventDefault()};_persistentTouchmoveListener=t=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&t.preventDefault(),this.pointerMove.next(t))};_clearGlobalListeners(){this._globalListeners?.forEach(t=>t()),this._globalListeners=void 0}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Sa(r){let e=r.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(r)*e}function Fc(r){let e=getComputedStyle(r),t=vr(e,"transition-property"),i=t.find(a=>a==="transform"||a==="all");if(!i)return 0;let n=t.indexOf(i),s=vr(e,"transition-duration"),o=vr(e,"transition-delay");return Sa(s[n])+Sa(o[n])}function vr(r,e){return r.getPropertyValue(e).split(",").map(i=>i.trim())}var Bc=new Set(["position"]),kr=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(e,t,i,n,s,o,a,l,c,m){this._document=e,this._rootElement=t,this._direction=i,this._initialDomRect=n,this._previewTemplate=s,this._previewClass=o,this._pickupPositionOnPage=a,this._initialTransform=l,this._zIndex=c,this._renderer=m}attach(e){this._preview=this._createPreview(),e.appendChild(this._preview),Ea(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(e){this._preview.style.transform=e}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(e){this._preview.classList.add(e)}getTransitionDuration(){return Fc(this._preview)}addEventListener(e,t){return this._renderer.listen(this._preview,e,t)}_createPreview(){let e=this._previewTemplate,t=this._previewClass,i=e?e.template:null,n;if(i&&e){let s=e.matchSize?this._initialDomRect:null,o=e.viewContainer.createEmbeddedView(i,e.context);o.detectChanges(),n=Aa(o,this._document),this._previewEmbeddedView=o,e.matchSize?xa(n,s):n.style.transform=hi(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else n=yr(this._rootElement),xa(n,this._initialDomRect),this._initialTransform&&(n.style.transform=this._initialTransform);return Dr(n.style,{"pointer-events":"none",margin:Ea(n)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Bc),Ge(n,!1),n.classList.add("cdk-drag-preview"),n.setAttribute("popover","manual"),n.setAttribute("dir",this._direction),t&&(Array.isArray(t)?t.forEach(s=>n.classList.add(s)):n.classList.add(t)),n}};function Ea(r){return"showPopover"in r}var zc={passive:!0},Ca={passive:!1},Vc={passive:!1,capture:!0},jc=800,Ta="cdk-drag-placeholder",Da=new Set(["position"]);function Oa(r,e,t={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let i=r.get($e,null,{optional:!0})||r.get(We).createRenderer(null,null);return new xr(e,t,r.get(pt),r.get(et),r.get(Xe),r.get(Mr),i)}var xr=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=Bt(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new C;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=ee.EMPTY;_pointerUpSubscription=ee.EMPTY;_scrollSubscription=ee.EMPTY;_resizeSubscription=ee.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(e){e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions(),this._handles.forEach(t=>Ge(t,e)))}_disabled=!1;beforeStarted=new C;started=new C;released=new C;ended=new C;entered=new C;exited=new C;dropped=new C;moved=this._moveEvents;data;constrainPosition;constructor(e,t,i,n,s,o,a){this._config=t,this._document=i,this._ngZone=n,this._viewportRuler=s,this._dragDropRegistry=o,this._renderer=a,this.withRootElement(e).withParent(t.parentDragRef||null),this._parentPositions=new cn(i),o.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(e){this._handles=e.map(i=>Zt(i)),this._handles.forEach(i=>Ge(i,this.disabled)),this._toggleNativeDragInteractions();let t=new Set;return this._disabledHandles.forEach(i=>{this._handles.indexOf(i)>-1&&t.add(i)}),this._disabledHandles=t,this}withPreviewTemplate(e){return this._previewTemplate=e,this}withPlaceholderTemplate(e){return this._placeholderTemplate=e,this}withRootElement(e){let t=Zt(e);if(t!==this._rootElement){this._removeRootElementListeners();let i=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[i.listen(t,"mousedown",this._pointerDown,Ca),i.listen(t,"touchstart",this._pointerDown,zc),i.listen(t,"dragstart",this._nativeDragStart,Ca)]),this._initialTransform=void 0,this._rootElement=t}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(e){return this._boundaryElement=e?Zt(e):null,this._resizeSubscription.unsubscribe(),e&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(e){return this._parentDragRef=e,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&Lc(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let e=this._boundaryElement.getBoundingClientRect(),t=this._rootElement.getBoundingClientRect(),i=0,n=0;t.left<e.left?i=e.left-t.left:t.right>e.right&&(i=e.right-t.right),t.top<e.top?n=e.top-t.top:t.bottom>e.bottom&&(n=e.bottom-t.bottom);let s=this._activeTransform.x,o=this._activeTransform.y,a=s+i,l=o+n;this._rootElement.style.transform=hi(a,l),this._activeTransform={x:a,y:l},this._passiveTransform={x:a,y:l}}}disableHandle(e){!this._disabledHandles.has(e)&&this._handles.indexOf(e)>-1&&(this._disabledHandles.add(e),Ge(e,!0))}enableHandle(e){this._disabledHandles.has(e)&&(this._disabledHandles.delete(e),Ge(e,this.disabled))}withDirection(e){return this._direction=e,this}_withDropContainer(e){this._dropContainer=e}getFreeDragPosition(){let e=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:e.x,y:e.y}}setFreeDragPosition(e){return this._activeTransform={x:0,y:0},this._passiveTransform.x=e.x,this._passiveTransform.y=e.y,this._dropContainer||this._applyRootElementTransform(e.x,e.y),this}withPreviewContainer(e){return this._previewContainer=e,this}_sortFromLastPointerPosition(){let e=this._lastKnownPointerPosition;e&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(e),e)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=e=>{if(this.beforeStarted.next(),this._handles.length){let t=this._getTargetHandle(e);t&&!this._disabledHandles.has(t)&&!this.disabled&&this._initializeDragSequence(t,e)}else this.disabled||this._initializeDragSequence(this._rootElement,e)};_pointerMove=e=>{let t=this._getPointerPositionOnPage(e);if(!this._hasStartedDragging()){let n=Math.abs(t.x-this._pickupPositionOnPage.x),s=Math.abs(t.y-this._pickupPositionOnPage.y);if(n+s>=this._config.dragStartThreshold){let a=Date.now()>=this._dragStartTime+this._getDragStartDelay(e),l=this._dropContainer;if(!a){this._endDragSequence(e);return}(!l||!l.isDragging()&&!l.isReceiving())&&(e.cancelable&&e.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(e)))}return}e.cancelable&&e.preventDefault();let i=this._getConstrainedPointerPosition(t);if(this._hasMoved=!0,this._lastKnownPointerPosition=t,this._updatePointerDirectionDelta(i),this._dropContainer)this._updateActiveDropContainer(i,t);else{let n=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,s=this._activeTransform;s.x=i.x-n.x+this._passiveTransform.x,s.y=i.y-n.y+this._passiveTransform.y,this._applyRootElementTransform(s.x,s.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:i,event:e,distance:this._getDragDistance(i),delta:this._pointerDirectionDelta})})};_pointerUp=e=>{this._endDragSequence(e)};_endDragSequence(e){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:e}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(e),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let t=this._getPointerPositionOnPage(e);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(t),dropPoint:t,event:e})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(e){di(e)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let t=this._getShadowRoot(),i=this._dropContainer;if(t&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(t,"selectstart",Kc,Vc)}),i){let n=this._rootElement,s=n.parentNode,o=this._placeholder=this._createPlaceholderElement(),a=this._marker=this._marker||this._document.createComment("");s.insertBefore(a,n),this._initialTransform=n.style.transform||"",this._preview=new kr(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(s,t)),ka(n,!1,Da),this._document.body.appendChild(s.replaceChild(o,n)),this.started.next({source:this,event:e}),i.start(),this._initialContainer=i,this._initialIndex=i.getItemIndex(this)}else this.started.next({source:this,event:e}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(i?i.getScrollableParents():[])}_initializeDragSequence(e,t){this._parentDragRef&&t.stopPropagation();let i=this.isDragging(),n=di(t),s=!n&&t.button!==0,o=this._rootElement,a=Ye(t),l=!n&&this._lastTouchEventTime&&this._lastTouchEventTime+jc>Date.now(),c=n?ws(t):ys(t);if(a&&a.draggable&&t.type==="mousedown"&&t.preventDefault(),i||s||l||c)return;if(this._handles.length){let x=o.style;this._rootElementTapHighlight=x.webkitTapHighlightColor||"",x.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(x=>this._updateOnScroll(x)),this._boundaryElement&&(this._boundaryRect=Tr(this._boundaryElement));let m=this._previewTemplate;this._pickupPositionInElement=m&&m.template&&!m.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,e,t);let h=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(t);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:h.x,y:h.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,t)}_cleanupDragArtifacts(e){ka(this._rootElement,!0,Da),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let t=this._dropContainer,i=t.getItemIndex(this),n=this._getPointerPositionOnPage(e),s=this._getDragDistance(n),o=t._isOverContainer(n.x,n.y);this.ended.next({source:this,distance:s,dropPoint:n,event:e}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:t,previousContainer:this._initialContainer,isPointerOverContainer:o,distance:s,dropPoint:n,event:e}),t.drop(this,i,this._initialIndex,this._initialContainer,o,s,n,e),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:e,y:t},{x:i,y:n}){let s=this._initialContainer._getSiblingContainerFromPosition(this,e,t);!s&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(e,t)&&(s=this._initialContainer),s&&s!==this._dropContainer&&this._ngZone.run(()=>{let o=this._dropContainer.getItemIndex(this),a=this._dropContainer.getItemAtIndex(o+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(s,this._dropContainer,a),this._dropContainer=s,this._dropContainer.enter(this,e,t,s===this._initialContainer&&s.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:s,currentIndex:s.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(i,n),this._dropContainer._sortItem(this,e,t,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(e,t):this._applyPreviewTransform(e-this._pickupPositionInElement.x,t-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let e=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(e.left,e.top);let t=this._preview.getTransitionDuration();return t===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(i=>{let n=a=>{(!a||this._preview&&Ye(a)===this._preview.element&&a.propertyName==="transform")&&(o(),i(),clearTimeout(s))},s=setTimeout(n,t*1.5),o=this._preview.addEventListener("transitionend",n)}))}_createPlaceholderElement(){let e=this._placeholderTemplate,t=e?e.template:null,i;return t?(this._placeholderRef=e.viewContainer.createEmbeddedView(t,e.context),this._placeholderRef.detectChanges(),i=Aa(this._placeholderRef,this._document)):i=yr(this._rootElement),i.style.pointerEvents="none",i.classList.add(Ta),i}_getPointerPositionInElement(e,t,i){let n=t===this._rootElement?null:t,s=n?n.getBoundingClientRect():e,o=di(i)?i.targetTouches[0]:i,a=this._getViewportScrollPosition(),l=o.pageX-s.left-a.left,c=o.pageY-s.top-a.top;return{x:s.left-e.left+l,y:s.top-e.top+c}}_getPointerPositionOnPage(e){let t=this._getViewportScrollPosition(),i=di(e)?e.touches[0]||e.changedTouches[0]||{pageX:0,pageY:0}:e,n=i.pageX-t.left,s=i.pageY-t.top;if(this._ownerSVGElement){let o=this._ownerSVGElement.getScreenCTM();if(o){let a=this._ownerSVGElement.createSVGPoint();return a.x=n,a.y=s,a.matrixTransform(o.inverse())}}return{x:n,y:s}}_getConstrainedPointerPosition(e){let t=this._dropContainer?this._dropContainer.lockAxis:null,{x:i,y:n}=this.constrainPosition?this.constrainPosition(e,this,this._initialDomRect,this._pickupPositionInElement):e;if(this.lockAxis==="x"||t==="x"?n=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||t==="y")&&(i=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:s,y:o}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,a=this._boundaryRect,{width:l,height:c}=this._getPreviewRect(),m=a.top+o,h=a.bottom-(c-o),x=a.left+s,S=a.right-(l-s);i=Ma(i,x,S),n=Ma(n,m,h)}return{x:i,y:n}}_updatePointerDirectionDelta(e){let{x:t,y:i}=e,n=this._pointerDirectionDelta,s=this._pointerPositionAtLastDirectionChange,o=Math.abs(t-s.x),a=Math.abs(i-s.y);return o>this._config.pointerDirectionChangeThreshold&&(n.x=t>s.x?1:-1,s.x=t),a>this._config.pointerDirectionChangeThreshold&&(n.y=i>s.y?1:-1,s.y=i),n}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let e=this._handles.length>0||!this.isDragging();e!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=e,Ge(this._rootElement,e))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(e=>e()),this._rootElementCleanups=void 0}_applyRootElementTransform(e,t){let i=1/this.scale,n=hi(e*i,t*i),s=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=s.transform&&s.transform!="none"?s.transform:""),s.transform=dn(n,this._initialTransform)}_applyPreviewTransform(e,t){let i=this._previewTemplate?.template?void 0:this._initialTransform,n=hi(e,t);this._preview.setTransform(dn(n,i))}_getDragDistance(e){let t=this._pickupPositionOnPage;return t?{x:e.x-t.x,y:e.y-t.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:e,y:t}=this._passiveTransform;if(e===0&&t===0||this.isDragging()||!this._boundaryElement)return;let i=this._rootElement.getBoundingClientRect(),n=this._boundaryElement.getBoundingClientRect();if(n.width===0&&n.height===0||i.width===0&&i.height===0)return;let s=n.left-i.left,o=i.right-n.right,a=n.top-i.top,l=i.bottom-n.bottom;n.width>i.width?(s>0&&(e+=s),o>0&&(e-=o)):e=0,n.height>i.height?(a>0&&(t+=a),l>0&&(t-=l)):t=0,(e!==this._passiveTransform.x||t!==this._passiveTransform.y)&&this.setFreeDragPosition({y:t,x:e})}_getDragStartDelay(e){let t=this.dragStartDelay;return typeof t=="number"?t:di(e)?t.touch:t?t.mouse:0}_updateOnScroll(e){let t=this._parentPositions.handleScroll(e);if(t){let i=Ye(e);this._boundaryRect&&i!==this._boundaryElement&&i.contains(this._boundaryElement)&&mi(this._boundaryRect,t.top,t.left),this._pickupPositionOnPage.x+=t.left,this._pickupPositionOnPage.y+=t.top,this._dropContainer||(this._activeTransform.x-=t.left,this._activeTransform.y-=t.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=xi(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(e,t){let i=this._previewContainer||"global";if(i==="parent")return e;if(i==="global"){let n=this._document;return t||n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement||n.body}return Zt(i)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=e=>{if(this._handles.length){let t=this._getTargetHandle(e);t&&!this._disabledHandles.has(t)&&!this.disabled&&e.preventDefault()}else this.disabled||e.preventDefault()};_getTargetHandle(e){return this._handles.find(t=>e.target&&(e.target===t||t.contains(e.target)))}_conditionallyInsertAnchor(e,t,i){if(e===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(t===this._initialContainer&&t.hasAnchor){let n=this._anchor??=yr(this._placeholder);n.classList.remove(Ta),n.classList.add("cdk-drag-anchor"),n.style.transform="",i?i.before(n):Zt(t.element).appendChild(n)}}};function Ma(r,e,t){return Math.max(e,Math.min(t,r))}function di(r){return r.type[0]==="t"}function Kc(r){r.preventDefault()}function La(r,e,t){let i=Pa(e,r.length-1),n=Pa(t,r.length-1);if(i===n)return;let s=r[i],o=n<i?-1:1;for(let a=i;a!==n;a+=o)r[a]=r[a+o];r[n]=s}function Pa(r,e){return Math.max(0,Math.min(e,r))}var mn=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(e){this._dragDropRegistry=e}_previousSwap={drag:null,delta:0,overlaps:!1};start(e){this.withItems(e)}sort(e,t,i,n){let s=this._itemPositions,o=this._getItemIndexFromPointerPosition(e,t,i,n);if(o===-1&&s.length>0)return null;let a=this.orientation==="horizontal",l=s.findIndex(M=>M.drag===e),c=s[o],m=s[l].clientRect,h=c.clientRect,x=l>o?1:-1,S=this._getItemOffsetPx(m,h,x),b=this._getSiblingOffsetPx(l,s,x),k=s.slice();return La(s,l,o),s.forEach((M,z)=>{if(k[z]===M)return;let V=M.drag===e,H=V?S:b,K=V?e.getPlaceholderElement():M.drag.getRootElement();M.offset+=H;let Qt=Math.round(M.offset*(1/M.drag.scale));a?(K.style.transform=dn(`translate3d(${Qt}px, 0, 0)`,M.initialTransform),mi(M.clientRect,0,H)):(K.style.transform=dn(`translate3d(0, ${Qt}px, 0)`,M.initialTransform),mi(M.clientRect,H,0))}),this._previousSwap.overlaps=wr(h,t,i),this._previousSwap.drag=c.drag,this._previousSwap.delta=a?n.x:n.y,{previousIndex:l,currentIndex:o}}enter(e,t,i,n){let s=this._activeDraggables,o=s.indexOf(e),a=e.getPlaceholderElement();o>-1&&s.splice(o,1);let l=n==null||n<0?this._getItemIndexFromPointerPosition(e,t,i):n,c=s[l];if(c===e&&(c=s[l+1]),!c&&(l==null||l===-1||l<s.length-1)&&this._shouldEnterAsFirstChild(t,i)&&(c=s[0]),c&&!this._dragDropRegistry.isDragging(c)){let m=c.getRootElement();m.parentElement.insertBefore(a,m),s.splice(l,0,e)}else this._element.appendChild(a),s.push(e);a.style.transform="",this._cacheItemPositions()}withItems(e){this._activeDraggables=e.slice(),this._cacheItemPositions()}withSortPredicate(e){this._sortPredicate=e}reset(){this._activeDraggables?.forEach(e=>{let t=e.getRootElement();if(t){let i=this._itemPositions.find(n=>n.drag===e)?.initialTransform;t.style.transform=i||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(e){return this._getVisualItemPositions().findIndex(t=>t.drag===e)}getItemAtIndex(e){return this._getVisualItemPositions()[e]?.drag||null}updateOnScroll(e,t){this._itemPositions.forEach(({clientRect:i})=>{mi(i,e,t)}),this._itemPositions.forEach(({drag:i})=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}withElementContainer(e){this._element=e}_cacheItemPositions(){let e=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(t=>{let i=t.getVisibleElement();return{drag:t,offset:0,initialTransform:i.style.transform||"",clientRect:Tr(i)}}).sort((t,i)=>e?t.clientRect.left-i.clientRect.left:t.clientRect.top-i.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(e,t,i){let n=this.orientation==="horizontal",s=n?t.left-e.left:t.top-e.top;return i===-1&&(s+=n?t.width-e.width:t.height-e.height),s}_getSiblingOffsetPx(e,t,i){let n=this.orientation==="horizontal",s=t[e].clientRect,o=t[e+i*-1],a=s[n?"width":"height"]*i;if(o){let l=n?"left":"top",c=n?"right":"bottom";i===-1?a-=o.clientRect[l]-s[c]:a+=s[l]-o.clientRect[c]}return a}_shouldEnterAsFirstChild(e,t){if(!this._activeDraggables.length)return!1;let i=this._itemPositions,n=this.orientation==="horizontal";if(i[0].drag!==this._activeDraggables[0]){let o=i[i.length-1].clientRect;return n?e>=o.right:t>=o.bottom}else{let o=i[0].clientRect;return n?e<=o.left:t<=o.top}}_getItemIndexFromPointerPosition(e,t,i,n){let s=this.orientation==="horizontal",o=this._itemPositions.findIndex(({drag:a,clientRect:l})=>{if(a===e)return!1;if(n){let c=s?n.x:n.y;if(a===this._previousSwap.drag&&this._previousSwap.overlaps&&c===this._previousSwap.delta)return!1}return s?t>=Math.floor(l.left)&&t<Math.floor(l.right):i>=Math.floor(l.top)&&i<Math.floor(l.bottom)});return o===-1||!this._sortPredicate(o,e)?-1:o}},Sr=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(e,t){this._document=e,this._dragDropRegistry=t}start(e){let t=this._element.childNodes;this._relatedNodes=[];for(let i=0;i<t.length;i++){let n=t[i];this._relatedNodes.push([n,n.nextSibling])}this.withItems(e)}sort(e,t,i,n){let s=this._getItemIndexFromPointerPosition(e,t,i),o=this._previousSwap;if(s===-1||this._activeItems[s]===e)return null;let a=this._activeItems[s];if(o.drag===a&&o.overlaps&&o.deltaX===n.x&&o.deltaY===n.y)return null;let l=this.getItemIndex(e),c=e.getPlaceholderElement(),m=a.getRootElement();s>l?m.after(c):m.before(c),La(this._activeItems,l,s);let h=this._getRootNode().elementFromPoint(t,i);return o.deltaX=n.x,o.deltaY=n.y,o.drag=a,o.overlaps=m===h||m.contains(h),{previousIndex:l,currentIndex:s}}enter(e,t,i,n){let s=this._activeItems.indexOf(e);s>-1&&this._activeItems.splice(s,1);let o=n==null||n<0?this._getItemIndexFromPointerPosition(e,t,i):n;o===-1&&(o=this._getClosestItemIndexToPointer(e,t,i));let a=this._activeItems[o];a&&!this._dragDropRegistry.isDragging(a)?(this._activeItems.splice(o,0,e),a.getRootElement().before(e.getPlaceholderElement())):(this._activeItems.push(e),this._element.appendChild(e.getPlaceholderElement()))}withItems(e){this._activeItems=e.slice()}withSortPredicate(e){this._sortPredicate=e}reset(){let e=this._element,t=this._previousSwap;for(let i=this._relatedNodes.length-1;i>-1;i--){let[n,s]=this._relatedNodes[i];n.parentNode===e&&n.nextSibling!==s&&(s===null?e.appendChild(n):s.parentNode===e&&e.insertBefore(n,s))}this._relatedNodes=[],this._activeItems=[],t.drag=null,t.deltaX=t.deltaY=0,t.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(e){return this._activeItems.indexOf(e)}getItemAtIndex(e){return this._activeItems[e]||null}updateOnScroll(){this._activeItems.forEach(e=>{this._dragDropRegistry.isDragging(e)&&e._sortFromLastPointerPosition()})}withElementContainer(e){e!==this._element&&(this._element=e,this._rootNode=void 0)}_getItemIndexFromPointerPosition(e,t,i){let n=this._getRootNode().elementFromPoint(Math.floor(t),Math.floor(i)),s=n?this._activeItems.findIndex(o=>{let a=o.getRootElement();return n===a||a.contains(n)}):-1;return s===-1||!this._sortPredicate(s,e)?-1:s}_getRootNode(){return this._rootNode||(this._rootNode=xi(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(e,t,i){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let n=1/0,s=-1;for(let o=0;o<this._activeItems.length;o++){let a=this._activeItems[o];if(a!==e){let{x:l,y:c}=a.getRootElement().getBoundingClientRect(),m=Math.hypot(t-l,i-c);m<n&&(n=m,s=o)}}return s}},Ia=.05,Na=.05,Pt=(function(r){return r[r.NONE=0]="NONE",r[r.UP=1]="UP",r[r.DOWN=2]="DOWN",r})(Pt||{}),mt=(function(r){return r[r.NONE=0]="NONE",r[r.LEFT=1]="LEFT",r[r.RIGHT=2]="RIGHT",r})(mt||{});function Fa(r,e){return new Er(e,r.get(Mr),r.get(pt),r.get(et),r.get(Xe))}var Er=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new C;entered=new C;exited=new C;dropped=new C;sorted=new C;receivingStarted=new C;receivingStopped=new C;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=ee.EMPTY;_verticalScrollDirection=Pt.NONE;_horizontalScrollDirection=mt.NONE;_scrollNode;_stopScrollTimers=new C;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(e,t,i,n,s){this._dragDropRegistry=t,this._ngZone=n,this._viewportRuler=s;let o=this.element=Zt(e);this._document=i,this.withOrientation("vertical").withElementContainer(o),t.registerDropContainer(this),this._parentPositions=new cn(i)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(e,t,i,n){this._draggingStarted(),n==null&&this.sortingDisabled&&(n=this._draggables.indexOf(e)),this._sortStrategy.enter(e,t,i,n),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:e,container:this,currentIndex:this.getItemIndex(e)})}exit(e){this._reset(),this.exited.next({item:e,container:this})}drop(e,t,i,n,s,o,a,l={}){this._reset(),this.dropped.next({item:e,currentIndex:t,previousIndex:i,container:this,previousContainer:n,isPointerOverContainer:s,distance:o,dropPoint:a,event:l})}withItems(e){let t=this._draggables;return this._draggables=e,e.forEach(i=>i._withDropContainer(this)),this.isDragging()&&(t.filter(n=>n.isDragging()).every(n=>e.indexOf(n)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(e){return this._direction=e,this._sortStrategy instanceof mn&&(this._sortStrategy.direction=e),this}connectedTo(e){return this._siblings=e.slice(),this}withOrientation(e){if(e==="mixed")this._sortStrategy=new Sr(this._document,this._dragDropRegistry);else{let t=new mn(this._dragDropRegistry);t.direction=this._direction,t.orientation=e,this._sortStrategy=t}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((t,i)=>this.sortPredicate(t,i,this)),this}withScrollableParents(e){let t=this._container;return this._scrollableElements=e.indexOf(t)===-1?[t,...e]:e.slice(),this}withElementContainer(e){if(e===this._container)return this;let t=Zt(this.element),i=this._scrollableElements.indexOf(this._container),n=this._scrollableElements.indexOf(e);return i>-1&&this._scrollableElements.splice(i,1),n>-1&&this._scrollableElements.splice(n,1),this._sortStrategy&&this._sortStrategy.withElementContainer(e),this._cachedShadowRoot=null,this._scrollableElements.unshift(e),this._container=e,this}getScrollableParents(){return this._scrollableElements}getItemIndex(e){return this._isDragging?this._sortStrategy.getItemIndex(e):this._draggables.indexOf(e)}getItemAtIndex(e){return this._isDragging?this._sortStrategy.getItemAtIndex(e):this._draggables[e]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(e,t,i,n){if(this.sortingDisabled||!this._domRect||!wa(this._domRect,Ia,t,i))return;let s=this._sortStrategy.sort(e,t,i,n);s&&this.sorted.next({previousIndex:s.previousIndex,currentIndex:s.currentIndex,container:this,item:e})}_startScrollingIfNecessary(e,t){if(this.autoScrollDisabled)return;let i,n=Pt.NONE,s=mt.NONE;if(this._parentPositions.positions.forEach((o,a)=>{a===this._document||!o.clientRect||i||wa(o.clientRect,Ia,e,t)&&([n,s]=Hc(a,o.clientRect,this._direction,e,t),(n||s)&&(i=a))}),!n&&!s){let{width:o,height:a}=this._viewportRuler.getViewportSize(),l={width:o,height:a,top:0,right:o,bottom:a,left:0};n=Ba(l,t),s=za(l,e),i=window}i&&(n!==this._verticalScrollDirection||s!==this._horizontalScrollDirection||i!==this._scrollNode)&&(this._verticalScrollDirection=n,this._horizontalScrollDirection=s,this._scrollNode=i,(n||s)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let e=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=e.msScrollSnapType||e.scrollSnapType||"",e.scrollSnapType=e.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let e=this._container.style;e.scrollSnapType=e.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(t=>t._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),_i(0,Ur).pipe(J(this._stopScrollTimers)).subscribe(()=>{let e=this._scrollNode,t=this.autoScrollStep;this._verticalScrollDirection===Pt.UP?e.scrollBy(0,-t):this._verticalScrollDirection===Pt.DOWN&&e.scrollBy(0,t),this._horizontalScrollDirection===mt.LEFT?e.scrollBy(-t,0):this._horizontalScrollDirection===mt.RIGHT&&e.scrollBy(t,0)})};_isOverContainer(e,t){return this._domRect!=null&&wr(this._domRect,e,t)}_getSiblingContainerFromPosition(e,t,i){return this._siblings.find(n=>n._canReceive(e,t,i))}_canReceive(e,t,i){if(!this._domRect||!wr(this._domRect,t,i)||!this.enterPredicate(e,this))return!1;let n=this._getShadowRoot().elementFromPoint(t,i);return n?n===this._container||this._container.contains(n):!1}_startReceiving(e,t){let i=this._activeSiblings;!i.has(e)&&t.every(n=>this.enterPredicate(n,this)||this._draggables.indexOf(n)>-1)&&(i.add(e),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:e,receiver:this,items:t}))}_stopReceiving(e){this._activeSiblings.delete(e),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:e,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(e=>{if(this.isDragging()){let t=this._parentPositions.handleScroll(e);t&&this._sortStrategy.updateOnScroll(t.top,t.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let e=xi(this._container);this._cachedShadowRoot=e||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let e=this._sortStrategy.getActiveItemsSnapshot().filter(t=>t.isDragging());this._siblings.forEach(t=>t._startReceiving(this,e))}};function Ba(r,e){let{top:t,bottom:i,height:n}=r,s=n*Na;return e>=t-s&&e<=t+s?Pt.UP:e>=i-s&&e<=i+s?Pt.DOWN:Pt.NONE}function za(r,e){let{left:t,right:i,width:n}=r,s=n*Na;return e>=t-s&&e<=t+s?mt.LEFT:e>=i-s&&e<=i+s?mt.RIGHT:mt.NONE}function Hc(r,e,t,i,n){let s=Ba(e,n),o=za(e,i),a=Pt.NONE,l=mt.NONE;if(s){let c=r.scrollTop;s===Pt.UP?c>0&&(a=Pt.UP):r.scrollHeight-c>r.clientHeight&&(a=Pt.DOWN)}if(o){let c=r.scrollLeft;t==="rtl"?o===mt.RIGHT?c<0&&(l=mt.RIGHT):r.scrollWidth+c>r.clientWidth&&(l=mt.LEFT):o===mt.LEFT?c>0&&(l=mt.LEFT):r.scrollWidth-c>r.clientWidth&&(l=mt.RIGHT)}return[a,l]}var Uc=(()=>{class r{_injector=d($);constructor(){}createDrag(t,i){return Oa(this._injector,t,i)}createDropList(t){return Fa(this._injector,t)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Ra=new tt("CDK_DRAG_PARENT");var qc=new tt("CdkDragHandle");var Va=new tt("CDK_DRAG_CONFIG"),ja=new tt("CdkDropList"),Ka=(()=>{class r{element=d(it);dropContainer=d(ja,{optional:!0,skipSelf:!0});_ngZone=d(et);_viewContainerRef=d(ts);_dir=d(Ze,{optional:!0});_changeDetectorRef=d(Ut);_selfHandle=d(qc,{optional:!0,self:!0});_parentDrag=d(Ra,{optional:!0,skipSelf:!0});_dragDropRegistry=d(Mr);_destroyed=new C;_handles=new Hr([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(t){this._disabled=t,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new ot;released=new ot;ended=new ot;entered=new ot;exited=new ot;dropped=new ot;moved=new _e(t=>{let i=this._dragRef.moved.pipe(Ct(n=>({source:this,pointerPosition:n.pointerPosition,event:n.event,delta:n.delta,distance:n.distance}))).subscribe(t);return()=>{i.unsubscribe()}});_injector=d($);constructor(){let t=this.dropContainer,i=d(Va,{optional:!0});this._dragRef=Oa(this._injector,this.element,{dragStartThreshold:i&&i.dragStartThreshold!=null?i.dragStartThreshold:5,pointerDirectionChangeThreshold:i&&i.pointerDirectionChangeThreshold!=null?i.pointerDirectionChangeThreshold:5,zIndex:i?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),i&&this._assignDefaults(i),t&&(t.addItem(this),t._dropListRef.beforeStarted.pipe(J(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(t){this._dragRef.setFreeDragPosition(t)}ngAfterViewInit(){yt(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(t){let i=t.rootElementSelector,n=t.freeDragPosition;i&&!i.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,n&&!n.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(t){let i=this._handles.getValue();i.push(t),this._handles.next(i)}_removeHandle(t){let i=this._handles.getValue(),n=i.indexOf(t);n>-1&&(i.splice(n,1),this._handles.next(i))}_setPreviewTemplate(t){this._previewTemplate=t}_resetPreviewTemplate(t){t===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(t){this._placeholderTemplate=t}_resetPlaceholderTemplate(t){t===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let t=this.element.nativeElement,i=t;this.rootElementSelector&&(i=t.closest!==void 0?t.closest(this.rootElementSelector):t.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(i||t)}_getBoundaryElement(){let t=this.boundaryElement;return t?typeof t=="string"?this.element.nativeElement.closest(t):Zt(t):null}_syncInputs(t){t.beforeStarted.subscribe(()=>{if(!t.isDragging()){let i=this._dir,n=this.dragStartDelay,s=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,o=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.scale=this.scale,t.dragStartDelay=typeof n=="object"&&n?n:Le(n),t.constrainPosition=this.constrainPosition,t.previewClass=this.previewClass,t.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(s).withPreviewTemplate(o).withPreviewContainer(this.previewContainer||"global"),i&&t.withDirection(i.value)}}),t.beforeStarted.pipe(Nt(1)).subscribe(()=>{if(this._parentDrag){t.withParent(this._parentDrag._dragRef);return}let i=this.element.nativeElement.parentElement;for(;i;){let n=this._dragDropRegistry.getDragDirectiveForNode(i);if(n){t.withParent(n._dragRef);break}i=i.parentElement}})}_handleEvents(t){t.started.subscribe(i=>{this.started.emit({source:this,event:i.event}),this._changeDetectorRef.markForCheck()}),t.released.subscribe(i=>{this.released.emit({source:this,event:i.event})}),t.ended.subscribe(i=>{this.ended.emit({source:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),t.entered.subscribe(i=>{this.entered.emit({container:i.container.data,item:this,currentIndex:i.currentIndex})}),t.exited.subscribe(i=>{this.exited.emit({container:i.container.data,item:this})}),t.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,isPointerOverContainer:i.isPointerOverContainer,item:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event})})}_assignDefaults(t){let{lockAxis:i,dragStartDelay:n,constrainPosition:s,previewClass:o,boundaryElement:a,draggingDisabled:l,rootElementSelector:c,previewContainer:m}=t;this.disabled=l??!1,this.dragStartDelay=n||0,this.lockAxis=i||null,s&&(this.constrainPosition=s),o&&(this.previewClass=o),a&&(this.boundaryElement=a),c&&(this.rootElementSelector=c),m&&(this.previewContainer=m)}_setupHandlesListener(){this._handles.pipe(Qr(t=>{let i=t.map(n=>n.element);this._selfHandle&&this.rootElementSelector&&i.push(this.element),this._dragRef.withHandles(i)}),ge(t=>ie(...t.map(i=>i._stateChanges.pipe(Oe(i))))),J(this._destroyed)).subscribe(t=>{let i=this._dragRef,n=t.element.nativeElement;t.disabled?i.disableHandle(n):i.enableHandle(n)})}static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(i,n){i&2&&at("cdk-drag-disabled",n.disabled)("cdk-drag-dragging",n._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",Ee],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",ls]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[Ht([{provide:Ra,useExisting:r}]),kn]})}return r})(),Cr=new tt("CdkDropListGroup"),Ha=(()=>{class r{_items=new Set;disabled=!1;ngOnDestroy(){this._items.clear()}static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:[2,"cdkDropListGroupDisabled","disabled",Ee]},exportAs:["cdkDropListGroup"],features:[Ht([{provide:Cr,useExisting:r}])]})}return r})(),hn=(()=>{class r{element=d(it);_changeDetectorRef=d(Ut);_scrollDispatcher=d(Ci);_dir=d(Ze,{optional:!0});_group=d(Cr,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new C;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=d(Mi).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(t){this._dropListRef.disabled=this._disabled=t}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new ot;entered=new ot;exited=new ot;sorted=new ot;_unsortedItems=new Set;constructor(){let t=d(Va,{optional:!0}),i=d($);this._dropListRef=Fa(i,this.element),this._dropListRef.data=this,t&&this._assignDefaults(t),this._dropListRef.enterPredicate=(n,s)=>this.enterPredicate(n.data,s.data),this._dropListRef.sortPredicate=(n,s,o)=>this.sortPredicate(n,s.data,o.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),r._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(t){this._unsortedItems.add(t),t._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef))}removeItem(t){if(this._unsortedItems.delete(t),this._latestSortedRefs){let i=this._latestSortedRefs.indexOf(t._dragRef);i>-1&&(this._latestSortedRefs.splice(i,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((t,i)=>t._dragRef.getVisibleElement().compareDocumentPosition(i._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let t=r._dropLists.indexOf(this);t>-1&&r._dropLists.splice(t,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(t){this._dir&&this._dir.change.pipe(Oe(this._dir.value),J(this._destroyed)).subscribe(i=>t.withDirection(i)),t.beforeStarted.subscribe(()=>{let i=hs(this.connectedTo).map(n=>{if(typeof n=="string"){let s=r._dropLists.find(o=>o.id===n);return s}return n});if(this._group&&this._group._items.forEach(n=>{i.indexOf(n)===-1&&i.push(n)}),!this._scrollableParentsResolved){let n=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(s=>s.getElementRef().nativeElement);this._dropListRef.withScrollableParents(n),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let n=this.element.nativeElement.querySelector(this.elementContainerSelector);t.withElementContainer(n)}t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.sortingDisabled=this.sortingDisabled,t.autoScrollDisabled=this.autoScrollDisabled,t.autoScrollStep=Le(this.autoScrollStep,2),t.hasAnchor=this.hasAnchor,t.connectedTo(i.filter(n=>n&&n!==this).map(n=>n._dropListRef)).withOrientation(this.orientation)})}_handleEvents(t){t.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef)),this._changeDetectorRef.markForCheck()}),t.entered.subscribe(i=>{this.entered.emit({container:this,item:i.item.data,currentIndex:i.currentIndex})}),t.exited.subscribe(i=>{this.exited.emit({container:this,item:i.item.data}),this._changeDetectorRef.markForCheck()}),t.sorted.subscribe(i=>{this.sorted.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,container:this,item:i.item.data})}),t.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,item:i.item.data,isPointerOverContainer:i.isPointerOverContainer,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),ie(t.receivingStarted,t.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(t){let{lockAxis:i,draggingDisabled:n,sortingDisabled:s,listAutoScrollDisabled:o,listOrientation:a}=t;this.disabled=n??!1,this.sortingDisabled=s??!1,this.autoScrollDisabled=o??!1,this.orientation=a||"vertical",this.lockAxis=i||null}_syncItemsWithRef(t){this._latestSortedRefs=t,this._dropListRef.withItems(t)}static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(i,n){i&2&&(jt("id",n.id),at("cdk-drop-list-disabled",n.disabled)("cdk-drop-list-dragging",n._dropListRef.isDragging())("cdk-drop-list-receiving",n._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",Ee],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",Ee],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",Ee],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",Ee]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[Ht([{provide:Cr,useValue:void 0},{provide:ja,useExisting:r}])]})}return r})();var pn=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=$t({type:r});static \u0275inj=Wt({providers:[Uc],imports:[An]})}return r})();var qa=["*"],Gc=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Qc=["unscopedContent"],Wc=["text"],$c=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Yc=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Zc=new tt("ListOption"),Pr=(()=>{class r{_elementRef=d(it);constructor(){}static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return r})(),Xc=(()=>{class r{_elementRef=d(it);constructor(){}static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return r})(),Ir=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return r})(),Ga=(()=>{class r{_listOption=d(Zc,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,hostVars:4,hostBindings:function(i,n){i&2&&at("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return r})(),Jc=(()=>{class r extends Ga{static \u0275fac=(()=>{let t;return function(n){return(t||(t=ve(r)))(n||r)}})();static \u0275dir=A({type:r,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Vt]})}return r})(),Rr=(()=>{class r extends Ga{static \u0275fac=(()=>{let t;return function(n){return(t||(t=ve(r)))(n||r)}})();static \u0275dir=A({type:r,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Vt]})}return r})(),td=new tt("MAT_LIST_CONFIG"),pi=(()=>{class r{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Dt(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Dt(t))}_disabled=Bt(!1);_defaultOptions=d(td,{optional:!0});static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,hostVars:1,hostBindings:function(i,n){i&2&&jt("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return r})(),ed=(()=>{class r{_elementRef=d(it);_ngZone=d(et);_listBase=d(pi,{optional:!0});_platform=d(qt);_hostElement;_isButtonElement;_noopAnimations=Ce();_avatars;_icons;set lines(t){this._explicitLines=Le(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Dt(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Dt(t))}_disabled=Bt(!1);_subscriptions=new ee;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(Si).load(Ls);let t=d(Os,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new As(this,this._ngZone,this._hostElement,this._platform,d($)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ie(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let s=this._titles.length===0&&i===1;n.classList.toggle("mdc-list-item__primary-text",s),n.classList.toggle("mdc-list-item__secondary-text",!s)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,contentQueries:function(i,n,s){if(i&1&&ke(s,Jc,4)(s,Rr,4),i&2){let o;Z(o=X())&&(n._avatars=o),Z(o=X())&&(n._icons=o)}},hostVars:4,hostBindings:function(i,n){i&2&&(jt("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),at("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return r})();var Qa=(()=>{class r extends pi{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=ve(r)))(n||r)}})();static \u0275cmp=R({type:r,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Ht([{provide:pi,useExisting:r}]),Vt],ngContentSelectors:qa,decls:1,vars:0,template:function(i,n){i&1&&(Kt(),Y(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`],encapsulation:2,changeDetection:0})}return r})();var Qe=(()=>{class r extends ed{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=Dt(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=ve(r)))(n||r)}})();static \u0275cmp=R({type:r,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,n,s){if(i&1&&ke(s,Xc,5)(s,Pr,5)(s,Ir,5),i&2){let o;Z(o=X())&&(n._lines=o),Z(o=X())&&(n._titles=o),Z(o=X())&&(n._meta=o)}},viewQuery:function(i,n){if(i&1&&xe(Qc,5)(Wc,5),i&2){let s;Z(s=X())&&(n._unscopedContent=s.first),Z(s=X())&&(n._itemText=s.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,n){i&2&&(jt("aria-current",n._getAriaCurrent()),at("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Vt],ngContentSelectors:Yc,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,n){i&1&&(Kt($c),Y(0),u(1,"span",1),Y(2,1),Y(3,2),u(4,"span",2,0),O("cdkObserveContent",function(){return n._updateItemLines(!0)}),Y(6,3),p()(),Y(7,4),Y(8,5),w(9,"div",3))},dependencies:[Cs],encapsulation:2,changeDetection:0})}return r})();var un=(()=>{class r extends pi{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=ve(r)))(n||r)}})();static \u0275cmp=R({type:r,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Ht([{provide:pi,useExisting:r}]),Vt],ngContentSelectors:qa,decls:1,vars:0,template:function(i,n){i&1&&(Kt(),Y(0))},styles:[Gc],encapsulation:2,changeDetection:0})}return r})();var Wa=["*"],nd=["content"],rd=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],sd=["mat-drawer","mat-drawer-content","*"];function od(r,e){if(r&1){let t=G();u(0,"div",1),O("click",function(){N(t);let n=T();return F(n._onBackdropClicked())}),p()}if(r&2){let t=T();at("mat-drawer-shown",t._isShowingBackdrop())}}function ad(r,e){r&1&&(u(0,"mat-drawer-content"),Y(1,2),p())}var ld=new tt("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),$a=new tt("MAT_DRAWER_CONTAINER"),ui=(()=>{class r extends Ti{_platform=d(qt);_changeDetectorRef=d(Ut);_container=d(Or);constructor(){let t=d(it),i=d(Ci),n=d(et);super(t,i,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:i}=this._container;return t!=null&&t.mode!=="over"&&t.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,n){i&2&&(Pn("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),at("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[Ht([{provide:Ti,useExisting:r}]),Vt],ngContentSelectors:Wa,decls:1,vars:0,template:function(i,n){i&1&&(Kt(),Y(0))},encapsulation:2,changeDetection:0})}return r})(),Ar=(()=>{class r{_elementRef=d(it);_focusTrapFactory=d(Ds);_focusMonitor=d(ks);_platform=d(qt);_ngZone=d(et);_renderer=d($e);_interactivityChecker=d(Ts);_doc=d(pt);_container=d($a,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=Dt(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=Dt(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(Dt(t))}_opened=Bt(!1);_openedVia=null;_animationStarted=new C;_animationEnd=new C;openedChange=new ot(!0);_openedStream=this.openedChange.pipe(re(t=>t),Ct(()=>{}));openedStart=this._animationStarted.pipe(re(()=>this.opened),wn(void 0));_closedStream=this.openedChange.pipe(re(t=>!t),Ct(()=>{}));closedStart=this._animationStarted.pipe(re(()=>!this.opened),wn(void 0));_destroyed=new C;onPositionChanged=new ot;_content;_modeChanged=new C;_injector=d($);_changeDetectorRef=d(Ut);constructor(){this.openedChange.pipe(J(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,i=this._elementRef.nativeElement;return[t.listen(i,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!_s(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(i,"transitionend",this._handleTransitionEvent),t.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,i){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{s(),o(),t.removeAttribute("tabindex")},s=this._renderer.listen(t,"blur",n),o=this._renderer.listen(t,"mousedown",n)})),t.focus(i)}_focusByCssSelector(t,i){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,i)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":yt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,i){t&&i&&(this._openedVia=i);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,i,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&i&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(s=>{this.openedChange.pipe(Nt(1)).subscribe(o=>s(o?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,n=i.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,i)),n.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=t=>{let i=this._elementRef.nativeElement;t.target===i&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["mat-drawer"]],viewQuery:function(i,n){if(i&1&&xe(nd,5),i&2){let s;Z(s=X())&&(n._content=s.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,n){i&2&&(jt("align",null)("tabIndex",n.mode!=="side"?"-1":null),Pn("visibility",!n._container&&!n.opened?"hidden":null),at("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Wa,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,n){i&1&&(Kt(),u(0,"div",1,0),Y(2),p())},dependencies:[Ti],encapsulation:2,changeDetection:0})}return r})(),Or=(()=>{class r{_dir=d(Ze,{optional:!0});_element=d(it);_ngZone=d(et);_changeDetectorRef=d(Ut);_animationDisabled=Ce();_transitionsEnabled=!1;_allDrawers;_drawers=new Zr;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=Dt(t)}_autosize=d(ld);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:Dt(t)}_backdropOverride=null;backdropClick=new ot;_start=null;_end=null;_left=null;_right=null;_destroyed=new C;_doCheckSubject=new C;_contentMargins={left:null,right:null};_contentMarginChanges=new C;get scrollable(){return this._userContent||this._content}_injector=d($);constructor(){let t=d(qt),i=d(Xe);this._dir?.change.pipe(J(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(J(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Oe(this._allDrawers),J(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Oe(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Gr(10),J(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,i-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();i+=n,t-=n}}t=t||null,i=i||null,(t!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:t,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(J(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(J(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(J(this._drawers.changes)).subscribe(()=>{yt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(J(ie(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let i=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?i.add(n):i.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(i,n,s){if(i&1&&ke(s,ui,5)(s,Ar,5),i&2){let o;Z(o=X())&&(n._content=o.first),Z(o=X())&&(n._allDrawers=o)}},viewQuery:function(i,n){if(i&1&&xe(ui,5),i&2){let s;Z(s=X())&&(n._userContent=s.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,n){i&2&&at("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Ht([{provide:$a,useExisting:r}])],ngContentSelectors:sd,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,n){i&1&&(Kt(rd),U(0,od,1,2,"div",0),Y(1),Y(2,1),U(3,ad,2,0,"mat-drawer-content")),i&2&&(q(n.hasBackdrop?0:-1),f(3),q(n._content?-1:3))},dependencies:[ui],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return r})();function cd(r,e){if(r&1){let t=G();u(0,"button",4),O("click",function(){let n=N(t).$implicit,s=T();return F(s.store.setTheme(n.theme))}),w(1,"mat-icon",2),E(2),p()}if(r&2){let t=e.$implicit;f(),g("svgIcon",t.icon),f(),Tt(" ",t.label," ")}}var Ya=(()=>{class r{store=d(_t);options=[{theme:{mode:"manual",variant:"light"},label:"Light",icon:"light_mode"},{theme:{mode:"manual",variant:"dark"},label:"Dark",icon:"dark_mode"},{theme:{mode:"auto",variant:"light"},label:"System",icon:"brightness_medium"}];currentOption=wt(()=>{let t=this.store.theme();return this.options.find(i=>t?.mode==="manual"?Ks(i.theme,t):i.theme.mode==="auto")});currentThemeTooltip=wt(()=>`Current theme: ${this.currentOption()?.label.toLowerCase()}`);static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["button-theme-switcher"]],decls:6,vars:3,consts:[["themeMenu","matMenu"],["mat-list-item","","data-e2e","navigation__button-theme","matTooltipPosition","right",3,"matTooltip","matMenuTriggerFor"],[3,"svgIcon"],["mat-menu-item","","data-e2e","theme-button"],["mat-menu-item","","data-e2e","theme-button",3,"click"]],template:function(i,n){if(i&1&&(u(0,"button",1),w(1,"mat-icon",2),p(),u(2,"mat-menu",null,0),ns(4,cd,3,2,"button",3,is),p()),i&2){let s,o=nt(3);g("matTooltip",n.currentThemeTooltip())("matMenuTriggerFor",o),f(),g("svgIcon",((s=n.currentOption())==null?null:s.icon)??""),f(3),rs(n.options)}},dependencies:[ae,kt,Qe,Vs,ce,le,de],styles:[`[_nghost-%COMP%]{position:relative;overflow:hidden;width:100%;height:48px;display:block}
/*# sourceMappingURL=button-theme-switcher-MMBZZVX6.css.map */`],changeDetection:0})}return r})();var dd="j",md="\u043E",Lr=[dd,md],hd="k",pd="\u043B",Nr=[hd,pd],ud="a",fd="\u0444",Za=[ud,fd],_d="ctrl+f",gd="ctrl+\u0430",Xa=[_d,gd],bd="g t",vd="\u043F \u0435",Ja=[bd,vd],yd="g a",wd="\u043F \u0444",tl=[yd,wd],kd="g f",xd="\u043F \u0430",el=[kd,xd],Sd="s",Ed="\u044B",il=[Sd,Ed],Cd="m f",Td="\u044C \u0430",nl=[Cd,Td],Dd="m a",Md="\u044C \u0444",rl=[Dd,Md],Pd="r t",Id="\u043A \u0435",Rd="f2",sl=[Pd,Id,Rd],Ad="d t",Od="\u0432 \u0435",ol=[Ad,Od],xt=(r,e,t)=>new Fi(r,i=>(setTimeout(()=>t(i),0),i),[],e);var he=(()=>{class r{transform(t){let i=Hs(t),n=typeof t=="string"?t:null,s=i?.state??n;if(i&&Fe(i))return"pause_circle";if(!s)return"timer-logo";switch(s){case Q.active:return"play_circle";case Q.finished:return"check_circle";case Q.dropped:return"delete";default:return Bi(s)}}static \u0275fac=function(i){return new(i||r)};static \u0275pipe=gi({name:"taskStateIcon",type:r,pure:!0})}return r})();var al=(()=>{class r{document=d(pt);setIcon(t){this.document.querySelector('link[rel="icon"]')?.setAttribute("href",t)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var ll=(()=>{class r{store=d(_t);import(t){let i=t.target;if(!(i instanceof HTMLInputElement))return;let n=i?.files?.[0];if(!n)return;let s=new FileReader;s.addEventListener("load",()=>{typeof s.result=="string"&&this.store.loadTasks(Xs(JSON.parse(s.result)))},{once:!0}),s.readAsText(n)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var cl=(()=>{class r{keys=d(De);router=d(Ne);importExport=d(ll);favicon=d(al);hotkeysService=d(De);destroyRef=d(Ft);store=d(_t);sanitizer=d(Pi);routedDialogs=d(ze);exportUrl=wt(()=>{let t=this.store.tasks(),i=URL.createObjectURL(new Blob([JSON.stringify(Zs(t),null,"  ")],{type:"application/json;charset=utf-8;"}));return this.sanitizer.bypassSecurityTrustResourceUrl(i)});taskState=Q;constructor(){this.hotkeysService.cheatSheetToggle.subscribe(()=>{this.routedDialogs.navigate(["hotkeys"])}),this.keys.add([xt(Ja,"Go to all tasks",()=>this.router.navigate(["all"],{queryParamsHandling:"merge"})),xt(tl,"Go to active tasks",()=>this.router.navigate([Q.active],{queryParamsHandling:"merge"})),xt(el,"Go to finished tasks",()=>this.router.navigate([Q.finished],{queryParamsHandling:"merge"}))]),zt(()=>{this.store.isAnyTaskActive()?this.favicon.setIcon("assets/favicon-active.svg"):this.favicon.setIcon("assets/favicon.svg")}),this.destroyRef.onDestroy(()=>{let t=this.exportUrl();t&&URL.revokeObjectURL(t.toString())})}import(t){this.importExport.import(t)}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["app-root"]],decls:32,vars:18,consts:[["rlaActive","routerLinkActive"],["rlaFinished","routerLinkActive"],["rlaDropped","routerLinkActive"],["importExportMenu","matMenu"],["mode","side",3,"opened"],[1,"drawer-container","list-centered-icons"],["mat-list-item","","routerLink","all","queryParamsHandling","merge","routerLinkActive","nav-link-active","matTooltip","All tasks",1,"link-all"],["src","assets/favicon.svg","alt","Timer"],[1,"states"],["mat-list-item","","routerLinkActive","","queryParamsHandling","merge","matTooltip","Active tasks","data-e2e","navigation__button-tasks-active",3,"activated","routerLink"],[3,"svgIcon"],["mat-list-item","","routerLinkActive","","queryParamsHandling","merge","matTooltip","Finished tasks","data-e2e","navigation__button-tasks-finished",3,"activated","routerLink"],["mat-list-item","","routerLinkActive","","queryParamsHandling","merge","matTooltip","Dropped tasks","data-e2e","navigation__button-tasks-dropped",3,"activated","routerLink"],["mat-list-item","","matTooltip","Import/Export","data-e2e","navigation__button-import-export",3,"matMenuTriggerFor"],["svgIcon","swap_vert"],["mat-menu-item","",1,"import-label"],["type","file","data-e2e","navigation__input-import",3,"change"],["mat-menu-item","","data-e2e","navigation__button-export","download","timer-data.json","target","_blank",3,"href"],["cdkDropListGroup",""]],template:function(i,n){if(i&1&&(u(0,"mat-drawer-container")(1,"mat-drawer",4)(2,"div",5)(3,"mat-nav-list")(4,"a",6),w(5,"img",7),p()(),u(6,"mat-nav-list",8)(7,"a",9,0),w(9,"mat-icon",10),B(10,"taskStateIcon"),p(),u(11,"a",11,1),w(13,"mat-icon",10),B(14,"taskStateIcon"),p(),u(15,"a",12,2),w(17,"mat-icon",10),B(18,"taskStateIcon"),p()(),u(19,"mat-action-list")(20,"button",13),w(21,"mat-icon",14),p(),u(22,"mat-menu",null,3)(24,"label",15)(25,"input",16),O("change",function(o){return n.import(o)}),p(),E(26," Import "),p(),u(27,"a",17),E(28,"Export"),p()(),w(29,"button-theme-switcher"),p()()(),u(30,"mat-drawer-content",18),w(31,"router-outlet"),p()()),i&2){let s=nt(8),o=nt(12),a=nt(16),l=nt(23);f(),g("opened",!0),f(6),g("activated",s.isActive)("routerLink",n.taskState.active),f(2),g("svgIcon",dt(10,12,n.taskState.active)),f(2),g("activated",o.isActive)("routerLink",n.taskState.finished),f(2),g("svgIcon",dt(14,14,n.taskState.finished)),f(2),g("activated",a.isActive)("routerLink",n.taskState.dropped),f(2),g("svgIcon",dt(18,16,n.taskState.dropped)),f(3),g("matMenuTriggerFor",l),f(7),g("href",n.exportUrl(),Xr)}},dependencies:[Or,Ar,ui,de,ce,le,un,Qe,Qa,kt,ae,pn,Ha,Xt,Li,Oi,Ya,he],styles:[`[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}.link-all[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px;vertical-align:middle}mat-drawer[_ngcontent-%COMP%]{border-right:1px solid var(--mat-menu-divider-color)}mat-drawer-container[_ngcontent-%COMP%]{flex:1}mat-drawer-content[_ngcontent-%COMP%]{display:flex}.drawer-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;padding-bottom:1rem;box-sizing:border-box;overflow-x:hidden}.states[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto}.import-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.import-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;opacity:0;z-index:-1}
/*# sourceMappingURL=app-2CR3CYWN.css.map */`],changeDetection:0})}return r})();var dl=(r,e)=>{let t=r.params.state;return t&&Us(t)||t==="all"?!0:d(Ne).navigate(["/active"])};var Ld=["*",[["mat-toolbar-row"]]],Nd=["*","mat-toolbar-row"],Fd=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return r})(),fn=(()=>{class r{_elementRef=d(it);_platform=d(qt);_document=d(pt);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["mat-toolbar"]],contentQueries:function(i,n,s){if(i&1&&ke(s,Fd,5),i&2){let o;Z(o=X())&&(n._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,n){i&2&&(ss(n.color?"mat-"+n.color:""),at("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Nd,decls:2,vars:0,template:function(i,n){i&1&&(Kt(Ld),Y(0),Y(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return r})();var ml=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=$t({type:r});static \u0275inj=Wt({imports:[Rn]})}return r})();var _n=(()=>{class r{transform(t){switch(t){case Q.active:return"Active";case Q.dropped:return"Dropped";case Q.finished:return"Finished";case"all":return"All";case void 0:return"\u{1F635}";default:return Bi(t)}}static \u0275fac=function(i){return new(i||r)};static \u0275pipe=gi({name:"taskState",type:r,pure:!0})}return r})();var zd=r=>["tasks",r,"rename"];function Vd(r,e){if(r&1){let t=G();u(0,"button",9),w(1,"mat-icon",6),B(2,"taskStateIcon"),E(3),B(4,"taskState"),p(),u(5,"a",10),E(6," Rename "),p(),u(7,"button",11),O("click",function(){N(t);let n=T(2);return F(n.deleteTask())}),E(8," Delete "),p()}if(r&2){let t=T(),i=nt(6);g("mat-menu-trigger-for",i),f(),g("svgIcon",dt(2,4,t.state)),f(2),Tt(" State: ",dt(4,6,t.state)," "),f(2),g("dialogLink",se(8,zd,t.id))}}function jd(r,e){if(r&1){let t=G();u(0,"button",2),O("click",function(n){return N(t),n.stopPropagation(),F(n.preventDefault())}),w(1,"mat-icon",3),p(),u(2,"mat-menu",null,0),ct(4,Vd,9,10,"ng-template",4),p(),u(5,"mat-menu",null,1)(7,"button",5),O("click",function(){N(t);let n=T();return F(n.changeTaskState(n.taskState.active))}),w(8,"mat-icon",6),B(9,"taskStateIcon"),E(10,"Change to active "),p(),u(11,"button",7),O("click",function(){N(t);let n=T();return F(n.changeTaskState(n.taskState.finished))}),w(12,"mat-icon",6),B(13,"taskStateIcon"),E(14,"Change to finished "),p(),u(15,"button",8),O("click",function(){N(t);let n=T();return F(n.changeTaskState(n.taskState.dropped))}),w(16,"mat-icon",6),B(17,"taskStateIcon"),E(18,"Change to dropped "),p()()}if(r&2){let t=e,i=nt(3),n=T();g("matMenuTriggerFor",i),f(7),g("disabled",t.state===n.taskState.active),f(),g("svgIcon",dt(9,7,n.taskState.active)),f(3),g("disabled",t.state===n.taskState.finished),f(),g("svgIcon",dt(13,9,n.taskState.finished)),f(3),g("disabled",t.state===n.taskState.dropped),f(),g("svgIcon",dt(17,11,n.taskState.dropped))}}var gn=(()=>{class r{store=d(_t);task=ut();taskState=Q;deleteTask(){let t=this.task();t&&this.store.deleteTask(t.id)}changeTaskState(t){let i=this.task();i&&this.store.updateTaskState(i.id,t)}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["button-task-actions"]],inputs:{task:[1,"task"]},decls:1,vars:1,consts:[["menu","matMenu"],["statuses","matMenu"],["type","button","mat-icon-button","","data-e2e","button-task-actions__trigger",3,"click","matMenuTriggerFor"],["svgIcon","more_vert"],["matMenuContent",""],["mat-menu-item","","type","button","data-e2e","button-task-actions__state-option-active",3,"click","disabled"],[3,"svgIcon"],["mat-menu-item","","type","button","data-e2e","button-task-actions__state-option-finished",3,"click","disabled"],["mat-menu-item","","type","button","data-e2e","button-task-actions__state-option-dropped",3,"click","disabled"],["mat-menu-item","","data-e2e","button-task-actions__selector-state",3,"mat-menu-trigger-for"],["mat-menu-item","","type","button","data-e2e","button-task-actions__button-rename",3,"dialogLink"],["mat-menu-item","","type","button","data-e2e","button-task-actions__button-delete",3,"click"]],template:function(i,n){if(i&1&&U(0,jd,19,13),i&2){let s;q((s=n.task())?0:-1,s)}},dependencies:[ce,de,Ni,le,oe,kt,Be,he,_n],styles:[`[_nghost-%COMP%]{display:inline-block;flex:0 0 auto}mat-select[_ngcontent-%COMP%]{width:140px}
/*# sourceMappingURL=button-task-actions-64Q6NT3L.css.map */`],changeDetection:0})}return r})();var bn=(()=>{class r{syncWidthTo=ut();elementRef=d(it);destroyRef=d(Ft);constructor(){yt({read:()=>{let t=this.syncWidthTo();if(!t)return;let i=new ResizeObserver(n=>{let s=n.at(0)?.target.parentElement?.clientWidth,o=n.at(0)?.contentRect.width;if(!s||!o)return;let a=s-o;this.elementRef.nativeElement.style.paddingRight=`${16+a}px`});i.observe(t.getElementRef().nativeElement),this.destroyRef.onDestroy(()=>i.disconnect())}})}static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["mat-toolbar"]],inputs:{syncWidthTo:[1,"syncWidthTo"]}})}return r})();var Kd=(r,e)=>["tasks",r,"sessions",e,"edit"],Hd=(r,e)=>["tasks",r,"sessions",e,"split"];function Ud(r,e){if(r&1){let t=G();u(0,"a",4),E(1," Edit "),p(),u(2,"a",5),E(3," Split "),p(),u(4,"button",6),O("click",function(){N(t);let n=T();return F(n.remove())}),E(5,"Delete"),p(),u(6,"a",7),E(7,"Skip everything after"),p(),u(8,"a",8),E(9,"Skip everything before"),p()}if(r&2){let t=T();g("dialogLink",Se(5,Kd,t.task().id,t.sessionIndex())),f(2),g("dialogLink",Se(8,Hd,t.task().id,t.sessionIndex()))("disabled",t.isSplitDisabled()),f(4),g("queryParams",t.skipAfterParams),f(2),g("queryParams",t.skipBeforeParams)}}var hl=(()=>{class r{store=d(_t);task=ut.required();session=ut.required();sessionIndex=wt(()=>this.task().sessions.indexOf(this.session()));isSplitDisabled=wt(()=>qs(this.session()));remove(){this.store.deleteSession(this.task().id,Qs(this.session()))}get skipBeforeParams(){return Bn({from:new Date(this.session().start)})}get skipAfterParams(){return Bn({to:new Date(this.session()?.end??new Date)})}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["button-session-actions"]],inputs:{task:[1,"task"],session:[1,"session"]},decls:5,vars:1,consts:[["menu","matMenu"],["mat-icon-button","",3,"matMenuTriggerFor"],["svgIcon","more_vert"],["matMenuContent",""],["mat-menu-item","","type","button","data-e2e","menu-session__button-edit",3,"dialogLink"],["mat-menu-item","","type","button","data-e2e","menu-session__button-split",3,"dialogLink","disabled"],["mat-menu-item","","type","button","data-e2e","menu-session__button-delete",3,"click"],["mat-menu-item","","type","button","routerLink",".","queryParamsHandling","merge","data-e2e","menu-session__button-skip-after",3,"queryParams"],["mat-menu-item","","type","button","routerLink",".","queryParamsHandling","merge","data-e2e","menu-session__button-skip-before",3,"queryParams"]],template:function(i,n){if(i&1&&(u(0,"button",1),w(1,"mat-icon",2),p(),u(2,"mat-menu",null,0),ct(4,Ud,10,11,"ng-template",3),p()),i&2){let s=nt(3);g("matMenuTriggerFor",s)}},dependencies:[ce,Ni,le,de,oe,kt,Xt,Be],styles:[`[_nghost-%COMP%]{display:inline-block}
/*# sourceMappingURL=button-session-actions-DFM6E35U.css.map */`],changeDetection:0})}return r})();var Gd=(r,e)=>[r,e];function Qd(r,e){r&1&&(u(0,"th",30),E(1,"Start"),p())}function Wd(r,e){if(r&1&&(u(0,"td",31),E(1),B(2,"date"),p()),r&2){let t=e.$implicit;f(),Tt(" ",Yt(2,1,t.start,"yyyy-MM-dd H:mm")," ")}}function $d(r,e){r&1&&(u(0,"td",32),E(1,"Total"),p())}function Yd(r,e){r&1&&(u(0,"th",33),E(1,"End"),p())}function Zd(r,e){if(r&1&&(u(0,"td",34),E(1),B(2,"date"),p()),r&2){let t=e.$implicit;f(),Tt(" ",Yt(2,1,t.end,"yyyy-MM-dd H:mm")," ")}}function Xd(r,e){r&1&&w(0,"td",35)}function Jd(r,e){r&1&&(u(0,"th",36),E(1,"Duration"),p())}function tm(r,e){if(r&1&&(u(0,"td",37),w(1,"duration",38),B(2,"map"),p()),r&2){let t=e.$implicit,i=T(2);f(),g("value",Yt(2,1,t,i.sessionDuration))}}function em(r,e){if(r&1&&(u(0,"td",39),w(1,"duration",38),B(2,"map"),p()),r&2){let t=T(),i=T();f(),g("value",Yt(2,1,t,i.taskDuration))}}function im(r,e){r&1&&w(0,"th",40)}function nm(r,e){if(r&1&&(u(0,"td",41),w(1,"button-session-actions",42),p()),r&2){let t=e.$implicit,i=T();f(),g("session",t)("task",i)}}function rm(r,e){r&1&&w(0,"td",43)}function sm(r,e){r&1&&w(0,"tr",44)}function om(r,e){if(r&1&&w(0,"tr",45),r&2){let t=e.$implicit,i=T();g("cdkDragData",Se(1,Gd,t,i.id))}}function am(r,e){r&1&&w(0,"tr",46)}function lm(r,e){if(r&1){let t=G();u(0,"button",47),O("click",function(){N(t);let n=T(),s=T();return F(s.start(n.id))}),w(1,"mat-icon",48),p()}}function cm(r,e){if(r&1){let t=G();u(0,"button",49),O("click",function(){N(t);let n=T(),s=T();return F(s.stop(n.id))}),w(1,"mat-icon",50),p()}}function dm(r,e){if(r&1&&(u(0,"mat-toolbar",1)(1,"button",2),w(2,"mat-icon",3),p(),u(3,"h2"),w(4,"mat-icon",4),B(5,"taskStateIcon"),u(6,"span",5),E(7),p()(),w(8,"button-task-actions",6),p(),u(9,"cdk-virtual-scroll-viewport",7,0)(11,"table",8),ye(12,9),ct(13,Qd,2,0,"th",10)(14,Wd,3,4,"td",11)(15,$d,2,0,"td",12),we(),ye(16,13),ct(17,Yd,2,0,"th",14)(18,Zd,3,4,"td",15)(19,Xd,1,0,"td",16),we(),ye(20,17),ct(21,Jd,2,0,"th",18)(22,tm,3,4,"td",19)(23,em,3,4,"td",20),we(),ye(24,21),ct(25,im,1,0,"th",22)(26,nm,2,2,"td",23)(27,rm,1,0,"td",24),we(),ct(28,sm,1,0,"tr",25)(29,om,1,4,"tr",26)(30,am,1,0,"tr",27),p()(),U(31,lm,2,0,"button",28),U(32,cm,2,0,"button",29)),r&2){let t=e,i=nt(10),n=T();g("syncWidthTo",i),f(4),g("svgIcon",dt(5,15,t)),f(3),yi(t.name),f(),g("task",t),f(),g("itemSize",52),f(2),g("dataSource",n.sortSessions(t.sessions))("trackBy",n.trackSession)("cdkDropListSortingDisabled",!0),f(17),g("matHeaderRowDef",n.displayedColumns)("matHeaderRowDefSticky",!0),f(),g("matRowDefColumns",n.displayedColumns),f(),g("matFooterRowDef",n.displayedColumns)("matFooterRowDefSticky",!0),f(),q(n.taskIsInProgress()===!1?31:-1),f(),q(n.taskIsInProgress()===!0?32:-1)}}var pl=(()=>{class r{store=d(_t);keys=d(De);destroyRef=d(Ft);routedDialogs=d(ze);taskIsInProgress=wt(()=>Fe(this.store.currentTask()));viewport=ki(ft);taskDuration=zi;sessionDuration=Ws;sortSessions=Gs;trackSession=(t,i)=>`${i.start}-${i.end??"running"}`;hotkeys=[xt(il,"Start/stop task",t=>{let i=this.store.currentTask(),n=this.taskIsInProgress();i&&(n?this.stop(i.id):this.start(i.id))}),xt(nl,"Mark as finished",t=>{let i=this.store.currentTask();i&&this.store.updateTaskState(i.id,Q.finished)}),xt(rl,"Mark as active",t=>{let i=this.store.currentTask();i&&this.store.updateTaskState(i.id,Q.active)}),xt(sl,"Rename task",()=>{let t=this.store.currentTask();t&&this.routedDialogs.navigate(["tasks",t.id,"rename"])}),xt(ol,"Delete task",()=>{let t=this.store.currentTask();t&&this.store.deleteTask(t.id)})];displayedColumns=["start","end","duration","action"];constructor(){this.keys.add(this.hotkeys),this.destroyRef.onDestroy(()=>{this.keys.remove(this.hotkeys)}),zt(()=>{this.store.currentTaskId(),this.viewport()?.scrollToIndex(0)})}start(t){this.store.startTask(t,Date.now())}stop(t){this.store.stopTask(t,Date.now())}deleteTask(t){this.store.deleteTask(t.id)}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["screen-task"]],viewQuery:function(i,n){i&1&&bi(n.viewport,ft,5),i&2&&vi()},decls:1,vars:1,consts:[["viewport",""],[3,"syncWidthTo"],["routerLink","./..","queryParamsHandling","merge","mat-icon-button",""],["svgIcon","arrow_back"],["data-e2e","screen-task__state-icon",1,"fix-icon-color",3,"svgIcon"],["data-e2e","screen-task__name"],[3,"task"],["minBufferPx","200","maxBufferPx","2000",3,"itemSize"],["mat-table","","cdkDropList","",3,"dataSource","trackBy","cdkDropListSortingDisabled"],["matColumnDef","start"],["mat-header-cell","","class","header-start",4,"matHeaderCellDef"],["mat-cell","","class","header-start","data-e2e","screen-task__session-start",4,"matCellDef"],["mat-footer-cell","","class","header-start",4,"matFooterCellDef"],["matColumnDef","end"],["mat-header-cell","","class","header-end",4,"matHeaderCellDef"],["mat-cell","","class","header-end","data-e2e","screen-task__session-end",4,"matCellDef"],["mat-footer-cell","","class","header-end",4,"matFooterCellDef"],["matColumnDef","duration"],["mat-header-cell","","class","header-duration",4,"matHeaderCellDef"],["mat-cell","","class","header-duration","data-e2e","screen-task__session-duration",4,"matCellDef"],["mat-footer-cell","","class","header-duration","data-e2e","screen-task__task-duration",4,"matFooterCellDef"],["matColumnDef","action"],["mat-header-cell","","class","header-action",4,"matHeaderCellDef"],["mat-cell","","class","header-action",4,"matCellDef"],["mat-footer-cell","","class","header-action",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","data-e2e","screen-task__session-row","cdkDrag","",3,"cdkDragData",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef","matFooterRowDefSticky"],["mat-fab","","color","accent","matTooltip","Start","data-e2e","screen-task__button-start"],["mat-fab","","color","primary","matTooltip","Stop","data-e2e","screen-task__button-stop"],["mat-header-cell","",1,"header-start"],["mat-cell","","data-e2e","screen-task__session-start",1,"header-start"],["mat-footer-cell","",1,"header-start"],["mat-header-cell","",1,"header-end"],["mat-cell","","data-e2e","screen-task__session-end",1,"header-end"],["mat-footer-cell","",1,"header-end"],["mat-header-cell","",1,"header-duration"],["mat-cell","","data-e2e","screen-task__session-duration",1,"header-duration"],[3,"value"],["mat-footer-cell","","data-e2e","screen-task__task-duration",1,"header-duration"],["mat-header-cell","",1,"header-action"],["mat-cell","",1,"header-action"],["data-e2e","screen-task__button-session-action",3,"session","task"],["mat-footer-cell","",1,"header-action"],["mat-header-row",""],["mat-row","","data-e2e","screen-task__session-row","cdkDrag","",3,"cdkDragData"],["mat-footer-row",""],["mat-fab","","color","accent","matTooltip","Start","data-e2e","screen-task__button-start",3,"click"],["svgIcon","play_arrow"],["mat-fab","","color","primary","matTooltip","Stop","data-e2e","screen-task__button-stop",3,"click"],["svgIcon","pause"]],template:function(i,n){if(i&1&&U(0,dm,33,17),i&2){let s;q((s=n.store.currentTask())?0:-1,s)}},dependencies:[ml,fn,kt,ae,gn,hl,Ka,hn,Xt,oe,Ri,Di,Ei,ft,fo,to,io,lo,ro,eo,mo,no,co,so,ao,oo,ho,uo,po,Vi,bn,he,ji,ms],styles:[`[_nghost-%COMP%]{position:relative;flex:1;flex-direction:column;max-height:100vh;display:grid;grid-template-rows:auto 1fr}h2[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr}h2[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}h2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:relative;top:2px;margin-right:.25em}[mat-fab][_ngcontent-%COMP%]{position:absolute;bottom:var(--fab-offset);right:var(--fab-offset);left:50%}.session-tabular-data[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr}mat-toolbar[_ngcontent-%COMP%]{grid-row:1;display:grid;grid-template-columns:auto 1fr auto}.header-start[_ngcontent-%COMP%], .header-end[_ngcontent-%COMP%]{width:50%}.header-duration[_ngcontent-%COMP%]{max-width:95px;min-width:95px}.header-action[_ngcontent-%COMP%]{max-width:40px;min-width:40px}.header-action.mat-mdc-header-cell[_ngcontent-%COMP%], .header-action.mat-mdc-cell[_ngcontent-%COMP%], .header-action.mat-mdc-footer-cell[_ngcontent-%COMP%]{padding-left:0;padding-right:0}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{grid-row:2;padding-right:2px}duration[_ngcontent-%COMP%]{--unit-font-size: 10px}
/*# sourceMappingURL=screen-task-3RETLCFP.css.map */`],changeDetection:0})}return r})();var ul=(()=>{class r{cdkVirtualForTypes=ut();static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","cdkVirtualFor",""]],inputs:{cdkVirtualForTypes:[1,"cdkVirtualForTypes"]}})}return r})();var fl=(()=>{class r{viewport=d(ft);checkViewportSizeWhenValueChanges=ut();constructor(){zt(()=>{this.checkViewportSizeWhenValueChanges(),this.viewport.checkViewportSize()})}static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","checkViewportSizeWhenValueChanges",""]],inputs:{checkViewportSizeWhenValueChanges:[1,"checkViewportSizeWhenValueChanges"]}})}return r})();var _l=(()=>{class r{viewport=d(ft);itemSize=ut();scrollToIndex=ut();previousIndex;constructor(){zt(()=>{let t=this.scrollToIndex(),i=this.itemSize();if(!Fn(t)||t===-1||!i){this.previousIndex=t;return}let n=t*i,s=Fn(this.previousIndex)?void 0:"smooth";setTimeout(()=>{this.viewport.scrollToOffset(n-this.viewport.getViewportSize()/2,s),this.previousIndex=t})})}static \u0275fac=function(i){return new(i||r)};static \u0275dir=A({type:r,selectors:[["","scrollToIndex",""]],inputs:{itemSize:[1,"itemSize"],scrollToIndex:[1,"scrollToIndex"]}})}return r})();var mm=()=>[import("./chunk-JYA2ZNWY.js").then(r=>r.TasksFilterComponent)],hm=()=>[import("./chunk-HW4EHK6S.js").then(r=>r.EmptyStateComponent),Xt,kt,Ii],pm=r=>({"task-opened":r}),gl=()=>["tasks","create"],um=r=>[r],fm=r=>({running:r}),_m=()=>["active"],gm=(r,e)=>({dialog:r,primary:e}),bm=r=>({outlets:r}),vm=r=>["/",r];function ym(r,e){if(r&1){let t=G();u(0,"tasks-filter",10),O("keyup.esc",function(){N(t);let n=T(3);return F(n.toggleFilter(!1))}),p()}}function wm(r,e){if(r&1&&U(0,ym,1,0,"tasks-filter"),r&2){let t=T(2);q(t.searchOpened()?0:-1)}}function km(r,e){if(r&1){let t=G();u(0,"a",15,2),O("cdkDropListDropped",function(n){let s=N(t).$implicit,o=T(3);return F(o.onDrop(n,s))}),w(2,"mat-icon",16),B(3,"taskStateIcon"),B(4,"map"),u(5,"div",17)(6,"span",18),E(7),p(),w(8,"duration",19),B(9,"map"),p(),w(10,"button-task-actions",20),p()}if(r&2){let t=e.$implicit,i=nt(1),n=T(3);g("activated",i.isActive)("routerLink",se(15,um,t.id)),f(2),g("svgIcon",dt(3,7,t))("ngClass",se(17,fm,Yt(4,9,t,n.isTaskRunning))),f(5),yi(t.name),f(),g("value",Yt(9,12,t,n.taskDuration)),f(2),g("task",t)}}function xm(r,e){if(r&1&&(u(0,"cdk-virtual-scroll-viewport",11,1)(2,"mat-nav-list"),ct(3,km,11,19,"a",12),p()(),u(4,"button",13),w(5,"mat-icon",14),p()),r&2){let t=T(),i=T();g("itemSize",48)("scrollToIndex",i.store.currentTaskIndex())("checkViewportSizeWhenValueChanges",t),f(3),g("cdkVirtualForOf",t)("cdkVirtualForTrackBy",i.taskId)("cdkVirtualForTypes",t),f(),g("dialogLink",wi(7,gl))}}function Sm(r,e){r&1&&E(0," Create a task and it will show up here ")}function Em(r,e){r&1&&E(0," Create a task and it will show up here ")}function Cm(r,e){r&1&&E(0," You didn't finish any tasks yet ")}function Tm(r,e){r&1&&E(0," You didn't abandon any tasks yet ")}function Dm(r,e){if(r&1&&(u(0,"empty-state"),w(1,"img",21),u(2,"span",22),E(3,"No tasks"),p(),u(4,"span",23),U(5,Sm,1,0)(6,Em,1,0)(7,Cm,1,0)(8,Tm,1,0),p(),u(9,"button",24),E(10," Create a task "),p()()),r&2){let t,i=T(4);f(5),q((t=i.store.currentTaskState())==="all"?5:t===i.taskState.active?6:t===i.taskState.finished?7:t===i.taskState.dropped?8:-1),f(4),g("routerLink",se(9,vm,se(7,bm,Se(4,gm,wi(2,gl),wi(3,_m)))))}}function Mm(r,e){if(r&1){let t=G();u(0,"empty-state"),w(1,"mat-icon",25),u(2,"span",22),E(3,"Nothing found"),p(),u(4,"span",23),E(5,"Could not find tasks matching the criteria"),p(),u(6,"button",26),O("click",function(){N(t);let n=T(4);return F(n.toggleFilter(!1))}),E(7,"Reset filter"),p()()}}function Pm(r,e){if(r&1&&U(0,Dm,11,11,"empty-state")(1,Mm,8,0,"empty-state"),r&2){let t=T(3);q(t.searchOpened()===!1?0:1)}}function Im(r,e){r&1&&(En(0,Pm,2,1),Dn(1,0,hm),Mn())}function Rm(r,e){if(r&1){let t=G();u(0,"section",4)(1,"mat-toolbar",6)(2,"h1"),ye(3),E(4),B(5,"taskState"),we(),E(6," ("),w(7,"duration",7),B(8,"map"),E(9,") "),p(),u(10,"button",8,0),O("click",function(){N(t);let n=T();return F(n.toggleFilter())}),w(12,"mat-icon",9),p()(),En(13,wm,1,1),Dn(14,13,mm),Mn(),U(16,xm,6,8)(17,Im,3,0),p()}if(r&2){let t=e,i=T();f(),g("syncWidthTo",i.viewport()),f(3),Tt(" ",dt(5,4,i.store.currentTaskState())," "),f(3),g("value",Yt(8,6,t,i.tasksDuration)),f(9),q(t.length?16:17)}}function Am(r,e){r&1&&(u(0,"section",5),w(1,"router-outlet"),p())}var bl=(()=>{class r{store=d(_t);keys=d(De);router=d(Ne);routedDialogs=d(ze);destroyRef=d(Ft);viewport=ki(ft);injector=d($);filterPresent=wt(()=>!!Object.keys(this.store.decodedFilterParams()).length);filterToggles=Bt(void 0);searchOpened=wt(()=>{let t=this.filterPresent(),i=this.filterToggles();return i!==void 0?i:t});constructor(){yt(()=>{this.keys.add(this.hotkeys)}),this.destroyRef.onDestroy(()=>{this.keys.remove(this.hotkeys)}),zt(()=>{this.store.currentTasks(),yt({read:()=>{this.viewport()?.scrollToIndex(0)}},{injector:this.injector})})}taskDuration=zi;tasksDuration=$s;taskState=Q;isTaskRunning=Fe;taskId=(t,i)=>i.id;hotkeys=[xt(Za,"Add task",()=>this.routedDialogs.navigate(["tasks","create"])),xt([...Lr,...Nr],"Next/prev task",t=>{let i=this.store.currentTaskState(),n=Lr.includes(t.key)?this.store.nextTaskId():Nr.includes(t.key)?this.store.prevTaskId():null;i&&n&&this.router.navigate([i,n],{queryParamsHandling:"merge"})}),new Fi(Xa,t=>(t.preventDefault(),this.toggleFilter(),!0),["INPUT"],"Toggle search")];toggleFilter(t){this.filterToggles.update(()=>t??!this.searchOpened())}onDrop({item:{data:[t,i]}},n){t&&i&&this.store.moveSessionToTask(i,n.id,t)}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=R({type:r,selectors:[["screen-tasks"]],viewQuery:function(i,n){i&1&&bi(n.viewport,ft,5),i&2&&vi()},decls:3,vars:5,consts:[["toggle",""],["scroll",""],["rla","routerLinkActive"],[1,"container",3,"ngClass"],[1,"tasks"],[1,"task","mat-app-background"],[3,"syncWidthTo"],["data-e2e","screen-tasks__total",1,"state-duration",3,"value"],["mat-icon-button","","matTooltip","Toggle filter panel",3,"click"],["svgIcon","filter_list"],[3,"keyup.esc"],[3,"itemSize","scrollToIndex","checkViewportSizeWhenValueChanges"],["mat-list-item","","cdkDropList","","data-e2e","screen-tasks__task-item","routerLinkActive","","queryParamsHandling","merge",3,"activated","routerLink","cdkDropListDropped",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy","cdkVirtualForTypes"],["mat-fab","","color","accent","data-e2e","button-add-task","matTooltip","Create a task",3,"dialogLink"],["svgIcon","add"],["mat-list-item","","cdkDropList","","data-e2e","screen-tasks__task-item","routerLinkActive","","queryParamsHandling","merge",3,"cdkDropListDropped","activated","routerLink"],["data-e2e","screen-tasks__task-state-icon","matListItemIcon","",3,"svgIcon","ngClass"],["matListItemTitle","",1,"item-title"],["data-e2e","screen-tasks__task-name",1,"name"],["data-e2e","screen-tasks__task-duration",3,"value"],["matListItemMeta","",3,"task"],["src","assets/favicon.svg","alt","Timer","illustration",""],["title",""],["subtitle",""],["mat-flat-button","","type","button","queryParamsHandling","preserve","data-e2e","screen-tasks__button-add-task-empty-state",1,"tertiary-button",3,"routerLink"],["color","accent","illustration","","svgIcon","search"],["mat-flat-button","","type","button",3,"click"]],template:function(i,n){if(i&1&&(u(0,"div",3),U(1,Rm,18,9,"section",4),U(2,Am,2,0,"section",5),p()),i&2){let s;g("ngClass",se(3,pm,n.store.isCurrentTaskOpened())),f(),q((s=n.store.currentTasks())?1:-1,s),f(),q(n.store.isCurrentTaskOpened()?2:-1)}},dependencies:[Be,Xt,Oi,Li,Di,Ei,ps,ft,fn,kt,oe,Ri,un,Rr,Pr,Ir,Qe,ae,gn,pn,hn,fl,_l,ds,ul,Vi,bn,_n,he,ji],styles:[`[_nghost-%COMP%]{display:contents}.container[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr;flex:1;--fab-offset: 1rem}@media(min-width:900px){.container[_ngcontent-%COMP%]:not(.task-opened){grid-template-areas:"left tasks right";grid-template-columns:1fr 50% 1fr}.container.task-opened[_ngcontent-%COMP%]{grid-template-areas:"tasks task";grid-template-columns:1fr 1fr}}@media(max-width:900px){.container[_ngcontent-%COMP%]{grid-template-columns:[tasks-start task-start] 1fr;grid-template-rows:[tasks-start task-start] 1fr}.container[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]{z-index:1}}mat-icon.running[_ngcontent-%COMP%]{background:var(--timer-logo-color)!important;color:var(--mat-app-background-color)!important;border-radius:100%}[matlistitemtitle][_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto}.name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.tasks[_ngcontent-%COMP%]{grid-area:tasks;position:relative;max-height:100vh;display:flex;flex-direction:column}.task[_ngcontent-%COMP%]{grid-area:task;display:flex;flex-direction:column;overflow:hidden}mat-toolbar[_ngcontent-%COMP%]{flex:0 0 auto}[mat-fab][_ngcontent-%COMP%]{position:absolute;bottom:var(--fab-offset);right:var(--fab-offset);left:50%}h1[_ngcontent-%COMP%]{width:100%}.search-form[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{display:flex;align-items:center}.range-filter[_ngcontent-%COMP%]{margin-left:auto;flex:0 0 42.5px}.search-form[_ngcontent-%COMP%]{margin-left:auto}.state-duration[_ngcontent-%COMP%]{position:relative;top:1px}.filter-trigger-icon[_ngcontent-%COMP%]{position:relative;top:3px}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{flex:1}empty-state[_ngcontent-%COMP%]{margin:auto}.cdk-drop-list-dragging[_ngcontent-%COMP%]{position:relative}.cdk-drop-list-dragging[_ngcontent-%COMP%]:after{display:block;content:"";position:absolute;inset:0;border:dotted 2px grey}.item-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}mat-nav-list[_ngcontent-%COMP%]{padding:0}.item-title[_ngcontent-%COMP%]{position:relative;top:1px}
/*# sourceMappingURL=screen-tasks-ATSGPJGV.css.map */`],changeDetection:0})}return r})();var Fr={production:!1};Fr.production&&void 0;Es(cl,{providers:[os(),ua(),Yr(js.forRoot({cheatSheetCloseEsc:!1,disableCheatSheet:!1})),Bs([{path:"",redirectTo:"active",pathMatch:"full"},{path:":state",component:bl,canActivate:[dl],children:[{path:":taskId",component:pl}]}],zs({paramsInheritanceStrategy:"always"})),Js([{path:"tasks",children:[{path:"create",loadComponent:()=>import("./chunk-QQ2JILTQ.js")},{path:":taskId",children:[{path:"rename",loadComponent:()=>import("./chunk-3BL4UQLD.js")},{path:"sessions/:sessionIndex",children:[{path:"split",loadComponent:()=>import("./chunk-HKVJYJ3C.js")},{path:"edit",loadComponent:()=>import("./chunk-3TJQUSON.js")}]}]}]},{path:"hotkeys",loadComponent:()=>import("./chunk-HDI57S5H.js")}]),{provide:Is,useFactory(){return{width:"600px",autoFocus:!0}}},{provide:Ns,useValue:{disableTooltipInteractivity:!0}},ga("ngsw-worker.js",{enabled:!as(),registrationStrategy:"registerWhenStable:30000"}),cs(),{provide:Cn,multi:!0,useFactory:()=>{let r=d(gr),e=d(Ft),t=d(go);return()=>{Fr.production&&(_i(Ys(60)).pipe(In(e)).subscribe(()=>r.checkForUpdate()),r.versionUpdates.pipe(In(e)).subscribe(i=>{i.type==="VERSION_READY"&&t.open("New version available","Reload").onAction().subscribe(()=>{location.reload()})}))}}},{provide:Cn,multi:!0,useFactory:()=>{let r=d(Rs),e=d(Pi);return()=>{r.addSvgIconResolver(t=>e.bypassSecurityTrustResourceUrl(`assets/icons/${t}.svg`))}}}]});
//# sourceMappingURL=main-ADRMHRPT.js.map
