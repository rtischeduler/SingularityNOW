import{b as hi}from"./chunk-GWA7SPVO.js";import{a as fi}from"./chunk-RQ3DLUZV.js";import{a as Yt,d as si,e as li,h as ui}from"./chunk-VDJBERPR.js";import{$ as ti,A as fe,E as he,Ra as Zt,V as ht,W as Ne,_ as ei,aa as ni,ba as ii,ca as ri,cb as Xt,da as oi,ea as ai,gb as ci,hb as mi,j as Me,m as Kt,o as ut,v as $n,y as ft}from"./chunk-TS2MXJ5K.js";import{F as Nr,H as Er,I as Ar,X as Dr,Y as Ir,d as pt,e as gt,f as di,ia as Fr,ra as Z,sa as bt}from"./chunk-FNMWZ6R2.js";import{$ as Vn,$a as p,$b as Gt,Aa as Tn,Ab as le,Ba as $,Bb as Ut,E as An,Ea as l,Ga as zt,I as Dn,Ia as X,Ib as b,Ja as q,K as In,Ka as m,M as lt,Na as ct,Nb as ce,Ob as me,P as Se,Pa as R,Q as w,Qa as mt,Qb as Un,R as Le,Rb as te,S as G,Sb as K,T as C,Ta as ee,Tb as Gn,U as de,Ua as _,V as c,Va as x,Vb as He,Wb as qn,Xb as ue,Y as Fn,Z as Rn,Za as Q,Zb as Y,_ as dt,_a as h,_b as Wn,a as Ce,aa as re,ab as E,b as Sn,bb as On,bc as qt,c as ie,ca as Lt,cb as Pn,cc as Kn,da as S,db as Ht,ea as N,g as wn,ga as J,h as Mn,hb as Ln,ib as _e,jb as D,kc as Yn,l as at,la as be,lb as z,ma as we,mb as xe,nb as H,nc as Wt,oa as ae,ob as jn,pa as ve,pb as je,q as Nn,qa as se,qb as V,ra as g,rb as T,sb as zn,sc as Zn,t as En,ta as jt,tb as Hn,u as st,ub as Bt,uc as Xn,vb as ze,vc as Qn,wc as Jn,xb as I,ya as f,yb as Bn,zb as W}from"./chunk-ARDZYBBY.js";import{a as O,b as U,d as Mr,e as ot}from"./chunk-ACKM7FAG.js";var Ze=Mr((sd,pr)=>{var Vo=Dr(),To=Ir(),Oo=Fr(),Po=Er(),Lo=Nr(),jo=Ar(),zo=Object.prototype,Ho=zo.hasOwnProperty,Bo=Oo(function(i,n){if(Lo(n)||Po(n)){To(n,jo(n),i);return}for(var e in n)Ho.call(n,e)&&Vo(i,e,n[e])});pr.exports=Bo});var ki=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(l($),l(g))};static \u0275dir=m({type:i})}return i})(),Rr=(()=>{class i extends ki{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ve(i)))(r||i)}})();static \u0275dir=m({type:i,features:[R]})}return i})(),P=new C("");var Vr={provide:P,useExisting:w(()=>Ci),multi:!0};function Tr(){let i=qt()?qt().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Or=new C(""),Ci=(()=>{class i extends ki{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Tr())}writeValue(e){let t=e==null?"":e;this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(l($),l(g),l(Or,8))};static \u0275dir=m({type:i,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&D("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[b([Vr]),R]})}return i})();function tn(i){return i==null||nn(i)===0}function nn(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var ne=new C(""),ke=new C(""),Pr=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,oe=class{static min(n){return Lr(n)}static max(n){return jr(n)}static required(n){return Si(n)}static requiredTrue(n){return zr(n)}static email(n){return Hr(n)}static minLength(n){return Br(n)}static maxLength(n){return wi(n)}static pattern(n){return Mi(n)}static nullValidator(n){return _t()}static compose(n){return Fi(n)}static composeAsync(n){return Ri(n)}};function Lr(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null}}function jr(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null}}function Si(i){return tn(i.value)?{required:!0}:null}function zr(i){return i.value===!0?null:{required:!0}}function Hr(i){return tn(i.value)||Pr.test(i.value)?null:{email:!0}}function Br(i){return n=>{var t,r;let e=(r=(t=n.value)==null?void 0:t.length)!=null?r:nn(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function wi(i){return n=>{var t,r;let e=(r=(t=n.value)==null?void 0:t.length)!=null?r:nn(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function Mi(i){if(!i)return _t;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(tn(t.value))return null;let r=t.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function _t(i){return null}function Ni(i){return i!=null}function Ei(i){return zt(i)?Mn(i):i}function Ai(i){let n={};return i.forEach(e=>{n=e!=null?O(O({},n),e):n}),Object.keys(n).length===0?null:n}function Di(i,n){return n.map(e=>e(i))}function Ur(i){return!i.validate}function Ii(i){return i.map(n=>Ur(n)?n:e=>n.validate(e))}function Fi(i){if(!i)return null;let n=i.filter(Ni);return n.length==0?null:function(e){return Ai(Di(e,n))}}function rn(i){return i!=null?Fi(Ii(i)):null}function Ri(i){if(!i)return null;let n=i.filter(Ni);return n.length==0?null:function(e){let t=Di(e,n).map(Ei);return Nn(t).pipe(at(Ai))}}function on(i){return i!=null?Ri(Ii(i)):null}function pi(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function Vi(i){return i._rawValidators}function Ti(i){return i._rawAsyncValidators}function Qt(i){return i?Array.isArray(i)?i:[i]:[]}function xt(i,n){return Array.isArray(i)?i.includes(n):i===n}function gi(i,n){let e=Qt(n);return Qt(i).forEach(r=>{xt(e,r)||e.push(r)}),e}function bi(i,n){return Qt(n).filter(e=>!xt(i,e))}var yt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=rn(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=on(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){var e;(e=this.control)==null||e.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},B=class extends yt{name;get formDirective(){return null}get path(){return null}};var Be="VALID",vt="INVALID",Ee="PENDING",Ue="DISABLED",pe=class{},kt=class extends pe{value;source;constructor(n,e){super(),this.value=n,this.source=e}},qe=class extends pe{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},We=class extends pe{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Ae=class extends pe{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Ct=class extends pe{source;constructor(n){super(),this.source=n}},ye=class extends pe{source;constructor(n){super(),this.source=n}};function an(i){return(At(i)?i.validators:i)||null}function Gr(i){return Array.isArray(i)?rn(i):i||null}function sn(i,n){return(At(n)?n.asyncValidators:i)||null}function qr(i){return Array.isArray(i)?on(i):i||null}function At(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Oi(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new Se(1e3,"");if(!Li(t,e))throw new Se(1001,"")}function Pi(i,n,e){i._forEachChild((t,r)=>{if(e[r]===void 0)throw new Se(-1002,"")})}var De=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=J(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return K(this.statusReactive)}set status(n){K(()=>this.statusReactive.set(n))}_status=te(()=>this.statusReactive());statusReactive=J(void 0);get valid(){return this.status===Be}get invalid(){return this.status===vt}get pending(){return this.status===Ee}get disabled(){return this.status===Ue}get enabled(){return this.status!==Ue}errors;get pristine(){return K(this.pristineReactive)}set pristine(n){K(()=>this.pristineReactive.set(n))}_pristine=te(()=>this.pristineReactive());pristineReactive=J(!0);get dirty(){return!this.pristine}get touched(){return K(this.touchedReactive)}set touched(n){K(()=>this.touchedReactive.set(n))}_touched=te(()=>this.touchedReactive());touchedReactive=J(!1);get untouched(){return!this.touched}_events=new ie;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(gi(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(gi(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(bi(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(bi(n,this._rawAsyncValidators))}hasValidator(n){return xt(this._rawValidators,n)}hasAsyncValidator(n){return xt(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){var r,o;let e=this.touched===!1;this.touched=!0;let t=(r=n.sourceControl)!=null?r:this;n.onlySelf||(o=this._parent)==null||o.markAsTouched(U(O({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new We(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){var r,o;let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=(r=n.sourceControl)!=null?r:this;this._forEachChild(a=>{a.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||(o=this._parent)==null||o._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new We(!1,t))}markAsDirty(n={}){var r,o;let e=this.pristine===!0;this.pristine=!1;let t=(r=n.sourceControl)!=null?r:this;n.onlySelf||(o=this._parent)==null||o.markAsDirty(U(O({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new qe(!1,t))}markAsPristine(n={}){var r,o;let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=(r=n.sourceControl)!=null?r:this;this._forEachChild(a=>{a.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||(o=this._parent)==null||o._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new qe(!0,t))}markAsPending(n={}){var t,r;this.status=Ee;let e=(t=n.sourceControl)!=null?t:this;n.emitEvent!==!1&&(this._events.next(new Ae(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||(r=this._parent)==null||r.markAsPending(U(O({},n),{sourceControl:e}))}disable(n={}){var r;let e=this._parentMarkedDirty(n.onlySelf);this.status=Ue,this.errors=null,this._forEachChild(o=>{o.disable(U(O({},n),{onlySelf:!0}))}),this._updateValue();let t=(r=n.sourceControl)!=null?r:this;n.emitEvent!==!1&&(this._events.next(new kt(this.value,t)),this._events.next(new Ae(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(U(O({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Be,this._forEachChild(t=>{t.enable(U(O({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(U(O({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){var t,r,o;n.onlySelf||((t=this._parent)==null||t.updateValueAndValidity(n),n.skipPristineCheck||(r=this._parent)==null||r._updatePristine({},e),(o=this._parent)==null||o._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){var t,r;if(this._setInitialStatus(),this._updateValue(),this.enabled){let o=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Be||this.status===Ee)&&this._runAsyncValidator(o,n.emitEvent)}let e=(t=n.sourceControl)!=null?t:this;n.emitEvent!==!1&&(this._events.next(new kt(this.value,e)),this._events.next(new Ae(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||(r=this._parent)==null||r.updateValueAndValidity(U(O({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ue:Be}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ee,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=Ei(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){var n,e,t;if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let r=(t=((n=this._hasOwnPendingAsyncValidator)==null?void 0:n.emitEvent)||((e=this._hasOwnPendingAsyncValidator)==null?void 0:e.shouldHaveEmitted))!=null?t:!1;return this._hasOwnPendingAsyncValidator=null,r}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(n,e){let t=e?this.get(e):this;return t!=null&&t.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new Ae(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new S,this.statusChanges=new S}_calculateStatus(){return this._allControlsDisabled()?Ue:this.errors?vt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ee)?Ee:this._anyControlsHaveStatus(vt)?vt:Be}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){var o;let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,n.onlySelf||(o=this._parent)==null||o._updatePristine(n,e),r&&this._events.next(new qe(this.pristine,e))}_updateTouched(n={},e){var t;this.touched=this._anyControlsTouched(),this._events.next(new We(this.touched,e)),n.onlySelf||(t=this._parent)==null||t._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){At(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){var e;return!n&&!!((e=this._parent)!=null&&e.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Gr(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=qr(this._rawAsyncValidators)}_updateHasRequiredValidator(){K(()=>this._hasRequired.set(this.hasValidator(oe.required)))}};function Li(i,n){return Object.hasOwn(i,n)}function Wr(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function Kr(i,n,e,t){switch(e){case"name":i.setAttribute(n,e,t);break;case"disabled":case"readonly":case"required":t?i.setAttribute(n,e,""):i.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?i.setAttribute(n,e,t.toString()):i.removeAttribute(n,e);break}}var Jt=class{kind;context;control;message;constructor({kind:n,context:e,control:t}){this.kind=n,this.context=e,this.control=t}};function Yr(i){return typeof i=="number"?i:parseInt(i,10)}var ln=(()=>{class i{_validator=_t;_onChange;_enabled;ngOnChanges(e){var t;if(this.inputName in e){let r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):_t,(t=this._onChange)==null||t.call(this)}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=m({type:i,features:[ae]})}return i})();var Zr={provide:ne,useExisting:w(()=>ji),multi:!0};var ji=(()=>{class i extends ln{required;inputName="required";normalizeInput=Y;createValidator=e=>Si;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ve(i)))(r||i)}})();static \u0275dir=m({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){t&2&&ee("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[b([Zr]),R]})}return i})();var Xr={provide:ne,useExisting:w(()=>Qr),multi:!0},Qr=(()=>{class i extends ln{maxlength;inputName="maxlength";normalizeInput=e=>Yr(e);createValidator=e=>wi(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=ve(i)))(r||i)}})();static \u0275dir=m({type:i,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,r){t&2&&ee("maxlength",r._enabled?r.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[b([Xr]),R]})}return i})(),Jr={provide:ne,useExisting:w(()=>$r),multi:!0},$r=(()=>{class i extends ln{pattern;inputName="pattern";normalizeInput=e=>e;createValidator=e=>Mi(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=ve(i)))(r||i)}})();static \u0275dir=m({type:i,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(t,r){t&2&&ee("pattern",r._enabled?r.pattern:null)},inputs:{pattern:"pattern"},standalone:!1,features:[b([Jr]),R]})}return i})(),eo=new C(""),Fe=new C("",{factory:()=>Dt}),Dt="always";function It(i,n){return[...n.path,i]}function St(i,n,e=Dt){var t,r;dn(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&((r=(t=n.valueAccessor).setDisabledState)==null||r.call(t,i.disabled)),no(i,n),ro(i,n),io(i,n),to(i,n)}function wt(i,n,e=!0){var r,o;let t=()=>{};(r=n==null?void 0:n.valueAccessor)==null||r.registerOnChange(t),(o=n==null?void 0:n.valueAccessor)==null||o.registerOnTouched(t),Nt(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Mt(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function to(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function dn(i,n){let e=Vi(i);n.validator!==null?i.setValidators(pi(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=Ti(i);n.asyncValidator!==null?i.setAsyncValidators(pi(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();Mt(n._rawValidators,r),Mt(n._rawAsyncValidators,r)}function Nt(i,n){let e=!1;if(i!==null){if(n.validator!==null){let r=Vi(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,i.setValidators(o))}}if(n.asyncValidator!==null){let r=Ti(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,i.setAsyncValidators(o))}}}let t=()=>{};return Mt(n._rawValidators,t),Mt(n._rawAsyncValidators,t),e}function no(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&zi(i,n)})}function io(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&zi(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function zi(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ro(i,n){let e=(t,r)=>{n.valueAccessor.writeValue(t),r&&n.viewToModelUpdate(t)};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Hi(i,n){i==null,dn(i,n)}function oo(i,n){return Nt(i,n)}function cn(i,n){if(!Object.hasOwn(i,"model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function ao(i){return Object.getPrototypeOf(i.constructor)===Rr}function Bi(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function so(i,n){if(!n)return null;Array.isArray(n);let e,t,r;return n.forEach(o=>{o.constructor===Ci?e=o:ao(o)?t=o:r=o}),r||t||e||null}function lo(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}var mn={provide:eo,useFactory:()=>{let i=c(M,{self:!0});return{setParseErrors:n=>{i.setParseErrorSource(n)},set onReset(n){i.onReset=n}}}},M=class extends yt{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){var e,t;this.userOnReset=n,(e=this.resetSubscription)==null||e.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(r=>{var o;r instanceof ye&&this.control&&((o=this.userOnReset)==null||o.call(this,this.control.value))}),(t=this.subscription)==null||t.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){var n;return(n=this._selectedValueAccessor)!=null?n:this._selectedValueAccessor=so(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,t){var r,o;super(),this.injector=n,this.renderer=e,this.rawValueAccessors=t,(o=(r=this.injector)==null?void 0:r.get(Lt))==null||o.onDestroy(()=>{var a;this.removeParseErrorsValidator(this.control),(a=this.subscription)==null||a.unsubscribe()})}setupCustomControl(){var t,r,o;(t=this.subscription)==null||t.unsubscribe();let n=(r=this.injector)==null?void 0:r.get(ue);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new Ce,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),(o=this.resetSubscription)==null||o.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(a=>{var d;a instanceof ye&&this.control&&((d=this.userOnReset)==null||d.call(this,this.control.value))}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){var r,o;!((o=(r=n.nativeElement).hasAttribute)!=null&&o.call(r,"ngNoCva"))&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(a=>{var d,v;(d=this.control)==null||d.markAsDirty(),(v=this.control)==null||v.setValue(a,{emitModelToViewChange:!1}),this.viewToModelUpdate(a)}),n.listenToCustomControlOutput("touch",()=>{var a;(a=this.control)==null||a.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Wr(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(a=>a instanceof ji))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let t=this.control,r=this.customControlBindings;Object.is(r.value,t.value)||(r.value=t.value,n.setCustomControlModelInput(t.value)),this.bindControlProperty(n,r,"touched",t.touched),this.bindControlProperty(n,r,"dirty",t.dirty),this.bindControlProperty(n,r,"valid",t.valid),this.bindControlProperty(n,r,"invalid",t.invalid),this.bindControlProperty(n,r,"pending",t.pending),this.bindControlProperty(n,r,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(n,r,"required",this.isRequired);let o=t.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);n.setInputOnDirectives("errors",a)}}get isRequired(){var n,e,t;return(t=((n=this.requiredValidatorViaDi)==null?void 0:n._enabled)||((e=this.control)==null?void 0:e._hasRequired()))!=null?t:!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,t,r){if(e[t]===r)return;e[t]=r;let o=n.setInputOnDirectives(t,r);this.isNativeFormElement&&!o&&(t==="disabled"||t==="required")&&this.renderer&&Kr(this.renderer,n.nativeElement,t,r)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([t,r])=>new Jt({context:r,kind:t,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,t=te(()=>{let r=n();return r.length===0?null:r.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),be(()=>{var r;e=t(),(r=this.control)==null||r.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n==null||n.removeValidators(this.parseErrorsValidator),n==null||n.updateValueAndValidity({emitEvent:!1}))}},Et=class{_cd;constructor(n){this._cd=n}get isTouched(){var n,e,t,r,o;return(t=(e=(n=this._cd)==null?void 0:n.control)==null?void 0:e._touched)==null||t.call(e),!!((o=(r=this._cd)==null?void 0:r.control)!=null&&o.touched)}get isUntouched(){var n,e;return!!((e=(n=this._cd)==null?void 0:n.control)!=null&&e.untouched)}get isPristine(){var n,e,t,r,o;return(t=(e=(n=this._cd)==null?void 0:n.control)==null?void 0:e._pristine)==null||t.call(e),!!((o=(r=this._cd)==null?void 0:r.control)!=null&&o.pristine)}get isDirty(){var n,e;return!!((e=(n=this._cd)==null?void 0:n.control)!=null&&e.dirty)}get isValid(){var n,e,t,r,o;return(t=(e=(n=this._cd)==null?void 0:n.control)==null?void 0:e._status)==null||t.call(e),!!((o=(r=this._cd)==null?void 0:r.control)!=null&&o.valid)}get isInvalid(){var n,e;return!!((e=(n=this._cd)==null?void 0:n.control)!=null&&e.invalid)}get isPending(){var n,e;return!!((e=(n=this._cd)==null?void 0:n.control)!=null&&e.pending)}get isSubmitted(){var n,e,t;return(e=(n=this._cd)==null?void 0:n._submitted)==null||e.call(n),!!((t=this._cd)!=null&&t.submitted)}};var ka=(()=>{class i extends Et{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(l(M,2))};static \u0275dir=m({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&I("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[R]})}return i})(),Ca=(()=>{class i extends Et{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(l(B,10))};static \u0275dir=m({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&I("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[R]})}return i})(),Ie=class extends De{constructor(n,e,t){super(an(e),sn(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let t=this._find(n);return t||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let t=this._find(n);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){var e;return((e=this._find(n))==null?void 0:e.enabled)===!0}setValue(n,e={}){K(()=>{Pi(this,!0,n),Object.keys(n).forEach(t=>{Oi(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let r=this._find(t);r&&r.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,r)=>{t.reset(n?n[r]:null,U(O({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),(e==null?void 0:e.emitEvent)!==!1&&this._events.next(new ye(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return Li(this.controls,n)?this.controls[n]:null}};var $t=class extends Ie{};var co={provide:B,useExisting:w(()=>un)},Ge=Promise.resolve(),un=(()=>{class i extends B{callSetDisabledState;get submitted(){return K(this.submittedReactive)}_submitted=te(()=>this.submittedReactive());submittedReactive=J(!1);_directives=new Set;form;ngSubmit=new S;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Ie({},rn(e),on(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ge.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ge.then(()=>{let t=this._findContainer(e.path);t==null||t.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ge.then(()=>{let t=this._findContainer(e.path),r=new Ie({});Hi(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ge.then(()=>{var r;let t=this._findContainer(e.path);(r=t==null?void 0:t.removeControl)==null||r.call(t,e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Ge.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){var t;return this.submittedReactive.set(!0),Bi(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ct(this.control)),((t=e==null?void 0:e.target)==null?void 0:t.method)==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(l(ne,10),l(ke,10),l(Fe,8))};static \u0275dir=m({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&D("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[b([co]),R]})}return i})();function vi(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}function _i(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Ke=class extends De{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(an(e),sn(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),At(e)&&(e.nonNullable||e.initialValueIsDefault)&&(_i(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){K(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,(e==null?void 0:e.emitEvent)!==!1&&this._events.next(new ye(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){vi(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){vi(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){_i(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var mo=i=>i instanceof Ke,uo=(()=>{class i extends B{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){var e;(e=this.formDirective)==null||e.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return It(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ve(i)))(r||i)}})();static \u0275dir=m({type:i,standalone:!1,features:[R]})}return i})();var Ui=(()=>{class i extends B{callSetDisabledState;get submitted(){return K(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=te(()=>this._submittedReactive());_submittedReactive=J(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new Se(1052,!1);Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Nt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){wt(e.control||null,e,!1),lo(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){var t;return this.submitted=!0,Bi(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ct(this.control)),((t=e==null?void 0:e.target)==null?void 0:t.method)==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(wt(t||null,e),mo(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Hi(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){var r;let t=(r=this.form)==null?void 0:r.get(e.path);t&&oo(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){var e;this.form._registerOnCollectionChange(this._onCollectionChange),(e=this._oldForm)==null||e._registerOnCollectionChange(()=>{})}_updateValidators(){dn(this.form,this),this._oldForm&&Nt(this._oldForm,this)}static \u0275fac=function(t){return new(t||i)(l(ne,10),l(ke,10),l(Fe,8))};static \u0275dir=m({type:i,features:[R,ae]})}return i})(),fo={provide:B,useExisting:w(()=>fn)},fn=(()=>{class i extends Ui{form=null;ngSubmit=new S;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ve(i)))(r||i)}})();static \u0275dir=m({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&D("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[b([fo]),R]})}return i})(),ho={provide:M,useExisting:w(()=>po)},xi=Promise.resolve(),po=(()=>{class i extends M{_changeDetectorRef;callSetDisabledState;control=new Ke;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name="";isDisabled;model;options;update=new S;constructor(e,t,r,o,a,d,v,F){super(v,F,o),this._changeDetectorRef=a,this.callSetDisabledState=d,this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let o=e.name.previousValue;this.formDirective.removeControl({name:o,path:this._getPath(o)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),cn(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){var e;(e=this.formDirective)==null||e.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){var e;this.isCustomControlBased?this.setupCustomControl():((e=this.valueAccessor)!=null||(this.valueAccessor=this.selectedValueAccessor),St(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){var t;this.isCustomControlBased?this.setupCustomControl():((t=this.valueAccessor)!=null||(this.valueAccessor=this.selectedValueAccessor),St(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){xi.then(()=>{var t;this.control.setValue(e,{emitViewToModelChange:!1}),(t=this._changeDetectorRef)==null||t.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,r=t!==0&&Y(t);xi.then(()=>{var o;r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),(o=this._changeDetectorRef)==null||o.markForCheck()})}_getPath(e){return this._parent?It(e,this._parent):[e]}static \u0275fac=function(t){return new(t||i)(l(B,9),l(ne,10),l(ke,10),l(P,10),l(ue,8),l(Fe,8),l(re,8),l($,8))};static \u0275dir=m({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[b([ho,mn]),R,ae,ct(null)]})}return i})();var wa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=m({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var en=class extends De{constructor(n,e,t){super(an(e),sn(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,t={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(n,e={}){let t=this._adjustIndex(n);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,t={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){K(()=>{Pi(this,!1,n),n.forEach((t,r)=>{Oi(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(n.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((t,r)=>{t.reset(n[r],U(O({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),(e==null?void 0:e.emitEvent)!==!1&&this._events.next(new ye(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,t)=>{n(e,t)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){var e;return(e=this.at(n))!=null?e:null}};var hn=new C(""),go={provide:M,useExisting:w(()=>bo)},bo=(()=>{class i extends M{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new S;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a,d,v){super(v,d,r),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){var t;if(this._isControlChanged(e)){let r=e.form.previousValue;r&&(wt(r,this,!1),this.removeParseErrorsValidator(r)),this.isCustomControlBased?this.setupCustomControl():((t=this.valueAccessor)!=null||(this.valueAccessor=this.selectedValueAccessor),St(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:!1})}cn(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&wt(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return Object.hasOwn(e,"form")}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!0)}static \u0275fac=function(t){return new(t||i)(l(ne,10),l(ke,10),l(P,10),l(hn,8),l(Fe,8),l($,8),l(re,8))};static \u0275dir=m({type:i,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[b([go,mn]),R,ae,ct(null)]})}return i})(),vo={provide:B,useExisting:w(()=>Gi)},Gi=(()=>{class i extends uo{name=null;constructor(e,t,r){super(),this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}_checkParentType(){Wi(this._parent)}static \u0275fac=function(t){return new(t||i)(l(B,13),l(ne,10),l(ke,10))};static \u0275dir=m({type:i,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:!1,features:[b([vo]),R]})}return i})(),_o={provide:B,useExisting:w(()=>qi)},qi=(()=>{class i extends B{_parent;name=null;constructor(e,t,r){super(),this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}ngOnInit(){Wi(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){var e;(e=this.formDirective)==null||e.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return It(this.name==null?this.name:this.name.toString(),this._parent)}static \u0275fac=function(t){return new(t||i)(l(B,13),l(ne,10),l(ke,10))};static \u0275dir=m({type:i,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:!1,features:[b([_o]),R]})}return i})();function Wi(i){return!(i instanceof Gi)&&!(i instanceof Ui)&&!(i instanceof qi)}var xo={provide:M,useExisting:w(()=>yo)},yo=(()=>{class i extends M{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new S;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a,d,v){super(v,d,o),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}_setupWithForm(e,t){var r;this.control=e,this.isCustomControlBased?this.setupCustomControl():((r=this.valueAccessor)!=null||(this.valueAccessor=this.selectedValueAccessor),St(e,this,t))}ngOnChanges(e){this._added||this._setUpControl(),cn(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){var e;(e=this.formDirective)==null||e.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return It(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(t){return new(t||i)(l(B,13),l(ne,10),l(ke,10),l(P,10),l(hn,8),l($,8),l(re,8))};static \u0275dir=m({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[b([xo,mn]),R,ae,ct(null)]})}return i})();var Ki=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=G({})}return i})();function yi(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Ma=(()=>{class i{useNonNullable=!1;get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return yi(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new Ie(r,o)}record(e,t=null){let r=this._reduceControls(e);return new $t(r,t)}control(e,t,r){let o={};return this.useNonNullable?(yi(t)?o=t:(o.validators=t,o.asyncValidators=r),new Ke(e,U(O({},o),{nonNullable:!0}))):new Ke(e,t,r)}array(e,t,r){let o=e.map(a=>this._createControl(a));return new en(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof Ke)return e;if(e instanceof De)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac})}return i})();var Na=(()=>{class i{static withConfig(e){var t;return{ngModule:i,providers:[{provide:Fe,useValue:(t=e.callSetDisabledState)!=null?t:Dt}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=G({imports:[Ki]})}return i})(),Ea=(()=>{class i{static withConfig(e){var t,r;return{ngModule:i,providers:[{provide:hn,useValue:(t=e.warnOnNgModelWithFormControl)!=null?t:"always"},{provide:Fe,useValue:(r=e.callSetDisabledState)!=null?r:Dt}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=G({imports:[Ki]})}return i})();var Da=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.dirty||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().dirty();return t&&r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac,autoProvided:!1})}return i})(),Zi=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),r=e().touched();return t&&r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac})}return i})();var Qi=Symbol("FIELD_TREE");var Ji=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),Xi=class{reducer;create;brand;[Ji];constructor(n,e){this.reducer=n,this.create=e}};function Ye(i){return typeof i=="function"&&i[Qi]===!0}var $i=new C("");var pn=class{_box;_destroyed=new ie;_resizeSubject=new ie;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Sn(e=>{var r;let t=this._resizeSubject.subscribe(e);return(r=this._resizeObserver)==null||r.observe(n,{box:this._box}),()=>{var o;(o=this._resizeObserver)==null||o.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(st(e=>e.some(t=>t.target===n)),Dn({bufferSize:1,refCount:!0}),lt(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},er=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=c(N);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){var e;for(let[,t]of this._observers)t.destroy();this._observers.clear(),(e=this._cleanupErrorListener)==null||e.call(this)}observe(e,t){let r=(t==null?void 0:t.box)||"content-box";return this._observers.has(r)||this._observers.set(r,new pn(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac})}return i})();var gn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=m({type:i,selectors:[["mat-label"]]})}return i})(),vn=new C("MatError"),Co=(()=>{class i{id=c(he).getId("mat-mdc-error-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=m({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&_e("id",r.id)},inputs:{id:"id"},features:[b([{provide:vn,useExisting:i}])]})}return i})(),bn=(()=>{class i{align="start";id=c(he).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=m({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(_e("id",r.id),ee("align",null),I("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),sr=new C("MatPrefix");var _n=new C("MatSuffix"),So=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=m({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[b([{provide:_n,useExisting:i}])]})}return i})(),lr=new C("FloatingLabelParent"),tr=(()=>{class i{_elementRef=c(g);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(er);_ngZone=c(N);_parent=c(lr);_resizeSubscription=new Ce;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return wo(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=m({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&I("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function wo(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var nr="mdc-line-ripple--active",Ft="mdc-line-ripple--deactivating",ir=(()=>{class i{_elementRef=c(g);_cleanupTransitionEnd;constructor(){let e=c(N),t=c($);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ft),e.add(nr)}deactivate(){this._elementRef.nativeElement.classList.add(Ft)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Ft);e.propertyName==="opacity"&&r&&t.remove(nr,Ft)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=m({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),rr=(()=>{class i{_elementRef=c(g);_ngZone=c(N);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["notch"];return X({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(o,a){if(o&1&&je(e,5),o&2){let d;V(d=T())&&(a._notch=d.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(o,a){o&2&&I("mdc-notched-outline--notched",a.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(o,a){o&1&&(xe(),Ht(0,"div",1),On(1,"div",2,0),H(3),Pn(),Ht(4,"div",3))},encapsulation:2})})()}return i})(),Rt=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(t){return new(t||i)};static \u0275dir=m({type:i})}return i})();var Vt=new C("MatFormField"),dr=new C("MAT_FORM_FIELD_DEFAULT_OPTIONS"),or="fill",Mo="auto",ar="fixed",No="translateY(-50%)",cr=(()=>{class i{_elementRef=c(g);_changeDetectorRef=c(ue);_platform=c(Me);_idGenerator=c(he);_ngZone=c(N);_defaults=c(dr,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return we(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=He("iconPrefixContainer");_textPrefixContainerSignal=He("textPrefixContainer");_iconSuffixContainerSignal=He("iconSuffixContainer");_textSuffixContainerSignal=He("textSuffixContainer");_prefixSuffixContainers=te(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e==null?void 0:e.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=qn(gn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ne(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){var e;return this._floatLabel||((e=this._defaults)==null?void 0:e.floatLabel)||Mo}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){var r;let t=e||((r=this._defaults)==null?void 0:r.appearance)||or;this._appearanceSignal.set(t)}_appearanceSignal=J(or);get subscriptSizing(){var e;return this._subscriptSizing||((e=this._defaults)==null?void 0:e.subscriptSizing)||ar}set subscriptSizing(e){var t;this._subscriptSizing=e||((t=this._defaults)==null?void 0:t.subscriptSizing)||ar}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new ie;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ht();constructor(){let e=this._defaults,t=c(ft);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!(e!=null&&e.hideRequiredMarker),e.color&&(this.color=e.color)),be(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=Ye(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!Ye(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){var e,t,r,o;(e=this._outlineLabelOffsetResizeObserver)==null||e.disconnect(),(t=this._stateChanges)==null||t.unsubscribe(),(r=this._valueChanges)==null||r.unsubscribe(),(o=this._describedByChanges)==null||o.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=te(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){var o,a,d,v,F;let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),(o=this._stateChanges)==null||o.unsubscribe(),this._stateChanges=(a=t.stateChanges)==null?void 0:a.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),(d=this._describedByChanges)==null||d.unsubscribe(),this._describedByChanges=(v=t.stateChanges)==null?void 0:v.pipe(In([void 0,void 0]),at(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),An(),st(([[Te,Oe],[Xe,Pe]])=>Te!==Xe||Oe!==Pe)).subscribe(()=>this._syncDescribedByIds()),(F=this._valueChanges)==null||F.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!Ye(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(lt(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),En(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){var t,r,o;let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,(t=this._lineRipple)==null||t.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,(r=this._lineRipple)==null||r.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),(o=this._textField)==null||o.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Gt({earlyRead:()=>{var e;if(this._appearanceSignal()!=="outline")return(e=this._outlineLabelOffsetResizeObserver)==null||e.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||(this._outlineLabelOffsetResizeObserver=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())}));for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=te(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){var r,o;let t=((r=this._control)==null?void 0:r.ngField)||((o=this._control)==null?void 0:o.ngControl);if(!t)return!1;if(Ye(t)){let a=t();return e==="valid"?a.valid():e==="dirty"?a.dirty():e==="touched"?a.touched():e==="pending"?a.pending():e==="untouched"?!a.touched():e==="pristine"?!a.dirty():e==="invalid"?!a.valid():!1}else{let a=t;return e==="valid"?a.valid:e==="dirty"?a.dirty:e==="touched"?a.touched:e==="pending"?a.pending:e==="untouched"?a.untouched:e==="pristine"?a.pristine:e==="invalid"?a.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){var e,t;!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?(e=this._notchedOutline)==null||e._setNotchWidth(0):(t=this._notchedOutline)==null||t._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(d=>d.align==="start"):null,a=this._hintChildren?this._hintChildren.find(d=>d.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){var Qe,Je,$e,et,tt,nt,it,rt;if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=(Qe=this._iconPrefixContainer)==null?void 0:Qe.nativeElement,t=(Je=this._textPrefixContainer)==null?void 0:Je.nativeElement,r=($e=this._iconSuffixContainer)==null?void 0:$e.nativeElement,o=(et=this._textSuffixContainer)==null?void 0:et.nativeElement,a=(tt=e==null?void 0:e.getBoundingClientRect().width)!=null?tt:0,d=(nt=t==null?void 0:t.getBoundingClientRect().width)!=null?nt:0,v=(it=r==null?void 0:r.getBoundingClientRect().width)!=null?it:0,F=(rt=o==null?void 0:o.getBoundingClientRect().width)!=null?rt:0,Te=this._currentDirection==="rtl"?"-1":"1",Oe=`${a+d}px`,Pe=`calc(${Te} * (${Oe} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Ot=`var(--mat-mdc-form-field-label-transform, ${No} translateX(${Pe}))`,Pt=a+d+v+F;return[Ot,Pt]}_writeOutlinedLabelStyles(e){var t;if(e!==null){let[r,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),o!==null&&((t=this._notchedOutline)==null||t._setMaxWidth(o))}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["iconPrefixContainer"],t=["textPrefixContainer"],r=["iconSuffixContainer"],o=["textSuffixContainer"],a=["textField"],d=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],v=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function F(u,y){u&1&&E(0,"span",21)}function Te(u,y){if(u&1&&(h(0,"label",20),H(1,1),_(2,F,1,0,"span",21),p()),u&2){let s=z(2);Q("floating",s._shouldLabelFloat())("monitorResize",s._hasOutline())("id",s._labelId),ee("for",s._control.disableAutomaticLabeling?null:s._control.id),f(2),x(!s.hideRequiredMarker&&s._unwrapMaybeSignal(s._control.required)?2:-1)}}function Oe(u,y){if(u&1&&_(0,Te,3,5,"label",20),u&2){let s=z();x(s._hasFloatingLabel()?0:-1)}}function Xe(u,y){u&1&&E(0,"div",7)}function Pe(u,y){}function Ot(u,y){if(u&1&&mt(0,Pe,0,0,"ng-template",13),u&2){z(2);let s=ze(1);Q("ngTemplateOutlet",s)}}function Pt(u,y){if(u&1&&(h(0,"div",9),_(1,Ot,1,1,null,13),p()),u&2){let s=z();Q("matFormFieldNotchedOutlineOpen",s._shouldLabelFloat()),f(),x(s._forceDisplayInfixLabel()?-1:1)}}function Qe(u,y){u&1&&(h(0,"div",10,2),H(2,2),p())}function Je(u,y){u&1&&(h(0,"div",11,3),H(2,3),p())}function $e(u,y){}function et(u,y){if(u&1&&mt(0,$e,0,0,"ng-template",13),u&2){z();let s=ze(1);Q("ngTemplateOutlet",s)}}function tt(u,y){u&1&&(h(0,"div",14,4),H(2,4),p())}function nt(u,y){u&1&&(h(0,"div",15,5),H(2,5),p())}function it(u,y){u&1&&E(0,"div",16)}function rt(u,y){u&1&&(h(0,"div",18),H(1,6),p())}function Cr(u,y){if(u&1&&(h(0,"mat-hint",22),W(1),p()),u&2){let s=z(2);Q("id",s._hintLabelId),f(),le(s.hintLabel)}}function Sr(u,y){if(u&1&&(h(0,"div",19),_(1,Cr,2,2,"mat-hint",22),H(2,7),E(3,"div",23),H(4,8),p()),u&2){let s=z();f(),x(s.hintLabel?1:-1)}}return X({type:i,selectors:[["mat-form-field"]],contentQueries:function(y,s,k){if(y&1&&(zn(k,s._labelChild,gn,5),jn(k,Rt,5)(k,sr,5)(k,_n,5)(k,vn,5)(k,bn,5)),y&2){Bt();let j;V(j=T())&&(s._formFieldControl=j.first),V(j=T())&&(s._prefixChildren=j),V(j=T())&&(s._suffixChildren=j),V(j=T())&&(s._errorChildren=j),V(j=T())&&(s._hintChildren=j)}},viewQuery:function(y,s){if(y&1&&(Hn(s._iconPrefixContainerSignal,e,5)(s._textPrefixContainerSignal,t,5)(s._iconSuffixContainerSignal,r,5)(s._textSuffixContainerSignal,o,5),je(a,5)(e,5)(t,5)(r,5)(o,5)(tr,5)(rr,5)(ir,5)),y&2){Bt(4);let k;V(k=T())&&(s._textField=k.first),V(k=T())&&(s._iconPrefixContainer=k.first),V(k=T())&&(s._textPrefixContainer=k.first),V(k=T())&&(s._iconSuffixContainer=k.first),V(k=T())&&(s._textSuffixContainer=k.first),V(k=T())&&(s._floatingLabel=k.first),V(k=T())&&(s._notchedOutline=k.first),V(k=T())&&(s._lineRipple=k.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(y,s){y&2&&I("mat-mdc-form-field-label-always-float",s._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",s._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",s._hasIconSuffix)("mat-form-field-invalid",s._unwrapMaybeSignal(s._control.errorState))("mat-form-field-disabled",s._unwrapMaybeSignal(s._control.disabled))("mat-form-field-autofilled",s._unwrapMaybeSignal(s._control.autofilled))("mat-form-field-appearance-fill",s.appearance=="fill")("mat-form-field-appearance-outline",s.appearance=="outline")("mat-form-field-hide-placeholder",s._hasFloatingLabel()&&!s._shouldLabelFloat())("mat-primary",s.color!=="accent"&&s.color!=="warn")("mat-accent",s.color==="accent")("mat-warn",s.color==="warn")("ng-untouched",s._shouldForward("untouched"))("ng-touched",s._shouldForward("touched"))("ng-pristine",s._shouldForward("pristine"))("ng-dirty",s._shouldForward("dirty"))("ng-valid",s._shouldForward("valid"))("ng-invalid",s._shouldForward("invalid"))("ng-pending",s._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[b([{provide:Vt,useExisting:i},{provide:lr,useExisting:i}])],ngContentSelectors:v,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(y,s){if(y&1&&(xe(d),mt(0,Oe,1,1,"ng-template",null,0,Un),h(2,"div",6,1),D("click",function(j){return s._control.onContainerClick(j)}),_(4,Xe,1,0,"div",7),h(5,"div",8),_(6,Pt,2,2,"div",9),_(7,Qe,3,0,"div",10),_(8,Je,3,0,"div",11),h(9,"div",12),_(10,et,1,1,null,13),H(11),p(),_(12,tt,3,0,"div",14),_(13,nt,3,0,"div",15),p(),_(14,it,1,0,"div",16),p(),h(15,"div",17),_(16,rt,2,0,"div",18)(17,Sr,5,1,"div",19),p()),y&2){let k,j=s._unwrapMaybeSignal(s._control.disabled);f(2),I("mdc-text-field--filled",!s._hasOutline())("mdc-text-field--outlined",s._hasOutline())("mdc-text-field--no-label",!s._hasFloatingLabel())("mdc-text-field--disabled",j)("mdc-text-field--invalid",s._unwrapMaybeSignal(s._control.errorState)),f(2),x(!s._hasOutline()&&!j?4:-1),f(2),x(s._hasOutline()?6:-1),f(),x(s._hasIconPrefix?7:-1),f(),x(s._hasTextPrefix?8:-1),f(2),x(!s._hasOutline()||s._forceDisplayInfixLabel()?10:-1),f(2),x(s._hasTextSuffix?12:-1),f(),x(s._hasIconSuffix?13:-1),f(),x(s._hasOutline()?-1:14),f(),I("mat-mdc-form-field-subscript-dynamic-size",s.subscriptSizing==="dynamic");let wr=s._getSubscriptMessageType();f(),x((k=wr)==="error"?16:k==="hint"?17:-1)}},dependencies:[tr,rr,Yn,ir,bn],styles:[`.mdc-text-field {
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
`],encapsulation:2})})()}return i})();var Re=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=G({imports:[$n,cr,fe]})}return i})();var mr=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){return X({type:i,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(r,o){r&2&&I("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:["*"],decls:1,vars:0,template:function(r,o){r&1&&(xe(),H(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return i})();var xn={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Eo=new C("mat-checkbox-default-options",{providedIn:"root",factory:()=>xn}),L=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(L||{}),yn=class{source;checked},Ao=(()=>{class i{_elementRef=c(g);_changeDetectorRef=c(ue);_ngZone=c(N);_animationsDisabled=ht();_options=c(Eo,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new yn;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){var e;return(e=this._inputElement)==null?void 0:e.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new S;indeterminateChange=new S;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=L.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){var t,r;c(ut).load(li);let e=c(new Gn("tabindex"),{optional:!0});this._options=this._options||xn,this.color=this._options.color||xn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=c(he).getId("mat-mdc-checkbox-"),this.disabledInteractive=(r=(t=this._options)==null?void 0:t.disabledInteractive)!=null?r:!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(L.Indeterminate):this._transitionCheckState(this.checked?L.Checked:L.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=J(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,r=this._getAnimationTargetElement();if(!(t===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){var t;let e=(t=this._options)==null?void 0:t.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?L.Checked:L.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case L.Init:if(t===L.Checked)return this._animationClasses.uncheckedToChecked;if(t==L.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case L.Unchecked:return t===L.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case L.Checked:return t===L.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case L.Indeterminate:return t===L.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["input"],t=["*"];return X({type:i,selectors:[["mat-checkbox"]],viewQuery:function(o,a){if(o&1&&je(e,5),o&2){let d;V(d=T())&&(a._inputElement=d.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(o,a){o&2&&(_e("id",a.id),ee("tabindex",null)("aria-label",null)("aria-labelledby",null),Bn(a.color?"mat-"+a.color:"mat-accent"),I("_mat-animation-noopable",a._animationsDisabled)("mdc-checkbox--disabled",a.disabled)("mat-mdc-checkbox-disabled",a.disabled)("mat-mdc-checkbox-checked",a.checked)("mat-mdc-checkbox-disabled-interactive",a.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",Y],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",Y],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",Y],tabIndex:[2,"tabIndex","tabIndex",r=>r==null?void 0:Wn(r)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y],checked:[2,"checked","checked",Y],disabled:[2,"disabled","disabled",Y],indeterminate:[2,"indeterminate","indeterminate",Y]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[b([{provide:P,useExisting:w(()=>i),multi:!0},{provide:ne,useExisting:i,multi:!0}]),ae],ngContentSelectors:t,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition","for"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(o,a){if(o&1&&(xe(),h(0,"label",3),D("click",function(v){return a._preventBubblingFromLabel(v)}),h(1,"span",4,0),E(3,"span",5),h(4,"input",6,1),D("blur",function(){return a._onBlur()})("click",function(){return a._onInputClick()})("change",function(v){return a._onInteractionEvent(v)}),p(),E(6,"span",7),h(7,"span",8),dt(),h(8,"svg",9),E(9,"path",10),p(),Vn(),E(10,"span",11),p(),E(11,"span",12),p(),h(12,"span",13,2),H(14),p()()),o&2){let d=ze(2);Q("labelPosition",a.labelPosition)("for",a.inputId),f(4),I("mdc-checkbox--selected",a.checked),Q("checked",a.checked)("indeterminate",a.indeterminate)("disabled",a.disabled&&!a.disabledInteractive)("id",a.inputId)("required",a.required)("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex),ee("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby)("aria-describedby",a.ariaDescribedby)("aria-checked",a.indeterminate?"mixed":null)("aria-controls",a.ariaControls)("aria-disabled",a.disabled&&a.disabledInteractive?!0:null)("aria-expanded",a.ariaExpanded)("aria-owns",a.ariaOwns)("name",a.name)("value",a.value),f(7),Q("matRippleTrigger",d)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0)}},dependencies:[si,mr],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})(),kn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=G({imports:[Ao,fe]})}return i})();var Do=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=X({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return i})(),Io={passive:!0},ur=(()=>{class i{_platform=c(Me);_ngZone=c(N);_renderer=c(Tn).createRenderer(null,null);_styleLoader=c(ut);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return wn;this._styleLoader.load(Do);let t=Kt(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new ie,a="cdk-text-field-autofilled",d=F=>{F.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:F.target,isAutofilled:!0}))):F.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:F.target,isAutofilled:!1})))},v=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",d,Io)));return this._monitoredElements.set(t,{subject:o,unlisten:v}),o}stopMonitoring(e){let t=Kt(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=se({token:i,factory:i.\u0275fac})}return i})();var fr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=G({})}return i})();var hr=new C("MAT_INPUT_VALUE_ACCESSOR");var Tt=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,t,r,o){this._defaultMatcher=n,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o,e?we(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){var r,o;if(this.formField&&(n!=null&&n.isSignalErrorState))return(r=n.isSignalErrorState(this.formField.field()))!=null?r:!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return(o=n==null?void 0:n.isErrorState(t,e))!=null?o:!1}};var Fo=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Ro=new C("MAT_INPUT_CONFIG"),$l=(()=>{class i{_elementRef=c(g);_platform=c(Me);ngControl=c(M,{optional:!0,self:!0});_autofillMonitor=c(ur);_ngZone=c(N);_formField=c(Vt,{optional:!0});_renderer=c($);_uid=c(he).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(Ro,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new ie;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ne(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){var e,t,r,o;return(o=(r=this._required)!=null?r:(t=(e=this.ngControl)==null?void 0:e.control)==null?void 0:t.hasValidator(oe.required))!=null?o:!1}set required(e){this._required=Ne(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Yt().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ne(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Yt().has(e));constructor(){var F;let e=c(un,{optional:!0}),t=c(fn,{optional:!0}),r=c(Zi),o=c(hr,{optional:!0,self:!0}),a=c($i,{optional:!0,self:!0}),d=this._elementRef.nativeElement,v=d.nodeName.toLowerCase();o?we(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=d,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(d,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Tt(r,a||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=v==="select",this._isTextarea=v==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=((F=this._config)==null?void 0:F.disabledInteractive)||!1,this._isNativeSelect&&(this.controlType=d.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&be(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){var e,t;this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),(e=this._cleanupIosKeyup)==null||e.call(this),(t=this._cleanupWebkitWheel)==null||t.call(this)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Fo.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){let t=this._elementRef.nativeElement.getAttribute("aria-describedby");return(t==null?void 0:t.split(" "))||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=m({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&D("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(_e("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ee("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),I("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y]},exportAs:["matInput"],features:[b([{provide:Rt,useExisting:i}]),ae]})}return i})(),Cn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=G({imports:[Re,Re,fr,fe]})}return i})();var td=(()=>{let n=class n{get isIos(){return!!window.navigator.userAgent.match(/iPad|iPhone/i)}constructor(t){this.el=t}ngAfterViewInit(){if(setTimeout(()=>{this.focus()}),this.isIos){let t=()=>{this.focus(),document.removeEventListener("touchend",t)};document.addEventListener("touchend",t)}}focus(){this.el.nativeElement.focus()}};n.\u0275fac=function(r){return new(r||n)(l(g))},n.\u0275dir=m({type:n,selectors:[["","auto-focus",""]],standalone:!1});let i=n;return i})();var id=(()=>{let n=class n{constructor(t){let r=t.nativeElement;r.addEventListener&&r.addEventListener("animationstart",o=>{o.animationName==="cdk-text-field-autofill-start"&&this.update()})}update(){try{let t=document.querySelector("[type=submit]")}catch(t){}}};n.\u0275fac=function(r){return new(r||n)(l(g))},n.\u0275dir=m({type:n,selectors:[["","enable-submit-on-auto-fill",""]],standalone:!1});let i=n;return i})();var od=(()=>{let n=class n{constructor(t,r){this.el=t,this.control=r}ExtractEmail(){let t=this.control.control,r=this.el.nativeElement.value.match(/<(.*?)>/);r&&t.setValue(r[1])}};n.\u0275fac=function(r){return new(r||n)(l(g),l(M))},n.\u0275dir=m({type:n,selectors:[["","extract-email-on-paste",""]],hostBindings:function(r,o){r&1&&D("input",function(){return o.ExtractEmail()})},standalone:!1});let i=n;return i})();var gr=ot(Ze());var fd=(()=>{let n=class n{set theme(t){this._theme=this.configService.get(`secureValidator.CaptchaHCaptcha.themeMap.${t.toLowerCase()}`)}get theme(){return this._theme}get isLoaded(){return this.widgetId!==void 0}constructor(t,r,o){this.element=t,this.ngZone=r,this.configService=o,this.captchaResponse=new S,this.captchaExpired=new S,this.error=new S,this.destroyed=!1,this.config={}}ngOnInit(){this.loadHCaptcha()}ngOnDestroy(){this.destroyed=!0,this.removeWidget()}onExpired(){this.ngZone.run(()=>{this.captchaExpired.emit(),this.widgetId!==void 0&&this.isApiReady()&&hcaptcha.execute(this.widgetId)})}onSuccess(t){this.ngZone.run(()=>{this.captchaResponse.next(t)})}reset(){this.widgetId===void 0||!this.isApiReady()||hcaptcha.reset(this.widgetId)}getResponse(){return this.widgetId===void 0||!this.isApiReady()?null:hcaptcha.getResponse(this.widgetId)}loadHCaptcha(){if(this.isApiReady()){this.renderWidget();return}window.hCaptchaLoad=()=>this.ngZone.run(()=>this.renderWidget()),this.addScript()}renderWidget(){if(this.destroyed||!this.isApiReady()||this.widgetId!==void 0)return;let t=(0,gr.default)(this.config,{size:"invisible",theme:this.getTheme(),sitekey:this.getSiteKey(),callback:this.onSuccess.bind(this),"expired-callback":this.onExpired.bind(this),"error-callback":r=>{this.ngZone.run(()=>this.onError(r))}});this.lang&&(t.hl=this.lang),this.widgetId=this.render(this.element.nativeElement,t),hcaptcha.execute(this.widgetId)}isApiReady(){return!!(window.hcaptcha&&typeof window.hcaptcha.render=="function")}removeWidget(){if(this.widgetId===void 0||!this.isApiReady()){this.widgetId=void 0;return}try{typeof window.hcaptcha.remove=="function"?window.hcaptcha.remove(this.widgetId):window.hcaptcha.reset(this.widgetId)}catch(t){}this.widgetId=void 0}getSiteKey(){return this.configService.get("security").passiveHCaptchaSiteKey}getTheme(){return this.theme||"light"}getHCaptchaScriptUrl(){return this.configService.get("security").hcaptchaScriptURL}render(t,r){return hcaptcha.render(t,r)}addScript(){if(document.querySelector("script[data-hcaptcha-api]"))return;let t=document.createElement("script"),r=this.getHCaptchaScriptUrl().includes("?")?"&":"?";t.src=`${this.getHCaptchaScriptUrl()}${r}onload=hCaptchaLoad&render=explicit`,t.async=!0,t.defer=!0,t.setAttribute("data-hcaptcha-api","true"),t.onerror=()=>t.remove(),document.body.appendChild(t)}onError(t){this.error.emit(t)}};n.\u0275fac=function(r){return new(r||n)(l(g),l(N),l(Z))},n.\u0275dir=m({type:n,selectors:[["","ngHcaptchaInvisible",""]],inputs:{lang:"lang",theme:"theme"},outputs:{captchaResponse:"captchaResponse",captchaExpired:"captchaExpired",error:"error"},exportAs:["ngHcaptchaInvisible"],standalone:!1,features:[b([{provide:P,useExisting:w(()=>n),multi:!0}])]});let i=n;return i})();var br=ot(Ze());var kd=(()=>{let n=class n{set theme(t){this._theme=this.configService.get(`secureValidator.CaptchaHCaptcha.themeMap.${t.toLowerCase()}`)}get theme(){return this._theme}get isLoaded(){return this.widgetId!==void 0}constructor(t,r,o,a){this.element=t,this.ngZone=r,this.configService=o,this.injector=a,this.captchaResponse=new S,this.captchaExpired=new S,this.destroyed=!1,this.config={}}ngOnInit(){this.loadHCaptcha()}ngAfterViewInit(){this.control=this.injector.get(M).control,this.setValidators()}ngOnDestroy(){this.destroyed=!0,this.removeWidget()}onExpired(){this.ngZone.run(()=>{this.captchaExpired.emit(),this.onChange(null),this.onTouched(null)})}onSuccess(t){this.ngZone.run(()=>{this.captchaResponse.next(t),this.onChange(t),this.onTouched(t)})}writeValue(t){}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}getId(){return this.widgetId}reset(){this.widgetId===void 0||!this.isApiReady()||(hcaptcha.reset(this.widgetId),this.onChange(null))}getResponse(){return this.widgetId===void 0||!this.isApiReady()?null:hcaptcha.getResponse(this.widgetId)}loadHCaptcha(){if(this.isApiReady()){this.renderWidget();return}window.hCaptchaLoad=()=>this.ngZone.run(()=>this.renderWidget()),this.addScript()}renderWidget(){if(this.destroyed||!this.isApiReady()||this.widgetId!==void 0)return;let t=(0,br.default)(this.config,{theme:this.getTheme(),sitekey:this.getSiteKey(),callback:this.onSuccess.bind(this),"expired-callback":this.onExpired.bind(this)});this.lang&&(t.hl=this.lang),this.widgetId=this.render(this.element.nativeElement,t)}isApiReady(){return!!(window.hcaptcha&&typeof window.hcaptcha.render=="function")}removeWidget(){if(this.widgetId===void 0||!this.isApiReady()){this.widgetId=void 0;return}try{typeof window.hcaptcha.remove=="function"?window.hcaptcha.remove(this.widgetId):window.hcaptcha.reset(this.widgetId)}catch(t){}this.widgetId=void 0}getSiteKey(){return this.configService.get("security").hCaptchaSiteKey}getHCaptchaScriptUrl(){return this.configService.get("security").hcaptchaScriptURL}getTheme(){return this.theme||"light"}render(t,r){return hcaptcha.render(t,r)}setValidators(){this.control.setValidators(oe.required),setTimeout(()=>this.control.updateValueAndValidity(),0)}addScript(){if(document.querySelector("script[data-hcaptcha-api]"))return;let t=document.createElement("script"),r=this.getHCaptchaScriptUrl().includes("?")?"&":"?";t.src=`${this.getHCaptchaScriptUrl()}${r}onload=hCaptchaLoad&render=explicit`,t.async=!0,t.defer=!0,t.setAttribute("data-hcaptcha-api","true"),t.onerror=()=>t.remove(),document.body.appendChild(t)}};n.\u0275fac=function(r){return new(r||n)(l(g),l(N),l(Z),l(re))},n.\u0275dir=m({type:n,selectors:[["","ngHcaptcha",""]],inputs:{lang:"lang",theme:"theme"},outputs:{captchaResponse:"captchaResponse",captchaExpired:"captchaExpired"},exportAs:["ngHcaptcha"],standalone:!1,features:[b([{provide:P,useExisting:w(()=>n),multi:!0}])]});let i=n;return i})();var Nd=(()=>{let n=class n{constructor(t){this.configService=t,this.scriptURL=this.configService.get("thirdparty.adobeTrackerScriptURL")}ngOnInit(){this.addScript()}addScript(){let t=document.createElement("script");t.src=`${this.scriptURL}`,document.head.appendChild(t);let r=document.createElement("script");r.type="text/javascript",r.innerHTML="_satellite.pageBottom();",document.body.appendChild(t)}};n.\u0275fac=function(r){return new(r||n)(l(Z))},n.\u0275dir=m({type:n,selectors:[["","nvMarketingTracker",""]],exportAs:["nvMarketingTracker"],standalone:!1,features:[b([{provide:P,useExisting:w(()=>n),multi:!0}])]});let i=n;return i})();var vr=ot(Ze());var Od=(()=>{let n=class n{set theme(t){this._theme=this.configService.get(`secureValidator.CaptchaReCaptcha.themeMap.${t.toLowerCase()}`)}get theme(){return this._theme}get isLoaded(){return this.widgetId>-1}constructor(t,r,o,a){this.element=t,this.ngZone=r,this.configService=o,this.injector=a,this.captchaResponse=new S,this.captchaExpired=new S,this.config={},this.recaptchApiURL=this.configService.get("recaptchaScriptURL")}ngOnInit(){this.registerReCaptchaCallback(),this.addScript()}ngAfterViewInit(){this.control=this.injector.get(M).control,this.setValidators()}onExpired(){this.ngZone.run(()=>{this.captchaExpired.emit(),this.onChange(null),this.onTouched(null)})}onSuccess(t){this.ngZone.run(()=>{this.captchaResponse.next(t),this.onChange(t),this.onTouched(t)})}writeValue(t){}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}getId(){return this.widgetId}reset(){this.widgetId&&(grecaptcha.reset(this.widgetId),this.onChange(null))}getResponse(){if(!this.widgetId)return grecaptcha.getResponse(this.widgetId)}registerReCaptchaCallback(){window.reCaptchaLoad=()=>{let t=(0,vr.default)(this.config,{theme:this.getTheme(),sitekey:this.getSiteKey(),callback:this.onSuccess.bind(this),"expired-callback":this.onExpired.bind(this)});this.widgetId=this.render(this.element.nativeElement,t)}}getSiteKey(){return this.configService.get("security").gRecaptchaSiteKey}getTheme(){return this.theme||"light"}render(t,r){return grecaptcha.render(t,r)}setValidators(){this.control.setValidators(oe.required),setTimeout(()=>this.control.updateValueAndValidity(),0)}addScript(){let t=document.createElement("script"),r=this.lang?"&hl="+this.lang:"";t.src=`${this.recaptchApiURL}?onload=reCaptchaLoad&render=explicit${r}`,t.async=!0,t.defer=!0,document.body.appendChild(t)}};n.\u0275fac=function(r){return new(r||n)(l(g),l(N),l(Z),l(re))},n.\u0275dir=m({type:n,selectors:[["","ngRecaptcha",""]],inputs:{lang:"lang",theme:"theme"},outputs:{captchaResponse:"captchaResponse",captchaExpired:"captchaExpired"},exportAs:["ngRecaptcha"],standalone:!1,features:[b([{provide:P,useExisting:w(()=>n),multi:!0}])]});let i=n;return i})();var xr=ot(Ze());function Uo(i,n){i&1&&(W(0),ce(1,"translate")),i&2&&Ut(`
`,me(1,1,"WarningMessages.secureValidatorLoadingProblem"),`
`)}function Go(i,n){i&1&&(dt(),h(0,"svg",4),E(1,"path",12),p())}function qo(i,n){i&1&&E(0,"img",8)}function Wo(i,n){i&1&&E(0,"img",9)}function Ko(i,n){if(i&1){let e=Ln();h(0,"div",0)(1,"div",1),D("click",function(){Fn(e);let r=z(2);return Rn(r.showPopupChallenge())}),h(2,"div",2)(3,"div",3),_(4,Go,2,0,"svg",4),p(),h(5,"span",5),W(6),ce(7,"translate"),p()(),h(8,"div",6),E(9,"img",7),_(10,qo,1,0,"img",8),_(11,Wo,1,0,"img",9),h(12,"div",10)(13,"a",11)(14,"span"),W(15,"Privacy"),p(),h(16,"span"),W(17,"-"),p(),h(18,"span"),W(19,"Terms"),p()()()()()()}if(i&2){let e=z(2);f(),I("theme-dark",e.theme==="dark")("theme-light",e.theme!=="dark"),f(2),I("checked",e.captchaChecked),f(),x(e.captchaChecked?4:-1),f(2),le(me(7,10,"ValidationMessages.secureValidator.robotCheckLabel")),f(4),x(e.theme!=="dark"?10:-1),f(),x(e.theme==="dark"?11:-1)}}function Yo(i,n){if(i&1&&(_(0,Uo,2,3),_(1,Ko,20,12,"div",0)),i&2){let e=z();x(e.blockWarningPrepared?0:-1),f(),x(e.blockWarningPrepared?-1:1)}}function Zo(i,n){i&1&&(W(0),ce(1,"translate")),i&2&&Ut(`
`,me(1,1,"WarningMessages.secureValidatorLoadingProblem"),`
`)}function Xo(i,n){if(i&1&&_(0,Zo,2,3),i&2){let e=z();x(e.blockWarningPrepared?0:-1)}}var Wd=(()=>{let n=class n{set lang(t){let r=t.toLowerCase();r.startsWith("zh")?this._lang=r:this._lang=r.slice(0,2)}get lang(){return this._lang}set theme(t){this._theme=this.configService.get(`secureValidator.CaptchaTjCaptcha.themeMap.${t.toLowerCase()}`)}get theme(){return this._theme}get isLoaded(){return this.widgetId>-1}constructor(t,r,o,a){this.element=t,this.ngZone=r,this.configService=o,this.injector=a,this.isVisible=!0,this.blockWarningPrepared=!1,this.captchaChecked=!1,this.captchaResponse=new S,this.captchaExpired=new S,this.captchaError=new S,this.scriptTagId="tjCaptchaScript",this.config={},this.tjCaptchaApiURL=this.configService.get("thirdparty.tjCaptchaScriptURL")}ngOnInit(){this.addScript()}ngAfterViewInit(){this.control=this.injector.get(M).control,this.setValidators()}showPopupChallenge(){this.captchaChecked||this.show()}onExpired(){this.ngZone.run(()=>{this.captchaExpired.emit(),this.onChange(null),this.onTouched(null)})}onSuccess(t){if(t.ticket&&t.ret===0){let r=JSON.stringify({appId:this.getAppId(),ticket:t.ticket,randstr:t.randstr});this.ngZone.run(()=>{this.captchaResponse.next(r),this.captchaChecked=!!r,this.onChange(r),this.onTouched(r)})}}onError(t){this.ngZone.run(()=>{this.captchaError.emit(t),this.onChange(null),this.onTouched(null)})}writeValue(t){}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}getId(){return this.widgetId}show(){this.captchaInstance.show()}reset(){this.captchaInstance&&(this.captchaInstance.reset(),this.captchaChecked=!1,this.onChange(null))}getResponse(){return this.captchaInstance?this.captchaInstance.getResponse():""}refresh(){this.captchaInstance&&(this.captchaInstance.refresh(),this.onChange(null))}renderCaptcha(){try{let t=(0,xr.default)(this.config,{theme:this.getTheme(),appId:this.getAppId(),callback:this.onSuccess.bind(this),"expired-callback":this.onExpired.bind(this),"error-callback":this.onError.bind(this)}),r={enableDarkMode:t.theme==="dark"?"force":!1,userLanguage:this.isVisible?this.lang.toLocaleLowerCase():null,loading:!!this.isVisible};this.captchaInstance=new TencentCaptcha(t.appId,t.callback,r),this.isVisible||this.captchaInstance.show(),this.widgetId=this.captchaInstance.id||Date.now()}catch(t){console.error("Failed to render Tencent Cloud Captcha:",t),this.onError(t)}}getAppId(){return this.isVisible?this.configService.get("security").tjCaptchaAppId:this.configService.get("security").tjInvisibleCaptchaAppId}getTheme(){return this.theme||"light"}setValidators(){this.control.setValidators(oe.required),setTimeout(()=>this.control.updateValueAndValidity(),0)}addScript(){if(document.getElementById(this.scriptTagId)){this.renderCaptcha();return}let t=document.createElement("script");t.async=!0,t.defer=!0,t.id=this.scriptTagId,document.body.appendChild(t),t.onload=()=>{this.renderCaptcha()},t.src=`${this.tjCaptchaApiURL}`}};n.\u0275fac=function(r){return new(r||n)(l(g),l(N),l(Z),l(re))},n.\u0275cmp=X({type:n,selectors:[["","ngTjCaptcha",""]],inputs:{isVisible:"isVisible",blockWarningPrepared:"blockWarningPrepared",lang:"lang",theme:"theme"},outputs:{captchaResponse:"captchaResponse",captchaExpired:"captchaExpired",captchaError:"captchaError"},exportAs:["ngTjCaptcha"],standalone:!1,features:[b([{provide:P,useExisting:w(()=>n),multi:!0}])],decls:2,vars:2,consts:[[1,"tjcaptcha-robot-box-container"],["id","cap_iframe",1,"tjcaptcha-robot-box",3,"click"],[1,"captcha-checkbox-container","tjcaptcha-left-wrapper"],[1,"captcha-checkbox"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"checkmark"],[1,"captcha-label"],[1,"tjcaptcha-right-wrapper"],["src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAA3CAYAAABJsMcXAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAb/SURBVHgB3VxNbxNHGH5mHQOVippW7ZmN+JB6Ij6VtAecX0Byp2BfKwjhFyT5BTgtqnqzQ+gZ+gviHNqESxNOFQSUPfVQqeCqVKKJs8P7zmZxPjyzX7Nrk0dy4qzH69ln33k/nnccgUFjVo5iD1NwcBk+XAiM09HR/UcID5IeDjZp7Cq69Psn4WFAEBgEAqJq9OwazaCKNJBo088l7NLvggksljQmy8cdfobDlpQFniJwFwtFkVccaTOSyZqHPbKOgslbwA+ihZyRP2mz0qWl2Ey9DJMisLp6nlaXL2nfyXGU8YguxEWx8ChYTONHsYkc4CAvzMibGMFKBsK8/UcauOqzeQ45IB9LuyWrdDtWErzDo8cvFCTafdMJDiBdSkUcSk0ERdwkN8LHJO6LNizCPmnsw3xsII7DZ//DzjvpRQU3pUbP4lhShwiftLlU7ZLGFiGJsGhL8IjYemYLuCWnUMK9WJ/noIKG6MAC7Po0GesCFtUF2Fgy98Vjuu0VcJJrhkvzmoMl2LM0vusORUozFvC9mEcemJHz9NNMjCX/Zs/SeJmYkR9hjODcC8Yxwo612bG027JGZ2pqX5d4TJn6NIrAbbliTKQtWJstSzNFMY8y9LsoCiUKMBwxdbBgbdlJ4xTDdGdlcYW0QkMENagOPNdZOY4MyL48Z2SDft7RvOqRrxnDIHBbclBaVTocJ8xnyPospRwjyI6r2ldkhGPOEzn60GzLk5NZQG/qu0ooPHHIZmlcD57tAh/v9o7t0H14U6bXnIFK0u/RlKF07h442kE9fVmV3KetbVHd51yFpPoPhgCwU/Jwao9qS7mEiYttFIkmza1MhT2owDdVKAJMHOtvS0lIjE8akyUEh+sqEoMj2t4CJi61kCceqHyR058qkoPFgyXciFZ+o0lb+4NSinIz5USOftwm5M40Jr70YBNNyfqZpTlSIt6lvLKudy3mQPBk+ybEqQ1LkyFQfuSUN7C+NQtbWKbewwgszpGWNJ9vmWppDfSkPXk5R0uqRRdqtxEi2SmLe+r8WfGz5HNwnmi7WcPne0TE9Z1j/+WpCFOqQd5o4/S/06hUkiedD2WTbkANeUPSUr0hGgcPHSftyTOKOKUoiecgPHpQ5OFsm61SuGoZxgYHiZ3J2H6OU4gRJUFVER/kSxFER/E+/Yg/R1Z+670i/zBpyumfIm2fHKsZHbLERZx50+hrJXwelCjaOnNAHD0/JnFMWFk1a6IvWKqbuUjtwxZdcKfPuVwq7qtgDU5EzFEo0aESnucwaesvOALVYMYiLan52EtqbWt+P1VBxMQ68OW0NqdLQhjral3ydfUYtWZguRyY5iLm18B1cTd4GiJILbaNb5Qku0xcaCEpfn0+jpLDS8qNHCtKNXw1dli+Zqsox2gHSiJeUL/z2xR62QM5S+81C6ldjHEq0oueohxhDfJuKsIY31win7I7ieg+JjVc3q4eOhKfMI+WYiUVYQx29jJC9wssct/SVrZH8dHea8PwFq5cqCMrAp/5SBMoPEXsQb+WjLBJU0IaG8tKUtLlaNwOHAss7fReFcZJ7dqReJiQK+crkP7R7tFwEMbokguSWuVXqToBaY4xfLeslz0Tl2oUfcMbMTyEMTh4SENLcARToU+7rB3EKkUemLg4D5+iUVrCoHZF2iUshGPUAS+HepqrHXLmTS47bxS+Pn8o005EWJBwWpGvj6FLpOmURsrpQktzNQM6qUqcNBgWwhimc8seaZoBoijCxpWyMAyEhdAHg6geQWQ5lR0BYbwtK0qpaBdGGEPo5xOS5ukG4Pc/zyEvxCdsiZLW4ghrGgWHzYA0Ab2z3/kvn1ZYMsJqKBIlY33bCUjz5VP9GHENtvFwf2vpMBLGEIZtFj5Ww+XZhh5V1VSxBSZMUsI8rIQtR3TZfLQD0pQcY/AXDlX/GxvZJeUeYWb4JO0MgjCGefeTx2JkL3pKf1E/WIzj/7NR+8/MSELYzRz3sZkQSOiuYYQq/XqkvR1pGK2Nxcn1rXTEccdomAljITKq5xDUuW1+2iNtcowI8yPUDDGL9Zfb+O3ZFOKi1zEyY3CEcTd+I0aTZiGsc483VtZfcFSrIhJ0Ap+WNKcrXJ/2K7eYMF99H8qMIglrqoSdm8u826mKeA2aTfKxlfCP46QFsvcKYjVE+kF1pTr463Pgn0/ceG9J/c2UeJDHvj+a5L3H5Kf+fU+l6ZdWUjeK//4UePUZPnhw/bmnulDewcP9a0+l6e+wOXpIipNDmFbg1BfsLAyqZkiCfVwnhTBO9gPC+l57vK1Wa89rkY3fk0AYL0eHgtJ1YYz2CfanGbrmHz5hbUD9Q4FYDeZ0u7s5UDhKCaji9Rfn8GrUVceL/zJsMoRRWu7/9wXgKS3Dx0n7DO8A/cPRprTpOY0AAAAASUVORK5CYII=","alt","logo","aria-label","TencentLogo"],["src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAQCAYAAACGJ+SRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWESURBVHgBxVqxctw2EH1KrJmoyqVzZ/gLoh/QBP4CXb5AdJlKcqVJJaqSOstfcFSXznKvGdFdOp86pzqqcyrLXVLJXGH3iMORAAjc2G8GwyOwi90FFgtgeVsACozDVVvurfcJ9/FrWxTXUft7pm0sWmrXGAbxzR0eOPwHbZmyXDAtyao8fEuUZTnZ2dk5OT4+foV4qLYcwuhuy32HdRuHUHA/RD/30JFtu572OdbHSGHcPNI4Xzh1ui37iLNRcwnZQv0cMc2Vh07B6N+n1xIPI8szR+FFgP41OsN1pAybR0AO+tmiWfTIniGAs7MzdX5+foN4nDgyFo4eD0zjg7JoQ7IrxI2RLVNH8tg22Hg90saS6wr4oRA3LzNLTu8ifdKWFwOMaqDtjp+08t/CrIJTrEY04tUwxtGKIqd7afVBEbB0+p2gi5guj+L+wbIu0EX1CetCEa9w5OTihPVsuN+5JVehs5Fo7iwdXWjn9y78kYjwaoCGeA9Z5heYsajb8tyhUzCLooZ/TMhJabwb5NmYCoVVhy9YnyjQinoIdC6rzrdNEUp0K0ojboXdYDV6F+girQ9FoH1MRC3QRZdJgLaEX7aM54X1HELFNNpDo2DG/nOAJhTBC6b5gHE2lthcRC2YpkRn05ouPyANU1ZiaNXbKJluDC75KRFd8fM2wFdhcziwdLgP0JYYPoMV6HaEkvuivkOO4UMDc3akPp4hHWLj78izMQdypKja8gbdnWcFqY5KBjaId4zQIIT4Gn7+hm8DGiwN4wxNJM+QjeIMl0wzOBmJeI40KBgbK+TbmIoC3SJu0O00+y5hiqPSINN2H4puORBFJVrLrbOA2aYK5EWkEOQ4UyMPCsYZGqsvmYwD5EEWbWhHG4LiZ848KnQZgKHig72ICbQQ6j7eJxgPcZDUASIo9EcU6ltSJBR5Gq4nA2gLLmGMm3FpWA+KfDXiI0OMfthAf7KtnVp17mTUGAfF/dKzQnqUU/zMmccThDMePvma5ddW/Sm6C9yyPsVRNwEN/2ojJ3Vvfg2Mc5cwZ2RyaMW/p0xDbafYHHKitmQjGqwfkXonw4FkVNw+RSfiG3v270OOjbTT3Qb6PhxoEwd/49TXMM6rmf9xDFIcVQYv5xAvCXobEiXoYO87tDcw26dsocSj0aVQvsB/q46BRJmcSZyiG+iyp53qtUXT196nV4P+8RsLOwWVincBPRT6HZXqp9bv0mkX3Y7QP3ZLhNJTkpoaC43hdIW03SANCv3J7BVEpqcmmboA4Q8hUkqHr0I4PRUDBb8NOTaWyEtPFYgbm2WqKvXWf4nuZhyDmMhUozu7HWE8Gi4K+bDPkbuRPMr6rdF9Ln3hKSSHIk5O5E6FbaOK5ImlC0G2fdo9h8ZGfOwx8qY6agVjqHzB8kEjfpt6yf2SIfbkFQg7r2KeBpuBnHXfImwjfYgorPcDftL5q/aUTaeqxkJspKiqArSujanQ6C6CtJDrgSLHt8exTHXUBsZIBWNkgX6FZtz+M+L7lclzb5M0UAv0p6Y0jENR/SU2gxrrNtpyxcEoXWYvIsX1DcI3ejmL7+P7oEbYRrJtgbRdrg9yZg3N0xwDqSoboTOq4AirZ4oPXNw/j8j2qRH+pDax5GuuU1j/s8YC63+eqBBAwp9SygG5dt0FugmeIe78JrjBqq0Vvs0Z1UaJcTYKfYE4HWbO+wJx0ML/4wABfe34CHOr8+FvmJXxC7+TQz5tyyeY1fBnW/7gdwEZS7fW+UCf/3H7T23ZYhl0HLhiWVtMM7HoqY1SNcHb/t7eHra3t59eX1+/RxzqAblzrqfjyl/cRqCxuEV85oFo/4Wx8SPX/cNy75GH/+Efa0GNcTYS7pjvE+J0INt2mc/OkfvQsE53XwGm7CV9XOp8EQAAAABJRU5ErkJggg==","aria-hidden","true",1,"tjcaptcha-right-wrapper-text"],["src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAQCAYAAACGJ+SRAAAHnUlEQVR4AcTazZnURhAGYMGJm9cR2M7AjsA4AtsRYCIALlxZIgAiACIAIgBHAEQAjgCO3NbfK6aERqvWjDRg79O16q6u/6pudWv36sXFxV8r4awb/YT3LHA78DjwcgfP8oT7cUTaBfdjYEnfH5nf45nhvxea14F3O6DzPP0m31jG+fn52d27dx+McYf6ZAceBKZ6L/nYkhVefrPz5xYNfOjEAF0LzO/5Gh5xbdHP4W/TNYbIuB44ysfQoSX3kC9qA90fY13TfuSV/ZfsKtqr6TxeCd+Fvm9RcD2d1wGJ/ytPY8AwOMXE+SpuAV7S9ywypjxBdYr8Rjp0nec5DhB994LDR3a67fbp06ezK1eujPnbxJmJj73sdAWx+PhDb/mIJiTzLTLKb3R45gk/Y8UOXQsqRuY/c3Qd+cbHwq1u9BP72PQyqGN95DtdFY+wzrazYNH9nudSQwPUyqxMhfpbJEzhfXDaFP9bkvyPiTgnoJxjzP3gfspc3/QDNwPkcF4gMhza3+lNZf8Z3J3Am8AeT3RJxJPgS9f3UUTfT8F9H6ALn8WS4ddp0St4FgY/2Ft66aSbXnN2jSXdEltG2Y1mk1EEu6dY0DkF+NIpTl1i8So87BkDvqC7pTkbgNyQQyaerT52W34SY7kdx27cH0Re5eQUanaKNza3E87Bjxkr3vPMcTTDTuDeZ/wkIHCKuJv8vMvcqwk8z/hh4JfQCq5X5Q/pa5Vo83TRC0/Xx/DQhU/h9PhTf8VHAasi/SU62DvWe8jHsQkK3viRXwGy81hsb3Y66R3Dw3ApKLaUXHFgzwChmeZjmIvcfm7noyK1yE/1MSo3tcqtOuHTjdhlQ9oTZkfdQxw5sJtaCXfiNCebbJmXbLtAk2Zm4ukOJyG6dHm+9asF0WXXbU2vxTtq4LEQBVB/FqKXj8/nJhN0Rcl+tqEjazYZc/xzuOhTaC8y5wxYiznD1a18/DMy2dUUkHm2z/rYZDpuohab+FjIilTM9ri3FioHrVDC9wTODeLkYhDmeHa44pMYqF/9+taQ4hIsK/1FbC/di2pDV7ZO6cQK7umOppkMRBvAW2s1W3y0ePjobXSqj6v1Y4gNCpIdZYO3halLZ9ovhWr6CIhwSXTGWtzdjhC1RFKG1m5tJQum44Cbtyc7lmScMsc//I4gnpsgsZIExWBRl6xKRhXwJtlhqkVbMQpqVWMbhlPy6LbuzD0LEc73PJqtYtC/QXcLWZx6eWOu1YUa5iqQrQGKiI6Dim0KPve4oDlaPIrhitP5y27lGMAhReR2/yGF4KbvUxg5FXjyT4WS1es/Qdi9Ha/zV9+NT3yRjJ9j/6FE9jzjX+ERO/6z0U5E3pjk2D5+tKfkkX/y1QJ20nEJ+BEk//uzePrVKlZkF67bUqgD8wkdBnJiCi5o5hSpQ/6gIgm2K3lVeNU580q2eUVNjqLdc87kiVCLcrWYJAIv29g9PSLNJmOixALk0xg+hOZdQBz4Lw4ZntTYuVWANx1fWuCY05JdudqjSZ75ZfHYVQfbthRqreBTDvE+T7mhj6F2Lwf7vSIdexpHJN7t3yVH0QJy8PtM1OQdyznQFygkQ6AMVoIi7flTtOwaIHIsRnHcS0bw42Z+PNZnl6K/mTjwf44G3TFQvLWzHsMzpXGG9xVmFkJcx5x0v7TEg07xgfSGGGKTOZe2sm3I5epCTYAIURSliLK14POU19YAEaDY8uj2PkZDLEHsUbiS52iAdBU/hhngH3SdlfXXQu0YkqI/hb6II3RIRvrjphj7b8XxsZ6KE56/Y9otfTsXvlN8xL8FLNTyfxoXY/Pk3krh9nSrCxV3wFnRp5ESGFS7lbI2ReccKnDALtNKXtf6STIVF1AYLbKj8JFlMZYtzsQH+eLjoDd9cTH2arSAWkDPkIyDSr4iwcRHth6UHr+OojsoqOsUIzJ/5GnFpq+xEPUb4lyhZu5gs6IF2d/3F42Pc5KG/qDQENhVyb0Xvn4lBeevJy5Li8UbenbgUazYTgXnLjKcFcnWn4XodrZ2bqz5us06a48/1u/1Q+x8xuYxb9D/WSsf/b/EWh83GZlYqQe6vE39kWcvJllA/TjC69jQx3JToUaYYuAkhZy8FGgGBVxy3AiH/w+IAc22k1vJq1VX9P4O7GKhaCW38AqZ8/4GDm8lDnNbO7HFjrrnY/whvxepH2CL/z8YFlFwYiIejiRk9PSNX3ZcU//H67feYod89CXGBW7wkcEnQB3NFvOU+DuPi5837PVNhcrICFLxbp0SY2dNji584wRupwq0T1jo0eVxVCPXQhAgBYiJwRzrdQVRn6YUbunyivZR3WE8JKe3+EhWJdKiG/RGOr1w9Fpc7A66qwWGz7gJkb+XjCbhN5yIDYd89LYQ97GPmyy6uLggx6v8mEVMR8XwRqtQ/Xnu4Os6TkqOW7ciEnRJA17fdgs3eBcBcxQrQHLd+o0vQWTidXZBR5aVzzFFT5eAKdziRY/WRQNN4Wef165d+5iAjfln6QoZeyRyTi8ZAsm/26FjBza+3c+YTcaHwCImp3ZrcTMWq0O8S/PsIUdulujEd62P5XvltSW/bFBPaBQqmxzxjBchMSw9b/8FAAD//1T/mjUAAAAGSURBVAMAGAKKj5wgLgAAAAAASUVORK5CYII=","aria-hidden","true",1,"tjcaptcha-right-wrapper-text"],[1,"tjcaptcha-privacy-box-content"],["target","_blank","rel","noopener noreferrer","href","https://cloud.tencent.com/document/product/1110/104522","aria-label","PrivacyTerms",1,"tjcaptcha-privacy-box"],["d","M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z","fill","currentColor"]],template:function(r,o){r&1&&(_(0,Yo,2,2),_(1,Xo,1,1)),r&2&&(x(o.isVisible?0:-1),f(),x(o.isVisible?-1:1))},dependencies:[gt],styles:[".validator-container[_ngcontent-%COMP%]{margin-bottom:.5em;min-height:78px}.tjcaptcha-robot-box-container[_ngcontent-%COMP%]{color:#f44336;width:302px}#cap_iframe.tjcaptcha-robot-box[_ngcontent-%COMP%]{padding:0 16px;display:inline-flex;align-items:center;cursor:pointer;transition:all .2s ease;-webkit-user-select:none;user-select:none;width:100%;height:76px;box-sizing:border-box;overflow:hidden;border-radius:2px;border:1px solid #e0e0e0;background-color:#fafafa}#cap_iframe.tjcaptcha-robot-box[_ngcontent-%COMP%]:hover{border-color:#4285f4;box-shadow:0 0 0 1px #4285f41a}#cap_iframe.tjcaptcha-robot-box.theme-dark[_ngcontent-%COMP%]{background-color:#1a1a1a;border-color:#555;color:#fff}#cap_iframe.tjcaptcha-robot-box.theme-dark[_ngcontent-%COMP%]:hover{border-color:#4285f4;box-shadow:0 0 0 1px #4285f433}#cap_iframe.tjcaptcha-robot-box.theme-light[_ngcontent-%COMP%]{background-color:#fff;border-color:#d3d3d3;color:#000}#cap_iframe.tjcaptcha-robot-box.theme-light[_ngcontent-%COMP%]:hover{border-color:#4285f4;box-shadow:0 0 0 1px #4285f41a}.captcha-checkbox-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.captcha-checkbox[_ngcontent-%COMP%]{width:28px;height:28px;border:2px solid #d3d3d3;border-radius:3px;display:flex;align-items:center;justify-content:center;background-color:#fff;transition:all .2s ease;flex-shrink:0}.captcha-checkbox.checked[_ngcontent-%COMP%]{background-color:#4285f4;border-color:#4285f4}.tjcaptcha-robot-box.theme-dark[_ngcontent-%COMP%]   .captcha-checkbox[_ngcontent-%COMP%]{background-color:#2a2a2a;border-color:#555}.tjcaptcha-robot-box.theme-dark[_ngcontent-%COMP%]   .captcha-checkbox.checked[_ngcontent-%COMP%]{background-color:#4285f4;border-color:#4285f4}.tjcaptcha-robot-box.theme-light[_ngcontent-%COMP%]   .captcha-checkbox[_ngcontent-%COMP%]{background-color:#fff;border-color:#d3d3d3}.tjcaptcha-robot-box.theme-light[_ngcontent-%COMP%]   .captcha-checkbox.checked[_ngcontent-%COMP%]{background-color:#4285f4;border-color:#4285f4}.checkmark[_ngcontent-%COMP%]{width:16px;height:16px;color:#fff}.captcha-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400;line-height:1.5}.tjcaptcha-robot-box.theme-dark[_ngcontent-%COMP%]   .captcha-label[_ngcontent-%COMP%]{color:#fff}.tjcaptcha-robot-box.theme-light[_ngcontent-%COMP%]   .captcha-label[_ngcontent-%COMP%]{color:#000}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-left-wrapper[_ngcontent-%COMP%]{flex:1;display:flex;height:28px;line-height:28px}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-left-wrapper[_ngcontent-%COMP%]   .tjcaptcha-left-checkBox[_ngcontent-%COMP%]{width:26.5px;height:26.5px;gap:0;-webkit-border-radius:2px 0 0 0;border-radius:2px 0 0;border:1.5px solid #999;margin-right:12px;position:relative;background-color:#fff}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-left-wrapper[_ngcontent-%COMP%]   .tjcaptcha-left-div-box[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-left-wrapper[_ngcontent-%COMP%]   .tjcaptcha-left-div-box[_ngcontent-%COMP%]   .tjcaptcha-left-checkBox[_ngcontent-%COMP%]{width:26.5px;height:26.5px;gap:0;-webkit-border-radius:2px 0 0 0;border-radius:2px 0 0;border:1.5px solid #999;margin-right:12px;position:relative;background-color:#fff}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-left-wrapper[_ngcontent-%COMP%]   .tjcaptcha-left-div-box[_ngcontent-%COMP%]   .tjcaptcha-left-checkBox[_ngcontent-%COMP%]   .tjcaptcha-checkBox-img-loading[_ngcontent-%COMP%]{position:absolute;display:none;width:19px;top:4.25px;left:4.25px;-webkit-animation:tencent-captcha-animate-rotate .5s linear infinite;animation:tencent-captcha-animate-rotate .5s linear infinite}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-left-wrapper[_ngcontent-%COMP%]   .tjcaptcha-left-div-box[_ngcontent-%COMP%]   .tjcaptcha-left-checkBox[_ngcontent-%COMP%]   .tjcaptcha-checkBox-img-done[_ngcontent-%COMP%]{position:absolute;display:none;width:26.5px;top:0;left:0}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-left-wrapper[_ngcontent-%COMP%]   .tjcaptcha-left-div-box[_ngcontent-%COMP%]   .tjcaptcha-left-div[_ngcontent-%COMP%]{font-size:14px;font-weight:600;text-align:left;color:#333;max-width:140px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:1.2}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-right-wrapper[_ngcontent-%COMP%]{width:85px;text-align:center}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-right-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-right-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;text-decoration-thickness:initial!important;text-underline-offset:initial!important}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-right-wrapper[_ngcontent-%COMP%]   .tjcaptcha-right-wrapper-text[_ngcontent-%COMP%]{display:block;width:85px;border:0;margin-top:4px}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-right-wrapper[_ngcontent-%COMP%]   .tjcaptcha-privacy-box-content[_ngcontent-%COMP%]{width:161px;margin-left:-38px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-right-wrapper[_ngcontent-%COMP%]   .tjcaptcha-privacy-box-content[_ngcontent-%COMP%]   .tjcaptcha-privacy-box[_ngcontent-%COMP%]{white-space:nowrap;font-weight:400;line-height:8px;margin-top:4px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:scale(.67);-ms-transform:scale(.67);transform:scale(.67);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:auto;border-bottom:1px solid transparent;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:none;background:none;text-decoration:none}.tjcaptcha-robot-box[_ngcontent-%COMP%]   .tjcaptcha-right-wrapper[_ngcontent-%COMP%]   .tjcaptcha-privacy-box-content[_ngcontent-%COMP%]   .tjcaptcha-privacy-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;transform-origin:left;display:inline-block;color:#666;max-width:70px;text-align:left;white-space:normal;word-break:break-all;line-height:10px}"],changeDetection:1});let i=n;return i})();function Jo(i,n){if(i&1&&(h(0,"div"),E(1,"div",4)(2,"div",9),p()),i&2){let e=z();f(),Q("innerHTML",e.intro,jt)}}function $o(i,n){i&1&&(h(0,"button",6)(1,"span"),W(2),ce(3,"translate"),p()()),i&2&&(f(2),le(me(3,1,"common_btn.cancel")))}function ea(i,n){i&1&&(h(0,"button",7)(1,"span"),W(2),ce(3,"translate"),p()()),i&2&&(f(2),le(me(3,1,"notification_newPrivacy_dialog.action_agree_title")))}function ta(i,n){i&1&&(h(0,"button",8)(1,"span"),W(2),ce(3,"translate"),p()()),i&2&&(f(2),le(me(3,1,"dialog_close_button")))}var yr=(()=>{let n=class n{constructor(t,r){this.data=t,this.translate=r,this.needConfirm=!0,this.needConfirm=!!this.data.needConfirm}ngOnInit(){this.translate.get(`data-use-policy.${this.data.version}.title`).subscribe(t=>{this.title=t}),this.translate.get(`data-use-policy.${this.data.version}.intro`).subscribe(t=>{this.intro=t}),this.translate.get(`data-use-policy.${this.data.version}.body`).subscribe(t=>{this.policyBody=t})}};n.\u0275fac=function(r){return new(r||n)(l(ei),l(pt))},n.\u0275cmp=X({type:n,selectors:[["policy-disclosure"]],standalone:!1,decls:13,vars:6,consts:[["id","nvg-policy-header",1,"row"],[1,"col"],[1,"brand"],["mat-dialog-title",""],[3,"innerHTML"],["align","end",1,"action-buttons"],["mat-dialog-close","CANCEL","type","button","na-on","click","na-event-category","dataUsePolicy disclosure","na-event-action","cancel",1,"btn","alt-btn"],["cdkfocusinitial","","mat-dialog-close","OK","type","button","na-on","click","na-event-category","dataUsePolicy disclosure","na-event-action","confirm",1,"btn"],["cdkfocusinitial","","mat-dialog-close","OK","type","button","na-on","click","na-event-category","dataUsePolicy disclosure","na-event-action","close",1,"btn"],[1,"divider"]],template:function(r,o){r&1&&(h(0,"div",0)(1,"div",1),E(2,"div",2),p(),E(3,"div",1),p(),h(4,"h2",3),W(5),p(),h(6,"mat-dialog-content"),_(7,Jo,3,1,"div"),E(8,"div",4),p(),h(9,"mat-dialog-actions",5),_(10,$o,4,3,"button",6),_(11,ea,4,3,"button",7),_(12,ta,4,3,"button",8),p()),r&2&&(f(5),le(o.title),f(2),x(o.intro?7:-1),f(),Q("innerHTML",o.policyBody,jt),f(2),x(o.needConfirm?10:-1),f(),x(o.needConfirm?11:-1),f(),x(o.needConfirm?-1:12))},dependencies:[ni,ii,oi,ri,gt],styles:[".brand[_ngcontent-%COMP%]{width:110px;height:44px;display:inline-block}.divider[_ngcontent-%COMP%]{display:block;margin:0;border-top-width:1px;border-top-style:solid;border-top-color:#0000001f}.mat-mdc-flat-button[_ngcontent-%COMP%]{border-width:0!important;border-radius:2px;margin-left:7px;margin-right:7px;text-decoration:none;text-align:center;display:inline-block;min-width:30px;background-color:#76b900;text-transform:capitalize;padding:12px;min-width:60px;color:#fff;font:400 14px/1 NVIDIA,Arial,Helvetica,sans-serif;cursor:pointer}button.dark[_ngcontent-%COMP%]{background-color:#666!important}"],changeDetection:1});let i=n;return i})();var kr=(()=>{let n=class n{constructor(t,r,o,a){this.config=t,this.http=r,this.location=o,this.dialog=a,this.appConfig=t.config,this.getPolicyVersion(d=>{this.policyVersion=d})}showDisclosure(t,r,o,a){this.getPolicyVersion(d=>{if(Number.parseInt(d)<0){o("OK");return}this.dialog.open(yr,{data:{version:d,needConfirm:r},direction:t}).afterClosed().subscribe(F=>{o&&o(F)})},a)}getPolicyVersion(t,r){if(this.policyVersion){t(this.policyVersion);return}try{let o=this.location.path();if(o.split("/").length<2)return;let a;if(o.split("/")[1]==="v1")a=this.appConfig.jarvis.endpoints.privacyPolicyVersionUrl;else return;let d=new Zn({"Content-Type":"application/json"});this.http.get(a,{headers:d}).subscribe(v=>{t(v.textVersion.toString())},v=>{r&&r(v)})}catch(o){r&&r(o)}}};n.\u0275fac=function(r){return new(r||n)(de(Z),de(Jn),de(Kn),de(ti))},n.\u0275prov=Le({token:n,factory:n.\u0275fac});let i=n;return i})();var ac=(()=>{let n=class n{constructor(t,r,o,a,d){this.translateService=r,this.securityService=o,this.disclosureService=a,this.config=d,this.eventCategory="create accout",this.dirChangeSubscription=Ce.EMPTY,this.direction=t.value,this.dirChangeSubscription=t.change.subscribe(()=>{this.direction=t.value})}onTermsAndPolicyClick(t){t.target.id==="viewTermsLink"||t.target.id==="implicitViewTermsLink"?(bt.sendEvent(this.eventCategory,"terms Link",null),this.viewTerms()):t.target.id==="dataPolicyLink"?(bt.sendEvent(this.eventCategory,"policy Link",null),this.showDataPolicy()):t.target.id==="privacyPolicyLink"&&(bt.sendEvent(this.eventCategory,"privacy Link",null),this.viewPrivacyPolicy())}ngOnDestroy(){this.dirChangeSubscription!==null&&this.dirChangeSubscription.unsubscribe()}viewTerms(){let t=Zt.getExternalLink(this.config,this.translateService.getCurrentLang(),"externalLinks.terms");this.securityService.openExternalLink(t)}viewPrivacyPolicy(){let t=Zt.getExternalLink(this.config,this.translateService.getCurrentLang(),"externalLinks.about.privacy");window.open(`/exit?url=${t}`,"_blank")}showDataPolicy(){this.disclosureService.showDisclosure(this.direction,!1,t=>{},t=>{t instanceof Xn})}};n.\u0275fac=function(r){return new(r||n)(l(ft),l(pt),l(fi),l(kr),l(Z))},n.\u0275dir=m({type:n,selectors:[["","terms-link-handler",""]],hostBindings:function(r,o){r&1&&D("click",function(d){return o.onTermsAndPolicyClick(d)})},inputs:{eventCategory:"eventCategory"},standalone:!1});let i=n;return i})();var lc=(()=>{let n=class n{constructor(t,r){this.el=t,this.control=r}ConfigUpdateOnToChange(){let t=this.control.control;!t.dirty&&this.el.nativeElement.value&&(t.markAsDirty(),t.setValue(this.el.nativeElement.value)),t._updateOn!=="change"&&setTimeout(()=>{t._updateOn="change"})}};n.\u0275fac=function(r){return new(r||n)(l(g),l(M))},n.\u0275dir=m({type:n,selectors:[["","update-on-change-after-paste-blur",""]],hostBindings:function(r,o){r&1&&D("blur",function(){return o.ConfigUpdateOnToChange()})("paste",function(){return o.ConfigUpdateOnToChange()})},standalone:!1});let i=n;return i})();var Zc=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=q({type:n}),n.\u0275inj=G({providers:[ci,mi,{provide:Qn,useClass:hi,multi:!0}],imports:[Wt,ui,ai,Re,kn,Cn,fe,Xt,di.forChild(),Re,kn,Cn,Xt,Wt]});let i=n;return i})();export{P as a,Or as b,Ci as c,oe as d,B as e,ji as f,Qr as g,$r as h,M as i,ka as j,Ca as k,Ie as l,un as m,Ke as n,fn as o,po as p,wa as q,en as r,bo as s,Gi as t,yo as u,Ma as v,Na as w,Ea as x,$i as y,gn as z,Co as A,So as B,Rt as C,Vt as D,dr as E,cr as F,Da as G,Zi as H,Tt as I,Re as J,Ao as K,kn as L,$l as M,Cn as N,td as O,id as P,od as Q,fd as R,kd as S,Nd as T,Od as U,Wd as V,kr as W,ac as X,lc as Y,Zc as Z};
