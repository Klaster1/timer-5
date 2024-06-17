import{m as U}from"./chunk-3ZE7BWPT.js";import{d as oe,e as ae,ha as N,ia as R,k as z,ka as V,ma as $,sa as B}from"./chunk-XDEH7EXF.js";var X=oe((ce,O)=>{"use strict";(function(u,m,i){if(!u)return;for(var n={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},r={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},g={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},v={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},b,k=1;k<20;++k)n[111+k]="f"+k;for(k=0;k<=9;++k)n[k+96]=k.toString();function w(e,t,o){if(e.addEventListener){e.addEventListener(t,o,!1);return}e.attachEvent("on"+t,o)}function K(e){if(e.type=="keypress"){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return n[e.which]?n[e.which]:r[e.which]?r[e.which]:String.fromCharCode(e.which).toLowerCase()}function G(e,t){return e.sort().join(",")===t.sort().join(",")}function J(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}function Q(e){if(e.preventDefault){e.preventDefault();return}e.returnValue=!1}function W(e){if(e.stopPropagation){e.stopPropagation();return}e.cancelBubble=!0}function A(e){return e=="shift"||e=="ctrl"||e=="alt"||e=="meta"}function Z(){if(!b){b={};for(var e in n)e>95&&e<112||n.hasOwnProperty(e)&&(b[n[e]]=e)}return b}function ee(e,t,o){return o||(o=Z()[e]?"keydown":"keypress"),o=="keypress"&&t.length&&(o="keydown"),o}function te(e){return e==="+"?["+"]:(e=e.replace(/\+{2}/g,"+plus"),e.split("+"))}function F(e,t){var o,h,x,S=[];for(o=te(e),x=0;x<o.length;++x)h=o[x],v[h]&&(h=v[h]),t&&t!="keypress"&&g[h]&&(h=g[h],S.push("shift")),A(h)&&S.push(h);return t=ee(h,S,t),{key:h,modifiers:S,action:t}}function j(e,t){return e===null||e===m?!1:e===t?!0:j(e.parentNode,t)}function d(e){var t=this;if(e=e||m,!(t instanceof d))return new d(e);t.target=e,t._callbacks={},t._directMap={};var o={},h,x=!1,S=!1,H=!1;function T(s){s=s||{};var f=!1,l;for(l in o){if(s[l]){f=!0;continue}o[l]=0}f||(H=!1)}function L(s,f,l,a,p,_){var c,y,M=[],C=l.type;if(!t._callbacks[s])return[];for(C=="keyup"&&A(s)&&(f=[s]),c=0;c<t._callbacks[s].length;++c)if(y=t._callbacks[s][c],!(!a&&y.seq&&o[y.seq]!=y.level)&&C==y.action&&(C=="keypress"&&!l.metaKey&&!l.ctrlKey||G(f,y.modifiers))){var se=!a&&y.combo==p,re=a&&y.seq==a&&y.level==_;(se||re)&&t._callbacks[s].splice(c,1),M.push(y)}return M}function I(s,f,l,a){t.stopCallback(f,f.target||f.srcElement,l,a)||s(f,l)===!1&&(Q(f),W(f))}t._handleKey=function(s,f,l){var a=L(s,f,l),p,_={},c=0,y=!1;for(p=0;p<a.length;++p)a[p].seq&&(c=Math.max(c,a[p].level));for(p=0;p<a.length;++p){if(a[p].seq){if(a[p].level!=c)continue;y=!0,_[a[p].seq]=1,I(a[p].callback,l,a[p].combo,a[p].seq);continue}y||I(a[p].callback,l,a[p].combo)}var M=l.type=="keypress"&&S;l.type==H&&!A(s)&&!M&&T(_),S=y&&l.type=="keydown"};function D(s){typeof s.which!="number"&&(s.which=s.keyCode);var f=K(s);if(f){if(s.type=="keyup"&&x===f){x=!1;return}t.handleKey(f,J(s),s)}}function ie(){clearTimeout(h),h=setTimeout(T,1e3)}function ne(s,f,l,a){o[s]=0;function p(C){return function(){H=C,++o[s],ie()}}function _(C){I(l,C,s),a!=="keyup"&&(x=K(C)),setTimeout(T,10)}for(var c=0;c<f.length;++c){var y=c+1===f.length,M=y?_:p(a||F(f[c+1]).action);q(f[c],M,a,s,c)}}function q(s,f,l,a,p){t._directMap[s+":"+l]=f,s=s.replace(/\s+/g," ");var _=s.split(" "),c;if(_.length>1){ne(s,_,f,l);return}c=F(s,l),t._callbacks[c.key]=t._callbacks[c.key]||[],L(c.key,c.modifiers,{type:c.action},a,s,p),t._callbacks[c.key][a?"unshift":"push"]({callback:f,modifiers:c.modifiers,action:c.action,seq:a,level:p,combo:s})}t._bindMultiple=function(s,f,l){for(var a=0;a<s.length;++a)q(s[a],f,l)},w(e,"keypress",D),w(e,"keydown",D),w(e,"keyup",D)}d.prototype.bind=function(e,t,o){var h=this;return e=e instanceof Array?e:[e],h._bindMultiple.call(h,e,t,o),h},d.prototype.unbind=function(e,t){var o=this;return o.bind.call(o,e,function(){},t)},d.prototype.trigger=function(e,t){var o=this;return o._directMap[e+":"+t]&&o._directMap[e+":"+t]({},e),o},d.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},d.prototype.stopCallback=function(e,t){var o=this;if((" "+t.className+" ").indexOf(" mousetrap ")>-1||j(t,o.target))return!1;if("composedPath"in e&&typeof e.composedPath=="function"){var h=e.composedPath()[0];h!==e.target&&(t=h)}return t.tagName=="INPUT"||t.tagName=="SELECT"||t.tagName=="TEXTAREA"||t.isContentEditable},d.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},d.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);b=null},d.init=function(){var e=d(m);for(var t in e)t.charAt(0)!=="_"&&(d[t]=function(o){return function(){return e[o].apply(e,arguments)}}(t))},d.init(),u.Mousetrap=d,typeof O<"u"&&O.exports&&(O.exports=d),typeof define=="function"&&define.amd&&define(function(){return d})})(typeof window<"u"?window:null,typeof window<"u"?document:null)});var P=ae(X(),1);var E=class u{static symbolize(m){let i={command:"\u2318",shift:"\u21E7",left:"\u2190",right:"\u2192",up:"\u2191",down:"\u2193",return:"\u23CE",backspace:"\u232B"},n=m.split("+");for(let r=0;r<n.length;r++)n[r]==="mod"&&(window.navigator&&window.navigator.platform.indexOf("Mac")>=0?n[r]="command":n[r]="ctrl"),n[r]=i[n[r]]||n[r];return n.join(" + ")}constructor(m,i,n,r,g,v){this.combo=m,this.callback=i,this.allowIn=n,this.description=r,this.action=g,this.persistent=v,this.combo=Array.isArray(m)?m:[m],this.allowIn=n||[],this.description=r||""}get formatted(){if(!this.formattedHotkey){let m=[...this.combo];for(let i=0;i<m.length;i++)m[i]=u.symbolize(m[i]);this.formattedHotkey=m}return this.formattedHotkey}},Y=new V("HotkeyOptions"),fe=(()=>{class u{constructor(i){this.options=i,this.hotkeys=[],this.pausedHotkeys=[],this.cheatSheetToggle=new z,this.preventIn=["INPUT","SELECT","TEXTAREA"],P.prototype.stopCallback=(n,r,g,v)=>(" "+r.className+" ").indexOf(" mousetrap ")>-1?!1:r.contentEditable&&r.contentEditable==="true",this.mousetrap=new P.default,this.initCheatSheet()}initCheatSheet(){this.options.disableCheatSheet||this.add(new E(this.options.cheatSheetHotkey||"?",function(i){this.cheatSheetToggle.next()}.bind(this),[],this.options.cheatSheetDescription||"Show / hide this help menu")),this.options.cheatSheetCloseEsc&&this.add(new E("esc",function(i){this.cheatSheetToggle.next(!1)}.bind(this),["HOTKEYS-CHEATSHEET"],this.options.cheatSheetCloseEscDescription||"Hide this help menu"))}add(i,n){if(Array.isArray(i)){let r=[];for(let g of i)r.push(this.add(g,n));return r}return this.remove(i),this.hotkeys.push(i),this.mousetrap.bind(i.combo,(r,g)=>{let v=!0;if(r){let b=r.target||r.srcElement,k=b.nodeName.toUpperCase();(" "+b.className+" ").indexOf(" mousetrap ")>-1?v=!0:this.preventIn.indexOf(k)>-1&&i.allowIn.map(w=>w.toUpperCase()).indexOf(k)===-1&&(v=!1)}if(v)return i.callback.apply(this,[r,g])},n),i}remove(i,n){let r=[];if(!i){for(let v of this.hotkeys)r.push(this.remove(v,n));return r}if(Array.isArray(i)){for(let v of i)r.push(this.remove(v));return r}let g=this.findHotkey(i);return g>-1?(this.hotkeys.splice(g,1),this.mousetrap.unbind(i.combo,n),i):null}get(i){if(!i)return this.hotkeys;if(Array.isArray(i)){let n=[];for(let r of i)n.push(this.get(r));return n}for(let n of this.hotkeys)if(n.combo.indexOf(i)>-1)return n;return null}pause(i){if(!i)return this.pause(this.hotkeys);if(Array.isArray(i)){let n=[];for(let r of i.slice())n.push(this.pause(r));return n}return this.remove(i),this.pausedHotkeys.push(i),i}unpause(i){if(!i)return this.unpause(this.pausedHotkeys);if(Array.isArray(i)){let r=[];for(let g of i.slice())r.push(this.unpause(g));return r}let n=this.pausedHotkeys.indexOf(i);return n>-1?(this.add(i),this.pausedHotkeys.splice(n,1)):null}reset(){this.mousetrap.reset(),this.hotkeys=[],this.pausedHotkeys=[],this.initCheatSheet()}findHotkey(i){return this.hotkeys.indexOf(i)}static{this.\u0275fac=function(n){return new(n||u)($(Y))}}static{this.\u0275prov=N({token:u,factory:u.\u0275fac,providedIn:"root"})}}return u})();var je=(()=>{class u{static forRoot(i={}){return{ngModule:u,providers:[fe,{provide:Y,useValue:i}]}}static{this.\u0275fac=function(n){return new(n||u)}}static{this.\u0275mod=B({type:u})}static{this.\u0275inj=R({imports:[U]})}}return u})();export{E as a,fe as b,je as c};
//# sourceMappingURL=chunk-6QGYDCWD.js.map
