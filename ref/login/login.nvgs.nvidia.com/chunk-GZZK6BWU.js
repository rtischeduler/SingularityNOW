import{a as qe,b as He,d as Qe,e as Ye,f as je,h as U}from"./chunk-DLYX7SQJ.js";import{C as ze,D as Ge,H as Ue,I as Xe,J as $e,d as Oe,i as ke,m as Me,o as Ie,y as Ke}from"./chunk-2FKYNSC7.js";import{A as Ae,C as Fe,D as Re,E as Ne,F as N,H as Ve,L as Le,N as Y,O as j,P as Pe,V as We,X as Be,i as Ee,w as Te,y as De}from"./chunk-TS2MXJ5K.js";import{$a as S,A as te,Ab as H,Ba as de,Ia as me,Ib as Se,Ja as pe,K as P,L as W,M,Qa as he,S as ne,T as A,Ta as R,Tb as we,Ua as B,V as c,Va as K,Xb as xe,Y as ae,Z as ie,Za as ue,Zb as v,_ as re,_a as b,_b as Q,aa as le,ab as ge,c as k,da as F,ga as se,hb as fe,jb as E,l as V,lb as I,mb as _e,nb as z,oa as oe,ob as ye,p as ee,pb as be,qb as w,ra as ce,rb as x,t as D,u as L,vb as ve,xb as G,ya as C,yb as Ce,zb as q}from"./chunk-ARDZYBBY.js";var T=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new k;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,r,m=!0,O){this._multiple=n,this._emitChanges=m,this.compareWith=O,r&&r.length&&(n?r.forEach(f=>this._markSelected(f)):this._markSelected(r[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let r=this._hasQueuedChanges();return n&&this._emitChangeEvent(),r}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(m=>this._markSelected(m));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_deselect(n){this._verifyValueAssignment(n),n.forEach(m=>this._unmarkSelected(m));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_setSelection(n){this._verifyValueAssignment(n);let r=this.selected,m=new Set(n.map(f=>this._getConcreteValue(f)));n.forEach(f=>this._markSelected(f)),r.filter(f=>!m.has(this._getConcreteValue(f,m))).forEach(f=>this._unmarkSelected(f));let O=this._hasQueuedChanges();return this._emitChangeEvent(),O}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,r){if(this.compareWith){r=r!=null?r:this._selection;for(let m of r)if(this.compareWith(n,m))return m;return n}else return n}};var dt=new A("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let h=c(le);return()=>Ve(h)}}),mt=new A("MAT_SELECT_CONFIG"),pt=new A("MatSelectTrigger"),X=class{source;value;constructor(n,r){this.source=n,this.value=r}},nn=(()=>{var n,r,m,O,f,$,J;class h{_viewportRuler=c(Fe);_changeDetectorRef=c(xe);_elementRef=c(ce);_dir=c(De,{optional:!0});_idGenerator=c(Ne);_renderer=c(de);_parentFormField=c(Ge,{optional:!0});ngControl=c(ke,{self:!0,optional:!0});_liveAnnouncer=c(Te);_defaultOptions=c(mt,{optional:!0});_animationsDisabled=We();_popoverLocation;_initialized=new k;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,d=Ye(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&d===1?i.scrollTop=0:i.scrollTop=je(o.offsetTop,o.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new X(this,e)}_scrollStrategyFactory=c(dt);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new k;_errorStateTracker;stateChanges=new k;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=((n=this._defaultOptions)==null?void 0:n.overlayPanelClass)||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=se(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=(m=(r=this._defaultOptions)==null?void 0:r.hideSingleSelectionIndicator)!=null?m:!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){var e,t,i,d;return(d=(i=this._required)!=null?i:(t=(e=this.ngControl)==null?void 0:e.control)==null?void 0:t.hasValidator(Oe.required))!=null?d:!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=(f=(O=this._defaultOptions)==null?void 0:O.disableOptionCentering)!=null?f:!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=(J=($=this._defaultOptions)==null?void 0:$.canSelectNullableOptions)!=null?J:!1;optionSelectionChanges=ee(()=>{let e=this.options;return e?e.changes.pipe(P(e),W(()=>D(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(W(()=>this.optionSelectionChanges))});openedChange=new F;_openedStream=this.openedChange.pipe(L(e=>e),V(()=>{}));_closedStream=this.openedChange.pipe(L(e=>!e),V(()=>{}));selectionChange=new F;valueChange=new F;constructor(){var u;let e=c(Ue),t=c(Me,{optional:!0}),i=c(Ie,{optional:!0}),d=c(new we("tabindex"),{optional:!0}),o=c(Le,{optional:!0}),_=c(Ke,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),((u=this._defaultOptions)==null?void 0:u.typeaheadDebounceInterval)!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Xe(e,_||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=d==null?0:parseInt(d)||0,this._popoverLocation=(o==null?void 0:o.usePopover)===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new T(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(M(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(M(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(P(null),M(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){var e,t;(e=this._cleanupDetach)==null||e.call(this),(t=this._keyManager)==null||t.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){var e;this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),(e=this._cleanupDetach)==null||e.call(this),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(te(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){var d;if(this._animationsDisabled||!this.panel){this._detachOverlay();return}(d=this._cleanupDetach)==null||d.call(this),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{var _;o.animationName==="_mat-select-exit"&&((_=this._cleanupDetach)==null||_.call(this),this._detachOverlay())}),i=setTimeout(()=>{var o;(o=this._cleanupDetach)==null||o.call(this),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){var e,t;return this.multiple?((e=this._selectionModel)==null?void 0:e.selected)||[]:(t=this._selectionModel)==null?void 0:t.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,d=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&d&&!N(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let _=this.selected;o.onKeydown(e);let u=this.selected;u&&_!==u&&this._liveAnnouncer.announce(u.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,d=i===40||i===38,o=t.isTyping();if(d&&e.altKey)e.preventDefault(),this.close();else if(!o&&(i===13||i===32)&&t.activeItem&&!N(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let _=this.options.some(u=>!u.disabled&&!u.selected);this.options.forEach(u=>{u.disabled||(_?u.select():u.deselect())})}else{let _=t.activeItemIndex;t.onKeydown(e),this._multiple&&d&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==_&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!N(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){var e;this._focused=!1,(e=this._keyManager)==null||e.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch(d){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Y?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Be(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=D(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(M(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),D(...this.options.map(t=>t._stateChanges)).pipe(M(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){var e;return!this._panelOpen&&!this.disabled&&((e=this.options)==null?void 0:e.length)>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){var i;if(this.ariaLabel)return null;let e=((i=this._parentFormField)==null?void 0:i.getLabelId())||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){var t;if(this.ariaLabel)return null;let e=((t=this._parentFormField)==null?void 0:t.getLabelId())||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){let t=this._elementRef.nativeElement.getAttribute("aria-describedby");return(t==null?void 0:t.split(" "))||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ee(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||h)};static \u0275cmp=(function(){let e=["trigger"],t=["panel"],i=[[["mat-select-trigger"]],"*"],d=["mat-select-trigger","*"];function o(s,p){if(s&1&&(b(0,"span",4),q(1),S()),s&2){let a=I();C(),H(a.placeholder)}}function _(s,p){s&1&&z(0)}function u(s,p){if(s&1&&(b(0,"span",11),q(1),S()),s&2){let a=I(2);C(),H(a.triggerValue)}}function nt(s,p){if(s&1&&(b(0,"span",5),B(1,_,1,0)(2,u,2,1,"span",11),S()),s&2){let a=I();C(),K(a.customTrigger?1:2)}}function at(s,p){var a,l,g,Z;if(s&1){let y=fe();b(0,"div",12,1),E("keydown",function(it){ae(y);let rt=I();return ie(rt._handleKeydown(it))}),z(2,1),S()}if(s&2){let y=I();Ce(y.panelClass),G("mat-select-panel-animations-enabled",!y._animationsDisabled)("mat-primary",((a=y._parentFormField)==null?void 0:a.color)==="primary")("mat-accent",((l=y._parentFormField)==null?void 0:l.color)==="accent")("mat-warn",((g=y._parentFormField)==null?void 0:g.color)==="warn")("mat-undefined",!((Z=y._parentFormField)!=null&&Z.color)),R("id",y.id+"-panel")("aria-multiselectable",y.multiple)("aria-label",y.ariaLabel||null)("aria-labelledby",y._getPanelAriaLabelledby())}}return me({type:h,selectors:[["mat-select"]],contentQueries:function(p,a,l){if(p&1&&ye(l,pt,5)(l,Qe,5)(l,He,5),p&2){let g;w(g=x())&&(a.customTrigger=g.first),w(g=x())&&(a.options=g),w(g=x())&&(a.optionGroups=g)}},viewQuery:function(p,a){if(p&1&&be(e,5)(t,5)(j,5),p&2){let l;w(l=x())&&(a.trigger=l.first),w(l=x())&&(a.panel=l.first),w(l=x())&&(a._overlayDir=l.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(p,a){p&1&&E("keydown",function(g){return a._handleKeydown(g)})("focus",function(){return a._onFocus()})("blur",function(){return a._onBlur()}),p&2&&(R("id",a.id)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a.panelOpen?a.id+"-panel":null)("aria-expanded",a.panelOpen)("aria-label",a.ariaLabel||null)("aria-required",a.required.toString())("aria-disabled",a.disabled.toString())("aria-invalid",a.errorState)("aria-activedescendant",a._getAriaActiveDescendant()),G("mat-mdc-select-disabled",a.disabled)("mat-mdc-select-invalid",a.errorState)("mat-mdc-select-required",a.required)("mat-mdc-select-empty",a.empty)("mat-mdc-select-multiple",a.multiple)("mat-select-open",a.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",v],disableRipple:[2,"disableRipple","disableRipple",v],tabIndex:[2,"tabIndex","tabIndex",s=>s==null?0:Q(s)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",v],placeholder:"placeholder",required:[2,"required","required",v],multiple:[2,"multiple","multiple",v],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",v],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Q],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",v]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Se([{provide:ze,useExisting:h},{provide:qe,useExisting:h}]),oe],ngContentSelectors:d,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(p,a){if(p&1&&(_e(i),b(0,"div",2,0),E("click",function(){return a.open()}),b(3,"div",3),B(4,o,2,1,"span",4)(5,nt,3,1,"span",5),S(),b(6,"div",6)(7,"div",7),re(),b(8,"svg",8),ge(9,"path",9),S()()()(),he(10,at,3,16,"ng-template",10),E("detach",function(){return a.close()})("backdropClick",function(){return a.close()})("overlayKeydown",function(g){return a._handleOverlayKeydown(g)})),p&2){let l=ve(1);C(3),R("id",a._valueId),C(),K(a.empty?4:5),C(6),ue("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",a._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",a._scrollStrategy)("cdkConnectedOverlayOrigin",a._preferredOverlayOrigin||l)("cdkConnectedOverlayPositions",a._positions)("cdkConnectedOverlayWidth",a._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",a._popoverLocation)}},dependencies:[Y,j],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return h})();var an=(()=>{class h{static \u0275fac=function(m){return new(m||h)};static \u0275mod=pe({type:h});static \u0275inj=ne({imports:[Pe,U,Ae,Re,$e,U]})}return h})();export{mt as a,nn as b,an as c};
