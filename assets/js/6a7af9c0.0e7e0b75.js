"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[6025],{62220:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=i(85893),l=i(11151);const a={title:"Canon Uniflow",hide_title:!0,slug:"/uniflow"},t=void 0,r={id:"canon_uniflow/index",title:"Canon Uniflow",description:"Canon Uniflow",source:"@site/docs/canon_uniflow/index.mdx",sourceDirName:"canon_uniflow",slug:"/uniflow",permalink:"/uniflow",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Canon Uniflow",hide_title:!0,slug:"/uniflow"},sidebar:"tutorialSidebar",previous:{title:"Buitengaan",permalink:"/buitengaan"},next:{title:"Digital Signage",permalink:"/digital_signage"}},s={},d=[{value:"Configuratie",id:"configuratie",level:2},{value:"XML Ophalen op Uniflow",id:"xml-ophalen-op-uniflow",level:2},{value:"Gebruikershandleiding Canon - Uniflow",id:"gebruikershandleiding-canon---uniflow",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{ImageTitle:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageTitle",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{img:"uniflow.png",children:"Canon Uniflow"}),"\n",(0,o.jsx)(n.p,{children:"Toolbox kan via de module Uniflow Edu de nodige informatie aanleveren om een Canon Uniflow op te vullen. Toolbox genereert hiervoor een XML die Uniflow kan inlezen. In die XML zit onder andere deze informatie:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Leerlingen"}),"\n",(0,o.jsx)(n.li,{children:"Personeel"}),"\n",(0,o.jsx)(n.li,{children:"Externen"}),"\n",(0,o.jsx)(n.li,{children:"Klassen en subgroepen"}),"\n",(0,o.jsx)(n.li,{children:"Koppeling tussen leerlingen en klassen"}),"\n",(0,o.jsx)(n.li,{children:"Koppeling tussen personeel en klassen (wie ziet welke klassen)"}),"\n",(0,o.jsx)(n.li,{children:"Koppeling tussen personeel en kostenplaatsen"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Per persoon worden meerdere parameters meegestuurd: e-mailadres, login, pointer (uniek nummer uit Informat of Wisa), nummer betaalkaart, pincode, ..."}),"\n",(0,o.jsx)(n.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,o.jsx)(n.p,{children:"Om de XML te kunnen ophalen moet er eerst een unieke (willekeurige) sleutel worden aangemaakt. Die moet ingevuld worden in de instellingen - Uniflow. Vul daarnaast ook de instellingen onder 'School' in: referentie, korte naam en volledige naam. Raadpleeg hiervoor de handleiding van Uniflow."}),"\n",(0,o.jsx)(n.p,{children:"Bij Schooljaar vul je het huidige schooljaar in. Het formaat: 2020-21."}),"\n",(0,o.jsx)(n.p,{children:"Standaard wordt de gebruikersnaam die Toolbox genereert (zie Synchronisatie leraren en leerlingen) meegestuurd. Je kan bijkomend nog een extra 'loginnaam' meesturen die afwijkt van de gebruikersnaam zodat Uniflow ook hier op kan koppelen."}),"\n",(0,o.jsx)(n.p,{children:"Toolbox zal ook de pincode van elke gebruiker meegeven. In het veld Samenstelling kan je invullen hoe die pincode moet worden opgebouwd. Je kan daar gebruik maken van enkele variabelen om de code wat meer te personaliseren."}),"\n",(0,o.jsx)(n.p,{children:"Als je gebruik maakt van de module Synchronisatie Externen, dan kan je kiezen om die externen ook toe te voegen aan de XML. Zo kunnen externe gebruikers zoals Stagiairs, CLB medewerkers, ... ook toegang geven tot Uniflow."}),"\n",(0,o.jsx)(n.p,{children:"Via de module Uniflow Edu kan je de XML opvragen en nakijken. Via die module kan je ook personeelsleden koppelen aan klassen. Op die manier krijgen zij een beperkte lijst van klassen te zien op de display. Je kan die koppeling ook importeren via een lesroosterbestand."}),"\n",(0,o.jsx)(n.p,{children:"In de loop van het schooljaar kan je nieuwe gebruikers (bv. interims) klassen laten overerven."}),"\n",(0,o.jsx)(n.h2,{id:"xml-ophalen-op-uniflow",children:"XML Ophalen op Uniflow"}),"\n",(0,o.jsx)(n.p,{children:"De XML moet op regelmatige basis worden ingeladen in Uniflow. Recente versies van Uniflow kunnen de basisgegevens van de school rechtstreeks uit Toolbox ophalen. Je dient enkel de URL van Toolbox, de referentie van de school en de sleutel in te vullen."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Base Data service endpoints"}),"\n",(0,o.jsx)(n.img,{alt:"uniflow2",src:i(40745).Z+"",width:"802",height:"718"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Print Center service endpoints"}),"\n",(0,o.jsx)(n.img,{alt:"uniflow3",src:i(86939).Z+"",width:"802",height:"623"})]}),"\n",(0,o.jsx)(n.p,{children:"Oudere versies van Uniflow dienen nog gebruik te maken van het PowerShell script hieronder dat via een Windows taak bijvoorbeeld elke nacht de XML ophaalt en aan Uniflow aanlevert."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:'[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12\n$wc = New-Object System.Net.WebClient\n$wc.DownloadFile(\'https://mijn.toolbox.be/uniflow_edu/publicGetUniflowEDUXML.php?key=UNIEKESLEUTEL\',\'c:\\uniflowedu.xml\')\n\nif (Test-Path -Path "c:\\uniflowedu.xml") {\n    Move-Item -Path "c:\\uniflowedu.xml" -Destination "C:\\Program Files (x86)\\Common Files\\NT-ware Shared\\Data\\EduPlatform\\BaseData\\uniflowedu.xml"\n} \n'})}),"\n",(0,o.jsx)(n.p,{children:"In dit script moet je enkele zaken wijzigen:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"mijn.toolbox.be"})," vervangen door het adres van je Toolbox"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"UNIEKESLEUTEL"})," vervangen door de sleutel die je in de instellingen hebt opgegeven"]}),"\n",(0,o.jsxs)(n.li,{children:["het ",(0,o.jsx)(n.code,{children:"-Destionation"})," path instellen naar de Uniflow Hotfolder. Die is afhankelijk van de versie van Uniflow."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Zet dit script in de map c:\\Scripts\\getCanonEDUXML.ps1"}),"\n",(0,o.jsx)(n.p,{children:"Maak vervolgens een Windows taak aan die dit script dagelijks uitvoert. We vragen om dit bij voorkeur tussen 23u en 6u te laten lopen om onze systemen niet te veel te overbelasten. We vragen ook om dit maximaal twee keer per dag uit te voeren."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Uniflow XML Ophalen",src:i(19714).Z+"",width:"1920",height:"1080"})}),"\n",(0,o.jsx)(n.h2,{id:"gebruikershandleiding-canon---uniflow",children:"Gebruikershandleiding Canon - Uniflow"}),"\n",(0,o.jsxs)(n.p,{children:["Klik ",(0,o.jsx)(n.a,{target:"_blank",href:i(72208).Z+"",children:"hier"})," voor de complete gebruikershandleiding van Canon - Uniflow in combinatie met Toolbox."]})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},72208:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/files/Gebruikershandleiding_Canon_Uniflow_Toolbox-42f3456b306c16c3627bf6e60cafa083.pdf"},19714:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/UniflowXMLOphalen-4cd3bab73642253368118ad14347f985.png"},40745:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/uniflow2-c6d0be843d7bc66e0ceee11f39ff6361.png"},86939:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/uniflow3-00ec168314c2c625dc547d7d6cf88da6.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>t});var o=i(67294);const l={},a=o.createContext(l);function t(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);