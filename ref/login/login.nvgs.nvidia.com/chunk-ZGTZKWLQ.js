import{g as vt,h as gt}from"./chunk-VDJBERPR.js";import{A as pt,E as ut,I as ht,K as bt,M as ft,P as kt,T as _t,V as N,a as R,b as st,c as ot,d as I,e as ct,j as lt,t as mt,w as dt}from"./chunk-TS2MXJ5K.js";import{$a as u,Ab as it,Bb as T,Ea as x,Ia as p,Ja as S,Ka as A,M as L,Pa as $,Qa as X,S as y,T as B,Ta as G,Ua as J,V as c,Va as Y,Xb as rt,Y as V,Z as q,_a as b,aa as _,ab as tt,ba as H,c as m,ea as Z,hb as nt,i as z,jb as w,lb as M,oa as W,pb as et,qa as Q,qb as D,ra as K,rb as E,xa as C,xb as at,ya as d,za as U,zb as v}from"./chunk-ARDZYBBY.js";import{a as h}from"./chunk-ACKM7FAG.js";var Ct=Math.pow(2,31)-1,g=class{_overlayRef;instance;containerInstance;_afterDismissed=new m;_afterOpened=new m;_onAction=new m;_durationTimeoutId;_dismissedByAction=!1;constructor(s,n){this._overlayRef=n,this.containerInstance=s,s._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(s){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(s,Ct))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},k=new B("MatSnackBarData"),f=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},wt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=A({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return a})(),Mt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=A({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return a})(),Dt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=A({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return a})(),yt=(()=>{class a{snackBarRef=c(g);data=c(k);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){function n(t,e){if(t&1){let i=nt();b(0,"div",1)(1,"button",2),w("click",function(){V(i);let o=M();return q(o.action())}),v(2),u()()}if(t&2){let i=M();d(2),T(" ",i.data.action," ")}}return p({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,i){e&1&&(b(0,"div",0),v(1),u(),J(2,n,3,1,"div",1)),e&2&&(d(),T(" ",i.data.message,`
`),d(),Y(i.hasAction?2:-1))},dependencies:[vt,wt,Mt,Dt],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return a})(),O="_mat-snack-bar-enter",P="_mat-snack-bar-exit",Et=(()=>{class a extends ot{_ngZone=c(Z);_elementRef=c(K);_changeDetectorRef=c(rt);_platform=c(lt);_animationsDisabled=N();snackBarConfig=c(f);_document=c(H);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=c(_);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new m;_onExit=new m;_onEnter=new m;_animationState="void";_live;_label;_role;_liveElementId=c(ut).getId("mat-snack-bar-container-live-");constructor(){super();let n=this.snackBarConfig;n.politeness==="assertive"&&!n.announcementMessage?this._live="assertive":n.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(n){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(n);return this._afterPortalAttached(),t}attachTemplatePortal(n){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(n);return this._afterPortalAttached(),t}attachDomPortal=n=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(n);return this._afterPortalAttached(),t};onAnimationEnd(n){n===P?this._completeExit():n===O&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?C(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(O)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(O)},200)))}exit(){return this._destroyed?z(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?C(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(P)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(P),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let n=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>n.classList.add(r)):n.classList.add(t)),this._exposeToModals();let e=this._label.nativeElement,i="mdc-snackbar__label";e.classList.toggle(i,!e.querySelector(`.${i}`))}_exposeToModals(){let n=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let e=0;e<t.length;e++){let i=t[e],r=i.getAttribute("aria-owns");this._trackedModals.add(i),r?r.indexOf(n)===-1&&i.setAttribute("aria-owns",r+" "+n):i.setAttribute("aria-owns",n)}}_clearFromModals(){this._trackedModals.forEach(n=>{let t=n.getAttribute("aria-owns");if(t){let e=t.replace(this._liveElementId,"").trim();e.length>0?n.setAttribute("aria-owns",e):n.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let n=this._elementRef.nativeElement,t=n.querySelector("[aria-hidden]"),e=n.querySelector("[aria-live]");if(t&&e){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(i=document.activeElement),t.removeAttribute("aria-hidden"),e.appendChild(t),i==null||i.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){let n=["label"];function t(e,i){}return p({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&et(I,7)(n,7),i&2){let o;D(o=E())&&(r._portalOutlet=o.first),D(o=E())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&w("animationend",function(l){return r.onAnimationEnd(l.animationName)})("animationcancel",function(l){return r.onAnimationEnd(l.animationName)}),i&2&&at("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[$],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(b(0,"div",1)(1,"div",2,0)(3,"div",3),X(4,t,0,0,"ng-template",4),u(),tt(5,"div"),u()()),i&2&&(d(5),G("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[I],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return a})(),Tt=new B("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new f}),F=(()=>{class a{_live=c(dt);_injector=c(_);_breakpointObserver=c(mt);_parentSnackBar=c(a,{optional:!0,skipSelf:!0});_defaultConfig=c(Tt);_animationsDisabled=N();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=yt;snackBarContainerComponent=Et;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let n=this._parentSnackBar;return n?n._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(n){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=n:this._snackBarRefAtThisLevel=n}openFromComponent(n,t){return this._attach(n,t)}openFromTemplate(n,t){return this._attach(n,t)}open(n,t="",e){let i=h(h({},this._defaultConfig),e);return i.data={message:n,action:t},i.announcementMessage===n&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(n,t){let e=t&&t.viewContainerRef&&t.viewContainerRef.injector,i=_.create({parent:e||this._injector,providers:[{provide:f,useValue:t}]}),r=new R(this.snackBarContainerComponent,t.viewContainerRef,i),o=n.attach(r);return o.instance.snackBarConfig=t,o.instance}_attach(n,t){let e=h(h(h({},new f),this._defaultConfig),t),i=this._createOverlay(e),r=this._attachSnackBarContainer(i,e),o=new g(r,i);if(n instanceof U){let l=new st(n,null,{$implicit:e.data,snackBarRef:o});o.instance=r.attachTemplatePortal(l)}else{let l=this._createInjector(e,o),At=new R(n,void 0,l),Bt=r.attachComponentPortal(At);o.instance=Bt.instance}return this._breakpointObserver.observe(_t.HandsetPortrait).pipe(L(i.detachments())).subscribe(l=>{i.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),e.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(e.announcementMessage,e.politeness)}),this._animateSnackBar(o,e),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(n,t){n.afterDismissed().subscribe(()=>{this._openedSnackBarRef==n&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&n.afterOpened().subscribe(()=>n._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{n.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):n.containerInstance.enter()}_createOverlay(n){let t=new ht;t.direction=n.direction;let e=bt(this._injector),i=n.direction==="rtl",r=n.horizontalPosition==="left"||n.horizontalPosition==="start"&&!i||n.horizontalPosition==="end"&&i,o=!r&&n.horizontalPosition!=="center";return r?e.left("0"):o?e.right("0"):e.centerHorizontally(),n.verticalPosition==="top"?e.top("0"):e.bottom("0"),t.positionStrategy=e,t.disableAnimations=this._animationsDisabled,ft(this._injector,t)}_createInjector(n,t){let e=n&&n.viewContainerRef&&n.viewContainerRef.injector;return _.create({parent:e||this._injector,providers:[{provide:g,useValue:t},{provide:k,useValue:n.data}]})}static \u0275fac=function(t){return new(t||a)};static \u0275prov=Q({token:a,factory:a.\u0275fac})}return a})();var xt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=S({type:a});static \u0275inj=y({providers:[F],imports:[kt,ct,gt,yt,pt]})}return a})();var St=(()=>{let s=class s{constructor(t){this.data=t,this.message=t}};s.\u0275fac=function(e){return new(e||s)(x(k))},s.\u0275cmp=p({type:s,selectors:[["nv-notification-bar-temmplate"]],standalone:!1,decls:4,vars:1,consts:[["successNotificationTemplate",""],[1,"success-notification"]],template:function(e,i){e&1&&(b(0,"div",null,0)(2,"span",1),v(3),u()()),e&2&&(d(3),it(i.message))},encapsulation:2,changeDetection:1});let a=s;return a})();var en=(()=>{let s=class s{constructor(t){this.matSnackBar=t}ngOnInit(){this.direction=document.getElementById("page-content").getAttribute("dir")}ngOnChanges(t){for(let e in t)t.hasOwnProperty(e)&&e==="message"&&t.message.currentValue&&this.showSuccessNotification(t.message.currentValue)}showSuccessNotification(t){this.message=t,this.matSnackBar.openFromComponent(St,{duration:3e3,direction:this.direction,verticalPosition:window.innerWidth<=648?"bottom":"top",data:t})}};s.\u0275fac=function(e){return new(e||s)(x(F))},s.\u0275cmp=p({type:s,selectors:[["nv-notification-bar"]],inputs:{message:"message"},standalone:!1,features:[W],decls:0,vars:0,template:function(e,i){},encapsulation:2,changeDetection:1});let a=s;return a})();var mn=(()=>{let s=class s{};s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=S({type:s}),s.\u0275inj=y({providers:[{provide:k,useValue:{}}],imports:[xt]});let a=s;return a})();export{en as a,mn as b};
