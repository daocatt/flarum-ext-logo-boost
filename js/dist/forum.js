(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const e=flarum.core.compat["forum/app"];var r=t.n(e);function n(t,o){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},n(t,o)}const a=flarum.core.compat["common/Component"];var u=t.n(a);const i=flarum.core.compat["common/utils/isObject"];var c=t.n(i),l=function(t){var o,e;function a(){return t.apply(this,arguments)||this}e=t,(o=a).prototype=Object.create(e.prototype),o.prototype.constructor=o,n(o,e);var u=a.prototype;return u.view=function(){if(this.isForum()&&r().forum.attribute("gtdxyz-logo-boost-displayUrl"))return m("[",null,m("img",{onmouseenter:function(){$(this).attr("dataSrc",$(this).attr("src")),$(this).attr("src",$(this).attr("dataSwitch"))},onmouseleave:function(){$(this).attr("src",$(this).attr("dataSrc"))},dataSwitch:r().forum.attribute("gtdxyz-logo-boost-switchUrl"),src:r().forum.attribute("gtdxyz-logo-boost-displayUrl"),alt:r().forum.attribute("title"),class:"Header-logo"}))},u.isForum=function(){return!!c()(r().forum)},a}(u());r().initializers.add("gtdxyz/flarum-ext-logo-boost",(function(){m.mount(document.getElementById("home-link"),{view:function(){return m(l,null)}}),document.getElementById("home-link").addEventListener("click",(function(t){t.ctrlKey||t.metaKey||1===t.button||t.preventDefault()}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map