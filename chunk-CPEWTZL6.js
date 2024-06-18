import{a as Pt,b as Tt,d as Ot,e as Dt,f as Et}from"./chunk-ZH4LFN5Z.js";import{a as mt,c as dt,d as pt,m as bt,n as kt,o as xt,p as yt,q as Ct,r as x,s as Mt}from"./chunk-67WQ24C5.js";import{b as gt}from"./chunk-HQ663PHB.js";import"./chunk-U4TP6YLV.js";import{A as z,B as wt,P as L,Q as B,g as I,i as ct,l as R,p as ut,q as _t,r as ft,s as ht,w as A,y as vt}from"./chunk-VGRJF5ZH.js";import"./chunk-J5T6QRAO.js";import{a as St}from"./chunk-GZ6P4SP5.js";import{C as it,G as w,H as at,I as rt,K as st,Qa as lt,Ra as F,i as et,k as nt,l as ot}from"./chunk-SULJYRYA.js";import{Ca as g,Cb as f,Da as b,Ja as P,Jb as l,La as y,Ma as N,Ob as O,Oc as W,Qc as tt,Sb as i,Tb as o,Ub as c,Vb as j,Wb as G,Xb as C,ac as k,cc as m,hb as r,jc as U,kc as $,lc as D,mc as s,na as _,nc as Z,oc as v,qc as E,ra as S,sb as T,sc as X,ta as M,tc as J,uc as p,vc as h,wb as Q,wc as V}from"./chunk-7MIOHV2N.js";function At(n,u){if(n&1){let t=C();i(0,"button",4),k("click",function(){g(t);let a=m();return b(a.edit())}),s(1,"Edit"),o(),i(2,"button",5),k("click",function(){g(t);let a=m();return b(a.remove())}),s(3,"Delete"),o(),i(4,"a",6),s(5,"Skip everything after"),o(),i(6,"a",7),s(7,"Skip everything before"),o()}if(n&2){let t=m();r(4),l("queryParams",t.skipAfterParams),r(2),l("queryParams",t.skipBeforeParams)}}var Vt=(()=>{class n{constructor(){this.store=_(B),this.task=y.required(),this.session=y.required()}edit(){this.store.editSession(this.task().id,z(this.session()))}remove(){this.store.deleteSession(this.task().id,z(this.session()))}get skipBeforeParams(){return L({from:new Date(this.session().start)})}get skipAfterParams(){return L({to:new Date(this.session()?.end??new Date)})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=S({type:n,selectors:[["button-session-actions"]],inputs:{task:[1,"task"],session:[1,"session"]},standalone:!0,features:[E],decls:5,vars:1,consts:[["menu","matMenu"],["mat-icon-button","",3,"matMenuTriggerFor"],["svgIcon","more_vert"],["matMenuContent",""],["mat-menu-item","","type","button","data-e2e","menu-session__button-edit",3,"click"],["mat-menu-item","","type","button","data-e2e","menu-session__button-delete",3,"click"],["mat-menu-item","","type","button","routerLink",".","queryParamsHandling","merge","data-e2e","menu-session__button-skip-after",3,"queryParams"],["mat-menu-item","","type","button","routerLink",".","queryParamsHandling","merge","data-e2e","menu-session__button-skip-before",3,"queryParams"]],template:function(e,a){if(e&1&&(i(0,"button",1),c(1,"mat-icon",2),o(),i(2,"mat-menu",null,0),f(4,At,8,2,"ng-template",3),o()),e&2){let d=D(3);l("matMenuTriggerFor",d)}},dependencies:[ft,_t,ut,ht,F,I,R],styles:[`[_nghost-%COMP%]{display:inline-block}
/*# sourceMappingURL=button-session-actions.component-VXZK24TZ.css.map */`],changeDetection:0})}}return n})();var It=(()=>{class n{constructor(){this.elementRef=_(N),this.destroyRef=_(P),T(()=>{let t=this.elementRef.nativeElement.querySelector("thead"),e=this.elementRef.nativeElement.querySelector("tfoot"),a=this.elementRef.nativeElement.parentElement;if(!a||!t||!e)return;t.style.position="sticky",t.style.zIndex="10",e.style.position="sticky",e.style.zIndex="10";let d=new MutationObserver(Rt=>{let{transform:Bt}=(Rt.at(0)?.target).style,K=Bt.replace("translateY(","").replace("px)",""),H=`-${K}px`,Y=`${K}px`;t.style.top!==H&&(t.style.top=H),e.style.bottom!==Y&&(e.style.bottom=Y)});d.observe(a,{attributes:!0,attributeFilter:["style"]}),this.destroyRef.onDestroy(()=>d.disconnect())})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275dir=M({type:n,selectors:[["","sticky",""]],standalone:!0})}}return n})();var Ft=(()=>{class n{constructor(){this.cdkVirtualForTypes=y()}static ngTemplateContextGuard(t,e){return!0}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275dir=M({type:n,selectors:[["","cdkVirtualFor",""]],inputs:{cdkVirtualForTypes:[1,"cdkVirtualForTypes"]},standalone:!0})}}return n})();var zt=n=>({top:n}),Lt=(n,u)=>[n,u];function qt(n,u){n&1&&c(0,"div")}function Kt(n,u){if(n&1&&(j(0),i(1,"tr",20),f(2,qt,1,0,"div",21),i(3,"td",22),s(4),p(5,"date"),o(),i(6,"td",23),s(7),p(8,"date"),o(),i(9,"td",24),s(10),p(11,"map"),p(12,"formatDuration"),p(13,"async"),o(),i(14,"td",25),c(15,"button-session-actions",26),o()(),G()),n&2){let t=u.$implicit,e=m(),a=m();r(),l("cdkDragData",J(19,Lt,t,e.id)),r(3),v(" ",V(5,6,t.start,"yyyy-MM-dd H:mm")," "),r(3),v(" ",V(8,9,t.end,"yyyy-MM-dd H:mm")," "),r(3),v(" ",h(13,17,h(12,15,V(11,12,t,a.sessionDuration)))," "),r(5),l("session",t)("task",e)}}function Ht(n,u){if(n&1){let t=C();i(0,"button",27),k("click",function(){g(t);let a=m(),d=m();return b(d.start(a.id))}),c(1,"mat-icon",28),o()}}function Yt(n,u){if(n&1){let t=C();i(0,"button",29),k("click",function(){g(t);let a=m(),d=m();return b(d.stop(a.id))}),c(1,"mat-icon",30),o()}}function Nt(n,u){if(n&1&&(i(0,"mat-toolbar")(1,"button",1),c(2,"mat-icon",2),o(),i(3,"h2"),c(4,"mat-icon",3),p(5,"taskStateIcon"),i(6,"span",4),s(7),o()(),c(8,"button-task-actions",5),o(),i(9,"cdk-virtual-scroll-viewport",6,0)(11,"table",7)(12,"thead",8)(13,"tr",9)(14,"th",10),s(15,"Start"),o(),i(16,"th",11),s(17,"End"),o(),i(18,"th",12),s(19,"Duration"),o(),c(20,"th",13),o()(),i(21,"tbody"),f(22,Kt,16,22,"ng-container",14),o(),i(23,"tfoot")(24,"tr",15)(25,"td",16),s(26,"Total"),o(),c(27,"td",16),i(28,"td",17),s(29),p(30,"taskDuration"),p(31,"formatDuration"),p(32,"async"),o(),c(33,"td",16),o()()()(),f(34,Ht,2,0,"button",18)(35,Yt,2,0,"button",19)),n&2){let t=u,e=D(10),a=m();r(4),l("svgIcon",h(5,11,t)),r(3),Z(t.name),r(),l("task",t),r(),l("itemSize",52),r(2),l("cdkDropListSortingDisabled",!0),r(),l("ngStyle",X(19,zt,"-"+e.getOffsetToRenderedContentStart()+"px")),r(10),l("cdkVirtualForOf",t.sessions)("cdkVirtualForTypes",t.sessions),r(7),v(" ",h(32,17,h(31,15,h(30,13,t)))," "),r(5),O(a.taskIsInProgress()===!1?34:-1),r(),O(a.taskIsInProgress()===!0?35:-1)}}var Ie=(()=>{class n{constructor(){this.store=_(B),this.keys=_(gt),this.destroyRef=_(P),this.taskIsInProgress=W(()=>vt(this.store.currentTask())),this.viewport=Q(w),this.sessionDuration=wt,this.hotkeys=[x(bt,"Start/stop task",t=>{let e=this.store.currentTask(),a=this.taskIsInProgress();e&&(a?this.stop(e.id):this.start(e.id))}),x(kt,"Mark as finished",t=>{let e=this.store.currentTask();e&&this.store.updateTaskState(e.id,A.finished)}),x(xt,"Mark as active",t=>{let e=this.store.currentTask();e&&this.store.updateTaskState(e.id,A.active)}),x(yt,"Rename task",()=>{let t=this.store.currentTask();t&&this.store.renameTask(t.id)}),x(Ct,"Delete task",()=>{let t=this.store.currentTask();t&&this.store.deleteTask(t.id)})],this.displayedColumns=["start","end","duration","action"],this.destroyRef.onDestroy(()=>{this.keys.remove(this.hotkeys)}),T(()=>{this.keys.add(this.hotkeys)}),tt(()=>{this.store.currentTaskId(),this.viewport()?.scrollToIndex(0)})}start(t){this.store.startTask(t,Date.now())}stop(t){this.store.stopTask(t,Date.now())}deleteTask(t){this.store.deleteTask(t.id)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=S({type:n,selectors:[["screen-task"]],viewQuery:function(e,a){e&1&&U(a.viewport,w,5),e&2&&$()},standalone:!0,features:[E],decls:1,vars:1,consts:[["viewport",""],["routerLink","./..","queryParamsHandling","merge","mat-icon-button",""],["svgIcon","arrow_back"],["data-e2e","screen-task__state-icon",1,"fix-icon-color",3,"svgIcon"],["data-e2e","screen-task__name"],[3,"task"],["minBufferPx","200","maxBufferPx","2000",3,"itemSize"],["cdkDropList","","cdkVirtualScrollingElement","","sticky","",1,"mat-mdc-table",3,"cdkDropListSortingDisabled"],[3,"ngStyle"],[1,"mat-mdc-header-row","mdc-data-table__header-row"],[1,"header-start","mat-mdc-header-cell","mdc-data-table__header-cell"],[1,"header-end","mat-mdc-header-cell","mdc-data-table__header-cell"],[1,"header-duration","mat-mdc-header-cell","mdc-data-table__header-cell"],[1,"header-action","mat-mdc-header-cell","mdc-data-table__header-cell"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTypes"],[1,"mat-mdc-footer-row","mdc-data-table__row"],[1,"mat-mdc-footer-cell","mdc-data-table__cell"],["data-e2e","screen-task__task-duration",1,"mat-mdc-footer-cell","mdc-data-table__cell"],["mat-fab","","color","accent","matTooltip","Start","data-e2e","screen-task__button-start"],["mat-fab","","color","primary","matTooltip","Stop","data-e2e","screen-task__button-stop"],["data-e2e","screen-task__session-row","cdkDrag","",1,"mat-mdc-row","mdc-data-table__row",3,"cdkDragData"],[4,"cdkDragPlaceholder"],["data-e2e","screen-task__session-start",1,"mat-mdc-cell","mdc-data-table__cell"],["data-e2e","screen-task__session-end",1,"mat-mdc-cell","mdc-data-table__cell"],["data-e2e","screen-task__session-duration",1,"mat-mdc-cell","mdc-data-table__cell"],[1,"mat-mdc-cell","mdc-data-table__cell"],["data-e2e","screen-task__button-session-action",3,"session","task"],["mat-fab","","color","accent","matTooltip","Start","data-e2e","screen-task__button-start",3,"click"],["svgIcon","play_arrow"],["mat-fab","","color","primary","matTooltip","Stop","data-e2e","screen-task__button-stop",3,"click"],["svgIcon","pause"]],template:function(e,a){if(e&1&&f(0,Nt,36,21),e&2){let d;O((d=a.store.currentTask())?0:-1,d)}},dependencies:[Mt,Tt,Pt,I,ct,Dt,Et,Ot,Vt,St,mt,pt,dt,nt,ot,R,F,lt,st,it,at,w,rt,et,It,Ft],styles:[`[_nghost-%COMP%]{position:relative;flex:1;flex-direction:column;max-height:100vh;display:grid;grid-template-rows:auto 1fr;padding-right:2px}h2[_ngcontent-%COMP%]{margin-right:auto;overflow:hidden;text-overflow:ellipsis;margin-bottom:2px}h2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:relative;top:4px;margin-right:.25em}[mat-fab][_ngcontent-%COMP%]{position:absolute;bottom:var(--fab-offset);right:var(--fab-offset);left:50%;z-index:10}.session-tabular-data[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr}mat-toolbar[_ngcontent-%COMP%]{grid-row:1}.header-start[_ngcontent-%COMP%], .header-end[_ngcontent-%COMP%]{width:50%}.header-duration[_ngcontent-%COMP%]{max-width:90px;min-width:90px}.header-action[_ngcontent-%COMP%]{max-width:40px;min-width:40px}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{grid-row:2}
/*# sourceMappingURL=screen-task.component-GGEHVFCL.css.map */`,`.mat-mdc-table[_ngcontent-%COMP%]{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mdc-data-table__cell[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}.mdc-data-table__cell[_ngcontent-%COMP%], .mdc-data-table__header-cell[_ngcontent-%COMP%]{padding:0 16px}.mat-mdc-header-row[_ngcontent-%COMP%]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, .87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row[_ngcontent-%COMP%]{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, .87))}.mat-mdc-row[_ngcontent-%COMP%], .mdc-data-table__content[_ngcontent-%COMP%]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row[_ngcontent-%COMP%]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, .87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell[_ngcontent-%COMP%]{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, .12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}.mat-mdc-cell[_ngcontent-%COMP%]{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, .12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row[_ngcontent-%COMP%]:last-child   .mat-mdc-cell[_ngcontent-%COMP%]{border-bottom:none}.mat-mdc-footer-cell[_ngcontent-%COMP%]{letter-spacing:var(--mat-table-row-item-label-text-tracking)}.mat-mdc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-mdc-cell[_ngcontent-%COMP%], .mat-mdc-footer-cell[_ngcontent-%COMP%], .mat-mdc-header-row[_ngcontent-%COMP%], .mat-mdc-row[_ngcontent-%COMP%], .mat-mdc-footer-row[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{background:inherit}.mat-mdc-table[_ngcontent-%COMP%]   mat-header-row.mat-mdc-header-row[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   mat-row.mat-mdc-row[_ngcontent-%COMP%], .mat-mdc-table[_ngcontent-%COMP%]   mat-footer-row.mat-mdc-footer-cell[_ngcontent-%COMP%]{height:unset}
/*# sourceMappingURL=mat-table-OV2V3RQE.css.map */`],changeDetection:0})}}return n})();export{Ie as default};
//# sourceMappingURL=chunk-CPEWTZL6.js.map
