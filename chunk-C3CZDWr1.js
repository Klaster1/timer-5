import{H as Iu,R as $h,W as Ql,_ as e,a as Cn,c as cn,d as ln,f as pn,g as yn,h as wn,l as fn,m as un,o as Dn,p as sn,s as En,t as n,u as hn}from"./main-VW3PSTHY.js";import{$ as hy,At as ws,C as T,Et as ul,H as bl,J as fg,Mt as yg,V as bg,X as gg,_ as Mt,ft as ot,it as kt,l as Fg,n as Ao,nt as it}from"./chunk-Btuf8ckA.js";import{$r as zu,Ar as vI,Bt as aw,D as JD,Dn as il,Dr as ul$1,F as KD,Gn as nb,Ht as bh,In as kw,J as Ni,Lr as wh,M as Jw,Mr as vj,P as K,Pr as vw,Qn as pb,Qt as db,R as Ko,T as Ij,Tn as ib,Tr as uh,U as Lr,Vt as b,Wr as xh,Wt as bw,Y as Oh,Yr as yw,_r as tD,ar as qw,at as So,b as Gu,bn as gw,d as Dw,en as dj,ft as Vh,h as Ew,ht as W,in as ec,jn as jh,jr as ve$1,kt as ZD,l as Ch,ln as ew,n as A,nr as q,pr as sb,q as Nh,qr as yj,qt as cl,rn as eb,rr as qh,tt as Rh,v as Ge,wr as tw,wt as YE,yn as gj,zn as ll}from"./chunk-BzcoOg1T.js";var s=(function(n){return n[n.START=1]=`START`,n[n.END=2]=`END`,n})(s||{});var w=(function(n){return n[n.ACTIVE=0]=`ACTIVE`,n[n.INACTIVE=1]=`INACTIVE`,n})(w||{});var nt=new A(`_MatSlider`);var te=new A(`_MatSliderThumb`);var ae=new A(`_MatSliderRangeThumb`);var ee=new A(`_MatSliderVisualThumb`);var re=(()=>{class n{_cdr=b(gj);_ngZone=b(ve$1);_slider=b(nt);_renderer=b(ec);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=b(Lr).nativeElement;_platform=b(T);ngAfterViewInit(){let t=this._slider._getInput(this.thumbPosition);t&&(this._ripple.radius=24,this._sliderInput=t,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let e=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(e,`pointermove`,this._onPointerMove),i.listen(e,`pointerdown`,this._onDragStart),i.listen(e,`pointerup`,this._onDragEnd),i.listen(e,`pointerleave`,this._onMouseLeave),i.listen(e,`focus`,this._onFocus),i.listen(e,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t())}_onPointerMove=t=>{if(this._sliderInput._isFocused)return;let e=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(t,e);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=t=>{t.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(t){return t?.state===ot.FADING_IN||t?.state===ot.VISIBLE}_showRipple(t,e){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===s.START?s.END:s.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!e)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:t,centered:!0,persistent:!0})}_hideRipple(t){if(t?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let e=this._getSibling();e._isShowingAnyRipple()||(this._hideValueIndicator(),e._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===s.START?s.END:s.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`knob`],e=[`valueIndicatorContainer`];function i(a,d){if(a&1&&(Ni(0,`div`,2,1)(2,`div`,5)(3,`span`,6),qw(4),il()()()),a&2){let _=gw();vI(4),qh(_.valueIndicatorText)}}return YE({type:n,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(d,_){if(d&1&&Oh(Fg,5)(t,5)(e,5),d&2){let l;Ew(l=Dw())&&(_._ripple=l.first),Ew(l=Dw())&&(_._knob=l.first),Ew(l=Dw())&&(_._valueIndicatorContainer=l.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[Jw([{provide:ee,useExisting:n}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(d,_){d&1&&(ZD(0,i,5,1,`div`,2),Ch(1,`div`,3,0)(3,`div`,4)),d&2&&(KD(_.discrete?0:-1),vI(3),bh(`matRippleDisabled`,!0))},dependencies:[Fg],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})})()}return n})();var ie=(()=>{class n{_ngZone=b(ve$1);_cdr=b(gj);_elementRef=b(Lr);_dir=b(Mt,{optional:!0});_globalRippleOptions=b(Ao,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(t){this._disabled=t;let e=this._getInput(s.END),i=this._getInput(s.START);e&&(e.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(t){this._discrete=t,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(t){this._showTickMarks=t,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(t){let e=t==null||isNaN(t)?this._min:t;this._min!==e&&this._updateMin(e)}_min=0;color;disableRipple=!1;_updateMin(t){let e=this._min;this._min=t,this._isRange?this._updateMinRange({old:e,new:t}):this._updateMinNonRange(t),this._onMinMaxOrStepChange()}_updateMinRange(t){let e=this._getInput(s.END),i=this._getInput(s.START),a=e.value,d=i.value;i.min=t.new,e.min=Math.max(t.new,i.value),i.max=Math.min(e.max,e.value),i._updateWidthInactive(),e._updateWidthInactive(),t.new<t.old?this._onTranslateXChangeBySideEffect(e,i):this._onTranslateXChangeBySideEffect(i,e),a!==e.value&&this._onValueChange(e),d!==i.value&&this._onValueChange(i)}_updateMinNonRange(t){let e=this._getInput(s.END);if(e){let i=e.value;e.min=t,e._updateThumbUIByValue(),this._updateTrackUI(e),i!==e.value&&this._onValueChange(e)}}get max(){return this._max}set max(t){let e=t==null||isNaN(t)?this._max:t;this._max!==e&&this._updateMax(e)}_max=100;_updateMax(t){let e=this._max;this._max=t,this._isRange?this._updateMaxRange({old:e,new:t}):this._updateMaxNonRange(t),this._onMinMaxOrStepChange()}_updateMaxRange(t){let e=this._getInput(s.END),i=this._getInput(s.START),a=e.value,d=i.value;e.max=t.new,i.max=Math.min(t.new,e.value),e.min=i.value,e._updateWidthInactive(),i._updateWidthInactive(),t.new>t.old?this._onTranslateXChangeBySideEffect(i,e):this._onTranslateXChangeBySideEffect(e,i),a!==e.value&&this._onValueChange(e),d!==i.value&&this._onValueChange(i)}_updateMaxNonRange(t){let e=this._getInput(s.END);if(e){let i=e.value;e.max=t,e._updateThumbUIByValue(),this._updateTrackUI(e),i!==e.value&&this._onValueChange(e)}}get step(){return this._step}set step(t){let e=isNaN(t)?this._step:t;this._step!==e&&this._updateStep(e)}_step=1;_updateStep(t){this._step=t,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let t=this._getInput(s.END),e=this._getInput(s.START),i=t.value,a=e.value,d=e.value;t.min=this._min,e.max=this._max,t.step=this._step,e.step=this._step,this._platform.SAFARI&&(t.value=t.value,e.value=e.value),t.min=Math.max(this._min,e.value),e.max=Math.min(this._max,t.value),e._updateWidthInactive(),t._updateWidthInactive(),t.value<d?this._onTranslateXChangeBySideEffect(e,t):this._onTranslateXChangeBySideEffect(t,e),i!==t.value&&this._onValueChange(t),a!==e.value&&this._onValueChange(e)}_updateStepNonRange(){let t=this._getInput(s.END);if(t){let e=t.value;t.step=this._step,this._platform.SAFARI&&(t.value=t.value),t._updateThumbUIByValue(),e!==t.value&&this._onValueChange(t)}}displayWith=t=>`${t}`;_tickMarks=[];_noopAnimations=kt();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=db(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=b(T);constructor(){b(it).load(ws);let t=this._isRtl();Ij(()=>{let e=this._isRtl();e!==t&&(t=e,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let t=this._getInput(s.END),e=this._getInput(s.START);this._isRange=!!t&&!!e,this._cdr.detectChanges();let i=this._getThumb(s.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(t,e):this._initUINonRange(t),this._updateTrackUI(t),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(t){t.initProps(),t.initUI(),this._updateValueIndicatorUI(t),this._hasViewInitialized=!0,t._updateThumbUIByValue()}_initUIRange(t,e){t.initProps(),t.initUI(),e.initProps(),e.initUI(),t._updateMinMax(),e._updateMinMax(),t._updateStaticStyles(),e._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,t._updateThumbUIByValue(),e._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let t=this._getInput(s.END),e=this._getInput(s.START);t._setIsLeftThumb(),e._setIsLeftThumb(),t.translateX=t._calcTranslateXByValue(),e.translateX=e._calcTranslateXByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateWidthInactive(),e._updateWidthInactive(),t._updateThumbUIByValue(),e._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(s.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(s.START)._isActive||this._getThumb(s.END)._isActive}_getValue(t=s.END){let e=this._getInput(t);return e?e.value:this.min}_skipUpdate(){return!!(this._getInput(s.START)?._skipUIUpdate||this._getInput(s.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(t){let e=this._trackActive.nativeElement.style;e.left=t.left,e.right=t.right,e.transformOrigin=t.transformOrigin,e.transform=t.transform}_calcTickMarkTransform(t){let e=t*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-e:e}px)`}_onTranslateXChange(t){this._hasViewInitialized&&(this._updateThumbUI(t),this._updateTrackUI(t),this._updateOverlappingThumbUI(t))}_onTranslateXChangeBySideEffect(t,e){this._hasViewInitialized&&(t._updateThumbUIByValue(),e._updateThumbUIByValue())}_onValueChange(t){this._hasViewInitialized&&(this._updateValueIndicatorUI(t),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let t=this._getInput(s.END),e=this._getInput(s.START);t._updateThumbUIByValue(),e._updateThumbUIByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateMinMax(),e._updateMinMax(),t._updateWidthInactive(),e._updateWidthInactive()}else{let t=this._getInput(s.END);t&&t._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let t=this._getInput(s.START),e=this._getInput(s.END);return!t||!e?!1:e.translateX-t.translateX<20}_updateOverlappingThumbClassNames(t){let e=t.getSibling(),i=this._getThumb(t.thumbPosition);this._getThumb(e.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),i._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(t){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(t))}_updateThumbUI(t){if(this._skipUpdate())return;let e=this._getThumb(t.thumbPosition===s.END?s.END:s.START);e._hostElement.style.transform=`translateX(${t.translateX}px)`}_updateValueIndicatorUI(t){if(this._skipUpdate())return;let e=this.displayWith(t.value);if(this._hasViewInitialized?t._valuetext.set(e):t._hostElement.setAttribute(`aria-valuetext`,e),this.discrete){t.thumbPosition===s.START?this.startValueIndicatorText=e:this.endValueIndicatorText=e;let i=this._getThumb(t.thumbPosition);e.length<3?i._hostElement.classList.add(`mdc-slider__thumb--short-value`):i._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let t=this._getInput(s.END),e=this._getInput(s.START);t&&this._updateValueIndicatorUI(t),e&&this._updateValueIndicatorUI(e)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let t=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/t)*t-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(t){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(t):this._updateTrackUINonRange(t))}_updateTrackUIRange(t){let e=t.getSibling();if(!e||!this._cachedWidth)return;let i=Math.abs(e.translateX-t.translateX)/this._cachedWidth;t._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-e.translateX}px`,transformOrigin:`right`,transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${e.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${i})`})}_updateTrackUINonRange(t){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-t.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${t.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||!this._cachedWidth||this.step===void 0||this.min===void 0||this.max===void 0)return;let t=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(t):this._updateTickMarkUINonRange(t)}_updateTickMarkUINonRange(t){let e=this._getValue(),i=Math.max(Math.round((e-this.min)/t),0)+1,a=Math.max(Math.round((this.max-e)/t),0)-1;this._isRtl()?i++:a++,this._tickMarks=Array(i).fill(w.ACTIVE).concat(Array(a).fill(w.INACTIVE))}_updateTickMarkUIRange(t){let e=this._getValue(),i=this._getValue(s.START),a=Math.max(Math.round((i-this.min)/t),0),d=Math.max(Math.round((e-i)/t)+1,0),_=Math.max(Math.round((this.max-e)/t),0);this._tickMarks=Array(a).fill(w.INACTIVE).concat(Array(d).fill(w.ACTIVE),Array(_).fill(w.INACTIVE))}_getInput(t){if(t===s.END&&this._input)return this._input;if(this._inputs?.length)return t===s.START?this._inputs.first:this._inputs.last}_getThumb(t){return t===s.END?this._thumbs?.last:this._thumbs?.first}_setTransition(t){this._hasAnimation=!this._platform.IOS&&t&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(t,e){let i=e.width/2,a=e.x+i,d=e.y+i,_=t.clientX-a,l=t.clientY-d;return Math.pow(_,2)+Math.pow(l,2)<Math.pow(i,2)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`trackActive`],e=[`*`];function i(l,c){if(l&1&&Ch(0,`div`),l&2){let r=c.$implicit,f=c.$index,M=gw(3);kw(r===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),jh(`transform`,M._calcTickMarkTransform(f))}}function a(l,c){if(l&1&&ew(0,i,1,4,`div`,8,JD),l&2){let r=gw(2);tw(r._tickMarks)}}function d(l,c){if(l&1&&(Ni(0,`div`,6,1),ZD(2,a,2,0),il()),l&2){let r=gw();vI(2),KD(r._cachedWidth?2:-1)}}function _(l,c){if(l&1&&Ch(0,`mat-slider-visual-thumb`,7),l&2){let r=gw();bh(`discrete`,r.discrete)(`thumbPosition`,1)(`valueIndicatorText`,r.startValueIndicatorText)}}return YE({type:n,selectors:[[`mat-slider`]],contentQueries:function(c,r,f){if(c&1&&Rh(f,te,5)(f,ae,4),c&2){let M;Ew(M=Dw())&&(r._input=M.first),Ew(M=Dw())&&(r._inputs=M)}},viewQuery:function(c,r){if(c&1&&Oh(t,5)(ee,5),c&2){let f;Ew(f=Dw())&&(r._trackActive=f.first),Ew(f=Dw())&&(r._thumbs=f)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(c,r){c&2&&(kw(`mat-`+(r.color||`primary`)),Vh(`mdc-slider--range`,r._isRange)(`mdc-slider--disabled`,r.disabled)(`mdc-slider--discrete`,r.discrete)(`mdc-slider--tick-marks`,r.showTickMarks)(`_mat-animation-noopable`,r._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,yj],discrete:[2,`discrete`,`discrete`,yj],showTickMarks:[2,`showTickMarks`,`showTickMarks`,yj],min:[2,`min`,`min`,vj],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,yj],max:[2,`max`,`max`,vj],step:[2,`step`,`step`,vj],displayWith:`displayWith`},exportAs:[`matSlider`],features:[Jw([{provide:nt,useExisting:n}])],ngContentSelectors:e,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(c,r){c&1&&(yw(),vw(0),Ni(1,`div`,2),Ch(2,`div`,3),Ni(3,`div`,4),Ch(4,`div`,5,0),il(),ZD(6,d,3,1,`div`,6),il(),ZD(7,_,1,3,`mat-slider-visual-thumb`,7),Ch(8,`mat-slider-visual-thumb`,7)),c&2&&(vI(6),KD(r.showTickMarks?6:-1),vI(),KD(r._isRange?7:-1),vI(),bh(`discrete`,r.discrete)(`thumbPosition`,2)(`valueIndicatorText`,r.endValueIndicatorText))},dependencies:[re],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
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
  border-radius: var(--%NS%mat-slider-active-track-shape, var(--%NS%mat-sys-corner-full));
  height: var(--%NS%mat-slider-active-track-height, 4px);
  top: calc((var(--%NS%mat-slider-inactive-track-height, 4px) - var(--%NS%mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--%NS%mat-slider-active-track-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--%NS%mat-slider-disabled-active-track-color, var(--%NS%mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--%NS%mat-slider-inactive-track-color, var(--%NS%mat-sys-surface-variant));
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
  border-radius: var(--%NS%mat-slider-inactive-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--%NS%mat-slider-disabled-inactive-track-color, var(--%NS%mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--%NS%inactive::before {
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
  .mdc-slider__track--%NS%inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--%NS%mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--%NS%mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-slider-label-label-text-color, var(--%NS%mat-sys-on-primary));
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  height: var(--%NS%mat-slider-value-indicator-height, 28px);
  padding: var(--%NS%mat-slider-value-indicator-padding, 0);
  opacity: var(--%NS%mat-slider-value-indicator-opacity, 1);
  border-radius: var(--%NS%mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
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
  display: var(--%NS%mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
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
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  transform: var(--%NS%mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--%NS%mat-slider-label-label-text-font, var(--%NS%mat-sys-label-medium-font));
  font-size: var(--%NS%mat-slider-label-label-text-size, var(--%NS%mat-sys-label-medium-size));
  font-weight: var(--%NS%mat-slider-label-label-text-weight, var(--%NS%mat-sys-label-medium-weight));
  line-height: var(--%NS%mat-slider-label-label-text-line-height, var(--%NS%mat-sys-label-medium-line-height));
  letter-spacing: var(--%NS%mat-slider-label-label-text-tracking, var(--%NS%mat-sys-label-medium-tracking));
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
  width: var(--%NS%mat-slider-handle-width, 20px);
  height: var(--%NS%mat-slider-handle-height, 20px);
  border-width: calc(var(--%NS%mat-slider-handle-height, 20px) / 2) calc(var(--%NS%mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--%NS%mat-slider-handle-elevation, var(--%NS%mat-sys-level1));
  background-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-radius: var(--%NS%mat-slider-handle-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--%NS%mat-slider-with-overlap-handle-outline-color, var(--%NS%mat-sys-on-primary));
  border-width: var(--%NS%mat-slider-with-overlap-handle-outline-width, 1px);
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
  width: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  height: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--%NS%mat-slider-with-tick-marks-container-shape, var(--%NS%mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-inactive-container-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-disabled-container-color, var(--%NS%mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--%NS%mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-active-container-color, var(--%NS%mat-sys-on-primary));
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
  background-color: var(--%NS%mat-slider-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--%NS%mat-slider-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--%NS%mat-slider-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 20%, transparent));
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
`],encapsulation:2})})()}return n})();var le={provide:Iu,useExisting:So(()=>st),multi:!0};var st=(()=>{class n{_ngZone=b(ve$1);_elementRef=b(Lr);_cdr=b(gj);_slider=b(nt);_platform=b(T);_listenerCleanups;get value(){return vj(this._hostElement.value,0)}set value(t){t===null&&(t=this._getDefaultValue()),t=isNaN(t)?0:t;let e=t+``;if(!this._hasSetInitialValue){this._initialValue=e;return}this._isActive||this._setValue(e)}_setValue(t){this._hostElement.value=t,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new Ge;dragStart=new Ge;dragEnd=new Ge;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(t){this._translateX=t}_translateX;thumbPosition=s.END;get min(){return vj(this._hostElement.min,0)}set min(t){this._hostElement.min=t+``,this._cdr.detectChanges()}get max(){return vj(this._hostElement.max,0)}set max(t){this._hostElement.max=t+``,this._cdr.detectChanges()}get step(){return vj(this._hostElement.step,0)}set step(t){this._hostElement.step=t+``,this._cdr.detectChanges()}get disabled(){return yj(this._hostElement.disabled)}set disabled(t){this._hostElement.disabled=t,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=Ko(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(t){this._isFocused=t}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new K;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let t=b(ec);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[t.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),t.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),t.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(t){if(!(this.disabled||t.button!==0)){if(this._platform.IOS){let e=this._slider._isCursorOnSliderThumb(t,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=e,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(t,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(t),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(t){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(t)},0)}_fixValue(t){let e=t.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,a=this._slider.step===0?1:this._slider.step,d=Math.floor((this._slider.max-this._slider.min)/a),_=this._slider._isRtl()?1-e/i:e/i,c=Math.round(_*d)/d*(this._slider.max-this._slider.min)+this._slider.min,r=Math.round(c/a)*a;if(r===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});return}this.value=r,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation})}_onPointerMove(t){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(t)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(t){let e=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(t,i),e)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(t){return t.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(t){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(t)}_updateThumbUIByPointerEvent(t,e){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(t)),this._updateThumbUI(e)}_updateThumbUI(t){this._slider._setTransition(!!t?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(t){(this._isControlInitialized||t!==null)&&(this.value=t)}registerOnChange(t){this._onChangeFn=t,this._isControlInitialized=!0}registerOnTouched(t){this._onTouchedFn=t}setDisabledState(t){this.disabled=t}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(e){return new(e||n)};static ɵdir=tD({type:n,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(e,i){e&1&&xh(`change`,function(){return i._onChange()})(`input`,function(){return i._onInput()})(`blur`,function(){return i._onBlur()})(`focus`,function(){return i._onFocus()}),e&2&&wh(`aria-valuetext`,i._valuetext())},inputs:{value:[2,`value`,`value`,vj]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[Jw([le,{provide:te,useExisting:n}])]})}return n})();var ne=(()=>{class n{contextType=dj.required();static ngTemplateContextGuard(t,e){return!0}static ɵfac=function(e){return new(e||n)};static ɵdir=tD({type:n,selectors:[[`ng-template`,`contextType`,``]],inputs:{contextType:[1,`contextType`]}})}return n})();var se=n=>({sessions:n});function de(n,v){n&1&&(Ni(0,`th`,21),qw(1,`Start`),il())}function oe(n,v){if(n&1&&(Ni(0,`td`,22),qw(1),nb(2,`date`),il()),n&2){let t=v.$implicit;vI(),ul$1(` `,ib(2,1,t.start,`yyyy-MM-dd H:mm`),` `)}}function ce(n,v){n&1&&(Ni(0,`th`,21),qw(1,`End`),il())}function me(n,v){if(n&1&&(Ni(0,`td`,23),qw(1),nb(2,`date`),il()),n&2){let t=v.$implicit;vI(),ul$1(` `,ib(2,1,t.end,`yyyy-MM-dd H:mm`),` `)}}function he(n,v){n&1&&(Ni(0,`th`,21),qw(1,`Duration`),il())}function ue(n,v){if(n&1&&(Ni(0,`td`,24),Ch(1,`duration`,25),nb(2,`map`),il()),n&2){let t=v.$implicit,e=gw(2);vI(),bh(`value`,ib(2,1,t,e.sessionDuration))}}function _e(n,v){n&1&&Ch(0,`tr`,26)}function pe(n,v){n&1&&Ch(0,`tr`,27)}function ve(n,v){if(n&1&&(Ni(0,`table`,11),cl(1,12),uh(2,de,2,0,`th`,13)(3,oe,3,4,`td`,14),ll(),cl(4,15),uh(5,ce,2,0,`th`,13)(6,me,3,4,`td`,16),ll(),cl(7,17),uh(8,he,2,0,`th`,13)(9,ue,3,4,`td`,18),ll(),uh(10,_e,1,0,`tr`,19)(11,pe,1,0,`tr`,20),il()),n&2){let t=v.sessions,e=gw();bh(`dataSource`,t),vI(10),bh(`matHeaderRowDef`,e.splitPreviewColumns),vI(),bh(`matRowDefColumns`,e.splitPreviewColumns)}}function fe(n,v){n&1&&Nh(0)}function be(n,v){n&1&&Nh(0)}var li=(()=>{class n$1{static dialogConfig={autoFocus:!1};state=b($h);taskId=dj();sessionIndex=dj(void 0,{transform:e});session=db(()=>{let t=this.taskId(),e=this.sessionIndex();if(!(!t||e===void 0))return this.state.tasks()[t]?.sessions[e]});value=pb(()=>{let t=this.session();return t?t.start+(t.end-t.start)/2:null});beforeSessions=db(()=>{let t=this.session();return t?[t]:[]});afterSessions=db(()=>{let t=this.value(),e=this.session();if(!e||t===null)return[];return[q(W({},e),{end:t}),q(W({},e),{start:t})]});min=db(()=>this.session()?.start);max=db(()=>this.session()?.end);submitDisabled=db(()=>{let t=this.session();return this.value()===t?.start||this.value()===t?.end});sessionDuration=Ql;splitPreviewColumns=[`start`,`end`,`duration`];sessionsContext;submit(){let t=this.submitDisabled(),e=this.afterSessions(),i=this.taskId(),a=this.sessionIndex();t||!e||!i||a===void 0||this.state.splitSession(i,a,e)}static ɵfac=function(e){return new(e||n$1)};static ɵcmp=YE({type:n$1,selectors:[[`dialog-split-session`]],inputs:{taskId:[1,`taskId`],sessionIndex:[1,`sessionIndex`]},decls:15,vars:13,consts:[[`sessionTable`,``],[`thumb`,``],[3,`contextType`],[`mat-dialog-title`,``],[`mat-dialog-content`,``],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`min`,`max`],[`matSliderThumb`,``,`data-e2e`,`dialog-split-session__slider-input`,3,`input`,`value`],[`mat-dialog-actions`,``,`align`,`end`],[`type`,`button`,`mat-button`,``,`mat-dialog-close`,``],[`type`,`submit`,`form`,`promptForm`,`mat-button`,``,`data-e2e`,`dialog-split-session__button-submit`,3,`click`,`disabled`],[`mat-table`,``,3,`dataSource`],[`matColumnDef`,`start`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,`data-e2e`,`dialog-split-session__session-start`,4,`matCellDef`],[`matColumnDef`,`end`],[`mat-cell`,``,`data-e2e`,`dialog-split-session__session-end`,4,`matCellDef`],[`matColumnDef`,`duration`],[`mat-cell`,``,`data-e2e`,`dialog-split-session__session-duration`,4,`matCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,`data-e2e`,`dialog-split-session__session-row`,4,`matRowDef`,`matRowDefColumns`],[`mat-header-cell`,``],[`mat-cell`,``,`data-e2e`,`dialog-split-session__session-start`],[`mat-cell`,``,`data-e2e`,`dialog-split-session__session-end`],[`mat-cell`,``,`data-e2e`,`dialog-split-session__session-duration`],[3,`value`],[`mat-header-row`,``],[`mat-row`,``,`data-e2e`,`dialog-split-session__session-row`]],template:function(e,i){if(e&1){let a=aw();uh(0,ve,12,3,`ng-template`,2,0,sb),Ni(2,`h1`,3),qw(3,`Split session`),il(),Ni(4,`form`,4),uh(5,fe,1,0,`ng-container`,5),Ni(6,`mat-slider`,6)(7,`input`,7,1),xh(`input`,function(){Gu(a);let _=bw(8);return zu(i.value.set(_.valueAsNumber))}),il()(),uh(9,be,1,0,`ng-container`,5),il(),Ni(10,`div`,8)(11,`button`,9),qw(12,`Cancel`),il(),Ni(13,`button`,10),xh(`click`,function(){return i.submit()}),qw(14,` Split `),il()()}if(e&2){let a=bw(1);bh(`contextType`,i.sessionsContext),vI(5),bh(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,eb(9,se,i.beforeSessions())),vI(),bh(`min`,i.min())(`max`,i.max()),vI(),bh(`value`,i.value()),vI(2),bh(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,eb(11,se,i.afterSessions())),vI(4),bh(`disabled`,i.submitDisabled())}},dependencies:[bg,gg,yg,fg,hy,ie,st,En,Dn,sn,cn,pn,un,ln,yn,fn,hn,wn,Cn,ne,ul,bl,n],styles:[`mat-slider[_ngcontent-%COMP%]{width:calc(100% - 15px)}
/*# sourceMappingURL=dialog-split-session-6XFDSJRW.css.map */`]})}return n$1})();export{li as default};
//# debugId=ebf5fdee-3849-527d-9bf7-128aa7999e9c
//# sourceMappingURL=chunk-C3CZDWr1.js.map