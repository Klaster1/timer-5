import {T,N as Np,a7 as qo,o as od,U as Uw,b6 as z,b7 as G,bi as Wc,A as AI,bd as yb,be as Db,bf as wb,bg as vb,bh as g_,bj as zi,bk as Fi,bl as mi,bm as _i,bn as Ri,bo as gi,bp as pi,bq as bi,br as wi,bs as Di,bt as ki,bu as xi,bv as ac,bw as hc,bx as n$1,aV as BD,av as Wp,D as Di$1,r as Cw,J as Jc,q as fh,I as nw,K as oh,S as Sv,by as Rw,bz as me$1,X as L0,Y as _r,$ as Ae,bA as Sr,a5 as Te$1,bB as M,aD as ee,aE as _a,bC as H0,at as V0,as as j0,au as YD,aJ as KD,u as ih,w as xD,M as AD,ax as Aw,a4 as x$1,aY as pw,ay as Dh,az as gh,aA as XD,aB as ew,aC as hh,ad as Be,a6 as oe$1,a1 as FE,bD as LI,bE as os,aw as rh,aL as k0,bF as tl,bG as nl,aQ as QD,bH as ch,bI as te$1,aI as zb,bJ as Do,bK as Pw,aZ as rl,bL as jw,aU as Mh,bM as Vw,aW as Lu,aX as Fu,bN as OD,bO as kD,bP as PD,bQ as Ih}from'./main-FKLQJAM6.js';var se=["knob"],ne=["valueIndicatorContainer"];function ae(s,l){if(s&1&&(Di$1(0,"div",2,1)(2,"div",5)(3,"span",6),Cw(4),Jc()()()),s&2){let t=QD();Sv(4),Mh(t.valueIndicatorText);}}var re=["trackActive"],le=["*"];function oe(s,l){if(s&1&&ih(0,"div"),s&2){let t=l.$implicit,e=l.$index,i=QD(3);pw(t===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),Ih("transform",i._calcTickMarkTransform(e));}}function de(s,l){if(s&1&&OD(0,oe,1,4,"div",8,kD),s&2){let t=QD(2);PD(t._tickMarks);}}function he(s,l){if(s&1&&(Di$1(0,"div",6,1),xD(2,de,2,0),Jc()),s&2){let t=QD();Sv(2),AD(t._cachedWidth?2:-1);}}function _e(s,l){if(s&1&&ih(0,"mat-slider-visual-thumb",7),s&2){let t=QD();oh("discrete",t.discrete)("thumbPosition",1)("valueIndicatorText",t.startValueIndicatorText);}}var n=(function(s){return s[s.START=1]="START",s[s.END=2]="END",s})(n||{}),x=(function(s){return s[s.ACTIVE=0]="ACTIVE",s[s.INACTIVE=1]="INACTIVE",s})(x||{}),J=new x$1("_MatSlider"),Gt=new x$1("_MatSliderThumb"),ue=new x$1("_MatSliderRangeThumb"),Yt=new x$1("_MatSliderVisualThumb");var ce=(()=>{class s{_cdr=T(L0);_ngZone=T(me$1);_slider=T(J);_renderer=T(FE);_listenerCleanups;discrete=false;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=false;_isActive=false;_isValueIndicatorVisible=false;_hostElement=T(_r).nativeElement;_platform=T(M);ngAfterViewInit(){let t=this._slider._getInput(this.thumbPosition);t&&(this._ripple.radius=24,this._sliderInput=t,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let e=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(e,"pointermove",this._onPointerMove),i.listen(e,"pointerdown",this._onDragStart),i.listen(e,"pointerup",this._onDragEnd),i.listen(e,"pointerleave",this._onMouseLeave),i.listen(e,"focus",this._onFocus),i.listen(e,"blur",this._onBlur)];}));}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t());}_onPointerMove=t=>{if(this._sliderInput._isFocused)return;let e=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(t,e);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef);};_onMouseLeave=()=>{this._isHovered=false,this._hideRipple(this._hoverRippleRef);};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused");};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused");};_onDragStart=t=>{t.button===0&&(this._isActive=true,this._showActiveRipple());};_onDragEnd=()=>{this._isActive=false,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple();};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"));}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},true),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"));}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"));}_isShowingRipple(t){return t?.state===te$1.FADING_IN||t?.state===te$1.VISIBLE}_showRipple(t,e){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===n.START?n.END:n.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!e)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:t,centered:true,persistent:true})}_hideRipple(t){if(t?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let e=this._getSibling();e._isShowingAnyRipple()||(this._hideValueIndicator(),e._hideValueIndicator());}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator");}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");}_getSibling(){return this._slider._getThumb(this.thumbPosition===n.START?n.END:n.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=AI({type:s,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(e,i){if(e&1&&gh(zb,5)(se,5)(ne,5),e&2){let a;XD(a=ew())&&(i._ripple=a.first),XD(a=ew())&&(i._knob=a.first),XD(a=ew())&&(i._valueIndicatorContainer=a.first);}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[Aw([{provide:Yt,useExisting:s}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(e,i){e&1&&(xD(0,ae,5,1,"div",2),ih(1,"div",3,0)(3,"div",4)),e&2&&(AD(i.discrete?0:-1),Sv(3),oh("matRippleDisabled",true));},dependencies:[zb],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return s})(),Jt=(()=>{class s{_ngZone=T(me$1);_cdr=T(L0);_elementRef=T(_r);_dir=T(Ae,{optional:true});_globalRippleOptions=T(Sr,{optional:true});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(t){this._disabled=t;let e=this._getInput(n.END),i=this._getInput(n.START);e&&(e.disabled=this._disabled),i&&(i.disabled=this._disabled);}_disabled=false;get discrete(){return this._discrete}set discrete(t){this._discrete=t,this._updateValueIndicatorUIs();}_discrete=false;get showTickMarks(){return this._showTickMarks}set showTickMarks(t){this._showTickMarks=t,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI());}_showTickMarks=false;get min(){return this._min}set min(t){let e=t==null||isNaN(t)?this._min:t;this._min!==e&&this._updateMin(e);}_min=0;color;disableRipple=false;_updateMin(t){let e=this._min;this._min=t,this._isRange?this._updateMinRange({old:e,new:t}):this._updateMinNonRange(t),this._onMinMaxOrStepChange();}_updateMinRange(t){let e=this._getInput(n.END),i=this._getInput(n.START),a=e.value,o=i.value;i.min=t.new,e.min=Math.max(t.new,i.value),i.max=Math.min(e.max,e.value),i._updateWidthInactive(),e._updateWidthInactive(),t.new<t.old?this._onTranslateXChangeBySideEffect(e,i):this._onTranslateXChangeBySideEffect(i,e),a!==e.value&&this._onValueChange(e),o!==i.value&&this._onValueChange(i);}_updateMinNonRange(t){let e=this._getInput(n.END);if(e){let i=e.value;e.min=t,e._updateThumbUIByValue(),this._updateTrackUI(e),i!==e.value&&this._onValueChange(e);}}get max(){return this._max}set max(t){let e=t==null||isNaN(t)?this._max:t;this._max!==e&&this._updateMax(e);}_max=100;_updateMax(t){let e=this._max;this._max=t,this._isRange?this._updateMaxRange({old:e,new:t}):this._updateMaxNonRange(t),this._onMinMaxOrStepChange();}_updateMaxRange(t){let e=this._getInput(n.END),i=this._getInput(n.START),a=e.value,o=i.value;e.max=t.new,i.max=Math.min(t.new,e.value),e.min=i.value,e._updateWidthInactive(),i._updateWidthInactive(),t.new>t.old?this._onTranslateXChangeBySideEffect(i,e):this._onTranslateXChangeBySideEffect(e,i),a!==e.value&&this._onValueChange(e),o!==i.value&&this._onValueChange(i);}_updateMaxNonRange(t){let e=this._getInput(n.END);if(e){let i=e.value;e.max=t,e._updateThumbUIByValue(),this._updateTrackUI(e),i!==e.value&&this._onValueChange(e);}}get step(){return this._step}set step(t){let e=isNaN(t)?this._step:t;this._step!==e&&this._updateStep(e);}_step=1;_updateStep(t){this._step=t,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange();}_updateStepRange(){let t=this._getInput(n.END),e=this._getInput(n.START),i=t.value,a=e.value,o=e.value;t.min=this._min,e.max=this._max,t.step=this._step,e.step=this._step,this._platform.SAFARI&&(t.value=t.value,e.value=e.value),t.min=Math.max(this._min,e.value),e.max=Math.min(this._max,t.value),e._updateWidthInactive(),t._updateWidthInactive(),t.value<o?this._onTranslateXChangeBySideEffect(e,t):this._onTranslateXChangeBySideEffect(t,e),i!==t.value&&this._onValueChange(t),a!==e.value&&this._onValueChange(e);}_updateStepNonRange(){let t=this._getInput(n.END);if(t){let e=t.value;t.step=this._step,this._platform.SAFARI&&(t.value=t.value),t._updateThumbUIByValue(),e!==t.value&&this._onValueChange(t);}}displayWith=t=>`${t}`;_tickMarks;_noopAnimations=Te$1();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=false;_isRtl=Uw(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=false;_tickMarkTrackWidth=0;_hasAnimation=false;_resizeTimer=null;_platform=T(M);constructor(){T(ee).load(_a);let t=this._isRtl();H0(()=>{let e=this._isRtl();e!==t&&(t=e,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI());});}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let t=this._getInput(n.END),e=this._getInput(n.START);this._isRange=!!t&&!!e,this._cdr.detectChanges();let i=this._getThumb(n.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(t,e):this._initUINonRange(t),this._updateTrackUI(t),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges();}_initUINonRange(t){t.initProps(),t.initUI(),this._updateValueIndicatorUI(t),this._hasViewInitialized=true,t._updateThumbUIByValue();}_initUIRange(t,e){t.initProps(),t.initUI(),e.initProps(),e.initUI(),t._updateMinMax(),e._updateMinMax(),t._updateStaticStyles(),e._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=true,t._updateThumbUIByValue(),e._updateThumbUIByValue();}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null;}_onDirChangeRange(){let t=this._getInput(n.END),e=this._getInput(n.START);t._setIsLeftThumb(),e._setIsLeftThumb(),t.translateX=t._calcTranslateXByValue(),e.translateX=e._calcTranslateXByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateWidthInactive(),e._updateWidthInactive(),t._updateThumbUIByValue(),e._updateThumbUIByValue();}_onDirChangeNonRange(){this._getInput(n.END)._updateThumbUIByValue();}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize());}),this._resizeObserver.observe(this._elementRef.nativeElement);});}_isActive(){return this._getThumb(n.START)._isActive||this._getThumb(n.END)._isActive}_getValue(t=n.END){let e=this._getInput(t);return e?e.value:this.min}_skipUpdate(){return !!(this._getInput(n.START)?._skipUIUpdate||this._getInput(n.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left;}_setTrackActiveStyles(t){let e=this._trackActive.nativeElement.style;e.left=t.left,e.right=t.right,e.transformOrigin=t.transformOrigin,e.transform=t.transform;}_calcTickMarkTransform(t){let e=t*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return `translateX(${this._isRtl()?this._cachedWidth-6-e:e}px)`}_onTranslateXChange(t){this._hasViewInitialized&&(this._updateThumbUI(t),this._updateTrackUI(t),this._updateOverlappingThumbUI(t));}_onTranslateXChangeBySideEffect(t,e){this._hasViewInitialized&&(t._updateThumbUIByValue(),e._updateThumbUIByValue());}_onValueChange(t){this._hasViewInitialized&&(this._updateValueIndicatorUI(t),this._updateTickMarkUI(),this._cdr.detectChanges());}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck());}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let t=this._getInput(n.END),e=this._getInput(n.START);t._updateThumbUIByValue(),e._updateThumbUIByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateMinMax(),e._updateMinMax(),t._updateWidthInactive(),e._updateWidthInactive();}else {let t=this._getInput(n.END);t&&t._updateThumbUIByValue();}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges();}}_thumbsOverlap=false;_areThumbsOverlapping(){let t=this._getInput(n.START),e=this._getInput(n.END);return !t||!e?false:e.translateX-t.translateX<20}_updateOverlappingThumbClassNames(t){let e=t.getSibling(),i=this._getThumb(t.thumbPosition);this._getThumb(e.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),i._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap);}_updateOverlappingThumbUI(t){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(t));}_updateThumbUI(t){if(this._skipUpdate())return;let e=this._getThumb(t.thumbPosition===n.END?n.END:n.START);e._hostElement.style.transform=`translateX(${t.translateX}px)`;}_updateValueIndicatorUI(t){if(this._skipUpdate())return;let e=this.displayWith(t.value);if(this._hasViewInitialized?t._valuetext.set(e):t._hostElement.setAttribute("aria-valuetext",e),this.discrete){t.thumbPosition===n.START?this.startValueIndicatorText=e:this.endValueIndicatorText=e;let i=this._getThumb(t.thumbPosition);e.length<3?i._hostElement.classList.add("mdc-slider__thumb--short-value"):i._hostElement.classList.remove("mdc-slider__thumb--short-value");}}_updateValueIndicatorUIs(){let t=this._getInput(n.END),e=this._getInput(n.START);t&&this._updateValueIndicatorUI(t),e&&this._updateValueIndicatorUI(e);}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let t=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/t)*t-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i;}_updateTrackUI(t){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(t):this._updateTrackUINonRange(t));}_updateTrackUIRange(t){let e=t.getSibling();if(!e||!this._cachedWidth)return;let i=Math.abs(e.translateX-t.translateX)/this._cachedWidth;t._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-e.translateX}px`,transformOrigin:"right",transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${e.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${i})`});}_updateTrackUINonRange(t){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-t.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${t.fillPercentage})`});}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let t=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(t):this._updateTickMarkUINonRange(t);}_updateTickMarkUINonRange(t){let e=this._getValue(),i=Math.max(Math.round((e-this.min)/t),0)+1,a=Math.max(Math.round((this.max-e)/t),0)-1;this._isRtl()?i++:a++,this._tickMarks=Array(i).fill(x.ACTIVE).concat(Array(a).fill(x.INACTIVE));}_updateTickMarkUIRange(t){let e=this._getValue(),i=this._getValue(n.START),a=Math.max(Math.round((i-this.min)/t),0),o=Math.max(Math.round((e-i)/t)+1,0),k=Math.max(Math.round((this.max-e)/t),0);this._tickMarks=Array(a).fill(x.INACTIVE).concat(Array(o).fill(x.ACTIVE),Array(k).fill(x.INACTIVE));}_getInput(t){if(t===n.END&&this._input)return this._input;if(this._inputs?.length)return t===n.START?this._inputs.first:this._inputs.last}_getThumb(t){return t===n.END?this._thumbs?.last:this._thumbs?.first}_setTransition(t){this._hasAnimation=!this._platform.IOS&&t&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation);}_isCursorOnSliderThumb(t,e){let i=e.width/2,a=e.x+i,o=e.y+i,k=t.clientX-a,tt=t.clientY-o;return Math.pow(k,2)+Math.pow(tt,2)<Math.pow(i,2)}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=AI({type:s,selectors:[["mat-slider"]],contentQueries:function(e,i,a){if(e&1&&hh(a,Gt,5)(a,ue,4),e&2){let o;XD(o=ew())&&(i._input=o.first),XD(o=ew())&&(i._inputs=o);}},viewQuery:function(e,i){if(e&1&&gh(re,5)(Yt,5),e&2){let a;XD(a=ew())&&(i._trackActive=a.first),XD(a=ew())&&(i._thumbs=a);}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(e,i){e&2&&(pw("mat-"+(i.color||"primary")),Dh("mdc-slider--range",i._isRange)("mdc-slider--disabled",i.disabled)("mdc-slider--discrete",i.discrete)("mdc-slider--tick-marks",i.showTickMarks)("_mat-animation-noopable",i._noopAnimations));},inputs:{disabled:[2,"disabled","disabled",j0],discrete:[2,"discrete","discrete",j0],showTickMarks:[2,"showTickMarks","showTickMarks",j0],min:[2,"min","min",V0],color:"color",disableRipple:[2,"disableRipple","disableRipple",j0],max:[2,"max","max",V0],step:[2,"step","step",V0],displayWith:"displayWith"},exportAs:["matSlider"],features:[Aw([{provide:J,useExisting:s}])],ngContentSelectors:le,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(e,i){e&1&&(YD(),KD(0),Di$1(1,"div",2),ih(2,"div",3),Di$1(3,"div",4),ih(4,"div",5,0),Jc(),xD(6,he,3,1,"div",6),Jc(),xD(7,_e,1,3,"mat-slider-visual-thumb",7),ih(8,"mat-slider-visual-thumb",7)),e&2&&(Sv(6),AD(i.showTickMarks?6:-1),Sv(),AD(i._isRange?7:-1),Sv(),oh("discrete",i.discrete)("thumbPosition",2)("valueIndicatorText",i.endValueIndicatorText));},dependencies:[ce],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return s})();var me={provide:os,useExisting:Do(()=>K),multi:true};var K=(()=>{class s{_ngZone=T(me$1);_elementRef=T(_r);_cdr=T(L0);_slider=T(J);_platform=T(M);_listenerCleanups;get value(){return V0(this._hostElement.value,0)}set value(t){t===null&&(t=this._getDefaultValue()),t=isNaN(t)?0:t;let e=t+"";if(!this._hasSetInitialValue){this._initialValue=e;return}this._isActive||this._setValue(e);}_setValue(t){this._hostElement.value=t,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck();}valueChange=new Be;dragStart=new Be;dragEnd=new Be;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(t){this._translateX=t;}_translateX;thumbPosition=n.END;get min(){return V0(this._hostElement.min,0)}set min(t){this._hostElement.min=t+"",this._cdr.detectChanges();}get max(){return V0(this._hostElement.max,0)}set max(t){this._hostElement.max=t+"",this._cdr.detectChanges();}get step(){return V0(this._hostElement.step,0)}set step(t){this._hostElement.step=t+"",this._cdr.detectChanges();}get disabled(){return j0(this._hostElement.disabled)}set disabled(t){this._hostElement.disabled=t,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled);}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=qo("");_knobRadius=8;_tickMarkOffset=3;_isActive=false;_isFocused=false;_setIsFocused(t){this._isFocused=t;}_hasSetInitialValue=false;_initialValue;_formControl;_destroyed=new oe$1;_skipUIUpdate=false;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=false;constructor(){let t=T(FE);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[t.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),t.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),t.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))];});}ngOnDestroy(){this._listenerCleanups.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete();}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=true),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue();}initUI(){this._updateThumbUIByValue();}_initValue(){this._hasSetInitialValue=true,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges());}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(false),this._onTouchedFn();}_onFocus(){this._slider._setTransition(false),this._slider._updateTrackUI(this),this._setIsFocused(true);}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:true});}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:true}),this._slider._onValueChange(this);}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled;}_onPointerDown(t){if(!(this.disabled||t.button!==0)){if(this._platform.IOS){let e=this._slider._isCursorOnSliderThumb(t,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=e,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=true,this._setIsFocused(true),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(t,{withAnimation:true}),this.disabled||(this._handleValueCorrection(t),this.dragStart.emit({source:this,parent:this._slider,value:this.value}));}}_handleValueCorrection(t){this._skipUIUpdate=true,setTimeout(()=>{this._skipUIUpdate=false,this._fixValue(t);},0);}_fixValue(t){let e=t.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,a=this._slider.step===0?1:this._slider.step,o=Math.floor((this._slider.max-this._slider.min)/a),k=this._slider._isRtl()?1-e/i:e/i,ee=Math.round(k*o)/o*(this._slider.max-this._slider.min)+this._slider.min,et=Math.round(ee/a)*a,ie=this.value;if(et===ie){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});return}this.value=et,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});}_onPointerMove(t){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(t);}_onPointerUp(){this._isActive&&(this._isActive=false,this._platform.SAFARI&&this._setIsFocused(false),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0));}_clamp(t){let e=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(t,i),e)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(t){return t.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`;}_updateThumbUIByValue(t){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(t);}_updateThumbUIByPointerEvent(t,e){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(t)),this._updateThumbUI(e);}_updateThumbUI(t){this._slider._setTransition(!!t?.withAnimation),this._slider._onTranslateXChange(this);}writeValue(t){(this._isControlInitialized||t!==null)&&(this.value=t);}registerOnChange(t){this._onChangeFn=t,this._isControlInitialized=true;}registerOnTouched(t){this._onTouchedFn=t;}setDisabledState(t){this.disabled=t;}focus(){this._hostElement.focus();}blur(){this._hostElement.blur();}static \u0275fac=function(e){return new(e||s)};static \u0275dir=LI({type:s,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(e,i){e&1&&fh("change",function(){return i._onChange()})("input",function(){return i._onInput()})("blur",function(){return i._onBlur()})("focus",function(){return i._onFocus()}),e&2&&rh("aria-valuetext",i._valuetext());},inputs:{value:[2,"value","value",V0]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[Aw([me,{provide:Gt,useExisting:s}])]})}return s})();var Kt=(()=>{class s{contextType=k0.required();static ngTemplateContextGuard(t,e){return  true}static \u0275fac=function(e){return new(e||s)};static \u0275dir=LI({type:s,selectors:[["ng-template","contextType",""]],inputs:{contextType:[1,"contextType"]}})}return s})();var te=s=>({sessions:s});function pe(s,l){s&1&&(Di$1(0,"th",21),Cw(1,"Start"),Jc());}function fe(s,l){if(s&1&&(Di$1(0,"td",22),Cw(1),Pw(2,"date"),Jc()),s&2){let t=l.$implicit;Sv(),rl(" ",jw(2,1,t.start,"yyyy-MM-dd H:mm")," ");}}function ge(s,l){s&1&&(Di$1(0,"th",21),Cw(1,"End"),Jc());}function ve(s,l){if(s&1&&(Di$1(0,"td",23),Cw(1),Pw(2,"date"),Jc()),s&2){let t=l.$implicit;Sv(),rl(" ",jw(2,1,t.end,"yyyy-MM-dd H:mm")," ");}}function be(s,l){s&1&&(Di$1(0,"th",21),Cw(1,"Duration"),Jc());}function Te(s,l){if(s&1&&(Di$1(0,"td",24),ih(1,"duration",25),Pw(2,"map"),Jc()),s&2){let t=l.$implicit,e=QD(2);Sv(),oh("value",jw(2,1,t,e.sessionDuration));}}function ke(s,l){s&1&&ih(0,"tr",26);}function Ie(s,l){s&1&&ih(0,"tr",27);}function xe(s,l){if(s&1&&(Di$1(0,"table",11),tl(1,12),Wp(2,pe,2,0,"th",13)(3,fe,3,4,"td",14),nl(),tl(4,15),Wp(5,ge,2,0,"th",13)(6,ve,3,4,"td",16),nl(),tl(7,17),Wp(8,be,2,0,"th",13)(9,Te,3,4,"td",18),nl(),Wp(10,ke,1,0,"tr",19)(11,Ie,1,0,"tr",20),Jc()),s&2){let t=l.sessions,e=QD();oh("dataSource",t),Sv(10),oh("matHeaderRowDef",e.splitPreviewColumns),Sv(),oh("matRowDefColumns",e.splitPreviewColumns);}}function Se(s,l){s&1&&ch(0);}function ye(s,l){s&1&&ch(0);}var ui=(()=>{class s{static dialogConfig={autoFocus:false};state=T(Np);value=qo(null);constructor(){od(()=>{let t=this.state.dialogSession();if(!t)return;let e=t.start+(t.end-t.start)/2;this.value.set(e);},{});}beforeSessions=Uw(()=>{let t=this.state.dialogSession();return t?[t]:[]});afterSessions=Uw(()=>{let t=this.value(),e=this.state.dialogSession();if(!e||t===null)return [];let i=z(G({},e),{end:t}),a=z(G({},e),{start:t});return [i,a]});min=Uw(()=>this.state.dialogSession()?.start);max=Uw(()=>this.state.dialogSession()?.end);submitDisabled=Uw(()=>this.value()===this.state.dialogSession()?.start||this.value()===this.state.dialogSession()?.end);sessionDuration=Wc;splitPreviewColumns=["start","end","duration"];sessionsContext;submit(){let t=this.submitDisabled(),e=this.afterSessions();t||!e||this.state.splitSession(e);}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=AI({type:s,selectors:[["dialog-split-session"]],decls:15,vars:13,consts:[["sessionTable",""],["thumb",""],[3,"contextType"],["mat-dialog-title",""],["mat-dialog-content",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"min","max"],["matSliderThumb","","data-e2e","dialog-split-session__slider-input",3,"input","value"],["mat-dialog-actions","","align","end"],["type","button","mat-button","","mat-dialog-close",""],["type","submit","form","promptForm","mat-button","","data-e2e","dialog-split-session__button-submit",3,"click","disabled"],["mat-table","",3,"dataSource"],["matColumnDef","start"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","data-e2e","dialog-split-session__session-start",4,"matCellDef"],["matColumnDef","end"],["mat-cell","","data-e2e","dialog-split-session__session-end",4,"matCellDef"],["matColumnDef","duration"],["mat-cell","","data-e2e","dialog-split-session__session-duration",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","data-e2e","dialog-split-session__session-row",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","","data-e2e","dialog-split-session__session-start"],["mat-cell","","data-e2e","dialog-split-session__session-end"],["mat-cell","","data-e2e","dialog-split-session__session-duration"],[3,"value"],["mat-header-row",""],["mat-row","","data-e2e","dialog-split-session__session-row"]],template:function(e,i){if(e&1){let a=BD();Wp(0,xe,12,3,"ng-template",2,0,Vw),Di$1(2,"h1",3),Cw(3,"Split session"),Jc(),Di$1(4,"form",4),Wp(5,Se,1,0,"ng-container",5),Di$1(6,"mat-slider",6)(7,"input",7,1),fh("input",function(){Lu(a);let k=nw(8);return Fu(i.value.set(k.valueAsNumber))}),Jc()(),Wp(9,ye,1,0,"ng-container",5),Jc(),Di$1(10,"div",8)(11,"button",9),Cw(12,"Cancel"),Jc(),Di$1(13,"button",10),fh("click",function(){return i.submit()}),Cw(14," Split "),Jc()();}if(e&2){let a=nw(1);oh("contextType",i.sessionsContext),Sv(5),oh("ngTemplateOutlet",a)("ngTemplateOutletContext",Rw(9,te,i.beforeSessions())),Sv(),oh("min",i.min())("max",i.max()),Sv(),oh("value",i.value()),Sv(2),oh("ngTemplateOutlet",a)("ngTemplateOutletContext",Rw(11,te,i.afterSessions())),Sv(4),oh("disabled",i.submitDisabled());}},dependencies:[yb,Db,wb,vb,g_,Jt,K,zi,Fi,mi,_i,Ri,gi,pi,bi,wi,Di,ki,xi,Kt,ac,hc,n$1],styles:[`mat-slider[_ngcontent-%COMP%]{width:calc(100% - 15px)}
/*# sourceMappingURL=dialog-split-session-6XFDSJRW.css.map */`]})}return s})();export{ui as default};//# sourceMappingURL=chunk-sAo9yuYt.js.map
