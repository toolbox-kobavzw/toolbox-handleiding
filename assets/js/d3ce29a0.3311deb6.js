"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[6009],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},59751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"FAQ",hide_title:!0},i=void 0,l={unversionedId:"openstaande_facturen/FAQ/index",id:"openstaande_facturen/FAQ/index",title:"FAQ",description:"FAQ",source:"@site/docs/openstaande_facturen/3. FAQ/index.mdx",sourceDirName:"openstaande_facturen/3. FAQ",slug:"/openstaande_facturen/FAQ/",permalink:"/openstaande_facturen/FAQ/",draft:!1,tags:[],version:"current",frontMatter:{title:"FAQ",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Voorbeeldteksten",permalink:"/openstaande_facturen/voorbeeldteksten/"},next:{title:"Registratie basisschool",permalink:"/registratie_basisschool"}},d={},s=[{value:"1. Als ik een overzicht van alle openstaande facturen voor een leerling afdruk, wordt er meermaals hetzelfde document gegenereerd.",id:"1-als-ik-een-overzicht-van-alle-openstaande-facturen-voor-een-leerling-afdruk-wordt-er-meermaals-hetzelfde-document-gegenereerd",level:2},{value:"2. De lijst met openstaande facturen is plots veel korter of lijkt helemaal niet meer te kloppen.",id:"2-de-lijst-met-openstaande-facturen-is-plots-veel-korter-of-lijkt-helemaal-niet-meer-te-kloppen",level:2}],c=(p="ImageTitle",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const u={toc:s},f="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(f,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(c,{img:"openstaandefacturen.png",mdxType:"ImageTitle"},"FAQ"),(0,a.kt)("h2",{id:"1-als-ik-een-overzicht-van-alle-openstaande-facturen-voor-een-leerling-afdruk-wordt-er-meermaals-hetzelfde-document-gegenereerd"},"1. Als ik een overzicht van alle openstaande facturen voor een leerling afdruk, wordt er meermaals hetzelfde document gegenereerd."),(0,a.kt)("p",null,"Indien je een sjabloon gebruikt waarin een overzicht van alle openstaande facturen wordt getoond m.b.v. de variabele ",(0,a.kt)("inlineCode",{parentName:"p"},"$$OPENSTAANDE_FACTUREN$$"),", volstaat het om per leerling 1 factuur aan te vinken. Per vinkje wordt er een pdf-document gegenereerd. Wanneer er bij een leerling met 5 openstaande facturen alle facturen worden aangevinkt, zullen er 5 identieke pdf-documenten worden gegenereerd/mail/smartschoolbericht verstuurd. Wanneer er bij een leerling met 5 openstaande facturen alle facturen worden aangevinkt, zullen er 5 identieke documenten worden aangemaakt of 5 identieke berichten worden verstuurd."),(0,a.kt)("p",null,"De herinneringstypes en daarbij horende teksten kunnen gedefinieerd en aangepast worden in de module ",(0,a.kt)("a",{parentName:"p",href:"/openstaande_facturen/instellingen"},"Instellingen")," van Toolbox. "),(0,a.kt)("h2",{id:"2-de-lijst-met-openstaande-facturen-is-plots-veel-korter-of-lijkt-helemaal-niet-meer-te-kloppen"},"2. De lijst met openstaande facturen is plots veel korter of lijkt helemaal niet meer te kloppen."),(0,a.kt)("p",null,"Waarschijnlijk is de laatste synchronisatie met het boekhoudpakket Exact Online voortijdig afgebroken. Voer de synchronisatie met EOL opnieuw uit of vraag dit aan de persoon die hiervoor verantwoordelijk is in uw school. Dit is steeds iemand met toegang tot EOL (bv. boekhouder of boekhoudkundig medewerker)."))}m.isMDXComponent=!0}}]);