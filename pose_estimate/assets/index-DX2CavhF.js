var R1=Object.defineProperty;var C1=(e,t,i)=>t in e?R1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var I=(e,t,i)=>C1(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class _n{constructor(t,i,n,s,r="div"){this.parent=t,this.object=i,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),_n.nextNameID=_n.nextNameID||0,this.$name.id=`lil-gui-name-${++_n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class P1 extends _n{constructor(t,i,n){super(t,i,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ac(e){let t,i;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const L1={isPrimitive:!0,match:e=>typeof e=="string",fromHexString:Ac,toHexString:Ac},Ma={isPrimitive:!0,match:e=>typeof e=="number",fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},I1={isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,i=1){const n=Ma.fromHexString(e);t[0]=(n>>16&255)/255*i,t[1]=(n>>8&255)/255*i,t[2]=(n&255)/255*i},toHexString([e,t,i],n=1){n=255/n;const s=e*n<<16^t*n<<8^i*n<<0;return Ma.toHexString(s)}},D1={isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,i=1){const n=Ma.fromHexString(e);t.r=(n>>16&255)/255*i,t.g=(n>>8&255)/255*i,t.b=(n&255)/255*i},toHexString({r:e,g:t,b:i},n=1){n=255/n;const s=e*n<<16^t*n<<8^i*n<<0;return Ma.toHexString(s)}},F1=[L1,Ma,I1,D1];function U1(e){return F1.find(t=>t.match(e))}class N1 extends _n{constructor(t,i,n,s){super(t,i,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=U1(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ac(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Tl extends _n{constructor(t,i,n){super(t,i,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class O1 extends _n{constructor(t,i,n,s,r,a){super(t,i,n,"lil-number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+v),this.$input.value=this.getValue())},s=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let a=!1,o,l,c,h,d;const u=5,p=v=>{o=v.clientX,l=c=v.clientY,a=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",S)},_=v=>{if(a){const y=v.clientX-o,M=v.clientY-l;Math.abs(M)>u?(v.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>u&&S()}if(!a){const y=v.clientY-c;d-=y*this._step*this._arrowKeyMultiplier(v),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=v.clientY},S=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",S)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(f,v,y,M,A)=>(f-v)/(y-v)*(A-M)+M,i=f=>{const v=this.$slider.getBoundingClientRect();let y=t(f,v.left,v.right,this._min,this._max);this._snapClampSetValue(y)},n=f=>{this._setDraggingStyle(!0),i(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{i(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),i(f.touches[0].clientX),a=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,a=!0):c(f),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=f=>{if(a){const v=f.touches[0].clientX-o,y=f.touches[0].clientY-l;Math.abs(v)>Math.abs(y)?c(f):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else f.preventDefault(),i(f.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},p=this._callOnFinishChange.bind(this),_=400;let S;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const y=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(S),S=setTimeout(p,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),i+-n}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){let i=0;return this._hasMin?i=this._min:this._hasMax&&(i=this._max),t-=i,t=Math.round(t/this._step)*this._step,t+=i,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class B1 extends _n{constructor(t,i,n,s){super(t,i,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(i=>{const n=document.createElement("option");n.textContent=i,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.textContent=i===-1?t:this._names[i],this}}class z1 extends _n{constructor(t,i,n){super(t,i,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var k1=`.lil-gui {
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
}`;function H1(e){const t=document.createElement("style");t.innerHTML=e;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let _d=!1;class Nh{constructor({parent:t,autoPlace:i=t===void 0,container:n,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!_d&&o&&(H1(k1),_d=!0),n?n.appendChild(this.domElement):i&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(t,i,n,s,r){if(Object(n)===n)return new B1(this,t,i,n);const a=t[i];switch(typeof a){case"number":return new O1(this,t,i,n,s,r);case"boolean":return new P1(this,t,i);case"string":return new z1(this,t,i);case"function":return new Tl(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,a)}addColor(t,i,n=1){return new N1(this,t,i,n)}addFolder(t){const i=new Nh({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Tl||n._name in t.controllers&&n.load(t.controllers[n._name])}),i&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Tl)){if(n._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);i.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);i.folders[n._title]=n.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("lil-transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}async function V1(){let e;try{e=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"},audio:!1})}catch(i){throw new Error(xd(i))}const t=document.createElement("video");t.muted=!0,t.playsInline=!0,t.autoplay=!0,t.setAttribute("muted",""),t.setAttribute("playsinline",""),t.setAttribute("autoplay",""),t.srcObject=e;try{await G1(t),await t.play()}catch(i){for(const n of e.getTracks())n.stop();throw t.srcObject=null,new Error(xd(i))}return{video:t,stop(){for(const i of e.getTracks())i.stop();t.srcObject=null}}}function G1(e){return e.readyState>=HTMLMediaElement.HAVE_METADATA?Promise.resolve():new Promise((t,i)=>{const n=()=>{r(),t()},s=()=>{r(),i(new Error("video metadata load failed"))},r=()=>{e.removeEventListener("loadedmetadata",n),e.removeEventListener("error",s)};e.addEventListener("loadedmetadata",n),e.addEventListener("error",s)})}function xd(e){switch(e instanceof DOMException?e.name:""){case"NotAllowedError":case"SecurityError":return"カメラの使用が許可されませんでした。ブラウザの設定でカメラへのアクセスを許可してください。";case"NotFoundError":case"OverconstrainedError":return"利用可能なカメラが見つかりませんでした。カメラが接続されているか確認してください。";case"NotReadableError":return"カメラにアクセスできませんでした。他のアプリがカメラを使用中でないか確認してください。";default:return"カメラの初期化中にエラーが発生しました。ページを再読み込みして再度お試しください。"}}var vr=typeof self<"u"?self:{};function Vp(e,t){t:{for(var i=["CLOSURE_FLAGS"],n=vr,s=0;s<i.length;s++)if((n=n[i[s]])==null){i=null;break t}i=n}return(e=i&&i[e])!=null?e:t}function hs(){throw Error("Invalid UTF8")}function vd(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let za,wl;const W1=typeof TextDecoder<"u";let X1;const q1=typeof TextEncoder<"u";function Gp(e){if(q1)e=(X1||(X1=new TextEncoder)).encode(e);else{let i=0;const n=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)n[i++]=t;else{if(t<2048)n[i++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){const r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,n[i++]=t>>18|240,n[i++]=t>>12&63|128,n[i++]=t>>6&63|128,n[i++]=63&t|128;continue}s--}t=65533}n[i++]=t>>12|224,n[i++]=t>>6&63|128}n[i++]=63&t|128}}e=i===n.length?n:n.subarray(0,i)}return e}function Wp(e){vr.setTimeout((()=>{throw e}),0)}var Tc,Y1=Vp(610401301,!1),Md=Vp(748402147,!0);function Sd(){var e=vr.navigator;return e&&(e=e.userAgent)?e:""}const yd=vr.navigator;function Jo(e){return Jo[" "](e),e}Tc=yd&&yd.userAgentData||null,Jo[" "]=function(){};const Xp={};let da=null;function $1(e){const t=e.length;let i=3*t/4;i%3?i=Math.floor(i):"=.".indexOf(e[t-1])!=-1&&(i="=.".indexOf(e[t-2])!=-1?i-2:i-1);const n=new Uint8Array(i);let s=0;return(function(r,a){function o(c){for(;l<r.length;){const h=r.charAt(l++),d=da[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}qp();let l=0;for(;;){const c=o(-1),h=o(0),d=o(64),u=o(64);if(u===64&&c===-1)break;a(c<<2|h>>4),d!=64&&(a(h<<4&240|d>>2),u!=64&&a(d<<6&192|u))}})(e,(function(r){n[s++]=r})),s!==i?n.subarray(0,s):n}function qp(){if(!da){da={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let i=0;i<5;i++){const n=e.concat(t[i].split(""));Xp[i]=n;for(let s=0;s<n.length;s++){const r=n[s];da[r]===void 0&&(da[r]=s)}}}}var K1=typeof Uint8Array<"u",Yp=!(!(Y1&&Tc&&Tc.brands.length>0)&&(Sd().indexOf("Trident")!=-1||Sd().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Ed=/[-_.]/g,Z1={"-":"+",_:"/",".":"="};function J1(e){return Z1[e]||""}function $p(e){if(!Yp)return $1(e);e=Ed.test(e)?e.replace(Ed,J1):e,e=atob(e);const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}function Oh(e){return K1&&e!=null&&e instanceof Uint8Array}var Mr={};function Ls(){return j1||(j1=new xn(null,Mr))}function Bh(e){Kp(Mr);var t=e.g;return(t=t==null||Oh(t)?t:typeof t=="string"?$p(t):null)==null?t:e.g=t}var xn=class{h(){return new Uint8Array(Bh(this)||0)}constructor(e,t){if(Kp(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let j1,Q1;function Kp(e){if(e!==Mr)throw Error("illegal external caller")}function Zp(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function wc(e){return Zp(e=Error(e),"warning"),e}function Sr(e,t){if(e!=null){var i=Q1??(Q1={}),n=i[e]||0;n>=t||(i[e]=n+1,Zp(e=Error(),"incident"),Wp(e))}}function Nr(){return typeof BigInt=="function"}var Or=typeof Symbol=="function"&&typeof Symbol()=="symbol";function yn(e,t,i=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?i&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var tg=yn("jas",void 0,!0),bd=yn(void 0,"0di"),Jr=yn(void 0,"1oa"),Li=yn(void 0,Symbol()),eg=yn(void 0,"0ub"),ig=yn(void 0,"0ubs"),Rc=yn(void 0,"0ubsb"),ng=yn(void 0,"0actk"),yr=yn("m_m","Pa",!0),Ad=yn();const Jp={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},jp=Object.defineProperties,Ot=Or?tg:"Ga";var zs;const Td=[];function Ra(e,t){Or||Ot in e||jp(e,Jp),e[Ot]|=t}function Je(e,t){Or||Ot in e||jp(e,Jp),e[Ot]=t}function Ca(e){return Ra(e,34),e}function Sa(e){return Ra(e,8192),e}Je(Td,7),zs=Object.freeze(Td);var Er={};function Di(e,t){return t===void 0?e.h!==Is&&!!(2&(0|e.v[Ot])):!!(2&t)&&e.h!==Is}const Is={};function zh(e,t){if(e!=null){if(typeof e=="string")e=e?new xn(e,Mr):Ls();else if(e.constructor!==xn)if(Oh(e))e=e.length?new xn(new Uint8Array(e),Mr):Ls();else{if(!t)throw Error();e=void 0}}return e}class wd{constructor(t,i,n){this.g=t,this.h=i,this.l=n}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}var sg=Object.freeze({});function Qp(e,t,i){const n=128&t?0:-1,s=e.length;var r;(r=!!s)&&(r=(r=e[s-1])!=null&&typeof r=="object"&&r.constructor===Object);const a=s+(r?-1:0);for(t=128&t?1:0;t<a;t++)i(t-n,e[t]);if(r){e=e[s-1];for(const o in e)!isNaN(o)&&i(+o,e[o])}}var tm={};function Br(e){return 128&e?tm:void 0}function jo(e){return e.Na=!0,e}var rg=jo((e=>typeof e=="number")),Rd=jo((e=>typeof e=="string")),ag=jo((e=>typeof e=="boolean")),Qo=typeof vr.BigInt=="function"&&typeof vr.BigInt(0)=="bigint";function Ii(e){var t=e;if(Rd(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(rg(t)&&!Number.isSafeInteger(t))throw Error(String(t));return Qo?BigInt(e):e=ag(e)?e?"1":"0":Rd(e)?e.trim()||"0":String(e)}var Cc=jo((e=>Qo?e>=lg&&e<=hg:e[0]==="-"?Cd(e,og):Cd(e,cg)));const og=Number.MIN_SAFE_INTEGER.toString(),lg=Qo?BigInt(Number.MIN_SAFE_INTEGER):void 0,cg=Number.MAX_SAFE_INTEGER.toString(),hg=Qo?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Cd(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let i=0;i<e.length;i++){const n=e[i],s=t[i];if(n>s)return!1;if(n<s)return!0}}const ug=typeof Uint8Array.prototype.slice=="function";let dg,Ce=0,Ve=0;function Pd(e){const t=e>>>0;Ce=t,Ve=(e-t)/4294967296>>>0}function br(e){if(e<0){Pd(-e);const[t,i]=Vh(Ce,Ve);Ce=t>>>0,Ve=i>>>0}else Pd(e)}function kh(e){const t=dg||(dg=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),Ve=0,Ce=t.getUint32(0,!0)}function em(e,t){const i=4294967296*t+(e>>>0);return Number.isSafeInteger(i)?i:ya(e,t)}function fg(e,t){return Ii(Nr()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):ya(e,t))}function im(e,t){return Nr()?Ii(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):Ii(Hh(e,t))}function ya(e,t){if(e>>>=0,(t>>>=0)<=2097151)var i=""+(4294967296*t+e);else Nr()?i=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(i=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),i+=8147497*t,t*=2,e>=1e7&&(i+=e/1e7>>>0,e%=1e7),i>=1e7&&(t+=i/1e7>>>0,i%=1e7),i=t+Ld(i)+Ld(e));return i}function Ld(e){return e=String(e),"0000000".slice(e.length)+e}function Hh(e,t){if(2147483648&t)if(Nr())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[i,n]=Vh(e,t);e="-"+ya(i,n)}else e=ya(e,t);return e}function tl(e){if(e.length<16)br(Number(e));else if(Nr())e=BigInt(e),Ce=Number(e&BigInt(4294967295))>>>0,Ve=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");Ve=Ce=0;const i=e.length;for(let n=t,s=(i-t)%6+t;s<=i;n=s,s+=6){const r=Number(e.slice(n,s));Ve*=1e6,Ce=1e6*Ce+r,Ce>=4294967296&&(Ve+=Math.trunc(Ce/4294967296),Ve>>>=0,Ce>>>=0)}if(t){const[n,s]=Vh(Ce,Ve);Ce=n,Ve=s}}}function Vh(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function nn(e){return Array.prototype.slice.call(e)}const Pa=typeof BigInt=="function"?BigInt.asIntN:void 0,pg=typeof BigInt=="function"?BigInt.asUintN:void 0,Ds=Number.isSafeInteger,el=Number.isFinite,Ar=Math.trunc,mg=Ii(0);function fa(e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function mn(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Ea(e){if(e!=null&&typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}function nm(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const gg=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function La(e){switch(typeof e){case"bigint":return!0;case"number":return el(e);case"string":return gg.test(e);default:return!1}}function zr(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return el(e)?0|e:void 0}function sm(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return el(e)?e>>>0:void 0}function rm(e){const t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(tl(e),Hh(Ce,Ve))}function Gh(e){if(e=Ar(e),!Ds(e)){br(e);var t=Ce,i=Ve;(e=2147483648&i)&&(i=~i>>>0,(t=1+~t>>>0)==0&&(i=i+1>>>0)),e=typeof(t=em(t,i))=="number"?e?-t:t:e?"-"+t:t}return e}function am(e){var t=Ar(Number(e));return Ds(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),rm(e))}function om(e){var t=Ar(Number(e));return Ds(t)?Ii(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Nr()?Ii(Pa(64,BigInt(e))):Ii(rm(e)))}function lm(e){return Ds(e)?e=Ii(Gh(e)):(e=Ar(e),Ds(e)?e=String(e):(br(e),e=Hh(Ce,Ve)),e=Ii(e)),e}function Do(e){const t=typeof e;return e==null?e:t==="bigint"?Ii(Pa(64,e)):La(e)?t==="string"?om(e):lm(e):void 0}function cm(e){if(typeof e!="string")throw Error();return e}function Ia(e){if(e!=null&&typeof e!="string")throw Error();return e}function si(e){return e==null||typeof e=="string"?e:void 0}function Wh(e,t,i,n){return e!=null&&e[yr]===Er?e:Array.isArray(e)?((n=(i=0|e[Ot])|32&n|2&n)!==i&&Je(e,n),new t(e)):(i?2&n?((e=t[bd])||(Ca((e=new t).v),e=t[bd]=e),t=e):t=new t:t=void 0,t)}function _g(e,t,i){if(t)t:{if(!La(t=e))throw wc("int64");switch(typeof t){case"string":t=om(t);break t;case"bigint":t=Ii(Pa(64,t));break t;default:t=lm(t)}}else t=Do(e);return(e=t)==null?i?mg:void 0:e}const xg={};let vg=(function(){try{return Jo(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Rl{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,i){return this.g.set(t,i),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,i){return this.g.forEach(t,i)}[Symbol.iterator](){return this.entries()}}const Mg=vg?(Object.setPrototypeOf(Rl.prototype,Map.prototype),Object.defineProperties(Rl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Rl):class extends Map{constructor(){super()}};function Id(e){return e}function Cl(e){if(2&e.J)throw Error("Cannot mutate an immutable Map")}var Nn=class extends Mg{constructor(e,t,i=Id,n=Id){super(),this.J=0|e[Ot],this.K=t,this.S=i,this.fa=this.K?Sg:n;for(let s=0;s<e.length;s++){const r=e[s],a=i(r[0],!1,!0);let o=r[1];t?o===void 0&&(o=null):o=n(r[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(e){return Sa(Array.from(super.entries(),e))}clear(){Cl(this),super.clear()}delete(e){return Cl(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new wd(e,yg,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new wd(e,Nn.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach(((i,n,s)=>{e.call(t,s.get(n),n,s)})):super.forEach(e,t)}set(e,t){return Cl(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var i=this.K;return i?((i=this.fa(t,!1,!0,i,this.ra,this.J))!==t&&super.set(e,i),i):t}}[Symbol.iterator](){return this.entries()}};function Sg(e,t,i,n,s,r){return e=Wh(e,n,i,r),s&&(e=qh(e)),e}function yg(e){return[e,this.get(e)]}let Eg;function Dd(){return Eg||(Eg=new Nn(Ca([]),void 0,void 0,void 0,xg))}function il(e){return Li?e[Li]:void 0}function Fo(e,t){for(const i in e)!isNaN(i)&&t(e,+i,e[i])}Nn.prototype.toJSON=void 0;var Pc=class{};const bg={Ka:!0};function Ag(e,t){t<100||Sr(ig,1)}function nl(e,t,i,n){const s=n!==void 0;n=!!n;var r,a=Li;!s&&Or&&a&&(r=e[a])&&Fo(r,Ag),a=[];var o=e.length;let l;r=4294967295;let c=!1;const h=!!(64&t),d=h?128&t?0:-1:void 0;1&t||(l=o&&e[o-1],l!=null&&typeof l=="object"&&l.constructor===Object?r=--o:l=void 0,!h||128&t||s||(c=!0,r=r-d+d)),t=void 0;for(var u=0;u<o;u++){let p=e[u];if(p!=null&&(p=i(p,n))!=null)if(h&&u>=r){const _=u-d;(t??(t={}))[_]=p}else a[u]=p}if(l)for(let p in l){if((o=l[p])==null||(o=i(o,n))==null)continue;let _;u=+p,h&&!Number.isNaN(u)&&(_=u+d)<r?a[_]=o:(t??(t={}))[p]=o}return t&&(c?a.push(t):a[r]=t),s&&Li&&(e=il(e))&&e instanceof Pc&&(a[Li]=(function(p){const _=new Pc;return Fo(p,((S,m,f)=>{_[m]=nn(f)})),_.da=p.da,_})(e)),a}function Tg(e){return e[0]=ba(e[0]),e[1]=ba(e[1]),e}function ba(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return Cc(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[Ot];return e.length===0&&1&t?void 0:nl(e,t,ba)}if(e!=null&&e[yr]===Er)return hm(e);if(e instanceof xn){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if(Yp){for(var i="",n=0,s=t.length-10240;n<s;)i+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));i+=String.fromCharCode.apply(null,n?t.subarray(n):t),t=btoa(i)}else{i===void 0&&(i=0),qp(),i=Xp[i],n=Array(Math.floor(t.length/3)),s=i[64]||"";let c=0,h=0;for(;c<t.length-2;c+=3){var r=t[c],a=t[c+1],o=t[c+2],l=i[r>>2];r=i[(3&r)<<4|a>>4],a=i[(15&a)<<2|o>>6],o=i[63&o],n[h++]=l+r+a+o}switch(l=0,o=s,t.length-c){case 2:o=i[(15&(l=t[c+1]))<<2]||s;case 1:t=t[c],n[h]=i[t>>2]+i[(3&t)<<4|l>>4]+o+s}t=n.join("")}e=e.g=t}return e}return e instanceof Nn?e=e.size!==0?e.V(Tg):void 0:void 0}return e}let wg,Rg;function hm(e){return nl(e=e.v,0|e[Ot],ba)}function As(e,t){return um(e,t[0],t[1])}function um(e,t,i,n=0){if(e==null){var s=32;i?(e=[i],s|=128):e=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(s=0|e[Ot],Md&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(Md)throw Error("carr");Sr(ng,5)})(),256&s)throw Error("farr");if(64&s)return(s|n)!==s&&Je(e,s|n),e;if(i&&(s|=128,i!==e[0]))throw Error("mid");t:{s|=64;var r=(i=e).length;if(r){var a=r-1;const l=i[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(r=+o)<a&&(i[r+t]=l[o],delete l[o]);s=-16760833&s|(1023&a)<<14;break t}}if(t){if((o=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return Je(e,64|s|n),e}function Cg(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var i=0|e[Ot];return e.length===0&&1&i?void 0:Fd(e,i,t)}if(e!=null&&e[yr]===Er)return Ud(e);if(e instanceof Nn){if(2&(t=e.J))return e;if(!e.size)return;if(i=Ca(e.V()),e.K)for(e=0;e<i.length;e++){const n=i[e];let s=n[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[yr]===Er?Ud(s):Array.isArray(s)?Fd(s,0|s[Ot],!!(32&t)):void 0,n[1]=s}return i}return e instanceof xn?e:void 0}function Fd(e,t,i){return 2&t||(!i||4096&t||16&t?e=kr(e,t,!1,i&&!(16&t)):(Ra(e,34),4&t&&Object.freeze(e))),e}function Xh(e,t,i){return e=new e.constructor(t),i&&(e.h=Is),e.m=Is,e}function Ud(e){const t=e.v,i=0|t[Ot];return Di(e,i)?e:Yh(e,t,i)?Xh(e,t):kr(t,i)}function kr(e,t,i,n){return n??(n=!!(34&t)),e=nl(e,t,Cg,n),n=32,i&&(n|=2),Je(e,t=16769217&t|n),e}function qh(e){const t=e.v,i=0|t[Ot];return Di(e,i)?Yh(e,t,i)?Xh(e,t,!0):new e.constructor(kr(t,i,!1)):e}function Hr(e){if(e.h!==Is)return!1;var t=e.v;return Ra(t=kr(t,0|t[Ot]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function Vr(e){if(!Hr(e)&&Di(e,0|e.v[Ot]))throw Error()}function ks(e,t){t===void 0&&(t=0|e[Ot]),32&t&&!(4096&t)&&Je(e,4096|t)}function Yh(e,t,i){return!!(2&i)||!(!(32&i)||4096&i)&&(Je(t,2|i),e.h=Is,!0)}const dm=Ii(0),Xn={};function Pe(e,t,i,n,s){if((t=On(e.v,t,i,s))!==null||n&&e.m!==Is)return t}function On(e,t,i,n){if(t===-1)return null;const s=t+(i?0:-1),r=e.length-1;let a,o;if(!(r<1+(i?0:-1))){if(s>=r)if(a=e[r],a!=null&&typeof a=="object"&&a.constructor===Object)i=a[t],o=!0;else{if(s!==r)return;i=a}else i=e[s];if(n&&i!=null){if((n=n(i))==null)return n;if(!Object.is(n,i))return o?a[t]=n:e[s]=n,n}return i}}function ve(e,t,i,n){Vr(e),Ke(e=e.v,0|e[Ot],t,i,n)}function Ke(e,t,i,n,s){const r=i+(s?0:-1);var a=e.length-1;if(a>=1+(s?0:-1)&&r>=a){const o=e[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[i]=n,t}return r<=a?(e[r]=n,t):(n!==void 0&&(i>=(a=(t??(t=0|e[Ot]))>>14&1023||536870912)?n!=null&&(e[a+(s?0:-1)]={[i]:n}):e[r]=n),t)}function Ss(){return sg===void 0?2:4}function ys(e,t,i,n,s){let r=e.v,a=0|r[Ot];n=Di(e,a)?1:n,s=!!s||n===3,n===2&&Hr(e)&&(r=e.v,a=0|r[Ot]);let o=(e=$h(r,t))===zs?7:0|e[Ot],l=Kh(o,a);var c=!(4&l);if(c){4&l&&(e=nn(e),o=0,l=ws(l,a),a=Ke(r,a,t,e));let h=0,d=0;for(;h<e.length;h++){const u=i(e[h]);u!=null&&(e[d++]=u)}d<h&&(e.length=d),i=-513&(4|l),l=i&=-1025,l&=-4097}return l!==o&&(Je(e,l),2&l&&Object.freeze(e)),fm(e,l,r,a,t,n,c,s)}function fm(e,t,i,n,s,r,a,o){let l=t;return r===1||r===4&&(2&t||!(16&t)&&32&n)?Ts(t)||((t|=!e.length||a&&!(4096&t)||32&n&&!(4096&t||16&t)?2:256)!==l&&Je(e,t),Object.freeze(e)):(r===2&&Ts(t)&&(e=nn(e),l=0,t=ws(t,n),n=Ke(i,n,s,e)),Ts(t)||(o||(t|=16),t!==l&&Je(e,t))),2&t||!(4096&t||16&t)||ks(i,n),e}function $h(e,t,i){return e=On(e,t,i),Array.isArray(e)?e:zs}function Kh(e,t){return 2&t&&(e|=2),1|e}function Ts(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function pm(e){return zh(e,!0)}function mm(e){e=nn(e);for(let t=0;t<e.length;t++){const i=e[t]=nn(e[t]);Array.isArray(i[1])&&(i[1]=Ca(i[1]))}return Sa(e)}function Qn(e,t,i,n){Vr(e),Ke(e=e.v,0|e[Ot],t,(n==="0"?Number(i)===0:i===n)?void 0:i)}function Gr(e,t,i){if(2&t)throw Error();const n=Br(t);let s=$h(e,i,n),r=s===zs?7:0|s[Ot],a=Kh(r,t);return(2&a||Ts(a)||16&a)&&(a===r||Ts(a)||Je(s,a),s=nn(s),r=0,a=ws(a,t),Ke(e,t,i,s,n)),a&=-13,a!==r&&Je(s,a),s}function Pl(e,t){var i=a0;return Jh(Zh(e=e.v),e,void 0,i)===t?t:-1}function Zh(e){if(Or)return e[Jr]??(e[Jr]=new Map);if(Jr in e)return e[Jr];const t=new Map;return Object.defineProperty(e,Jr,{value:t}),t}function gm(e,t,i,n,s){const r=Zh(e),a=Jh(r,e,t,i,s);return a!==n&&(a&&(t=Ke(e,t,a,void 0,s)),r.set(i,n)),t}function Jh(e,t,i,n,s){let r=e.get(n);if(r!=null)return r;r=0;for(let a=0;a<n.length;a++){const o=n[a];On(t,o,s)!=null&&(r!==0&&(i=Ke(t,i,r,void 0,s)),r=o)}return e.set(n,r),r}function jh(e,t,i){let n=0|e[Ot];const s=Br(n),r=On(e,i,s);let a;if(r!=null&&r[yr]===Er){if(!Di(r))return Hr(r),r.v;a=r.v}else Array.isArray(r)&&(a=r);if(a){const o=0|a[Ot];2&o&&(a=kr(a,o))}return a=As(a,t),a!==r&&Ke(e,n,i,a,s),a}function _m(e,t,i,n,s){let r=!1;if((n=On(e,n,s,(a=>{const o=Wh(a,i,!1,t);return r=o!==a&&o!=null,o})))!=null)return r&&!Di(n)&&ks(e,t),n}function me(e,t,i,n){let s=e.v,r=0|s[Ot];if((t=_m(s,r,t,i,n))==null)return t;if(r=0|s[Ot],!Di(e,r)){const a=qh(t);a!==t&&(Hr(e)&&(s=e.v,r=0|s[Ot]),r=Ke(s,r,i,t=a,n),ks(s,r))}return t}function xm(e,t,i,n,s,r,a,o){var l=Di(e,i);r=l?1:r,a=!!a||r===3,l=o&&!l,(r===2||l)&&Hr(e)&&(i=0|(t=e.v)[Ot]);var c=(e=$h(t,s))===zs?7:0|e[Ot],h=Kh(c,i);if(o=!(4&h)){var d=e,u=i;const p=!!(2&h);p&&(u|=2);let _=!p,S=!0,m=0,f=0;for(;m<d.length;m++){const v=Wh(d[m],n,!1,u);if(v instanceof n){if(!p){const y=Di(v);_&&(_=!y),S&&(S=y)}d[f++]=v}}f<m&&(d.length=f),h|=4,h=S?-4097&h:4096|h,h=_?8|h:-9&h}if(h!==c&&(Je(e,h),2&h&&Object.freeze(e)),l&&!(8&h||!e.length&&(r===1||r===4&&(2&h||!(16&h)&&32&i)))){for(Ts(h)&&(e=nn(e),h=ws(h,i),i=Ke(t,i,s,e)),n=e,l=h,c=0;c<n.length;c++)(d=n[c])!==(h=qh(d))&&(n[c]=h);l|=8,Je(e,h=l=n.length?4096|l:-4097&l)}return fm(e,h,t,i,s,r,o,a)}function Bn(e,t,i){const n=e.v;return xm(e,n,0|n[Ot],t,i,Ss(),!1,!0)}function vm(e){return e==null&&(e=void 0),e}function Xt(e,t,i,n,s){return ve(e,i,n=vm(n),s),n&&!Di(n)&&ks(e.v),e}function ga(e,t,i,n){t:{var s=n=vm(n);Vr(e);const r=e.v;let a=0|r[Ot];if(s==null){const o=Zh(r);if(Jh(o,r,a,i)!==t)break t;o.set(i,0)}else a=gm(r,a,i,t);Ke(r,a,t,s)}n&&!Di(n)&&ks(e.v)}function ws(e,t){return-273&(2&t?2|e:-3&e)}function Qh(e,t,i,n){var s=n;Vr(e),e=xm(e,n=e.v,0|n[Ot],i,t,2,!0),s=s??new i,e.push(s),t=i=e===zs?7:0|e[Ot],(s=Di(s))?(i&=-9,e.length===1&&(i&=-4097)):i|=4096,i!==t&&Je(e,i),s||ks(n)}function Yi(e,t,i){return zr(Pe(e,t,void 0,i))}function ke(e,t){return Pe(e,t,void 0,void 0,mn)??0}function zn(e,t,i){if(i!=null){if(typeof i!="number"||!el(i))throw wc("int32");i|=0}ve(e,t,i)}function Gt(e,t,i){ve(e,t,fa(i))}function Fi(e,t,i){Qn(e,t,Ia(i),"")}function Uo(e,t,i){{Vr(e);const a=e.v;let o=0|a[Ot];if(i==null)Ke(a,o,t);else{var n=e=i===zs?7:0|i[Ot],s=Ts(e),r=s||Object.isFrozen(i);for(s||(e=0),r||(i=nn(i),n=0,e=ws(e,o),r=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,s=0;s<i.length;s++){const l=i[s],c=cm(l);Object.is(l,c)||(r&&(i=nn(i),n=0,e=ws(e,o),r=!1),i[s]=c)}e!==n&&(r&&(i=nn(i),e=ws(e,o)),Je(i,e)),Ke(a,o,t,i)}}}function sl(e,t,i){Vr(e),ys(e,t,si,2,!0).push(cm(i))}var $s=class{constructor(e,t,i){if(this.buffer=e,i&&!t)throw Error();this.g=t}};function tu(e,t){if(typeof e=="string")return new $s($p(e),t);if(Array.isArray(e))return new $s(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new $s(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new $s(e,!1);if(e.constructor===xn)return t=Bh(e)||new Uint8Array(0),new $s(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new $s(e,!1);throw Error()}function eu(e,t){let i,n=0,s=0,r=0;const a=e.h;let o=e.g;do i=a[o++],n|=(127&i)<<r,r+=7;while(r<32&&128&i);if(r>32)for(s|=(127&i)>>4,r=3;r<32&&128&i;r+=7)i=a[o++],s|=(127&i)<<r;if(Rs(e,o),!(128&i))return t(n>>>0,s>>>0);throw Error()}function iu(e){let t=0,i=e.g;const n=i+10,s=e.h;for(;i<n;){const r=s[i++];if(t|=r,(128&r)==0)return Rs(e,i),!!(127&t)}throw Error()}function rs(e){const t=e.h;let i=e.g,n=t[i++],s=127&n;if(128&n&&(n=t[i++],s|=(127&n)<<7,128&n&&(n=t[i++],s|=(127&n)<<14,128&n&&(n=t[i++],s|=(127&n)<<21,128&n&&(n=t[i++],s|=n<<28,128&n&&128&t[i++]&&128&t[i++]&&128&t[i++]&&128&t[i++]&&128&t[i++])))))throw Error();return Rs(e,i),s}function Mn(e){return rs(e)>>>0}function No(e){var t=e.h;const i=e.g;var n=t[i],s=t[i+1];const r=t[i+2];return t=t[i+3],Rs(e,e.g+4),e=2*((s=(n<<0|s<<8|r<<16|t<<24)>>>0)>>31)+1,n=s>>>23&255,s&=8388607,n==255?s?NaN:e*(1/0):n==0?1401298464324817e-60*e*s:e*Math.pow(2,n-150)*(s+8388608)}function Pg(e){return rs(e)}function Rs(e,t){if(e.g=t,t>e.l)throw Error()}function Mm(e,t){if(t<0)throw Error();const i=e.g;if((t=i+t)>e.l)throw Error();return e.g=t,i}function Sm(e,t){if(t==0)return Ls();var i=Mm(e,t);return e.Y&&e.j?i=e.h.subarray(i,i+t):(e=e.h,i=i===(t=i+t)?new Uint8Array(0):ug?e.slice(i,t):new Uint8Array(e.subarray(i,t))),i.length==0?Ls():new xn(i,Mr)}var Nd=[];function ym(e,t,i,n){if(Oo.length){const s=Oo.pop();return s.o(n),s.g.init(e,t,i,n),s}return new Lg(e,t,i,n)}function Em(e){e.g.clear(),e.l=-1,e.h=-1,Oo.length<100&&Oo.push(e)}function bm(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var i=Mn(e.g);if(t=i>>>3,!((i&=7)>=0&&i<=5)||t<1)throw Error();return e.l=t,e.h=i,!0}function Ao(e){switch(e.h){case 0:e.h!=0?Ao(e):iu(e.g);break;case 1:Rs(e=e.g,e.g+8);break;case 2:if(e.h!=2)Ao(e);else{var t=Mn(e.g);Rs(e=e.g,e.g+t)}break;case 5:Rs(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!bm(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}Ao(e)}break;default:throw Error()}}function Da(e,t,i){const n=e.g.l;var s=Mn(e.g);let r=(s=e.g.g+s)-n;if(r<=0&&(e.g.l=s,i(t,e,void 0,void 0,void 0),r=s-e.g.g),r)throw Error();return e.g.g=s,e.g.l=n,t}function nu(e){var t=Mn(e.g),i=Mm(e=e.g,t);if(e=e.h,W1){var n,s=e;(n=wl)||(n=wl=new TextDecoder("utf-8",{fatal:!0})),t=i+t,s=i===0&&t===s.length?s:s.subarray(i,t);try{var r=n.decode(s)}catch(o){if(za===void 0){try{n.decode(new Uint8Array([128]))}catch{}try{n.decode(new Uint8Array([97])),za=!0}catch{za=!1}}throw!za&&(wl=void 0),o}}else{t=(r=i)+t,i=[];let o,l=null;for(;r<t;){var a=e[r++];a<128?i.push(a):a<224?r>=t?hs():(o=e[r++],a<194||(192&o)!=128?(r--,hs()):i.push((31&a)<<6|63&o)):a<240?r>=t-1?hs():(o=e[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(n=e[r++]))!=128?(r--,hs()):i.push((15&a)<<12|(63&o)<<6|63&n)):a<=244?r>=t-2?hs():(o=e[r++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(n=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,hs()):(a=(7&a)<<18|(63&o)<<12|(63&n)<<6|63&s,a-=65536,i.push(55296+(a>>10&1023),56320+(1023&a)))):hs(),i.length>=8192&&(l=vd(l,i),i.length=0)}r=vd(l,i)}return r}function Am(e){const t=Mn(e.g);return Sm(e.g,t)}function rl(e,t,i){var n=Mn(e.g);for(n=e.g.g+n;e.g.g<n;)i.push(t(e.g))}var Lg=class{constructor(e,t,i,n){if(Nd.length){const s=Nd.pop();s.init(e,t,i,n),e=s}else e=new class{constructor(s,r,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(s,r,a,o)}init(s,r,a,{Y:o=!1,ea:l=!1}={}){this.Y=o,this.ea=l,s&&(s=tu(s,this.ea),this.h=s.buffer,this.j=s.g,this.m=r||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,i,n);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(n)}o({ha:e=!1}={}){this.ha=e}},Oo=[];function Od(e){return e?/^\d+$/.test(e)?(tl(e),new Lc(Ce,Ve)):null:Ig||(Ig=new Lc(0,0))}var Lc=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let Ig;function Bd(e){return e?/^-?\d+$/.test(e)?(tl(e),new Ic(Ce,Ve)):null:Dg||(Dg=new Ic(0,0))}var Ic=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let Dg;function pr(e,t,i){for(;i>0||t>127;)e.g.push(127&t|128),t=(t>>>7|i<<25)>>>0,i>>>=7;e.g.push(t)}function Wr(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function al(e,t){if(t>=0)Wr(e,t);else{for(let i=0;i<9;i++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function su(e){var t=Ce;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Tr(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function $i(e,t,i){Wr(e.g,8*t+i)}function ru(e,t){return $i(e,t,2),t=e.g.end(),Tr(e,t),t.push(e.h),t}function au(e,t){var i=t.pop();for(i=e.h+e.g.length()-i;i>127;)t.push(127&i|128),i>>>=7,e.h++;t.push(i),e.h++}function ol(e,t,i){$i(e,t,2),Wr(e.g,i.length),Tr(e,e.g.end()),Tr(e,i)}function Bo(e,t,i,n){i!=null&&(t=ru(e,t),n(i,e),au(e,t))}function En(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var ou=En(),Tm=En(),lu=En(),cu=En(),hu=En(),wm=En(),Fg=En(),ll=En(),Rm=En(),Cm=En();function bn(e,t,i){var n=e.v;Li&&Li in n&&(n=n[Li])&&delete n[t.g],t.h?t.j(e,t.h,t.g,i,t.l):t.j(e,t.g,i,t.l)}var Bt=class{constructor(e,t){this.v=um(e,t,void 0,2048)}toJSON(){return hm(this)}j(){var s;var e=m_,t=this.v,i=e.g,n=Li;if(Or&&n&&((s=t[n])==null?void 0:s[i])!=null&&Sr(eg,3),t=e.g,Ad&&Li&&Ad===void 0&&(n=(i=this.v)[Li])&&(n=n.da))try{n(i,t,bg)}catch(r){Wp(r)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){const e=this.v,t=0|e[Ot];return Yh(this,e,t)?Xh(this,e,!0):new this.constructor(kr(e,t,!1))}};Bt.prototype[yr]=Er,Bt.prototype.toString=function(){return this.v.toString()};var Xr=class{constructor(e,t,i){this.g=e,this.h=t,e=ou,this.l=!!e&&i===e||!1}};function cl(e,t){return new Xr(e,t,ou)}function Pm(e,t,i,n,s){Bo(e,i,Fm(t,n),s)}const Ug=cl((function(e,t,i,n,s){return e.h===2&&(Da(e,jh(t,n,i),s),!0)}),Pm),Ng=cl((function(e,t,i,n,s){return e.h===2&&(Da(e,jh(t,n,i),s),!0)}),Pm);var hl=Symbol(),ul=Symbol(),Dc=Symbol(),zd=Symbol(),kd=Symbol();let Lm,Im;function Hs(e,t,i,n){var s=n[e];if(s)return s;(s={}).qa=n,s.T=(function(d){switch(typeof d){case"boolean":return wg||(wg=[0,void 0,!0]);case"number":return d>0?void 0:d===0?Rg||(Rg=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}})(n[0]);var r=n[1];let a=1;r&&r.constructor===Object&&(s.ba=r,typeof(r=n[++a])=="function"&&(s.ma=!0,Lm??(Lm=r),Im??(Im=n[a+1]),r=n[a+=2]));const o={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)o[r[l]]=r;r=n[++a]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=n[++a]);var c=void 0;if(r instanceof Xr?d=r:(d=Ug,a--),d==null?void 0:d.l){r=n[++a],c=n;var h=a;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=n[++a])=="number"&&r<0&&(h-=r,r=n[++a]);l<h;l++){const u=o[l];c?i(s,l,d,c,u):t(s,l,d,u)}}return n[e]=s}function Dm(e){return Array.isArray(e)?e[0]instanceof Xr?e:[Ng,e]:[e,void 0]}function Fm(e,t){return e instanceof Bt?e.v:Array.isArray(e)?As(e,t):void 0}function uu(e,t,i,n){const s=i.g;e[t]=n?(r,a,o)=>s(r,a,o,n):s}function du(e,t,i,n,s){const r=i.g;let a,o;e[t]=(l,c,h)=>r(l,c,h,o||(o=Hs(ul,uu,du,n).T),a||(a=fu(n)),s)}function fu(e){let t=e[Dc];if(t!=null)return t;const i=Hs(ul,uu,du,e);return t=i.ma?(n,s)=>Lm(n,s,i):(n,s)=>{for(;bm(s)&&s.h!=4;){var r=s.l,a=i[r];if(a==null){var o=i.ba;o&&(o=o[r])&&(o=Bg(o))!=null&&(a=i[r]=o)}if(a==null||!a(s,n,r)){if(a=(o=s).m,Ao(o),o.ha)var l=void 0;else l=o.g.g-a,o.g.g=a,l=Sm(o.g,l);a=void 0,o=n,l&&((a=o[Li]??(o[Li]=new Pc))[r]??(a[r]=[])).push(l)}}return(n=il(n))&&(n.da=i.qa[kd]),!0},e[Dc]=t,e[kd]=Og.bind(e),t}function Og(e,t,i,n){var s=this[ul];const r=this[Dc],a=As(void 0,s.T),o=il(e);if(o){var l=!1,c=s.ba;if(c){if(s=(h,d,u)=>{if(u.length!==0)if(c[d])for(const p of u){h=ym(p);try{l=!0,r(a,h)}finally{Em(h)}}else n==null||n(e,d,u)},t==null)Fo(o,s);else if(o!=null){const h=o[t];h&&s(o,t,h)}if(l){let h=0|e[Ot];if(2&h&&2048&h&&!(i!=null&&i.Ka))throw Error();const d=Br(h),u=(p,_)=>{if(On(e,p,d)!=null){if((i==null?void 0:i.Qa)===1)return;throw Error()}_!=null&&(h=Ke(e,h,p,_,d)),delete o[p]};t==null?Qp(a,0|a[Ot],((p,_)=>{u(p,_)})):u(t,On(a,t,d))}}}}function Bg(e){const t=(e=Dm(e))[0].g;if(e=e[1]){const i=fu(e),n=Hs(ul,uu,du,e).T;return(s,r,a)=>t(s,r,a,n,i)}return t}function dl(e,t,i){e[t]=i.h}function fl(e,t,i,n){let s,r;const a=i.h;e[t]=(o,l,c)=>a(o,l,c,r||(r=Hs(hl,dl,fl,n).T),s||(s=Um(n)))}function Um(e){let t=e[zd];if(!t){const i=Hs(hl,dl,fl,e);t=(n,s)=>Nm(n,s,i),e[zd]=t}return t}function Nm(e,t,i){Qp(e,0|e[Ot],((n,s)=>{if(s!=null){var r=(function(a,o){var l=a[o];if(l)return l;if((l=a.ba)&&(l=l[o])){var c=(l=Dm(l))[0].h;if(l=l[1]){const h=Um(l),d=Hs(hl,dl,fl,l).T;l=a.ma?Im(d,h):(u,p,_)=>c(u,p,_,d,h)}else l=c;return a[o]=l}})(i,n);r?r(t,s,n):n<500||Sr(Rc,3)}})),(e=il(e))&&Fo(e,((n,s,r)=>{for(Tr(t,t.g.end()),n=0;n<r.length;n++)Tr(t,Bh(r[n])||new Uint8Array(0))}))}const zg=Ii(0);function qr(e,t){if(Array.isArray(t)){var i=0|t[Ot];if(4&i)return t;for(var n=0,s=0;n<t.length;n++){const r=e(t[n]);r!=null&&(t[s++]=r)}return s<n&&(t.length=s),(e=-1537&(5|i))!==i&&Je(t,e),2&e&&Object.freeze(t),t}}function di(e,t,i){return new Xr(e,t,i)}function Yr(e,t,i){return new Xr(e,t,i)}function fi(e,t,i){Ke(e,0|e[Ot],t,i,Br(0|e[Ot]))}var kg=cl((function(e,t,i,n,s){if(e.h!==2)return!1;if(e=nn(e=Da(e,As([void 0,void 0],n),s)),s=Br(n=0|t[Ot]),2&n)throw Error();let r=On(t,i,s);if(r instanceof Nn)(2&r.J)!=0?(r=r.V(),r.push(e),Ke(t,n,i,r,s)):r.Ma(e);else if(Array.isArray(r)){var a=0|r[Ot];8192&a||Je(r,a|=8192),2&a&&(r=mm(r),Ke(t,n,i,r,s)),r.push(e)}else Ke(t,n,i,Sa([e]),s);return!0}),(function(e,t,i,n,s){if(t instanceof Nn)t.forEach(((r,a)=>{Bo(e,i,As([a,r],n),s)}));else if(Array.isArray(t)){for(let r=0;r<t.length;r++){const a=t[r];Array.isArray(a)&&Bo(e,i,As(a,n),s)}Sa(t)}}));function Om(e,t,i){(t=mn(t))!=null&&($i(e,i,5),e=e.g,kh(t),su(e))}function Bm(e,t,i){if(t=(function(n){if(n==null)return n;const s=typeof n;if(s==="bigint")return String(Pa(64,n));if(La(n)){if(s==="string")return am(n);if(s==="number")return Gh(n)}})(t),t!=null&&(typeof t=="string"&&Bd(t),t!=null))switch($i(e,i,0),typeof t){case"number":e=e.g,br(t),pr(e,Ce,Ve);break;case"bigint":i=BigInt.asUintN(64,t),i=new Ic(Number(i&BigInt(4294967295)),Number(i>>BigInt(32))),pr(e.g,i.h,i.g);break;default:i=Bd(t),pr(e.g,i.h,i.g)}}function zm(e,t,i){(t=zr(t))!=null&&t!=null&&($i(e,i,0),al(e.g,t))}function km(e,t,i){(t=nm(t))!=null&&($i(e,i,0),e.g.g.push(t?1:0))}function Hm(e,t,i){(t=si(t))!=null&&ol(e,i,Gp(t))}function Vm(e,t,i,n,s){Bo(e,i,Fm(t,n),s)}function Gm(e,t,i){(t=t==null||typeof t=="string"||t instanceof xn?t:void 0)!=null&&ol(e,i,tu(t,!0).buffer)}function Wm(e,t,i){(t=sm(t))!=null&&t!=null&&($i(e,i,0),Wr(e.g,t))}function Xm(e,t,i){return(e.h===5||e.h===2)&&(t=Gr(t,0|t[Ot],i),e.h==2?rl(e,No,t):t.push(No(e.g)),!0)}var Ge=di((function(e,t,i){return e.h===5&&(fi(t,i,No(e.g)),!0)}),Om,ll),Hg=Yr(Xm,(function(e,t,i){if((t=qr(mn,t))!=null)for(let a=0;a<t.length;a++){var n=e,s=i,r=t[a];r!=null&&($i(n,s,5),n=n.g,kh(r),su(n))}}),ll),pu=Yr(Xm,(function(e,t,i){if((t=qr(mn,t))!=null&&t.length){$i(e,i,2),Wr(e.g,4*t.length);for(let n=0;n<t.length;n++)i=e.g,kh(t[n]),su(i)}}),ll),Vg=di((function(e,t,i){return e.h===5&&(fi(t,i,(e=No(e.g))===0?void 0:e),!0)}),Om,ll),as=di((function(e,t,i){return e.h!==0?e=!1:(fi(t,i,eu(e.g,im)),e=!0),e}),Bm,wm),Ll=di((function(e,t,i){return e.h!==0?t=!1:(fi(t,i,(e=eu(e.g,im))===zg?void 0:e),t=!0),t}),Bm,wm),Gg=di((function(e,t,i){return e.h!==0?e=!1:(fi(t,i,eu(e.g,fg)),e=!0),e}),(function(e,t,i){if(t=(function(n){if(n==null)return n;var s=typeof n;if(s==="bigint")return String(pg(64,n));if(La(n)){if(s==="string")return s=Ar(Number(n)),Ds(s)&&s>=0?n=String(s):((s=n.indexOf("."))!==-1&&(n=n.substring(0,s)),(s=n[0]!=="-"&&((s=n.length)<20||s===20&&n<="18446744073709551615"))||(tl(n),n=ya(Ce,Ve))),n;if(s==="number")return(n=Ar(n))>=0&&Ds(n)||(br(n),n=em(Ce,Ve)),n}})(t),t!=null&&(typeof t=="string"&&Od(t),t!=null))switch($i(e,i,0),typeof t){case"number":e=e.g,br(t),pr(e,Ce,Ve);break;case"bigint":i=BigInt.asUintN(64,t),i=new Lc(Number(i&BigInt(4294967295)),Number(i>>BigInt(32))),pr(e.g,i.h,i.g);break;default:i=Od(t),pr(e.g,i.h,i.g)}}),Fg),Xe=di((function(e,t,i){return e.h===0&&(fi(t,i,rs(e.g)),!0)}),zm,cu),Fa=Yr((function(e,t,i){return(e.h===0||e.h===2)&&(t=Gr(t,0|t[Ot],i),e.h==2?rl(e,rs,t):t.push(rs(e.g)),!0)}),(function(e,t,i){if((t=qr(zr,t))!=null&&t.length){i=ru(e,i);for(let n=0;n<t.length;n++)al(e.g,t[n]);au(e,i)}}),cu),fr=di((function(e,t,i){return e.h===0&&(fi(t,i,(e=rs(e.g))===0?void 0:e),!0)}),zm,cu),Le=di((function(e,t,i){return e.h===0&&(fi(t,i,iu(e.g)),!0)}),km,Tm),Cs=di((function(e,t,i){return e.h===0&&(fi(t,i,(e=iu(e.g))===!1?void 0:e),!0)}),km,Tm),li=Yr((function(e,t,i){return e.h===2&&(e=nu(e),Gr(t,0|t[Ot],i).push(e),!0)}),(function(e,t,i){if((t=qr(si,t))!=null)for(let a=0;a<t.length;a++){var n=e,s=i,r=t[a];r!=null&&ol(n,s,Gp(r))}}),lu),ts=di((function(e,t,i){return e.h===2&&(fi(t,i,(e=nu(e))===""?void 0:e),!0)}),Hm,lu),ye=di((function(e,t,i){return e.h===2&&(fi(t,i,nu(e)),!0)}),Hm,lu),ii=(function(e,t,i=ou){return new Xr(e,t,i)})((function(e,t,i,n,s){return e.h===2&&(n=As(void 0,n),Gr(t,0|t[Ot],i).push(n),Da(e,n,s),!0)}),(function(e,t,i,n,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)Vm(e,t[r],i,n,s);1&(e=0|t[Ot])||Je(t,1|e)}})),we=cl((function(e,t,i,n,s,r){if(e.h!==2)return!1;let a=0|t[Ot];return gm(t,a,r,i,Br(a)),Da(e,t=jh(t,n,i),s),!0}),Vm),qm=di((function(e,t,i){return e.h===2&&(fi(t,i,Am(e)),!0)}),Gm,Rm),Wg=Yr((function(e,t,i){return(e.h===0||e.h===2)&&(t=Gr(t,0|t[Ot],i),e.h==2?rl(e,Mn,t):t.push(Mn(e.g)),!0)}),(function(e,t,i){if((t=qr(sm,t))!=null)for(let a=0;a<t.length;a++){var n=e,s=i,r=t[a];r!=null&&($i(n,s,0),Wr(n.g,r))}}),hu),Xg=di((function(e,t,i){return e.h===0&&(fi(t,i,(e=Mn(e.g))===0?void 0:e),!0)}),Wm,hu),ci=di((function(e,t,i){return e.h===0&&(fi(t,i,rs(e.g)),!0)}),(function(e,t,i){(t=zr(t))!=null&&(t=parseInt(t,10),$i(e,i,0),al(e.g,t))}),Cm);class qg{constructor(t,i){var n=Oi;this.g=t,this.h=i,this.m=me,this.j=Xt,this.defaultValue=void 0,this.l=n.Oa!=null?tm:void 0}register(){Jo(this)}}function An(e,t){return new qg(e,t)}function ls(e,t){return(i,n)=>{{const r={ea:!0};n&&Object.assign(r,n),i=ym(i,void 0,void 0,r);try{const a=new e,o=a.v;fu(t)(o,i);var s=a}finally{Em(i)}}return s}}function pl(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Nm(this.v,t,Hs(hl,dl,fl,e)),Tr(t,t.g.end());const i=new Uint8Array(t.h),n=t.l,s=n.length;let r=0;for(let a=0;a<s;a++){const o=n[a];i.set(o,r),r+=o.length}return t.l=[i],i}}var Hd=class extends Bt{constructor(e){super(e)}},Vd=[0,ts,di((function(e,t,i){return e.h===2&&(fi(t,i,(e=Am(e))===Ls()?void 0:e),!0)}),(function(e,t,i){if(t!=null){if(t instanceof Bt){const n=t.Ra;return void(n?(t=n(t),t!=null&&ol(e,i,tu(t,!0).buffer)):Sr(Rc,3))}if(Array.isArray(t))return void Sr(Rc,3)}Gm(e,t,i)}),Rm)];let Il,Gd=globalThis.trustedTypes;function Wd(e){var t;return Il===void 0&&(Il=(function(){let i=null;if(!Gd)return i;try{const n=s=>s;i=Gd.createPolicy("goog#html",{createHTML:n,createScript:n,createScriptURL:n})}catch{}return i})()),e=(t=Il)?t.createScriptURL(e):e,new class{constructor(i){this.g=i}toString(){return this.g+""}}(e)}function ka(e,...t){if(t.length===0)return Wd(e[0]);let i=e[0];for(let n=0;n<t.length;n++)i+=encodeURIComponent(t[n])+e[n+1];return Wd(i)}var Ym=[0,Xe,ci,Le,-1,Fa,ci,-1,Le],Yg=class extends Bt{constructor(e){super(e)}},$m=[0,Le,ye,Le,ci,-1,Yr((function(e,t,i){return(e.h===0||e.h===2)&&(t=Gr(t,0|t[Ot],i),e.h==2?rl(e,Pg,t):t.push(rs(e.g)),!0)}),(function(e,t,i){if((t=qr(zr,t))!=null&&t.length){i=ru(e,i);for(let n=0;n<t.length;n++)al(e.g,t[n]);au(e,i)}}),Cm),ye,-1,[0,Le,-1],ci,Le,-1],Km=[0,3,Le,-1,2,[0,[2],Xe,we,[0,di((function(e,t,i){return e.h===0&&(fi(t,i,Mn(e.g)),!0)}),Wm,hu)]],[0,ci,Le,ci,Le,ci,Le,ye,-1],[0,[3,4],ye,-1,we,[0,Xe],we,[0,ci]],[0]],Zm=[0,ye,-2],Xd=class extends Bt{constructor(e){super(e)}},Jm=[0],jm=[0,Xe,Le,1,Le,-4],Oi=class extends Bt{constructor(e){super(e,2)}},Ze={};Ze[336783863]=[0,ye,Le,-1,Xe,[0,[1,2,3,4,5,6,7,8,9],we,Jm,we,$m,we,Zm,we,jm,we,Ym,we,[0,ye,-2],we,[0,ye,ci],we,Km,we,[0,ci,-1,Le]],[0,ye],Le,[0,[1,3],[2,4],we,[0,Fa],-1,we,[0,li],-1,ii,[0,ye,-1]],ye];var qd=[0,Ll,-1,Cs,-3,Ll,Fa,ts,fr,Ll,-1,Cs,fr,Cs,-2,ts];function Re(e,t){sl(e,3,t)}function le(e,t){sl(e,4,t)}var bi=class extends Bt{constructor(e){super(e,500)}o(e){return Xt(this,0,7,e)}},_a=[-1,{}],Yd=[0,ye,1,_a],$d=[0,ye,li,_a];function Ki(e,t){Qh(e,1,bi,t)}function Ie(e,t){sl(e,10,t)}function ge(e,t){sl(e,15,t)}var Bi=class extends Bt{constructor(e){super(e,500)}o(e){return Xt(this,0,1001,e)}},Qm=[-500,ii,[-500,ts,-1,li,-3,[-2,Ze,Le],ii,Vd,fr,-1,Yd,$d,ii,[0,ts,Cs],ts,qd,fr,li,987,li],4,ii,[-500,ye,-1,[-1,{}],998,ye],ii,[-500,ye,li,-1,[-2,{},Le],997,li,-1],fr,ii,[-500,ye,li,_a,998,li],li,fr,Yd,$d,ii,[0,ts,-1,_a],li,-2,qd,ts,-1,Cs,[0,Cs,Xg],978,_a,ii,Vd];Bi.prototype.g=pl(Qm);var $g=ls(Bi,Qm),Kg=class extends Bt{constructor(e){super(e)}},t0=class extends Bt{constructor(e){super(e)}g(){return Bn(this,Kg,1)}},e0=[0,ii,[0,Xe,Ge,ye,-1]],ml=ls(t0,e0),Zg=class extends Bt{constructor(e){super(e)}},Jg=class extends Bt{constructor(e){super(e)}},Dl=class extends Bt{constructor(e){super(e)}l(){return me(this,Zg,2)}g(){return Bn(this,Jg,5)}},i0=ls(class extends Bt{constructor(e){super(e)}},[0,li,Fa,pu,[0,ci,[0,Xe,-3],[0,Ge,-3],[0,Xe,-1,[0,ii,[0,Xe,-2]]],ii,[0,Ge,-1,ye,Ge]],ye,-1,as,ii,[0,Xe,Ge],li,as]),n0=class extends Bt{constructor(e){super(e)}},mr=ls(class extends Bt{constructor(e){super(e)}},[0,ii,[0,Ge,-4]]),s0=class extends Bt{constructor(e){super(e)}},Ua=ls(class extends Bt{constructor(e){super(e)}},[0,ii,[0,Ge,-4]]),jg=class extends Bt{constructor(e){super(e)}},Qg=[0,Xe,-1,pu,ci],r0=class extends Bt{constructor(e){super(e)}};r0.prototype.g=pl([0,Ge,-4,as]);var t_=class extends Bt{constructor(e){super(e)}},e_=ls(class extends Bt{constructor(e){super(e)}},[0,ii,[0,1,Xe,ye,e0],as]),Kd=class extends Bt{constructor(e){super(e)}},i_=class extends Bt{constructor(e){super(e)}na(){const e=Pe(this,1,void 0,void 0,pm);return e??Ls()}},n_=class extends Bt{constructor(e){super(e)}},a0=[1,2],s_=ls(class extends Bt{constructor(e){super(e)}},[0,ii,[0,a0,we,[0,pu],we,[0,qm],Xe,ye],as]),mu=class extends Bt{constructor(e){super(e)}},o0=[0,ye,Xe,Ge,li,-1],Zd=class extends Bt{constructor(e){super(e)}},r_=[0,Le,-1],Jd=class extends Bt{constructor(e){super(e)}},To=[1,2,3,4,5,6],zo=class extends Bt{constructor(e){super(e)}g(){return Pe(this,1,void 0,void 0,pm)!=null}l(){return si(Pe(this,2))!=null}},Ne=class extends Bt{constructor(e){super(e)}g(){return nm(Pe(this,2))??!1}},l0=[0,qm,ye,[0,Xe,as,-1],[0,Gg,as]],We=[0,l0,Le,[0,To,we,jm,we,$m,we,Ym,we,Jm,we,Zm,we,Km],ci],gl=class extends Bt{constructor(e){super(e)}},gu=[0,We,Ge,-1,Xe],a_=An(502141897,gl);Ze[502141897]=gu;var o_=ls(class extends Bt{constructor(e){super(e)}},[0,[0,ci,-1,Hg,Wg],Qg]),c0=class extends Bt{constructor(e){super(e)}},h0=class extends Bt{constructor(e){super(e)}},Fc=[0,We,Ge,[0,We],Le],l_=An(508968150,h0);Ze[508968150]=[0,We,gu,Fc,Ge,[0,[0,l0]]],Ze[508968149]=Fc;var Ks=class extends Bt{constructor(e){super(e)}l(){return me(this,mu,2)}g(){ve(this,2)}},u0=[0,We,o0];Ze[478825465]=u0;var c_=class extends Bt{constructor(e){super(e)}},d0=class extends Bt{constructor(e){super(e)}},_u=class extends Bt{constructor(e){super(e)}},xu=class extends Bt{constructor(e){super(e)}},f0=class extends Bt{constructor(e){super(e)}},jd=[0,We,[0,We],u0,-1],p0=[0,We,Ge,Xe],vu=[0,We,Ge],m0=[0,We,p0,vu,Ge],h_=An(479097054,f0);Ze[479097054]=[0,We,m0,jd],Ze[463370452]=jd,Ze[464864288]=p0;var u_=An(462713202,xu);Ze[462713202]=m0,Ze[474472470]=vu;var d_=class extends Bt{constructor(e){super(e)}},g0=class extends Bt{constructor(e){super(e)}},_0=class extends Bt{constructor(e){super(e)}},x0=class extends Bt{constructor(e){super(e)}},Mu=[0,We,Ge,-1,Xe],Uc=[0,We,Ge,Le];x0.prototype.g=pl([0,We,vu,[0,We],gu,Fc,Mu,Uc]);var v0=class extends Bt{constructor(e){super(e)}},f_=An(456383383,v0);Ze[456383383]=[0,We,o0];var M0=class extends Bt{constructor(e){super(e)}},p_=An(476348187,M0);Ze[476348187]=[0,We,r_];var S0=class extends Bt{constructor(e){super(e)}},Qd=class extends Bt{constructor(e){super(e)}},y0=[0,ci,-1],m_=An(458105876,class extends Bt{constructor(e){super(e)}g(){let e;var t=this.v;const i=0|t[Ot];return e=Di(this,i),t=(function(n,s,r,a){var o=Qd;!a&&Hr(n)&&(r=0|(s=n.v)[Ot]);var l=On(s,2);if(n=!1,l==null){if(a)return Dd();l=[]}else if(l.constructor===Nn){if(!(2&l.J)||a)return l;l=l.V()}else Array.isArray(l)?n=!!(2&(0|l[Ot])):l=[];if(a){if(!l.length)return Dd();n||(n=!0,Ca(l))}else n&&(n=!1,Sa(l),l=mm(l));return!n&&32&r&&Ra(l,32),r=Ke(s,r,2,a=new Nn(l,o,_g,void 0)),n||ks(s,r),a})(this,t,i,e),!e&&Qd&&(t.ra=!0),t}});Ze[458105876]=[0,y0,kg,[!0,as,[0,ye,-1,li]],[0,Fa,Le,ci]];var Su=class extends Bt{constructor(e){super(e)}},E0=An(458105758,Su);Ze[458105758]=[0,We,ye,y0];var Fl=class extends Bt{constructor(e){super(e)}},tf=[0,Vg,-1,Cs],g_=class extends Bt{constructor(e){super(e)}},b0=class extends Bt{constructor(e){super(e)}},Nc=[1,2];b0.prototype.g=pl([0,Nc,we,tf,we,[0,ii,tf]]);var A0=class extends Bt{constructor(e){super(e)}},__=An(443442058,A0);Ze[443442058]=[0,We,ye,Xe,Ge,li,-1,Le,Ge],Ze[514774813]=Mu;var T0=class extends Bt{constructor(e){super(e)}},x_=An(516587230,T0);function Oc(e,t){return t=t?t.clone():new mu,e.displayNamesLocale!==void 0?ve(t,1,Ia(e.displayNamesLocale)):e.displayNamesLocale===void 0&&ve(t,1),e.maxResults!==void 0?zn(t,2,e.maxResults):"maxResults"in e&&ve(t,2),e.scoreThreshold!==void 0?Gt(t,3,e.scoreThreshold):"scoreThreshold"in e&&ve(t,3),e.categoryAllowlist!==void 0?Uo(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&ve(t,4),e.categoryDenylist!==void 0?Uo(t,5,e.categoryDenylist):"categoryDenylist"in e&&ve(t,5),t}function w0(e){const t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function yu(e,t=-1,i=""){return{categories:e.map((n=>({index:Yi(n,1)??0??-1,score:ke(n,2)??0,categoryName:si(Pe(n,3))??""??"",displayName:si(Pe(n,4))??""??""}))),headIndex:t,headName:i}}function v_(e){const t={classifications:Bn(e,t_,1).map((i=>{var n;return yu(((n=me(i,t0,4))==null?void 0:n.g())??[],Yi(i,2)??0,si(Pe(i,3))??"")}))};return(function(i){return i==null?i:typeof i=="bigint"?(Cc(i)?i=Number(i):(i=Pa(64,i),i=Cc(i)?Number(i):String(i)),i):La(i)?typeof i=="number"?Gh(i):am(i):void 0})(Pe(e,2,void 0,void 0,Do))!=null&&(t.timestampMs=w0(Pe(e,2,void 0,void 0,Do)??dm)),t}function R0(e){var a,o;var t=ys(e,3,mn,Ss()),i=ys(e,2,zr,Ss()),n=ys(e,1,si,Ss()),s=ys(e,9,si,Ss());const r={categories:[],keypoints:[]};for(let l=0;l<t.length;l++)r.categories.push({score:t[l],index:i[l]??-1,categoryName:n[l]??"",displayName:s[l]??""});if((t=(a=me(e,Dl,4))==null?void 0:a.l())&&(r.boundingBox={originX:Yi(t,1,Xn)??0,originY:Yi(t,2,Xn)??0,width:Yi(t,3,Xn)??0,height:Yi(t,4,Xn)??0,angle:0}),(o=me(e,Dl,4))==null?void 0:o.g().length)for(const l of me(e,Dl,4).g())r.keypoints.push({x:Pe(l,1,void 0,Xn,mn)??0,y:Pe(l,2,void 0,Xn,mn)??0,score:Pe(l,4,void 0,Xn,mn)??0,label:si(Pe(l,3,void 0,Xn))??""});return r}function _l(e){const t=[];for(const i of Bn(e,s0,1))t.push({x:ke(i,1)??0,y:ke(i,2)??0,z:ke(i,3)??0,visibility:ke(i,4)??0});return t}function xa(e){const t=[];for(const i of Bn(e,n0,1))t.push({x:ke(i,1)??0,y:ke(i,2)??0,z:ke(i,3)??0,visibility:ke(i,4)??0});return t}function ef(e){return Array.from(e,(t=>t>127?t-256:t))}function nf(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let i=0,n=0,s=0;for(let r=0;r<e.length;r++)i+=e[r]*t[r],n+=e[r]*e[r],s+=t[r]*t[r];if(n<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return i/Math.sqrt(n*s)}let Ha;Ze[516587230]=[0,We,Mu,Uc,Ge],Ze[518928384]=Uc;const M_=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function C0(e){if(e)return!0;if(Ha===void 0)try{await WebAssembly.instantiate(M_),Ha=!0}catch{Ha=!1}return Ha}async function Va(e,t,i){return{wasmLoaderPath:`${t}/${e}_${i=`wasm${i?"_module":""}${await C0(i)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${i}.wasm`}}var dr=class{};function P0(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function sf(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((i,n)=>{t.addEventListener("load",(()=>{i()}),!1),t.addEventListener("error",(s=>{n(s)}),!1),document.body.appendChild(t)}))}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{const i=self.import;i?await i(e.toString()):await import(e.toString())}}}function L0(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function kt(e,t,i){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),i(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function rf(e,t,i){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(i?e.i._bindTextureToStream(i):e.i._bindTextureToCanvas(),!(i=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1);const[n,s]=L0(t);return!e.l||n===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=n,e.i.canvas.height=s),[n,s]}function af(e,t,i){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const n=new Uint32Array(t.length);for(let s=0;s<t.length;s++)n[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*n.length),e.i.HEAPU32.set(n,t>>2),i(t);for(const s of n)e.i._free(s);e.i._free(t)}function hn(e,t,i){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=i}function qn(e,t,i){let n=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,a)=>{r?(i(n,a),n=[]):n.push(s)}}dr.forVisionTasks=function(e,t=!1){return Va("vision",e??ka``,t)},dr.forTextTasks=function(e,t=!1){return Va("text",e??ka``,t)},dr.forGenAiTasks=function(e,t=!1){return Va("genai",e??ka``,t)},dr.forAudioTasks=function(e,t=!1){return Va("audio",e??ka``,t)},dr.isSimdSupported=function(e=!1){return C0(e)};async function S_(e,t,i,n){return e=await(async(s,r,a,o,l)=>{if(r&&await sf(r),!self.ModuleFactory||a&&(await sf(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,o)})(e,i.wasmLoaderPath,i.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?i.wasmBinaryPath.toString():i.assetBinaryPath&&s.endsWith(".data")?i.assetBinaryPath.toString():s}),await e.o(n),e}function Ul(e,t){const i=me(e.baseOptions,zo,1)||new zo;typeof t=="string"?(ve(i,2,Ia(t)),ve(i,1)):t instanceof Uint8Array&&(ve(i,1,zh(t,!1)),ve(i,2)),Xt(e.baseOptions,0,1,i)}function of(e){try{const t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map((i=>i.message)).join(", "))}finally{e.H=[]}}function It(e,t){e.C=Math.max(e.C,t)}function xl(e,t){e.B=new bi,Fi(e.B,2,"PassThroughCalculator"),Re(e.B,"free_memory"),le(e.B,"free_memory_unused_out"),Ie(t,"free_memory"),Ki(t,e.B)}function wr(e,t){Re(e.B,t),le(e.B,t+"_unused_out")}function vl(e){e.g.addBoolToStream(!0,"free_memory",e.C)}var Bc=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var i,n,s,r,a,o;if(t){const l=e.baseOptions||{};if((i=e.baseOptions)!=null&&i.modelAssetBuffer&&((n=e.baseOptions)!=null&&n.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=me(this.baseOptions,zo,1))!=null&&s.g()||(r=me(this.baseOptions,zo,1))!=null&&r.l()||(a=e.baseOptions)!=null&&a.modelAssetBuffer||(o=e.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(c,h){let d=me(c.baseOptions,Jd,3);if(!d){var u=d=new Jd,p=new Xd;ga(u,4,To,p)}"delegate"in h&&(h.delegate==="GPU"?(h=d,u=new Yg,ga(h,2,To,u)):(h=d,u=new Xd,ga(h,4,To,u))),Xt(c.baseOptions,0,3,d)})(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then((c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)})).then((c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),Ul(this,"/model.dat"),this.m(),this.L()}));if(l.modelAssetBuffer instanceof Uint8Array)Ul(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return(async function(c){const h=[];for(var d=0;;){const{done:u,value:p}=await c.read();if(u)break;h.push(p),d+=p.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];c=new Uint8Array(d),d=0;for(const u of h)c.set(u,d),d+=u.length;return c})(l.modelAssetBuffer).then((c=>{Ul(this,c),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca((t=>{e=$g(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((i,n)=>{this.H.push(Error(n))})),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,of(this)}finishProcessing(){this.g.finishProcessing(),of(this)}close(){this.B=void 0,this.g.closeGraph()}};function ss(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}Bc.prototype.close=Bc.prototype.close;class y_{constructor(t,i,n,s){this.g=t,this.h=i,this.m=n,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function lf(e,t,i){const n=e.g;if(i=ss(n.createShader(i),"Failed to create WebGL shader"),n.shaderSource(i,t),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${n.getShaderInfoLog(i)}`);return n.attachShader(e.h,i),i}function cf(e,t){const i=e.g,n=ss(i.createVertexArray(),"Failed to create vertex array");i.bindVertexArray(n);const s=ss(i.createBuffer(),"Failed to create buffer");i.bindBuffer(i.ARRAY_BUFFER,s),i.enableVertexAttribArray(e.O),i.vertexAttribPointer(e.O,2,i.FLOAT,!1,0,0),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),i.STATIC_DRAW);const r=ss(i.createBuffer(),"Failed to create buffer");return i.bindBuffer(i.ARRAY_BUFFER,r),i.enableVertexAttribArray(e.L),i.vertexAttribPointer(e.L,2,i.FLOAT,!1,0,0),i.bufferData(i.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,null),i.bindVertexArray(null),new y_(i,n,s,r)}function Eu(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function E_(e,t,i,n){return Eu(e,t),e.h||(e.m(),e.D()),i?(e.u||(e.u=cf(e,!0)),i=e.u):(e.A||(e.A=cf(e,!1)),i=e.A),t.useProgram(e.h),i.bind(),e.l(),e=n(),i.g.bindVertexArray(null),e}function I0(e,t,i){return Eu(e,t),e=ss(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,i??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function D0(e,t,i){Eu(e,t),e.B||(e.B=ss(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0)}function b_(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var F0=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=ss(e.createProgram(),"Failed to create WebGL program"),this.X=lf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=lf(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.L=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function In(e,t){switch(t){case 0:return e.g.find((i=>i instanceof Uint8Array));case 1:return e.g.find((i=>i instanceof Float32Array));case 2:return e.g.find((i=>typeof WebGLTexture<"u"&&i instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function zc(e){var t=In(e,1);if(!t){if(t=In(e,0))t=new Float32Array(t).map((n=>n/255));else{t=new Float32Array(e.width*e.height);const n=Rr(e);var i=bu(e);if(D0(i,n,U0(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){i=new Float32Array(e.width*e.height*4),n.readPixels(0,0,e.width,e.height,n.RGBA,n.FLOAT,i);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=i[r]}else n.readPixels(0,0,e.width,e.height,n.RED,n.FLOAT,t)}e.g.push(t)}return t}function U0(e){let t=In(e,2);if(!t){const i=Rr(e);t=O0(e);const n=zc(e),s=N0(e);i.texImage2D(i.TEXTURE_2D,0,s,e.width,e.height,0,i.RED,i.FLOAT,n),kc(e)}return t}function Rr(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=ss(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function N0(e){if(e=Rr(e),!Ga)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))Ga=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Ga=e.R16F}return Ga}function bu(e){return e.l||(e.l=new F0),e.l}function O0(e){const t=Rr(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let i=In(e,2);return i||(i=I0(bu(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(i),e.j=!0),t.bindTexture(t.TEXTURE_2D,i),i}function kc(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var Ga,ei=class{constructor(e,t,i,n,s,r,a){this.g=e,this.m=t,this.j=i,this.canvas=n,this.l=s,this.width=r,this.height=a,this.j&&--hf===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!In(this,0)}ka(){return!!In(this,1)}R(){return!!In(this,2)}ja(){return(t=In(e=this,0))||(t=zc(e),t=new Uint8Array(t.map((i=>Math.round(255*i)))),e.g.push(t)),t;var e,t}ia(){return zc(this)}N(){return U0(this)}clone(){const e=[];for(const t of this.g){let i;if(t instanceof Uint8Array)i=new Uint8Array(t);else if(t instanceof Float32Array)i=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const n=Rr(this),s=bu(this);n.activeTexture(n.TEXTURE1),i=I0(s,n,this.m?n.LINEAR:n.NEAREST),n.bindTexture(n.TEXTURE_2D,i);const r=N0(this);n.texImage2D(n.TEXTURE_2D,0,r,this.width,this.height,0,n.RED,n.FLOAT,null),n.bindTexture(n.TEXTURE_2D,null),D0(s,n,i),E_(s,n,!1,(()=>{O0(this),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLE_FAN,0,4),kc(this)})),b_(s),kc(this)}}e.push(i)}return new ei(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Rr(this).deleteTexture(In(this,2)),hf=-1}};ei.prototype.close=ei.prototype.close,ei.prototype.clone=ei.prototype.clone,ei.prototype.getAsWebGLTexture=ei.prototype.N,ei.prototype.getAsFloat32Array=ei.prototype.ia,ei.prototype.getAsUint8Array=ei.prototype.ja,ei.prototype.hasWebGLTexture=ei.prototype.R,ei.prototype.hasFloat32Array=ei.prototype.ka,ei.prototype.hasUint8Array=ei.prototype.Fa;var hf=250;function rn(...e){return e.map((([t,i])=>({start:t,end:i})))}const A_=(function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}})((uf=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:P0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const i=e.length,n=this.i._malloc(i);this.i.HEAPU8.set(e,n),t?this.i._changeBinaryGraph(i,n):this.i._changeTextGraph(i,n),this.i._free(n)}configureAudio(e,t,i,n,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),kt(this,n||"input_audio",(r=>{kt(this,s=s||"audio_header",(a=>{this.i._configureAudio(r,a,e,t??0,i)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){hn(this,"__graph_config__",(t=>{e(t)})),kt(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,i){this.addAudioToStreamWithShape(e,0,0,t,i)}addAudioToStreamWithShape(e,t,i,n,s){const r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),kt(this,n,(a=>{this.i._addAudioToInputStream(this.g,t,i,a,s)}))}addGpuBufferToStream(e,t,i){kt(this,t,(n=>{const[s,r]=rf(this,e,n);this.i._addBoundTextureToStream(n,s,r,i)}))}addBoolToStream(e,t,i){kt(this,t,(n=>{this.i._addBoolToInputStream(e,n,i)}))}addDoubleToStream(e,t,i){kt(this,t,(n=>{this.i._addDoubleToInputStream(e,n,i)}))}addFloatToStream(e,t,i){kt(this,t,(n=>{this.i._addFloatToInputStream(e,n,i)}))}addIntToStream(e,t,i){kt(this,t,(n=>{this.i._addIntToInputStream(e,n,i)}))}addUintToStream(e,t,i){kt(this,t,(n=>{this.i._addUintToInputStream(e,n,i)}))}addStringToStream(e,t,i){kt(this,t,(n=>{kt(this,e,(s=>{this.i._addStringToInputStream(s,n,i)}))}))}addStringRecordToStream(e,t,i){kt(this,t,(n=>{af(this,Object.keys(e),(s=>{af(this,Object.values(e),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,n,i)}))}))}))}addProtoToStream(e,t,i,n){kt(this,i,(s=>{kt(this,t,(r=>{const a=this.i._malloc(e.length);this.i.HEAPU8.set(e,a),this.i._addProtoToInputStream(a,e.length,r,s,n),this.i._free(a)}))}))}addEmptyPacketToStream(e,t){kt(this,e,(i=>{this.i._addEmptyPacketToInputStream(i,t)}))}addBoolVectorToStream(e,t,i){kt(this,t,(n=>{const s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,n,i)}))}addDoubleVectorToStream(e,t,i){kt(this,t,(n=>{const s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,n,i)}))}addFloatVectorToStream(e,t,i){kt(this,t,(n=>{const s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,n,i)}))}addIntVectorToStream(e,t,i){kt(this,t,(n=>{const s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,n,i)}))}addUintVectorToStream(e,t,i){kt(this,t,(n=>{const s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,n,i)}))}addStringVectorToStream(e,t,i){kt(this,t,(n=>{const s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of e)kt(this,r,(a=>{this.i._addStringVectorEntry(s,a)}));this.i._addStringVectorToInputStream(s,n,i)}))}addBoolToInputSidePacket(e,t){kt(this,t,(i=>{this.i._addBoolToInputSidePacket(e,i)}))}addDoubleToInputSidePacket(e,t){kt(this,t,(i=>{this.i._addDoubleToInputSidePacket(e,i)}))}addFloatToInputSidePacket(e,t){kt(this,t,(i=>{this.i._addFloatToInputSidePacket(e,i)}))}addIntToInputSidePacket(e,t){kt(this,t,(i=>{this.i._addIntToInputSidePacket(e,i)}))}addUintToInputSidePacket(e,t){kt(this,t,(i=>{this.i._addUintToInputSidePacket(e,i)}))}addStringToInputSidePacket(e,t){kt(this,t,(i=>{kt(this,e,(n=>{this.i._addStringToInputSidePacket(n,i)}))}))}addProtoToInputSidePacket(e,t,i){kt(this,i,(n=>{kt(this,t,(s=>{const r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,n),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(e,t){kt(this,t,(i=>{const n=this.i._allocateBoolVector(e.length);if(!n)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(n,s);this.i._addBoolVectorToInputSidePacket(n,i)}))}addDoubleVectorToInputSidePacket(e,t){kt(this,t,(i=>{const n=this.i._allocateDoubleVector(e.length);if(!n)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(n,s);this.i._addDoubleVectorToInputSidePacket(n,i)}))}addFloatVectorToInputSidePacket(e,t){kt(this,t,(i=>{const n=this.i._allocateFloatVector(e.length);if(!n)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(n,s);this.i._addFloatVectorToInputSidePacket(n,i)}))}addIntVectorToInputSidePacket(e,t){kt(this,t,(i=>{const n=this.i._allocateIntVector(e.length);if(!n)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(n,s);this.i._addIntVectorToInputSidePacket(n,i)}))}addUintVectorToInputSidePacket(e,t){kt(this,t,(i=>{const n=this.i._allocateUintVector(e.length);if(!n)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(n,s);this.i._addUintVectorToInputSidePacket(n,i)}))}addStringVectorToInputSidePacket(e,t){kt(this,t,(i=>{const n=this.i._allocateStringVector(e.length);if(!n)throw Error("Unable to allocate new string vector on heap.");for(const s of e)kt(this,s,(r=>{this.i._addStringVectorEntry(n,r)}));this.i._addStringVectorToInputSidePacket(n,i)}))}attachBoolListener(e,t){hn(this,e,t),kt(this,e,(i=>{this.i._attachBoolListener(i)}))}attachBoolVectorListener(e,t){qn(this,e,t),kt(this,e,(i=>{this.i._attachBoolVectorListener(i)}))}attachIntListener(e,t){hn(this,e,t),kt(this,e,(i=>{this.i._attachIntListener(i)}))}attachIntVectorListener(e,t){qn(this,e,t),kt(this,e,(i=>{this.i._attachIntVectorListener(i)}))}attachUintListener(e,t){hn(this,e,t),kt(this,e,(i=>{this.i._attachUintListener(i)}))}attachUintVectorListener(e,t){qn(this,e,t),kt(this,e,(i=>{this.i._attachUintVectorListener(i)}))}attachDoubleListener(e,t){hn(this,e,t),kt(this,e,(i=>{this.i._attachDoubleListener(i)}))}attachDoubleVectorListener(e,t){qn(this,e,t),kt(this,e,(i=>{this.i._attachDoubleVectorListener(i)}))}attachFloatListener(e,t){hn(this,e,t),kt(this,e,(i=>{this.i._attachFloatListener(i)}))}attachFloatVectorListener(e,t){qn(this,e,t),kt(this,e,(i=>{this.i._attachFloatVectorListener(i)}))}attachStringListener(e,t){hn(this,e,t),kt(this,e,(i=>{this.i._attachStringListener(i)}))}attachStringVectorListener(e,t){qn(this,e,t),kt(this,e,(i=>{this.i._attachStringVectorListener(i)}))}attachProtoListener(e,t,i){hn(this,e,t),kt(this,e,(n=>{this.i._attachProtoListener(n,i||!1)}))}attachProtoVectorListener(e,t,i){qn(this,e,t),kt(this,e,(n=>{this.i._attachProtoVectorListener(n,i||!1)}))}attachAudioListener(e,t,i){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),hn(this,e,((n,s)=>{n=new Float32Array(n.buffer,n.byteOffset,n.length/4),t(n,s)})),kt(this,e,(n=>{this.i._attachAudioListener(n,i||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends uf{get ga(){return this.i}pa(e,t,i){kt(this,t,(n=>{const[s,r]=rf(this,e,n);this.ga._addBoundTextureAsImageToStream(n,s,r,i)}))}Z(e,t){hn(this,e,t),kt(this,e,(i=>{this.ga._attachImageListener(i)}))}aa(e,t){qn(this,e,t),kt(this,e,(i=>{this.ga._attachImageVectorListener(i)}))}}));var uf,an=class extends A_{};async function de(e,t,i){return(async function(n,s,r,a){return S_(n,s,r,a)})(e,i.canvas??(P0()?void 0:document.createElement("canvas")),t,i)}function B0(e,t,i,n){if(e.U){const r=new r0;if(i!=null&&i.regionOfInterest){if(!e.oa)throw Error("This task doesn't support region-of-interest.");var s=i.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Gt(r,1,(s.left+s.right)/2),Gt(r,2,(s.top+s.bottom)/2),Gt(r,4,s.right-s.left),Gt(r,3,s.bottom-s.top)}else Gt(r,1,.5),Gt(r,2,.5),Gt(r,4,1),Gt(r,3,1);if(i!=null&&i.rotationDegrees){if((i==null?void 0:i.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Gt(r,5,-Math.PI*i.rotationDegrees/180),(i==null?void 0:i.rotationDegrees)%180!=0){const[a,o]=L0(t);i=ke(r,3)*o/a,s=ke(r,4)*a/o,Gt(r,4,i),Gt(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.U,n)}e.g.pa(t,e.X,n??performance.now()),e.finishProcessing()}function on(e,t,i){var n;if((n=e.baseOptions)!=null&&n.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");B0(e,t,i,e.C+1)}function Tn(e,t,i,n){var s;if(!((s=e.baseOptions)!=null&&s.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");B0(e,t,i,n)}function Cr(e,t,i,n){var s=t.data;const r=t.width,a=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return e=new ei([s],i,!1,e.g.i.canvas,e.P,r,t),n?e.clone():e}var Ui=class extends Bc{constructor(e,t,i,n){super(e),this.g=e,this.X=t,this.U=i,this.oa=n,this.P=new F0}l(e,t=!0){if("runningMode"in e&&ve(this.baseOptions,2,Ea(!!e.runningMode&&e.runningMode!=="IMAGE")),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};Ui.prototype.close=Ui.prototype.close;var ki=class extends Ui{constructor(e,t){super(new an(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Xt(e=this.h=new gl,0,1,t=new Ne),Gt(this.h,2,.5),Gt(this.h,3,.3)}get baseOptions(){return me(this.h,Ne,1)}set baseOptions(e){Xt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&Gt(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&Gt(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},on(this,e,t),this.j}G(e,t,i){return this.j={detections:[]},Tn(this,e,i,t),this.j}m(){var e=new Bi;Ie(e,"image_in"),Ie(e,"norm_rect_in"),ge(e,"detections");const t=new Oi;bn(t,a_,this.h);const i=new bi;Fi(i,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Re(i,"IMAGE:image_in"),Re(i,"NORM_RECT:norm_rect_in"),le(i,"DETECTIONS:detections"),i.o(t),Ki(e,i),this.g.attachProtoVectorListener("detections",((n,s)=>{for(const r of n)n=i0(r),this.j.detections.push(R0(n));It(this,s)})),this.g.attachEmptyPacketListener("detections",(n=>{It(this,n)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ki.prototype.detectForVideo=ki.prototype.G,ki.prototype.detect=ki.prototype.F,ki.prototype.setOptions=ki.prototype.o,ki.createFromModelPath=async function(e,t){return de(ki,e,{baseOptions:{modelAssetPath:t}})},ki.createFromModelBuffer=function(e,t){return de(ki,e,{baseOptions:{modelAssetBuffer:t}})},ki.createFromOptions=function(e,t){return de(ki,e,t)};var Au=rn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Tu=rn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),wu=rn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),z0=rn([474,475],[475,476],[476,477],[477,474]),Ru=rn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Cu=rn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),k0=rn([469,470],[470,471],[471,472],[472,469]),Pu=rn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),H0=[...Au,...Tu,...wu,...Ru,...Cu,...Pu],V0=rn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function df(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Fe=class extends Ui{constructor(e,t){super(new an(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Xt(e=this.h=new h0,0,1,t=new Ne),this.A=new c0,Xt(this.h,0,3,this.A),this.u=new gl,Xt(this.h,0,2,this.u),zn(this.u,4,1),Gt(this.u,2,.5),Gt(this.A,2,.5),Gt(this.h,4,.5)}get baseOptions(){return me(this.h,Ne,1)}set baseOptions(e){Xt(this.h,0,1,e)}o(e){return"numFaces"in e&&zn(this.u,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&Gt(this.u,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&Gt(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&Gt(this.A,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return df(this),on(this,e,t),this.j}G(e,t,i){return df(this),Tn(this,e,i,t),this.j}m(){var e=new Bi;Ie(e,"image_in"),Ie(e,"norm_rect"),ge(e,"face_landmarks");const t=new Oi;bn(t,l_,this.h);const i=new bi;Fi(i,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Re(i,"IMAGE:image_in"),Re(i,"NORM_RECT:norm_rect"),le(i,"NORM_LANDMARKS:face_landmarks"),i.o(t),Ki(e,i),this.g.attachProtoVectorListener("face_landmarks",((n,s)=>{for(const r of n)n=Ua(r),this.j.faceLandmarks.push(_l(n));It(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(n=>{It(this,n)})),this.outputFaceBlendshapes&&(ge(e,"blendshapes"),le(i,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((n,s)=>{if(this.outputFaceBlendshapes)for(const r of n)n=ml(r),this.j.faceBlendshapes.push(yu(n.g()??[]));It(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(n=>{It(this,n)}))),this.outputFacialTransformationMatrixes&&(ge(e,"face_geometry"),le(i,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((n,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of n)(n=me(n=o_(r),jg,2))&&this.j.facialTransformationMatrixes.push({rows:Yi(n,1)??0??0,columns:Yi(n,2)??0??0,data:ys(n,3,mn,Ss()).slice()??[]});It(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(n=>{It(this,n)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Fe.prototype.detectForVideo=Fe.prototype.G,Fe.prototype.detect=Fe.prototype.F,Fe.prototype.setOptions=Fe.prototype.o,Fe.createFromModelPath=function(e,t){return de(Fe,e,{baseOptions:{modelAssetPath:t}})},Fe.createFromModelBuffer=function(e,t){return de(Fe,e,{baseOptions:{modelAssetBuffer:t}})},Fe.createFromOptions=function(e,t){return de(Fe,e,t)},Fe.FACE_LANDMARKS_LIPS=Au,Fe.FACE_LANDMARKS_LEFT_EYE=Tu,Fe.FACE_LANDMARKS_LEFT_EYEBROW=wu,Fe.FACE_LANDMARKS_LEFT_IRIS=z0,Fe.FACE_LANDMARKS_RIGHT_EYE=Ru,Fe.FACE_LANDMARKS_RIGHT_EYEBROW=Cu,Fe.FACE_LANDMARKS_RIGHT_IRIS=k0,Fe.FACE_LANDMARKS_FACE_OVAL=Pu,Fe.FACE_LANDMARKS_CONTOURS=H0,Fe.FACE_LANDMARKS_TESSELATION=V0;var Lu=rn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function ff(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function pf(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function mf(e,t=!0){const i=[];for(const s of e){var n=ml(s);e=[];for(const r of n.g())n=t&&Yi(r,1)!=null?Yi(r,1)??0:-1,e.push({score:ke(r,2)??0,index:n,categoryName:si(Pe(r,3))??""??"",displayName:si(Pe(r,4))??""??""});i.push(e)}return i}var Ti=class extends Ui{constructor(e,t){super(new an(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Xt(e=this.j=new f0,0,1,t=new Ne),this.u=new xu,Xt(this.j,0,2,this.u),this.D=new _u,Xt(this.u,0,3,this.D),this.A=new d0,Xt(this.u,0,2,this.A),this.h=new c_,Xt(this.j,0,3,this.h),Gt(this.A,2,.5),Gt(this.u,4,.5),Gt(this.D,2,.5)}get baseOptions(){return me(this.j,Ne,1)}set baseOptions(e){Xt(this.j,0,1,e)}o(e){var s,r,a,o;if(zn(this.A,3,e.numHands??1),"minHandDetectionConfidence"in e&&Gt(this.A,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Gt(this.u,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Gt(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Ks,i=t,n=Oc(e.cannedGesturesClassifierOptions,(s=me(this.h,Ks,3))==null?void 0:s.l());Xt(i,0,2,n),Xt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((r=me(this.h,Ks,3))==null||r.g());return e.customGesturesClassifierOptions?(Xt(i=t=new Ks,0,2,n=Oc(e.customGesturesClassifierOptions,(a=me(this.h,Ks,4))==null?void 0:a.l())),Xt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((o=me(this.h,Ks,4))==null||o.g()),this.l(e)}Ha(e,t){return ff(this),on(this,e,t),pf(this)}Ia(e,t,i){return ff(this),Tn(this,e,i,t),pf(this)}m(){var e=new Bi;Ie(e,"image_in"),Ie(e,"norm_rect"),ge(e,"hand_gestures"),ge(e,"hand_landmarks"),ge(e,"world_hand_landmarks"),ge(e,"handedness");const t=new Oi;bn(t,h_,this.j);const i=new bi;Fi(i,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Re(i,"IMAGE:image_in"),Re(i,"NORM_RECT:norm_rect"),le(i,"HAND_GESTURES:hand_gestures"),le(i,"LANDMARKS:hand_landmarks"),le(i,"WORLD_LANDMARKS:world_hand_landmarks"),le(i,"HANDEDNESS:handedness"),i.o(t),Ki(e,i),this.g.attachProtoVectorListener("hand_landmarks",((n,s)=>{for(const r of n){n=Ua(r);const a=[];for(const o of Bn(n,s0,1))a.push({x:ke(o,1)??0,y:ke(o,2)??0,z:ke(o,3)??0,visibility:ke(o,4)??0});this.landmarks.push(a)}It(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(n=>{It(this,n)})),this.g.attachProtoVectorListener("world_hand_landmarks",((n,s)=>{for(const r of n){n=mr(r);const a=[];for(const o of Bn(n,n0,1))a.push({x:ke(o,1)??0,y:ke(o,2)??0,z:ke(o,3)??0,visibility:ke(o,4)??0});this.worldLandmarks.push(a)}It(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(n=>{It(this,n)})),this.g.attachProtoVectorListener("hand_gestures",((n,s)=>{this.gestures.push(...mf(n,!1)),It(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(n=>{It(this,n)})),this.g.attachProtoVectorListener("handedness",((n,s)=>{this.handedness.push(...mf(n)),It(this,s)})),this.g.attachEmptyPacketListener("handedness",(n=>{It(this,n)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function gf(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}Ti.prototype.recognizeForVideo=Ti.prototype.Ia,Ti.prototype.recognize=Ti.prototype.Ha,Ti.prototype.setOptions=Ti.prototype.o,Ti.createFromModelPath=function(e,t){return de(Ti,e,{baseOptions:{modelAssetPath:t}})},Ti.createFromModelBuffer=function(e,t){return de(Ti,e,{baseOptions:{modelAssetBuffer:t}})},Ti.createFromOptions=function(e,t){return de(Ti,e,t)},Ti.HAND_CONNECTIONS=Lu;var wi=class extends Ui{constructor(e,t){super(new an(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Xt(e=this.h=new xu,0,1,t=new Ne),this.u=new _u,Xt(this.h,0,3,this.u),this.j=new d0,Xt(this.h,0,2,this.j),zn(this.j,3,1),Gt(this.j,2,.5),Gt(this.u,2,.5),Gt(this.h,4,.5)}get baseOptions(){return me(this.h,Ne,1)}set baseOptions(e){Xt(this.h,0,1,e)}o(e){return"numHands"in e&&zn(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&Gt(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Gt(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Gt(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],on(this,e,t),gf(this)}G(e,t,i){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Tn(this,e,i,t),gf(this)}m(){var e=new Bi;Ie(e,"image_in"),Ie(e,"norm_rect"),ge(e,"hand_landmarks"),ge(e,"world_hand_landmarks"),ge(e,"handedness");const t=new Oi;bn(t,u_,this.h);const i=new bi;Fi(i,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Re(i,"IMAGE:image_in"),Re(i,"NORM_RECT:norm_rect"),le(i,"LANDMARKS:hand_landmarks"),le(i,"WORLD_LANDMARKS:world_hand_landmarks"),le(i,"HANDEDNESS:handedness"),i.o(t),Ki(e,i),this.g.attachProtoVectorListener("hand_landmarks",((n,s)=>{for(const r of n)n=Ua(r),this.landmarks.push(_l(n));It(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(n=>{It(this,n)})),this.g.attachProtoVectorListener("world_hand_landmarks",((n,s)=>{for(const r of n)n=mr(r),this.worldLandmarks.push(xa(n));It(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(n=>{It(this,n)})),this.g.attachProtoVectorListener("handedness",((n,s)=>{var r=this.handedness,a=r.push;const o=[];for(const l of n){n=ml(l);const c=[];for(const h of n.g())c.push({score:ke(h,2)??0,index:Yi(h,1)??0??-1,categoryName:si(Pe(h,3))??""??"",displayName:si(Pe(h,4))??""??""});o.push(c)}a.call(r,...o),It(this,s)})),this.g.attachEmptyPacketListener("handedness",(n=>{It(this,n)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};wi.prototype.detectForVideo=wi.prototype.G,wi.prototype.detect=wi.prototype.F,wi.prototype.setOptions=wi.prototype.o,wi.createFromModelPath=function(e,t){return de(wi,e,{baseOptions:{modelAssetPath:t}})},wi.createFromModelBuffer=function(e,t){return de(wi,e,{baseOptions:{modelAssetBuffer:t}})},wi.createFromOptions=function(e,t){return de(wi,e,t)},wi.HAND_CONNECTIONS=Lu;var G0=rn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function _f(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function xf(e){try{if(!e.D)return e.h;e.D(e.h)}finally{vl(e)}}function Wa(e,t){e=Ua(e),t.push(_l(e))}var Te=class extends Ui{constructor(e,t){super(new an(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Xt(e=this.j=new x0,0,1,t=new Ne),this.I=new _u,Xt(this.j,0,2,this.I),this.W=new d_,Xt(this.j,0,3,this.W),this.u=new gl,Xt(this.j,0,4,this.u),this.O=new c0,Xt(this.j,0,5,this.O),this.A=new g0,Xt(this.j,0,6,this.A),this.M=new _0,Xt(this.j,0,7,this.M),Gt(this.u,2,.5),Gt(this.u,3,.3),Gt(this.O,2,.5),Gt(this.A,2,.5),Gt(this.A,3,.3),Gt(this.M,2,.5),Gt(this.I,2,.5)}get baseOptions(){return me(this.j,Ne,1)}set baseOptions(e){Xt(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&Gt(this.u,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&Gt(this.u,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&Gt(this.O,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Gt(this.A,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&Gt(this.A,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&Gt(this.M,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Gt(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,i){const n=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:i,_f(this),on(this,e,n),xf(this)}G(e,t,i,n){const s=typeof i!="function"?i:{};return this.D=typeof i=="function"?i:n,_f(this),Tn(this,e,s,t),xf(this)}m(){var e=new Bi;Ie(e,"input_frames_image"),ge(e,"pose_landmarks"),ge(e,"pose_world_landmarks"),ge(e,"face_landmarks"),ge(e,"left_hand_landmarks"),ge(e,"left_hand_world_landmarks"),ge(e,"right_hand_landmarks"),ge(e,"right_hand_world_landmarks");const t=new Oi,i=new Hd;Fi(i,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))ve(s,2,nl(r,0,ba));else{if(!(typeof r=="string"||r instanceof xn||Oh(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Qn(s,2,zh(r,!1),Ls())}})(i,this.j.g());const n=new bi;Fi(n,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Qh(n,8,Hd,i),Re(n,"IMAGE:input_frames_image"),le(n,"POSE_LANDMARKS:pose_landmarks"),le(n,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),le(n,"FACE_LANDMARKS:face_landmarks"),le(n,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),le(n,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),le(n,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),le(n,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),n.o(t),Ki(e,n),xl(this,e),this.g.attachProtoListener("pose_landmarks",((s,r)=>{Wa(s,this.h.poseLandmarks),It(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{It(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var a=this.h.poseWorldLandmarks;s=mr(s),a.push(xa(s)),It(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{It(this,s)})),this.outputPoseSegmentationMasks&&(le(n,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),wr(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[Cr(this,s,!0,!this.D)],It(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],It(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{Wa(s,this.h.faceLandmarks),It(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{It(this,s)})),this.outputFaceBlendshapes&&(ge(e,"extra_blendshapes"),le(n,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=ml(s),a.push(yu(s.g()??[]))),It(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{It(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{Wa(s,this.h.leftHandLandmarks),It(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{It(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var a=this.h.leftHandWorldLandmarks;s=mr(s),a.push(xa(s)),It(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{It(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{Wa(s,this.h.rightHandLandmarks),It(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{It(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var a=this.h.rightHandWorldLandmarks;s=mr(s),a.push(xa(s)),It(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{It(this,s)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Te.prototype.detectForVideo=Te.prototype.G,Te.prototype.detect=Te.prototype.F,Te.prototype.setOptions=Te.prototype.o,Te.createFromModelPath=function(e,t){return de(Te,e,{baseOptions:{modelAssetPath:t}})},Te.createFromModelBuffer=function(e,t){return de(Te,e,{baseOptions:{modelAssetBuffer:t}})},Te.createFromOptions=function(e,t){return de(Te,e,t)},Te.HAND_CONNECTIONS=Lu,Te.POSE_CONNECTIONS=G0,Te.FACE_LANDMARKS_LIPS=Au,Te.FACE_LANDMARKS_LEFT_EYE=Tu,Te.FACE_LANDMARKS_LEFT_EYEBROW=wu,Te.FACE_LANDMARKS_LEFT_IRIS=z0,Te.FACE_LANDMARKS_RIGHT_EYE=Ru,Te.FACE_LANDMARKS_RIGHT_EYEBROW=Cu,Te.FACE_LANDMARKS_RIGHT_IRIS=k0,Te.FACE_LANDMARKS_FACE_OVAL=Pu,Te.FACE_LANDMARKS_CONTOURS=H0,Te.FACE_LANDMARKS_TESSELATION=V0;var Hi=class extends Ui{constructor(e,t){super(new an(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Xt(e=this.h=new v0,0,1,t=new Ne)}get baseOptions(){return me(this.h,Ne,1)}set baseOptions(e){Xt(this.h,0,1,e)}o(e){return Xt(this.h,0,2,Oc(e,me(this.h,mu,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},on(this,e,t),this.j}ta(e,t,i){return this.j={classifications:[]},Tn(this,e,i,t),this.j}m(){var e=new Bi;Ie(e,"input_image"),Ie(e,"norm_rect"),ge(e,"classifications");const t=new Oi;bn(t,f_,this.h);const i=new bi;Fi(i,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Re(i,"IMAGE:input_image"),Re(i,"NORM_RECT:norm_rect"),le(i,"CLASSIFICATIONS:classifications"),i.o(t),Ki(e,i),this.g.attachProtoListener("classifications",((n,s)=>{this.j=v_(e_(n)),It(this,s)})),this.g.attachEmptyPacketListener("classifications",(n=>{It(this,n)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Hi.prototype.classifyForVideo=Hi.prototype.ta,Hi.prototype.classify=Hi.prototype.sa,Hi.prototype.setOptions=Hi.prototype.o,Hi.createFromModelPath=function(e,t){return de(Hi,e,{baseOptions:{modelAssetPath:t}})},Hi.createFromModelBuffer=function(e,t){return de(Hi,e,{baseOptions:{modelAssetBuffer:t}})},Hi.createFromOptions=function(e,t){return de(Hi,e,t)};var Ri=class extends Ui{constructor(e,t){super(new an(e,t),"image_in","norm_rect",!0),this.h=new M0,this.embeddings={embeddings:[]},Xt(e=this.h,0,1,t=new Ne)}get baseOptions(){return me(this.h,Ne,1)}set baseOptions(e){Xt(this.h,0,1,e)}o(e){var t=this.h,i=me(this.h,Zd,2);return i=i?i.clone():new Zd,e.l2Normalize!==void 0?ve(i,1,Ea(e.l2Normalize)):"l2Normalize"in e&&ve(i,1),e.quantize!==void 0?ve(i,2,Ea(e.quantize)):"quantize"in e&&ve(i,2),Xt(t,0,2,i),this.l(e)}za(e,t){return on(this,e,t),this.embeddings}Aa(e,t,i){return Tn(this,e,i,t),this.embeddings}m(){var e=new Bi;Ie(e,"image_in"),Ie(e,"norm_rect"),ge(e,"embeddings_out");const t=new Oi;bn(t,p_,this.h);const i=new bi;Fi(i,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Re(i,"IMAGE:image_in"),Re(i,"NORM_RECT:norm_rect"),le(i,"EMBEDDINGS:embeddings_out"),i.o(t),Ki(e,i),this.g.attachProtoListener("embeddings_out",((n,s)=>{n=s_(n),this.embeddings=(function(r){return{embeddings:Bn(r,n_,1).map((a=>{var c,h;const o={headIndex:Yi(a,3)??0??-1,headName:si(Pe(a,4))??""??""};var l=a.v;return _m(l,0|l[Ot],Kd,Pl(a,1))!==void 0?(a=ys(a=me(a,Kd,Pl(a,1),void 0),1,mn,Ss()),o.floatEmbedding=a.slice()):(l=new Uint8Array(0),o.quantizedEmbedding=((h=(c=me(a,i_,Pl(a,2),void 0))==null?void 0:c.na())==null?void 0:h.h())??l),o})),timestampMs:w0(Pe(r,2,void 0,void 0,Do)??dm)}})(n),It(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(n=>{It(this,n)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ri.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=nf(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=nf(ef(e.quantizedEmbedding),ef(t.quantizedEmbedding))}return e},Ri.prototype.embedForVideo=Ri.prototype.Aa,Ri.prototype.embed=Ri.prototype.za,Ri.prototype.setOptions=Ri.prototype.o,Ri.createFromModelPath=function(e,t){return de(Ri,e,{baseOptions:{modelAssetPath:t}})},Ri.createFromModelBuffer=function(e,t){return de(Ri,e,{baseOptions:{modelAssetBuffer:t}})},Ri.createFromOptions=function(e,t){return de(Ri,e,t)};var Hc=class{constructor(e,t,i){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=i}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((i=>{i.close()})),(t=this.categoryMask)==null||t.close()}};function T_(e){var i,n;const t=(function(s){return Bn(s,bi,1)})(e.ca()).filter((s=>(si(Pe(s,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((n=(i=me(t[0],Oi,7))==null?void 0:i.j())==null?void 0:n.g())??new Map).forEach(((s,r)=>{e.u[Number(r)]=si(Pe(s,1))??""}))}function vf(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Mf(e){try{const t=new Hc(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{vl(e)}}Hc.prototype.close=Hc.prototype.close;var Si=class extends Ui{constructor(e,t){super(new an(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Su,this.A=new S0,Xt(this.h,0,3,this.A),Xt(e=this.h,0,1,t=new Ne)}get baseOptions(){return me(this.h,Ne,1)}set baseOptions(e){Xt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?ve(this.h,2,Ia(e.displayNamesLocale)):"displayNamesLocale"in e&&ve(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){T_(this)}segment(e,t,i){const n=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:i,vf(this),on(this,e,n),Mf(this)}La(e,t,i,n){const s=typeof i!="function"?i:{};return this.j=typeof i=="function"?i:n,vf(this),Tn(this,e,s,t),Mf(this)}Da(){return this.u}m(){var e=new Bi;Ie(e,"image_in"),Ie(e,"norm_rect");const t=new Oi;bn(t,E0,this.h);const i=new bi;Fi(i,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Re(i,"IMAGE:image_in"),Re(i,"NORM_RECT:norm_rect"),i.o(t),Ki(e,i),xl(this,e),this.outputConfidenceMasks&&(ge(e,"confidence_masks"),le(i,"CONFIDENCE_MASKS:confidence_masks"),wr(this,"confidence_masks"),this.g.aa("confidence_masks",((n,s)=>{this.confidenceMasks=n.map((r=>Cr(this,r,!0,!this.j))),It(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(n=>{this.confidenceMasks=[],It(this,n)}))),this.outputCategoryMask&&(ge(e,"category_mask"),le(i,"CATEGORY_MASK:category_mask"),wr(this,"category_mask"),this.g.Z("category_mask",((n,s)=>{this.categoryMask=Cr(this,n,!1,!this.j),It(this,s)})),this.g.attachEmptyPacketListener("category_mask",(n=>{this.categoryMask=void 0,It(this,n)}))),ge(e,"quality_scores"),le(i,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((n,s)=>{this.qualityScores=n,It(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(n=>{this.categoryMask=void 0,It(this,n)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Si.prototype.getLabels=Si.prototype.Da,Si.prototype.segmentForVideo=Si.prototype.La,Si.prototype.segment=Si.prototype.segment,Si.prototype.setOptions=Si.prototype.o,Si.createFromModelPath=function(e,t){return de(Si,e,{baseOptions:{modelAssetPath:t}})},Si.createFromModelBuffer=function(e,t){return de(Si,e,{baseOptions:{modelAssetBuffer:t}})},Si.createFromOptions=function(e,t){return de(Si,e,t)};var Vc=class{constructor(e,t,i){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=i}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((i=>{i.close()})),(t=this.categoryMask)==null||t.close()}};Vc.prototype.close=Vc.prototype.close;var un=class extends Ui{constructor(e,t){super(new an(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Su,this.u=new S0,Xt(this.h,0,3,this.u),Xt(e=this.h,0,1,t=new Ne)}get baseOptions(){return me(this.h,Ne,1)}set baseOptions(e){Xt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,i,n){const s=typeof i!="function"?i:{};if(this.j=typeof i=="function"?i:n,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,i=this.C+1,n=new b0,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new Fl;Qn(r,3,Ea(!0),!1),Qn(r,1,fa(t.keypoint.x),0),Qn(r,2,fa(t.keypoint.y),0),ga(n,1,Nc,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new g_;for(r of t.scribble)Qn(t=new Fl,3,Ea(!0),!1),Qn(t,1,fa(r.x),0),Qn(t,2,fa(r.y),0),Qh(o,1,Fl,t);ga(n,2,Nc,o)}}this.g.addProtoToStream(n.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",i),on(this,e,s);t:{try{const o=new Vc(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break t}this.j(o)}finally{vl(this)}a=void 0}return a}m(){var e=new Bi;Ie(e,"image_in"),Ie(e,"roi_in"),Ie(e,"norm_rect_in");const t=new Oi;bn(t,E0,this.h);const i=new bi;Fi(i,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Re(i,"IMAGE:image_in"),Re(i,"ROI:roi_in"),Re(i,"NORM_RECT:norm_rect_in"),i.o(t),Ki(e,i),xl(this,e),this.outputConfidenceMasks&&(ge(e,"confidence_masks"),le(i,"CONFIDENCE_MASKS:confidence_masks"),wr(this,"confidence_masks"),this.g.aa("confidence_masks",((n,s)=>{this.confidenceMasks=n.map((r=>Cr(this,r,!0,!this.j))),It(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(n=>{this.confidenceMasks=[],It(this,n)}))),this.outputCategoryMask&&(ge(e,"category_mask"),le(i,"CATEGORY_MASK:category_mask"),wr(this,"category_mask"),this.g.Z("category_mask",((n,s)=>{this.categoryMask=Cr(this,n,!1,!this.j),It(this,s)})),this.g.attachEmptyPacketListener("category_mask",(n=>{this.categoryMask=void 0,It(this,n)}))),ge(e,"quality_scores"),le(i,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((n,s)=>{this.qualityScores=n,It(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(n=>{this.categoryMask=void 0,It(this,n)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};un.prototype.segment=un.prototype.segment,un.prototype.setOptions=un.prototype.o,un.createFromModelPath=function(e,t){return de(un,e,{baseOptions:{modelAssetPath:t}})},un.createFromModelBuffer=function(e,t){return de(un,e,{baseOptions:{modelAssetBuffer:t}})},un.createFromOptions=function(e,t){return de(un,e,t)};var Vi=class extends Ui{constructor(e,t){super(new an(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Xt(e=this.h=new A0,0,1,t=new Ne)}get baseOptions(){return me(this.h,Ne,1)}set baseOptions(e){Xt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?ve(this.h,2,Ia(e.displayNamesLocale)):"displayNamesLocale"in e&&ve(this.h,2),e.maxResults!==void 0?zn(this.h,3,e.maxResults):"maxResults"in e&&ve(this.h,3),e.scoreThreshold!==void 0?Gt(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&ve(this.h,4),e.categoryAllowlist!==void 0?Uo(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&ve(this.h,5),e.categoryDenylist!==void 0?Uo(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&ve(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},on(this,e,t),this.j}G(e,t,i){return this.j={detections:[]},Tn(this,e,i,t),this.j}m(){var e=new Bi;Ie(e,"input_frame_gpu"),Ie(e,"norm_rect"),ge(e,"detections");const t=new Oi;bn(t,__,this.h);const i=new bi;Fi(i,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Re(i,"IMAGE:input_frame_gpu"),Re(i,"NORM_RECT:norm_rect"),le(i,"DETECTIONS:detections"),i.o(t),Ki(e,i),this.g.attachProtoVectorListener("detections",((n,s)=>{for(const r of n)n=i0(r),this.j.detections.push(R0(n));It(this,s)})),this.g.attachEmptyPacketListener("detections",(n=>{It(this,n)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Vi.prototype.detectForVideo=Vi.prototype.G,Vi.prototype.detect=Vi.prototype.F,Vi.prototype.setOptions=Vi.prototype.o,Vi.createFromModelPath=async function(e,t){return de(Vi,e,{baseOptions:{modelAssetPath:t}})},Vi.createFromModelBuffer=function(e,t){return de(Vi,e,{baseOptions:{modelAssetBuffer:t}})},Vi.createFromOptions=function(e,t){return de(Vi,e,t)};var Gc=class{constructor(e,t,i){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=i}close(){var e;(e=this.segmentationMasks)==null||e.forEach((t=>{t.close()}))}};function Sf(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function yf(e){try{const t=new Gc(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{vl(e)}}Gc.prototype.close=Gc.prototype.close;var mi=class extends Ui{constructor(e,t){super(new an(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Xt(e=this.h=new T0,0,1,t=new Ne),this.A=new _0,Xt(this.h,0,3,this.A),this.j=new g0,Xt(this.h,0,2,this.j),zn(this.j,4,1),Gt(this.j,2,.5),Gt(this.A,2,.5),Gt(this.h,4,.5)}get baseOptions(){return me(this.h,Ne,1)}set baseOptions(e){Xt(this.h,0,1,e)}o(e){return"numPoses"in e&&zn(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&Gt(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&Gt(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&Gt(this.A,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,i){const n=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:i,Sf(this),on(this,e,n),yf(this)}G(e,t,i,n){const s=typeof i!="function"?i:{};return this.u=typeof i=="function"?i:n,Sf(this),Tn(this,e,s,t),yf(this)}m(){var e=new Bi;Ie(e,"image_in"),Ie(e,"norm_rect"),ge(e,"normalized_landmarks"),ge(e,"world_landmarks"),ge(e,"segmentation_masks");const t=new Oi;bn(t,x_,this.h);const i=new bi;Fi(i,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Re(i,"IMAGE:image_in"),Re(i,"NORM_RECT:norm_rect"),le(i,"NORM_LANDMARKS:normalized_landmarks"),le(i,"WORLD_LANDMARKS:world_landmarks"),i.o(t),Ki(e,i),xl(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((n,s)=>{this.landmarks=[];for(const r of n)n=Ua(r),this.landmarks.push(_l(n));It(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(n=>{this.landmarks=[],It(this,n)})),this.g.attachProtoVectorListener("world_landmarks",((n,s)=>{this.worldLandmarks=[];for(const r of n)n=mr(r),this.worldLandmarks.push(xa(n));It(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(n=>{this.worldLandmarks=[],It(this,n)})),this.outputSegmentationMasks&&(le(i,"SEGMENTATION_MASK:segmentation_masks"),wr(this,"segmentation_masks"),this.g.aa("segmentation_masks",((n,s)=>{this.segmentationMasks=n.map((r=>Cr(this,r,!0,!this.u))),It(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(n=>{this.segmentationMasks=[],It(this,n)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};mi.prototype.detectForVideo=mi.prototype.G,mi.prototype.detect=mi.prototype.F,mi.prototype.setOptions=mi.prototype.o,mi.createFromModelPath=function(e,t){return de(mi,e,{baseOptions:{modelAssetPath:t}})},mi.createFromModelBuffer=function(e,t){return de(mi,e,{baseOptions:{modelAssetBuffer:t}})},mi.createFromOptions=function(e,t){return de(mi,e,t)},mi.POSE_CONNECTIONS=G0;class Iu{constructor(t){I(this,"landmarker");I(this,"lastTimestampMs",-1);this.landmarker=t}static async create(){const t="./wasm",i="./models/pose_landmarker_full.task",n=await dr.forVisionTasks(t),s={baseOptions:{modelAssetPath:i,delegate:"GPU"},runningMode:"VIDEO",numPoses:1};let r;try{r=await mi.createFromOptions(n,s)}catch(a){console.warn("PoseLandmarker の GPU delegate 初期化に失敗しました。CPU で再試行します。",a),r=await mi.createFromOptions(n,{...s,baseOptions:{modelAssetPath:i,delegate:"CPU"}})}return new Iu(r)}detect(t,i){let n=i;n<=this.lastTimestampMs&&(n=this.lastTimestampMs+1),this.lastTimestampMs=n;const s=performance.now(),r=this.landmarker.detectForVideo(t,n),a=performance.now()-s;return{landmarks:r.landmarks[0]??null,worldLandmarks:r.worldLandmarks[0]??null,timestampMs:n,inferenceTimeMs:a}}close(){this.landmarker.close()}}function Ef(e,t){return 1/(1+1/(2*Math.PI*e)/t)}class Nl{constructor(t){I(this,"minCutoff");I(this,"beta");I(this,"dCutoff");I(this,"initialized",!1);I(this,"prevValue",0);I(this,"prevDerivative",0);I(this,"prevTimestamp",0);this.minCutoff=t.minCutoff,this.beta=t.beta,this.dCutoff=t.dCutoff}filter(t,i){if(!this.initialized)return this.initialized=!0,this.prevValue=t,this.prevDerivative=0,this.prevTimestamp=i,t;const n=i-this.prevTimestamp;if(n<=0)return this.prevValue;const s=(t-this.prevValue)/n,r=Ef(this.dCutoff,n),a=r*s+(1-r)*this.prevDerivative,o=this.minCutoff+this.beta*Math.abs(a),l=Ef(o,n),c=l*t+(1-l)*this.prevValue;return this.prevValue=c,this.prevDerivative=a,this.prevTimestamp=i,c}reset(){this.initialized=!1,this.prevValue=0,this.prevDerivative=0,this.prevTimestamp=0}}const Zs=33,bf={minCutoff:1.2,beta:.6,dCutoff:1},w_={minCutoff:.4,beta:.05,dCutoff:1},R_=.6,Af=.6,C_=500,P_=50,L_=100,I_=400;function Ol(e,t){return t<=0?0:1-Math.exp(-t/e)}function D_(e,t,i){return e<t?t:e>i?i:e}class F_{constructor(){I(this,"filters",[]);I(this,"targets",[]);I(this,"skeleton");I(this,"lastDetectionAtMs",-1/0);I(this,"hasEverDetected",!1);I(this,"wasLost",!1);I(this,"prevUpdateMs",-1/0);const t=[];for(let i=0;i<Zs;i++)this.filters.push({x:new Nl(bf),y:new Nl(bf),z:new Nl(w_)}),this.targets.push({x:0,y:0,z:0,screenX:0,screenY:0,visibility:0}),t.push({x:0,y:0,z:0,screenX:0,screenY:0,visibility:0});this.skeleton={joints:t,tracking:!1,timestampMs:0}}ingest(t){if(t.landmarks===null||t.worldLandmarks===null)return;const i=t.worldLandmarks,n=t.landmarks;for(let s=0;s<Zs;s++){const r=i[s],a=n[s],o=this.targets[s];o.x=-r.x,o.y=-r.y,o.z=-r.z,o.screenX=a.x,o.screenY=a.y,o.visibility=r.visibility}this.lastDetectionAtMs=t.timestampMs,this.hasEverDetected=!0}update(t){const i=t/1e3,n=this.prevUpdateMs===-1/0?0:t-this.prevUpdateMs;if(this.prevUpdateMs=t,this.skeleton.timestampMs=t,!this.hasEverDetected){for(let o=0;o<Zs;o++){const l=this.skeleton.joints[o];l.x=l.y=l.z=0,l.screenX=l.screenY=0,l.visibility=0}return this.skeleton.tracking=!1,this.skeleton}if(t-this.lastDetectionAtMs>C_){const o=Ol(I_,n);for(let l=0;l<Zs;l++){const c=this.skeleton.joints[l];c.visibility+=(0-c.visibility)*o}return this.skeleton.tracking=!1,this.wasLost=!0,this.skeleton}if(this.wasLost){for(let o=0;o<Zs;o++){this.filters[o].x.reset(),this.filters[o].y.reset(),this.filters[o].z.reset();const l=this.skeleton.joints[o],c=this.targets[o];l.screenX=c.screenX,l.screenY=c.screenY,l.visibility=c.visibility}this.wasLost=!1}const r=Ol(P_,n),a=Ol(L_,n);for(let o=0;o<Zs;o++){const l=this.filters[o],c=this.targets[o],h=this.skeleton.joints[o];h.x=l.x.filter(c.x,i),h.y=l.y.filter(c.y,i);const d=l.z.filter(c.z,i);h.z=D_(d*R_,-Af,Af),h.screenX+=(c.screenX-h.screenX)*r,h.screenY+=(c.screenY-h.screenY)*r,h.visibility+=(c.visibility-h.visibility)*a}return this.skeleton.tracking=!0,this.skeleton}}const Q={NOSE:0,LEFT_EAR:7,RIGHT_EAR:8,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32},Du=[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,23],[12,24],[23,24],[11,13],[13,15],[12,14],[14,16],[15,17],[15,19],[15,21],[17,19],[16,18],[16,20],[16,22],[18,20],[23,25],[25,27],[24,26],[26,28],[27,29],[27,31],[29,31],[28,30],[28,32],[30,32]],U_=.5,N_=.05,O_=.7,B_=.9,z_=1.1,k_=600,H_=50,V_=350,G_=2.2,W_=1.9,X_=150,q_=800,Xa=.05,Y_=150,$_=800,K_=.22,Z_=90,J_=.12,j_=700,Q_=60;function Tf(e,t){const i=e.x-t.x,n=e.y-t.y,s=e.z-t.z;return Math.sqrt(i*i+n*n+s*s)}function us(e){return e.visibility>U_}class tx{constructor(){I(this,"prevMs",-1);I(this,"smoothedWristVel",0);I(this,"prevWristDist",-1);I(this,"burstArmed",!0);I(this,"burstLastFiredAt",-1/0);I(this,"burstLastFastCloseAt",-1/0);I(this,"scatterArmed",!0);I(this,"scatterHeldSince",-1);I(this,"scatterLastFiredAt",-1/0);I(this,"updraftArmed",!0);I(this,"updraftHeldSince",-1);I(this,"updraftLastFiredAt",-1/0);I(this,"pushArmed",!0);I(this,"pushHeldSince",-1);I(this,"pushLastFiredAt",-1/0);I(this,"smoothedForwardVel",0);I(this,"prevForward",NaN);I(this,"pushForwardRatio",-1);I(this,"pushForwardPeak",0)}update(t,i){if(!t.tracking)return this.reset(),null;const n=this.prevMs>=0?(i-this.prevMs)/1e3:-1;this.prevMs=i;const s=t.joints,r=s[Q.LEFT_SHOULDER],a=s[Q.RIGHT_SHOULDER],o=s[Q.LEFT_WRIST],l=s[Q.RIGHT_WRIST],c=s[Q.NOSE];let h=-1;if(us(r)&&us(a)&&(h=Tf(r,a)),h<N_)return this.prevWristDist=-1,this.prevForward=NaN,this.smoothedForwardVel=0,this.pushHeldSince=-1,null;const d=us(o)&&us(l);let u=-1;if(d){if(u=Tf(o,l),this.prevWristDist>=0&&n>0){const p=(u-this.prevWristDist)/n,_=1-Math.exp(-(n*1e3)/H_);this.smoothedWristVel+=_*(p-this.smoothedWristVel)}this.prevWristDist=u}else this.prevWristDist=-1,this.smoothedWristVel=0;if(d){u>z_*h&&(this.burstArmed=!0),-this.smoothedWristVel>B_&&(this.burstLastFastCloseAt=i);const _=u<O_*h,S=i-this.burstLastFastCloseAt<=V_,m=i-this.burstLastFiredAt>=k_;if(this.burstArmed&&_&&S&&m)return this.burstArmed=!1,this.burstLastFastCloseAt=-1/0,this.burstLastFiredAt=i,"burst"}else this.burstLastFastCloseAt=-1/0;if(d)if(u<W_*h&&(this.scatterArmed=!0,this.scatterHeldSince=-1),u>G_*h){this.scatterHeldSince<0&&(this.scatterHeldSince=i);const _=i-this.scatterHeldSince,S=i-this.scatterLastFiredAt>=q_;if(this.scatterArmed&&_>=X_&&S)return this.scatterArmed=!1,this.scatterHeldSince=-1,this.scatterLastFiredAt=i,"scatter"}else this.scatterHeldSince=-1;else this.scatterHeldSince=-1;if(us(o)&&us(l)&&us(c)){const p=o.y>c.y+Xa&&l.y>c.y+Xa;if((o.y<c.y-Xa||l.y<c.y-Xa)&&(this.updraftArmed=!0,this.updraftHeldSince=-1),p){this.updraftHeldSince<0&&(this.updraftHeldSince=i);const S=i-this.updraftHeldSince,m=i-this.updraftLastFiredAt>=$_;if(this.updraftArmed&&S>=Y_&&m)return this.updraftArmed=!1,this.updraftHeldSince=-1,this.updraftLastFiredAt=i,"updraft"}else this.updraftHeldSince=-1}else this.updraftHeldSince=-1;if(d){const p=(o.z+l.z)/2-(r.z+a.z)/2,_=p/h;if(!Number.isNaN(this.prevForward)&&n>0){const m=(p-this.prevForward)/n,f=1-Math.exp(-(n*1e3)/Q_);this.smoothedForwardVel+=f*(m-this.smoothedForwardVel)}if(this.prevForward=p,this.pushForwardRatio=_,this.pushForwardPeak=Math.max(_,this.pushForwardPeak-(n>0?n:0)*.5),p<J_*h&&(this.pushArmed=!0,this.pushHeldSince=-1),p>K_*h){this.pushHeldSince<0&&(this.pushHeldSince=i);const m=i-this.pushHeldSince,f=i-this.pushLastFiredAt>=j_;if(this.pushArmed&&m>=Z_&&f)return this.pushArmed=!1,this.pushHeldSince=-1,this.pushLastFiredAt=i,"push"}else this.pushHeldSince=-1}else this.prevForward=NaN,this.smoothedForwardVel=0,this.pushHeldSince=-1,this.pushForwardRatio=-1;return null}reset(){this.prevMs=-1,this.smoothedWristVel=0,this.prevWristDist=-1,this.burstArmed=!0,this.burstLastFiredAt=-1/0,this.burstLastFastCloseAt=-1/0,this.scatterArmed=!0,this.scatterHeldSince=-1,this.scatterLastFiredAt=-1/0,this.updraftArmed=!0,this.updraftHeldSince=-1,this.updraftLastFiredAt=-1/0,this.pushArmed=!0,this.pushHeldSince=-1,this.pushLastFiredAt=-1/0,this.smoothedForwardVel=0,this.prevForward=NaN}}class ex{constructor(t){I(this,"root");I(this,"button");I(this,"statusEl");this.root=document.createElement("div"),this.root.className="start-overlay";const i=document.createElement("h1");i.textContent="Pose Visual Demo";const n=document.createElement("p");n.className="description",n.textContent="カメラの前で動くと、あなたのポーズをリアルタイムに認識します。";const s=document.createElement("div");s.className="gesture-guide";const r=document.createElement("p");r.className="gesture-guide-title",r.textContent="ジェスチャーで遊べます";const a=document.createElement("ul");for(const c of["👏 両手を叩く — 衝撃波が広がる","🙌 両手を大きく広げる — 粒が拡散する","🙋 両手を頭の上へ — 粒が舞い上がる","🫸 両手を前に押し出す — 前方へ噴き出す"]){const h=document.createElement("li");h.textContent=c,a.appendChild(h)}const o=document.createElement("p");o.className="keys-note",o.textContent="キー操作: 1/2/3 表現切替 ・ Space 散乱⇄集合 ・ V カメラ表示",s.append(r,a,o);const l=document.createElement("p");l.className="privacy-note",l.textContent="映像はすべてブラウザ内で処理され、外部に送信・保存されることはありません。",this.button=document.createElement("button"),this.button.type="button",this.button.className="start-button",this.button.textContent="カメラを開始",this.statusEl=document.createElement("p"),this.statusEl.className="hidden",this.root.append(i,n,s,l,this.button,this.statusEl),t.appendChild(this.root)}waitForStart(){return new Promise(t=>{const i=()=>{this.button.removeEventListener("click",i),t()};this.button.addEventListener("click",i)})}setLoading(t){this.button.classList.add("hidden"),this.statusEl.className="loading",this.statusEl.textContent=t}showError(t){this.statusEl.className="error",this.statusEl.textContent=t,this.button.textContent="再試行",this.button.classList.remove("hidden")}hide(){this.root.classList.add("hidden")}}const ix=new Set([15,16,27,28]),Bl=.5;function zl(e){return e===void 0?1:e}class nx{constructor(t,i){I(this,"canvas");I(this,"ctx");I(this,"video");I(this,"hud");I(this,"wrap");I(this,"gestureFlash");I(this,"detected",!1);I(this,"hudVisible",!0);I(this,"statsText","");I(this,"modeLabel","");I(this,"pushDebugText","");this.video=i;const n=document.createElement("div");this.wrap=n,n.className="video-wrap",this.canvas=document.createElement("canvas"),this.canvas.className="overlay";const s=this.canvas.getContext("2d");if(!s)throw new Error("2D canvas context を取得できませんでした");this.ctx=s,n.append(i,this.canvas),t.appendChild(n),this.hud=document.createElement("div"),this.hud.className="hud",document.body.appendChild(this.hud),this.gestureFlash=document.createElement("div"),this.gestureFlash.className="gesture-flash",document.body.appendChild(this.gestureFlash)}flashGesture(t){this.hudVisible&&(this.gestureFlash.textContent=t,this.gestureFlash.classList.remove("show"),this.gestureFlash.offsetWidth,this.gestureFlash.classList.add("show"))}draw(t){const{videoWidth:i,videoHeight:n}=this.video;i>0&&n>0&&(this.canvas.width!==i||this.canvas.height!==n)&&(this.canvas.width=i,this.canvas.height=n);const{width:s,height:r}=this.canvas;if(this.ctx.clearRect(0,0,s,r),t.landmarks===null){this.detected=!1;return}this.detected=!0;const a=t.landmarks;this.ctx.lineCap="round",this.ctx.strokeStyle="#35e0ff",this.ctx.lineWidth=3;for(const[o,l]of Du){const c=a[o],h=a[l];if(!c||!h)continue;const d=zl(c.visibility),u=zl(h.visibility);d<Bl||u<Bl||(this.ctx.globalAlpha=Math.min(d,u),this.ctx.beginPath(),this.ctx.moveTo(c.x*s,c.y*r),this.ctx.lineTo(h.x*s,h.y*r),this.ctx.stroke())}this.ctx.fillStyle="#b8f3ff",this.ctx.shadowColor="#35e0ff";for(let o=0;o<a.length;o++){const l=a[o],c=zl(l.visibility);if(c<Bl)continue;this.ctx.globalAlpha=c,this.ctx.shadowBlur=8;const h=ix.has(o)?7:5;this.ctx.beginPath(),this.ctx.arc(l.x*s,l.y*r,h,0,Math.PI*2),this.ctx.fill()}this.ctx.globalAlpha=1,this.ctx.shadowBlur=0}setStats(t){const i=this.detected?"OK":"なし";this.statsText=`描画 ${t.renderFps.toFixed(0)}fps | 推定 ${t.inferenceFps.toFixed(0)}fps / ${t.inferenceMs.toFixed(1)}ms | 検出 ${i}`,this.renderHud()}setModeLabel(t){this.modeLabel=t,this.renderHud()}setPushDebug(t,i){const n=t<0?"—":t.toFixed(2);this.pushDebugText=`押し出し量 現在 ${n} / ピーク ${i.toFixed(2)} (発火 0.22)`,this.renderHud()}renderHud(){if(!this.modeLabel){this.hud.textContent=this.statsText;return}this.hud.textContent=`${this.statsText}
${this.modeLabel} (1/2/3 切替, Space 散乱, V カメラ, D 調整, H UI)
👏 叩く=衝撃波  🙌 広げる=拡散  🙋 上げる=上昇  🫸 押し出す=噴出
`+this.pushDebugText}setPreviewVisible(t){this.wrap.classList.toggle("hidden",!t)}setHudVisible(t){this.hudVisible=t,this.hud.classList.toggle("hidden",!t),t||this.gestureFlash.classList.remove("show")}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fu="185",sx=0,wf=1,rx=2,wo=1,ax=2,pa=3,os=0,Ei=1,Dn=2,sn=0,gr=1,Fs=2,Rf=3,Cf=4,ox=5,vs=100,lx=101,cx=102,hx=103,ux=104,dx=200,fx=201,px=202,mx=203,Wc=204,Xc=205,gx=206,_x=207,xx=208,vx=209,Mx=210,Sx=211,yx=212,Ex=213,bx=214,qc=0,Yc=1,$c=2,Pr=3,Kc=4,Zc=5,Jc=6,jc=7,W0=0,Ax=1,Tx=2,vn=0,Uu=1,Nu=2,Ou=3,Bu=4,zu=5,ku=6,Hu=7,X0=300,Us=301,Lr=302,kl=303,Hl=304,Ml=306,Qc=1e3,Fn=1001,th=1002,qe=1003,wx=1004,qa=1005,hi=1006,Vl=1007,Es=1008,qi=1009,q0=1010,Y0=1011,Aa=1012,Vu=1013,Sn=1014,tn=1015,xi=1016,Gu=1017,Wu=1018,Ta=1020,$0=35902,K0=35899,Z0=1021,J0=1022,en=1023,kn=1026,bs=1027,Xu=1028,qu=1029,Ns=1030,Yu=1031,$u=1033,Ro=33776,Co=33777,Po=33778,Lo=33779,eh=35840,ih=35841,nh=35842,sh=35843,rh=36196,ah=37492,oh=37496,lh=37488,ch=37489,ko=37490,hh=37491,uh=37808,dh=37809,fh=37810,ph=37811,mh=37812,gh=37813,_h=37814,xh=37815,vh=37816,Mh=37817,Sh=37818,yh=37819,Eh=37820,bh=37821,Ah=36492,Th=36494,wh=36495,Rh=36283,Ch=36284,Ho=36285,Ph=36286,Rx=3200,Pf=0,Cx=1,es="",Wi="srgb",Vo="srgb-linear",Go="linear",_e="srgb",Js=7680,Lf=519,Px=512,Lx=513,Ix=514,Ku=515,Dx=516,Fx=517,Zu=518,Ux=519,If=35044,is=35048,Df="300 es",gn=2e3,Wo=2001;function Nx(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Xo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ox(){const e=Xo("canvas");return e.style.display="block",e}const Ff={};function Uf(...e){const t="THREE."+e.shift();console.log(t,...e)}function j0(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function qt(...e){e=j0(e);const t="THREE."+e.shift();{const i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function ue(...e){e=j0(e);const t="THREE."+e.shift();{const i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function _r(...e){const t=e.join(" ");t in Ff||(Ff[t]=!0,qt(...e))}function Bx(e,t,i){return new Promise(function(n,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,i);break;default:n()}}setTimeout(r,i)})}const zx={[qc]:Yc,[$c]:Jc,[Kc]:jc,[Pr]:Zc,[Yc]:qc,[Jc]:$c,[jc]:Kc,[Zc]:Pr};class Vs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(i)===-1&&n[t].push(i)}hasEventListener(t,i){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(i)!==-1}removeEventListener(t,i){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(i);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const n=i[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gl=Math.PI/180,Lh=180/Math.PI;function Na(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ai[e&255]+ai[e>>8&255]+ai[e>>16&255]+ai[e>>24&255]+"-"+ai[t&255]+ai[t>>8&255]+"-"+ai[t>>16&15|64]+ai[t>>24&255]+"-"+ai[i&63|128]+ai[i>>8&255]+"-"+ai[i>>16&255]+ai[i>>24&255]+ai[n&255]+ai[n>>8&255]+ai[n>>16&255]+ai[n>>24&255]).toLowerCase()}function oe(e,t,i){return Math.max(t,Math.min(i,e))}function kx(e,t){return(e%t+t)%t}function Wl(e,t,i){return(1-i)*e+i*t}function jr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const nd=class nd{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,n=this.y,s=t.elements;return this.x=s[0]*i+s[3]*n+s[6],this.y=s[1]*i+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y;return i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const n=Math.cos(i),s=Math.sin(i),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nd.prototype.isVector2=!0;let jt=nd;class Gs{constructor(t=0,i=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=n,this._w=s}static slerpFlat(t,i,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||l!==u||c!==p||h!==_){let m=l*u+c*p+h*_+d*S;m<0&&(u=-u,p=-p,_=-_,S=-S,m=-m);let f=1-o;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);f=Math.sin(f*v)/y,o=Math.sin(o*v)/y,l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+S*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+S*o;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[i]=l,t[i+1]=c,t[i+2]=h,t[i+3]=d}static multiplyQuaternionsFlat(t,i,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return t[i]=o*_+h*d+l*p-c*u,t[i+1]=l*_+h*u+c*d-o*p,t[i+2]=c*_+h*p+o*u-l*d,t[i+3]=h*_-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,n,s){return this._x=t,this._y=i,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"YZX":this._x=u*h*d+c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d-u*p*_;break;case"XZY":this._x=u*h*d-c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d+u*p*_;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const n=i/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,n=i[0],s=i[4],r=i[8],a=i[1],o=i[5],l=i[9],c=i[2],h=i[6],d=i[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let n=t.dot(i)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,i){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,i/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const n=t._x,s=t._y,r=t._z,a=t._w,o=i._x,l=i._y,c=i._z,h=i._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,i){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-i;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,i=Math.sin(i*c)/h,this._x=this._x*l+n*i,this._y=this._y*l+s*i,this._z=this._z*l+r*i,this._w=this._w*l+a*i,this._onChangeCallback()}else this._x=this._x*l+n*i,this._y=this._y*l+s*i,this._z=this._z*l+r*i,this._w=this._w*l+a*i,this.normalize();return this}slerpQuaternions(t,i,n){return this.copy(t).slerp(i,n)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(i),r*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sd=class sd{constructor(t=0,i=0,n=0){this.x=t,this.y=i,this.z=n}set(t,i,n){return n===void 0&&(n=this.z),this.x=t,this.y=i,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Nf.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Nf.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*i+r[3]*n+r[6]*s,this.y=r[1]*i+r[4]*n+r[7]*s,this.z=r[2]*i+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*i+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*i+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*i+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*i+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const i=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*i-r*s),d=2*(r*n-a*i);return this.x=i+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*i+r[4]*n+r[8]*s,this.y=r[1]*i+r[5]*n+r[9]*s,this.z=r[2]*i+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this.z=oe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this.z=oe(this.z,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const n=t.x,s=t.y,r=t.z,a=i.x,o=i.y,l=i.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const n=t.dot(this)/i;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xl.copy(this).projectOnVector(t),this.sub(Xl)}reflect(t){return this.sub(Xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return i*i+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,n){const s=Math.sin(i)*t;return this.x=s*Math.sin(n),this.y=Math.cos(i)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,n){return this.x=t*Math.sin(i),this.y=n,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=n,this.z=s,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(t),this.y=i,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sd.prototype.isVector3=!0;let k=sd;const Xl=new k,Nf=new Gs,rd=class rd{constructor(t,i,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,n,s,r,a,o,l,c)}set(t,i,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=i,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(t,i,n){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,s=i.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],_=n[8],S=s[0],m=s[3],f=s[6],v=s[1],y=s[4],M=s[7],A=s[2],b=s[5],w=s[8];return r[0]=a*S+o*v+l*A,r[3]=a*m+o*y+l*b,r[6]=a*f+o*M+l*w,r[1]=c*S+h*v+d*A,r[4]=c*m+h*y+d*b,r[7]=c*f+h*M+d*w,r[2]=u*S+p*v+_*A,r[5]=u*m+p*y+_*b,r[8]=u*f+p*M+_*w,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*a*h-i*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,i=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,_=i*d+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=d*S,t[1]=(s*c-h*n)*S,t[2]=(o*n-s*a)*S,t[3]=u*S,t[4]=(h*i-s*l)*S,t[5]=(s*r-o*i)*S,t[6]=p*S,t[7]=(n*l-c*i)*S,t[8]=(a*i-n*r)*S,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+i,0,0,1),this}scale(t,i){return _r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ql.makeScale(t,i)),this}rotate(t){return _r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ql.makeRotation(-t)),this}translate(t,i){return _r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ql.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,n=t.elements;for(let s=0;s<9;s++)if(i[s]!==n[s])return!1;return!0}fromArray(t,i=0){for(let n=0;n<9;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rd.prototype.isMatrix3=!0;let Jt=rd;const ql=new Jt,Of=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bf=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hx(){const e={enabled:!0,workingColorSpace:Vo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_e&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_e&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?Go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return e.define({[Vo]:{primaries:t,whitePoint:n,transfer:Go,toXYZ:Of,fromXYZ:Bf,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Wi},outputColorSpaceConfig:{drawingBufferColorSpace:Wi}},[Wi]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Of,fromXYZ:Bf,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Wi}}}),e}const ae=Hx();function Un(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function xr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let js;class Vx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{js===void 0&&(js=Xo("canvas")),js.width=t.width,js.height=t.height;const s=js.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=js}return n.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xo("canvas");i.width=t.width,i.height=t.height;const n=i.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),i}else if(t.data){const i=t.data.slice(0);for(let n=0;n<i.length;n++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[n]=Math.floor(Un(i[n]/255)*255):i[n]=Un(i[n]);return{data:i,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gx=0;class Ju{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Na(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yl(s[a].image)):r.push(Yl(s[a]))}else r=Yl(s);n.url=r}return i||(t.images[this.uuid]=n),n}}function Yl(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Vx.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}let Wx=0;const $l=new k;class vi extends Vs{constructor(t=vi.DEFAULT_IMAGE,i=vi.DEFAULT_MAPPING,n=Fn,s=Fn,r=hi,a=Es,o=en,l=qi,c=vi.DEFAULT_ANISOTROPY,h=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Na(),this.name="",this.source=new Ju(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const n=t[i];if(n===void 0){qt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){qt(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[i]=n}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==X0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qc:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case th:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qc:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case th:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=X0;vi.DEFAULT_ANISOTROPY=1;const ad=class ad{constructor(t=0,i=0,n=0,s=1){this.x=t,this.y=i,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,n,s){return this.x=t,this.y=i,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*i+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*i+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*i+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*i+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],_=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const y=(c+1)/2,M=(p+1)/2,A=(f+1)/2,b=(h+u)/4,w=(d+S)/4,g=(_+m)/4;return y>M&&y>A?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=w/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=g/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=g/r),this.set(n,s,r,i),this}let v=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-S)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=oe(this.x,t.x,i.x),this.y=oe(this.y,t.y,i.y),this.z=oe(this.z,t.z,i.z),this.w=oe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=oe(this.x,t,i),this.y=oe(this.y,t,i),this.z=oe(this.z,t,i),this.w=oe(this.w,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this.w=t.w+(i.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ad.prototype.isVector4=!0;let Ue=ad;class Xx extends Vs{constructor(t=1,i=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=n.depth,this.scissor=new Ue(0,0,t,i),this.scissorTest=!1,this.viewport=new Ue(0,0,t,i),this.textures=[];const s={width:t,height:i,depth:n.depth},r=new vi(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,n=1){if(this.width!==t||this.height!==i||this.depth!==n){this.width=t,this.height=i,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=i,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const s=Object.assign({},t.textures[i].image);this.textures[i].source=new Ju(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Xx{constructor(t=1,i=1,n={}){super(t,i,n),this.isWebGLRenderTarget=!0}}class Q0 extends vi{constructor(t=null,i=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qx extends vi{constructor(t=null,i=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zo=class Zo{constructor(t,i,n,s,r,a,o,l,c,h,d,u,p,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,n,s,r,a,o,l,c,h,d,u,p,_,S,m)}set(t,i,n,s,r,a,o,l,c,h,d,u,p,_,S,m){const f=this.elements;return f[0]=t,f[4]=i,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zo().fromArray(this.elements)}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(t){const i=this.elements,n=t.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,n){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,i,n){return this.set(t.x,i.x,n.x,0,t.y,i.y,n.y,0,t.z,i.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,n=t.elements,s=1/Qs.setFromMatrixColumn(t,0).length(),r=1/Qs.setFromMatrixColumn(t,1).length(),a=1/Qs.setFromMatrixColumn(t,2).length();return i[0]=n[0]*s,i[1]=n[1]*s,i[2]=n[2]*s,i[3]=0,i[4]=n[4]*r,i[5]=n[5]*r,i[6]=n[6]*r,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,_=o*h,S=o*d;i[0]=l*h,i[4]=-l*d,i[8]=c,i[1]=p+_*c,i[5]=u-S*c,i[9]=-o*l,i[2]=S-u*c,i[6]=_+p*c,i[10]=a*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,_=c*h,S=c*d;i[0]=u+S*o,i[4]=_*o-p,i[8]=a*c,i[1]=a*d,i[5]=a*h,i[9]=-o,i[2]=p*o-_,i[6]=S+u*o,i[10]=a*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,_=c*h,S=c*d;i[0]=u-S*o,i[4]=-a*d,i[8]=_+p*o,i[1]=p+_*o,i[5]=a*h,i[9]=S-u*o,i[2]=-a*c,i[6]=o,i[10]=a*l}else if(t.order==="ZYX"){const u=a*h,p=a*d,_=o*h,S=o*d;i[0]=l*h,i[4]=_*c-p,i[8]=u*c+S,i[1]=l*d,i[5]=S*c+u,i[9]=p*c-_,i[2]=-c,i[6]=o*l,i[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,_=o*l,S=o*c;i[0]=l*h,i[4]=S-u*d,i[8]=_*d+p,i[1]=d,i[5]=a*h,i[9]=-o*h,i[2]=-c*h,i[6]=p*d+_,i[10]=u-S*d}else if(t.order==="XZY"){const u=a*l,p=a*c,_=o*l,S=o*c;i[0]=l*h,i[4]=-d,i[8]=c*h,i[1]=u*d+S,i[5]=a*h,i[9]=p*d-_,i[2]=_*d-p,i[6]=o*h,i[10]=S*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yx,t,$x)}lookAt(t,i,n){const s=this.elements;return Ci.subVectors(t,i),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Yn.crossVectors(n,Ci),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Yn.crossVectors(n,Ci)),Yn.normalize(),Ya.crossVectors(Ci,Yn),s[0]=Yn.x,s[4]=Ya.x,s[8]=Ci.x,s[1]=Yn.y,s[5]=Ya.y,s[9]=Ci.y,s[2]=Yn.z,s[6]=Ya.z,s[10]=Ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,s=i.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],_=n[2],S=n[6],m=n[10],f=n[14],v=n[3],y=n[7],M=n[11],A=n[15],b=s[0],w=s[4],g=s[8],T=s[12],P=s[1],C=s[5],L=s[9],F=s[13],H=s[2],O=s[6],V=s[10],N=s[14],Z=s[3],it=s[7],ct=s[11],ot=s[15];return r[0]=a*b+o*P+l*H+c*Z,r[4]=a*w+o*C+l*O+c*it,r[8]=a*g+o*L+l*V+c*ct,r[12]=a*T+o*F+l*N+c*ot,r[1]=h*b+d*P+u*H+p*Z,r[5]=h*w+d*C+u*O+p*it,r[9]=h*g+d*L+u*V+p*ct,r[13]=h*T+d*F+u*N+p*ot,r[2]=_*b+S*P+m*H+f*Z,r[6]=_*w+S*C+m*O+f*it,r[10]=_*g+S*L+m*V+f*ct,r[14]=_*T+S*F+m*N+f*ot,r[3]=v*b+y*P+M*H+A*Z,r[7]=v*w+y*C+M*O+A*it,r[11]=v*g+y*L+M*V+A*ct,r[15]=v*T+y*F+M*N+A*ot,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],_=t[3],S=t[7],m=t[11],f=t[15],v=l*p-c*u,y=o*p-c*d,M=o*u-l*d,A=a*p-c*h,b=a*u-l*h,w=a*d-o*h;return i*(S*v-m*y+f*M)-n*(_*v-m*A+f*b)+s*(_*y-S*A+f*w)-r*(_*M-S*b+m*w)}determinantAffine(){const t=this.elements,i=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=i,s[14]=n),this}invert(){const t=this.elements,i=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],_=t[12],S=t[13],m=t[14],f=t[15],v=i*o-n*a,y=i*l-s*a,M=i*c-r*a,A=n*l-s*o,b=n*c-r*o,w=s*c-r*l,g=h*S-d*_,T=h*m-u*_,P=h*f-p*_,C=d*m-u*S,L=d*f-p*S,F=u*f-p*m,H=v*F-y*L+M*C+A*P-b*T+w*g;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return t[0]=(o*F-l*L+c*C)*O,t[1]=(s*L-n*F-r*C)*O,t[2]=(S*w-m*b+f*A)*O,t[3]=(u*b-d*w-p*A)*O,t[4]=(l*P-a*F-c*T)*O,t[5]=(i*F-s*P+r*T)*O,t[6]=(m*M-_*w-f*y)*O,t[7]=(h*w-u*M+p*y)*O,t[8]=(a*L-o*P+c*g)*O,t[9]=(n*P-i*L-r*g)*O,t[10]=(_*b-S*M+f*v)*O,t[11]=(d*M-h*b-p*v)*O,t[12]=(o*T-a*C-l*g)*O,t[13]=(i*C-n*T+s*g)*O,t[14]=(S*y-_*A-m*v)*O,t[15]=(h*A-d*y+u*v)*O,this}scale(t){const i=this.elements,n=t.x,s=t.y,r=t.z;return i[0]*=n,i[4]*=s,i[8]*=r,i[1]*=n,i[5]*=s,i[9]*=r,i[2]*=n,i[6]*=s,i[10]*=r,i[3]*=n,i[7]*=s,i[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,n,s))}makeTranslation(t,i,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const n=Math.cos(i),s=Math.sin(i),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,i,n){return this.set(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,i,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,i,s,1,0,0,0,0,1),this}compose(t,i,n){const s=this.elements,r=i._x,a=i._y,o=i._z,l=i._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,_=r*d,S=a*h,m=a*d,f=o*d,v=l*c,y=l*h,M=l*d,A=n.x,b=n.y,w=n.z;return s[0]=(1-(S+f))*A,s[1]=(p+M)*A,s[2]=(_-y)*A,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(u+f))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(_+y)*w,s[9]=(m-v)*w,s[10]=(1-(u+S))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,i,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),i.identity(),this;let a=Qs.set(s[0],s[1],s[2]).length();const o=Qs.set(s[4],s[5],s[6]).length(),l=Qs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zi.copy(this);const c=1/a,h=1/o,d=1/l;return Zi.elements[0]*=c,Zi.elements[1]*=c,Zi.elements[2]*=c,Zi.elements[4]*=h,Zi.elements[5]*=h,Zi.elements[6]*=h,Zi.elements[8]*=d,Zi.elements[9]*=d,Zi.elements[10]*=d,i.setFromRotationMatrix(Zi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,i,n,s,r,a,o=gn,l=!1){const c=this.elements,h=2*r/(i-t),d=2*r/(n-s),u=(i+t)/(i-t),p=(n+s)/(n-s);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===gn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Wo)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,n,s,r,a,o=gn,l=!1){const c=this.elements,h=2/(i-t),d=2/(n-s),u=-(i+t)/(i-t),p=-(n+s)/(n-s);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===gn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Wo)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const i=this.elements,n=t.elements;for(let s=0;s<16;s++)if(i[s]!==n[s])return!1;return!0}fromArray(t,i=0){for(let n=0;n<16;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t[i+9]=n[9],t[i+10]=n[10],t[i+11]=n[11],t[i+12]=n[12],t[i+13]=n[13],t[i+14]=n[14],t[i+15]=n[15],t}};Zo.prototype.isMatrix4=!0;let be=Zo;const Qs=new k,Zi=new be,Yx=new k(0,0,0),$x=new k(1,1,1),Yn=new k,Ya=new k,Ci=new k,zf=new be,kf=new Gs;class Os{constructor(t=0,i=0,n=0,s=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,s=this._order){return this._x=t,this._y=i,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(i){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return zf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zf,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return kf.setFromEuler(this),this.setFromQuaternion(kf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class t1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kx=0;const Hf=new k,tr=new Gs,wn=new be,$a=new k,Qr=new k,Zx=new k,Jx=new Gs,Vf=new k(1,0,0),Gf=new k(0,1,0),Wf=new k(0,0,1),Xf={type:"added"},jx={type:"removed"},er={type:"childadded",child:null},Kl={type:"childremoved",child:null};class Mi extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mi.DEFAULT_UP.clone();const t=new k,i=new Os,n=new Gs,s=new k(1,1,1);function r(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Jt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return tr.setFromAxisAngle(t,i),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,i){return tr.setFromAxisAngle(t,i),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(Vf,t)}rotateY(t){return this.rotateOnAxis(Gf,t)}rotateZ(t){return this.rotateOnAxis(Wf,t)}translateOnAxis(t,i){return Hf.copy(t).applyQuaternion(this.quaternion),this.position.add(Hf.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Vf,t)}translateY(t){return this.translateOnAxis(Gf,t)}translateZ(t){return this.translateOnAxis(Wf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?$a.copy(t):$a.set(t,i,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Qr,$a,this.up):wn.lookAt($a,Qr,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(wn),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xf),er.child=t,this.dispatchEvent(er),er.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(jx),Kl.child=t,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xf),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,Zx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Jx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=i-r[0]*i-r[4]*n-r[8]*s,r[13]+=n-r[1]*i-r[5]*n-r[9]*s,r[14]+=s-r[2]*i-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),i===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(i){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Mi.DEFAULT_UP=new k(0,1,0);Mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ka extends Mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qx={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const n of t.hand.values())this._getHandJoint(i,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=i.getJointPose(S,n),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=i.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=i.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const n=new Ka;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[i.jointName]=n,t.add(n)}return t.joints[i.jointName]}}const e1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Jl(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}class Yt{constructor(t,i,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,n)}set(t,i,n){if(i===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,i,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Wi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,i),this}setRGB(t,i,n,s=ae.workingColorSpace){return this.r=t,this.g=i,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,i,n,s=ae.workingColorSpace){if(t=kx(t,1),i=oe(i,0,1),n=oe(n,0,1),i===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+i):n+i-n*i,a=2*n-r;this.r=Jl(a,r,t+1/3),this.g=Jl(a,r,t),this.b=Jl(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,i=Wi){function n(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,i);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,i);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,i);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,i);if(a===6)return this.setHex(parseInt(r,16),i);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Wi){const n=e1[t.toLowerCase()];return n!==void 0?this.setHex(n,i):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wi){return ae.workingToColorSpace(oi.copy(this),t),Math.round(oe(oi.r*255,0,255))*65536+Math.round(oe(oi.g*255,0,255))*256+Math.round(oe(oi.b*255,0,255))}getHexString(t=Wi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ae.workingColorSpace){ae.workingToColorSpace(oi.copy(this),i);const n=oi.r,s=oi.g,r=oi.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,i=ae.workingColorSpace){return ae.workingToColorSpace(oi.copy(this),i),t.r=oi.r,t.g=oi.g,t.b=oi.b,t}getStyle(t=Wi){ae.workingToColorSpace(oi.copy(this),t);const i=oi.r,n=oi.g,s=oi.b;return t!==Wi?`color(${t} ${i.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,i,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+i,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,n){return this.r=t.r+(i.r-t.r)*n,this.g=t.g+(i.g-t.g)*n,this.b=t.b+(i.b-t.b)*n,this}lerpHSL(t,i){this.getHSL($n),t.getHSL(Za);const n=Wl($n.h,Za.h,i),s=Wl($n.s,Za.s,i),r=Wl($n.l,Za.l,i);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*i+r[3]*n+r[6]*s,this.g=r[1]*i+r[4]*n+r[7]*s,this.b=r[2]*i+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const oi=new Yt;Yt.NAMES=e1;class ju{constructor(t,i=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=i,this.far=n}clone(){return new ju(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tv extends Mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Os,this.environmentIntensity=1,this.environmentRotation=new Os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ji=new k,Rn=new k,jl=new k,Cn=new k,ir=new k,nr=new k,qf=new k,Ql=new k,tc=new k,ec=new k,ic=new Ue,nc=new Ue,sc=new Ue;class Qi{constructor(t=new k,i=new k,n=new k){this.a=t,this.b=i,this.c=n}static getNormal(t,i,n,s){s.subVectors(n,i),Ji.subVectors(t,i),s.cross(Ji);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,i,n,s,r){Ji.subVectors(s,i),Rn.subVectors(n,i),jl.subVectors(t,i);const a=Ji.dot(Ji),o=Ji.dot(Rn),l=Ji.dot(jl),c=Rn.dot(Rn),h=Rn.dot(jl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,i,n,s){return this.getBarycoord(t,i,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,i,n,s,r,a,o,l){return this.getBarycoord(t,i,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,i,n,s,r,a){return ic.setScalar(0),nc.setScalar(0),sc.setScalar(0),ic.fromBufferAttribute(t,i),nc.fromBufferAttribute(t,n),sc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ic,r.x),a.addScaledVector(nc,r.y),a.addScaledVector(sc,r.z),a}static isFrontFacing(t,i,n,s){return Ji.subVectors(n,i),Rn.subVectors(t,i),Ji.cross(Rn).dot(s)<0}set(t,i,n){return this.a.copy(t),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(t,i,n,s){return this.a.copy(t[i]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,i,n,s){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ji.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),Ji.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Qi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,n,s,r){return Qi.getInterpolation(t,this.a,this.b,this.c,i,n,s,r)}containsPoint(t){return Qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const n=this.a,s=this.b,r=this.c;let a,o;ir.subVectors(s,n),nr.subVectors(r,n),Ql.subVectors(t,n);const l=ir.dot(Ql),c=nr.dot(Ql);if(l<=0&&c<=0)return i.copy(n);tc.subVectors(t,s);const h=ir.dot(tc),d=nr.dot(tc);if(h>=0&&d<=h)return i.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),i.copy(n).addScaledVector(ir,a);ec.subVectors(t,r);const p=ir.dot(ec),_=nr.dot(ec);if(_>=0&&p<=_)return i.copy(r);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),i.copy(n).addScaledVector(nr,o);const m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return qf.subVectors(r,s),o=(d-h)/(d-h+(p-_)),i.copy(s).addScaledVector(qf,o);const f=1/(m+S+u);return a=S*f,o=u*f,i.copy(n).addScaledVector(ir,a).addScaledVector(nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ws{constructor(t=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,n=t.length;i<n;i+=3)this.expandByPoint(ji.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,n=t.count;i<n;i++)this.expandByPoint(ji.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,n=t.length;i<n;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const n=ji.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(i===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ji):ji.fromBufferAttribute(r,a),ji.applyMatrix4(t.matrixWorld),this.expandByPoint(ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ja.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ja.copy(n.boundingBox)),Ja.applyMatrix4(t.matrixWorld),this.union(Ja)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ji),ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,n;return t.normal.x>0?(i=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),i<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ta),ja.subVectors(this.max,ta),sr.subVectors(t.a,ta),rr.subVectors(t.b,ta),ar.subVectors(t.c,ta),Kn.subVectors(rr,sr),Zn.subVectors(ar,rr),ds.subVectors(sr,ar);let i=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-ds.z,ds.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,ds.z,0,-ds.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-ds.y,ds.x,0];return!rc(i,sr,rr,ar,ja)||(i=[1,0,0,0,1,0,0,0,1],!rc(i,sr,rr,ar,ja))?!1:(Qa.crossVectors(Kn,Zn),i=[Qa.x,Qa.y,Qa.z],rc(i,sr,rr,ar,ja))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new k,new k,new k,new k,new k,new k,new k,new k],ji=new k,Ja=new Ws,sr=new k,rr=new k,ar=new k,Kn=new k,Zn=new k,ds=new k,ta=new k,ja=new k,Qa=new k,fs=new k;function rc(e,t,i,n,s){for(let r=0,a=e.length-3;r<=a;r+=3){fs.fromArray(e,r);const o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=t.dot(fs),c=i.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const He=new k,to=new jt;let ev=0;class Ye extends Vs{constructor(t,i,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ev++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=n,this.usage=If,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,n){t*=this.itemSize,n*=i.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=i.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,n=this.count;i<n;i++)to.fromBufferAttribute(this,i),to.applyMatrix3(t),this.setXY(i,to.x,to.y);else if(this.itemSize===3)for(let i=0,n=this.count;i<n;i++)He.fromBufferAttribute(this,i),He.applyMatrix3(t),this.setXYZ(i,He.x,He.y,He.z);return this}applyMatrix4(t){for(let i=0,n=this.count;i<n;i++)He.fromBufferAttribute(this,i),He.applyMatrix4(t),this.setXYZ(i,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let i=0,n=this.count;i<n;i++)He.fromBufferAttribute(this,i),He.applyNormalMatrix(t),this.setXYZ(i,He.x,He.y,He.z);return this}transformDirection(t){for(let i=0,n=this.count;i<n;i++)He.fromBufferAttribute(this,i),He.transformDirection(t),this.setXYZ(i,He.x,He.y,He.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let n=this.array[t*this.itemSize+i];return this.normalized&&(n=jr(n,this.array)),n}setComponent(t,i,n){return this.normalized&&(n=yi(n,this.array)),this.array[t*this.itemSize+i]=n,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=jr(i,this.array)),i}setX(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=jr(i,this.array)),i}setY(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=jr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=jr(i,this.array)),i}setW(t,i){return this.normalized&&(i=yi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,n){return t*=this.itemSize,this.normalized&&(i=yi(i,this.array),n=yi(n,this.array)),this.array[t+0]=i,this.array[t+1]=n,this}setXYZ(t,i,n,s){return t*=this.itemSize,this.normalized&&(i=yi(i,this.array),n=yi(n,this.array),s=yi(s,this.array)),this.array[t+0]=i,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,i,n,s,r){return t*=this.itemSize,this.normalized&&(i=yi(i,this.array),n=yi(n,this.array),s=yi(s,this.array),r=yi(r,this.array)),this.array[t+0]=i,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==If&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class i1 extends Ye{constructor(t,i,n){super(new Uint16Array(t),i,n)}}class n1 extends Ye{constructor(t,i,n){super(new Uint32Array(t),i,n)}}class ni extends Ye{constructor(t,i,n){super(new Float32Array(t),i,n)}}const iv=new Ws,ea=new k,ac=new k;class Hn{constructor(t=new k,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const n=this.center;i!==void 0?n.copy(i):iv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const n=this.center.distanceToSquared(t);return i.copy(t),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ea.subVectors(t,this.center);const i=ea.lengthSq();if(i>this.radius*this.radius){const n=Math.sqrt(i),s=(n-this.radius)*.5;this.center.addScaledVector(ea,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ea.copy(t.center).add(ac)),this.expandByPoint(ea.copy(t.center).sub(ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let nv=0;const Gi=new be,oc=new Mi,or=new k,Pi=new Ws,ia=new Ws,ti=new k;class pi extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nx(t)?n1:i1)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,n=0){this.groups.push({start:t,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gi.makeRotationFromQuaternion(t),this.applyMatrix4(Gi),this}rotateX(t){return Gi.makeRotationX(t),this.applyMatrix4(Gi),this}rotateY(t){return Gi.makeRotationY(t),this.applyMatrix4(Gi),this}rotateZ(t){return Gi.makeRotationZ(t),this.applyMatrix4(Gi),this}translate(t,i,n){return Gi.makeTranslation(t,i,n),this.applyMatrix4(Gi),this}scale(t,i,n){return Gi.makeScale(t,i,n),this.applyMatrix4(Gi),this}lookAt(t){return oc.lookAt(t),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ni(n,3))}else{const n=Math.min(t.length,i.count);for(let s=0;s<n;s++){const r=t[s];i.setXYZ(s,r.x,r.y,r.z||0)}t.length>i.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){const r=i[n];Pi.setFromBufferAttribute(r),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Pi.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){const o=i[r];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(ti.addVectors(Pi.min,ia.min),Pi.expandByPoint(ti),ti.addVectors(Pi.max,ia.max),Pi.expandByPoint(ti)):(Pi.expandByPoint(ia.min),Pi.expandByPoint(ia.max))}Pi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ti.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ti));if(i)for(let r=0,a=i.length;r<a;r++){const o=i[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ti.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(t,c),ti.add(or)),s=Math.max(s,n.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,s=i.normal,r=i.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new k,l[g]=new k;const c=new k,h=new k,d=new k,u=new jt,p=new jt,_=new jt,S=new k,m=new k;function f(g,T,P){c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,g),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,P),h.sub(c),d.sub(c),p.sub(u),_.sub(u);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(C),o[g].add(S),o[T].add(S),o[P].add(S),l[g].add(m),l[T].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let g=0,T=v.length;g<T;++g){const P=v[g],C=P.start,L=P.count;for(let F=C,H=C+L;F<H;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new k,M=new k,A=new k,b=new k;function w(g){A.fromBufferAttribute(s,g),b.copy(A);const T=o[g];y.copy(T),y.sub(A.multiplyScalar(A.dot(T))).normalize(),M.crossVectors(b,T);const C=M.dot(l[g])<0?-1:1;a.setXYZW(g,y.x,y.y,y.z,C)}for(let g=0,T=v.length;g<T;++g){const P=v[g],C=P.start,L=P.count;for(let F=C,H=C+L;F<H;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==i.count)n=new Ye(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let u=0,p=t.count;u<p;u+=3){const _=t.getX(u+0),S=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(i,_),r.fromBufferAttribute(i,S),a.fromBufferAttribute(i,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=i.count;u<p;u+=3)s.fromBufferAttribute(i,u+0),r.fromBufferAttribute(i,u+1),a.fromBufferAttribute(i,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,n=t.count;i<n;i++)ti.fromBufferAttribute(t,i),ti.normalize(),t.setXYZ(i,ti.x,ti.y,ti.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let f=0;f<h;f++)u[_++]=c[p++]}return new Ye(u,h,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pi,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);i.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(i))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sv=0;class $r extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=gr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const n=t[i];if(n===void 0){qt(`Material: parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){qt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[i]=n}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==os&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Xc&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(i){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let n=null;if(i!==null){const s=i.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=i[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ln=new k,lc=new k,eo=new k,Jn=new k,cc=new k,io=new k,hc=new k;class Qu{constructor(t=new k,i=new k(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const n=i.dot(this.direction);return n<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ln.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,i),Ln.distanceToSquared(t))}distanceSqToSegment(t,i,n,s){lc.copy(t).add(i).multiplyScalar(.5),eo.copy(i).sub(t).normalize(),Jn.copy(this.origin).sub(lc);const r=t.distanceTo(i)*.5,a=-this.direction.dot(eo),o=Jn.dot(this.direction),l=-Jn.dot(eo),c=Jn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const S=1/h;d*=S,u*=S,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lc).addScaledVector(eo,u),p}intersectSphere(t,i){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,i):this.at(o,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/i;return n>=0?n:null}intersectPlane(t,i){const n=this.distanceToPlane(t);return n===null?null:this.at(n,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,i)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,i,n,s,r){cc.subVectors(i,t),io.subVectors(n,t),hc.crossVectors(cc,io);let a=this.direction.dot(hc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);const l=o*this.direction.dot(io.crossVectors(Jn,io));if(l<0)return null;const c=o*this.direction.dot(cc.cross(Jn));if(c<0||l+c>a)return null;const h=-o*Jn.dot(hc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ir extends $r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Os,this.combine=W0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yf=new be,ps=new Qu,no=new Hn,$f=new k,so=new k,ro=new k,ao=new k,uc=new k,oo=new k,Kf=new k,lo=new k;class Ni extends Mi{constructor(t=new pi,i=new Ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){const s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,i){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;i.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(uc.fromBufferAttribute(d,t),a?oo.addScaledVector(uc,h):oo.addScaledVector(uc.sub(i),h))}i.add(oo)}return i}raycast(t,i){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!(no.containsPoint(ps.origin)===!1&&(ps.intersectSphere(no,$f)===null||ps.origin.distanceToSquared($f)>(t.far-t.near)**2))&&(Yf.copy(r).invert(),ps.copy(t.ray).applyMatrix4(Yf),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,i,ps)))}_computeIntersections(t,i,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,A=y;M<A;M+=3){const b=o.getX(M),w=o.getX(M+1),g=o.getX(M+2);s=co(this,f,t,n,c,h,d,b,w,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,i.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const v=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);s=co(this,a,t,n,c,h,d,v,y,M),s&&(s.faceIndex=Math.floor(m/3),i.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,A=y;M<A;M+=3){const b=M,w=M+1,g=M+2;s=co(this,f,t,n,c,h,d,b,w,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,i.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const v=m,y=m+1,M=m+2;s=co(this,a,t,n,c,h,d,v,y,M),s&&(s.faceIndex=Math.floor(m/3),i.push(s))}}}}function rv(e,t,i,n,s,r,a,o){let l;if(t.side===Ei?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===os,o),l===null)return null;lo.copy(o),lo.applyMatrix4(e.matrixWorld);const c=i.ray.origin.distanceTo(lo);return c<i.near||c>i.far?null:{distance:c,point:lo.clone(),object:e}}function co(e,t,i,n,s,r,a,o,l,c){e.getVertexPosition(o,so),e.getVertexPosition(l,ro),e.getVertexPosition(c,ao);const h=rv(e,t,i,n,so,ro,ao,Kf);if(h){const d=new k;Qi.getBarycoord(Kf,so,ro,ao,d),s&&(h.uv=Qi.getInterpolatedAttribute(s,o,l,c,d,new jt)),r&&(h.uv1=Qi.getInterpolatedAttribute(r,o,l,c,d,new jt)),a&&(h.normal=Qi.getInterpolatedAttribute(a,o,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new k,materialIndex:0};Qi.getNormal(so,ro,ao,u.normal),h.face=u,h.barycoord=d}return h}class s1 extends vi{constructor(t=null,i=1,n=1,s,r,a,o,l,c=qe,h=qe,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:i,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zf extends Ye{constructor(t,i,n,s=1){super(t,i,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const lr=new be,Jf=new be,ho=[],jf=new Ws,av=new be,na=new Ni,sa=new Hn;class Qf extends Ni{constructor(t,i,n){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Zf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,av)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Ws),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<i;n++)this.getMatrixAt(n,lr),jf.copy(t.boundingBox).applyMatrix4(lr),this.boundingBox.union(jf)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<i;n++)this.getMatrixAt(n,lr),sa.copy(t.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(sa)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const n=i.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,i){const n=this.matrixWorld,s=this.count;if(na.geometry=this.geometry,na.material=this.material,na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),t.ray.intersectsSphere(sa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lr),Jf.multiplyMatrices(n,lr),na.matrixWorld=Jf,na.raycast(t,ho);for(let a=0,o=ho.length;a<o;a++){const l=ho[a];l.instanceId=r,l.object=this,i.push(l)}ho.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new Zf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const n=i.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new s1(new Float32Array(s*this.count),s,this.count,Xu,tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const dc=new k,ov=new k,lv=new Jt;class xs{constructor(t=new k(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,n,s){return this.normal.set(t,i,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,n){const s=dc.subVectors(n,i).cross(ov.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,n=!0){const s=t.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:i.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const i=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return i<0&&n>0||n<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const n=i||lv.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Hn,cv=new jt(.5,.5),uo=new k;class r1{constructor(t=new xs,i=new xs,n=new xs,s=new xs,r=new xs,a=new xs){this.planes=[t,i,n,s,r,a]}set(t,i,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(i),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const i=this.planes;for(let n=0;n<6;n++)i[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,i=gn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],_=r[8],S=r[9],m=r[10],f=r[11],v=r[12],y=r[13],M=r[14],A=r[15];if(s[0].setComponents(c-a,p-h,f-_,A-v).normalize(),s[1].setComponents(c+a,p+h,f+_,A+v).normalize(),s[2].setComponents(c+o,p+d,f+S,A+y).normalize(),s[3].setComponents(c-o,p-d,f-S,A-y).normalize(),n)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,p-u,f-m,A-M).normalize();else if(s[4].setComponents(c-l,p-u,f-m,A-M).normalize(),i===gn)s[5].setComponents(c+l,p+u,f+m,A+M).normalize();else if(i===Wo)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);const i=cv.distanceTo(t.center);return ms.radius=.7071067811865476+i,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){const i=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(i[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const i=this.planes;for(let n=0;n<6;n++){const s=i[n];if(uo.x=s.normal.x>0?t.max.x:t.min.x,uo.y=s.normal.y>0?t.max.y:t.min.y,uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let n=0;n<6;n++)if(i[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class a1 extends $r{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qo=new k,Yo=new k,tp=new be,ra=new Qu,fo=new Hn,fc=new k,ep=new k;class hv extends Mi{constructor(t=new pi,i=new a1){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,n=[0];for(let s=1,r=i.count;s<r;s++)qo.fromBufferAttribute(i,s-1),Yo.fromBufferAttribute(i,s),n[s]=n[s-1],n[s]+=qo.distanceTo(Yo);t.setAttribute("lineDistance",new ni(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,t.ray.intersectsSphere(fo)===!1)return;tp.copy(s).invert(),ra.copy(t.ray).applyMatrix4(tp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=p,m=_-1;S<m;S+=c){const f=h.getX(S),v=h.getX(S+1),y=po(this,t,ra,l,f,v,S);y&&i.push(y)}if(this.isLineLoop){const S=h.getX(_-1),m=h.getX(p),f=po(this,t,ra,l,S,m,_-1);f&&i.push(f)}}else{const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=p,m=_-1;S<m;S+=c){const f=po(this,t,ra,l,S,S+1,S);f&&i.push(f)}if(this.isLineLoop){const S=po(this,t,ra,l,_-1,p,_-1);S&&i.push(S)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){const s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function po(e,t,i,n,s,r,a){const o=e.geometry.attributes.position;if(qo.fromBufferAttribute(o,s),Yo.fromBufferAttribute(o,r),i.distanceSqToSegment(qo,Yo,fc,ep)>n)return;fc.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(fc);if(!(c<t.near||c>t.far))return{distance:c,point:ep.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}const ip=new k,np=new k;class uv extends hv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,n=[];for(let s=0,r=i.count;s<r;s+=2)ip.fromBufferAttribute(i,s),np.fromBufferAttribute(i,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ip.distanceTo(np);t.setAttribute("lineDistance",new ni(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dv extends $r{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sp=new be,Ih=new Qu,mo=new Hn,go=new k;class fv extends Mi{constructor(t=new pi,i=new dv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,t.ray.intersectsSphere(mo)===!1)return;sp.copy(s).invert(),Ih.copy(t.ray).applyMatrix4(sp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,S=p;_<S;_++){const m=c.getX(_);go.fromBufferAttribute(d,m),rp(go,m,l,s,t,i,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=u,S=p;_<S;_++)go.fromBufferAttribute(d,_),rp(go,_,l,s,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){const s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rp(e,t,i,n,s,r,a){const o=Ih.distanceSqToPoint(e);if(o<i){const l=new k;Ih.closestPointToPoint(e,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class o1 extends vi{constructor(t=[],i=Us,n,s,r,a,o,l,c,h){super(t,i,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dr extends vi{constructor(t,i,n=Sn,s,r,a,o=qe,l=qe,c,h=kn,d=1){if(h!==kn&&h!==bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:i,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ju(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class pv extends Dr{constructor(t,i=Sn,n=Us,s,r,a=qe,o=qe,l,c=kn){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,i,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class l1 extends vi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Kr extends pi{constructor(t=1,i=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;_("z","y","x",-1,-1,n,i,t,a,r,0),_("z","y","x",1,-1,n,i,-t,a,r,1),_("x","z","y",1,1,t,n,i,s,a,2),_("x","z","y",1,-1,t,n,-i,s,a,3),_("x","y","z",1,-1,t,i,n,s,r,4),_("x","y","z",-1,-1,t,i,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ni(c,3)),this.setAttribute("normal",new ni(h,3)),this.setAttribute("uv",new ni(d,2));function _(S,m,f,v,y,M,A,b,w,g,T){const P=M/w,C=A/g,L=M/2,F=A/2,H=b/2,O=w+1,V=g+1;let N=0,Z=0;const it=new k;for(let ct=0;ct<V;ct++){const ot=ct*C-F;for(let ht=0;ht<O;ht++){const Mt=ht*P-L;it[S]=Mt*v,it[m]=ot*y,it[f]=H,c.push(it.x,it.y,it.z),it[S]=0,it[m]=0,it[f]=b>0?1:-1,h.push(it.x,it.y,it.z),d.push(ht/w),d.push(1-ct/g),N+=1}}for(let ct=0;ct<g;ct++)for(let ot=0;ot<w;ot++){const ht=u+ot+O*ct,Mt=u+ot+O*(ct+1),nt=u+(ot+1)+O*(ct+1),ut=u+(ot+1)+O*ct;l.push(ht,Mt,ut),l.push(Mt,nt,ut),Z+=6}o.addGroup(p,Z,T),p+=Z,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Sl extends pi{constructor(t=1,i=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:s};const r=t/2,a=i/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=i/l,p=[],_=[],S=[],m=[];for(let f=0;f<h;f++){const v=f*u-a;for(let y=0;y<c;y++){const M=y*d-r;_.push(M,-v,0),S.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const y=v+c*f,M=v+c*(f+1),A=v+1+c*(f+1),b=v+1+c*f;p.push(y,M,b),p.push(M,A,b)}this.setIndex(p),this.setAttribute("position",new ni(_,3)),this.setAttribute("normal",new ni(S,3)),this.setAttribute("uv",new ni(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.width,t.height,t.widthSegments,t.heightSegments)}}class td extends pi{constructor(t=1,i=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},i=Math.max(3,Math.floor(i)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new k,u=new k,p=[],_=[],S=[],m=[];for(let f=0;f<=n;f++){const v=[],y=f/n,M=a+y*o,A=t*Math.cos(M),b=Math.sqrt(t*t-A*A);let w=0;f===0&&a===0?w=.5/i:f===n&&l===Math.PI&&(w=-.5/i);for(let g=0;g<=i;g++){const T=g/i,P=s+T*r;d.x=-b*Math.cos(P),d.y=A,d.z=b*Math.sin(P),_.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),m.push(T+w,1-y),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<i;v++){const y=h[f][v+1],M=h[f][v],A=h[f+1][v],b=h[f+1][v+1];(f!==0||a>0)&&p.push(y,M,b),(f!==n-1||l<Math.PI)&&p.push(M,A,b)}this.setIndex(p),this.setAttribute("position",new ni(_,3)),this.setAttribute("normal",new ni(S,3)),this.setAttribute("uv",new ni(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new td(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Fr(e){const t={};for(const i in e){t[i]={};for(const n in e[i]){const s=e[i][n];if(ap(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=s.clone();else if(Array.isArray(s))if(ap(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[i][n]=r}else t[i][n]=s.slice();else t[i][n]=s}}return t}function gi(e){const t={};for(let i=0;i<e.length;i++){const n=Fr(e[i]);for(const s in n)t[s]=n[s]}return t}function ap(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function mv(e){const t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function c1(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Bs={clone:Fr,merge:gi};var gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_v=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $e extends $r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gv,this.fragmentShader=_v,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=mv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?i.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?i.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?i.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?i.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?i.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?i.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?i.uniforms[s]={type:"m4",value:a.toArray()}:i.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(i.extensions=n),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=i[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new jt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class h1 extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xv extends $r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vv extends $r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _o=new k,xo=new Gs,dn=new k;class u1 extends Mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_o,xo,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,xo,dn.set(1,1,1)).invert()}updateWorldMatrix(t,i,n=!1){super.updateWorldMatrix(t,i,n),this.matrixWorld.decompose(_o,xo,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,xo,dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jn=new k,op=new jt,lp=new jt;class Xi extends u1{constructor(t=50,i=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(Gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,i){return this.getViewBounds(t,op,lp),i.subVectors(lp,op)}setViewOffset(t,i,n,s,r,a){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Gl*.5*this.fov)/this.zoom,n=2*i,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,i-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,i,i-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ed extends u1{constructor(t=-1,i=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+i,l=s-i;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const cr=-90,hr=1;class Mv extends Mi{constructor(t,i,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xi(cr,hr,t,i);s.layers=this.layers,this.add(s);const r=new Xi(cr,hr,t,i);r.layers=this.layers,this.add(r);const a=new Xi(cr,hr,t,i);a.layers=this.layers,this.add(a);const o=new Xi(cr,hr,t,i);o.layers=this.layers,this.add(o);const l=new Xi(cr,hr,t,i);l.layers=this.layers,this.add(l);const c=new Xi(cr,hr,t,i);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[n,s,r,a,o,l]=i;for(const c of i)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of i)this.add(c),c.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(i,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(i,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(i,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(i,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(d,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Sv extends Xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class yv{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ev.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Ev(){this._document.hidden===!1&&this.reset()}const od=class od{constructor(t,i,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let n=0;n<4;n++)this.elements[n]=t[n+i];return this}set(t,i,n,s){const r=this.elements;return r[0]=t,r[2]=i,r[1]=n,r[3]=s,this}};od.prototype.isMatrix2=!0;let cp=od;class bv extends uv{constructor(t=10,i=10,n=4473924,s=8947848){n=new Yt(n),s=new Yt(s);const r=i/2,a=t/i,o=t/2,l=[],c=[];for(let u=0,p=0,_=-o;u<=i;u++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const S=u===r?n:s;S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3}const h=new pi;h.setAttribute("position",new ni(l,3)),h.setAttribute("color",new ni(c,3));const d=new a1({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function hp(e,t,i,n){const s=Av(n);switch(i){case Z0:return e*t;case Xu:return e*t/s.components*s.byteLength;case qu:return e*t/s.components*s.byteLength;case Ns:return e*t*2/s.components*s.byteLength;case Yu:return e*t*2/s.components*s.byteLength;case J0:return e*t*3/s.components*s.byteLength;case en:return e*t*4/s.components*s.byteLength;case $u:return e*t*4/s.components*s.byteLength;case Ro:case Co:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Po:case Lo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ih:case sh:return Math.max(e,16)*Math.max(t,8)/4;case eh:case nh:return Math.max(e,8)*Math.max(t,8)/2;case rh:case ah:case lh:case ch:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oh:case ko:case hh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ph:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case mh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case gh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _h:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case vh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Sh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case yh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case bh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ah:case Th:case wh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Rh:case Ch:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ho:case Ph:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Av(e){switch(e){case qi:case q0:return{byteLength:1,components:1};case Aa:case Y0:case xi:return{byteLength:2,components:1};case Gu:case Wu:return{byteLength:2,components:4};case Sn:case Vu:case tn:return{byteLength:4,components:1};case $0:case K0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fu}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function d1(){let e=null,t=!1,i=null,n=null;function s(r,a){i(r,a),n=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(n=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){i=r},setContext:function(r){e=r}}}function Tv(e){const t=new WeakMap;function i(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){const _=d[u],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,d[u]=S)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){const S=d[p];e.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rv=`#ifdef USE_ALPHAHASH
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
#endif`,Cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dv=`#ifdef USE_AOMAP
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
#endif`,Fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uv=`#ifdef USE_BATCHING
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
#endif`,Nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ov=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kv=`#ifdef USE_IRIDESCENCE
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
#endif`,Hv=`#ifdef USE_BUMPMAP
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
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zv=`#define PI 3.141592653589793
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
} // validated`,Jv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jv=`vec3 transformedNormal = objectNormal;
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
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n2="gl_FragColor = linearToOutputTexel( gl_FragColor );",s2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r2=`#ifdef USE_ENVMAP
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
#endif`,a2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o2=`#ifdef USE_ENVMAP
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
#endif`,l2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c2=`#ifdef USE_ENVMAP
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
#endif`,h2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p2=`#ifdef USE_GRADIENTMAP
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
}`,m2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v2=`#ifdef USE_ENVMAP
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
#endif`,M2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b2=`PhysicalMaterial material;
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
#endif`,A2=`uniform sampler2D dfgLUT;
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
}`,T2=`
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
#endif`,w2=`#if defined( RE_IndirectDiffuse )
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
#endif`,R2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,P2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O2=`#if defined( USE_POINTS_UV )
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
#endif`,B2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G2=`#ifdef USE_MORPHTARGETS
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
#endif`,W2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Z2=`#ifdef USE_NORMALMAP
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
#endif`,J2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d3=`float getShadowMask() {
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
}`,f3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p3=`#ifdef USE_SKINNING
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
#endif`,m3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g3=`#ifdef USE_SKINNING
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
#endif`,_3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S3=`#ifdef USE_TRANSMISSION
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
#endif`,y3=`#ifdef USE_TRANSMISSION
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
#endif`,E3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R3=`uniform sampler2D t2D;
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
}`,C3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D3=`#include <common>
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
}`,F3=`#if DEPTH_PACKING == 3200
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
}`,U3=`#define DISTANCE
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
}`,N3=`#define DISTANCE
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
}`,O3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z3=`uniform float scale;
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
}`,k3=`uniform vec3 diffuse;
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
}`,H3=`#include <common>
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
}`,V3=`uniform vec3 diffuse;
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
}`,G3=`#define LAMBERT
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
}`,W3=`#define LAMBERT
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
}`,X3=`#define MATCAP
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
}`,q3=`#define MATCAP
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
}`,Y3=`#define NORMAL
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
}`,$3=`#define NORMAL
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
}`,K3=`#define PHONG
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
}`,Z3=`#define PHONG
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
}`,J3=`#define STANDARD
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
}`,j3=`#define STANDARD
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
}`,Q3=`#define TOON
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
}`,tM=`#define TOON
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
}`,eM=`uniform float size;
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
}`,iM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,sM=`uniform vec3 color;
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
}`,rM=`uniform float rotation;
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
}`,aM=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:wv,alphahash_pars_fragment:Rv,alphamap_fragment:Cv,alphamap_pars_fragment:Pv,alphatest_fragment:Lv,alphatest_pars_fragment:Iv,aomap_fragment:Dv,aomap_pars_fragment:Fv,batching_pars_vertex:Uv,batching_vertex:Nv,begin_vertex:Ov,beginnormal_vertex:Bv,bsdfs:zv,iridescence_fragment:kv,bumpmap_pars_fragment:Hv,clipping_planes_fragment:Vv,clipping_planes_pars_fragment:Gv,clipping_planes_pars_vertex:Wv,clipping_planes_vertex:Xv,color_fragment:qv,color_pars_fragment:Yv,color_pars_vertex:$v,color_vertex:Kv,common:Zv,cube_uv_reflection_fragment:Jv,defaultnormal_vertex:jv,displacementmap_pars_vertex:Qv,displacementmap_vertex:t2,emissivemap_fragment:e2,emissivemap_pars_fragment:i2,colorspace_fragment:n2,colorspace_pars_fragment:s2,envmap_fragment:r2,envmap_common_pars_fragment:a2,envmap_pars_fragment:o2,envmap_pars_vertex:l2,envmap_physical_pars_fragment:v2,envmap_vertex:c2,fog_vertex:h2,fog_pars_vertex:u2,fog_fragment:d2,fog_pars_fragment:f2,gradientmap_pars_fragment:p2,lightmap_pars_fragment:m2,lights_lambert_fragment:g2,lights_lambert_pars_fragment:_2,lights_pars_begin:x2,lights_toon_fragment:M2,lights_toon_pars_fragment:S2,lights_phong_fragment:y2,lights_phong_pars_fragment:E2,lights_physical_fragment:b2,lights_physical_pars_fragment:A2,lights_fragment_begin:T2,lights_fragment_maps:w2,lights_fragment_end:R2,lightprobes_pars_fragment:C2,logdepthbuf_fragment:P2,logdepthbuf_pars_fragment:L2,logdepthbuf_pars_vertex:I2,logdepthbuf_vertex:D2,map_fragment:F2,map_pars_fragment:U2,map_particle_fragment:N2,map_particle_pars_fragment:O2,metalnessmap_fragment:B2,metalnessmap_pars_fragment:z2,morphinstance_vertex:k2,morphcolor_vertex:H2,morphnormal_vertex:V2,morphtarget_pars_vertex:G2,morphtarget_vertex:W2,normal_fragment_begin:X2,normal_fragment_maps:q2,normal_pars_fragment:Y2,normal_pars_vertex:$2,normal_vertex:K2,normalmap_pars_fragment:Z2,clearcoat_normal_fragment_begin:J2,clearcoat_normal_fragment_maps:j2,clearcoat_pars_fragment:Q2,iridescence_pars_fragment:t3,opaque_fragment:e3,packing:i3,premultiplied_alpha_fragment:n3,project_vertex:s3,dithering_fragment:r3,dithering_pars_fragment:a3,roughnessmap_fragment:o3,roughnessmap_pars_fragment:l3,shadowmap_pars_fragment:c3,shadowmap_pars_vertex:h3,shadowmap_vertex:u3,shadowmask_pars_fragment:d3,skinbase_vertex:f3,skinning_pars_vertex:p3,skinning_vertex:m3,skinnormal_vertex:g3,specularmap_fragment:_3,specularmap_pars_fragment:x3,tonemapping_fragment:v3,tonemapping_pars_fragment:M3,transmission_fragment:S3,transmission_pars_fragment:y3,uv_pars_fragment:E3,uv_pars_vertex:b3,uv_vertex:A3,worldpos_vertex:T3,background_vert:w3,background_frag:R3,backgroundCube_vert:C3,backgroundCube_frag:P3,cube_vert:L3,cube_frag:I3,depth_vert:D3,depth_frag:F3,distance_vert:U3,distance_frag:N3,equirect_vert:O3,equirect_frag:B3,linedashed_vert:z3,linedashed_frag:k3,meshbasic_vert:H3,meshbasic_frag:V3,meshlambert_vert:G3,meshlambert_frag:W3,meshmatcap_vert:X3,meshmatcap_frag:q3,meshnormal_vert:Y3,meshnormal_frag:$3,meshphong_vert:K3,meshphong_frag:Z3,meshphysical_vert:J3,meshphysical_frag:j3,meshtoon_vert:Q3,meshtoon_frag:tM,points_vert:eM,points_frag:iM,shadow_vert:nM,shadow_frag:sM,sprite_vert:rM,sprite_frag:aM},yt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},pn={basic:{uniforms:gi([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:gi([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:gi([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:gi([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:gi([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:gi([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:gi([yt.points,yt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:gi([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:gi([yt.common,yt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:gi([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:gi([yt.sprite,yt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:gi([yt.common,yt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:gi([yt.lights,yt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};pn.physical={uniforms:gi([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const vo={r:0,b:0,g:0},oM=new be,f1=new Jt;f1.set(-1,0,0,0,1,0,0,0,1);function lM(e,t,i,n,s,r){const a=new Yt(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const M=v.backgroundBlurriness>0;y=t.get(y,M)}return y}function _(v){let y=!1;const M=p(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),y=!0);const A=e.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function S(v,y){const M=p(y);M&&(M.isCubeTexture||M.mapping===Ml)?(c===void 0&&(c=new Ni(new Kr(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:Fr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oM.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(f1),c.material.toneMapped=ae.getTransfer(M.colorSpace)!==_e,(h!==M||d!==M.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ni(new Sl(2,2),new $e({name:"BackgroundMaterial",uniforms:Fr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ae.getTransfer(M.colorSpace)!==_e,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=e.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(vo,c1(e)),i.buffers.color.setClear(vo.r,vo.g,vo.b,y,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:_,addToRenderList:S,dispose:f}}function cM(e,t){const i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(C,L,F,H,O){let V=!1;const N=d(C,H,F,L);r!==N&&(r=N,c(r.object)),V=p(C,H,F,O),V&&_(C,H,F,O),O!==null&&t.update(O,e.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(C,L,F,H),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return e.createVertexArray()}function c(C){return e.bindVertexArray(C)}function h(C){return e.deleteVertexArray(C)}function d(C,L,F,H){const O=H.wireframe===!0;let V=n[L.id];V===void 0&&(V={},n[L.id]=V);const N=C.isInstancedMesh===!0?C.id:0;let Z=V[N];Z===void 0&&(Z={},V[N]=Z);let it=Z[F.id];it===void 0&&(it={},Z[F.id]=it);let ct=it[O];return ct===void 0&&(ct=u(l()),it[O]=ct),ct}function u(C){const L=[],F=[],H=[];for(let O=0;O<i;O++)L[O]=0,F[O]=0,H[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:H,object:C,attributes:{},index:null}}function p(C,L,F,H){const O=r.attributes,V=L.attributes;let N=0;const Z=F.getAttributes();for(const it in Z)if(Z[it].location>=0){const ot=O[it];let ht=V[it];if(ht===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(ht=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(ht=C.instanceColor)),ot===void 0||ot.attribute!==ht||ht&&ot.data!==ht.data)return!0;N++}return r.attributesNum!==N||r.index!==H}function _(C,L,F,H){const O={},V=L.attributes;let N=0;const Z=F.getAttributes();for(const it in Z)if(Z[it].location>=0){let ot=V[it];ot===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(ot=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(ot=C.instanceColor));const ht={};ht.attribute=ot,ot&&ot.data&&(ht.data=ot.data),O[it]=ht,N++}r.attributes=O,r.attributesNum=N,r.index=H}function S(){const C=r.newAttributes;for(let L=0,F=C.length;L<F;L++)C[L]=0}function m(C){f(C,0)}function f(C,L){const F=r.newAttributes,H=r.enabledAttributes,O=r.attributeDivisors;F[C]=1,H[C]===0&&(e.enableVertexAttribArray(C),H[C]=1),O[C]!==L&&(e.vertexAttribDivisor(C,L),O[C]=L)}function v(){const C=r.newAttributes,L=r.enabledAttributes;for(let F=0,H=L.length;F<H;F++)L[F]!==C[F]&&(e.disableVertexAttribArray(F),L[F]=0)}function y(C,L,F,H,O,V,N){N===!0?e.vertexAttribIPointer(C,L,F,O,V):e.vertexAttribPointer(C,L,F,H,O,V)}function M(C,L,F,H){S();const O=H.attributes,V=F.getAttributes(),N=L.defaultAttributeValues;for(const Z in V){const it=V[Z];if(it.location>=0){let ct=O[Z];if(ct===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),ct!==void 0){const ot=ct.normalized,ht=ct.itemSize,Mt=t.get(ct);if(Mt===void 0)continue;const nt=Mt.buffer,ut=Mt.type,q=Mt.bytesPerElement,lt=ut===e.INT||ut===e.UNSIGNED_INT||ct.gpuType===Vu;if(ct.isInterleavedBufferAttribute){const K=ct.data,wt=K.stride,_t=ct.offset;if(K.isInstancedInterleavedBuffer){for(let mt=0;mt<it.locationSize;mt++)f(it.location+mt,K.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let mt=0;mt<it.locationSize;mt++)m(it.location+mt);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let mt=0;mt<it.locationSize;mt++)y(it.location+mt,ht/it.locationSize,ut,ot,wt*q,(_t+ht/it.locationSize*mt)*q,lt)}else{if(ct.isInstancedBufferAttribute){for(let K=0;K<it.locationSize;K++)f(it.location+K,ct.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let K=0;K<it.locationSize;K++)m(it.location+K);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let K=0;K<it.locationSize;K++)y(it.location+K,ht/it.locationSize,ut,ot,ht*q,ht/it.locationSize*K*q,lt)}}else if(N!==void 0){const ot=N[Z];if(ot!==void 0)switch(ot.length){case 2:e.vertexAttrib2fv(it.location,ot);break;case 3:e.vertexAttrib3fv(it.location,ot);break;case 4:e.vertexAttrib4fv(it.location,ot);break;default:e.vertexAttrib1fv(it.location,ot)}}}}v()}function A(){T();for(const C in n){const L=n[C];for(const F in L){const H=L[F];for(const O in H){const V=H[O];for(const N in V)h(V[N].object),delete V[N];delete H[O]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const L=n[C.id];for(const F in L){const H=L[F];for(const O in H){const V=H[O];for(const N in V)h(V[N].object),delete V[N];delete H[O]}}delete n[C.id]}function w(C){for(const L in n){const F=n[L];for(const H in F){const O=F[H];if(O[C.id]===void 0)continue;const V=O[C.id];for(const N in V)h(V[N].object),delete V[N];delete O[C.id]}}}function g(C){for(const L in n){const F=n[L],H=C.isInstancedMesh===!0?C.id:0,O=F[H];if(O!==void 0){for(const V in O){const N=O[V];for(const Z in N)h(N[Z].object),delete N[Z];delete O[V]}delete F[H],Object.keys(F).length===0&&delete n[L]}}}function T(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function hM(e,t,i){let n;function s(l){n=l}function r(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function a(l,c,h){h!==0&&(e.drawArraysInstanced(n,l,c,h),i.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];i.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function uM(e,t,i,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==en&&n.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const g=w===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==qi&&n.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==tn&&!g)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp";const h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:A,samples:b}}function dM(e){const t=this;let i=null,n=0,s=!1,r=!1;const a=new xs,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){i=h(d,u,0)},this.setState=function(d,u,p){const _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,y=v*4;let M=f.clippingState||null;l.value=M,M=h(_,u,y,p);for(let A=0;A!==y;++A)M[A]=i[A];f.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,_){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const f=p+S*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==S;++y,M+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const ns=4,up=[.125,.215,.35,.446,.526,.582],Ms=20,fM=256,aa=new ed,dp=new Yt;let pc=null,mc=0,gc=0,_c=!1;const pM=new k;class fp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,n=.1,s=100,r={}){const{size:a=256,position:o=pM}=r;pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),i>0&&this._blur(l,0,0,i),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=_c,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Us||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=i||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:xi,format:en,colorSpace:Vo,depthBuffer:!1},s=pp(t,i,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pp(t,i,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mM(r)),this._blurMaterial=_M(r,t,i),this._ggxMaterial=gM(r,t,i)}return s}_compileMaterial(t){const i=new Ni(new pi,t);this._renderer.compile(i,aa)}_sceneToCubeUV(t,i,n,s,r){const l=new Xi(90,1,i,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(dp),d.toneMapping=vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new Kr,new Ir({name:"PMREM.Background",side:Ei,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,f=!0):(m.color.copy(dp),f=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const A=this._cubeSize;ur(s,M*A,y>2?A:0,A,A),d.setRenderTarget(s),f&&d.render(S,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=v}_textureToCubeUV(t,i){const n=this._renderer,s=t.mapping===Us||t.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mp());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ur(i,0,0,3*l,2*l),n.setRenderTarget(i),n.render(a,aa)}_applyPMREM(t){const i=this._renderer,n=i.autoClear;i.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);i.autoClear=n}_applyGGXFilter(t,i,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=i/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,p=d*u,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-ns?n-_+ns:0),f=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-i,ur(r,m,f,3*S,2*S),s.setRenderTarget(r),s.render(o,aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,ur(t,m,f,3*S,2*S),s.setRenderTarget(t),s.render(o,aa)}_blur(t,i,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,i,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,i,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ue("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const u=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ms-1),S=r/_,m=isFinite(r)?1+Math.floor(h*S):Ms;m>Ms&&qt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const f=[];let v=0;for(let w=0;w<Ms;++w){const g=w/S,T=Math.exp(-g*g/2);f.push(T),w===0?v+=T:w<m&&(v+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=_,u.mipInt.value=y-n;const M=this._sizeLods[s],A=3*M*(s>y-ns?s-y+ns:0),b=4*(this._cubeSize-M);ur(i,A,b,3*M,2*M),l.setRenderTarget(i),l.render(d,aa)}}function mM(e){const t=[],i=[],n=[];let s=e;const r=e-ns+1+up.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>e-ns?l=up[a-e+ns-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,S=3,m=2,f=1,v=new Float32Array(S*_*p),y=new Float32Array(m*_*p),M=new Float32Array(f*_*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,g=b>2?0:-1,T=[w,g,0,w+2/3,g,0,w+2/3,g+1,0,w,g,0,w+2/3,g+1,0,w,g+1,0];v.set(T,S*_*b),y.set(u,m*_*b);const P=[b,b,b,b,b,b];M.set(P,f*_*b)}const A=new pi;A.setAttribute("position",new Ye(v,S)),A.setAttribute("uv",new Ye(y,m)),A.setAttribute("faceIndex",new Ye(M,f)),n.push(new Ni(A,null)),s>ns&&s--}return{lodMeshes:n,sizeLods:t,sigmas:i}}function pp(e,t,i){const n=new ui(e,t,i);return n.texture.mapping=Ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(e,t,i,n,s){e.viewport.set(t,i,n,s),e.scissor.set(t,i,n,s)}function gM(e,t,i){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function _M(e,t,i){const n=new Float32Array(Ms),s=new k(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function mp(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function gp(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}class p1 extends ui{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new o1(s),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kr(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ei,blending:sn});r.uniforms.tEquirect.value=i;const a=new Ni(s,r),o=i.minFilter;return i.minFilter===Es&&(i.minFilter=hi),new Mv(1,10,this).update(t,a),i.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,i=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(i,n,s);t.setRenderTarget(r)}}function xM(e){let t=new WeakMap,i=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===kl||p===Hl)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new p1(_.height);return S.fromEquirectangularTexture(e,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,_=p===kl||p===Hl,S=p===Us||p===Lr;if(_||S){let m=i.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new fp(e)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return _&&v&&v.height>0||S&&v&&l(v)?(n===null&&(n=new fp(e)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===kl?u.mapping=Us:p===Hl&&(u.mapping=Lr),u}function l(u){let p=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&p++;return p===_}function c(u){const p=u.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const _=i.get(p);_!==void 0&&(i.delete(p),_.dispose())}function d(){t=new WeakMap,i=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function vM(e){const t={};function i(n){if(t[n]!==void 0)return t[n];const s=e.getExtension(n);return t[n]=s,s}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const s=i(n);return s===null&&_r("WebGLRenderer: "+n+" extension not supported."),s}}}function MM(e,t,i,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,i.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const v=p.array;S=p.version;for(let y=0,M=v.length;y<M;y+=3){const A=v[y+0],b=v[y+1],w=v[y+2];u.push(A,b,b,w,w,A)}}else{const v=_.array;S=_.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const A=y+0,b=y+1,w=y+2;u.push(A,b,b,w,w,A)}}const m=new(_.count>=65535?n1:i1)(u,1);m.version=S;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function SM(e,t,i){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){e.drawElements(n,u,r,d*a),i.update(u,n,1)}function c(d,u,p){p!==0&&(e.drawElementsInstanced(n,u,r,d*a,p),i.update(u,n,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];i.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yM(e){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(i.calls++,a){case e.TRIANGLES:i.triangles+=o*(r/3);break;case e.LINES:i.lines+=o*(r/2);break;case e.LINE_STRIP:i.lines+=o*(r-1);break;case e.LINE_LOOP:i.lines+=o*r;break;case e.POINTS:i.points+=o*r;break;default:ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:s,update:n}}function EM(e,t,i){const n=new WeakMap,s=new Ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let P=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var p=P;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),m===!0&&(M=3);let A=o.attributes.position.count*M,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*b*4*d),g=new Q0(w,A,b,d);g.type=tn,g.needsUpdate=!0;const T=M*4;for(let C=0;C<d;C++){const L=f[C],F=v[C],H=y[C],O=A*b*4*C;for(let V=0;V<L.count;V++){const N=V*T;_===!0&&(s.fromBufferAttribute(L,V),w[O+N+0]=s.x,w[O+N+1]=s.y,w[O+N+2]=s.z,w[O+N+3]=0),S===!0&&(s.fromBufferAttribute(F,V),w[O+N+4]=s.x,w[O+N+5]=s.y,w[O+N+6]=s.z,w[O+N+7]=0),m===!0&&(s.fromBufferAttribute(H,V),w[O+N+8]=s.x,w[O+N+9]=s.y,w[O+N+10]=s.z,w[O+N+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:g,size:new jt(A,b)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,i);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(e,"morphTargetBaseInfluence",S),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function bM(e,t,i,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:a,dispose:o}}const AM={[Uu]:"LINEAR_TONE_MAPPING",[Nu]:"REINHARD_TONE_MAPPING",[Ou]:"CINEON_TONE_MAPPING",[Bu]:"ACES_FILMIC_TONE_MAPPING",[ku]:"AGX_TONE_MAPPING",[Hu]:"NEUTRAL_TONE_MAPPING",[zu]:"CUSTOM_TONE_MAPPING"};function TM(e,t,i,n,s,r){const a=new ui(t,i,{type:e,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Dr(t,i):void 0}),o=new ui(t,i,{type:xi,depthBuffer:!1,stencilBuffer:!1}),l=new pi;l.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ni([0,2,0,0,2,0],2));const c=new h1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ni(l,c),d=new ed(-1,1,1,-1,0,1);let u=null,p=null,_=!1,S,m=null,f=[],v=!1;this.setSize=function(y,M){a.setSize(y,M),o.setSize(y,M);for(let A=0;A<f.length;A++){const b=f[A];b.setSize&&b.setSize(y,M)}},this.setEffects=function(y){f=y,v=f.length>0&&f[0].isRenderPass===!0;const M=a.width,A=a.height;for(let b=0;b<f.length;b++){const w=f[b];w.setSize&&w.setSize(M,A)}},this.begin=function(y,M){if(_||y.toneMapping===vn&&f.length===0)return!1;if(m=M,M!==null){const A=M.width,b=M.height;(a.width!==A||a.height!==b)&&this.setSize(A,b)}return v===!1&&y.setRenderTarget(a),S=y.toneMapping,y.toneMapping=vn,!0},this.hasRenderPass=function(){return v},this.end=function(y,M){y.toneMapping=S,_=!0;let A=a,b=o;for(let w=0;w<f.length;w++){const g=f[w];if(g.enabled!==!1&&(g.render(y,b,A,M),g.needsSwap!==!1)){const T=A;A=b,b=T}}if(u!==y.outputColorSpace||p!==y.toneMapping){u=y.outputColorSpace,p=y.toneMapping,c.defines={},ae.getTransfer(u)===_e&&(c.defines.SRGB_TRANSFER="");const w=AM[p];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(m),y.render(h,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const m1=new vi,Dh=new Dr(1,1),g1=new Q0,_1=new qx,x1=new o1,_p=[],xp=[],vp=new Float32Array(16),Mp=new Float32Array(9),Sp=new Float32Array(4);function Zr(e,t,i){const n=e[0];if(n<=0||n>0)return e;const s=t*i;let r=_p[s];if(r===void 0&&(r=new Float32Array(s),_p[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=i,e[a].toArray(r,o)}return r}function je(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Qe(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function El(e,t){let i=xp[t];i===void 0&&(i=new Int32Array(t),xp[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function wM(e,t){const i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function RM(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(je(i,t))return;e.uniform2fv(this.addr,t),Qe(i,t)}}function CM(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(je(i,t))return;e.uniform3fv(this.addr,t),Qe(i,t)}}function PM(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(je(i,t))return;e.uniform4fv(this.addr,t),Qe(i,t)}}function LM(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(je(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qe(i,t)}else{if(je(i,n))return;Sp.set(n),e.uniformMatrix2fv(this.addr,!1,Sp),Qe(i,n)}}function IM(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(je(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qe(i,t)}else{if(je(i,n))return;Mp.set(n),e.uniformMatrix3fv(this.addr,!1,Mp),Qe(i,n)}}function DM(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(je(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qe(i,t)}else{if(je(i,n))return;vp.set(n),e.uniformMatrix4fv(this.addr,!1,vp),Qe(i,n)}}function FM(e,t){const i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function UM(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(je(i,t))return;e.uniform2iv(this.addr,t),Qe(i,t)}}function NM(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(je(i,t))return;e.uniform3iv(this.addr,t),Qe(i,t)}}function OM(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(je(i,t))return;e.uniform4iv(this.addr,t),Qe(i,t)}}function BM(e,t){const i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function zM(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(je(i,t))return;e.uniform2uiv(this.addr,t),Qe(i,t)}}function kM(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(je(i,t))return;e.uniform3uiv(this.addr,t),Qe(i,t)}}function HM(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(je(i,t))return;e.uniform4uiv(this.addr,t),Qe(i,t)}}function VM(e,t,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Dh.compareFunction=i.isReversedDepthBuffer()?Zu:Ku,r=Dh):r=m1,i.setTexture2D(t||r,s)}function GM(e,t,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.setTexture3D(t||_1,s)}function WM(e,t,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.setTextureCube(t||x1,s)}function XM(e,t,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.setTexture2DArray(t||g1,s)}function qM(e){switch(e){case 5126:return wM;case 35664:return RM;case 35665:return CM;case 35666:return PM;case 35674:return LM;case 35675:return IM;case 35676:return DM;case 5124:case 35670:return FM;case 35667:case 35671:return UM;case 35668:case 35672:return NM;case 35669:case 35673:return OM;case 5125:return BM;case 36294:return zM;case 36295:return kM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}function YM(e,t){e.uniform1fv(this.addr,t)}function $M(e,t){const i=Zr(t,this.size,2);e.uniform2fv(this.addr,i)}function KM(e,t){const i=Zr(t,this.size,3);e.uniform3fv(this.addr,i)}function ZM(e,t){const i=Zr(t,this.size,4);e.uniform4fv(this.addr,i)}function JM(e,t){const i=Zr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function jM(e,t){const i=Zr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function QM(e,t){const i=Zr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function tS(e,t){e.uniform1iv(this.addr,t)}function eS(e,t){e.uniform2iv(this.addr,t)}function iS(e,t){e.uniform3iv(this.addr,t)}function nS(e,t){e.uniform4iv(this.addr,t)}function sS(e,t){e.uniform1uiv(this.addr,t)}function rS(e,t){e.uniform2uiv(this.addr,t)}function aS(e,t){e.uniform3uiv(this.addr,t)}function oS(e,t){e.uniform4uiv(this.addr,t)}function lS(e,t,i){const n=this.cache,s=t.length,r=El(i,s);je(n,r)||(e.uniform1iv(this.addr,r),Qe(n,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Dh:a=m1;for(let o=0;o!==s;++o)i.setTexture2D(t[o]||a,r[o])}function cS(e,t,i){const n=this.cache,s=t.length,r=El(i,s);je(n,r)||(e.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)i.setTexture3D(t[a]||_1,r[a])}function hS(e,t,i){const n=this.cache,s=t.length,r=El(i,s);je(n,r)||(e.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)i.setTextureCube(t[a]||x1,r[a])}function uS(e,t,i){const n=this.cache,s=t.length,r=El(i,s);je(n,r)||(e.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)i.setTexture2DArray(t[a]||g1,r[a])}function dS(e){switch(e){case 5126:return YM;case 35664:return $M;case 35665:return KM;case 35666:return ZM;case 35674:return JM;case 35675:return jM;case 35676:return QM;case 5124:case 35670:return tS;case 35667:case 35671:return eS;case 35668:case 35672:return iS;case 35669:case 35673:return nS;case 5125:return sS;case 36294:return rS;case 36295:return aS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return uS}}class fS{constructor(t,i,n){this.id=t,this.addr=n,this.cache=[],this.type=i.type,this.setValue=qM(i.type)}}class pS{constructor(t,i,n){this.id=t,this.addr=n,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=dS(i.type)}}class mS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,i[o.id],n)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function yp(e,t){e.seq.push(t),e.map[t.id]=t}function gS(e,t,i){const n=e.name,s=n.length;for(xc.lastIndex=0;;){const r=xc.exec(n),a=xc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yp(i,c===void 0?new fS(o,e,t):new pS(o,e,t));break}else{let d=i.map[o];d===void 0&&(d=new mS(o),yp(i,d)),i=d}}}class Io{constructor(t,i){this.seq=[],this.map={};const n=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(i,a),l=t.getUniformLocation(i,o.name);gS(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,i,n,s){const r=this.map[i];r!==void 0&&r.setValue(t,n,s)}setOptional(t,i,n){const s=i[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,i,n,s){for(let r=0,a=i.length;r!==a;++r){const o=i[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,i){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in i&&n.push(a)}return n}}function Ep(e,t,i){const n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}const _S=37297;let xS=0;function vS(e,t){const i=e.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,i.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}const bp=new Jt;function MS(e){ae._getMatrix(bp,ae.workingColorSpace,e);const t=`mat3( ${bp.elements.map(i=>i.toFixed(4))} )`;switch(ae.getTransfer(e)){case Go:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ap(e,t,i){const n=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return i.toUpperCase()+`

`+r+`

`+vS(e.getShaderSource(t),o)}else return r}function SS(e,t){const i=MS(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const yS={[Uu]:"Linear",[Nu]:"Reinhard",[Ou]:"Cineon",[Bu]:"ACESFilmic",[ku]:"AgX",[Hu]:"Neutral",[zu]:"Custom"};function ES(e,t){const i=yS[t];return i===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mo=new k;function bS(){ae.getLuminanceCoefficients(Mo);const e=Mo.x.toFixed(4),t=Mo.y.toFixed(4),i=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AS(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function TS(e){const t=[];for(const i in e){const n=e[i];n!==!1&&t.push("#define "+i+" "+n)}return t.join(`
`)}function wS(e,t){const i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=e.getActiveAttrib(t,s),a=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),i[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return i}function ma(e){return e!==""}function Tp(e,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const RS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(e){return e.replace(RS,PS)}const CS=new Map;function PS(e,t){let i=ie[t];if(i===void 0){const n=CS.get(t);if(n!==void 0)i=ie[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fh(i)}const LS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(e){return e.replace(LS,IS)}function IS(e,t,i,n){let s="";for(let r=parseInt(t);r<parseInt(i);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cp(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const DS={[wo]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function FS(e){return DS[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const US={[Us]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[Ml]:"ENVMAP_TYPE_CUBE_UV"};function NS(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":US[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const OS={[Lr]:"ENVMAP_MODE_REFRACTION"};function BS(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":OS[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zS={[W0]:"ENVMAP_BLENDING_MULTIPLY",[Ax]:"ENVMAP_BLENDING_MIX",[Tx]:"ENVMAP_BLENDING_ADD"};function kS(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":zS[e.combine]||"ENVMAP_BLENDING_NONE"}function HS(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:n,maxMip:i}}function VS(e,t,i,n){const s=e.getContext(),r=i.defines;let a=i.vertexShader,o=i.fragmentShader;const l=FS(i),c=NS(i),h=BS(i),d=kS(i),u=HS(i),p=AS(i),_=TS(r),S=s.createProgram();let m,f,v=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(ma).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(ma).join(`
`),f.length>0&&(f+=`
`)):(m=[Cp(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),f=[Cp(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==vn?"#define TONE_MAPPING":"",i.toneMapping!==vn?ie.tonemapping_pars_fragment:"",i.toneMapping!==vn?ES("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,SS("linearToOutputTexel",i.outputColorSpace),bS(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ma).join(`
`)),a=Fh(a),a=Tp(a,i),a=wp(a,i),o=Fh(o),o=Tp(o,i),o=wp(o,i),a=Rp(a),o=Rp(o),i.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Df?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+a,M=v+f+o,A=Ep(s,s.VERTEX_SHADER,y),b=Ep(s,s.FRAGMENT_SHADER,M);s.attachShader(S,A),s.attachShader(S,b),i.index0AttributeName!==void 0?s.bindAttribLocation(S,0,i.index0AttributeName):i.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function w(C){if(e.debug.checkShaderErrors){const L=s.getProgramInfoLog(S)||"",F=s.getShaderInfoLog(A)||"",H=s.getShaderInfoLog(b)||"",O=L.trim(),V=F.trim(),N=H.trim();let Z=!0,it=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,S,A,b);else{const ct=Ap(s,A,"vertex"),ot=Ap(s,b,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+ct+`
`+ot)}else O!==""?qt("WebGLProgram: Program Info Log:",O):(V===""||N==="")&&(it=!1);it&&(C.diagnostics={runnable:Z,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:N,prefix:f}})}s.deleteShader(A),s.deleteShader(b),g=new Io(s,S),T=wS(s,S)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let P=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,_S)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xS++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=b,this}let GS=0;class WS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,n){const s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const n of i)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let n=i.get(t);return n===void 0&&(n=new Set,i.set(t,n)),n}_getShaderStage(t){const i=this.shaderCache;let n=i.get(t);return n===void 0&&(n=new XS(t),i.set(t,n)),n}}class XS{constructor(t){this.id=GS++,this.code=t,this.usedTimes=0}}function qS(e){return e===Ns||e===ko||e===Ho}function YS(e,t,i,n,s,r){const a=new t1,o=new WS,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,T,P,C,L,F){const H=C.fog,O=L.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,N=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Z=t.get(g.envMap||V,N),it=Z&&Z.mapping===Ml?Z.image.height:null,ct=p[g.type];g.precision!==null&&(u=n.getMaxPrecision(g.precision),u!==g.precision&&qt("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const ot=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ht=ot!==void 0?ot.length:0;let Mt=0;O.morphAttributes.position!==void 0&&(Mt=1),O.morphAttributes.normal!==void 0&&(Mt=2),O.morphAttributes.color!==void 0&&(Mt=3);let nt,ut,q,lt;if(ct){const Lt=pn[ct];nt=Lt.vertexShader,ut=Lt.fragmentShader}else{nt=g.vertexShader,ut=g.fragmentShader;const Lt=o.getVertexShaderStage(g),Ae=o.getFragmentShaderStage(g);o.update(g,Lt,Ae),q=Lt.id,lt=Ae.id}const K=e.getRenderTarget(),wt=e.state.buffers.depth.getReversed(),_t=L.isInstancedMesh===!0,mt=L.isBatchedMesh===!0,Ht=!!g.map,Tt=!!g.matcap,$t=!!Z,Wt=!!g.aoMap,Nt=!!g.lightMap,te=!!g.bumpMap&&g.wireframe===!1,Zt=!!g.normalMap,ce=!!g.displacementMap,Kt=!!g.emissiveMap,ne=!!g.metalnessMap,re=!!g.roughnessMap,D=g.anisotropy>0,Ct=g.clearcoat>0,ee=g.dispersion>0,R=g.iridescence>0,x=g.sheen>0,z=g.transmission>0,G=D&&!!g.anisotropyMap,j=Ct&&!!g.clearcoatMap,ft=Ct&&!!g.clearcoatNormalMap,rt=Ct&&!!g.clearcoatRoughnessMap,Y=R&&!!g.iridescenceMap,J=R&&!!g.iridescenceThicknessMap,dt=x&&!!g.sheenColorMap,At=x&&!!g.sheenRoughnessMap,tt=!!g.specularMap,at=!!g.specularColorMap,pt=!!g.specularIntensityMap,vt=z&&!!g.transmissionMap,Dt=z&&!!g.thicknessMap,U=!!g.gradientMap,xt=!!g.alphaMap,et=g.alphaTest>0,gt=!!g.alphaHash,St=!!g.extensions;let st=vn;g.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(st=e.toneMapping);const Ft={shaderID:ct,shaderType:g.type,shaderName:g.name,vertexShader:nt,fragmentShader:ut,defines:g.defines,customVertexShaderID:q,customFragmentShaderID:lt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:mt,batchingColor:mt&&L._colorsTexture!==null,instancing:_t,instancingColor:_t&&L.instanceColor!==null,instancingMorph:_t&&L.morphTexture!==null,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ht,matcap:Tt,envMap:$t,envMapMode:$t&&Z.mapping,envMapCubeUVHeight:it,aoMap:Wt,lightMap:Nt,bumpMap:te,normalMap:Zt,displacementMap:ce,emissiveMap:Kt,normalMapObjectSpace:Zt&&g.normalMapType===Cx,normalMapTangentSpace:Zt&&g.normalMapType===Pf,packedNormalMap:Zt&&g.normalMapType===Pf&&qS(g.normalMap.format),metalnessMap:ne,roughnessMap:re,anisotropy:D,anisotropyMap:G,clearcoat:Ct,clearcoatMap:j,clearcoatNormalMap:ft,clearcoatRoughnessMap:rt,dispersion:ee,iridescence:R,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:x,sheenColorMap:dt,sheenRoughnessMap:At,specularMap:tt,specularColorMap:at,specularIntensityMap:pt,transmission:z,transmissionMap:vt,thicknessMap:Dt,gradientMap:U,opaque:g.transparent===!1&&g.blending===gr&&g.alphaToCoverage===!1,alphaMap:xt,alphaTest:et,alphaHash:gt,combine:g.combine,mapUv:Ht&&_(g.map.channel),aoMapUv:Wt&&_(g.aoMap.channel),lightMapUv:Nt&&_(g.lightMap.channel),bumpMapUv:te&&_(g.bumpMap.channel),normalMapUv:Zt&&_(g.normalMap.channel),displacementMapUv:ce&&_(g.displacementMap.channel),emissiveMapUv:Kt&&_(g.emissiveMap.channel),metalnessMapUv:ne&&_(g.metalnessMap.channel),roughnessMapUv:re&&_(g.roughnessMap.channel),anisotropyMapUv:G&&_(g.anisotropyMap.channel),clearcoatMapUv:j&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:ft&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(g.sheenRoughnessMap.channel),specularMapUv:tt&&_(g.specularMap.channel),specularColorMapUv:at&&_(g.specularColorMap.channel),specularIntensityMapUv:pt&&_(g.specularIntensityMap.channel),transmissionMapUv:vt&&_(g.transmissionMap.channel),thicknessMapUv:Dt&&_(g.thicknessMap.channel),alphaMapUv:xt&&_(g.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Zt||D),vertexNormals:!!O.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Ht||xt),fog:!!H,useFog:g.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||O.attributes.normal===void 0&&Zt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:wt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Mt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:st,decodeVideoTexture:Ht&&g.map.isVideoTexture===!0&&ae.getTransfer(g.map.colorSpace)===_e,decodeVideoTextureEmissive:Kt&&g.emissiveMap.isVideoTexture===!0&&ae.getTransfer(g.emissiveMap.colorSpace)===_e,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Dn,flipSided:g.side===Ei,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:St&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&g.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)T.push(P),T.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(f(T,g),v(T,g),T.push(e.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function f(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function v(g,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function y(g){const T=p[g.type];let P;if(T){const C=pn[T];P=Bs.clone(C.uniforms)}else P=g.uniforms;return P}function M(g,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new VS(e,T,g,s),c.push(P),h.set(T,P)),P}function A(g){if(--g.usedTimes===0){const T=c.indexOf(g);c[T]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function b(g){o.remove(g)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:w}}function $S(){let e=new WeakMap;function t(a){return e.has(a)}function i(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function n(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:i,remove:n,update:s,dispose:r}}function KS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Pp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Lp(){const e=[];let t=0;const i=[],n=[],s=[];function r(){t=0,i.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,S,m,f){let v=e[t];return v===void 0?(v={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:f},e[t]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=_,v.materialVariant=a(u),v.groupOrder=S,v.renderOrder=u.renderOrder,v.z=m,v.group=f),t++,v}function l(u,p,_,S,m,f){const v=o(u,p,_,S,m,f);_.transmission>0?n.push(v):_.transparent===!0?s.push(v):i.push(v)}function c(u,p,_,S,m,f){const v=o(u,p,_,S,m,f);_.transmission>0?n.unshift(v):_.transparent===!0?s.unshift(v):i.unshift(v)}function h(u,p,_){i.length>1&&i.sort(u||KS),n.length>1&&n.sort(p||Pp),s.length>1&&s.sort(p||Pp),_&&(i.reverse(),n.reverse(),s.reverse())}function d(){for(let u=t,p=e.length;u<p;u++){const _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:i,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ZS(){let e=new WeakMap;function t(n,s){const r=e.get(n);let a;return r===void 0?(a=new Lp,e.set(n,[a])):s>=r.length?(a=new Lp,r.push(a)):a=r[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function JS(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new k,color:new Yt};break;case"SpotLight":i={position:new k,direction:new k,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":i={color:new Yt,position:new k,halfWidth:new k,halfHeight:new k};break}return e[t.id]=i,i}}}function jS(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}let QS=0;function ty(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ey(e){const t=new JS,i=jS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new be,a=new be;function o(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,S=0,m=0,f=0,v=0,y=0,M=0,A=0,b=0,w=0;c.sort(ty);for(let T=0,P=c.length;T<P;T++){const C=c[T],L=C.color,F=C.intensity,H=C.distance;let O=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ns?O=C.shadow.map.texture:O=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=L.r*F,d+=L.g*F,u+=L.b*F;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],F);w++}else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,Z=i.get(C);Z.shadowIntensity=N.intensity,Z.shadowBias=N.bias,Z.shadowNormalBias=N.normalBias,Z.shadowRadius=N.radius,Z.shadowMapSize=N.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=C.shadow.matrix,v++}n.directional[p]=V,p++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(L).multiplyScalar(F),V.distance=H,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[S]=V;const N=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,N.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[S]=N.matrix,C.castShadow){const Z=i.get(C);Z.shadowIntensity=N.intensity,Z.shadowBias=N.bias,Z.shadowNormalBias=N.normalBias,Z.shadowRadius=N.radius,Z.shadowMapSize=N.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=O,M++}S++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(L).multiplyScalar(F),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=V,m++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const N=C.shadow,Z=i.get(C);Z.shadowIntensity=N.intensity,Z.shadowBias=N.bias,Z.shadowNormalBias=N.normalBias,Z.shadowRadius=N.radius,Z.shadowMapSize=N.mapSize,Z.shadowCameraNear=N.camera.near,Z.shadowCameraFar=N.camera.far,n.pointShadow[_]=Z,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=C.shadow.matrix,y++}n.point[_]=V,_++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(F),V.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[f]=V,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const g=n.hash;(g.directionalLength!==p||g.pointLength!==_||g.spotLength!==S||g.rectAreaLength!==m||g.hemiLength!==f||g.numDirectionalShadows!==v||g.numPointShadows!==y||g.numSpotShadows!==M||g.numSpotMaps!==A||g.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,g.directionalLength=p,g.pointLength=_,g.spotLength=S,g.rectAreaLength=m,g.hemiLength=f,g.numDirectionalShadows=v,g.numPointShadows=y,g.numSpotShadows=M,g.numSpotMaps=A,g.numLightProbes=w,n.version=QS++)}function l(c,h){let d=0,u=0,p=0,_=0,S=0;const m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const y=c[f];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const M=n.hemi[S];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:n}}function Ip(e){const t=new ey(e),i=[],n=[],s=[];function r(u){d.camera=u,i.length=0,n.length=0,s.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(i)}function h(u){t.setupView(i,u)}const d={lightsArray:i,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function iy(e){let t=new WeakMap;function i(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ip(e),t.set(s,[o])):r>=a.length?(o=new Ip(e),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:i,dispose:n}}const ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
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
}`,ry=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],ay=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Dp=new be,oa=new k,vc=new k;function oy(e,t,i){let n=new r1;const s=new jt,r=new jt,a=new Ue,o=new xv,l=new vv,c={},h=i.maxTextureSize,d={[os]:Ei,[Ei]:os,[Dn]:Dn},u=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:ny,fragmentShader:sy}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new pi;_.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ni(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let f=this.type;this.render=function(b,w,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===ax&&(qt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wo);const T=e.getRenderTarget(),P=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),L=e.state;L.setBlending(sn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=f!==this.type;F&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(O=>O.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,O=b.length;H<O;H++){const V=b[H],N=V.shadow;if(N===void 0){qt("WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Z=N.getFrameExtents();s.multiply(Z),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,N.mapSize.y=r.y));const it=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=it,N.map===null||F===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===pa){if(V.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new ui(s.x,s.y,{format:Ns,type:xi,minFilter:hi,magFilter:hi,generateMipmaps:!1}),N.map.texture.name=V.name+".shadowMap",N.map.depthTexture=new Dr(s.x,s.y,tn),N.map.depthTexture.name=V.name+".shadowMapDepth",N.map.depthTexture.format=kn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=qe,N.map.depthTexture.magFilter=qe}else V.isPointLight?(N.map=new p1(s.x),N.map.depthTexture=new pv(s.x,Sn)):(N.map=new ui(s.x,s.y),N.map.depthTexture=new Dr(s.x,s.y,Sn)),N.map.depthTexture.name=V.name+".shadowMap",N.map.depthTexture.format=kn,this.type===wo?(N.map.depthTexture.compareFunction=it?Zu:Ku,N.map.depthTexture.minFilter=hi,N.map.depthTexture.magFilter=hi):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=qe,N.map.depthTexture.magFilter=qe);N.camera.updateProjectionMatrix()}const ct=N.map.isWebGLCubeRenderTarget?6:1;for(let ot=0;ot<ct;ot++){if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,ot),e.clear();else{ot===0&&(e.setRenderTarget(N.map),e.clear());const ht=N.getViewport(ot);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),L.viewport(a)}if(V.isPointLight){const ht=N.camera,Mt=N.matrix,nt=V.distance||ht.far;nt!==ht.far&&(ht.far=nt,ht.updateProjectionMatrix()),oa.setFromMatrixPosition(V.matrixWorld),ht.position.copy(oa),vc.copy(ht.position),vc.add(ry[ot]),ht.up.copy(ay[ot]),ht.lookAt(vc),ht.updateMatrixWorld(),Mt.makeTranslation(-oa.x,-oa.y,-oa.z),Dp.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Dp,ht.coordinateSystem,ht.reversedDepth)}else N.updateMatrices(V);n=N.getFrustum(),M(w,g,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===pa&&v(N,g),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(T,P,C)};function v(b,w){const g=t.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ui(s.x,s.y,{format:Ns,type:xi})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(w,null,g,u,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(w,null,g,p,S,null)}function y(b,w,g,T){let P=null;const C=g.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)P=C;else if(P=g.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=P.uuid,F=w.uuid;let H=c[L];H===void 0&&(H={},c[L]=H);let O=H[F];O===void 0&&(O=P.clone(),H[F]=O,w.addEventListener("dispose",A)),P=O}if(P.visible=w.visible,P.wireframe=w.wireframe,T===pa?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,g.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const L=e.properties.get(P);L.light=g}return P}function M(b,w,g,T,P){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===pa)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,b.matrixWorld);const F=t.update(b),H=b.material;if(Array.isArray(H)){const O=F.groups;for(let V=0,N=O.length;V<N;V++){const Z=O[V],it=H[Z.materialIndex];if(it&&it.visible){const ct=y(b,it,T,P);b.onBeforeShadow(e,b,w,g,F,ct,Z),e.renderBufferDirect(g,null,F,ct,b,Z),b.onAfterShadow(e,b,w,g,F,ct,Z)}}}else if(H.visible){const O=y(b,H,T,P);b.onBeforeShadow(e,b,w,g,F,O,null),e.renderBufferDirect(g,null,F,O,b,null),b.onAfterShadow(e,b,w,g,F,O,null)}}const L=b.children;for(let F=0,H=L.length;F<H;F++)M(L[F],w,g,T,P)}function A(b){b.target.removeEventListener("dispose",A);for(const g in c){const T=c[g],P=b.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function ly(e,t){function i(){let U=!1;const xt=new Ue;let et=null;const gt=new Ue(0,0,0,0);return{setMask:function(St){et!==St&&!U&&(e.colorMask(St,St,St,St),et=St)},setLocked:function(St){U=St},setClear:function(St,st,Ft,Lt,Ae){Ae===!0&&(St*=Lt,st*=Lt,Ft*=Lt),xt.set(St,st,Ft,Lt),gt.equals(xt)===!1&&(e.clearColor(St,st,Ft,Lt),gt.copy(xt))},reset:function(){U=!1,et=null,gt.set(-1,0,0,0)}}}function n(){let U=!1,xt=!1,et=null,gt=null,St=null;return{setReversed:function(st){if(xt!==st){const Ft=t.get("EXT_clip_control");st?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),xt=st;const Lt=St;St=null,this.setClear(Lt)}},getReversed:function(){return xt},setTest:function(st){st?K(e.DEPTH_TEST):wt(e.DEPTH_TEST)},setMask:function(st){et!==st&&!U&&(e.depthMask(st),et=st)},setFunc:function(st){if(xt&&(st=zx[st]),gt!==st){switch(st){case qc:e.depthFunc(e.NEVER);break;case Yc:e.depthFunc(e.ALWAYS);break;case $c:e.depthFunc(e.LESS);break;case Pr:e.depthFunc(e.LEQUAL);break;case Kc:e.depthFunc(e.EQUAL);break;case Zc:e.depthFunc(e.GEQUAL);break;case Jc:e.depthFunc(e.GREATER);break;case jc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}gt=st}},setLocked:function(st){U=st},setClear:function(st){St!==st&&(St=st,xt&&(st=1-st),e.clearDepth(st))},reset:function(){U=!1,et=null,gt=null,St=null,xt=!1}}}function s(){let U=!1,xt=null,et=null,gt=null,St=null,st=null,Ft=null,Lt=null,Ae=null;return{setTest:function(fe){U||(fe?K(e.STENCIL_TEST):wt(e.STENCIL_TEST))},setMask:function(fe){xt!==fe&&!U&&(e.stencilMask(fe),xt=fe)},setFunc:function(fe,Oe,ln){(et!==fe||gt!==Oe||St!==ln)&&(e.stencilFunc(fe,Oe,ln),et=fe,gt=Oe,St=ln)},setOp:function(fe,Oe,ln){(st!==fe||Ft!==Oe||Lt!==ln)&&(e.stencilOp(fe,Oe,ln),st=fe,Ft=Oe,Lt=ln)},setLocked:function(fe){U=fe},setClear:function(fe){Ae!==fe&&(e.clearStencil(fe),Ae=fe)},reset:function(){U=!1,xt=null,et=null,gt=null,St=null,st=null,Ft=null,Lt=null,Ae=null}}}const r=new i,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},p=new WeakMap,_=[],S=null,m=!1,f=null,v=null,y=null,M=null,A=null,b=null,w=null,g=new Yt(0,0,0),T=0,P=!1,C=null,L=null,F=null,H=null,O=null;const V=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,Z=0;const it=e.getParameter(e.VERSION);it.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(it)[1]),N=Z>=1):it.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),N=Z>=2);let ct=null,ot={};const ht=e.getParameter(e.SCISSOR_BOX),Mt=e.getParameter(e.VIEWPORT),nt=new Ue().fromArray(ht),ut=new Ue().fromArray(Mt);function q(U,xt,et,gt){const St=new Uint8Array(4),st=e.createTexture();e.bindTexture(U,st),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ft=0;Ft<et;Ft++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(xt,0,e.RGBA,1,1,gt,0,e.RGBA,e.UNSIGNED_BYTE,St):e.texImage2D(xt+Ft,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,St);return st}const lt={};lt[e.TEXTURE_2D]=q(e.TEXTURE_2D,e.TEXTURE_2D,1),lt[e.TEXTURE_CUBE_MAP]=q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[e.TEXTURE_2D_ARRAY]=q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),lt[e.TEXTURE_3D]=q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(e.DEPTH_TEST),a.setFunc(Pr),te(!1),Zt(wf),K(e.CULL_FACE),Wt(sn);function K(U){h[U]!==!0&&(e.enable(U),h[U]=!0)}function wt(U){h[U]!==!1&&(e.disable(U),h[U]=!1)}function _t(U,xt){return u[U]!==xt?(e.bindFramebuffer(U,xt),u[U]=xt,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=xt),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=xt),!0):!1}function mt(U,xt){let et=_,gt=!1;if(U){et=p.get(xt),et===void 0&&(et=[],p.set(xt,et));const St=U.textures;if(et.length!==St.length||et[0]!==e.COLOR_ATTACHMENT0){for(let st=0,Ft=St.length;st<Ft;st++)et[st]=e.COLOR_ATTACHMENT0+st;et.length=St.length,gt=!0}}else et[0]!==e.BACK&&(et[0]=e.BACK,gt=!0);gt&&e.drawBuffers(et)}function Ht(U){return S!==U?(e.useProgram(U),S=U,!0):!1}const Tt={[vs]:e.FUNC_ADD,[lx]:e.FUNC_SUBTRACT,[cx]:e.FUNC_REVERSE_SUBTRACT};Tt[hx]=e.MIN,Tt[ux]=e.MAX;const $t={[dx]:e.ZERO,[fx]:e.ONE,[px]:e.SRC_COLOR,[Wc]:e.SRC_ALPHA,[Mx]:e.SRC_ALPHA_SATURATE,[xx]:e.DST_COLOR,[gx]:e.DST_ALPHA,[mx]:e.ONE_MINUS_SRC_COLOR,[Xc]:e.ONE_MINUS_SRC_ALPHA,[vx]:e.ONE_MINUS_DST_COLOR,[_x]:e.ONE_MINUS_DST_ALPHA,[Sx]:e.CONSTANT_COLOR,[yx]:e.ONE_MINUS_CONSTANT_COLOR,[Ex]:e.CONSTANT_ALPHA,[bx]:e.ONE_MINUS_CONSTANT_ALPHA};function Wt(U,xt,et,gt,St,st,Ft,Lt,Ae,fe){if(U===sn){m===!0&&(wt(e.BLEND),m=!1);return}if(m===!1&&(K(e.BLEND),m=!0),U!==ox){if(U!==f||fe!==P){if((v!==vs||A!==vs)&&(e.blendEquation(e.FUNC_ADD),v=vs,A=vs),fe)switch(U){case gr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fs:e.blendFunc(e.ONE,e.ONE);break;case Rf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Cf:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ue("WebGLState: Invalid blending: ",U);break}else switch(U){case gr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Rf:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cf:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",U);break}y=null,M=null,b=null,w=null,g.set(0,0,0),T=0,f=U,P=fe}return}St=St||xt,st=st||et,Ft=Ft||gt,(xt!==v||St!==A)&&(e.blendEquationSeparate(Tt[xt],Tt[St]),v=xt,A=St),(et!==y||gt!==M||st!==b||Ft!==w)&&(e.blendFuncSeparate($t[et],$t[gt],$t[st],$t[Ft]),y=et,M=gt,b=st,w=Ft),(Lt.equals(g)===!1||Ae!==T)&&(e.blendColor(Lt.r,Lt.g,Lt.b,Ae),g.copy(Lt),T=Ae),f=U,P=!1}function Nt(U,xt){U.side===Dn?wt(e.CULL_FACE):K(e.CULL_FACE);let et=U.side===Ei;xt&&(et=!et),te(et),U.blending===gr&&U.transparent===!1?Wt(sn):Wt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const gt=U.stencilWrite;o.setTest(gt),gt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Kt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):wt(e.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){C!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),C=U)}function Zt(U){U!==sx?(K(e.CULL_FACE),U!==L&&(U===wf?e.cullFace(e.BACK):U===rx?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):wt(e.CULL_FACE),L=U}function ce(U){U!==F&&(N&&e.lineWidth(U),F=U)}function Kt(U,xt,et){U?(K(e.POLYGON_OFFSET_FILL),(H!==xt||O!==et)&&(H=xt,O=et,a.getReversed()&&(xt=-xt),e.polygonOffset(xt,et))):wt(e.POLYGON_OFFSET_FILL)}function ne(U){U?K(e.SCISSOR_TEST):wt(e.SCISSOR_TEST)}function re(U){U===void 0&&(U=e.TEXTURE0+V-1),ct!==U&&(e.activeTexture(U),ct=U)}function D(U,xt,et){et===void 0&&(ct===null?et=e.TEXTURE0+V-1:et=ct);let gt=ot[et];gt===void 0&&(gt={type:void 0,texture:void 0},ot[et]=gt),(gt.type!==U||gt.texture!==xt)&&(ct!==et&&(e.activeTexture(et),ct=et),e.bindTexture(U,xt||lt[U]),gt.type=U,gt.texture=xt)}function Ct(){const U=ot[ct];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{e.compressedTexImage2D(...arguments)}catch(U){ue("WebGLState:",U)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(U){ue("WebGLState:",U)}}function x(){try{e.texSubImage2D(...arguments)}catch(U){ue("WebGLState:",U)}}function z(){try{e.texSubImage3D(...arguments)}catch(U){ue("WebGLState:",U)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(U){ue("WebGLState:",U)}}function j(){try{e.compressedTexSubImage3D(...arguments)}catch(U){ue("WebGLState:",U)}}function ft(){try{e.texStorage2D(...arguments)}catch(U){ue("WebGLState:",U)}}function rt(){try{e.texStorage3D(...arguments)}catch(U){ue("WebGLState:",U)}}function Y(){try{e.texImage2D(...arguments)}catch(U){ue("WebGLState:",U)}}function J(){try{e.texImage3D(...arguments)}catch(U){ue("WebGLState:",U)}}function dt(U){return d[U]!==void 0?d[U]:e.getParameter(U)}function At(U,xt){d[U]!==xt&&(e.pixelStorei(U,xt),d[U]=xt)}function tt(U){nt.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),nt.copy(U))}function at(U){ut.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),ut.copy(U))}function pt(U,xt){let et=c.get(xt);et===void 0&&(et=new WeakMap,c.set(xt,et));let gt=et.get(U);gt===void 0&&(gt=e.getUniformBlockIndex(xt,U.name),et.set(U,gt))}function vt(U,xt){const gt=c.get(xt).get(U);l.get(xt)!==gt&&(e.uniformBlockBinding(xt,gt,U.__bindingPointIndex),l.set(xt,gt))}function Dt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},ct=null,ot={},u={},p=new WeakMap,_=[],S=null,m=!1,f=null,v=null,y=null,M=null,A=null,b=null,w=null,g=new Yt(0,0,0),T=0,P=!1,C=null,L=null,F=null,H=null,O=null,nt.set(0,0,e.canvas.width,e.canvas.height),ut.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:wt,bindFramebuffer:_t,drawBuffers:mt,useProgram:Ht,setBlending:Wt,setMaterial:Nt,setFlipSided:te,setCullFace:Zt,setLineWidth:ce,setPolygonOffset:Kt,setScissorTest:ne,activeTexture:re,bindTexture:D,unbindTexture:Ct,compressedTexImage2D:ee,compressedTexImage3D:R,texImage2D:Y,texImage3D:J,pixelStorei:At,getParameter:dt,updateUBOMapping:pt,uniformBlockBinding:vt,texStorage2D:ft,texStorage3D:rt,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:tt,viewport:at,reset:Dt}}function cy(e,t,i,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,x){return _?new OffscreenCanvas(R,x):Xo("canvas")}function m(R,x,z){let G=1;const j=ee(R);if((j.width>z||j.height>z)&&(G=z/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ft=Math.floor(G*j.width),rt=Math.floor(G*j.height);u===void 0&&(u=S(ft,rt));const Y=x?S(ft,rt):u;return Y.width=ft,Y.height=rt,Y.getContext("2d").drawImage(R,0,0,ft,rt),qt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ft+"x"+rt+")."),Y}else return"data"in R&&qt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function f(R){return R.generateMipmaps}function v(R){e.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(R,x,z,G,j,ft=!1){if(R!==null){if(e[R]!==void 0)return e[R];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt;G&&(rt=t.get("EXT_texture_norm16"),rt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===e.RED&&(z===e.FLOAT&&(Y=e.R32F),z===e.HALF_FLOAT&&(Y=e.R16F),z===e.UNSIGNED_BYTE&&(Y=e.R8),z===e.UNSIGNED_SHORT&&rt&&(Y=rt.R16_EXT),z===e.SHORT&&rt&&(Y=rt.R16_SNORM_EXT)),x===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.R8UI),z===e.UNSIGNED_SHORT&&(Y=e.R16UI),z===e.UNSIGNED_INT&&(Y=e.R32UI),z===e.BYTE&&(Y=e.R8I),z===e.SHORT&&(Y=e.R16I),z===e.INT&&(Y=e.R32I)),x===e.RG&&(z===e.FLOAT&&(Y=e.RG32F),z===e.HALF_FLOAT&&(Y=e.RG16F),z===e.UNSIGNED_BYTE&&(Y=e.RG8),z===e.UNSIGNED_SHORT&&rt&&(Y=rt.RG16_EXT),z===e.SHORT&&rt&&(Y=rt.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RG8UI),z===e.UNSIGNED_SHORT&&(Y=e.RG16UI),z===e.UNSIGNED_INT&&(Y=e.RG32UI),z===e.BYTE&&(Y=e.RG8I),z===e.SHORT&&(Y=e.RG16I),z===e.INT&&(Y=e.RG32I)),x===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),z===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),z===e.UNSIGNED_INT&&(Y=e.RGB32UI),z===e.BYTE&&(Y=e.RGB8I),z===e.SHORT&&(Y=e.RGB16I),z===e.INT&&(Y=e.RGB32I)),x===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),z===e.UNSIGNED_INT&&(Y=e.RGBA32UI),z===e.BYTE&&(Y=e.RGBA8I),z===e.SHORT&&(Y=e.RGBA16I),z===e.INT&&(Y=e.RGBA32I)),x===e.RGB&&(z===e.UNSIGNED_SHORT&&rt&&(Y=rt.RGB16_EXT),z===e.SHORT&&rt&&(Y=rt.RGB16_SNORM_EXT),z===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),x===e.RGBA){const J=ft?Go:ae.getTransfer(j);z===e.FLOAT&&(Y=e.RGBA32F),z===e.HALF_FLOAT&&(Y=e.RGBA16F),z===e.UNSIGNED_BYTE&&(Y=J===_e?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT&&rt&&(Y=rt.RGBA16_EXT),z===e.SHORT&&rt&&(Y=rt.RGBA16_SNORM_EXT),z===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function A(R,x){let z;return R?x===null||x===Sn||x===Ta?z=e.DEPTH24_STENCIL8:x===tn?z=e.DEPTH32F_STENCIL8:x===Aa&&(z=e.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Sn||x===Ta?z=e.DEPTH_COMPONENT24:x===tn?z=e.DEPTH_COMPONENT32F:x===Aa&&(z=e.DEPTH_COMPONENT16),z}function b(R,x){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==qe&&R.minFilter!==hi?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function g(R){const x=R.target;x.removeEventListener("dispose",g),C(x)}function T(R){const x=n.get(R);if(x.__webglInit===void 0)return;const z=R.source,G=p.get(z);if(G){const j=G[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(R),Object.keys(G).length===0&&p.delete(z)}n.remove(R)}function P(R){const x=n.get(R);e.deleteTexture(x.__webglTexture);const z=R.source,G=p.get(z);delete G[x.__cacheKey],a.memory.textures--}function C(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let j=0;j<x.__webglFramebuffer[G].length;j++)e.deleteFramebuffer(x.__webglFramebuffer[G][j]);else e.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)e.deleteFramebuffer(x.__webglFramebuffer[G]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=R.textures;for(let G=0,j=z.length;G<j;G++){const ft=n.get(z[G]);ft.__webglTexture&&(e.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(z[G])}n.remove(R)}let L=0;function F(){L=0}function H(){return L}function O(R){L=R}function V(){const R=L;return R>=s.maxTextures&&qt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function N(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Z(R,x){const z=n.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const G=R.image;if(G===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(z,R,x);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+x)}function it(R,x){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){wt(z,R,x);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+x)}function ct(R,x){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){wt(z,R,x);return}i.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+x)}function ot(R,x){const z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){_t(z,R,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+x)}const ht={[Qc]:e.REPEAT,[Fn]:e.CLAMP_TO_EDGE,[th]:e.MIRRORED_REPEAT},Mt={[qe]:e.NEAREST,[wx]:e.NEAREST_MIPMAP_NEAREST,[qa]:e.NEAREST_MIPMAP_LINEAR,[hi]:e.LINEAR,[Vl]:e.LINEAR_MIPMAP_NEAREST,[Es]:e.LINEAR_MIPMAP_LINEAR},nt={[Px]:e.NEVER,[Ux]:e.ALWAYS,[Lx]:e.LESS,[Ku]:e.LEQUAL,[Ix]:e.EQUAL,[Zu]:e.GEQUAL,[Dx]:e.GREATER,[Fx]:e.NOTEQUAL};function ut(R,x){if(x.type===tn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hi||x.magFilter===Vl||x.magFilter===qa||x.magFilter===Es||x.minFilter===hi||x.minFilter===Vl||x.minFilter===qa||x.minFilter===Es)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,ht[x.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,ht[x.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,ht[x.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,Mt[x.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,nt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qe||x.minFilter!==qa&&x.minFilter!==Es||x.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function q(R,x){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const G=x.source;let j=p.get(G);j===void 0&&(j={},p.set(G,j));const ft=N(x);if(ft!==R.__cacheKey){j[ft]===void 0&&(j[ft]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[ft].usedTimes++;const rt=j[R.__cacheKey];rt!==void 0&&(j[R.__cacheKey].usedTimes--,rt.usedTimes===0&&P(x)),R.__cacheKey=ft,R.__webglTexture=j[ft].texture}return z}function lt(R,x,z){return Math.floor(Math.floor(R/z)/x)}function K(R,x,z,G){const ft=R.updateRanges;if(ft.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,z,G,x.data);else{ft.sort((At,tt)=>At.start-tt.start);let rt=0;for(let At=1;At<ft.length;At++){const tt=ft[rt],at=ft[At],pt=tt.start+tt.count,vt=lt(at.start,x.width,4),Dt=lt(tt.start,x.width,4);at.start<=pt+1&&vt===Dt&&lt(at.start+at.count-1,x.width,4)===vt?tt.count=Math.max(tt.count,at.start+at.count-tt.start):(++rt,ft[rt]=at)}ft.length=rt+1;const Y=i.getParameter(e.UNPACK_ROW_LENGTH),J=i.getParameter(e.UNPACK_SKIP_PIXELS),dt=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let At=0,tt=ft.length;At<tt;At++){const at=ft[At],pt=Math.floor(at.start/4),vt=Math.ceil(at.count/4),Dt=pt%x.width,U=Math.floor(pt/x.width),xt=vt,et=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Dt),i.pixelStorei(e.UNPACK_SKIP_ROWS,U),i.texSubImage2D(e.TEXTURE_2D,0,Dt,U,xt,et,z,G,x.data)}R.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Y),i.pixelStorei(e.UNPACK_SKIP_PIXELS,J),i.pixelStorei(e.UNPACK_SKIP_ROWS,dt)}}function wt(R,x,z){let G=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=e.TEXTURE_3D);const j=q(R,x),ft=x.source;i.bindTexture(G,R.__webglTexture,e.TEXTURE0+z);const rt=n.get(ft);if(ft.version!==rt.__version||j===!0){if(i.activeTexture(e.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const et=ae.getPrimaries(ae.workingColorSpace),gt=x.colorSpace===es?null:ae.getPrimaries(x.colorSpace),St=x.colorSpace===es||et===gt?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let J=m(x.image,!1,s.maxTextureSize);J=Ct(x,J);const dt=r.convert(x.format,x.colorSpace),At=r.convert(x.type);let tt=M(x.internalFormat,dt,At,x.normalized,x.colorSpace,x.isVideoTexture);ut(G,x);let at;const pt=x.mipmaps,vt=x.isVideoTexture!==!0,Dt=rt.__version===void 0||j===!0,U=ft.dataReady,xt=b(x,J);if(x.isDepthTexture)tt=A(x.format===bs,x.type),Dt&&(vt?i.texStorage2D(e.TEXTURE_2D,1,tt,J.width,J.height):i.texImage2D(e.TEXTURE_2D,0,tt,J.width,J.height,0,dt,At,null));else if(x.isDataTexture)if(pt.length>0){vt&&Dt&&i.texStorage2D(e.TEXTURE_2D,xt,tt,pt[0].width,pt[0].height);for(let et=0,gt=pt.length;et<gt;et++)at=pt[et],vt?U&&i.texSubImage2D(e.TEXTURE_2D,et,0,0,at.width,at.height,dt,At,at.data):i.texImage2D(e.TEXTURE_2D,et,tt,at.width,at.height,0,dt,At,at.data);x.generateMipmaps=!1}else vt?(Dt&&i.texStorage2D(e.TEXTURE_2D,xt,tt,J.width,J.height),U&&K(x,J,dt,At)):i.texImage2D(e.TEXTURE_2D,0,tt,J.width,J.height,0,dt,At,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){vt&&Dt&&i.texStorage3D(e.TEXTURE_2D_ARRAY,xt,tt,pt[0].width,pt[0].height,J.depth);for(let et=0,gt=pt.length;et<gt;et++)if(at=pt[et],x.format!==en)if(dt!==null)if(vt){if(U)if(x.layerUpdates.size>0){const St=hp(at.width,at.height,x.format,x.type);for(const st of x.layerUpdates){const Ft=at.data.subarray(st*St/at.data.BYTES_PER_ELEMENT,(st+1)*St/at.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,st,at.width,at.height,1,dt,Ft)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,at.width,at.height,J.depth,dt,at.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,tt,at.width,at.height,J.depth,0,at.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?U&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,at.width,at.height,J.depth,dt,At,at.data):i.texImage3D(e.TEXTURE_2D_ARRAY,et,tt,at.width,at.height,J.depth,0,dt,At,at.data)}else{vt&&Dt&&i.texStorage2D(e.TEXTURE_2D,xt,tt,pt[0].width,pt[0].height);for(let et=0,gt=pt.length;et<gt;et++)at=pt[et],x.format!==en?dt!==null?vt?U&&i.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,at.width,at.height,dt,at.data):i.compressedTexImage2D(e.TEXTURE_2D,et,tt,at.width,at.height,0,at.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?U&&i.texSubImage2D(e.TEXTURE_2D,et,0,0,at.width,at.height,dt,At,at.data):i.texImage2D(e.TEXTURE_2D,et,tt,at.width,at.height,0,dt,At,at.data)}else if(x.isDataArrayTexture)if(vt){if(Dt&&i.texStorage3D(e.TEXTURE_2D_ARRAY,xt,tt,J.width,J.height,J.depth),U)if(x.layerUpdates.size>0){const et=hp(J.width,J.height,x.format,x.type);for(const gt of x.layerUpdates){const St=J.data.subarray(gt*et/J.data.BYTES_PER_ELEMENT,(gt+1)*et/J.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,gt,J.width,J.height,1,dt,At,St)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,At,J.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,tt,J.width,J.height,J.depth,0,dt,At,J.data);else if(x.isData3DTexture)vt?(Dt&&i.texStorage3D(e.TEXTURE_3D,xt,tt,J.width,J.height,J.depth),U&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,At,J.data)):i.texImage3D(e.TEXTURE_3D,0,tt,J.width,J.height,J.depth,0,dt,At,J.data);else if(x.isFramebufferTexture){if(Dt)if(vt)i.texStorage2D(e.TEXTURE_2D,xt,tt,J.width,J.height);else{let et=J.width,gt=J.height;for(let St=0;St<xt;St++)i.texImage2D(e.TEXTURE_2D,St,tt,et,gt,0,dt,At,null),et>>=1,gt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){const et=e.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),J.parentNode!==et){et.appendChild(J),d.add(x),et.onpaint=gt=>{const St=gt.changedElements;for(const st of d)St.includes(st.image)&&(st.needsUpdate=!0)},et.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,J);else{const St=e.RGBA,st=e.RGBA,Ft=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,St,st,Ft,J)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(pt.length>0){if(vt&&Dt){const et=ee(pt[0]);i.texStorage2D(e.TEXTURE_2D,xt,tt,et.width,et.height)}for(let et=0,gt=pt.length;et<gt;et++)at=pt[et],vt?U&&i.texSubImage2D(e.TEXTURE_2D,et,0,0,dt,At,at):i.texImage2D(e.TEXTURE_2D,et,tt,dt,At,at);x.generateMipmaps=!1}else if(vt){if(Dt){const et=ee(J);i.texStorage2D(e.TEXTURE_2D,xt,tt,et.width,et.height)}U&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,At,J)}else i.texImage2D(e.TEXTURE_2D,0,tt,dt,At,J);f(x)&&v(G),rt.__version=ft.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function _t(R,x,z){if(x.image.length!==6)return;const G=q(R,x),j=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+z);const ft=n.get(j);if(j.version!==ft.__version||G===!0){i.activeTexture(e.TEXTURE0+z);const rt=ae.getPrimaries(ae.workingColorSpace),Y=x.colorSpace===es?null:ae.getPrimaries(x.colorSpace),J=x.colorSpace===es||rt===Y?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const dt=x.isCompressedTexture||x.image[0].isCompressedTexture,At=x.image[0]&&x.image[0].isDataTexture,tt=[];for(let st=0;st<6;st++)!dt&&!At?tt[st]=m(x.image[st],!0,s.maxCubemapSize):tt[st]=At?x.image[st].image:x.image[st],tt[st]=Ct(x,tt[st]);const at=tt[0],pt=r.convert(x.format,x.colorSpace),vt=r.convert(x.type),Dt=M(x.internalFormat,pt,vt,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,xt=ft.__version===void 0||G===!0,et=j.dataReady;let gt=b(x,at);ut(e.TEXTURE_CUBE_MAP,x);let St;if(dt){U&&xt&&i.texStorage2D(e.TEXTURE_CUBE_MAP,gt,Dt,at.width,at.height);for(let st=0;st<6;st++){St=tt[st].mipmaps;for(let Ft=0;Ft<St.length;Ft++){const Lt=St[Ft];x.format!==en?pt!==null?U?et&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,Lt.width,Lt.height,pt,Lt.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Dt,Lt.width,Lt.height,0,Lt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?et&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,Lt.width,Lt.height,pt,vt,Lt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Dt,Lt.width,Lt.height,0,pt,vt,Lt.data)}}}else{if(St=x.mipmaps,U&&xt){St.length>0&&gt++;const st=ee(tt[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,gt,Dt,st.width,st.height)}for(let st=0;st<6;st++)if(At){U?et&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,tt[st].width,tt[st].height,pt,vt,tt[st].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Dt,tt[st].width,tt[st].height,0,pt,vt,tt[st].data);for(let Ft=0;Ft<St.length;Ft++){const Ae=St[Ft].image[st].image;U?et&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,Ae.width,Ae.height,pt,vt,Ae.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Dt,Ae.width,Ae.height,0,pt,vt,Ae.data)}}else{U?et&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt,vt,tt[st]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Dt,pt,vt,tt[st]);for(let Ft=0;Ft<St.length;Ft++){const Lt=St[Ft];U?et&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,pt,vt,Lt.image[st]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Dt,pt,vt,Lt.image[st])}}}f(x)&&v(e.TEXTURE_CUBE_MAP),ft.__version=j.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function mt(R,x,z,G,j,ft){const rt=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),J=M(z.internalFormat,rt,Y,z.normalized,z.colorSpace),dt=n.get(x),At=n.get(z);if(At.__renderTarget=x,!dt.__hasExternalTextures){const tt=Math.max(1,x.width>>ft),at=Math.max(1,x.height>>ft);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?i.texImage3D(j,ft,J,tt,at,x.depth,0,rt,Y,null):i.texImage2D(j,ft,J,tt,at,0,rt,Y,null)}i.bindFramebuffer(e.FRAMEBUFFER,R),re(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,j,At.__webglTexture,0,ne(x)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,j,At.__webglTexture,ft),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ht(R,x,z){if(e.bindRenderbuffer(e.RENDERBUFFER,R),x.depthBuffer){const G=x.depthTexture,j=G&&G.isDepthTexture?G.type:null,ft=A(x.stencilBuffer,j),rt=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;re(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ne(x),ft,x.width,x.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,ne(x),ft,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ft,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,rt,e.RENDERBUFFER,R)}else{const G=x.textures;for(let j=0;j<G.length;j++){const ft=G[j],rt=r.convert(ft.format,ft.colorSpace),Y=r.convert(ft.type),J=M(ft.internalFormat,rt,Y,ft.normalized,ft.colorSpace);re(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ne(x),J,x.width,x.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,ne(x),J,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,J,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Tt(R,x,z){const G=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,j.__webglTexture),ut(e.TEXTURE_CUBE_MAP,x.depthTexture);const dt=r.convert(x.depthTexture.format),At=r.convert(x.depthTexture.type);let tt;x.depthTexture.format===kn?tt=e.DEPTH_COMPONENT24:x.depthTexture.format===bs&&(tt=e.DEPTH24_STENCIL8);for(let at=0;at<6;at++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,tt,x.width,x.height,0,dt,At,null)}}else Z(x.depthTexture,0);const ft=j.__webglTexture,rt=ne(x),Y=G?e.TEXTURE_CUBE_MAP_POSITIVE_X+z:e.TEXTURE_2D,J=x.depthTexture.format===bs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===kn)re(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,Y,ft,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,J,Y,ft,0);else if(x.depthTexture.format===bs)re(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,Y,ft,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,J,Y,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(R){const x=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const G=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=G}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let G=0;G<6;G++)Tt(x.__webglFramebuffer[G],R,G);else{const G=R.texture.mipmaps;G&&G.length>0?Tt(x.__webglFramebuffer[0],R,0):Tt(x.__webglFramebuffer,R,0)}else if(z){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=e.createRenderbuffer(),Ht(x.__webglDepthbuffer[G],R,!1);else{const j=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,ft),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,ft)}}else{const G=R.texture.mipmaps;if(G&&G.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Ht(x.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ft),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,ft)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Wt(R,x,z){const G=n.get(R);x!==void 0&&mt(G.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&$t(R)}function Nt(R){const x=R.texture,z=n.get(R),G=n.get(x);R.addEventListener("dispose",g);const j=R.textures,ft=R.isWebGLCubeRenderTarget===!0,rt=j.length>1;if(rt||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=x.version,a.memory.textures++),ft){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let J=0;J<x.mipmaps.length;J++)z.__webglFramebuffer[Y][J]=e.createFramebuffer()}else z.__webglFramebuffer[Y]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)z.__webglFramebuffer[Y]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(rt)for(let Y=0,J=j.length;Y<J;Y++){const dt=n.get(j[Y]);dt.__webglTexture===void 0&&(dt.__webglTexture=e.createTexture(),a.memory.textures++)}if(R.samples>0&&re(R)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){const J=j[Y];z.__webglColorRenderbuffer[Y]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);const dt=r.convert(J.format,J.colorSpace),At=r.convert(J.type),tt=M(J.internalFormat,dt,At,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),at=ne(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,at,tt,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),Ht(z.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ft){i.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),ut(e.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)mt(z.__webglFramebuffer[Y][J],R,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else mt(z.__webglFramebuffer[Y],R,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(x)&&v(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(rt){for(let Y=0,J=j.length;Y<J;Y++){const dt=j[Y],At=n.get(dt);let tt=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(tt,At.__webglTexture),ut(tt,dt),mt(z.__webglFramebuffer,R,dt,e.COLOR_ATTACHMENT0+Y,tt,0),f(dt)&&v(tt)}i.unbindTexture()}else{let Y=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(Y,G.__webglTexture),ut(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)mt(z.__webglFramebuffer[J],R,x,e.COLOR_ATTACHMENT0,Y,J);else mt(z.__webglFramebuffer,R,x,e.COLOR_ATTACHMENT0,Y,0);f(x)&&v(Y),i.unbindTexture()}R.depthBuffer&&$t(R)}function te(R){const x=R.textures;for(let z=0,G=x.length;z<G;z++){const j=x[z];if(f(j)){const ft=y(R),rt=n.get(j).__webglTexture;i.bindTexture(ft,rt),v(ft),i.unbindTexture()}}}const Zt=[],ce=[];function Kt(R){if(R.samples>0){if(re(R)===!1){const x=R.textures,z=R.width,G=R.height;let j=e.COLOR_BUFFER_BIT;const ft=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=n.get(R),Y=x.length>1;if(Y)for(let dt=0;dt<x.length;dt++)i.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),Y){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,rt.__webglColorRenderbuffer[dt]);const At=n.get(x[dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,At,0)}e.blitFramebuffer(0,0,z,G,0,0,z,G,j,e.NEAREST),l===!0&&(Zt.length=0,ce.length=0,Zt.push(e.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Zt.push(ft),ce.push(ft),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Zt))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Y)for(let dt=0;dt<x.length;dt++){i.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,rt.__webglColorRenderbuffer[dt]);const At=n.get(x[dt]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,At,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function ne(R){return Math.min(s.maxSamples,R.samples)}function re(R){const x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(R){const x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Ct(R,x){const z=R.colorSpace,G=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Vo&&z!==es&&(ae.getTransfer(z)===_e?(G!==en||j!==qi)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",z)),x}function ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.getTextureUnits=H,this.setTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=it,this.setTexture3D=ct,this.setTextureCube=ot,this.rebindTextures=Wt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function hy(e,t){function i(n,s=es){let r;const a=ae.getTransfer(s);if(n===qi)return e.UNSIGNED_BYTE;if(n===Gu)return e.UNSIGNED_SHORT_4_4_4_4;if(n===Wu)return e.UNSIGNED_SHORT_5_5_5_1;if(n===$0)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===K0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===q0)return e.BYTE;if(n===Y0)return e.SHORT;if(n===Aa)return e.UNSIGNED_SHORT;if(n===Vu)return e.INT;if(n===Sn)return e.UNSIGNED_INT;if(n===tn)return e.FLOAT;if(n===xi)return e.HALF_FLOAT;if(n===Z0)return e.ALPHA;if(n===J0)return e.RGB;if(n===en)return e.RGBA;if(n===kn)return e.DEPTH_COMPONENT;if(n===bs)return e.DEPTH_STENCIL;if(n===Xu)return e.RED;if(n===qu)return e.RED_INTEGER;if(n===Ns)return e.RG;if(n===Yu)return e.RG_INTEGER;if(n===$u)return e.RGBA_INTEGER;if(n===Ro||n===Co||n===Po||n===Lo)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eh||n===ih||n===nh||n===sh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ih)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rh||n===ah||n===oh||n===lh||n===ch||n===ko||n===hh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rh||n===ah)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===lh)return r.COMPRESSED_R11_EAC;if(n===ch)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ko)return r.COMPRESSED_RG11_EAC;if(n===hh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===_h||n===xh||n===vh||n===Mh||n===Sh||n===yh||n===Eh||n===bh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ph)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_h)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bh)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ah||n===Th||n===wh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ah)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Ch||n===Ho||n===Ph)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ta?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:i}}const uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`;class fy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const n=new l1(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,n=new $e({vertexShader:uy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new Sl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class py extends Vs{constructor(t,i){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new fy,f={},v=i.getContextAttributes();let y=null,M=null;const A=[],b=[],w=new jt;let g=null;const T=new Xi;T.viewport=new Ue;const P=new Xi;P.viewport=new Ue;const C=[T,P],L=new Sv;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let lt=A[q];return lt===void 0&&(lt=new Zl,A[q]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(q){let lt=A[q];return lt===void 0&&(lt=new Zl,A[q]=lt),lt.getGripSpace()},this.getHand=function(q){let lt=A[q];return lt===void 0&&(lt=new Zl,A[q]=lt),lt.getHandSpace()};function O(q){const lt=b.indexOf(q.inputSource);if(lt===-1)return;const K=A[lt];K!==void 0&&(K.update(q.inputSource,q.frame,c||a),K.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",N);for(let q=0;q<A.length;q++){const lt=b[q];lt!==null&&(b[q]=null,A[q].disconnect(lt))}F=null,H=null,m.reset();for(const q in f)delete f[q];t.setRenderTarget(y),p=null,u=null,d=null,s=null,M=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,i)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await i.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,wt=null,_t=null;v.depth&&(_t=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,K=v.stencil?bs:kn,wt=v.stencil?Ta:Sn);const mt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(mt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new ui(u.textureWidth,u.textureHeight,{format:en,type:qi,depthTexture:new Dr(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const K={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,i,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ui(p.framebufferWidth,p.framebufferHeight,{format:en,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(q){for(let lt=0;lt<q.removed.length;lt++){const K=q.removed[lt],wt=b.indexOf(K);wt>=0&&(b[wt]=null,A[wt].disconnect(K))}for(let lt=0;lt<q.added.length;lt++){const K=q.added[lt];let wt=b.indexOf(K);if(wt===-1){for(let mt=0;mt<A.length;mt++)if(mt>=b.length){b.push(K),wt=mt;break}else if(b[mt]===null){b[mt]=K,wt=mt;break}if(wt===-1)break}const _t=A[wt];_t&&_t.connect(K)}}const Z=new k,it=new k;function ct(q,lt,K){Z.setFromMatrixPosition(lt.matrixWorld),it.setFromMatrixPosition(K.matrixWorld);const wt=Z.distanceTo(it),_t=lt.projectionMatrix.elements,mt=K.projectionMatrix.elements,Ht=_t[14]/(_t[10]-1),Tt=_t[14]/(_t[10]+1),$t=(_t[9]+1)/_t[5],Wt=(_t[9]-1)/_t[5],Nt=(_t[8]-1)/_t[0],te=(mt[8]+1)/mt[0],Zt=Ht*Nt,ce=Ht*te,Kt=wt/(-Nt+te),ne=Kt*-Nt;if(lt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ne),q.translateZ(Kt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_t[10]===-1)q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const re=Ht+Kt,D=Tt+Kt,Ct=Zt-ne,ee=ce+(wt-ne),R=$t*Tt/D*re,x=Wt*Tt/D*re;q.projectionMatrix.makePerspective(Ct,ee,R,x,re,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ot(q,lt){lt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(lt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let lt=q.near,K=q.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(K=m.depthFar)),L.near=P.near=T.near=lt,L.far=P.far=T.far=K,(F!==L.near||H!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,H=L.far),L.layers.mask=q.layers.mask|6,T.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;const wt=q.parent,_t=L.cameras;ot(L,wt);for(let mt=0;mt<_t.length;mt++)ot(_t[mt],wt);_t.length===2?ct(L,T,P):L.projectionMatrix.copy(T.projectionMatrix),ht(q,L,wt)};function ht(q,lt,K){K===null?q.matrix.copy(lt.matrixWorld):(q.matrix.copy(K.matrixWorld),q.matrix.invert(),q.matrix.multiply(lt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Lh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(q){return f[q]};let Mt=null;function nt(q,lt){if(h=lt.getViewerPose(c||a),_=lt,h!==null){const K=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let wt=!1;K.length!==L.cameras.length&&(L.cameras.length=0,wt=!0);for(let Tt=0;Tt<K.length;Tt++){const $t=K[Tt];let Wt=null;if(p!==null)Wt=p.getViewport($t);else{const te=d.getViewSubImage(u,$t);Wt=te.viewport,Tt===0&&(t.setRenderTargetTextures(M,te.colorTexture,te.depthStencilTexture),t.setRenderTarget(M))}let Nt=C[Tt];Nt===void 0&&(Nt=new Xi,Nt.layers.enable(Tt),Nt.viewport=new Ue,C[Tt]=Nt),Nt.matrix.fromArray($t.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray($t.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Tt===0&&(L.matrix.copy(Nt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),wt===!0&&L.cameras.push(Nt)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const Tt=d.getDepthInformation(K[0]);Tt&&Tt.isValid&&Tt.texture&&m.init(Tt,s.renderState)}if(_t&&_t.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let Tt=0;Tt<K.length;Tt++){const $t=K[Tt].camera;if($t){let Wt=f[$t];Wt||(Wt=new l1,f[$t]=Wt);const Nt=d.getCameraImage($t);Wt.sourceTexture=Nt}}}}for(let K=0;K<A.length;K++){const wt=b[K],_t=A[K];wt!==null&&_t!==void 0&&_t.update(wt,lt,c||a)}Mt&&Mt(q,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),_=null}const ut=new d1;ut.setAnimationLoop(nt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const my=new be,v1=new Jt;v1.set(-1,0,0,0,1,0,0,0,1);function gy(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,c1(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,y,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),S(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ei&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ei&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(my.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(v1),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ei&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _y(e,t,i,n){let s={},r={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const b=A.program;n.uniformBlockBinding(M,b)}function c(M,A){let b=s[M.id];b===void 0&&(m(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",v));const w=A.program;n.updateUBOMapping(M,w);const g=t.render.frame;r[M.id]!==g&&(u(M),r[M.id]=g)}function h(M){const A=d();M.__bindingPointIndex=A;const b=e.createBuffer(),w=M.__size,g=M.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,w,g),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const A=s[M.id],b=M.uniforms,w=M.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let g=0,T=b.length;g<T;g++){const P=b[g];if(Array.isArray(P))for(let C=0,L=P.length;C<L;C++)p(P[C],g,C,w);else p(P,g,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(M,A,b,w){if(S(M,A,b,w)===!0){const g=M.__offset,T=M.value;if(Array.isArray(T)){let P=0;for(let C=0;C<T.length;C++){const L=T[C],F=f(L);_(L,M.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,M.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,g,M.__data)}}function _(M,A,b){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,b)}function S(M,A,b,w){const g=M.value,T=A+"_"+b;if(w[T]===void 0)return typeof g=="number"||typeof g=="boolean"?w[T]=g:ArrayBuffer.isView(g)?w[T]=g.slice():w[T]=g.clone(),!0;{const P=w[T];if(typeof g=="number"||typeof g=="boolean"){if(P!==g)return w[T]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(P.equals(g)===!1)return P.copy(g),!0}}return!1}function m(M){const A=M.uniforms;let b=0;const w=16;for(let T=0,P=A.length;T<P;T++){const C=Array.isArray(A[T])?A[T]:[A[T]];for(let L=0,F=C.length;L<F;L++){const H=C[L],O=Array.isArray(H.value)?H.value:[H.value];for(let V=0,N=O.length;V<N;V++){const Z=O[V],it=f(Z),ct=b%w,ot=ct%it.boundary,ht=ct+ot;b+=ot,ht!==0&&w-ht<it.storage&&(b+=w-ht),H.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=it.storage}}}const g=b%w;return g>0&&(b+=w-g),M.__size=b,M.__cache={},this}function f(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",M),A}function v(M){const A=M.target;A.removeEventListener("dispose",v);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),e.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function y(){for(const M in s)e.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:y}}const xy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function vy(){return fn===null&&(fn=new s1(xy,16,16,Ns,xi),fn.name="DFG_LUT",fn.minFilter=hi,fn.magFilter=hi,fn.wrapS=Fn,fn.wrapT=Fn,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class My{constructor(t={}){const{canvas:i=Ox(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=qi}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=p,m=new Set([$u,Yu,qu]),f=new Set([qi,Sn,Aa,Ta,Gu,Wu]),v=new Uint32Array(4),y=new Int32Array(4),M=new k;let A=null,b=null;const w=[],g=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let C=!1,L=null,F=null,H=null,O=null;this._outputColorSpace=Wi;let V=0,N=0,Z=null,it=-1,ct=null;const ot=new Ue,ht=new Ue;let Mt=null;const nt=new Yt(0);let ut=0,q=i.width,lt=i.height,K=1,wt=null,_t=null;const mt=new Ue(0,0,q,lt),Ht=new Ue(0,0,q,lt);let Tt=!1;const $t=new r1;let Wt=!1,Nt=!1;const te=new be,Zt=new k,ce=new Ue,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function re(){return Z===null?K:1}let D=n;function Ct(E,B){return i.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fu}`),i.addEventListener("webglcontextlost",Ae,!1),i.addEventListener("webglcontextrestored",fe,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),D===null){const B="webgl2";if(D=Ct(B,E),D===null)throw Ct(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw ue("WebGLRenderer: "+E.message),E}let ee,R,x,z,G,j,ft,rt,Y,J,dt,At,tt,at,pt,vt,Dt,U,xt,et,gt,St,st;function Ft(){ee=new vM(D),ee.init(),gt=new hy(D,ee),R=new uM(D,ee,t,gt),x=new ly(D,ee),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),F=D.createFramebuffer(),H=D.createFramebuffer(),O=D.createFramebuffer(),z=new yM(D),G=new $S,j=new cy(D,ee,x,G,R,gt,z),ft=new xM(P),rt=new Tv(D),St=new cM(D,rt),Y=new MM(D,rt,z,St),J=new bM(D,Y,rt,St,z),U=new EM(D,R,j),pt=new dM(G),dt=new YS(P,ft,ee,R,St,pt),At=new gy(P,G),tt=new ZS,at=new iy(ee),Dt=new lM(P,ft,x,J,_,l),vt=new oy(P,J,R),st=new _y(D,z,R,x),xt=new hM(D,ee,z),et=new SM(D,ee,z),z.programs=dt.programs,P.capabilities=R,P.extensions=ee,P.properties=G,P.renderLists=tt,P.shadowMap=vt,P.state=x,P.info=z}Ft(),S!==qi&&(T=new TM(S,i.width,i.height,o,s,r));const Lt=new py(P,D);this.xr=Lt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(q,lt,!1))},this.getSize=function(E){return E.set(q,lt)},this.setSize=function(E,B,$=!0){if(Lt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,lt=B,i.width=Math.floor(E*K),i.height=Math.floor(B*K),$===!0&&(i.style.width=E+"px",i.style.height=B+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(q*K,lt*K).floor()},this.setDrawingBufferSize=function(E,B,$){q=E,lt=B,K=$,i.width=Math.floor(E*$),i.height=Math.floor(B*$),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(S===qi){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ot)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,B,$,W){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,B,$,W),x.viewport(ot.copy(mt).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Ht)},this.setScissor=function(E,B,$,W){E.isVector4?Ht.set(E.x,E.y,E.z,E.w):Ht.set(E,B,$,W),x.scissor(ht.copy(Ht).multiplyScalar(K).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(E){x.setScissorTest(Tt=E)},this.setOpaqueSort=function(E){wt=E},this.setTransparentSort=function(E){_t=E},this.getClearColor=function(E){return E.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,$=!0){let W=0;if(E){let X=!1;if(Z!==null){const bt=Z.texture.format;X=m.has(bt)}if(X){const bt=Z.texture.type,Pt=f.has(bt),Et=Dt.getClearColor(),Ut=Dt.getClearAlpha(),zt=Et.r,Qt=Et.g,se=Et.b;Pt?(v[0]=zt,v[1]=Qt,v[2]=se,v[3]=Ut,D.clearBufferuiv(D.COLOR,0,v)):(y[0]=zt,y[1]=Qt,y[2]=se,y[3]=Ut,D.clearBufferiv(D.COLOR,0,y))}else W|=D.COLOR_BUFFER_BIT}B&&(W|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){i.removeEventListener("webglcontextlost",Ae,!1),i.removeEventListener("webglcontextrestored",fe,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),Dt.dispose(),tt.dispose(),at.dispose(),G.dispose(),ft.dispose(),J.dispose(),St.dispose(),st.dispose(),dt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",cd),Lt.removeEventListener("sessionend",hd),cs.stop()};function Ae(E){E.preventDefault(),Uf("WebGLRenderer: Context Lost."),C=!0}function fe(){Uf("WebGLRenderer: Context Restored."),C=!1;const E=z.autoReset,B=vt.enabled,$=vt.autoUpdate,W=vt.needsUpdate,X=vt.type;Ft(),z.autoReset=E,vt.enabled=B,vt.autoUpdate=$,vt.needsUpdate=W,vt.type=X}function Oe(E){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ln(E){const B=E.target;B.removeEventListener("dispose",ln),S1(B)}function S1(E){y1(E),G.remove(E)}function y1(E){const B=G.get(E).programs;B!==void 0&&(B.forEach(function($){dt.releaseProgram($)}),E.isShaderMaterial&&dt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,$,W,X,bt){B===null&&(B=Kt);const Pt=X.isMesh&&X.matrixWorld.determinantAffine()<0,Et=A1(E,B,$,W,X);x.setMaterial(W,Pt);let Ut=$.index,zt=1;if(W.wireframe===!0){if(Ut=Y.getWireframeAttribute($),Ut===void 0)return;zt=2}const Qt=$.drawRange,se=$.attributes.position;let Vt=Qt.start*zt,xe=(Qt.start+Qt.count)*zt;bt!==null&&(Vt=Math.max(Vt,bt.start*zt),xe=Math.min(xe,(bt.start+bt.count)*zt)),Ut!==null?(Vt=Math.max(Vt,0),xe=Math.min(xe,Ut.count)):se!=null&&(Vt=Math.max(Vt,0),xe=Math.min(xe,se.count));const Be=xe-Vt;if(Be<0||Be===1/0)return;St.setup(X,W,Et,$,Ut);let De,Me=xt;if(Ut!==null&&(De=rt.get(Ut),Me=et,Me.setIndex(De)),X.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*re()),Me.setMode(D.LINES)):Me.setMode(D.TRIANGLES);else if(X.isLine){let ri=W.linewidth;ri===void 0&&(ri=1),x.setLineWidth(ri*re()),X.isLineSegments?Me.setMode(D.LINES):X.isLineLoop?Me.setMode(D.LINE_LOOP):Me.setMode(D.LINE_STRIP)}else X.isPoints?Me.setMode(D.POINTS):X.isSprite&&Me.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Me.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ri=X._multiDrawStarts,Rt=X._multiDrawCounts,Ai=X._multiDrawCount,he=Ut?rt.get(Ut).bytesPerElement:1,zi=G.get(W).currentProgram.getUniforms();for(let cn=0;cn<Ai;cn++)zi.setValue(D,"_gl_DrawID",cn),Me.render(ri[cn]/he,Rt[cn])}else if(X.isInstancedMesh)Me.renderInstances(Vt,Be,X.count);else if($.isInstancedBufferGeometry){const ri=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Rt=Math.min($.instanceCount,ri);Me.renderInstances(Vt,Be,Rt)}else Me.render(Vt,Be)};function ld(E,B,$){E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=Ei,E.needsUpdate=!0,Ba(E,B,$),E.side=os,E.needsUpdate=!0,Ba(E,B,$),E.side=Dn):Ba(E,B,$)}this.compile=function(E,B,$=null){$===null&&($=E),b=at.get($),b.init(B),g.push(b),$.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),E!==$&&E.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights();const W=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const bt=X.material;if(bt)if(Array.isArray(bt))for(let Pt=0;Pt<bt.length;Pt++){const Et=bt[Pt];ld(Et,$,X),W.add(Et)}else ld(bt,$,X),W.add(bt)}),b=g.pop(),W},this.compileAsync=function(E,B,$=null){const W=this.compile(E,B,$);return new Promise(X=>{function bt(){if(W.forEach(function(Pt){G.get(Pt).currentProgram.isReady()&&W.delete(Pt)}),W.size===0){X(E);return}setTimeout(bt,10)}ee.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let bl=null;function E1(E){bl&&bl(E)}function cd(){cs.stop()}function hd(){cs.start()}const cs=new d1;cs.setAnimationLoop(E1),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(E){bl=E,Lt.setAnimationLoop(E),E===null?cs.stop():cs.start()},Lt.addEventListener("sessionstart",cd),Lt.addEventListener("sessionend",hd),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(E,B);const $=Lt.enabled===!0&&Lt.isPresenting===!0,W=T!==null&&(Z===null||$)&&T.begin(P,Z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(B),B=Lt.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,B,Z),b=at.get(E,g.length),b.init(B),b.state.textureUnits=j.getTextureUnits(),g.push(b),te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$t.setFromProjectionMatrix(te,gn,B.reversedDepth),Nt=this.localClippingEnabled,Wt=pt.init(this.clippingPlanes,Nt),A=tt.get(E,w.length),A.init(),w.push(A),Lt.enabled===!0&&Lt.isPresenting===!0){const Pt=P.xr.getDepthSensingMesh();Pt!==null&&Al(Pt,B,-1/0,P.sortObjects)}Al(E,B,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(wt,_t,B.reversedDepth),ne=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,ne&&Dt.addToRenderList(A,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&pt.beginShadows();const X=b.state.shadowsArray;if(vt.render(X,E,B),Wt===!0&&pt.endShadows(),(W&&T.hasRenderPass())===!1){const Pt=A.opaque,Et=A.transmissive;if(b.setupLights(),B.isArrayCamera){const Ut=B.cameras;if(Et.length>0)for(let zt=0,Qt=Ut.length;zt<Qt;zt++){const se=Ut[zt];dd(Pt,Et,E,se)}ne&&Dt.render(E);for(let zt=0,Qt=Ut.length;zt<Qt;zt++){const se=Ut[zt];ud(A,E,se,se.viewport)}}else Et.length>0&&dd(Pt,Et,E,B),ne&&Dt.render(E),ud(A,E,B)}Z!==null&&N===0&&(j.updateMultisampleRenderTarget(Z),j.updateRenderTargetMipmap(Z)),W&&T.end(P),E.isScene===!0&&E.onAfterRender(P,E,B),St.resetDefaultState(),it=-1,ct=null,g.pop(),g.length>0?(b=g[g.length-1],j.setTextureUnits(b.state.textureUnits),Wt===!0&&pt.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,L!==null&&L.renderEnd()};function Al(E,B,$,W){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$t.intersectsSprite(E)){W&&ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(te);const Pt=J.update(E),Et=E.material;Et.visible&&A.push(E,Pt,Et,$,ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$t.intersectsObject(E))){const Pt=J.update(E),Et=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ce.copy(E.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ce.copy(Pt.boundingSphere.center)),ce.applyMatrix4(E.matrixWorld).applyMatrix4(te)),Array.isArray(Et)){const Ut=Pt.groups;for(let zt=0,Qt=Ut.length;zt<Qt;zt++){const se=Ut[zt],Vt=Et[se.materialIndex];Vt&&Vt.visible&&A.push(E,Pt,Vt,$,ce.z,se)}}else Et.visible&&A.push(E,Pt,Et,$,ce.z,null)}}const bt=E.children;for(let Pt=0,Et=bt.length;Pt<Et;Pt++)Al(bt[Pt],B,$,W)}function ud(E,B,$,W){const{opaque:X,transmissive:bt,transparent:Pt}=E;b.setupLightsView($),Wt===!0&&pt.setGlobalState(P.clippingPlanes,$),W&&x.viewport(ot.copy(W)),X.length>0&&Oa(X,B,$),bt.length>0&&Oa(bt,B,$),Pt.length>0&&Oa(Pt,B,$),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function dd(E,B,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const Vt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new ui(1,1,{generateMipmaps:!0,type:Vt?xi:qi,minFilter:Es,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const bt=b.state.transmissionRenderTarget[W.id],Pt=W.viewport||ot;bt.setSize(Pt.z*P.transmissionResolutionScale,Pt.w*P.transmissionResolutionScale);const Et=P.getRenderTarget(),Ut=P.getActiveCubeFace(),zt=P.getActiveMipmapLevel();P.setRenderTarget(bt),P.getClearColor(nt),ut=P.getClearAlpha(),ut<1&&P.setClearColor(16777215,.5),P.clear(),ne&&Dt.render($);const Qt=P.toneMapping;P.toneMapping=vn;const se=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Wt===!0&&pt.setGlobalState(P.clippingPlanes,W),Oa(E,$,W),j.updateMultisampleRenderTarget(bt),j.updateRenderTargetMipmap(bt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let xe=0,Be=B.length;xe<Be;xe++){const De=B[xe],{object:Me,geometry:ri,material:Rt,group:Ai}=De;if(Rt.side===Dn&&Me.layers.test(W.layers)){const he=Rt.side;Rt.side=Ei,Rt.needsUpdate=!0,fd(Me,$,W,ri,Rt,Ai),Rt.side=he,Rt.needsUpdate=!0,Vt=!0}}Vt===!0&&(j.updateMultisampleRenderTarget(bt),j.updateRenderTargetMipmap(bt))}P.setRenderTarget(Et,Ut,zt),P.setClearColor(nt,ut),se!==void 0&&(W.viewport=se),P.toneMapping=Qt}function Oa(E,B,$){const W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,bt=E.length;X<bt;X++){const Pt=E[X],{object:Et,geometry:Ut,group:zt}=Pt;let Qt=Pt.material;Qt.allowOverride===!0&&W!==null&&(Qt=W),Et.layers.test($.layers)&&fd(Et,B,$,Ut,Qt,zt)}}function fd(E,B,$,W,X,bt){E.onBeforeRender(P,B,$,W,X,bt),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(P,B,$,W,E,bt),X.transparent===!0&&X.side===Dn&&X.forceSinglePass===!1?(X.side=Ei,X.needsUpdate=!0,P.renderBufferDirect($,B,W,X,E,bt),X.side=os,X.needsUpdate=!0,P.renderBufferDirect($,B,W,X,E,bt),X.side=Dn):P.renderBufferDirect($,B,W,X,E,bt),E.onAfterRender(P,B,$,W,X,bt)}function Ba(E,B,$){B.isScene!==!0&&(B=Kt);const W=G.get(E),X=b.state.lights,bt=b.state.shadowsArray,Pt=X.state.version,Et=dt.getParameters(E,X.state,bt,B,$,b.state.lightProbeGridArray),Ut=dt.getProgramCacheKey(Et);let zt=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const Qt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=ft.get(E.envMap||W.environment,Qt),W.envMapRotation=W.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",ln),zt=new Map,W.programs=zt);let se=zt.get(Ut);if(se!==void 0){if(W.currentProgram===se&&W.lightsStateVersion===Pt)return md(E,Et),se}else Et.uniforms=dt.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,$,Et),E.onBeforeCompile(Et,P),se=dt.acquireProgram(Et,Ut),zt.set(Ut,se),W.uniforms=Et.uniforms;const Vt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Vt.clippingPlanes=pt.uniform),md(E,Et),W.needsLights=w1(E),W.lightsStateVersion=Pt,W.needsLights&&(Vt.ambientLightColor.value=X.state.ambient,Vt.lightProbe.value=X.state.probe,Vt.directionalLights.value=X.state.directional,Vt.directionalLightShadows.value=X.state.directionalShadow,Vt.spotLights.value=X.state.spot,Vt.spotLightShadows.value=X.state.spotShadow,Vt.rectAreaLights.value=X.state.rectArea,Vt.ltc_1.value=X.state.rectAreaLTC1,Vt.ltc_2.value=X.state.rectAreaLTC2,Vt.pointLights.value=X.state.point,Vt.pointLightShadows.value=X.state.pointShadow,Vt.hemisphereLights.value=X.state.hemi,Vt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Vt.spotLightMatrix.value=X.state.spotLightMatrix,Vt.spotLightMap.value=X.state.spotLightMap,Vt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=se,W.uniformsList=null,se}function pd(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Io.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function md(E,B){const $=G.get(E);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function b1(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let $=0,W=E.length;$<W;$++){const X=E[$];if(X.texture!==null&&X.boundingBox.containsPoint(M))return X}return null}function A1(E,B,$,W,X){B.isScene!==!0&&(B=Kt),j.resetTextureUnits();const bt=B.fog,Pt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,Et=Z===null?P.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ae.workingColorSpace,Ut=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,zt=ft.get(W.envMap||Pt,Ut),Qt=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,se=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Vt=!!$.morphAttributes.position,xe=!!$.morphAttributes.normal,Be=!!$.morphAttributes.color;let De=vn;W.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(De=P.toneMapping);const Me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ri=Me!==void 0?Me.length:0,Rt=G.get(W),Ai=b.state.lights;if(Wt===!0&&(Nt===!0||E!==ct)){const Ee=E===ct&&W.id===it;pt.setState(W,E,Ee)}let he=!1;W.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ai.state.version||Rt.outputColorSpace!==Et||X.isBatchedMesh&&Rt.batching===!1||!X.isBatchedMesh&&Rt.batching===!0||X.isBatchedMesh&&Rt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Rt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Rt.instancing===!1||!X.isInstancedMesh&&Rt.instancing===!0||X.isSkinnedMesh&&Rt.skinning===!1||!X.isSkinnedMesh&&Rt.skinning===!0||X.isInstancedMesh&&Rt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Rt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Rt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Rt.instancingMorph===!1&&X.morphTexture!==null||Rt.envMap!==zt||W.fog===!0&&Rt.fog!==bt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==pt.numPlanes||Rt.numIntersection!==pt.numIntersection)||Rt.vertexAlphas!==Qt||Rt.vertexTangents!==se||Rt.morphTargets!==Vt||Rt.morphNormals!==xe||Rt.morphColors!==Be||Rt.toneMapping!==De||Rt.morphTargetsCount!==ri||!!Rt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Rt.__version=W.version);let zi=Rt.currentProgram;he===!0&&(zi=Ba(W,B,X),L&&W.isNodeMaterial&&L.onUpdateProgram(W,zi,Rt));let cn=!1,Vn=!1,qs=!1;const Se=zi.getUniforms(),ze=Rt.uniforms;if(x.useProgram(zi.program)&&(cn=!0,Vn=!0,qs=!0),W.id!==it&&(it=W.id,Vn=!0),Rt.needsLights){const Ee=b1(b.state.lightProbeGridArray,X);Rt.lightProbeGrid!==Ee&&(Rt.lightProbeGrid=Ee,Vn=!0)}if(cn||ct!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Se.setValue(D,"projectionMatrix",E.projectionMatrix),Se.setValue(D,"viewMatrix",E.matrixWorldInverse);const Wn=Se.map.cameraPosition;Wn!==void 0&&Wn.setValue(D,Zt.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&Se.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Se.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),ct!==E&&(ct=E,Vn=!0,qs=!0)}if(Rt.needsLights&&(Ai.state.directionalShadowMap.length>0&&Se.setValue(D,"directionalShadowMap",Ai.state.directionalShadowMap,j),Ai.state.spotShadowMap.length>0&&Se.setValue(D,"spotShadowMap",Ai.state.spotShadowMap,j),Ai.state.pointShadowMap.length>0&&Se.setValue(D,"pointShadowMap",Ai.state.pointShadowMap,j)),X.isSkinnedMesh){Se.setOptional(D,X,"bindMatrix"),Se.setOptional(D,X,"bindMatrixInverse");const Ee=X.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),Se.setValue(D,"boneTexture",Ee.boneTexture,j))}X.isBatchedMesh&&(Se.setOptional(D,X,"batchingTexture"),Se.setValue(D,"batchingTexture",X._matricesTexture,j),Se.setOptional(D,X,"batchingIdTexture"),Se.setValue(D,"batchingIdTexture",X._indirectTexture,j),Se.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&Se.setValue(D,"batchingColorTexture",X._colorsTexture,j));const Gn=$.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&U.update(X,$,zi),(Vn||Rt.receiveShadow!==X.receiveShadow)&&(Rt.receiveShadow=X.receiveShadow,Se.setValue(D,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(ze.envMapIntensity.value=B.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=vy()),Vn){if(Se.setValue(D,"toneMappingExposure",P.toneMappingExposure),Rt.needsLights&&T1(ze,qs),bt&&W.fog===!0&&At.refreshFogUniforms(ze,bt),At.refreshMaterialUniforms(ze,W,K,lt,b.state.transmissionRenderTarget[E.id]),Rt.needsLights&&Rt.lightProbeGrid){const Ee=Rt.lightProbeGrid;ze.probesSH.value=Ee.texture,ze.probesMin.value.copy(Ee.boundingBox.min),ze.probesMax.value.copy(Ee.boundingBox.max),ze.probesResolution.value.copy(Ee.resolution)}Io.upload(D,pd(Rt),ze,j)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Io.upload(D,pd(Rt),ze,j),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Se.setValue(D,"center",X.center),Se.setValue(D,"modelViewMatrix",X.modelViewMatrix),Se.setValue(D,"normalMatrix",X.normalMatrix),Se.setValue(D,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const Ee=W.uniformsGroups;for(let Wn=0,Ys=Ee.length;Wn<Ys;Wn++){const gd=Ee[Wn];st.update(gd,zi),st.bind(gd,zi)}}return zi}function T1(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function w1(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(E,B,$){const W=G.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=B,G.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const $=G.get(E);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,$=0){Z=E,V=B,N=$;let W=null,X=!1,bt=!1;if(E){const Et=G.get(E);if(Et.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,Et.__webglFramebuffer),ot.copy(E.viewport),ht.copy(E.scissor),Mt=E.scissorTest,x.viewport(ot),x.scissor(ht),x.setScissorTest(Mt),it=-1;return}else if(Et.__webglFramebuffer===void 0)j.setupRenderTarget(E);else if(Et.__hasExternalTextures)j.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Qt=E.depthTexture;if(Et.__boundDepthTexture!==Qt){if(Qt!==null&&G.has(Qt)&&(E.width!==Qt.image.width||E.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(E)}}const Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(bt=!0);const zt=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[B])?W=zt[B][$]:W=zt[B],X=!0):E.samples>0&&j.useMultisampledRTT(E)===!1?W=G.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?W=zt[$]:W=zt,ot.copy(E.viewport),ht.copy(E.scissor),Mt=E.scissorTest}else ot.copy(mt).multiplyScalar(K).floor(),ht.copy(Ht).multiplyScalar(K).floor(),Mt=Tt;if($!==0&&(W=F),x.bindFramebuffer(D.FRAMEBUFFER,W)&&x.drawBuffers(E,W),x.viewport(ot),x.scissor(ht),x.setScissorTest(Mt),X){const Et=G.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,$)}else if(bt){const Et=B;for(let Ut=0;Ut<E.textures.length;Ut++){const zt=G.get(E.textures[Ut]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ut,zt.__webglTexture,$,Et)}}else if(E!==null&&$!==0){const Et=G.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,$)}it=-1},this.readRenderTargetPixels=function(E,B,$,W,X,bt,Pt,Et=0){if(!(E&&E.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut){x.bindFramebuffer(D.FRAMEBUFFER,Ut);try{const zt=E.textures[Et],Qt=zt.format,se=zt.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Et),!R.textureFormatReadable(Qt)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(se)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-W&&$>=0&&$<=E.height-X&&D.readPixels(B,$,W,X,gt.convert(Qt),gt.convert(se),bt)}finally{const zt=Z!==null?G.get(Z).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,B,$,W,X,bt,Pt,Et=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut)if(B>=0&&B<=E.width-W&&$>=0&&$<=E.height-X){x.bindFramebuffer(D.FRAMEBUFFER,Ut);const zt=E.textures[Et],Qt=zt.format,se=zt.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Et),!R.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.bufferData(D.PIXEL_PACK_BUFFER,bt.byteLength,D.STREAM_READ),D.readPixels(B,$,W,X,gt.convert(Qt),gt.convert(se),0);const xe=Z!==null?G.get(Z).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,xe);const Be=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bx(D,Be,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,bt),D.deleteBuffer(Vt),D.deleteSync(Be),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,$=0){const W=Math.pow(2,-$),X=Math.floor(E.image.width*W),bt=Math.floor(E.image.height*W),Pt=B!==null?B.x:0,Et=B!==null?B.y:0;j.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Pt,Et,X,bt),x.unbindTexture()},this.copyTextureToTexture=function(E,B,$=null,W=null,X=0,bt=0){let Pt,Et,Ut,zt,Qt,se,Vt,xe,Be;const De=E.isCompressedTexture?E.mipmaps[bt]:E.image;if($!==null)Pt=$.max.x-$.min.x,Et=$.max.y-$.min.y,Ut=$.isBox3?$.max.z-$.min.z:1,zt=$.min.x,Qt=$.min.y,se=$.isBox3?$.min.z:0;else{const ze=Math.pow(2,-X);Pt=Math.floor(De.width*ze),Et=Math.floor(De.height*ze),E.isDataArrayTexture?Ut=De.depth:E.isData3DTexture?Ut=Math.floor(De.depth*ze):Ut=1,zt=0,Qt=0,se=0}W!==null?(Vt=W.x,xe=W.y,Be=W.z):(Vt=0,xe=0,Be=0);const Me=gt.convert(B.format),ri=gt.convert(B.type);let Rt;B.isData3DTexture?(j.setTexture3D(B,0),Rt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(j.setTexture2DArray(B,0),Rt=D.TEXTURE_2D_ARRAY):(j.setTexture2D(B,0),Rt=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const Ai=x.getParameter(D.UNPACK_ROW_LENGTH),he=x.getParameter(D.UNPACK_IMAGE_HEIGHT),zi=x.getParameter(D.UNPACK_SKIP_PIXELS),cn=x.getParameter(D.UNPACK_SKIP_ROWS),Vn=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,De.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,De.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),x.pixelStorei(D.UNPACK_SKIP_ROWS,Qt),x.pixelStorei(D.UNPACK_SKIP_IMAGES,se);const qs=E.isDataArrayTexture||E.isData3DTexture,Se=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const ze=G.get(E),Gn=G.get(B),Ee=G.get(ze.__renderTarget),Wn=G.get(Gn.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,Ee.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Ys=0;Ys<Ut;Ys++)qs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(E).__webglTexture,X,se+Ys),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(B).__webglTexture,bt,Be+Ys)),D.blitFramebuffer(zt,Qt,Pt,Et,Vt,xe,Pt,Et,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||G.has(E)){const ze=G.get(E),Gn=G.get(B);x.bindFramebuffer(D.READ_FRAMEBUFFER,H),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let Ee=0;Ee<Ut;Ee++)qs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ze.__webglTexture,X,se+Ee):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ze.__webglTexture,X),Se?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Gn.__webglTexture,bt,Be+Ee):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Gn.__webglTexture,bt),X!==0?D.blitFramebuffer(zt,Qt,Pt,Et,Vt,xe,Pt,Et,D.COLOR_BUFFER_BIT,D.NEAREST):Se?D.copyTexSubImage3D(Rt,bt,Vt,xe,Be+Ee,zt,Qt,Pt,Et):D.copyTexSubImage2D(Rt,bt,Vt,xe,zt,Qt,Pt,Et);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Se?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Rt,bt,Vt,xe,Be,Pt,Et,Ut,Me,ri,De.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,bt,Vt,xe,Be,Pt,Et,Ut,Me,De.data):D.texSubImage3D(Rt,bt,Vt,xe,Be,Pt,Et,Ut,Me,ri,De):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,bt,Vt,xe,Pt,Et,Me,ri,De.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,bt,Vt,xe,De.width,De.height,Me,De.data):D.texSubImage2D(D.TEXTURE_2D,bt,Vt,xe,Pt,Et,Me,ri,De);x.pixelStorei(D.UNPACK_ROW_LENGTH,Ai),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),x.pixelStorei(D.UNPACK_SKIP_PIXELS,zi),x.pixelStorei(D.UNPACK_SKIP_ROWS,cn),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Vn),bt===0&&B.generateMipmaps&&D.generateMipmap(Rt),x.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&j.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?j.setTextureCube(E,0):E.isData3DTexture?j.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?j.setTexture2DArray(E,0):j.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){V=0,N=0,Z=null,x.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=ae._getUnpackColorSpace()}}const Ps={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Xs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Sy=new ed(-1,1,1,-1,0,1);class yy extends pi{constructor(){super(),this.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ni([0,2,0,0,2,0],2))}}const Ey=new yy;class wa{constructor(t){this._mesh=new Ni(Ey,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Sy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class by extends Xs{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof $e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bs.clone(t.uniforms),this.material=new $e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new wa(this.material)}render(t,i,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Fp extends Xs{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Ay extends Xs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ty{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const n=t.getSize(new jt);this._width=n.width,this._height=n.height,i=new ui(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new by(Ps),this.copyPass.material.blending=sn,this.timer=new yv}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const i=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Fp!==void 0&&(a instanceof Fp?n=!0:a instanceof Ay&&(n=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new jt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wy extends Xs{constructor(t,i,n=null,s=null,r=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Yt}render(t,i,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Mc={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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

		}`};class Ry extends Xs{constructor(t=.96){super(),this.uniforms=Bs.clone(Mc.uniforms),this.damp=t,this.compFsMaterial=new $e({uniforms:this.uniforms,vertexShader:Mc.vertexShader,fragmentShader:Mc.fragmentShader}),this.copyFsMaterial=new $e({uniforms:Bs.clone(Ps.uniforms),vertexShader:Ps.vertexShader,fragmentShader:Ps.fragmentShader,blending:sn,depthTest:!1,depthWrite:!1}),this._textureComp=new ui(window.innerWidth,window.innerHeight,{magFilter:qe,type:xi}),this._textureOld=new ui(window.innerWidth,window.innerHeight,{magFilter:qe,type:xi}),this._compFsQuad=new wa(this.compFsMaterial),this._copyFsQuad=new wa(this.copyFsMaterial)}get damp(){return this.uniforms.damp.value}set damp(t){this.uniforms.damp.value=t}render(t,i,n){this.uniforms.tOld.value=this._textureOld.texture,this.uniforms.tNew.value=n.texture,t.setRenderTarget(this._textureComp),this._compFsQuad.render(t),this._copyFsQuad.material.uniforms.tDiffuse.value=this._textureComp.texture,this.renderToScreen?(t.setRenderTarget(null),this._copyFsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(),this._copyFsQuad.render(t));const s=this._textureOld;this._textureOld=this._textureComp,this._textureComp=s}setSize(t,i){this._textureComp.setSize(t,i),this._textureOld.setSize(t,i)}dispose(){this._textureComp.dispose(),this._textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this._compFsQuad.dispose(),this._copyFsQuad.dispose()}}const Cy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ur extends Xs{constructor(t,i=1,n,s){super(),this.strength=i,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new jt(t.x,t.y):new jt(256,256),this.clearColor=new Yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ui(r,a,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new ui(r,a,{type:xi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new ui(r,a,{type:xi});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=Cy;this.highPassUniforms=Bs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $e({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new jt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Bs.clone(Ps.uniforms),this.blendMaterial=new $e({uniforms:this.copyUniforms,vertexShader:Ps.vertexShader,fragmentShader:Ps.fragmentShader,premultipliedAlpha:!0,blending:Fs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Yt,this._oldClearAlpha=1,this._basic=new Ir,this._fsQuad=new wa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let n=Math.round(t/2),s=Math.round(i/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new jt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,i,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ur.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ur.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const i=[],n=t/3;for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new $e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new jt(.5,.5)},direction:{value:new jt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

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

				}`})}}Ur.BlurDirectionX=new jt(1,0);Ur.BlurDirectionY=new jt(0,1);const So={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Py extends Xs{constructor(){super(),this.isOutputPass=!0,this.uniforms=Bs.clone(So.uniforms),this.material=new h1({name:So.name,uniforms:this.uniforms,vertexShader:So.vertexShader,fragmentShader:So.fragmentShader}),this._fsQuad=new wa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ku?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===zu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ly=.98,Iy=3;class Dy{constructor(t){I(this,"scene");I(this,"camera");I(this,"renderer");I(this,"composer");I(this,"afterimagePass");I(this,"bloomPass");I(this,"handleResize",()=>{const t=window.innerWidth,i=window.innerHeight;this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i);const n=this.renderer.getDrawingBufferSize(new jt);this.composer.setSize(n.x,n.y),this.bloomPass.resolution.set(Math.max(1,Math.floor(n.x/2)),Math.max(1,Math.floor(n.y/2)))});this.scene=new tv,this.scene.background=new Yt(657935),this.scene.fog=new ju(657935,3,8),this.camera=new Xi(50,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,.2,2.8),this.camera.lookAt(0,0,0),this.renderer=new My({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight);const i=this.renderer.domElement;i.classList.add("three-canvas"),i.style.position="fixed",i.style.inset="0",i.style.zIndex="0",t.appendChild(i),this.addFloor();const n=this.renderer.getDrawingBufferSize(new jt);this.composer=new Ty(this.renderer),this.composer.setSize(n.x,n.y);const s=new wy(this.scene,this.camera);this.composer.addPass(s),this.afterimagePass=new Ry(.9),this.composer.addPass(this.afterimagePass),this.bloomPass=new Ur(new jt(Math.max(1,Math.floor(n.x/2)),Math.max(1,Math.floor(n.y/2))),.9,.7,.12),this.composer.addPass(this.bloomPass);const r=new Py;this.composer.addPass(r),this.setTrailDamp(.9),this.setBloomStrength(.9),window.addEventListener("resize",this.handleResize)}setTrailDamp(t){if(t<=0){this.afterimagePass.enabled=!1;return}const i=Math.min(t,Ly);this.afterimagePass.enabled=!0,this.afterimagePass.uniforms.damp.value=i}setBloomStrength(t){if(t<=0){this.bloomPass.enabled=!1;return}this.bloomPass.enabled=!0,this.bloomPass.strength=Math.min(t,Iy)}addFloor(){const t=new bv(8,24,1192512,858918);t.position.y=-1,this.scene.add(t)}render(){this.composer.render()}}class Fy extends Ni{constructor(t,i,n=!1,s=!1,r=1e4){const a=new pi;super(a,i),this.isMarchingCubes=!0;const o=this,l=new Float32Array(36),c=new Float32Array(36),h=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(v){this.resolution=v,this.isolation=80,this.size=v,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const y=r*3;this.positionArray=new Float32Array(y*3);const M=new Ye(this.positionArray,3);M.setUsage(is),a.setAttribute("position",M),this.normalArray=new Float32Array(y*3);const A=new Ye(this.normalArray,3);if(A.setUsage(is),a.setAttribute("normal",A),this.enableUvs){this.uvArray=new Float32Array(y*2);const b=new Ye(this.uvArray,2);b.setUsage(is),a.setAttribute("uv",b)}if(this.enableColors){this.colorArray=new Float32Array(y*3);const b=new Ye(this.colorArray,3);b.setUsage(is),a.setAttribute("color",b)}a.boundingSphere=new Hn(new k,1)};function d(v,y,M){return v+(y-v)*M}function u(v,y,M,A,b,w,g,T,P,C){const L=(M-g)/(T-g),F=o.normal_cache;l[y+0]=A+L*o.delta,l[y+1]=b,l[y+2]=w,c[y+0]=d(F[v+0],F[v+3],L),c[y+1]=d(F[v+1],F[v+4],L),c[y+2]=d(F[v+2],F[v+5],L),h[y+0]=d(o.palette[P*3+0],o.palette[C*3+0],L),h[y+1]=d(o.palette[P*3+1],o.palette[C*3+1],L),h[y+2]=d(o.palette[P*3+2],o.palette[C*3+2],L)}function p(v,y,M,A,b,w,g,T,P,C){const L=(M-g)/(T-g),F=o.normal_cache;l[y+0]=A,l[y+1]=b+L*o.delta,l[y+2]=w;const H=v+o.yd*3;c[y+0]=d(F[v+0],F[H+0],L),c[y+1]=d(F[v+1],F[H+1],L),c[y+2]=d(F[v+2],F[H+2],L),h[y+0]=d(o.palette[P*3+0],o.palette[C*3+0],L),h[y+1]=d(o.palette[P*3+1],o.palette[C*3+1],L),h[y+2]=d(o.palette[P*3+2],o.palette[C*3+2],L)}function _(v,y,M,A,b,w,g,T,P,C){const L=(M-g)/(T-g),F=o.normal_cache;l[y+0]=A,l[y+1]=b,l[y+2]=w+L*o.delta;const H=v+o.zd*3;c[y+0]=d(F[v+0],F[H+0],L),c[y+1]=d(F[v+1],F[H+1],L),c[y+2]=d(F[v+2],F[H+2],L),h[y+0]=d(o.palette[P*3+0],o.palette[C*3+0],L),h[y+1]=d(o.palette[P*3+1],o.palette[C*3+1],L),h[y+2]=d(o.palette[P*3+2],o.palette[C*3+2],L)}function S(v){const y=v*3;o.normal_cache[y]===0&&(o.normal_cache[y+0]=o.field[v-1]-o.field[v+1],o.normal_cache[y+1]=o.field[v-o.yd]-o.field[v+o.yd],o.normal_cache[y+2]=o.field[v-o.zd]-o.field[v+o.zd])}function m(v,y,M,A,b){const w=A+1,g=A+o.yd,T=A+o.zd,P=w+o.yd,C=w+o.zd,L=A+o.yd+o.zd,F=w+o.yd+o.zd;let H=0;const O=o.field[A],V=o.field[w],N=o.field[g],Z=o.field[P],it=o.field[T],ct=o.field[C],ot=o.field[L],ht=o.field[F];O<b&&(H|=1),V<b&&(H|=2),N<b&&(H|=8),Z<b&&(H|=4),it<b&&(H|=16),ct<b&&(H|=32),ot<b&&(H|=128),ht<b&&(H|=64);const Mt=Uy[H];if(Mt===0)return 0;const nt=o.delta,ut=v+nt,q=y+nt,lt=M+nt;Mt&1&&(S(A),S(w),u(A*3,0,b,v,y,M,O,V,A,w)),Mt&2&&(S(w),S(P),p(w*3,3,b,ut,y,M,V,Z,w,P)),Mt&4&&(S(g),S(P),u(g*3,6,b,v,q,M,N,Z,g,P)),Mt&8&&(S(A),S(g),p(A*3,9,b,v,y,M,O,N,A,g)),Mt&16&&(S(T),S(C),u(T*3,12,b,v,y,lt,it,ct,T,C)),Mt&32&&(S(C),S(F),p(C*3,15,b,ut,y,lt,ct,ht,C,F)),Mt&64&&(S(L),S(F),u(L*3,18,b,v,q,lt,ot,ht,L,F)),Mt&128&&(S(T),S(L),p(T*3,21,b,v,y,lt,it,ot,T,L)),Mt&256&&(S(A),S(T),_(A*3,24,b,v,y,M,O,it,A,T)),Mt&512&&(S(w),S(C),_(w*3,27,b,ut,y,M,V,ct,w,C)),Mt&1024&&(S(P),S(F),_(P*3,30,b,ut,q,M,Z,ht,P,F)),Mt&2048&&(S(g),S(L),_(g*3,33,b,v,q,M,N,ot,g,L)),H<<=4;let K,wt,_t,mt=0,Ht=0;for(;yo[H+Ht]!=-1;)K=H+Ht,wt=K+1,_t=K+2,f(l,c,h,3*yo[K],3*yo[wt],3*yo[_t]),Ht+=3,mt++;return mt}function f(v,y,M,A,b,w){const g=o.count*3;if(o.positionArray[g+0]=v[A],o.positionArray[g+1]=v[A+1],o.positionArray[g+2]=v[A+2],o.positionArray[g+3]=v[b],o.positionArray[g+4]=v[b+1],o.positionArray[g+5]=v[b+2],o.positionArray[g+6]=v[w],o.positionArray[g+7]=v[w+1],o.positionArray[g+8]=v[w+2],o.material.flatShading===!0){const T=(y[A+0]+y[b+0]+y[w+0])/3,P=(y[A+1]+y[b+1]+y[w+1])/3,C=(y[A+2]+y[b+2]+y[w+2])/3;o.normalArray[g+0]=T,o.normalArray[g+1]=P,o.normalArray[g+2]=C,o.normalArray[g+3]=T,o.normalArray[g+4]=P,o.normalArray[g+5]=C,o.normalArray[g+6]=T,o.normalArray[g+7]=P,o.normalArray[g+8]=C}else o.normalArray[g+0]=y[A+0],o.normalArray[g+1]=y[A+1],o.normalArray[g+2]=y[A+2],o.normalArray[g+3]=y[b+0],o.normalArray[g+4]=y[b+1],o.normalArray[g+5]=y[b+2],o.normalArray[g+6]=y[w+0],o.normalArray[g+7]=y[w+1],o.normalArray[g+8]=y[w+2];if(o.enableUvs){const T=o.count*2;o.uvArray[T+0]=v[A+0],o.uvArray[T+1]=v[A+2],o.uvArray[T+2]=v[b+0],o.uvArray[T+3]=v[b+2],o.uvArray[T+4]=v[w+0],o.uvArray[T+5]=v[w+2]}o.enableColors&&(o.colorArray[g+0]=M[A+0],o.colorArray[g+1]=M[A+1],o.colorArray[g+2]=M[A+2],o.colorArray[g+3]=M[b+0],o.colorArray[g+4]=M[b+1],o.colorArray[g+5]=M[b+2],o.colorArray[g+6]=M[w+0],o.colorArray[g+7]=M[w+1],o.colorArray[g+8]=M[w+2]),o.count+=3}this.addBall=function(v,y,M,A,b,w){const g=Math.sign(A);A=Math.abs(A);const T=w!=null;let P=new Yt(v,y,M);if(T)try{P=w instanceof Yt?w:Array.isArray(w)?new Yt(Math.min(Math.abs(w[0]),1),Math.min(Math.abs(w[1]),1),Math.min(Math.abs(w[2]),1)):new Yt(w)}catch{P=new Yt(v,y,M)}const C=this.size*Math.sqrt(A/b),L=M*this.size,F=y*this.size,H=v*this.size;let O=Math.floor(L-C);O<1&&(O=1);let V=Math.floor(L+C);V>this.size-1&&(V=this.size-1);let N=Math.floor(F-C);N<1&&(N=1);let Z=Math.floor(F+C);Z>this.size-1&&(Z=this.size-1);let it=Math.floor(H-C);it<1&&(it=1);let ct=Math.floor(H+C);ct>this.size-1&&(ct=this.size-1);let ot,ht,Mt,nt,ut,q,lt,K,wt,_t,mt;for(Mt=O;Mt<V;Mt++)for(ut=this.size2*Mt,K=Mt/this.size-M,wt=K*K,ht=N;ht<Z;ht++)for(nt=ut+this.size*ht,lt=ht/this.size-y,_t=lt*lt,ot=it;ot<ct;ot++)if(q=ot/this.size-v,mt=A/(1e-6+q*q+_t+wt)-b,mt>0){this.field[nt+ot]+=mt*g;const Ht=Math.sqrt((ot-H)*(ot-H)+(ht-F)*(ht-F)+(Mt-L)*(Mt-L))/C,Tt=1-Ht*Ht*Ht*(Ht*(Ht*6-15)+10);this.palette[(nt+ot)*3+0]+=P.r*Tt,this.palette[(nt+ot)*3+1]+=P.g*Tt,this.palette[(nt+ot)*3+2]+=P.b*Tt}},this.addPlaneX=function(v,y){const M=this.size,A=this.yd,b=this.zd,w=this.field;let g,T,P,C,L,F,H,O=M*Math.sqrt(v/y);for(O>M&&(O=M),g=0;g<O;g++)if(F=g/M,C=F*F,L=v/(1e-4+C)-y,L>0)for(T=0;T<M;T++)for(H=g+T*A,P=0;P<M;P++)w[b*P+H]+=L},this.addPlaneY=function(v,y){const M=this.size,A=this.yd,b=this.zd,w=this.field;let g,T,P,C,L,F,H,O,V=M*Math.sqrt(v/y);for(V>M&&(V=M),T=0;T<V;T++)if(F=T/M,C=F*F,L=v/(1e-4+C)-y,L>0)for(H=T*A,g=0;g<M;g++)for(O=H+g,P=0;P<M;P++)w[b*P+O]+=L},this.addPlaneZ=function(v,y){const M=this.size,A=this.yd,b=this.zd,w=this.field;let g,T,P,C,L,F,H,O,V=M*Math.sqrt(v/y);for(V>M&&(V=M),P=0;P<V;P++)if(F=P/M,C=F*F,L=v/(1e-4+C)-y,L>0)for(H=b*P,T=0;T<M;T++)for(O=H+T*A,g=0;g<M;g++)w[O+g]+=L},this.setCell=function(v,y,M,A){const b=this.size2*M+this.size*y+v;this.field[b]=A},this.getCell=function(v,y,M){const A=this.size2*M+this.size*y+v;return this.field[A]},this.blur=function(v=1){const y=this.field,M=y.slice(),A=this.size,b=this.size2;for(let w=0;w<A;w++)for(let g=0;g<A;g++)for(let T=0;T<A;T++){const P=b*T+A*g+w;let C=M[P],L=1;for(let F=-1;F<=1;F+=2){const H=F+w;if(!(H<0||H>=A))for(let O=-1;O<=1;O+=2){const V=O+g;if(!(V<0||V>=A))for(let N=-1;N<=1;N+=2){const Z=N+T;if(Z<0||Z>=A)continue;const it=b*Z+A*V+H,ct=M[it];L++,C+=v*(ct-C)/L}}}y[P]=C}},this.reset=function(){for(let v=0;v<this.size3;v++)this.normal_cache[v*3]=0,this.field[v]=0,this.palette[v*3]=this.palette[v*3+1]=this.palette[v*3+2]=0},this.update=function(){this.count=0;const v=this.size-2;for(let y=1;y<v;y++){const M=this.size2*y,A=(y-this.halfsize)/this.halfsize;for(let b=1;b<v;b++){const w=M+this.size*b,g=(b-this.halfsize)/this.halfsize;for(let T=1;T<v;T++){const P=(T-this.halfsize)/this.halfsize,C=w+T;m(P,g,A,C,this.isolation)}}}this.geometry.setDrawRange(0,this.count),a.getAttribute("position").needsUpdate=!0,a.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(a.getAttribute("uv").needsUpdate=!0),this.enableColors&&(a.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}}const Uy=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),yo=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),Eo=.05,Ny=.15,Sc=.11,Oy=.11*1.25,Up=.05,la=.07,By=.35,bo=0,yc=1,gs=2;class zy{constructor(){I(this,"minX",-1);I(this,"minY",-1);I(this,"minZ",-1);I(this,"maxX",1);I(this,"maxY",1);I(this,"maxZ",1);I(this,"kindArr");I(this,"jA");I(this,"jB");I(this,"jC");I(this,"jD");I(this,"rStart");I(this,"rEnd");I(this,"ellipse");I(this,"staticCount");I(this,"activeCount",0);I(this,"ax");I(this,"ay");I(this,"az");I(this,"dx");I(this,"dy");I(this,"dz");I(this,"len");I(this,"ux");I(this,"uy");I(this,"uz");I(this,"vx");I(this,"vy");I(this,"vz");I(this,"invE2m1");I(this,"prA");I(this,"prB");I(this,"bbMinX");I(this,"bbMinY");I(this,"bbMinZ");I(this,"bbMaxX");I(this,"bbMaxY");I(this,"bbMaxZ");const t=(_,S)=>Math.min(_,S)<<8|Math.max(_,S),i=[],n=[],s=[],r=[],a=[],o=[],l=[],c=[],h=(_,S,m,f,v,y,M,A)=>{i.push(_),n.push(S),s.push(m),r.push(f),a.push(v),o.push(y),l.push(M),c.push(A)},d=new Map([[t(Q.LEFT_SHOULDER,Q.LEFT_ELBOW),[.05,.04,.75]],[t(Q.RIGHT_SHOULDER,Q.RIGHT_ELBOW),[.05,.04,.75]],[t(Q.LEFT_ELBOW,Q.LEFT_WRIST),[.04,.028,.75]],[t(Q.RIGHT_ELBOW,Q.RIGHT_WRIST),[.04,.028,.75]],[t(Q.LEFT_HIP,Q.LEFT_KNEE),[.08,.055,.75]],[t(Q.RIGHT_HIP,Q.RIGHT_KNEE),[.08,.055,.75]],[t(Q.LEFT_KNEE,Q.LEFT_ANKLE),[.055,.035,.75]],[t(Q.RIGHT_KNEE,Q.RIGHT_ANKLE),[.055,.035,.75]]]),u=new Set([t(Q.LEFT_SHOULDER,Q.RIGHT_SHOULDER),t(Q.LEFT_SHOULDER,Q.LEFT_HIP),t(Q.RIGHT_SHOULDER,Q.RIGHT_HIP),t(Q.LEFT_HIP,Q.RIGHT_HIP)]);h(yc,Q.LEFT_SHOULDER,Q.RIGHT_SHOULDER,Q.LEFT_HIP,Q.RIGHT_HIP,la,la,1),h(gs,Q.LEFT_EAR,Q.RIGHT_EAR,-1,-1,Sc,Sc,1),h(bo,Q.LEFT_SHOULDER,Q.LEFT_EAR,Q.RIGHT_SHOULDER,Q.RIGHT_EAR,Up,Up,1);for(const[_,S]of Du){if(_<=10&&S<=10)continue;const m=t(_,S);if(u.has(m))continue;const f=d.get(m);f?h(bo,_,S,-1,-1,f[0],f[1],f[2]):h(bo,_,S,-1,-1,.018,.018,1)}h(gs,Q.LEFT_SHOULDER,-1,-1,-1,.05,.05,1),h(gs,Q.RIGHT_SHOULDER,-1,-1,-1,.05,.05,1),h(gs,Q.LEFT_HIP,-1,-1,-1,.06,.06,1),h(gs,Q.RIGHT_HIP,-1,-1,-1,.06,.06,1);const p=i.length;this.staticCount=p,this.kindArr=Uint8Array.from(i),this.jA=Int16Array.from(n),this.jB=Int16Array.from(s),this.jC=Int16Array.from(r),this.jD=Int16Array.from(a),this.rStart=Float32Array.from(o),this.rEnd=Float32Array.from(l),this.ellipse=Float32Array.from(c),this.ax=new Float32Array(p),this.ay=new Float32Array(p),this.az=new Float32Array(p),this.dx=new Float32Array(p),this.dy=new Float32Array(p),this.dz=new Float32Array(p),this.len=new Float32Array(p),this.ux=new Float32Array(p),this.uy=new Float32Array(p),this.uz=new Float32Array(p),this.vx=new Float32Array(p),this.vy=new Float32Array(p),this.vz=new Float32Array(p),this.invE2m1=new Float32Array(p),this.prA=new Float32Array(p),this.prB=new Float32Array(p),this.bbMinX=new Float32Array(p),this.bbMinY=new Float32Array(p),this.bbMinZ=new Float32Array(p),this.bbMaxX=new Float32Array(p),this.bbMaxY=new Float32Array(p),this.bbMaxZ=new Float32Array(p)}update(t){if(!t.tracking)return!1;const i=t.joints;let n=0,s=1/0,r=1/0,a=1/0,o=-1/0,l=-1/0,c=-1/0;for(let d=0;d<this.staticCount;d++){const u=this.kindArr[d],p=i[this.jA[d]],_=this.jB[d],S=this.jC[d];let m,f,v,y=0,M=0,A=0,b;if(u===yc){const _t=p,mt=i[_],Ht=i[S],Tt=i[this.jD[d]];b=Math.min(_t.visibility,mt.visibility,Ht.visibility,Tt.visibility),m=(_t.x+mt.x)*.5,f=(_t.y+mt.y)*.5,v=(_t.z+mt.z)*.5,y=(Ht.x+Tt.x)*.5,M=(Ht.y+Tt.y)*.5,A=(Ht.z+Tt.z)*.5}else if(u===gs)if(_>=0){const _t=i[_];b=Math.min(p.visibility,_t.visibility),m=(p.x+_t.x)*.5,f=(p.y+_t.y)*.5,v=(p.z+_t.z)*.5}else b=p.visibility,m=p.x,f=p.y,v=p.z;else{const _t=i[_];if(S>=0){const mt=i[S],Ht=i[this.jD[d]];b=Math.min(p.visibility,_t.visibility,mt.visibility,Ht.visibility),m=(p.x+mt.x)*.5,f=(p.y+mt.y)*.5,v=(p.z+mt.z)*.5,y=(_t.x+Ht.x)*.5,M=(_t.y+Ht.y)*.5,A=(_t.z+Ht.z)*.5}else b=Math.min(p.visibility,_t.visibility),m=p.x,f=p.y,v=p.z,y=_t.x,M=_t.y,A=_t.z}if(u===bo&&S<0&&b<By)continue;let w,g,T,P,C,L,F,H,O,V,N,Z,it;if(u===gs){const mt=_>=0?Oy-Sc:0;f-=mt,w=0,g=1,T=0,P=2*mt,C=1,L=0,F=0,H=0,O=0,V=1,N=0,Z=this.rStart[d],it=this.rStart[d]}else{let _t=y-m,mt=M-f,Ht=A-v;if(P=Math.sqrt(_t*_t+mt*mt+Ht*Ht),P>1e-6){const Kt=1/P;w=_t*Kt,g=mt*Kt,T=Ht*Kt}else w=0,g=1,T=0;let Tt,$t,Wt;Math.abs(g)>.9?(Tt=1,$t=0,Wt=0):(Tt=0,$t=1,Wt=0);let Nt=g*Wt-T*$t,te=T*Tt-w*Wt,Zt=w*$t-g*Tt;const ce=Math.sqrt(Nt*Nt+te*te+Zt*Zt);if(ce>1e-6){const Kt=1/ce;C=Nt*Kt,L=te*Kt,F=Zt*Kt}else C=1,L=0,F=0;if(H=g*F-T*L,O=T*C-w*F,V=w*L-g*C,u===yc){const Kt=i[this.jA[d]],ne=i[this.jB[d]];let re=ne.x-Kt.x,D=ne.y-Kt.y,Ct=ne.z-Kt.z;const ee=Math.sqrt(re*re+D*D+Ct*Ct);if(ee>1e-6){const z=1/ee;re*=z,D*=z,Ct*=z}C=re,L=D,F=Ct,H=g*F-T*L,O=T*C-w*F,V=w*L-g*C;const R=Math.max(.5*ee*1.05,.06),x=la/R;N=x*x-1,Z=la,it=la}else{const Kt=1/this.ellipse[d];N=Kt*Kt-1,Z=this.rStart[d],it=this.rEnd[d]}}this.ax[n]=m,this.ay[n]=f,this.az[n]=v,this.dx[n]=w,this.dy[n]=g,this.dz[n]=T,this.len[n]=P,this.ux[n]=C,this.uy[n]=L,this.uz[n]=F,this.vx[n]=H,this.vy[n]=O,this.vz[n]=V,this.invE2m1[n]=N,this.prA[n]=Z,this.prB[n]=it;const ct=m+w*P,ot=f+g*P,ht=v+T*P,Mt=Math.max(Z,it);let nt=Math.min(m,ct)-Mt,ut=Math.min(f,ot)-Mt,q=Math.min(v,ht)-Mt,lt=Math.max(m,ct)+Mt,K=Math.max(f,ot)+Mt,wt=Math.max(v,ht)+Mt;this.bbMinX[n]=nt,this.bbMinY[n]=ut,this.bbMinZ[n]=q,this.bbMaxX[n]=lt,this.bbMaxY[n]=K,this.bbMaxZ[n]=wt,nt<s&&(s=nt),ut<r&&(r=ut),q<a&&(a=q),lt>o&&(o=lt),K>l&&(l=K),wt>c&&(c=wt),n++}if(this.activeCount=n,n===0||!isFinite(s))return!1;const h=Ny+Eo;return this.minX=s-h,this.minY=r-h,this.minZ=a-h,this.maxX=o+h,this.maxY=l+h,this.maxZ=c+h,!(this.maxX-this.minX<.001)}fillField(t,i){const n=i*i,s=n*i,r=this.maxX-this.minX,a=this.maxY-this.minY,o=this.maxZ-this.minZ,l=Math.sqrt(r*r+a*a+o*o)+1;t.fill(l,0,s);const c=this.activeCount;if(c===0)return;const h=i>1?i-1:1,d=r/h,u=a/h,p=o/h,_=d>1e-12?1/d:0,S=u>1e-12?1/u:0,m=p>1e-12?1/p:0,f=this.minX,v=this.minY,y=this.minZ,M=Eo;for(let A=0;A<c;A++){let b=Math.floor((this.bbMinX[A]-M-f)*_),w=Math.floor((this.bbMinY[A]-M-v)*S),g=Math.floor((this.bbMinZ[A]-M-y)*m),T=Math.ceil((this.bbMaxX[A]+M-f)*_),P=Math.ceil((this.bbMaxY[A]+M-v)*S),C=Math.ceil((this.bbMaxZ[A]+M-y)*m);if(b<0&&(b=0),w<0&&(w=0),g<0&&(g=0),T>=i&&(T=i-1),P>=i&&(P=i-1),C>=i&&(C=i-1),b>T||w>P||g>C)continue;const L=this.ax[A],F=this.ay[A],H=this.az[A],O=this.dx[A],V=this.dy[A],N=this.dz[A],Z=this.len[A],it=this.ux[A],ct=this.uy[A],ot=this.uz[A],ht=this.invE2m1[A],Mt=this.prA[A],nt=Z>1e-6?(this.prB[A]-Mt)/Z:0;for(let ut=g;ut<=C;ut++){const q=y+ut*p,lt=n*ut;for(let K=w;K<=P;K++){const wt=v+K*u,_t=lt+i*K;for(let mt=b;mt<=T;mt++){const Tt=f+mt*d-L,$t=wt-F,Wt=q-H;let Nt=Tt*O+$t*V+Wt*N;Nt<0?Nt=0:Nt>Z&&(Nt=Z);const te=Tt-O*Nt,Zt=$t-V*Nt,ce=Wt-N*Nt;let Kt=te*te+Zt*Zt+ce*ce;if(ht!==0){const ee=te*it+Zt*ct+ce*ot;Kt+=ee*ee*ht}const ne=Math.sqrt(Kt)-(Mt+nt*Nt),re=_t+mt,D=t[re];let Ct=.5+.5*(ne-D)/Eo;Ct<0?Ct=0:Ct>1&&(Ct=1),t[re]=ne+(D-ne)*Ct-Eo*Ct*(1-Ct)}}}}}}const ky=48,Hy=250,Vy=.85,Gy=65e3;class Wy{constructor(t){I(this,"field");I(this,"mc");I(this,"material");I(this,"fade",0);I(this,"transitionFade",1);I(this,"pulse",0);this.field=new zy,this.material=new Ir({color:3531007,wireframe:!0,transparent:!0,depthWrite:!1,blending:Fs}),this.mc=new Fy(ky,this.material,!1,!1,Gy),this.mc.isolation=0,this.mc.visible=!1,this.mc.frustumCulled=!1,t.add(this.mc)}enter(){this.mc.visible=!0}exit(){this.mc.visible=!1}setTransitionFade(t){this.transitionFade=t}trigger(t,i){this.pulse=Math.max(this.pulse,t==="burst"?1:.6)}update(t){const{skeleton:i,dtMs:n}=t;this.updateFade(i.tracking,n),this.pulse*=Math.exp(-n/300);const s=this.fade*this.transitionFade,r=1+this.pulse;this.material.opacity=Math.min(1,Vy*s*r),!(s<.001)&&this.regenerate(i)}updateFade(t,i){const n=t?1:0,s=1-Math.exp(-i/Hy);this.fade+=(n-this.fade)*s,Math.abs(this.fade-n)<1e-4&&(this.fade=n)}regenerate(t){if(!this.field.update(t))return;this.field.fillField(this.mc.field,this.mc.size),this.mc.update();const n=(this.field.minX+this.field.maxX)*.5,s=(this.field.minY+this.field.maxY)*.5,r=(this.field.minZ+this.field.maxZ)*.5,a=(this.field.maxX-this.field.minX)*.5,o=(this.field.maxY-this.field.minY)*.5,l=(this.field.maxZ-this.field.minZ)*.5;this.mc.position.set(n,s,r),this.mc.scale.set(a,o,l),this.mc.updateMatrix(),this.mc.updateMatrixWorld(!0)}}const ca=0,_s=1,ha=2,pe=class pe{constructor(t){I(this,"count");I(this,"cloud");I(this,"bodyPos");I(this,"idlePos");I(this,"partOf");I(this,"q0");I(this,"q1");I(this,"q2");I(this,"q3");I(this,"qN");I(this,"idleCx");I(this,"idleCy");I(this,"idleCz");I(this,"idleAmp");I(this,"idleW1");I(this,"idleW2");I(this,"idleW3");I(this,"idleP1");I(this,"idleP2");I(this,"idleP3");I(this,"partKind");I(this,"pJA");I(this,"pJB");I(this,"pJC");I(this,"pJD");I(this,"pRs");I(this,"pRe");I(this,"pEll");I(this,"adjStart");I(this,"adjList");I(this,"torsoAdjL");I(this,"torsoAdjR");I(this,"pax");I(this,"pay");I(this,"paz");I(this,"pdx");I(this,"pdy");I(this,"pdz");I(this,"plen");I(this,"pux");I(this,"puy");I(this,"puz");I(this,"pvx");I(this,"pvy");I(this,"pvz");I(this,"pInvE2m1");I(this,"prA");I(this,"prB");I(this,"actPrim");I(this,"relaxDisp");I(this,"relaxPhase",0);I(this,"partPrevMidX");I(this,"partPrevMidY");I(this,"partPrevMidZ");I(this,"partSpeedNorm");I(this,"hasPrevMid",!1);I(this,"blend",0);I(this,"formation",!0);I(this,"lastMs",-1);I(this,"hasEverDetected",!1);this.count=t;const i=[],n=(nt,ut)=>Math.min(nt,ut)<<8|Math.max(nt,ut),s=new Map([[n(Q.LEFT_SHOULDER,Q.LEFT_ELBOW),[.05,.04,.75,.3]],[n(Q.RIGHT_SHOULDER,Q.RIGHT_ELBOW),[.05,.04,.75,.3]],[n(Q.LEFT_ELBOW,Q.LEFT_WRIST),[.04,.028,.75,.3]],[n(Q.RIGHT_ELBOW,Q.RIGHT_WRIST),[.04,.028,.75,.3]],[n(Q.LEFT_HIP,Q.LEFT_KNEE),[.08,.055,.75,.3]],[n(Q.RIGHT_HIP,Q.RIGHT_KNEE),[.08,.055,.75,.3]],[n(Q.LEFT_KNEE,Q.LEFT_ANKLE),[.055,.035,.75,.3]],[n(Q.RIGHT_KNEE,Q.RIGHT_ANKLE),[.055,.035,.75,.3]]]),r=new Set([n(Q.LEFT_SHOULDER,Q.RIGHT_SHOULDER),n(Q.LEFT_SHOULDER,Q.LEFT_HIP),n(Q.RIGHT_SHOULDER,Q.RIGHT_HIP),n(Q.LEFT_HIP,Q.RIGHT_HIP)]),a=(nt,ut,q)=>Math.PI*q*(nt*nt+nt*ut+ut*ut)/3,o=nt=>4/3*Math.PI*nt*nt*nt,l=i.length,c=Math.PI*(.35/2)*pe.TORSO_HALF_DEPTH*.5*(pe.TORSO_T_MAX-pe.TORSO_T_MIN);i.push({kind:_s,jA:-1,jB:-1,jC:-1,jD:-1,rStart:0,rEnd:0,ellipse:1,weight:c});const h=i.length;i.push({kind:ha,jA:Q.LEFT_EAR,jB:Q.RIGHT_EAR,jC:-1,jD:-1,rStart:pe.HEAD_R_H,rEnd:0,ellipse:1,weight:4/3*Math.PI*pe.HEAD_R_H*pe.HEAD_R_H*pe.HEAD_R_V});const d=i.length;i.push({kind:ca,jA:Q.LEFT_SHOULDER,jC:Q.RIGHT_SHOULDER,jB:Q.LEFT_EAR,jD:Q.RIGHT_EAR,rStart:.05,rEnd:.05,ellipse:1,weight:a(.05,.05,.15)});const u=new Map;for(const[nt,ut]of Du){if(nt<=10&&ut<=10)continue;const q=n(nt,ut);if(r.has(q))continue;u.set(q,i.length);const lt=s.get(q);if(lt){const[K,wt,_t,mt]=lt;i.push({kind:ca,jA:nt,jB:ut,jC:-1,jD:-1,rStart:K,rEnd:wt,ellipse:_t,weight:a(K,wt,mt)})}else i.push({kind:ca,jA:nt,jB:ut,jC:-1,jD:-1,rStart:.018,rEnd:.018,ellipse:1,weight:a(.018,.018,.15)})}const p=new Map;for(const[nt,ut]of[[Q.LEFT_SHOULDER,.05],[Q.RIGHT_SHOULDER,.05],[Q.LEFT_HIP,.06],[Q.RIGHT_HIP,.06]])p.set(nt,i.length),i.push({kind:ha,jA:nt,jB:-1,jC:-1,jD:-1,rStart:ut,rEnd:0,ellipse:1,weight:o(ut)});const _=i.length;this.partKind=new Uint8Array(_),this.pJA=new Int16Array(_),this.pJB=new Int16Array(_),this.pJC=new Int16Array(_),this.pJD=new Int16Array(_),this.pRs=new Float32Array(_),this.pRe=new Float32Array(_),this.pEll=new Float32Array(_);let S=0;for(let nt=0;nt<_;nt++){const ut=i[nt];this.partKind[nt]=ut.kind,this.pJA[nt]=ut.jA,this.pJB[nt]=ut.jB,this.pJC[nt]=ut.jC,this.pJD[nt]=ut.jD,this.pRs[nt]=ut.rStart,this.pRe[nt]=ut.rEnd,this.pEll[nt]=ut.ellipse,S+=ut.weight}const m=(nt,ut)=>{const q=nt.get(ut);if(q===void 0)throw new Error("TargetSampler: part lookup failed");return q},f=m(u,n(Q.LEFT_SHOULDER,Q.LEFT_ELBOW)),v=m(u,n(Q.RIGHT_SHOULDER,Q.RIGHT_ELBOW)),y=m(u,n(Q.LEFT_ELBOW,Q.LEFT_WRIST)),M=m(u,n(Q.RIGHT_ELBOW,Q.RIGHT_WRIST)),A=m(u,n(Q.LEFT_HIP,Q.LEFT_KNEE)),b=m(u,n(Q.RIGHT_HIP,Q.RIGHT_KNEE)),w=m(u,n(Q.LEFT_KNEE,Q.LEFT_ANKLE)),g=m(u,n(Q.RIGHT_KNEE,Q.RIGHT_ANKLE)),T=m(p,Q.LEFT_SHOULDER),P=m(p,Q.RIGHT_SHOULDER),C=m(p,Q.LEFT_HIP),L=m(p,Q.RIGHT_HIP),F=[n(Q.LEFT_WRIST,Q.LEFT_PINKY),n(Q.LEFT_WRIST,Q.LEFT_INDEX),n(Q.LEFT_WRIST,Q.LEFT_THUMB),n(Q.LEFT_PINKY,Q.LEFT_INDEX)].map(nt=>m(u,nt)),H=[n(Q.RIGHT_WRIST,Q.RIGHT_PINKY),n(Q.RIGHT_WRIST,Q.RIGHT_INDEX),n(Q.RIGHT_WRIST,Q.RIGHT_THUMB),n(Q.RIGHT_PINKY,Q.RIGHT_INDEX)].map(nt=>m(u,nt)),O=[n(Q.LEFT_ANKLE,Q.LEFT_HEEL),n(Q.LEFT_ANKLE,Q.LEFT_FOOT_INDEX),n(Q.LEFT_HEEL,Q.LEFT_FOOT_INDEX)].map(nt=>m(u,nt)),V=[n(Q.RIGHT_ANKLE,Q.RIGHT_HEEL),n(Q.RIGHT_ANKLE,Q.RIGHT_FOOT_INDEX),n(Q.RIGHT_HEEL,Q.RIGHT_FOOT_INDEX)].map(nt=>m(u,nt)),N=Array.from({length:_},()=>[]);N[l]=[d,f,v,A,b,T,P,C,L],N[h]=[d],N[d]=[l,h],N[f]=[l,T,y],N[v]=[l,P,M],N[y]=[f,F[0],F[1],F[2]],N[M]=[v,H[0],H[1],H[2]];for(const nt of F)N[nt]=[y];for(const nt of H)N[nt]=[M];N[A]=[l,C,w],N[b]=[l,L,g],N[w]=[A,O[0],O[1]],N[g]=[b,V[0],V[1]];for(const nt of O)N[nt]=[w];for(const nt of V)N[nt]=[g];N[T]=[l,f],N[P]=[l,v],N[C]=[l,A],N[L]=[l,b],this.torsoAdjL=Uint16Array.from([d,f,T,A,C]),this.torsoAdjR=Uint16Array.from([d,v,P,b,L]),this.adjStart=new Int32Array(_+1);let Z=0,it=0;for(let nt=0;nt<_;nt++)this.adjStart[nt]=Z,Z+=N[nt].length,N[nt].length>it&&(it=N[nt].length);this.adjStart[_]=Z,this.adjList=new Uint16Array(Z);for(let nt=0,ut=0;nt<_;nt++)for(const q of N[nt])this.adjList[ut++]=q;const ct=new Int32Array(_+1);let ot=0;for(let nt=0;nt<_;nt++){ct[nt]=ot;const ut=S>0?Math.round(i[nt].weight/S*t):0;ot+=ut,ot>t&&(ot=t)}ct[_]=t,this.bodyPos=new Float32Array(t*3),this.idlePos=new Float32Array(t*3),this.cloud={positions:new Float32Array(t*3),speeds:new Float32Array(t),count:t},this.partOf=new Uint16Array(t),this.q0=new Float32Array(t),this.q1=new Float32Array(t),this.q2=new Float32Array(t),this.q3=new Float32Array(t),this.qN=new Float32Array(t),this.relaxDisp=new Float32Array(t),this.idleCx=new Float32Array(t),this.idleCy=new Float32Array(t),this.idleCz=new Float32Array(t),this.idleAmp=new Float32Array(t),this.idleW1=new Float32Array(t),this.idleW2=new Float32Array(t),this.idleW3=new Float32Array(t),this.idleP1=new Float32Array(t),this.idleP2=new Float32Array(t),this.idleP3=new Float32Array(t),this.pax=new Float32Array(_),this.pay=new Float32Array(_),this.paz=new Float32Array(_),this.pdx=new Float32Array(_),this.pdy=new Float32Array(_),this.pdz=new Float32Array(_),this.plen=new Float32Array(_),this.pux=new Float32Array(_),this.puy=new Float32Array(_),this.puz=new Float32Array(_),this.pvx=new Float32Array(_),this.pvy=new Float32Array(_),this.pvz=new Float32Array(_),this.pInvE2m1=new Float32Array(_),this.prA=new Float32Array(_),this.prB=new Float32Array(_),this.actPrim=new Float64Array(pe.PRIM_STRIDE*Math.max(1+it,2+this.torsoAdjL.length+this.torsoAdjR.length)),this.partPrevMidX=new Float32Array(_),this.partPrevMidY=new Float32Array(_),this.partPrevMidZ=new Float32Array(_),this.partSpeedNorm=new Float32Array(_);const ht=Math.PI*2,Mt=pe.TORSO_T_MAX-pe.TORSO_T_MIN;for(let nt=0;nt<_;nt++){const ut=i[nt],q=ct[nt],lt=ct[nt+1];for(let K=q;K<lt;K++){if(this.partOf[K]=nt,ut.kind===ca){const Tt=Math.random(),$t=Math.random()*ht,Wt=Math.pow(Math.random(),.35),Nt=ut.rStart+(ut.rEnd-ut.rStart)*Tt;this.q0[K]=Tt;const te=Math.cos($t)*ut.ellipse,Zt=Math.sin($t);this.q1[K]=te,this.q2[K]=Zt,this.q3[K]=Wt*Nt,this.qN[K]=1/Math.sqrt(te*te+Zt*Zt)}else if(ut.kind===_s){const Tt=Math.random(),$t=pe.TORSO_T_MIN+Math.random()*Mt,Wt=(Math.random()<.5?-1:1)*Math.pow(Math.random(),.35),Nt=2*Tt-1,te=Math.sqrt(Math.max(0,1-Nt*Nt)),Zt=2*(($t-pe.TORSO_T_MIN)/Mt)-1,ce=Zt*Zt*Zt*Zt*Zt*Zt,Kt=Math.sqrt(Math.max(0,1-ce));this.q0[K]=Tt,this.q1[K]=$t,this.q2[K]=Wt*pe.TORSO_HALF_DEPTH*te*Kt,this.q3[K]=0,this.qN[K]=Wt>=0?1:-1}else{const Tt=2*Math.random()-1,$t=Math.sqrt(Math.max(0,1-Tt*Tt)),Wt=Math.random()*ht,Nt=Math.pow(Math.random(),.35),te=ut.jB>=0,Zt=ut.rStart,ce=te?pe.HEAD_R_V:ut.rStart,Kt=Nt*$t*Math.cos(Wt)*Zt,ne=Nt*Tt*ce,re=Nt*$t*Math.sin(Wt)*Zt;this.q0[K]=Kt,this.q1[K]=ne,this.q2[K]=re,this.q3[K]=0;const D=Math.sqrt(Kt*Kt+ne*ne+re*re);this.qN[K]=D>1e-9?1/D:0}const wt=Math.random(),_t=Math.acos(2*wt-1),mt=Math.random()*ht,Ht=1.2*Math.pow(Math.random(),1/3);this.idleCx[K]=Ht*Math.sin(_t)*Math.cos(mt),this.idleCy[K]=Ht*Math.cos(_t),this.idleCz[K]=Ht*Math.sin(_t)*Math.sin(mt),this.idleAmp[K]=.3+Math.random()*.5,this.idleW1[K]=.1+Math.random()*.3,this.idleW2[K]=.1+Math.random()*.3,this.idleW3[K]=.1+Math.random()*.3,this.idleP1[K]=Math.random()*ht,this.idleP2[K]=Math.random()*ht,this.idleP3[K]=Math.random()*ht}}}setFormation(t){this.formation=t}update(t,i){const n=t.tracking;n&&(this.hasEverDetected=!0);let s=this.lastMs<0?0:(i-this.lastMs)/1e3;s<0&&(s=0),this.lastMs=i;const r=n&&this.formation?1:0,a=1-Math.exp(-(s*1e3)/pe.BLEND_TAU_MS);this.blend+=(r-this.blend)*a;const o=this.blend,l=i/1e3;this.computeIdle(l);const c=o>.001&&this.hasEverDetected;c&&this.computeBody(t.joints,s,o>.5);const h=this.cloud.positions,d=this.cloud.speeds,u=this.idlePos,p=this.bodyPos,_=this.partOf,S=this.partSpeedNorm,m=this.count;if(c)for(let f=0;f<m;f++){const v=f*3;h[v]=u[v]+(p[v]-u[v])*o,h[v+1]=u[v+1]+(p[v+1]-u[v+1])*o,h[v+2]=u[v+2]+(p[v+2]-u[v+2])*o,d[f]=S[_[f]]*o}else h.set(u),d.fill(0);return this.cloud}computeIdle(t){const i=this.idlePos,n=this.count;for(let s=0;s<n;s++){const r=s*3,a=this.idleAmp[s];i[r]=this.idleCx[s]+a*Math.sin(this.idleW1[s]*t+this.idleP1[s]),i[r+1]=this.idleCy[s]+a*Math.sin(this.idleW2[s]*t+this.idleP2[s]),i[r+2]=this.idleCz[s]+a*Math.sin(this.idleW3[s]*t+this.idleP3[s])}}refreshPrims(t){const i=this.partKind.length;for(let n=0;n<i;n++){const s=this.partKind[n];if(s===_s){const r=t[Q.LEFT_SHOULDER],a=t[Q.RIGHT_SHOULDER],o=t[Q.LEFT_HIP],l=t[Q.RIGHT_HIP],c=(r.x+a.x)*.5,h=(r.y+a.y)*.5,d=(r.z+a.z)*.5,u=(o.x+l.x)*.5,p=(o.y+l.y)*.5,_=(o.z+l.z)*.5,S=u-c,m=p-h,f=_-d,v=Math.sqrt(S*S+m*m+f*f);let y,M,A;if(v>1e-6){const Mt=1/v;y=S*Mt,M=m*Mt,A=f*Mt}else y=0,M=-1,A=0;const b=(a.x-r.x+l.x-o.x)*.5,w=(a.y-r.y+l.y-o.y)*.5,g=(a.z-r.z+l.z-o.z)*.5;let T=w*f-g*m,P=g*S-b*f,C=b*m-w*S;const L=Math.sqrt(T*T+P*P+C*C);if(L>1e-6){const Mt=1/L;T*=Mt,P*=Mt,C*=Mt}else T=0,P=0,C=1;const F=M*C-A*P,H=A*T-y*C,O=y*P-M*T,V=a.x-r.x,N=a.y-r.y,Z=a.z-r.z,it=Math.sqrt(V*V+N*N+Z*Z),ct=Math.max(.5*it*1.05,.06),ot=pe.TORSO_HALF_DEPTH;this.pax[n]=c,this.pay[n]=h,this.paz[n]=d,this.pdx[n]=y,this.pdy[n]=M,this.pdz[n]=A,this.plen[n]=v,this.pux[n]=F,this.puy[n]=H,this.puz[n]=O,this.pvx[n]=T,this.pvy[n]=P,this.pvz[n]=C;const ht=ot/ct;this.pInvE2m1[n]=ht*ht-1,this.prA[n]=ot,this.prB[n]=ot}else if(s===ha){const r=t[this.pJA[n]],a=this.pJB[n];let o,l,c;if(a>=0){const u=t[a];o=(r.x+u.x)*.5,l=(r.y+u.y)*.5,c=(r.z+u.z)*.5}else o=r.x,l=r.y,c=r.z;const h=a>=0?pe.HEAD_R_V-pe.HEAD_R_H:0,d=this.pRs[n];this.pax[n]=o,this.pay[n]=l-h,this.paz[n]=c,this.pdx[n]=0,this.pdy[n]=1,this.pdz[n]=0,this.plen[n]=2*h,this.pux[n]=1,this.puy[n]=0,this.puz[n]=0,this.pvx[n]=0,this.pvy[n]=0,this.pvz[n]=1,this.pInvE2m1[n]=0,this.prA[n]=d,this.prB[n]=d}else{const r=t[this.pJA[n]],a=t[this.pJB[n]],o=this.pJC[n];let l,c,h,d,u,p;if(o>=0){const F=t[o],H=t[this.pJD[n]];l=(r.x+F.x)*.5,c=(r.y+F.y)*.5,h=(r.z+F.z)*.5,d=(a.x+H.x)*.5,u=(a.y+H.y)*.5,p=(a.z+H.z)*.5}else l=r.x,c=r.y,h=r.z,d=a.x,u=a.y,p=a.z;const _=d-l,S=u-c,m=p-h,f=Math.sqrt(_*_+S*S+m*m);let v,y,M;if(f>1e-6){const F=1/f;v=_*F,y=S*F,M=m*F}else v=0,y=1,M=0;let A,b,w;Math.abs(y)>.9?(A=1,b=0,w=0):(A=0,b=1,w=0);let g=y*w-M*b,T=M*A-v*w,P=v*b-y*A;const C=Math.sqrt(g*g+T*T+P*P);if(C>1e-6){const F=1/C;g*=F,T*=F,P*=F}else g=1,T=0,P=0;this.pax[n]=l,this.pay[n]=c,this.paz[n]=h,this.pdx[n]=v,this.pdy[n]=y,this.pdz[n]=M,this.plen[n]=f,this.pux[n]=g,this.puy[n]=T,this.puz[n]=P,this.pvx[n]=y*P-M*T,this.pvy[n]=M*g-v*P,this.pvz[n]=v*T-y*g;const L=1/this.pEll[n];this.pInvE2m1[n]=L*L-1,this.prA[n]=this.pRs[n],this.prB[n]=this.pRe[n]}}}packPrim(t,i){const n=this.actPrim;n[i]=this.pax[t],n[i+1]=this.pay[t],n[i+2]=this.paz[t],n[i+3]=this.pdx[t],n[i+4]=this.pdy[t],n[i+5]=this.pdz[t];const s=this.plen[t];n[i+6]=s,n[i+7]=this.pux[t],n[i+8]=this.puy[t],n[i+9]=this.puz[t],n[i+10]=this.pInvE2m1[t],n[i+11]=this.prA[t],n[i+12]=s>1e-6?(this.prB[t]-this.prA[t])/s:0}computeBody(t,i,n){this.refreshPrims(t);const s=this.bodyPos,r=this.partOf,a=this.q0,o=this.q1,l=this.q2,c=this.q3,h=this.qN,d=this.relaxDisp,u=this.relaxPhase;this.relaxPhase=u^1;const p=this.adjStart,_=this.adjList,S=this.actPrim,m=pe.PRIM_STRIDE,f=this.count,v=i>0?i:0,y=pe.SMOOTH_UNION_K,M=pe.RELAX_MAX_DISP;let A=-1,b=ca,w=1,g=!1,T=0,P=0,C=0,L=0,F=0,H=0,O=0,V=0,N=0,Z=0,it=0,ct=0,ot=0,ht=0,Mt=0,nt=0,ut=0,q=0,lt=0,K=0,wt=0,_t=0,mt=0,Ht=0,Tt=0,$t=0,Wt=0,Nt=0,te=0,Zt=0,ce=0,Kt=0,ne=0,re=0;for(let D=0;D<f;D++){const Ct=r[D];if(Ct!==A){A=Ct,b=this.partKind[Ct];let rt=0,Y=0,J=0;if(b===_s){const tt=t[Q.LEFT_SHOULDER],at=t[Q.RIGHT_SHOULDER],pt=t[Q.LEFT_HIP],vt=t[Q.RIGHT_HIP];ut=tt.x,q=tt.y,lt=tt.z,K=at.x,wt=at.y,_t=at.z,mt=pt.x,Ht=pt.y,Tt=pt.z,$t=vt.x,Wt=vt.y,Nt=vt.z,te=this.pvx[Ct],Zt=this.pvy[Ct],ce=this.pvz[Ct];const U=(Math.min(tt.visibility,at.visibility,pt.visibility,vt.visibility)-.35)/.3;w=U<0?0:U>1?1:U,rt=(ut+K+mt+$t)*.25,Y=(q+wt+Ht+Wt)*.25,J=(lt+_t+Tt+Nt)*.25}else if(b===ha){const tt=t[this.pJA[Ct]],at=this.pJB[Ct];let pt=tt.visibility;if(at>=0){const Dt=t[at];Kt=(tt.x+Dt.x)*.5,ne=(tt.y+Dt.y)*.5,re=(tt.z+Dt.z)*.5,pt=Math.min(pt,Dt.visibility)}else Kt=tt.x,ne=tt.y,re=tt.z;const vt=(pt-.35)/.3;w=vt<0?0:vt>1?1:vt,rt=Kt,Y=ne,J=re}else{L=this.pax[Ct],F=this.pay[Ct],H=this.paz[Ct],O=this.pdx[Ct],V=this.pdy[Ct],N=this.pdz[Ct],Z=this.pux[Ct],it=this.puy[Ct],ct=this.puz[Ct],ot=this.pvx[Ct],ht=this.pvy[Ct],Mt=this.pvz[Ct],nt=this.plen[Ct];const tt=t[this.pJA[Ct]],at=t[this.pJB[Ct]],pt=this.pJC[Ct];let vt=Math.min(tt.visibility,at.visibility);pt>=0&&(vt=Math.min(vt,t[pt].visibility,t[this.pJD[Ct]].visibility));const Dt=(vt-.35)/.3;w=Dt<0?0:Dt>1?1:Dt,rt=L+O*nt*.5,Y=F+V*nt*.5,J=H+N*nt*.5}const dt=p[Ct],At=p[Ct+1];if(g=n&&w>.01&&At>dt,g)if(b===_s){const tt=this.torsoAdjL,at=this.torsoAdjR;let pt=0;this.packPrim(Ct,pt),pt+=m;for(let vt=0;vt<tt.length;vt++)this.packPrim(tt[vt],pt),pt+=m;T=pt,P=pt,this.packPrim(Ct,pt),pt+=m;for(let vt=0;vt<at.length;vt++)this.packPrim(at[vt],pt),pt+=m;C=pt}else{this.packPrim(Ct,0);let tt=m;for(let at=dt;at<At;at++)this.packPrim(_[at],tt),tt+=m;T=tt,P=0,C=0}if(this.hasPrevMid&&v>0){const tt=rt-this.partPrevMidX[Ct],at=Y-this.partPrevMidY[Ct],pt=J-this.partPrevMidZ[Ct],Dt=Math.sqrt(tt*tt+at*at+pt*pt)/v/2;this.partSpeedNorm[Ct]=Dt<0?0:Dt>1?1:Dt}else this.partSpeedNorm[Ct]=0;this.partPrevMidX[Ct]=rt,this.partPrevMidY[Ct]=Y,this.partPrevMidZ[Ct]=J}const ee=D*3;let R,x,z,G=0,j=0,ft=0;if(b===_s){const rt=a[D],Y=o[D],J=ut+(K-ut)*rt,dt=q+(wt-q)*rt,At=lt+(_t-lt)*rt,tt=mt+($t-mt)*rt,at=Ht+(Wt-Ht)*rt,pt=Tt+(Nt-Tt)*rt,vt=l[D]*w;if(R=J+(tt-J)*Y+te*vt,x=dt+(at-dt)*Y+Zt*vt,z=At+(pt-At)*Y+ce*vt,g){const Dt=h[D];G=te*Dt,j=Zt*Dt,ft=ce*Dt}}else if(b===ha){const rt=a[D],Y=o[D],J=l[D];if(R=Kt+rt*w,x=ne+Y*w,z=re+J*w,g){const dt=h[D];G=rt*dt,j=Y*dt,ft=J*dt}}else{const rt=a[D],Y=o[D],J=l[D],dt=c[D]*w,At=Z*Y+ot*J,tt=it*Y+ht*J,at=ct*Y+Mt*J;if(R=L+O*(nt*rt)+At*dt,x=F+V*(nt*rt)+tt*dt,z=H+N*(nt*rt)+at*dt,g){const pt=h[D];G=At*pt,j=tt*pt,ft=at*pt}}if(g&&(G!==0||j!==0||ft!==0)){let rt;if((D&1)===u){let Y=0,J=T;b===_s&&a[D]>=.5&&(Y=P,J=C);let dt=0,At=0;for(let tt=Y;tt<J;tt+=m){const at=R-S[tt],pt=x-S[tt+1],vt=z-S[tt+2],Dt=S[tt+3],U=S[tt+4],xt=S[tt+5],et=S[tt+6];let gt=at*Dt+pt*U+vt*xt;gt=gt<0?0:gt>et?et:gt;const St=at-Dt*gt,st=pt-U*gt,Ft=vt-xt*gt;let Lt=St*St+st*st+Ft*Ft;const Ae=S[tt+10];if(Ae!==0){const Oe=St*S[tt+7]+st*S[tt+8]+Ft*S[tt+9];Lt+=Oe*Oe*Ae}const fe=Math.sqrt(Lt)-(S[tt+11]+S[tt+12]*gt);if(tt===Y)dt=fe,At=fe;else{let Oe=.5+.5*(fe-At)/y;Oe=Oe<0?0:Oe>1?1:Oe,At=fe+(At-fe)*Oe-y*Oe*(1-Oe)}}rt=dt-At,rt>M&&(rt=M),d[D]=rt}else rt=d[D];rt>0&&(R+=G*rt,x+=j*rt,z+=ft*rt)}s[ee]=R,s[ee+1]=x,s[ee+2]=z}this.hasPrevMid=!0}};I(pe,"PRIM_STRIDE",13),I(pe,"BLEND_TAU_MS",600),I(pe,"TORSO_HALF_DEPTH",.07),I(pe,"TORSO_T_MIN",-.08),I(pe,"TORSO_T_MAX",1.05),I(pe,"HEAD_R_H",.11),I(pe,"HEAD_R_V",.11*1.25),I(pe,"SMOOTH_UNION_K",.05),I(pe,"RELAX_MAX_DISP",.06);let $o=pe;const _i=2600,Xy=.6,Uh=Math.round(_i*Xy),qy=_i-Uh,Yy=40,Np=.65,$y=1.35,Ec=6.5,Ky=.05,Zy=1.5,Op=.005,Jy=.02,jy=1.15,Qy=.8,tE=.6,eE=6,Bp=2072543,zp=9431551,iE=16730666,nE=16751210,sE=500,bc=.42,rE=Math.PI*2,aE=1.8,oE=1.4,lE=3.5,cE=1.5,hE=.8,uE=4,dE=2.2,fE=1.2,kp=.3,pE=3,mE=1.2,gE=1,_E=.8,xE=1.5,vE=1e-4,ME=.001,SE=.25,yE=.75;class EE{constructor(t){I(this,"cubeMesh");I(this,"sphereMesh");I(this,"cubeMaterial");I(this,"sphereMaterial");I(this,"sampler",new $o(_i));I(this,"visible",!1);I(this,"fade",1);I(this,"cubeColorBase",new Yt(Bp));I(this,"cubeColorScatter",new Yt(iE));I(this,"sphereColorBase",new Yt(zp));I(this,"sphereColorScatter",new Yt(nE));I(this,"scatterColorMix",0);I(this,"scatterColorTarget",0);I(this,"pos");I(this,"vel");I(this,"kPerInstance");I(this,"baseSize");I(this,"rotAxis");I(this,"rotAngle");I(this,"isCube");I(this,"slotIndex");I(this,"tmpMatrix",new be);I(this,"tmpPos",new k);I(this,"tmpQuat",new Gs);I(this,"tmpScale",new k);I(this,"tmpAxis",new k);this.pos=new Float32Array(_i*3),this.vel=new Float32Array(_i*3),this.kPerInstance=new Float32Array(_i),this.baseSize=new Float32Array(_i),this.rotAxis=new Float32Array(_i*3),this.rotAngle=new Float32Array(_i),this.isCube=new Uint8Array(_i),this.slotIndex=new Uint32Array(_i),this.initializeInstanceParams();const i=new Kr(1,1,1);this.cubeMaterial=new Ir({color:Bp,transparent:!0,opacity:bc,depthWrite:!1,blending:Fs}),this.cubeMesh=new Qf(i,this.cubeMaterial,Uh),this.cubeMesh.instanceMatrix.setUsage(is),this.cubeMesh.frustumCulled=!1,this.cubeMesh.visible=!1;const n=new td(1,8,8);this.sphereMaterial=new Ir({color:zp,transparent:!0,opacity:bc,depthWrite:!1,blending:Fs}),this.sphereMesh=new Qf(n,this.sphereMaterial,qy),this.sphereMesh.instanceMatrix.setUsage(is),this.sphereMesh.frustumCulled=!1,this.sphereMesh.visible=!1,t.add(this.cubeMesh),t.add(this.sphereMesh)}initializeInstanceParams(){let t=0,i=0;for(let n=0;n<_i;n++){const s=n<Uh;this.isCube[n]=s?1:0,this.slotIndex[n]=s?t++:i++;const r=Np+Math.random()*($y-Np);this.kPerInstance[n]=Yy*r;const a=Op+Math.random()*(Jy-Op);this.baseSize[n]=s?a*jy:a;const o=Math.random()*Math.PI*2,l=Math.random()*2-1,c=Math.sqrt(1-l*l);this.rotAxis[n*3+0]=c*Math.cos(o),this.rotAxis[n*3+1]=c*Math.sin(o),this.rotAxis[n*3+2]=l,this.rotAngle[n]=0;const h=Zy*Math.cbrt(Math.random()),d=Math.random()*Math.PI*2,u=Math.random()*2-1,p=Math.sqrt(1-u*u);this.pos[n*3+0]=h*p*Math.cos(d),this.pos[n*3+1]=h*p*Math.sin(d),this.pos[n*3+2]=h*u}}enter(){this.visible=!0,this.cubeMesh.visible=!0,this.sphereMesh.visible=!0}exit(){this.visible=!1,this.cubeMesh.visible=!1,this.sphereMesh.visible=!1}update(t){if(!this.visible)return;const i=Math.min(Math.max(t.dtMs/1e3,0),Ky),n=this.sampler.update(t.skeleton,t.nowMs),s=1-Math.exp(-t.dtMs/sE);this.scatterColorMix+=(this.scatterColorTarget-this.scatterColorMix)*s,this.cubeMaterial.color.copy(this.cubeColorBase).lerp(this.cubeColorScatter,this.scatterColorMix),this.sphereMaterial.color.copy(this.sphereColorBase).lerp(this.sphereColorScatter,this.scatterColorMix),this.stepPhysics(n,i),!(this.fade<=ME)&&(this.writeInstanceMatrices(n,i),this.cubeMesh.instanceMatrix.needsUpdate=!0,this.sphereMesh.instanceMatrix.needsUpdate=!0)}stepPhysics(t,i){if(i<=0)return;const n=t.positions,s=Math.min(t.count,_i);for(let r=0;r<s;r++){const a=r*3,o=a+1,l=a+2,c=this.kPerInstance[r],h=c*(n[a]-this.pos[a])-Ec*this.vel[a],d=c*(n[o]-this.pos[o])-Ec*this.vel[o],u=c*(n[l]-this.pos[l])-Ec*this.vel[l];this.vel[a]+=h*i,this.vel[o]+=d*i,this.vel[l]+=u*i,this.pos[a]+=this.vel[a]*i,this.pos[o]+=this.vel[o]*i,this.pos[l]+=this.vel[l]*i}}writeInstanceMatrices(t,i){const n=t.speeds,s=Math.min(t.count,_i),r=SE+yE*this.fade;for(let a=0;a<s;a++){const o=a*3,l=o+1,c=o+2,h=this.vel[o],d=this.vel[l],u=this.vel[c],p=Math.sqrt(h*h+d*d+u*u),_=1+n[a]*Qy,S=this.baseSize[a]*_*r;this.tmpPos.set(this.pos[o],this.pos[l],this.pos[c]),this.tmpScale.set(S,S,S),this.isCube[a]===1?(this.rotAngle[a]+=(tE+p*eE)*i,this.tmpAxis.set(this.rotAxis[o],this.rotAxis[l],this.rotAxis[c]),this.tmpQuat.setFromAxisAngle(this.tmpAxis,this.rotAngle[a])):this.tmpQuat.identity(),this.tmpMatrix.compose(this.tmpPos,this.tmpQuat,this.tmpScale),this.isCube[a]===1?this.cubeMesh.setMatrixAt(this.slotIndex[a],this.tmpMatrix):this.sphereMesh.setMatrixAt(this.slotIndex[a],this.tmpMatrix)}}setTransitionFade(t){this.fade=t;const i=bc*t;this.cubeMaterial.opacity=i,this.sphereMaterial.opacity=i}setScattered(t){this.sampler.setFormation(!t)}setScatterColor(t){this.scatterColorTarget=t?1:0}randOf(t){const i=this.baseSize[t]*9999;return i-Math.floor(i)}trigger(t,i){for(let n=0;n<_i;n++){const s=n*3,r=s+1,a=s+2,o=this.randOf(n);let l=this.pos[s]-i.x,c=this.pos[r]-i.y,h=this.pos[a]-i.z,d=Math.sqrt(l*l+c*c+h*h);if(d<vE){const m=o*rE;l=Math.cos(m),c=Math.sin(m),h=this.rotAxis[a],d=Math.sqrt(l*l+c*c+h*h)||1}const u=1/d,p=l*u,_=c*u,S=h*u;switch(t){case"scatter":{const m=aE+o*oE;this.vel[s]+=p*m,this.vel[r]+=_*m,this.vel[a]+=S*m;break}case"burst":{const m=lE+o*cE;this.vel[s]+=p*m,this.vel[r]+=_*m+hE,this.vel[a]+=S*m,this.rotAngle[n]+=uE*o;break}case"updraft":{this.vel[r]+=dE+o*fE,this.vel[s]+=-l*kp,this.vel[a]+=-h*kp;break}case"push":{const m=pE+o*mE;this.vel[a]+=m;const f=gE+o*_E;this.vel[s]+=p*f,this.vel[r]+=_*f,this.vel[a]+=S*f,this.rotAngle[n]+=xE*o;break}}}}}const ua=3e4;class bE{constructor(t){I(this,"scene");I(this,"sampler",new $o(ua));I(this,"geometry");I(this,"material");I(this,"points");I(this,"targetAttr");I(this,"speedAttr");I(this,"forceUpload",!1);I(this,"lastNowSec",0);I(this,"fade",1);I(this,"scatterColorMix",0);I(this,"scatterColorTarget",0);this.scene=t,this.geometry=new pi;const i=new Float32Array(ua*3);this.targetAttr=new Ye(i,3),this.targetAttr.setUsage(is),this.geometry.setAttribute("target",this.targetAttr);const n=new Float32Array(ua);this.speedAttr=new Ye(n,1),this.speedAttr.setUsage(is),this.geometry.setAttribute("aSpeed",this.speedAttr);const s=new Float32Array(ua*4);for(let a=0;a<s.length;a++)s[a]=Math.random();this.geometry.setAttribute("aSeed",new Ye(s,4));const r=new Float32Array(ua*3);this.geometry.setAttribute("position",new Ye(r,3)),this.geometry.boundingSphere=new Hn(new k(0,0,0),5),this.material=new $e({uniforms:{uTime:{value:0},uSize:{value:6},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uFade:{value:1},uGestureOrigin:{value:new k(0,0,0)},uScatterStart:{value:-1e3},uBurstStart:{value:-1e3},uUpdraftStart:{value:-1e3},uPushStart:{value:-1e3},uScatterMix:{value:0}},vertexShader:AE,fragmentShader:TE,transparent:!0,depthWrite:!1,blending:Fs}),this.points=new fv(this.geometry,this.material),this.points.frustumCulled=!1,this.points.visible=!1,this.scene.add(this.points)}enter(){this.points.visible=!0,this.forceUpload=!0}exit(){this.points.visible=!1}update(t){if(this.lastNowSec=t.nowMs/1e3,!this.points.visible&&!this.forceUpload)return;this.forceUpload=!1;const i=this.sampler.update(t.skeleton,t.nowMs);this.targetAttr.array.set(i.positions),this.speedAttr.array.set(i.speeds),this.targetAttr.needsUpdate=!0,this.speedAttr.needsUpdate=!0;const n=1-Math.exp(-t.dtMs/500);this.scatterColorMix+=(this.scatterColorTarget-this.scatterColorMix)*n,this.material.uniforms.uTime.value=t.nowMs/1e3,this.material.uniforms.uFade.value=this.fade,this.material.uniforms.uScatterMix.value=this.scatterColorMix}setTransitionFade(t){this.fade=t,this.material.uniforms.uFade.value=t}setScattered(t){this.sampler.setFormation(!t)}setScatterColor(t){this.scatterColorTarget=t?1:0}trigger(t,i){switch(this.material.uniforms.uGestureOrigin.value.set(i.x,i.y,i.z),t){case"scatter":this.material.uniforms.uScatterStart.value=this.lastNowSec;break;case"burst":this.material.uniforms.uBurstStart.value=this.lastNowSec;break;case"updraft":this.material.uniforms.uUpdraftStart.value=this.lastNowSec;break;case"push":this.material.uniforms.uPushStart.value=this.lastNowSec;break}}}const AE=`
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
  uniform float uPushStart;

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
    // push の発光/振幅増幅係数(0 で無効)。
    float pushEnv = 0.0;
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

    // push: 両手を前に押し出す → 粒がカメラ方向(+z)へ噴き出して戻る。
    // env = 立ち上がり ~0.10s の smooth attack、その後 τ≈0.5s の指数減衰。~1.4s で消滅。
    float tp = t - uPushStart;
    if (tp >= 0.0 && tp < 1.4) {
      pushEnv = smoothstep(0.0, 0.10, tp) * exp(-tp / 0.5);
      // 主変位は前方(+z=カメラ方向)へ噴出。
      gestureOffset.z += 0.55 * pushEnv;
      // 平坦なシートに見えないよう、原点→目標の方向へ軽く外側へ拡げる。
      gestureOffset += dir * (0.18 * pushEnv);
    }

    // 基本 0.012、速さで最大 +0.05 増幅。
    // scatter 中はウォブル振幅を (1 + 2·env) 倍、push 中は更に (1 + 1.2·env) 倍にして churn。
    float amp = (0.012 + aSpeed * 0.05) * (1.0 + 2.0 * scatterEnv) * (1.0 + 1.2 * pushEnv);

    // 全体の緩やかな呼吸(±0.004)。
    float breathe = sin(t * 0.6) * 0.004;

    vec3 noiseOffset = wobble * amp + breathe;
    vec3 displayPos = target + noiseOffset + gestureOffset;

    vec4 mvPosition = modelViewMatrix * vec4(displayPos, 1.0);

    // seed 由来のサイズばらつき 0..0.8、速さで更に拡大。
    float sizeVar = 0.6 + aSeed.w * 0.8 + aSpeed * 1.5;
    // burst のシェル近傍で一瞬だけサイズを ×1.8 まで押し上げる。
    sizeVar *= 1.0 + 0.8 * burstShell;
    // push 中も控えめにサイズを押し上げる(最大 ×1.5)。
    sizeVar *= 1.0 + 0.5 * pushEnv;
    float size = uSize * uPixelRatio * sizeVar * (1.0 / -mvPosition.z);
    // 遷移フェードで点も僅かに縮小(0.3..1.0 倍)し、消え際が自然になる。
    size *= 0.3 + 0.7 * uFade;
    gl_PointSize = clamp(size, 1.0, 24.0);

    vSpeed = aSpeed;
    vRand = aSeed.x;
    // scatter / burst / push の発光量をまとめてフラグメントへ渡す。
    vGlow = scatterEnv + burstShell + pushEnv;

    gl_Position = projectionMatrix * mvPosition;
  }
`,TE=`
  // 注意: precision は three.js が自動注入する (highp)。手書きで mediump を
  // 宣言すると頂点側と uniform の精度が食い違いリンクエラーになるため書かない。

  uniform float uFade;
  uniform float uScatterMix;

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

    // 散乱状態では赤系パレットへ切り替える(自動散乱の演出)。
    vec3 scatterCold = vec3(0.75, 0.12, 0.06);
    vec3 scatterHot = vec3(1.0, 0.55, 0.35);
    vec3 scatterColor = mix(scatterCold, scatterHot, mixFactor);
    color = mix(color, scatterColor, uScatterMix);

    // vRand による僅かな色相ジッタ(±数%)。
    color.r *= 0.92 + vRand * 0.16;
    color.b *= 0.92 + (1.0 - vRand) * 0.16;

    // 遷移フェードを最終アルファへ乗算(ジェスチャー状態とは独立)。
    float alpha = falloff * uFade;
    // 加算合成向けにアルファをプリマルチプライ。
    gl_FragColor = vec4(color * alpha, alpha);
  }
`,M1={wireframe:"1: ワイヤーフレーム",swarm:"2: キューブ・スフィア",particle:"3: パーティクル"},wE=1200;class RE{constructor(t,i="wireframe"){I(this,"active");I(this,"prev",null);I(this,"progress",1);this.modes=t,this.active=i;for(const[n,s]of Object.entries(this.modes))n===i?(s.enter(),s.setTransitionFade(1)):s.exit()}get activeMode(){return this.active}setMode(t){t!==this.active&&(this.prev!==null&&this.modes[this.prev].exit(),this.prev=this.active,this.active=t,this.progress=0,this.modes[t].setTransitionFade(0),this.modes[t].enter())}update(t){if(this.prev!==null){this.progress=Math.min(1,this.progress+t.dtMs/wE);const i=this.progress,n=i*i*(3-2*i);this.modes[this.active].setTransitionFade(n),this.modes[this.prev].setTransitionFade(1-n),this.modes[this.prev].update(t),this.progress>=1&&(this.modes[this.prev].exit(),this.modes[this.prev].setTransitionFade(1),this.prev=null)}this.modes[this.active].update(t)}trigger(t,i){this.modes[this.active].trigger(t,i),this.prev!==null&&this.modes[this.prev].trigger(t,i)}setScattered(t){var i;for(const n of Object.values(this.modes))(i=n.setScattered)==null||i.call(n,t)}setScatterColor(t){var i;for(const n of Object.values(this.modes))(i=n.setScatterColor)==null||i.call(n,t)}}const Ko=document.querySelector("#app");if(!Ko)throw new Error("#app が見つかりません");const va=new ex(Ko);async function CE(){va.setLoading("カメラを起動しています…");const e=await V1();va.setLoading("ポーズ推定モデルを読み込んでいます…");const t=await Iu.create(),i=new F_,n=new Dy(Ko),s=new RE({wireframe:new Wy(n.scene),swarm:new EE(n.scene),particle:new bE(n.scene)},"swarm"),r=new nx(Ko,e.video);r.setModeLabel(M1[s.activeMode]),r.setPreviewVisible(!1);const a=new tx,o=FE(n);o.setTrail(id[s.activeMode]);const l=new IE(s,r,s.activeMode);va.hide(),OE(r,s,o,l),UE(e.video,t,i,r,Hp),NE(i,n,s,a,r,l,Hp)}const PE=3e4,LE=new Set(["swarm","particle"]);class IE{constructor(t,i,n){I(this,"scattered",!1);I(this,"currentMode");I(this,"detectedSince",-1);I(this,"autoTriggered",!1);I(this,"wasTracking",!1);I(this,"lastTracking",!1);I(this,"lastNowMs",0);I(this,"redColor",!1);this.manager=t,this.debugOverlay=i,this.currentMode=n,this.updateLabel()}autoApplicable(){return LE.has(this.currentMode)}updateLabel(){this.debugOverlay.setModeLabel(`${M1[this.currentMode]}${this.scattered?" [散乱]":""}`)}applyScattered(t){this.scattered!==t&&(this.scattered=t,this.manager.setScattered(t),this.updateLabel(),this.refreshColor())}refreshColor(){const t=this.scattered&&this.lastTracking;t!==this.redColor&&(this.redColor=t,this.manager.setScatterColor(t))}setMode(t){this.currentMode=t,this.autoApplicable()&&!this.scattered&&this.wasTracking&&(this.detectedSince=this.lastNowMs,this.autoTriggered=!1),this.updateLabel()}toggleManual(){if(!this.autoApplicable())return;const t=!this.scattered;this.applyScattered(t),t?(this.autoTriggered=!0,this.detectedSince=-1):(this.autoTriggered=!1,this.detectedSince=this.wasTracking?this.lastNowMs:-1)}tick(t,i){this.lastNowMs=i,this.lastTracking=t,t&&!this.wasTracking&&this.autoApplicable()&&(this.applyScattered(!1),this.detectedSince=i,this.autoTriggered=!1),t&&this.autoApplicable()&&!this.scattered&&!this.autoTriggered&&this.detectedSince>=0&&i-this.detectedSince>=PE&&(this.applyScattered(!0),this.autoTriggered=!0,this.detectedSince=-1),this.refreshColor(),this.wasTracking=t}}const DE={burst:"👏 衝撃波",scatter:"🙌 拡散",updraft:"🙋 上昇",push:"🫸 押し出し"},id={wireframe:.86,swarm:.9,particle:.93};function FE(e){const t=new Nh({title:"調整 (D で開閉)"}),i={bloom:.9,trail:id.wireframe};t.add(i,"bloom",0,3,.05).name("Bloom 強度").onChange(r=>e.setBloomStrength(r));const n=t.add(i,"trail",0,.98,.01).name("残像の長さ").onChange(r=>e.setTrailDamp(r));t.hide();let s=!1;return{setTrail(r){i.trail=r,n.updateDisplay(),e.setTrailDamp(r)},toggleVisible(){s=!s,s?t.show():t.hide()},hide(){s=!1,t.hide()}}}const Hp={inferenceFrames:0,inferenceSumMs:0,inferenceFps:0,inferenceMs:0};function UE(e,t,i,n,s){const r=()=>{const o=t.detect(e,performance.now());i.ingest(o),n.draw(o),s.inferenceFrames++,s.inferenceSumMs+=o.inferenceTimeMs,a()},a="requestVideoFrameCallback"in HTMLVideoElement.prototype?()=>e.requestVideoFrameCallback(()=>r()):()=>requestAnimationFrame(r);a()}function NE(e,t,i,n,s,r,a){let o=0,l=performance.now(),c=performance.now();const h={skeleton:e.update(performance.now()),dtMs:0,nowMs:0},d=()=>{const u=performance.now(),p=u-c;c=u,h.skeleton=e.update(u),h.dtMs=p,h.nowMs=u,r.tick(h.skeleton.tracking,u);const _=n.update(h.skeleton,u);if(_){const S=h.skeleton.joints[Q.LEFT_SHOULDER],m=h.skeleton.joints[Q.RIGHT_SHOULDER];i.trigger(_,{x:(S.x+m.x)/2,y:(S.y+m.y)/2,z:(S.z+m.z)/2}),s.flashGesture(DE[_])}if(s.setPushDebug(n.pushForwardRatio,n.pushForwardPeak),i.update(h),t.render(),o++,u-l>=500){const S=u-l;a.inferenceFps=a.inferenceFrames*1e3/S,a.inferenceMs=a.inferenceFrames>0?a.inferenceSumMs/a.inferenceFrames:0,s.setStats({renderFps:o*1e3/S,inferenceFps:a.inferenceFps,inferenceMs:a.inferenceMs}),o=0,a.inferenceFrames=0,a.inferenceSumMs=0,l=u}requestAnimationFrame(d)};requestAnimationFrame(d)}function OE(e,t,i,n){let s=!1,r=!0;const a={1:"wireframe",2:"swarm",3:"particle"};window.addEventListener("keydown",o=>{switch(o.key){case" ":o.preventDefault(),n.toggleManual();return;case"v":case"V":s=!s,e.setPreviewVisible(r&&s);return;case"h":case"H":r=!r,e.setHudVisible(r),e.setPreviewVisible(r&&s),r||i.hide();return;case"d":case"D":r&&i.toggleVisible();return}const l=a[o.key];l&&(t.setMode(l),n.setMode(l),i.setTrail(id[l]))})}async function BE(){for(;;){await va.waitForStart();try{await CE();return}catch(e){console.error(e),va.showError(e instanceof Error?e.message:String(e))}}}BE();
