(function(){"use strict";var e={759:function(e,t,n){var o=n(144),r=function(){var e=this,t=e._self._c;return t("router-view",{key:e.$route.fullPath})},i=[],a=n(1),u={},s=(0,a.Z)(u,r,i,!1,null,null,null),l=s.exports,c=n(345);o.ZP.use(c.ZP);const f=[{path:"/",redirect:"/main"},{path:"/main",name:"main",component:()=>Promise.all([n.e(638),n.e(956)]).then(n.bind(n,289))},{path:"/about",name:"about",component:()=>Promise.all([n.e(638),n.e(243)]).then(n.bind(n,549))},{path:"/test",name:"test",component:()=>Promise.all([n.e(638),n.e(535)]).then(n.bind(n,640))}],d=new c.ZP({routes:f});var h=d,m=n(152),p={message:{hello:"Hello World",basicInfo:"Basic Information",aboutUs:"About Us",downloadLink:"Download Link",refer:"Please Refer To",documentLink:"Documentation Link",contactDetails:"Contact Details",contactEmail:"Email: rustsbi@163.com",contactAddress:"Address: Laboratory B513, Mingde Building, National Cybersecurity Center, Dongxihu District, Wuhan, Hubei Province",whatIsTitle:"What is RustSBI",whatIsContent:"RustSBI is a complete secure bootloader implementation designed to implement the RISC-V SBI interface for firmware, virtualization software, and simulators.",whatCanDoTitle:"What Can RustSBI Do",whatCanDoTitle1:"Firmware",whatCanDoTitle2:"Virtualization",whatCanDoTitle3:"Security",whatCanDoContent1:"RustSBI is a complete secure bootloader implementation designed to implement the RISC-V SBI interface for firmware, virtualization software, and simulators.",whatCanDoContent2:"RustSBI supports virtualization-related features and can serve as a foundational platform for virtualization software. It provides an extensible virtualization framework, helping developers achieve efficient virtualization on the RISC-V architecture.",whatCanDoContent3:"Due to its high security and performance characteristics, RustSBI is suitable for aerospace, IoT, and high-security domains.",theyAreUsingTitle:"They Are Using RustSBI",historyTitle:"The History of RustSBI",historyContent1:"The RustSBI project was incubated in 2020 during the Summer of Code event co-hosted by the rCore team and Pengcheng Laboratory, evolving from the MeowSBI project.",historyContent2:"To date, RustSBI has undergone years of development and is widely used in bare-metal firmware, virtualization software, and simulators.",teamTitle:"Team Members"}},v={message:{hello:"Hello World",basicInfo:"基本信息",aboutUs:"关于我们",downloadLink:"下载链接",refer:"请参阅",documentLink:"文档链接",contactDetails:"联系详情",contactEmail:"联系邮箱: rustsbi@163.com",contactAddress:"总部地址: 湖北省武汉市东西湖区国家网络安全基地明德楼B513实验室",whatIsTitle:"RustSBI是什么",whatIsContent:"RustSBI是完整的安全引导程序实现，适用于为固件、虚拟化软件和模拟器实现RISC-V SBI接口",whatCanDoTitle:"RustSBI可以做什么",whatCanDoTitle1:"固件",whatCanDoTitle2:"虚拟化",whatCanDoTitle3:"安全性",whatCanDoContent1:"RustSBI 是基于 RISC-V SBI (Supervisor Binary Interface)规范的一个实现，可以在硬件和操作系统之间提供标准化的接口，帮助开发者构建固件层",whatCanDoContent2:"RustSBI 支持虚拟化相关的功能，它可以作为虚拟化软件的基础平台，提供一个可扩展的虚拟化框架，帮助开发者在 RISC-V 架构上实现高效的虚拟化",whatCanDoContent3:"由于 RustSBI 的高安全性和高性能特点，适用于航空航天、物联网以及高安全性领域",theyAreUsingTitle:"他们都在用 RustSBI",historyTitle:"RustSBI的历史",historyContent1:"RustSBI 项目孵化于 2020 年 rCore 团队与鹏城实验室共同举办的代码之夏活动，是在 MeowSBI 项目上修改而来的。",historyContent2:"至今，RustSBI经过多年的发展，已广泛运用于裸机固件、虚拟化软件和模拟器中。",teamTitle:"团队成员"}};o.ZP.use(m.Z);const b=localStorage.getItem("lang")||"en",g={en:p,zh:v},w=new m.Z({locale:b,messages:g});var y=w;o.ZP.config.productionTip=!1,new o.ZP({i18n:y,router:h,render:e=>e(l)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var u=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{243:"04f45a39",535:"941986c1",638:"fed57d36",956:"7beb70b0"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{243:"ce5874c9",535:"c2799da7",956:"ce5874c9"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="RWebsite:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(h);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/website/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,i.parentNode&&i.parentNode.removeChild(i),r(s)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(t(a,u))return r();e(o,u,null,r,i)}))},r={826:0};n.f.miniCss=function(e,t){var n={243:1,535:1,956:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={826:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],s=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var c=s(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkRWebsite"]=self["webpackChunkRWebsite"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(759)}));o=n.O(o)})();
//# sourceMappingURL=index.d6be2f25.js.map