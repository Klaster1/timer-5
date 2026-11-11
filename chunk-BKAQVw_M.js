import{H as Iu,J as ai$1,Q as lf,U as Ju,V as Gu,X as cf,Z as hi,at as ws,et as sc,nt as uf,ot as zu,q as Zn$1,tt as tc}from"./main-VW3PSTHY.js";import{C as T$1,E as Ub,Et as ul,Q as ht$1,_ as Mt$1,a as Dg,dt as nt,it as kt$1,nt as it}from"./chunk-Btuf8ckA.js";import{$n as pe,An as j,Ar as vI,Cn as hr$1,Dn as il,Dt as Yo,F as KD,Fn as kr,G as N,Gr as xr$1,H as Lh,Ht as bh,J as Ni$1,Jt as cm,K as Ne$1,Lr as wh,Lt as al,M as Jw,Mt as _,P as K$1,Pn as kh,Pr as vw,Q as Py,Qn as pb,Qt as db,R as Ko,Sn as hd,T as Ij,Tr as uh,U as Lr,Vn as md,Vr as ww,Vt as b,W as Mh,Wr as xh,Wt as bw,Xr as yy,Y as Oh,Yn as oe$1,Yr as yw,Zn as ou,_r as tD,ar as qw,bn as gw,br as tg,d as Dw,dr as ru,en as dj,er as pj,f as Ea,fn as fj,ft as Vh,gn as gb,h as Ew,ht as W,in as ec,jr as ve,kt as ZD,l as Ch,lt as Th,m as Et$1,mr as sl,n as A,nr as q,pr as sb,qr as yj,rr as qh,tn as dm,tt as Rh,un as ey,ut as V,wn as iD,wt as YE,xn as hb,yn as gj,yr as te,yt as Xg,zt as an}from"./chunk-BzcoOg1T.js";var Ct=Symbol(`FIELD_TREE`);var ft=0;function yi(){return ft}function K(n,e){return(...t)=>{try{return ft=e,n(...t)}finally{ft=0}}}function Si(n){return!n}function Rn(n){return n}function L(n){return Array.isArray(n)}function Pe(n){return(typeof n==`object`||typeof n==`function`)&&n!=null}var Q=Symbol();var Ke=Symbol();var Se=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(Tn(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(i=>Tn(this.predicates,i)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var Le=class extends Se{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let i=t(e);return i&&i!==Ke})}};var oe=class n extends Se{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,i)=>{let r=i(e);return r===void 0||r===Ke?t:L(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}};var mt=class extends oe{constructor(e){super(e,void 0)}};var ut=class extends Se{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](e);r!==Ke&&(t=this.key.reducer.reduce(t,r))}return t}};function Tn(n,e){return n.length===0?e:t=>{for(let i of n){let r=t.stateOf(i.path),o=tg(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return Ke}return e(t)}}var ae=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=/* @__PURE__ */ new Map;constructor(e){this.predicates=e,this.hidden=new Le(e),this.disabledReasons=new mt(e),this.readonly=new Le(e),this.syncErrors=oe.ignoreNull(e),this.syncTreeErrors=oe.ignoreNull(e),this.asyncErrors=oe.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new ut(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let i=e.metadata.get(t);this.getMetadata(t).mergeIn(i)}}};var ze=class{depth;constructor(e){this.depth=e}build(){return new Ve(this,[],0)}};var le=class n extends ze{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===Q){let t=this.getCurrent().children;t.size>(t.has(Q)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:K(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new we(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}};var we=class extends ze{logic=new ae([]);children=/* @__PURE__ */ new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(K(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(K(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(K(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(K(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(K(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(K(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(K(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new le(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var Ve=class n{builder;predicates;depth;logic;constructor(e,t,i){this.builder=e,this.predicates=t,this.depth=i,this.logic=e?wi(e,t,i):new ae([])}getChild(e){let t=this.builder?Dn(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:i,predicates:r}=t[0];return new n(i,[...this.predicates,...r.map(o=>pt(o,this.depth))],this.depth+1)}else return new ht(t.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(a=>pt(a,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var ht=class n{all;logic;constructor(e){this.all=e,this.logic=new ae([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function Dn(n,e){if(n instanceof le)return n.all.flatMap(({builder:t,predicate:i})=>{let r=Dn(t,e);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(n instanceof we)return[...e!==Q&&n.children.has(Q)?[{builder:n.getChild(Q),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new N(1909,!1)}function wi(n,e,t){let i=new ae(e);if(n instanceof le){let r=n.all.map(({builder:o,predicate:a})=>new Ve(o,a?[...e,pt(a,t)]:e,t));for(let o of r)i.mergeIn(o.logic)}else if(n instanceof we)i.mergeIn(n.logic);else throw new N(1909,!1);return i}function pt(n,e){return q(W({},n),{depth:e})}var An=Symbol(`PATH`);var B=class n{keys;parent;keyInParent;root;children=/* @__PURE__ */ new Map;fieldPathProxy=new Proxy(this,Ni);logicBuilder;constructor(e,t,i,r){this.keys=e,this.parent=i,this.keyInParent=r,this.root=t??this,i||(this.logicBuilder=le.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let i=e.compile();this.builder.mergeIn(i.builder,t)}static unwrapFieldPath(e){return e[An]}static newRoot(){return new n([],void 0,void 0,void 0)}};var Ni={get(n,e){return e===An?n:n.getChild(e).fieldPathProxy}};var Oe;var ye=/* @__PURE__ */ new Map;var Be=class n{schemaFn;constructor(e){this.schemaFn=e}compile(){if(ye.has(this))return ye.get(this);let e=B.newRoot();ye.set(this,e);let t=Oe;try{Oe=e,this.schemaFn(e.fieldPathProxy)}finally{Oe=t}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return ye.clear(),e===void 0?B.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{ye.clear()}}};function Mi(n){return n instanceof Be||typeof n==`function`}function Ft(n){if(Oe!==B.unwrapFieldPath(n).root)throw new N(1908,!1)}function Et(n,e,t){return Ft(n),B.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var de={list(){return{reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e<n?e:n,getInitial:()=>{}}},max(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e>n?e:n,getInitial:()=>{}}},or(){return{reduce:(n,e)=>n||e,getInitial:()=>!1}},and(){return{reduce:(n,e)=>n&&e,getInitial:()=>!0}},override:Ci};function Ci(n){return{reduce:(e,t)=>t,getInitial:()=>n?.()}}var Rt=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var He=class{reducer;create;brand;[Rt];constructor(e,t){this.reducer=e,this.create=t}};function U(n){return new He(n??de.override())}function Tt(){return U()}var It=U(de.or());var On=Tt();var Pn=Tt();var Ln=U(de.max());var zn=U(de.min());var Vn=U(de.list());function T(n,e){if(n===e)return!0;if(!n||!e||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}function Fi(n){return n.errors().length>0?`invalid`:n.pending()?`unknown`:`valid`}var gt=class{node;constructor(e){this.node=e}rawSyncTreeErrors=db(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:T});syncErrors=db(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Ei(this.node.submitState.submissionErrors())],{equal:T});syncValid=db(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),Si));syncTreeErrors=db(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:T});rawAsyncErrors=db(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:T});asyncErrors=db(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:T});parseErrors=db(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:T});errors=db(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:T});errorSummary=db(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,i)=>[...i,...t.errorSummary()]);return tg(()=>e.sort(Ri)),e},{equal:T});pending=db(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=db(()=>{if(this.shouldSkipValidation())return`valid`;let e=Fi(this);return this.node.structure.reduceChildren(e,(t,i)=>i===`invalid`||t.validationState.status()===`invalid`?`invalid`:i===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=db(()=>this.status()===`valid`);invalid=db(()=>this.status()===`invalid`);shouldSkipValidation=db(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Ei(n){return n===void 0?[]:L(n)?n:[n]}function kt(n,e){if(L(n))for(let t of n)t.fieldTree??=e;else n&&(n.fieldTree??=e);return n}function In(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function Ri(n,e){let t=In(n),i=In(e);return t===i?0:t===void 0||i===void 0?t===void 0?1:-1:t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var bt=U();var xt=class{node;cache=/* @__PURE__ */ new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=db(()=>{let i=B.unwrapFieldPath(e),r=this.node,o=yi();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new N(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new N(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=db(()=>{let e=this.key();if(!L(tg(this.node.structure.parent.value)))throw new N(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof Zn$1)throw new N(1907,!1);return t}};var vt=class{node;metadata=/* @__PURE__ */ new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=hb();e&&gb(!1);try{tg(()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())t.create&&hr$1(this.node.structure.injector,()=>{let i=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,db(()=>i.compute(this.node.context)));this.metadata.set(t,r)})})}finally{e&&gb(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new N(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,db(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var Ti={get(n,e,t){if(e===Ct)return!0;let i=n(),r=i.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=tg(i.value);if(L(o)){if(e===`length`)return i.value().length;if(e===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(Pe(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(n,e){let t=tg(n().value),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let e=tg(n().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function Ii(n,e){let t=db(()=>n()[e()]);return t[j]=n[j],t.set=i=>{Object.is(tg(t),i)||n.update(r=>ki(r,i,e()))},t.update=i=>{t.set(i(tg(t)))},t.asReadonly=()=>t,t}function ki(n,e,t){if(L(n)){let i=[...n];return i[t]=e,i}else return q(W({},n),{[t]:e})}var re=Symbol(``);var Bn=db(()=>!1);var je=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=oe$1.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,i){this.logic=e,this.node=t,this.createChildNode=i}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>tg(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return tg(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||tg(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),i=tg(this.childrenMap)?.byPropertyKey.get(t)?.reader;return i||(i=this.createReader(t)),i()}reduceChildren(e,t,i){let r=this.childrenMap();if(!r)return e;let o=e;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=t(tg(a.reader),o)}return o}destroy(){this._injector?.destroy()}createKeyOrOrphanSignals(e,t,i){if(e===`root`)return{keyInParent:Hn,isOrphaned:Bn};let r=this.parent,o=i,a=db(()=>{if(r.structure.isOrphaned())return re;let h=r.structure.childrenMap();if(!h)return re;let b=h.byPropertyKey.get(o);if(b&&b.node===this.node)return o;if(t===void 0)return re;for(let[N,W]of h.byPropertyKey)if(W.node===this.node)return o=N;return re}),d=db(()=>a()===re);return{keyInParent:db(()=>{let h=a();if(h===re)throw t===void 0?new N(-1902,!1):new N(1904,!1);return h}),isOrphaned:d}}createChildrenMap(){return pb({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,i){if(!Pe(e)||!i&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:/* @__PURE__ */ new Map};let r,o=L(e);t!==void 0&&(o?r=Ai(t,e,this.identitySymbol):r=Oi(t,e));for(let a of Object.keys(e)){let d,f=e[a];if(f===void 0){t.byPropertyKey.has(a)&&(r??=W({},t),r.byPropertyKey.delete(a));continue}o&&Pe(f)&&!L(f)&&(d=f[this.identitySymbol]??=Symbol(``));let h;d&&(t.byTrackingKey?.has(d)||(r??=W({},t),r.byTrackingKey??=/* @__PURE__ */ new Map,r.byTrackingKey.set(d,this.createChildNode(a,d,o))),h=(r??t).byTrackingKey.get(d));let b=t.byPropertyKey.get(a);b===void 0?(r??=W({},t),r.byPropertyKey.set(a,{reader:this.createReader(a),node:h??this.createChildNode(a,d,o)})):h&&h!==b.node&&(r??=W({},t),b.node=h)}return r??t}createReader(e){return db(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}};var _t=class extends je{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Di}get keyInParent(){return Hn}isOrphaned=Bn;childrenMap;constructor(e,t,i,r,o){super(t,e,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}};var yt=class extends je{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,i,r,o,a){super(t,e,a),this.logic=t,this.parent=i,this.root=this.parent.structure.root;let d=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=d.isOrphaned,this.keyInParent=d.keyInParent,this.pathKeys=db(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=Ii(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Di=db(()=>[]);var Hn=db(()=>{throw new N(1905,!1)});function Ai(n,e,t){let i,r=new Set(n.byPropertyKey.keys()),o=n.byTrackingKey&&new Set(n.byTrackingKey.keys());for(let a=0;a<e.length;a++){let d=e[a];r.delete(a.toString()),o&&Pe(d)&&Object.hasOwn(d,t)&&o.delete(d[t])}if(r.size>0){i??=W({},n);for(let a of r)i.byPropertyKey.delete(a)}if(o&&o.size>0){i??=W({},n);for(let a of o)i.byTrackingKey.delete(a)}return i}function Oi(n,e){let t;for(let i of n.byPropertyKey.keys())Object.hasOwn(e,i)||(t??=W({},n),t.byPropertyKey.delete(i));return t}var St=class{node;selfSubmitting=Ko(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=pb({source:this.node.structure.value,computation:()=>[]})}submitting=db(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var Ne=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new xt(this)}fieldProxy=new Proxy(()=>this,Ti);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new vt(this),this.submitState=new St(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(kn,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(kn,void 0)}pendingSync=pb({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata(Pn)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(zn)}get min(){let e=this.metadata(On)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(Ln)}get pattern(){return this.metadata(Vn)??Pi}get required(){return this.metadata(It)??Li}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||tg(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){tg(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){tg(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[Rt]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=pb(this.value);e.rawSet=e.set,e.set=i=>{e.rawSet(i),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=i=>{t(i),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=tg(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,i=e(t.signal);if(i&&(this.pendingSync.set(t),await i,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,i,r){return r.newRoot(e,t,i,r)}createStructure(e){return e.kind===`root`?new _t(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new yt(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,i){let r,o;return i?(r=this.pathNode.getChild(Q),o=this.structure.logic.getChild(Q)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var Pi=db(()=>[]);var Li=db(()=>!1);function kn(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var wt=class{node;selfTouched=Ko(!1);selfDirty=Ko(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=Ko([]);constructor(e){this.node=e}dirty=db(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.dirty(),Rn)});touched=db(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.touched(),Rn)});disabledReasons=db(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:T});disabled=db(()=>!!this.disabledReasons().length);readonly=db(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=db(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=db(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=db(()=>{if(this.node.logicNode.logic.hasMetadata(bt)){let t=this.node.logicNode.logic.getMetadata(bt).compute(this.node.context);if(t)return i=>t(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=db(()=>this.hidden()||this.disabled()||this.readonly())};var Nt=class{newRoot(e,t,i,r){return new Ne({kind:`root`,fieldManager:e,value:t,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(e){return new Ne(e)}createNodeState(e){return new wt(e)}createValidationState(e){return new gt(e)}createStructure(e,t){return e.createStructure(t)}};var Mt=class{injector;rootName;submitOptions;constructor(e,t,i){this.injector=e,this.rootName=t??`${this.injector.get(hd)}.form${zi++}`,this.submitOptions=i}structures=/* @__PURE__ */ new Set;createFieldManagementEffect(e){md(()=>{let t=/* @__PURE__ */ new Set;this.markStructuresLive(e,t);for(let i of this.structures)t.has(i)||(this.structures.delete(i),tg(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let i of e.children())this.markStructuresLive(i.structure,t)}};var zi=0;var jn=new A(``);function Vi(n){let e,t,i;return n.length===3?[e,t,i]=n:n.length===2?Mi(n[1])?[e,t]=n:[e,i]=n:[e]=n,[e,t,i]}function Bi(...n){let[e,t,i]=Vi(n),r=i?.injector??b(oe$1),o=hr$1(r,()=>Be.rootCompile(t)),a=new Mt(r,i?.name,i?.submission),d=i?.adapter??new Nt,f=Ne.newRoot(a,e,o,d);a.createFieldManagementEffect(f.structure);let{experimentalWebMcpTool:h}=i??{};if(h){let b$1=hr$1(r,()=>b(jn,{optional:!0}));b$1&&hr$1(r,()=>b$1(f.fieldTree,{name:h.name,description:h.description,annotations:h.annotations}))}return f.fieldTree}async function qn(n,e){let t=tg(n);if(tg(t.submitState.submitting))return!1;let i=e===void 0?t.structure.root.fieldProxy:n,r={root:t.structure.root.fieldProxy,submitted:n};e=typeof e==`function`?{action:e}:e??t.structure.fieldManager.submitOptions;let o=e?.action;if(!o)throw new N(1915,!1);t.markAsTouched();let a=e?.onInvalid,d=Hi(t,e?.ignoreValidators);try{if(d){t.submitState.selfSubmitting.set(!0);let f=await tg(()=>o?.(i,r));return f&&ji(t,f),!f||L(f)&&f.length===0}else tg(()=>a?.(i,r));return!1}finally{t.submitState.selfSubmitting.set(!1)}}function Hi(n,e){switch(e){case`all`:return!0;case`none`:return tg(n.valid);default:return!tg(n.invalid)}}function ji(n,e){L(e)||(e=[e]);let t=/* @__PURE__ */ new Map;for(let i of e){let r=kt(i,n.fieldTree),o=r.fieldTree(),a=t.get(o);a||(a=[],t.set(o,a)),a.push(r)}for(let[i,r]of t)i.submitState.submissionErrors.set(r)}var qe=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:i}){this.context=e,this.kind=t,this.control=i}};function Kn(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof qe?t.context:t;return e}function Un(n,e){return n===null?[]:Object.entries(n).map(([t,i])=>new qe({context:i,kind:t,control:e}))}function Fe(n){return typeof n==`function`&&n[Ct]===!0}var qi=new A(``);function Gn(n,e){return n instanceof Function?n(e):n}function Ki(n){return typeof n==`number`?isNaN(n):n===``||n===!1||n==null}function Wn(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function Ui(n,e){Ft(n),B.unwrapFieldPath(n).builder.addSyncErrorRule(i=>kt(e(i),i.fieldTree))}function Gi(n){return new Dt(n)}var Ue=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var Dt=class extends Ue{kind=`required`};var Ge=class extends Ue{kind=`parse`};function Jr(n,e){let t=Et(n,U(),i=>e?.when?e.when(i):!0);Et(n,It,({state:i})=>i.metadata(t)()),Ui(n,i=>{if(i.state.metadata(t)()&&Ki(i.value()))return e?.error?Gn(e.error,i):Gi({message:Gn(e?.message,i)})})}function Wi(n,e,t){let i=pb({source:n,computation:()=>[],equal:T}),r=a=>{let d=t(a);i.set(Wn(d.error)),d.value!==void 0&&e(d.value),i.set(Wn(d.error))},o=()=>{i.set([])};return{errors:i.asReadonly(),setRawValue:r,reset:o}}var At=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return Kn(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new N(1910,!1)}valueAccessor=null;hasValidator(e){return e===ai$1.required?this.field().required():!1}updateValueAndValidity(){}};var Ot={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var $i=(()=>{let n={};for(let e of Object.keys(Ot))n[Ot[e]]=e;return n})();function Pt(n,e){return n[$i[e]]?.()}var Lt=Object.values(Ot);function $e(){return{}}function G(n,e,t){return Object.is(n[e],t)?!1:(n[e]=t,!0)}function Yi(n,e,t){let i;if(Zn(n)&&t.isBadInput(n))return{error:new Ge};switch(n.type){case`checkbox`:return{value:n.checked};case`number`:case`range`:case`datetime-local`:if(i=tg(e),typeof i==`number`||i===null)return{value:n.value===``?null:n.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(i=tg(e),i===null||i instanceof Date)return{value:n.valueAsDate};if(typeof i==`number`)return{value:n.valueAsNumber}}if(n.tagName===`INPUT`&&n.type===`text`&&(i??=tg(e),typeof i==`number`||i===null)){if(n.value===``)return{value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new Ge}:{value:r}}return{value:n.value}}function $n(n,e){switch(n.type){case`checkbox`:n.checked=e;return;case`radio`:n.checked=e===n.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){Yn(n,e);return}else if(e===null){n.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e==`number`){Yn(n,e);return}}if(n.tagName===`INPUT`&&n.type===`text`){if(typeof e==`number`){n.value=isNaN(e)?``:String(e);return}if(e===null){n.value=``;return}}n.value=e}function Yn(n,e){isNaN(e)?n.value=``:n.valueAsNumber=e}function Zn(n){return n.tagName===`INPUT`}function Zi(n){return n.type===`date`||n.type===`datetime-local`||n.type===`month`||n.type===`time`||n.type===`week`}function Qi(n,e){let t=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${i}`;return`${t}-${i}-${String(n.getUTCDate()).padStart(2,`0`)}`}function Qn(n,e,t){return e instanceof Date&&(n===`min`||n===`max`)&&(t===`date`||t===`month`)?Qi(e,t):e}function Xi(n,e){n.listenToCustomControlModel(i=>e.state().controlValue.set(i)),n.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=$e();return()=>{let i=e.state(),r=i.controlValue();G(t,`controlValue`,r)&&n.setCustomControlModelInput(r);for(let o of Lt){let a;if(o===`errors`?a=e.errors():a=Pt(i,o),G(t,o,a)&&(n.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let d=Qn(o,a,e.nativeFormElement.type);zu(e.renderer,e.nativeFormElement,o,d)}}}}function Ji(n){return typeof n==`object`&&n!==null}function er(n,e){let t=$e();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let i=e.injector.get(hi,null,{optional:!0,self:!0});if(i){let r;for(let f of i)Ji(f)&&f.registerOnValidatorChange&&(r??=Ko(0),f.registerOnValidatorChange(()=>{r.update(h=>h+1)}));let o=i.map(f=>typeof f==`function`?f:f.validate.bind(f)),a=ai$1.compose(o),d=db(()=>{r?.();return Un(a?a(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(d)}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,tg(()=>e.controlValueAccessor.writeValue(r))}}),()=>{let r=e.state(),o=r.controlValue();G(t,`controlValue`,o)&&tg(()=>e.controlValueAccessor.writeValue(o));for(let a of Lt){let d=Pt(r,a);if(G(t,a,d)){let f=n.setInputOnDirectives(a,d,a===`name`?tr:void 0);a===`disabled`&&e.controlValueAccessor.setDisabledState?tg(()=>e.controlValueAccessor.setDisabledState(d)):!f&&e.elementAcceptsNativeProperty(a)&&zu(e.renderer,e.nativeFormElement,a,d)}}}}function tr(n){return n==null}function nr(n,e,t){if(typeof MutationObserver!=`function`)return;let i=new MutationObserver(r=>{r.some(o=>ir(o))&&e()});i.observe(n,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>i.disconnect())}function ir(n){if(n.type===`childList`||n.type===`characterData`){if(n.target instanceof Comment)return!1;for(let e of n.addedNodes)if(!(e instanceof Comment))return!0;for(let e of n.removedNodes)if(!(e instanceof Comment))return!0;return!1}return n.type===`attributes`&&n.target instanceof HTMLOptionElement}function rr(n,e,t,i){let r=!1,o=e.nativeFormElement,a=Wi(()=>e.state().value(),N=>e.state().controlValue.set(N),N=>Yi(o,e.state().value,i));t.set(a.errors),e.onReset=()=>{a.reset();let N=e.state().value();b.controlValue=N,$n(o,N)};let d=n.nativeElement,f=()=>a.setRawValue(void 0);d.addEventListener(`input`,f);let h=()=>e.state().markAsTouched();d.addEventListener(`blur`,h),e.destroyRef.onDestroy(()=>{d.removeEventListener(`input`,f),d.removeEventListener(`blur`,h)}),Zn(o)&&Zi(o)&&i.watchValidity(e.destroyRef,o,()=>a.setRawValue(void 0)),e.registerAsBinding(),o.tagName===`SELECT`&&nr(o,()=>{r&&(o.value=e.state().controlValue())},e.destroyRef);let b=$e();return()=>{let N=e.state();for(let A of Lt){let fe=Pt(N,A);if(G(b,A,fe)&&(n.setInputOnDirectives(A,fe),e.elementAcceptsNativeProperty(A))){let Qe=Qn(A,fe,o.type);zu(e.renderer,o,A,Qe)}}let W=N.controlValue(),se=G(b,`controlValue`,W),ce=o.type===`radio`&&G(b,`radioValue`,o.value);(se||ce)&&$n(o,W),r=!0}}var Xn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵprov=te({token:n,factory:t=>or.ɵfac(t),providedIn:`root`})}return n})();var or=(()=>{class n extends Xn{document=b(Yo);cspNonce=b(ey,{optional:!0});injectedStyles=/* @__PURE__ */ new WeakMap;watchValidity(t,i,r){let o=i.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createAnimationStyle(o));let a=d=>{let f=d;(f.animationName===`ng-valid`||f.animationName===`ng-invalid`)&&r()};i.addEventListener(`animationstart`,a),t.onDestroy(()=>{i.removeEventListener(`animationstart`,a)})}isBadInput(t){return t.validity?.badInput??!1}createAnimationStyle(t){let i=this.document.createElement(`style`);return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(i):t.appendChild(i),i}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let t;return function(r){return(t||(t=Py(n)))(r||n)}})();static ɵprov=te({token:n,factory:n.ɵfac})}return n})();var ar=Symbol();var We=new A(``);var eo=(()=>{class n{field=dj.required({alias:`formField`});state=db(()=>this.field()());renderer=b(ec);destroyRef=b(pe);injector=b(oe$1);element=b(Lr).nativeElement;elementIsNativeFormElement=Gu(this.element);elementAcceptsTextualValues=uf(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=b(Iu,{optional:!0,self:!0});config=b(qi,{optional:!0});validityMonitor=b(Xn);parseErrorsSource=Ko(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new At(this.state)}parseErrors=db(()=>this.parseErrorsSource()?.().map(t=>q(W({},t),{fieldTree:tg(this.state).fieldTree,formField:this}))??[],{equal:T});errors=db(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:T});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:Ju(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,db(()=>o(this))]);if(t.length===0)return;let i=$e();Ij({write:()=>{if(!this.state().structure.isOrphaned())for(let[r,o]of t){let a=o();G(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new N(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=i=>t.focus(i)),t?.reset&&(this.resetter=()=>t.reset()),md(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{let o=r.nodeState.formFieldBindings().filter(a=>a!==this);r.nodeState.formFieldBindings.set(o),o.length===0&&!r.structure.isOrphaned()&&r.flushSync()})},{injector:this.injector})}[ar];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=er(t,this);else if(t.customControl)this.ɵngControlUpdate=Xi(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=rr(t,this,this.parseErrorsSource,this.validityMonitor);else throw new N(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??=lf(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(i){return new(i||n)};static ɵdir=tD({type:n,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[Jw([{provide:We,useExisting:n},{provide:ws,useFactory:()=>b(n).interopNgControl},{provide:cf,useFactory:()=>b(We,{self:!0})}]),iD(`formField`)]})}return n})();var to=(()=>{class n{fieldTree=dj.required({alias:`formRoot`});onSubmit(t){t.preventDefault(),tg(()=>{let i=this.fieldTree();i().structure.fieldManager.submitOptions&&qn(i)})}static ɵfac=function(i){return new(i||n)};static ɵdir=tD({type:n,selectors:[[`form`,`formRoot`,``]],hostAttrs:[`novalidate`,``],hostBindings:function(i,r){i&1&&xh(`submit`,function(a){return r.onSubmit(a)})},inputs:{fieldTree:[1,`formRoot`,`fieldTree`]}})}return n})();var zt=class{_box;_destroyed=new K$1;_resizeSubject=new K$1;_resizeObserver;_elementObservables=/* @__PURE__ */ new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new _(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Ne$1(t=>t.filter(i=>i.target===e)),an(t=>t.length>0),ru({bufferSize:1,refCount:!0}),dm(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Jn=(()=>{class n{_cleanupErrorListener;_observers=/* @__PURE__ */ new Map;_ngZone=b(ve);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new zt(r)),this._observers.get(r).observe(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=kr({token:n,factory:n.ɵfac})}return n})();var Vt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=tD({type:n,selectors:[[`mat-label`]]})}return n})();var ai=new A(`MatError`);var lr=(()=>{class n{id=b(ht$1).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||n)};static ɵdir=tD({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,r){i&2&&Mh(`id`,r.id)},inputs:{id:`id`},features:[Jw([{provide:ai,useExisting:n}])]})}return n})();var Bt=(()=>{class n{align=`start`;id=b(ht$1).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=tD({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(Mh(`id`,r.id),wh(`align`,null),Vh(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var dr=new A(`MatPrefix`);var li=new A(`MatSuffix`);var sr=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=tD({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[Jw([{provide:li,useExisting:n}])]})}return n})();var di=new A(`FloatingLabelParent`);var ei=(()=>{class n{_elementRef=b(Lr);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=b(Jn);_ngZone=b(ve);_parent=b(di);_resizeSubscription=new V;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return cr(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=tD({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&Vh(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function cr(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var ti=`mdc-line-ripple--active`;var Ye=`mdc-line-ripple--deactivating`;var ni=(()=>{class n{_elementRef=b(Lr);_cleanupTransitionEnd;constructor(){let t=b(ve),i=b(ec);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(Ye),t.add(ti)}deactivate(){this._elementRef.nativeElement.classList.add(Ye)}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Ye);t.propertyName===`opacity`&&r&&i.remove(ti,Ye)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=tD({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var ii=(()=>{class n{_elementRef=b(Lr);_ngZone=b(ve);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(`.mdc-floating-label`);i?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width=``:i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[`notch`];return YE({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(o,a){if(o&1&&Oh(t,5),o&2){let d;Ew(d=Dw())&&(a._notch=d.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(o,a){o&2&&Vh(`mdc-notched-outline--notched`,a.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(o,a){o&1&&(yw(),Th(0,`div`,1),sl(1,`div`,2,0),vw(3),al(),Th(4,`div`,3))},encapsulation:2})})()}return n})();var Ht=(()=>{class n{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(i){return new(i||n)};static ɵdir=tD({type:n})}return n})();var jt=new A(`MatFormField`);var fr=new A(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var ri=`fill`;var mr=`auto`;var oi=`fixed`;var ur=`translateY(-50%)`;var hr=(()=>{class n{_elementRef=b(Lr);_changeDetectorRef=b(gj);_platform=b(T$1);_idGenerator=b(ht$1);_ngZone=b(ve);_defaults=b(fr,{optional:!0});_currentDirection;_unwrapMaybeSignal(t){return Ea(t)?t():t}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=fj(`iconPrefixContainer`);_textPrefixContainerSignal=fj(`textPrefixContainer`);_iconSuffixContainerSignal=fj(`iconSuffixContainer`);_textSuffixContainerSignal=fj(`textSuffixContainer`);_prefixSuffixContainers=db(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=pj(Vt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=Ub(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||mr}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let i=t||this._defaults?.appearance||ri;this._appearanceSignal.set(i)}_appearanceSignal=Ko(ri);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||oi}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||oi}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new K$1;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=kt$1();constructor(){let t=this._defaults,i=b(Mt$1);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),md(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=Fe(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!Fe(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=db(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){let i=this._control,r=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges?.pipe(ou([void 0,void 0]),Ne$1(()=>[this._unwrapMaybeSignal(i.errorState),i.userAriaDescribedBy]),cm(),an(([[o,a],[d,f]])=>o!==d||a!==f)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&!Fe(i.ngField)&&(this._valueChanges=i.ngControl.valueChanges.pipe(dm(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Xg(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._unwrapMaybeSignal(this._control.focused);t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){Ij({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=db(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(t){let i=this._control?.ngField||this._control?.ngControl;if(!i)return!1;if(Fe(i)){let r=i();return t===`valid`?r.valid():t===`dirty`?r.dirty():t===`touched`?r.touched():t===`pending`?r.pending():t===`untouched`?!r.touched():t===`pristine`?!r.dirty():t===`invalid`?!r.valid():!1}else{let r=i;return t===`valid`?r.valid:t===`dirty`?r.dirty:t===`touched`?r.touched:t===`pending`?r.pending:t===`untouched`?r.untouched:t===`pristine`?r.pristine:t===`invalid`?r.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(d=>d.align===`start`):null,a=this._hintChildren?this._hintChildren.find(d=>d.align===`end`):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||t;r=t.concat(i.filter(a=>a&&!o.includes(a)))}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,d=i?.getBoundingClientRect().width??0,f=r?.getBoundingClientRect().width??0,h=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${ur} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+d}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+d+f+h]}_writeOutlinedLabelStyles(t){if(t!==null){let[i,r]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[`iconPrefixContainer`],i=[`textPrefixContainer`],r=[`iconSuffixContainer`],o=[`textSuffixContainer`],a=[`textField`],d=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],f=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function h(m,p){m&1&&Ch(0,`span`,21)}function b(m,p){if(m&1&&(Ni$1(0,`label`,20),vw(1,1),ZD(2,h,1,0,`span`,21),il()),m&2){let l=gw(2);bh(`floating`,l._shouldLabelFloat())(`monitorResize`,l._hasOutline())(`id`,l._labelId),wh(`for`,l._control.disableAutomaticLabeling?null:l._control.id),vI(2),KD(!l.hideRequiredMarker&&l._unwrapMaybeSignal(l._control.required)?2:-1)}}function N(m,p){if(m&1&&ZD(0,b,3,5,`label`,20),m&2){let l=gw();KD(l._hasFloatingLabel()?0:-1)}}function W(m,p){m&1&&Ch(0,`div`,7)}function se(m,p){}function ce(m,p){if(m&1&&uh(0,se,0,0,`ng-template`,13),m&2){gw(2);let l=bw(1);bh(`ngTemplateOutlet`,l)}}function A(m,p){if(m&1&&(Ni$1(0,`div`,9),ZD(1,ce,1,1,null,13),il()),m&2){let l=gw();bh(`matFormFieldNotchedOutlineOpen`,l._shouldLabelFloat()),vI(),KD(l._forceDisplayInfixLabel()?-1:1)}}function fe(m,p){m&1&&(Ni$1(0,`div`,10,2),vw(2,2),il())}function Qe(m,p){m&1&&(Ni$1(0,`div`,11,3),vw(2,3),il())}function mi(m,p){}function ui(m,p){if(m&1&&uh(0,mi,0,0,`ng-template`,13),m&2){gw();let l=bw(1);bh(`ngTemplateOutlet`,l)}}function hi(m,p){m&1&&(Ni$1(0,`div`,14,4),vw(2,4),il())}function pi(m,p){m&1&&(Ni$1(0,`div`,15,5),vw(2,5),il())}function gi(m,p){m&1&&Ch(0,`div`,16)}function bi(m,p){m&1&&(Ni$1(0,`div`,18),vw(1,6),il())}function xi(m,p){if(m&1&&(Ni$1(0,`mat-hint`,22),qw(1),il()),m&2){let l=gw(2);bh(`id`,l._hintLabelId),vI(),qh(l.hintLabel)}}function vi(m,p){if(m&1&&(Ni$1(0,`div`,19),ZD(1,xi,2,2,`mat-hint`,22),vw(2,7),Ch(3,`div`,23),vw(4,8),il()),m&2){let l=gw();vI(),KD(l.hintLabel?1:-1)}}return YE({type:n,selectors:[[`mat-form-field`]],contentQueries:function(p,l,g){if(p&1&&(kh(g,l._labelChild,Vt,5),Rh(g,Ht,5)(g,dr,5)(g,li,5)(g,ai,5)(g,Bt,5)),p&2){ww();let y;Ew(y=Dw())&&(l._formFieldControl=y.first),Ew(y=Dw())&&(l._prefixChildren=y),Ew(y=Dw())&&(l._suffixChildren=y),Ew(y=Dw())&&(l._errorChildren=y),Ew(y=Dw())&&(l._hintChildren=y)}},viewQuery:function(p,l){if(p&1&&(Lh(l._iconPrefixContainerSignal,t,5)(l._textPrefixContainerSignal,i,5)(l._iconSuffixContainerSignal,r,5)(l._textSuffixContainerSignal,o,5),Oh(a,5)(t,5)(i,5)(r,5)(o,5)(ei,5)(ii,5)(ni,5)),p&2){ww(4);let g;Ew(g=Dw())&&(l._textField=g.first),Ew(g=Dw())&&(l._iconPrefixContainer=g.first),Ew(g=Dw())&&(l._textPrefixContainer=g.first),Ew(g=Dw())&&(l._iconSuffixContainer=g.first),Ew(g=Dw())&&(l._textSuffixContainer=g.first),Ew(g=Dw())&&(l._floatingLabel=g.first),Ew(g=Dw())&&(l._notchedOutline=g.first),Ew(g=Dw())&&(l._lineRipple=g.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(p,l){p&2&&Vh(`mat-mdc-form-field-label-always-float`,l._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,l._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,l._hasIconSuffix)(`mat-form-field-invalid`,l._unwrapMaybeSignal(l._control.errorState))(`mat-form-field-disabled`,l._unwrapMaybeSignal(l._control.disabled))(`mat-form-field-autofilled`,l._unwrapMaybeSignal(l._control.autofilled))(`mat-form-field-appearance-fill`,l.appearance==`fill`)(`mat-form-field-appearance-outline`,l.appearance==`outline`)(`mat-form-field-hide-placeholder`,l._hasFloatingLabel()&&!l._shouldLabelFloat())(`mat-primary`,l.color!==`accent`&&l.color!==`warn`)(`mat-accent`,l.color===`accent`)(`mat-warn`,l.color===`warn`)(`ng-untouched`,l._shouldForward(`untouched`))(`ng-touched`,l._shouldForward(`touched`))(`ng-pristine`,l._shouldForward(`pristine`))(`ng-dirty`,l._shouldForward(`dirty`))(`ng-valid`,l._shouldForward(`valid`))(`ng-invalid`,l._shouldForward(`invalid`))(`ng-pending`,l._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Jw([{provide:jt,useExisting:n},{provide:di,useExisting:n}])],ngContentSelectors:f,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(p,l){if(p&1&&(yw(d),uh(0,N,1,1,`ng-template`,null,0,sb),Ni$1(2,`div`,6,1),xh(`click`,function(y){return l._control.onContainerClick(y)}),ZD(4,W,1,0,`div`,7),Ni$1(5,`div`,8),ZD(6,A,2,2,`div`,9),ZD(7,fe,3,0,`div`,10),ZD(8,Qe,3,0,`div`,11),Ni$1(9,`div`,12),ZD(10,ui,1,1,null,13),vw(11),il(),ZD(12,hi,3,0,`div`,14),ZD(13,pi,3,0,`div`,15),il(),ZD(14,gi,1,0,`div`,16),il(),Ni$1(15,`div`,17),ZD(16,bi,2,0,`div`,18)(17,vi,5,1,`div`,19),il()),p&2){let g,y=l._unwrapMaybeSignal(l._control.disabled);vI(2),Vh(`mdc-text-field--filled`,!l._hasOutline())(`mdc-text-field--outlined`,l._hasOutline())(`mdc-text-field--no-label`,!l._hasFloatingLabel())(`mdc-text-field--disabled`,y)(`mdc-text-field--invalid`,l._unwrapMaybeSignal(l._control.errorState)),vI(2),KD(!l._hasOutline()&&!y?4:-1),vI(2),KD(l._hasOutline()?6:-1),vI(),KD(l._hasIconPrefix?7:-1),vI(),KD(l._hasTextPrefix?8:-1),vI(2),KD(!l._hasOutline()||l._forceDisplayInfixLabel()?10:-1),vI(2),KD(l._hasTextSuffix?12:-1),vI(),KD(l._hasIconSuffix?13:-1),vI(),KD(l._hasOutline()?-1:14),vI(),Vh(`mat-mdc-form-field-subscript-dynamic-size`,l.subscriptSizing===`dynamic`);let _i=l._getSubscriptMessageType();vI(),KD((g=_i)===`error`?16:g===`hint`?17:-1)}},dependencies:[ei,ii,ul,ni,Bt],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return n})();var br=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=YE({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})();var xr={passive:!0};var si=(()=>{class n{_platform=b(T$1);_ngZone=b(ve);_renderer=b(xr$1).createRenderer(null,null);_styleLoader=b(it);_monitoredElements=/* @__PURE__ */ new Map;monitor(t){if(!this._platform.isBrowser)return Et$1;this._styleLoader.load(br);let i=nt(t),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new K$1,a=`cdk-text-field-autofilled`,d=h=>{h.animationName===`cdk-text-field-autofill-start`&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!0}))):h.animationName===`cdk-text-field-autofill-end`&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!1})))},f=this._ngZone.runOutsideAngular(()=>(i.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(i,`animationstart`,d,xr)));return this._monitoredElements.set(i,{subject:o,unlisten:f}),o}stopMonitoring(t){let i=nt(t),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove(`cdk-text-field-autofill-monitored`),i.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((t,i)=>this.stopMonitoring(i))}static ɵfac=function(i){return new(i||n)};static ɵprov=kr({token:n,factory:n.ɵfac})}return n})();var ci=new A(`MAT_INPUT_VALUE_ACCESSOR`);var fi=(()=>{class n{isErrorState(t,i){return!!(t&&t.invalid&&(t.touched||i&&i.submitted))}isSignalErrorState(t){if(!t)return!1;let i=t().invalid(),r=t().touched();return i&&r}static ɵfac=function(i){return new(i||n)};static ɵprov=kr({token:n,factory:n.ɵfac})}return n})();var Ze=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(e,t,i,r,o){this._defaultMatcher=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o,t?Ea(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let e=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==e&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(e){if(this.formField&&e?.isSignalErrorState)return e.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return e?.isErrorState(i,t)??!1}};var vr=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var _r=new A(`MAT_INPUT_CONFIG`);var va=(()=>{class n{_elementRef=b(Lr);_platform=b(T$1);ngControl=b(ws,{optional:!0,self:!0});_autofillMonitor=b(si);_ngZone=b(ve);_formField=b(jt,{optional:!0});_renderer=b(ec);_uid=b(ht$1).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=b(_r,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new K$1;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=Ub(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ai$1.required)??!1}set required(t){this._required=Ub(t)}_required;get type(){return this._type}set type(t){this._type=t||`text`,this._validateType(),!this._isTextarea&&Dg().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=Ub(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(t=>Dg().has(t));constructor(){let t=b(tc,{optional:!0}),i=b(sc,{optional:!0}),r=b(fi),o=b(ci,{optional:!0,self:!0}),a=b(We,{optional:!0,self:!0}),d=this._elementRef.nativeElement,f=d.nodeName.toLowerCase();o?Ea(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=d,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(d,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new Ze(r,a||this.ngControl,i,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=f===`select`,this._isTextarea=f===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=d.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&md(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type===`number`?(i.type=`text`,i.setSelectionRange(0,0),i.type=`number`):i.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=t,t?i.setAttribute(`placeholder`,t):i.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){vr.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,i=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(t){let i=this._elementRef.nativeElement;t.length?i.setAttribute(`aria-describedby`,t.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let i=t.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=tD({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(i,r){i&1&&xh(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),i&2&&(Mh(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),wh(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),Vh(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,yj]},exportAs:[`matInput`],features:[Jw([{provide:Ht,useExisting:n}]),yy]})}return n})();export{We as a,fi as c,lr as d,sr as f,Vt as i,hr as l,va as m,Ht as n,Ze as o,to as p,Jr as r,eo as s,Bi as t,jt as u};
//# debugId=42a28eb6-9bc6-5a0f-a189-75a49171355c
//# sourceMappingURL=chunk-BKAQVw_M.js.map