"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[702],{6794:function(e,n,s){s.d(n,{Z:function(){return c}});s(2791);var t=s(6355),r=s(3495),o=s(1087),a=s(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("footer",{children:[(0,a.jsxs)("div",{className:"footer",children:[(0,a.jsxs)("div",{className:"footer-links",children:[(0,a.jsx)("h3",{children:"Links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(o.OL,{to:"/",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o.OL,{to:"/doctors",children:"Doctors"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o.OL,{to:"/appointments",children:"Appointments"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o.OL,{to:"/notifications",children:"Notifications"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.fO,{to:"/#contact",children:"Contact Us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o.OL,{to:"/profile",children:"Profile"})})]})]}),(0,a.jsxs)("div",{className:"social",children:[(0,a.jsx)("h3",{children:"Social links"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"facebook",children:(0,a.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(t.tBk,{})})}),(0,a.jsx)("li",{className:"youtube",children:(0,a.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(t.V2E,{})})}),(0,a.jsx)("li",{className:"instagram",children:(0,a.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)(t.Zf_,{})})})]})]})]}),(0,a.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,a.jsx)("a",{href:"https://www.linkedin.com/in/dunna-avinash",target:"_blank",rel:"noreferrer",children:"Emerg-Alerts Team"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},6416:function(e,n,s){s.d(n,{Z:function(){return y}});var t=s(9439),r=s(2791),o=s(7689),a=s(1087),c=s(3495),i=s(9434),l=s(5318),u=s(3853),h=s(1213),d=s(456),p=s(4165),m=s(7762),x=s(5861),f=s(3263),j=s(4971),g=s(3402),b=s(5763),v=s(184),k=function(){var e=function(){var e=(0,x.Z)((0,p.Z)().mark((function e(){var n,s,t,r,o,a,c,i,l;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.get("https://api.pushbullet.com/v2/devices",{headers:{"Access-Token":"o.eSuBlqsOHngT2XrOmAHnLi59F6Cd1RtF"}});case 3:return n=e.sent,s=n.data.devices[0].iden,e.next=7,(0,j.Z)("/contacts/getallcontact");case 7:t=e.sent,(r=t.map((function(e){return e.contact}))).push("+9230184351377"),o="",a="",navigator.geolocation?navigator.geolocation.getCurrentPosition(function(){var e=(0,x.Z)((0,p.Z)().mark((function e(n){var t,c,i;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=n.coords.latitude,a=n.coords.longitude,t=(0,m.Z)(r),e.prev=3,t.s();case 5:if((c=t.n()).done){e.next=12;break}return i=c.value,e.next=9,f.Z.post("https://api.pushbullet.com/v2/ephemerals",{push:{conversation_iden:i,message:"This SMS is generated by your patient!\n\nPlease get back to him as soon as possible.\nThe Current Location is: https://www.google.com/maps/search/?api=1&query="+o+","+a,package_name:"com.pushbullet.android",source_user_iden:"o.eSuBlqsOHngT2XrOmAHnLi59F6Cd1RtF",target_device_iden:s,type:"messaging_extension_reply"},type:"push"},{headers:{"Access-Token":"o.eSuBlqsOHngT2XrOmAHnLi59F6Cd1RtF"}});case 9:console.log("This SMS is generated by your patient!\n\nPlease get back to him as soon as possible.\nThe Current Location is: https://www.google.com/maps/search/?api=1&query="+o+","+a);case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),t.e(e.t0);case 17:return e.prev=17,t.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[3,14,17,20]])})));return function(n){return e.apply(this,arguments)}}(),(function(e){console.error("Error getting location:",e)})):console.error("Geolocation is not supported by this browser."),c=(0,m.Z)(r),e.prev=14,c.s();case 16:if((i=c.n()).done){e.next=23;break}return l=i.value,e.next=20,f.Z.post("https://api.pushbullet.com/v2/ephemerals",{push:{conversation_iden:l,message:"This SMS is generated by your patient!\n\nPlease get back to him as soon as possible.\nThe Current Location is: https://www.google.com/maps/search/?api=1&query="+o+","+a,package_name:"com.pushbullet.android",source_user_iden:"o.cle6FJjlNAczuBQ6i4c97313j2K15MOQ",target_device_iden:s,type:"messaging_extension_reply"},type:"push"},{headers:{"Access-Token":"o.cle6FJjlNAczuBQ6i4c97313j2K15MOQ"}});case 20:console.log("This SMS is generated by your patient!\n\nPlease get back to him as soon as possible.\nThe Current Location is: https://www.google.com/maps/search/?api=1&query="+o+","+a);case 21:e.next=16;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(14),c.e(e.t0);case 28:return e.prev=28,c.f(),e.finish(28);case 31:g.ZP.success("Alert Sent to the contacts"),e.next=38;break;case 34:e.prev=34,e.t1=e.catch(0),console.error("Error sending SMS:",e.t1),g.ZP.error("Not able to send SMS!");case 38:case"end":return e.stop()}}),e,null,[[0,34],[14,25,28,31]])})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)("button",{onClick:e,className:"btn",children:[(0,v.jsx)(b.QdF,{})," Alert"]})},y=function(){var e=(0,r.useState)(!1),n=(0,t.Z)(e,2),s=n[0],p=n[1],m=(0,i.I0)(),x=(0,o.s0)(),f=(0,r.useState)(localStorage.getItem("token")||""),j=(0,t.Z)(f,2),g=j[0],b=(j[1],(0,r.useState)(localStorage.getItem("token")?(0,d.Z)(localStorage.getItem("token")):"")),y=(0,t.Z)(b,2),w=y[0];y[1];return(0,v.jsxs)("header",{children:[(0,v.jsxs)("nav",{className:s?"nav-active":"",children:[(0,v.jsx)("h2",{className:"nav-logo",children:(0,v.jsx)(a.OL,{to:"/",children:"Emerg-Alerts"})}),(0,v.jsxs)("ul",{className:"nav-links",children:[(0,v.jsx)("li",{children:(0,v.jsx)(a.OL,{to:"/doctors",children:"Doctors"})}),g&&w.isAdmin&&(0,v.jsx)("li",{children:(0,v.jsx)(a.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!w.isAdmin&&!w.isDoctor&&(0,v.jsx)("li",{children:(0,v.jsx)(a.OL,{to:"/e-contacts",children:"Contacts"})}),g&&!w.isAdmin&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("li",{children:(0,v.jsx)(a.OL,{to:"/appointments",children:"Appointments"})}),(0,v.jsx)("li",{children:(0,v.jsx)(a.OL,{to:"/notifications",children:"Notifications"})}),(0,v.jsx)("li",{children:(0,v.jsx)(a.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,v.jsx)("li",{children:(0,v.jsx)(c.fO,{to:"/#contact",children:"Feedback"})}),(0,v.jsx)("li",{children:(0,v.jsx)(a.OL,{to:"/profile",children:"Profile"})})]}),g?(0,v.jsx)("li",{children:(0,v.jsx)("span",{className:"btn",onClick:function(){m((0,l.ps)({})),localStorage.removeItem("token"),x("/login")},children:"Logout"})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("li",{children:(0,v.jsx)(a.OL,{className:"btn",to:"/login",children:"Login"})}),(0,v.jsx)("li",{children:(0,v.jsx)(a.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,v.jsxs)("div",{className:"menu-icons",children:[!s&&(0,v.jsx)(u.cur,{className:"menu-open",onClick:function(){p(!0)}}),s&&(0,v.jsx)(h.ySC,{className:"menu-close",onClick:function(){p(!1)}})]}),(0,v.jsx)("div",{className:"send-sms",children:(0,v.jsx)(k,{})})]})}},3702:function(e,n,s){s.r(n);var t=s(4165),r=s(5861),o=s(4942),a=s(1413),c=s(9439),i=s(2791),l=(s(1062),s(3263)),u=s(3402),h=s(7689),d=s(6416),p=s(6794),m=s(184);l.Z.defaults.baseURL="http://localhost:5000/api";n.default=function(){var e=(0,h.s0)(),n=(0,i.useState)({specialization:"",experience:"",fees:""}),s=(0,c.Z)(n,2),x=s[0],f=s[1],j=function(e){var n=e.target,s=n.name,t=n.value;return f((0,a.Z)((0,a.Z)({},x),{},(0,o.Z)({},s,t)))},g=function(){var n=(0,r.Z)((0,t.Z)().mark((function n(s){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.preventDefault(),n.prev=1,n.next=4,u.ZP.promise(l.Z.post("/doctor/applyfordoctor",{formDetails:x},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Doctor application sent successfully",error:"Unable to send Doctor application",loading:"Sending doctor application..."});case 4:e("/"),n.next=10;break;case 7:return n.prev=7,n.t0=n.catch(1),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.Z,{}),(0,m.jsx)("section",{className:"register-section flex-center apply-doctor",id:"contact",children:(0,m.jsxs)("div",{className:"register-container flex-center contact",children:[(0,m.jsx)("h2",{className:"form-heading",children:"Apply for Doctor"}),(0,m.jsxs)("form",{className:"register-form ",children:[(0,m.jsx)("input",{type:"text",name:"specialization",className:"form-input",placeholder:"Enter your specialization",value:x.specialization,onChange:j}),(0,m.jsx)("input",{type:"number",name:"experience",className:"form-input",placeholder:"Enter your experience (in years)",value:x.experience,onChange:j}),(0,m.jsx)("input",{type:"number",name:"fees",className:"form-input",placeholder:"Enter your fees  (in dollars)",value:x.fees,onChange:j}),(0,m.jsx)("button",{type:"submit",className:"btn form-btn",onClick:g,children:"apply"})]})]})}),(0,m.jsx)(p.Z,{})]})}},1062:function(){}}]);
//# sourceMappingURL=702.d34bb664.chunk.js.map