"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[6025],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),p=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),k=r,c=s["".concat(u,".").concat(k)]||s[k]||m[k]||a;return t?o.createElement(c,i(i({ref:n},d),{},{components:t})):o.createElement(c,i({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=k;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},92762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={title:"Canon Uniflow",hide_title:!0,slug:"/uniflow"},i=void 0,l={unversionedId:"canon_uniflow/index",id:"canon_uniflow/index",title:"Canon Uniflow",description:"Canon Uniflow",source:"@site/docs/canon_uniflow/index.mdx",sourceDirName:"canon_uniflow",slug:"/uniflow",permalink:"/uniflow",draft:!1,tags:[],version:"current",frontMatter:{title:"Canon Uniflow",hide_title:!0,slug:"/uniflow"},sidebar:"tutorialSidebar",previous:{title:"Nieuw materiaal",permalink:"/boekenverkoop/nieuw_materiaal/"},next:{title:"Fietsvergoeding",permalink:"/fietsvergoeding"}},u={},p=[{value:"Configuratie",id:"configuratie",level:2},{value:"XML Ophalen op Uniflow",id:"xml-ophalen-op-uniflow",level:2}],d=(s="ImageTitle",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var s;const m={toc:p},k="wrapper";function c(e){let{components:n,...a}=e;return(0,r.kt)(k,(0,o.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(d,{img:"uniflow.png",mdxType:"ImageTitle"},"Canon Uniflow"),(0,r.kt)("p",null,"Toolbox kan via de module Uniflow Edu de nodige informatie aanleveren om een Canon Uniflow op te vullen. Toolbox genereert hiervoor een XML die Uniflow kan inlezen. In die XML zit onder andere deze informatie:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Leerlingen"),(0,r.kt)("li",{parentName:"ul"},"Personeel"),(0,r.kt)("li",{parentName:"ul"},"Externen"),(0,r.kt)("li",{parentName:"ul"},"Klassen en subgroepen"),(0,r.kt)("li",{parentName:"ul"},"Koppeling tussen leerlingen en klassen"),(0,r.kt)("li",{parentName:"ul"},"Koppeling tussen personeel en klassen (wie ziet welke klassen)"),(0,r.kt)("li",{parentName:"ul"},"Koppeling tussen personeel en kostenplaatsen")),(0,r.kt)("p",null,"Per persoon worden meerdere parameters meegestuurd: e-mailadres, login, pointer (uniek nummer uit Informat of Wisa), nummer betaalkaart, pincode, ... "),(0,r.kt)("h2",{id:"configuratie"},"Configuratie"),(0,r.kt)("p",null,"Om de XML te kunnen ophalen moet er eerst een unieke (willekeurige) sleutel worden aangemaakt. Die moet ingevuld worden in de instellingen - Uniflow. Vul daarnaast ook de instellingen onder 'School' in: referentie, korte naam en volledige naam. Raadpleeg hiervoor de handleiding van Uniflow."),(0,r.kt)("p",null,"Bij Schooljaar vul je het huidige schooljaar in. Het formaat: 2020-21."),(0,r.kt)("p",null,"Standaard wordt de gebruikersnaam die Toolbox genereert (zie Synchronisatie leraren en leerlingen) meegestuurd. Je kan bijkomend nog een extra 'loginnaam' meesturen die afwijkt van de gebruikersnaam zodat Uniflow ook hier op kan koppelen."),(0,r.kt)("p",null,"Toolbox zal ook de pincode van elke gebruiker meegeven. In het veld Samenstelling kan je invullen hoe die pincode moet worden opgebouwd. Je kan daar gebruik maken van enkele variabelen om de code wat meer te personaliseren."),(0,r.kt)("p",null,"Als je gebruik maakt van de module Synchronisatie Externen, dan kan je kiezen om die externen ook toe te voegen aan de XML. Zo kunnen externe gebruikers zoals Stagiairs, CLB medewerkers, ... ook toegang geven tot Uniflow. "),(0,r.kt)("p",null,"Via de module Uniflow Edu kan je de XML opvragen en nakijken. Via die module kan je ook personeelsleden koppelen aan klassen. Op die manier krijgen zij een beperkte lijst van klassen te zien op de display. Je kan die koppeling ook importeren via een lesroosterbestand."),(0,r.kt)("p",null,"In de loop van het schooljaar kan je nieuwe gebruikers (bv. interims) klassen laten overerven."),(0,r.kt)("h2",{id:"xml-ophalen-op-uniflow"},"XML Ophalen op Uniflow"),(0,r.kt)("p",null,"De XML moet op regelmatige basis worden ingeladen in Uniflow. Hiervoor voorzien we een PowerShell script dat via een Windows taak bijvoorbeeld elke nacht de XML ophaalt en aan Uniflow aanlevert."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12\n$wc = New-Object System.Net.WebClient\n$wc.DownloadFile(\'https://mijn.toolbox.be/uniflow_edu/publicGetUniflowEDUXML.php?key=UNIEKESLEUTEL\',\'c:\\uniflowedu.xml\')\n\nif (Test-Path -Path "c:\\uniflowedu.xml") {\n    Move-Item -Path "c:\\uniflowedu.xml" -Destination "C:\\Program Files (x86)\\Common Files\\NT-ware Shared\\Data\\EduPlatform\\BaseData\\uniflowedu.xml"\n} \n')),(0,r.kt)("p",null,"In dit script moet je enkele zaken wijzigen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mijn.toolbox.be")," vervangen door het adres van je Toolbox"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNIEKESLEUTEL")," vervangen door de sleutel die je in de instellingen hebt opgegeven"),(0,r.kt)("li",{parentName:"ul"},"het ",(0,r.kt)("inlineCode",{parentName:"li"},"-Destionation")," path instellen naar de Uniflow Hotfolder. Die is afhankelijk van de versie van Uniflow.")),(0,r.kt)("p",null,"Zet dit script in de map c:\\Scripts\\getCanonEDUXML.ps1"),(0,r.kt)("p",null,"Maak vervolgens een Windows taak aan die dit script dagelijks uitvoert. We vragen om dit bij voorkeur tussen 23u en 6u te laten lopen om onze systemen niet te veel te overbelasten. We vragen ook om dit maximaal twee keer per dag uit te voeren."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Uniflow XML Ophalen",src:t(19714).Z,width:"1920",height:"1080"})))}c.isMDXComponent=!0},19714:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/UniflowXMLOphalen-4cd3bab73642253368118ad14347f985.png"}}]);