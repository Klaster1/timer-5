import{a as P}from"./chunk-JPQHJW7Z.js";import"./chunk-M46SHXQD.js";import{a as j}from"./chunk-L7HXRYAJ.js";import{a as R,b as V,c as q,f as O,g as B}from"./chunk-2Z5R6HX7.js";import{D as p,ba as L,o as F,p as h,r as N,s as w,t as T,v as u,w as G,x,y as A,z as I}from"./chunk-LTRX5FSR.js";import{Ma as C,Na as D,Oa as E,Pa as M,Qa as y}from"./chunk-5PUO5CJX.js";import{Bb as S,Fb as s,Kb as _,Pb as t,Pc as b,Qb as e,Rb as d,_b as m,gb as l,kc as i,la as c,oc as v,qa as g}from"./chunk-BMFUSYNE.js";function U(r,W){r&1&&(t(0,"mat-error",4),i(1,"Start is required"),e())}var it=(()=>{class r{state=c(L);form=new T({start:new u(null,{validators:[h.required],nonNullable:!0}),end:new u(null)});assignValues=b(()=>{this.form.reset({start:p(this.state.dialogSession()?.start).map(o=>new Date(o)),end:p(this.state.dialogSession()?.end).map(o=>new Date(o))})});onSubmit(){let{start:o,end:a}=this.form.value;this.form.valid&&o&&this.state.editSession({start:o.valueOf(),end:a?.valueOf()})}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=g({type:r,selectors:[["dialog-edit-session"]],standalone:!0,features:[v],decls:19,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content","","id","promptForm",3,"ngSubmit","formGroup"],["matInput","","type","datetime-local","formControlName","start","data-e2e","dialog-edit-session__input-start"],["matSuffix","",3,"reset","value"],["data-e2e","dialog-edit-session__start-validation-error"],["matInput","","type","datetime-local","formControlName","end","data-e2e","dialog-edit-session__input-end"],["mat-dialog-actions","","align","end"],["type","button","mat-button","","mat-dialog-close",""],["type","submit","form","promptForm","mat-button","","data-e2e","dialog-edit-session__button-submit"]],template:function(a,n){a&1&&(t(0,"h1",0),i(1,"Edit session"),e(),t(2,"form",1),m("ngSubmit",function(){return n.onSubmit()}),t(3,"mat-form-field")(4,"mat-label"),i(5,"Start"),e(),d(6,"input",2),t(7,"button-reset-input-control",3),m("reset",function(){return n.form.controls.start.reset()}),e(),S(8,U,2,0,"mat-error",4),e(),t(9,"mat-form-field")(10,"mat-label"),i(11,"End"),e(),d(12,"input",5),t(13,"button-reset-input-control",3),m("reset",function(){return n.form.controls.end.reset()}),e()()(),t(14,"div",6)(15,"button",7),i(16,"Cancel"),e(),t(17,"button",8),i(18,"Save"),e()()),a&2&&(l(2),s("formGroup",n.form),l(5),s("value",n.form.controls.start.value),l(),_(n.form.controls.start.errors!=null&&n.form.controls.start.errors.required?8:-1),l(5),s("value",n.form.controls.end.value))},dependencies:[D,E,M,C,y,O,V,R,B,q,I,G,F,N,w,x,A,j,P],styles:[`form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:10px}
/*# sourceMappingURL=dialog-edit-session.component-ARWMLN56.css.map */`],changeDetection:0})}return r})();export{it as default};
//# sourceMappingURL=chunk-64BTQMUY.js.map
