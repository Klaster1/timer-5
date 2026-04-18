import{a as Ot}from"./chunk-JAWFSMA7.js";import"./chunk-PDIFT3BZ.js";import{G as At,Z as Dt,i as Vt}from"./chunk-HRUXL7BW.js";import{a as Pt}from"./chunk-ZUJH4HQF.js";import{Aa as J,Ba as Ct,Ea as Et,h as vt,j as Tt,ka as It,l as X,o as xt,s as kt,sa as yt,ta as Mt,ua as Rt,va as St,xa as Y,za as wt}from"./chunk-CVT4RZLN.js";import{$b as ct,Ac as v,Ca as V,Cb as ot,Db as M,Eb as R,Ec as ft,Fb as O,Hb as P,Ib as U,Ic as W,Jb as _,Kb as o,Lb as d,Mb as m,Mc as x,Nc as p,Oc as bt,Sb as $,Tb as dt,Xa as h,Xb as S,Zb as g,_ as st,_b as ht,a as F,ac as _t,b as L,bc as Q,ca as I,cc as f,db as H,dc as b,ea as r,hc as j,ic as ut,j as nt,jc as mt,kb as y,kc as q,la as at,lc as u,ma as rt,mb as A,mc as pt,nc as Z,oc as N,qb as D,qc as G,sa as w,sc as B,ta as C,uc as z,vc as gt,wa as E,ya as lt}from"./chunk-33GRFTX6.js";var Ht=["knob"],$t=["valueIndicatorContainer"];function Qt(n,c){if(n&1&&(o(0,"div",2,1)(2,"div",5)(3,"span",6),u(4),d()()()),n&2){let t=g();h(4),pt(t.valueIndicatorText)}}var jt=["trackActive"],qt=["*"];function Zt(n,c){if(n&1&&m(0,"div"),n&2){let t=c.$implicit,e=c.$index,i=g(3);q(t===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),ut("transform",i._calcTickMarkTransform(e))}}function Gt(n,c){if(n&1&&P(0,Zt,1,4,"div",8,O),n&2){let t=g(2);U(t._tickMarks)}}function Yt(n,c){if(n&1&&(o(0,"div",6,1),M(2,Gt,2,0),d()),n&2){let t=g();h(2),R(t._cachedWidth?2:-1)}}function Jt(n,c){if(n&1&&m(0,"mat-slider-visual-thumb",7),n&2){let t=g();_("discrete",t.discrete)("thumbPosition",1)("valueIndicatorText",t.startValueIndicatorText)}}var s=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(s||{}),k=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(k||{}),K=new I("_MatSlider"),Nt=new I("_MatSliderThumb"),Kt=new I("_MatSliderRangeThumb"),Bt=new I("_MatSliderVisualThumb");var te=(()=>{class n{_cdr=r(W);_ngZone=r(C);_slider=r(K);_renderer=r(H);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=r(V).nativeElement;_platform=r(X);constructor(){}ngAfterViewInit(){let t=this._slider._getInput(this.thumbPosition);t&&(this._ripple.radius=24,this._sliderInput=t,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let e=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(e,"pointermove",this._onPointerMove),i.listen(e,"pointerdown",this._onDragStart),i.listen(e,"pointerup",this._onDragEnd),i.listen(e,"pointerleave",this._onMouseLeave),i.listen(e,"focus",this._onFocus),i.listen(e,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t())}_onPointerMove=t=>{if(this._sliderInput._isFocused)return;let e=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(t,e);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=t=>{t.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(t){return t?.state===Y.FADING_IN||t?.state===Y.VISIBLE}_showRipple(t,e){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===s.START?s.END:s.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!e)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:t,centered:!0,persistent:!0})}_hideRipple(t){if(t?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let e=this._getSibling();e._isShowingAnyRipple()||(this._hideValueIndicator(),e._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===s.START?s.END:s.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(e,i){if(e&1&&Q(J,5)(Ht,5)($t,5),e&2){let a;f(a=b())&&(i._ripple=a.first),f(a=b())&&(i._knob=a.first),f(a=b())&&(i._valueIndicatorContainer=a.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[N([{provide:Bt,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(e,i){e&1&&(M(0,Qt,5,1,"div",2),m(1,"div",3,0)(3,"div",4)),e&2&&(R(i.discrete?0:-1),h(3),_("matRippleDisabled",!0))},dependencies:[J],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2,changeDetection:0})}return n})(),zt=(()=>{class n{_ngZone=r(C);_cdr=r(W);_elementRef=r(V);_dir=r(kt,{optional:!0});_globalRippleOptions=r(wt,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(t){this._disabled=t;let e=this._getInput(s.END),i=this._getInput(s.START);e&&(e.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(t){this._discrete=t,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(t){this._showTickMarks=t,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(t){let e=t==null||isNaN(t)?this._min:t;this._min!==e&&this._updateMin(e)}_min=0;color;disableRipple=!1;_updateMin(t){let e=this._min;this._min=t,this._isRange?this._updateMinRange({old:e,new:t}):this._updateMinNonRange(t),this._onMinMaxOrStepChange()}_updateMinRange(t){let e=this._getInput(s.END),i=this._getInput(s.START),a=e.value,l=i.value;i.min=t.new,e.min=Math.max(t.new,i.value),i.max=Math.min(e.max,e.value),i._updateWidthInactive(),e._updateWidthInactive(),t.new<t.old?this._onTranslateXChangeBySideEffect(e,i):this._onTranslateXChangeBySideEffect(i,e),a!==e.value&&this._onValueChange(e),l!==i.value&&this._onValueChange(i)}_updateMinNonRange(t){let e=this._getInput(s.END);if(e){let i=e.value;e.min=t,e._updateThumbUIByValue(),this._updateTrackUI(e),i!==e.value&&this._onValueChange(e)}}get max(){return this._max}set max(t){let e=t==null||isNaN(t)?this._max:t;this._max!==e&&this._updateMax(e)}_max=100;_updateMax(t){let e=this._max;this._max=t,this._isRange?this._updateMaxRange({old:e,new:t}):this._updateMaxNonRange(t),this._onMinMaxOrStepChange()}_updateMaxRange(t){let e=this._getInput(s.END),i=this._getInput(s.START),a=e.value,l=i.value;e.max=t.new,i.max=Math.min(t.new,e.value),e.min=i.value,e._updateWidthInactive(),i._updateWidthInactive(),t.new>t.old?this._onTranslateXChangeBySideEffect(i,e):this._onTranslateXChangeBySideEffect(e,i),a!==e.value&&this._onValueChange(e),l!==i.value&&this._onValueChange(i)}_updateMaxNonRange(t){let e=this._getInput(s.END);if(e){let i=e.value;e.max=t,e._updateThumbUIByValue(),this._updateTrackUI(e),i!==e.value&&this._onValueChange(e)}}get step(){return this._step}set step(t){let e=isNaN(t)?this._step:t;this._step!==e&&this._updateStep(e)}_step=1;_updateStep(t){this._step=t,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let t=this._getInput(s.END),e=this._getInput(s.START),i=t.value,a=e.value,l=e.value;t.min=this._min,e.max=this._max,t.step=this._step,e.step=this._step,this._platform.SAFARI&&(t.value=t.value,e.value=e.value),t.min=Math.max(this._min,e.value),e.max=Math.min(this._max,t.value),e._updateWidthInactive(),t._updateWidthInactive(),t.value<l?this._onTranslateXChangeBySideEffect(e,t):this._onTranslateXChangeBySideEffect(t,e),i!==t.value&&this._onValueChange(t),a!==e.value&&this._onValueChange(e)}_updateStepNonRange(){let t=this._getInput(s.END);if(t){let e=t.value;t.step=this._step,this._platform.SAFARI&&(t.value=t.value),t._updateThumbUIByValue(),e!==t.value&&this._onValueChange(t)}}displayWith=t=>`${t}`;_tickMarks;_noopAnimations=It();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=v(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=r(X);constructor(){r(xt).load(Ct);let t=this._isRtl();bt(()=>{let e=this._isRtl();e!==t&&(t=e,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let t=this._getInput(s.END),e=this._getInput(s.START);this._isRange=!!t&&!!e,this._cdr.detectChanges();let i=this._getThumb(s.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(t,e):this._initUINonRange(t),this._updateTrackUI(t),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(t){t.initProps(),t.initUI(),this._updateValueIndicatorUI(t),this._hasViewInitialized=!0,t._updateThumbUIByValue()}_initUIRange(t,e){t.initProps(),t.initUI(),e.initProps(),e.initUI(),t._updateMinMax(),e._updateMinMax(),t._updateStaticStyles(),e._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,t._updateThumbUIByValue(),e._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let t=this._getInput(s.END),e=this._getInput(s.START);t._setIsLeftThumb(),e._setIsLeftThumb(),t.translateX=t._calcTranslateXByValue(),e.translateX=e._calcTranslateXByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateWidthInactive(),e._updateWidthInactive(),t._updateThumbUIByValue(),e._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(s.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(s.START)._isActive||this._getThumb(s.END)._isActive}_getValue(t=s.END){let e=this._getInput(t);return e?e.value:this.min}_skipUpdate(){return!!(this._getInput(s.START)?._skipUIUpdate||this._getInput(s.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(t){let e=this._trackActive.nativeElement.style;e.left=t.left,e.right=t.right,e.transformOrigin=t.transformOrigin,e.transform=t.transform}_calcTickMarkTransform(t){let e=t*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-e:e}px)`}_onTranslateXChange(t){this._hasViewInitialized&&(this._updateThumbUI(t),this._updateTrackUI(t),this._updateOverlappingThumbUI(t))}_onTranslateXChangeBySideEffect(t,e){this._hasViewInitialized&&(t._updateThumbUIByValue(),e._updateThumbUIByValue())}_onValueChange(t){this._hasViewInitialized&&(this._updateValueIndicatorUI(t),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let t=this._getInput(s.END),e=this._getInput(s.START);t._updateThumbUIByValue(),e._updateThumbUIByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateMinMax(),e._updateMinMax(),t._updateWidthInactive(),e._updateWidthInactive()}else{let t=this._getInput(s.END);t&&t._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let t=this._getInput(s.START),e=this._getInput(s.END);return!t||!e?!1:e.translateX-t.translateX<20}_updateOverlappingThumbClassNames(t){let e=t.getSibling(),i=this._getThumb(t.thumbPosition);this._getThumb(e.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),i._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(t){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(t))}_updateThumbUI(t){if(this._skipUpdate())return;let e=this._getThumb(t.thumbPosition===s.END?s.END:s.START);e._hostElement.style.transform=`translateX(${t.translateX}px)`}_updateValueIndicatorUI(t){if(this._skipUpdate())return;let e=this.displayWith(t.value);if(this._hasViewInitialized?t._valuetext.set(e):t._hostElement.setAttribute("aria-valuetext",e),this.discrete){t.thumbPosition===s.START?this.startValueIndicatorText=e:this.endValueIndicatorText=e;let i=this._getThumb(t.thumbPosition);e.length<3?i._hostElement.classList.add("mdc-slider__thumb--short-value"):i._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let t=this._getInput(s.END),e=this._getInput(s.START);t&&this._updateValueIndicatorUI(t),e&&this._updateValueIndicatorUI(e)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let t=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/t)*t-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(t){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(t):this._updateTrackUINonRange(t))}_updateTrackUIRange(t){let e=t.getSibling();if(!e||!this._cachedWidth)return;let i=Math.abs(e.translateX-t.translateX)/this._cachedWidth;t._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-e.translateX}px`,transformOrigin:"right",transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${e.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${i})`})}_updateTrackUINonRange(t){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-t.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${t.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let t=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(t):this._updateTickMarkUINonRange(t)}_updateTickMarkUINonRange(t){let e=this._getValue(),i=Math.max(Math.round((e-this.min)/t),0)+1,a=Math.max(Math.round((this.max-e)/t),0)-1;this._isRtl()?i++:a++,this._tickMarks=Array(i).fill(k.ACTIVE).concat(Array(a).fill(k.INACTIVE))}_updateTickMarkUIRange(t){let e=this._getValue(),i=this._getValue(s.START),a=Math.max(Math.round((i-this.min)/t),0),l=Math.max(Math.round((e-i)/t)+1,0),T=Math.max(Math.round((this.max-e)/t),0);this._tickMarks=Array(a).fill(k.INACTIVE).concat(Array(l).fill(k.ACTIVE),Array(T).fill(k.INACTIVE))}_getInput(t){if(t===s.END&&this._input)return this._input;if(this._inputs?.length)return t===s.START?this._inputs.first:this._inputs.last}_getThumb(t){return t===s.END?this._thumbs?.last:this._thumbs?.first}_setTransition(t){this._hasAnimation=!this._platform.IOS&&t&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(t,e){let i=e.width/2,a=e.x+i,l=e.y+i,T=t.clientX-a,et=t.clientY-l;return Math.pow(T,2)+Math.pow(et,2)<Math.pow(i,2)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["mat-slider"]],contentQueries:function(e,i,a){if(e&1&&_t(a,Nt,5)(a,Kt,4),e&2){let l;f(l=b())&&(i._input=l.first),f(l=b())&&(i._inputs=l)}},viewQuery:function(e,i){if(e&1&&Q(jt,5)(Bt,5),e&2){let a;f(a=b())&&(i._trackActive=a.first),f(a=b())&&(i._thumbs=a)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(e,i){e&2&&(q("mat-"+(i.color||"primary")),mt("mdc-slider--range",i._isRange)("mdc-slider--disabled",i.disabled)("mdc-slider--discrete",i.discrete)("mdc-slider--tick-marks",i.showTickMarks)("_mat-animation-noopable",i._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",x],discrete:[2,"discrete","discrete",x],showTickMarks:[2,"showTickMarks","showTickMarks",x],min:[2,"min","min",p],color:"color",disableRipple:[2,"disableRipple","disableRipple",x],max:[2,"max","max",p],step:[2,"step","step",p],displayWith:"displayWith"},exportAs:["matSlider"],features:[N([{provide:K,useExisting:n}])],ngContentSelectors:qt,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(e,i){e&1&&(ht(),ct(0),o(1,"div",2),m(2,"div",3),o(3,"div",4),m(4,"div",5,0),d(),M(6,Yt,3,1,"div",6),d(),M(7,Jt,1,3,"mat-slider-visual-thumb",7),m(8,"mat-slider-visual-thumb",7)),e&2&&(h(6),R(i.showTickMarks?6:-1),h(),R(i._isRange?7:-1),h(),_("discrete",i.discrete)("thumbPosition",2)("valueIndicatorText",i.endValueIndicatorText))},dependencies:[te],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));
  height: var(--mat-slider-active-track-height, 4px);
  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));
  border-top-width: var(--mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));
  height: var(--mat-slider-inactive-track-height, 4px);
  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--inactive::before {
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
@media (forced-colors: active) {
  .mdc-slider__track--inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));
  width: var(--mat-slider-value-indicator-width, 28px);
  height: var(--mat-slider-value-indicator-height, 28px);
  padding: var(--mat-slider-value-indicator-padding, 0);
  opacity: var(--mat-slider-value-indicator-opacity, 1);
  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
}
.mdc-slider__value-indicator::after {
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
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--mat-slider-value-indicator-width, 28px);
  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));
  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));
  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));
  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));
  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--mat-slider-handle-width, 20px);
  height: var(--mat-slider-handle-height, 20px);
  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));
  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));
  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--mat-slider-with-tick-marks-container-size, 2px);
  height: var(--mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();var ee={provide:Vt,useExisting:st(()=>tt),multi:!0};var tt=(()=>{class n{_ngZone=r(C);_elementRef=r(V);_cdr=r(W);_slider=r(K);_platform=r(X);_listenerCleanups;get value(){return p(this._hostElement.value,0)}set value(t){t===null&&(t=this._getDefaultValue()),t=isNaN(t)?0:t;let e=t+"";if(!this._hasSetInitialValue){this._initialValue=e;return}this._isActive||this._setValue(e)}_setValue(t){this._hostElement.value=t,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new w;dragStart=new w;dragEnd=new w;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(t){this._translateX=t}_translateX;thumbPosition=s.END;get min(){return p(this._hostElement.min,0)}set min(t){this._hostElement.min=t+"",this._cdr.detectChanges()}get max(){return p(this._hostElement.max,0)}set max(t){this._hostElement.max=t+"",this._cdr.detectChanges()}get step(){return p(this._hostElement.step,0)}set step(t){this._hostElement.step=t+"",this._cdr.detectChanges()}get disabled(){return x(this._hostElement.disabled)}set disabled(t){this._hostElement.disabled=t,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=E("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(t){this._isFocused=t}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new nt;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let t=r(H);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[t.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),t.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),t.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(t){if(!(this.disabled||t.button!==0)){if(this._platform.IOS){let e=this._slider._isCursorOnSliderThumb(t,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=e,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(t,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(t),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(t){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(t)},0)}_fixValue(t){let e=t.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,a=this._slider.step===0?1:this._slider.step,l=Math.floor((this._slider.max-this._slider.min)/a),T=this._slider._isRtl()?1-e/i:e/i,Ft=Math.round(T*l)/l*(this._slider.max-this._slider.min)+this._slider.min,it=Math.round(Ft/a)*a,Lt=this.value;if(it===Lt){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});return}this.value=it,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation})}_onPointerMove(t){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(t)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(t){let e=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(t,i),e)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(t){return t.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(t){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(t)}_updateThumbUIByPointerEvent(t,e){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(t)),this._updateThumbUI(e)}_updateThumbUI(t){this._slider._setTransition(!!t?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(t){(this._isControlInitialized||t!==null)&&(this.value=t)}registerOnChange(t){this._onChangeFn=t,this._isControlInitialized=!0}registerOnTouched(t){this._onTouchedFn=t}setDisabledState(t){this.disabled=t}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(e,i){e&1&&S("change",function(){return i._onChange()})("input",function(){return i._onInput()})("blur",function(){return i._onBlur()})("focus",function(){return i._onFocus()}),e&2&&ot("aria-valuetext",i._valuetext())},inputs:{value:[2,"value","value",p]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[N([ee,{provide:Nt,useExisting:n}])]})}return n})();var Wt=(()=>{class n{contextType=ft.required();static ngTemplateContextGuard(t,e){return!0}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["ng-template","contextType",""]],inputs:{contextType:[1,"contextType"]}})}return n})();var Xt=n=>({sessions:n});function ie(n,c){if(n&1&&(o(0,"tr",16)(1,"td",17),u(2),B(3,"date"),d(),o(4,"td",18),u(5),B(6,"date"),d(),o(7,"td",19),m(8,"duration",20),B(9,"map"),d()()),n&2){let t=c.$implicit,e=g(2);h(2),Z(" ",z(3,3,t.start,"yyyy-MM-dd H:mm")," "),h(3),Z(" ",z(6,6,t.end,"yyyy-MM-dd H:mm")," "),h(3),_("value",z(9,9,t,e.sessionDuration))}}function ne(n,c){if(n&1&&(o(0,"table",11)(1,"thead")(2,"tr",12)(3,"th",13),u(4,"Start"),d(),o(5,"th",14),u(6,"End"),d(),o(7,"th",15),u(8,"Duration"),d()()(),o(9,"tbody"),P(10,ie,10,12,"tr",16,O),d()()),n&2){let t=c.sessions;h(10),U(t)}}function se(n,c){n&1&&$(0)}function ae(n,c){n&1&&$(0)}var Qe=(()=>{class n{static dialogConfig={autoFocus:!1};state=r(Dt);value=E(null);constructor(){lt(()=>{let t=this.state.dialogSession();if(!t)return;let e=t.start+(t.end-t.start)/2;this.value.set(e)},{allowSignalWrites:!0})}beforeSessions=v(()=>{let t=this.state.dialogSession();return t?[t]:[]});afterSessions=v(()=>{let t=this.value(),e=this.state.dialogSession();if(!e||t===null)return[];let i=L(F({},e),{end:t}),a=L(F({},e),{start:t});return[i,a]});min=v(()=>this.state.dialogSession()?.start);max=v(()=>this.state.dialogSession()?.end);submitDisabled=v(()=>this.value()===this.state.dialogSession()?.start||this.value()===this.state.dialogSession()?.end);sessionDuration=At;sessionsContext;submit(){let t=this.submitDisabled(),e=this.afterSessions();t||!e||this.state.splitSession(e)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["dialog-split-session"]],decls:15,vars:13,consts:[["sessionTable",""],["thumb",""],[3,"contextType"],["mat-dialog-title",""],["mat-dialog-content",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"min","max"],["matSliderThumb","","data-e2e","dialog-split-session__slider-input",3,"input","value"],["mat-dialog-actions","","align","end"],["type","button","mat-button","","mat-dialog-close",""],["type","submit","form","promptForm","mat-button","","data-e2e","dialog-split-session__button-submit",3,"click","disabled"],[1,"mat-mdc-table"],[1,"mat-mdc-header-row","mdc-data-table__header-row"],[1,"header-start","mat-mdc-header-cell","mdc-data-table__header-cell"],[1,"header-end","mat-mdc-header-cell","mdc-data-table__header-cell"],[1,"header-duration","mat-mdc-header-cell","mdc-data-table__header-cell"],["data-e2e","dialog-split-session__session-row",1,"mat-mdc-row","mdc-data-table__row"],["data-e2e","dialog-split-session__session-start",1,"mat-mdc-cell","mdc-data-table__cell"],["data-e2e","dialog-split-session__session-end",1,"mat-mdc-cell","mdc-data-table__cell"],["data-e2e","dialog-split-session__session-duration",1,"mat-mdc-cell","mdc-data-table__cell"],[3,"value"]],template:function(e,i){if(e&1){let a=dt();D(0,ne,12,0,"ng-template",2,0,gt),o(2,"h1",3),u(3,"Split session"),d(),o(4,"form",4),D(5,se,1,0,"ng-container",5),o(6,"mat-slider",6)(7,"input",7,1),S("input",function(){at(a);let T=j(8);return rt(i.value.set(T.valueAsNumber))}),d()(),D(9,ae,1,0,"ng-container",5),d(),o(10,"div",8)(11,"button",9),u(12,"Cancel"),d(),o(13,"button",10),S("click",function(){return i.submit()}),u(14," Split "),d()()}if(e&2){let a=j(1);_("contextType",i.sessionsContext),h(5),_("ngTemplateOutlet",a)("ngTemplateOutletContext",G(9,Xt,i.beforeSessions())),h(),_("min",i.min())("max",i.max()),h(),_("value",i.value()),h(2),_("ngTemplateOutlet",a)("ngTemplateOutletContext",G(11,Xt,i.afterSessions())),h(4),_("disabled",i.submitDisabled())}},dependencies:[Mt,Rt,St,yt,Et,zt,tt,Ot,Wt,vt,Tt,Pt],styles:[`mat-slider[_ngcontent-%COMP%]{width:calc(100% - 15px)}
/*# sourceMappingURL=dialog-split-session-6XFDSJRW.css.map */`,`.mat-mdc-table[_ngcontent-%COMP%]{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mdc-data-table__cell[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}.mdc-data-table__cell[_ngcontent-%COMP%], .mdc-data-table__header-cell[_ngcontent-%COMP%]{padding:0 16px}.mat-mdc-header-row[_ngcontent-%COMP%]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, .87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row[_ngcontent-%COMP%]{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, .87))}.mat-mdc-row[_ngcontent-%COMP%], .mdc-data-table__content[_ngcontent-%COMP%]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row[_ngcontent-%COMP%]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, .87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell[_ngcontent-%COMP%]{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, .12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}.mat-mdc-cell[_ngcontent-%COMP%]{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, .12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row[_ngcontent-%COMP%]:last-child   .mat-mdc-cell[_ngcontent-%COMP%]{border-bottom:none}.mat-mdc-footer-cell[_ngcontent-%COMP%]{letter-spacing:var(--mat-table-row-item-label-text-tracking)}.mat-mdc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-mdc-cell[_ngcontent-%COMP%], .mat-mdc-footer-cell[_ngcontent-%COMP%], .mat-mdc-header-row[_ngcontent-%COMP%], .mat-mdc-row[_ngcontent-%COMP%], .mat-mdc-footer-row[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{background:inherit}.mat-mdc-table[_ngcontent-%COMP%]   mat-header-row.mat-mdc-header-row[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   mat-row.mat-mdc-row[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   mat-footer-row.mat-mdc-footer-cell[_ngcontent-%COMP%]{height:unset}
/*# sourceMappingURL=mat-table-PJRYF73X.css.map */`],changeDetection:0})}return n})();export{Qe as default};
//# sourceMappingURL=chunk-3UJTMIRN.js.map
