"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[6025],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=s(t),c=a,k=p["".concat(d,".").concat(c)]||p[c]||m[c]||i;return t?o.createElement(k,l(l({ref:n},u),{},{components:t})):o.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r[p]="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},92762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const i={title:"Canon Uniflow",hide_title:!0,slug:"/uniflow"},l=void 0,r={unversionedId:"canon_uniflow/index",id:"canon_uniflow/index",title:"Canon Uniflow",description:"Canon Uniflow",source:"@site/docs/canon_uniflow/index.mdx",sourceDirName:"canon_uniflow",slug:"/uniflow",permalink:"/uniflow",draft:!1,tags:[],version:"current",frontMatter:{title:"Canon Uniflow",hide_title:!0,slug:"/uniflow"},sidebar:"tutorialSidebar",previous:{title:"Nieuw materiaal",permalink:"/boekenverkoop/nieuw_materiaal/"},next:{title:"Fietsvergoeding",permalink:"/fietsvergoeding"}},d={},s=[{value:"Configuratie",id:"configuratie",level:2},{value:"XML Ophalen op Uniflow",id:"xml-ophalen-op-uniflow",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},p=u("ImageTitle"),m=u("Thumbnails"),c={toc:s},k="wrapper";function f(e){let{components:n,...i}=e;return(0,a.kt)(k,(0,o.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(p,{img:"uniflow.png",mdxType:"ImageTitle"},"Canon Uniflow"),(0,a.kt)("p",null,"Toolbox kan via de module Uniflow Edu de nodige informatie aanleveren om een Canon Uniflow op te vullen. Toolbox genereert hiervoor een XML die Uniflow kan inlezen. In die XML zit onder andere deze informatie:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Leerlingen"),(0,a.kt)("li",{parentName:"ul"},"Personeel"),(0,a.kt)("li",{parentName:"ul"},"Externen"),(0,a.kt)("li",{parentName:"ul"},"Klassen en subgroepen"),(0,a.kt)("li",{parentName:"ul"},"Koppeling tussen leerlingen en klassen"),(0,a.kt)("li",{parentName:"ul"},"Koppeling tussen personeel en klassen (wie ziet welke klassen)"),(0,a.kt)("li",{parentName:"ul"},"Koppeling tussen personeel en kostenplaatsen")),(0,a.kt)("p",null,"Per persoon worden meerdere parameters meegestuurd: e-mailadres, login, pointer (uniek nummer uit Informat of Wisa), nummer betaalkaart, pincode, ... "),(0,a.kt)("h2",{id:"configuratie"},"Configuratie"),(0,a.kt)("p",null,"Om de XML te kunnen ophalen moet er eerst een unieke (willekeurige) sleutel worden aangemaakt. Die moet ingevuld worden in de instellingen - Uniflow. Vul daarnaast ook de instellingen onder 'School' in: referentie, korte naam en volledige naam. Raadpleeg hiervoor de handleiding van Uniflow."),(0,a.kt)("p",null,"Bij Schooljaar vul je het huidige schooljaar in. Het formaat: 2020-21."),(0,a.kt)("p",null,"Standaard wordt de gebruikersnaam die Toolbox genereert (zie Synchronisatie leraren en leerlingen) meegestuurd. Je kan bijkomend nog een extra 'loginnaam' meesturen die afwijkt van de gebruikersnaam zodat Uniflow ook hier op kan koppelen."),(0,a.kt)("p",null,"Toolbox zal ook de pincode van elke gebruiker meegeven. In het veld Samenstelling kan je invullen hoe die pincode moet worden opgebouwd. Je kan daar gebruik maken van enkele variabelen om de code wat meer te personaliseren."),(0,a.kt)("p",null,"Als je gebruik maakt van de module Synchronisatie Externen, dan kan je kiezen om die externen ook toe te voegen aan de XML. Zo kunnen externe gebruikers zoals Stagiairs, CLB medewerkers, ... ook toegang geven tot Uniflow. "),(0,a.kt)("p",null,"Via de module Uniflow Edu kan je de XML opvragen en nakijken. Via die module kan je ook personeelsleden koppelen aan klassen. Op die manier krijgen zij een beperkte lijst van klassen te zien op de display. Je kan die koppeling ook importeren via een lesroosterbestand."),(0,a.kt)("p",null,"In de loop van het schooljaar kan je nieuwe gebruikers (bv. interims) klassen laten overerven."),(0,a.kt)("h2",{id:"xml-ophalen-op-uniflow"},"XML Ophalen op Uniflow"),(0,a.kt)("p",null,"De XML moet op regelmatige basis worden ingeladen in Uniflow. Recente versies van Uniflow kunnen de basisgegevens van de school rechtstreeks uit Toolbox ophalen. Je dient enkel de URL van Toolbox, de referentie van de school en de sleutel in te vullen."),(0,a.kt)(m,{img:[t(97521).Z,t(26678).Z],mdxType:"Thumbnails"}),(0,a.kt)("p",null,"Oudere versies van Uniflow dienen nog gebruik te maken van het PowerShell script hieronder dat via een Windows taak bijvoorbeeld elke nacht de XML ophaalt en aan Uniflow aanlevert."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12\n$wc = New-Object System.Net.WebClient\n$wc.DownloadFile(\'https://mijn.toolbox.be/uniflow_edu/publicGetUniflowEDUXML.php?key=UNIEKESLEUTEL\',\'c:\\uniflowedu.xml\')\n\nif (Test-Path -Path "c:\\uniflowedu.xml") {\n    Move-Item -Path "c:\\uniflowedu.xml" -Destination "C:\\Program Files (x86)\\Common Files\\NT-ware Shared\\Data\\EduPlatform\\BaseData\\uniflowedu.xml"\n} \n')),(0,a.kt)("p",null,"In dit script moet je enkele zaken wijzigen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mijn.toolbox.be")," vervangen door het adres van je Toolbox"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UNIEKESLEUTEL")," vervangen door de sleutel die je in de instellingen hebt opgegeven"),(0,a.kt)("li",{parentName:"ul"},"het ",(0,a.kt)("inlineCode",{parentName:"li"},"-Destionation")," path instellen naar de Uniflow Hotfolder. Die is afhankelijk van de versie van Uniflow.")),(0,a.kt)("p",null,"Zet dit script in de map c:\\Scripts\\getCanonEDUXML.ps1"),(0,a.kt)("p",null,"Maak vervolgens een Windows taak aan die dit script dagelijks uitvoert. We vragen om dit bij voorkeur tussen 23u en 6u te laten lopen om onze systemen niet te veel te overbelasten. We vragen ook om dit maximaal twee keer per dag uit te voeren."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Uniflow XML Ophalen",src:t(19714).Z,width:"1920",height:"1080"})))}f.isMDXComponent=!0},97521:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/uniflow2-c6d0be843d7bc66e0ceee11f39ff6361.png"},26678:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/uniflow3-00ec168314c2c625dc547d7d6cf88da6.png"},19714:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/UniflowXMLOphalen-4cd3bab73642253368118ad14347f985.png"}}]);