parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pX43":[function(require,module,exports) {
var e=function(){var e=function(e,t,r,n){e=(e=e.split(/\r\n|\n/)).join("\r\n");var a=ICAL.parse(e),i=new ICAL.Component(a),o="",s="",l="";if(i.getAllSubcomponents("vevent").forEach(function(e){if(""==e.getFirstPropertyValue("dtstart")&&""==e.getFirstPropertyValue("summary"))return!1;var t=null,r=null,a=null;null!=e.getFirstPropertyValue("dtend")&&(t=ICAL.design.icalendar.value["date-time"].toICAL(e.getFirstPropertyValue("dtend")),r=(t=new Date(e.getFirstPropertyValue("dtend"))).getFullYear()+"-"+"0".concat(t.getMonth()+1).slice(-2)+"-"+"0".concat(t.getDate()).slice(-2),a="0".concat(t.getHours()).slice(-2)+":"+"0".concat(t.getMinutes()).slice(-2)+":"+"0".concat(t.getSeconds()).slice(-2),l=(l=(l=r+"T"+a).replace(/-/g,"")).replace(/:/g,""));var i=null,c=null,u=null,d=null;null!=e.getFirstPropertyValue("dtstart")&&(i=ICAL.design.icalendar.value["date-time"].toICAL(e.getFirstPropertyValue("dtstart")),d=(d=(d=(c=(i=new Date(e.getFirstPropertyValue("dtstart"))).getFullYear()+"-"+"0".concat(i.getMonth()+1).slice(-2)+"-"+"0".concat(i.getDate()).slice(-2))+"T"+(u="0".concat(i.getHours()).slice(-2)+":"+"0".concat(i.getMinutes()).slice(-2)+":"+"0".concat(i.getSeconds()).slice(-2))).replace(/-/g,"")).replace(/:/g,"")),multidayevent=!1,new Date(r).getTime()>new Date(c).getTime()&&(multidayevent=!0);var g=new Date(e.getFirstPropertyValue("last-modified")).getTime();u==a&&(u="",a=""),o="",s="";var f={BEGIN:"VEVENT",UID:e.getFirstPropertyValue("uid"),SUMMARY:e.getFirstPropertyValue("summary"),LOCATION:e.getFirstPropertyValue("location"),DESCRIPTION:e.getFirstPropertyValue("description"),ATTACH:e.getFirstPropertyValue("attach"),RRULE:function(){var t="";null!=e.getFirstPropertyValue("rrule")&&(t=e.getFirstPropertyValue("rrule").toString());return t}(),"LAST-MODIFIED":g,CLASS:"PRIVATE",DTSTAMP:d,DTSTART:d,DTEND:l,END:"VEVENT",dateStart:c,dateEnd:r,time_start:u,time_end:a,notification:" ",alarm:"none",isSubscription:n,multidayevent:multidayevent,rrule_:function(){var t="none";null!=e.getFirstPropertyValue("rrule")&&(t=e.getFirstPropertyValue("rrule").freq);return t}()};o=f.UID,s=f.date,events.push(f)}),r){var c=events.filter(function(e){return!1===e.isSubscription});localforage.setItem("events",c).then(function(e){helper.side_toaster("<img src='assets/image/E25C.svg'>",2500)}).catch(function(e){console.log(e)})}t(o,s),console.log("done")};return{export_ical:function(e,t){if(!navigator.getDeviceStorage)return!1;var r=navigator.getDeviceStorage("sdcard");r.delete(e).onsuccess=function(){},setTimeout(function(){var n="";n+="BEGIN:VCALENDAR\r\n",n+="VERSION:2.0\r\n",n+="PRODID:GREG\r\n",n+="METHOD:PUBLISHED\r\n",t.forEach(function(e){var t=-1;for(var r in e)0==++t&&(n+="BEGIN:VEVENT\r\n"),"BEGIN"!=r&&"END"!=r&&"date"!=r&&"time_start"!=r&&"time_end"!=r&&"dateStart"!=r&&"dateEnd"!=r&&"notification"!=r&&"alarm"!=r&&"isSubscription"!=r&&"multidayevent"!=r&&"alarmTrigger"!=r&&"rrule_"!=r&&(n+="".concat(r,":").concat(e[r])+"\r\n"),t==Object.keys(e).length-1&&(n+="END:VEVENT\r\n")}),n+="END:VCALENDAR\r\n";var a=new Blob([n],{type:"text/calendar"}),i=r.addNamed(a,e);i.onsuccess=function(){helper.side_toaster("<img src='assets/image/E25C.svg'>",2500)},i.onerror=function(){helper.toaster("Unable to write the file",2e3)}},2e3)},list_ics:function(){var e=[];helper.list_files("ics",function(t){e.push(t);var r=t.split("/");if("greg.ics"==(r=r[r.length-1]))return!1;document.querySelector("div#options div#import-text").insertAdjacentHTML("afterend",'<button class="item dynamic" data-function="import" data-filename="'+t+'">'+r+"</button>")})},loadICS:function(t,r){var n=navigator.getDeviceStorage("sdcard").get(t);n.onsuccess=function(){var t=this.result,n=new FileReader;n.onerror=function(e){helper.toaster("can't read file",3e3),n.abort()},n.onloadend=function(t){e(t.target.result,r,!0,!1)},n.readAsText(t)},n.onerror=function(){console.warn("Unable to get the file: "+this.error)}},share:function(e,t){var r=new MozActivity({name:"share",data:{type:"text/calendar",number:1,blobs:[e],filenames:[t]}});r.onsuccess=function(){},r.onerror=function(){}},fetch_ics:function(t,r){var n=new XMLHttpRequest({mozSystem:!0});n.open("GET",t+"?time="+(new Date).getTime(),!0),n.timeout=25e3,n.onload=function(){if(n.readyState===n.DONE&&200===n.status){var t=n.response;e(t,r,!1,!0)}},n.onerror=function(){helper.toaster("subscription could not be loaded",2e3)},n.send(null)}}}();
},{}]},{},["pX43"], null)
//# sourceMappingURL=eximport.42ada856.js.map