(()=>{"use strict";var n,r,e,t={462:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(15),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    outline: none;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-color: cadetblue;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 100vh;\r\n    width: 100vw;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.container {\r\n    background-color: #fff;\r\n    border-radius: 30px;\r\n    padding: 20px;\r\n    width: 700px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.cpf {\r\n    color: rgb(140, 230, 140);\r\n    font-size: 2.5em;\r\n    font-weight: bold;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.generate {\r\n    background-color: cadetblue;\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-size: 1.2em;\r\n    font-weight: 700;\r\n    padding: 10px;\r\n    text-align: left;\r\n}\r\n\r\n.generate:hover {\r\n    background-color: rgb(49, 122, 124);\r\n}\r\n","",{version:3,sources:["webpack://./public/css/style.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,yCAAyC;IACzC,aAAa;IACb,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,mCAAmC;AACvC",sourcesContent:["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    outline: none;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-color: cadetblue;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: 100vh;\r\n    width: 100vw;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.container {\r\n    background-color: #fff;\r\n    border-radius: 30px;\r\n    padding: 20px;\r\n    width: 700px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.cpf {\r\n    color: rgb(140, 230, 140);\r\n    font-size: 2.5em;\r\n    font-weight: bold;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.generate {\r\n    background-color: cadetblue;\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-size: 1.2em;\r\n    font-weight: 700;\r\n    padding: 10px;\r\n    text-align: left;\r\n}\r\n\r\n.generate:hover {\r\n    background-color: rgb(49, 122, 124);\r\n}\r\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},15:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,o=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],t=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(t=(a=c.next()).done)&&(e.push(a.value),!r||e.length!==r);t=!0);}catch(n){o=!0,i=n}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return e}}(e,t)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(l).concat([u]).join("\n")}return[i].join("\n")}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function a(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],o=0;o<n.length;o++){var c=n[o],s=r.base?c[0]+r.base:c[0],u=e[s]||0,l="".concat(s," ").concat(u);e[s]=u+1;var A=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==A?(i[A].references++,i[A].updater(f)):i.push({identifier:l,updater:b(f,r),references:1}),t.push(l)}return t}function s(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var u,l=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function A(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function f(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var d=null,p=0;function b(n,r){var e,t,o;if(r.singleton){var i=p++;e=d||(d=s(r)),t=A.bind(null,e,i,!1),o=A.bind(null,e,i,!0)}else e=s(r),t=f.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var s=c(n,r),u=0;u<e.length;u++){var l=a(e[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=s}}}}},o={};function i(n){var r=o[n];if(void 0!==r)return r.exports;var e=o[n]={id:n,exports:{}};return t[n](e,e.exports,i),e.exports}i.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return i.d(r,{a:r}),r},i.d=(n,r)=>{for(var e in r)i.o(r,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},i.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),n=i(379),r=i.n(n),e=i(462),r()(e.Z,{insert:"head",singleton:!1}),e.Z.locals})();
//# sourceMappingURL=bundle.js.map