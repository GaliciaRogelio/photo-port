(this["webpackJsonpphoto-port"]=this["webpackJsonpphoto-port"]||[]).push([[0],[,,,,,,function(e,t,c){var i={"./commercial/0.jpg":14,"./commercial/1.jpg":15,"./commercial/2.jpg":16,"./commercial/3.jpg":17,"./commercial/4.jpg":18,"./food/0.jpg":19,"./food/1.jpg":20,"./food/2.jpg":21,"./food/3.jpg":22,"./food/4.jpg":23,"./landscape/0.jpg":24,"./landscape/1.jpg":25,"./landscape/2.jpg":26,"./landscape/3.jpg":27,"./landscape/4.jpg":28,"./portraits/0.jpg":29,"./portraits/1.jpg":30,"./portraits/2.jpg":31,"./portraits/3.jpg":32};function a(e){var t=r(e);return c(t)}function r(e){if(!c.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id=6},,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.6ba0a0b4.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.86164d25.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.83c111b0.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.070e6fe5.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.ed3b1a69.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.8877b785.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.e8b41d95.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.a2aa7476.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.5be68227.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.444be598.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.07e46859.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.ffe481f4.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.ce01b098.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.c095b24c.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.3aa93bf4.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.3af9e960.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.5fd176a1.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.2a91734e.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.47735072.jpg"},function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),r=c(7),n=c.n(r),s=(c(12),c(2));function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=c(0);var u=function(e){var t=e.categories,c=void 0===t?[]:t,i=e.setCurrentCategory,a=e.currentCategory,r=e.contactSelected,n=e.setContactSelected;return Object(l.jsxs)("header",{className:"flex-row px-1",children:[Object(l.jsx)("h2",{children:Object(l.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(l.jsxs)("span",{role:"img","aria-label":"camera",children:[" ","\ud83d\udcf8"]})," ","Oh Snap!"]})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2",children:Object(l.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return n(!1)},children:"About me"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(r&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return n(!0)},children:"Contact"})}),c.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(a.name===e.name&&!r&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){i(e),n(!1)},children:o(e.name)})},e.name)}))]})})]})},d=c.p+"static/media/cover-image.533ae8f6.jpg";var m=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",children:"Who am I?"}),Object(l.jsx)("img",{src:d,className:"my-2",style:{width:"100%"},alt:"cover"}),Object(l.jsx)("p",{children:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."'})]})},p=c(3);var j=function(e){var t=e.onClose,i=e.currentPhoto,a=i.name,r=i.category,n=i.description,s=i.index;return Object(l.jsx)("div",{className:"modalBackdrop",children:Object(l.jsxs)("div",{className:"modalContainer",children:[Object(l.jsx)("h3",{className:"modalTitle",children:a}),Object(l.jsx)("img",{src:c(6)("./".concat(r,"/").concat(s,".jpg")),alt:"current category"}),Object(l.jsx)("p",{children:n}),Object(l.jsx)("button",{onClick:t,type:"button",children:"Close this modal"})]})})},g=function(e){var t=e.category,a=Object(i.useState)(),r=Object(s.a)(a,2),n=r[0],o=r[1],u=Object(i.useState)(!1),d=Object(s.a)(u,2),m=d[0],g=d[1],b=Object(i.useState)([{name:"Grocery aisle",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Grocery booth",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Building exterior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Restaurant table",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cafe interior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cat green eyes",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green parrot",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Yellow macaw",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pug smile",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pancakes",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burrito",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Scallop pasta",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burger",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Fruit bowl",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green river",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Docks",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Panoramic village by sea",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Domestic landscape",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Park bench",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"}]),f=Object(s.a)(b,1)[0].filter((function(e){return e.category===t})),O=function(e,t){o(Object(p.a)(Object(p.a)({},e),{},{index:t})),g(!m)};return Object(l.jsxs)("div",{children:[m&&Object(l.jsx)(j,{currentPhoto:n,onClose:O}),Object(l.jsx)("div",{className:"flex-row",children:f.map((function(e,i){return Object(l.jsx)("img",{src:c(6)("./".concat(t,"/").concat(i,".jpg")),alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return O(e,i)}},e.name)}))})]})};var b=function(e){var t=e.currentCategory,c=t.name,i=t.description;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:o(c)}),Object(l.jsx)("p",{children:i}),Object(l.jsx)(g,{category:t.name})]})},f=c(4);var O=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),c=t[0],a=t[1],r=c.name,n=c.email,o=c.message,u=Object(i.useState)(""),d=Object(s.a)(u,2),m=d[0],j=d[1];function g(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),t?e.target.value.length?j(""):j("".concat(e.target.name," is required")):j("Your email is invalid")}m||a(Object(p.a)(Object(p.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault()},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",defaultValue:r,onBlur:g,name:"name"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",defaultValue:n,onBlur:g,name:"email"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",defaultValue:o,onBlur:g,rows:"5"})]}),m&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:m})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var h=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(i.useState)([{name:"commercial",description:"Photos of grocery stores, food trucks, and other commercial projects"},{name:"portraits",description:"Portraits of people in my life"},{name:"food",description:"Delicious delicacies"},{name:"landscape",description:"Fields, farmhouses, waterfalls, and the beauty of nature"}]),n=Object(s.a)(r,1)[0],o=Object(i.useState)(n[0]),d=Object(s.a)(o,2),p=d[0],j=d[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{categories:n,setCurrentCategory:j,currentCategory:p,contactSelected:c,setContactSelected:a}),Object(l.jsx)("main",{children:c?Object(l.jsx)(O,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{currentCategory:p}),Object(l.jsx)(m,{})]})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),i(e),a(e),r(e),n(e)}))};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),x()}],[[33,1,2]]]);
//# sourceMappingURL=main.49fc71ea.chunk.js.map