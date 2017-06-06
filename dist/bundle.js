var OverlapWatch=function(t){function e(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();t.exports=function(){function t(e,n){var r=this;o(this,t),"string"==typeof e?this.opts={elementA:document.querySelector(e)}:"object"==(void 0===e?"undefined":s(e))?this.opts=e:this.opts={},void 0!==n&&(this.opts.elementB=document.querySelector(n)),this.opts.hasOwnProperty("container")||(this.opts.container=window);var i=!this.opts.hasOwnProperty("log")||this.opts.log;return this.opts.elementA?this.opts.elementB?this.opts.container?(this.opts.container.addEventListener("scroll",function(){r.onScroll()}),void(this.opts.hasOwnProperty("class")||(this.opts.class="overlapping"))):void(i&&console.warn('Container "'+this.opts.container+'" undefined, cancelling overlap check.')):void(i&&console.warn('Second element "'+this.opts.elementB+'" undefined, cancelling overlap check.')):void(i&&console.warn('First element "'+this.opts.elementA+'" undefined, cancelling overlap check.'))}return r(t,[{key:"onScroll",value:function(){this.overlapping(this.opts.elementA,this.opts.elementB)?(this.opts.elementA.classList.add(this.opts.class),this.opts.elementB.classList.add(this.opts.class)):(this.opts.elementA.classList.remove(this.opts.class),this.opts.elementB.classList.remove(this.opts.class))}},{key:"overlapping",value:function(t,e){var n=t.getBoundingClientRect(),o=e.getBoundingClientRect();return!(n.left+n.width<o.left||o.left+o.width<n.left||n.top+n.height<o.top||o.top+o.height<n.top)}}]),t}()}]);
//# sourceMappingURL=bundle.js.map