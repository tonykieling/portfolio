(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a,c,r=n(1),s=n.n(r),i=n(25),o=n.n(i),l=(n(37),n(38),n(4)),j=n(5),b=n(10),u=n.p+"static/media/logo192.74b45c28.png",d=n.p+"static/media/hamburguer.255ee784.png",m=n.p+"static/media/hamburguer-banned.0b4454c0.png",x=n(12),O={primaryDark:"#0D0C1D",primaryLight:"lightblue",primaryHover:"#343078",mobile:"576px",burguerColorToOpen:"blue",burguerColorToClose:"blue"},p=n(3),h=n(16),g=n(15),f=x.b.button(a||(a=Object(g.a)(["\n  // position: absolute;\n  position: relative;\n  top: 5%;\n  // left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  span {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"])),(function(e){var t=e.theme;return e.open?t.burguerColorToClose:t.burguerColorToOpen}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),v=n(0),N=["open","setOpen"],w=function(e){var t=e.open,n=e.setOpen,a=Object(h.a)(e,N),c=!!t;return Object(v.jsxs)(f,Object(p.a)(Object(p.a)({"aria-label":"Toggle menu","aria-expanded":c,open:t,onClick:function(){return n(!t)}},a),{},{title:"Hamburguer Menu is ON",children:[Object(v.jsx)("span",{}),Object(v.jsx)("span",{}),Object(v.jsx)("span",{})]}))},k=x.b.nav(c||(c=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n  transform: ",";\n  // transform: ",";\n  height: 100vh;\n  text-align: left;\n  padding: 0 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  // right: 0;\n  transition: transform 0.3s ease-in-out;\n  z-index: 1;\n\n  @media (max-width: ",") {\n      width: 100%;\n    }\n\n  a {\n    // font-size: 2rem;\n    font-size: 1.5rem;\n    // text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: ",";\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: ",") {\n      font-size: 1.5rem;\n      padding-left: 4rem;\n      // text-align: center;\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.primaryLight}),(function(e){return e.open?"translateX(0)":"translateX(-100%)"}),(function(e){return e.open?"translateX(0)":"translateX(100%)"}),(function(e){return e.theme.mobile}),(function(e){return e.theme.primaryDark}),(function(e){return e.theme.mobile}),(function(e){return e.theme.primaryHover})),A=["open"],C=function(e){var t=e.open,n=Object(h.a)(e,A),a=!!t,c=a?0:-1,r=function(){return n.setOpen(!1)},s=function(e){return e[Math.floor(Math.random()*e.length)]};return Object(v.jsxs)(k,Object(p.a)(Object(p.a)({open:t,"aria-hidden":!a},n),{},{children:[Object(v.jsxs)(l.b,{to:"/",tabIndex:c,onClick:r,children:[Object(v.jsx)("span",{"aria-hidden":"true",children:s(["\ud83c\udfe0 ","\ud83c\udfe1 "])}),"Home"]}),Object(v.jsxs)(l.b,{to:"/about",tabIndex:c,onClick:r,children:[Object(v.jsx)("span",{"aria-hidden":"true",children:s(["\ud83d\udc38 ","\ud83d\udd7a ","\ud83d\udc35 ","\ud83d\ude9a","\ud83d\udc1c ","\ud83d\udc27 ","\ud83e\udd89 ","\ud83e\udd96 ","\ud83d\udc1d ","\ud83c\udfca\u200d\u2642\ufe0f "])}),"About"]}),Object(v.jsxs)(l.b,{to:"/projects",tabIndex:c,onClick:r,children:[Object(v.jsx)("span",{"aria-hidden":"true",children:s(["\ud83d\udea7 ","\ud83d\uddc4\ufe0f ","\ud83d\udcbb ","\ud83e\uddee "])}),"Projects"]}),Object(v.jsxs)(l.b,{to:"/samples",tabIndex:c,onClick:r,children:[Object(v.jsx)("span",{"aria-hidden":"true",children:s(["\ud83e\udd16 ","\ud83d\udc68\u200d\ud83d\udcbb ","\ud83d\udee0\ufe0f "])}),"Snippets"]}),Object(v.jsxs)(l.b,{to:"/contact",tabIndex:c,onClick:r,children:[Object(v.jsx)("span",{"aria-hidden":"true",children:s(["\ud83d\udcdd ","\u2709\ufe0f ","\ud83d\udce9 "])}),"Contact"]})]}))},y=n(30);var S=function(){var e,t,n=Object(r.useState)(!1),a=Object(b.a)(n,2),c=a[0],s=a[1],i=Object(r.useRef)(),o="main-menu";return e=i,t=function(){return s(!1)},Object(r.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t]),Object(v.jsx)(x.a,{theme:O,children:Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{ref:i,children:Object(v.jsxs)(y.a,{disabled:!c,children:[Object(v.jsx)(w,{open:c,setOpen:s,"aria-controls":o}),Object(v.jsx)(C,{open:c,setOpen:s,id:o})]})})})})},F=window.innerWidth;var E=function(){var e=Object(r.useState)(F>750),t=Object(b.a)(e,2),n=t[0],a=t[1],c=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"one-3rd",children:[Object(v.jsx)("div",{className:"one-3rd-1",children:!n&&Object(v.jsx)(S,{})}),Object(v.jsx)("div",{className:"one-3rd-2",children:Object(v.jsx)("div",{className:"logo",children:Object(v.jsx)("img",{src:n?d:m,alt:"Turn Hamburguer menu ON and OFF",title:n?"Turn Hamburguer Menu ON":"Turn Hamburguer Menu OFF",width:"100%",onClick:function(){return a(!n)}})})})]}),Object(v.jsxs)("div",{className:"two-3rd d-flex",children:[Object(v.jsx)("div",{className:"two-3rd-1",children:Object(v.jsx)("div",{className:"logo",children:Object(v.jsx)(l.b,{to:"/",children:Object(v.jsx)("img",{src:u,alt:"TK's logo",title:"Home",width:"100%"})})})}),Object(v.jsxs)("div",{className:"nav two-3rd-2",children:[Object(v.jsx)("div",{className:"whereru",children:!n&&Object(v.jsx)("div",{className:"whereru",children:Object(v.jsx)(i,{className:"whereru"})})}),n&&Object(v.jsxs)("div",{className:"text-items",children:[Object(v.jsx)(l.c,{to:"/about",className:"nav-link",activeClassName:"active-link",children:"About"}),Object(v.jsx)(l.c,{to:"/projects",className:"nav-link",activeClassName:"active-link",children:"Projects"}),Object(v.jsx)(l.c,{to:"/samples",className:"nav-link",activeClassName:"active-link",children:"Snippets"}),Object(v.jsx)(l.c,{to:"/contact",className:"nav-link",activeClassName:"active-link",children:"Contact"})]})]})]})]})},s=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"one-3rd"}),Object(v.jsxs)("div",{className:"two-3rd",children:[Object(v.jsx)(S,{}),Object(v.jsx)("div",{className:"whereru",children:Object(v.jsx)(i,{className:"whereru"})}),Object(v.jsx)("div",{className:"logo-mobile",children:Object(v.jsx)(l.b,{to:"/",children:Object(v.jsx)("img",{src:u,alt:"TK's logo",title:"Home",width:"100%"})})})]}),Object(v.jsx)("div",{className:"three-3rd"})]})},i=function(){var e=Object(j.g)().pathname;console.log("inside whereRU",e);var t="";return"/"===e?t="/Home":"/about"===e?t="/About":"/projects"===e?t="/Projects":"/samples"===e?t="/Snippets":"/contact"===e&&(t="/Contact"),t};return Object(v.jsx)("div",{className:"header d-flex sticky-top",children:F>750?Object(v.jsx)(c,{}):Object(v.jsx)(s,{})})},T=n.p+"static/media/tk8.00a5a58c.jpg",R=function(){return window.scroll({top:0,left:0,behavior:"smooth"})};function X(){return Object(r.useEffect)((function(){return R()}),[]),Object(v.jsx)("div",{className:"card card-container",children:Object(v.jsxs)("div",{className:"home-container d-flex flex-direction-row m-auto",children:[Object(v.jsxs)("div",{className:"cont1",children:[Object(v.jsxs)("div",{className:"cont1-1",children:[Object(v.jsx)("div",{className:"my-name",children:Object(v.jsx)("h1",{children:"Tony Kieling"})}),Object(v.jsx)("h1",{children:"Web Developer"})]}),Object(v.jsxs)("div",{className:"cont1-2",children:[Object(v.jsx)("h2",{children:"Welcome to my Website"}),Object(v.jsx)("h3",{children:Object(v.jsx)(l.b,{to:"/home",children:"tkwebdev.ca"})})]})]}),Object(v.jsx)("div",{className:"cont2",children:Object(v.jsx)("img",{className:"picture",src:T,alt:"TK"})})]})})}var G=n.p+"static/media/maw.001442b9.jpg";function K(e){return Object(v.jsx)("div",{className:"card card-container",children:Object(v.jsxs)("div",{className:"temp",children:[Object(v.jsxs)("div",{className:"temp1",children:[Object(v.jsx)("p",{className:"cp",children:" This part is under construction."}),Object(v.jsx)("img",{src:"data:image/gif;base64,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",alt:"Men at Work",width:"25%"}),Object(v.jsx)("p",{children:" Meanwhile, please feel free to check"}),e.text||Object(v.jsxs)("p",{children:[" ",Object(v.jsx)(l.b,{to:"/projects",children:"Projects"})," and ",Object(v.jsx)(l.b,{to:"/contact",children:"Contact"}),"."]})]}),console.log("props",e),Object(v.jsx)("div",{className:"temp2",children:Object(v.jsx)("img",{src:e.Samples||e.Projects||e.About||G,className:"".concat(e.ClassMe),style:e.Style,alt:"Men at work",width:"90%"})})]})})}var W=n.p+"static/media/tk.38303bcd.jpg";function Y(){return Object(r.useEffect)((function(){return R()}),[]),Object(v.jsx)("div",{className:"me",children:Object(v.jsx)(K,{About:W,ClassMe:"me"})})}var H=n(22),L=n.n(H),q=n(29),I=n(14),M=n.p+"static/media/gmail.16286b30.svg",z=n.p+"static/media/resume.44caa180.svg",P=n.p+"static/media/github.237e2214.png";function Z(){return Object(v.jsxs)("div",{className:"social-media-box",children:[Object(v.jsx)("a",{href:"mailto:tony.kieling@gmail.com",target:"_top",children:Object(v.jsx)("img",{src:M,alt:"gmail",title:"Gmail",className:"icon-settings"})}),Object(v.jsx)("a",{href:"https://www.linkedin.com/in/tony-kieling/",target:"_blank",rel:"noopener noreferrer",children:Object(v.jsx)("img",{src:"data:image/png;base64,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",title:"LinkedIn",className:"icon-settings",alt:"linkedin"})}),Object(v.jsx)("a",{href:"https://github.com/tonykieling",target:"_blank",rel:"noopener noreferrer",children:Object(v.jsx)("img",{src:P,title:"GitHub",className:"icon-settings",alt:"github"})}),Object(v.jsx)("a",{href:"https://resume.creddle.io/resume/hqaeq2fbnr6",target:"_blank",rel:"noopener noreferrer",children:Object(v.jsx)("img",{src:z,title:"Resume",alt:"resume",className:"icon-settings"})})]})}function U(){var e=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:"Something bad happened. :/"})}),Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:"Please try it later or"})}),Object(v.jsx)("p",{children:Object(v.jsxs)("b",{children:["email to ",Object(v.jsx)("a",{style:{color:"blue"},href:"mailto:tony.kieling@gmail.com",children:" tony.kieling@gmail.com "})]})})]})};Object(r.useEffect)((function(){return R()}),[]);var t=Object(r.useState)({name:"test",email:"test@email.ca",message:"msg test"}),n=Object(b.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)({name:null,email:null,message:null}),i=Object(b.a)(s,2),o=i[0],l=i[1],j=Object(r.useState)("Send Message"),u=Object(b.a)(j,2),d=u[0],m=u[1],x=Object(r.useState)("btn-primary"),O=Object(b.a)(x,2),h=O[0],g=O[1],f=Object(r.useRef)(null),N=Object(r.useRef)(null),w=Object(r.useRef)(null),k=Object(r.useRef)(null),A=function(e){var t=e.target,n=t.name,r=t.value;if("Enter"===e.key)switch(e.preventDefault(),e.stopPropagation(),n){case"name":console.log("blur"),a.name&&N.current.focus();break;case"email":a.email&&w.current.focus();break;case"message":a.message&&k.current.click()}else c(Object(p.a)(Object(p.a)({},a),{},Object(I.a)({},n,r))),"name"===n&&l(Object(p.a)(Object(p.a)({},o),{},{name:null})),"email"===n&&l(Object(p.a)(Object(p.a)({},o),{},{email:null})),"message"===n&&l(Object(p.a)(Object(p.a)({},o),{},{message:null}))},C=function(){var t=Object(q.a)(L.a.mark((function t(n){var r,s,i,o,j;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"btn-warning"!==h){t.next=6;break}return g("btn-primary"),m("Send message"),w.current.focus(),t.abrupt("return");case 6:if(r=!1,s={},a.name||(s=Object(p.a)(Object(p.a)({},s),{},{name:"redBox"}),f.current.focus(),r=!0),new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(a.email)||(s=Object(p.a)(Object(p.a)({},s),{},{email:"redBox"}),r||(r=!0,N.current.focus())),a.message||(s=Object(p.a)(Object(p.a)({},s),{},{message:"redBox"}),r||(r=!0,w.current.focus())),!r){t.next=16;break}return l(s),t.abrupt("return");case 16:return t.prev=16,"/api",i={person:a.name,email:a.email,message:a.message,password:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).pass},console.log("body=",i),m("sending message..."),g("button-sending"),t.next=24,fetch("/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 24:return o=t.sent,console.log("email:::",o),t.next=28,o.json();case 28:if(j=t.sent,console.log("rRES:::",j),!j.message){t.next=34;break}setTimeout((function(){m("Thank you for your message! :)"),g("button-thanks"),setTimeout((function(){m("Send message"),g("btn-primary"),c(Object(p.a)(Object(p.a)({},a),{},{name:"",email:"",message:""})),f.current.focus()}),3e3)}),2e3),t.next=35;break;case 34:throw new Error;case 35:t.next=42;break;case 37:t.prev=37,t.t0=t.catch(16),console.log("checking error:::",t.t0),g("btn-warning"),m(Object(v.jsx)(e,{}));case 42:case"end":return t.stop()}}),t,null,[[16,37]])})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"card card-container",children:[Object(v.jsx)("p",{className:"text-center",children:"Please, feel free to contact me using the form below. "}),Object(v.jsx)("input",{className:"form-control form-text ".concat(o.name),placeholder:"Your name","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-html":"true",title:"Insert your name",autoFocus:window.innerWidth>700&&!0,type:"text",name:"name",value:a.name,onChange:A,onKeyPress:A,ref:f,disabled:"sending message..."===d}),Object(v.jsx)("input",{className:"form-control form-text ".concat(o.email),placeholder:"Your email","data-bs-toggle":"tooltip",title:"I will never share your email with anyone else.","aria-describedby":"emailHelp",type:"email",name:"email",value:a.email,onChange:A,onKeyPress:A,ref:N,disabled:"sending message..."===d}),Object(v.jsx)("textarea",{className:"form-control form-textarea ".concat(o.message),placeholder:"Please, leave your message","data-bs-toggle":"tooltip",title:"Insert your message",rows:"5",type:"text",name:"message",value:a.message,onChange:A,onKeyPress:A,ref:w,disabled:"sending message..."===d}),Object(v.jsx)("button",{type:"button",onClick:C,className:"btn btn-sm ".concat(h),ref:k,disabled:"sending message..."===d,"data-bs-toggle":"tooltip",title:"btn-warning"===h?"Click to renew":"Send your message",children:d}),Object(v.jsx)("div",{className:"mt-5",children:Object(v.jsx)(Z,{})})]})}var Q=n.p+"static/media/project.1ef42380.png";function J(){Object(r.useEffect)((function(){return R()}),[]);var e=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:[" ",Object(v.jsx)("a",{href:"https://clockin.tkwebdev.ca",target:"_blank",rel:"noreferrer",children:" ClockinJS "})]}),Object(v.jsxs)("p",{children:[" or ",Object(v.jsx)(l.b,{to:"/contact",children:"Contact"}),"."]})]})};return Object(v.jsx)("div",{children:Object(v.jsx)(K,{text:Object(v.jsx)(e,{}),Projects:Q,Style:{opacity:"0.6",width:"50%",borderRadius:0}})})}var D=n.p+"static/media/matrix-code.6b7b5c00.gif";function B(){return Object(r.useEffect)((function(){return R()}),[]),Object(v.jsx)("div",{children:Object(v.jsx)(K,{Samples:D,Style:{borderRadius:"4px",width:"100%"}})})}var V=function(){return Object(v.jsx)("div",{className:"app-settings",children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(E,{}),Object(v.jsx)("div",{className:"body-settings",children:Object(v.jsxs)(j.d,{children:[Object(v.jsx)(j.b,{exact:!0,path:"/",children:Object(v.jsx)(X,{})}),Object(v.jsx)(j.b,{exact:!0,path:"/about",children:Object(v.jsx)(Y,{})}),Object(v.jsx)(j.b,{exact:!0,path:"/contact",children:Object(v.jsx)(U,{})}),Object(v.jsx)(j.b,{exact:!0,path:"/projects",children:Object(v.jsx)(J,{})}),Object(v.jsx)(j.b,{exact:!0,path:"/samples",children:Object(v.jsx)(B,{})}),Object(v.jsx)(j.b,{children:Object(v.jsx)(j.a,{to:"/"})})]})})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(V,{})}),document.getElementById("root")),_()}},[[51,1,2]]]);
//# sourceMappingURL=main.a3d10e18.chunk.js.map