import {T as T$1,aN as ge,bM as Ao,a0 as x,P as _r$1,M as j0,bw as M,R as de,bu as me$1,bN as P0,U as Uw,bO as L0,bP as Xg,a as qo,a2 as oe,a1 as Te$1,Q as Ae$1,s as sd,a5 as Jl,aa as be,bQ as $g,a9 as on,ag as Wg,a7 as kg,bx as $0,x as xE,bq as lc,aq as YD,ar as Gp,r as Di$1,y as fh,N as ND,aF as KD,X as Xc,E as Jv,au as Dh,H as xD,at as Aw,bR as yh,av as gh,bS as tw,aw as XD,ax as ew,bT as mh,ay as hh,by as PE,aG as uh,Y as ys,S as LI,a3 as ei$1,bU as Tb,ab as Bc,ac as Qc,aC as ha,an as Jm,ao as H0,as as oh,O as O0,J as Je$1,bV as Vc,bW as qh,bz as mc,z as z$1,bX as qw,G,bY as Lc,bZ as M$1,b_ as zh,b$ as Gh,c0 as VE,c1 as od,bb as Gw,c2 as V,c3 as ah,b4 as el,b5 as tl,aL as QD,v as sh,B as ih,A as nw,c4 as Dr,az as ee$1,c5 as It,c6 as Q$1,c7 as br$1,c8 as X$1,c9 as oi$1,ca as Pc,cb as Qn$1,u as Cw,aP as Mh,cc as Uo,cd as Om,ce as my,cf as H,cg as S,ch as Kl,bH as Vw}from'./main-6JSMG4TG.js';var Ze=0;function ri(){return Ze}function L(n,e){return (...t)=>{try{return Ze=e,n(...t)}finally{Ze=0;}}}function oi(n){return !n}function mn(n){return n}function T(n){return Array.isArray(n)}function Me(n){return (typeof n=="object"||typeof n=="function")&&n!=null}var q=Symbol(),De=Symbol(),fe=class{predicates;fns=[];constructor(e){this.predicates=e;}push(e){this.fns.push(hn(this.predicates,e));}mergeIn(e){let t=this.predicates?e.fns.map(i=>hn(this.predicates,i)):e.fns;this.fns.push(...t);}hasRules(){return this.fns.length>0}},Ce=class extends fe{get defaultValue(){return  false}compute(e){return this.fns.some(t=>{let i=t(e);return i&&i!==De})}},Y=class n extends fe{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t;}get defaultValue(){return []}compute(e){return this.fns.reduce((t,i)=>{let r=i(e);return r===void 0||r===De?t:T(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}},Qe=class extends Y{constructor(e){super(e,void 0);}},Ye=class extends fe{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t;}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](e);r!==De&&(t=this.key.reducer.reduce(t,r));}return t}};function hn(n,e){return n.length===0?e:t=>{for(let i of n){let r=t.stateOf(i.path),o=qw(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return De}return e(t)}}var X=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new Ce(e),this.disabledReasons=new Qe(e),this.readonly=new Ce(e),this.syncErrors=Y.ignoreNull(e),this.syncTreeErrors=Y.ignoreNull(e),this.asyncErrors=Y.ignoreNull(e);}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new Ye(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let i=e.metadata.get(t);this.getMetadata(t).mergeIn(i);}}},Ee=class{depth;constructor(e){this.depth=e;}build(){return new Se(this,[],0)}},J=class n extends Ee{constructor(e){super(e);}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e);}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e);}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e);}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e);}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e);}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e);}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t);}getChild(e){if(e===q){let t=this.getCurrent().children;t.size>(t.has(q)?1:0)&&(this.current=void 0);}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?true:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:L(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0;}getCurrent(){return this.current===void 0&&(this.current=new ue(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}},ue=class extends Ee{logic=new X([]);children=new Map;constructor(e){super(e);}addHiddenRule(e){this.logic.hidden.push(L(e,this.depth));}addDisabledReasonRule(e){this.logic.disabledReasons.push(L(e,this.depth));}addReadonlyRule(e){this.logic.readonly.push(L(e,this.depth));}addSyncErrorRule(e){this.logic.syncErrors.push(L(e,this.depth));}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(L(e,this.depth));}addAsyncErrorRule(e){this.logic.asyncErrors.push(L(e,this.depth));}addMetadataRule(e,t){this.logic.getMetadata(e).push(L(t,this.depth));}getChild(e){return this.children.has(e)||this.children.set(e,new J(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return  true;return  false}},Se=class n{builder;predicates;depth;logic;constructor(e,t,i){this.builder=e,this.predicates=t,this.depth=i,this.logic=e?ai(e,t,i):new X([]);}getChild(e){let t=this.builder?bn(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:i,predicates:r}=t[0];return new n(i,[...this.predicates,...r.map(o=>Je(o,this.depth))],this.depth+1)}else {let i=t.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(a=>Je(a,this.depth))],this.depth+1));return new Xe(i)}}hasLogic(e){return this.builder?this.builder.hasLogic(e):false}hasRules(){return this.builder?this.builder.hasRules():false}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():false}},Xe=class n{all;logic;constructor(e){this.all=e,this.logic=new X([]);for(let t of e)this.logic.mergeIn(t.logic);}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function bn(n,e){if(n instanceof J)return n.all.flatMap(({builder:t,predicate:i})=>{let r=bn(t,e);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(n instanceof ue)return [...e!==q&&n.children.has(q)?[{builder:n.getChild(q),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new M$1(1909,false)}function ai(n,e,t){let i=new X(e);if(n instanceof J){let r=n.all.map(({builder:o,predicate:a})=>new Se(o,a?[...e,Je(a,t)]:e,t));for(let o of r)i.mergeIn(o.logic);}else if(n instanceof ue)i.mergeIn(n.logic);else throw new M$1(1909,false);return i}function Je(n,e){return z$1(G({},n),{depth:e})}var _n=Symbol("PATH"),I=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,si);logicBuilder;constructor(e,t,i,r){this.keys=e,this.parent=i,this.keyInParent=r,this.root=t??this,i||(this.logicBuilder=J.newRoot());}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let i=e.compile();this.builder.mergeIn(i.builder,t);}static unwrapFieldPath(e){return e[_n]}static newRoot(){return new n([],void 0,void 0,void 0)}},si={get(n,e){return e===_n?n:n.getChild(e).fieldPathProxy}},we,ce=new Map,Fe=class n{schemaFn;constructor(e){this.schemaFn=e;}compile(){if(ce.has(this))return ce.get(this);let e=I.newRoot();ce.set(this,e);let t=we;try{we=e,this.schemaFn(e.fieldPathProxy);}finally{we=t;}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return ce.clear(),e===void 0?I.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{ce.clear();}}};function li(n){return n instanceof Fe||typeof n=="function"}function ct(n){if(we!==I.unwrapFieldPath(n).root)throw new M$1(1908,false)}function ft(n,e,t){return ct(n),I.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var ee={list(){return {reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return {reduce:(n,e)=>n===void 0||e===void 0?n??e:e<n?e:n,getInitial:()=>{}}},max(){return {reduce:(n,e)=>n===void 0||e===void 0?n??e:e>n?e:n,getInitial:()=>{}}},or(){return {reduce:(n,e)=>n||e,getInitial:()=>false}},and(){return {reduce:(n,e)=>n&&e,getInitial:()=>true}},override:di};function di(n){return {reduce:(e,t)=>t,getInitial:()=>n?.()}}var ut=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),Re=class{reducer;create;brand;[ut];constructor(e,t){this.reducer=e,this.create=t;}};function z(n){return new Re(n??ee.override())}function mt(){return z()}var ht=z(ee.or()),vn=mt();var yn=mt();var xn=z(ee.max()),wn=z(ee.min()),Mn=z(ee.list());function C(n,e){if(n===e)return  true;if(!n||!e||n.length!==e.length)return  false;for(let t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return  false;return  true}function ci(n){return n.errors().length>0?"invalid":n.pending()?"unknown":"valid"}var et=class{node;constructor(e){this.node=e;}rawSyncTreeErrors=Uw(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:C});syncErrors=Uw(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...fi(this.node.submitState.submissionErrors())],{equal:C});syncValid=Uw(()=>this.shouldSkipValidation()?true:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),oi));syncTreeErrors=Uw(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:C});rawAsyncErrors=Uw(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:C});asyncErrors=Uw(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e==="pending"||e.fieldTree===this.node.fieldTree),{equal:C});parseErrors=Uw(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:C});errors=Uw(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!=="pending")],{equal:C});errorSummary=Uw(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,i)=>[...i,...t.errorSummary()]);return qw(()=>e.sort(ui)),e},{equal:C});pending=Uw(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(e,t)=>t||e.validationState.asyncErrors().includes("pending")));status=Uw(()=>{if(this.shouldSkipValidation())return "valid";let e=ci(this);return this.node.structure.reduceChildren(e,(t,i)=>i==="invalid"||t.validationState.status()==="invalid"?"invalid":i==="unknown"||t.validationState.status()==="unknown"?"unknown":"valid",t=>t==="invalid")});valid=Uw(()=>this.status()==="valid");invalid=Uw(()=>this.status()==="invalid");shouldSkipValidation=Uw(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function fi(n){return n===void 0?[]:T(n)?n:[n]}function pt(n,e){if(T(n))for(let t of n)t.fieldTree??=e;else n&&(n.fieldTree??=e);return n}function pn(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function ui(n,e){let t=pn(n),i=pn(e);return t===i?0:t===void 0||i===void 0?t===void 0?1:-1:t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var tt=z(),nt=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this);}resolve(e){if(!this.cache.has(e)){let t=Uw(()=>{let i=I.unwrapFieldPath(e),r=this.node,o=ri();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new M$1(1900,false);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new M$1(1901,false);return r.fieldTree});this.cache.set(e,t);}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=Uw(()=>{let e=this.key();if(!T(qw(this.node.structure.parent.value)))throw new M$1(1906,false);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof Qn$1)throw new M$1(1907,false);return t}},it=class{node;metadata=new Map;constructor(e){this.node=e;}runMetadataCreateLifecycle(){this.node.logicNode.logic.hasMetadataKeys()&&qw(()=>Ao(this.node.structure.injector,()=>{for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let t=this.node.logicNode.logic.getMetadata(e),i=e.create(this.node,Uw(()=>t.compute(this.node.context)));this.metadata.set(e,i);}}));}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new M$1(1912,false);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,Uw(()=>t.compute(this.node.context)));}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}},mi={get(n,e,t){let i=n(),r=i.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=qw(i.value);if(T(o)){if(e==="length")return i.value().length;if(e===Symbol.iterator)return ()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(Me(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield [a,t[a]];}},getOwnPropertyDescriptor(n,e){let t=qw(n().value),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&!i.configurable&&(i.configurable=true),i},ownKeys(n){let e=qw(n().value);return typeof e=="object"&&e!==null?Reflect.ownKeys(e):[]}};function hi(n,e){let t=Uw(()=>n()[e()]);return t[H]=n[H],t.set=i=>{Object.is(qw(t),i)||n.update(r=>pi(r,i,e()));},t.update=i=>{t.set(i(qw(t)));},t.asReadonly=()=>t,t}function pi(n,e,t){if(T(n)){let i=[...n];return i[t]=e,i}else return z$1(G({},n),{[t]:e})}var Q=Symbol(""),Cn=Uw(()=>false),Ne=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=ge.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,i){this.logic=e,this.node=t,this.createChildNode=i;}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>qw(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return qw(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||qw(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,true));});}getChild(e){this.ensureChildrenMap();let t=e.toString(),i=qw(this.childrenMap)?.byPropertyKey.get(t)?.reader;return i||(i=this.createReader(t)),i()}reduceChildren(e,t,i){let r=this.childrenMap();if(!r)return e;let o=e;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=t(qw(a.reader),o);}return o}destroy(){this.injector.destroy();}createKeyOrOrphanSignals(e,t,i){if(e==="root")return {keyInParent:En,isOrphaned:Cn};let r=this.parent,o=i,a=Uw(()=>{if(r.structure.isOrphaned())return Q;let u=r.structure.childrenMap();if(!u)return Q;let m=u.byPropertyKey.get(o);if(m&&m.node===this.node)return o;if(t===void 0)return Q;for(let[V,pe]of u.byPropertyKey)if(pe.node===this.node)return o=V;return Q}),l=Uw(()=>a()===Q);return {keyInParent:Uw(()=>{let u=a();if(u===Q)throw t===void 0?new M$1(-1902,false):new M$1(1904,false);return u}),isOrphaned:l}}createChildrenMap(){return Gw({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,false)})}computeChildrenMap(e,t,i){if(!Me(e)||!i&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let r,o=T(e);t!==void 0&&(o?r=bi(t,e,this.identitySymbol):r=_i(t,e));for(let a of Object.keys(e)){let l,c=e[a];if(c===void 0){t.byPropertyKey.has(a)&&(r??=G({},t),r.byPropertyKey.delete(a));continue}o&&Me(c)&&!T(c)&&(l=c[this.identitySymbol]??=Symbol(""));let u;l&&(t.byTrackingKey?.has(l)||(r??=G({},t),r.byTrackingKey??=new Map,r.byTrackingKey.set(l,this.createChildNode(a,l,o))),u=(r??t).byTrackingKey.get(l));let m=t.byPropertyKey.get(a);m===void 0?(r??=G({},t),r.byPropertyKey.set(a,{reader:this.createReader(a),node:u??this.createChildNode(a,l,o)})):u&&u!==m.node&&(r??=G({},t),m.node=u);}return r??t}createReader(e){return Uw(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}},rt=class extends Ne{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return gi}get keyInParent(){return En}isOrphaned=Cn;childrenMap;constructor(e,t,i,r,o){super(t,e,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap();}},ot=class extends Ne{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,i,r,o,a){super(t,e,a),this.logic=t,this.parent=i,this.root=this.parent.structure.root;let l=this.createKeyOrOrphanSignals("child",r,o);this.isOrphaned=l.isOrphaned,this.keyInParent=l.keyInParent,this.pathKeys=Uw(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=hi(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this);}};var gi=Uw(()=>[]),En=Uw(()=>{throw new M$1(1905,false)});function bi(n,e,t){let i,r=new Set(n.byPropertyKey.keys()),o=new Set(n.byTrackingKey?.keys());for(let a=0;a<e.length;a++){let l=e[a];r.delete(a.toString()),Me(l)&&l.hasOwnProperty(t)&&o.delete(l[t]);}if(r.size>0){i??=G({},n);for(let a of r)i.byPropertyKey.delete(a);}if(o.size>0){i??=G({},n);for(let a of o)i.byTrackingKey?.delete(a);}return i}function _i(n,e){let t;for(let i of n.byPropertyKey.keys())e.hasOwnProperty(i)||(t??=G({},n),t.byPropertyKey.delete(i));return t}var at=class{node;selfSubmitting=qo(false);submissionErrors;constructor(e){this.node=e,this.submissionErrors=Gw({source:this.node.structure.value,computation:()=>[]});}submitting=Uw(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??false))},me=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new nt(this)}fieldProxy=new Proxy(()=>this,mi);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new it(this),this.submitState=new at(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle();}focusBoundControl(e){this.getBindingForFocus()?.focus(e);}getBindingForFocus(){let e=this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(gn,void 0);return e||this.structure.children().map(t=>t.getBindingForFocus()).reduce(gn,void 0)}pendingSync=Gw({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort();}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata(yn)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(wn)}get min(){let e=this.metadata(vn)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(xn)}get pattern(){return this.metadata(Mn)??vi}get required(){return this.metadata(ht)??yi}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||qw(()=>{this.markAsTouchedInternal(e),this.flushSync();});}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal();}markAsDirty(){this.nodeState.markAsDirty();}markAsPristine(){this.nodeState.markAsPristine();}markAsUntouched(){this.nodeState.markAsUntouched();}reset(e){qw(()=>this._reset(e));}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset();}reloadValidation(){qw(()=>this._reloadValidation());}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[ut]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation();}controlValueSignal(){let e=Gw(this.value);e.rawSet=e.set,e.set=i=>{e.rawSet(i),this.markAsDirty(),this.debounceSync();};let t=e.update;return e.update=i=>{t(i),this.markAsDirty(),this.debounceSync();},e}sync(){this.value.set(this.controlValue());}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync());}async debounceSync(){let e=qw(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,i=e(t.signal);if(i&&(this.pendingSync.set(t),await i,t.signal.aborted))return}this.structure.isOrphaned()||this.sync();}static newRoot(e,t,i,r){return r.newRoot(e,t,i,r)}createStructure(e){return e.kind==="root"?new rt(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new ot(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,i){let r,o;return i?(r=this.pathNode.getChild(q),o=this.structure.logic.getChild(q)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}},vi=Uw(()=>[]),yi=Uw(()=>false);function gn(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var st=class{node;selfTouched=qo(false);selfDirty=qo(false);markAsTouched(){this.selfTouched.set(true);}markAsDirty(){this.selfDirty.set(true);}markAsPristine(){this.selfDirty.set(false);}markAsUntouched(){this.selfTouched.set(false);}formFieldBindings=qo([]);constructor(e){this.node=e;}dirty=Uw(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.dirty(),mn)});touched=Uw(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.touched(),mn)});disabledReasons=Uw(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:C});disabled=Uw(()=>!!this.disabledReasons().length);readonly=Uw(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??false);hidden=Uw(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??false);name=Uw(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=Uw(()=>{if(this.node.logicNode.logic.hasMetadata(tt)){let t=this.node.logicNode.logic.getMetadata(tt).compute(this.node.context);if(t)return i=>t(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=Uw(()=>this.hidden()||this.disabled()||this.readonly())},lt=class{newRoot(e,t,i,r){return new me({kind:"root",fieldManager:e,value:t,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(e){return new me(e)}createNodeState(e){return new st(e)}createValidationState(e){return new et(e)}createStructure(e,t){return e.createStructure(t)}},dt=class{injector;rootName;submitOptions;constructor(e,t,i){this.injector=e,this.rootName=t??`${this.injector.get(od)}.form${xi++}`,this.submitOptions=i;}structures=new Set;createFieldManagementEffect(e){sd(()=>{let t=new Set;this.markStructuresLive(e,t);for(let i of this.structures)t.has(i)||(this.structures.delete(i),qw(()=>i.destroy()));},{injector:this.injector});}markStructuresLive(e,t){t.add(e);for(let i of e.children())this.markStructuresLive(i.structure,t);}},xi=0,Sn=new x("");function wi(n){let e,t,i;return n.length===3?[e,t,i]=n:n.length===2?li(n[1])?[e,t]=n:[e,i]=n:[e]=n,[e,t,i]}function Mi(...n){let[e,t,i]=wi(n),r=i?.injector??T$1(ge),o=Ao(r,()=>Fe.rootCompile(t)),a=new dt(r,i?.name,i?.submission),l=i?.adapter??new lt,c=me.newRoot(a,e,o,l);a.createFieldManagementEffect(c.structure);let{experimentalWebMcpTool:u}=i??{};if(u){let m=Ao(r,()=>T$1(Sn,{optional:!0}));m&&Ao(r,()=>m(c.fieldTree,{name:u.name,description:u.description}));}return c.fieldTree}async function Fn(n,e){let t=qw(n);if(qw(t.submitState.submitting))return  false;let i=e===void 0?t.structure.root.fieldProxy:n,r={root:t.structure.root.fieldProxy,submitted:n};e=typeof e=="function"?{action:e}:e??t.structure.fieldManager.submitOptions;let o=e?.action;if(!o)throw new M$1(1915,false);t.markAsTouched();let a=e?.onInvalid,l=Ci(t,e?.ignoreValidators);try{if(l){t.submitState.selfSubmitting.set(!0);let c=await qw(()=>o?.(i,r));return c&&Ei(t,c),!c||T(c)&&c.length===0}else qw(()=>a?.(i,r));return !1}finally{t.submitState.selfSubmitting.set(false);}}function Ci(n,e){switch(e){case "all":return  true;case "none":return qw(n.valid);default:return !qw(n.invalid)}}function Ei(n,e){T(e)||(e=[e]);let t=new Map;for(let i of e){let r=pt(i,n.fieldTree),o=r.fieldTree(),a=t.get(o);a||(a=[],t.set(o,a)),a.push(r);}for(let[i,r]of t)i.submitState.submissionErrors.set(r);}var Te=class{kind="compat";control;fieldTree;context;message;constructor({context:e,kind:t,control:i}){this.context=e,this.kind=t,this.control=i;}};function Rn(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof Te?t.context:t;return e}function Nn(n,e){return n===null?[]:Object.entries(n).map(([t,i])=>new Te({context:i,kind:t,control:e}))}var Si=new x("");function Tn(n,e){return n instanceof Function?n(e):n}function Fi(n){return typeof n=="number"?isNaN(n):n===""||n===false||n==null}function Dn(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function Ri(n,e){ct(n),I.unwrapFieldPath(n).builder.addSyncErrorRule(i=>pt(e(i),i.fieldTree));}function Ni(n){return new gt(n)}var Ae=class{__brand=void 0;kind="";fieldTree;message;constructor(e){e&&Object.assign(this,e);}},gt=class extends Ae{kind="required"};var Ie=class extends Ae{kind="parse"};function no(n,e){let t=ft(n,z(),i=>true);ft(n,ht,({state:i})=>i.metadata(t)()),Ri(n,i=>{if(i.state.metadata(t)()&&Fi(i.value()))return Ni({message:Tn(e?.message,i)})});}function Ti(n,e,t){let i=Gw({source:n,computation:()=>[],equal:C}),r=a=>{let l=t(a);i.set(Dn(l.error)),l.value!==void 0&&e(l.value),i.set(Dn(l.error));},o=()=>{i.set([]);};return {errors:i.asReadonly(),setRawValue:r,reset:o}}var bt=class{field;constructor(e){this.field=e;}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return !this.field().disabled()}get errors(){return Rn(this.field().errors())}get pristine(){return !this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return !this.field().touched()}get status(){if(this.field().disabled())return "DISABLED";if(this.field().valid())return "VALID";if(this.field().invalid())return "INVALID";if(this.field().pending())return "PENDING";throw new M$1(1910,false)}valueAccessor=null;hasValidator(e){return e===ei$1.required?this.field().required():false}updateValueAndValidity(){}},_t={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},Di=(()=>{let n={};for(let e of Object.keys(_t))n[_t[e]]=e;return n})();function vt(n,e){let t=Di[e];return n[t]?.()}var yt=Object.values(_t);function ke(){return {}}function K(n,e,t){return n[e]!==t?(n[e]=t,true):false}function Ai(n,e,t){let i;if(On(n)&&t.isBadInput(n))return {error:new Ie};switch(n.type){case "checkbox":return {value:n.checked};case "number":case "range":case "datetime-local":if(i=qw(e),typeof i=="number"||i===null)return {value:n.value===""?null:n.valueAsNumber};break;case "date":case "month":case "time":case "week":if(i=qw(e),i===null||i instanceof Date)return {value:n.valueAsDate};if(typeof i=="number")return {value:n.valueAsNumber};break}if(n.tagName==="INPUT"&&n.type==="text"&&(i??=qw(e),typeof i=="number"||i===null)){if(n.value==="")return {value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new Ie}:{value:r}}return {value:n.value}}function An(n,e){switch(n.type){case "checkbox":n.checked=e;return;case "radio":n.checked=e===n.value;return;case "number":case "range":case "datetime-local":if(typeof e=="number"){In(n,e);return}else if(e===null){n.value="";return}break;case "date":case "month":case "time":case "week":if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e=="number"){In(n,e);return}}if(n.tagName==="INPUT"&&n.type==="text"){if(typeof e=="number"){n.value=isNaN(e)?"":String(e);return}if(e===null){n.value="";return}}n.value=e;}function In(n,e){isNaN(e)?n.value="":n.valueAsNumber=e;}function On(n){return n.tagName==="INPUT"}function Ii(n){return n.type==="date"||n.type==="datetime-local"||n.type==="month"||n.type==="time"||n.type==="week"}function ki(n,e){let t=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,"0");if(e==="month")return `${t}-${i}`;let r=String(n.getUTCDate()).padStart(2,"0");return `${t}-${i}-${r}`}function Pn(n,e,t){return e instanceof Date&&(n==="min"||n==="max")&&(t==="date"||t==="month")?ki(e,t):e}function Oi(n,e){n.listenToCustomControlModel(i=>e.state().controlValue.set(i)),n.listenToCustomControlOutput("touch",()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=ke();return ()=>{let i=e.state(),r=i.controlValue();K(t,"controlValue",r)&&n.setCustomControlModelInput(r);for(let o of yt){let a;if(o==="errors"?a=e.errors():a=vt(i,o),K(t,o,a)&&(n.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let l=Pn(o,a,e.nativeFormElement.type);Pc(e.renderer,e.nativeFormElement,o,l);}}}}function Pi(n){return typeof n=="object"&&n!==null}function Li(n,e){let t=ke();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r);}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let i=e.injector.get(oi$1,null,{optional:true,self:true});if(i){let r;for(let c of i)Pi(c)&&c.registerOnValidatorChange&&(r??=qo(0),c.registerOnValidatorChange(()=>{r.update(u=>u+1);}));let o=i.map(c=>typeof c=="function"?c:c.validate.bind(c)),a=ei$1.compose(o),l=Uw(()=>{r?.();let c=a?a(e.interopNgControl.control):null;return Nn(c,e.interopNgControl.control)});e.parseErrorsSource.set(l);}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,qw(()=>e.controlValueAccessor.writeValue(r));}}),()=>{let r=e.state(),o=r.value();K(t,"controlValue",o)&&qw(()=>e.controlValueAccessor.writeValue(o));for(let a of yt){let l=vt(r,a);if(K(t,a,l)){let c=n.setInputOnDirectives(a,l);a==="disabled"&&e.controlValueAccessor.setDisabledState?qw(()=>e.controlValueAccessor.setDisabledState(l)):!c&&e.elementAcceptsNativeProperty(a)&&Pc(e.renderer,e.nativeFormElement,a,l);}}}}function zi(n,e,t){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>Vi(o))&&e();});i.observe(n,{attributes:true,attributeFilter:["value"],characterData:true,childList:true,subtree:true}),t.onDestroy(()=>i.disconnect());}function Vi(n){if(n.type==="childList"||n.type==="characterData"){if(n.target instanceof Comment)return  false;for(let e of n.addedNodes)if(!(e instanceof Comment))return  true;for(let e of n.removedNodes)if(!(e instanceof Comment))return  true;return  false}return n.type==="attributes"&&n.target instanceof HTMLOptionElement}function Bi(n,e,t,i){let r=false,o=e.nativeFormElement,a=Ti(()=>e.state().value(),c=>e.state().controlValue.set(c),c=>Ai(o,e.state().value,i));t.set(a.errors),e.onReset=()=>{a.reset();let c=e.state().value();l.controlValue=c,An(o,c);},n.listenToDom("input",()=>a.setRawValue(void 0)),n.listenToDom("blur",()=>e.state().markAsTouched()),On(o)&&Ii(o)&&i.watchValidity(e.destroyRef,o,()=>a.setRawValue(void 0)),e.registerAsBinding(),o.tagName==="SELECT"&&zi(o,()=>{r&&(o.value=e.state().controlValue());},e.destroyRef);let l=ke();return ()=>{let c=e.state();for(let m of yt){let V=vt(c,m);if(K(l,m,V)&&(n.setInputOnDirectives(m,V),e.elementAcceptsNativeProperty(m))){let pe=Pn(m,V,o.type);Pc(e.renderer,o,m,pe);}}let u=c.controlValue();K(l,"controlValue",u)&&An(o,u),r=true;}}var Ln=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=X$1({token:n,factory:t=>Hi.\u0275fac(t),providedIn:"root"})}return n})(),Hi=(()=>{class n extends Ln{document=T$1(Uo);cspNonce=T$1(Om,{optional:true});injectedStyles=new WeakMap;watchValidity(t,i,r){let o=i.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=l=>{let c=l;(c.animationName==="ng-valid"||c.animationName==="ng-invalid")&&r();};i.addEventListener("animationstart",a),t.onDestroy(()=>{i.removeEventListener("animationstart",a);});}isBadInput(t){return t.validity?.badInput??false}createTransitionStyle(t){let i=this.document.createElement("style");return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(i):t.appendChild(i),i}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove();}static \u0275fac=(()=>{let t;return function(r){return (t||(t=my(n)))(r||n)}})();static \u0275prov=X$1({token:n,factory:n.\u0275fac})}return n})(),ji=Symbol(),kn=new x(""),io=(()=>{class n{field=O0.required({alias:"formField"});state=Uw(()=>this.field()());renderer=T$1(LI);destroyRef=T$1(Je$1);injector=T$1(ge);element=T$1(_r$1).nativeElement;elementIsNativeFormElement=Vc(this.element);elementAcceptsTextualValues=qh(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=T$1(mc,{optional:true,self:true});config=T$1(Si,{optional:true});validityMonitor=T$1(Ln);parseErrorsSource=qo(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new bt(this.state)}parseErrors=Uw(()=>this.parseErrorsSource()?.().map(t=>z$1(G({},t),{fieldTree:qw(this.state).fieldTree,formField:this}))??[],{equal:C});errors=Uw(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:C});isFieldBinding=false;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t);}set onReset(t){this.parseErrorsResetCallback=t;}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return !this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:Lc(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,Uw(()=>o(this))]);if(t.length===0)return;let i=ke();$0({write:()=>{for(let[r,o]of t){let a=o();K(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r));}}},{injector:this.injector});}focus(t){this.focuser(t);}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value());}registerAsBinding(t){if(this.isFieldBinding)throw new M$1(1913,false);this.isFieldBinding=true,this.installClassBindingEffect(),t?.focus&&(this.focuser=i=>t.focus(i)),t?.reset&&(this.resetter=()=>t.reset()),sd(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this));});},{injector:this.injector});}[ji];\u0275ngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=Li(t,this);else if(t.customControl)this.\u0275ngControlUpdate=Oi(t,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=Bi(t,this,this.parseErrorsSource,this.validityMonitor);else throw new M$1(1914,false)}\u0275ngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return  false;switch(t){case "min":case "max":return this._elementAcceptsMinMax??=zh(this.element);case "minLength":case "maxLength":return this.elementAcceptsTextualValues;case "disabled":case "required":case "readonly":case "name":return  true;default:return  false}}static \u0275fac=function(i){return new(i||n)};static \u0275dir=PE({type:n,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Aw([{provide:kn,useExisting:n},{provide:ys,useFactory:()=>T$1(n).interopNgControl},{provide:Gh,useFactory:()=>T$1(kn,{self:true})}]),VE("formField")]})}return n})(),ro=(()=>{class n{fieldTree=O0.required({alias:"formRoot"});onSubmit(t){t.preventDefault(),qw(()=>{let i=this.fieldTree();i().structure.fieldManager.submitOptions&&Fn(i);});}static \u0275fac=function(i){return new(i||n)};static \u0275dir=PE({type:n,selectors:[["form","formRoot",""]],hostAttrs:["novalidate",""],hostBindings:function(i,r){i&1&&fh("submit",function(a){return r.onSubmit(a)});},inputs:{fieldTree:[1,"formRoot","fieldTree"]}})}return n})();var xt=class{_box;_destroyed=new oe;_resizeSubject=new oe;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)));}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new S(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e);}}).pipe(on(t=>t.some(i=>i.target===e)),Kl({bufferSize:1,refCount:true}),Wg(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear();}},zn=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=T$1(me$1);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.();}observe(t,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new xt(r)),this._observers.get(r).observe(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=br$1({token:n,factory:n.\u0275fac})}return n})();var qi=["notch"],Ki=["*"],Vn=["iconPrefixContainer"],Bn=["textPrefixContainer"],Hn=["iconSuffixContainer"],jn=["textSuffixContainer"],Ui=["textField"],Gi=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Wi=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function $i(n,e){n&1&&sh(0,"span",21);}function Zi(n,e){if(n&1&&(Di$1(0,"label",20),KD(1,1),ND(2,$i,1,0,"span",21),Xc()),n&2){let t=QD(2);ih("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),oh("for",t._control.disableAutomaticLabeling?null:t._control.id),Jv(2),xD(!t.hideRequiredMarker&&t._control.required?2:-1);}}function Qi(n,e){if(n&1&&ND(0,Zi,3,5,"label",20),n&2){let t=QD();xD(t._hasFloatingLabel()?0:-1);}}function Yi(n,e){n&1&&sh(0,"div",7);}function Xi(n,e){}function Ji(n,e){if(n&1&&Gp(0,Xi,0,0,"ng-template",13),n&2){QD(2);let t=nw(1);ih("ngTemplateOutlet",t);}}function er(n,e){if(n&1&&(Di$1(0,"div",9),ND(1,Ji,1,1,null,13),Xc()),n&2){let t=QD();ih("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),Jv(),xD(t._forceDisplayInfixLabel()?-1:1);}}function tr(n,e){n&1&&(Di$1(0,"div",10,2),KD(2,2),Xc());}function nr(n,e){n&1&&(Di$1(0,"div",11,3),KD(2,3),Xc());}function ir(n,e){}function rr(n,e){if(n&1&&Gp(0,ir,0,0,"ng-template",13),n&2){QD();let t=nw(1);ih("ngTemplateOutlet",t);}}function or(n,e){n&1&&(Di$1(0,"div",14,4),KD(2,4),Xc());}function ar(n,e){n&1&&(Di$1(0,"div",15,5),KD(2,5),Xc());}function sr(n,e){n&1&&sh(0,"div",16);}function lr(n,e){n&1&&(Di$1(0,"div",18),KD(1,6),Xc());}function dr(n,e){if(n&1&&(Di$1(0,"mat-hint",22),Cw(1),Xc()),n&2){let t=QD(2);ih("id",t._hintLabelId),Jv(),Mh(t.hintLabel);}}function cr(n,e){if(n&1&&(Di$1(0,"div",19),ND(1,dr,2,2,"mat-hint",22),KD(2,7),sh(3,"div",23),KD(4,8),Xc()),n&2){let t=QD();Jv(),xD(t.hintLabel?1:-1);}}var wt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=PE({type:n,selectors:[["mat-label"]]})}return n})(),Zn=new x("MatError"),fr=(()=>{class n{id=T$1(de).getId("mat-mdc-error-");static \u0275fac=function(i){return new(i||n)};static \u0275dir=PE({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&uh("id",r.id);},inputs:{id:"id"},features:[Aw([{provide:Zn,useExisting:n}])]})}return n})(),Mt=(()=>{class n{align="start";id=T$1(de).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||n)};static \u0275dir=PE({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(uh("id",r.id),oh("align",null),Dh("mat-mdc-form-field-hint-end",r.align==="end"));},inputs:{align:"align",id:"id"}})}return n})(),ur=new x("MatPrefix");var Qn=new x("MatSuffix"),mr=(()=>{class n{set _isTextSelector(t){this._isText=true;}_isText=false;static \u0275fac=function(i){return new(i||n)};static \u0275dir=PE({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Aw([{provide:Qn,useExisting:n}])]})}return n})(),Yn=new x("FloatingLabelParent"),qn=(()=>{class n{_elementRef=T$1(_r$1);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize();}_floating=false;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe();}_monitorResize=false;_resizeObserver=T$1(zn);_ngZone=T$1(me$1);_parent=T$1(Yn);_resizeSubscription=new V;ngOnDestroy(){this._resizeSubscription.unsubscribe();}getWidth(){return hr(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized());}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize());});}static \u0275fac=function(i){return new(i||n)};static \u0275dir=PE({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&Dh("mdc-floating-label--float-above",r.floating);},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function hr(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(true);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var Kn="mdc-line-ripple--active",Oe="mdc-line-ripple--deactivating",Un=(()=>{class n{_elementRef=T$1(_r$1);_cleanupTransitionEnd;constructor(){let t=T$1(me$1),i=T$1(LI);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd);});}activate(){let t=this._elementRef.nativeElement.classList;t.remove(Oe),t.add(Kn);}deactivate(){this._elementRef.nativeElement.classList.add(Oe);}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Oe);t.propertyName==="opacity"&&r&&i.remove(Kn,Oe);};ngOnDestroy(){this._cleanupTransitionEnd();}static \u0275fac=function(i){return new(i||n)};static \u0275dir=PE({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Gn=(()=>{class n{_elementRef=T$1(_r$1);_ngZone=T$1(me$1);open=false;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(".mdc-floating-label");i?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="");}))):t.classList.add("mdc-notched-outline--no-label");}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width="":i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`;}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`);}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=xE({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&gh(qi,5),i&2){let o;XD(o=ew())&&(r._notch=o.first);}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&Dh("mdc-notched-outline--notched",r.open);},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:Ki,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(YD(),ah(0,"div",1),el(1,"div",2,0),KD(3),tl(),ah(4,"div",3));},encapsulation:2})}return n})(),Ct=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=false;empty=false;shouldLabelFloat=false;required=false;disabled=false;errorState=false;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||n)};static \u0275dir=PE({type:n})}return n})();var Et=new x("MatFormField"),pr=new x("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Wn="fill",gr="auto",$n="fixed",br="translateY(-50%)",_r=(()=>{class n{_elementRef=T$1(_r$1);_changeDetectorRef=T$1(j0);_platform=T$1(M);_idGenerator=T$1(de);_ngZone=T$1(me$1);_defaults=T$1(pr,{optional:true});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=P0("iconPrefixContainer");_textPrefixContainerSignal=P0("textPrefixContainer");_iconSuffixContainerSignal=P0("iconSuffixContainer");_textSuffixContainerSignal=P0("textSuffixContainer");_prefixSuffixContainers=Uw(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=L0(wt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=Xg(t);}_hideRequiredMarker=false;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||gr}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck());}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let i=t||this._defaults?.appearance||Wn;this._appearanceSignal.set(i);}_appearanceSignal=qo(Wn);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||$n}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||$n;}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints();}_hintLabel="";_hasIconPrefix=false;_hasTextPrefix=false;_hasIconSuffix=false;_hasTextSuffix=false;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t;}_destroyed=new oe;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Te$1();constructor(){let t=this._defaults,i=T$1(Ae$1);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),sd(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset();}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");},300);}),this._changeDetectorRef.detectChanges();}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix();}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck();}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete();}getLabelId=Uw(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always");}_initializeControl(t){let i=this._control,r="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck();}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Jl([void 0,void 0]),be(()=>[i.errorState,i.userAriaDescribedBy]),$g(),on(([[o,a],[l,c]])=>o!==l||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Wg(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()));}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText);}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),kg(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck();});}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck();}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck();}),this._validateHints(),this._syncDescribedByIds();}_assertFormFieldControl(){this._control;}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=true,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=false,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t);}_syncOutlineLabelOffset(){$0({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"});}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())});}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return !this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Uw(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():false}_shouldForward(t){let i=this._control?this._control.ngControl:null;return i&&i[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth();}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());}_processHints(){this._validateHints(),this._syncDescribedByIds();}_validateHints(){this._hintChildren;}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id);}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||t;r=t.concat(i.filter(a=>a&&!o.includes(a)));}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t;}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return ["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0,m=this._currentDirection==="rtl"?"-1":"1",V=`${a+l}px`,ti=`calc(${m} * (${V} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ni=`var(--mat-mdc-form-field-label-transform, ${br} translateX(${ti}))`,ii=a+l+c+u;return [ni,ii]}_writeOutlinedLabelStyles(t){if(t!==null){let[i,r]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r);}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=xE({type:n,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(mh(o,r._labelChild,wt,5),hh(o,Ct,5)(o,ur,5)(o,Qn,5)(o,Zn,5)(o,Mt,5)),i&2){tw();let a;XD(a=ew())&&(r._formFieldControl=a.first),XD(a=ew())&&(r._prefixChildren=a),XD(a=ew())&&(r._suffixChildren=a),XD(a=ew())&&(r._errorChildren=a),XD(a=ew())&&(r._hintChildren=a);}},viewQuery:function(i,r){if(i&1&&(yh(r._iconPrefixContainerSignal,Vn,5)(r._textPrefixContainerSignal,Bn,5)(r._iconSuffixContainerSignal,Hn,5)(r._textSuffixContainerSignal,jn,5),gh(Ui,5)(Vn,5)(Bn,5)(Hn,5)(jn,5)(qn,5)(Gn,5)(Un,5)),i&2){tw(4);let o;XD(o=ew())&&(r._textField=o.first),XD(o=ew())&&(r._iconPrefixContainer=o.first),XD(o=ew())&&(r._textPrefixContainer=o.first),XD(o=ew())&&(r._iconSuffixContainer=o.first),XD(o=ew())&&(r._textSuffixContainer=o.first),XD(o=ew())&&(r._floatingLabel=o.first),XD(o=ew())&&(r._notchedOutline=o.first),XD(o=ew())&&(r._lineRipple=o.first);}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&Dh("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"));},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Aw([{provide:Et,useExisting:n},{provide:Yn,useExisting:n}])],ngContentSelectors:Wi,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(YD(Gi),Gp(0,Qi,1,1,"ng-template",null,0,Vw),Di$1(2,"div",6,1),fh("click",function(a){return r._control.onContainerClick(a)}),ND(4,Yi,1,0,"div",7),Di$1(5,"div",8),ND(6,er,2,2,"div",9),ND(7,tr,3,0,"div",10),ND(8,nr,3,0,"div",11),Di$1(9,"div",12),ND(10,rr,1,1,null,13),KD(11),Xc(),ND(12,or,3,0,"div",14),ND(13,ar,3,0,"div",15),Xc(),ND(14,sr,1,0,"div",16),Xc(),Di$1(15,"div",17),ND(16,lr,2,0,"div",18)(17,cr,5,1,"div",19),Xc()),i&2){let o;Jv(2),Dh("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),Jv(2),xD(!r._hasOutline()&&!r._control.disabled?4:-1),Jv(2),xD(r._hasOutline()?6:-1),Jv(),xD(r._hasIconPrefix?7:-1),Jv(),xD(r._hasTextPrefix?8:-1),Jv(2),xD(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),Jv(2),xD(r._hasTextSuffix?12:-1),Jv(),xD(r._hasIconSuffix?13:-1),Jv(),xD(r._hasOutline()?-1:14),Jv(),Dh("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();Jv(),xD((o=a)==="error"?16:o==="hint"?17:-1);}},dependencies:[qn,Gn,lc,Un,Mt],styles:[`.mdc-text-field {
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
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
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
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
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
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
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

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
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
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
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
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
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

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
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
  --mat-mdc-form-field-label-offset-x: -16px;
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
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
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
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
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
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
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
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
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
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
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
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
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
`],encapsulation:2})}return n})();var xr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=xE({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return n})(),wr={passive:true},Xn=(()=>{class n{_platform=T$1(M);_ngZone=T$1(me$1);_renderer=T$1(Dr).createRenderer(null,null);_styleLoader=T$1(ee$1);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return It;this._styleLoader.load(xr);let i=Q$1(t),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new oe,a="cdk-text-field-autofilled",l=u=>{u.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:true}))):u.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:false})));},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",l,wr)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(t){let i=Q$1(t),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i));}ngOnDestroy(){this._monitoredElements.forEach((t,i)=>this.stopMonitoring(i));}static \u0275fac=function(i){return new(i||n)};static \u0275prov=br$1({token:n,factory:n.\u0275fac})}return n})();var Jn=new x("MAT_INPUT_VALUE_ACCESSOR");var ei=(()=>{class n{isErrorState(t,i){return !!(t&&t.invalid&&(t.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=br$1({token:n,factory:n.\u0275fac})}return n})();var Pe=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=false;matcher;constructor(e,t,i,r,o){this._defaultMatcher=e,this.ngControl=t,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o;}updateErrorState(){let e=this.errorState,t=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,t)??false;o!==e&&(this.errorState=o,this._stateChanges.next());}};var Mr=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Cr=new x("MAT_INPUT_CONFIG"),ga=(()=>{class n{_elementRef=T$1(_r$1);_platform=T$1(M);ngControl=T$1(ys,{optional:true,self:true});_autofillMonitor=T$1(Xn);_ngZone=T$1(me$1);_formField=T$1(Et,{optional:true});_renderer=T$1(LI);_uid=T$1(de).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=T$1(Cr,{optional:true});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=false;_isNativeSelect=false;_isTextarea=false;_isInFormField=false;focused=false;stateChanges=new oe;controlType="mat-input";autofilled=false;get disabled(){return this._disabled}set disabled(t){this._disabled=Xg(t),this.focused&&(this.focused=false,this.stateChanges.next());}_disabled=false;get id(){return this._id}set id(t){this._id=t||this._uid;}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ei$1.required)??false}set required(t){this._required=Xg(t);}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Tb().has(this._type)&&(this._elementRef.nativeElement.type=this._type);}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t;}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next());}get readonly(){return this._readonly}set readonly(t){this._readonly=Xg(t);}_readonly=false;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t;}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>Tb().has(t));constructor(){let t=T$1(Bc,{optional:true}),i=T$1(Qc,{optional:true}),r=T$1(ei),o=T$1(Jn,{optional:true,self:true}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();o?ha(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener);}),this._errorStateTracker=new Pe(r,this.ngControl,i,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||false,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&sd(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next();});}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next();});}ngOnChanges(){this.stateChanges.next();}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.();}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder();}focus(t){this._elementRef.nativeElement.focus(t);}updateErrorState(){this._errorStateTracker.updateErrorState();}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0);}this.focused=t,this.stateChanges.next();}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next());}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=t,t?i.setAttribute("placeholder",t):i.removeAttribute("placeholder");}}_getPlaceholder(){return this.placeholder||null}_validateType(){Mr.indexOf(this._type)>-1;}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return !this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,i=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let i=this._elementRef.nativeElement;t.length?i.setAttribute("aria-describedby",t.join(" ")):i.removeAttribute("aria-describedby");}onContainerClick(){this.focused||this.focus();}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let i=t.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0));};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=PE({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&fh("focus",function(){return r._focusChanged(true)})("blur",function(){return r._focusChanged(false)})("input",function(){return r._onInput()}),i&2&&(uh("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),oh("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),Dh("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()));},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",H0]},exportAs:["matInput"],features:[Aw([{provide:Ct,useExisting:n}]),Jm]})}return n})();export{Ct as C,Et as E,Mi as M,Pe as P,_r as _,ei as e,fr as f,ga as g,io as i,mr as m,no as n,ro as r,wt as w};//# sourceMappingURL=chunk-C4cV2Pxg.js.map
