var yg=Object.defineProperty;var bg=(e,t,n)=>t in e?yg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var k=(e,t,n)=>bg(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class _i{constructor(t,n,i,s,r="div"){this.parent=t,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),_i.nextNameID=_i.nextNameID||0,this.$name.id=`lil-gui-name-${++_i.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const n=this.parent.add(this.object,this.property,t);return n.name(this._name),this.destroy(),n}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Tg extends _i{constructor(t,n,i){super(t,n,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ec(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?"#"+n:!1}const Ag={isPrimitive:!0,match:e=>typeof e=="string",fromHexString:Ec,toHexString:Ec},va={isPrimitive:!0,match:e=>typeof e=="number",fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},wg={isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){const i=va.fromHexString(e);t[0]=(i>>16&255)/255*n,t[1]=(i>>8&255)/255*n,t[2]=(i&255)/255*n},toHexString([e,t,n],i=1){i=255/i;const s=e*i<<16^t*i<<8^n*i<<0;return va.toHexString(s)}},Rg={isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){const i=va.fromHexString(e);t.r=(i>>16&255)/255*n,t.g=(i>>8&255)/255*n,t.b=(i&255)/255*n},toHexString({r:e,g:t,b:n},i=1){i=255/i;const s=e*i<<16^t*i<<8^n*i<<0;return va.toHexString(s)}},Cg=[Ag,va,wg,Rg];function Pg(e){return Cg.find(t=>t.match(e))}class Lg extends _i{constructor(t,n,i,s){super(t,n,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Pg(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ec(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const n=this._format.fromHexString(t);this.setValue(n)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Tl extends _i{constructor(t,n,i){super(t,n,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ig extends _i{constructor(t,n,i,s,r,a){super(t,n,i,"lil-number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,n=!0){return this._step=t,this._stepExplicit=n,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let n=(t-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const n=()=>{let E=parseFloat(this.$input.value);isNaN(E)||(this._stepExplicit&&(E=this._snap(E)),this.setValue(this._clamp(E)))},i=E=>{const w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+E),this.$input.value=this.getValue())},s=E=>{E.key==="Enter"&&this.$input.blur(),E.code==="ArrowUp"&&(E.preventDefault(),i(this._step*this._arrowKeyMultiplier(E))),E.code==="ArrowDown"&&(E.preventDefault(),i(this._step*this._arrowKeyMultiplier(E)*-1))},r=E=>{this._inputFocused&&(E.preventDefault(),i(this._step*this._normalizeMouseWheel(E)))};let a=!1,o,l,c,h,d;const u=5,m=E=>{o=E.clientX,l=c=E.clientY,a=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",M)},g=E=>{if(a){const w=E.clientX-o,S=E.clientY-l;Math.abs(S)>u?(E.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>u&&M()}if(!a){const w=E.clientY-c;d-=w*this._step*this._arrowKeyMultiplier(E),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=E.clientY},M=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",M)},p=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",n),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(f,E,w,S,A)=>(f-E)/(w-E)*(A-S)+S,n=f=>{const E=this.$slider.getBoundingClientRect();let w=t(f,E.left,E.right,this._min,this._max);this._snapClampSetValue(w)},i=f=>{this._setDraggingStyle(!0),n(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{n(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),n(f.touches[0].clientX),a=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,a=!0):c(f),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=f=>{if(a){const E=f.touches[0].clientX-o,w=f.touches[0].clientY-l;Math.abs(E)>Math.abs(w)?c(f):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else f.preventDefault(),n(f.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},m=this._callOnFinishChange.bind(this),g=400;let M;const p=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const w=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(M),M=setTimeout(m,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,n="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${n}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:n,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(n=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(t){let n=this._stepExplicit?1:10;return t.shiftKey?n*=10:t.altKey&&(n/=10),n}_snap(t){let n=0;return this._hasMin?n=this._min:this._hasMax&&(n=this._max),t-=n,t=Math.round(t/this._step)*this._step,t+=n,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Dg extends _i{constructor(t,n,i,s){super(t,n,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(n=>{const i=document.createElement("option");i.textContent=n,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),n=this._values.indexOf(t);return this.$select.selectedIndex=n,this.$display.textContent=n===-1?t:this._names[n],this}}class Fg extends _i{constructor(t,n,i){super(t,n,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Ug=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function Ng(e){const t=document.createElement("style");t.innerHTML=e;const n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(t,n):document.head.appendChild(t)}let fd=!1;class Dh{constructor({parent:t,autoPlace:n=t===void 0,container:i,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!fd&&o&&(Ng(Ug),fd=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(t,n,i,s,r){if(Object(i)===i)return new Dg(this,t,n,i);const a=t[n];switch(typeof a){case"number":return new Ig(this,t,n,i,s,r);case"boolean":return new Tg(this,t,n);case"string":return new Fg(this,t,n);case"function":return new Tl(this,t,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,t,`
	value:`,a)}addColor(t,n,i=1){return new Lg(this,t,n,i)}addFolder(t){const n=new Dh({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(t,n=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof Tl||i._name in t.controllers&&i.load(t.controllers[i._name])}),n&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Tl)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("lil-transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(n=>{t=t.concat(n.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(n=>{t=t.concat(n.foldersRecursive())}),t}}async function Og(){let e;try{e=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"},audio:!1})}catch(n){throw new Error(pd(n))}const t=document.createElement("video");t.muted=!0,t.playsInline=!0,t.autoplay=!0,t.setAttribute("muted",""),t.setAttribute("playsinline",""),t.setAttribute("autoplay",""),t.srcObject=e;try{await Bg(t),await t.play()}catch(n){for(const i of e.getTracks())i.stop();throw t.srcObject=null,new Error(pd(n))}return{video:t,stop(){for(const n of e.getTracks())n.stop();t.srcObject=null}}}function Bg(e){return e.readyState>=HTMLMediaElement.HAVE_METADATA?Promise.resolve():new Promise((t,n)=>{const i=()=>{r(),t()},s=()=>{r(),n(new Error("video metadata load failed"))},r=()=>{e.removeEventListener("loadedmetadata",i),e.removeEventListener("error",s)};e.addEventListener("loadedmetadata",i),e.addEventListener("error",s)})}function pd(e){switch(e instanceof DOMException?e.name:""){case"NotAllowedError":case"SecurityError":return"カメラの使用が許可されませんでした。ブラウザの設定でカメラへのアクセスを許可してください。";case"NotFoundError":case"OverconstrainedError":return"利用可能なカメラが見つかりませんでした。カメラが接続されているか確認してください。";case"NotReadableError":return"カメラにアクセスできませんでした。他のアプリがカメラを使用中でないか確認してください。";default:return"カメラの初期化中にエラーが発生しました。ページを再読み込みして再度お試しください。"}}var vr=typeof self<"u"?self:{};function Op(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=vr,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function us(){throw Error("Invalid UTF8")}function md(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let Oa,Al;const kg=typeof TextDecoder<"u";let zg;const Hg=typeof TextEncoder<"u";function Bp(e){if(Hg)e=(zg||(zg=new TextEncoder)).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){const r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}function kp(e){vr.setTimeout((()=>{throw e}),0)}var yc,Vg=Op(610401301,!1),gd=Op(748402147,!0);function _d(){var e=vr.navigator;return e&&(e=e.userAgent)?e:""}const vd=vr.navigator;function Ko(e){return Ko[" "](e),e}yc=vd&&vd.userAgentData||null,Ko[" "]=function(){};const zp={};let ca=null;function Gg(e){const t=e.length;let n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let s=0;return(function(r,a){function o(c){for(;l<r.length;){const h=r.charAt(l++),d=ca[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}Hp();let l=0;for(;;){const c=o(-1),h=o(0),d=o(64),u=o(64);if(u===64&&c===-1)break;a(c<<2|h>>4),d!=64&&(a(h<<4&240|d>>2),u!=64&&a(d<<6&192|u))}})(e,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function Hp(){if(!ca){ca={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=e.concat(t[n].split(""));zp[n]=i;for(let s=0;s<i.length;s++){const r=i[s];ca[r]===void 0&&(ca[r]=s)}}}}var Wg=typeof Uint8Array<"u",Vp=!(!(Vg&&yc&&yc.brands.length>0)&&(_d().indexOf("Trident")!=-1||_d().indexOf("MSIE")!=-1))&&typeof btoa=="function";const xd=/[-_.]/g,Xg={"-":"+",_:"/",".":"="};function qg(e){return Xg[e]||""}function Gp(e){if(!Vp)return Gg(e);e=xd.test(e)?e.replace(xd,qg):e,e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Fh(e){return Wg&&e!=null&&e instanceof Uint8Array}var xr={};function Ls(){return Yg||(Yg=new vi(null,xr))}function Uh(e){Wp(xr);var t=e.g;return(t=t==null||Fh(t)?t:typeof t=="string"?Gp(t):null)==null?t:e.g=t}var vi=class{h(){return new Uint8Array(Uh(this)||0)}constructor(e,t){if(Wp(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let Yg,$g;function Wp(e){if(e!==xr)throw Error("illegal external caller")}function Xp(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function bc(e){return Xp(e=Error(e),"warning"),e}function Mr(e,t){if(e!=null){var n=$g??($g={}),i=n[e]||0;i>=t||(n[e]=i+1,Xp(e=Error(),"incident"),kp(e))}}function Fr(){return typeof BigInt=="function"}var Ur=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Ei(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var Kg=Ei("jas",void 0,!0),Md=Ei(void 0,"0di"),Kr=Ei(void 0,"1oa"),In=Ei(void 0,Symbol()),Zg=Ei(void 0,"0ub"),Jg=Ei(void 0,"0ubs"),Tc=Ei(void 0,"0ubsb"),jg=Ei(void 0,"0actk"),Sr=Ei("m_m","Pa",!0),Sd=Ei();const qp={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Yp=Object.defineProperties,Lt=Ur?Kg:"Ga";var ks;const Ed=[];function Aa(e,t){Ur||Lt in e||Yp(e,qp),e[Lt]|=t}function Je(e,t){Ur||Lt in e||Yp(e,qp),e[Lt]=t}function wa(e){return Aa(e,34),e}function xa(e){return Aa(e,8192),e}Je(Ed,7),ks=Object.freeze(Ed);var Er={};function Fn(e,t){return t===void 0?e.h!==Is&&!!(2&(0|e.v[Lt])):!!(2&t)&&e.h!==Is}const Is={};function Nh(e,t){if(e!=null){if(typeof e=="string")e=e?new vi(e,xr):Ls();else if(e.constructor!==vi)if(Fh(e))e=e.length?new vi(new Uint8Array(e),xr):Ls();else{if(!t)throw Error();e=void 0}}return e}class yd{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}var Qg=Object.freeze({});function $p(e,t,n){const i=128&t?0:-1,s=e.length;var r;(r=!!s)&&(r=(r=e[s-1])!=null&&typeof r=="object"&&r.constructor===Object);const a=s+(r?-1:0);for(t=128&t?1:0;t<a;t++)n(t-i,e[t]);if(r){e=e[s-1];for(const o in e)!isNaN(o)&&n(+o,e[o])}}var Kp={};function Nr(e){return 128&e?Kp:void 0}function Zo(e){return e.Na=!0,e}var t_=Zo((e=>typeof e=="number")),bd=Zo((e=>typeof e=="string")),e_=Zo((e=>typeof e=="boolean")),Jo=typeof vr.BigInt=="function"&&typeof vr.BigInt(0)=="bigint";function Dn(e){var t=e;if(bd(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(t_(t)&&!Number.isSafeInteger(t))throw Error(String(t));return Jo?BigInt(e):e=e_(e)?e?"1":"0":bd(e)?e.trim()||"0":String(e)}var Ac=Zo((e=>Jo?e>=i_&&e<=r_:e[0]==="-"?Td(e,n_):Td(e,s_)));const n_=Number.MIN_SAFE_INTEGER.toString(),i_=Jo?BigInt(Number.MIN_SAFE_INTEGER):void 0,s_=Number.MAX_SAFE_INTEGER.toString(),r_=Jo?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Td(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}const a_=typeof Uint8Array.prototype.slice=="function";let o_,Ce=0,Ge=0;function Ad(e){const t=e>>>0;Ce=t,Ge=(e-t)/4294967296>>>0}function yr(e){if(e<0){Ad(-e);const[t,n]=kh(Ce,Ge);Ce=t>>>0,Ge=n>>>0}else Ad(e)}function Oh(e){const t=o_||(o_=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),Ge=0,Ce=t.getUint32(0,!0)}function Zp(e,t){const n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Ma(e,t)}function l_(e,t){return Dn(Fr()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):Ma(e,t))}function Jp(e,t){return Fr()?Dn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):Dn(Bh(e,t))}function Ma(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else Fr()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+wd(n)+wd(e));return n}function wd(e){return e=String(e),"0000000".slice(e.length)+e}function Bh(e,t){if(2147483648&t)if(Fr())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=kh(e,t);e="-"+Ma(n,i)}else e=Ma(e,t);return e}function jo(e){if(e.length<16)yr(Number(e));else if(Fr())e=BigInt(e),Ce=Number(e&BigInt(4294967295))>>>0,Ge=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");Ge=Ce=0;const n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){const r=Number(e.slice(i,s));Ge*=1e6,Ce=1e6*Ce+r,Ce>=4294967296&&(Ge+=Math.trunc(Ce/4294967296),Ge>>>=0,Ce>>>=0)}if(t){const[i,s]=kh(Ce,Ge);Ce=i,Ge=s}}}function kh(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function ii(e){return Array.prototype.slice.call(e)}const Ra=typeof BigInt=="function"?BigInt.asIntN:void 0,c_=typeof BigInt=="function"?BigInt.asUintN:void 0,Ds=Number.isSafeInteger,Qo=Number.isFinite,br=Math.trunc,h_=Dn(0);function ha(e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function mi(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Sa(e){if(e!=null&&typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}function jp(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const u_=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ca(e){switch(typeof e){case"bigint":return!0;case"number":return Qo(e);case"string":return u_.test(e);default:return!1}}function Or(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Qo(e)?0|e:void 0}function Qp(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Qo(e)?e>>>0:void 0}function tm(e){const t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(jo(e),Bh(Ce,Ge))}function zh(e){if(e=br(e),!Ds(e)){yr(e);var t=Ce,n=Ge;(e=2147483648&n)&&(n=~n>>>0,(t=1+~t>>>0)==0&&(n=n+1>>>0)),e=typeof(t=Zp(t,n))=="number"?e?-t:t:e?"-"+t:t}return e}function em(e){var t=br(Number(e));return Ds(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),tm(e))}function nm(e){var t=br(Number(e));return Ds(t)?Dn(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Fr()?Dn(Ra(64,BigInt(e))):Dn(tm(e)))}function im(e){return Ds(e)?e=Dn(zh(e)):(e=br(e),Ds(e)?e=String(e):(yr(e),e=Bh(Ce,Ge)),e=Dn(e)),e}function Co(e){const t=typeof e;return e==null?e:t==="bigint"?Dn(Ra(64,e)):Ca(e)?t==="string"?nm(e):im(e):void 0}function sm(e){if(typeof e!="string")throw Error();return e}function Pa(e){if(e!=null&&typeof e!="string")throw Error();return e}function sn(e){return e==null||typeof e=="string"?e:void 0}function Hh(e,t,n,i){return e!=null&&e[Sr]===Er?e:Array.isArray(e)?((i=(n=0|e[Lt])|32&i|2&i)!==n&&Je(e,i),new t(e)):(n?2&i?((e=t[Md])||(wa((e=new t).v),e=t[Md]=e),t=e):t=new t:t=void 0,t)}function d_(e,t,n){if(t)t:{if(!Ca(t=e))throw bc("int64");switch(typeof t){case"string":t=nm(t);break t;case"bigint":t=Dn(Ra(64,t));break t;default:t=im(t)}}else t=Co(e);return(e=t)==null?n?h_:void 0:e}const f_={};let p_=(function(){try{return Ko(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class wl{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const m_=p_?(Object.setPrototypeOf(wl.prototype,Map.prototype),Object.defineProperties(wl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),wl):class extends Map{constructor(){super()}};function Rd(e){return e}function Rl(e){if(2&e.J)throw Error("Cannot mutate an immutable Map")}var Ni=class extends m_{constructor(e,t,n=Rd,i=Rd){super(),this.J=0|e[Lt],this.K=t,this.S=n,this.fa=this.K?g_:i;for(let s=0;s<e.length;s++){const r=e[s],a=n(r[0],!1,!0);let o=r[1];t?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(e){return xa(Array.from(super.entries(),e))}clear(){Rl(this),super.clear()}delete(e){return Rl(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new yd(e,__,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new yd(e,Ni.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach(((n,i,s)=>{e.call(t,s.get(i),i,s)})):super.forEach(e,t)}set(e,t){return Rl(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function g_(e,t,n,i,s,r){return e=Hh(e,i,n,r),s&&(e=Gh(e)),e}function __(e){return[e,this.get(e)]}let v_;function Cd(){return v_||(v_=new Ni(wa([]),void 0,void 0,void 0,f_))}function tl(e){return In?e[In]:void 0}function Po(e,t){for(const n in e)!isNaN(n)&&t(e,+n,e[n])}Ni.prototype.toJSON=void 0;var wc=class{};const x_={Ka:!0};function M_(e,t){t<100||Mr(Jg,1)}function el(e,t,n,i){const s=i!==void 0;i=!!i;var r,a=In;!s&&Ur&&a&&(r=e[a])&&Po(r,M_),a=[];var o=e.length;let l;r=4294967295;let c=!1;const h=!!(64&t),d=h?128&t?0:-1:void 0;1&t||(l=o&&e[o-1],l!=null&&typeof l=="object"&&l.constructor===Object?r=--o:l=void 0,!h||128&t||s||(c=!0,r=r-d+d)),t=void 0;for(var u=0;u<o;u++){let m=e[u];if(m!=null&&(m=n(m,i))!=null)if(h&&u>=r){const g=u-d;(t??(t={}))[g]=m}else a[u]=m}if(l)for(let m in l){if((o=l[m])==null||(o=n(o,i))==null)continue;let g;u=+m,h&&!Number.isNaN(u)&&(g=u+d)<r?a[g]=o:(t??(t={}))[m]=o}return t&&(c?a.push(t):a[r]=t),s&&In&&(e=tl(e))&&e instanceof wc&&(a[In]=(function(m){const g=new wc;return Po(m,((M,p,f)=>{g[p]=ii(f)})),g.da=m.da,g})(e)),a}function S_(e){return e[0]=Ea(e[0]),e[1]=Ea(e[1]),e}function Ea(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return Ac(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[Lt];return e.length===0&&1&t?void 0:el(e,t,Ea)}if(e!=null&&e[Sr]===Er)return rm(e);if(e instanceof vi){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if(Vp){for(var n="",i=0,s=t.length-10240;i<s;)n+=String.fromCharCode.apply(null,t.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?t.subarray(i):t),t=btoa(n)}else{n===void 0&&(n=0),Hp(),n=zp[n],i=Array(Math.floor(t.length/3)),s=n[64]||"";let c=0,h=0;for(;c<t.length-2;c+=3){var r=t[c],a=t[c+1],o=t[c+2],l=n[r>>2];r=n[(3&r)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[h++]=l+r+a+o}switch(l=0,o=s,t.length-c){case 2:o=n[(15&(l=t[c+1]))<<2]||s;case 1:t=t[c],i[h]=n[t>>2]+n[(3&t)<<4|l>>4]+o+s}t=i.join("")}e=e.g=t}return e}return e instanceof Ni?e=e.size!==0?e.V(S_):void 0:void 0}return e}let E_,y_;function rm(e){return el(e=e.v,0|e[Lt],Ea)}function Ts(e,t){return am(e,t[0],t[1])}function am(e,t,n,i=0){if(e==null){var s=32;n?(e=[n],s|=128):e=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(s=0|e[Lt],gd&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(gd)throw Error("carr");Mr(jg,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&Je(e,s|i),e;if(n&&(s|=128,n!==e[0]))throw Error("mid");t:{s|=64;var r=(n=e).length;if(r){var a=r-1;const l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(r=+o)<a&&(n[r+t]=l[o],delete l[o]);s=-16760833&s|(1023&a)<<14;break t}}if(t){if((o=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return Je(e,64|s|i),e}function b_(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var n=0|e[Lt];return e.length===0&&1&n?void 0:Pd(e,n,t)}if(e!=null&&e[Sr]===Er)return Ld(e);if(e instanceof Ni){if(2&(t=e.J))return e;if(!e.size)return;if(n=wa(e.V()),e.K)for(e=0;e<n.length;e++){const i=n[e];let s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[Sr]===Er?Ld(s):Array.isArray(s)?Pd(s,0|s[Lt],!!(32&t)):void 0,i[1]=s}return n}return e instanceof vi?e:void 0}function Pd(e,t,n){return 2&t||(!n||4096&t||16&t?e=Br(e,t,!1,n&&!(16&t)):(Aa(e,34),4&t&&Object.freeze(e))),e}function Vh(e,t,n){return e=new e.constructor(t),n&&(e.h=Is),e.m=Is,e}function Ld(e){const t=e.v,n=0|t[Lt];return Fn(e,n)?e:Wh(e,t,n)?Vh(e,t):Br(t,n)}function Br(e,t,n,i){return i??(i=!!(34&t)),e=el(e,t,b_,i),i=32,n&&(i|=2),Je(e,t=16769217&t|i),e}function Gh(e){const t=e.v,n=0|t[Lt];return Fn(e,n)?Wh(e,t,n)?Vh(e,t,!0):new e.constructor(Br(t,n,!1)):e}function kr(e){if(e.h!==Is)return!1;var t=e.v;return Aa(t=Br(t,0|t[Lt]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function zr(e){if(!kr(e)&&Fn(e,0|e.v[Lt]))throw Error()}function zs(e,t){t===void 0&&(t=0|e[Lt]),32&t&&!(4096&t)&&Je(e,4096|t)}function Wh(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Je(t,2|n),e.h=Is,!0)}const om=Dn(0),Xi={};function Pe(e,t,n,i,s){if((t=Oi(e.v,t,n,s))!==null||i&&e.m!==Is)return t}function Oi(e,t,n,i){if(t===-1)return null;const s=t+(n?0:-1),r=e.length-1;let a,o;if(!(r<1+(n?0:-1))){if(s>=r)if(a=e[r],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[t],o=!0;else{if(s!==r)return;n=a}else n=e[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[t]=i:e[s]=i,i}return n}}function ve(e,t,n,i){zr(e),Ke(e=e.v,0|e[Lt],t,n,i)}function Ke(e,t,n,i,s){const r=n+(s?0:-1);var a=e.length-1;if(a>=1+(s?0:-1)&&r>=a){const o=e[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,t}return r<=a?(e[r]=i,t):(i!==void 0&&(n>=(a=(t??(t=0|e[Lt]))>>14&1023||536870912)?i!=null&&(e[a+(s?0:-1)]={[n]:i}):e[r]=i),t)}function Ss(){return Qg===void 0?2:4}function Es(e,t,n,i,s){let r=e.v,a=0|r[Lt];i=Fn(e,a)?1:i,s=!!s||i===3,i===2&&kr(e)&&(r=e.v,a=0|r[Lt]);let o=(e=Xh(r,t))===ks?7:0|e[Lt],l=qh(o,a);var c=!(4&l);if(c){4&l&&(e=ii(e),o=0,l=ws(l,a),a=Ke(r,a,t,e));let h=0,d=0;for(;h<e.length;h++){const u=n(e[h]);u!=null&&(e[d++]=u)}d<h&&(e.length=d),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==o&&(Je(e,l),2&l&&Object.freeze(e)),lm(e,l,r,a,t,i,c,s)}function lm(e,t,n,i,s,r,a,o){let l=t;return r===1||r===4&&(2&t||!(16&t)&&32&i)?As(t)||((t|=!e.length||a&&!(4096&t)||32&i&&!(4096&t||16&t)?2:256)!==l&&Je(e,t),Object.freeze(e)):(r===2&&As(t)&&(e=ii(e),l=0,t=ws(t,i),i=Ke(n,i,s,e)),As(t)||(o||(t|=16),t!==l&&Je(e,t))),2&t||!(4096&t||16&t)||zs(n,i),e}function Xh(e,t,n){return e=Oi(e,t,n),Array.isArray(e)?e:ks}function qh(e,t){return 2&t&&(e|=2),1|e}function As(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function cm(e){return Nh(e,!0)}function hm(e){e=ii(e);for(let t=0;t<e.length;t++){const n=e[t]=ii(e[t]);Array.isArray(n[1])&&(n[1]=wa(n[1]))}return xa(e)}function Qi(e,t,n,i){zr(e),Ke(e=e.v,0|e[Lt],t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Hr(e,t,n){if(2&t)throw Error();const i=Nr(t);let s=Xh(e,n,i),r=s===ks?7:0|s[Lt],a=qh(r,t);return(2&a||As(a)||16&a)&&(a===r||As(a)||Je(s,a),s=ii(s),r=0,a=ws(a,t),Ke(e,t,n,s,i)),a&=-13,a!==r&&Je(s,a),s}function Cl(e,t){var n=e0;return $h(Yh(e=e.v),e,void 0,n)===t?t:-1}function Yh(e){if(Ur)return e[Kr]??(e[Kr]=new Map);if(Kr in e)return e[Kr];const t=new Map;return Object.defineProperty(e,Kr,{value:t}),t}function um(e,t,n,i,s){const r=Yh(e),a=$h(r,e,t,n,s);return a!==i&&(a&&(t=Ke(e,t,a,void 0,s)),r.set(n,i)),t}function $h(e,t,n,i,s){let r=e.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){const o=i[a];Oi(t,o,s)!=null&&(r!==0&&(n=Ke(t,n,r,void 0,s)),r=o)}return e.set(i,r),r}function Kh(e,t,n){let i=0|e[Lt];const s=Nr(i),r=Oi(e,n,s);let a;if(r!=null&&r[Sr]===Er){if(!Fn(r))return kr(r),r.v;a=r.v}else Array.isArray(r)&&(a=r);if(a){const o=0|a[Lt];2&o&&(a=Br(a,o))}return a=Ts(a,t),a!==r&&Ke(e,i,n,a,s),a}function dm(e,t,n,i,s){let r=!1;if((i=Oi(e,i,s,(a=>{const o=Hh(a,n,!1,t);return r=o!==a&&o!=null,o})))!=null)return r&&!Fn(i)&&zs(e,t),i}function he(e,t,n,i){let s=e.v,r=0|s[Lt];if((t=dm(s,r,t,n,i))==null)return t;if(r=0|s[Lt],!Fn(e,r)){const a=Gh(t);a!==t&&(kr(e)&&(s=e.v,r=0|s[Lt]),r=Ke(s,r,n,t=a,i),zs(s,r))}return t}function fm(e,t,n,i,s,r,a,o){var l=Fn(e,n);r=l?1:r,a=!!a||r===3,l=o&&!l,(r===2||l)&&kr(e)&&(n=0|(t=e.v)[Lt]);var c=(e=Xh(t,s))===ks?7:0|e[Lt],h=qh(c,n);if(o=!(4&h)){var d=e,u=n;const m=!!(2&h);m&&(u|=2);let g=!m,M=!0,p=0,f=0;for(;p<d.length;p++){const E=Hh(d[p],i,!1,u);if(E instanceof i){if(!m){const w=Fn(E);g&&(g=!w),M&&(M=w)}d[f++]=E}}f<p&&(d.length=f),h|=4,h=M?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==c&&(Je(e,h),2&h&&Object.freeze(e)),l&&!(8&h||!e.length&&(r===1||r===4&&(2&h||!(16&h)&&32&n)))){for(As(h)&&(e=ii(e),h=ws(h,n),n=Ke(t,n,s,e)),i=e,l=h,c=0;c<i.length;c++)(d=i[c])!==(h=Gh(d))&&(i[c]=h);l|=8,Je(e,h=l=i.length?4096|l:-4097&l)}return lm(e,h,t,n,s,r,o,a)}function Bi(e,t,n){const i=e.v;return fm(e,i,0|i[Lt],t,n,Ss(),!1,!0)}function pm(e){return e==null&&(e=void 0),e}function Ht(e,t,n,i,s){return ve(e,n,i=pm(i),s),i&&!Fn(i)&&zs(e.v),e}function fa(e,t,n,i){t:{var s=i=pm(i);zr(e);const r=e.v;let a=0|r[Lt];if(s==null){const o=Yh(r);if($h(o,r,a,n)!==t)break t;o.set(n,0)}else a=um(r,a,n,t);Ke(r,a,t,s)}i&&!Fn(i)&&zs(e.v)}function ws(e,t){return-273&(2&t?2|e:-3&e)}function Zh(e,t,n,i){var s=i;zr(e),e=fm(e,i=e.v,0|i[Lt],n,t,2,!0),s=s??new n,e.push(s),t=n=e===ks?7:0|e[Lt],(s=Fn(s))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&Je(e,n),s||zs(i)}function Yn(e,t,n){return Or(Pe(e,t,void 0,n))}function ze(e,t){return Pe(e,t,void 0,void 0,mi)??0}function ki(e,t,n){if(n!=null){if(typeof n!="number"||!Qo(n))throw bc("int32");n|=0}ve(e,t,n)}function Ot(e,t,n){ve(e,t,ha(n))}function Un(e,t,n){Qi(e,t,Pa(n),"")}function Lo(e,t,n){{zr(e);const a=e.v;let o=0|a[Lt];if(n==null)Ke(a,o,t);else{var i=e=n===ks?7:0|n[Lt],s=As(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=ii(n),i=0,e=ws(e,o),r=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,s=0;s<n.length;s++){const l=n[s],c=sm(l);Object.is(l,c)||(r&&(n=ii(n),i=0,e=ws(e,o),r=!1),n[s]=c)}e!==i&&(r&&(n=ii(n),e=ws(e,o)),Je(n,e)),Ke(a,o,t,n)}}}function nl(e,t,n){zr(e),Es(e,t,sn,2,!0).push(sm(n))}var Ys=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function Jh(e,t){if(typeof e=="string")return new Ys(Gp(e),t);if(Array.isArray(e))return new Ys(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new Ys(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new Ys(e,!1);if(e.constructor===vi)return t=Uh(e)||new Uint8Array(0),new Ys(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Ys(e,!1);throw Error()}function jh(e,t){let n,i=0,s=0,r=0;const a=e.h;let o=e.g;do n=a[o++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);if(r>32)for(s|=(127&n)>>4,r=3;r<32&&128&n;r+=7)n=a[o++],s|=(127&n)<<r;if(Rs(e,o),!(128&n))return t(i>>>0,s>>>0);throw Error()}function Qh(e){let t=0,n=e.g;const i=n+10,s=e.h;for(;n<i;){const r=s[n++];if(t|=r,(128&r)==0)return Rs(e,n),!!(127&t)}throw Error()}function ss(e){const t=e.h;let n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return Rs(e,n),s}function Mi(e){return ss(e)>>>0}function Io(e){var t=e.h;const n=e.g;var i=t[n],s=t[n+1];const r=t[n+2];return t=t[n+3],Rs(e,e.g+4),e=2*((s=(i<<0|s<<8|r<<16|t<<24)>>>0)>>31)+1,i=s>>>23&255,s&=8388607,i==255?s?NaN:e*(1/0):i==0?1401298464324817e-60*e*s:e*Math.pow(2,i-150)*(s+8388608)}function T_(e){return ss(e)}function Rs(e,t){if(e.g=t,t>e.l)throw Error()}function mm(e,t){if(t<0)throw Error();const n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function gm(e,t){if(t==0)return Ls();var n=mm(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):a_?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?Ls():new vi(n,xr)}var Id=[];function _m(e,t,n,i){if(Do.length){const s=Do.pop();return s.o(i),s.g.init(e,t,n,i),s}return new A_(e,t,n,i)}function vm(e){e.g.clear(),e.l=-1,e.h=-1,Do.length<100&&Do.push(e)}function xm(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=Mi(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function So(e){switch(e.h){case 0:e.h!=0?So(e):Qh(e.g);break;case 1:Rs(e=e.g,e.g+8);break;case 2:if(e.h!=2)So(e);else{var t=Mi(e.g);Rs(e=e.g,e.g+t)}break;case 5:Rs(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!xm(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}So(e)}break;default:throw Error()}}function La(e,t,n){const i=e.g.l;var s=Mi(e.g);let r=(s=e.g.g+s)-i;if(r<=0&&(e.g.l=s,n(t,e,void 0,void 0,void 0),r=s-e.g.g),r)throw Error();return e.g.g=s,e.g.l=i,t}function tu(e){var t=Mi(e.g),n=mm(e=e.g,t);if(e=e.h,kg){var i,s=e;(i=Al)||(i=Al=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(o){if(Oa===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Oa=!0}catch{Oa=!1}}throw!Oa&&(Al=void 0),o}}else{t=(r=n)+t,n=[];let o,l=null;for(;r<t;){var a=e[r++];a<128?n.push(a):a<224?r>=t?us():(o=e[r++],a<194||(192&o)!=128?(r--,us()):n.push((31&a)<<6|63&o)):a<240?r>=t-1?us():(o=e[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=e[r++]))!=128?(r--,us()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=t-2?us():(o=e[r++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,us()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):us(),n.length>=8192&&(l=md(l,n),n.length=0)}r=md(l,n)}return r}function Mm(e){const t=Mi(e.g);return gm(e.g,t)}function il(e,t,n){var i=Mi(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var A_=class{constructor(e,t,n,i){if(Id.length){const s=Id.pop();s.init(e,t,n,i),e=s}else e=new class{constructor(s,r,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(s,r,a,o)}init(s,r,a,{Y:o=!1,ea:l=!1}={}){this.Y=o,this.ea=l,s&&(s=Jh(s,this.ea),this.h=s.buffer,this.j=s.g,this.m=r||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,i);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:e=!1}={}){this.ha=e}},Do=[];function Dd(e){return e?/^\d+$/.test(e)?(jo(e),new Rc(Ce,Ge)):null:w_||(w_=new Rc(0,0))}var Rc=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let w_;function Fd(e){return e?/^-?\d+$/.test(e)?(jo(e),new Cc(Ce,Ge)):null:R_||(R_=new Cc(0,0))}var Cc=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let R_;function fr(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function Vr(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function sl(e,t){if(t>=0)Vr(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function eu(e){var t=Ce;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Tr(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Kn(e,t,n){Vr(e.g,8*t+n)}function nu(e,t){return Kn(e,t,2),t=e.g.end(),Tr(e,t),t.push(e.h),t}function iu(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function rl(e,t,n){Kn(e,t,2),Vr(e.g,n.length),Tr(e,e.g.end()),Tr(e,n)}function Fo(e,t,n,i){n!=null&&(t=nu(e,t),i(n,e),iu(e,t))}function yi(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var su=yi(),Sm=yi(),ru=yi(),au=yi(),ou=yi(),Em=yi(),C_=yi(),al=yi(),ym=yi(),bm=yi();function bi(e,t,n){var i=e.v;In&&In in i&&(i=i[In])&&delete i[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var It=class{constructor(e,t){this.v=am(e,t,void 0,2048)}toJSON(){return rm(this)}j(){var s;var e=h1,t=this.v,n=e.g,i=In;if(Ur&&i&&((s=t[i])==null?void 0:s[n])!=null&&Mr(Zg,3),t=e.g,Sd&&In&&Sd===void 0&&(i=(n=this.v)[In])&&(i=i.da))try{i(n,t,x_)}catch(r){kp(r)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){const e=this.v,t=0|e[Lt];return Wh(this,e,t)?Vh(this,e,!0):new this.constructor(Br(e,t,!1))}};It.prototype[Sr]=Er,It.prototype.toString=function(){return this.v.toString()};var Gr=class{constructor(e,t,n){this.g=e,this.h=t,e=su,this.l=!!e&&n===e||!1}};function ol(e,t){return new Gr(e,t,su)}function Tm(e,t,n,i,s){Fo(e,n,Cm(t,i),s)}const P_=ol((function(e,t,n,i,s){return e.h===2&&(La(e,Kh(t,i,n),s),!0)}),Tm),L_=ol((function(e,t,n,i,s){return e.h===2&&(La(e,Kh(t,i,n),s),!0)}),Tm);var ll=Symbol(),cl=Symbol(),Pc=Symbol(),Ud=Symbol(),Nd=Symbol();let Am,wm;function Hs(e,t,n,i){var s=i[e];if(s)return s;(s={}).qa=i,s.T=(function(d){switch(typeof d){case"boolean":return E_||(E_=[0,void 0,!0]);case"number":return d>0?void 0:d===0?y_||(y_=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var r=i[1];let a=1;r&&r.constructor===Object&&(s.ba=r,typeof(r=i[++a])=="function"&&(s.ma=!0,Am??(Am=r),wm??(wm=i[a+1]),r=i[a+=2]));const o={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)o[r[l]]=r;r=i[++a]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=i[++a]);var c=void 0;if(r instanceof Gr?d=r:(d=P_,a--),d==null?void 0:d.l){r=i[++a],c=i;var h=a;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);l<h;l++){const u=o[l];c?n(s,l,d,c,u):t(s,l,d,u)}}return i[e]=s}function Rm(e){return Array.isArray(e)?e[0]instanceof Gr?e:[L_,e]:[e,void 0]}function Cm(e,t){return e instanceof It?e.v:Array.isArray(e)?Ts(e,t):void 0}function lu(e,t,n,i){const s=n.g;e[t]=i?(r,a,o)=>s(r,a,o,i):s}function cu(e,t,n,i,s){const r=n.g;let a,o;e[t]=(l,c,h)=>r(l,c,h,o||(o=Hs(cl,lu,cu,i).T),a||(a=hu(i)),s)}function hu(e){let t=e[Pc];if(t!=null)return t;const n=Hs(cl,lu,cu,e);return t=n.ma?(i,s)=>Am(i,s,n):(i,s)=>{for(;xm(s)&&s.h!=4;){var r=s.l,a=n[r];if(a==null){var o=n.ba;o&&(o=o[r])&&(o=D_(o))!=null&&(a=n[r]=o)}if(a==null||!a(s,i,r)){if(a=(o=s).m,So(o),o.ha)var l=void 0;else l=o.g.g-a,o.g.g=a,l=gm(o.g,l);a=void 0,o=i,l&&((a=o[In]??(o[In]=new wc))[r]??(a[r]=[])).push(l)}}return(i=tl(i))&&(i.da=n.qa[Nd]),!0},e[Pc]=t,e[Nd]=I_.bind(e),t}function I_(e,t,n,i){var s=this[cl];const r=this[Pc],a=Ts(void 0,s.T),o=tl(e);if(o){var l=!1,c=s.ba;if(c){if(s=(h,d,u)=>{if(u.length!==0)if(c[d])for(const m of u){h=_m(m);try{l=!0,r(a,h)}finally{vm(h)}}else i==null||i(e,d,u)},t==null)Po(o,s);else if(o!=null){const h=o[t];h&&s(o,t,h)}if(l){let h=0|e[Lt];if(2&h&&2048&h&&!(n!=null&&n.Ka))throw Error();const d=Nr(h),u=(m,g)=>{if(Oi(e,m,d)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}g!=null&&(h=Ke(e,h,m,g,d)),delete o[m]};t==null?$p(a,0|a[Lt],((m,g)=>{u(m,g)})):u(t,Oi(a,t,d))}}}}function D_(e){const t=(e=Rm(e))[0].g;if(e=e[1]){const n=hu(e),i=Hs(cl,lu,cu,e).T;return(s,r,a)=>t(s,r,a,i,n)}return t}function hl(e,t,n){e[t]=n.h}function ul(e,t,n,i){let s,r;const a=n.h;e[t]=(o,l,c)=>a(o,l,c,r||(r=Hs(ll,hl,ul,i).T),s||(s=Pm(i)))}function Pm(e){let t=e[Ud];if(!t){const n=Hs(ll,hl,ul,e);t=(i,s)=>Lm(i,s,n),e[Ud]=t}return t}function Lm(e,t,n){$p(e,0|e[Lt],((i,s)=>{if(s!=null){var r=(function(a,o){var l=a[o];if(l)return l;if((l=a.ba)&&(l=l[o])){var c=(l=Rm(l))[0].h;if(l=l[1]){const h=Pm(l),d=Hs(ll,hl,ul,l).T;l=a.ma?wm(d,h):(u,m,g)=>c(u,m,g,d,h)}else l=c;return a[o]=l}})(n,i);r?r(t,s,i):i<500||Mr(Tc,3)}})),(e=tl(e))&&Po(e,((i,s,r)=>{for(Tr(t,t.g.end()),i=0;i<r.length;i++)Tr(t,Uh(r[i])||new Uint8Array(0))}))}const F_=Dn(0);function Wr(e,t){if(Array.isArray(t)){var n=0|t[Lt];if(4&n)return t;for(var i=0,s=0;i<t.length;i++){const r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),(e=-1537&(5|n))!==n&&Je(t,e),2&e&&Object.freeze(t),t}}function dn(e,t,n){return new Gr(e,t,n)}function Xr(e,t,n){return new Gr(e,t,n)}function fn(e,t,n){Ke(e,0|e[Lt],t,n,Nr(0|e[Lt]))}var U_=ol((function(e,t,n,i,s){if(e.h!==2)return!1;if(e=ii(e=La(e,Ts([void 0,void 0],i),s)),s=Nr(i=0|t[Lt]),2&i)throw Error();let r=Oi(t,n,s);if(r instanceof Ni)(2&r.J)!=0?(r=r.V(),r.push(e),Ke(t,i,n,r,s)):r.Ma(e);else if(Array.isArray(r)){var a=0|r[Lt];8192&a||Je(r,a|=8192),2&a&&(r=hm(r),Ke(t,i,n,r,s)),r.push(e)}else Ke(t,i,n,xa([e]),s);return!0}),(function(e,t,n,i,s){if(t instanceof Ni)t.forEach(((r,a)=>{Fo(e,n,Ts([a,r],i),s)}));else if(Array.isArray(t)){for(let r=0;r<t.length;r++){const a=t[r];Array.isArray(a)&&Fo(e,n,Ts(a,i),s)}xa(t)}}));function Im(e,t,n){(t=mi(t))!=null&&(Kn(e,n,5),e=e.g,Oh(t),eu(e))}function Dm(e,t,n){if(t=(function(i){if(i==null)return i;const s=typeof i;if(s==="bigint")return String(Ra(64,i));if(Ca(i)){if(s==="string")return em(i);if(s==="number")return zh(i)}})(t),t!=null&&(typeof t=="string"&&Fd(t),t!=null))switch(Kn(e,n,0),typeof t){case"number":e=e.g,yr(t),fr(e,Ce,Ge);break;case"bigint":n=BigInt.asUintN(64,t),n=new Cc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),fr(e.g,n.h,n.g);break;default:n=Fd(t),fr(e.g,n.h,n.g)}}function Fm(e,t,n){(t=Or(t))!=null&&t!=null&&(Kn(e,n,0),sl(e.g,t))}function Um(e,t,n){(t=jp(t))!=null&&(Kn(e,n,0),e.g.g.push(t?1:0))}function Nm(e,t,n){(t=sn(t))!=null&&rl(e,n,Bp(t))}function Om(e,t,n,i,s){Fo(e,n,Cm(t,i),s)}function Bm(e,t,n){(t=t==null||typeof t=="string"||t instanceof vi?t:void 0)!=null&&rl(e,n,Jh(t,!0).buffer)}function km(e,t,n){(t=Qp(t))!=null&&t!=null&&(Kn(e,n,0),Vr(e.g,t))}function zm(e,t,n){return(e.h===5||e.h===2)&&(t=Hr(t,0|t[Lt],n),e.h==2?il(e,Io,t):t.push(Io(e.g)),!0)}var We=dn((function(e,t,n){return e.h===5&&(fn(t,n,Io(e.g)),!0)}),Im,al),N_=Xr(zm,(function(e,t,n){if((t=Wr(mi,t))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&(Kn(i,s,5),i=i.g,Oh(r),eu(i))}}),al),uu=Xr(zm,(function(e,t,n){if((t=Wr(mi,t))!=null&&t.length){Kn(e,n,2),Vr(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Oh(t[i]),eu(n)}}),al),O_=dn((function(e,t,n){return e.h===5&&(fn(t,n,(e=Io(e.g))===0?void 0:e),!0)}),Im,al),rs=dn((function(e,t,n){return e.h!==0?e=!1:(fn(t,n,jh(e.g,Jp)),e=!0),e}),Dm,Em),Pl=dn((function(e,t,n){return e.h!==0?t=!1:(fn(t,n,(e=jh(e.g,Jp))===F_?void 0:e),t=!0),t}),Dm,Em),B_=dn((function(e,t,n){return e.h!==0?e=!1:(fn(t,n,jh(e.g,l_)),e=!0),e}),(function(e,t,n){if(t=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(c_(64,i));if(Ca(i)){if(s==="string")return s=br(Number(i)),Ds(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),(s=i[0]!=="-"&&((s=i.length)<20||s===20&&i<="18446744073709551615"))||(jo(i),i=Ma(Ce,Ge))),i;if(s==="number")return(i=br(i))>=0&&Ds(i)||(yr(i),i=Zp(Ce,Ge)),i}})(t),t!=null&&(typeof t=="string"&&Dd(t),t!=null))switch(Kn(e,n,0),typeof t){case"number":e=e.g,yr(t),fr(e,Ce,Ge);break;case"bigint":n=BigInt.asUintN(64,t),n=new Rc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),fr(e.g,n.h,n.g);break;default:n=Dd(t),fr(e.g,n.h,n.g)}}),C_),qe=dn((function(e,t,n){return e.h===0&&(fn(t,n,ss(e.g)),!0)}),Fm,au),Ia=Xr((function(e,t,n){return(e.h===0||e.h===2)&&(t=Hr(t,0|t[Lt],n),e.h==2?il(e,ss,t):t.push(ss(e.g)),!0)}),(function(e,t,n){if((t=Wr(Or,t))!=null&&t.length){n=nu(e,n);for(let i=0;i<t.length;i++)sl(e.g,t[i]);iu(e,n)}}),au),dr=dn((function(e,t,n){return e.h===0&&(fn(t,n,(e=ss(e.g))===0?void 0:e),!0)}),Fm,au),Le=dn((function(e,t,n){return e.h===0&&(fn(t,n,Qh(e.g)),!0)}),Um,Sm),Cs=dn((function(e,t,n){return e.h===0&&(fn(t,n,(e=Qh(e.g))===!1?void 0:e),!0)}),Um,Sm),ln=Xr((function(e,t,n){return e.h===2&&(e=tu(e),Hr(t,0|t[Lt],n).push(e),!0)}),(function(e,t,n){if((t=Wr(sn,t))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&rl(i,s,Bp(r))}}),ru),ts=dn((function(e,t,n){return e.h===2&&(fn(t,n,(e=tu(e))===""?void 0:e),!0)}),Nm,ru),Se=dn((function(e,t,n){return e.h===2&&(fn(t,n,tu(e)),!0)}),Nm,ru),nn=(function(e,t,n=su){return new Gr(e,t,n)})((function(e,t,n,i,s){return e.h===2&&(i=Ts(void 0,i),Hr(t,0|t[Lt],n).push(i),La(e,i,s),!0)}),(function(e,t,n,i,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)Om(e,t[r],n,i,s);1&(e=0|t[Lt])||Je(t,1|e)}})),we=ol((function(e,t,n,i,s,r){if(e.h!==2)return!1;let a=0|t[Lt];return um(t,a,r,n,Nr(a)),La(e,t=Kh(t,i,n),s),!0}),Om),Hm=dn((function(e,t,n){return e.h===2&&(fn(t,n,Mm(e)),!0)}),Bm,ym),k_=Xr((function(e,t,n){return(e.h===0||e.h===2)&&(t=Hr(t,0|t[Lt],n),e.h==2?il(e,Mi,t):t.push(Mi(e.g)),!0)}),(function(e,t,n){if((t=Wr(Qp,t))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&(Kn(i,s,0),Vr(i.g,r))}}),ou),z_=dn((function(e,t,n){return e.h===0&&(fn(t,n,(e=Mi(e.g))===0?void 0:e),!0)}),km,ou),cn=dn((function(e,t,n){return e.h===0&&(fn(t,n,ss(e.g)),!0)}),(function(e,t,n){(t=Or(t))!=null&&(t=parseInt(t,10),Kn(e,n,0),sl(e.g,t))}),bm);class H_{constructor(t,n){var i=On;this.g=t,this.h=n,this.m=he,this.j=Ht,this.defaultValue=void 0,this.l=i.Oa!=null?Kp:void 0}register(){Ko(this)}}function Ti(e,t){return new H_(e,t)}function ls(e,t){return(n,i)=>{{const r={ea:!0};i&&Object.assign(r,i),n=_m(n,void 0,void 0,r);try{const a=new e,o=a.v;hu(t)(o,n);var s=a}finally{vm(n)}}return s}}function dl(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Lm(this.v,t,Hs(ll,hl,ul,e)),Tr(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,s=i.length;let r=0;for(let a=0;a<s;a++){const o=i[a];n.set(o,r),r+=o.length}return t.l=[n],n}}var Od=class extends It{constructor(e){super(e)}},Bd=[0,ts,dn((function(e,t,n){return e.h===2&&(fn(t,n,(e=Mm(e))===Ls()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof It){const i=t.Ra;return void(i?(t=i(t),t!=null&&rl(e,n,Jh(t,!0).buffer)):Mr(Tc,3))}if(Array.isArray(t))return void Mr(Tc,3)}Bm(e,t,n)}),ym)];let Ll,kd=globalThis.trustedTypes;function zd(e){var t;return Ll===void 0&&(Ll=(function(){let n=null;if(!kd)return n;try{const i=s=>s;n=kd.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),e=(t=Ll)?t.createScriptURL(e):e,new class{constructor(n){this.g=n}toString(){return this.g+""}}(e)}function Ba(e,...t){if(t.length===0)return zd(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return zd(n)}var Vm=[0,qe,cn,Le,-1,Ia,cn,-1,Le],V_=class extends It{constructor(e){super(e)}},Gm=[0,Le,Se,Le,cn,-1,Xr((function(e,t,n){return(e.h===0||e.h===2)&&(t=Hr(t,0|t[Lt],n),e.h==2?il(e,T_,t):t.push(ss(e.g)),!0)}),(function(e,t,n){if((t=Wr(Or,t))!=null&&t.length){n=nu(e,n);for(let i=0;i<t.length;i++)sl(e.g,t[i]);iu(e,n)}}),bm),Se,-1,[0,Le,-1],cn,Le,-1],Wm=[0,3,Le,-1,2,[0,[2],qe,we,[0,dn((function(e,t,n){return e.h===0&&(fn(t,n,Mi(e.g)),!0)}),km,ou)]],[0,cn,Le,cn,Le,cn,Le,Se,-1],[0,[3,4],Se,-1,we,[0,qe],we,[0,cn]],[0]],Xm=[0,Se,-2],Hd=class extends It{constructor(e){super(e)}},qm=[0],Ym=[0,qe,Le,1,Le,-4],On=class extends It{constructor(e){super(e,2)}},Ze={};Ze[336783863]=[0,Se,Le,-1,qe,[0,[1,2,3,4,5,6,7,8,9],we,qm,we,Gm,we,Xm,we,Ym,we,Vm,we,[0,Se,-2],we,[0,Se,cn],we,Wm,we,[0,cn,-1,Le]],[0,Se],Le,[0,[1,3],[2,4],we,[0,Ia],-1,we,[0,ln],-1,nn,[0,Se,-1]],Se];var Vd=[0,Pl,-1,Cs,-3,Pl,Ia,ts,dr,Pl,-1,Cs,dr,Cs,-2,ts];function Re(e,t){nl(e,3,t)}function ne(e,t){nl(e,4,t)}var Tn=class extends It{constructor(e){super(e,500)}o(e){return Ht(this,0,7,e)}},pa=[-1,{}],Gd=[0,Se,1,pa],Wd=[0,Se,ln,pa];function Zn(e,t){Zh(e,1,Tn,t)}function Ie(e,t){nl(e,10,t)}function de(e,t){nl(e,15,t)}var Bn=class extends It{constructor(e){super(e,500)}o(e){return Ht(this,0,1001,e)}},$m=[-500,nn,[-500,ts,-1,ln,-3,[-2,Ze,Le],nn,Bd,dr,-1,Gd,Wd,nn,[0,ts,Cs],ts,Vd,dr,ln,987,ln],4,nn,[-500,Se,-1,[-1,{}],998,Se],nn,[-500,Se,ln,-1,[-2,{},Le],997,ln,-1],dr,nn,[-500,Se,ln,pa,998,ln],ln,dr,Gd,Wd,nn,[0,ts,-1,pa],ln,-2,Vd,ts,-1,Cs,[0,Cs,z_],978,pa,nn,Bd];Bn.prototype.g=dl($m);var G_=ls(Bn,$m),W_=class extends It{constructor(e){super(e)}},Km=class extends It{constructor(e){super(e)}g(){return Bi(this,W_,1)}},Zm=[0,nn,[0,qe,We,Se,-1]],fl=ls(Km,Zm),X_=class extends It{constructor(e){super(e)}},q_=class extends It{constructor(e){super(e)}},Il=class extends It{constructor(e){super(e)}l(){return he(this,X_,2)}g(){return Bi(this,q_,5)}},Jm=ls(class extends It{constructor(e){super(e)}},[0,ln,Ia,uu,[0,cn,[0,qe,-3],[0,We,-3],[0,qe,-1,[0,nn,[0,qe,-2]]],nn,[0,We,-1,Se,We]],Se,-1,rs,nn,[0,qe,We],ln,rs]),jm=class extends It{constructor(e){super(e)}},pr=ls(class extends It{constructor(e){super(e)}},[0,nn,[0,We,-4]]),Qm=class extends It{constructor(e){super(e)}},Da=ls(class extends It{constructor(e){super(e)}},[0,nn,[0,We,-4]]),Y_=class extends It{constructor(e){super(e)}},$_=[0,qe,-1,uu,cn],t0=class extends It{constructor(e){super(e)}};t0.prototype.g=dl([0,We,-4,rs]);var K_=class extends It{constructor(e){super(e)}},Z_=ls(class extends It{constructor(e){super(e)}},[0,nn,[0,1,qe,Se,Zm],rs]),Xd=class extends It{constructor(e){super(e)}},J_=class extends It{constructor(e){super(e)}na(){const e=Pe(this,1,void 0,void 0,cm);return e??Ls()}},j_=class extends It{constructor(e){super(e)}},e0=[1,2],Q_=ls(class extends It{constructor(e){super(e)}},[0,nn,[0,e0,we,[0,uu],we,[0,Hm],qe,Se],rs]),du=class extends It{constructor(e){super(e)}},n0=[0,Se,qe,We,ln,-1],qd=class extends It{constructor(e){super(e)}},t1=[0,Le,-1],Yd=class extends It{constructor(e){super(e)}},Eo=[1,2,3,4,5,6],Uo=class extends It{constructor(e){super(e)}g(){return Pe(this,1,void 0,void 0,cm)!=null}l(){return sn(Pe(this,2))!=null}},Ne=class extends It{constructor(e){super(e)}g(){return jp(Pe(this,2))??!1}},i0=[0,Hm,Se,[0,qe,rs,-1],[0,B_,rs]],Xe=[0,i0,Le,[0,Eo,we,Ym,we,Gm,we,Vm,we,qm,we,Xm,we,Wm],cn],pl=class extends It{constructor(e){super(e)}},fu=[0,Xe,We,-1,qe],e1=Ti(502141897,pl);Ze[502141897]=fu;var n1=ls(class extends It{constructor(e){super(e)}},[0,[0,cn,-1,N_,k_],$_]),s0=class extends It{constructor(e){super(e)}},r0=class extends It{constructor(e){super(e)}},Lc=[0,Xe,We,[0,Xe],Le],i1=Ti(508968150,r0);Ze[508968150]=[0,Xe,fu,Lc,We,[0,[0,i0]]],Ze[508968149]=Lc;var $s=class extends It{constructor(e){super(e)}l(){return he(this,du,2)}g(){ve(this,2)}},a0=[0,Xe,n0];Ze[478825465]=a0;var s1=class extends It{constructor(e){super(e)}},o0=class extends It{constructor(e){super(e)}},pu=class extends It{constructor(e){super(e)}},mu=class extends It{constructor(e){super(e)}},l0=class extends It{constructor(e){super(e)}},$d=[0,Xe,[0,Xe],a0,-1],c0=[0,Xe,We,qe],gu=[0,Xe,We],h0=[0,Xe,c0,gu,We],r1=Ti(479097054,l0);Ze[479097054]=[0,Xe,h0,$d],Ze[463370452]=$d,Ze[464864288]=c0;var a1=Ti(462713202,mu);Ze[462713202]=h0,Ze[474472470]=gu;var o1=class extends It{constructor(e){super(e)}},u0=class extends It{constructor(e){super(e)}},d0=class extends It{constructor(e){super(e)}},f0=class extends It{constructor(e){super(e)}},_u=[0,Xe,We,-1,qe],Ic=[0,Xe,We,Le];f0.prototype.g=dl([0,Xe,gu,[0,Xe],fu,Lc,_u,Ic]);var p0=class extends It{constructor(e){super(e)}},l1=Ti(456383383,p0);Ze[456383383]=[0,Xe,n0];var m0=class extends It{constructor(e){super(e)}},c1=Ti(476348187,m0);Ze[476348187]=[0,Xe,t1];var g0=class extends It{constructor(e){super(e)}},Kd=class extends It{constructor(e){super(e)}},_0=[0,cn,-1],h1=Ti(458105876,class extends It{constructor(e){super(e)}g(){let e;var t=this.v;const n=0|t[Lt];return e=Fn(this,n),t=(function(i,s,r,a){var o=Kd;!a&&kr(i)&&(r=0|(s=i.v)[Lt]);var l=Oi(s,2);if(i=!1,l==null){if(a)return Cd();l=[]}else if(l.constructor===Ni){if(!(2&l.J)||a)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[Lt])):l=[];if(a){if(!l.length)return Cd();i||(i=!0,wa(l))}else i&&(i=!1,xa(l),l=hm(l));return!i&&32&r&&Aa(l,32),r=Ke(s,r,2,a=new Ni(l,o,d_,void 0)),i||zs(s,r),a})(this,t,n,e),!e&&Kd&&(t.ra=!0),t}});Ze[458105876]=[0,_0,U_,[!0,rs,[0,Se,-1,ln]],[0,Ia,Le,cn]];var vu=class extends It{constructor(e){super(e)}},v0=Ti(458105758,vu);Ze[458105758]=[0,Xe,Se,_0];var Dl=class extends It{constructor(e){super(e)}},Zd=[0,O_,-1,Cs],u1=class extends It{constructor(e){super(e)}},x0=class extends It{constructor(e){super(e)}},Dc=[1,2];x0.prototype.g=dl([0,Dc,we,Zd,we,[0,nn,Zd]]);var M0=class extends It{constructor(e){super(e)}},d1=Ti(443442058,M0);Ze[443442058]=[0,Xe,Se,qe,We,ln,-1,Le,We],Ze[514774813]=_u;var S0=class extends It{constructor(e){super(e)}},f1=Ti(516587230,S0);function Fc(e,t){return t=t?t.clone():new du,e.displayNamesLocale!==void 0?ve(t,1,Pa(e.displayNamesLocale)):e.displayNamesLocale===void 0&&ve(t,1),e.maxResults!==void 0?ki(t,2,e.maxResults):"maxResults"in e&&ve(t,2),e.scoreThreshold!==void 0?Ot(t,3,e.scoreThreshold):"scoreThreshold"in e&&ve(t,3),e.categoryAllowlist!==void 0?Lo(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&ve(t,4),e.categoryDenylist!==void 0?Lo(t,5,e.categoryDenylist):"categoryDenylist"in e&&ve(t,5),t}function E0(e){const t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function xu(e,t=-1,n=""){return{categories:e.map((i=>({index:Yn(i,1)??0??-1,score:ze(i,2)??0,categoryName:sn(Pe(i,3))??""??"",displayName:sn(Pe(i,4))??""??""}))),headIndex:t,headName:n}}function p1(e){const t={classifications:Bi(e,K_,1).map((n=>{var i;return xu(((i=he(n,Km,4))==null?void 0:i.g())??[],Yn(n,2)??0,sn(Pe(n,3))??"")}))};return(function(n){return n==null?n:typeof n=="bigint"?(Ac(n)?n=Number(n):(n=Ra(64,n),n=Ac(n)?Number(n):String(n)),n):Ca(n)?typeof n=="number"?zh(n):em(n):void 0})(Pe(e,2,void 0,void 0,Co))!=null&&(t.timestampMs=E0(Pe(e,2,void 0,void 0,Co)??om)),t}function y0(e){var a,o;var t=Es(e,3,mi,Ss()),n=Es(e,2,Or,Ss()),i=Es(e,1,sn,Ss()),s=Es(e,9,sn,Ss());const r={categories:[],keypoints:[]};for(let l=0;l<t.length;l++)r.categories.push({score:t[l],index:n[l]??-1,categoryName:i[l]??"",displayName:s[l]??""});if((t=(a=he(e,Il,4))==null?void 0:a.l())&&(r.boundingBox={originX:Yn(t,1,Xi)??0,originY:Yn(t,2,Xi)??0,width:Yn(t,3,Xi)??0,height:Yn(t,4,Xi)??0,angle:0}),(o=he(e,Il,4))==null?void 0:o.g().length)for(const l of he(e,Il,4).g())r.keypoints.push({x:Pe(l,1,void 0,Xi,mi)??0,y:Pe(l,2,void 0,Xi,mi)??0,score:Pe(l,4,void 0,Xi,mi)??0,label:sn(Pe(l,3,void 0,Xi))??""});return r}function ml(e){const t=[];for(const n of Bi(e,Qm,1))t.push({x:ze(n,1)??0,y:ze(n,2)??0,z:ze(n,3)??0,visibility:ze(n,4)??0});return t}function ma(e){const t=[];for(const n of Bi(e,jm,1))t.push({x:ze(n,1)??0,y:ze(n,2)??0,z:ze(n,3)??0,visibility:ze(n,4)??0});return t}function Jd(e){return Array.from(e,(t=>t>127?t-256:t))}function jd(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}let ka;Ze[516587230]=[0,Xe,_u,Ic,We],Ze[518928384]=Ic;const m1=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function b0(e){if(e)return!0;if(ka===void 0)try{await WebAssembly.instantiate(m1),ka=!0}catch{ka=!1}return ka}async function za(e,t,n){return{wasmLoaderPath:`${t}/${e}_${n=`wasm${n?"_module":""}${await b0(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var ur=class{};function T0(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function Qd(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,i)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(t)}))}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{const n=self.import;n?await n(e.toString()):await import(e.toString())}}}function A0(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function Ft(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function tf(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=A0(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function ef(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const s of i)e.i._free(s);e.i._free(t)}function hi(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function qi(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,a)=>{r?(n(i,a),i=[]):i.push(s)}}ur.forVisionTasks=function(e,t=!1){return za("vision",e??Ba``,t)},ur.forTextTasks=function(e,t=!1){return za("text",e??Ba``,t)},ur.forGenAiTasks=function(e,t=!1){return za("genai",e??Ba``,t)},ur.forAudioTasks=function(e,t=!1){return za("audio",e??Ba``,t)},ur.isSimdSupported=function(e=!1){return b0(e)};async function g1(e,t,n,i){return e=await(async(s,r,a,o,l)=>{if(r&&await Qd(r),!self.ModuleFactory||a&&(await Qd(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,o)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function Fl(e,t){const n=he(e.baseOptions,Uo,1)||new Uo;typeof t=="string"?(ve(n,2,Pa(t)),ve(n,1)):t instanceof Uint8Array&&(ve(n,1,Nh(t,!1)),ve(n,2)),Ht(e.baseOptions,0,1,n)}function nf(e){try{const t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map((n=>n.message)).join(", "))}finally{e.H=[]}}function At(e,t){e.C=Math.max(e.C,t)}function gl(e,t){e.B=new Tn,Un(e.B,2,"PassThroughCalculator"),Re(e.B,"free_memory"),ne(e.B,"free_memory_unused_out"),Ie(t,"free_memory"),Zn(t,e.B)}function Ar(e,t){Re(e.B,t),ne(e.B,t+"_unused_out")}function _l(e){e.g.addBoolToStream(!0,"free_memory",e.C)}var Uc=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var n,i,s,r,a,o;if(t){const l=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((i=e.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=he(this.baseOptions,Uo,1))!=null&&s.g()||(r=he(this.baseOptions,Uo,1))!=null&&r.l()||(a=e.baseOptions)!=null&&a.modelAssetBuffer||(o=e.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(c,h){let d=he(c.baseOptions,Yd,3);if(!d){var u=d=new Yd,m=new Hd;fa(u,4,Eo,m)}"delegate"in h&&(h.delegate==="GPU"?(h=d,u=new V_,fa(h,2,Eo,u)):(h=d,u=new Hd,fa(h,4,Eo,u))),Ht(c.baseOptions,0,3,d)})(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then((c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)})).then((c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),Fl(this,"/model.dat"),this.m(),this.L()}));if(l.modelAssetBuffer instanceof Uint8Array)Fl(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return(async function(c){const h=[];for(var d=0;;){const{done:u,value:m}=await c.read();if(u)break;h.push(m),d+=m.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];c=new Uint8Array(d),d=0;for(const u of h)c.set(u,d),d+=u.length;return c})(l.modelAssetBuffer).then((c=>{Fl(this,c),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca((t=>{e=G_(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,nf(this)}finishProcessing(){this.g.finishProcessing(),nf(this)}close(){this.B=void 0,this.g.closeGraph()}};function is(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}Uc.prototype.close=Uc.prototype.close;class _1{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function sf(e,t,n){const i=e.g;if(n=is(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function rf(e,t){const n=e.g,i=is(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const s=is(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const r=is(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new _1(n,i,s,r)}function Mu(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function v1(e,t,n,i){return Mu(e,t),e.h||(e.m(),e.D()),n?(e.u||(e.u=rf(e,!0)),n=e.u):(e.A||(e.A=rf(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function w0(e,t,n){return Mu(e,t),e=is(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function R0(e,t,n){Mu(e,t),e.B||(e.B=is(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function x1(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var C0=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=is(e.createProgram(),"Failed to create WebGL program"),this.X=sf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=sf(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.L=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Ii(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Nc(e){var t=Ii(e,1);if(!t){if(t=Ii(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);const i=wr(e);var n=Su(e);if(R0(n,i,P0(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function P0(e){let t=Ii(e,2);if(!t){const n=wr(e);t=I0(e);const i=Nc(e),s=L0(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),Oc(e)}return t}function wr(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=is(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function L0(e){if(e=wr(e),!Ha)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))Ha=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Ha=e.R16F}return Ha}function Su(e){return e.l||(e.l=new C0),e.l}function I0(e){const t=wr(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Ii(e,2);return n||(n=w0(Su(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Oc(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var Ha,en=class{constructor(e,t,n,i,s,r,a){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=a,this.j&&--af===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Ii(this,0)}ka(){return!!Ii(this,1)}R(){return!!Ii(this,2)}ja(){return(t=Ii(e=this,0))||(t=Nc(e),t=new Uint8Array(t.map((n=>Math.round(255*n)))),e.g.push(t)),t;var e,t}ia(){return Nc(this)}N(){return P0(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=wr(this),s=Su(this);i.activeTexture(i.TEXTURE1),n=w0(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const r=L0(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),R0(s,i,n),v1(s,i,!1,(()=>{I0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Oc(this)})),x1(s),Oc(this)}}e.push(n)}return new en(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&wr(this).deleteTexture(Ii(this,2)),af=-1}};en.prototype.close=en.prototype.close,en.prototype.clone=en.prototype.clone,en.prototype.getAsWebGLTexture=en.prototype.N,en.prototype.getAsFloat32Array=en.prototype.ia,en.prototype.getAsUint8Array=en.prototype.ja,en.prototype.hasWebGLTexture=en.prototype.R,en.prototype.hasFloat32Array=en.prototype.ka,en.prototype.hasUint8Array=en.prototype.Fa;var af=250;function ri(...e){return e.map((([t,n])=>({start:t,end:n})))}const M1=(function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}})((of=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:T0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ft(this,i||"input_audio",(r=>{Ft(this,s=s||"audio_header",(a=>{this.i._configureAudio(r,a,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){hi(this,"__graph_config__",(t=>{e(t)})),Ft(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){const r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),Ft(this,i,(a=>{this.i._addAudioToInputStream(this.g,t,n,a,s)}))}addGpuBufferToStream(e,t,n){Ft(this,t,(i=>{const[s,r]=tf(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(e,t,n){Ft(this,t,(i=>{this.i._addBoolToInputStream(e,i,n)}))}addDoubleToStream(e,t,n){Ft(this,t,(i=>{this.i._addDoubleToInputStream(e,i,n)}))}addFloatToStream(e,t,n){Ft(this,t,(i=>{this.i._addFloatToInputStream(e,i,n)}))}addIntToStream(e,t,n){Ft(this,t,(i=>{this.i._addIntToInputStream(e,i,n)}))}addUintToStream(e,t,n){Ft(this,t,(i=>{this.i._addUintToInputStream(e,i,n)}))}addStringToStream(e,t,n){Ft(this,t,(i=>{Ft(this,e,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(e,t,n){Ft(this,t,(i=>{ef(this,Object.keys(e),(s=>{ef(this,Object.values(e),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)}))}))}))}addProtoToStream(e,t,n,i){Ft(this,n,(s=>{Ft(this,t,(r=>{const a=this.i._malloc(e.length);this.i.HEAPU8.set(e,a),this.i._addProtoToInputStream(a,e.length,r,s,i),this.i._free(a)}))}))}addEmptyPacketToStream(e,t){Ft(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){Ft(this,t,(i=>{const s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(e,t,n){Ft(this,t,(i=>{const s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(e,t,n){Ft(this,t,(i=>{const s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(e,t,n){Ft(this,t,(i=>{const s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(e,t,n){Ft(this,t,(i=>{const s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(e,t,n){Ft(this,t,(i=>{const s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of e)Ft(this,r,(a=>{this.i._addStringVectorEntry(s,a)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(e,t){Ft(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){Ft(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){Ft(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){Ft(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){Ft(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){Ft(this,t,(n=>{Ft(this,e,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(e,t,n){Ft(this,n,(i=>{Ft(this,t,(s=>{const r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(e,t){Ft(this,t,(n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(e,t){Ft(this,t,(n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(e,t){Ft(this,t,(n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(e,t){Ft(this,t,(n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(e,t){Ft(this,t,(n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(e,t){Ft(this,t,(n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of e)Ft(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(e,t){hi(this,e,t),Ft(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){qi(this,e,t),Ft(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){hi(this,e,t),Ft(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){qi(this,e,t),Ft(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){hi(this,e,t),Ft(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){qi(this,e,t),Ft(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){hi(this,e,t),Ft(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){qi(this,e,t),Ft(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){hi(this,e,t),Ft(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){qi(this,e,t),Ft(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){hi(this,e,t),Ft(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){qi(this,e,t),Ft(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){hi(this,e,t),Ft(this,e,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(e,t,n){qi(this,e,t),Ft(this,e,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),hi(this,e,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)})),Ft(this,e,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends of{get ga(){return this.i}pa(e,t,n){Ft(this,t,(i=>{const[s,r]=tf(this,e,i);this.ga._addBoundTextureAsImageToStream(i,s,r,n)}))}Z(e,t){hi(this,e,t),Ft(this,e,(n=>{this.ga._attachImageListener(n)}))}aa(e,t){qi(this,e,t),Ft(this,e,(n=>{this.ga._attachImageVectorListener(n)}))}}));var of,ai=class extends M1{};async function ae(e,t,n){return(async function(i,s,r,a){return g1(i,s,r,a)})(e,n.canvas??(T0()?void 0:document.createElement("canvas")),t,n)}function D0(e,t,n,i){if(e.U){const r=new t0;if(n!=null&&n.regionOfInterest){if(!e.oa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ot(r,1,(s.left+s.right)/2),Ot(r,2,(s.top+s.bottom)/2),Ot(r,4,s.right-s.left),Ot(r,3,s.bottom-s.top)}else Ot(r,1,.5),Ot(r,2,.5),Ot(r,4,1),Ot(r,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Ot(r,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[a,o]=A0(t);n=ze(r,3)*o/a,s=ze(r,4)*a/o,Ot(r,4,n),Ot(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.pa(t,e.X,i??performance.now()),e.finishProcessing()}function oi(e,t,n){var i;if((i=e.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");D0(e,t,n,e.C+1)}function Ai(e,t,n,i){var s;if(!((s=e.baseOptions)!=null&&s.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");D0(e,t,n,i)}function Rr(e,t,n,i){var s=t.data;const r=t.width,a=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return e=new en([s],n,!1,e.g.i.canvas,e.P,r,t),i?e.clone():e}var Nn=class extends Uc{constructor(e,t,n,i){super(e),this.g=e,this.X=t,this.U=n,this.oa=i,this.P=new C0}l(e,t=!0){if("runningMode"in e&&ve(this.baseOptions,2,Sa(!!e.runningMode&&e.runningMode!=="IMAGE")),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};Nn.prototype.close=Nn.prototype.close;var zn=class extends Nn{constructor(e,t){super(new ai(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Ht(e=this.h=new pl,0,1,t=new Ne),Ot(this.h,2,.5),Ot(this.h,3,.3)}get baseOptions(){return he(this.h,Ne,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&Ot(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&Ot(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},oi(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Ai(this,e,n,t),this.j}m(){var e=new Bn;Ie(e,"image_in"),Ie(e,"norm_rect_in"),de(e,"detections");const t=new On;bi(t,e1,this.h);const n=new Tn;Un(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Re(n,"IMAGE:image_in"),Re(n,"NORM_RECT:norm_rect_in"),ne(n,"DETECTIONS:detections"),n.o(t),Zn(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=Jm(r),this.j.detections.push(y0(i));At(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};zn.prototype.detectForVideo=zn.prototype.G,zn.prototype.detect=zn.prototype.F,zn.prototype.setOptions=zn.prototype.o,zn.createFromModelPath=async function(e,t){return ae(zn,e,{baseOptions:{modelAssetPath:t}})},zn.createFromModelBuffer=function(e,t){return ae(zn,e,{baseOptions:{modelAssetBuffer:t}})},zn.createFromOptions=function(e,t){return ae(zn,e,t)};var Eu=ri([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),yu=ri([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),bu=ri([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),F0=ri([474,475],[475,476],[476,477],[477,474]),Tu=ri([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Au=ri([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),U0=ri([469,470],[470,471],[471,472],[472,469]),wu=ri([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),N0=[...Eu,...yu,...bu,...Tu,...Au,...wu],O0=ri([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function lf(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Fe=class extends Nn{constructor(e,t){super(new ai(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ht(e=this.h=new r0,0,1,t=new Ne),this.A=new s0,Ht(this.h,0,3,this.A),this.u=new pl,Ht(this.h,0,2,this.u),ki(this.u,4,1),Ot(this.u,2,.5),Ot(this.A,2,.5),Ot(this.h,4,.5)}get baseOptions(){return he(this.h,Ne,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){return"numFaces"in e&&ki(this.u,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&Ot(this.u,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&Ot(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&Ot(this.A,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return lf(this),oi(this,e,t),this.j}G(e,t,n){return lf(this),Ai(this,e,n,t),this.j}m(){var e=new Bn;Ie(e,"image_in"),Ie(e,"norm_rect"),de(e,"face_landmarks");const t=new On;bi(t,i1,this.h);const n=new Tn;Un(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Re(n,"IMAGE:image_in"),Re(n,"NORM_RECT:norm_rect"),ne(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),Zn(e,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(const r of i)i=Da(r),this.j.faceLandmarks.push(ml(i));At(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{At(this,i)})),this.outputFaceBlendshapes&&(de(e,"blendshapes"),ne(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=fl(r),this.j.faceBlendshapes.push(xu(i.g()??[]));At(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{At(this,i)}))),this.outputFacialTransformationMatrixes&&(de(e,"face_geometry"),ne(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=he(i=n1(r),Y_,2))&&this.j.facialTransformationMatrixes.push({rows:Yn(i,1)??0??0,columns:Yn(i,2)??0??0,data:Es(i,3,mi,Ss()).slice()??[]});At(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{At(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Fe.prototype.detectForVideo=Fe.prototype.G,Fe.prototype.detect=Fe.prototype.F,Fe.prototype.setOptions=Fe.prototype.o,Fe.createFromModelPath=function(e,t){return ae(Fe,e,{baseOptions:{modelAssetPath:t}})},Fe.createFromModelBuffer=function(e,t){return ae(Fe,e,{baseOptions:{modelAssetBuffer:t}})},Fe.createFromOptions=function(e,t){return ae(Fe,e,t)},Fe.FACE_LANDMARKS_LIPS=Eu,Fe.FACE_LANDMARKS_LEFT_EYE=yu,Fe.FACE_LANDMARKS_LEFT_EYEBROW=bu,Fe.FACE_LANDMARKS_LEFT_IRIS=F0,Fe.FACE_LANDMARKS_RIGHT_EYE=Tu,Fe.FACE_LANDMARKS_RIGHT_EYEBROW=Au,Fe.FACE_LANDMARKS_RIGHT_IRIS=U0,Fe.FACE_LANDMARKS_FACE_OVAL=wu,Fe.FACE_LANDMARKS_CONTOURS=N0,Fe.FACE_LANDMARKS_TESSELATION=O0;var Ru=ri([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function cf(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function hf(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function uf(e,t=!0){const n=[];for(const s of e){var i=fl(s);e=[];for(const r of i.g())i=t&&Yn(r,1)!=null?Yn(r,1)??0:-1,e.push({score:ze(r,2)??0,index:i,categoryName:sn(Pe(r,3))??""??"",displayName:sn(Pe(r,4))??""??""});n.push(e)}return n}var wn=class extends Nn{constructor(e,t){super(new ai(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ht(e=this.j=new l0,0,1,t=new Ne),this.u=new mu,Ht(this.j,0,2,this.u),this.D=new pu,Ht(this.u,0,3,this.D),this.A=new o0,Ht(this.u,0,2,this.A),this.h=new s1,Ht(this.j,0,3,this.h),Ot(this.A,2,.5),Ot(this.u,4,.5),Ot(this.D,2,.5)}get baseOptions(){return he(this.j,Ne,1)}set baseOptions(e){Ht(this.j,0,1,e)}o(e){var s,r,a,o;if(ki(this.A,3,e.numHands??1),"minHandDetectionConfidence"in e&&Ot(this.A,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Ot(this.u,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Ot(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new $s,n=t,i=Fc(e.cannedGesturesClassifierOptions,(s=he(this.h,$s,3))==null?void 0:s.l());Ht(n,0,2,i),Ht(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((r=he(this.h,$s,3))==null||r.g());return e.customGesturesClassifierOptions?(Ht(n=t=new $s,0,2,i=Fc(e.customGesturesClassifierOptions,(a=he(this.h,$s,4))==null?void 0:a.l())),Ht(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((o=he(this.h,$s,4))==null||o.g()),this.l(e)}Ha(e,t){return cf(this),oi(this,e,t),hf(this)}Ia(e,t,n){return cf(this),Ai(this,e,n,t),hf(this)}m(){var e=new Bn;Ie(e,"image_in"),Ie(e,"norm_rect"),de(e,"hand_gestures"),de(e,"hand_landmarks"),de(e,"world_hand_landmarks"),de(e,"handedness");const t=new On;bi(t,r1,this.j);const n=new Tn;Un(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Re(n,"IMAGE:image_in"),Re(n,"NORM_RECT:norm_rect"),ne(n,"HAND_GESTURES:hand_gestures"),ne(n,"LANDMARKS:hand_landmarks"),ne(n,"WORLD_LANDMARKS:world_hand_landmarks"),ne(n,"HANDEDNESS:handedness"),n.o(t),Zn(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i){i=Da(r);const a=[];for(const o of Bi(i,Qm,1))a.push({x:ze(o,1)??0,y:ze(o,2)??0,z:ze(o,3)??0,visibility:ze(o,4)??0});this.landmarks.push(a)}At(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i){i=pr(r);const a=[];for(const o of Bi(i,jm,1))a.push({x:ze(o,1)??0,y:ze(o,2)??0,z:ze(o,3)??0,visibility:ze(o,4)??0});this.worldLandmarks.push(a)}At(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...uf(i,!1)),At(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{At(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...uf(i)),At(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function df(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}wn.prototype.recognizeForVideo=wn.prototype.Ia,wn.prototype.recognize=wn.prototype.Ha,wn.prototype.setOptions=wn.prototype.o,wn.createFromModelPath=function(e,t){return ae(wn,e,{baseOptions:{modelAssetPath:t}})},wn.createFromModelBuffer=function(e,t){return ae(wn,e,{baseOptions:{modelAssetBuffer:t}})},wn.createFromOptions=function(e,t){return ae(wn,e,t)},wn.HAND_CONNECTIONS=Ru;var Rn=class extends Nn{constructor(e,t){super(new ai(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ht(e=this.h=new mu,0,1,t=new Ne),this.u=new pu,Ht(this.h,0,3,this.u),this.j=new o0,Ht(this.h,0,2,this.j),ki(this.j,3,1),Ot(this.j,2,.5),Ot(this.u,2,.5),Ot(this.h,4,.5)}get baseOptions(){return he(this.h,Ne,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){return"numHands"in e&&ki(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&Ot(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Ot(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Ot(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],oi(this,e,t),df(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ai(this,e,n,t),df(this)}m(){var e=new Bn;Ie(e,"image_in"),Ie(e,"norm_rect"),de(e,"hand_landmarks"),de(e,"world_hand_landmarks"),de(e,"handedness");const t=new On;bi(t,a1,this.h);const n=new Tn;Un(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Re(n,"IMAGE:image_in"),Re(n,"NORM_RECT:norm_rect"),ne(n,"LANDMARKS:hand_landmarks"),ne(n,"WORLD_LANDMARKS:world_hand_landmarks"),ne(n,"HANDEDNESS:handedness"),n.o(t),Zn(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i)i=Da(r),this.landmarks.push(ml(i));At(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i)i=pr(r),this.worldLandmarks.push(ma(i));At(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{At(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,a=r.push;const o=[];for(const l of i){i=fl(l);const c=[];for(const h of i.g())c.push({score:ze(h,2)??0,index:Yn(h,1)??0??-1,categoryName:sn(Pe(h,3))??""??"",displayName:sn(Pe(h,4))??""??""});o.push(c)}a.call(r,...o),At(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Rn.prototype.detectForVideo=Rn.prototype.G,Rn.prototype.detect=Rn.prototype.F,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=function(e,t){return ae(Rn,e,{baseOptions:{modelAssetPath:t}})},Rn.createFromModelBuffer=function(e,t){return ae(Rn,e,{baseOptions:{modelAssetBuffer:t}})},Rn.createFromOptions=function(e,t){return ae(Rn,e,t)},Rn.HAND_CONNECTIONS=Ru;var B0=ri([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function ff(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function pf(e){try{if(!e.D)return e.h;e.D(e.h)}finally{_l(e)}}function Va(e,t){e=Da(e),t.push(ml(e))}var Ae=class extends Nn{constructor(e,t){super(new ai(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ht(e=this.j=new f0,0,1,t=new Ne),this.I=new pu,Ht(this.j,0,2,this.I),this.W=new o1,Ht(this.j,0,3,this.W),this.u=new pl,Ht(this.j,0,4,this.u),this.O=new s0,Ht(this.j,0,5,this.O),this.A=new u0,Ht(this.j,0,6,this.A),this.M=new d0,Ht(this.j,0,7,this.M),Ot(this.u,2,.5),Ot(this.u,3,.3),Ot(this.O,2,.5),Ot(this.A,2,.5),Ot(this.A,3,.3),Ot(this.M,2,.5),Ot(this.I,2,.5)}get baseOptions(){return he(this.j,Ne,1)}set baseOptions(e){Ht(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&Ot(this.u,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&Ot(this.u,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&Ot(this.O,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Ot(this.A,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&Ot(this.A,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&Ot(this.M,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Ot(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:n,ff(this),oi(this,e,i),pf(this)}G(e,t,n,i){const s=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,ff(this),Ai(this,e,s,t),pf(this)}m(){var e=new Bn;Ie(e,"input_frames_image"),de(e,"pose_landmarks"),de(e,"pose_world_landmarks"),de(e,"face_landmarks"),de(e,"left_hand_landmarks"),de(e,"left_hand_world_landmarks"),de(e,"right_hand_landmarks"),de(e,"right_hand_world_landmarks");const t=new On,n=new Od;Un(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))ve(s,2,el(r,0,Ea));else{if(!(typeof r=="string"||r instanceof vi||Fh(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Qi(s,2,Nh(r,!1),Ls())}})(n,this.j.g());const i=new Tn;Un(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Zh(i,8,Od,n),Re(i,"IMAGE:input_frames_image"),ne(i,"POSE_LANDMARKS:pose_landmarks"),ne(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),ne(i,"FACE_LANDMARKS:face_landmarks"),ne(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),ne(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),ne(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),ne(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Zn(e,i),gl(this,e),this.g.attachProtoListener("pose_landmarks",((s,r)=>{Va(s,this.h.poseLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var a=this.h.poseWorldLandmarks;s=pr(s),a.push(ma(s)),At(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{At(this,s)})),this.outputPoseSegmentationMasks&&(ne(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ar(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[Rr(this,s,!0,!this.D)],At(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],At(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{Va(s,this.h.faceLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{At(this,s)})),this.outputFaceBlendshapes&&(de(e,"extra_blendshapes"),ne(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=fl(s),a.push(xu(s.g()??[]))),At(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{At(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{Va(s,this.h.leftHandLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var a=this.h.leftHandWorldLandmarks;s=pr(s),a.push(ma(s)),At(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{Va(s,this.h.rightHandLandmarks),At(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{At(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var a=this.h.rightHandWorldLandmarks;s=pr(s),a.push(ma(s)),At(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{At(this,s)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ae.prototype.detectForVideo=Ae.prototype.G,Ae.prototype.detect=Ae.prototype.F,Ae.prototype.setOptions=Ae.prototype.o,Ae.createFromModelPath=function(e,t){return ae(Ae,e,{baseOptions:{modelAssetPath:t}})},Ae.createFromModelBuffer=function(e,t){return ae(Ae,e,{baseOptions:{modelAssetBuffer:t}})},Ae.createFromOptions=function(e,t){return ae(Ae,e,t)},Ae.HAND_CONNECTIONS=Ru,Ae.POSE_CONNECTIONS=B0,Ae.FACE_LANDMARKS_LIPS=Eu,Ae.FACE_LANDMARKS_LEFT_EYE=yu,Ae.FACE_LANDMARKS_LEFT_EYEBROW=bu,Ae.FACE_LANDMARKS_LEFT_IRIS=F0,Ae.FACE_LANDMARKS_RIGHT_EYE=Tu,Ae.FACE_LANDMARKS_RIGHT_EYEBROW=Au,Ae.FACE_LANDMARKS_RIGHT_IRIS=U0,Ae.FACE_LANDMARKS_FACE_OVAL=wu,Ae.FACE_LANDMARKS_CONTOURS=N0,Ae.FACE_LANDMARKS_TESSELATION=O0;var Hn=class extends Nn{constructor(e,t){super(new ai(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Ht(e=this.h=new p0,0,1,t=new Ne)}get baseOptions(){return he(this.h,Ne,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){return Ht(this.h,0,2,Fc(e,he(this.h,du,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},oi(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},Ai(this,e,n,t),this.j}m(){var e=new Bn;Ie(e,"input_image"),Ie(e,"norm_rect"),de(e,"classifications");const t=new On;bi(t,l1,this.h);const n=new Tn;Un(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Re(n,"IMAGE:input_image"),Re(n,"NORM_RECT:norm_rect"),ne(n,"CLASSIFICATIONS:classifications"),n.o(t),Zn(e,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=p1(Z_(i)),At(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Hn.prototype.classifyForVideo=Hn.prototype.ta,Hn.prototype.classify=Hn.prototype.sa,Hn.prototype.setOptions=Hn.prototype.o,Hn.createFromModelPath=function(e,t){return ae(Hn,e,{baseOptions:{modelAssetPath:t}})},Hn.createFromModelBuffer=function(e,t){return ae(Hn,e,{baseOptions:{modelAssetBuffer:t}})},Hn.createFromOptions=function(e,t){return ae(Hn,e,t)};var Cn=class extends Nn{constructor(e,t){super(new ai(e,t),"image_in","norm_rect",!0),this.h=new m0,this.embeddings={embeddings:[]},Ht(e=this.h,0,1,t=new Ne)}get baseOptions(){return he(this.h,Ne,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){var t=this.h,n=he(this.h,qd,2);return n=n?n.clone():new qd,e.l2Normalize!==void 0?ve(n,1,Sa(e.l2Normalize)):"l2Normalize"in e&&ve(n,1),e.quantize!==void 0?ve(n,2,Sa(e.quantize)):"quantize"in e&&ve(n,2),Ht(t,0,2,n),this.l(e)}za(e,t){return oi(this,e,t),this.embeddings}Aa(e,t,n){return Ai(this,e,n,t),this.embeddings}m(){var e=new Bn;Ie(e,"image_in"),Ie(e,"norm_rect"),de(e,"embeddings_out");const t=new On;bi(t,c1,this.h);const n=new Tn;Un(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Re(n,"IMAGE:image_in"),Re(n,"NORM_RECT:norm_rect"),ne(n,"EMBEDDINGS:embeddings_out"),n.o(t),Zn(e,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=Q_(i),this.embeddings=(function(r){return{embeddings:Bi(r,j_,1).map((a=>{var c,h;const o={headIndex:Yn(a,3)??0??-1,headName:sn(Pe(a,4))??""??""};var l=a.v;return dm(l,0|l[Lt],Xd,Cl(a,1))!==void 0?(a=Es(a=he(a,Xd,Cl(a,1),void 0),1,mi,Ss()),o.floatEmbedding=a.slice()):(l=new Uint8Array(0),o.quantizedEmbedding=((h=(c=he(a,J_,Cl(a,2),void 0))==null?void 0:c.na())==null?void 0:h.h())??l),o})),timestampMs:E0(Pe(r,2,void 0,void 0,Co)??om)}})(i),At(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Cn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=jd(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=jd(Jd(e.quantizedEmbedding),Jd(t.quantizedEmbedding))}return e},Cn.prototype.embedForVideo=Cn.prototype.Aa,Cn.prototype.embed=Cn.prototype.za,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(e,t){return ae(Cn,e,{baseOptions:{modelAssetPath:t}})},Cn.createFromModelBuffer=function(e,t){return ae(Cn,e,{baseOptions:{modelAssetBuffer:t}})},Cn.createFromOptions=function(e,t){return ae(Cn,e,t)};var Bc=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((n=>{n.close()})),(t=this.categoryMask)==null||t.close()}};function S1(e){var n,i;const t=(function(s){return Bi(s,Tn,1)})(e.ca()).filter((s=>(sn(Pe(s,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((i=(n=he(t[0],On,7))==null?void 0:n.j())==null?void 0:i.g())??new Map).forEach(((s,r)=>{e.u[Number(r)]=sn(Pe(s,1))??""}))}function mf(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function gf(e){try{const t=new Bc(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{_l(e)}}Bc.prototype.close=Bc.prototype.close;var En=class extends Nn{constructor(e,t){super(new ai(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new vu,this.A=new g0,Ht(this.h,0,3,this.A),Ht(e=this.h,0,1,t=new Ne)}get baseOptions(){return he(this.h,Ne,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?ve(this.h,2,Pa(e.displayNamesLocale)):"displayNamesLocale"in e&&ve(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){S1(this)}segment(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,mf(this),oi(this,e,i),gf(this)}La(e,t,n,i){const s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,mf(this),Ai(this,e,s,t),gf(this)}Da(){return this.u}m(){var e=new Bn;Ie(e,"image_in"),Ie(e,"norm_rect");const t=new On;bi(t,v0,this.h);const n=new Tn;Un(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Re(n,"IMAGE:image_in"),Re(n,"NORM_RECT:norm_rect"),n.o(t),Zn(e,n),gl(this,e),this.outputConfidenceMasks&&(de(e,"confidence_masks"),ne(n,"CONFIDENCE_MASKS:confidence_masks"),Ar(this,"confidence_masks"),this.g.aa("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Rr(this,r,!0,!this.j))),At(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],At(this,i)}))),this.outputCategoryMask&&(de(e,"category_mask"),ne(n,"CATEGORY_MASK:category_mask"),Ar(this,"category_mask"),this.g.Z("category_mask",((i,s)=>{this.categoryMask=Rr(this,i,!1,!this.j),At(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,At(this,i)}))),de(e,"quality_scores"),ne(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,At(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};En.prototype.getLabels=En.prototype.Da,En.prototype.segmentForVideo=En.prototype.La,En.prototype.segment=En.prototype.segment,En.prototype.setOptions=En.prototype.o,En.createFromModelPath=function(e,t){return ae(En,e,{baseOptions:{modelAssetPath:t}})},En.createFromModelBuffer=function(e,t){return ae(En,e,{baseOptions:{modelAssetBuffer:t}})},En.createFromOptions=function(e,t){return ae(En,e,t)};var kc=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((n=>{n.close()})),(t=this.categoryMask)==null||t.close()}};kc.prototype.close=kc.prototype.close;var ui=class extends Nn{constructor(e,t){super(new ai(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new vu,this.u=new g0,Ht(this.h,0,3,this.u),Ht(e=this.h,0,1,t=new Ne)}get baseOptions(){return he(this.h,Ne,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){const s=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new x0,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new Dl;Qi(r,3,Sa(!0),!1),Qi(r,1,ha(t.keypoint.x),0),Qi(r,2,ha(t.keypoint.y),0),fa(i,1,Dc,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new u1;for(r of t.scribble)Qi(t=new Dl,3,Sa(!0),!1),Qi(t,1,ha(r.x),0),Qi(t,2,ha(r.y),0),Zh(o,1,Dl,t);fa(i,2,Dc,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),oi(this,e,s);t:{try{const o=new kc(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break t}this.j(o)}finally{_l(this)}a=void 0}return a}m(){var e=new Bn;Ie(e,"image_in"),Ie(e,"roi_in"),Ie(e,"norm_rect_in");const t=new On;bi(t,v0,this.h);const n=new Tn;Un(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Re(n,"IMAGE:image_in"),Re(n,"ROI:roi_in"),Re(n,"NORM_RECT:norm_rect_in"),n.o(t),Zn(e,n),gl(this,e),this.outputConfidenceMasks&&(de(e,"confidence_masks"),ne(n,"CONFIDENCE_MASKS:confidence_masks"),Ar(this,"confidence_masks"),this.g.aa("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Rr(this,r,!0,!this.j))),At(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],At(this,i)}))),this.outputCategoryMask&&(de(e,"category_mask"),ne(n,"CATEGORY_MASK:category_mask"),Ar(this,"category_mask"),this.g.Z("category_mask",((i,s)=>{this.categoryMask=Rr(this,i,!1,!this.j),At(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,At(this,i)}))),de(e,"quality_scores"),ne(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,At(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ui.prototype.segment=ui.prototype.segment,ui.prototype.setOptions=ui.prototype.o,ui.createFromModelPath=function(e,t){return ae(ui,e,{baseOptions:{modelAssetPath:t}})},ui.createFromModelBuffer=function(e,t){return ae(ui,e,{baseOptions:{modelAssetBuffer:t}})},ui.createFromOptions=function(e,t){return ae(ui,e,t)};var Vn=class extends Nn{constructor(e,t){super(new ai(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ht(e=this.h=new M0,0,1,t=new Ne)}get baseOptions(){return he(this.h,Ne,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?ve(this.h,2,Pa(e.displayNamesLocale)):"displayNamesLocale"in e&&ve(this.h,2),e.maxResults!==void 0?ki(this.h,3,e.maxResults):"maxResults"in e&&ve(this.h,3),e.scoreThreshold!==void 0?Ot(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&ve(this.h,4),e.categoryAllowlist!==void 0?Lo(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&ve(this.h,5),e.categoryDenylist!==void 0?Lo(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&ve(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},oi(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Ai(this,e,n,t),this.j}m(){var e=new Bn;Ie(e,"input_frame_gpu"),Ie(e,"norm_rect"),de(e,"detections");const t=new On;bi(t,d1,this.h);const n=new Tn;Un(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Re(n,"IMAGE:input_frame_gpu"),Re(n,"NORM_RECT:norm_rect"),ne(n,"DETECTIONS:detections"),n.o(t),Zn(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=Jm(r),this.j.detections.push(y0(i));At(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{At(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Vn.prototype.detectForVideo=Vn.prototype.G,Vn.prototype.detect=Vn.prototype.F,Vn.prototype.setOptions=Vn.prototype.o,Vn.createFromModelPath=async function(e,t){return ae(Vn,e,{baseOptions:{modelAssetPath:t}})},Vn.createFromModelBuffer=function(e,t){return ae(Vn,e,{baseOptions:{modelAssetBuffer:t}})},Vn.createFromOptions=function(e,t){return ae(Vn,e,t)};var zc=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach((t=>{t.close()}))}};function _f(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function vf(e){try{const t=new zc(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{_l(e)}}zc.prototype.close=zc.prototype.close;var mn=class extends Nn{constructor(e,t){super(new ai(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ht(e=this.h=new S0,0,1,t=new Ne),this.A=new d0,Ht(this.h,0,3,this.A),this.j=new u0,Ht(this.h,0,2,this.j),ki(this.j,4,1),Ot(this.j,2,.5),Ot(this.A,2,.5),Ot(this.h,4,.5)}get baseOptions(){return he(this.h,Ne,1)}set baseOptions(e){Ht(this.h,0,1,e)}o(e){return"numPoses"in e&&ki(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&Ot(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&Ot(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&Ot(this.A,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:n,_f(this),oi(this,e,i),vf(this)}G(e,t,n,i){const s=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,_f(this),Ai(this,e,s,t),vf(this)}m(){var e=new Bn;Ie(e,"image_in"),Ie(e,"norm_rect"),de(e,"normalized_landmarks"),de(e,"world_landmarks"),de(e,"segmentation_masks");const t=new On;bi(t,f1,this.h);const n=new Tn;Un(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Re(n,"IMAGE:image_in"),Re(n,"NORM_RECT:norm_rect"),ne(n,"NORM_LANDMARKS:normalized_landmarks"),ne(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),Zn(e,n),gl(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(const r of i)i=Da(r),this.landmarks.push(ml(i));At(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],At(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(const r of i)i=pr(r),this.worldLandmarks.push(ma(i));At(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],At(this,i)})),this.outputSegmentationMasks&&(ne(n,"SEGMENTATION_MASK:segmentation_masks"),Ar(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>Rr(this,r,!0,!this.u))),At(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],At(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};mn.prototype.detectForVideo=mn.prototype.G,mn.prototype.detect=mn.prototype.F,mn.prototype.setOptions=mn.prototype.o,mn.createFromModelPath=function(e,t){return ae(mn,e,{baseOptions:{modelAssetPath:t}})},mn.createFromModelBuffer=function(e,t){return ae(mn,e,{baseOptions:{modelAssetBuffer:t}})},mn.createFromOptions=function(e,t){return ae(mn,e,t)},mn.POSE_CONNECTIONS=B0;class Cu{constructor(t){k(this,"landmarker");k(this,"lastTimestampMs",-1);this.landmarker=t}static async create(){const t="./wasm",n="./models/pose_landmarker_full.task",i=await ur.forVisionTasks(t),s={baseOptions:{modelAssetPath:n,delegate:"GPU"},runningMode:"VIDEO",numPoses:1};let r;try{r=await mn.createFromOptions(i,s)}catch(a){console.warn("PoseLandmarker の GPU delegate 初期化に失敗しました。CPU で再試行します。",a),r=await mn.createFromOptions(i,{...s,baseOptions:{modelAssetPath:n,delegate:"CPU"}})}return new Cu(r)}detect(t,n){let i=n;i<=this.lastTimestampMs&&(i=this.lastTimestampMs+1),this.lastTimestampMs=i;const s=performance.now(),r=this.landmarker.detectForVideo(t,i),a=performance.now()-s;return{landmarks:r.landmarks[0]??null,worldLandmarks:r.worldLandmarks[0]??null,timestampMs:i,inferenceTimeMs:a}}close(){this.landmarker.close()}}function xf(e,t){return 1/(1+1/(2*Math.PI*e)/t)}class Ul{constructor(t){k(this,"minCutoff");k(this,"beta");k(this,"dCutoff");k(this,"initialized",!1);k(this,"prevValue",0);k(this,"prevDerivative",0);k(this,"prevTimestamp",0);this.minCutoff=t.minCutoff,this.beta=t.beta,this.dCutoff=t.dCutoff}filter(t,n){if(!this.initialized)return this.initialized=!0,this.prevValue=t,this.prevDerivative=0,this.prevTimestamp=n,t;const i=n-this.prevTimestamp;if(i<=0)return this.prevValue;const s=(t-this.prevValue)/i,r=xf(this.dCutoff,i),a=r*s+(1-r)*this.prevDerivative,o=this.minCutoff+this.beta*Math.abs(a),l=xf(o,i),c=l*t+(1-l)*this.prevValue;return this.prevValue=c,this.prevDerivative=a,this.prevTimestamp=n,c}reset(){this.initialized=!1,this.prevValue=0,this.prevDerivative=0,this.prevTimestamp=0}}const Ks=33,Mf={minCutoff:1.2,beta:.6,dCutoff:1},E1={minCutoff:.4,beta:.05,dCutoff:1},y1=.6,Sf=.6,b1=500,T1=50,A1=100,w1=400;function Nl(e,t){return t<=0?0:1-Math.exp(-t/e)}function R1(e,t,n){return e<t?t:e>n?n:e}class C1{constructor(){k(this,"filters",[]);k(this,"targets",[]);k(this,"skeleton");k(this,"lastDetectionAtMs",-1/0);k(this,"hasEverDetected",!1);k(this,"wasLost",!1);k(this,"prevUpdateMs",-1/0);const t=[];for(let n=0;n<Ks;n++)this.filters.push({x:new Ul(Mf),y:new Ul(Mf),z:new Ul(E1)}),this.targets.push({x:0,y:0,z:0,screenX:0,screenY:0,visibility:0}),t.push({x:0,y:0,z:0,screenX:0,screenY:0,visibility:0});this.skeleton={joints:t,tracking:!1,timestampMs:0}}ingest(t){if(t.landmarks===null||t.worldLandmarks===null)return;const n=t.worldLandmarks,i=t.landmarks;for(let s=0;s<Ks;s++){const r=n[s],a=i[s],o=this.targets[s];o.x=-r.x,o.y=-r.y,o.z=-r.z,o.screenX=a.x,o.screenY=a.y,o.visibility=r.visibility}this.lastDetectionAtMs=t.timestampMs,this.hasEverDetected=!0}update(t){const n=t/1e3,i=this.prevUpdateMs===-1/0?0:t-this.prevUpdateMs;if(this.prevUpdateMs=t,this.skeleton.timestampMs=t,!this.hasEverDetected){for(let o=0;o<Ks;o++){const l=this.skeleton.joints[o];l.x=l.y=l.z=0,l.screenX=l.screenY=0,l.visibility=0}return this.skeleton.tracking=!1,this.skeleton}if(t-this.lastDetectionAtMs>b1){const o=Nl(w1,i);for(let l=0;l<Ks;l++){const c=this.skeleton.joints[l];c.visibility+=(0-c.visibility)*o}return this.skeleton.tracking=!1,this.wasLost=!0,this.skeleton}if(this.wasLost){for(let o=0;o<Ks;o++){this.filters[o].x.reset(),this.filters[o].y.reset(),this.filters[o].z.reset();const l=this.skeleton.joints[o],c=this.targets[o];l.screenX=c.screenX,l.screenY=c.screenY,l.visibility=c.visibility}this.wasLost=!1}const r=Nl(T1,i),a=Nl(A1,i);for(let o=0;o<Ks;o++){const l=this.filters[o],c=this.targets[o],h=this.skeleton.joints[o];h.x=l.x.filter(c.x,n),h.y=l.y.filter(c.y,n);const d=l.z.filter(c.z,n);h.z=R1(d*y1,-Sf,Sf),h.screenX+=(c.screenX-h.screenX)*r,h.screenY+=(c.screenY-h.screenY)*r,h.visibility+=(c.visibility-h.visibility)*a}return this.skeleton.tracking=!0,this.skeleton}}const rt={NOSE:0,LEFT_EAR:7,RIGHT_EAR:8,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32},ga=[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,23],[12,24],[23,24],[11,13],[13,15],[12,14],[14,16],[15,17],[15,19],[15,21],[17,19],[16,18],[16,20],[16,22],[18,20],[23,25],[25,27],[24,26],[26,28],[27,29],[27,31],[29,31],[28,30],[28,32],[30,32]];function P1(e,t){const n=(s,r)=>Math.min(s,r)<<8|Math.max(s,r),i=n(e,t);return[n(11,12),n(11,23),n(12,24),n(23,24)].includes(i)?.09:[n(11,13),n(12,14),n(23,25),n(24,26)].includes(i)?.045:[n(13,15),n(14,16),n(25,27),n(26,28)].includes(i)?.035:.02}const L1=.5,I1=.05,D1=.45,F1=1.2,U1=.9,N1=600,O1=50,B1=2.2,k1=1.9,z1=150,H1=800,Ga=.05,V1=150,G1=800;function Ef(e,t){const n=e.x-t.x,i=e.y-t.y,s=e.z-t.z;return Math.sqrt(n*n+i*i+s*s)}function ds(e){return e.visibility>L1}class W1{constructor(){k(this,"prevMs",-1);k(this,"smoothedWristVel",0);k(this,"prevWristDist",-1);k(this,"burstArmed",!0);k(this,"burstLastFiredAt",-1/0);k(this,"scatterArmed",!0);k(this,"scatterHeldSince",-1);k(this,"scatterLastFiredAt",-1/0);k(this,"updraftArmed",!0);k(this,"updraftHeldSince",-1);k(this,"updraftLastFiredAt",-1/0)}update(t,n){if(!t.tracking)return this.reset(),null;const i=this.prevMs>=0?(n-this.prevMs)/1e3:-1;this.prevMs=n;const s=t.joints,r=s[rt.LEFT_SHOULDER],a=s[rt.RIGHT_SHOULDER],o=s[rt.LEFT_WRIST],l=s[rt.RIGHT_WRIST],c=s[rt.NOSE];let h=-1;if(ds(r)&&ds(a)&&(h=Ef(r,a)),h<I1)return this.prevWristDist=-1,null;const d=ds(o)&&ds(l);let u=-1;if(d){if(u=Ef(o,l),this.prevWristDist>=0&&i>0){const m=(u-this.prevWristDist)/i,g=1-Math.exp(-(i*1e3)/O1);this.smoothedWristVel+=g*(m-this.smoothedWristVel)}this.prevWristDist=u}else this.prevWristDist=-1,this.smoothedWristVel=0;if(d){u>U1*h&&(this.burstArmed=!0);const m=-this.smoothedWristVel,g=u<D1*h,M=m>F1,p=n-this.burstLastFiredAt>=N1;if(this.burstArmed&&g&&M&&p)return this.burstArmed=!1,this.burstLastFiredAt=n,"burst"}if(d)if(u<k1*h&&(this.scatterArmed=!0,this.scatterHeldSince=-1),u>B1*h){this.scatterHeldSince<0&&(this.scatterHeldSince=n);const g=n-this.scatterHeldSince,M=n-this.scatterLastFiredAt>=H1;if(this.scatterArmed&&g>=z1&&M)return this.scatterArmed=!1,this.scatterHeldSince=-1,this.scatterLastFiredAt=n,"scatter"}else this.scatterHeldSince=-1;else this.scatterHeldSince=-1;if(ds(o)&&ds(l)&&ds(c)){const m=o.y>c.y+Ga&&l.y>c.y+Ga;if((o.y<c.y-Ga||l.y<c.y-Ga)&&(this.updraftArmed=!0,this.updraftHeldSince=-1),m){this.updraftHeldSince<0&&(this.updraftHeldSince=n);const M=n-this.updraftHeldSince,p=n-this.updraftLastFiredAt>=G1;if(this.updraftArmed&&M>=V1&&p)return this.updraftArmed=!1,this.updraftHeldSince=-1,this.updraftLastFiredAt=n,"updraft"}else this.updraftHeldSince=-1}else this.updraftHeldSince=-1;return null}reset(){this.prevMs=-1,this.smoothedWristVel=0,this.prevWristDist=-1,this.burstArmed=!0,this.burstLastFiredAt=-1/0,this.scatterArmed=!0,this.scatterHeldSince=-1,this.scatterLastFiredAt=-1/0,this.updraftArmed=!0,this.updraftHeldSince=-1,this.updraftLastFiredAt=-1/0}}class X1{constructor(t){k(this,"root");k(this,"button");k(this,"statusEl");this.root=document.createElement("div"),this.root.className="start-overlay";const n=document.createElement("h1");n.textContent="Pose Visual Demo";const i=document.createElement("p");i.className="description",i.textContent="カメラの前で動くと、あなたのポーズをリアルタイムに認識します。";const s=document.createElement("p");s.className="privacy-note",s.textContent="映像はすべてブラウザ内で処理され、外部に送信・保存されることはありません。",this.button=document.createElement("button"),this.button.type="button",this.button.className="start-button",this.button.textContent="カメラを開始",this.statusEl=document.createElement("p"),this.statusEl.className="hidden",this.root.append(n,i,s,this.button,this.statusEl),t.appendChild(this.root)}waitForStart(){return new Promise(t=>{const n=()=>{this.button.removeEventListener("click",n),t()};this.button.addEventListener("click",n)})}setLoading(t){this.button.classList.add("hidden"),this.statusEl.className="loading",this.statusEl.textContent=t}showError(t){this.statusEl.className="error",this.statusEl.textContent=t,this.button.textContent="再試行",this.button.classList.remove("hidden")}hide(){this.root.classList.add("hidden")}}const q1=new Set([15,16,27,28]),Ol=.5;function Bl(e){return e===void 0?1:e}class Y1{constructor(t,n){k(this,"canvas");k(this,"ctx");k(this,"video");k(this,"hud");k(this,"wrap");k(this,"detected",!1);k(this,"statsText","");k(this,"modeLabel","");this.video=n;const i=document.createElement("div");this.wrap=i,i.className="video-wrap",this.canvas=document.createElement("canvas"),this.canvas.className="overlay";const s=this.canvas.getContext("2d");if(!s)throw new Error("2D canvas context を取得できませんでした");this.ctx=s,i.append(n,this.canvas),t.appendChild(i),this.hud=document.createElement("div"),this.hud.className="hud",document.body.appendChild(this.hud)}draw(t){const{videoWidth:n,videoHeight:i}=this.video;n>0&&i>0&&(this.canvas.width!==n||this.canvas.height!==i)&&(this.canvas.width=n,this.canvas.height=i);const{width:s,height:r}=this.canvas;if(this.ctx.clearRect(0,0,s,r),t.landmarks===null){this.detected=!1;return}this.detected=!0;const a=t.landmarks;this.ctx.lineCap="round",this.ctx.strokeStyle="#35e0ff",this.ctx.lineWidth=3;for(const[o,l]of ga){const c=a[o],h=a[l];if(!c||!h)continue;const d=Bl(c.visibility),u=Bl(h.visibility);d<Ol||u<Ol||(this.ctx.globalAlpha=Math.min(d,u),this.ctx.beginPath(),this.ctx.moveTo(c.x*s,c.y*r),this.ctx.lineTo(h.x*s,h.y*r),this.ctx.stroke())}this.ctx.fillStyle="#b8f3ff",this.ctx.shadowColor="#35e0ff";for(let o=0;o<a.length;o++){const l=a[o],c=Bl(l.visibility);if(c<Ol)continue;this.ctx.globalAlpha=c,this.ctx.shadowBlur=8;const h=q1.has(o)?7:5;this.ctx.beginPath(),this.ctx.arc(l.x*s,l.y*r,h,0,Math.PI*2),this.ctx.fill()}this.ctx.globalAlpha=1,this.ctx.shadowBlur=0}setStats(t){const n=this.detected?"OK":"なし";this.statsText=`描画 ${t.renderFps.toFixed(0)}fps | 推定 ${t.inferenceFps.toFixed(0)}fps / ${t.inferenceMs.toFixed(1)}ms | 検出 ${n}`,this.renderHud()}setModeLabel(t){this.modeLabel=t,this.renderHud()}renderHud(){this.hud.textContent=this.modeLabel?`${this.statsText}
${this.modeLabel} (1/2/3 で切替, V でカメラ)`:this.statsText}setPreviewVisible(t){this.wrap.classList.toggle("hidden",!t)}setHudVisible(t){this.hud.classList.toggle("hidden",!t)}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pu="185",$1=0,yf=1,K1=2,yo=1,Z1=2,ua=3,as=0,bn=1,Di=2,si=0,mr=1,os=2,bf=3,Tf=4,J1=5,xs=100,j1=101,Q1=102,tv=103,ev=104,nv=200,iv=201,sv=202,rv=203,Hc=204,Vc=205,av=206,ov=207,lv=208,cv=209,hv=210,uv=211,dv=212,fv=213,pv=214,Gc=0,Wc=1,Xc=2,Cr=3,qc=4,Yc=5,$c=6,Kc=7,k0=0,mv=1,gv=2,xi=0,Lu=1,Iu=2,Du=3,Fu=4,Uu=5,Nu=6,Ou=7,z0=300,Fs=301,Pr=302,kl=303,zl=304,vl=306,Zc=1e3,Fi=1001,Jc=1002,Ye=1003,_v=1004,Wa=1005,hn=1006,Hl=1007,ys=1008,qn=1009,H0=1010,V0=1011,ya=1012,Bu=1013,Si=1014,ei=1015,xn=1016,ku=1017,zu=1018,ba=1020,G0=35902,W0=35899,X0=1021,q0=1022,ni=1023,zi=1026,bs=1027,Hu=1028,Vu=1029,Us=1030,Gu=1031,Wu=1033,bo=33776,To=33777,Ao=33778,wo=33779,jc=35840,Qc=35841,th=35842,eh=35843,nh=36196,ih=37492,sh=37496,rh=37488,ah=37489,No=37490,oh=37491,lh=37808,ch=37809,hh=37810,uh=37811,dh=37812,fh=37813,ph=37814,mh=37815,gh=37816,_h=37817,vh=37818,xh=37819,Mh=37820,Sh=37821,Eh=36492,yh=36494,bh=36495,Th=36283,Ah=36284,Oo=36285,wh=36286,vv=3200,Af=0,xv=1,es="",Wn="srgb",Bo="srgb-linear",ko="linear",pe="srgb",Zs=7680,wf=519,Mv=512,Sv=513,Ev=514,Xu=515,yv=516,bv=517,qu=518,Tv=519,Rf=35044,zo=35048,Cf="300 es",gi=2e3,Ho=2001;function Av(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Vo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function wv(){const e=Vo("canvas");return e.style.display="block",e}const Pf={};function Lf(...e){const t="THREE."+e.shift();console.log(t,...e)}function Y0(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Vt(...e){e=Y0(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function re(...e){e=Y0(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function gr(...e){const t=e.join(" ");t in Pf||(Pf[t]=!0,Vt(...e))}function Rv(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Cv={[Gc]:Wc,[Xc]:$c,[qc]:Kc,[Cr]:Yc,[Wc]:Gc,[$c]:Xc,[Kc]:qc,[Yc]:Cr};class Vs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=Math.PI/180,Rh=180/Math.PI;function Fa(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[e&255]+an[e>>8&255]+an[e>>16&255]+an[e>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function ee(e,t,n){return Math.max(t,Math.min(n,e))}function Pv(e,t){return(e%t+t)%t}function Gl(e,t,n){return(1-n)*e+n*t}function Zr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qu=class Qu{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qu.prototype.isVector2=!0;let Xt=Qu;class Hi{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],m=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==m||h!==g){let p=l*u+c*m+h*g+d*M;p<0&&(u=-u,m=-m,g=-g,M=-M,p=-p);let f=1-o;if(p<.9995){const E=Math.acos(p),w=Math.sin(E);f=Math.sin(f*E)/w,o=Math.sin(o*E)/w,l=l*f+u*o,c=c*f+m*o,h=h*f+g*o,d=d*f+M*o}else{l=l*f+u*o,c=c*f+m*o,h=h*f+g*o,d=d*f+M*o;const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[n]=o*g+h*d+l*m-c*u,t[n+1]=l*g+h*u+c*d-o*m,t[n+2]=c*g+h*m+o*u-l*d,t[n+3]=h*g-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,a=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const td=class td{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(If.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(If.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this.z=ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this.z=ee(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};td.prototype.isVector3=!0;let U=td;const Wl=new U,If=new Hi,ed=class ed{constructor(t,n,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c)}set(t,n,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],g=i[8],M=s[0],p=s[3],f=s[6],E=s[1],w=s[4],S=s[7],A=s[2],T=s[5],R=s[8];return r[0]=a*M+o*E+l*A,r[3]=a*p+o*w+l*T,r[6]=a*f+o*S+l*R,r[1]=c*M+h*E+d*A,r[4]=c*p+h*w+d*T,r[7]=c*f+h*S+d*R,r[2]=u*M+m*E+g*A,r[5]=u*p+m*w+g*T,r[8]=u*f+m*S+g*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*a*h-n*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=n*d+i*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=d*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*a)*M,t[3]=u*M,t[4]=(h*n-s*l)*M,t[5]=(s*r-o*n)*M,t[6]=m*M,t[7]=(i*l-c*n)*M,t[8]=(a*n-i*r)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(t,n){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(t,n)),this}rotate(t){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-t)),this}translate(t,n){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ed.prototype.isMatrix3=!0;let qt=ed;const Xl=new qt,Df=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ff=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lv(){const e={enabled:!0,workingColorSpace:Bo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Bo]:{primaries:t,whitePoint:i,transfer:ko,toXYZ:Df,fromXYZ:Ff,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Df,fromXYZ:Ff,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),e}const te=Lv();function Ui(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function _r(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Js;class Iv{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Js===void 0&&(Js=Vo("canvas")),Js.width=t.width,Js.height=t.height;const s=Js.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Js}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Vo("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ui(n[i]/255)*255):n[i]=Ui(n[i]);return{data:n,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dv=0;class Yu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Fa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ql(s[a].image)):r.push(ql(s[a]))}else r=ql(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function ql(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Iv.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let Fv=0;const Yl=new U;class Mn extends Vs{constructor(t=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,i=Fi,s=Fi,r=hn,a=ys,o=ni,l=qn,c=Mn.DEFAULT_ANISOTROPY,h=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Fa(),this.name="",this.source=new Yu(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Vt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Vt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==z0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zc:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case Jc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zc:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case Jc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=z0;Mn.DEFAULT_ANISOTROPY=1;const nd=class nd{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],M=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(c+1)/2,S=(m+1)/2,A=(f+1)/2,T=(h+u)/4,R=(d+M)/4,v=(g+p)/4;return w>S&&w>A?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=T/i,r=R/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=v/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=R/r,s=v/r),this.set(i,s,r,n),this}let E=Math.sqrt((p-g)*(p-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-M)/E,this.z=(u-h)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this.z=ee(this.z,t.z,n.z),this.w=ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this.z=ee(this.z,t,n),this.w=ee(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nd.prototype.isVector4=!0;let Ue=nd;class Uv extends Vs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ue(0,0,t,n),this.scissorTest=!1,this.viewport=new Ue(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:i.depth},r=new Mn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new Yu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Uv{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class $0 extends Mn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nv extends Mn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $o=class $o{constructor(t,n,i,s,r,a,o,l,c,h,d,u,m,g,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c,h,d,u,m,g,M,p)}set(t,n,i,s,r,a,o,l,c,h,d,u,m,g,M,p){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=M,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $o().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,i=t.elements,s=1/js.setFromMatrixColumn(t,0).length(),r=1/js.setFromMatrixColumn(t,1).length(),a=1/js.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,m=a*d,g=o*h,M=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=m+g*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=g+m*c,n[10]=a*l}else if(t.order==="YXZ"){const u=l*h,m=l*d,g=c*h,M=c*d;n[0]=u+M*o,n[4]=g*o-m,n[8]=a*c,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=m*o-g,n[6]=M+u*o,n[10]=a*l}else if(t.order==="ZXY"){const u=l*h,m=l*d,g=c*h,M=c*d;n[0]=u-M*o,n[4]=-a*d,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*h,n[9]=M-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(t.order==="ZYX"){const u=a*h,m=a*d,g=o*h,M=o*d;n[0]=l*h,n[4]=g*c-m,n[8]=u*c+M,n[1]=l*d,n[5]=M*c+u,n[9]=m*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(t.order==="YZX"){const u=a*l,m=a*c,g=o*l,M=o*c;n[0]=l*h,n[4]=M-u*d,n[8]=g*d+m,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*d+g,n[10]=u-M*d}else if(t.order==="XZY"){const u=a*l,m=a*c,g=o*l,M=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+M,n[5]=a*h,n[9]=m*d-g,n[2]=g*d-m,n[6]=o*h,n[10]=M*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ov,t,Bv)}lookAt(t,n,i){const s=this.elements;return Pn.subVectors(t,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Yi.crossVectors(i,Pn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Yi.crossVectors(i,Pn)),Yi.normalize(),Xa.crossVectors(Pn,Yi),s[0]=Yi.x,s[4]=Xa.x,s[8]=Pn.x,s[1]=Yi.y,s[5]=Xa.y,s[9]=Pn.y,s[2]=Yi.z,s[6]=Xa.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],g=i[2],M=i[6],p=i[10],f=i[14],E=i[3],w=i[7],S=i[11],A=i[15],T=s[0],R=s[4],v=s[8],y=s[12],L=s[1],C=s[5],D=s[9],G=s[13],Z=s[2],B=s[6],$=s[10],N=s[14],tt=s[3],at=s[7],dt=s[11],ft=s[15];return r[0]=a*T+o*L+l*Z+c*tt,r[4]=a*R+o*C+l*B+c*at,r[8]=a*v+o*D+l*$+c*dt,r[12]=a*y+o*G+l*N+c*ft,r[1]=h*T+d*L+u*Z+m*tt,r[5]=h*R+d*C+u*B+m*at,r[9]=h*v+d*D+u*$+m*dt,r[13]=h*y+d*G+u*N+m*ft,r[2]=g*T+M*L+p*Z+f*tt,r[6]=g*R+M*C+p*B+f*at,r[10]=g*v+M*D+p*$+f*dt,r[14]=g*y+M*G+p*N+f*ft,r[3]=E*T+w*L+S*Z+A*tt,r[7]=E*R+w*C+S*B+A*at,r[11]=E*v+w*D+S*$+A*dt,r[15]=E*y+w*G+S*N+A*ft,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],M=t[7],p=t[11],f=t[15],E=l*m-c*u,w=o*m-c*d,S=o*u-l*d,A=a*m-c*h,T=a*u-l*h,R=a*d-o*h;return n*(M*E-p*w+f*S)-i*(g*E-p*A+f*T)+s*(g*w-M*A+f*R)-r*(g*S-M*T+p*R)}determinantAffine(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],M=t[13],p=t[14],f=t[15],E=n*o-i*a,w=n*l-s*a,S=n*c-r*a,A=i*l-s*o,T=i*c-r*o,R=s*c-r*l,v=h*M-d*g,y=h*p-u*g,L=h*f-m*g,C=d*p-u*M,D=d*f-m*M,G=u*f-m*p,Z=E*G-w*D+S*C+A*L-T*y+R*v;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Z;return t[0]=(o*G-l*D+c*C)*B,t[1]=(s*D-i*G-r*C)*B,t[2]=(M*R-p*T+f*A)*B,t[3]=(u*T-d*R-m*A)*B,t[4]=(l*L-a*G-c*y)*B,t[5]=(n*G-s*L+r*y)*B,t[6]=(p*S-g*R-f*w)*B,t[7]=(h*R-u*S+m*w)*B,t[8]=(a*D-o*L+c*v)*B,t[9]=(i*L-n*D-r*v)*B,t[10]=(g*T-M*S+f*E)*B,t[11]=(d*S-h*T-m*E)*B,t[12]=(o*y-a*C-l*v)*B,t[13]=(n*C-i*y+s*v)*B,t[14]=(M*w-g*A-p*E)*B,t[15]=(h*A-d*w+u*E)*B,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,g=r*d,M=a*h,p=a*d,f=o*d,E=l*c,w=l*h,S=l*d,A=i.x,T=i.y,R=i.z;return s[0]=(1-(M+f))*A,s[1]=(m+S)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(m-S)*T,s[5]=(1-(u+f))*T,s[6]=(p+E)*T,s[7]=0,s[8]=(g+w)*R,s[9]=(p-E)*R,s[10]=(1-(u+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=js.set(s[0],s[1],s[2]).length();const o=js.set(s[4],s[5],s[6]).length(),l=js.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jn.copy(this);const c=1/a,h=1/o,d=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,n.setFromRotationMatrix(Jn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,n,i,s,r,a,o=gi,l=!1){const c=this.elements,h=2*r/(n-t),d=2*r/(i-s),u=(n+t)/(n-t),m=(i+s)/(i-s);let g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===gi)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ho)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,a,o=gi,l=!1){const c=this.elements,h=2/(n-t),d=2/(i-s),u=-(n+t)/(n-t),m=-(i+s)/(i-s);let g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===gi)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ho)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};$o.prototype.isMatrix4=!0;let Ee=$o;const js=new U,Jn=new Ee,Ov=new U(0,0,0),Bv=new U(1,1,1),Yi=new U,Xa=new U,Pn=new U,Uf=new Ee,Nf=new Hi;class Ns{constructor(t=0,n=0,i=0,s=Ns.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(n){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Uf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uf,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ns.DEFAULT_ORDER="XYZ";class K0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kv=0;const Of=new U,Qs=new Hi,wi=new Ee,qa=new U,Jr=new U,zv=new U,Hv=new Hi,Bf=new U(1,0,0),kf=new U(0,1,0),zf=new U(0,0,1),Hf={type:"added"},Vv={type:"removed"},tr={type:"childadded",child:null},$l={type:"childremoved",child:null};class Sn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const t=new U,n=new Ns,i=new Hi,s=new U(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new qt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Qs.setFromAxisAngle(t,n),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,n){return Qs.setFromAxisAngle(t,n),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(Bf,t)}rotateY(t){return this.rotateOnAxis(kf,t)}rotateZ(t){return this.rotateOnAxis(zf,t)}translateOnAxis(t,n){return Of.copy(t).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Bf,t)}translateY(t){return this.translateOnAxis(kf,t)}translateZ(t){return this.translateOnAxis(zf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?qa.copy(t):qa.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Jr,qa,this.up):wi.lookAt(qa,Jr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(wi),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hf),tr.child=t,this.dispatchEvent(tr),tr.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Vv),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hf),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,zv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Hv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(n){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Sn.DEFAULT_UP=new U(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ya extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gv={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const p=n.getJointPose(M,i),f=this._getHandJoint(c,M);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Ya;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Zl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Jt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=te.workingColorSpace){return this.r=t,this.g=n,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=te.workingColorSpace){if(t=Pv(t,1),n=ee(n,0,1),i=ee(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Zl(a,r,t+1/3),this.g=Zl(a,r,t),this.b=Zl(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,n=Wn){function i(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Wn){const i=Z0[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return te.workingToColorSpace(on.copy(this),t),Math.round(ee(on.r*255,0,255))*65536+Math.round(ee(on.g*255,0,255))*256+Math.round(ee(on.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=te.workingColorSpace){te.workingToColorSpace(on.copy(this),n);const i=on.r,s=on.g,r=on.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=te.workingColorSpace){return te.workingToColorSpace(on.copy(this),n),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Wn){te.workingToColorSpace(on.copy(this),t);const n=on.r,i=on.g,s=on.b;return t!==Wn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL($i),this.setHSL($i.h+t,$i.s+n,$i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL($i),t.getHSL($a);const i=Gl($i.h,$a.h,n),s=Gl($i.s,$a.s,n),r=Gl($i.l,$a.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Jt;Jt.NAMES=Z0;class $u{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=n,this.far=i}clone(){return new $u(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wv extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ns,this.environmentIntensity=1,this.environmentRotation=new Ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jn=new U,Ri=new U,Jl=new U,Ci=new U,er=new U,nr=new U,Vf=new U,jl=new U,Ql=new U,tc=new U,ec=new Ue,nc=new Ue,ic=new Ue;class ti{constructor(t=new U,n=new U,i=new U){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),jn.subVectors(t,n),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){jn.subVectors(s,n),Ri.subVectors(i,n),Jl.subVectors(t,n);const a=jn.dot(jn),o=jn.dot(Ri),l=jn.dot(Jl),c=Ri.dot(Ri),h=Ri.dot(Jl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,n,i,s,r,a,o,l){return this.getBarycoord(t,n,i,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(t,n,i,s,r,a){return ec.setScalar(0),nc.setScalar(0),ic.setScalar(0),ec.fromBufferAttribute(t,n),nc.fromBufferAttribute(t,i),ic.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ec,r.x),a.addScaledVector(nc,r.y),a.addScaledVector(ic,r.z),a}static isFrontFacing(t,n,i,s){return jn.subVectors(i,n),Ri.subVectors(t,n),jn.cross(Ri).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),jn.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ti.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return ti.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let a,o;er.subVectors(s,i),nr.subVectors(r,i),jl.subVectors(t,i);const l=er.dot(jl),c=nr.dot(jl);if(l<=0&&c<=0)return n.copy(i);Ql.subVectors(t,s);const h=er.dot(Ql),d=nr.dot(Ql);if(h>=0&&d<=h)return n.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(er,a);tc.subVectors(t,r);const m=er.dot(tc),g=nr.dot(tc);if(g>=0&&m<=g)return n.copy(r);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(nr,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Vf.subVectors(r,s),o=(d-h)/(d-h+(m-g)),n.copy(s).addScaledVector(Vf,o);const f=1/(p+M+u);return a=M*f,o=u*f,n.copy(i).addScaledVector(er,a).addScaledVector(nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Gs{constructor(t=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ka.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(t.matrixWorld),this.union(Ka)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),Za.subVectors(this.max,jr),ir.subVectors(t.a,jr),sr.subVectors(t.b,jr),rr.subVectors(t.c,jr),Ki.subVectors(sr,ir),Zi.subVectors(rr,sr),fs.subVectors(ir,rr);let n=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-fs.z,fs.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,fs.z,0,-fs.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-fs.y,fs.x,0];return!sc(n,ir,sr,rr,Za)||(n=[1,0,0,0,1,0,0,0,1],!sc(n,ir,sr,rr,Za))?!1:(Ja.crossVectors(Ki,Zi),n=[Ja.x,Ja.y,Ja.z],sc(n,ir,sr,rr,Za))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pi=[new U,new U,new U,new U,new U,new U,new U,new U],Qn=new U,Ka=new Gs,ir=new U,sr=new U,rr=new U,Ki=new U,Zi=new U,fs=new U,jr=new U,Za=new U,Ja=new U,ps=new U;function sc(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){ps.fromArray(e,r);const o=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=t.dot(ps),c=n.dot(ps),h=i.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ve=new U,ja=new Xt;let Xv=0;class vn extends Vs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xv++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Rf,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ja.fromBufferAttribute(this,n),ja.applyMatrix3(t),this.setXY(n,ja.x,ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix3(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix4(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyNormalMatrix(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.transformDirection(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(t,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(t,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(t,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rf&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class J0 extends vn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class j0 extends vn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class He extends vn{constructor(t,n,i){super(new Float32Array(t),n,i)}}const qv=new Gs,Qr=new U,rc=new U;class cs{constructor(t=new U,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):qv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);const n=Qr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Qr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(rc)),this.expandByPoint(Qr.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Yv=0;const Gn=new Ee,ac=new Sn,ar=new U,Ln=new Gs,ta=new Gs,tn=new U;class pn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Fa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Av(t)?j0:J0)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,n,i){return Gn.makeTranslation(t,n,i),this.applyMatrix4(Gn),this}scale(t,n,i){return Gn.makeScale(t,n,i),this.applyMatrix4(Gn),this}lookAt(t){return ac.lookAt(t),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new He(i,3))}else{const i=Math.min(t.length,n.count);for(let s=0;s<i;s++){const r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Ln.min,ta.min),Ln.expandByPoint(tn),tn.addVectors(Ln.max,ta.max),Ln.expandByPoint(tn)):(Ln.expandByPoint(ta.min),Ln.expandByPoint(ta.max))}Ln.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(tn));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)tn.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(t,c),tn.add(ar)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new vn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new U,l[v]=new U;const c=new U,h=new U,d=new U,u=new Xt,m=new Xt,g=new Xt,M=new U,p=new U;function f(v,y,L){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,y),d.fromBufferAttribute(i,L),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,L),h.sub(c),d.sub(c),m.sub(u),g.sub(u);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[v].add(M),o[y].add(M),o[L].add(M),l[v].add(p),l[y].add(p),l[L].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,y=E.length;v<y;++v){const L=E[v],C=L.start,D=L.count;for(let G=C,Z=C+D;G<Z;G+=3)f(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const w=new U,S=new U,A=new U,T=new U;function R(v){A.fromBufferAttribute(s,v),T.copy(A);const y=o[v];w.copy(y),w.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(T,y);const C=S.dot(l[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,C)}for(let v=0,y=E.length;v<y;++v){const L=E[v],C=L.start,D=L.count;for(let G=C,Z=C+D;G<Z;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),M=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,M),a.fromBufferAttribute(n,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)tn.fromBufferAttribute(t,n),tn.normalize(),t.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let f=0;f<h;f++)u[g++]=c[m++]}return new vn(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(n))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $v=0;class qr extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Fa(),this.name="",this.type="Material",this.blending=mr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Vc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Vt(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Vt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hc&&(i.blendSrc=this.blendSrc),this.blendDst!==Vc&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Li=new U,oc=new U,Qa=new U,Ji=new U,lc=new U,to=new U,cc=new U;class Ku{constructor(t=new U,n=new U(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Li.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){oc.copy(t).add(n).multiplyScalar(.5),Qa.copy(n).sub(t).normalize(),Ji.copy(this.origin).sub(oc);const r=t.distanceTo(n)*.5,a=-this.direction.dot(Qa),o=Ji.dot(this.direction),l=-Ji.dot(Qa),c=Ji.lengthSq(),h=Math.abs(1-a*a);let d,u,m,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const M=1/h;d*=M,u*=M,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oc).addScaledVector(Qa,u),m}intersectSphere(t,n){Li.subVectors(t.center,this.origin);const i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,n,i,s,r){lc.subVectors(n,t),to.subVectors(i,t),cc.crossVectors(lc,to);let a=this.direction.dot(cc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,t);const l=o*this.direction.dot(to.crossVectors(Ji,to));if(l<0)return null;const c=o*this.direction.dot(lc.cross(Ji));if(c<0||l+c>a)return null;const h=-o*Ji.dot(cc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Os extends qr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ns,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gf=new Ee,ms=new Ku,eo=new cs,Wf=new U,no=new U,io=new U,so=new U,hc=new U,ro=new U,Xf=new U,ao=new U;class $n extends Sn{constructor(t=new pn,n=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(hc.fromBufferAttribute(d,t),a?ro.addScaledVector(hc,h):ro.addScaledVector(hc.sub(n),h))}n.add(ro)}return n}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(eo.containsPoint(ms.origin)===!1&&(ms.intersectSphere(eo,Wf)===null||ms.origin.distanceToSquared(Wf)>(t.far-t.near)**2))&&(Gf.copy(r).invert(),ms.copy(t.ray).applyMatrix4(Gf),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ms)))}_computeIntersections(t,n,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const p=u[g],f=a[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,A=w;S<A;S+=3){const T=o.getX(S),R=o.getX(S+1),v=o.getX(S+2);s=oo(this,f,t,i,c,h,d,T,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){const E=o.getX(p),w=o.getX(p+1),S=o.getX(p+2);s=oo(this,a,t,i,c,h,d,E,w,S),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const p=u[g],f=a[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,A=w;S<A;S+=3){const T=S,R=S+1,v=S+2;s=oo(this,f,t,i,c,h,d,T,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){const E=p,w=p+1,S=p+2;s=oo(this,a,t,i,c,h,d,E,w,S),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}}function Kv(e,t,n,i,s,r,a,o){let l;if(t.side===bn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===as,o),l===null)return null;ao.copy(o),ao.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(ao);return c<n.near||c>n.far?null:{distance:c,point:ao.clone(),object:e}}function oo(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,no),e.getVertexPosition(l,io),e.getVertexPosition(c,so);const h=Kv(e,t,n,i,no,io,so,Xf);if(h){const d=new U;ti.getBarycoord(Xf,no,io,so,d),s&&(h.uv=ti.getInterpolatedAttribute(s,o,l,c,d,new Xt)),r&&(h.uv1=ti.getInterpolatedAttribute(r,o,l,c,d,new Xt)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};ti.getNormal(no,io,so,u.normal),h.face=u,h.barycoord=d}return h}class Q0 extends Mn{constructor(t=null,n=1,i=1,s,r,a,o,l,c=Ye,h=Ye,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qf extends vn{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const or=new Ee,Yf=new Ee,lo=[],$f=new Gs,Zv=new Ee,ea=new $n,na=new cs;class Go extends $n{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new qf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Zv)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Gs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,or),$f.copy(t.boundingBox).applyMatrix4(or),this.boundingBox.union($f)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,or),na.copy(t.boundingSphere).applyMatrix4(or),this.boundingSphere.union(na)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,n){const i=this.matrixWorld,s=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(i),t.ray.intersectsSphere(na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Yf.multiplyMatrices(i,or),ea.matrixWorld=Yf,ea.raycast(t,lo);for(let a=0,o=lo.length;a<o;a++){const l=lo[a];l.instanceId=r,l.object=this,n.push(l)}lo.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new qf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Q0(new Float32Array(s*this.count),s,this.count,Hu,ei));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const uc=new U,Jv=new U,jv=new qt;class vs{constructor(t=new U(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=uc.subVectors(i,n).cross(Jv.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const s=t.delta(uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||jv.getNormalMatrix(t),s=this.coplanarPoint(uc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new cs,Qv=new Xt(.5,.5),co=new U;class tg{constructor(t=new vs,n=new vs,i=new vs,s=new vs,r=new vs,a=new vs){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=gi,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],g=r[8],M=r[9],p=r[10],f=r[11],E=r[12],w=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-a,m-h,f-g,A-E).normalize(),s[1].setComponents(c+a,m+h,f+g,A+E).normalize(),s[2].setComponents(c+o,m+d,f+M,A+w).normalize(),s[3].setComponents(c-o,m-d,f-M,A-w).normalize(),i)s[4].setComponents(l,u,p,S).normalize(),s[5].setComponents(c-l,m-u,f-p,A-S).normalize();else if(s[4].setComponents(c-l,m-u,f-p,A-S).normalize(),n===gi)s[5].setComponents(c+l,m+u,f+p,A+S).normalize();else if(n===Ho)s[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const n=Qv.distanceTo(t.center);return gs.radius=.7071067811865476+n,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(co.x=s.normal.x>0?t.max.x:t.min.x,co.y=s.normal.y>0?t.max.y:t.min.y,co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eg extends qr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wo=new U,Xo=new U,Kf=new Ee,ia=new Ku,ho=new cs,dc=new U,Zf=new U;class tx extends Sn{constructor(t=new pn,n=new eg){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Wo.fromBufferAttribute(n,s-1),Xo.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Wo.distanceTo(Xo);t.setAttribute("lineDistance",new He(i,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;Kf.copy(s).invert(),ia.copy(t.ray).applyMatrix4(Kf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=m,p=g-1;M<p;M+=c){const f=h.getX(M),E=h.getX(M+1),w=uo(this,t,ia,l,f,E,M);w&&n.push(w)}if(this.isLineLoop){const M=h.getX(g-1),p=h.getX(m),f=uo(this,t,ia,l,M,p,g-1);f&&n.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=m,p=g-1;M<p;M+=c){const f=uo(this,t,ia,l,M,M+1,M);f&&n.push(f)}if(this.isLineLoop){const M=uo(this,t,ia,l,g-1,m,g-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function uo(e,t,n,i,s,r,a){const o=e.geometry.attributes.position;if(Wo.fromBufferAttribute(o,s),Xo.fromBufferAttribute(o,r),n.distanceSqToSegment(Wo,Xo,dc,Zf)>i)return;dc.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(dc);if(!(c<t.near||c>t.far))return{distance:c,point:Zf.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}const Jf=new U,jf=new U;class ex extends tx{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Jf.fromBufferAttribute(n,s),jf.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Jf.distanceTo(jf);t.setAttribute("lineDistance",new He(i,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nx extends qr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qf=new Ee,Ch=new Ku,fo=new cs,po=new U;class ix extends Sn{constructor(t=new pn,n=new nx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,t.ray.intersectsSphere(fo)===!1)return;Qf.copy(s).invert(),Ch.copy(t.ray).applyMatrix4(Qf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,M=m;g<M;g++){const p=c.getX(g);po.fromBufferAttribute(d,p),tp(po,p,l,s,t,n,this)}}else{const u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=u,M=m;g<M;g++)po.fromBufferAttribute(d,g),tp(po,g,l,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tp(e,t,n,i,s,r,a){const o=Ch.distanceSqToPoint(e);if(o<n){const l=new U;Ch.closestPointToPoint(e,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ng extends Mn{constructor(t=[],n=Fs,i,s,r,a,o,l,c,h){super(t,n,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lr extends Mn{constructor(t,n,i=Si,s,r,a,o=Ye,l=Ye,c,h=zi,d=1){if(h!==zi&&h!==bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class sx extends Lr{constructor(t,n=Si,i=Fs,s,r,a=Ye,o=Ye,l,c=zi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ig extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yr extends pn{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,i,n,t,a,r,0),g("z","y","x",1,-1,i,n,-t,a,r,1),g("x","z","y",1,1,t,i,n,s,a,2),g("x","z","y",1,-1,t,i,-n,s,a,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2));function g(M,p,f,E,w,S,A,T,R,v,y){const L=S/R,C=A/v,D=S/2,G=A/2,Z=T/2,B=R+1,$=v+1;let N=0,tt=0;const at=new U;for(let dt=0;dt<$;dt++){const ft=dt*C-G;for(let _t=0;_t<B;_t++){const Wt=_t*L-D;at[M]=Wt*E,at[p]=ft*w,at[f]=Z,c.push(at.x,at.y,at.z),at[M]=0,at[p]=0,at[f]=T>0?1:-1,h.push(at.x,at.y,at.z),d.push(_t/R),d.push(1-dt/v),N+=1}}for(let dt=0;dt<v;dt++)for(let ft=0;ft<R;ft++){const _t=u+ft+B*dt,Wt=u+ft+B*(dt+1),st=u+(ft+1)+B*(dt+1),gt=u+(ft+1)+B*dt;l.push(_t,Wt,gt),l.push(Wt,st,gt),tt+=6}o.addGroup(m,tt,y),m+=tt,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zu extends pn{constructor(t=1,n=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],m=[];let g=0;const M=[],p=i/2;let f=0;E(),a===!1&&(t>0&&w(!0),n>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new He(d,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(m,2));function E(){const S=new U,A=new U;let T=0;const R=(n-t)/i;for(let v=0;v<=r;v++){const y=[],L=v/r,C=L*(n-t)+t;for(let D=0;D<=s;D++){const G=D/s,Z=G*l+o,B=Math.sin(Z),$=Math.cos(Z);A.x=C*B,A.y=-L*i+p,A.z=C*$,d.push(A.x,A.y,A.z),S.set(B,R,$).normalize(),u.push(S.x,S.y,S.z),m.push(G,1-L),y.push(g++)}M.push(y)}for(let v=0;v<s;v++)for(let y=0;y<r;y++){const L=M[y][v],C=M[y+1][v],D=M[y+1][v+1],G=M[y][v+1];(t>0||y!==0)&&(h.push(L,C,G),T+=3),(n>0||y!==r-1)&&(h.push(C,D,G),T+=3)}c.addGroup(f,T,0),f+=T}function w(S){const A=g,T=new Xt,R=new U;let v=0;const y=S===!0?t:n,L=S===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,p*L,0),u.push(0,L,0),m.push(.5,.5),g++;const C=g;for(let D=0;D<=s;D++){const Z=D/s*l+o,B=Math.cos(Z),$=Math.sin(Z);R.x=y*$,R.y=p*L,R.z=y*B,d.push(R.x,R.y,R.z),u.push(0,L,0),T.x=B*.5+.5,T.y=$*.5*L+.5,m.push(T.x,T.y),g++}for(let D=0;D<s;D++){const G=A+D,Z=C+D;S===!0?h.push(Z,Z+1,G):h.push(Z+1,Z,G),v+=3}c.addGroup(f,v,S===!0?1:2),f+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xl extends pn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=n/l,m=[],g=[],M=[],p=[];for(let f=0;f<h;f++){const E=f*u-a;for(let w=0;w<c;w++){const S=w*d-r;g.push(S,-E,0),M.push(0,0,1),p.push(w/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const w=E+c*f,S=E+c*(f+1),A=E+1+c*(f+1),T=E+1+c*f;m.push(w,S,T),m.push(S,A,T)}this.setIndex(m),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(M,3)),this.setAttribute("uv",new He(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ml extends pn{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new U,u=new U,m=[],g=[],M=[],p=[];for(let f=0;f<=i;f++){const E=[],w=f/i,S=a+w*o,A=t*Math.cos(S),T=Math.sqrt(t*t-A*A);let R=0;f===0&&a===0?R=.5/n:f===i&&l===Math.PI&&(R=-.5/n);for(let v=0;v<=n;v++){const y=v/n,L=s+y*r;d.x=-T*Math.cos(L),d.y=A,d.z=T*Math.sin(L),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),p.push(y+R,1-w),E.push(c++)}h.push(E)}for(let f=0;f<i;f++)for(let E=0;E<n;E++){const w=h[f][E+1],S=h[f][E],A=h[f+1][E],T=h[f+1][E+1];(f!==0||a>0)&&m.push(w,S,T),(f!==i-1||l<Math.PI)&&m.push(S,A,T)}this.setIndex(m),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(M,3)),this.setAttribute("uv",new He(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Ir(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];if(ep(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(ep(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function gn(e){const t={};for(let n=0;n<e.length;n++){const i=Ir(e[n]);for(const s in i)t[s]=i[s]}return t}function ep(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function rx(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function sg(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Bs={clone:Ir,merge:gn};var ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $e extends qr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=rx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ue().fromArray(s.value);break;case"m3":this.uniforms[i].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ee().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class rg extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lx extends qr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cx extends qr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mo=new U,go=new Hi,di=new U;class ag extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mo,go,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,di.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(mo,go,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new U,np=new Xt,ip=new Xt;class Xn extends ag{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Rh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rh*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,n){return this.getViewBounds(t,np,ip),n.subVectors(ip,np)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Vl*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ju extends ag{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const lr=-90,cr=1;class hx extends Sn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xn(lr,cr,t,n);s.layers=this.layers,this.add(s);const r=new Xn(lr,cr,t,n);r.layers=this.layers,this.add(r);const a=new Xn(lr,cr,t,n);a.layers=this.layers,this.add(a);const o=new Xn(lr,cr,t,n);o.layers=this.layers,this.add(o);const l=new Xn(lr,cr,t,n);l.layers=this.layers,this.add(l);const c=new Xn(lr,cr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(const c of n)this.remove(c);if(t===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ux extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class dx{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=fx.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function fx(){this._document.hidden===!1&&this.reset()}const id=class id{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){const r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};id.prototype.isMatrix2=!0;let sp=id;class px extends ex{constructor(t=10,n=10,i=4473924,s=8947848){i=new Jt(i),s=new Jt(s);const r=n/2,a=t/n,o=t/2,l=[],c=[];for(let u=0,m=0,g=-o;u<=n;u++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const M=u===r?i:s;M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3}const h=new pn;h.setAttribute("position",new He(l,3)),h.setAttribute("color",new He(c,3));const d=new eg({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function rp(e,t,n,i){const s=mx(i);switch(n){case X0:return e*t;case Hu:return e*t/s.components*s.byteLength;case Vu:return e*t/s.components*s.byteLength;case Us:return e*t*2/s.components*s.byteLength;case Gu:return e*t*2/s.components*s.byteLength;case q0:return e*t*3/s.components*s.byteLength;case ni:return e*t*4/s.components*s.byteLength;case Wu:return e*t*4/s.components*s.byteLength;case bo:case To:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ao:case wo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qc:case eh:return Math.max(e,16)*Math.max(t,8)/4;case jc:case th:return Math.max(e,8)*Math.max(t,8)/2;case nh:case ih:case rh:case ah:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case sh:case No:case oh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case hh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case uh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case dh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case fh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ph:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case mh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case gh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _h:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case vh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Eh:case yh:case bh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Th:case Ah:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Oo:case wh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mx(e){switch(e){case qn:case H0:return{byteLength:1,components:1};case ya:case V0:case xn:return{byteLength:2,components:1};case ku:case zu:return{byteLength:2,components:4};case Si:case Bu:case ei:return{byteLength:4,components:1};case G0:case W0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function og(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function gx(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<d.length;m++){const g=d[u],M=d[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let m=0,g=d.length;m<g;m++){const M=d[m];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Px=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,r2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,c2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,m2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,M2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,z2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Y2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,t3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,g3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,b3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,T3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,w3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,I3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:_x,alphahash_pars_fragment:vx,alphamap_fragment:xx,alphamap_pars_fragment:Mx,alphatest_fragment:Sx,alphatest_pars_fragment:Ex,aomap_fragment:yx,aomap_pars_fragment:bx,batching_pars_vertex:Tx,batching_vertex:Ax,begin_vertex:wx,beginnormal_vertex:Rx,bsdfs:Cx,iridescence_fragment:Px,bumpmap_pars_fragment:Lx,clipping_planes_fragment:Ix,clipping_planes_pars_fragment:Dx,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:Ux,color_fragment:Nx,color_pars_fragment:Ox,color_pars_vertex:Bx,color_vertex:kx,common:zx,cube_uv_reflection_fragment:Hx,defaultnormal_vertex:Vx,displacementmap_pars_vertex:Gx,displacementmap_vertex:Wx,emissivemap_fragment:Xx,emissivemap_pars_fragment:qx,colorspace_fragment:Yx,colorspace_pars_fragment:$x,envmap_fragment:Kx,envmap_common_pars_fragment:Zx,envmap_pars_fragment:Jx,envmap_pars_vertex:jx,envmap_physical_pars_fragment:c2,envmap_vertex:Qx,fog_vertex:t2,fog_pars_vertex:e2,fog_fragment:n2,fog_pars_fragment:i2,gradientmap_pars_fragment:s2,lightmap_pars_fragment:r2,lights_lambert_fragment:a2,lights_lambert_pars_fragment:o2,lights_pars_begin:l2,lights_toon_fragment:h2,lights_toon_pars_fragment:u2,lights_phong_fragment:d2,lights_phong_pars_fragment:f2,lights_physical_fragment:p2,lights_physical_pars_fragment:m2,lights_fragment_begin:g2,lights_fragment_maps:_2,lights_fragment_end:v2,lightprobes_pars_fragment:x2,logdepthbuf_fragment:M2,logdepthbuf_pars_fragment:S2,logdepthbuf_pars_vertex:E2,logdepthbuf_vertex:y2,map_fragment:b2,map_pars_fragment:T2,map_particle_fragment:A2,map_particle_pars_fragment:w2,metalnessmap_fragment:R2,metalnessmap_pars_fragment:C2,morphinstance_vertex:P2,morphcolor_vertex:L2,morphnormal_vertex:I2,morphtarget_pars_vertex:D2,morphtarget_vertex:F2,normal_fragment_begin:U2,normal_fragment_maps:N2,normal_pars_fragment:O2,normal_pars_vertex:B2,normal_vertex:k2,normalmap_pars_fragment:z2,clearcoat_normal_fragment_begin:H2,clearcoat_normal_fragment_maps:V2,clearcoat_pars_fragment:G2,iridescence_pars_fragment:W2,opaque_fragment:X2,packing:q2,premultiplied_alpha_fragment:Y2,project_vertex:$2,dithering_fragment:K2,dithering_pars_fragment:Z2,roughnessmap_fragment:J2,roughnessmap_pars_fragment:j2,shadowmap_pars_fragment:Q2,shadowmap_pars_vertex:t3,shadowmap_vertex:e3,shadowmask_pars_fragment:n3,skinbase_vertex:i3,skinning_pars_vertex:s3,skinning_vertex:r3,skinnormal_vertex:a3,specularmap_fragment:o3,specularmap_pars_fragment:l3,tonemapping_fragment:c3,tonemapping_pars_fragment:h3,transmission_fragment:u3,transmission_pars_fragment:d3,uv_pars_fragment:f3,uv_pars_vertex:p3,uv_vertex:m3,worldpos_vertex:g3,background_vert:_3,background_frag:v3,backgroundCube_vert:x3,backgroundCube_frag:M3,cube_vert:S3,cube_frag:E3,depth_vert:y3,depth_frag:b3,distance_vert:T3,distance_frag:A3,equirect_vert:w3,equirect_frag:R3,linedashed_vert:C3,linedashed_frag:P3,meshbasic_vert:L3,meshbasic_frag:I3,meshlambert_vert:D3,meshlambert_frag:F3,meshmatcap_vert:U3,meshmatcap_frag:N3,meshnormal_vert:O3,meshnormal_frag:B3,meshphong_vert:k3,meshphong_frag:z3,meshphysical_vert:H3,meshphysical_frag:V3,meshtoon_vert:G3,meshtoon_frag:W3,points_vert:X3,points_frag:q3,shadow_vert:Y3,shadow_frag:$3,sprite_vert:K3,sprite_frag:Z3},xt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},pi={basic:{uniforms:gn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:gn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:gn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:gn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:gn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:gn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:gn([xt.points,xt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:gn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:gn([xt.common,xt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:gn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:gn([xt.sprite,xt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:gn([xt.common,xt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:gn([xt.lights,xt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};pi.physical={uniforms:gn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const _o={r:0,b:0,g:0},J3=new Ee,lg=new qt;lg.set(-1,0,0,0,1,0,0,0,1);function j3(e,t,n,i,s,r){const a=new Jt(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function m(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){const S=E.backgroundBlurriness>0;w=t.get(w,S)}return w}function g(E){let w=!1;const S=m(E);S===null?p(a,o):S&&S.isColor&&(p(S,1),w=!0);const A=e.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(E,w){const S=m(w);S&&(S.isCubeTexture||S.mapping===vl)?(c===void 0&&(c=new $n(new Yr(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:Ir(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(J3.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lg),c.material.toneMapped=te.getTransfer(S.colorSpace)!==pe,(h!==S||d!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new $n(new xl(2,2),new $e({name:"BackgroundMaterial",uniforms:Ir(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=te.getTransfer(S.colorSpace)!==pe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,w){E.getRGB(_o,sg(e)),n.buffers.color.setClear(_o.r,_o.g,_o.b,w,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(a,o)},render:g,addToRenderList:M,dispose:f}}function Q3(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(C,D,G,Z,B){let $=!1;const N=d(C,Z,G,D);r!==N&&(r=N,c(r.object)),$=m(C,Z,G,B),$&&g(C,Z,G,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(C,D,G,Z),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return e.createVertexArray()}function c(C){return e.bindVertexArray(C)}function h(C){return e.deleteVertexArray(C)}function d(C,D,G,Z){const B=Z.wireframe===!0;let $=i[D.id];$===void 0&&($={},i[D.id]=$);const N=C.isInstancedMesh===!0?C.id:0;let tt=$[N];tt===void 0&&(tt={},$[N]=tt);let at=tt[G.id];at===void 0&&(at={},tt[G.id]=at);let dt=at[B];return dt===void 0&&(dt=u(l()),at[B]=dt),dt}function u(C){const D=[],G=[],Z=[];for(let B=0;B<n;B++)D[B]=0,G[B]=0,Z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:Z,object:C,attributes:{},index:null}}function m(C,D,G,Z){const B=r.attributes,$=D.attributes;let N=0;const tt=G.getAttributes();for(const at in tt)if(tt[at].location>=0){const ft=B[at];let _t=$[at];if(_t===void 0&&(at==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),at==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),ft===void 0||ft.attribute!==_t||_t&&ft.data!==_t.data)return!0;N++}return r.attributesNum!==N||r.index!==Z}function g(C,D,G,Z){const B={},$=D.attributes;let N=0;const tt=G.getAttributes();for(const at in tt)if(tt[at].location>=0){let ft=$[at];ft===void 0&&(at==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),at==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor));const _t={};_t.attribute=ft,ft&&ft.data&&(_t.data=ft.data),B[at]=_t,N++}r.attributes=B,r.attributesNum=N,r.index=Z}function M(){const C=r.newAttributes;for(let D=0,G=C.length;D<G;D++)C[D]=0}function p(C){f(C,0)}function f(C,D){const G=r.newAttributes,Z=r.enabledAttributes,B=r.attributeDivisors;G[C]=1,Z[C]===0&&(e.enableVertexAttribArray(C),Z[C]=1),B[C]!==D&&(e.vertexAttribDivisor(C,D),B[C]=D)}function E(){const C=r.newAttributes,D=r.enabledAttributes;for(let G=0,Z=D.length;G<Z;G++)D[G]!==C[G]&&(e.disableVertexAttribArray(G),D[G]=0)}function w(C,D,G,Z,B,$,N){N===!0?e.vertexAttribIPointer(C,D,G,B,$):e.vertexAttribPointer(C,D,G,Z,B,$)}function S(C,D,G,Z){M();const B=Z.attributes,$=G.getAttributes(),N=D.defaultAttributeValues;for(const tt in $){const at=$[tt];if(at.location>=0){let dt=B[tt];if(dt===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(dt=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(dt=C.instanceColor)),dt!==void 0){const ft=dt.normalized,_t=dt.itemSize,Wt=t.get(dt);if(Wt===void 0)continue;const st=Wt.buffer,gt=Wt.type,K=Wt.bytesPerElement,ht=gt===e.INT||gt===e.UNSIGNED_INT||dt.gpuType===Bu;if(dt.isInterleavedBufferAttribute){const J=dt.data,Nt=J.stride,kt=dt.offset;if(J.isInstancedInterleavedBuffer){for(let Ct=0;Ct<at.locationSize;Ct++)f(at.location+Ct,J.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ct=0;Ct<at.locationSize;Ct++)p(at.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,st);for(let Ct=0;Ct<at.locationSize;Ct++)w(at.location+Ct,_t/at.locationSize,gt,ft,Nt*K,(kt+_t/at.locationSize*Ct)*K,ht)}else{if(dt.isInstancedBufferAttribute){for(let J=0;J<at.locationSize;J++)f(at.location+J,dt.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let J=0;J<at.locationSize;J++)p(at.location+J);e.bindBuffer(e.ARRAY_BUFFER,st);for(let J=0;J<at.locationSize;J++)w(at.location+J,_t/at.locationSize,gt,ft,_t*K,_t/at.locationSize*J*K,ht)}}else if(N!==void 0){const ft=N[tt];if(ft!==void 0)switch(ft.length){case 2:e.vertexAttrib2fv(at.location,ft);break;case 3:e.vertexAttrib3fv(at.location,ft);break;case 4:e.vertexAttrib4fv(at.location,ft);break;default:e.vertexAttrib1fv(at.location,ft)}}}}E()}function A(){y();for(const C in i){const D=i[C];for(const G in D){const Z=D[G];for(const B in Z){const $=Z[B];for(const N in $)h($[N].object),delete $[N];delete Z[B]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const D=i[C.id];for(const G in D){const Z=D[G];for(const B in Z){const $=Z[B];for(const N in $)h($[N].object),delete $[N];delete Z[B]}}delete i[C.id]}function R(C){for(const D in i){const G=i[D];for(const Z in G){const B=G[Z];if(B[C.id]===void 0)continue;const $=B[C.id];for(const N in $)h($[N].object),delete $[N];delete B[C.id]}}}function v(C){for(const D in i){const G=i[D],Z=C.isInstancedMesh===!0?C.id:0,B=G[Z];if(B!==void 0){for(const $ in B){const N=B[$];for(const tt in N)h(N[tt].object),delete N[tt];delete B[$]}delete G[Z],Object.keys(G).length===0&&delete i[D]}}}function y(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:E}}function tM(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function eM(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ni&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==qn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ei&&!v)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),E=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:S,maxSamples:A,samples:T}}function nM(e){const t=this;let n=null,i=0,s=!1,r=!1;const a=new vs,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||i!==0||s;return s=u,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,f=e.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const E=r?0:i,w=E*4;let S=f.clippingState||null;l.value=S,S=h(g,u,w,m);for(let A=0;A!==w;++A)S[A]=n[A];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,m,g){const M=d!==null?d.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const f=m+M*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let w=0,S=m;w!==M;++w,S+=4)a.copy(d[w]).applyMatrix4(E,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}const ns=4,ap=[.125,.215,.35,.446,.526,.582],Ms=20,iM=256,sa=new Ju,op=new Jt;let fc=null,pc=0,mc=0,gc=!1;const sM=new U;class lp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){const{size:a=256,position:o=sM}=r;fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fc,pc,mc),this._renderer.xr.enabled=gc,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Fs||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:xn,format:ni,colorSpace:Bo,depthBuffer:!1},s=cp(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cp(t,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rM(r)),this._blurMaterial=oM(r,t,n),this._ggxMaterial=aM(r,t,n)}return s}_compileMaterial(t){const n=new $n(new pn,t);this._renderer.compile(n,sa)}_sceneToCubeUV(t,n,i,s,r){const l=new Xn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(op),d.toneMapping=xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $n(new Yr,new Os({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let f=!1;const E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,f=!0):(p.color.copy(op),f=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const A=this._cubeSize;hr(s,S*A,w>2?A:0,A,A),d.setRenderTarget(s),f&&d.render(M,l),d.render(t,l)}d.toneMapping=m,d.autoClear=u,t.background=E}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===Fs||t.mapping===Pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=up()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;hr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,sa)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,m=d*u,{_lodMax:g}=this,M=this._sizeLods[i],p=3*M*(i>g-ns?i-g+ns:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-n,hr(r,p,f,3*M,2*M),s.setRenderTarget(r),s.render(o,sa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,hr(t,p,f,3*M,2*M),s.setRenderTarget(t),s.render(o,sa)}_blur(t,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&re("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const u=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ms-1),M=r/g,p=isFinite(r)?1+Math.floor(h*M):Ms;p>Ms&&Vt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ms}`);const f=[];let E=0;for(let R=0;R<Ms;++R){const v=R/M,y=Math.exp(-v*v/2);f.push(y),R===0?E+=y:R<p&&(E+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-i;const S=this._sizeLods[s],A=3*S*(s>w-ns?s-w+ns:0),T=4*(this._cubeSize-S);hr(n,A,T,3*S,2*S),l.setRenderTarget(n),l.render(d,sa)}}function rM(e){const t=[],n=[],i=[];let s=e;const r=e-ns+1+ap.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>e-ns?l=ap[a-e+ns-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,M=3,p=2,f=1,E=new Float32Array(M*g*m),w=new Float32Array(p*g*m),S=new Float32Array(f*g*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,v=T>2?0:-1,y=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];E.set(y,M*g*T),w.set(u,p*g*T);const L=[T,T,T,T,T,T];S.set(L,f*g*T)}const A=new pn;A.setAttribute("position",new vn(E,M)),A.setAttribute("uv",new vn(w,p)),A.setAttribute("faceIndex",new vn(S,f)),i.push(new $n(A,null)),s>ns&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function cp(e,t,n){const i=new un(e,t,n);return i.texture.mapping=vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function aM(e,t,n){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function oM(e,t,n){const i=new Float32Array(Ms),s=new U(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function hp(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function up(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class cg extends un{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ng(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yr(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:si});r.uniforms.tEquirect.value=n;const a=new $n(s,r),o=n.minFilter;return n.minFilter===ys&&(n.minFilter=hn),new hx(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}}function lM(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){const m=u.mapping;if(m===kl||m===zl)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const M=new cg(g.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,g=m===kl||m===zl,M=m===Fs||m===Pr;if(g||M){let p=n.get(u);const f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new lp(e)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),p.texture;if(p!==void 0)return p.texture;{const E=u.image;return g&&E&&E.height>0||M&&E&&l(E)?(i===null&&(i=new lp(e)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===kl?u.mapping=Fs:m===zl&&(u.mapping=Pr),u}function l(u){let m=0;const g=6;for(let M=0;M<g;M++)u[M]!==void 0&&m++;return m===g}function c(u){const m=u.target;m.removeEventListener("dispose",c);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const g=n.get(m);g!==void 0&&(n.delete(m),g.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function cM(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&gr("WebGLRenderer: "+i+" extension not supported."),s}}}function hM(e,t,n,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const m=r.get(u);m&&(t.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)t.update(u[m],e.ARRAY_BUFFER)}function c(d){const u=[],m=d.index,g=d.attributes.position;let M=0;if(g===void 0)return;if(m!==null){const E=m.array;M=m.version;for(let w=0,S=E.length;w<S;w+=3){const A=E[w+0],T=E[w+1],R=E[w+2];u.push(A,T,T,R,R,A)}}else{const E=g.array;M=g.version;for(let w=0,S=E.length/3-1;w<S;w+=3){const A=w+0,T=w+1,R=w+2;u.push(A,T,T,R,R,A)}}const p=new(g.count>=65535?j0:J0)(u,1);p.version=M;const f=r.get(d);f&&t.remove(f),r.set(d,p)}function h(d){const u=r.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function uM(e,t,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){e.drawElements(i,u,r,d*a),n.update(u,i,1)}function c(d,u,m){m!==0&&(e.drawElementsInstanced(i,u,r,d*a,m),n.update(u,i,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,m);let M=0;for(let p=0;p<m;p++)M+=u[p];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function dM(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:re("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function fM(e,t,n){const i=new WeakMap,s=new Ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let L=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var m=L;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),M===!0&&(S=2),p===!0&&(S=3);let A=o.attributes.position.count*S,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*T*4*d),v=new $0(R,A,T,d);v.type=ei,v.needsUpdate=!0;const y=S*4;for(let C=0;C<d;C++){const D=f[C],G=E[C],Z=w[C],B=A*T*4*C;for(let $=0;$<D.count;$++){const N=$*y;g===!0&&(s.fromBufferAttribute(D,$),R[B+N+0]=s.x,R[B+N+1]=s.y,R[B+N+2]=s.z,R[B+N+3]=0),M===!0&&(s.fromBufferAttribute(G,$),R[B+N+4]=s.x,R[B+N+5]=s.y,R[B+N+6]=s.z,R[B+N+7]=0),p===!0&&(s.fromBufferAttribute(Z,$),R[B+N+8]=s.x,R[B+N+9]=s.y,R[B+N+10]=s.z,R[B+N+11]=Z.itemSize===4?s.w:1)}}u={count:d,texture:v,size:new Xt(A,T)},i.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function pM(e,t,n,i,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const mM={[Lu]:"LINEAR_TONE_MAPPING",[Iu]:"REINHARD_TONE_MAPPING",[Du]:"CINEON_TONE_MAPPING",[Fu]:"ACES_FILMIC_TONE_MAPPING",[Nu]:"AGX_TONE_MAPPING",[Ou]:"NEUTRAL_TONE_MAPPING",[Uu]:"CUSTOM_TONE_MAPPING"};function gM(e,t,n,i,s,r){const a=new un(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Lr(t,n):void 0}),o=new un(t,n,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new pn;l.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new He([0,2,0,0,2,0],2));const c=new rg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new $n(l,c),d=new Ju(-1,1,1,-1,0,1);let u=null,m=null,g=!1,M,p=null,f=[],E=!1;this.setSize=function(w,S){a.setSize(w,S),o.setSize(w,S);for(let A=0;A<f.length;A++){const T=f[A];T.setSize&&T.setSize(w,S)}},this.setEffects=function(w){f=w,E=f.length>0&&f[0].isRenderPass===!0;const S=a.width,A=a.height;for(let T=0;T<f.length;T++){const R=f[T];R.setSize&&R.setSize(S,A)}},this.begin=function(w,S){if(g||w.toneMapping===xi&&f.length===0)return!1;if(p=S,S!==null){const A=S.width,T=S.height;(a.width!==A||a.height!==T)&&this.setSize(A,T)}return E===!1&&w.setRenderTarget(a),M=w.toneMapping,w.toneMapping=xi,!0},this.hasRenderPass=function(){return E},this.end=function(w,S){w.toneMapping=M,g=!0;let A=a,T=o;for(let R=0;R<f.length;R++){const v=f[R];if(v.enabled!==!1&&(v.render(w,T,A,S),v.needsSwap!==!1)){const y=A;A=T,T=y}}if(u!==w.outputColorSpace||m!==w.toneMapping){u=w.outputColorSpace,m=w.toneMapping,c.defines={},te.getTransfer(u)===pe&&(c.defines.SRGB_TRANSFER="");const R=mM[m];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(p),w.render(h,d),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const hg=new Mn,Ph=new Lr(1,1),ug=new $0,dg=new Nv,fg=new ng,dp=[],fp=[],pp=new Float32Array(16),mp=new Float32Array(9),gp=new Float32Array(4);function $r(e,t,n){const i=e[0];if(i<=0||i>0)return e;const s=t*n;let r=dp[s];if(r===void 0&&(r=new Float32Array(s),dp[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function El(e,t){let n=fp[t];n===void 0&&(n=new Int32Array(t),fp[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function _M(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function vM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),Qe(n,t)}}function xM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),Qe(n,t)}}function MM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),Qe(n,t)}}function SM(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qe(n,t)}else{if(je(n,i))return;gp.set(i),e.uniformMatrix2fv(this.addr,!1,gp),Qe(n,i)}}function EM(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qe(n,t)}else{if(je(n,i))return;mp.set(i),e.uniformMatrix3fv(this.addr,!1,mp),Qe(n,i)}}function yM(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qe(n,t)}else{if(je(n,i))return;pp.set(i),e.uniformMatrix4fv(this.addr,!1,pp),Qe(n,i)}}function bM(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function TM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),Qe(n,t)}}function AM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),Qe(n,t)}}function wM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),Qe(n,t)}}function RM(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function CM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),Qe(n,t)}}function PM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),Qe(n,t)}}function LM(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),Qe(n,t)}}function IM(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Ph.compareFunction=n.isReversedDepthBuffer()?qu:Xu,r=Ph):r=hg,n.setTexture2D(t||r,s)}function DM(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||dg,s)}function FM(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||fg,s)}function UM(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||ug,s)}function NM(e){switch(e){case 5126:return _M;case 35664:return vM;case 35665:return xM;case 35666:return MM;case 35674:return SM;case 35675:return EM;case 35676:return yM;case 5124:case 35670:return bM;case 35667:case 35671:return TM;case 35668:case 35672:return AM;case 35669:case 35673:return wM;case 5125:return RM;case 36294:return CM;case 36295:return PM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return UM}}function OM(e,t){e.uniform1fv(this.addr,t)}function BM(e,t){const n=$r(t,this.size,2);e.uniform2fv(this.addr,n)}function kM(e,t){const n=$r(t,this.size,3);e.uniform3fv(this.addr,n)}function zM(e,t){const n=$r(t,this.size,4);e.uniform4fv(this.addr,n)}function HM(e,t){const n=$r(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function VM(e,t){const n=$r(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function GM(e,t){const n=$r(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function WM(e,t){e.uniform1iv(this.addr,t)}function XM(e,t){e.uniform2iv(this.addr,t)}function qM(e,t){e.uniform3iv(this.addr,t)}function YM(e,t){e.uniform4iv(this.addr,t)}function $M(e,t){e.uniform1uiv(this.addr,t)}function KM(e,t){e.uniform2uiv(this.addr,t)}function ZM(e,t){e.uniform3uiv(this.addr,t)}function JM(e,t){e.uniform4uiv(this.addr,t)}function jM(e,t,n){const i=this.cache,s=t.length,r=El(n,s);je(i,r)||(e.uniform1iv(this.addr,r),Qe(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Ph:a=hg;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||a,r[o])}function QM(e,t,n){const i=this.cache,s=t.length,r=El(n,s);je(i,r)||(e.uniform1iv(this.addr,r),Qe(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||dg,r[a])}function tS(e,t,n){const i=this.cache,s=t.length,r=El(n,s);je(i,r)||(e.uniform1iv(this.addr,r),Qe(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||fg,r[a])}function eS(e,t,n){const i=this.cache,s=t.length,r=El(n,s);je(i,r)||(e.uniform1iv(this.addr,r),Qe(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||ug,r[a])}function nS(e){switch(e){case 5126:return OM;case 35664:return BM;case 35665:return kM;case 35666:return zM;case 35674:return HM;case 35675:return VM;case 35676:return GM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return qM;case 35669:case 35673:return YM;case 5125:return $M;case 36294:return KM;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return eS}}class iS{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NM(n.type)}}class sS{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nS(n.type)}}class rS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,n[o.id],i)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function _p(e,t){e.seq.push(t),e.map[t.id]=t}function aS(e,t,n){const i=e.name,s=i.length;for(_c.lastIndex=0;;){const r=_c.exec(i),a=_c.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_p(n,c===void 0?new iS(o,e,t):new sS(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new rS(o),_p(n,d)),n=d}}}class Ro{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(n,a),l=t.getUniformLocation(n,o.name);aS(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in n&&i.push(a)}return i}}function vp(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const oS=37297;let lS=0;function cS(e,t){const n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const xp=new qt;function hS(e){te._getMatrix(xp,te.workingColorSpace,e);const t=`mat3( ${xp.elements.map(n=>n.toFixed(4))} )`;switch(te.getTransfer(e)){case ko:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Mp(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+cS(e.getShaderSource(t),o)}else return r}function uS(e,t){const n=hS(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const dS={[Lu]:"Linear",[Iu]:"Reinhard",[Du]:"Cineon",[Fu]:"ACESFilmic",[Nu]:"AgX",[Ou]:"Neutral",[Uu]:"Custom"};function fS(e,t){const n=dS[t];return n===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vo=new U;function pS(){te.getLuminanceCoefficients(vo);const e=vo.x.toFixed(4),t=vo.y.toFixed(4),n=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mS(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function gS(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function _S(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(t,s),a=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function da(e){return e!==""}function Sp(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ep(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(e){return e.replace(vS,MS)}const xS=new Map;function MS(e,t){let n=Zt[t];if(n===void 0){const i=xS.get(t);if(i!==void 0)n=Zt[i],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lh(n)}const SS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yp(e){return e.replace(SS,ES)}function ES(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bp(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const yS={[yo]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function bS(e){return yS[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TS={[Fs]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[vl]:"ENVMAP_TYPE_CUBE_UV"};function AS(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":TS[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const wS={[Pr]:"ENVMAP_MODE_REFRACTION"};function RS(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":wS[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CS={[k0]:"ENVMAP_BLENDING_MULTIPLY",[mv]:"ENVMAP_BLENDING_MIX",[gv]:"ENVMAP_BLENDING_ADD"};function PS(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":CS[e.combine]||"ENVMAP_BLENDING_NONE"}function LS(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function IS(e,t,n,i){const s=e.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=bS(n),c=AS(n),h=RS(n),d=PS(n),u=LS(n),m=mS(n),g=gS(r),M=s.createProgram();let p,f,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(da).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(da).join(`
`),f.length>0&&(f+=`
`)):(p=[bp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),f=[bp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?Zt.tonemapping_pars_fragment:"",n.toneMapping!==xi?fS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,uS("linearToOutputTexel",n.outputColorSpace),pS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),a=Lh(a),a=Sp(a,n),a=Ep(a,n),o=Lh(o),o=Sp(o,n),o=Ep(o,n),a=yp(a),o=yp(o),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=E+p+a,S=E+f+o,A=vp(s,s.VERTEX_SHADER,w),T=vp(s,s.FRAGMENT_SHADER,S);s.attachShader(M,A),s.attachShader(M,T),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(C){if(e.debug.checkShaderErrors){const D=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(A)||"",Z=s.getShaderInfoLog(T)||"",B=D.trim(),$=G.trim(),N=Z.trim();let tt=!0,at=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(tt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,A,T);else{const dt=Mp(s,A,"vertex"),ft=Mp(s,T,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+dt+`
`+ft)}else B!==""?Vt("WebGLProgram: Program Info Log:",B):($===""||N==="")&&(at=!1);at&&(C.diagnostics={runnable:tt,programLog:B,vertexShader:{log:$,prefix:p},fragmentShader:{log:N,prefix:f}})}s.deleteShader(A),s.deleteShader(T),v=new Ro(s,M),y=_S(s,M)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,oS)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lS++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=T,this}let DS=0;class FS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){const s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new US(t),n.set(t,i)),i}}class US{constructor(t){this.id=DS++,this.code=t,this.usedTimes=0}}function NS(e){return e===Us||e===No||e===Oo}function OS(e,t,n,i,s,r){const a=new K0,o=new FS,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,y,L,C,D,G){const Z=C.fog,B=D.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,tt=t.get(v.envMap||$,N),at=tt&&tt.mapping===vl?tt.image.height:null,dt=m[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Vt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_t=ft!==void 0?ft.length:0;let Wt=0;B.morphAttributes.position!==void 0&&(Wt=1),B.morphAttributes.normal!==void 0&&(Wt=2),B.morphAttributes.color!==void 0&&(Wt=3);let st,gt,K,ht;if(dt){const Tt=pi[dt];st=Tt.vertexShader,gt=Tt.fragmentShader}else{st=v.vertexShader,gt=v.fragmentShader;const Tt=o.getVertexShaderStage(v),Te=o.getFragmentShaderStage(v);o.update(v,Tt,Te),K=Tt.id,ht=Te.id}const J=e.getRenderTarget(),Nt=e.state.buffers.depth.getReversed(),kt=D.isInstancedMesh===!0,Ct=D.isBatchedMesh===!0,fe=!!v.map,zt=!!v.matcap,Kt=!!tt,Yt=!!v.aoMap,Gt=!!v.lightMap,oe=!!v.bumpMap&&v.wireframe===!1,Qt=!!v.normalMap,ye=!!v.displacementMap,ge=!!v.emissiveMap,ue=!!v.metalnessMap,me=!!v.roughnessMap,P=v.anisotropy>0,Bt=v.clearcoat>0,ie=v.dispersion>0,b=v.iridescence>0,_=v.sheen>0,O=v.transmission>0,z=P&&!!v.anisotropyMap,Y=Bt&&!!v.clearcoatMap,lt=Bt&&!!v.clearcoatNormalMap,nt=Bt&&!!v.clearcoatRoughnessMap,W=b&&!!v.iridescenceMap,q=b&&!!v.iridescenceThicknessMap,ot=_&&!!v.sheenColorMap,Et=_&&!!v.sheenRoughnessMap,j=!!v.specularMap,it=!!v.specularColorMap,ct=!!v.specularIntensityMap,mt=O&&!!v.transmissionMap,wt=O&&!!v.thicknessMap,I=!!v.gradientMap,pt=!!v.alphaMap,Q=v.alphaTest>0,ut=!!v.alphaHash,vt=!!v.extensions;let et=xi;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(et=e.toneMapping);const Rt={shaderID:dt,shaderType:v.type,shaderName:v.name,vertexShader:st,fragmentShader:gt,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:ht,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&D._colorsTexture!==null,instancing:kt,instancingColor:kt&&D.instanceColor!==null,instancingMorph:kt&&D.morphTexture!==null,outputColorSpace:J===null?e.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:fe,matcap:zt,envMap:Kt,envMapMode:Kt&&tt.mapping,envMapCubeUVHeight:at,aoMap:Yt,lightMap:Gt,bumpMap:oe,normalMap:Qt,displacementMap:ye,emissiveMap:ge,normalMapObjectSpace:Qt&&v.normalMapType===xv,normalMapTangentSpace:Qt&&v.normalMapType===Af,packedNormalMap:Qt&&v.normalMapType===Af&&NS(v.normalMap.format),metalnessMap:ue,roughnessMap:me,anisotropy:P,anisotropyMap:z,clearcoat:Bt,clearcoatMap:Y,clearcoatNormalMap:lt,clearcoatRoughnessMap:nt,dispersion:ie,iridescence:b,iridescenceMap:W,iridescenceThicknessMap:q,sheen:_,sheenColorMap:ot,sheenRoughnessMap:Et,specularMap:j,specularColorMap:it,specularIntensityMap:ct,transmission:O,transmissionMap:mt,thicknessMap:wt,gradientMap:I,opaque:v.transparent===!1&&v.blending===mr&&v.alphaToCoverage===!1,alphaMap:pt,alphaTest:Q,alphaHash:ut,combine:v.combine,mapUv:fe&&g(v.map.channel),aoMapUv:Yt&&g(v.aoMap.channel),lightMapUv:Gt&&g(v.lightMap.channel),bumpMapUv:oe&&g(v.bumpMap.channel),normalMapUv:Qt&&g(v.normalMap.channel),displacementMapUv:ye&&g(v.displacementMap.channel),emissiveMapUv:ge&&g(v.emissiveMap.channel),metalnessMapUv:ue&&g(v.metalnessMap.channel),roughnessMapUv:me&&g(v.roughnessMap.channel),anisotropyMapUv:z&&g(v.anisotropyMap.channel),clearcoatMapUv:Y&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:q&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(v.sheenRoughnessMap.channel),specularMapUv:j&&g(v.specularMap.channel),specularColorMapUv:it&&g(v.specularColorMap.channel),specularIntensityMapUv:ct&&g(v.specularIntensityMap.channel),transmissionMapUv:mt&&g(v.transmissionMap.channel),thicknessMapUv:wt&&g(v.thicknessMap.channel),alphaMapUv:pt&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Qt||P),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(fe||pt),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&Qt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Nt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:et,decodeVideoTexture:fe&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===pe,decodeVideoTextureEmissive:ge&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Di,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:vt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&v.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)y.push(L),y.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(f(y,v),E(y,v),y.push(e.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function f(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function E(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){const y=m[v.type];let L;if(y){const C=pi[y];L=Bs.clone(C.uniforms)}else L=v.uniforms;return L}function S(v,y){let L=h.get(y);return L!==void 0?++L.usedTimes:(L=new IS(e,y,v,s),c.push(L),h.set(y,L)),L}function A(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:w,acquireProgram:S,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:R}}function BS(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function kS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Tp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ap(){const e=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,M,p,f){let E=e[t];return E===void 0?(E={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:f},e[t]=E):(E.id=u.id,E.object=u,E.geometry=m,E.material=g,E.materialVariant=a(u),E.groupOrder=M,E.renderOrder=u.renderOrder,E.z=p,E.group=f),t++,E}function l(u,m,g,M,p,f){const E=o(u,m,g,M,p,f);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):n.push(E)}function c(u,m,g,M,p,f){const E=o(u,m,g,M,p,f);g.transmission>0?i.unshift(E):g.transparent===!0?s.unshift(E):n.unshift(E)}function h(u,m,g){n.length>1&&n.sort(u||kS),i.length>1&&i.sort(m||Tp),s.length>1&&s.sort(m||Tp),g&&(n.reverse(),i.reverse(),s.reverse())}function d(){for(let u=t,m=e.length;u<m;u++){const g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function zS(){let e=new WeakMap;function t(i,s){const r=e.get(i);let a;return r===void 0?(a=new Ap,e.set(i,[a])):s>=r.length?(a=new Ap,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function HS(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new U,color:new Jt};break;case"SpotLight":n={position:new U,direction:new U,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":n={color:new Jt,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function VS(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let GS=0;function WS(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function XS(e){const t=new HS,n=VS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new Ee,a=new Ee;function o(c){let h=0,d=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,M=0,p=0,f=0,E=0,w=0,S=0,A=0,T=0,R=0;c.sort(WS);for(let y=0,L=c.length;y<L;y++){const C=c[y],D=C.color,G=C.intensity,Z=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Us?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*G,d+=D.g*G,u+=D.b*G;else if(C.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(C.sh.coefficients[$],G);R++}else if(C.isDirectionalLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,tt=n.get(C);tt.shadowIntensity=N.intensity,tt.shadowBias=N.bias,tt.shadowNormalBias=N.normalBias,tt.shadowRadius=N.radius,tt.shadowMapSize=N.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=C.shadow.matrix,E++}i.directional[m]=$,m++}else if(C.isSpotLight){const $=t.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(D).multiplyScalar(G),$.distance=Z,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,i.spot[M]=$;const N=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,N.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[M]=N.matrix,C.castShadow){const tt=n.get(C);tt.shadowIntensity=N.intensity,tt.shadowBias=N.bias,tt.shadowNormalBias=N.normalBias,tt.shadowRadius=N.radius,tt.shadowMapSize=N.mapSize,i.spotShadow[M]=tt,i.spotShadowMap[M]=B,S++}M++}else if(C.isRectAreaLight){const $=t.get(C);$.color.copy(D).multiplyScalar(G),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=$,p++}else if(C.isPointLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const N=C.shadow,tt=n.get(C);tt.shadowIntensity=N.intensity,tt.shadowBias=N.bias,tt.shadowNormalBias=N.normalBias,tt.shadowRadius=N.radius,tt.shadowMapSize=N.mapSize,tt.shadowCameraNear=N.camera.near,tt.shadowCameraFar=N.camera.far,i.pointShadow[g]=tt,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=$,g++}else if(C.isHemisphereLight){const $=t.get(C);$.skyColor.copy(C.color).multiplyScalar(G),$.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[f]=$,f++}}p>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==m||v.pointLength!==g||v.spotLength!==M||v.rectAreaLength!==p||v.hemiLength!==f||v.numDirectionalShadows!==E||v.numPointShadows!==w||v.numSpotShadows!==S||v.numSpotMaps!==A||v.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,v.directionalLength=m,v.pointLength=g,v.spotLength=M,v.rectAreaLength=p,v.hemiLength=f,v.numDirectionalShadows=E,v.numPointShadows=w,v.numSpotShadows=S,v.numSpotMaps=A,v.numLightProbes=R,i.version=GS++)}function l(c,h){let d=0,u=0,m=0,g=0,M=0;const p=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const w=c[f];if(w.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(w.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),u++}else if(w.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:i}}function wp(e){const t=new XS(e),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function qS(e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new wp(e),t.set(s,[o])):r>=a.length?(o=new wp(e),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const YS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$S=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,KS=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ZS=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Rp=new Ee,ra=new U,vc=new U;function JS(e,t,n){let i=new tg;const s=new Xt,r=new Xt,a=new Ue,o=new lx,l=new cx,c={},h=n.maxTextureSize,d={[as]:bn,[bn]:as,[Di]:Di},u=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:YS,fragmentShader:$S}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new $n(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let f=this.type;this.render=function(T,R,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Z1&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yo);const y=e.getRenderTarget(),L=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),D=e.state;D.setBlending(si),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const G=f!==this.type;G&&R.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(B=>B.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,B=T.length;Z<B;Z++){const $=T[Z],N=$.shadow;if(N===void 0){Vt("WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const tt=N.getFrameExtents();s.multiply(tt),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,N.mapSize.y=r.y));const at=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=at,N.map===null||G===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ua){if($.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new un(s.x,s.y,{format:Us,type:xn,minFilter:hn,magFilter:hn,generateMipmaps:!1}),N.map.texture.name=$.name+".shadowMap",N.map.depthTexture=new Lr(s.x,s.y,ei),N.map.depthTexture.name=$.name+".shadowMapDepth",N.map.depthTexture.format=zi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ye,N.map.depthTexture.magFilter=Ye}else $.isPointLight?(N.map=new cg(s.x),N.map.depthTexture=new sx(s.x,Si)):(N.map=new un(s.x,s.y),N.map.depthTexture=new Lr(s.x,s.y,Si)),N.map.depthTexture.name=$.name+".shadowMap",N.map.depthTexture.format=zi,this.type===yo?(N.map.depthTexture.compareFunction=at?qu:Xu,N.map.depthTexture.minFilter=hn,N.map.depthTexture.magFilter=hn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ye,N.map.depthTexture.magFilter=Ye);N.camera.updateProjectionMatrix()}const dt=N.map.isWebGLCubeRenderTarget?6:1;for(let ft=0;ft<dt;ft++){if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,ft),e.clear();else{ft===0&&(e.setRenderTarget(N.map),e.clear());const _t=N.getViewport(ft);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),D.viewport(a)}if($.isPointLight){const _t=N.camera,Wt=N.matrix,st=$.distance||_t.far;st!==_t.far&&(_t.far=st,_t.updateProjectionMatrix()),ra.setFromMatrixPosition($.matrixWorld),_t.position.copy(ra),vc.copy(_t.position),vc.add(KS[ft]),_t.up.copy(ZS[ft]),_t.lookAt(vc),_t.updateMatrixWorld(),Wt.makeTranslation(-ra.x,-ra.y,-ra.z),Rp.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Rp,_t.coordinateSystem,_t.reversedDepth)}else N.updateMatrices($);i=N.getFrustum(),S(R,v,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===ua&&E(N,v),N.needsUpdate=!1}f=this.type,p.needsUpdate=!1,e.setRenderTarget(y,L,C)};function E(T,R){const v=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new un(s.x,s.y,{format:Us,type:xn})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(R,null,v,u,M,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(R,null,v,m,M,null)}function w(T,R,v,y){let L=null;const C=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)L=C;else if(L=v.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=L.uuid,G=R.uuid;let Z=c[D];Z===void 0&&(Z={},c[D]=Z);let B=Z[G];B===void 0&&(B=L.clone(),Z[G]=B,R.addEventListener("dispose",A)),L=B}if(L.visible=R.visible,L.wireframe=R.wireframe,y===ua?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:d[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const D=e.properties.get(L);D.light=v}return L}function S(T,R,v,y,L){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ua)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const G=t.update(T),Z=T.material;if(Array.isArray(Z)){const B=G.groups;for(let $=0,N=B.length;$<N;$++){const tt=B[$],at=Z[tt.materialIndex];if(at&&at.visible){const dt=w(T,at,y,L);T.onBeforeShadow(e,T,R,v,G,dt,tt),e.renderBufferDirect(v,null,G,dt,T,tt),T.onAfterShadow(e,T,R,v,G,dt,tt)}}}else if(Z.visible){const B=w(T,Z,y,L);T.onBeforeShadow(e,T,R,v,G,B,null),e.renderBufferDirect(v,null,G,B,T,null),T.onAfterShadow(e,T,R,v,G,B,null)}}const D=T.children;for(let G=0,Z=D.length;G<Z;G++)S(D[G],R,v,y,L)}function A(T){T.target.removeEventListener("dispose",A);for(const v in c){const y=c[v],L=T.target.uuid;L in y&&(y[L].dispose(),delete y[L])}}}function jS(e,t){function n(){let I=!1;const pt=new Ue;let Q=null;const ut=new Ue(0,0,0,0);return{setMask:function(vt){Q!==vt&&!I&&(e.colorMask(vt,vt,vt,vt),Q=vt)},setLocked:function(vt){I=vt},setClear:function(vt,et,Rt,Tt,Te){Te===!0&&(vt*=Tt,et*=Tt,Rt*=Tt),pt.set(vt,et,Rt,Tt),ut.equals(pt)===!1&&(e.clearColor(vt,et,Rt,Tt),ut.copy(pt))},reset:function(){I=!1,Q=null,ut.set(-1,0,0,0)}}}function i(){let I=!1,pt=!1,Q=null,ut=null,vt=null;return{setReversed:function(et){if(pt!==et){const Rt=t.get("EXT_clip_control");et?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),pt=et;const Tt=vt;vt=null,this.setClear(Tt)}},getReversed:function(){return pt},setTest:function(et){et?J(e.DEPTH_TEST):Nt(e.DEPTH_TEST)},setMask:function(et){Q!==et&&!I&&(e.depthMask(et),Q=et)},setFunc:function(et){if(pt&&(et=Cv[et]),ut!==et){switch(et){case Gc:e.depthFunc(e.NEVER);break;case Wc:e.depthFunc(e.ALWAYS);break;case Xc:e.depthFunc(e.LESS);break;case Cr:e.depthFunc(e.LEQUAL);break;case qc:e.depthFunc(e.EQUAL);break;case Yc:e.depthFunc(e.GEQUAL);break;case $c:e.depthFunc(e.GREATER);break;case Kc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ut=et}},setLocked:function(et){I=et},setClear:function(et){vt!==et&&(vt=et,pt&&(et=1-et),e.clearDepth(et))},reset:function(){I=!1,Q=null,ut=null,vt=null,pt=!1}}}function s(){let I=!1,pt=null,Q=null,ut=null,vt=null,et=null,Rt=null,Tt=null,Te=null;return{setTest:function(le){I||(le?J(e.STENCIL_TEST):Nt(e.STENCIL_TEST))},setMask:function(le){pt!==le&&!I&&(e.stencilMask(le),pt=le)},setFunc:function(le,Oe,li){(Q!==le||ut!==Oe||vt!==li)&&(e.stencilFunc(le,Oe,li),Q=le,ut=Oe,vt=li)},setOp:function(le,Oe,li){(et!==le||Rt!==Oe||Tt!==li)&&(e.stencilOp(le,Oe,li),et=le,Rt=Oe,Tt=li)},setLocked:function(le){I=le},setClear:function(le){Te!==le&&(e.clearStencil(le),Te=le)},reset:function(){I=!1,pt=null,Q=null,ut=null,vt=null,et=null,Rt=null,Tt=null,Te=null}}}const r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},m=new WeakMap,g=[],M=null,p=!1,f=null,E=null,w=null,S=null,A=null,T=null,R=null,v=new Jt(0,0,0),y=0,L=!1,C=null,D=null,G=null,Z=null,B=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,tt=0;const at=e.getParameter(e.VERSION);at.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(at)[1]),N=tt>=1):at.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),N=tt>=2);let dt=null,ft={};const _t=e.getParameter(e.SCISSOR_BOX),Wt=e.getParameter(e.VIEWPORT),st=new Ue().fromArray(_t),gt=new Ue().fromArray(Wt);function K(I,pt,Q,ut){const vt=new Uint8Array(4),et=e.createTexture();e.bindTexture(I,et),e.texParameteri(I,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(I,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Rt=0;Rt<Q;Rt++)I===e.TEXTURE_3D||I===e.TEXTURE_2D_ARRAY?e.texImage3D(pt,0,e.RGBA,1,1,ut,0,e.RGBA,e.UNSIGNED_BYTE,vt):e.texImage2D(pt+Rt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,vt);return et}const ht={};ht[e.TEXTURE_2D]=K(e.TEXTURE_2D,e.TEXTURE_2D,1),ht[e.TEXTURE_CUBE_MAP]=K(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[e.TEXTURE_2D_ARRAY]=K(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ht[e.TEXTURE_3D]=K(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(e.DEPTH_TEST),a.setFunc(Cr),oe(!1),Qt(yf),J(e.CULL_FACE),Yt(si);function J(I){h[I]!==!0&&(e.enable(I),h[I]=!0)}function Nt(I){h[I]!==!1&&(e.disable(I),h[I]=!1)}function kt(I,pt){return u[I]!==pt?(e.bindFramebuffer(I,pt),u[I]=pt,I===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=pt),I===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ct(I,pt){let Q=g,ut=!1;if(I){Q=m.get(pt),Q===void 0&&(Q=[],m.set(pt,Q));const vt=I.textures;if(Q.length!==vt.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let et=0,Rt=vt.length;et<Rt;et++)Q[et]=e.COLOR_ATTACHMENT0+et;Q.length=vt.length,ut=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,ut=!0);ut&&e.drawBuffers(Q)}function fe(I){return M!==I?(e.useProgram(I),M=I,!0):!1}const zt={[xs]:e.FUNC_ADD,[j1]:e.FUNC_SUBTRACT,[Q1]:e.FUNC_REVERSE_SUBTRACT};zt[tv]=e.MIN,zt[ev]=e.MAX;const Kt={[nv]:e.ZERO,[iv]:e.ONE,[sv]:e.SRC_COLOR,[Hc]:e.SRC_ALPHA,[hv]:e.SRC_ALPHA_SATURATE,[lv]:e.DST_COLOR,[av]:e.DST_ALPHA,[rv]:e.ONE_MINUS_SRC_COLOR,[Vc]:e.ONE_MINUS_SRC_ALPHA,[cv]:e.ONE_MINUS_DST_COLOR,[ov]:e.ONE_MINUS_DST_ALPHA,[uv]:e.CONSTANT_COLOR,[dv]:e.ONE_MINUS_CONSTANT_COLOR,[fv]:e.CONSTANT_ALPHA,[pv]:e.ONE_MINUS_CONSTANT_ALPHA};function Yt(I,pt,Q,ut,vt,et,Rt,Tt,Te,le){if(I===si){p===!0&&(Nt(e.BLEND),p=!1);return}if(p===!1&&(J(e.BLEND),p=!0),I!==J1){if(I!==f||le!==L){if((E!==xs||A!==xs)&&(e.blendEquation(e.FUNC_ADD),E=xs,A=xs),le)switch(I){case mr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case os:e.blendFunc(e.ONE,e.ONE);break;case bf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Tf:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:re("WebGLState: Invalid blending: ",I);break}else switch(I){case mr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case os:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case bf:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tf:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",I);break}w=null,S=null,T=null,R=null,v.set(0,0,0),y=0,f=I,L=le}return}vt=vt||pt,et=et||Q,Rt=Rt||ut,(pt!==E||vt!==A)&&(e.blendEquationSeparate(zt[pt],zt[vt]),E=pt,A=vt),(Q!==w||ut!==S||et!==T||Rt!==R)&&(e.blendFuncSeparate(Kt[Q],Kt[ut],Kt[et],Kt[Rt]),w=Q,S=ut,T=et,R=Rt),(Tt.equals(v)===!1||Te!==y)&&(e.blendColor(Tt.r,Tt.g,Tt.b,Te),v.copy(Tt),y=Te),f=I,L=!1}function Gt(I,pt){I.side===Di?Nt(e.CULL_FACE):J(e.CULL_FACE);let Q=I.side===bn;pt&&(Q=!Q),oe(Q),I.blending===mr&&I.transparent===!1?Yt(si):Yt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ut=I.stencilWrite;o.setTest(ut),ut&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(e.SAMPLE_ALPHA_TO_COVERAGE):Nt(e.SAMPLE_ALPHA_TO_COVERAGE)}function oe(I){C!==I&&(I?e.frontFace(e.CW):e.frontFace(e.CCW),C=I)}function Qt(I){I!==$1?(J(e.CULL_FACE),I!==D&&(I===yf?e.cullFace(e.BACK):I===K1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Nt(e.CULL_FACE),D=I}function ye(I){I!==G&&(N&&e.lineWidth(I),G=I)}function ge(I,pt,Q){I?(J(e.POLYGON_OFFSET_FILL),(Z!==pt||B!==Q)&&(Z=pt,B=Q,a.getReversed()&&(pt=-pt),e.polygonOffset(pt,Q))):Nt(e.POLYGON_OFFSET_FILL)}function ue(I){I?J(e.SCISSOR_TEST):Nt(e.SCISSOR_TEST)}function me(I){I===void 0&&(I=e.TEXTURE0+$-1),dt!==I&&(e.activeTexture(I),dt=I)}function P(I,pt,Q){Q===void 0&&(dt===null?Q=e.TEXTURE0+$-1:Q=dt);let ut=ft[Q];ut===void 0&&(ut={type:void 0,texture:void 0},ft[Q]=ut),(ut.type!==I||ut.texture!==pt)&&(dt!==Q&&(e.activeTexture(Q),dt=Q),e.bindTexture(I,pt||ht[I]),ut.type=I,ut.texture=pt)}function Bt(){const I=ft[dt];I!==void 0&&I.type!==void 0&&(e.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ie(){try{e.compressedTexImage2D(...arguments)}catch(I){re("WebGLState:",I)}}function b(){try{e.compressedTexImage3D(...arguments)}catch(I){re("WebGLState:",I)}}function _(){try{e.texSubImage2D(...arguments)}catch(I){re("WebGLState:",I)}}function O(){try{e.texSubImage3D(...arguments)}catch(I){re("WebGLState:",I)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(I){re("WebGLState:",I)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(I){re("WebGLState:",I)}}function lt(){try{e.texStorage2D(...arguments)}catch(I){re("WebGLState:",I)}}function nt(){try{e.texStorage3D(...arguments)}catch(I){re("WebGLState:",I)}}function W(){try{e.texImage2D(...arguments)}catch(I){re("WebGLState:",I)}}function q(){try{e.texImage3D(...arguments)}catch(I){re("WebGLState:",I)}}function ot(I){return d[I]!==void 0?d[I]:e.getParameter(I)}function Et(I,pt){d[I]!==pt&&(e.pixelStorei(I,pt),d[I]=pt)}function j(I){st.equals(I)===!1&&(e.scissor(I.x,I.y,I.z,I.w),st.copy(I))}function it(I){gt.equals(I)===!1&&(e.viewport(I.x,I.y,I.z,I.w),gt.copy(I))}function ct(I,pt){let Q=c.get(pt);Q===void 0&&(Q=new WeakMap,c.set(pt,Q));let ut=Q.get(I);ut===void 0&&(ut=e.getUniformBlockIndex(pt,I.name),Q.set(I,ut))}function mt(I,pt){const ut=c.get(pt).get(I);l.get(pt)!==ut&&(e.uniformBlockBinding(pt,ut,I.__bindingPointIndex),l.set(pt,ut))}function wt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},dt=null,ft={},u={},m=new WeakMap,g=[],M=null,p=!1,f=null,E=null,w=null,S=null,A=null,T=null,R=null,v=new Jt(0,0,0),y=0,L=!1,C=null,D=null,G=null,Z=null,B=null,st.set(0,0,e.canvas.width,e.canvas.height),gt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:Nt,bindFramebuffer:kt,drawBuffers:Ct,useProgram:fe,setBlending:Yt,setMaterial:Gt,setFlipSided:oe,setCullFace:Qt,setLineWidth:ye,setPolygonOffset:ge,setScissorTest:ue,activeTexture:me,bindTexture:P,unbindTexture:Bt,compressedTexImage2D:ie,compressedTexImage3D:b,texImage2D:W,texImage3D:q,pixelStorei:Et,getParameter:ot,updateUBOMapping:ct,uniformBlockBinding:mt,texStorage2D:lt,texStorage3D:nt,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:Y,scissor:j,viewport:it,reset:wt}}function QS(e,t,n,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap,d=new Set;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,_){return g?new OffscreenCanvas(b,_):Vo("canvas")}function p(b,_,O){let z=1;const Y=ie(b);if((Y.width>O||Y.height>O)&&(z=O/Math.max(Y.width,Y.height)),z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const lt=Math.floor(z*Y.width),nt=Math.floor(z*Y.height);u===void 0&&(u=M(lt,nt));const W=_?M(lt,nt):u;return W.width=lt,W.height=nt,W.getContext("2d").drawImage(b,0,0,lt,nt),Vt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+lt+"x"+nt+")."),W}else return"data"in b&&Vt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),b;return b}function f(b){return b.generateMipmaps}function E(b){e.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?e.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(b,_,O,z,Y,lt=!1){if(b!==null){if(e[b]!==void 0)return e[b];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let nt;z&&(nt=t.get("EXT_texture_norm16"),nt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=_;if(_===e.RED&&(O===e.FLOAT&&(W=e.R32F),O===e.HALF_FLOAT&&(W=e.R16F),O===e.UNSIGNED_BYTE&&(W=e.R8),O===e.UNSIGNED_SHORT&&nt&&(W=nt.R16_EXT),O===e.SHORT&&nt&&(W=nt.R16_SNORM_EXT)),_===e.RED_INTEGER&&(O===e.UNSIGNED_BYTE&&(W=e.R8UI),O===e.UNSIGNED_SHORT&&(W=e.R16UI),O===e.UNSIGNED_INT&&(W=e.R32UI),O===e.BYTE&&(W=e.R8I),O===e.SHORT&&(W=e.R16I),O===e.INT&&(W=e.R32I)),_===e.RG&&(O===e.FLOAT&&(W=e.RG32F),O===e.HALF_FLOAT&&(W=e.RG16F),O===e.UNSIGNED_BYTE&&(W=e.RG8),O===e.UNSIGNED_SHORT&&nt&&(W=nt.RG16_EXT),O===e.SHORT&&nt&&(W=nt.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(O===e.UNSIGNED_BYTE&&(W=e.RG8UI),O===e.UNSIGNED_SHORT&&(W=e.RG16UI),O===e.UNSIGNED_INT&&(W=e.RG32UI),O===e.BYTE&&(W=e.RG8I),O===e.SHORT&&(W=e.RG16I),O===e.INT&&(W=e.RG32I)),_===e.RGB_INTEGER&&(O===e.UNSIGNED_BYTE&&(W=e.RGB8UI),O===e.UNSIGNED_SHORT&&(W=e.RGB16UI),O===e.UNSIGNED_INT&&(W=e.RGB32UI),O===e.BYTE&&(W=e.RGB8I),O===e.SHORT&&(W=e.RGB16I),O===e.INT&&(W=e.RGB32I)),_===e.RGBA_INTEGER&&(O===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),O===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),O===e.UNSIGNED_INT&&(W=e.RGBA32UI),O===e.BYTE&&(W=e.RGBA8I),O===e.SHORT&&(W=e.RGBA16I),O===e.INT&&(W=e.RGBA32I)),_===e.RGB&&(O===e.UNSIGNED_SHORT&&nt&&(W=nt.RGB16_EXT),O===e.SHORT&&nt&&(W=nt.RGB16_SNORM_EXT),O===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),O===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),_===e.RGBA){const q=lt?ko:te.getTransfer(Y);O===e.FLOAT&&(W=e.RGBA32F),O===e.HALF_FLOAT&&(W=e.RGBA16F),O===e.UNSIGNED_BYTE&&(W=q===pe?e.SRGB8_ALPHA8:e.RGBA8),O===e.UNSIGNED_SHORT&&nt&&(W=nt.RGBA16_EXT),O===e.SHORT&&nt&&(W=nt.RGBA16_SNORM_EXT),O===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),O===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function A(b,_){let O;return b?_===null||_===Si||_===ba?O=e.DEPTH24_STENCIL8:_===ei?O=e.DEPTH32F_STENCIL8:_===ya&&(O=e.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Si||_===ba?O=e.DEPTH_COMPONENT24:_===ei?O=e.DEPTH_COMPONENT32F:_===ya&&(O=e.DEPTH_COMPONENT16),O}function T(b,_){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ye&&b.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){const _=b.target;_.removeEventListener("dispose",R),y(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(b){const _=b.target;_.removeEventListener("dispose",v),C(_)}function y(b){const _=i.get(b);if(_.__webglInit===void 0)return;const O=b.source,z=m.get(O);if(z){const Y=z[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&L(b),Object.keys(z).length===0&&m.delete(O)}i.remove(b)}function L(b){const _=i.get(b);e.deleteTexture(_.__webglTexture);const O=b.source,z=m.get(O);delete z[_.__cacheKey],a.memory.textures--}function C(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let Y=0;Y<_.__webglFramebuffer[z].length;Y++)e.deleteFramebuffer(_.__webglFramebuffer[z][Y]);else e.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)e.deleteFramebuffer(_.__webglFramebuffer[z]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=b.textures;for(let z=0,Y=O.length;z<Y;z++){const lt=i.get(O[z]);lt.__webglTexture&&(e.deleteTexture(lt.__webglTexture),a.memory.textures--),i.remove(O[z])}i.remove(b)}let D=0;function G(){D=0}function Z(){return D}function B(b){D=b}function $(){const b=D;return b>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function N(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function tt(b,_){const O=i.get(b);if(b.isVideoTexture&&P(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const z=b.image;if(z===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(O,b,_);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+_)}function at(b,_){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Nt(O,b,_);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+_)}function dt(b,_){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Nt(O,b,_);return}n.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+_)}function ft(b,_){const O=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&O.__version!==b.version){kt(O,b,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+_)}const _t={[Zc]:e.REPEAT,[Fi]:e.CLAMP_TO_EDGE,[Jc]:e.MIRRORED_REPEAT},Wt={[Ye]:e.NEAREST,[_v]:e.NEAREST_MIPMAP_NEAREST,[Wa]:e.NEAREST_MIPMAP_LINEAR,[hn]:e.LINEAR,[Hl]:e.LINEAR_MIPMAP_NEAREST,[ys]:e.LINEAR_MIPMAP_LINEAR},st={[Mv]:e.NEVER,[Tv]:e.ALWAYS,[Sv]:e.LESS,[Xu]:e.LEQUAL,[Ev]:e.EQUAL,[qu]:e.GEQUAL,[yv]:e.GREATER,[bv]:e.NOTEQUAL};function gt(b,_){if(_.type===ei&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===Hl||_.magFilter===Wa||_.magFilter===ys||_.minFilter===hn||_.minFilter===Hl||_.minFilter===Wa||_.minFilter===ys)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,_t[_.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,_t[_.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,_t[_.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,Wt[_.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,Wt[_.minFilter]),_.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,st[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ye||_.minFilter!==Wa&&_.minFilter!==ys||_.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function K(b,_){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",R));const z=_.source;let Y=m.get(z);Y===void 0&&(Y={},m.set(z,Y));const lt=N(_);if(lt!==b.__cacheKey){Y[lt]===void 0&&(Y[lt]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Y[lt].usedTimes++;const nt=Y[b.__cacheKey];nt!==void 0&&(Y[b.__cacheKey].usedTimes--,nt.usedTimes===0&&L(_)),b.__cacheKey=lt,b.__webglTexture=Y[lt].texture}return O}function ht(b,_,O){return Math.floor(Math.floor(b/O)/_)}function J(b,_,O,z){const lt=b.updateRanges;if(lt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,O,z,_.data);else{lt.sort((Et,j)=>Et.start-j.start);let nt=0;for(let Et=1;Et<lt.length;Et++){const j=lt[nt],it=lt[Et],ct=j.start+j.count,mt=ht(it.start,_.width,4),wt=ht(j.start,_.width,4);it.start<=ct+1&&mt===wt&&ht(it.start+it.count-1,_.width,4)===mt?j.count=Math.max(j.count,it.start+it.count-j.start):(++nt,lt[nt]=it)}lt.length=nt+1;const W=n.getParameter(e.UNPACK_ROW_LENGTH),q=n.getParameter(e.UNPACK_SKIP_PIXELS),ot=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let Et=0,j=lt.length;Et<j;Et++){const it=lt[Et],ct=Math.floor(it.start/4),mt=Math.ceil(it.count/4),wt=ct%_.width,I=Math.floor(ct/_.width),pt=mt,Q=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,wt),n.pixelStorei(e.UNPACK_SKIP_ROWS,I),n.texSubImage2D(e.TEXTURE_2D,0,wt,I,pt,Q,O,z,_.data)}b.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,W),n.pixelStorei(e.UNPACK_SKIP_PIXELS,q),n.pixelStorei(e.UNPACK_SKIP_ROWS,ot)}}function Nt(b,_,O){let z=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=e.TEXTURE_3D);const Y=K(b,_),lt=_.source;n.bindTexture(z,b.__webglTexture,e.TEXTURE0+O);const nt=i.get(lt);if(lt.version!==nt.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Q=te.getPrimaries(te.workingColorSpace),ut=_.colorSpace===es?null:te.getPrimaries(_.colorSpace),vt=_.colorSpace===es||Q===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let q=p(_.image,!1,s.maxTextureSize);q=Bt(_,q);const ot=r.convert(_.format,_.colorSpace),Et=r.convert(_.type);let j=S(_.internalFormat,ot,Et,_.normalized,_.colorSpace,_.isVideoTexture);gt(z,_);let it;const ct=_.mipmaps,mt=_.isVideoTexture!==!0,wt=nt.__version===void 0||Y===!0,I=lt.dataReady,pt=T(_,q);if(_.isDepthTexture)j=A(_.format===bs,_.type),wt&&(mt?n.texStorage2D(e.TEXTURE_2D,1,j,q.width,q.height):n.texImage2D(e.TEXTURE_2D,0,j,q.width,q.height,0,ot,Et,null));else if(_.isDataTexture)if(ct.length>0){mt&&wt&&n.texStorage2D(e.TEXTURE_2D,pt,j,ct[0].width,ct[0].height);for(let Q=0,ut=ct.length;Q<ut;Q++)it=ct[Q],mt?I&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,it.width,it.height,ot,Et,it.data):n.texImage2D(e.TEXTURE_2D,Q,j,it.width,it.height,0,ot,Et,it.data);_.generateMipmaps=!1}else mt?(wt&&n.texStorage2D(e.TEXTURE_2D,pt,j,q.width,q.height),I&&J(_,q,ot,Et)):n.texImage2D(e.TEXTURE_2D,0,j,q.width,q.height,0,ot,Et,q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){mt&&wt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,j,ct[0].width,ct[0].height,q.depth);for(let Q=0,ut=ct.length;Q<ut;Q++)if(it=ct[Q],_.format!==ni)if(ot!==null)if(mt){if(I)if(_.layerUpdates.size>0){const vt=rp(it.width,it.height,_.format,_.type);for(const et of _.layerUpdates){const Rt=it.data.subarray(et*vt/it.data.BYTES_PER_ELEMENT,(et+1)*vt/it.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,et,it.width,it.height,1,ot,Rt)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,it.width,it.height,q.depth,ot,it.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,j,it.width,it.height,q.depth,0,it.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?I&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,it.width,it.height,q.depth,ot,Et,it.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Q,j,it.width,it.height,q.depth,0,ot,Et,it.data)}else{mt&&wt&&n.texStorage2D(e.TEXTURE_2D,pt,j,ct[0].width,ct[0].height);for(let Q=0,ut=ct.length;Q<ut;Q++)it=ct[Q],_.format!==ni?ot!==null?mt?I&&n.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,it.width,it.height,ot,it.data):n.compressedTexImage2D(e.TEXTURE_2D,Q,j,it.width,it.height,0,it.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?I&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,it.width,it.height,ot,Et,it.data):n.texImage2D(e.TEXTURE_2D,Q,j,it.width,it.height,0,ot,Et,it.data)}else if(_.isDataArrayTexture)if(mt){if(wt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,j,q.width,q.height,q.depth),I)if(_.layerUpdates.size>0){const Q=rp(q.width,q.height,_.format,_.type);for(const ut of _.layerUpdates){const vt=q.data.subarray(ut*Q/q.data.BYTES_PER_ELEMENT,(ut+1)*Q/q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ut,q.width,q.height,1,ot,Et,vt)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ot,Et,q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,j,q.width,q.height,q.depth,0,ot,Et,q.data);else if(_.isData3DTexture)mt?(wt&&n.texStorage3D(e.TEXTURE_3D,pt,j,q.width,q.height,q.depth),I&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ot,Et,q.data)):n.texImage3D(e.TEXTURE_3D,0,j,q.width,q.height,q.depth,0,ot,Et,q.data);else if(_.isFramebufferTexture){if(wt)if(mt)n.texStorage2D(e.TEXTURE_2D,pt,j,q.width,q.height);else{let Q=q.width,ut=q.height;for(let vt=0;vt<pt;vt++)n.texImage2D(e.TEXTURE_2D,vt,j,Q,ut,0,ot,Et,null),Q>>=1,ut>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){const Q=e.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),q.parentNode!==Q){Q.appendChild(q),d.add(_),Q.onpaint=ut=>{const vt=ut.changedElements;for(const et of d)vt.includes(et.image)&&(et.needsUpdate=!0)},Q.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,q);else{const vt=e.RGBA,et=e.RGBA,Rt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,vt,et,Rt,q)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ct.length>0){if(mt&&wt){const Q=ie(ct[0]);n.texStorage2D(e.TEXTURE_2D,pt,j,Q.width,Q.height)}for(let Q=0,ut=ct.length;Q<ut;Q++)it=ct[Q],mt?I&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ot,Et,it):n.texImage2D(e.TEXTURE_2D,Q,j,ot,Et,it);_.generateMipmaps=!1}else if(mt){if(wt){const Q=ie(q);n.texStorage2D(e.TEXTURE_2D,pt,j,Q.width,Q.height)}I&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot,Et,q)}else n.texImage2D(e.TEXTURE_2D,0,j,ot,Et,q);f(_)&&E(z),nt.__version=lt.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function kt(b,_,O){if(_.image.length!==6)return;const z=K(b,_),Y=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+O);const lt=i.get(Y);if(Y.version!==lt.__version||z===!0){n.activeTexture(e.TEXTURE0+O);const nt=te.getPrimaries(te.workingColorSpace),W=_.colorSpace===es?null:te.getPrimaries(_.colorSpace),q=_.colorSpace===es||nt===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const ot=_.isCompressedTexture||_.image[0].isCompressedTexture,Et=_.image[0]&&_.image[0].isDataTexture,j=[];for(let et=0;et<6;et++)!ot&&!Et?j[et]=p(_.image[et],!0,s.maxCubemapSize):j[et]=Et?_.image[et].image:_.image[et],j[et]=Bt(_,j[et]);const it=j[0],ct=r.convert(_.format,_.colorSpace),mt=r.convert(_.type),wt=S(_.internalFormat,ct,mt,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,pt=lt.__version===void 0||z===!0,Q=Y.dataReady;let ut=T(_,it);gt(e.TEXTURE_CUBE_MAP,_);let vt;if(ot){I&&pt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,wt,it.width,it.height);for(let et=0;et<6;et++){vt=j[et].mipmaps;for(let Rt=0;Rt<vt.length;Rt++){const Tt=vt[Rt];_.format!==ni?ct!==null?I?Q&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,0,0,Tt.width,Tt.height,ct,Tt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,wt,Tt.width,Tt.height,0,Tt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,0,0,Tt.width,Tt.height,ct,mt,Tt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,wt,Tt.width,Tt.height,0,ct,mt,Tt.data)}}}else{if(vt=_.mipmaps,I&&pt){vt.length>0&&ut++;const et=ie(j[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,wt,et.width,et.height)}for(let et=0;et<6;et++)if(Et){I?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,j[et].width,j[et].height,ct,mt,j[et].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,wt,j[et].width,j[et].height,0,ct,mt,j[et].data);for(let Rt=0;Rt<vt.length;Rt++){const Te=vt[Rt].image[et].image;I?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,0,0,Te.width,Te.height,ct,mt,Te.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,wt,Te.width,Te.height,0,ct,mt,Te.data)}}else{I?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ct,mt,j[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,wt,ct,mt,j[et]);for(let Rt=0;Rt<vt.length;Rt++){const Tt=vt[Rt];I?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,0,0,ct,mt,Tt.image[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,wt,ct,mt,Tt.image[et])}}}f(_)&&E(e.TEXTURE_CUBE_MAP),lt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ct(b,_,O,z,Y,lt){const nt=r.convert(O.format,O.colorSpace),W=r.convert(O.type),q=S(O.internalFormat,nt,W,O.normalized,O.colorSpace),ot=i.get(_),Et=i.get(O);if(Et.__renderTarget=_,!ot.__hasExternalTextures){const j=Math.max(1,_.width>>lt),it=Math.max(1,_.height>>lt);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,lt,q,j,it,_.depth,0,nt,W,null):n.texImage2D(Y,lt,q,j,it,0,nt,W,null)}n.bindFramebuffer(e.FRAMEBUFFER,b),me(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,Y,Et.__webglTexture,0,ue(_)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,Y,Et.__webglTexture,lt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(b,_,O){if(e.bindRenderbuffer(e.RENDERBUFFER,b),_.depthBuffer){const z=_.depthTexture,Y=z&&z.isDepthTexture?z.type:null,lt=A(_.stencilBuffer,Y),nt=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;me(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ue(_),lt,_.width,_.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,ue(_),lt,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,lt,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,b)}else{const z=_.textures;for(let Y=0;Y<z.length;Y++){const lt=z[Y],nt=r.convert(lt.format,lt.colorSpace),W=r.convert(lt.type),q=S(lt.internalFormat,nt,W,lt.normalized,lt.colorSpace);me(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ue(_),q,_.width,_.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,ue(_),q,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,q,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function zt(b,_,O){const z=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),gt(e.TEXTURE_CUBE_MAP,_.depthTexture);const ot=r.convert(_.depthTexture.format),Et=r.convert(_.depthTexture.type);let j;_.depthTexture.format===zi?j=e.DEPTH_COMPONENT24:_.depthTexture.format===bs&&(j=e.DEPTH24_STENCIL8);for(let it=0;it<6;it++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,j,_.width,_.height,0,ot,Et,null)}}else tt(_.depthTexture,0);const lt=Y.__webglTexture,nt=ue(_),W=z?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,q=_.depthTexture.format===bs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===zi)me(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,W,lt,0,nt):e.framebufferTexture2D(e.FRAMEBUFFER,q,W,lt,0);else if(_.depthTexture.format===bs)me(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,W,lt,0,nt):e.framebufferTexture2D(e.FRAMEBUFFER,q,W,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(b){const _=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const z=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){const Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",Y)};z.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=z}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)zt(_.__webglFramebuffer[z],b,z);else{const z=b.texture.mipmaps;z&&z.length>0?zt(_.__webglFramebuffer[0],b,0):zt(_.__webglFramebuffer,b,0)}else if(O){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=e.createRenderbuffer(),fe(_.__webglDepthbuffer[z],b,!1);else{const Y=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=_.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,lt)}}else{const z=b.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),fe(_.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,lt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Yt(b,_,O){const z=i.get(b);_!==void 0&&Ct(z.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),O!==void 0&&Kt(b)}function Gt(b){const _=b.texture,O=i.get(b),z=i.get(_);b.addEventListener("dispose",v);const Y=b.textures,lt=b.isWebGLCubeRenderTarget===!0,nt=Y.length>1;if(nt||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=_.version,a.memory.textures++),lt){O.__webglFramebuffer=[];for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[W]=[];for(let q=0;q<_.mipmaps.length;q++)O.__webglFramebuffer[W][q]=e.createFramebuffer()}else O.__webglFramebuffer[W]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let W=0;W<_.mipmaps.length;W++)O.__webglFramebuffer[W]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(nt)for(let W=0,q=Y.length;W<q;W++){const ot=i.get(Y[W]);ot.__webglTexture===void 0&&(ot.__webglTexture=e.createTexture(),a.memory.textures++)}if(b.samples>0&&me(b)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let W=0;W<Y.length;W++){const q=Y[W];O.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[W]);const ot=r.convert(q.format,q.colorSpace),Et=r.convert(q.type),j=S(q.internalFormat,ot,Et,q.normalized,q.colorSpace,b.isXRRenderTarget===!0),it=ue(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,it,j,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,O.__webglColorRenderbuffer[W])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=e.createRenderbuffer(),fe(O.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(lt){n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),gt(e.TEXTURE_CUBE_MAP,_);for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)Ct(O.__webglFramebuffer[W][q],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,q);else Ct(O.__webglFramebuffer[W],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);f(_)&&E(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(nt){for(let W=0,q=Y.length;W<q;W++){const ot=Y[W],Et=i.get(ot);let j=e.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(j,Et.__webglTexture),gt(j,ot),Ct(O.__webglFramebuffer,b,ot,e.COLOR_ATTACHMENT0+W,j,0),f(ot)&&E(j)}n.unbindTexture()}else{let W=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(W=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(W,z.__webglTexture),gt(W,_),_.mipmaps&&_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)Ct(O.__webglFramebuffer[q],b,_,e.COLOR_ATTACHMENT0,W,q);else Ct(O.__webglFramebuffer,b,_,e.COLOR_ATTACHMENT0,W,0);f(_)&&E(W),n.unbindTexture()}b.depthBuffer&&Kt(b)}function oe(b){const _=b.textures;for(let O=0,z=_.length;O<z;O++){const Y=_[O];if(f(Y)){const lt=w(b),nt=i.get(Y).__webglTexture;n.bindTexture(lt,nt),E(lt),n.unbindTexture()}}}const Qt=[],ye=[];function ge(b){if(b.samples>0){if(me(b)===!1){const _=b.textures,O=b.width,z=b.height;let Y=e.COLOR_BUFFER_BIT;const lt=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=i.get(b),W=_.length>1;if(W)for(let ot=0;ot<_.length;ot++)n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer);const q=b.texture.mipmaps;q&&q.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,nt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let ot=0;ot<_.length;ot++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,nt.__webglColorRenderbuffer[ot]);const Et=i.get(_[ot]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Et,0)}e.blitFramebuffer(0,0,O,z,0,0,O,z,Y,e.NEAREST),l===!0&&(Qt.length=0,ye.length=0,Qt.push(e.COLOR_ATTACHMENT0+ot),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Qt.push(lt),ye.push(lt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ye)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Qt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let ot=0;ot<_.length;ot++){n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,nt.__webglColorRenderbuffer[ot]);const Et=i.get(_[ot]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,Et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function ue(b){return Math.min(s.maxSamples,b.samples)}function me(b){const _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(b){const _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Bt(b,_){const O=b.colorSpace,z=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Bo&&O!==es&&(te.getTransfer(O)===pe?(z!==ni||Y!==qn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",O)),_}function ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.getTextureUnits=Z,this.setTextureUnits=B,this.setTexture2D=tt,this.setTexture2DArray=at,this.setTexture3D=dt,this.setTextureCube=ft,this.rebindTextures=Yt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tE(e,t){function n(i,s=es){let r;const a=te.getTransfer(s);if(i===qn)return e.UNSIGNED_BYTE;if(i===ku)return e.UNSIGNED_SHORT_4_4_4_4;if(i===zu)return e.UNSIGNED_SHORT_5_5_5_1;if(i===G0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===W0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===H0)return e.BYTE;if(i===V0)return e.SHORT;if(i===ya)return e.UNSIGNED_SHORT;if(i===Bu)return e.INT;if(i===Si)return e.UNSIGNED_INT;if(i===ei)return e.FLOAT;if(i===xn)return e.HALF_FLOAT;if(i===X0)return e.ALPHA;if(i===q0)return e.RGB;if(i===ni)return e.RGBA;if(i===zi)return e.DEPTH_COMPONENT;if(i===bs)return e.DEPTH_STENCIL;if(i===Hu)return e.RED;if(i===Vu)return e.RED_INTEGER;if(i===Us)return e.RG;if(i===Gu)return e.RG_INTEGER;if(i===Wu)return e.RGBA_INTEGER;if(i===bo||i===To||i===Ao||i===wo)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jc||i===Qc||i===th||i===eh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nh||i===ih||i===sh||i===rh||i===ah||i===No||i===oh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nh||i===ih)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rh)return r.COMPRESSED_R11_EAC;if(i===ah)return r.COMPRESSED_SIGNED_R11_EAC;if(i===No)return r.COMPRESSED_RG11_EAC;if(i===oh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lh||i===ch||i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===Mh||i===Sh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ch)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ph)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_h)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sh)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eh||i===yh||i===bh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Eh)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Th||i===Ah||i===Oo||i===wh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Th)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ba?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const eE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new ig(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new $e({vertexShader:eE,fragmentShader:nE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $n(new xl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sE extends Vs{constructor(t,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const M=typeof XRWebGLBinding<"u",p=new iE,f={},E=n.getContextAttributes();let w=null,S=null;const A=[],T=[],R=new Xt;let v=null;const y=new Xn;y.viewport=new Ue;const L=new Xn;L.viewport=new Ue;const C=[y,L],D=new ux;let G=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=A[K];return ht===void 0&&(ht=new Kl,A[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=A[K];return ht===void 0&&(ht=new Kl,A[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=A[K];return ht===void 0&&(ht=new Kl,A[K]=ht),ht.getHandSpace()};function B(K){const ht=T.indexOf(K.inputSource);if(ht===-1)return;const J=A[ht];J!==void 0&&(J.update(K.inputSource,K.frame,c||a),J.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",N);for(let K=0;K<A.length;K++){const ht=T[K];ht!==null&&(T[K]=null,A[K].disconnect(ht))}G=null,Z=null,p.reset();for(const K in f)delete f[K];t.setRenderTarget(w),m=null,u=null,d=null,s=null,S=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",$),s.addEventListener("inputsourceschange",N),E.xrCompatible!==!0&&await n.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,Nt=null,kt=null;E.depth&&(kt=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=E.stencil?bs:zi,Nt=E.stencil?ba:Si);const Ct={colorFormat:n.RGBA8,depthFormat:kt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new un(u.textureWidth,u.textureHeight,{format:ni,type:qn,depthTexture:new Lr(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const J={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,n,J),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new un(m.framebufferWidth,m.framebufferHeight,{format:ni,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function N(K){for(let ht=0;ht<K.removed.length;ht++){const J=K.removed[ht],Nt=T.indexOf(J);Nt>=0&&(T[Nt]=null,A[Nt].disconnect(J))}for(let ht=0;ht<K.added.length;ht++){const J=K.added[ht];let Nt=T.indexOf(J);if(Nt===-1){for(let Ct=0;Ct<A.length;Ct++)if(Ct>=T.length){T.push(J),Nt=Ct;break}else if(T[Ct]===null){T[Ct]=J,Nt=Ct;break}if(Nt===-1)break}const kt=A[Nt];kt&&kt.connect(J)}}const tt=new U,at=new U;function dt(K,ht,J){tt.setFromMatrixPosition(ht.matrixWorld),at.setFromMatrixPosition(J.matrixWorld);const Nt=tt.distanceTo(at),kt=ht.projectionMatrix.elements,Ct=J.projectionMatrix.elements,fe=kt[14]/(kt[10]-1),zt=kt[14]/(kt[10]+1),Kt=(kt[9]+1)/kt[5],Yt=(kt[9]-1)/kt[5],Gt=(kt[8]-1)/kt[0],oe=(Ct[8]+1)/Ct[0],Qt=fe*Gt,ye=fe*oe,ge=Nt/(-Gt+oe),ue=ge*-Gt;if(ht.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ue),K.translateZ(ge),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),kt[10]===-1)K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const me=fe+ge,P=zt+ge,Bt=Qt-ue,ie=ye+(Nt-ue),b=Kt*zt/P*me,_=Yt*zt/P*me;K.projectionMatrix.makePerspective(Bt,ie,b,_,me,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ft(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ht=K.near,J=K.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(J=p.depthFar)),D.near=L.near=y.near=ht,D.far=L.far=y.far=J,(G!==D.near||Z!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),G=D.near,Z=D.far),D.layers.mask=K.layers.mask|6,y.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;const Nt=K.parent,kt=D.cameras;ft(D,Nt);for(let Ct=0;Ct<kt.length;Ct++)ft(kt[Ct],Nt);kt.length===2?dt(D,y,L):D.projectionMatrix.copy(y.projectionMatrix),_t(K,D,Nt)};function _t(K,ht,J){J===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(J.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Rh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(K){return f[K]};let Wt=null;function st(K,ht){if(h=ht.getViewerPose(c||a),g=ht,h!==null){const J=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Nt=!1;J.length!==D.cameras.length&&(D.cameras.length=0,Nt=!0);for(let zt=0;zt<J.length;zt++){const Kt=J[zt];let Yt=null;if(m!==null)Yt=m.getViewport(Kt);else{const oe=d.getViewSubImage(u,Kt);Yt=oe.viewport,zt===0&&(t.setRenderTargetTextures(S,oe.colorTexture,oe.depthStencilTexture),t.setRenderTarget(S))}let Gt=C[zt];Gt===void 0&&(Gt=new Xn,Gt.layers.enable(zt),Gt.viewport=new Ue,C[zt]=Gt),Gt.matrix.fromArray(Kt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Kt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),zt===0&&(D.matrix.copy(Gt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Nt===!0&&D.cameras.push(Gt)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const zt=d.getDepthInformation(J[0]);zt&&zt.isValid&&zt.texture&&p.init(zt,s.renderState)}if(kt&&kt.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let zt=0;zt<J.length;zt++){const Kt=J[zt].camera;if(Kt){let Yt=f[Kt];Yt||(Yt=new ig,f[Kt]=Yt);const Gt=d.getCameraImage(Kt);Yt.sourceTexture=Gt}}}}for(let J=0;J<A.length;J++){const Nt=T[J],kt=A[J];Nt!==null&&kt!==void 0&&kt.update(Nt,ht,c||a)}Wt&&Wt(K,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}const gt=new og;gt.setAnimationLoop(st),this.setAnimationLoop=function(K){Wt=K},this.dispose=function(){}}}const rE=new Ee,pg=new qt;pg.set(-1,0,0,0,1,0,0,0,1);function aE(e,t){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,sg(e)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,w,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),M(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,E,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===bn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===bn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=t.get(f),w=E.envMap,S=E.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(rE.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(pg),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=w*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){const E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function oE(e,t,n,i){let s={},r={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const T=A.program;i.uniformBlockBinding(S,T)}function c(S,A){let T=s[S.id];T===void 0&&(p(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",E));const R=A.program;i.updateUBOMapping(S,R);const v=t.render.frame;r[S.id]!==v&&(u(S),r[S.id]=v)}function h(S){const A=d();S.__bindingPointIndex=A;const T=e.createBuffer(),R=S.__size,v=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,R,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const A=s[S.id],T=S.uniforms,R=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let v=0,y=T.length;v<y;v++){const L=T[v];if(Array.isArray(L))for(let C=0,D=L.length;C<D;C++)m(L[C],v,C,R);else m(L,v,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(S,A,T,R){if(M(S,A,T,R)===!0){const v=S.__offset,y=S.value;if(Array.isArray(y)){let L=0;for(let C=0;C<y.length;C++){const D=y[C],G=f(D);g(D,S.__data,L),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(y,S.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,v,S.__data)}}function g(S,A,T){typeof S=="number"||typeof S=="boolean"?A[0]=S:S.isMatrix3?(A[0]=S.elements[0],A[1]=S.elements[1],A[2]=S.elements[2],A[3]=0,A[4]=S.elements[3],A[5]=S.elements[4],A[6]=S.elements[5],A[7]=0,A[8]=S.elements[6],A[9]=S.elements[7],A[10]=S.elements[8],A[11]=0):ArrayBuffer.isView(S)?A.set(new S.constructor(S.buffer,S.byteOffset,A.length)):S.toArray(A,T)}function M(S,A,T,R){const v=S.value,y=A+"_"+T;if(R[y]===void 0)return typeof v=="number"||typeof v=="boolean"?R[y]=v:ArrayBuffer.isView(v)?R[y]=v.slice():R[y]=v.clone(),!0;{const L=R[y];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return R[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function p(S){const A=S.uniforms;let T=0;const R=16;for(let y=0,L=A.length;y<L;y++){const C=Array.isArray(A[y])?A[y]:[A[y]];for(let D=0,G=C.length;D<G;D++){const Z=C[D],B=Array.isArray(Z.value)?Z.value:[Z.value];for(let $=0,N=B.length;$<N;$++){const tt=B[$],at=f(tt),dt=T%R,ft=dt%at.boundary,_t=dt+ft;T+=ft,_t!==0&&R-_t<at.storage&&(T+=R-_t),Z.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=T,T+=at.storage}}}const v=T%R;return v>0&&(T+=R-v),S.__size=T,S.__cache={},this}function f(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",S),A}function E(S){const A=S.target;A.removeEventListener("dispose",E);const T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),e.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function w(){for(const S in s)e.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}const lE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function cE(){return fi===null&&(fi=new Q0(lE,16,16,Us,xn),fi.name="DFG_LUT",fi.minFilter=hn,fi.magFilter=hn,fi.wrapS=Fi,fi.wrapT=Fi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class hE{constructor(t={}){const{canvas:n=wv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=qn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const M=m,p=new Set([Wu,Gu,Vu]),f=new Set([qn,Si,ya,ba,ku,zu]),E=new Uint32Array(4),w=new Int32Array(4),S=new U;let A=null,T=null;const R=[],v=[];let y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let C=!1,D=null,G=null,Z=null,B=null;this._outputColorSpace=Wn;let $=0,N=0,tt=null,at=-1,dt=null;const ft=new Ue,_t=new Ue;let Wt=null;const st=new Jt(0);let gt=0,K=n.width,ht=n.height,J=1,Nt=null,kt=null;const Ct=new Ue(0,0,K,ht),fe=new Ue(0,0,K,ht);let zt=!1;const Kt=new tg;let Yt=!1,Gt=!1;const oe=new Ee,Qt=new U,ye=new Ue,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function me(){return tt===null?J:1}let P=i;function Bt(x,F){return n.getContext(x,F)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pu}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",le,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),P===null){const F="webgl2";if(P=Bt(F,x),P===null)throw Bt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw re("WebGLRenderer: "+x.message),x}let ie,b,_,O,z,Y,lt,nt,W,q,ot,Et,j,it,ct,mt,wt,I,pt,Q,ut,vt,et;function Rt(){ie=new cM(P),ie.init(),ut=new tE(P,ie),b=new eM(P,ie,t,ut),_=new jS(P,ie),b.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),G=P.createFramebuffer(),Z=P.createFramebuffer(),B=P.createFramebuffer(),O=new dM(P),z=new BS,Y=new QS(P,ie,_,z,b,ut,O),lt=new lM(L),nt=new gx(P),vt=new Q3(P,nt),W=new hM(P,nt,O,vt),q=new pM(P,W,nt,vt,O),I=new fM(P,b,Y),ct=new nM(z),ot=new OS(L,lt,ie,b,vt,ct),Et=new aE(L,z),j=new zS,it=new qS(ie),wt=new j3(L,lt,_,q,g,l),mt=new JS(L,q,b),et=new oE(P,O,b,_),pt=new tM(P,ie,O),Q=new uM(P,ie,O),O.programs=ot.programs,L.capabilities=b,L.extensions=ie,L.properties=z,L.renderLists=j,L.shadowMap=mt,L.state=_,L.info=O}Rt(),M!==qn&&(y=new gM(M,n.width,n.height,o,s,r));const Tt=new sE(L,P);this.xr=Tt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=ie.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ie.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(x){x!==void 0&&(J=x,this.setSize(K,ht,!1))},this.getSize=function(x){return x.set(K,ht)},this.setSize=function(x,F,X=!0){if(Tt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=x,ht=F,n.width=Math.floor(x*J),n.height=Math.floor(F*J),X===!0&&(n.style.width=x+"px",n.style.height=F+"px"),y!==null&&y.setSize(n.width,n.height),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(K*J,ht*J).floor()},this.setDrawingBufferSize=function(x,F,X){K=x,ht=F,J=X,n.width=Math.floor(x*X),n.height=Math.floor(F*X),this.setViewport(0,0,x,F)},this.setEffects=function(x){if(M===qn){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let F=0;F<x.length;F++)if(x[F].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ft)},this.getViewport=function(x){return x.copy(Ct)},this.setViewport=function(x,F,X,H){x.isVector4?Ct.set(x.x,x.y,x.z,x.w):Ct.set(x,F,X,H),_.viewport(ft.copy(Ct).multiplyScalar(J).round())},this.getScissor=function(x){return x.copy(fe)},this.setScissor=function(x,F,X,H){x.isVector4?fe.set(x.x,x.y,x.z,x.w):fe.set(x,F,X,H),_.scissor(_t.copy(fe).multiplyScalar(J).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(x){_.setScissorTest(zt=x)},this.setOpaqueSort=function(x){Nt=x},this.setTransparentSort=function(x){kt=x},this.getClearColor=function(x){return x.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(x=!0,F=!0,X=!0){let H=0;if(x){let V=!1;if(tt!==null){const St=tt.texture.format;V=p.has(St)}if(V){const St=tt.texture.type,bt=f.has(St),Mt=wt.getClearColor(),Pt=wt.getClearAlpha(),Dt=Mt.r,$t=Mt.g,jt=Mt.b;bt?(E[0]=Dt,E[1]=$t,E[2]=jt,E[3]=Pt,P.clearBufferuiv(P.COLOR,0,E)):(w[0]=Dt,w[1]=$t,w[2]=jt,w[3]=Pt,P.clearBufferiv(P.COLOR,0,w))}else H|=P.COLOR_BUFFER_BIT}F&&(H|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),D=x},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",le,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),wt.dispose(),j.dispose(),it.dispose(),z.dispose(),lt.dispose(),q.dispose(),vt.dispose(),et.dispose(),ot.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",rd),Tt.removeEventListener("sessionend",ad),hs.stop()};function Te(x){x.preventDefault(),Lf("WebGLRenderer: Context Lost."),C=!0}function le(){Lf("WebGLRenderer: Context Restored."),C=!1;const x=O.autoReset,F=mt.enabled,X=mt.autoUpdate,H=mt.needsUpdate,V=mt.type;Rt(),O.autoReset=x,mt.enabled=F,mt.autoUpdate=X,mt.needsUpdate=H,mt.type=V}function Oe(x){re("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function li(x){const F=x.target;F.removeEventListener("dispose",li),gg(F)}function gg(x){_g(x),z.remove(x)}function _g(x){const F=z.get(x).programs;F!==void 0&&(F.forEach(function(X){ot.releaseProgram(X)}),x.isShaderMaterial&&ot.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,X,H,V,St){F===null&&(F=ge);const bt=V.isMesh&&V.matrixWorld.determinantAffine()<0,Mt=Mg(x,F,X,H,V);_.setMaterial(H,bt);let Pt=X.index,Dt=1;if(H.wireframe===!0){if(Pt=W.getWireframeAttribute(X),Pt===void 0)return;Dt=2}const $t=X.drawRange,jt=X.attributes.position;let Ut=$t.start*Dt,_e=($t.start+$t.count)*Dt;St!==null&&(Ut=Math.max(Ut,St.start*Dt),_e=Math.min(_e,(St.start+St.count)*Dt)),Pt!==null?(Ut=Math.max(Ut,0),_e=Math.min(_e,Pt.count)):jt!=null&&(Ut=Math.max(Ut,0),_e=Math.min(_e,jt.count));const Be=_e-Ut;if(Be<0||Be===1/0)return;vt.setup(V,H,Mt,X,Pt);let De,xe=pt;if(Pt!==null&&(De=nt.get(Pt),xe=Q,xe.setIndex(De)),V.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*me()),xe.setMode(P.LINES)):xe.setMode(P.TRIANGLES);else if(V.isLine){let rn=H.linewidth;rn===void 0&&(rn=1),_.setLineWidth(rn*me()),V.isLineSegments?xe.setMode(P.LINES):V.isLineLoop?xe.setMode(P.LINE_LOOP):xe.setMode(P.LINE_STRIP)}else V.isPoints?xe.setMode(P.POINTS):V.isSprite&&xe.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))xe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const rn=V._multiDrawStarts,yt=V._multiDrawCounts,An=V._multiDrawCount,se=Pt?nt.get(Pt).bytesPerElement:1,kn=z.get(H).currentProgram.getUniforms();for(let ci=0;ci<An;ci++)kn.setValue(P,"_gl_DrawID",ci),xe.render(rn[ci]/se,yt[ci])}else if(V.isInstancedMesh)xe.renderInstances(Ut,Be,V.count);else if(X.isInstancedBufferGeometry){const rn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,yt=Math.min(X.instanceCount,rn);xe.renderInstances(Ut,Be,yt)}else xe.render(Ut,Be)};function sd(x,F,X){x.transparent===!0&&x.side===Di&&x.forceSinglePass===!1?(x.side=bn,x.needsUpdate=!0,Na(x,F,X),x.side=as,x.needsUpdate=!0,Na(x,F,X),x.side=Di):Na(x,F,X)}this.compile=function(x,F,X=null){X===null&&(X=x),T=it.get(X),T.init(F),v.push(T),X.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),x!==X&&x.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();const H=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const St=V.material;if(St)if(Array.isArray(St))for(let bt=0;bt<St.length;bt++){const Mt=St[bt];sd(Mt,X,V),H.add(Mt)}else sd(St,X,V),H.add(St)}),T=v.pop(),H},this.compileAsync=function(x,F,X=null){const H=this.compile(x,F,X);return new Promise(V=>{function St(){if(H.forEach(function(bt){z.get(bt).currentProgram.isReady()&&H.delete(bt)}),H.size===0){V(x);return}setTimeout(St,10)}ie.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let yl=null;function vg(x){yl&&yl(x)}function rd(){hs.stop()}function ad(){hs.start()}const hs=new og;hs.setAnimationLoop(vg),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(x){yl=x,Tt.setAnimationLoop(x),x===null?hs.stop():hs.start()},Tt.addEventListener("sessionstart",rd),Tt.addEventListener("sessionend",ad),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(x,F);const X=Tt.enabled===!0&&Tt.isPresenting===!0,H=y!==null&&(tt===null||X)&&y.begin(L,tt);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(F),F=Tt.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,F,tt),T=it.get(x,v.length),T.init(F),T.state.textureUnits=Y.getTextureUnits(),v.push(T),oe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Kt.setFromProjectionMatrix(oe,gi,F.reversedDepth),Gt=this.localClippingEnabled,Yt=ct.init(this.clippingPlanes,Gt),A=j.get(x,R.length),A.init(),R.push(A),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=L.xr.getDepthSensingMesh();bt!==null&&bl(bt,F,-1/0,L.sortObjects)}bl(x,F,0,L.sortObjects),A.finish(),L.sortObjects===!0&&A.sort(Nt,kt,F.reversedDepth),ue=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,ue&&wt.addToRenderList(A,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&ct.beginShadows();const V=T.state.shadowsArray;if(mt.render(V,x,F),Yt===!0&&ct.endShadows(),(H&&y.hasRenderPass())===!1){const bt=A.opaque,Mt=A.transmissive;if(T.setupLights(),F.isArrayCamera){const Pt=F.cameras;if(Mt.length>0)for(let Dt=0,$t=Pt.length;Dt<$t;Dt++){const jt=Pt[Dt];ld(bt,Mt,x,jt)}ue&&wt.render(x);for(let Dt=0,$t=Pt.length;Dt<$t;Dt++){const jt=Pt[Dt];od(A,x,jt,jt.viewport)}}else Mt.length>0&&ld(bt,Mt,x,F),ue&&wt.render(x),od(A,x,F)}tt!==null&&N===0&&(Y.updateMultisampleRenderTarget(tt),Y.updateRenderTargetMipmap(tt)),H&&y.end(L),x.isScene===!0&&x.onAfterRender(L,x,F),vt.resetDefaultState(),at=-1,dt=null,v.pop(),v.length>0?(T=v[v.length-1],Y.setTextureUnits(T.state.textureUnits),Yt===!0&&ct.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,D!==null&&D.renderEnd()};function bl(x,F,X,H){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLightProbeGrid)T.pushLightProbeGrid(x);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Kt.intersectsSprite(x)){H&&ye.setFromMatrixPosition(x.matrixWorld).applyMatrix4(oe);const bt=q.update(x),Mt=x.material;Mt.visible&&A.push(x,bt,Mt,X,ye.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Kt.intersectsObject(x))){const bt=q.update(x),Mt=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ye.copy(x.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),ye.copy(bt.boundingSphere.center)),ye.applyMatrix4(x.matrixWorld).applyMatrix4(oe)),Array.isArray(Mt)){const Pt=bt.groups;for(let Dt=0,$t=Pt.length;Dt<$t;Dt++){const jt=Pt[Dt],Ut=Mt[jt.materialIndex];Ut&&Ut.visible&&A.push(x,bt,Ut,X,ye.z,jt)}}else Mt.visible&&A.push(x,bt,Mt,X,ye.z,null)}}const St=x.children;for(let bt=0,Mt=St.length;bt<Mt;bt++)bl(St[bt],F,X,H)}function od(x,F,X,H){const{opaque:V,transmissive:St,transparent:bt}=x;T.setupLightsView(X),Yt===!0&&ct.setGlobalState(L.clippingPlanes,X),H&&_.viewport(ft.copy(H)),V.length>0&&Ua(V,F,X),St.length>0&&Ua(St,F,X),bt.length>0&&Ua(bt,F,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ld(x,F,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Ut=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new un(1,1,{generateMipmaps:!0,type:Ut?xn:qn,minFilter:ys,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}const St=T.state.transmissionRenderTarget[H.id],bt=H.viewport||ft;St.setSize(bt.z*L.transmissionResolutionScale,bt.w*L.transmissionResolutionScale);const Mt=L.getRenderTarget(),Pt=L.getActiveCubeFace(),Dt=L.getActiveMipmapLevel();L.setRenderTarget(St),L.getClearColor(st),gt=L.getClearAlpha(),gt<1&&L.setClearColor(16777215,.5),L.clear(),ue&&wt.render(X);const $t=L.toneMapping;L.toneMapping=xi;const jt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Yt===!0&&ct.setGlobalState(L.clippingPlanes,H),Ua(x,X,H),Y.updateMultisampleRenderTarget(St),Y.updateRenderTargetMipmap(St),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let _e=0,Be=F.length;_e<Be;_e++){const De=F[_e],{object:xe,geometry:rn,material:yt,group:An}=De;if(yt.side===Di&&xe.layers.test(H.layers)){const se=yt.side;yt.side=bn,yt.needsUpdate=!0,cd(xe,X,H,rn,yt,An),yt.side=se,yt.needsUpdate=!0,Ut=!0}}Ut===!0&&(Y.updateMultisampleRenderTarget(St),Y.updateRenderTargetMipmap(St))}L.setRenderTarget(Mt,Pt,Dt),L.setClearColor(st,gt),jt!==void 0&&(H.viewport=jt),L.toneMapping=$t}function Ua(x,F,X){const H=F.isScene===!0?F.overrideMaterial:null;for(let V=0,St=x.length;V<St;V++){const bt=x[V],{object:Mt,geometry:Pt,group:Dt}=bt;let $t=bt.material;$t.allowOverride===!0&&H!==null&&($t=H),Mt.layers.test(X.layers)&&cd(Mt,F,X,Pt,$t,Dt)}}function cd(x,F,X,H,V,St){x.onBeforeRender(L,F,X,H,V,St),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(L,F,X,H,x,St),V.transparent===!0&&V.side===Di&&V.forceSinglePass===!1?(V.side=bn,V.needsUpdate=!0,L.renderBufferDirect(X,F,H,V,x,St),V.side=as,V.needsUpdate=!0,L.renderBufferDirect(X,F,H,V,x,St),V.side=Di):L.renderBufferDirect(X,F,H,V,x,St),x.onAfterRender(L,F,X,H,V,St)}function Na(x,F,X){F.isScene!==!0&&(F=ge);const H=z.get(x),V=T.state.lights,St=T.state.shadowsArray,bt=V.state.version,Mt=ot.getParameters(x,V.state,St,F,X,T.state.lightProbeGridArray),Pt=ot.getProgramCacheKey(Mt);let Dt=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const $t=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=lt.get(x.envMap||H.environment,$t),H.envMapRotation=H.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,Dt===void 0&&(x.addEventListener("dispose",li),Dt=new Map,H.programs=Dt);let jt=Dt.get(Pt);if(jt!==void 0){if(H.currentProgram===jt&&H.lightsStateVersion===bt)return ud(x,Mt),jt}else Mt.uniforms=ot.getUniforms(x),D!==null&&x.isNodeMaterial&&D.build(x,X,Mt),x.onBeforeCompile(Mt,L),jt=ot.acquireProgram(Mt,Pt),Dt.set(Pt,jt),H.uniforms=Mt.uniforms;const Ut=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ut.clippingPlanes=ct.uniform),ud(x,Mt),H.needsLights=Eg(x),H.lightsStateVersion=bt,H.needsLights&&(Ut.ambientLightColor.value=V.state.ambient,Ut.lightProbe.value=V.state.probe,Ut.directionalLights.value=V.state.directional,Ut.directionalLightShadows.value=V.state.directionalShadow,Ut.spotLights.value=V.state.spot,Ut.spotLightShadows.value=V.state.spotShadow,Ut.rectAreaLights.value=V.state.rectArea,Ut.ltc_1.value=V.state.rectAreaLTC1,Ut.ltc_2.value=V.state.rectAreaLTC2,Ut.pointLights.value=V.state.point,Ut.pointLightShadows.value=V.state.pointShadow,Ut.hemisphereLights.value=V.state.hemi,Ut.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ut.spotLightMatrix.value=V.state.spotLightMatrix,Ut.spotLightMap.value=V.state.spotLightMap,Ut.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=jt,H.uniformsList=null,jt}function hd(x){if(x.uniformsList===null){const F=x.currentProgram.getUniforms();x.uniformsList=Ro.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function ud(x,F){const X=z.get(x);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function xg(x,F){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let X=0,H=x.length;X<H;X++){const V=x[X];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function Mg(x,F,X,H,V){F.isScene!==!0&&(F=ge),Y.resetTextureUnits();const St=F.fog,bt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,Mt=tt===null?L.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:te.workingColorSpace,Pt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Dt=lt.get(H.envMap||bt,Pt),$t=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,jt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!X.morphAttributes.position,_e=!!X.morphAttributes.normal,Be=!!X.morphAttributes.color;let De=xi;H.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(De=L.toneMapping);const xe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,rn=xe!==void 0?xe.length:0,yt=z.get(H),An=T.state.lights;if(Yt===!0&&(Gt===!0||x!==dt)){const be=x===dt&&H.id===at;ct.setState(H,x,be)}let se=!1;H.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==An.state.version||yt.outputColorSpace!==Mt||V.isBatchedMesh&&yt.batching===!1||!V.isBatchedMesh&&yt.batching===!0||V.isBatchedMesh&&yt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&yt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&yt.instancing===!1||!V.isInstancedMesh&&yt.instancing===!0||V.isSkinnedMesh&&yt.skinning===!1||!V.isSkinnedMesh&&yt.skinning===!0||V.isInstancedMesh&&yt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&yt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&yt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&yt.instancingMorph===!1&&V.morphTexture!==null||yt.envMap!==Dt||H.fog===!0&&yt.fog!==St||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==ct.numPlanes||yt.numIntersection!==ct.numIntersection)||yt.vertexAlphas!==$t||yt.vertexTangents!==jt||yt.morphTargets!==Ut||yt.morphNormals!==_e||yt.morphColors!==Be||yt.toneMapping!==De||yt.morphTargetsCount!==rn||!!yt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,yt.__version=H.version);let kn=yt.currentProgram;se===!0&&(kn=Na(H,F,V),D&&H.isNodeMaterial&&D.onUpdateProgram(H,kn,yt));let ci=!1,Vi=!1,Xs=!1;const Me=kn.getUniforms(),ke=yt.uniforms;if(_.useProgram(kn.program)&&(ci=!0,Vi=!0,Xs=!0),H.id!==at&&(at=H.id,Vi=!0),yt.needsLights){const be=xg(T.state.lightProbeGridArray,V);yt.lightProbeGrid!==be&&(yt.lightProbeGrid=be,Vi=!0)}if(ci||dt!==x){_.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Me.setValue(P,"projectionMatrix",x.projectionMatrix),Me.setValue(P,"viewMatrix",x.matrixWorldInverse);const Wi=Me.map.cameraPosition;Wi!==void 0&&Wi.setValue(P,Qt.setFromMatrixPosition(x.matrixWorld)),b.logarithmicDepthBuffer&&Me.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Me.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),dt!==x&&(dt=x,Vi=!0,Xs=!0)}if(yt.needsLights&&(An.state.directionalShadowMap.length>0&&Me.setValue(P,"directionalShadowMap",An.state.directionalShadowMap,Y),An.state.spotShadowMap.length>0&&Me.setValue(P,"spotShadowMap",An.state.spotShadowMap,Y),An.state.pointShadowMap.length>0&&Me.setValue(P,"pointShadowMap",An.state.pointShadowMap,Y)),V.isSkinnedMesh){Me.setOptional(P,V,"bindMatrix"),Me.setOptional(P,V,"bindMatrixInverse");const be=V.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),Me.setValue(P,"boneTexture",be.boneTexture,Y))}V.isBatchedMesh&&(Me.setOptional(P,V,"batchingTexture"),Me.setValue(P,"batchingTexture",V._matricesTexture,Y),Me.setOptional(P,V,"batchingIdTexture"),Me.setValue(P,"batchingIdTexture",V._indirectTexture,Y),Me.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&Me.setValue(P,"batchingColorTexture",V._colorsTexture,Y));const Gi=X.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&I.update(V,X,kn),(Vi||yt.receiveShadow!==V.receiveShadow)&&(yt.receiveShadow=V.receiveShadow,Me.setValue(P,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(ke.envMapIntensity.value=F.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=cE()),Vi){if(Me.setValue(P,"toneMappingExposure",L.toneMappingExposure),yt.needsLights&&Sg(ke,Xs),St&&H.fog===!0&&Et.refreshFogUniforms(ke,St),Et.refreshMaterialUniforms(ke,H,J,ht,T.state.transmissionRenderTarget[x.id]),yt.needsLights&&yt.lightProbeGrid){const be=yt.lightProbeGrid;ke.probesSH.value=be.texture,ke.probesMin.value.copy(be.boundingBox.min),ke.probesMax.value.copy(be.boundingBox.max),ke.probesResolution.value.copy(be.resolution)}Ro.upload(P,hd(yt),ke,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ro.upload(P,hd(yt),ke,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Me.setValue(P,"center",V.center),Me.setValue(P,"modelViewMatrix",V.modelViewMatrix),Me.setValue(P,"normalMatrix",V.normalMatrix),Me.setValue(P,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const be=H.uniformsGroups;for(let Wi=0,qs=be.length;Wi<qs;Wi++){const dd=be[Wi];et.update(dd,kn),et.bind(dd,kn)}}return kn}function Sg(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function Eg(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(x,F,X){const H=z.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),z.get(x.texture).__webglTexture=F,z.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,F){const X=z.get(x);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(x,F=0,X=0){tt=x,$=F,N=X;let H=null,V=!1,St=!1;if(x){const Mt=z.get(x);if(Mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,Mt.__webglFramebuffer),ft.copy(x.viewport),_t.copy(x.scissor),Wt=x.scissorTest,_.viewport(ft),_.scissor(_t),_.setScissorTest(Wt),at=-1;return}else if(Mt.__webglFramebuffer===void 0)Y.setupRenderTarget(x);else if(Mt.__hasExternalTextures)Y.rebindTextures(x,z.get(x.texture).__webglTexture,z.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const $t=x.depthTexture;if(Mt.__boundDepthTexture!==$t){if($t!==null&&z.has($t)&&(x.width!==$t.image.width||x.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(x)}}const Pt=x.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(St=!0);const Dt=z.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Dt[F])?H=Dt[F][X]:H=Dt[F],V=!0):x.samples>0&&Y.useMultisampledRTT(x)===!1?H=z.get(x).__webglMultisampledFramebuffer:Array.isArray(Dt)?H=Dt[X]:H=Dt,ft.copy(x.viewport),_t.copy(x.scissor),Wt=x.scissorTest}else ft.copy(Ct).multiplyScalar(J).floor(),_t.copy(fe).multiplyScalar(J).floor(),Wt=zt;if(X!==0&&(H=G),_.bindFramebuffer(P.FRAMEBUFFER,H)&&_.drawBuffers(x,H),_.viewport(ft),_.scissor(_t),_.setScissorTest(Wt),V){const Mt=z.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,X)}else if(St){const Mt=F;for(let Pt=0;Pt<x.textures.length;Pt++){const Dt=z.get(x.textures[Pt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,X,Mt)}}else if(x!==null&&X!==0){const Mt=z.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mt.__webglTexture,X)}at=-1},this.readRenderTargetPixels=function(x,F,X,H,V,St,bt,Mt=0){if(!(x&&x.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){_.bindFramebuffer(P.FRAMEBUFFER,Pt);try{const Dt=x.textures[Mt],$t=Dt.format,jt=Dt.type;if(x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Mt),!b.textureFormatReadable($t)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(jt)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-H&&X>=0&&X<=x.height-V&&P.readPixels(F,X,H,V,ut.convert($t),ut.convert(jt),St)}finally{const Dt=tt!==null?z.get(tt).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(x,F,X,H,V,St,bt,Mt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt)if(F>=0&&F<=x.width-H&&X>=0&&X<=x.height-V){_.bindFramebuffer(P.FRAMEBUFFER,Pt);const Dt=x.textures[Mt],$t=Dt.format,jt=Dt.type;if(x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Mt),!b.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ut=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ut),P.bufferData(P.PIXEL_PACK_BUFFER,St.byteLength,P.STREAM_READ),P.readPixels(F,X,H,V,ut.convert($t),ut.convert(jt),0);const _e=tt!==null?z.get(tt).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,_e);const Be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Rv(P,Be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ut),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,St),P.deleteBuffer(Ut),P.deleteSync(Be),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,F=null,X=0){const H=Math.pow(2,-X),V=Math.floor(x.image.width*H),St=Math.floor(x.image.height*H),bt=F!==null?F.x:0,Mt=F!==null?F.y:0;Y.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,bt,Mt,V,St),_.unbindTexture()},this.copyTextureToTexture=function(x,F,X=null,H=null,V=0,St=0){let bt,Mt,Pt,Dt,$t,jt,Ut,_e,Be;const De=x.isCompressedTexture?x.mipmaps[St]:x.image;if(X!==null)bt=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Pt=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,$t=X.min.y,jt=X.isBox3?X.min.z:0;else{const ke=Math.pow(2,-V);bt=Math.floor(De.width*ke),Mt=Math.floor(De.height*ke),x.isDataArrayTexture?Pt=De.depth:x.isData3DTexture?Pt=Math.floor(De.depth*ke):Pt=1,Dt=0,$t=0,jt=0}H!==null?(Ut=H.x,_e=H.y,Be=H.z):(Ut=0,_e=0,Be=0);const xe=ut.convert(F.format),rn=ut.convert(F.type);let yt;F.isData3DTexture?(Y.setTexture3D(F,0),yt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Y.setTexture2DArray(F,0),yt=P.TEXTURE_2D_ARRAY):(Y.setTexture2D(F,0),yt=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const An=_.getParameter(P.UNPACK_ROW_LENGTH),se=_.getParameter(P.UNPACK_IMAGE_HEIGHT),kn=_.getParameter(P.UNPACK_SKIP_PIXELS),ci=_.getParameter(P.UNPACK_SKIP_ROWS),Vi=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,De.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,De.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),_.pixelStorei(P.UNPACK_SKIP_ROWS,$t),_.pixelStorei(P.UNPACK_SKIP_IMAGES,jt);const Xs=x.isDataArrayTexture||x.isData3DTexture,Me=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){const ke=z.get(x),Gi=z.get(F),be=z.get(ke.__renderTarget),Wi=z.get(Gi.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,be.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let qs=0;qs<Pt;qs++)Xs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,z.get(x).__webglTexture,V,jt+qs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,z.get(F).__webglTexture,St,Be+qs)),P.blitFramebuffer(Dt,$t,bt,Mt,Ut,_e,bt,Mt,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||z.has(x)){const ke=z.get(x),Gi=z.get(F);_.bindFramebuffer(P.READ_FRAMEBUFFER,Z),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,B);for(let be=0;be<Pt;be++)Xs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ke.__webglTexture,V,jt+be):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ke.__webglTexture,V),Me?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gi.__webglTexture,St,Be+be):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Gi.__webglTexture,St),V!==0?P.blitFramebuffer(Dt,$t,bt,Mt,Ut,_e,bt,Mt,P.COLOR_BUFFER_BIT,P.NEAREST):Me?P.copyTexSubImage3D(yt,St,Ut,_e,Be+be,Dt,$t,bt,Mt):P.copyTexSubImage2D(yt,St,Ut,_e,Dt,$t,bt,Mt);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Me?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(yt,St,Ut,_e,Be,bt,Mt,Pt,xe,rn,De.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,St,Ut,_e,Be,bt,Mt,Pt,xe,De.data):P.texSubImage3D(yt,St,Ut,_e,Be,bt,Mt,Pt,xe,rn,De):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,St,Ut,_e,bt,Mt,xe,rn,De.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,St,Ut,_e,De.width,De.height,xe,De.data):P.texSubImage2D(P.TEXTURE_2D,St,Ut,_e,bt,Mt,xe,rn,De);_.pixelStorei(P.UNPACK_ROW_LENGTH,An),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se),_.pixelStorei(P.UNPACK_SKIP_PIXELS,kn),_.pixelStorei(P.UNPACK_SKIP_ROWS,ci),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Vi),St===0&&F.generateMipmaps&&P.generateMipmap(yt),_.unbindTexture()},this.initRenderTarget=function(x){z.get(x).__webglFramebuffer===void 0&&Y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Y.setTextureCube(x,0):x.isData3DTexture?Y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Y.setTexture2DArray(x,0):Y.setTexture2D(x,0),_.unbindTexture()},this.resetState=function(){$=0,N=0,tt=null,_.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),n.unpackColorSpace=te._getUnpackColorSpace()}}const Ps={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uE=new Ju(-1,1,1,-1,0,1);class dE extends pn{constructor(){super(),this.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new He([0,2,0,0,2,0],2))}}const fE=new dE;class Ta{constructor(t){this._mesh=new $n(fE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,uE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class pE extends Ws{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof $e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bs.clone(t.uniforms),this.material=new $e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ta(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Cp extends Ws{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class mE extends Ws{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class gE{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const i=t.getSize(new Xt);this._width=i.width,this._height=i.height,n=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pE(Ps),this.copyPass.material.blending=si,this.timer=new dx}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Cp!==void 0&&(a instanceof Cp?i=!0:a instanceof mE&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _E extends Ws{constructor(t,n,i=null,s=null,r=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Jt}render(t,n,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const xc={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class vE extends Ws{constructor(t=.96){super(),this.uniforms=Bs.clone(xc.uniforms),this.damp=t,this.compFsMaterial=new $e({uniforms:this.uniforms,vertexShader:xc.vertexShader,fragmentShader:xc.fragmentShader}),this.copyFsMaterial=new $e({uniforms:Bs.clone(Ps.uniforms),vertexShader:Ps.vertexShader,fragmentShader:Ps.fragmentShader,blending:si,depthTest:!1,depthWrite:!1}),this._textureComp=new un(window.innerWidth,window.innerHeight,{magFilter:Ye,type:xn}),this._textureOld=new un(window.innerWidth,window.innerHeight,{magFilter:Ye,type:xn}),this._compFsQuad=new Ta(this.compFsMaterial),this._copyFsQuad=new Ta(this.copyFsMaterial)}get damp(){return this.uniforms.damp.value}set damp(t){this.uniforms.damp.value=t}render(t,n,i){this.uniforms.tOld.value=this._textureOld.texture,this.uniforms.tNew.value=i.texture,t.setRenderTarget(this._textureComp),this._compFsQuad.render(t),this._copyFsQuad.material.uniforms.tDiffuse.value=this._textureComp.texture,this.renderToScreen?(t.setRenderTarget(null),this._copyFsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(),this._copyFsQuad.render(t));const s=this._textureOld;this._textureOld=this._textureComp,this._textureComp=s}setSize(t,n){this._textureComp.setSize(t,n),this._textureOld.setSize(t,n)}dispose(){this._textureComp.dispose(),this._textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this._compFsQuad.dispose(),this._copyFsQuad.dispose()}}const xE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Jt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Dr extends Ws{constructor(t,n=1,i,s){super(),this.strength=n,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Xt(t.x,t.y):new Xt(256,256),this.clearColor=new Jt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,a,{type:xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new un(r,a,{type:xn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new un(r,a,{type:xn});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=xE;this.highPassUniforms=Bs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $e({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Xt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Bs.clone(Ps.uniforms),this.blendMaterial=new $e({uniforms:this.copyUniforms,vertexShader:Ps.vertexShader,fragmentShader:Ps.fragmentShader,premultipliedAlpha:!0,blending:os,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Jt,this._oldClearAlpha=1,this._basic=new Os,this._fsQuad=new Ta(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Xt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,n,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Dr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Dr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const n=[],i=t/3;for(let s=0;s<t;s++)n.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new $e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Xt(.5,.5)},direction:{value:new Xt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new $e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Dr.BlurDirectionX=new Xt(1,0);Dr.BlurDirectionY=new Xt(0,1);const xo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ME extends Ws{constructor(){super(),this.isOutputPass=!0,this.uniforms=Bs.clone(xo.uniforms),this.material=new rg({name:xo.name,uniforms:this.uniforms,vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader}),this._fsQuad=new Ta(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Iu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Du?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Uu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const SE=.98,EE=3;class yE{constructor(t){k(this,"scene");k(this,"camera");k(this,"renderer");k(this,"composer");k(this,"afterimagePass");k(this,"bloomPass");k(this,"handleResize",()=>{const t=window.innerWidth,n=window.innerHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n);const i=this.renderer.getDrawingBufferSize(new Xt);this.composer.setSize(i.x,i.y),this.bloomPass.resolution.set(Math.max(1,Math.floor(i.x/2)),Math.max(1,Math.floor(i.y/2)))});this.scene=new Wv,this.scene.background=new Jt(657935),this.scene.fog=new $u(657935,3,8),this.camera=new Xn(50,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,.2,2.8),this.camera.lookAt(0,0,0),this.renderer=new hE({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight);const n=this.renderer.domElement;n.classList.add("three-canvas"),n.style.position="fixed",n.style.inset="0",n.style.zIndex="0",t.appendChild(n),this.addFloor();const i=this.renderer.getDrawingBufferSize(new Xt);this.composer=new gE(this.renderer),this.composer.setSize(i.x,i.y);const s=new _E(this.scene,this.camera);this.composer.addPass(s),this.afterimagePass=new vE(.9),this.composer.addPass(this.afterimagePass),this.bloomPass=new Dr(new Xt(Math.max(1,Math.floor(i.x/2)),Math.max(1,Math.floor(i.y/2))),.9,.7,.12),this.composer.addPass(this.bloomPass);const r=new ME;this.composer.addPass(r),this.setTrailDamp(.9),this.setBloomStrength(.9),window.addEventListener("resize",this.handleResize)}setTrailDamp(t){if(t<=0){this.afterimagePass.enabled=!1;return}const n=Math.min(t,SE);this.afterimagePass.enabled=!0,this.afterimagePass.uniforms.damp.value=n}setBloomStrength(t){if(t<=0){this.bloomPass.enabled=!1;return}this.bloomPass.enabled=!0,this.bloomPass.strength=Math.min(t,EE)}addFloor(){const t=new px(8,24,1192512,858918);t.position.y=-1,this.scene.add(t)}render(){this.composer.render()}}const Mo=.35,Pp=.3,bE=new Set([rt.LEFT_WRIST,rt.RIGHT_WRIST,rt.LEFT_ANKLE,rt.RIGHT_ANKLE]),TE=.022,AE=.03,wE=250,RE=.95,CE=.8,Lp=33,PE=new Hi;function Ip(e){return Math.min(1,Math.max(0,e))}class LE{constructor(t){k(this,"jointMesh");k(this,"boneMesh");k(this,"jointMaterial");k(this,"boneMaterial");k(this,"fade",0);k(this,"transitionFade",1);k(this,"pulse",0);k(this,"drawFade",0);k(this,"tmpMatrix",new Ee);k(this,"tmpPosA",new U);k(this,"tmpPosB",new U);k(this,"tmpMid",new U);k(this,"tmpDir",new U);k(this,"tmpQuat",new Hi);k(this,"tmpScale",new U);k(this,"upAxis",new U(0,1,0));const n=new Ml(1,12,12);this.jointMaterial=new Os({color:12121087,blending:os,transparent:!0,depthWrite:!1}),this.jointMesh=new Go(n,this.jointMaterial,Lp);const i=new Zu(1,1,1,8,1,!0);this.boneMaterial=new Os({color:3531007,wireframe:!0,blending:os,transparent:!0,depthWrite:!1}),this.boneMesh=new Go(i,this.boneMaterial,ga.length),t.add(this.jointMesh),t.add(this.boneMesh)}enter(){this.jointMesh.visible=!0,this.boneMesh.visible=!0}exit(){this.jointMesh.visible=!1,this.boneMesh.visible=!1}setTransitionFade(t){this.transitionFade=t}trigger(t,n){this.pulse=Math.max(this.pulse,t==="burst"?1:.6)}update(t){const{skeleton:n,dtMs:i}=t;this.updateFade(n.tracking,i),this.pulse*=Math.exp(-i/300),this.drawFade=this.fade*this.transitionFade;const s=1+this.pulse;this.jointMaterial.opacity=Math.min(1,RE*this.drawFade*s),this.boneMaterial.opacity=Math.min(1,CE*this.drawFade*s),!(this.drawFade<.001)&&(this.updateJoints(n),this.updateBones(n))}updateFade(t,n){const i=t?1:0,s=1-Math.exp(-n/wE);this.fade+=(i-this.fade)*s,Math.abs(this.fade-i)<1e-4&&(this.fade=i)}updateJoints(t){const n=t.joints;for(let i=0;i<Lp;i++){const s=n[i],r=bE.has(i)?AE:TE,a=Ip((s.visibility-Mo)/Pp);if(s.visibility<Mo||a<=0){this.tmpMatrix.makeScale(0,0,0),this.jointMesh.setMatrixAt(i,this.tmpMatrix);continue}const o=r*a*this.drawFade*(1+.3*this.pulse);this.tmpScale.set(o,o,o),this.tmpMatrix.compose(this.tmpPosA.set(s.x,s.y,s.z),PE,this.tmpScale),this.jointMesh.setMatrixAt(i,this.tmpMatrix)}this.jointMesh.instanceMatrix.needsUpdate=!0}updateBones(t){const n=t.joints;for(let i=0;i<ga.length;i++){const[s,r]=ga[i],a=n[s],o=n[r],l=Math.min(a.visibility,o.visibility),c=Ip((l-Mo)/Pp);if(l<Mo||c<=0){this.tmpMatrix.makeScale(0,0,0),this.boneMesh.setMatrixAt(i,this.tmpMatrix);continue}this.tmpPosA.set(a.x,a.y,a.z),this.tmpPosB.set(o.x,o.y,o.z),this.tmpDir.subVectors(this.tmpPosB,this.tmpPosA);const h=this.tmpDir.length();if(h<1e-4){this.tmpMatrix.makeScale(0,0,0),this.boneMesh.setMatrixAt(i,this.tmpMatrix);continue}this.tmpMid.addVectors(this.tmpPosA,this.tmpPosB).multiplyScalar(.5),this.tmpDir.divideScalar(h),this.tmpQuat.setFromUnitVectors(this.upAxis,this.tmpDir);const d=P1(s,r)*c*this.drawFade,u=h*c*this.drawFade;this.tmpScale.set(d,u,d),this.tmpMatrix.compose(this.tmpMid,this.tmpQuat,this.tmpScale),this.boneMesh.setMatrixAt(i,this.tmpMatrix)}this.boneMesh.instanceMatrix.needsUpdate=!0}}const aa=0,_s=1,oa=2,ce=class ce{constructor(t){k(this,"count");k(this,"cloud");k(this,"bodyPos");k(this,"idlePos");k(this,"partOf");k(this,"q0");k(this,"q1");k(this,"q2");k(this,"q3");k(this,"qN");k(this,"idleCx");k(this,"idleCy");k(this,"idleCz");k(this,"idleAmp");k(this,"idleW1");k(this,"idleW2");k(this,"idleW3");k(this,"idleP1");k(this,"idleP2");k(this,"idleP3");k(this,"partKind");k(this,"pJA");k(this,"pJB");k(this,"pJC");k(this,"pJD");k(this,"pRs");k(this,"pRe");k(this,"pEll");k(this,"adjStart");k(this,"adjList");k(this,"torsoAdjL");k(this,"torsoAdjR");k(this,"pax");k(this,"pay");k(this,"paz");k(this,"pdx");k(this,"pdy");k(this,"pdz");k(this,"plen");k(this,"pux");k(this,"puy");k(this,"puz");k(this,"pvx");k(this,"pvy");k(this,"pvz");k(this,"pInvE2m1");k(this,"prA");k(this,"prB");k(this,"actPrim");k(this,"relaxDisp");k(this,"relaxPhase",0);k(this,"partPrevMidX");k(this,"partPrevMidY");k(this,"partPrevMidZ");k(this,"partSpeedNorm");k(this,"hasPrevMid",!1);k(this,"blend",0);k(this,"lastMs",-1);k(this,"hasEverDetected",!1);this.count=t;const n=[],i=(st,gt)=>Math.min(st,gt)<<8|Math.max(st,gt),s=new Map([[i(rt.LEFT_SHOULDER,rt.LEFT_ELBOW),[.05,.04,.75,.3]],[i(rt.RIGHT_SHOULDER,rt.RIGHT_ELBOW),[.05,.04,.75,.3]],[i(rt.LEFT_ELBOW,rt.LEFT_WRIST),[.04,.028,.75,.3]],[i(rt.RIGHT_ELBOW,rt.RIGHT_WRIST),[.04,.028,.75,.3]],[i(rt.LEFT_HIP,rt.LEFT_KNEE),[.08,.055,.75,.3]],[i(rt.RIGHT_HIP,rt.RIGHT_KNEE),[.08,.055,.75,.3]],[i(rt.LEFT_KNEE,rt.LEFT_ANKLE),[.055,.035,.75,.3]],[i(rt.RIGHT_KNEE,rt.RIGHT_ANKLE),[.055,.035,.75,.3]]]),r=new Set([i(rt.LEFT_SHOULDER,rt.RIGHT_SHOULDER),i(rt.LEFT_SHOULDER,rt.LEFT_HIP),i(rt.RIGHT_SHOULDER,rt.RIGHT_HIP),i(rt.LEFT_HIP,rt.RIGHT_HIP)]),a=(st,gt,K)=>Math.PI*K*(st*st+st*gt+gt*gt)/3,o=st=>4/3*Math.PI*st*st*st,l=n.length,c=Math.PI*(.35/2)*ce.TORSO_HALF_DEPTH*.5*(ce.TORSO_T_MAX-ce.TORSO_T_MIN);n.push({kind:_s,jA:-1,jB:-1,jC:-1,jD:-1,rStart:0,rEnd:0,ellipse:1,weight:c});const h=n.length;n.push({kind:oa,jA:rt.LEFT_EAR,jB:rt.RIGHT_EAR,jC:-1,jD:-1,rStart:ce.HEAD_R_H,rEnd:0,ellipse:1,weight:4/3*Math.PI*ce.HEAD_R_H*ce.HEAD_R_H*ce.HEAD_R_V});const d=n.length;n.push({kind:aa,jA:rt.LEFT_SHOULDER,jC:rt.RIGHT_SHOULDER,jB:rt.LEFT_EAR,jD:rt.RIGHT_EAR,rStart:.05,rEnd:.05,ellipse:1,weight:a(.05,.05,.15)});const u=new Map;for(const[st,gt]of ga){if(st<=10&&gt<=10)continue;const K=i(st,gt);if(r.has(K))continue;u.set(K,n.length);const ht=s.get(K);if(ht){const[J,Nt,kt,Ct]=ht;n.push({kind:aa,jA:st,jB:gt,jC:-1,jD:-1,rStart:J,rEnd:Nt,ellipse:kt,weight:a(J,Nt,Ct)})}else n.push({kind:aa,jA:st,jB:gt,jC:-1,jD:-1,rStart:.018,rEnd:.018,ellipse:1,weight:a(.018,.018,.15)})}const m=new Map;for(const[st,gt]of[[rt.LEFT_SHOULDER,.05],[rt.RIGHT_SHOULDER,.05],[rt.LEFT_HIP,.06],[rt.RIGHT_HIP,.06]])m.set(st,n.length),n.push({kind:oa,jA:st,jB:-1,jC:-1,jD:-1,rStart:gt,rEnd:0,ellipse:1,weight:o(gt)});const g=n.length;this.partKind=new Uint8Array(g),this.pJA=new Int16Array(g),this.pJB=new Int16Array(g),this.pJC=new Int16Array(g),this.pJD=new Int16Array(g),this.pRs=new Float32Array(g),this.pRe=new Float32Array(g),this.pEll=new Float32Array(g);let M=0;for(let st=0;st<g;st++){const gt=n[st];this.partKind[st]=gt.kind,this.pJA[st]=gt.jA,this.pJB[st]=gt.jB,this.pJC[st]=gt.jC,this.pJD[st]=gt.jD,this.pRs[st]=gt.rStart,this.pRe[st]=gt.rEnd,this.pEll[st]=gt.ellipse,M+=gt.weight}const p=(st,gt)=>{const K=st.get(gt);if(K===void 0)throw new Error("TargetSampler: part lookup failed");return K},f=p(u,i(rt.LEFT_SHOULDER,rt.LEFT_ELBOW)),E=p(u,i(rt.RIGHT_SHOULDER,rt.RIGHT_ELBOW)),w=p(u,i(rt.LEFT_ELBOW,rt.LEFT_WRIST)),S=p(u,i(rt.RIGHT_ELBOW,rt.RIGHT_WRIST)),A=p(u,i(rt.LEFT_HIP,rt.LEFT_KNEE)),T=p(u,i(rt.RIGHT_HIP,rt.RIGHT_KNEE)),R=p(u,i(rt.LEFT_KNEE,rt.LEFT_ANKLE)),v=p(u,i(rt.RIGHT_KNEE,rt.RIGHT_ANKLE)),y=p(m,rt.LEFT_SHOULDER),L=p(m,rt.RIGHT_SHOULDER),C=p(m,rt.LEFT_HIP),D=p(m,rt.RIGHT_HIP),G=[i(rt.LEFT_WRIST,rt.LEFT_PINKY),i(rt.LEFT_WRIST,rt.LEFT_INDEX),i(rt.LEFT_WRIST,rt.LEFT_THUMB),i(rt.LEFT_PINKY,rt.LEFT_INDEX)].map(st=>p(u,st)),Z=[i(rt.RIGHT_WRIST,rt.RIGHT_PINKY),i(rt.RIGHT_WRIST,rt.RIGHT_INDEX),i(rt.RIGHT_WRIST,rt.RIGHT_THUMB),i(rt.RIGHT_PINKY,rt.RIGHT_INDEX)].map(st=>p(u,st)),B=[i(rt.LEFT_ANKLE,rt.LEFT_HEEL),i(rt.LEFT_ANKLE,rt.LEFT_FOOT_INDEX),i(rt.LEFT_HEEL,rt.LEFT_FOOT_INDEX)].map(st=>p(u,st)),$=[i(rt.RIGHT_ANKLE,rt.RIGHT_HEEL),i(rt.RIGHT_ANKLE,rt.RIGHT_FOOT_INDEX),i(rt.RIGHT_HEEL,rt.RIGHT_FOOT_INDEX)].map(st=>p(u,st)),N=Array.from({length:g},()=>[]);N[l]=[d,f,E,A,T,y,L,C,D],N[h]=[d],N[d]=[l,h],N[f]=[l,y,w],N[E]=[l,L,S],N[w]=[f,G[0],G[1],G[2]],N[S]=[E,Z[0],Z[1],Z[2]];for(const st of G)N[st]=[w];for(const st of Z)N[st]=[S];N[A]=[l,C,R],N[T]=[l,D,v],N[R]=[A,B[0],B[1]],N[v]=[T,$[0],$[1]];for(const st of B)N[st]=[R];for(const st of $)N[st]=[v];N[y]=[l,f],N[L]=[l,E],N[C]=[l,A],N[D]=[l,T],this.torsoAdjL=Uint16Array.from([d,f,y,A,C]),this.torsoAdjR=Uint16Array.from([d,E,L,T,D]),this.adjStart=new Int32Array(g+1);let tt=0,at=0;for(let st=0;st<g;st++)this.adjStart[st]=tt,tt+=N[st].length,N[st].length>at&&(at=N[st].length);this.adjStart[g]=tt,this.adjList=new Uint16Array(tt);for(let st=0,gt=0;st<g;st++)for(const K of N[st])this.adjList[gt++]=K;const dt=new Int32Array(g+1);let ft=0;for(let st=0;st<g;st++){dt[st]=ft;const gt=M>0?Math.round(n[st].weight/M*t):0;ft+=gt,ft>t&&(ft=t)}dt[g]=t,this.bodyPos=new Float32Array(t*3),this.idlePos=new Float32Array(t*3),this.cloud={positions:new Float32Array(t*3),speeds:new Float32Array(t),count:t},this.partOf=new Uint16Array(t),this.q0=new Float32Array(t),this.q1=new Float32Array(t),this.q2=new Float32Array(t),this.q3=new Float32Array(t),this.qN=new Float32Array(t),this.relaxDisp=new Float32Array(t),this.idleCx=new Float32Array(t),this.idleCy=new Float32Array(t),this.idleCz=new Float32Array(t),this.idleAmp=new Float32Array(t),this.idleW1=new Float32Array(t),this.idleW2=new Float32Array(t),this.idleW3=new Float32Array(t),this.idleP1=new Float32Array(t),this.idleP2=new Float32Array(t),this.idleP3=new Float32Array(t),this.pax=new Float32Array(g),this.pay=new Float32Array(g),this.paz=new Float32Array(g),this.pdx=new Float32Array(g),this.pdy=new Float32Array(g),this.pdz=new Float32Array(g),this.plen=new Float32Array(g),this.pux=new Float32Array(g),this.puy=new Float32Array(g),this.puz=new Float32Array(g),this.pvx=new Float32Array(g),this.pvy=new Float32Array(g),this.pvz=new Float32Array(g),this.pInvE2m1=new Float32Array(g),this.prA=new Float32Array(g),this.prB=new Float32Array(g),this.actPrim=new Float64Array(ce.PRIM_STRIDE*Math.max(1+at,2+this.torsoAdjL.length+this.torsoAdjR.length)),this.partPrevMidX=new Float32Array(g),this.partPrevMidY=new Float32Array(g),this.partPrevMidZ=new Float32Array(g),this.partSpeedNorm=new Float32Array(g);const _t=Math.PI*2,Wt=ce.TORSO_T_MAX-ce.TORSO_T_MIN;for(let st=0;st<g;st++){const gt=n[st],K=dt[st],ht=dt[st+1];for(let J=K;J<ht;J++){if(this.partOf[J]=st,gt.kind===aa){const zt=Math.random(),Kt=Math.random()*_t,Yt=Math.pow(Math.random(),.35),Gt=gt.rStart+(gt.rEnd-gt.rStart)*zt;this.q0[J]=zt;const oe=Math.cos(Kt)*gt.ellipse,Qt=Math.sin(Kt);this.q1[J]=oe,this.q2[J]=Qt,this.q3[J]=Yt*Gt,this.qN[J]=1/Math.sqrt(oe*oe+Qt*Qt)}else if(gt.kind===_s){const zt=Math.random(),Kt=ce.TORSO_T_MIN+Math.random()*Wt,Yt=(Math.random()<.5?-1:1)*Math.pow(Math.random(),.35),Gt=2*zt-1,oe=Math.sqrt(Math.max(0,1-Gt*Gt)),Qt=2*((Kt-ce.TORSO_T_MIN)/Wt)-1,ye=Qt*Qt*Qt*Qt*Qt*Qt,ge=Math.sqrt(Math.max(0,1-ye));this.q0[J]=zt,this.q1[J]=Kt,this.q2[J]=Yt*ce.TORSO_HALF_DEPTH*oe*ge,this.q3[J]=0,this.qN[J]=Yt>=0?1:-1}else{const zt=2*Math.random()-1,Kt=Math.sqrt(Math.max(0,1-zt*zt)),Yt=Math.random()*_t,Gt=Math.pow(Math.random(),.35),oe=gt.jB>=0,Qt=gt.rStart,ye=oe?ce.HEAD_R_V:gt.rStart,ge=Gt*Kt*Math.cos(Yt)*Qt,ue=Gt*zt*ye,me=Gt*Kt*Math.sin(Yt)*Qt;this.q0[J]=ge,this.q1[J]=ue,this.q2[J]=me,this.q3[J]=0;const P=Math.sqrt(ge*ge+ue*ue+me*me);this.qN[J]=P>1e-9?1/P:0}const Nt=Math.random(),kt=Math.acos(2*Nt-1),Ct=Math.random()*_t,fe=1.2*Math.pow(Math.random(),1/3);this.idleCx[J]=fe*Math.sin(kt)*Math.cos(Ct),this.idleCy[J]=fe*Math.cos(kt),this.idleCz[J]=fe*Math.sin(kt)*Math.sin(Ct),this.idleAmp[J]=.3+Math.random()*.5,this.idleW1[J]=.1+Math.random()*.3,this.idleW2[J]=.1+Math.random()*.3,this.idleW3[J]=.1+Math.random()*.3,this.idleP1[J]=Math.random()*_t,this.idleP2[J]=Math.random()*_t,this.idleP3[J]=Math.random()*_t}}}update(t,n){const i=t.tracking;i&&(this.hasEverDetected=!0);let s=this.lastMs<0?0:(n-this.lastMs)/1e3;s<0&&(s=0),this.lastMs=n;const r=i?1:0,a=1-Math.exp(-(s*1e3)/ce.BLEND_TAU_MS);this.blend+=(r-this.blend)*a;const o=this.blend,l=n/1e3;this.computeIdle(l);const c=o>.001&&this.hasEverDetected;c&&this.computeBody(t.joints,s,o>.5);const h=this.cloud.positions,d=this.cloud.speeds,u=this.idlePos,m=this.bodyPos,g=this.partOf,M=this.partSpeedNorm,p=this.count;if(c)for(let f=0;f<p;f++){const E=f*3;h[E]=u[E]+(m[E]-u[E])*o,h[E+1]=u[E+1]+(m[E+1]-u[E+1])*o,h[E+2]=u[E+2]+(m[E+2]-u[E+2])*o,d[f]=M[g[f]]*o}else h.set(u),d.fill(0);return this.cloud}computeIdle(t){const n=this.idlePos,i=this.count;for(let s=0;s<i;s++){const r=s*3,a=this.idleAmp[s];n[r]=this.idleCx[s]+a*Math.sin(this.idleW1[s]*t+this.idleP1[s]),n[r+1]=this.idleCy[s]+a*Math.sin(this.idleW2[s]*t+this.idleP2[s]),n[r+2]=this.idleCz[s]+a*Math.sin(this.idleW3[s]*t+this.idleP3[s])}}refreshPrims(t){const n=this.partKind.length;for(let i=0;i<n;i++){const s=this.partKind[i];if(s===_s){const r=t[rt.LEFT_SHOULDER],a=t[rt.RIGHT_SHOULDER],o=t[rt.LEFT_HIP],l=t[rt.RIGHT_HIP],c=(r.x+a.x)*.5,h=(r.y+a.y)*.5,d=(r.z+a.z)*.5,u=(o.x+l.x)*.5,m=(o.y+l.y)*.5,g=(o.z+l.z)*.5,M=u-c,p=m-h,f=g-d,E=Math.sqrt(M*M+p*p+f*f);let w,S,A;if(E>1e-6){const Wt=1/E;w=M*Wt,S=p*Wt,A=f*Wt}else w=0,S=-1,A=0;const T=(a.x-r.x+l.x-o.x)*.5,R=(a.y-r.y+l.y-o.y)*.5,v=(a.z-r.z+l.z-o.z)*.5;let y=R*f-v*p,L=v*M-T*f,C=T*p-R*M;const D=Math.sqrt(y*y+L*L+C*C);if(D>1e-6){const Wt=1/D;y*=Wt,L*=Wt,C*=Wt}else y=0,L=0,C=1;const G=S*C-A*L,Z=A*y-w*C,B=w*L-S*y,$=a.x-r.x,N=a.y-r.y,tt=a.z-r.z,at=Math.sqrt($*$+N*N+tt*tt),dt=Math.max(.5*at*1.05,.06),ft=ce.TORSO_HALF_DEPTH;this.pax[i]=c,this.pay[i]=h,this.paz[i]=d,this.pdx[i]=w,this.pdy[i]=S,this.pdz[i]=A,this.plen[i]=E,this.pux[i]=G,this.puy[i]=Z,this.puz[i]=B,this.pvx[i]=y,this.pvy[i]=L,this.pvz[i]=C;const _t=ft/dt;this.pInvE2m1[i]=_t*_t-1,this.prA[i]=ft,this.prB[i]=ft}else if(s===oa){const r=t[this.pJA[i]],a=this.pJB[i];let o,l,c;if(a>=0){const u=t[a];o=(r.x+u.x)*.5,l=(r.y+u.y)*.5,c=(r.z+u.z)*.5}else o=r.x,l=r.y,c=r.z;const h=a>=0?ce.HEAD_R_V-ce.HEAD_R_H:0,d=this.pRs[i];this.pax[i]=o,this.pay[i]=l-h,this.paz[i]=c,this.pdx[i]=0,this.pdy[i]=1,this.pdz[i]=0,this.plen[i]=2*h,this.pux[i]=1,this.puy[i]=0,this.puz[i]=0,this.pvx[i]=0,this.pvy[i]=0,this.pvz[i]=1,this.pInvE2m1[i]=0,this.prA[i]=d,this.prB[i]=d}else{const r=t[this.pJA[i]],a=t[this.pJB[i]],o=this.pJC[i];let l,c,h,d,u,m;if(o>=0){const G=t[o],Z=t[this.pJD[i]];l=(r.x+G.x)*.5,c=(r.y+G.y)*.5,h=(r.z+G.z)*.5,d=(a.x+Z.x)*.5,u=(a.y+Z.y)*.5,m=(a.z+Z.z)*.5}else l=r.x,c=r.y,h=r.z,d=a.x,u=a.y,m=a.z;const g=d-l,M=u-c,p=m-h,f=Math.sqrt(g*g+M*M+p*p);let E,w,S;if(f>1e-6){const G=1/f;E=g*G,w=M*G,S=p*G}else E=0,w=1,S=0;let A,T,R;Math.abs(w)>.9?(A=1,T=0,R=0):(A=0,T=1,R=0);let v=w*R-S*T,y=S*A-E*R,L=E*T-w*A;const C=Math.sqrt(v*v+y*y+L*L);if(C>1e-6){const G=1/C;v*=G,y*=G,L*=G}else v=1,y=0,L=0;this.pax[i]=l,this.pay[i]=c,this.paz[i]=h,this.pdx[i]=E,this.pdy[i]=w,this.pdz[i]=S,this.plen[i]=f,this.pux[i]=v,this.puy[i]=y,this.puz[i]=L,this.pvx[i]=w*L-S*y,this.pvy[i]=S*v-E*L,this.pvz[i]=E*y-w*v;const D=1/this.pEll[i];this.pInvE2m1[i]=D*D-1,this.prA[i]=this.pRs[i],this.prB[i]=this.pRe[i]}}}packPrim(t,n){const i=this.actPrim;i[n]=this.pax[t],i[n+1]=this.pay[t],i[n+2]=this.paz[t],i[n+3]=this.pdx[t],i[n+4]=this.pdy[t],i[n+5]=this.pdz[t];const s=this.plen[t];i[n+6]=s,i[n+7]=this.pux[t],i[n+8]=this.puy[t],i[n+9]=this.puz[t],i[n+10]=this.pInvE2m1[t],i[n+11]=this.prA[t],i[n+12]=s>1e-6?(this.prB[t]-this.prA[t])/s:0}computeBody(t,n,i){this.refreshPrims(t);const s=this.bodyPos,r=this.partOf,a=this.q0,o=this.q1,l=this.q2,c=this.q3,h=this.qN,d=this.relaxDisp,u=this.relaxPhase;this.relaxPhase=u^1;const m=this.adjStart,g=this.adjList,M=this.actPrim,p=ce.PRIM_STRIDE,f=this.count,E=n>0?n:0,w=ce.SMOOTH_UNION_K,S=ce.RELAX_MAX_DISP;let A=-1,T=aa,R=1,v=!1,y=0,L=0,C=0,D=0,G=0,Z=0,B=0,$=0,N=0,tt=0,at=0,dt=0,ft=0,_t=0,Wt=0,st=0,gt=0,K=0,ht=0,J=0,Nt=0,kt=0,Ct=0,fe=0,zt=0,Kt=0,Yt=0,Gt=0,oe=0,Qt=0,ye=0,ge=0,ue=0,me=0;for(let P=0;P<f;P++){const Bt=r[P];if(Bt!==A){A=Bt,T=this.partKind[Bt];let nt=0,W=0,q=0;if(T===_s){const j=t[rt.LEFT_SHOULDER],it=t[rt.RIGHT_SHOULDER],ct=t[rt.LEFT_HIP],mt=t[rt.RIGHT_HIP];gt=j.x,K=j.y,ht=j.z,J=it.x,Nt=it.y,kt=it.z,Ct=ct.x,fe=ct.y,zt=ct.z,Kt=mt.x,Yt=mt.y,Gt=mt.z,oe=this.pvx[Bt],Qt=this.pvy[Bt],ye=this.pvz[Bt];const I=(Math.min(j.visibility,it.visibility,ct.visibility,mt.visibility)-.35)/.3;R=I<0?0:I>1?1:I,nt=(gt+J+Ct+Kt)*.25,W=(K+Nt+fe+Yt)*.25,q=(ht+kt+zt+Gt)*.25}else if(T===oa){const j=t[this.pJA[Bt]],it=this.pJB[Bt];let ct=j.visibility;if(it>=0){const wt=t[it];ge=(j.x+wt.x)*.5,ue=(j.y+wt.y)*.5,me=(j.z+wt.z)*.5,ct=Math.min(ct,wt.visibility)}else ge=j.x,ue=j.y,me=j.z;const mt=(ct-.35)/.3;R=mt<0?0:mt>1?1:mt,nt=ge,W=ue,q=me}else{D=this.pax[Bt],G=this.pay[Bt],Z=this.paz[Bt],B=this.pdx[Bt],$=this.pdy[Bt],N=this.pdz[Bt],tt=this.pux[Bt],at=this.puy[Bt],dt=this.puz[Bt],ft=this.pvx[Bt],_t=this.pvy[Bt],Wt=this.pvz[Bt],st=this.plen[Bt];const j=t[this.pJA[Bt]],it=t[this.pJB[Bt]],ct=this.pJC[Bt];let mt=Math.min(j.visibility,it.visibility);ct>=0&&(mt=Math.min(mt,t[ct].visibility,t[this.pJD[Bt]].visibility));const wt=(mt-.35)/.3;R=wt<0?0:wt>1?1:wt,nt=D+B*st*.5,W=G+$*st*.5,q=Z+N*st*.5}const ot=m[Bt],Et=m[Bt+1];if(v=i&&R>.01&&Et>ot,v)if(T===_s){const j=this.torsoAdjL,it=this.torsoAdjR;let ct=0;this.packPrim(Bt,ct),ct+=p;for(let mt=0;mt<j.length;mt++)this.packPrim(j[mt],ct),ct+=p;y=ct,L=ct,this.packPrim(Bt,ct),ct+=p;for(let mt=0;mt<it.length;mt++)this.packPrim(it[mt],ct),ct+=p;C=ct}else{this.packPrim(Bt,0);let j=p;for(let it=ot;it<Et;it++)this.packPrim(g[it],j),j+=p;y=j,L=0,C=0}if(this.hasPrevMid&&E>0){const j=nt-this.partPrevMidX[Bt],it=W-this.partPrevMidY[Bt],ct=q-this.partPrevMidZ[Bt],wt=Math.sqrt(j*j+it*it+ct*ct)/E/2;this.partSpeedNorm[Bt]=wt<0?0:wt>1?1:wt}else this.partSpeedNorm[Bt]=0;this.partPrevMidX[Bt]=nt,this.partPrevMidY[Bt]=W,this.partPrevMidZ[Bt]=q}const ie=P*3;let b,_,O,z=0,Y=0,lt=0;if(T===_s){const nt=a[P],W=o[P],q=gt+(J-gt)*nt,ot=K+(Nt-K)*nt,Et=ht+(kt-ht)*nt,j=Ct+(Kt-Ct)*nt,it=fe+(Yt-fe)*nt,ct=zt+(Gt-zt)*nt,mt=l[P]*R;if(b=q+(j-q)*W+oe*mt,_=ot+(it-ot)*W+Qt*mt,O=Et+(ct-Et)*W+ye*mt,v){const wt=h[P];z=oe*wt,Y=Qt*wt,lt=ye*wt}}else if(T===oa){const nt=a[P],W=o[P],q=l[P];if(b=ge+nt*R,_=ue+W*R,O=me+q*R,v){const ot=h[P];z=nt*ot,Y=W*ot,lt=q*ot}}else{const nt=a[P],W=o[P],q=l[P],ot=c[P]*R,Et=tt*W+ft*q,j=at*W+_t*q,it=dt*W+Wt*q;if(b=D+B*(st*nt)+Et*ot,_=G+$*(st*nt)+j*ot,O=Z+N*(st*nt)+it*ot,v){const ct=h[P];z=Et*ct,Y=j*ct,lt=it*ct}}if(v&&(z!==0||Y!==0||lt!==0)){let nt;if((P&1)===u){let W=0,q=y;T===_s&&a[P]>=.5&&(W=L,q=C);let ot=0,Et=0;for(let j=W;j<q;j+=p){const it=b-M[j],ct=_-M[j+1],mt=O-M[j+2],wt=M[j+3],I=M[j+4],pt=M[j+5],Q=M[j+6];let ut=it*wt+ct*I+mt*pt;ut=ut<0?0:ut>Q?Q:ut;const vt=it-wt*ut,et=ct-I*ut,Rt=mt-pt*ut;let Tt=vt*vt+et*et+Rt*Rt;const Te=M[j+10];if(Te!==0){const Oe=vt*M[j+7]+et*M[j+8]+Rt*M[j+9];Tt+=Oe*Oe*Te}const le=Math.sqrt(Tt)-(M[j+11]+M[j+12]*ut);if(j===W)ot=le,Et=le;else{let Oe=.5+.5*(le-Et)/w;Oe=Oe<0?0:Oe>1?1:Oe,Et=le+(Et-le)*Oe-w*Oe*(1-Oe)}}nt=ot-Et,nt>S&&(nt=S),d[P]=nt}else nt=d[P];nt>0&&(b+=z*nt,_+=Y*nt,O+=lt*nt)}s[ie]=b,s[ie+1]=_,s[ie+2]=O}this.hasPrevMid=!0}};k(ce,"PRIM_STRIDE",13),k(ce,"BLEND_TAU_MS",600),k(ce,"TORSO_HALF_DEPTH",.07),k(ce,"TORSO_T_MIN",-.08),k(ce,"TORSO_T_MAX",1.05),k(ce,"HEAD_R_H",.11),k(ce,"HEAD_R_V",.11*1.25),k(ce,"SMOOTH_UNION_K",.05),k(ce,"RELAX_MAX_DISP",.06);let qo=ce;const _n=2600,IE=.6,Ih=Math.round(_n*IE),DE=_n-Ih,FE=40,Dp=.65,UE=1.35,Mc=6.5,NE=.05,OE=1.5,Fp=.005,BE=.02,kE=1.15,zE=.8,HE=.6,VE=6,GE=2072543,WE=9431551,Sc=.42,XE=Math.PI*2,qE=1.8,YE=1.4,$E=3.5,KE=1.5,ZE=.8,JE=4,jE=2.2,QE=1.2,Up=.3,ty=1e-4,ey=.001,ny=.25,iy=.75;class sy{constructor(t){k(this,"cubeMesh");k(this,"sphereMesh");k(this,"cubeMaterial");k(this,"sphereMaterial");k(this,"sampler",new qo(_n));k(this,"visible",!1);k(this,"fade",1);k(this,"pos");k(this,"vel");k(this,"kPerInstance");k(this,"baseSize");k(this,"rotAxis");k(this,"rotAngle");k(this,"isCube");k(this,"slotIndex");k(this,"tmpMatrix",new Ee);k(this,"tmpPos",new U);k(this,"tmpQuat",new Hi);k(this,"tmpScale",new U);k(this,"tmpAxis",new U);this.pos=new Float32Array(_n*3),this.vel=new Float32Array(_n*3),this.kPerInstance=new Float32Array(_n),this.baseSize=new Float32Array(_n),this.rotAxis=new Float32Array(_n*3),this.rotAngle=new Float32Array(_n),this.isCube=new Uint8Array(_n),this.slotIndex=new Uint32Array(_n),this.initializeInstanceParams();const n=new Yr(1,1,1);this.cubeMaterial=new Os({color:GE,transparent:!0,opacity:Sc,depthWrite:!1,blending:os}),this.cubeMesh=new Go(n,this.cubeMaterial,Ih),this.cubeMesh.instanceMatrix.setUsage(zo),this.cubeMesh.frustumCulled=!1,this.cubeMesh.visible=!1;const i=new Ml(1,8,8);this.sphereMaterial=new Os({color:WE,transparent:!0,opacity:Sc,depthWrite:!1,blending:os}),this.sphereMesh=new Go(i,this.sphereMaterial,DE),this.sphereMesh.instanceMatrix.setUsage(zo),this.sphereMesh.frustumCulled=!1,this.sphereMesh.visible=!1,t.add(this.cubeMesh),t.add(this.sphereMesh)}initializeInstanceParams(){let t=0,n=0;for(let i=0;i<_n;i++){const s=i<Ih;this.isCube[i]=s?1:0,this.slotIndex[i]=s?t++:n++;const r=Dp+Math.random()*(UE-Dp);this.kPerInstance[i]=FE*r;const a=Fp+Math.random()*(BE-Fp);this.baseSize[i]=s?a*kE:a;const o=Math.random()*Math.PI*2,l=Math.random()*2-1,c=Math.sqrt(1-l*l);this.rotAxis[i*3+0]=c*Math.cos(o),this.rotAxis[i*3+1]=c*Math.sin(o),this.rotAxis[i*3+2]=l,this.rotAngle[i]=0;const h=OE*Math.cbrt(Math.random()),d=Math.random()*Math.PI*2,u=Math.random()*2-1,m=Math.sqrt(1-u*u);this.pos[i*3+0]=h*m*Math.cos(d),this.pos[i*3+1]=h*m*Math.sin(d),this.pos[i*3+2]=h*u}}enter(){this.visible=!0,this.cubeMesh.visible=!0,this.sphereMesh.visible=!0}exit(){this.visible=!1,this.cubeMesh.visible=!1,this.sphereMesh.visible=!1}update(t){if(!this.visible)return;const n=Math.min(Math.max(t.dtMs/1e3,0),NE),i=this.sampler.update(t.skeleton,t.nowMs);this.stepPhysics(i,n),!(this.fade<=ey)&&(this.writeInstanceMatrices(i,n),this.cubeMesh.instanceMatrix.needsUpdate=!0,this.sphereMesh.instanceMatrix.needsUpdate=!0)}stepPhysics(t,n){if(n<=0)return;const i=t.positions,s=Math.min(t.count,_n);for(let r=0;r<s;r++){const a=r*3,o=a+1,l=a+2,c=this.kPerInstance[r],h=c*(i[a]-this.pos[a])-Mc*this.vel[a],d=c*(i[o]-this.pos[o])-Mc*this.vel[o],u=c*(i[l]-this.pos[l])-Mc*this.vel[l];this.vel[a]+=h*n,this.vel[o]+=d*n,this.vel[l]+=u*n,this.pos[a]+=this.vel[a]*n,this.pos[o]+=this.vel[o]*n,this.pos[l]+=this.vel[l]*n}}writeInstanceMatrices(t,n){const i=t.speeds,s=Math.min(t.count,_n),r=ny+iy*this.fade;for(let a=0;a<s;a++){const o=a*3,l=o+1,c=o+2,h=this.vel[o],d=this.vel[l],u=this.vel[c],m=Math.sqrt(h*h+d*d+u*u),g=1+i[a]*zE,M=this.baseSize[a]*g*r;this.tmpPos.set(this.pos[o],this.pos[l],this.pos[c]),this.tmpScale.set(M,M,M),this.isCube[a]===1?(this.rotAngle[a]+=(HE+m*VE)*n,this.tmpAxis.set(this.rotAxis[o],this.rotAxis[l],this.rotAxis[c]),this.tmpQuat.setFromAxisAngle(this.tmpAxis,this.rotAngle[a])):this.tmpQuat.identity(),this.tmpMatrix.compose(this.tmpPos,this.tmpQuat,this.tmpScale),this.isCube[a]===1?this.cubeMesh.setMatrixAt(this.slotIndex[a],this.tmpMatrix):this.sphereMesh.setMatrixAt(this.slotIndex[a],this.tmpMatrix)}}setTransitionFade(t){this.fade=t;const n=Sc*t;this.cubeMaterial.opacity=n,this.sphereMaterial.opacity=n}randOf(t){const n=this.baseSize[t]*9999;return n-Math.floor(n)}trigger(t,n){for(let i=0;i<_n;i++){const s=i*3,r=s+1,a=s+2,o=this.randOf(i);let l=this.pos[s]-n.x,c=this.pos[r]-n.y,h=this.pos[a]-n.z,d=Math.sqrt(l*l+c*c+h*h);if(d<ty){const p=o*XE;l=Math.cos(p),c=Math.sin(p),h=this.rotAxis[a],d=Math.sqrt(l*l+c*c+h*h)||1}const u=1/d,m=l*u,g=c*u,M=h*u;switch(t){case"scatter":{const p=qE+o*YE;this.vel[s]+=m*p,this.vel[r]+=g*p,this.vel[a]+=M*p;break}case"burst":{const p=$E+o*KE;this.vel[s]+=m*p,this.vel[r]+=g*p+ZE,this.vel[a]+=M*p,this.rotAngle[i]+=JE*o;break}case"updraft":{this.vel[r]+=jE+o*QE,this.vel[s]+=-l*Up,this.vel[a]+=-h*Up;break}}}}}const la=3e4;class ry{constructor(t){k(this,"scene");k(this,"sampler",new qo(la));k(this,"geometry");k(this,"material");k(this,"points");k(this,"targetAttr");k(this,"speedAttr");k(this,"forceUpload",!1);k(this,"lastNowSec",0);k(this,"fade",1);this.scene=t,this.geometry=new pn;const n=new Float32Array(la*3);this.targetAttr=new vn(n,3),this.targetAttr.setUsage(zo),this.geometry.setAttribute("target",this.targetAttr);const i=new Float32Array(la);this.speedAttr=new vn(i,1),this.speedAttr.setUsage(zo),this.geometry.setAttribute("aSpeed",this.speedAttr);const s=new Float32Array(la*4);for(let a=0;a<s.length;a++)s[a]=Math.random();this.geometry.setAttribute("aSeed",new vn(s,4));const r=new Float32Array(la*3);this.geometry.setAttribute("position",new vn(r,3)),this.geometry.boundingSphere=new cs(new U(0,0,0),5),this.material=new $e({uniforms:{uTime:{value:0},uSize:{value:6},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uFade:{value:1},uGestureOrigin:{value:new U(0,0,0)},uScatterStart:{value:-1e3},uBurstStart:{value:-1e3},uUpdraftStart:{value:-1e3}},vertexShader:ay,fragmentShader:oy,transparent:!0,depthWrite:!1,blending:os}),this.points=new ix(this.geometry,this.material),this.points.frustumCulled=!1,this.points.visible=!1,this.scene.add(this.points)}enter(){this.points.visible=!0,this.forceUpload=!0}exit(){this.points.visible=!1}update(t){if(this.lastNowSec=t.nowMs/1e3,!this.points.visible&&!this.forceUpload)return;this.forceUpload=!1;const n=this.sampler.update(t.skeleton,t.nowMs);this.targetAttr.array.set(n.positions),this.speedAttr.array.set(n.speeds),this.targetAttr.needsUpdate=!0,this.speedAttr.needsUpdate=!0,this.material.uniforms.uTime.value=t.nowMs/1e3,this.material.uniforms.uFade.value=this.fade}setTransitionFade(t){this.fade=t,this.material.uniforms.uFade.value=t}trigger(t,n){switch(this.material.uniforms.uGestureOrigin.value.set(n.x,n.y,n.z),t){case"scatter":this.material.uniforms.uScatterStart.value=this.lastNowSec;break;case"burst":this.material.uniforms.uBurstStart.value=this.lastNowSec;break;case"updraft":this.material.uniforms.uUpdraftStart.value=this.lastNowSec;break}}}const ay=`
  attribute vec3 target;
  attribute float aSpeed;
  attribute vec4 aSeed;

  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uFade;
  uniform vec3 uGestureOrigin;
  uniform float uScatterStart;
  uniform float uBurstStart;
  uniform float uUpdraftStart;

  varying float vSpeed;
  varying float vRand;
  // フラグメントへ渡すジェスチャー発光量(scatter/burst のホットホワイト寄せに使用)。
  varying float vGlow;

  void main() {
    // seed から位相をずらした層状の sin でウォブルを作る(安価な擬似ノイズ)。
    float t = uTime;
    vec3 phase = aSeed.xyz * 6.2831853; // 0..2PI
    vec3 wobble = vec3(
      sin(t * 1.7 + phase.x) + 0.5 * sin(t * 3.1 + phase.y),
      sin(t * 1.3 + phase.y) + 0.5 * sin(t * 2.6 + phase.z),
      sin(t * 1.9 + phase.z) + 0.5 * sin(t * 3.7 + phase.x)
    );

    // --- ジェスチャーによる変位を集計する ---
    // idle 経路を安価に保つため、各効果を if (t < deadline) で包む
    // (発火していなければ start = -1000 なので即座に条件を外れる)。
    vec3 gestureOffset = vec3(0.0);
    // scatter による発光/ウォブル増幅係数(0 で無効)。
    float scatterEnv = 0.0;
    // burst のシェル近傍度(サイズブースト・発光に使用)。
    float burstShell = 0.0;
    // 原点→目標の方向(scatter / burst で共有)。ゼロ長はガードする。
    vec3 fromOrigin = target - uGestureOrigin;
    float originDist = length(fromOrigin);
    vec3 dir = originDist > 1e-4 ? fromOrigin / originDist : vec3(0.0, 1.0, 0.0);

    // scatter: 両手を広げる → 粒が外へ拡散。
    // env = 立ち上がり ~0.08s の smooth attack、その後 τ≈0.5s の指数減衰。~1.5s で消滅。
    float ts = t - uScatterStart;
    if (ts >= 0.0 && ts < 1.5) {
      float attack = smoothstep(0.0, 0.08, ts);
      float decay = exp(-ts / 0.5);
      scatterEnv = attack * decay;
      gestureOffset += dir * (0.5 * scatterEnv);
    }

    // burst: 手を叩く → 衝撃波。半径 shockR = t·2.5(m/s)で広がる球殻。
    // シェル近傍度は gaussian(σ=0.12)、全体は exp(-t·2.2) で速く減衰。~1.2s で消滅。
    float tb = t - uBurstStart;
    if (tb >= 0.0 && tb < 1.2) {
      float shockR = tb * 2.5;
      float dd = originDist - shockR;
      float shell = exp(-(dd * dd) / (2.0 * 0.12 * 0.12));
      float envB = exp(-tb * 2.2);
      burstShell = shell * envB;
      gestureOffset += dir * (0.35 * burstShell);
    }

    // updraft: 両手を上げる → 舞い上がる。
    // env = 立ち上がり 0.15s、τ≈0.6s の指数減衰。~2s で消滅。
    // seed 由来の位相でばらつかせ、粒ごとに不均一にフラッターしながら上昇する。
    float tu = t - uUpdraftStart;
    if (tu >= 0.0 && tu < 2.0) {
      float attackU = smoothstep(0.0, 0.15, tu);
      float decayU = exp(-tu / 0.6);
      float envU = attackU * decayU;
      float flutter = 0.5 + 0.5 * sin(aSeed.x * 6.2831853 + uTime * 3.0);
      gestureOffset.y += 0.35 * envU * flutter;
    }

    // 基本 0.012、速さで最大 +0.05 増幅。scatter 中はウォブル振幅を (1 + 2·env) 倍にして churn。
    float amp = (0.012 + aSpeed * 0.05) * (1.0 + 2.0 * scatterEnv);

    // 全体の緩やかな呼吸(±0.004)。
    float breathe = sin(t * 0.6) * 0.004;

    vec3 noiseOffset = wobble * amp + breathe;
    vec3 displayPos = target + noiseOffset + gestureOffset;

    vec4 mvPosition = modelViewMatrix * vec4(displayPos, 1.0);

    // seed 由来のサイズばらつき 0..0.8、速さで更に拡大。
    float sizeVar = 0.6 + aSeed.w * 0.8 + aSpeed * 1.5;
    // burst のシェル近傍で一瞬だけサイズを ×1.8 まで押し上げる。
    sizeVar *= 1.0 + 0.8 * burstShell;
    float size = uSize * uPixelRatio * sizeVar * (1.0 / -mvPosition.z);
    // 遷移フェードで点も僅かに縮小(0.3..1.0 倍)し、消え際が自然になる。
    size *= 0.3 + 0.7 * uFade;
    gl_PointSize = clamp(size, 1.0, 24.0);

    vSpeed = aSpeed;
    vRand = aSeed.x;
    // scatter / burst の発光量をまとめてフラグメントへ渡す。
    vGlow = scatterEnv + burstShell;

    gl_Position = projectionMatrix * mvPosition;
  }
`,oy=`
  precision mediump float;

  uniform float uFade;

  varying float vSpeed;
  varying float vRand;
  varying float vGlow;

  void main() {
    // 中心からの距離で円形マスク。
    vec2 uv = gl_PointCoord - vec2(0.5);
    float dist = length(uv) * 2.0; // 0(中心)..1(縁)
    float mask = smoothstep(1.0, 0.6, dist); // 縁を柔らかく
    float falloff = mask * mask; // 二次減衰
    if (falloff <= 0.0) discard;

    // 深いシアン → 熱い白シアン。
    // 通常は速さで補間するが、burst / scatter 中は発光量 vGlow·0.5 を
    // 混合係数に加えてホットホワイトへ寄せる(clamp 前に加算)。
    vec3 cold = vec3(0.08, 0.45, 0.75);
    vec3 hot = vec3(0.75, 1.0, 1.0);
    float mixFactor = clamp(vSpeed * 1.6 + vGlow * 0.5, 0.0, 1.0);
    vec3 color = mix(cold, hot, mixFactor);

    // vRand による僅かな色相ジッタ(±数%)。
    color.r *= 0.92 + vRand * 0.16;
    color.b *= 0.92 + (1.0 - vRand) * 0.16;

    // 遷移フェードを最終アルファへ乗算(ジェスチャー状態とは独立)。
    float alpha = falloff * uFade;
    // 加算合成向けにアルファをプリマルチプライ。
    gl_FragColor = vec4(color * alpha, alpha);
  }
`,mg={wireframe:"1: ワイヤーフレーム",swarm:"2: キューブ・スフィア",particle:"3: パーティクル"},ly=1200;class cy{constructor(t,n="wireframe"){k(this,"active");k(this,"prev",null);k(this,"progress",1);this.modes=t,this.active=n;for(const[i,s]of Object.entries(this.modes))i===n?(s.enter(),s.setTransitionFade(1)):s.exit()}get activeMode(){return this.active}setMode(t){t!==this.active&&(this.prev!==null&&this.modes[this.prev].exit(),this.prev=this.active,this.active=t,this.progress=0,this.modes[t].setTransitionFade(0),this.modes[t].enter())}update(t){if(this.prev!==null){this.progress=Math.min(1,this.progress+t.dtMs/ly);const n=this.progress,i=n*n*(3-2*n);this.modes[this.active].setTransitionFade(i),this.modes[this.prev].setTransitionFade(1-i),this.modes[this.prev].update(t),this.progress>=1&&(this.modes[this.prev].exit(),this.modes[this.prev].setTransitionFade(1),this.prev=null)}this.modes[this.active].update(t)}trigger(t,n){this.modes[this.active].trigger(t,n),this.prev!==null&&this.modes[this.prev].trigger(t,n)}}const Yo=document.querySelector("#app");if(!Yo)throw new Error("#app が見つかりません");const _a=new X1(Yo);async function hy(){_a.setLoading("カメラを起動しています…");const e=await Og();_a.setLoading("ポーズ推定モデルを読み込んでいます…");const t=await Cu.create(),n=new C1,i=new yE(Yo),s=new cy({wireframe:new LE(i.scene),swarm:new sy(i.scene),particle:new ry(i.scene)}),r=new Y1(Yo,e.video);r.setModeLabel(mg[s.activeMode]);const a=new W1,o=uy(i);o.setTrail(ju[s.activeMode]),_a.hide(),py(r,s,o),dy(e.video,t,n,r,Np),fy(n,i,s,a,r,Np)}const ju={wireframe:.86,swarm:.9,particle:.93};function uy(e){const t=new Dh({title:"調整 (D で開閉)"}),n={bloom:.9,trail:ju.wireframe};t.add(n,"bloom",0,3,.05).name("Bloom 強度").onChange(r=>e.setBloomStrength(r));const i=t.add(n,"trail",0,.98,.01).name("残像の長さ").onChange(r=>e.setTrailDamp(r));t.hide();let s=!1;return{setTrail(r){n.trail=r,i.updateDisplay(),e.setTrailDamp(r)},toggleVisible(){s=!s,s?t.show():t.hide()},hide(){s=!1,t.hide()}}}const Np={inferenceFrames:0,inferenceSumMs:0,inferenceFps:0,inferenceMs:0};function dy(e,t,n,i,s){const r=()=>{const o=t.detect(e,performance.now());n.ingest(o),i.draw(o),s.inferenceFrames++,s.inferenceSumMs+=o.inferenceTimeMs,a()},a="requestVideoFrameCallback"in HTMLVideoElement.prototype?()=>e.requestVideoFrameCallback(()=>r()):()=>requestAnimationFrame(r);a()}function fy(e,t,n,i,s,r){let a=0,o=performance.now(),l=performance.now();const c={skeleton:e.update(performance.now()),dtMs:0,nowMs:0},h=()=>{const d=performance.now(),u=d-l;l=d,c.skeleton=e.update(d),c.dtMs=u,c.nowMs=d;const m=i.update(c.skeleton,d);if(m){const g=c.skeleton.joints[rt.LEFT_SHOULDER],M=c.skeleton.joints[rt.RIGHT_SHOULDER];n.trigger(m,{x:(g.x+M.x)/2,y:(g.y+M.y)/2,z:(g.z+M.z)/2})}if(n.update(c),t.render(),a++,d-o>=500){const g=d-o;r.inferenceFps=r.inferenceFrames*1e3/g,r.inferenceMs=r.inferenceFrames>0?r.inferenceSumMs/r.inferenceFrames:0,s.setStats({renderFps:a*1e3/g,inferenceFps:r.inferenceFps,inferenceMs:r.inferenceMs}),a=0,r.inferenceFrames=0,r.inferenceSumMs=0,o=d}requestAnimationFrame(h)};requestAnimationFrame(h)}function py(e,t,n){let i=!0,s=!0;const r={1:"wireframe",2:"swarm",3:"particle"};window.addEventListener("keydown",a=>{switch(a.key){case"v":case"V":i=!i,e.setPreviewVisible(s&&i);return;case"h":case"H":s=!s,e.setHudVisible(s),e.setPreviewVisible(s&&i),s||n.hide();return;case"d":case"D":s&&n.toggleVisible();return}const o=r[a.key];o&&(t.setMode(o),e.setModeLabel(mg[o]),n.setTrail(ju[o]))})}async function my(){for(;;){await _a.waitForStart();try{await hy();return}catch(e){console.error(e),_a.showError(e instanceof Error?e.message:String(e))}}}my();
