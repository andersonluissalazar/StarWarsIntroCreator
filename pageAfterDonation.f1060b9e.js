parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"NWk5":[function(require,module,exports) {
"use strict";function e(){window.dataLayer.push(arguments)}Object.defineProperty(exports,"__esModule",{value:!0}),window.dataLayer=window.dataLayer||[];var a="UA-116931857-1",t=!0;t&&(e("js",new Date),e("config",a));var n=exports.sendGAPageView=function(){t&&e("event","page_view",{page_path:""+window.location.pathname+window.location.search+window.location.hash})},o=exports.setGAUser=function(a){e("set",{user_id:a})};
},{}],"uf6T":[function(require,module,exports) {
"use strict";require("./googleanalytics");
},{"./googleanalytics":"NWk5"}]},{},["uf6T"], null)
//# sourceMappingURL=/pageAfterDonation.f1060b9e.map