import{a as M,b as At,e as js,f as Bn,h as Ee,i as Li,j as Ze,m as le,n as Bi,o as ce,p as de,q as Hs}from"./chunk-SLB2DS4F.js";import{a as Ki}from"./chunk-JAWFSMA7.js";import"./chunk-PDIFT3BZ.js";import{a as Ns,b as wt,c as Vs,d as ae}from"./chunk-ST5FIJMQ.js";import{A as Qs,B as Le,C as Ws,D as Ys,E as $s,F as Zs,G as Xs,H as ji,I as Js,S as Vn,T as to,U as eo,V as io,W as Ne,X as Fe,Y as no,Z as _t,a as An,c as Ni,d as Oe,e as Jt,f as Fi,g as Ks,h as Us,v as Vi,w as Gs,x as zn,z as W}from"./chunk-HRUXL7BW.js";import{a as zi,b as Te,c as qs}from"./chunk-MELII6DX.js";import{a as Ui}from"./chunk-ZUJH4HQF.js";import{$ as Ps,A as gs,B as Ln,Ba as zs,C as Mi,Ca as oe,D as Ii,E as Nn,Ea as Ai,F as bs,Fa as Oi,G as vs,I as Fn,J as ys,L as ws,N as ks,P as xs,T as Ss,U as Es,V as Ts,Z as Cs,_ as Ds,ba as Ri,c as hs,ca as Ms,da as Is,ea as Rs,f as ps,g as us,ga as As,ia as Pt,j as fs,ja as Os,ka as Se,l as Gt,m as Si,n as We,o as Ei,p as _s,q as Ae,qa as Ls,r as Xt,s as Ye,t as On,u as Ti,v as Ci,w as Di,x as $e,y as ft,ya as Fs,z as Pi,za as Bs}from"./chunk-CVT4RZLN.js";import{$ as st,$a as is,$b as X,Aa as ve,Ab as Mn,Ac as yt,B as ui,Bb as In,C as ne,Ca as H,Cb as Kt,D as re,Da as ts,Db as q,E as se,Eb as G,Ec as ut,Fb as ss,Fc as xi,Hb as os,Hc as ds,I as Yr,Ia as Tn,Ib as as,Ic as qt,J as Bt,Jb as g,K as Sn,Kb as u,Lb as p,Mb as S,Mc as xe,Nc as ms,Qb as gi,Rb as bi,T as Re,Tb as Q,U as ge,V as et,Va as es,X as $r,Xa as f,Xb as O,Y as C,Z as Zr,Zb as D,_b as Ut,a as St,aa as Yt,ab as ct,ac as ye,bb as fi,bc as we,c as qr,ca as $,cb as Ge,cc as J,da as be,db as Qe,dc as tt,ea as d,f as ie,fc as vi,ga as Xr,gb as ns,gc as yi,h as _e,ha as Jr,hc as nt,ic as Rn,j as T,jc as at,k as Gr,kb as A,kc as ls,la as N,lb as $t,lc as E,ma as F,mb as R,mc as wi,n as Qr,nb as _i,nc as Dt,oa as Z,oc as Rt,pa as pt,pb as jt,pc as ki,q as Wr,qa as Tt,qb as Ct,qc as Ht,rb as Cn,rc as ke,sa as ot,sc as B,ta as it,tc as dt,u as Et,uc as Zt,wa as zt,wb as Dn,xb as rs,xc as cs,ya as Vt,za as En,zb as Pn}from"./chunk-33GRFTX6.js";function cl(r,e){if(r&1){let t=Q();u(0,"div",1)(1,"button",2),O("click",function(){N(t);let n=D();return F(n.action())}),E(2),p()()}if(r&2){let t=D();f(2),Dt(" ",t.data.action," ")}}var dl=["label"];function ml(r,e){}var hl=Math.pow(2,31)-1,Xe=class{_overlayRef;instance;containerInstance;_afterDismissed=new T;_afterOpened=new T;_onAction=new T;_durationTimeoutId;_dismissedByAction=!1;constructor(e,t){this._overlayRef=t,this.containerInstance=e,e._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(e){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(e,hl))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},ro=new $("MatSnackBarData"),Be=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},pl=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return r})(),ul=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return r})(),fl=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return r})(),_l=(()=>{class r{snackBarRef=d(Xe);data=d(ro);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,n){i&1&&(u(0,"div",0),E(1),p(),q(2,cl,3,1,"div",1)),i&2&&(f(),Dt(" ",n.data.message,`
`),f(),G(n.hasAction?2:-1))},dependencies:[Ai,pl,ul,fl],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return r})(),jn="_mat-snack-bar-enter",Kn="_mat-snack-bar-exit",gl=(()=>{class r extends vs{_ngZone=d(it);_elementRef=d(H);_changeDetectorRef=d(qt);_platform=d(Gt);_animationsDisabled=Se();snackBarConfig=d(Be);_document=d(pt);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=d(Z);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new T;_onExit=new T;_onEnter=new T;_animationState="void";_live;_label;_role;_liveElementId=d(Ii).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),i}attachTemplatePortal(t){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),i}attachDomPortal=t=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),i};onAnimationEnd(t){t===Kn?this._completeExit():t===jn&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(jn)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(jn)},200)))}exit(){return this._destroyed?Wr(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Kn)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Kn),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(o=>t.classList.add(o)):t.classList.add(i)),this._exposeToModals();let n=this._label.nativeElement,s="mdc-snackbar__label";n.classList.toggle(s,!n.querySelector(`.${s}`))}_exposeToModals(){let t=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<i.length;n++){let s=i[n],o=s.getAttribute("aria-owns");this._trackedModals.add(s),o?o.indexOf(t)===-1&&s.setAttribute("aria-owns",o+" "+t):s.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let i=t.getAttribute("aria-owns");if(i){let n=i.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,i=t.querySelector("[aria-hidden]"),n=t.querySelector("[aria-live]");if(i&&n){let s=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(s=document.activeElement),i.removeAttribute("aria-hidden"),n.appendChild(i),s?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,n){if(i&1&&we(Fn,7)(dl,7),i&2){let s;J(s=tt())&&(n._portalOutlet=s.first),J(s=tt())&&(n._label=s.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,n){i&1&&O("animationend",function(o){return n.onAnimationEnd(o.animationName)})("animationcancel",function(o){return n.onAnimationEnd(o.animationName)}),i&2&&at("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[jt],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,n){i&1&&(u(0,"div",1)(1,"div",2,0)(3,"div",3),Ct(4,ml,0,0,"ng-template",4),p(),S(5,"div"),p()()),i&2&&(f(5),Kt("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[Fn],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return r})(),bl=new $("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Be}),so=(()=>{class r{_live=d(As);_injector=d(Z);_breakpointObserver=d(Cs);_parentSnackBar=d(r,{optional:!0,skipSelf:!0});_defaultConfig=d(bl);_animationsDisabled=Se();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=_l;snackBarContainerComponent=gl;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,i){return this._attach(t,i)}openFromTemplate(t,i){return this._attach(t,i)}open(t,i="",n){let s=St(St({},this._defaultConfig),n);return s.data={message:t,action:i},s.announcementMessage===t&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,i){let n=i&&i.viewContainerRef&&i.viewContainerRef.injector,s=Z.create({parent:n||this._injector,providers:[{provide:Be,useValue:i}]}),o=new Nn(this.snackBarContainerComponent,i.viewContainerRef,s),a=t.attach(o);return a.instance.snackBarConfig=i,a.instance}_attach(t,i){let n=St(St(St({},new Be),this._defaultConfig),i),s=this._createOverlay(n),o=this._attachSnackBarContainer(s,n),a=new Xe(o,s);if(t instanceof fi){let l=new bs(t,null,{$implicit:n.data,snackBarRef:a});a.instance=o.attachTemplatePortal(l)}else{let l=this._createInjector(n,a),c=new Nn(t,void 0,l),m=o.attachComponentPortal(c);a.instance=m.instance}return this._breakpointObserver.observe(Os.HandsetPortrait).pipe(et(s.detachments())).subscribe(l=>{s.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(a,n),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(t,i){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let i=new ws;i.direction=t.direction;let n=ks(this._injector),s=t.direction==="rtl",o=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!s||t.horizontalPosition==="end"&&s,a=!o&&t.horizontalPosition!=="center";return o?n.left("0"):a?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),i.positionStrategy=n,i.disableAnimations=this._animationsDisabled,xs(this._injector,i)}_createInjector(t,i){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return Z.create({parent:n||this._injector,providers:[{provide:Xe,useValue:i},{provide:ro,useValue:t.data}]})}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function oo(r){return new C(3e3,!1)}function vl(){return new C(3100,!1)}function yl(){return new C(3101,!1)}function wl(r){return new C(3001,!1)}function kl(r){return new C(3003,!1)}function xl(r){return new C(3004,!1)}function lo(r,e){return new C(3005,!1)}function co(){return new C(3006,!1)}function mo(){return new C(3007,!1)}function ho(r,e){return new C(3008,!1)}function po(r){return new C(3002,!1)}function uo(r,e,t,i,n){return new C(3010,!1)}function fo(){return new C(3011,!1)}function _o(){return new C(3012,!1)}function go(){return new C(3200,!1)}function bo(){return new C(3202,!1)}function vo(){return new C(3013,!1)}function yo(r){return new C(3014,!1)}function wo(r){return new C(3015,!1)}function ko(r){return new C(3016,!1)}function xo(r,e){return new C(3404,!1)}function Sl(r){return new C(3502,!1)}function So(r){return new C(3503,!1)}function Eo(){return new C(3300,!1)}function To(r){return new C(3504,!1)}function Co(r){return new C(3301,!1)}function Do(r,e){return new C(3302,!1)}function Po(r){return new C(3303,!1)}function Mo(r,e){return new C(3400,!1)}function Io(r){return new C(3401,!1)}function Ro(r){return new C(3402,!1)}function Ao(r,e){return new C(3505,!1)}function te(r){switch(r.length){case 0:return new Ee;case 1:return r[0];default:return new Li(r)}}function Gn(r,e,t=new Map,i=new Map){let n=[],s=[],o=-1,a=null;if(e.forEach(l=>{let c=l.get("offset"),m=c==o,h=m&&a||new Map;l.forEach((k,x)=>{let b=x,w=k;if(x!=="offset")switch(b=r.normalizePropertyName(b,n),w){case Ze:w=t.get(x);break;case At:w=i.get(x);break;default:w=r.normalizeStyleValue(x,b,w,n);break}h.set(b,w)}),m||s.push(h),a=h,o=c}),n.length)throw Sl(n);return s}function Hi(r,e,t,i){switch(e){case"start":r.onStart(()=>i(t&&Un(t,"start",r)));break;case"done":r.onDone(()=>i(t&&Un(t,"done",r)));break;case"destroy":r.onDestroy(()=>i(t&&Un(t,"destroy",r)));break}}function Un(r,e,t){let i=t.totalTime,n=!!t.disabled,s=qi(r.element,r.triggerName,r.fromState,r.toState,e||r.phaseName,i??r.totalTime,n),o=r._data;return o!=null&&(s._data=o),s}function qi(r,e,t,i,n="",s=0,o){return{element:r,triggerName:e,fromState:t,toState:i,phaseName:n,totalTime:s,disabled:!!o}}function gt(r,e,t){let i=r.get(e);return i||r.set(e,i=t),i}function Qn(r){let e=r.indexOf(":"),t=r.substring(1,e),i=r.slice(e+1);return[t,i]}var El=typeof document>"u"?null:document.documentElement;function Gi(r){let e=r.parentNode||r.host||null;return e===El?null:e}function Tl(r){return r.substring(1,6)=="ebkit"}var Ce=null,ao=!1;function Oo(r){Ce||(Ce=Cl()||{},ao=Ce.style?"WebkitAppearance"in Ce.style:!1);let e=!0;return Ce.style&&!Tl(r)&&(e=r in Ce.style,!e&&ao&&(e="Webkit"+r.charAt(0).toUpperCase()+r.slice(1)in Ce.style)),e}function Cl(){return typeof document<"u"?document.body:null}function Wn(r,e){for(;e;){if(e===r)return!0;e=Gi(e)}return!1}function Yn(r,e,t){if(t)return Array.from(r.querySelectorAll(e));let i=r.querySelector(e);return i?[i]:[]}var Dl=1e3,$n="{{",Pl="}}",Zn="ng-enter",Qi="ng-leave",Je="ng-trigger",ti=".ng-trigger",Xn="ng-animating",Wi=".ng-animating";function Qt(r){if(typeof r=="number")return r;let e=r.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:Hn(parseFloat(e[1]),e[2])}function Hn(r,e){return e==="s"?r*Dl:r}function ei(r,e,t){return r.hasOwnProperty("duration")?r:Il(r,e,t)}var Ml=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function Il(r,e,t){let i,n=0,s="";if(typeof r=="string"){let o=r.match(Ml);if(o===null)return e.push(oo(r)),{duration:0,delay:0,easing:""};i=Hn(parseFloat(o[1]),o[2]);let a=o[3];a!=null&&(n=Hn(parseFloat(a),o[4]));let l=o[5];l&&(s=l)}else i=r;if(!t){let o=!1,a=e.length;i<0&&(e.push(vl()),o=!0),n<0&&(e.push(yl()),o=!0),o&&e.splice(a,0,oo(r))}return{duration:i,delay:n,easing:s}}function Lo(r){return r.length?r[0]instanceof Map?r:r.map(e=>new Map(Object.entries(e))):[]}function Ot(r,e,t){e.forEach((i,n)=>{let s=Yi(n);t&&!t.has(n)&&t.set(n,r.style[s]),r.style[s]=i})}function me(r,e){e.forEach((t,i)=>{let n=Yi(i);r.style[n]=""})}function ze(r){return Array.isArray(r)?r.length==1?r[0]:js(r):r}function No(r,e,t){let i=e.params||{},n=Jn(r);n.length&&n.forEach(s=>{i.hasOwnProperty(s)||t.push(wl(s))})}var qn=new RegExp(`${$n}\\s*(.+?)\\s*${Pl}`,"g");function Jn(r){let e=[];if(typeof r=="string"){let t;for(;t=qn.exec(r);)e.push(t[1]);qn.lastIndex=0}return e}function Ve(r,e,t){let i=`${r}`,n=i.replace(qn,(s,o)=>{let a=e[o];return a==null&&(t.push(kl(o)),a=""),a.toString()});return n==i?r:n}var Rl=/-+([a-z0-9])/g;function Yi(r){return r.replace(Rl,(...e)=>e[1].toUpperCase())}function Fo(r,e){return r===0||e===0}function Bo(r,e,t){if(t.size&&e.length){let i=e[0],n=[];if(t.forEach((s,o)=>{i.has(o)||n.push(o),i.set(o,s)}),n.length)for(let s=1;s<e.length;s++){let o=e[s];n.forEach(a=>o.set(a,$i(r,a)))}}return e}function bt(r,e,t){switch(e.type){case M.Trigger:return r.visitTrigger(e,t);case M.State:return r.visitState(e,t);case M.Transition:return r.visitTransition(e,t);case M.Sequence:return r.visitSequence(e,t);case M.Group:return r.visitGroup(e,t);case M.Animate:return r.visitAnimate(e,t);case M.Keyframes:return r.visitKeyframes(e,t);case M.Style:return r.visitStyle(e,t);case M.Reference:return r.visitReference(e,t);case M.AnimateChild:return r.visitAnimateChild(e,t);case M.AnimateRef:return r.visitAnimateRef(e,t);case M.Query:return r.visitQuery(e,t);case M.Stagger:return r.visitStagger(e,t);default:throw xl(e.type)}}function $i(r,e){return window.getComputedStyle(r)[e]}var _r=(()=>{class r{validateStyleProperty(t){return Oo(t)}containsElement(t,i){return Wn(t,i)}getParentElement(t){return Gi(t)}query(t,i,n){return Yn(t,i,n)}computeStyle(t,i,n){return n||""}animate(t,i,n,s,o,a=[],l){return new Ee(n,s)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac})}return r})(),Pe=class{static NOOP=new _r},Me=class{};var Al=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),en=class extends Me{normalizePropertyName(e,t){return Yi(e)}normalizeStyleValue(e,t,i,n){let s="",o=i.toString().trim();if(Al.has(t)&&i!==0&&i!=="0")if(typeof i=="number")s="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&n.push(lo(e,i))}return o+s}};var nn="*";function Ol(r,e){let t=[];return typeof r=="string"?r.split(/\s*,\s*/).forEach(i=>Ll(i,t,e)):t.push(r),t}function Ll(r,e,t){if(r[0]==":"){let l=Nl(r,t);if(typeof l=="function"){e.push(l);return}r=l}let i=r.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return t.push(wo(r)),e;let n=i[1],s=i[2],o=i[3];e.push(zo(n,o));let a=n==nn&&o==nn;s[0]=="<"&&!a&&e.push(zo(o,n))}function Nl(r,e){switch(r){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,i)=>parseFloat(i)>parseFloat(t);case":decrement":return(t,i)=>parseFloat(i)<parseFloat(t);default:return e.push(ko(r)),"* => *"}}var Zi=new Set(["true","1"]),Xi=new Set(["false","0"]);function zo(r,e){let t=Zi.has(r)||Xi.has(r),i=Zi.has(e)||Xi.has(e);return(n,s)=>{let o=r==nn||r==n,a=e==nn||e==s;return!o&&t&&typeof n=="boolean"&&(o=n?Zi.has(r):Xi.has(r)),!a&&i&&typeof s=="boolean"&&(a=s?Zi.has(e):Xi.has(e)),o&&a}}var Yo=":self",Fl=new RegExp(`s*${Yo}s*,?`,"g");function $o(r,e,t,i){return new sr(r).build(e,t,i)}var Vo="",sr=class{_driver;constructor(e){this._driver=e}build(e,t,i){let n=new or(t);return this._resetContextStyleTimingState(n),bt(this,ze(e),n)}_resetContextStyleTimingState(e){e.currentQuerySelector=Vo,e.collectedStyles=new Map,e.collectedStyles.set(Vo,new Map),e.currentTime=0}visitTrigger(e,t){let i=t.queryCount=0,n=t.depCount=0,s=[],o=[];return e.name.charAt(0)=="@"&&t.errors.push(co()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),a.type==M.State){let l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(m=>{l.name=m,s.push(this.visitState(l,t))}),l.name=c}else if(a.type==M.Transition){let l=this.visitTransition(a,t);i+=l.queryCount,n+=l.depCount,o.push(l)}else t.errors.push(mo())}),{type:M.Trigger,name:e.name,states:s,transitions:o,queryCount:i,depCount:n,options:null}}visitState(e,t){let i=this.visitStyle(e.styles,t),n=e.options&&e.options.params||null;if(i.containsDynamicStyles){let s=new Set,o=n||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{Jn(l).forEach(c=>{o.hasOwnProperty(c)||s.add(c)})})}),s.size&&t.errors.push(ho(e.name,[...s.values()]))}return{type:M.State,name:e.name,style:i,options:n?{params:n}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let i=bt(this,ze(e.animation),t),n=Ol(e.expr,t.errors);return{type:M.Transition,matchers:n,animation:i,queryCount:t.queryCount,depCount:t.depCount,options:De(e.options)}}visitSequence(e,t){return{type:M.Sequence,steps:e.steps.map(i=>bt(this,i,t)),options:De(e.options)}}visitGroup(e,t){let i=t.currentTime,n=0,s=e.steps.map(o=>{t.currentTime=i;let a=bt(this,o,t);return n=Math.max(n,t.currentTime),a});return t.currentTime=n,{type:M.Group,steps:s,options:De(e.options)}}visitAnimate(e,t){let i=jl(e.timings,t.errors);t.currentAnimateTimings=i;let n,s=e.styles?e.styles:Bn({});if(s.type==M.Keyframes)n=this.visitKeyframes(s,t);else{let o=e.styles,a=!1;if(!o){a=!0;let c={};i.easing&&(c.easing=i.easing),o=Bn(c)}t.currentTime+=i.duration+i.delay;let l=this.visitStyle(o,t);l.isEmptyStep=a,n=l}return t.currentAnimateTimings=null,{type:M.Animate,timings:i,style:n,options:null}}visitStyle(e,t){let i=this._makeStyleAst(e,t);return this._validateStyleAst(i,t),i}_makeStyleAst(e,t){let i=[],n=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of n)typeof a=="string"?a===At?i.push(a):t.errors.push(po(a)):i.push(new Map(Object.entries(a)));let s=!1,o=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(o=a.get("easing"),a.delete("easing")),!s)){for(let l of a.values())if(l.toString().indexOf($n)>=0){s=!0;break}}}),{type:M.Style,styles:i,easing:o,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,t){let i=t.currentAnimateTimings,n=t.currentTime,s=t.currentTime;i&&s>0&&(s-=i.duration+i.delay),e.styles.forEach(o=>{typeof o!="string"&&o.forEach((a,l)=>{let c=t.collectedStyles.get(t.currentQuerySelector),m=c.get(l),h=!0;m&&(s!=n&&s>=m.startTime&&n<=m.endTime&&(t.errors.push(uo(l,m.startTime,m.endTime,s,n)),h=!1),s=m.startTime),h&&c.set(l,{startTime:s,endTime:n}),t.options&&No(a,t.options,t.errors)})})}visitKeyframes(e,t){let i={type:M.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(fo()),i;let n=1,s=0,o=[],a=!1,l=!1,c=0,m=e.steps.map(V=>{let j=this._makeStyleAst(V,t),U=j.offset!=null?j.offset:Vl(j.styles),K=0;return U!=null&&(s++,K=j.offset=U),l=l||K<0||K>1,a=a||K<c,c=K,o.push(K),j});l&&t.errors.push(_o()),a&&t.errors.push(go());let h=e.steps.length,k=0;s>0&&s<h?t.errors.push(bo()):s==0&&(k=n/(h-1));let x=h-1,b=t.currentTime,w=t.currentAnimateTimings,P=w.duration;return m.forEach((V,j)=>{let U=k>0?j==x?1:k*j:o[j],K=U*P;t.currentTime=b+w.delay+K,w.duration=K,this._validateStyleAst(V,t),V.offset=U,i.styles.push(V)}),i}visitReference(e,t){return{type:M.Reference,animation:bt(this,ze(e.animation),t),options:De(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:M.AnimateChild,options:De(e.options)}}visitAnimateRef(e,t){return{type:M.AnimateRef,animation:this.visitReference(e.animation,t),options:De(e.options)}}visitQuery(e,t){let i=t.currentQuerySelector,n=e.options||{};t.queryCount++,t.currentQuery=e;let[s,o]=Bl(e.selector);t.currentQuerySelector=i.length?i+" "+s:s,gt(t.collectedStyles,t.currentQuerySelector,new Map);let a=bt(this,ze(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=i,{type:M.Query,selector:s,limit:n.limit||0,optional:!!n.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:De(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(vo());let i=e.timings==="full"?{duration:0,delay:0,easing:"full"}:ei(e.timings,t.errors,!0);return{type:M.Stagger,animation:bt(this,ze(e.animation),t),timings:i,options:null}}};function Bl(r){let e=!!r.split(/\s*,\s*/).find(t=>t==Yo);return e&&(r=r.replace(Fl,"")),r=r.replace(/@\*/g,ti).replace(/@\w+/g,t=>ti+"-"+t.slice(1)).replace(/:animating/g,Wi),[r,e]}function zl(r){return r?St({},r):null}var or=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(e){this.errors=e}};function Vl(r){if(typeof r=="string")return null;let e=null;if(Array.isArray(r))r.forEach(t=>{if(t instanceof Map&&t.has("offset")){let i=t;e=parseFloat(i.get("offset")),i.delete("offset")}});else if(r instanceof Map&&r.has("offset")){let t=r;e=parseFloat(t.get("offset")),t.delete("offset")}return e}function jl(r,e){if(r.hasOwnProperty("duration"))return r;if(typeof r=="number"){let s=ei(r,e).duration;return tr(s,0,"")}let t=r;if(t.split(/\s+/).some(s=>s.charAt(0)=="{"&&s.charAt(1)=="{")){let s=tr(0,0,"");return s.dynamic=!0,s.strValue=t,s}let n=ei(t,e);return tr(n.duration,n.delay,n.easing)}function De(r){return r?(r=St({},r),r.params&&(r.params=zl(r.params))):r={},r}function tr(r,e,t){return{duration:r,delay:e,easing:t}}function gr(r,e,t,i,n,s,o=null,a=!1){return{type:1,element:r,keyframes:e,preStyleProps:t,postStyleProps:i,duration:n,delay:s,totalTime:n+s,easing:o,subTimeline:a}}var ni=class{_map=new Map;get(e){return this._map.get(e)||[]}append(e,t){let i=this._map.get(e);i||this._map.set(e,i=[]),i.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}},Kl=1,Ul=":enter",Hl=new RegExp(Ul,"g"),ql=":leave",Gl=new RegExp(ql,"g");function Zo(r,e,t,i,n,s=new Map,o=new Map,a,l,c=[]){return new ar().buildKeyframes(r,e,t,i,n,s,o,a,l,c)}var ar=class{buildKeyframes(e,t,i,n,s,o,a,l,c,m=[]){c=c||new ni;let h=new lr(e,t,c,n,s,m,[]);h.options=l;let k=l.delay?Qt(l.delay):0;h.currentTimeline.delayNextStep(k),h.currentTimeline.setStyles([o],null,h.errors,l),bt(this,i,h);let x=h.timelines.filter(b=>b.containsAnimation());if(x.length&&a.size){let b;for(let w=x.length-1;w>=0;w--){let P=x[w];if(P.element===t){b=P;break}}b&&!b.allowOnlyTimelineStyles()&&b.setStyles([a],null,h.errors,l)}return x.length?x.map(b=>b.buildKeyframes()):[gr(t,[],[],[],0,k,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let i=t.subInstructions.get(t.element);if(i){let n=t.createSubContext(e.options),s=t.currentTimeline.currentTime,o=this._visitSubInstructions(i,n,n.options);s!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){let i=t.createSubContext(e.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,i),this.visitReference(e.animation,i),t.transformIntoNewTimeline(i.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,i){for(let n of e){let s=n?.delay;if(s){let o=typeof s=="number"?s:Qt(Ve(s,n?.params??{},t.errors));i.delayNextStep(o)}}}_visitSubInstructions(e,t,i){let s=t.currentTimeline.currentTime,o=i.duration!=null?Qt(i.duration):null,a=i.delay!=null?Qt(i.delay):null;return o!==0&&e.forEach(l=>{let c=t.appendInstructionToTimeline(l,o,a);s=Math.max(s,c.duration+c.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),bt(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let i=t.subContextCount,n=t,s=e.options;if(s&&(s.params||s.delay)&&(n=t.createSubContext(s),n.transformIntoNewTimeline(),s.delay!=null)){n.previousNode.type==M.Style&&(n.currentTimeline.snapshotCurrentStyles(),n.previousNode=rn);let o=Qt(s.delay);n.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>bt(this,o,n)),n.currentTimeline.applyStylesToKeyframe(),n.subContextCount>i&&n.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let i=[],n=t.currentTimeline.currentTime,s=e.options&&e.options.delay?Qt(e.options.delay):0;e.steps.forEach(o=>{let a=t.createSubContext(e.options);s&&a.delayNextStep(s),bt(this,o,a),n=Math.max(n,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(n),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let i=e.strValue,n=t.params?Ve(i,t.params,t.errors):i;return ei(n,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let i=t.currentAnimateTimings=this._visitTiming(e.timings,t),n=t.currentTimeline;i.delay&&(t.incrementTime(i.delay),n.snapshotCurrentStyles());let s=e.style;s.type==M.Keyframes?this.visitKeyframes(s,t):(t.incrementTime(i.duration),this.visitStyle(s,t),n.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let i=t.currentTimeline,n=t.currentAnimateTimings;!n&&i.hasCurrentStyleProperties()&&i.forwardFrame();let s=n&&n.easing||e.easing;e.isEmptyStep?i.applyEmptyStep(s):i.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let i=t.currentAnimateTimings,n=t.currentTimeline.duration,s=i.duration,a=t.createSubContext().currentTimeline;a.easing=i.easing,e.styles.forEach(l=>{let c=l.offset||0;a.forwardTime(c*s),a.setStyles(l.styles,l.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(n+s),t.previousNode=e}visitQuery(e,t){let i=t.currentTimeline.currentTime,n=e.options||{},s=n.delay?Qt(n.delay):0;s&&(t.previousNode.type===M.Style||i==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=rn);let o=i,a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!n.optional,t.errors);t.currentQueryTotal=a.length;let l=null;a.forEach((c,m)=>{t.currentQueryIndex=m;let h=t.createSubContext(e.options,c);s&&h.delayNextStep(s),c===t.element&&(l=h.currentTimeline),bt(this,e.animation,h),h.currentTimeline.applyStylesToKeyframe();let k=h.currentTimeline.currentTime;o=Math.max(o,k)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let i=t.parentContext,n=t.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(t.currentQueryTotal-1),l=o*t.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":l=a-l;break;case"full":l=i.currentStaggerTime;break}let m=t.currentTimeline;l&&m.delayNextStep(l);let h=m.currentTime;bt(this,e.animation,t),t.previousNode=e,i.currentStaggerTime=n.currentTime-h+(n.startTime-i.currentTimeline.startTime)}},rn={},lr=class r{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=rn;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(e,t,i,n,s,o,a,l){this._driver=e,this.element=t,this.subInstructions=i,this._enterClassName=n,this._leaveClassName=s,this.errors=o,this.timelines=a,this.currentTimeline=l||new sn(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let i=e,n=this.options;i.duration!=null&&(n.duration=Qt(i.duration)),i.delay!=null&&(n.delay=Qt(i.delay));let s=i.params;if(s){let o=n.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!t||!o.hasOwnProperty(a))&&(o[a]=Ve(s[a],o,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let i=e.params={};Object.keys(t).forEach(n=>{i[n]=t[n]})}}return e}createSubContext(e=null,t,i){let n=t||this.element,s=new r(this._driver,n,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(n,i||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=rn,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,i){let n={duration:t??e.duration,delay:this.currentTimeline.currentTime+(i??0)+e.delay,easing:""},s=new cr(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,n,e.stretchStartingKeyframe);return this.timelines.push(s),n}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,i,n,s,o){let a=[];if(n&&a.push(this.element),e.length>0){e=e.replace(Hl,"."+this._enterClassName),e=e.replace(Gl,"."+this._leaveClassName);let l=i!=1,c=this._driver.query(this.element,e,l);i!==0&&(c=i<0?c.slice(c.length+i,c.length):c.slice(0,i)),a.push(...c)}return!s&&a.length==0&&o.push(yo(t)),a}},sn=class r{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(e,t,i,n){this._driver=e,this.element=t,this.startTime=i,this._elementTimelineStylesLookup=n,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new r(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Kl,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,i]of this._globalTimelineStyles)this._backFill.set(t,i||At),this._currentKeyframe.set(t,At);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,i,n){t&&this._previousKeyframe.set("easing",t);let s=n&&n.params||{},o=Ql(e,this._globalTimelineStyles);for(let[a,l]of o){let c=Ve(l,s,i);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??At),this._updateStyle(a,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,i)=>{let n=this._styleSummary.get(i);(!n||t.time>n.time)&&this._updateStyle(i,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,i=this._keyframes.size===1&&this.duration===0,n=[];this._keyframes.forEach((a,l)=>{let c=new Map([...this._backFill,...a]);c.forEach((m,h)=>{m===Ze?e.add(h):m===At&&t.add(h)}),i||c.set("offset",l/this.duration),n.push(c)});let s=[...e.values()],o=[...t.values()];if(i){let a=n[0],l=new Map(a);a.set("offset",0),l.set("offset",1),n=[a,l]}return gr(this.element,n,s,o,this.duration,this.startTime,this.easing,!1)}},cr=class extends sn{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(e,t,i,n,s,o,a=!1){super(e,t,o.delay),this.keyframes=i,this.preStyleProps=n,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:i,easing:n}=this.timings;if(this._stretchStartingKeyframe&&t){let s=[],o=i+t,a=t/o,l=new Map(e[0]);l.set("offset",0),s.push(l);let c=new Map(e[0]);c.set("offset",jo(a)),s.push(c);let m=e.length-1;for(let h=1;h<=m;h++){let k=new Map(e[h]),x=k.get("offset"),b=t+x*i;k.set("offset",jo(b/o)),s.push(k)}i=o,t=0,n="",e=s}return gr(this.element,e,this.preStyleProps,this.postStyleProps,i,t,n,!0)}};function jo(r,e=3){let t=Math.pow(10,e-1);return Math.round(r*t)/t}function Ql(r,e){let t=new Map,i;return r.forEach(n=>{if(n==="*"){i??=e.keys();for(let s of i)t.set(s,At)}else for(let[s,o]of n)t.set(s,o)}),t}function Ko(r,e,t,i,n,s,o,a,l,c,m,h,k){return{type:0,element:r,triggerName:e,isRemovalTransition:n,fromState:t,fromStyles:s,toState:i,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:m,totalTime:h,errors:k}}var er={},on=class{_triggerName;ast;_stateStyles;constructor(e,t,i){this._triggerName=e,this.ast=t,this._stateStyles=i}match(e,t,i,n){return Wl(this.ast.matchers,e,t,i,n)}buildStyles(e,t,i){let n=this._stateStyles.get("*");return e!==void 0&&(n=this._stateStyles.get(e?.toString())||n),n?n.buildStyles(t,i):new Map}build(e,t,i,n,s,o,a,l,c,m){let h=[],k=this.ast.options&&this.ast.options.params||er,x=a&&a.params||er,b=this.buildStyles(i,x,h),w=l&&l.params||er,P=this.buildStyles(n,w,h),V=new Set,j=new Map,U=new Map,K=n==="void",Wt={params:Xo(w,k),delay:this.ast.options?.delay},Nt=m?[]:Zo(e,t,this.ast.animation,s,o,b,P,Wt,c,h),lt=0;return Nt.forEach(ht=>{lt=Math.max(ht.duration+ht.delay,lt)}),h.length?Ko(t,this._triggerName,i,n,K,b,P,[],[],j,U,lt,h):(Nt.forEach(ht=>{let pe=ht.element,Ie=gt(j,pe,new Set);ht.preStyleProps.forEach(ue=>Ie.add(ue));let jr=gt(U,pe,new Set);ht.postStyleProps.forEach(ue=>jr.add(ue)),pe!==t&&V.add(pe)}),Ko(t,this._triggerName,i,n,K,b,P,Nt,[...V.values()],j,U,lt))}};function Wl(r,e,t,i,n){return r.some(s=>s(e,t,i,n))}function Xo(r,e){let t=St({},e);return Object.entries(r).forEach(([i,n])=>{n!=null&&(t[i]=n)}),t}var dr=class{styles;defaultParams;normalizer;constructor(e,t,i){this.styles=e,this.defaultParams=t,this.normalizer=i}buildStyles(e,t){let i=new Map,n=Xo(e,this.defaultParams);return this.styles.styles.forEach(s=>{typeof s!="string"&&s.forEach((o,a)=>{o&&(o=Ve(o,n,t));let l=this.normalizer.normalizePropertyName(a,t);o=this.normalizer.normalizeStyleValue(a,l,o,t),i.set(a,o)})}),i}};function Yl(r,e,t){return new mr(r,e,t)}var mr=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(e,t,i){this.name=e,this.ast=t,this._normalizer=i,t.states.forEach(n=>{let s=n.options&&n.options.params||{};this.states.set(n.name,new dr(n.style,s,i))}),Uo(this.states,"true","1"),Uo(this.states,"false","0"),t.transitions.forEach(n=>{this.transitionFactories.push(new on(e,n,this.states))}),this.fallbackTransition=$l(e,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,i,n){return this.transitionFactories.find(o=>o.match(e,t,i,n))||null}matchStyles(e,t,i){return this.fallbackTransition.buildStyles(e,t,i)}};function $l(r,e,t){let i=[(o,a)=>!0],n={type:M.Sequence,steps:[],options:null},s={type:M.Transition,animation:n,matchers:i,options:null,queryCount:0,depCount:0};return new on(r,s,e)}function Uo(r,e,t){r.has(e)?r.has(t)||r.set(t,r.get(e)):r.has(t)&&r.set(e,r.get(t))}var Zl=new ni,hr=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i}register(e,t){let i=[],n=[],s=$o(this._driver,t,i,n);if(i.length)throw So(i);this._animations.set(e,s)}_buildPlayer(e,t,i){let n=e.element,s=Gn(this._normalizer,e.keyframes,t,i);return this._driver.animate(n,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,i={}){let n=[],s=this._animations.get(e),o,a=new Map;if(s?(o=Zo(this._driver,t,s,Zn,Qi,new Map,new Map,i,Zl,n),o.forEach(m=>{let h=gt(a,m.element,new Map);m.postStyleProps.forEach(k=>h.set(k,null))})):(n.push(Eo()),o=[]),n.length)throw To(n);a.forEach((m,h)=>{m.forEach((k,x)=>{m.set(x,this._driver.computeStyle(h,x,At))})});let l=o.map(m=>{let h=a.get(m.element);return this._buildPlayer(m,new Map,h)}),c=te(l);return this._playersById.set(e,c),c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let i=this.players.indexOf(t);i>=0&&this.players.splice(i,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw Co(e);return t}listen(e,t,i,n){let s=qi(t,"","","");return Hi(this._getPlayer(e),i,s,n),()=>{}}command(e,t,i,n){if(i=="register"){this.register(e,n[0]);return}if(i=="create"){let o=n[0]||{};this.create(e,t,o);return}let s=this._getPlayer(e);switch(i){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(n[0]));break;case"destroy":this.destroy(e);break}}},Ho="ng-animate-queued",Xl=".ng-animate-queued",ir="ng-animate-disabled",Jl=".ng-animate-disabled",tc="ng-star-inserted",ec=".ng-star-inserted",ic=[],Jo={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},nc={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Lt="__ng_removed",ri=class{namespaceId;value;options;get params(){return this.options.params}constructor(e,t=""){this.namespaceId=t;let i=e&&e.hasOwnProperty("value"),n=i?e.value:e;if(this.value=sc(n),i){let s=e,{value:o}=s,a=qr(s,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let i=this.options.params;Object.keys(t).forEach(n=>{i[n]==null&&(i[n]=t[n])})}}},ii="void",nr=new ri(ii),pr=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(e,t,i){this.id=e,this.hostElement=t,this._engine=i,this._hostClassName="ng-tns-"+e,Mt(t,this._hostClassName)}listen(e,t,i,n){if(!this._triggers.has(t))throw Do(i,t);if(i==null||i.length==0)throw Po(t);if(!oc(i))throw Mo(i,t);let s=gt(this._elementListeners,e,[]),o={name:t,phase:i,callback:n};s.push(o);let a=gt(this._engine.statesByElement,e,new Map);return a.has(t)||(Mt(e,Je),Mt(e,Je+"-"+t),a.set(t,nr)),()=>{this._engine.afterFlush(()=>{let l=s.indexOf(o);l>=0&&s.splice(l,1),this._triggers.has(t)||a.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw Io(e);return t}trigger(e,t,i,n=!0){let s=this._getTrigger(t),o=new si(this.id,t,e),a=this._engine.statesByElement.get(e);a||(Mt(e,Je),Mt(e,Je+"-"+t),this._engine.statesByElement.set(e,a=new Map));let l=a.get(t),c=new ri(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),a.set(t,c),l||(l=nr),!(c.value===ii)&&l.value===c.value){if(!cc(l.params,c.params)){let w=[],P=s.matchStyles(l.value,l.params,w),V=s.matchStyles(c.value,c.params,w);w.length?this._engine.reportError(w):this._engine.afterFlush(()=>{me(e,P),Ot(e,V)})}return}let k=gt(this._engine.playersByElement,e,[]);k.forEach(w=>{w.namespaceId==this.id&&w.triggerName==t&&w.queued&&w.destroy()});let x=s.matchTransition(l.value,c.value,e,c.params),b=!1;if(!x){if(!n)return;x=s.fallbackTransition,b=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:x,fromState:l,toState:c,player:o,isFallbackTransition:b}),b||(Mt(e,Ho),o.onStart(()=>{je(e,Ho)})),o.onDone(()=>{let w=this.players.indexOf(o);w>=0&&this.players.splice(w,1);let P=this._engine.playersByElement.get(e);if(P){let V=P.indexOf(o);V>=0&&P.splice(V,1)}}),this.players.push(o),k.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,i)=>{this._elementListeners.set(i,t.filter(n=>n.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(i=>i.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let i=this._engine.driver.query(e,ti,!0);i.forEach(n=>{if(n[Lt])return;let s=this._engine.fetchNamespacesByElement(n);s.size?s.forEach(o=>o.triggerLeaveAnimation(n,t,!1,!0)):this.clearElementCache(n)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(n=>this.clearElementCache(n)))}triggerLeaveAnimation(e,t,i,n){let s=this._engine.statesByElement.get(e),o=new Map;if(s){let a=[];if(s.forEach((l,c)=>{if(o.set(c,l.value),this._triggers.has(c)){let m=this.trigger(e,c,ii,n);m&&a.push(m)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),i&&te(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),i=this._engine.statesByElement.get(e);if(t&&i){let n=new Set;t.forEach(s=>{let o=s.name;if(n.has(o))return;n.add(o);let l=this._triggers.get(o).fallbackTransition,c=i.get(o)||nr,m=new ri(ii),h=new si(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:l,fromState:c,toState:m,player:h,isFallbackTransition:!0})})}}removeNode(e,t){let i=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let n=!1;if(i.totalAnimations){let s=i.players.length?i.playersByQueriedElement.get(e):[];if(s&&s.length)n=!0;else{let o=e;for(;o=o.parentNode;)if(i.statesByElement.get(o)){n=!0;break}}}if(this.prepareLeaveAnimationListeners(e),n)i.markElementAsRemoved(this.id,e,!1,t);else{let s=e[Lt];(!s||s===Jo)&&(i.afterFlush(()=>this.clearElementCache(e)),i.destroyInnerAnimations(e),i._onRemovalComplete(e,t))}}insertNode(e,t){Mt(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(i=>{let n=i.player;if(n.destroyed)return;let s=i.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==i.triggerName){let l=qi(s,i.triggerName,i.fromState.value,i.toState.value);l._data=e,Hi(i.player,a.phase,l,a.callback)}}),n.markedForDestroy?this._engine.afterFlush(()=>{n.destroy()}):t.push(i)}),this._queue=[],t.sort((i,n)=>{let s=i.transition.ast.depCount,o=n.transition.ast.depCount;return s==0||o==0?s-o:this._engine.driver.containsElement(i.element,n.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}},ur=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(e,t)=>{};_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,i){this.bodyNode=e,this.driver=t,this._normalizer=i}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(i=>{i.queued&&e.push(i)})}),e}createNamespace(e,t){let i=new pr(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(i,t):(this.newHostElements.set(t,i),this.collectEnterElement(t)),this._namespaceLookup[e]=i}_balanceNamespaceList(e,t){let i=this._namespaceList,n=this.namespacesByHostElement;if(i.length-1>=0){let o=!1,a=this.driver.getParentElement(t);for(;a;){let l=n.get(a);if(l){let c=i.indexOf(l);i.splice(c+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||i.unshift(e)}else i.push(e);return n.set(t,e),e}register(e,t){let i=this._namespaceLookup[e];return i||(i=this.createNamespace(e,t)),i}registerTrigger(e,t,i){let n=this._namespaceLookup[e];n&&n.register(t,i)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(e);this.namespacesByHostElement.delete(i.hostElement);let n=this._namespaceList.indexOf(i);n>=0&&this._namespaceList.splice(n,1),i.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,i=this.statesByElement.get(e);if(i){for(let n of i.values())if(n.namespaceId){let s=this._fetchNamespace(n.namespaceId);s&&t.add(s)}}return t}trigger(e,t,i,n){if(Ji(t)){let s=this._fetchNamespace(e);if(s)return s.trigger(t,i,n),!0}return!1}insertNode(e,t,i,n){if(!Ji(t))return;let s=t[Lt];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){let o=this._fetchNamespace(e);o&&o.insertNode(t,i)}n&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),Mt(e,ir)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),je(e,ir))}removeNode(e,t,i){if(Ji(t)){let n=e?this._fetchNamespace(e):null;n?n.removeNode(t,i):this.markElementAsRemoved(e,t,!1,i);let s=this.namespacesByHostElement.get(t);s&&s.id!==e&&s.removeNode(t,i)}else this._onRemovalComplete(t,i)}markElementAsRemoved(e,t,i,n,s){this.collectedLeaveElements.push(t),t[Lt]={namespaceId:e,setForRemoval:n,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,i,n,s){return Ji(t)?this._fetchNamespace(e).listen(t,i,n,s):()=>{}}_buildInstruction(e,t,i,n,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,i,n,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,ti,!0);t.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,Wi,!0),t.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return te(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[Lt];if(t&&t.setForRemoval){if(e[Lt]=Jo,t.namespaceId){this.destroyInnerAnimations(e);let i=this._fetchNamespace(t.namespaceId);i&&i.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(ir)&&this.markElementAsDisabled(e,!1),this.driver.query(e,Jl,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,n)=>this._balanceNamespaceList(i,n)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let n=this.collectedEnterElements[i];Mt(n,tc)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{t=this._flushAnimations(i,e)}finally{for(let n=0;n<i.length;n++)i[n]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let n=this.collectedLeaveElements[i];this.processLeaveNode(n)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],t.length?te(t).onDone(()=>{i.forEach(n=>n())}):i.forEach(n=>n())}}reportError(e){throw Ro(e)}_flushAnimations(e,t){let i=new ni,n=[],s=new Map,o=[],a=new Map,l=new Map,c=new Map,m=new Set;this.disabledNodes.forEach(_=>{m.add(_);let v=this.driver.query(_,Xl,!0);for(let y=0;y<v.length;y++)m.add(v[y])});let h=this.bodyNode,k=Array.from(this.statesByElement.keys()),x=Qo(k,this.collectedEnterElements),b=new Map,w=0;x.forEach((_,v)=>{let y=Zn+w++;b.set(v,y),_.forEach(I=>Mt(I,y))});let P=[],V=new Set,j=new Set;for(let _=0;_<this.collectedLeaveElements.length;_++){let v=this.collectedLeaveElements[_],y=v[Lt];y&&y.setForRemoval&&(P.push(v),V.add(v),y.hasAnimation?this.driver.query(v,ec,!0).forEach(I=>V.add(I)):j.add(v))}let U=new Map,K=Qo(k,Array.from(V));K.forEach((_,v)=>{let y=Qi+w++;U.set(v,y),_.forEach(I=>Mt(I,y))}),e.push(()=>{x.forEach((_,v)=>{let y=b.get(v);_.forEach(I=>je(I,y))}),K.forEach((_,v)=>{let y=U.get(v);_.forEach(I=>je(I,y))}),P.forEach(_=>{this.processLeaveNode(_)})});let Wt=[],Nt=[];for(let _=this._namespaceList.length-1;_>=0;_--)this._namespaceList[_].drainQueuedTransitions(t).forEach(y=>{let I=y.player,Y=y.element;if(Wt.push(I),this.collectedEnterElements.length){let rt=Y[Lt];if(rt&&rt.setForMove){if(rt.previousTriggersValues&&rt.previousTriggersValues.has(y.triggerName)){let fe=rt.previousTriggersValues.get(y.triggerName),xt=this.statesByElement.get(y.element);if(xt&&xt.has(y.triggerName)){let pi=xt.get(y.triggerName);pi.value=fe,xt.set(y.triggerName,pi)}}I.destroy();return}}let Ft=!h||!this.driver.containsElement(h,Y),vt=U.get(Y),ee=b.get(Y),L=this._buildInstruction(y,i,ee,vt,Ft);if(L.errors&&L.errors.length){Nt.push(L);return}if(Ft){I.onStart(()=>me(Y,L.fromStyles)),I.onDestroy(()=>Ot(Y,L.toStyles)),n.push(I);return}if(y.isFallbackTransition){I.onStart(()=>me(Y,L.fromStyles)),I.onDestroy(()=>Ot(Y,L.toStyles)),n.push(I);return}let Hr=[];L.timelines.forEach(rt=>{rt.stretchStartingKeyframe=!0,this.disabledNodes.has(rt.element)||Hr.push(rt)}),L.timelines=Hr,i.append(Y,L.timelines);let ll={instruction:L,player:I,element:Y};o.push(ll),L.queriedElements.forEach(rt=>gt(a,rt,[]).push(I)),L.preStyleProps.forEach((rt,fe)=>{if(rt.size){let xt=l.get(fe);xt||l.set(fe,xt=new Set),rt.forEach((pi,xn)=>xt.add(xn))}}),L.postStyleProps.forEach((rt,fe)=>{let xt=c.get(fe);xt||c.set(fe,xt=new Set),rt.forEach((pi,xn)=>xt.add(xn))})});if(Nt.length){let _=[];Nt.forEach(v=>{_.push(Ao(v.triggerName,v.errors))}),Wt.forEach(v=>v.destroy()),this.reportError(_)}let lt=new Map,ht=new Map;o.forEach(_=>{let v=_.element;i.has(v)&&(ht.set(v,v),this._beforeAnimationBuild(_.player.namespaceId,_.instruction,lt))}),n.forEach(_=>{let v=_.element;this._getPreviousPlayers(v,!1,_.namespaceId,_.triggerName,null).forEach(I=>{gt(lt,v,[]).push(I),I.destroy()})});let pe=P.filter(_=>Wo(_,l,c)),Ie=new Map;Go(Ie,this.driver,j,c,At).forEach(_=>{Wo(_,l,c)&&pe.push(_)});let ue=new Map;x.forEach((_,v)=>{Go(ue,this.driver,new Set(_),l,Ze)}),pe.forEach(_=>{let v=Ie.get(_),y=ue.get(_);Ie.set(_,new Map([...v?.entries()??[],...y?.entries()??[]]))});let kn=[],Kr=[],Ur={};o.forEach(_=>{let{element:v,player:y,instruction:I}=_;if(i.has(v)){if(m.has(v)){y.onDestroy(()=>Ot(v,I.toStyles)),y.disabled=!0,y.overrideTotalTime(I.totalTime),n.push(y);return}let Y=Ur;if(ht.size>1){let vt=v,ee=[];for(;vt=vt.parentNode;){let L=ht.get(vt);if(L){Y=L;break}ee.push(vt)}ee.forEach(L=>ht.set(L,Y))}let Ft=this._buildAnimation(y.namespaceId,I,lt,s,ue,Ie);if(y.setRealPlayer(Ft),Y===Ur)kn.push(y);else{let vt=this.playersByElement.get(Y);vt&&vt.length&&(y.parentPlayer=te(vt)),n.push(y)}}else me(v,I.fromStyles),y.onDestroy(()=>Ot(v,I.toStyles)),Kr.push(y),m.has(v)&&n.push(y)}),Kr.forEach(_=>{let v=s.get(_.element);if(v&&v.length){let y=te(v);_.setRealPlayer(y)}}),n.forEach(_=>{_.parentPlayer?_.syncPlayerEvents(_.parentPlayer):_.destroy()});for(let _=0;_<P.length;_++){let v=P[_],y=v[Lt];if(je(v,Qi),y&&y.hasAnimation)continue;let I=[];if(a.size){let Ft=a.get(v);Ft&&Ft.length&&I.push(...Ft);let vt=this.driver.query(v,Wi,!0);for(let ee=0;ee<vt.length;ee++){let L=a.get(vt[ee]);L&&L.length&&I.push(...L)}}let Y=I.filter(Ft=>!Ft.destroyed);Y.length?ac(this,v,Y):this.processLeaveNode(v)}return P.length=0,kn.forEach(_=>{this.players.push(_),_.onDone(()=>{_.destroy();let v=this.players.indexOf(_);this.players.splice(v,1)}),_.play()}),kn}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,i,n,s){let o=[];if(t){let a=this.playersByQueriedElement.get(e);a&&(o=a)}else{let a=this.playersByElement.get(e);if(a){let l=!s||s==ii;a.forEach(c=>{c.queued||!l&&c.triggerName!=n||o.push(c)})}}return(i||n)&&(o=o.filter(a=>!(i&&i!=a.namespaceId||n&&n!=a.triggerName))),o}_beforeAnimationBuild(e,t,i){let n=t.triggerName,s=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:n;for(let l of t.timelines){let c=l.element,m=c!==s,h=gt(i,c,[]);this._getPreviousPlayers(c,m,o,a,t.toState).forEach(x=>{let b=x.getRealPlayer();b.beforeDestroy&&b.beforeDestroy(),x.destroy(),h.push(x)})}me(s,t.fromStyles)}_buildAnimation(e,t,i,n,s,o){let a=t.triggerName,l=t.element,c=[],m=new Set,h=new Set,k=t.timelines.map(b=>{let w=b.element;m.add(w);let P=w[Lt];if(P&&P.removedBeforeQueried)return new Ee(b.duration,b.delay);let V=w!==l,j=lc((i.get(w)||ic).map(lt=>lt.getRealPlayer())).filter(lt=>{let ht=lt;return ht.element?ht.element===w:!1}),U=s.get(w),K=o.get(w),Wt=Gn(this._normalizer,b.keyframes,U,K),Nt=this._buildPlayer(b,Wt,j);if(b.subTimeline&&n&&h.add(w),V){let lt=new si(e,a,w);lt.setRealPlayer(Nt),c.push(lt)}return Nt});c.forEach(b=>{gt(this.playersByQueriedElement,b.element,[]).push(b),b.onDone(()=>rc(this.playersByQueriedElement,b.element,b))}),m.forEach(b=>Mt(b,Xn));let x=te(k);return x.onDestroy(()=>{m.forEach(b=>je(b,Xn)),Ot(l,t.toStyles)}),h.forEach(b=>{gt(n,b,[]).push(x)}),x}_buildPlayer(e,t,i){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,i):new Ee(e.duration,e.delay)}},si=class{namespaceId;triggerName;element;_player=new Ee;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(e,t,i){this.namespaceId=e,this.triggerName=t,this.element=i}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,i)=>{t.forEach(n=>Hi(e,i,void 0,n))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){gt(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function rc(r,e,t){let i=r.get(e);if(i){if(i.length){let n=i.indexOf(t);i.splice(n,1)}i.length==0&&r.delete(e)}return i}function sc(r){return r??null}function Ji(r){return r&&r.nodeType===1}function oc(r){return r=="start"||r=="done"}function qo(r,e){let t=r.style.display;return r.style.display=e??"none",t}function Go(r,e,t,i,n){let s=[];t.forEach(l=>s.push(qo(l)));let o=[];i.forEach((l,c)=>{let m=new Map;l.forEach(h=>{let k=e.computeStyle(c,h,n);m.set(h,k),(!k||k.length==0)&&(c[Lt]=nc,o.push(c))}),r.set(c,m)});let a=0;return t.forEach(l=>qo(l,s[a++])),o}function Qo(r,e){let t=new Map;if(r.forEach(a=>t.set(a,[])),e.length==0)return t;let i=1,n=new Set(e),s=new Map;function o(a){if(!a)return i;let l=s.get(a);if(l)return l;let c=a.parentNode;return t.has(c)?l=c:n.has(c)?l=i:l=o(c),s.set(a,l),l}return e.forEach(a=>{let l=o(a);l!==i&&t.get(l).push(a)}),t}function Mt(r,e){r.classList?.add(e)}function je(r,e){r.classList?.remove(e)}function ac(r,e,t){te(t).onDone(()=>r.processLeaveNode(e))}function lc(r){let e=[];return ta(r,e),e}function ta(r,e){for(let t=0;t<r.length;t++){let i=r[t];i instanceof Li?ta(i.players,e):e.push(i)}}function cc(r,e){let t=Object.keys(r),i=Object.keys(e);if(t.length!=i.length)return!1;for(let n=0;n<t.length;n++){let s=t[n];if(!e.hasOwnProperty(s)||r[s]!==e[s])return!1}return!0}function Wo(r,e,t){let i=t.get(r);if(!i)return!1;let n=e.get(r);return n?i.forEach(s=>n.add(s)):e.set(r,i),t.delete(r),!0}var Ke=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(e,t)=>{};constructor(e,t,i){this._driver=t,this._normalizer=i,this._transitionEngine=new ur(e.body,t,i),this._timelineEngine=new hr(e.body,t,i),this._transitionEngine.onRemovalComplete=(n,s)=>this.onRemovalComplete(n,s)}registerTrigger(e,t,i,n,s){let o=e+"-"+n,a=this._triggerCache[o];if(!a){let l=[],c=[],m=$o(this._driver,s,l,c);if(l.length)throw xo(n,l);a=Yl(n,m,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,n,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,i,n){this._transitionEngine.insertNode(e,t,i,n)}onRemove(e,t,i){this._transitionEngine.removeNode(e,t,i)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,i,n){if(i.charAt(0)=="@"){let[s,o]=Qn(i),a=n;this._timelineEngine.command(s,t,o,a)}else this._transitionEngine.trigger(e,t,i,n)}listen(e,t,i,n,s){if(i.charAt(0)=="@"){let[o,a]=Qn(i);return this._timelineEngine.listen(o,t,a,s)}return this._transitionEngine.listen(e,t,i,n,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function dc(r,e){let t=null,i=null;return Array.isArray(e)&&e.length?(t=rr(e[0]),e.length>1&&(i=rr(e[e.length-1]))):e instanceof Map&&(t=rr(e)),t||i?new mc(r,t,i):null}var mc=(()=>{class r{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(t,i,n){this._element=t,this._startStyles=i,this._endStyles=n;let s=r.initialStylesByElement.get(t);s||r.initialStylesByElement.set(t,s=new Map),this._initialStyles=s}start(){this._state<1&&(this._startStyles&&Ot(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Ot(this._element,this._initialStyles),this._endStyles&&(Ot(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(r.initialStylesByElement.delete(this._element),this._startStyles&&(me(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(me(this._element,this._endStyles),this._endStyles=null),Ot(this._element,this._initialStyles),this._state=3)}}return r})();function rr(r){let e=null;return r.forEach((t,i)=>{hc(i)&&(e=e||new Map,e.set(i,t))}),e}function hc(r){return r==="display"||r==="position"}var an=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(e,t,i,n){this.element=e,this.keyframes=t,this.options=i,this._specialStyles=n,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let e=this.keyframes,t=this._triggerWebAnimation(this.element,e,this.options);if(!t)return this._onFinish(),null;this.domPlayer=t,this._finalKeyframe=e.length?e[e.length-1]:new Map;let i=()=>this._onFinish();return t.addEventListener("finish",i),this.onDestroy(()=>{t.removeEventListener("finish",i)}),t}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(i=>{t.push(Object.fromEntries(i))}),t}_triggerWebAnimation(e,t,i){let n=this._convertKeyframesToObject(t);try{return e.animate(n,i)}catch{return null}}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){let e=this._buildPlayer();e&&(this.hasStarted()||(this._onStartFns.forEach(t=>t()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),e.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=e*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,n)=>{n!=="offset"&&e.set(n,this._finished?i:$i(this.element,n))}),this.currentSnapshot=e}triggerCallback(e){let t=e==="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},ln=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}containsElement(e,t){return Wn(e,t)}getParentElement(e){return Gi(e)}query(e,t,i){return Yn(e,t,i)}computeStyle(e,t,i){return $i(e,t)}animate(e,t,i,n,s,o=[]){let a=n==0?"both":"forwards",l={duration:i,delay:n,fill:a};s&&(l.easing=s);let c=new Map,m=o.filter(x=>x instanceof an);Fo(i,n)&&m.forEach(x=>{x.currentSnapshot.forEach((b,w)=>c.set(w,b))});let h=Lo(t).map(x=>new Map(x));h=Bo(e,h,c);let k=dc(e,h);return new an(e,h,l,k)}};var tn="@",ea="@.disabled",cn=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(e,t,i,n){this.namespaceId=e,this.delegate=t,this.engine=i,this._onDestroy=n}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,i,n=!0){this.delegate.insertBefore(e,t,i),this.engine.onInsert(this.namespaceId,t,e,n)}removeChild(e,t,i,n){if(n){this.delegate.removeChild(e,t,i,n);return}this.parentNode(t)&&this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,n){this.delegate.setAttribute(e,t,i,n)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,n){this.delegate.setStyle(e,t,i,n)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){t.charAt(0)==tn&&t==ea?this.disableAnimations(e,!!i):this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i,n){return this.delegate.listen(e,t,i,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}},fr=class extends cn{factory;constructor(e,t,i,n,s){super(t,i,n,s),this.factory=e,this.namespaceId=t}setProperty(e,t,i){t.charAt(0)==tn?t.charAt(1)=="."&&t==ea?(i=i===void 0?!0:!!i,this.disableAnimations(e,i)):this.engine.process(this.namespaceId,e,t.slice(1),i):this.delegate.setProperty(e,t,i)}listen(e,t,i,n){if(t.charAt(0)==tn){let s=pc(e),o=t.slice(1),a="";return o.charAt(0)!=tn&&([o,a]=uc(o)),this.engine.listen(this.namespaceId,s,o,a,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,i,l)})}return this.delegate.listen(e,t,i,n)}};function pc(r){switch(r){case"body":return document.body;case"document":return document;case"window":return window;default:return r}}function uc(r){let e=r.indexOf("."),t=r.substring(0,e),i=r.slice(e+1);return[t,i]}var dn=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(e,t,i){this.delegate=e,this.engine=t,this._zone=i,t.onRemovalComplete=(n,s)=>{s?.removeChild(null,n)}}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let c=this._rendererCache,m=c.get(n);if(!m){let h=()=>c.delete(n);m=new cn("",n,this.engine,h),c.set(n,m)}return m}let s=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);let a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(s,o,e,c.name,c)};return t.data.animation.forEach(a),new fr(this,o,n,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,i){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(i));return}let n=this._animationCallbacksBuffer;n.length==0&&queueMicrotask(()=>{this._zone.run(()=>{n.forEach(s=>{let[o,a]=s;o(a)}),this._animationCallbacksBuffer=[]})}),n.push([t,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(e){this.engine.flush(),this.delegate.componentReplaced?.(e)}};var _c=(()=>{class r extends Ke{constructor(t,i,n){super(t,i,n)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||r)(be(pt),be(Pe),be(Me))};static \u0275prov=st({token:r,factory:r.\u0275fac})}return r})();function gc(){return new en}function bc(){return new dn(d(Ds),d(Ke),d(it))}var ia=[{provide:Me,useFactory:gc},{provide:Ke,useClass:_c},{provide:Ge,useFactory:bc}],Xm=[{provide:Pe,useClass:_r},{provide:Tn,useValue:"NoopAnimations"},...ia],vc=[{provide:Pe,useFactory:()=>new ln},{provide:Tn,useFactory:()=>"BrowserAnimations"},...ia];function na(){return is("NgEagerAnimations"),[...vc]}var br="Service workers are disabled or not supported by this browser",Ue=class{serviceWorker;worker;registration;events;constructor(e,t){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=new _e(i=>i.error(new C(5601,!1)));else{let i=null,n=new T;this.worker=new _e(c=>(i!==null&&c.next(i),n.subscribe(m=>c.next(m))));let s=()=>{let{controller:c}=e;c!==null&&(i=c,n.next(i))};e.addEventListener("controllerchange",s),s(),this.registration=this.worker.pipe(ge(()=>e.getRegistration().then(c=>{if(!c)throw new C(5601,!1);return c})));let o=new T;this.events=o.asObservable();let a=c=>{let{data:m}=c;m?.type&&o.next(m)};e.addEventListener("message",a),t?.get(Pn,null,{optional:!0})?.onDestroy(()=>{e.removeEventListener("controllerchange",s),e.removeEventListener("message",a)})}}postMessage(e,t){return new Promise(i=>{this.worker.pipe(Bt(1)).subscribe(n=>{n.postMessage(St({action:e},t)),i()})})}postMessageWithOperation(e,t,i){let n=this.waitForOperationCompleted(i),s=this.postMessage(e,t);return Promise.all([s,n]).then(([,o])=>o)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let t;return typeof e=="string"?t=i=>i.type===e:t=i=>e.includes(i.type),this.events.pipe(se(t))}nextEventOfType(e){return this.eventsOfType(e).pipe(Bt(1))}waitForOperationCompleted(e){return new Promise((t,i)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(se(n=>n.nonce===e),Bt(1),Et(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:t,error:i})})}get isEnabled(){return!!this.serviceWorker}},yc=(()=>{class r{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new T;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=re,this.notificationClicks=re,this.notificationCloses=re,this.pushSubscriptionChanges=re,this.subscription=re;return}this.messages=this.sw.eventsOfType("PUSH").pipe(Et(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(Et(n=>n.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(Et(n=>n.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(Et(n=>n.data)),this.pushManager=this.sw.registration.pipe(Et(n=>n.pushManager));let i=this.pushManager.pipe(ge(n=>n.getSubscription()));this.subscription=new _e(n=>{let s=i.subscribe(n),o=this.subscriptionChanges.subscribe(n);return()=>{s.unsubscribe(),o.unsubscribe()}})}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(br));let i={userVisibleOnly:!0},n=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(n.length));for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return i.applicationServerKey=s,new Promise((o,a)=>{this.pushManager.pipe(ge(l=>l.subscribe(i)),Bt(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),o(l)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(br));let t=i=>{if(i===null)throw new C(5602,!1);return i.unsubscribe().then(n=>{if(!n)throw new C(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((i,n)=>{this.subscription.pipe(Bt(1),ge(t)).subscribe({next:i,error:n})})}decodeBase64(t){return atob(t)}static \u0275fac=function(i){return new(i||r)(be(Ue))};static \u0275prov=st({token:r,factory:r.\u0275fac})}return r})(),vr=(()=>{class r{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=re,this.unrecoverable=re;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(br));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let t=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new C(5601,!1));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static \u0275fac=function(i){return new(i||r)(be(Ue))};static \u0275prov=st({token:r,factory:r.\u0275fac})}return r})(),sa=new $("");function wc(){let r=d(oi);if(!("serviceWorker"in navigator&&r.enabled!==!1))return;let e=d(sa),t=d(it),i=d(Pn);t.runOutsideAngular(()=>{let n=navigator.serviceWorker,s=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",s),i.onDestroy(()=>{n.removeEventListener("controllerchange",s)})}),t.runOutsideAngular(()=>{let n,{registrationStrategy:s}=r;if(typeof s=="function")n=new Promise(o=>s().subscribe(()=>o()));else{let[o,...a]=(s||"registerWhenStable:30000").split(":");switch(o){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=ra(+a[0]||0);break;case"registerWhenStable":n=Promise.race([i.whenStable(),ra(+a[0])]);break;default:throw new C(5600,!1)}}n.then(()=>{i.destroyed||navigator.serviceWorker.register(e,{scope:r.scope,updateViaCache:r.updateViaCache,type:r.type}).catch(o=>console.error(Zr(5604,!1)))})})}function ra(r){return new Promise(e=>setTimeout(e,r))}function kc(){let r=d(oi),e=d(Z),t=!0;return new Ue(t&&r.enabled!==!1?navigator.serviceWorker:void 0,e)}var oi=class{enabled;updateViaCache;type;scope;registrationStrategy};function oa(r,e={}){return Xr([yc,vr,{provide:sa,useValue:r},{provide:oi,useValue:e},{provide:Ue,useFactory:kc},rs(wc)])}function kr(r){let e=r.cloneNode(!0),t=e.querySelectorAll("[id]"),i=r.nodeName.toLowerCase();e.removeAttribute("id");for(let n=0;n<t.length;n++)t[n].removeAttribute("id");return i==="canvas"?ca(r,e):(i==="input"||i==="select"||i==="textarea")&&la(r,e),aa("canvas",r,e,ca),aa("input, textarea, select",r,e,la),e}function aa(r,e,t,i){let n=e.querySelectorAll(r);if(n.length){let s=t.querySelectorAll(r);for(let o=0;o<n.length;o++)i(n[o],s[o])}}var xc=0;function la(r,e){e.type!=="file"&&(e.value=r.value),e.type==="radio"&&e.name&&(e.name=`mat-clone-${e.name}-${xc++}`)}function ca(r,e){let t=e.getContext("2d");if(t)try{t.drawImage(r,0,0)}catch{}}function Mr(r){let e=r.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height,x:e.x,y:e.y}}function xr(r,e,t){let{top:i,bottom:n,left:s,right:o}=r;return t>=i&&t<=n&&e>=s&&e<=o}function Sc(r,e){let t=e.left<r.left,i=e.left+e.width>r.right,n=e.top<r.top,s=e.top+e.height>r.bottom;return t||i||n||s}function ci(r,e,t){r.top+=e,r.bottom=r.top+r.height,r.left+=t,r.right=r.left+r.width}function da(r,e,t,i){let{top:n,right:s,bottom:o,left:a,width:l,height:c}=r,m=l*e,h=c*e;return i>n-h&&i<o+h&&t>a-m&&t<s+m}var mn=class{_document;positions=new Map;constructor(e){this._document=e}clear(){this.positions.clear()}cache(e){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),e.forEach(t=>{this.positions.set(t,{scrollPosition:{top:t.scrollTop,left:t.scrollLeft},clientRect:Mr(t)})})}handleScroll(e){let t=We(e),i=this.positions.get(t);if(!i)return null;let n=i.scrollPosition,s,o;if(t===this._document){let c=this.getViewportScrollPosition();s=c.top,o=c.left}else s=t.scrollTop,o=t.scrollLeft;let a=n.top-s,l=n.left-o;return this.positions.forEach((c,m)=>{c.clientRect&&t!==m&&t.contains(m)&&ci(c.clientRect,a,l)}),n.top=s,n.left=o,{top:a,left:l}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function wa(r,e){let t=r.rootNodes;if(t.length===1&&t[0].nodeType===e.ELEMENT_NODE)return t[0];let i=e.createElement("div");return t.forEach(n=>i.appendChild(n)),i}function Ir(r,e,t){for(let i in e)if(e.hasOwnProperty(i)){let n=e[i];n?r.setProperty(i,n,t?.has(i)?"important":""):r.removeProperty(i)}return r}function He(r,e){let t=e?"":"none";Ir(r.style,{"touch-action":e?"":"none","-webkit-user-drag":e?"":"none","-webkit-tap-highlight-color":e?"":"transparent","user-select":t,"-ms-user-select":t,"-webkit-user-select":t,"-moz-user-select":t})}function ma(r,e,t){Ir(r.style,{position:e?"":"fixed",top:e?"":"0",opacity:e?"":"0",left:e?"":"-999em"},t)}function hn(r,e){return e&&e!="none"?r+" "+e:r}function ha(r,e){r.style.width=`${e.width}px`,r.style.height=`${e.height}px`,r.style.transform=di(e.left,e.top)}function di(r,e){return`translate3d(${Math.round(r)}px, ${Math.round(e)}px, 0)`}var ai={capture:!0},yr={passive:!1,capture:!0},Ec=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(i,n){},styles:[`@layer cdk-resets {
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
`],encapsulation:2,changeDetection:0})}return r})(),Rr=(()=>{class r{_ngZone=d(it);_document=d(pt);_styleLoader=d(Ei);_renderer=d(Ge).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new T;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=zt([]);_globalListeners;_draggingPredicate=t=>t.isDragging();_domNodesToDirectives=null;pointerMove=new T;pointerUp=new T;constructor(){}registerDropContainer(t){this._dropInstances.has(t)||this._dropInstances.add(t)}registerDragItem(t){this._dragInstances.add(t),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,yr)})}removeDropContainer(t){this._dropInstances.delete(t)}removeDragItem(t){this._dragInstances.delete(t),this.stopDragging(t),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(t,i){if(!(this._activeDragInstances().indexOf(t)>-1)&&(this._styleLoader.load(Ec),this._activeDragInstances.update(n=>[...n,t]),this._activeDragInstances().length===1)){let n=i.type.startsWith("touch"),s=a=>this.pointerUp.next(a),o=[["scroll",a=>this._scroll.next(a),ai],["selectstart",this._preventDefaultWhileDragging,yr]];n?o.push(["touchend",s,ai],["touchcancel",s,ai]):o.push(["mouseup",s,ai]),n||o.push(["mousemove",a=>this.pointerMove.next(a),yr]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=o.map(([a,l,c])=>this._renderer.listen(this._document,a,l,c))})}}stopDragging(t){this._activeDragInstances.update(i=>{let n=i.indexOf(t);return n>-1?(i.splice(n,1),[...i]):i}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(t){return this._activeDragInstances().indexOf(t)>-1}scrolled(t){let i=[this._scroll];return t&&t!==this._document&&i.push(new _e(n=>this._ngZone.runOutsideAngular(()=>{let s=this._renderer.listen(t,"scroll",o=>{this._activeDragInstances().length&&n.next(o)},ai);return()=>{s()}}))),ne(...i)}registerDirectiveNode(t,i){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(t,i)}removeDirectiveNode(t){this._domNodesToDirectives?.delete(t)}getDragDirectiveForNode(t){return this._domNodesToDirectives?.get(t)||null}ngOnDestroy(){this._dragInstances.forEach(t=>this.removeDragItem(t)),this._dropInstances.forEach(t=>this.removeDropContainer(t)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=t=>{this._activeDragInstances().length>0&&t.preventDefault()};_persistentTouchmoveListener=t=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&t.preventDefault(),this.pointerMove.next(t))};_clearGlobalListeners(){this._globalListeners?.forEach(t=>t()),this._globalListeners=void 0}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function pa(r){let e=r.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(r)*e}function Tc(r){let e=getComputedStyle(r),t=wr(e,"transition-property"),i=t.find(a=>a==="transform"||a==="all");if(!i)return 0;let n=t.indexOf(i),s=wr(e,"transition-duration"),o=wr(e,"transition-delay");return pa(s[n])+pa(o[n])}function wr(r,e){return r.getPropertyValue(e).split(",").map(i=>i.trim())}var Cc=new Set(["position"]),Sr=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(e,t,i,n,s,o,a,l,c,m){this._document=e,this._rootElement=t,this._direction=i,this._initialDomRect=n,this._previewTemplate=s,this._previewClass=o,this._pickupPositionOnPage=a,this._initialTransform=l,this._zIndex=c,this._renderer=m}attach(e){this._preview=this._createPreview(),e.appendChild(this._preview),ua(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(e){this._preview.style.transform=e}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(e){this._preview.classList.add(e)}getTransitionDuration(){return Tc(this._preview)}addEventListener(e,t){return this._renderer.listen(this._preview,e,t)}_createPreview(){let e=this._previewTemplate,t=this._previewClass,i=e?e.template:null,n;if(i&&e){let s=e.matchSize?this._initialDomRect:null,o=e.viewContainer.createEmbeddedView(i,e.context);o.detectChanges(),n=wa(o,this._document),this._previewEmbeddedView=o,e.matchSize?ha(n,s):n.style.transform=di(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else n=kr(this._rootElement),ha(n,this._initialDomRect),this._initialTransform&&(n.style.transform=this._initialTransform);return Ir(n.style,{"pointer-events":"none",margin:ua(n)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Cc),He(n,!1),n.classList.add("cdk-drag-preview"),n.setAttribute("popover","manual"),n.setAttribute("dir",this._direction),t&&(Array.isArray(t)?t.forEach(s=>n.classList.add(s)):n.classList.add(t)),n}};function ua(r){return"showPopover"in r}var Dc={passive:!0},fa={passive:!1},Pc={passive:!1,capture:!0},Mc=800,_a="cdk-drag-placeholder",ga=new Set(["position"]);function ka(r,e,t={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let i=r.get(Qe,null,{optional:!0})||r.get(Ge).createRenderer(null,null);return new Er(e,t,r.get(pt),r.get(it),r.get($e),r.get(Rr),i)}var Er=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=zt(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new T;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=ie.EMPTY;_pointerUpSubscription=ie.EMPTY;_scrollSubscription=ie.EMPTY;_resizeSubscription=ie.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(e){e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions(),this._handles.forEach(t=>He(t,e)))}_disabled=!1;beforeStarted=new T;started=new T;released=new T;ended=new T;entered=new T;exited=new T;dropped=new T;moved=this._moveEvents;data;constrainPosition;constructor(e,t,i,n,s,o,a){this._config=t,this._document=i,this._ngZone=n,this._viewportRuler=s,this._dragDropRegistry=o,this._renderer=a,this.withRootElement(e).withParent(t.parentDragRef||null),this._parentPositions=new mn(i),o.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(e){this._handles=e.map(i=>Xt(i)),this._handles.forEach(i=>He(i,this.disabled)),this._toggleNativeDragInteractions();let t=new Set;return this._disabledHandles.forEach(i=>{this._handles.indexOf(i)>-1&&t.add(i)}),this._disabledHandles=t,this}withPreviewTemplate(e){return this._previewTemplate=e,this}withPlaceholderTemplate(e){return this._placeholderTemplate=e,this}withRootElement(e){let t=Xt(e);if(t!==this._rootElement){this._removeRootElementListeners();let i=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[i.listen(t,"mousedown",this._pointerDown,fa),i.listen(t,"touchstart",this._pointerDown,Dc),i.listen(t,"dragstart",this._nativeDragStart,fa)]),this._initialTransform=void 0,this._rootElement=t}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(e){return this._boundaryElement=e?Xt(e):null,this._resizeSubscription.unsubscribe(),e&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(e){return this._parentDragRef=e,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&Sc(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let e=this._boundaryElement.getBoundingClientRect(),t=this._rootElement.getBoundingClientRect(),i=0,n=0;t.left<e.left?i=e.left-t.left:t.right>e.right&&(i=e.right-t.right),t.top<e.top?n=e.top-t.top:t.bottom>e.bottom&&(n=e.bottom-t.bottom);let s=this._activeTransform.x,o=this._activeTransform.y,a=s+i,l=o+n;this._rootElement.style.transform=di(a,l),this._activeTransform={x:a,y:l},this._passiveTransform={x:a,y:l}}}disableHandle(e){!this._disabledHandles.has(e)&&this._handles.indexOf(e)>-1&&(this._disabledHandles.add(e),He(e,!0))}enableHandle(e){this._disabledHandles.has(e)&&(this._disabledHandles.delete(e),He(e,this.disabled))}withDirection(e){return this._direction=e,this}_withDropContainer(e){this._dropContainer=e}getFreeDragPosition(){let e=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:e.x,y:e.y}}setFreeDragPosition(e){return this._activeTransform={x:0,y:0},this._passiveTransform.x=e.x,this._passiveTransform.y=e.y,this._dropContainer||this._applyRootElementTransform(e.x,e.y),this}withPreviewContainer(e){return this._previewContainer=e,this}_sortFromLastPointerPosition(){let e=this._lastKnownPointerPosition;e&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(e),e)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=e=>{if(this.beforeStarted.next(),this._handles.length){let t=this._getTargetHandle(e);t&&!this._disabledHandles.has(t)&&!this.disabled&&this._initializeDragSequence(t,e)}else this.disabled||this._initializeDragSequence(this._rootElement,e)};_pointerMove=e=>{let t=this._getPointerPositionOnPage(e);if(!this._hasStartedDragging()){let n=Math.abs(t.x-this._pickupPositionOnPage.x),s=Math.abs(t.y-this._pickupPositionOnPage.y);if(n+s>=this._config.dragStartThreshold){let a=Date.now()>=this._dragStartTime+this._getDragStartDelay(e),l=this._dropContainer;if(!a){this._endDragSequence(e);return}(!l||!l.isDragging()&&!l.isReceiving())&&(e.cancelable&&e.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(e)))}return}e.cancelable&&e.preventDefault();let i=this._getConstrainedPointerPosition(t);if(this._hasMoved=!0,this._lastKnownPointerPosition=t,this._updatePointerDirectionDelta(i),this._dropContainer)this._updateActiveDropContainer(i,t);else{let n=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,s=this._activeTransform;s.x=i.x-n.x+this._passiveTransform.x,s.y=i.y-n.y+this._passiveTransform.y,this._applyRootElementTransform(s.x,s.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:i,event:e,distance:this._getDragDistance(i),delta:this._pointerDirectionDelta})})};_pointerUp=e=>{this._endDragSequence(e)};_endDragSequence(e){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:e}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(e),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let t=this._getPointerPositionOnPage(e);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(t),dropPoint:t,event:e})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(e){li(e)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let t=this._getShadowRoot(),i=this._dropContainer;if(t&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(t,"selectstart",Ic,Pc)}),i){let n=this._rootElement,s=n.parentNode,o=this._placeholder=this._createPlaceholderElement(),a=this._marker=this._marker||this._document.createComment("");s.insertBefore(a,n),this._initialTransform=n.style.transform||"",this._preview=new Sr(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(s,t)),ma(n,!1,ga),this._document.body.appendChild(s.replaceChild(o,n)),this.started.next({source:this,event:e}),i.start(),this._initialContainer=i,this._initialIndex=i.getItemIndex(this)}else this.started.next({source:this,event:e}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(i?i.getScrollableParents():[])}_initializeDragSequence(e,t){this._parentDragRef&&t.stopPropagation();let i=this.isDragging(),n=li(t),s=!n&&t.button!==0,o=this._rootElement,a=We(t),l=!n&&this._lastTouchEventTime&&this._lastTouchEventTime+Mc>Date.now(),c=n?Es(t):Ss(t);if(a&&a.draggable&&t.type==="mousedown"&&t.preventDefault(),i||s||l||c)return;if(this._handles.length){let k=o.style;this._rootElementTapHighlight=k.webkitTapHighlightColor||"",k.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(k=>this._updateOnScroll(k)),this._boundaryElement&&(this._boundaryRect=Mr(this._boundaryElement));let m=this._previewTemplate;this._pickupPositionInElement=m&&m.template&&!m.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,e,t);let h=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(t);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:h.x,y:h.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,t)}_cleanupDragArtifacts(e){ma(this._rootElement,!0,ga),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let t=this._dropContainer,i=t.getItemIndex(this),n=this._getPointerPositionOnPage(e),s=this._getDragDistance(n),o=t._isOverContainer(n.x,n.y);this.ended.next({source:this,distance:s,dropPoint:n,event:e}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:t,previousContainer:this._initialContainer,isPointerOverContainer:o,distance:s,dropPoint:n,event:e}),t.drop(this,i,this._initialIndex,this._initialContainer,o,s,n,e),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:e,y:t},{x:i,y:n}){let s=this._initialContainer._getSiblingContainerFromPosition(this,e,t);!s&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(e,t)&&(s=this._initialContainer),s&&s!==this._dropContainer&&this._ngZone.run(()=>{let o=this._dropContainer.getItemIndex(this),a=this._dropContainer.getItemAtIndex(o+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(s,this._dropContainer,a),this._dropContainer=s,this._dropContainer.enter(this,e,t,s===this._initialContainer&&s.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:s,currentIndex:s.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(i,n),this._dropContainer._sortItem(this,e,t,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(e,t):this._applyPreviewTransform(e-this._pickupPositionInElement.x,t-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let e=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(e.left,e.top);let t=this._preview.getTransitionDuration();return t===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(i=>{let n=a=>{(!a||this._preview&&We(a)===this._preview.element&&a.propertyName==="transform")&&(o(),i(),clearTimeout(s))},s=setTimeout(n,t*1.5),o=this._preview.addEventListener("transitionend",n)}))}_createPlaceholderElement(){let e=this._placeholderTemplate,t=e?e.template:null,i;return t?(this._placeholderRef=e.viewContainer.createEmbeddedView(t,e.context),this._placeholderRef.detectChanges(),i=wa(this._placeholderRef,this._document)):i=kr(this._rootElement),i.style.pointerEvents="none",i.classList.add(_a),i}_getPointerPositionInElement(e,t,i){let n=t===this._rootElement?null:t,s=n?n.getBoundingClientRect():e,o=li(i)?i.targetTouches[0]:i,a=this._getViewportScrollPosition(),l=o.pageX-s.left-a.left,c=o.pageY-s.top-a.top;return{x:s.left-e.left+l,y:s.top-e.top+c}}_getPointerPositionOnPage(e){let t=this._getViewportScrollPosition(),i=li(e)?e.touches[0]||e.changedTouches[0]||{pageX:0,pageY:0}:e,n=i.pageX-t.left,s=i.pageY-t.top;if(this._ownerSVGElement){let o=this._ownerSVGElement.getScreenCTM();if(o){let a=this._ownerSVGElement.createSVGPoint();return a.x=n,a.y=s,a.matrixTransform(o.inverse())}}return{x:n,y:s}}_getConstrainedPointerPosition(e){let t=this._dropContainer?this._dropContainer.lockAxis:null,{x:i,y:n}=this.constrainPosition?this.constrainPosition(e,this,this._initialDomRect,this._pickupPositionInElement):e;if(this.lockAxis==="x"||t==="x"?n=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||t==="y")&&(i=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:s,y:o}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,a=this._boundaryRect,{width:l,height:c}=this._getPreviewRect(),m=a.top+o,h=a.bottom-(c-o),k=a.left+s,x=a.right-(l-s);i=ba(i,k,x),n=ba(n,m,h)}return{x:i,y:n}}_updatePointerDirectionDelta(e){let{x:t,y:i}=e,n=this._pointerDirectionDelta,s=this._pointerPositionAtLastDirectionChange,o=Math.abs(t-s.x),a=Math.abs(i-s.y);return o>this._config.pointerDirectionChangeThreshold&&(n.x=t>s.x?1:-1,s.x=t),a>this._config.pointerDirectionChangeThreshold&&(n.y=i>s.y?1:-1,s.y=i),n}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let e=this._handles.length>0||!this.isDragging();e!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=e,He(this._rootElement,e))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(e=>e()),this._rootElementCleanups=void 0}_applyRootElementTransform(e,t){let i=1/this.scale,n=di(e*i,t*i),s=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=s.transform&&s.transform!="none"?s.transform:""),s.transform=hn(n,this._initialTransform)}_applyPreviewTransform(e,t){let i=this._previewTemplate?.template?void 0:this._initialTransform,n=di(e,t);this._preview.setTransform(hn(n,i))}_getDragDistance(e){let t=this._pickupPositionOnPage;return t?{x:e.x-t.x,y:e.y-t.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:e,y:t}=this._passiveTransform;if(e===0&&t===0||this.isDragging()||!this._boundaryElement)return;let i=this._rootElement.getBoundingClientRect(),n=this._boundaryElement.getBoundingClientRect();if(n.width===0&&n.height===0||i.width===0&&i.height===0)return;let s=n.left-i.left,o=i.right-n.right,a=n.top-i.top,l=i.bottom-n.bottom;n.width>i.width?(s>0&&(e+=s),o>0&&(e-=o)):e=0,n.height>i.height?(a>0&&(t+=a),l>0&&(t-=l)):t=0,(e!==this._passiveTransform.x||t!==this._passiveTransform.y)&&this.setFreeDragPosition({y:t,x:e})}_getDragStartDelay(e){let t=this.dragStartDelay;return typeof t=="number"?t:li(e)?t.touch:t?t.mouse:0}_updateOnScroll(e){let t=this._parentPositions.handleScroll(e);if(t){let i=We(e);this._boundaryRect&&i!==this._boundaryElement&&i.contains(this._boundaryElement)&&ci(this._boundaryRect,t.top,t.left),this._pickupPositionOnPage.x+=t.left,this._pickupPositionOnPage.y+=t.top,this._dropContainer||(this._activeTransform.x-=t.left,this._activeTransform.y-=t.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Si(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(e,t){let i=this._previewContainer||"global";if(i==="parent")return e;if(i==="global"){let n=this._document;return t||n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement||n.body}return Xt(i)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=e=>{if(this._handles.length){let t=this._getTargetHandle(e);t&&!this._disabledHandles.has(t)&&!this.disabled&&e.preventDefault()}else this.disabled||e.preventDefault()};_getTargetHandle(e){return this._handles.find(t=>e.target&&(e.target===t||t.contains(e.target)))}_conditionallyInsertAnchor(e,t,i){if(e===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(t===this._initialContainer&&t.hasAnchor){let n=this._anchor??=kr(this._placeholder);n.classList.remove(_a),n.classList.add("cdk-drag-anchor"),n.style.transform="",i?i.before(n):Xt(t.element).appendChild(n)}}};function ba(r,e,t){return Math.max(e,Math.min(t,r))}function li(r){return r.type[0]==="t"}function Ic(r){r.preventDefault()}function xa(r,e,t){let i=va(e,r.length-1),n=va(t,r.length-1);if(i===n)return;let s=r[i],o=n<i?-1:1;for(let a=i;a!==n;a+=o)r[a]=r[a+o];r[n]=s}function va(r,e){return Math.max(0,Math.min(e,r))}var pn=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(e){this._dragDropRegistry=e}_previousSwap={drag:null,delta:0,overlaps:!1};start(e){this.withItems(e)}sort(e,t,i,n){let s=this._itemPositions,o=this._getItemIndexFromPointerPosition(e,t,i,n);if(o===-1&&s.length>0)return null;let a=this.orientation==="horizontal",l=s.findIndex(P=>P.drag===e),c=s[o],m=s[l].clientRect,h=c.clientRect,k=l>o?1:-1,x=this._getItemOffsetPx(m,h,k),b=this._getSiblingOffsetPx(l,s,k),w=s.slice();return xa(s,l,o),s.forEach((P,V)=>{if(w[V]===P)return;let j=P.drag===e,U=j?x:b,K=j?e.getPlaceholderElement():P.drag.getRootElement();P.offset+=U;let Wt=Math.round(P.offset*(1/P.drag.scale));a?(K.style.transform=hn(`translate3d(${Wt}px, 0, 0)`,P.initialTransform),ci(P.clientRect,0,U)):(K.style.transform=hn(`translate3d(0, ${Wt}px, 0)`,P.initialTransform),ci(P.clientRect,U,0))}),this._previousSwap.overlaps=xr(h,t,i),this._previousSwap.drag=c.drag,this._previousSwap.delta=a?n.x:n.y,{previousIndex:l,currentIndex:o}}enter(e,t,i,n){let s=this._activeDraggables,o=s.indexOf(e),a=e.getPlaceholderElement();o>-1&&s.splice(o,1);let l=n==null||n<0?this._getItemIndexFromPointerPosition(e,t,i):n,c=s[l];if(c===e&&(c=s[l+1]),!c&&(l==null||l===-1||l<s.length-1)&&this._shouldEnterAsFirstChild(t,i)&&(c=s[0]),c&&!this._dragDropRegistry.isDragging(c)){let m=c.getRootElement();m.parentElement.insertBefore(a,m),s.splice(l,0,e)}else this._element.appendChild(a),s.push(e);a.style.transform="",this._cacheItemPositions()}withItems(e){this._activeDraggables=e.slice(),this._cacheItemPositions()}withSortPredicate(e){this._sortPredicate=e}reset(){this._activeDraggables?.forEach(e=>{let t=e.getRootElement();if(t){let i=this._itemPositions.find(n=>n.drag===e)?.initialTransform;t.style.transform=i||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(e){return this._getVisualItemPositions().findIndex(t=>t.drag===e)}getItemAtIndex(e){return this._getVisualItemPositions()[e]?.drag||null}updateOnScroll(e,t){this._itemPositions.forEach(({clientRect:i})=>{ci(i,e,t)}),this._itemPositions.forEach(({drag:i})=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}withElementContainer(e){this._element=e}_cacheItemPositions(){let e=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(t=>{let i=t.getVisibleElement();return{drag:t,offset:0,initialTransform:i.style.transform||"",clientRect:Mr(i)}}).sort((t,i)=>e?t.clientRect.left-i.clientRect.left:t.clientRect.top-i.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(e,t,i){let n=this.orientation==="horizontal",s=n?t.left-e.left:t.top-e.top;return i===-1&&(s+=n?t.width-e.width:t.height-e.height),s}_getSiblingOffsetPx(e,t,i){let n=this.orientation==="horizontal",s=t[e].clientRect,o=t[e+i*-1],a=s[n?"width":"height"]*i;if(o){let l=n?"left":"top",c=n?"right":"bottom";i===-1?a-=o.clientRect[l]-s[c]:a+=s[l]-o.clientRect[c]}return a}_shouldEnterAsFirstChild(e,t){if(!this._activeDraggables.length)return!1;let i=this._itemPositions,n=this.orientation==="horizontal";if(i[0].drag!==this._activeDraggables[0]){let o=i[i.length-1].clientRect;return n?e>=o.right:t>=o.bottom}else{let o=i[0].clientRect;return n?e<=o.left:t<=o.top}}_getItemIndexFromPointerPosition(e,t,i,n){let s=this.orientation==="horizontal",o=this._itemPositions.findIndex(({drag:a,clientRect:l})=>{if(a===e)return!1;if(n){let c=s?n.x:n.y;if(a===this._previousSwap.drag&&this._previousSwap.overlaps&&c===this._previousSwap.delta)return!1}return s?t>=Math.floor(l.left)&&t<Math.floor(l.right):i>=Math.floor(l.top)&&i<Math.floor(l.bottom)});return o===-1||!this._sortPredicate(o,e)?-1:o}},Tr=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(e,t){this._document=e,this._dragDropRegistry=t}start(e){let t=this._element.childNodes;this._relatedNodes=[];for(let i=0;i<t.length;i++){let n=t[i];this._relatedNodes.push([n,n.nextSibling])}this.withItems(e)}sort(e,t,i,n){let s=this._getItemIndexFromPointerPosition(e,t,i),o=this._previousSwap;if(s===-1||this._activeItems[s]===e)return null;let a=this._activeItems[s];if(o.drag===a&&o.overlaps&&o.deltaX===n.x&&o.deltaY===n.y)return null;let l=this.getItemIndex(e),c=e.getPlaceholderElement(),m=a.getRootElement();s>l?m.after(c):m.before(c),xa(this._activeItems,l,s);let h=this._getRootNode().elementFromPoint(t,i);return o.deltaX=n.x,o.deltaY=n.y,o.drag=a,o.overlaps=m===h||m.contains(h),{previousIndex:l,currentIndex:s}}enter(e,t,i,n){let s=this._activeItems.indexOf(e);s>-1&&this._activeItems.splice(s,1);let o=n==null||n<0?this._getItemIndexFromPointerPosition(e,t,i):n;o===-1&&(o=this._getClosestItemIndexToPointer(e,t,i));let a=this._activeItems[o];a&&!this._dragDropRegistry.isDragging(a)?(this._activeItems.splice(o,0,e),a.getRootElement().before(e.getPlaceholderElement())):(this._activeItems.push(e),this._element.appendChild(e.getPlaceholderElement()))}withItems(e){this._activeItems=e.slice()}withSortPredicate(e){this._sortPredicate=e}reset(){let e=this._element,t=this._previousSwap;for(let i=this._relatedNodes.length-1;i>-1;i--){let[n,s]=this._relatedNodes[i];n.parentNode===e&&n.nextSibling!==s&&(s===null?e.appendChild(n):s.parentNode===e&&e.insertBefore(n,s))}this._relatedNodes=[],this._activeItems=[],t.drag=null,t.deltaX=t.deltaY=0,t.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(e){return this._activeItems.indexOf(e)}getItemAtIndex(e){return this._activeItems[e]||null}updateOnScroll(){this._activeItems.forEach(e=>{this._dragDropRegistry.isDragging(e)&&e._sortFromLastPointerPosition()})}withElementContainer(e){e!==this._element&&(this._element=e,this._rootNode=void 0)}_getItemIndexFromPointerPosition(e,t,i){let n=this._getRootNode().elementFromPoint(Math.floor(t),Math.floor(i)),s=n?this._activeItems.findIndex(o=>{let a=o.getRootElement();return n===a||a.contains(n)}):-1;return s===-1||!this._sortPredicate(s,e)?-1:s}_getRootNode(){return this._rootNode||(this._rootNode=Si(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(e,t,i){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let n=1/0,s=-1;for(let o=0;o<this._activeItems.length;o++){let a=this._activeItems[o];if(a!==e){let{x:l,y:c}=a.getRootElement().getBoundingClientRect(),m=Math.hypot(t-l,i-c);m<n&&(n=m,s=o)}}return s}},ya=.05,Sa=.05,It=(function(r){return r[r.NONE=0]="NONE",r[r.UP=1]="UP",r[r.DOWN=2]="DOWN",r})(It||{}),mt=(function(r){return r[r.NONE=0]="NONE",r[r.LEFT=1]="LEFT",r[r.RIGHT=2]="RIGHT",r})(mt||{});function Ea(r,e){return new Cr(e,r.get(Rr),r.get(pt),r.get(it),r.get($e))}var Cr=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new T;entered=new T;exited=new T;dropped=new T;sorted=new T;receivingStarted=new T;receivingStopped=new T;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=ie.EMPTY;_verticalScrollDirection=It.NONE;_horizontalScrollDirection=mt.NONE;_scrollNode;_stopScrollTimers=new T;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(e,t,i,n,s){this._dragDropRegistry=t,this._ngZone=n,this._viewportRuler=s;let o=this.element=Xt(e);this._document=i,this.withOrientation("vertical").withElementContainer(o),t.registerDropContainer(this),this._parentPositions=new mn(i)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(e,t,i,n){this._draggingStarted(),n==null&&this.sortingDisabled&&(n=this._draggables.indexOf(e)),this._sortStrategy.enter(e,t,i,n),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:e,container:this,currentIndex:this.getItemIndex(e)})}exit(e){this._reset(),this.exited.next({item:e,container:this})}drop(e,t,i,n,s,o,a,l={}){this._reset(),this.dropped.next({item:e,currentIndex:t,previousIndex:i,container:this,previousContainer:n,isPointerOverContainer:s,distance:o,dropPoint:a,event:l})}withItems(e){let t=this._draggables;return this._draggables=e,e.forEach(i=>i._withDropContainer(this)),this.isDragging()&&(t.filter(n=>n.isDragging()).every(n=>e.indexOf(n)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(e){return this._direction=e,this._sortStrategy instanceof pn&&(this._sortStrategy.direction=e),this}connectedTo(e){return this._siblings=e.slice(),this}withOrientation(e){if(e==="mixed")this._sortStrategy=new Tr(this._document,this._dragDropRegistry);else{let t=new pn(this._dragDropRegistry);t.direction=this._direction,t.orientation=e,this._sortStrategy=t}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((t,i)=>this.sortPredicate(t,i,this)),this}withScrollableParents(e){let t=this._container;return this._scrollableElements=e.indexOf(t)===-1?[t,...e]:e.slice(),this}withElementContainer(e){if(e===this._container)return this;let t=Xt(this.element),i=this._scrollableElements.indexOf(this._container),n=this._scrollableElements.indexOf(e);return i>-1&&this._scrollableElements.splice(i,1),n>-1&&this._scrollableElements.splice(n,1),this._sortStrategy&&this._sortStrategy.withElementContainer(e),this._cachedShadowRoot=null,this._scrollableElements.unshift(e),this._container=e,this}getScrollableParents(){return this._scrollableElements}getItemIndex(e){return this._isDragging?this._sortStrategy.getItemIndex(e):this._draggables.indexOf(e)}getItemAtIndex(e){return this._isDragging?this._sortStrategy.getItemAtIndex(e):this._draggables[e]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(e,t,i,n){if(this.sortingDisabled||!this._domRect||!da(this._domRect,ya,t,i))return;let s=this._sortStrategy.sort(e,t,i,n);s&&this.sorted.next({previousIndex:s.previousIndex,currentIndex:s.currentIndex,container:this,item:e})}_startScrollingIfNecessary(e,t){if(this.autoScrollDisabled)return;let i,n=It.NONE,s=mt.NONE;if(this._parentPositions.positions.forEach((o,a)=>{a===this._document||!o.clientRect||i||da(o.clientRect,ya,e,t)&&([n,s]=Rc(a,o.clientRect,this._direction,e,t),(n||s)&&(i=a))}),!n&&!s){let{width:o,height:a}=this._viewportRuler.getViewportSize(),l={width:o,height:a,top:0,right:o,bottom:a,left:0};n=Ta(l,t),s=Ca(l,e),i=window}i&&(n!==this._verticalScrollDirection||s!==this._horizontalScrollDirection||i!==this._scrollNode)&&(this._verticalScrollDirection=n,this._horizontalScrollDirection=s,this._scrollNode=i,(n||s)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let e=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=e.msScrollSnapType||e.scrollSnapType||"",e.scrollSnapType=e.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let e=this._container.style;e.scrollSnapType=e.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(t=>t._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),ui(0,Qr).pipe(et(this._stopScrollTimers)).subscribe(()=>{let e=this._scrollNode,t=this.autoScrollStep;this._verticalScrollDirection===It.UP?e.scrollBy(0,-t):this._verticalScrollDirection===It.DOWN&&e.scrollBy(0,t),this._horizontalScrollDirection===mt.LEFT?e.scrollBy(-t,0):this._horizontalScrollDirection===mt.RIGHT&&e.scrollBy(t,0)})};_isOverContainer(e,t){return this._domRect!=null&&xr(this._domRect,e,t)}_getSiblingContainerFromPosition(e,t,i){return this._siblings.find(n=>n._canReceive(e,t,i))}_canReceive(e,t,i){if(!this._domRect||!xr(this._domRect,t,i)||!this.enterPredicate(e,this))return!1;let n=this._getShadowRoot().elementFromPoint(t,i);return n?n===this._container||this._container.contains(n):!1}_startReceiving(e,t){let i=this._activeSiblings;!i.has(e)&&t.every(n=>this.enterPredicate(n,this)||this._draggables.indexOf(n)>-1)&&(i.add(e),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:e,receiver:this,items:t}))}_stopReceiving(e){this._activeSiblings.delete(e),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:e,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(e=>{if(this.isDragging()){let t=this._parentPositions.handleScroll(e);t&&this._sortStrategy.updateOnScroll(t.top,t.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let e=Si(this._container);this._cachedShadowRoot=e||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let e=this._sortStrategy.getActiveItemsSnapshot().filter(t=>t.isDragging());this._siblings.forEach(t=>t._startReceiving(this,e))}};function Ta(r,e){let{top:t,bottom:i,height:n}=r,s=n*Sa;return e>=t-s&&e<=t+s?It.UP:e>=i-s&&e<=i+s?It.DOWN:It.NONE}function Ca(r,e){let{left:t,right:i,width:n}=r,s=n*Sa;return e>=t-s&&e<=t+s?mt.LEFT:e>=i-s&&e<=i+s?mt.RIGHT:mt.NONE}function Rc(r,e,t,i,n){let s=Ta(e,n),o=Ca(e,i),a=It.NONE,l=mt.NONE;if(s){let c=r.scrollTop;s===It.UP?c>0&&(a=It.UP):r.scrollHeight-c>r.clientHeight&&(a=It.DOWN)}if(o){let c=r.scrollLeft;t==="rtl"?o===mt.RIGHT?c<0&&(l=mt.RIGHT):r.scrollWidth+c>r.clientWidth&&(l=mt.LEFT):o===mt.LEFT?c>0&&(l=mt.LEFT):r.scrollWidth-c>r.clientWidth&&(l=mt.RIGHT)}return[a,l]}var Ac=(()=>{class r{_injector=d(Z);constructor(){}createDrag(t,i){return ka(this._injector,t,i)}createDropList(t){return Ea(this._injector,t)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Dr=new $("CDK_DRAG_PARENT");var Oc=new $("CdkDragHandle");var Da=new $("CDK_DRAG_CONFIG"),Pa=new $("CdkDropList"),Ma=(()=>{class r{element=d(H);dropContainer=d(Pa,{optional:!0,skipSelf:!0});_ngZone=d(it);_viewContainerRef=d(ns);_dir=d(Ye,{optional:!0});_changeDetectorRef=d(qt);_selfHandle=d(Oc,{optional:!0,self:!0});_parentDrag=d(Dr,{optional:!0,skipSelf:!0});_dragDropRegistry=d(Rr);_destroyed=new T;_handles=new Gr([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(t){this._disabled=t,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new ot;released=new ot;ended=new ot;entered=new ot;exited=new ot;dropped=new ot;moved=new _e(t=>{let i=this._dragRef.moved.pipe(Et(n=>({source:this,pointerPosition:n.pointerPosition,event:n.event,delta:n.delta,distance:n.distance}))).subscribe(t);return()=>{i.unsubscribe()}});_injector=d(Z);constructor(){let t=this.dropContainer,i=d(Da,{optional:!0});this._dragRef=ka(this._injector,this.element,{dragStartThreshold:i&&i.dragStartThreshold!=null?i.dragStartThreshold:5,pointerDirectionChangeThreshold:i&&i.pointerDirectionChangeThreshold!=null?i.pointerDirectionChangeThreshold:5,zIndex:i?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),i&&this._assignDefaults(i),t&&(t.addItem(this),t._dropListRef.beforeStarted.pipe(et(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(t){this._dragRef.setFreeDragPosition(t)}ngAfterViewInit(){ct(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(t){let i=t.rootElementSelector,n=t.freeDragPosition;i&&!i.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,n&&!n.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(t){let i=this._handles.getValue();i.push(t),this._handles.next(i)}_removeHandle(t){let i=this._handles.getValue(),n=i.indexOf(t);n>-1&&(i.splice(n,1),this._handles.next(i))}_setPreviewTemplate(t){this._previewTemplate=t}_resetPreviewTemplate(t){t===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(t){this._placeholderTemplate=t}_resetPlaceholderTemplate(t){t===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let t=this.element.nativeElement,i=t;this.rootElementSelector&&(i=t.closest!==void 0?t.closest(this.rootElementSelector):t.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(i||t)}_getBoundaryElement(){let t=this.boundaryElement;return t?typeof t=="string"?this.element.nativeElement.closest(t):Xt(t):null}_syncInputs(t){t.beforeStarted.subscribe(()=>{if(!t.isDragging()){let i=this._dir,n=this.dragStartDelay,s=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,o=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.scale=this.scale,t.dragStartDelay=typeof n=="object"&&n?n:Ae(n),t.constrainPosition=this.constrainPosition,t.previewClass=this.previewClass,t.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(s).withPreviewTemplate(o).withPreviewContainer(this.previewContainer||"global"),i&&t.withDirection(i.value)}}),t.beforeStarted.pipe(Bt(1)).subscribe(()=>{if(this._parentDrag){t.withParent(this._parentDrag._dragRef);return}let i=this.element.nativeElement.parentElement;for(;i;){let n=this._dragDropRegistry.getDragDirectiveForNode(i);if(n){t.withParent(n._dragRef);break}i=i.parentElement}})}_handleEvents(t){t.started.subscribe(i=>{this.started.emit({source:this,event:i.event}),this._changeDetectorRef.markForCheck()}),t.released.subscribe(i=>{this.released.emit({source:this,event:i.event})}),t.ended.subscribe(i=>{this.ended.emit({source:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),t.entered.subscribe(i=>{this.entered.emit({container:i.container.data,item:this,currentIndex:i.currentIndex})}),t.exited.subscribe(i=>{this.exited.emit({container:i.container.data,item:this})}),t.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,isPointerOverContainer:i.isPointerOverContainer,item:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event})})}_assignDefaults(t){let{lockAxis:i,dragStartDelay:n,constrainPosition:s,previewClass:o,boundaryElement:a,draggingDisabled:l,rootElementSelector:c,previewContainer:m}=t;this.disabled=l??!1,this.dragStartDelay=n||0,this.lockAxis=i||null,s&&(this.constrainPosition=s),o&&(this.previewClass=o),a&&(this.boundaryElement=a),c&&(this.rootElementSelector=c),m&&(this.previewContainer=m)}_setupHandlesListener(){this._handles.pipe($r(t=>{let i=t.map(n=>n.element);this._selfHandle&&this.rootElementSelector&&i.push(this.element),this._dragRef.withHandles(i)}),ge(t=>ne(...t.map(i=>i._stateChanges.pipe(Re(i))))),et(this._destroyed)).subscribe(t=>{let i=this._dragRef,n=t.element.nativeElement;t.disabled?i.disableHandle(n):i.enableHandle(n)})}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(i,n){i&2&&at("cdk-drag-disabled",n.disabled)("cdk-drag-dragging",n._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",xe],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",ms]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[Rt([{provide:Dr,useExisting:r}]),En]})}return r})(),Pr=new $("CdkDropListGroup"),Ia=(()=>{class r{_items=new Set;disabled=!1;ngOnDestroy(){this._items.clear()}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:[2,"cdkDropListGroupDisabled","disabled",xe]},exportAs:["cdkDropListGroup"],features:[Rt([{provide:Pr,useExisting:r}])]})}return r})(),un=(()=>{class r{element=d(H);_changeDetectorRef=d(qt);_scrollDispatcher=d(Ci);_dir=d(Ye,{optional:!0});_group=d(Pr,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new T;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=d(Ii).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(t){this._dropListRef.disabled=this._disabled=t}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new ot;entered=new ot;exited=new ot;sorted=new ot;_unsortedItems=new Set;constructor(){let t=d(Da,{optional:!0}),i=d(Z);this._dropListRef=Ea(i,this.element),this._dropListRef.data=this,t&&this._assignDefaults(t),this._dropListRef.enterPredicate=(n,s)=>this.enterPredicate(n.data,s.data),this._dropListRef.sortPredicate=(n,s,o)=>this.sortPredicate(n,s.data,o.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),r._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(t){this._unsortedItems.add(t),t._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef))}removeItem(t){if(this._unsortedItems.delete(t),this._latestSortedRefs){let i=this._latestSortedRefs.indexOf(t._dragRef);i>-1&&(this._latestSortedRefs.splice(i,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((t,i)=>t._dragRef.getVisibleElement().compareDocumentPosition(i._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let t=r._dropLists.indexOf(this);t>-1&&r._dropLists.splice(t,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(t){this._dir&&this._dir.change.pipe(Re(this._dir.value),et(this._destroyed)).subscribe(i=>t.withDirection(i)),t.beforeStarted.subscribe(()=>{let i=_s(this.connectedTo).map(n=>{if(typeof n=="string"){let s=r._dropLists.find(o=>o.id===n);return s}return n});if(this._group&&this._group._items.forEach(n=>{i.indexOf(n)===-1&&i.push(n)}),!this._scrollableParentsResolved){let n=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(s=>s.getElementRef().nativeElement);this._dropListRef.withScrollableParents(n),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let n=this.element.nativeElement.querySelector(this.elementContainerSelector);t.withElementContainer(n)}t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.sortingDisabled=this.sortingDisabled,t.autoScrollDisabled=this.autoScrollDisabled,t.autoScrollStep=Ae(this.autoScrollStep,2),t.hasAnchor=this.hasAnchor,t.connectedTo(i.filter(n=>n&&n!==this).map(n=>n._dropListRef)).withOrientation(this.orientation)})}_handleEvents(t){t.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef)),this._changeDetectorRef.markForCheck()}),t.entered.subscribe(i=>{this.entered.emit({container:this,item:i.item.data,currentIndex:i.currentIndex})}),t.exited.subscribe(i=>{this.exited.emit({container:this,item:i.item.data}),this._changeDetectorRef.markForCheck()}),t.sorted.subscribe(i=>{this.sorted.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,container:this,item:i.item.data})}),t.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,item:i.item.data,isPointerOverContainer:i.isPointerOverContainer,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),ne(t.receivingStarted,t.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(t){let{lockAxis:i,draggingDisabled:n,sortingDisabled:s,listAutoScrollDisabled:o,listOrientation:a}=t;this.disabled=n??!1,this.sortingDisabled=s??!1,this.autoScrollDisabled=o??!1,this.orientation=a||"vertical",this.lockAxis=i||null}_syncItemsWithRef(t){this._latestSortedRefs=t,this._dropListRef.withItems(t)}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(i,n){i&2&&(Kt("id",n.id),at("cdk-drop-list-disabled",n.disabled)("cdk-drop-list-dragging",n._dropListRef.isDragging())("cdk-drop-list-receiving",n._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",xe],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",xe],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",xe],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",xe]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[Rt([{provide:Pr,useValue:void 0},{provide:Pa,useExisting:r}])]})}return r})();var Lc=new $("CdkDragPlaceholder"),Ra=(()=>{class r{templateRef=d(fi);_drag=d(Dr,{optional:!0});data;constructor(){this._drag?._setPlaceholderTemplate(this)}ngOnDestroy(){this._drag?._resetPlaceholderTemplate(this)}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["ng-template","cdkDragPlaceholder",""]],inputs:{data:"data"},features:[Rt([{provide:Lc,useExisting:r}])]})}return r})();var fn=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=$t({type:r});static \u0275inj=Yt({providers:[Ac],imports:[Ln]})}return r})();var Oa=["*"],Nc=`.mdc-list {
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
`,Fc=["unscopedContent"],Bc=["text"],zc=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Vc=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var jc=new $("ListOption"),Ar=(()=>{class r{_elementRef=d(H);constructor(){}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return r})(),Kc=(()=>{class r{_elementRef=d(H);constructor(){}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return r})(),Or=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return r})(),La=(()=>{class r{_listOption=d(jc,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,hostVars:4,hostBindings:function(i,n){i&2&&at("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return r})(),Uc=(()=>{class r extends La{static \u0275fac=(()=>{let t;return function(n){return(t||(t=ve(r)))(n||r)}})();static \u0275dir=R({type:r,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[jt]})}return r})(),Lr=(()=>{class r extends La{static \u0275fac=(()=>{let t;return function(n){return(t||(t=ve(r)))(n||r)}})();static \u0275dir=R({type:r,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[jt]})}return r})(),Hc=new $("MAT_LIST_CONFIG"),mi=(()=>{class r{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Pt(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Pt(t))}_disabled=zt(!1);_defaultOptions=d(Hc,{optional:!0});static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,hostVars:1,hostBindings:function(i,n){i&2&&Kt("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return r})(),qc=(()=>{class r{_elementRef=d(H);_ngZone=d(it);_listBase=d(mi,{optional:!0});_platform=d(Gt);_hostElement;_isButtonElement;_noopAnimations=Se();_avatars;_icons;set lines(t){this._explicitLines=Ae(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Pt(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Pt(t))}_disabled=zt(!1);_subscriptions=new ie;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(Ei).load(zs);let t=d(Bs,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Fs(this,this._ngZone,this._hostElement,this._platform,d(Z)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ne(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let s=this._titles.length===0&&i===1;n.classList.toggle("mdc-list-item__primary-text",s),n.classList.toggle("mdc-list-item__secondary-text",!s)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,contentQueries:function(i,n,s){if(i&1&&ye(s,Uc,4)(s,Lr,4),i&2){let o;J(o=tt())&&(n._avatars=o),J(o=tt())&&(n._icons=o)}},hostVars:4,hostBindings:function(i,n){i&2&&(Kt("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),at("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return r})();var Na=(()=>{class r extends mi{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=ve(r)))(n||r)}})();static \u0275cmp=A({type:r,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Rt([{provide:mi,useExisting:r}]),jt],ngContentSelectors:Oa,decls:1,vars:0,template:function(i,n){i&1&&(Ut(),X(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return r})();var qe=(()=>{class r extends qc{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=Pt(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=ve(r)))(n||r)}})();static \u0275cmp=A({type:r,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,n,s){if(i&1&&ye(s,Kc,5)(s,Ar,5)(s,Or,5),i&2){let o;J(o=tt())&&(n._lines=o),J(o=tt())&&(n._titles=o),J(o=tt())&&(n._meta=o)}},viewQuery:function(i,n){if(i&1&&we(Fc,5)(Bc,5),i&2){let s;J(s=tt())&&(n._unscopedContent=s.first),J(s=tt())&&(n._itemText=s.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,n){i&2&&(Kt("aria-current",n._getAriaCurrent()),at("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[jt],ngContentSelectors:Vc,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,n){i&1&&(Ut(zc),X(0),u(1,"span",1),X(2,1),X(3,2),u(4,"span",2,0),O("cdkObserveContent",function(){return n._updateItemLines(!0)}),X(6,3),p()(),X(7,4),X(8,5),S(9,"div",3))},dependencies:[Ms],encapsulation:2,changeDetection:0})}return r})();var _n=(()=>{class r extends mi{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=ve(r)))(n||r)}})();static \u0275cmp=A({type:r,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Rt([{provide:mi,useExisting:r}]),jt],ngContentSelectors:Oa,decls:1,vars:0,template:function(i,n){i&1&&(Ut(),X(0))},styles:[Nc],encapsulation:2,changeDetection:0})}return r})();var Fa=["*"],Qc=["content"],Wc=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Yc=["mat-drawer","mat-drawer-content","*"];function $c(r,e){if(r&1){let t=Q();u(0,"div",1),O("click",function(){N(t);let n=D();return F(n._onBackdropClicked())}),p()}if(r&2){let t=D();at("mat-drawer-shown",t._isShowingBackdrop())}}function Zc(r,e){r&1&&(u(0,"mat-drawer-content"),X(1,2),p())}var Xc=new $("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Ba=new $("MAT_DRAWER_CONTAINER"),hi=(()=>{class r extends Di{_platform=d(Gt);_changeDetectorRef=d(qt);_container=d(Fr);constructor(){let t=d(H),i=d(Ci),n=d(it);super(t,i,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:i}=this._container;return t!=null&&t.mode!=="over"&&t.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,n){i&2&&(Rn("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),at("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[Rt([{provide:Di,useExisting:r}]),jt],ngContentSelectors:Fa,decls:1,vars:0,template:function(i,n){i&1&&(Ut(),X(0))},encapsulation:2,changeDetection:0})}return r})(),Nr=(()=>{class r{_elementRef=d(H);_focusTrapFactory=d(Rs);_focusMonitor=d(Ts);_platform=d(Gt);_ngZone=d(it);_renderer=d(Qe);_interactivityChecker=d(Is);_doc=d(pt);_container=d(Ba,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=Pt(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=Pt(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(Pt(t))}_opened=zt(!1);_openedVia=null;_animationStarted=new T;_animationEnd=new T;openedChange=new ot(!0);_openedStream=this.openedChange.pipe(se(t=>t),Et(()=>{}));openedStart=this._animationStarted.pipe(se(()=>this.opened),Sn(void 0));_closedStream=this.openedChange.pipe(se(t=>!t),Et(()=>{}));closedStart=this._animationStarted.pipe(se(()=>!this.opened),Sn(void 0));_destroyed=new T;onPositionChanged=new ot;_content;_modeChanged=new T;_injector=d(Z);_changeDetectorRef=d(qt);constructor(){this.openedChange.pipe(et(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,i=this._elementRef.nativeElement;return[t.listen(i,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!ys(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(i,"transitionend",this._handleTransitionEvent),t.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,i){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{s(),o(),t.removeAttribute("tabindex")},s=this._renderer.listen(t,"blur",n),o=this._renderer.listen(t,"mousedown",n)})),t.focus(i)}_focusByCssSelector(t,i){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,i)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ct(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,i){t&&i&&(this._openedVia=i);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,i,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&i&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(s=>{this.openedChange.pipe(Bt(1)).subscribe(o=>s(o?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,n=i.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,i)),n.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=t=>{let i=this._elementRef.nativeElement;t.target===i&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["mat-drawer"]],viewQuery:function(i,n){if(i&1&&we(Qc,5),i&2){let s;J(s=tt())&&(n._content=s.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,n){i&2&&(Kt("align",null)("tabIndex",n.mode!=="side"?"-1":null),Rn("visibility",!n._container&&!n.opened?"hidden":null),at("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Fa,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,n){i&1&&(Ut(),u(0,"div",1,0),X(2),p())},dependencies:[Di],encapsulation:2,changeDetection:0})}return r})(),Fr=(()=>{class r{_dir=d(Ye,{optional:!0});_element=d(H);_ngZone=d(it);_changeDetectorRef=d(qt);_animationDisabled=Se();_transitionsEnabled=!1;_allDrawers;_drawers=new ts;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=Pt(t)}_autosize=d(Xc);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:Pt(t)}_backdropOverride=null;backdropClick=new ot;_start=null;_end=null;_left=null;_right=null;_destroyed=new T;_doCheckSubject=new T;_contentMargins={left:null,right:null};_contentMarginChanges=new T;get scrollable(){return this._userContent||this._content}_injector=d(Z);constructor(){let t=d(Gt),i=d($e);this._dir?.change.pipe(et(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(et(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Re(this._allDrawers),et(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Re(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Yr(10),et(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,i-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();i+=n,t-=n}}t=t||null,i=i||null,(t!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:t,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(et(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(et(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(et(this._drawers.changes)).subscribe(()=>{ct({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(et(ne(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let i=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?i.add(n):i.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(i,n,s){if(i&1&&ye(s,hi,5)(s,Nr,5),i&2){let o;J(o=tt())&&(n._content=o.first),J(o=tt())&&(n._allDrawers=o)}},viewQuery:function(i,n){if(i&1&&we(hi,5),i&2){let s;J(s=tt())&&(n._userContent=s.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,n){i&2&&at("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Rt([{provide:Ba,useExisting:r}])],ngContentSelectors:Yc,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,n){i&1&&(Ut(Wc),q(0,$c,1,2,"div",0),X(1),X(2,1),q(3,Zc,2,0,"mat-drawer-content")),i&2&&(G(n.hasBackdrop?0:-1),f(3),G(n._content?-1:3))},dependencies:[hi],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return r})();function Jc(r,e){if(r&1){let t=Q();u(0,"button",4),O("click",function(){let n=N(t).$implicit,s=D();return F(s.store.setTheme(n.theme))}),S(1,"mat-icon",2),E(2),p()}if(r&2){let t=e.$implicit;f(),g("svgIcon",t.icon),f(),Dt(" ",t.label," ")}}var za=(()=>{class r{store=d(_t);options=[{theme:{mode:"manual",variant:"light"},label:"Light",icon:"light_mode"},{theme:{mode:"manual",variant:"dark"},label:"Dark",icon:"dark_mode"},{theme:{mode:"auto",variant:"light"},label:"System",icon:"brightness_medium"}];currentOption=yt(()=>{let t=this.store.theme();return this.options.find(i=>t?.mode==="manual"?Gs(i.theme,t):i.theme.mode==="auto")});currentThemeTooltip=yt(()=>`Current theme: ${this.currentOption()?.label.toLowerCase()}`);static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["button-theme-switcher"]],decls:6,vars:3,consts:[["themeMenu","matMenu"],["mat-list-item","","data-e2e","navigation__button-theme","matTooltipPosition","right",3,"matTooltip","matMenuTriggerFor"],[3,"svgIcon"],["mat-menu-item","","data-e2e","theme-button"],["mat-menu-item","","data-e2e","theme-button",3,"click"]],template:function(i,n){if(i&1&&(u(0,"button",1),S(1,"mat-icon",2),p(),u(2,"mat-menu",null,0),os(4,Jc,3,2,"button",3,ss),p()),i&2){let s,o=nt(3);g("matTooltip",n.currentThemeTooltip())("matMenuTriggerFor",o),f(),g("svgIcon",((s=n.currentOption())==null?null:s.icon)??""),f(3),as(n.options)}},dependencies:[ae,wt,qe,Hs,ce,le,de],styles:[`[_nghost-%COMP%]{position:relative;overflow:hidden;width:100%;height:48px;display:block}
/*# sourceMappingURL=button-theme-switcher-MMBZZVX6.css.map */`],changeDetection:0})}return r})();var td="j",ed="\u043E",Br=[td,ed],id="k",nd="\u043B",zr=[id,nd],rd="a",sd="\u0444",Va=[rd,sd],od="ctrl+f",ad="ctrl+\u0430",ja=[od,ad],ld="g t",cd="\u043F \u0435",Ka=[ld,cd],dd="g a",md="\u043F \u0444",Ua=[dd,md],hd="g f",pd="\u043F \u0430",Ha=[hd,pd],ud="s",fd="\u044B",qa=[ud,fd],_d="m f",gd="\u044C \u0430",Ga=[_d,gd],bd="m a",vd="\u044C \u0444",Qa=[bd,vd],yd="r t",wd="\u043A \u0435",kd="f2",Wa=[yd,wd,kd],xd="d t",Sd="\u0432 \u0435",Ya=[xd,Sd],kt=(r,e,t)=>new zi(r,i=>(setTimeout(()=>t(i),0),i),[],e);var he=(()=>{class r{transform(t){let i=Qs(t),n=typeof t=="string"?t:null,s=i?.state??n;if(i&&Le(i))return"pause_circle";if(!s)return"timer-logo";switch(s){case W.active:return"play_circle";case W.finished:return"check_circle";case W.dropped:return"delete";default:return Vi(s)}}static \u0275fac=function(i){return new(i||r)};static \u0275pipe=_i({name:"taskStateIcon",type:r,pure:!0})}return r})();var $a=(()=>{class r{document=d(pt);setIcon(t){this.document.querySelector('link[rel="icon"]')?.setAttribute("href",t)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Za=(()=>{class r{store=d(_t);import(t){let i=t.target;if(!(i instanceof HTMLInputElement))return;let n=i?.files?.[0];if(!n)return;let s=new FileReader;s.addEventListener("load",()=>{typeof s.result=="string"&&this.store.loadTasks(io(JSON.parse(s.result)))},{once:!0}),s.readAsText(n)}static \u0275fac=function(i){return new(i||r)};static \u0275prov=st({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Xa=(()=>{class r{keys=d(Te);router=d(Oe);importExport=d(Za);favicon=d($a);hotkeysService=d(Te);destroyRef=d(Tt);store=d(_t);sanitizer=d(Ri);routedDialogs=d(Fe);exportUrl=yt(()=>{let t=this.store.tasks(),i=URL.createObjectURL(new Blob([JSON.stringify(eo(t),null,"  ")],{type:"application/json;charset=utf-8;"}));return this.sanitizer.bypassSecurityTrustResourceUrl(i)});taskState=W;constructor(){this.hotkeysService.cheatSheetToggle.subscribe(()=>{this.routedDialogs.navigate(["hotkeys"])}),this.keys.add([kt(Ka,"Go to all tasks",()=>this.router.navigate(["all"],{queryParamsHandling:"merge"})),kt(Ua,"Go to active tasks",()=>this.router.navigate([W.active],{queryParamsHandling:"merge"})),kt(Ha,"Go to finished tasks",()=>this.router.navigate([W.finished],{queryParamsHandling:"merge"}))]),Vt(()=>{this.store.isAnyTaskActive()?this.favicon.setIcon("assets/favicon-active.svg"):this.favicon.setIcon("assets/favicon.svg")}),this.destroyRef.onDestroy(()=>{let t=this.exportUrl();t&&URL.revokeObjectURL(t.toString())})}import(t){this.importExport.import(t)}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["app-root"]],decls:32,vars:18,consts:[["rlaActive","routerLinkActive"],["rlaFinished","routerLinkActive"],["rlaDropped","routerLinkActive"],["importExportMenu","matMenu"],["mode","side",3,"opened"],[1,"drawer-container","list-centered-icons"],["mat-list-item","","routerLink","all","queryParamsHandling","merge","routerLinkActive","nav-link-active","matTooltip","All tasks",1,"link-all"],["src","assets/favicon.svg","alt","Timer"],[1,"states"],["mat-list-item","","routerLinkActive","","queryParamsHandling","merge","matTooltip","Active tasks","data-e2e","navigation__button-tasks-active",3,"activated","routerLink"],[3,"svgIcon"],["mat-list-item","","routerLinkActive","","queryParamsHandling","merge","matTooltip","Finished tasks","data-e2e","navigation__button-tasks-finished",3,"activated","routerLink"],["mat-list-item","","routerLinkActive","","queryParamsHandling","merge","matTooltip","Dropped tasks","data-e2e","navigation__button-tasks-dropped",3,"activated","routerLink"],["mat-list-item","","matTooltip","Import/Export","data-e2e","navigation__button-import-export",3,"matMenuTriggerFor"],["svgIcon","swap_vert"],["mat-menu-item","",1,"import-label"],["type","file","data-e2e","navigation__input-import",3,"change"],["mat-menu-item","","data-e2e","navigation__button-export","download","timer-data.json","target","_blank",3,"href"],["cdkDropListGroup",""]],template:function(i,n){if(i&1&&(u(0,"mat-drawer-container")(1,"mat-drawer",4)(2,"div",5)(3,"mat-nav-list")(4,"a",6),S(5,"img",7),p()(),u(6,"mat-nav-list",8)(7,"a",9,0),S(9,"mat-icon",10),B(10,"taskStateIcon"),p(),u(11,"a",11,1),S(13,"mat-icon",10),B(14,"taskStateIcon"),p(),u(15,"a",12,2),S(17,"mat-icon",10),B(18,"taskStateIcon"),p()(),u(19,"mat-action-list")(20,"button",13),S(21,"mat-icon",14),p(),u(22,"mat-menu",null,3)(24,"label",15)(25,"input",16),O("change",function(o){return n.import(o)}),p(),E(26," Import "),p(),u(27,"a",17),E(28,"Export"),p()(),S(29,"button-theme-switcher"),p()()(),u(30,"mat-drawer-content",18),S(31,"router-outlet"),p()()),i&2){let s=nt(8),o=nt(12),a=nt(16),l=nt(23);f(),g("opened",!0),f(6),g("activated",s.isActive)("routerLink",n.taskState.active),f(2),g("svgIcon",dt(10,12,n.taskState.active)),f(2),g("activated",o.isActive)("routerLink",n.taskState.finished),f(2),g("svgIcon",dt(14,14,n.taskState.finished)),f(2),g("activated",a.isActive)("routerLink",n.taskState.dropped),f(2),g("svgIcon",dt(18,16,n.taskState.dropped)),f(3),g("matMenuTriggerFor",l),f(7),g("href",n.exportUrl(),es)}},dependencies:[Fr,Nr,hi,de,ce,le,_n,qe,Na,wt,ae,fn,Ia,Jt,Fi,Ni,za,he],styles:[`[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}.link-all[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px;vertical-align:middle}mat-drawer[_ngcontent-%COMP%]{border-right:1px solid var(--mat-menu-divider-color)}mat-drawer-container[_ngcontent-%COMP%]{flex:1}mat-drawer-content[_ngcontent-%COMP%]{display:flex}.drawer-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;padding-bottom:1rem;box-sizing:border-box;overflow-x:hidden}.states[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto}.import-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.import-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;opacity:0;z-index:-1}
/*# sourceMappingURL=app-2CR3CYWN.css.map */`],changeDetection:0})}return r})();var Ja=(r,e)=>{let t=r.params.state;return t&&Ws(t)||t==="all"?!0:d(Oe).navigate(["/active"])};var Ed=["*",[["mat-toolbar-row"]]],Td=["*","mat-toolbar-row"],Cd=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return r})(),gn=(()=>{class r{_elementRef=d(H);_platform=d(Gt);_document=d(pt);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["mat-toolbar"]],contentQueries:function(i,n,s){if(i&1&&ye(s,Cd,5),i&2){let o;J(o=tt())&&(n._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,n){i&2&&(ls(n.color?"mat-"+n.color:""),at("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Td,decls:2,vars:0,template:function(i,n){i&1&&(Ut(Ed),X(0),X(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return r})();var tl=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=$t({type:r});static \u0275inj=Yt({imports:[On]})}return r})();var bn=(()=>{class r{transform(t){switch(t){case W.active:return"Active";case W.dropped:return"Dropped";case W.finished:return"Finished";case"all":return"All";case void 0:return"\u{1F635}";default:return Vi(t)}}static \u0275fac=function(i){return new(i||r)};static \u0275pipe=_i({name:"taskState",type:r,pure:!0})}return r})();var Pd=r=>["tasks",r,"rename"];function Md(r,e){if(r&1){let t=Q();u(0,"button",9),S(1,"mat-icon",6),B(2,"taskStateIcon"),E(3),B(4,"taskState"),p(),u(5,"a",10),E(6," Rename "),p(),u(7,"button",11),O("click",function(){N(t);let n=D(2);return F(n.deleteTask())}),E(8," Delete "),p()}if(r&2){let t=D(),i=nt(6);g("mat-menu-trigger-for",i),f(),g("svgIcon",dt(2,4,t.state)),f(2),Dt(" State: ",dt(4,6,t.state)," "),f(2),g("dialogLink",Ht(8,Pd,t.id))}}function Id(r,e){if(r&1){let t=Q();u(0,"button",2),O("click",function(n){return N(t),n.stopPropagation(),F(n.preventDefault())}),S(1,"mat-icon",3),p(),u(2,"mat-menu",null,0),Ct(4,Md,9,10,"ng-template",4),p(),u(5,"mat-menu",null,1)(7,"button",5),O("click",function(){N(t);let n=D();return F(n.changeTaskState(n.taskState.active))}),S(8,"mat-icon",6),B(9,"taskStateIcon"),E(10,"Change to active "),p(),u(11,"button",7),O("click",function(){N(t);let n=D();return F(n.changeTaskState(n.taskState.finished))}),S(12,"mat-icon",6),B(13,"taskStateIcon"),E(14,"Change to finished "),p(),u(15,"button",8),O("click",function(){N(t);let n=D();return F(n.changeTaskState(n.taskState.dropped))}),S(16,"mat-icon",6),B(17,"taskStateIcon"),E(18,"Change to dropped "),p()()}if(r&2){let t=e,i=nt(3),n=D();g("matMenuTriggerFor",i),f(7),g("disabled",t.state===n.taskState.active),f(),g("svgIcon",dt(9,7,n.taskState.active)),f(3),g("disabled",t.state===n.taskState.finished),f(),g("svgIcon",dt(13,9,n.taskState.finished)),f(3),g("disabled",t.state===n.taskState.dropped),f(),g("svgIcon",dt(17,11,n.taskState.dropped))}}var vn=(()=>{class r{store=d(_t);task=ut();taskState=W;deleteTask(){let t=this.task();t&&this.store.deleteTask(t.id)}changeTaskState(t){let i=this.task();i&&this.store.updateTaskState(i.id,t)}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["button-task-actions"]],inputs:{task:[1,"task"]},decls:1,vars:1,consts:[["menu","matMenu"],["statuses","matMenu"],["type","button","mat-icon-button","","data-e2e","button-task-actions__trigger",3,"click","matMenuTriggerFor"],["svgIcon","more_vert"],["matMenuContent",""],["mat-menu-item","","type","button","data-e2e","button-task-actions__state-option-active",3,"click","disabled"],[3,"svgIcon"],["mat-menu-item","","type","button","data-e2e","button-task-actions__state-option-finished",3,"click","disabled"],["mat-menu-item","","type","button","data-e2e","button-task-actions__state-option-dropped",3,"click","disabled"],["mat-menu-item","","data-e2e","button-task-actions__selector-state",3,"mat-menu-trigger-for"],["mat-menu-item","","type","button","data-e2e","button-task-actions__button-rename",3,"dialogLink"],["mat-menu-item","","type","button","data-e2e","button-task-actions__button-delete",3,"click"]],template:function(i,n){if(i&1&&q(0,Id,19,13),i&2){let s;G((s=n.task())?0:-1,s)}},dependencies:[ce,de,Bi,le,oe,wt,Ne,he,bn],styles:[`[_nghost-%COMP%]{display:inline-block;flex:0 0 auto}mat-select[_ngcontent-%COMP%]{width:140px}
/*# sourceMappingURL=button-task-actions-64Q6NT3L.css.map */`],changeDetection:0})}return r})();var yn=(()=>{class r{syncWidthTo=ut();elementRef=d(H);destroyRef=d(Tt);constructor(){ct({read:()=>{let t=this.syncWidthTo();if(!t)return;let i=new ResizeObserver(n=>{let s=n.at(0)?.target.parentElement?.clientWidth,o=n.at(0)?.contentRect.width;if(!s||!o)return;let a=s-o;this.elementRef.nativeElement.style.paddingRight=`${16+a}px`});i.observe(t.getElementRef().nativeElement),this.destroyRef.onDestroy(()=>i.disconnect())}})}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["mat-toolbar"]],inputs:{syncWidthTo:[1,"syncWidthTo"]}})}return r})();var Rd=(r,e)=>["tasks",r,"sessions",e,"edit"],Ad=(r,e)=>["tasks",r,"sessions",e,"split"];function Od(r,e){if(r&1){let t=Q();u(0,"a",4),E(1," Edit "),p(),u(2,"a",5),E(3," Split "),p(),u(4,"button",6),O("click",function(){N(t);let n=D();return F(n.remove())}),E(5,"Delete"),p(),u(6,"a",7),E(7,"Skip everything after"),p(),u(8,"a",8),E(9,"Skip everything before"),p()}if(r&2){let t=D();g("dialogLink",ke(5,Rd,t.task().id,t.sessionIndex())),f(2),g("dialogLink",ke(8,Ad,t.task().id,t.sessionIndex()))("disabled",t.isSplitDisabled()),f(4),g("queryParams",t.skipAfterParams),f(2),g("queryParams",t.skipBeforeParams)}}var el=(()=>{class r{store=d(_t);task=ut.required();session=ut.required();sessionIndex=yt(()=>this.task().sessions.indexOf(this.session()));isSplitDisabled=yt(()=>Ys(this.session()));remove(){this.store.deleteSession(this.task().id,Zs(this.session()))}get skipBeforeParams(){return Vn({from:new Date(this.session().start)})}get skipAfterParams(){return Vn({to:new Date(this.session()?.end??new Date)})}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["button-session-actions"]],inputs:{task:[1,"task"],session:[1,"session"]},decls:5,vars:1,consts:[["menu","matMenu"],["mat-icon-button","",3,"matMenuTriggerFor"],["svgIcon","more_vert"],["matMenuContent",""],["mat-menu-item","","type","button","data-e2e","menu-session__button-edit",3,"dialogLink"],["mat-menu-item","","type","button","data-e2e","menu-session__button-split",3,"dialogLink","disabled"],["mat-menu-item","","type","button","data-e2e","menu-session__button-delete",3,"click"],["mat-menu-item","","type","button","routerLink",".","queryParamsHandling","merge","data-e2e","menu-session__button-skip-after",3,"queryParams"],["mat-menu-item","","type","button","routerLink",".","queryParamsHandling","merge","data-e2e","menu-session__button-skip-before",3,"queryParams"]],template:function(i,n){if(i&1&&(u(0,"button",1),S(1,"mat-icon",2),p(),u(2,"mat-menu",null,0),Ct(4,Od,10,11,"ng-template",3),p()),i&2){let s=nt(3);g("matMenuTriggerFor",s)}},dependencies:[ce,Bi,le,de,oe,wt,Jt,Ne],styles:[`[_nghost-%COMP%]{display:inline-block}
/*# sourceMappingURL=button-session-actions-DFM6E35U.css.map */`],changeDetection:0})}return r})();var il=(()=>{class r{elementRef=d(H);destroyRef=d(Tt);constructor(){ct(()=>{let t=this.elementRef.nativeElement.querySelector("thead"),i=this.elementRef.nativeElement.querySelector("tfoot"),n=this.elementRef.nativeElement.parentElement;if(!n||!t||!i)return;t.style.position="sticky",t.style.zIndex="10",i.style.position="sticky",i.style.zIndex="10";let s=new MutationObserver(o=>{let{transform:a}=(o.at(0)?.target).style,l=a.replace("translateY(","").replace("px)",""),c=`-${l}px`,m=`${l}px`;t.style.top!==c&&(t.style.top=c),i.style.bottom!==m&&(i.style.bottom=m)});s.observe(n,{attributes:!0,attributeFilter:["style"]}),this.destroyRef.onDestroy(()=>s.disconnect())})}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","sticky",""]]})}return r})();var wn=(()=>{class r{cdkVirtualForTypes=ut();static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","cdkVirtualFor",""]],inputs:{cdkVirtualForTypes:[1,"cdkVirtualForTypes"]}})}return r})();var Nd=r=>({top:r}),Fd=(r,e)=>[r,e];function Bd(r,e){r&1&&S(0,"div")}function zd(r,e){if(r&1&&(gi(0),u(1,"tr",22),Ct(2,Bd,1,0,"div",23),u(3,"td",24),E(4),B(5,"date"),p(),u(6,"td",25),E(7),B(8,"date"),p(),u(9,"td",26),S(10,"duration",19),B(11,"map"),p(),u(12,"td",27),S(13,"button-session-actions",28),p()(),bi()),r&2){let t=e.$implicit,i=D(),n=D();f(),g("cdkDragData",ke(15,Fd,t,i.id)),f(3),Dt(" ",Zt(5,6,t.start,"yyyy-MM-dd H:mm")," "),f(3),Dt(" ",Zt(8,9,t.end,"yyyy-MM-dd H:mm")," "),f(3),g("value",Zt(11,12,t,n.sessionDuration)),f(3),g("session",t)("task",i)}}function Vd(r,e){if(r&1){let t=Q();u(0,"button",29),O("click",function(){N(t);let n=D(),s=D();return F(s.start(n.id))}),S(1,"mat-icon",30),p()}}function jd(r,e){if(r&1){let t=Q();u(0,"button",31),O("click",function(){N(t);let n=D(),s=D();return F(s.stop(n.id))}),S(1,"mat-icon",32),p()}}function Kd(r,e){if(r&1&&(u(0,"mat-toolbar",1)(1,"button",2),S(2,"mat-icon",3),p(),u(3,"h2"),S(4,"mat-icon",4),B(5,"taskStateIcon"),u(6,"span",5),E(7),p()(),S(8,"button-task-actions",6),p(),u(9,"cdk-virtual-scroll-viewport",7,0)(11,"table",8)(12,"thead",9)(13,"tr",10)(14,"th",11),E(15,"Start"),p(),u(16,"th",12),E(17,"End"),p(),u(18,"th",13),E(19,"Duration"),p(),S(20,"th",14),p()(),u(21,"tbody"),Ct(22,zd,14,18,"ng-container",15),p(),u(23,"tfoot")(24,"tr",16)(25,"td",17),E(26,"Total"),p(),S(27,"td",17),u(28,"td",18),S(29,"duration",19),B(30,"map"),p(),S(31,"td",17),p()()()(),q(32,Vd,2,0,"button",20),q(33,jd,2,0,"button",21)),r&2){let t=e,i=nt(10),n=D();g("syncWidthTo",i),f(4),g("svgIcon",dt(5,12,t)),f(3),wi(t.name),f(),g("task",t),f(),g("itemSize",52),f(2),g("cdkDropListSortingDisabled",!0),f(),g("ngStyle",Ht(17,Nd,"-"+i.getOffsetToRenderedContentStart()+"px")),f(10),g("cdkVirtualForOf",n.sortSessions(t.sessions))("cdkVirtualForTypes",t.sessions),f(7),g("value",Zt(30,14,t,n.taskDuration)),f(3),G(n.taskIsInProgress()===!1?32:-1),f(),G(n.taskIsInProgress()===!0?33:-1)}}var nl=(()=>{class r{store=d(_t);keys=d(Te);destroyRef=d(Tt);routedDialogs=d(Fe);taskIsInProgress=yt(()=>Le(this.store.currentTask()));viewport=xi(ft);taskDuration=ji;sessionDuration=Xs;sortSessions=$s;hotkeys=[kt(qa,"Start/stop task",t=>{let i=this.store.currentTask(),n=this.taskIsInProgress();i&&(n?this.stop(i.id):this.start(i.id))}),kt(Ga,"Mark as finished",t=>{let i=this.store.currentTask();i&&this.store.updateTaskState(i.id,W.finished)}),kt(Qa,"Mark as active",t=>{let i=this.store.currentTask();i&&this.store.updateTaskState(i.id,W.active)}),kt(Wa,"Rename task",()=>{let t=this.store.currentTask();t&&this.routedDialogs.navigate(["tasks",t.id,"rename"])}),kt(Ya,"Delete task",()=>{let t=this.store.currentTask();t&&this.store.deleteTask(t.id)})];displayedColumns=["start","end","duration","action"];constructor(){this.keys.add(this.hotkeys),this.destroyRef.onDestroy(()=>{this.keys.remove(this.hotkeys)}),Vt(()=>{this.store.currentTaskId(),this.viewport()?.scrollToIndex(0)})}start(t){this.store.startTask(t,Date.now())}stop(t){this.store.stopTask(t,Date.now())}deleteTask(t){this.store.deleteTask(t.id)}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["screen-task"]],viewQuery:function(i,n){i&1&&vi(n.viewport,ft,5),i&2&&yi()},decls:1,vars:1,consts:[["viewport",""],[3,"syncWidthTo"],["routerLink","./..","queryParamsHandling","merge","mat-icon-button",""],["svgIcon","arrow_back"],["data-e2e","screen-task__state-icon",1,"fix-icon-color",3,"svgIcon"],["data-e2e","screen-task__name"],[3,"task"],["minBufferPx","200","maxBufferPx","2000",3,"itemSize"],["cdkDropList","","cdkVirtualScrollingElement","","sticky","",1,"mat-mdc-table",3,"cdkDropListSortingDisabled"],[3,"ngStyle"],[1,"mat-mdc-header-row","mdc-data-table__header-row"],[1,"header-start","mat-mdc-header-cell","mdc-data-table__header-cell"],[1,"header-end","mat-mdc-header-cell","mdc-data-table__header-cell"],[1,"header-duration","mat-mdc-header-cell","mdc-data-table__header-cell"],[1,"header-action","mat-mdc-header-cell","mdc-data-table__header-cell"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTypes"],[1,"mat-mdc-footer-row","mdc-data-table__row"],[1,"mat-mdc-footer-cell","mdc-data-table__cell"],["data-e2e","screen-task__task-duration",1,"mat-mdc-footer-cell","mdc-data-table__cell"],[3,"value"],["mat-fab","","color","accent","matTooltip","Start","data-e2e","screen-task__button-start"],["mat-fab","","color","primary","matTooltip","Stop","data-e2e","screen-task__button-stop"],["data-e2e","screen-task__session-row","cdkDrag","",1,"mat-mdc-row","mdc-data-table__row",3,"cdkDragData"],[4,"cdkDragPlaceholder"],["data-e2e","screen-task__session-start",1,"mat-mdc-cell","mdc-data-table__cell"],["data-e2e","screen-task__session-end",1,"mat-mdc-cell","mdc-data-table__cell"],["data-e2e","screen-task__session-duration",1,"mat-mdc-cell","mdc-data-table__cell"],[1,"mat-mdc-cell","mdc-data-table__cell"],["data-e2e","screen-task__button-session-action",3,"session","task"],["mat-fab","","color","accent","matTooltip","Start","data-e2e","screen-task__button-start",3,"click"],["svgIcon","play_arrow"],["mat-fab","","color","primary","matTooltip","Stop","data-e2e","screen-task__button-stop",3,"click"],["svgIcon","pause"]],template:function(i,n){if(i&1&&q(0,Kd,34,19),i&2){let s;G((s=n.store.currentTask())?0:-1,s)}},dependencies:[tl,gn,wt,ae,vn,el,Ma,Ra,un,Jt,oe,Oi,Mi,Ti,Pi,ft,gs,us,il,wn,Ki,yn,he,Ui,fs],styles:[`[_nghost-%COMP%]{position:relative;flex:1;flex-direction:column;max-height:100vh;display:grid;grid-template-rows:auto 1fr}h2[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr}h2[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}h2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:relative;top:2px;margin-right:.25em}[mat-fab][_ngcontent-%COMP%]{position:absolute;bottom:var(--fab-offset);right:var(--fab-offset);left:50%}.session-tabular-data[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr}mat-toolbar[_ngcontent-%COMP%]{grid-row:1;display:grid;grid-template-columns:auto 1fr auto}.header-start[_ngcontent-%COMP%], .header-end[_ngcontent-%COMP%]{width:50%}.header-duration[_ngcontent-%COMP%]{max-width:95px;min-width:95px}.header-action[_ngcontent-%COMP%]{max-width:40px;min-width:40px}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{grid-row:2;padding-right:2px}duration[_ngcontent-%COMP%]{--unit-font-size: 10px}
/*# sourceMappingURL=screen-task-FHRX5ULU.css.map */`,`.mat-mdc-table[_ngcontent-%COMP%]{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mdc-data-table__cell[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}.mdc-data-table__cell[_ngcontent-%COMP%], .mdc-data-table__header-cell[_ngcontent-%COMP%]{padding:0 16px}.mat-mdc-header-row[_ngcontent-%COMP%]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, .87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row[_ngcontent-%COMP%]{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, .87))}.mat-mdc-row[_ngcontent-%COMP%], .mdc-data-table__content[_ngcontent-%COMP%]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row[_ngcontent-%COMP%]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, .87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell[_ngcontent-%COMP%]{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, .12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}.mat-mdc-cell[_ngcontent-%COMP%]{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, .12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row[_ngcontent-%COMP%]:last-child   .mat-mdc-cell[_ngcontent-%COMP%]{border-bottom:none}.mat-mdc-footer-cell[_ngcontent-%COMP%]{letter-spacing:var(--mat-table-row-item-label-text-tracking)}.mat-mdc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-mdc-cell[_ngcontent-%COMP%], .mat-mdc-footer-cell[_ngcontent-%COMP%], .mat-mdc-header-row[_ngcontent-%COMP%], .mat-mdc-row[_ngcontent-%COMP%], .mat-mdc-footer-row[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{background:inherit}.mat-mdc-table[_ngcontent-%COMP%]   mat-header-row.mat-mdc-header-row[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   mat-row.mat-mdc-row[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   mat-footer-row.mat-mdc-footer-cell[_ngcontent-%COMP%]{height:unset}
/*# sourceMappingURL=mat-table-PJRYF73X.css.map */`],changeDetection:0})}return r})();var rl=(()=>{class r{viewport=d(ft);checkViewportSizeWhenValueChanges=ut();constructor(){Vt(()=>{this.checkViewportSizeWhenValueChanges(),this.viewport.checkViewportSize()})}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","checkViewportSizeWhenValueChanges",""]],inputs:{checkViewportSizeWhenValueChanges:[1,"checkViewportSizeWhenValueChanges"]}})}return r})();var sl=(()=>{class r{viewport=d(ft);itemSize=ut();scrollToIndex=ut();previousIndex;constructor(){Vt(()=>{let t=this.scrollToIndex(),i=this.itemSize();if(!zn(t)||t===-1||!i){this.previousIndex=t;return}let n=t*i,s=zn(this.previousIndex)?void 0:"smooth";setTimeout(()=>{this.viewport.scrollToOffset(n-this.viewport.getViewportSize()/2,s),this.previousIndex=t})})}static \u0275fac=function(i){return new(i||r)};static \u0275dir=R({type:r,selectors:[["","scrollToIndex",""]],inputs:{itemSize:[1,"itemSize"],scrollToIndex:[1,"scrollToIndex"]}})}return r})();var Ud=()=>[import("./chunk-4ZAMM2GC.js").then(r=>r.TasksFilterComponent)],Hd=()=>[import("./chunk-LP32ODAR.js").then(r=>r.EmptyStateComponent),Jt,wt,Ai],qd=r=>({"task-opened":r}),ol=()=>["tasks","create"],Gd=r=>[r],Qd=r=>({running:r}),Wd=()=>["active"],Yd=(r,e)=>({dialog:r,primary:e}),$d=r=>({outlets:r}),Zd=r=>["/",r];function Xd(r,e){if(r&1){let t=Q();u(0,"tasks-filter",10),O("keyup.esc",function(){N(t);let n=D(3);return F(n.toggleFilter(!1))}),p()}}function Jd(r,e){if(r&1&&q(0,Xd,1,0,"tasks-filter"),r&2){let t=D(2);G(t.searchOpened()?0:-1)}}function tm(r,e){if(r&1){let t=Q();u(0,"a",15,2),O("cdkDropListDropped",function(n){let s=N(t).$implicit,o=D(3);return F(o.onDrop(n,s))}),S(2,"mat-icon",16),B(3,"taskStateIcon"),B(4,"map"),u(5,"div",17)(6,"span",18),E(7),p(),S(8,"duration",19),B(9,"map"),p(),S(10,"button-task-actions",20),p()}if(r&2){let t=e.$implicit,i=nt(1),n=D(3);g("activated",i.isActive)("routerLink",Ht(15,Gd,t.id)),f(2),g("svgIcon",dt(3,7,t))("ngClass",Ht(17,Qd,Zt(4,9,t,n.isTaskRunning))),f(5),wi(t.name),f(),g("value",Zt(9,12,t,n.taskDuration)),f(2),g("task",t)}}function em(r,e){if(r&1&&(u(0,"cdk-virtual-scroll-viewport",11,1)(2,"mat-nav-list"),Ct(3,tm,11,19,"a",12),p()(),u(4,"button",13),S(5,"mat-icon",14),p()),r&2){let t=D(),i=D();g("itemSize",48)("scrollToIndex",i.store.currentTaskIndex())("checkViewportSizeWhenValueChanges",t),f(3),g("cdkVirtualForOf",t)("cdkVirtualForTrackBy",i.taskId)("cdkVirtualForTypes",t),f(),g("dialogLink",ki(7,ol))}}function im(r,e){r&1&&E(0," Create a task and it will show up here ")}function nm(r,e){r&1&&E(0," Create a task and it will show up here ")}function rm(r,e){r&1&&E(0," You didn't finish any tasks yet ")}function sm(r,e){r&1&&E(0," You didn't abandon any tasks yet ")}function om(r,e){if(r&1&&(u(0,"empty-state"),S(1,"img",21),u(2,"span",22),E(3,"No tasks"),p(),u(4,"span",23),q(5,im,1,0)(6,nm,1,0)(7,rm,1,0)(8,sm,1,0),p(),u(9,"button",24),E(10," Create a task "),p()()),r&2){let t,i=D(4);f(5),G((t=i.store.currentTaskState())==="all"?5:t===i.taskState.active?6:t===i.taskState.finished?7:t===i.taskState.dropped?8:-1),f(4),g("routerLink",Ht(9,Zd,Ht(7,$d,ke(4,Yd,ki(2,ol),ki(3,Wd)))))}}function am(r,e){if(r&1){let t=Q();u(0,"empty-state"),S(1,"mat-icon",25),u(2,"span",22),E(3,"Nothing found"),p(),u(4,"span",23),E(5,"Could not find tasks matching the criteria"),p(),u(6,"button",26),O("click",function(){N(t);let n=D(4);return F(n.toggleFilter(!1))}),E(7,"Reset filter"),p()()}}function lm(r,e){if(r&1&&q(0,om,11,11,"empty-state")(1,am,8,0,"empty-state"),r&2){let t=D(3);G(t.searchOpened()===!1?0:1)}}function cm(r,e){r&1&&(Cn(0,lm,2,1),Mn(1,0,Hd),In())}function dm(r,e){if(r&1){let t=Q();u(0,"section",4)(1,"mat-toolbar",6)(2,"h1"),gi(3),E(4),B(5,"taskState"),bi(),E(6," ("),S(7,"duration",7),B(8,"map"),E(9,") "),p(),u(10,"button",8,0),O("click",function(){N(t);let n=D();return F(n.toggleFilter())}),S(12,"mat-icon",9),p()(),Cn(13,Jd,1,1),Mn(14,13,Ud),In(),q(16,em,6,8)(17,cm,3,0),p()}if(r&2){let t=e,i=D();f(),g("syncWidthTo",i.viewport()),f(3),Dt(" ",dt(5,4,i.store.currentTaskState())," "),f(3),g("value",Zt(8,6,t,i.tasksDuration)),f(9),G(t.length?16:17)}}function mm(r,e){r&1&&(u(0,"section",5),S(1,"router-outlet"),p())}var al=(()=>{class r{store=d(_t);keys=d(Te);router=d(Oe);routedDialogs=d(Fe);destroyRef=d(Tt);viewport=xi(ft);injector=d(Z);filterPresent=yt(()=>!!Object.keys(this.store.decodedFilterParams()).length);filterToggles=zt(void 0);searchOpened=yt(()=>{let t=this.filterPresent(),i=this.filterToggles();return i!==void 0?i:t});constructor(){ct(()=>{this.keys.add(this.hotkeys)}),this.destroyRef.onDestroy(()=>{this.keys.remove(this.hotkeys)}),Vt(()=>{this.store.currentTasks(),ct({read:()=>{this.viewport()?.scrollToIndex(0)}},{injector:this.injector})})}taskDuration=ji;tasksDuration=Js;taskState=W;isTaskRunning=Le;taskId=(t,i)=>i.id;hotkeys=[kt(Va,"Add task",()=>this.routedDialogs.navigate(["tasks","create"])),kt([...Br,...zr],"Next/prev task",t=>{let i=this.store.currentTaskState(),n=Br.includes(t.key)?this.store.nextTaskId():zr.includes(t.key)?this.store.prevTaskId():null;i&&n&&this.router.navigate([i,n],{queryParamsHandling:"merge"})}),new zi(ja,t=>(t.preventDefault(),this.toggleFilter(),!0),["INPUT"],"Toggle search")];toggleFilter(t){this.filterToggles.update(()=>t??!this.searchOpened())}onDrop({item:{data:[t,i]}},n){t&&i&&this.store.moveSessionToTask(i,n.id,t)}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=A({type:r,selectors:[["screen-tasks"]],viewQuery:function(i,n){i&1&&vi(n.viewport,ft,5),i&2&&yi()},decls:3,vars:5,consts:[["toggle",""],["scroll",""],["rla","routerLinkActive"],[1,"container",3,"ngClass"],[1,"tasks"],[1,"task","mat-app-background"],[3,"syncWidthTo"],["data-e2e","screen-tasks__total",1,"state-duration",3,"value"],["mat-icon-button","","matTooltip","Toggle filter panel",3,"click"],["svgIcon","filter_list"],[3,"keyup.esc"],[3,"itemSize","scrollToIndex","checkViewportSizeWhenValueChanges"],["mat-list-item","","cdkDropList","","data-e2e","screen-tasks__task-item","routerLinkActive","","queryParamsHandling","merge",3,"activated","routerLink","cdkDropListDropped",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy","cdkVirtualForTypes"],["mat-fab","","color","accent","data-e2e","button-add-task","matTooltip","Create a task",3,"dialogLink"],["svgIcon","add"],["mat-list-item","","cdkDropList","","data-e2e","screen-tasks__task-item","routerLinkActive","","queryParamsHandling","merge",3,"cdkDropListDropped","activated","routerLink"],["data-e2e","screen-tasks__task-state-icon","matListItemIcon","",3,"svgIcon","ngClass"],["matListItemTitle","",1,"item-title"],["data-e2e","screen-tasks__task-name",1,"name"],["data-e2e","screen-tasks__task-duration",3,"value"],["matListItemMeta","",3,"task"],["src","assets/favicon.svg","alt","Timer","illustration",""],["title",""],["subtitle",""],["mat-flat-button","","type","button","queryParamsHandling","preserve","data-e2e","screen-tasks__button-add-task-empty-state",1,"tertiary-button",3,"routerLink"],["color","accent","illustration","","svgIcon","search"],["mat-flat-button","","type","button",3,"click"]],template:function(i,n){if(i&1&&(u(0,"div",3),q(1,dm,18,9,"section",4),q(2,mm,2,0,"section",5),p()),i&2){let s;g("ngClass",Ht(3,qd,n.store.isCurrentTaskOpened())),f(),G((s=n.store.currentTasks())?1:-1,s),f(),G(n.store.isCurrentTaskOpened()?2:-1)}},dependencies:[Ne,Jt,Ni,Fi,Mi,Ti,Pi,ft,gn,wt,oe,Oi,_n,Lr,Ar,Or,qe,ae,vn,fn,un,rl,sl,ps,wn,Ki,yn,bn,he,Ui],styles:[`[_nghost-%COMP%]{display:contents}.container[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr;flex:1;--fab-offset: 1rem}@media(min-width:900px){.container[_ngcontent-%COMP%]:not(.task-opened){grid-template-areas:"left tasks right";grid-template-columns:1fr 50% 1fr}.container.task-opened[_ngcontent-%COMP%]{grid-template-areas:"tasks task";grid-template-columns:1fr 1fr}}@media(max-width:900px){.container[_ngcontent-%COMP%]{grid-template-columns:[tasks-start task-start] 1fr;grid-template-rows:[tasks-start task-start] 1fr}.container[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]{z-index:1}}mat-icon.running[_ngcontent-%COMP%]{background:var(--timer-logo-color)!important;color:var(--mat-app-background-color)!important;border-radius:100%}[matlistitemtitle][_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto}.name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.tasks[_ngcontent-%COMP%]{grid-area:tasks;position:relative;max-height:100vh;display:flex;flex-direction:column}.task[_ngcontent-%COMP%]{grid-area:task;display:flex;flex-direction:column;overflow:hidden}mat-toolbar[_ngcontent-%COMP%]{flex:0 0 auto}[mat-fab][_ngcontent-%COMP%]{position:absolute;bottom:var(--fab-offset);right:var(--fab-offset);left:50%}h1[_ngcontent-%COMP%]{width:100%}.search-form[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{display:flex;align-items:center}.range-filter[_ngcontent-%COMP%]{margin-left:auto;flex:0 0 42.5px}.search-form[_ngcontent-%COMP%]{margin-left:auto}.state-duration[_ngcontent-%COMP%]{position:relative;top:1px}.filter-trigger-icon[_ngcontent-%COMP%]{position:relative;top:3px}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{flex:1}empty-state[_ngcontent-%COMP%]{margin:auto}.cdk-drop-list-dragging[_ngcontent-%COMP%]{position:relative}.cdk-drop-list-dragging[_ngcontent-%COMP%]:after{display:block;content:"";position:absolute;inset:0;border:dotted 2px grey}.item-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}mat-nav-list[_ngcontent-%COMP%]{padding:0}.item-title[_ngcontent-%COMP%]{position:relative;top:1px}
/*# sourceMappingURL=screen-tasks-ATSGPJGV.css.map */`],changeDetection:0})}return r})();var Vr={production:!1};Vr.production&&void 0;Ps(Xa,{providers:[cs(),na(),Jr(qs.forRoot({cheatSheetCloseEsc:!1,disableCheatSheet:!1})),Ks([{path:"",redirectTo:"active",pathMatch:"full"},{path:":state",component:al,canActivate:[Ja],children:[{path:":taskId",component:nl}]}],Us({paramsInheritanceStrategy:"always"})),no([{path:"tasks",children:[{path:"create",loadComponent:()=>import("./chunk-TR6YJHZO.js")},{path:":taskId",children:[{path:"rename",loadComponent:()=>import("./chunk-LAQDPOKT.js")},{path:"sessions/:sessionIndex",children:[{path:"split",loadComponent:()=>import("./chunk-3UJTMIRN.js")},{path:"edit",loadComponent:()=>import("./chunk-OK5SP5VO.js")}]}]}]},{path:"hotkeys",loadComponent:()=>import("./chunk-TX5IE6B6.js")}]),{provide:Ls,useFactory(){return{width:"600px",autoFocus:!0}}},{provide:Vs,useValue:{disableTooltipInteractivity:!0}},oa("ngsw-worker.js",{enabled:!ds(),registrationStrategy:"registerWhenStable:30000"}),hs(),{provide:Dn,multi:!0,useFactory:()=>{let r=d(vr),e=d(Tt),t=d(so);return()=>{Vr.production&&(ui(to(60)).pipe(An(e)).subscribe(()=>r.checkForUpdate()),r.versionUpdates.pipe(An(e)).subscribe(i=>{i.type==="VERSION_READY"&&t.open("New version available","Reload").onAction().subscribe(()=>{location.reload()})}))}}},{provide:Dn,multi:!0,useFactory:()=>{let r=d(Ns),e=d(Ri);return()=>{r.addSvgIconResolver(t=>e.bypassSecurityTrustResourceUrl(`assets/icons/${t}.svg`))}}}]});
//# sourceMappingURL=main-HQLX4AA5.js.map
