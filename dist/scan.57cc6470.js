parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Wsof":[function(require,module,exports) {
var e=function(e){var t,a,o=function(){t.srcObject.getTracks().forEach(function(e){e.stop(),document.getElementById("qr-screen").style.display="none"}),t.srcObject=null,status.views="subscription",helper.bottom_bar("QR","save","chancel")};return{start_scan:function(e){status.view="scan",document.getElementById("qr-screen").style.display="block",navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia?navigator.getUserMedia({audio:!1,video:{width:200,height:200}},function(n){(t=document.querySelector("video")).srcObject=n,t.onloadedmetadata=function(n){t.play();var r=document.createElement("canvas");a=setInterval(function(){r.width=t.videoWidth,r.height=t.videoHeight;var n=r.getContext("2d"),i=Math.max(1,Math.floor(t.videoWidth)),s=Math.max(1,Math.floor(t.videoHeight));n.drawImage(t,0,0,i,s);var c=n.getImageData(0,0,i,s).data,d=jsQR(c,i,s);console.log(d),d&&(o(),e(d.data),status.view="subscription",clearInterval(a))},1e3)}},function(e){console.log("The following error occurred: "+e.name)}):console.log("getUserMedia not supported")},stop_scan:o}}();
},{}]},{},["Wsof"], null)
//# sourceMappingURL=scan.57cc6470.js.map