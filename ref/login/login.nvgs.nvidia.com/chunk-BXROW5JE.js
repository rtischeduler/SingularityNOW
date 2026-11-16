import{A as z,U as B}from"./chunk-TS2MXJ5K.js";import{$ as b,$a as l,Ia as k,Ja as S,Qa as x,Qb as O,S as v,T as y,Ta as m,V as _,Za as p,_ as h,_a as c,_b as u,ab as f,gb as d,kc as E,lb as C,pb as M,qb as T,ra as w,rb as N,vb as P,wb as g,xb as W,ya as s,yb as A}from"./chunk-ARDZYBBY.js";var I=new y("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:R})}),R=100,D=10,Z=(()=>{class n{_elementRef=_(w);_noopAnimations;get color(){return this._color||this._defaultColor}set color(r){this._color=r}_color;_defaultColor="primary";_determinateCircle;constructor(){let r=_(I),i=B(),t=this._elementRef.nativeElement;this._noopAnimations=i==="di-disabled"&&!!r&&!r._forceAnimations,this.mode=t.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&i==="reduced-motion"&&t.classList.add("mat-progress-spinner-reduced-motion"),r&&(r.color&&(this.color=this._defaultColor=r.color),r.diameter&&(this.diameter=r.diameter),r.strokeWidth&&(this.strokeWidth=r.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,r||0))}_value=0;get diameter(){return this._diameter}set diameter(r){this._diameter=r||0}_diameter=R;get strokeWidth(){var r;return(r=this._strokeWidth)!=null?r:this.diameter/10}set strokeWidth(r){this._strokeWidth=r||0}_strokeWidth;_circleRadius(){return(this.diameter-D)/2}_viewBox(){let r=this._circleRadius()*2+this.strokeWidth;return`0 0 ${r} ${r}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=(function(){let r=["determinateSpinner"];function i(t,a){if(t&1&&(h(),c(0,"svg",11),f(1,"circle",12),l()),t&2){let e=C();m("viewBox",e._viewBox()),s(),g("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),m("r",e._circleRadius())}}return k({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(a,e){if(a&1&&M(r,5),a&2){let o;T(o=N())&&(e._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(a,e){a&2&&(m("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",e.mode==="determinate"?e.value:null)("mode",e.mode),A("mat-"+e.color),g("width",e.diameter,"px")("height",e.diameter,"px")("--%NS%mat-progress-spinner-size",e.diameter+"px")("--%NS%mat-progress-spinner-active-indicator-width",e.diameter+"px"),W("_mat-animation-noopable",e._noopAnimations)("mdc-circular-progress--indeterminate",e.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",u],diameter:[2,"diameter","diameter",u],strokeWidth:[2,"strokeWidth","strokeWidth",u]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(a,e){if(a&1&&(x(0,i,2,8,"ng-template",null,0,O),c(2,"div",2,1),h(),c(4,"svg",3),f(5,"circle",4),l()(),b(),c(6,"div",5)(7,"div",6)(8,"div",7),d(9,8),l(),c(10,"div",9),d(11,8),l(),c(12,"div",10),d(13,8),l()()()),a&2){let o=P(1);s(4),m("viewBox",e._viewBox()),s(),g("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeDashOffset(),"px")("stroke-width",e._circleStrokeWidth(),"%"),m("r",e._circleRadius()),s(4),p("ngTemplateOutlet",o),s(2),p("ngTemplateOutlet",o),s(2),p("ngTemplateOutlet",o)}},dependencies:[E],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return n})();var J=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=S({type:n});static \u0275inj=v({imports:[z]})}return n})();export{I as a,Z as b,J as c};
