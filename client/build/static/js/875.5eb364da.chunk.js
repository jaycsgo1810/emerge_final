"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[875,5],{3321:function(e,n,t){t(2791);var r=t(184);n.Z=function(){return(0,r.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},1005:function(e,n,t){t.r(n);var r=t(4165),i=t(5861),s=t(9439),l=t(2791),c=(t(3402),t(3200)),o=t(5318),d=t(9434),a=t(3321),u=t(4971),h=t(9408),v=t(184);n.default=function(){var e=(0,l.useState)([]),n=(0,s.Z)(e,2),t=n[0],x=n[1],p=(0,d.I0)(),j=(0,d.v9)((function(e){return e.root})).loading,m=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p((0,o.K4)(!0)),e.next=4,(0,u.Z)("/feedback/getallfeedback");case 4:t=e.sent,x(t),console.log(h.Z),p((0,o.K4)(!1)),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){m()}),[]),(0,v.jsx)(v.Fragment,{children:j?(0,v.jsx)(c.Z,{}):(0,v.jsxs)("section",{className:"user-section",children:[(0,v.jsx)("h3",{className:"home-sub-heading",children:"All Feedback"}),t.length>0?(0,v.jsx)("div",{className:"user-container",children:(0,v.jsxs)("table",{children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"S.No"}),(0,v.jsx)("th",{children:"Pic"}),(0,v.jsx)("th",{children:"User ID"}),(0,v.jsx)("th",{children:"Name"}),(0,v.jsx)("th",{children:"Email"}),(0,v.jsx)("th",{children:"Feedback"})]})}),(0,v.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:n+1}),(0,v.jsx)("td",{children:(0,v.jsx)("img",{className:"user-table-pic",src:null===e||void 0===e?void 0:e.pic,alt:null===e||void 0===e?void 0:e.firstname})}),(0,v.jsx)("td",{children:null===e||void 0===e?void 0:e._id}),(0,v.jsx)("td",{children:null===e||void 0===e?void 0:e.name}),(0,v.jsx)("td",{children:null===e||void 0===e?void 0:e.email}),(0,v.jsx)("td",{children:null===e||void 0===e?void 0:e.feedback})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,v.jsx)(a.Z,{})]})})}},9408:function(e,n,t){var r=t(4165),i=t(5861),s=t(9439),l=t(2791),c=t(3263),o=t(3402),d=t(3200),a=t(5318),u=t(9434),h=t(3321),v=t(4971),x=t(184);c.Z.defaults.baseURL="http://localhost:5000/api";n.Z=function(){var e=(0,l.useState)([]),n=(0,s.Z)(e,2),t=n[0],p=n[1],j=(0,u.I0)(),m=(0,u.v9)((function(e){return e.root})).loading,f=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j((0,a.K4)(!0)),e.next=4,(0,v.Z)("/user/getallusers");case 4:t=e.sent,p(t),j((0,a.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Are you sure you want to delete?")){e.next=6;break}return e.next=5,o.ZP.promise(c.Z.delete("/user/deleteuser",{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))},data:{userId:n}}),{pending:"Deleting in...",success:"User deleted successfully",error:"Unable to delete user",loading:"Deleting user..."});case 5:f();case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){f()}),[]),(0,x.jsx)(x.Fragment,{children:m?(0,x.jsx)(d.Z,{}):(0,x.jsxs)("section",{className:"user-section",children:[(0,x.jsx)("h3",{className:"home-sub-heading",children:"All Users"}),t.length>0?(0,x.jsx)("div",{className:"user-container",children:(0,x.jsxs)("table",{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"S.No"}),(0,x.jsx)("th",{children:"Pic"}),(0,x.jsx)("th",{children:"First Name"}),(0,x.jsx)("th",{children:"Last Name"}),(0,x.jsx)("th",{children:"Email"}),(0,x.jsx)("th",{children:"Mobile No."}),(0,x.jsx)("th",{children:"Age"}),(0,x.jsx)("th",{children:"Gender"}),(0,x.jsx)("th",{children:"Is Doctor"}),(0,x.jsx)("th",{children:"Remove"})]})}),(0,x.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:n+1}),(0,x.jsx)("td",{children:(0,x.jsx)("img",{className:"user-table-pic",src:null===e||void 0===e?void 0:e.pic,alt:null===e||void 0===e?void 0:e.firstname})}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.firstname}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.lastname}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.email}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.mobile}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.age}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.gender}),(0,x.jsx)("td",{children:null!==e&&void 0!==e&&e.isDoctor?"Yes":"No"}),(0,x.jsx)("td",{className:"select",children:(0,x.jsx)("button",{className:"btn user-btn",onClick:function(){b(null===e||void 0===e?void 0:e._id)},children:"Remove"})})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,x.jsx)(h.Z,{})]})})}},6875:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(2791),i=t(4165),s=t(5861),l=t(9439),c=t(3263),o=t(3402),d=t(3200),a=t(5318),u=t(9434),h=t(3321),v=t(4971),x=(t(5108),t(184));c.Z.defaults.baseURL="http://localhost:5000/api";var p=function(){var e=(0,r.useState)([]),n=(0,l.Z)(e,2),t=n[0],p=n[1],j=(0,u.I0)(),m=(0,u.v9)((function(e){return e.root})).loading,f=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j((0,a.K4)(!0)),e.next=4,(0,v.Z)("/doctor/getnotdoctors");case 4:t=e.sent,p(t),j((0,a.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Are you sure you want to accept?")){e.next=6;break}return e.next=5,o.ZP.promise(c.Z.put("/doctor/acceptdoctor",{id:n},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))},data:{userId:n}}),{success:"Application accepted",error:"Unable to accept application",loading:"Accepting application..."});case 5:f();case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Are you sure you want to delete?")){e.next=6;break}return e.next=5,o.ZP.promise(c.Z.put("/doctor/rejectdoctor",{id:n},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))},data:{userId:n}}),{success:"Application rejected",error:"Unable to reject application",loading:"Rejecting application..."});case 5:f();case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){f()}),[]),(0,x.jsx)(x.Fragment,{children:m?(0,x.jsx)(d.Z,{}):(0,x.jsxs)("section",{className:"user-section",children:[(0,x.jsx)("h3",{className:"home-sub-heading",children:"All Applications"}),t.length>0?(0,x.jsx)("div",{className:"user-container",children:(0,x.jsxs)("table",{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"S.No"}),(0,x.jsx)("th",{children:"Pic"}),(0,x.jsx)("th",{children:"First Name"}),(0,x.jsx)("th",{children:"Last Name"}),(0,x.jsx)("th",{children:"Email"}),(0,x.jsx)("th",{children:"Mobile No."}),(0,x.jsx)("th",{children:"Experience"}),(0,x.jsx)("th",{children:"Specialization"}),(0,x.jsx)("th",{children:"Fees"}),(0,x.jsx)("th",{children:"Action"})]})}),(0,x.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,n){var t,r,i,s,l,c;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:n+1}),(0,x.jsx)("td",{children:(0,x.jsx)("img",{className:"user-table-pic",src:(null===e||void 0===e||null===(t=e.userId)||void 0===t?void 0:t.pic)||"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",alt:null===e||void 0===e||null===(r=e.userId)||void 0===r?void 0:r.firstname})}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i.firstname}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(s=e.userId)||void 0===s?void 0:s.lastname}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(l=e.userId)||void 0===l?void 0:l.email}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(c=e.userId)||void 0===c?void 0:c.mobile}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.experience}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.specialization}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.fees}),(0,x.jsxs)("td",{className:"select",children:[(0,x.jsx)("button",{className:"btn user-btn accept-btn",onClick:function(){var n;b(null===e||void 0===e||null===(n=e.userId)||void 0===n?void 0:n._id)},children:"Accept"}),(0,x.jsx)("button",{className:"btn user-btn",onClick:function(){var n;g(null===e||void 0===e||null===(n=e.userId)||void 0===n?void 0:n._id)},children:"Reject"})]})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,x.jsx)(h.Z,{})]})})};c.Z.defaults.baseURL="http://localhost:5000/api";var j=function(){var e=(0,r.useState)([]),n=(0,l.Z)(e,2),t=n[0],p=n[1],j=(0,u.I0)(),m=(0,u.v9)((function(e){return e.root})).loading,f=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j((0,a.K4)(!0)),e.next=4,(0,v.Z)("/appointment/getallappointments");case 4:t=e.sent,p(t),j((0,a.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){f()}),[]);var b=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.promise(c.Z.put("/appointment/completed",{appointid:null===n||void 0===n?void 0:n._id,doctorId:null===n||void 0===n?void 0:n.doctorId._id,doctorname:"".concat(null===n||void 0===n||null===(t=n.userId)||void 0===t?void 0:t.firstname," ").concat(null===n||void 0===n||null===(r=n.userId)||void 0===r?void 0:r.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 3:f(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,x.jsx)(x.Fragment,{children:m?(0,x.jsx)(d.Z,{}):(0,x.jsxs)("section",{className:"user-section",children:[(0,x.jsx)("h3",{className:"home-sub-heading",children:"All Users"}),t.length>0?(0,x.jsx)("div",{className:"user-container",children:(0,x.jsxs)("table",{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"S.No"}),(0,x.jsx)("th",{children:"Doctor"}),(0,x.jsx)("th",{children:"Patient"}),(0,x.jsx)("th",{children:"Appointment Date"}),(0,x.jsx)("th",{children:"Appointment Time"}),(0,x.jsx)("th",{children:"Booking Date"}),(0,x.jsx)("th",{children:"Booking Time"}),(0,x.jsx)("th",{children:"Status"}),(0,x.jsx)("th",{children:"Action"})]})}),(0,x.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,n){var t,r,i,s;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:n+1}),(0,x.jsx)("td",{children:(null===e||void 0===e||null===(t=e.doctorId)||void 0===t?void 0:t.firstname)+" "+(null===e||void 0===e||null===(r=e.doctorId)||void 0===r?void 0:r.lastname)}),(0,x.jsx)("td",{children:(null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i.firstname)+" "+(null===e||void 0===e||null===(s=e.userId)||void 0===s?void 0:s.lastname)}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.date}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.createdAt.split("T")[0]}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[1].split(".")[0]}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.status}),(0,x.jsx)("td",{children:(0,x.jsx)("button",{className:"btn user-btn accept-btn ".concat("Completed"===(null===e||void 0===e?void 0:e.status)?"disable-btn":""),disabled:"Completed"===(null===e||void 0===e?void 0:e.status),onClick:function(){return b(e)},children:"Complete"})})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,x.jsx)(h.Z,{})]})})};c.Z.defaults.baseURL="http://localhost:5000/api";var m=function(){var e=(0,r.useState)([]),n=(0,l.Z)(e,2),t=n[0],p=n[1],j=(0,u.I0)(),m=(0,u.v9)((function(e){return e.root})).loading,f=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j((0,a.K4)(!0)),e.next=4,(0,v.Z)("/doctor/getalldoctors");case 4:t=e.sent,p(t),j((0,a.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Are you sure you want to delete?")){e.next=6;break}return e.next=5,o.ZP.promise(c.Z.put("/doctor/deletedoctor",{userId:n},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Doctor deleted successfully",error:"Unable to delete Doctor",loading:"Deleting Doctor..."});case 5:f();case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){f()}),[]),(0,x.jsx)(x.Fragment,{children:m?(0,x.jsx)(d.Z,{}):(0,x.jsxs)("section",{className:"user-section",children:[(0,x.jsx)("h3",{className:"home-sub-heading",children:"All Doctors"}),t.length>0?(0,x.jsx)("div",{className:"user-container",children:(0,x.jsxs)("table",{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"S.No"}),(0,x.jsx)("th",{children:"Pic"}),(0,x.jsx)("th",{children:"First Name"}),(0,x.jsx)("th",{children:"Last Name"}),(0,x.jsx)("th",{children:"Email"}),(0,x.jsx)("th",{children:"Mobile No."}),(0,x.jsx)("th",{children:"Experience"}),(0,x.jsx)("th",{children:"Specialization"}),(0,x.jsx)("th",{children:"Fees"}),(0,x.jsx)("th",{children:"Remove"})]})}),(0,x.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,n){var t,r,i,s,l,c;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:n+1}),(0,x.jsx)("td",{children:(0,x.jsx)("img",{className:"user-table-pic",src:null===e||void 0===e||null===(t=e.userId)||void 0===t?void 0:t.pic,alt:null===e||void 0===e||null===(r=e.userId)||void 0===r?void 0:r.firstname})}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i.firstname}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(s=e.userId)||void 0===s?void 0:s.lastname}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(l=e.userId)||void 0===l?void 0:l.email}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(c=e.userId)||void 0===c?void 0:c.mobile}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.experience}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.specialization}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.fees}),(0,x.jsx)("td",{className:"select",children:(0,x.jsx)("button",{className:"btn user-btn",onClick:function(){var n;b(null===e||void 0===e||null===(n=e.userId)||void 0===n?void 0:n._id)},children:"Remove"})})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,x.jsx)(h.Z,{})]})})},f=t(6355),b=t(4651),g=t(7689),Z=t(1087),k=t(6856),N=function(){var e=(0,u.I0)(),n=(0,g.s0)(),t=[{name:"Home",path:"/",icon:(0,x.jsx)(f.xng,{})},{name:"Users",path:"/dashboard/users",icon:(0,x.jsx)(f.I$,{})},{name:"Doctors",path:"/dashboard/doctors",icon:(0,x.jsx)(f.Z5v,{})},{name:"Appointments",path:"/dashboard/appointments",icon:(0,x.jsx)(f.AeW,{})},{name:"Applications",path:"/dashboard/applications",icon:(0,x.jsx)(f.SRX,{})},{name:"Feedback",path:"/dashboard/feedback",icon:(0,x.jsx)(b.xJq,{})},{name:"Profile",path:"/profile",icon:(0,x.jsx)(f.Xws,{})}];return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("section",{className:"sidebar-section flex-center",children:(0,x.jsxs)("div",{className:"sidebar-container",children:[(0,x.jsx)("ul",{children:t.map((function(e,n){return(0,x.jsxs)("li",{children:[e.icon,(0,x.jsx)(Z.OL,{to:e.path,children:e.name})]},n)}))}),(0,x.jsxs)("div",{className:"logout-container",children:[(0,x.jsx)(k.lE7,{}),(0,x.jsx)("p",{onClick:function(){e((0,a.ps)({})),localStorage.removeItem("token"),n("/login")},children:"Logout"})]})]})})})},I=t(9408),w=t(1005),y=function(e){var n=e.type;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("section",{className:"layout-section",children:(0,x.jsxs)("div",{className:"layout-container",children:[(0,x.jsx)(N,{}),"users"===n?(0,x.jsx)(I.Z,{}):"doctors"===n?(0,x.jsx)(m,{}):"applications"===n?(0,x.jsx)(p,{}):"appointments"===n?(0,x.jsx)(j,{}):"feedback"===n?(0,x.jsx)(w.default,{}):(0,x.jsx)(x.Fragment,{})]})})})}},5108:function(){}}]);
//# sourceMappingURL=875.5eb364da.chunk.js.map