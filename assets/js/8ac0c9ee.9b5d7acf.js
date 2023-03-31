"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[9242],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=i,m=p["".concat(s,".").concat(u)]||p[u]||g[u]||o;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={title:"Synchronisatie Exact Online"},a=void 0,l={unversionedId:"synchronisatie/synchronisatie_EOL/index",id:"synchronisatie/synchronisatie_EOL/index",title:"Synchronisatie Exact Online",description:"Nadat de meest recente leerlingen- of lerarengegevens zijn opgehaald uit Informat/Wisa en geynchroniseerd met Toolbox, kan je vanuit Toolbox automatisch relatiefiches aanmaken of wijzigen in Exact Online (EOL).",source:"@site/docs/synchronisatie/5-synchronisatie_EOL/index.mdx",sourceDirName:"synchronisatie/5-synchronisatie_EOL",slug:"/synchronisatie/synchronisatie_EOL/",permalink:"/synchronisatie/synchronisatie_EOL/",draft:!1,tags:[],version:"current",frontMatter:{title:"Synchronisatie Exact Online"},sidebar:"tutorialSidebar",previous:{title:"Synchronisatie met ActiveDirectory",permalink:"/synchronisatie/synchronisatie_AD/"},next:{title:"Synchronisatie Smartschool",permalink:"/synchronisatie/synchronisatie Smartschool/"}},s={},c=[],d=(p="LegacyAction",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var p;const g={toc:c},u="wrapper";function m(e){let{components:n,...o}=e;return(0,i.kt)(u,(0,r.Z)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nadat de meest recente leerlingen- of lerarengegevens zijn opgehaald uit Informat/Wisa en geynchroniseerd met Toolbox, kan je vanuit Toolbox automatisch relatiefiches aanmaken of wijzigen in Exact Online (EOL). "),(0,i.kt)("p",null,"Het synchroniseren gebeurt vanuit de betreffende synchronisatiemodule (leraren, leerlingen basischool) in Toolbox."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Indien de vzw werkt met een overkoepelende Toolbox, kan de synchronisatie met EOL enkel vanuit die centrale Toolbox uitgevoerd worden. Om deze synchronisatie te kunnen doen, is een account in EOL vereist. De eerste twee stappen van de synchronisaties moeten ook nog steeds in de afzonderlijke schooltoolboxen gebeuren om in de verschillende Toolbox-modules gebruik te kunnen maken van de correcte en meest actuele leerlingen- en personeelsgegevens.")),(0,i.kt)("p",null,"Na de eerste twee gebruikelijke stappen volgt er nog een derde stap:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Informat/Wisa uitlezen = het ophalen van de gegevens uit Informat of Wisa"),(0,i.kt)("li",{parentName:"ol"},"Synchroniseer leerlingen = het intern synchroniseren/gegevens overzetten naar Toolbox"),(0,i.kt)("li",{parentName:"ol"},"Synchroniseer met Exact Online ")),(0,i.kt)("p",null,"Klik op ",(0,i.kt)(d,{img:"sync.png",text:"Start volledige synchronisatie",mdxType:"LegacyAction"})),(0,i.kt)("p",null,"Na de volledige synchronisatie zie je een overzicht van alle opgehaalde leerlingen/leerkrachten en de mogelijke wijzigingen.\nDeze wijzigingen worden niet automatisch doorgezet naar Exact Online. Daarvoor moet je terugkeren naar het vorige scherm via de ",(0,i.kt)(d,{img:"home.png",mdxType:"LegacyAction"})," knop. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"EOL2",src:t(88061).Z,width:"1667",height:"345"})," "),(0,i.kt)("p",null,"Vanuit dit scherm kan je de wijzigingen effectief doorzetten naar Exact Online. "),(0,i.kt)("p",null,"Als je alle wijzigingen ineens wil doorvoeren, volstaat het op te klikken op ",(0,i.kt)(d,{img:"play.png",text:"Voer deze wijzigingen door in Exact Online",mdxType:"LegacyAction"}),". "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Alle wijzigingen in dit overzicht worden nu doorgevoerd, ook diegene die niet zijn geselecteerd!")," "),(0,i.kt)("p",null,"Indien je bepaalde wijzigingen ",(0,i.kt)("strong",{parentName:"p"},"niet")," wil doorvoeren, vink je die aan en verwijder je ze uit de lijst door middel van het ",(0,i.kt)(d,{img:"remove.png",mdxType:"LegacyAction"})," bovenaan of achteraan. Deze wijzigingen worden hiermee ",(0,i.kt)("strong",{parentName:"p"},"niet")," definitief verwijderd en worden bij een volgende synchronisatie opnieuw getoond."))}m.isMDXComponent=!0},88061:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/EOL2-4a0e1735126fd540d8ef653d7115828b.png"}}]);