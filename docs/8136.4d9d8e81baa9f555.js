"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8136],{8136:(T,y,o)=>{o.r(y),o.d(y,{ion_menu:()=>O,ion_menu_button:()=>L,ion_menu_toggle:()=>z});var u=o(5861),i=o(1308),m=o(9658),x=o(2225),w=o(4349),l=o(5730),c=o(4292),a=o(1312),s=o(2357),r=o(2854);o(8834),o(3457);const C='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',O=class{constructor(t){(0,i.r)(this,t),this.ionWillOpen=(0,i.e)(this,"ionWillOpen",7),this.ionWillClose=(0,i.e)(this,"ionWillClose",7),this.ionDidOpen=(0,i.e)(this,"ionDidOpen",7),this.ionDidClose=(0,i.e)(this,"ionDidClose",7),this.ionMenuChange=(0,i.e)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=w.G.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.inheritedAttributes={},this.handleFocus=e=>{const n=(0,a.k)(document);n&&!n.contains(this.el)||this.trapKeyboardFocus(e,document)},this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(t,e){const n=this.contentEl;n&&(void 0!==e&&n.classList.remove(`menu-content-${e}`),n.classList.add(`menu-content-${t}`),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=(0,l.o)(this.side)}swipeGestureChanged(){this.updateState()}connectedCallback(){var t=this;return(0,u.Z)(function*(){typeof customElements<"u"&&(yield customElements.whenDefined("ion-menu")),void 0===t.type&&(t.type=m.c.get("menuType","overlay"));const e=void 0!==t.contentId?document.getElementById(t.contentId):null;null!==e?(t.el.contains(e)&&console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.'),t.contentEl=e,e.classList.add("menu-content"),t.typeChanged(t.type,void 0),t.sideChanged(),c.m._register(t),t.gesture=(yield Promise.resolve().then(o.bind(o,1911))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:n=>t.canStart(n),onWillStart:()=>t.onWillStart(),onStart:()=>t.onStart(),onMove:n=>t.onMove(n),onEnd:n=>t.onEnd(n)}),t.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')})()}componentWillLoad(){this.inheritedAttributes=(0,l.i)(this.el)}componentDidLoad(){var t=this;return(0,u.Z)(function*(){t.ionMenuChange.emit({disabled:t.disabled,open:t._isOpen}),t.updateState()})()}disconnectedCallback(){this.blocker.destroy(),c.m._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}onKeydown(t){"Escape"===t.key&&this.close()}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,e=!0){return c.m._setOpen(this,t,e)}focusFirstDescendant(){const{el:t}=this,e=t.querySelector(C);e?e.focus():t.focus()}focusLastDescendant(){const{el:t}=this,e=Array.from(t.querySelectorAll(C)),n=e.length>0?e[e.length-1]:null;n?n.focus():t.focus()}trapKeyboardFocus(t,e){const n=t.target;!n||(this.el.contains(n)?this.lastFocus=n:(this.focusFirstDescendant(),this.lastFocus===e.activeElement&&this.focusLastDescendant()))}_setOpen(t,e=!0){var n=this;return(0,u.Z)(function*(){return!(!n._isActive()||n.isAnimating||t===n._isOpen||(n.beforeAnimation(t),yield n.loadAnimation(),yield n.startAnimation(t,e),n.afterAnimation(t),0))})()}loadAnimation(){var t=this;return(0,u.Z)(function*(){const e=t.menuInnerEl.offsetWidth;e===t.width&&void 0!==t.animation||(t.width=e,t.animation&&(t.animation.destroy(),t.animation=void 0),t.animation=yield c.m._createAnimation(t.type,t),m.c.getBoolean("animated",!0)||t.animation.duration(0),t.animation.fill("both"))})()}startAnimation(t,e){var n=this;return(0,u.Z)(function*(){const d=!t,p=(0,m.b)(n),f="ios"===p?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",h="ios"===p?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",g=n.animation.direction(d?"reverse":"normal").easing(d?h:f).onFinish(()=>{"reverse"===g.getDirection()&&g.direction("normal")});e?yield g.play():g.play({sync:!0})})()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!c.m._getOpenSync()&&G(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):(0,l.n)(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void(0,l.n)(!1,"isAnimating has to be true");const n=A(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-n:n)}onEnd(t){if(!this.isAnimating||!this.animation)return void(0,l.n)(!1,"isAnimating has to be true");const e=this._isOpen,n=this.isEndSide,d=A(t.deltaX,e,n),p=this.width,f=d/p,h=t.velocityX,g=p/2,I=h>=0&&(h>.2||t.deltaX>g),W=h<=0&&(h<-.2||t.deltaX<-g),v=e?n?I:W:n?W:I;let j=!e&&v;e&&!v&&(j=!0),this.lastOnEnd=t.currentTime;let E=v?.001:-.001;E+=(0,x.g)([0,0],[.4,0],[.6,1],[1,1],(0,l.l)(0,f<0?.01:f,.9999))[0]||0;const N=this._isOpen?!v:v;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(()=>this.afterAnimation(j),{oneTimeCallback:!0}).progressEnd(N?1:0,this._isOpen?1-E:E,300)}beforeAnimation(t){(0,l.n)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(M),this.el.setAttribute("tabindex","0"),this.backdropEl&&this.backdropEl.classList.add(D),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){var e;(0,l.n)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&(this.contentEl.classList.add(P),this.contentEl.setAttribute("aria-hidden","true")),this.ionDidOpen.emit(),(null===(e=document.activeElement)||void 0===e?void 0:e.closest("ion-menu"))!==this.el&&this.el.focus(),document.addEventListener("focus",this.handleFocus,!0)):(this.el.classList.remove(M),this.el.removeAttribute("tabindex"),this.contentEl&&(this.contentEl.classList.remove(P),this.contentEl.removeAttribute("aria-hidden")),this.backdropEl&&this.backdropEl.classList.remove(D),this.animation&&this.animation.stop(),this.ionDidClose.emit(),document.removeEventListener("focus",this.handleFocus,!0))}updateState(){const t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||c.m._setActiveMenu(this),(0,l.n)(!this.isAnimating,"can not be animating")}forceClosing(){(0,l.n)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}render(){const{isEndSide:t,type:e,disabled:n,isPaneVisible:d,inheritedAttributes:p}=this,f=(0,m.b)(this);return(0,i.h)(i.H,{role:"navigation","aria-label":p["aria-label"]||"menu",class:{[f]:!0,[`menu-type-${e}`]:!0,"menu-enabled":!n,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":d}},(0,i.h)("div",{class:"menu-inner",part:"container",ref:h=>this.menuInnerEl=h},(0,i.h)("slot",null)),(0,i.h)("ion-backdrop",{ref:h=>this.backdropEl=h,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return(0,i.i)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},A=(t,e,n)=>Math.max(0,e!==n?-t:t),G=(t,e,n,d)=>n?e>=t.innerWidth-d:e<=d,M="show-menu",D="show-backdrop",P="menu-content-open";O.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};const S=function(){var t=(0,u.Z)(function*(e){const n=yield c.m.get(e);return!(!n||!(yield n.isActive()))});return function(n){return t.apply(this,arguments)}}(),L=class{constructor(t){var e=this;(0,i.r)(this,t),this.inheritedAttributes={},this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=(0,u.Z)(function*(){return c.m.toggle(e.menu)})}componentWillLoad(){this.inheritedAttributes=(0,l.i)(this.el)}componentDidLoad(){this.visibilityChanged()}visibilityChanged(){var t=this;return(0,u.Z)(function*(){t.visible=yield S(t.menu)})()}render(){const{color:t,disabled:e,inheritedAttributes:n}=this,d=(0,m.b)(this),p=m.c.get("menuIcon","ios"===d?s.u:s.v),f=this.autoHide&&!this.visible,h={type:this.type},g=n["aria-label"]||"menu";return(0,i.h)(i.H,{onClick:this.onClick,"aria-disabled":e?"true":null,"aria-hidden":f?"true":null,class:(0,r.c)(t,{[d]:!0,button:!0,"menu-button-hidden":f,"menu-button-disabled":e,"in-toolbar":(0,r.h)("ion-toolbar",this.el),"in-toolbar-color":(0,r.h)("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},(0,i.h)("button",Object.assign({},h,{disabled:e,class:"button-native",part:"native","aria-label":g}),(0,i.h)("span",{class:"button-inner"},(0,i.h)("slot",null,(0,i.h)("ion-icon",{part:"icon",icon:p,mode:d,lazy:!1,"aria-hidden":"true"}))),"md"===d&&(0,i.h)("ion-ripple-effect",{type:"unbounded"})))}get el(){return(0,i.i)(this)}};L.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};const z=class{constructor(t){(0,i.r)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>c.m.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}visibilityChanged(){var t=this;return(0,u.Z)(function*(){t.visible=yield S(t.menu)})()}render(){const t=(0,m.b)(this),e=this.autoHide&&!this.visible;return(0,i.h)(i.H,{onClick:this.onClick,"aria-hidden":e?"true":null,class:{[t]:!0,"menu-toggle-hidden":e}},(0,i.h)("slot",null))}};z.style=":host(.menu-toggle-hidden){display:none}"},2854:(T,y,o)=>{o.d(y,{c:()=>m,g:()=>w,h:()=>i,o:()=>c});var u=o(5861);const i=(a,s)=>null!==s.closest(a),m=(a,s)=>"string"==typeof a&&a.length>0?Object.assign({"ion-color":!0,[`ion-color-${a}`]:!0},s):s,w=a=>{const s={};return(a=>void 0!==a?(Array.isArray(a)?a:a.split(" ")).filter(r=>null!=r).map(r=>r.trim()).filter(r=>""!==r):[])(a).forEach(r=>s[r]=!0),s},l=/^[a-z][a-z0-9+\-.]*:/,c=function(){var a=(0,u.Z)(function*(s,r,_,k){if(null!=s&&"#"!==s[0]&&!l.test(s)){const b=document.querySelector("ion-router");if(b)return null!=r&&r.preventDefault(),b.push(s,_,k)}return!1});return function(r,_,k,b){return a.apply(this,arguments)}}()}}]);