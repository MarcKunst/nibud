(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{150:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},151:function(t,e,n){t.exports=n.p+"img/d8a5933.png"},152:function(t,e,n){t.exports=n.p+"img/8d6f1b4.png"},155:function(t,e,n){"use strict";var r={created:function(){"undefined"!=typeof document&&l(this,(function(t,e){var n,r,l,c;n=document,r=t,l=e,c=o?{passive:!1}:void 0,n.addEventListener(r,l,c)}))},beforeDestroy:function(){"undefined"!=typeof document&&l(this,(function(t,e){var n,r,l,c;n=document,r=t,l=e,c=o?{passive:!1}:void 0,n.removeEventListener(r,l,c)}))}},o="undefined"!=typeof window&&function(){var t=!1;try{var desc={get:function(){t=!0}},e=Object.defineProperty({},"passive",desc);window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){t=!1}return t}();function l(t,e){var n=t.$options.events;Object.keys(n).forEach((function(r){e(r,(function(e){return n[r].call(t,e)}))}))}function c(t,base){var e=base.getBoundingClientRect();return{left:t.clientX-e.left,top:t.clientY-e.top}}var d={mixins:[r],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(t){return this.dragStart(t,this.offsetByMouse)},mousemove:function(t){return this.dragMove(t,this.offsetByMouse)},mouseup:function(t){return this.dragEnd(t,this.offsetByMouse)},touchstart:function(t){return this.dragStart(t,this.offsetByTouch)},touchmove:function(t){return this.dragMove(t,this.offsetByTouch)},touchend:function(t){return this.dragEnd(t,this.offsetByTouch)},touchcancel:function(t){return this.dragEnd(t,this.offsetByTouch)}},methods:{isInTarget:function(t){return!!t&&(t===this.$el||this.isInTarget(t.parentElement))},offsetByMouse:function(t){return c(t,this.$el)},offsetByTouch:function(t){return c(0===t.touches.length?t.changedTouches[0]:t.touches[0],this.$el)},dragStart:function(t,e){this.disabled||void 0!==t.button&&0!==t.button||!this.isInTarget(t.target)||(t.preventDefault(),this.isDrag=!0,this.$emit("dragstart",t,e(t),this.$el))},dragMove:function(t,e){this.isDrag&&(t.preventDefault(),this.$emit("drag",t,e(t),this.$el))},dragEnd:function(t,e){this.isDrag&&(t.preventDefault(),this.isDrag=!1,this.$emit("dragend",t,e(t),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"range-slider",class:{disabled:t.disabled}},[n("drag-helper",{attrs:{disabled:t.disabled},on:{dragstart:t.dragStart,drag:t.drag,dragend:t.dragEnd}},[n("span",{ref:"inner",staticClass:"range-slider-inner"},[n("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:t.name,disabled:t.disabled},domProps:{value:t.actualValue}}),t._v(" "),n("span",{staticClass:"range-slider-rail"}),t._v(" "),n("span",{staticClass:"range-slider-fill",style:{width:t.valuePercent+"%"}}),t._v(" "),n("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:t.valuePercent+"%"}},[t._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var t=this._min,e=this._max,n=Number(this.value);(null==this.value||isNaN(n))&&(n=t>e?t:(t+e)/2),this.actualValue=this.round(n)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(t){var e=Number(t);null==t||isNaN(e)||(this.actualValue=this.round(e))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(t,e){this.dragStartValue=this.actualValue,t.target!==this.$refs.knob&&this.drag(t,e)},drag:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.emitInput(this.actualValue)},dragEnd:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(t){this.$emit("input",t)},emitChange:function(t){this.$emit("change",t)},valueFromBounds:function(t,e){return t/e*(this._max-this._min)+this._min},round:function(t){return function(t,e,n,r){if(t<=e)return e;var o=Math.floor((n-e)/r)*r+e;if(t>=o)return o;var l=(t-e)/r,c=Math.floor(l),d=l-c;return 0===d?t:d<.5?r*c+e:r*(c+1)+e}(t,this._min,this._max,this._step)}},components:{DragHelper:d}};t.exports=f},156:function(t,e,n){var content=n(157);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("ccf3550a",content,!0,{sourceMap:!1})},157:function(t,e,n){var r=n(51);(t.exports=r(!1)).push([t.i,".range-slider{display:inline-block;padding:0 10px;height:20px;width:130px}.range-slider.disabled{opacity:.5}.range-slider-inner{display:inline-block;position:relative;height:100%;width:100%}.range-slider-fill,.range-slider-rail{display:block;position:absolute;top:50%;left:0;height:4px;border-radius:2px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.range-slider-rail{width:100%;background-color:#e2e2e2}.range-slider-fill{background-color:#21fb92}.range-slider-knob{display:block;position:absolute;top:50%;left:0;box-sizing:border-box;height:20px;width:20px;border:1px solid #f5f5f5;border-radius:50%;background-color:#fff;box-shadow:1px 1px rgba(0,0,0,.2);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);cursor:pointer}.range-slider-hidden{display:none}",""])},158:function(t,e,n){t.exports=n.p+"img/b69d147.png"},313:function(t,e,n){var content=n(383);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("346a199c",content,!0,{sourceMap:!1})},314:function(t,e,n){var content=n(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("1c0cd3a9",content,!0,{sourceMap:!1})},382:function(t,e,n){"use strict";var r=n(313);n.n(r).a},383:function(t,e,n){var r=n(51),o=n(150),l=n(158);e=t.exports=r(!1);var c=o(l);e.push([t.i,"#slider-container[data-v-4ffa5a92]{margin-top:4rem}h2[data-v-4ffa5a92]{margin-bottom:1rem}#value-container[data-v-4ffa5a92]{display:-webkit-box;display:flex;position:relative;-webkit-box-pack:center;justify-content:center;margin-top:0;height:12rem;background-image:url("+c+");background-position:50%;background-size:contain;background-repeat:no-repeat}.value-text[data-v-4ffa5a92]{font-family:Bangers,cursive;font-size:2.5rem;color:#fdfdfd;position:absolute;top:4.7rem}p.default--white[data-v-4ffa5a92]{margin-top:1rem;font-size:1.5rem;font-weight:500}.range-tips[data-v-4ffa5a92]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;margin-bottom:1rem}.range-tips>p[data-v-4ffa5a92]{font-size:1.2rem;color:#fdfdfd}.default--white[data-v-4ffa5a92]{font-family:Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:1rem;color:#fdfdfd}.slidecontainer[data-v-4ffa5a92]{width:100%;margin-top:1rem}.slider[data-v-4ffa5a92]{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:1rem;outline:#000;-webkit-transition:.2s;-webkit-transition:opacity .2s;transition:opacity .2s;border-radius:1rem}",""])},384:function(t,e,n){"use strict";var r=n(314);n.n(r).a},385:function(t,e,n){var r=n(51);(t.exports=r(!1)).push([t.i,".container[data-v-315f8743]{margin:0 auto;min-height:100vh;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;background:-webkit-gradient(linear,left top,left bottom,from(#860034),to(#ba84a7));background:linear-gradient(#860034,#ba84a7);padding:0 2rem}nav>a[data-v-315f8743]{padding:1.5rem 0}.next-button-img[data-v-315f8743]{width:12rem;margin:0 auto}",""])},425:function(t,e,n){"use strict";n.r(e);n(69),n(34),n(25),n(13),n(53);var r=n(35),o=n(155),l=n.n(o),c=(n(156),n(54));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={data:function(){return{postStudieValue:0}},components:{RangeSlider:l.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["postDuration"])),methods:{postStudieHandler:function(){this.$store.dispatch("setPostDuration",12*this.postStudieValue)}}},h=(n(382),n(17)),m={components:{PostStudySlider:Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"slider-container"}},[n("h2",{staticClass:"intro-text"},[t._v("\n        Geef aan hoeveel jaar je nog verwacht te studeren.\n    ")]),t._v(" "),t._m(0),t._v(" "),n("range-slider",{staticClass:"slider",attrs:{min:"0",max:"10",step:"1"},on:{change:t.postStudieHandler},model:{value:t.postStudieValue,callback:function(e){t.postStudieValue=e},expression:"postStudieValue"}}),t._v(" "),n("div",{attrs:{id:"value-container"}},[n("p",{staticClass:"value-text"},[t._v(t._s(t.postStudieValue)+" jaar")])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"range-tips"},[e("p",[this._v("0")]),this._v(" "),e("p",[this._v("10")])])}],!1,null,"4ffa5a92",null).exports}},v=(n(384),Object(h.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("nav",[e("nuxt-link",{staticClass:"button--blank",attrs:{to:"/prev-duration"}},[e("img",{staticClass:"back-button-img",attrs:{src:n(151),alt:"back to previous page"}})])],1),this._v(" "),e("h1",[this._v("Hoelang verwacht je dat je nog studeert?")]),this._v(" "),e("PostStudySlider"),this._v(" "),e("div",{staticClass:"next-button-container"},[e("nuxt-link",{staticClass:"next-button",attrs:{to:"/debt-result"}},[e("img",{staticClass:"next-button-img",attrs:{src:n(152),alt:"next page button"}})])],1)],1)}),[],!1,null,"315f8743",null));e.default=v.exports}}]);