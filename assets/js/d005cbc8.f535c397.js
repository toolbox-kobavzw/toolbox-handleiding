"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[1652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Kas",hide_title:!0,slug:"/kas"},i=void 0,l={unversionedId:"kas/index",id:"kas/index",title:"Kas",description:"Kas",source:"@site/docs/kas/index.mdx",sourceDirName:"kas",slug:"/kas",permalink:"/kas",draft:!1,tags:[],version:"current",frontMatter:{title:"Kas",hide_title:!0,slug:"/kas"},sidebar:"tutorialSidebar",previous:{title:"Toestellen toewijzen",permalink:"/inventaris/toestel_toewijzen/"},next:{title:"Opstart Configuratie",permalink:"/kas/opstart_configuratie/"}},s={},c=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=d("ImageTitle"),u=d("DocCardList"),f={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{img:"geld.png",mdxType:"ImageTitle"},"Kas"),(0,o.kt)("p",null,"De kasmodule is speciaal ingericht voor het verwerken van cash betalingen, zowel in- als uitgaande. Het vormt een hulpmiddel om de fysieke kas te beheren en automatiseert de verwerking in Exact Online. Deze module is gesynchroniseerd met de module openstaande facturen, waardoor bij het selecteren van een leerling ook een eventuele openstaande rekening kan worden opgevraagd. De cash betaling kan direct gekoppeld worden aan de leerling en meteen ook aan de factuur waarvoor de betaling bestemd is. In Exact Online worden hierdoor de verkoop- en de betalingsverrichting aan elkaar gekoppeld."),(0,o.kt)("p",null,"Voor directe verkopen (zoals in een cafetaria of een schoolwinkeltje) is de kas minder geschikt en kan beter de kassa worden gebruikt."),(0,o.kt)(u,{mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);