!function(n){function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=n,e.c=r,e.i=function(n){return n},e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1139)}({10:function(n,e){function r(n,e){var r=n[1]||"",o=n[3];if(!o)return r;if(e&&"function"==typeof btoa){var i=t(o);return[r].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[r].join("\n")}function t(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=r(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(t[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&t[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},11:function(n,e,r){n.exports=r(2)(375)},1139:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r(53),o=r.n(t),i=r(927);o.a.module("test",[i.a])},12:function(n,e,r){n.exports=r(2)(250)},13:function(n,e,r){n.exports=r(2)(363)},14:function(n,e,r){e=n.exports=r(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-icon-secondary-color: #999;\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #1f2326;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #1f2326;\n  --ring-heading-color: var(--ring-text-color);\n  --ring-secondary-color: #737577;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #999;\n  --ring-dark-disabled-color: #444;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-popup-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n  --ring-tag-background-color: #e6ecf2;\n\n  /* Code */\n  --ring-code-background-color: #fff;\n  --ring-code-background-color: var(--ring-content-background-color);\n  --ring-code-color: #000;\n  --ring-code-comment-color: #808080;\n  --ring-code-meta-color: #808000;\n  --ring-code-keyword-color: #000080;\n  --ring-code-tag-background-color: #efefef;\n  --ring-code-tag-color: #000080;\n  --ring-code-tag-color: var(--ring-code-keyword-color);\n  --ring-code-tag-font-weight: bold;\n  --ring-code-field-color: #660e7a;\n  --ring-code-attribute-color: #00f;\n  --ring-code-number-color: #00f;\n  --ring-code-number-color: var(--ring-code-attribute-color);\n  --ring-code-string-color: #008000;\n  --ring-code-addition-color: #aadeaa;\n  --ring-code-deletion-color: #c8c8c8;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,r){function t(n,e){for(var r=0;r<n.length;r++){var t=n[r],o=g[t.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](t.parts[i]);for(;i<t.parts.length;i++)o.parts.push(f(t.parts[i],e))}else{for(var a=[],i=0;i<t.parts.length;i++)a.push(f(t.parts[i],e));g[t.id]={id:t.id,refs:1,parts:a}}}}function o(n,e){for(var r=[],t={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c=i[1],l=i[2],s=i[3],u={css:c,media:l,sourceMap:s};t[a]?t[a].parts.push(u):r.push(t[a]={id:a,parts:[u]})}return r}function i(n,e){var r=y(n.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=x[x.length-1];if("top"===n.insertAt)t?t.nextSibling?r.insertBefore(e,t.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),x.push(e);else if("bottom"===n.insertAt)r.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=y(n.insertAt.before,r);r.insertBefore(e,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=x.indexOf(n);e>=0&&x.splice(e,1)}function c(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=u();r&&(n.attrs.nonce=r)}return s(e,n.attrs),i(n,e),e}function l(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",s(e,n.attrs),i(n,e),e}function s(n,e){Object.keys(e).forEach(function(r){n.setAttribute(r,e[r])})}function u(){return r.nc}function f(n,e){var r,t,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var s=w++;r=v||(v=c(e)),t=p.bind(null,r,s,!1),o=p.bind(null,r,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=l(e),t=b.bind(null,r,e),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=c(e),t=d.bind(null,r),o=function(){a(r)});return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}function p(n,e,r,t){var o=r?"":t.css;if(n.styleSheet)n.styleSheet.cssText=k(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e){var r=e.css,t=e.media;if(t&&n.setAttribute("media",t),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}function b(n,e,r){var t=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(t=_(t)),o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var g={},h=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,e){return e?e.querySelector(n):document.querySelector(n)},y=function(n){var e={};return function(n,r){if("function"==typeof n)return n();if(void 0===e[n]){var t=m.call(this,n,r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),v=null,w=0,x=[],_=r(65);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=o(n,e);return t(r,e),function(n){for(var i=[],a=0;a<r.length;a++){var c=r[a],l=g[c.id];l.refs--,i.push(l)}n&&t(o(n,e),e);for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete g[l.id]}}}};var k=function(){var n=[];return function(e,r){return n[e]=r,n.filter(Boolean).join("\n")}}()},19:function(n,e,r){n.exports=r(2)(332)},2:function(n,e){n.exports=vendor_lib},20:function(n,e,r){n.exports=r(2)(253)},24:function(n,e,r){n.exports=r(2)(415)},3:function(n,e,r){n.exports=r(2)(425)},4:function(n,e,r){n.exports=r(2)(446)},404:function(n,e,r){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function i(n,e,r){return e&&o(n.prototype,e),r&&o(n,r),n}function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}r.d(e,"a",function(){return l});var c=r(7),l=(r.n(c),function(){function n(){for(var e=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];t(this,n),a(this,"$inject",{}),this.constructor.$inject.forEach(function(n,r){e.$inject[n]=o[r]})}return i(n,null,[{key:"controller",get:function(){return this}}]),n}());a(l,"$inject",[])},44:function(n,e,r){"use strict";function t(n){n&&n.element&&n.currentTheme&&(n.prevTheme&&n.element.classList.remove(n.prevTheme),n.element.classList.add(n.currentTheme))}r.d(e,"b",function(){return t});var o={LIGHT:"light",DARK:"dark"};e.a=o},488:function(n,e,r){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function i(n,e,r){return e&&o(n.prototype,e),r&&o(n,r),n}function a(n,e){return!e||"object"!==p(e)&&"function"!=typeof e?c(n):e}function c(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&u(n,e)}function u(n,e){return(u=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function f(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function p(n){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function d(n){return"rg".concat(n)}function b(n,e){var o,c,u=Object.keys(n.propTypes),p={};return u.forEach(function(n){p[n]="<"}),c=o=function(e){function o(){return t(this,o),a(this,l(o).apply(this,arguments))}return s(o,e),i(o,[{key:"$postLink",value:function(){var n=this;(0,this.$inject.$transclude)(function(e){n.innerNodes=Array.from(e),n.render()})}},{key:"$onChanges",value:function(){this.innerNodes&&this.render()}},{key:"$onDestroy",value:function(){r.i(C.unmountComponentAtNode)(this.$inject.$element[0])}},{key:"render",value:function(){var e=this,t=this.$inject,o=t.$scope,i=t.$element[0],a={};u.forEach(function(n){void 0!==e[n]&&("function"==typeof e[n]?a[n]=function(){var r=e[n].apply(e,arguments);return o.$applyAsync(),r}:a[n]=e[n])});var c=this.innerNodes&&this.innerNodes.length;r.i(C.render)(E.a.createElement(n,a,c?E.a.createElement(T.a,{nodes:this.innerNodes}):null),i)}}]),o}(N.a),f(o,"$inject",["$scope","$element","$transclude"]),f(o,"bindings",p),f(o,"transclude",!0),c}function g(n,e){var r="Ring.".concat(e[0].toLowerCase()+e.slice(1));return j.a.module(r,[]).component(d(e),b(n,e))}r.d(e,"a",function(){return b});var h=r(4),m=(r.n(h),r(3)),y=(r.n(m),r(24)),v=(r.n(y),r(63)),w=(r.n(v),r(490)),x=(r.n(w),r(9)),_=(r.n(x),r(11)),k=(r.n(_),r(7)),O=(r.n(k),r(53)),j=r.n(O),S=r(5),E=r.n(S),C=r(20),N=(r.n(C),r(404)),T=r(489);e.b=g},489:function(n,e,r){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function a(n,e,r){return e&&i(n.prototype,e),r&&i(n,r),n}function c(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?f(n):e}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&u(n,e)}function u(n,e){return(u=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function f(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function p(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}r.d(e,"a",function(){return w});var d=r(4),b=(r.n(d),r(3)),g=(r.n(b),r(7)),h=(r.n(g),r(5)),m=r.n(h),y=r(8),v=r.n(y),w=function(n){function e(){var n,r;o(this,e);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return r=c(this,(n=l(e)).call.apply(n,[this].concat(i))),p(f(f(r)),"nodeRef",function(n){r.node=n}),r}return s(e,n),a(e,[{key:"componentDidMount",value:function(){var n=this.props.nodes;if(this.node&&n&&n.length){var e=document.createDocumentFragment();n.forEach(function(n){return e.appendChild(n)}),this.node.appendChild(e)}}},{key:"render",value:function(){var n=this.props.className;return m.a.createElement("div",{className:n,ref:this.nodeRef})}}]),e}(h.Component);p(w,"propTypes",{className:v.a.string,nodes:v.a.array})},490:function(n,e,r){n.exports=r(2)(372)},5:function(n,e,r){n.exports=r(2)(59)},53:function(n,e,r){n.exports=r(2)(249)},6:function(n,e,r){e=n.exports=r(10)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},63:function(n,e,r){n.exports=r(2)(312)},643:function(n,e,r){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},o.apply(this,arguments)}function i(n,e){if(null==n)return{};var r,t,o=a(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function a(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}function c(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function l(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function s(n,e,r){return e&&l(n.prototype,e),r&&l(n,r),n}function u(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?f(n):e}function f(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&b(n,e)}function b(n,e){return(b=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function g(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}r.d(e,"a",function(){return L});var h=r(4),m=(r.n(h),r(3)),y=(r.n(m),r(13)),v=(r.n(y),r(7)),w=(r.n(v),r(9)),x=(r.n(w),r(11)),_=(r.n(x),r(5)),k=r.n(_),O=r(8),j=r.n(O),S=r(12),E=r.n(S),C=r(44),N=r(768),T=r.n(N),L=function(n){function e(){return c(this,e),u(this,p(e).apply(this,arguments))}return d(e,n),s(e,[{key:"render",value:function(){var n=this.props,e=n.className,r=n.children,t=n.disabled,a=n.pale,c=n.title,l=n.leftLabel,s=n.theme,u=n.onTransitionEnd,f=i(n,["className","children","disabled","pale","title","leftLabel","theme","onTransitionEnd"]),p=E()(e,T.a.toggle,T.a[s],t&&T.a.disabled);return k.a.createElement("label",{className:p,title:c},l&&k.a.createElement("span",{className:T.a.leftLabel},l),k.a.createElement("span",{className:T.a.switchWrapper},k.a.createElement("input",o({},f,{type:"checkbox",disabled:t,className:T.a.input})),k.a.createElement("span",{className:E()(T.a.switch,a&&T.a.paleSwitch),onTransitionEnd:u})),r&&k.a.createElement("span",{className:T.a.label},r))}}]),e}(_.PureComponent);g(L,"propTypes",{children:j.a.node,name:j.a.string,className:j.a.string,title:j.a.string,leftLabel:j.a.string,defaultChecked:j.a.bool,checked:j.a.bool,disabled:j.a.bool,pale:j.a.bool,onChange:j.a.func,onTransitionEnd:j.a.func,theme:j.a.string}),g(L,"defaultProps",{theme:C.a.LIGHT})},65:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=e.protocol+"//"+e.host,t=r+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:t+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},694:function(n,e,r){e=n.exports=r(10)(!1),e.i(r(14),""),e.i(r(6),void 0),e.push([n.i,'.toggle_9b0 {\n  cursor: pointer\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.toggle_9b0:hover .switch_acb {\n    background-color: #80c6ff;\n    background-color: var(--ring-border-hover-color);\n}}\n\n.toggle_9b0.disabled_a57 {\n  pointer-events: none;\n}\n\n.label_505 {\n  margin-left: 4px;\n}\n\n.leftLabel_422 {\n  margin-right: 4px;\n}\n\n.light_253 .switch_acb {\n  background-color: #b8d1e5;\n  background-color: var(--ring-icon-color)\n}\n\n.light_253 .switch_acb::before {\n  background-color: #fff;\n  background-color: var(--ring-content-background-color);\n}\n\n.dark_3d4 .switch_acb {\n  background-color: #406380;\n  background-color: var(--ring-hint-color)\n}\n\n.dark_3d4 .switch_acb::before {\n  background-color: #000;\n  background-color: var(--ring-navigation-background-color);\n}\n\n.switchWrapper_3c3 {\n  position: relative;\n\n  display: inline-block;\n\n  width: 24px;\n  height: 16px;\n\n  vertical-align: -3px;\n}\n\n.input_b2e {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  margin: 0;\n\n  opacity: 0;\n}\n\n.switch_acb {\n  position: relative;\n\n  display: block;\n\n  width: 100%;\n  height: 100%;\n\n  transition: background-color cubic-bezier(0.23, 1, 0.32, 1) 300ms;\n\n  border-radius: 8px\n}\n\n.input_b2e:focus + .switch_acb{\n  box-shadow: inset 0 0 0 1px #80c6ff, 0 0 0 1px #80c6ff;\n  box-shadow: inset 0 0 0 1px var(--ring-border-hover-color), 0 0 0 1px var(--ring-border-hover-color);\n}\n\n.switch_acb::before {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  content: "";\n  transition: transform cubic-bezier(0.23, 1, 0.32, 1) 300ms;\n  transform: translateX(2px);\n  border-radius: 6px;\n}\n\n.input_b2e:checked + .switch_acb {\n  background-color: #008eff;\n  background-color: var(--ring-main-color);\n}\n\n.input_b2e:checked + ::before {\n  transform: translateX(10px);\n}\n\n.input_b2e[disabled] + ::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  content: "";\n\n  border-radius: 8px;\n  background-image:\n    linear-gradient(\n      45deg,\n      transparent,\n      transparent 37.5%,\n      rgba(255, 255, 255, .9) 37.5%,\n      rgba(255, 255, 255, .9) 50%,\n      transparent 50%,\n      transparent 87.5%,\n      rgba(255, 255, 255, .9) 87.5%,\n      rgba(255, 255, 255, .9)\n    );\n  background-repeat: repeat;\n  background-size: 4px 4px;\n}\n\n.paleSwitch_e89.paleSwitch_e89 {\n  background-color: #cfdbe5;\n  background-color: var(--ring-pale-control-color);\n}\n\n.input_b2e:checked + .paleSwitch_e89 {\n  background-color: #80c6ff;\n  background-color: var(--ring-border-hover-color);\n}\n',""]),e.locals={unit:""+r(6).locals.unit,padding:"2px","disabled-line-color":"rgba(255, 255, 255, 0.9)",duration:"300ms","timing-function":"cubic-bezier(0.23, 1, 0.32, 1)",toggle:"toggle_9b0",switch:"switch_acb",disabled:"disabled_a57",label:"label_505",leftLabel:"leftLabel_422",light:"light_253",dark:"dark_3d4",switchWrapper:"switchWrapper_3c3",input:"input_b2e",paleSwitch:"paleSwitch_e89"}},7:function(n,e,r){n.exports=r(2)(447)},768:function(n,e,r){var t=r(694);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,r(15)(t,o),t.locals&&(n.exports=t.locals)},8:function(n,e,r){n.exports=r(2)(89)},9:function(n,e,r){n.exports=r(2)(87)},927:function(n,e,r){"use strict";var t=r(19),o=(r.n(t),r(488)),i=r(643);e.a=r.i(o.b)(i.a,"Toggle").name}});