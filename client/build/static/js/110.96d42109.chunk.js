"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[110],{6794:function(e,t,n){n.d(t,{Z:function(){return o}});n(2791);var s=n(6355),r=n(3495),i=n(1087),a=n(184),o=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("footer",{children:[(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsxs)("div",{className:"footer-links",children:[(0,a.jsx)("h3",{children:"Links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.OL,{to:"/",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.OL,{to:"/doctors",children:"Doctors"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.OL,{to:"/appointments",children:"Appointments"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.OL,{to:"/notifications",children:"Notifications"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.fO,{to:"/#contact",children:"Contact Us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.OL,{to:"/profile",children:"Profile"})})]})]}),(0,a.jsxs)("div",{className:"social",children:[(0,a.jsx)("h3",{children:"Social links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"facebook",children:(0,a.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(s.tBk,{})})}),(0,a.jsx)("li",{className:"youtube",children:(0,a.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(s.V2E,{})})}),(0,a.jsx)("li",{className:"instagram",children:(0,a.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(s.Zf_,{})})})]})]})]}),(0,a.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,a.jsx)("a",{href:"https://www.linkedin.com/in/dunna-avinash",target:"_blank",rel:"noreferrer",children:"Emerg-Alerts Team"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},6416:function(e,t,n){n.d(t,{Z:function(){return w}});var s=n(9439),r=n(2791),i=n(7689),a=n(1087),o=n(3495),l=n(9434),c=n(5318),u=n(3853),d=n(1213),h=n(456),p=n(4165),f=n(7762),m=n(5861),g=n(3263),x=n(4971),j=n(3402),v=n(5763),y=n(184),b=function(){var e=function(){var e=(0,m.Z)((0,p.Z)().mark((function e(){var t,n,s,r,i,a,o,l,c;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.get("https://api.pushbullet.com/v2/devices",{headers:{"Access-Token":"o.eSuBlqsOHngT2XrOmAHnLi59F6Cd1RtF"}});case 3:return t=e.sent,n=t.data.devices[0].iden,e.next=7,(0,x.Z)("/contacts/getallcontact");case 7:s=e.sent,(r=s.map((function(e){return e.contact}))).push("+9230184351377"),i="",a="",navigator.geolocation?navigator.geolocation.getCurrentPosition(function(){var e=(0,m.Z)((0,p.Z)().mark((function e(t){var s,o,l;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=t.coords.latitude,a=t.coords.longitude,s=(0,f.Z)(r),e.prev=3,s.s();case 5:if((o=s.n()).done){e.next=12;break}return l=o.value,e.next=9,g.Z.post("https://api.pushbullet.com/v2/ephemerals",{push:{conversation_iden:l,message:"This SMS is generated by your patient!\n\nPlease get back to him as soon as possible.\nThe Current Location is: https://www.google.com/maps/search/?api=1&query="+i+","+a,package_name:"com.pushbullet.android",source_user_iden:"o.eSuBlqsOHngT2XrOmAHnLi59F6Cd1RtF",target_device_iden:n,type:"messaging_extension_reply"},type:"push"},{headers:{"Access-Token":"o.eSuBlqsOHngT2XrOmAHnLi59F6Cd1RtF"}});case 9:console.log("This SMS is generated by your patient!\n\nPlease get back to him as soon as possible.\nThe Current Location is: https://www.google.com/maps/search/?api=1&query="+i+","+a);case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),s.e(e.t0);case 17:return e.prev=17,s.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[3,14,17,20]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.error("Error getting location:",e)})):console.error("Geolocation is not supported by this browser."),o=(0,f.Z)(r),e.prev=14,o.s();case 16:if((l=o.n()).done){e.next=23;break}return c=l.value,e.next=20,g.Z.post("https://api.pushbullet.com/v2/ephemerals",{push:{conversation_iden:c,message:"This SMS is generated by your patient!\n\nPlease get back to him as soon as possible.\nThe Current Location is: https://www.google.com/maps/search/?api=1&query="+i+","+a,package_name:"com.pushbullet.android",source_user_iden:"o.cle6FJjlNAczuBQ6i4c97313j2K15MOQ",target_device_iden:n,type:"messaging_extension_reply"},type:"push"},{headers:{"Access-Token":"o.cle6FJjlNAczuBQ6i4c97313j2K15MOQ"}});case 20:console.log("This SMS is generated by your patient!\n\nPlease get back to him as soon as possible.\nThe Current Location is: https://www.google.com/maps/search/?api=1&query="+i+","+a);case 21:e.next=16;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(14),o.e(e.t0);case 28:return e.prev=28,o.f(),e.finish(28);case 31:j.ZP.success("Alert Sent to the contacts"),e.next=38;break;case 34:e.prev=34,e.t1=e.catch(0),console.error("Error sending SMS:",e.t1),j.ZP.error("Not able to send SMS!");case 38:case"end":return e.stop()}}),e,null,[[0,34],[14,25,28,31]])})));return function(){return e.apply(this,arguments)}}();return(0,y.jsxs)("button",{onClick:e,className:"btn",children:[(0,y.jsx)(v.QdF,{})," Alert"]})},w=function(){var e=(0,r.useState)(!1),t=(0,s.Z)(e,2),n=t[0],p=t[1],f=(0,l.I0)(),m=(0,i.s0)(),g=(0,r.useState)(localStorage.getItem("token")||""),x=(0,s.Z)(g,2),j=x[0],v=(x[1],(0,r.useState)(localStorage.getItem("token")?(0,h.Z)(localStorage.getItem("token")):"")),w=(0,s.Z)(v,2),S=w[0];w[1];return(0,y.jsxs)("header",{children:[(0,y.jsxs)("nav",{className:n?"nav-active":"",children:[(0,y.jsx)("h2",{className:"nav-logo",children:(0,y.jsx)(a.OL,{to:"/",children:"Emerg-Alerts"})}),(0,y.jsxs)("ul",{className:"nav-links",children:[(0,y.jsx)("li",{children:(0,y.jsx)(a.OL,{to:"/doctors",children:"Doctors"})}),j&&S.isAdmin&&(0,y.jsx)("li",{children:(0,y.jsx)(a.OL,{to:"/dashboard/users",children:"Dashboard"})}),j&&!S.isAdmin&&!S.isDoctor&&(0,y.jsx)("li",{children:(0,y.jsx)(a.OL,{to:"/e-contacts",children:"Contacts"})}),j&&!S.isAdmin&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(a.OL,{to:"/appointments",children:"Appointments"})}),(0,y.jsx)("li",{children:(0,y.jsx)(a.OL,{to:"/notifications",children:"Notifications"})}),(0,y.jsx)("li",{children:(0,y.jsx)(a.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,y.jsx)("li",{children:(0,y.jsx)(o.fO,{to:"/#contact",children:"Feedback"})}),(0,y.jsx)("li",{children:(0,y.jsx)(a.OL,{to:"/profile",children:"Profile"})})]}),j?(0,y.jsx)("li",{children:(0,y.jsx)("span",{className:"btn",onClick:function(){f((0,c.ps)({})),localStorage.removeItem("token"),m("/login")},children:"Logout"})}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(a.OL,{className:"btn",to:"/login",children:"Login"})}),(0,y.jsx)("li",{children:(0,y.jsx)(a.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,y.jsxs)("div",{className:"menu-icons",children:[!n&&(0,y.jsx)(u.cur,{className:"menu-open",onClick:function(){p(!0)}}),n&&(0,y.jsx)(d.ySC,{className:"menu-close",onClick:function(){p(!1)}})]}),(0,y.jsx)("div",{className:"send-sms",children:(0,y.jsx)(b,{})})]})}},4890:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var s=n(2791),r=n(4165),i=n(5861),a=n(4942),o=n(1413),l=n(9439),c=(n(1062),n(3263)),u=n(3402),d=n(184),h=function(){var e=(0,s.useState)({name:"",email:"",message:""}),t=(0,l.Z)(e,2),n=t[0],h=t[1],p=function(e){var t=e.target,s=t.name,r=t.value;return h((0,o.Z)((0,o.Z)({},n),{},(0,a.Z)({},s,r)))},f=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,c.Z.post("/feedback/add",{name:n.name,email:n.email,feedback:n.message},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 5:s=e.sent,console.log(n),console.log(s),u.ZP.success("Contact added successfully"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error("Error adding contact:",e.t0),u.ZP.error("Unable to add contact");case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsx)("section",{className:"register-section flex-center",id:"contact",children:(0,d.jsxs)("div",{className:"contact-container flex-center contact",children:[(0,d.jsx)("h2",{className:"form-heading",children:"Feedback"}),(0,d.jsxs)("form",{className:"register-form ",children:[(0,d.jsx)("input",{type:"text",name:"name",className:"form-input",placeholder:"Enter your name",value:n.name,onChange:p}),(0,d.jsx)("input",{type:"email",name:"email",className:"form-input",placeholder:"Enter your email",value:n.email,onChange:p}),(0,d.jsx)("textarea",{type:"text",name:"message",className:"form-input",placeholder:"Enter your message",value:n.message,onChange:p,rows:"8",cols:"12"}),(0,d.jsx)("button",{type:"submit",className:"btn form-btn",onClick:f,children:"Send"})]})]})})},p=n.p+"static/media/aboutimg.af2db4b9f307d04f8745.jpg",f=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("section",{className:"container",children:[(0,d.jsx)("h2",{className:"page-heading about-heading",children:"About Us"}),(0,d.jsxs)("div",{className:"about",children:[(0,d.jsx)("div",{className:"hero-img",children:(0,d.jsx)("img",{src:p,alt:"hero"})}),(0,d.jsx)("div",{className:"hero-content",children:(0,d.jsx)("p",{children:"After all, our accessible emergency alert system is more than just a technological solution\u2014it\u2019s a lifeline for individuals with disabilities in times of crisis. By empowering them with timely and convenient information, we help ensure safety, security, and peace of mind in an emergency."})})]})]})})},m=n(6794),g=n.p+"static/media/heroimg.8bbd2437f7c9d842026c.jpg",x=function(){return(0,d.jsxs)("section",{className:"hero",children:[(0,d.jsxs)("div",{className:"hero-content",children:[(0,d.jsxs)("h1",{children:["Your Health, ",(0,d.jsx)("br",{}),"Our Responsibility"]}),(0,d.jsx)("p",{children:"Our platform is the promise to ensure that no one is left behind in an emergency. We recognize that individuals with disabilities often face unique challenges in accessing and also sending information in crises. That\u2019s why we developed a new solution that tackles these challenges head-on."})]}),(0,d.jsx)("div",{className:"hero-img",children:(0,d.jsx)("img",{src:g,alt:"hero"})})]})},j=n(6416),v=n(835),y=function(){return(0,d.jsxs)("section",{className:"container circles",children:[(0,d.jsxs)("div",{className:"circle",children:[(0,d.jsx)(v.ZP,{start:0,end:1e3,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var t=e.countUpRef;return(0,d.jsxs)("div",{className:"counter",children:[(0,d.jsx)("span",{ref:t}),"+"]})}}),(0,d.jsxs)("span",{className:"circle-name",children:["Satisfied",(0,d.jsx)("br",{}),"Patients"]})]}),(0,d.jsxs)("div",{className:"circle",children:[(0,d.jsx)(v.ZP,{start:0,end:250,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var t=e.countUpRef;return(0,d.jsxs)("div",{className:"counter",children:[(0,d.jsx)("span",{ref:t}),"+"]})}}),(0,d.jsxs)("span",{className:"circle-name",children:["Verified",(0,d.jsx)("br",{}),"Doctors"]})]}),(0,d.jsxs)("div",{className:"circle",children:[(0,d.jsx)(v.ZP,{start:0,end:75,delay:0,enableScrollSpy:!0,scrollSpyDelay:500,children:function(e){var t=e.countUpRef;return(0,d.jsxs)("div",{className:"counter",children:[(0,d.jsx)("span",{ref:t}),"+"]})}}),(0,d.jsxs)("span",{className:"circle-name",children:["Specialist",(0,d.jsx)("br",{}),"Doctors"]})]})]})},b=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j.Z,{}),(0,d.jsx)(x,{}),(0,d.jsx)(f,{}),(0,d.jsx)(y,{}),(0,d.jsx)(h,{}),(0,d.jsx)(m.Z,{})]})}},7340:function(e,t,n){n.r(t),n.d(t,{CountUp:function(){return r}});var s=function(){return(s=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=function(){function e(e,t,n){var r=this;this.endVal=t,this.options=n,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){r.startTime||(r.startTime=e);var t=e-r.startTime;r.remaining=r.duration-t,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(t,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(t,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(t/r.duration);var n=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=n?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),t<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.callback&&r.callback()},this.formatNumber=function(e){var t,n,s,i,a=e<0?"-":"";t=Math.abs(e).toFixed(r.options.decimalPlaces);var o=(t+="").split(".");if(n=o[0],s=o.length>1?r.options.decimal+o[1]:"",r.options.useGrouping){i="";for(var l=3,c=0,u=0,d=n.length;u<d;++u)r.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(i=r.options.separator+i),c++,i=n[d-u-1]+i;n=i}return r.options.numerals&&r.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return r.options.numerals[+e]})),s=s.replace(/[0-9]/g,(function(e){return r.options.numerals[+e]}))),a+r.options.prefix+n+s+r.options.suffix},this.easeOutExpo=function(e,t,n,s){return n*(1-Math.pow(2,-10*e/s))*1024/1023+t},this.options=s(s({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return r.handleScroll(r)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),s=n.top+window.pageYOffset,r=n.top+n.height+window.pageYOffset;r<t&&r>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>r||s>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);this.el&&("INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t)},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},835:function(e,t,n){var s=n(2791),r=n(7340);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!==typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?s.useLayoutEffect:s.useEffect;function d(e){var t=s.useRef(e);return u((function(){t.current=e})),s.useCallback((function(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return t.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],p={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},f=function(e){var t=s.useMemo((function(){return a(a({},p),e)}),[e]),n=t.ref,i=t.startOnMount,o=t.enableReinitialize,l=t.delay,u=t.onEnd,f=t.onStart,m=t.onPauseResume,g=t.onReset,x=t.onUpdate,j=c(t,h),v=s.useRef(),y=s.useRef(),b=s.useRef(!1),w=d((function(){return function(e,t){var n=t.decimal,s=t.decimals,i=t.duration,a=t.easingFn,o=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,h=t.start,p=t.suffix,f=t.useEasing,m=t.enableScrollSpy,g=t.scrollSpyDelay,x=t.scrollSpyOnce;return new r.CountUp(e,o,{startVal:h,duration:i,decimal:n,decimalPlaces:s,easingFn:a,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:p,useEasing:f,useGrouping:!!d,enableScrollSpy:m,scrollSpyDelay:g,scrollSpyOnce:x})}("string"===typeof n?n:n.current,j)})),S=d((function(e){var t=v.current;if(t&&!e)return t;var n=w();return v.current=n,n})),V=d((function(){var e=function(){return S(!0).start((function(){null===u||void 0===u||u({pauseResume:O,reset:N,start:k,update:E})}))};l&&l>0?y.current=setTimeout(e,1e3*l):e(),null===f||void 0===f||f({pauseResume:O,reset:N,update:E})})),O=d((function(){S().pauseResume(),null===m||void 0===m||m({reset:N,start:k,update:E})})),N=d((function(){S().el&&(y.current&&clearTimeout(y.current),S().reset(),null===g||void 0===g||g({pauseResume:O,start:k,update:E}))})),E=d((function(e){S().update(e),null===x||void 0===x||x({pauseResume:O,reset:N,start:k})})),k=d((function(){N(),V()})),F=d((function(e){i&&(e&&N(),V())}));return s.useEffect((function(){b.current?o&&F(!0):(b.current=!0,F())}),[o,b,F,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),s.useEffect((function(){return function(){N()}}),[N]),{start:k,pauseResume:O,reset:N,update:E,getCountUp:S}},m=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,r=e.containerProps,i=e.children,o=e.style,u=c(e,m),h=s.useRef(null),p=s.useRef(!1),g=f(a(a({},u),{},{ref:h,startOnMount:"function"!==typeof i||0===e.delay,enableReinitialize:!1})),x=g.start,j=g.reset,v=g.update,y=g.pauseResume,b=g.getCountUp,w=d((function(){x()})),S=d((function(t){e.preserveValue||j(),v(t)})),V=d((function(){"function"!==typeof e.children||h.current instanceof Element?b():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));s.useEffect((function(){V()}),[V]),s.useEffect((function(){p.current&&S(e.end)}),[e.end,S]);var O=n&&e;return s.useEffect((function(){n&&p.current&&w()}),[w,n,O]),s.useEffect((function(){!n&&p.current&&w()}),[w,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),s.useEffect((function(){p.current=!0}),[]),"function"===typeof i?i({countUpRef:h,start:x,reset:j,update:v,pauseResume:y,getCountUp:b}):s.createElement("span",l({className:t,ref:h,style:o},r),"undefined"!==typeof e.start?b().formattingFn(e.start):"")}},1062:function(){}}]);
//# sourceMappingURL=110.96d42109.chunk.js.map