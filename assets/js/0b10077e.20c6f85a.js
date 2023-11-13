"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[6788],{15223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var o=t(85893),r=t(11151);const i={title:"Smartschool bulkmail",hide_title:!0,slug:"/smartschool_bulkmail"},l=void 0,d={id:"smartschool_bulk/index",title:"Smartschool bulkmail",description:"Smartschool bulkmail",source:"@site/docs/smartschool_bulk/index.mdx",sourceDirName:"smartschool_bulk",slug:"/smartschool_bulkmail",permalink:"/smartschool_bulkmail",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Smartschool bulkmail",hide_title:!0,slug:"/smartschool_bulkmail"},sidebar:"tutorialSidebar",previous:{title:"Schoolfoto's",permalink:"/schoolfotos"},next:{title:"Smartschool co-accounts",permalink:"/smartschool_coaccounts"}},s={},a=[{value:"Voorbeeld",id:"voorbeeld",level:4}];function c(e){const n={h4:"h4",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{ImageTitle:i,Thumbnails:l}=n;return i||m("ImageTitle",!0),l||m("Thumbnails",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{img:"smsbulk.png",children:"Smartschool bulkmail"}),"\n",(0,o.jsx)(n.p,{children:"Deze module laat toe om in bulk berichten te verzenden binnen Smartschool. Deze module vertrekt vanuit een Excel-document waarin je per lijn de ontvanger opgeeft. Je kan ook per lijn tot 19 bijkomende kolommen invullen. De waarde van die kolommen kan je vervolgens in de tekst van het bericht opnemen."}),"\n",(0,o.jsxs)(n.p,{children:["Deze module werd in eerste instantie ontwikkeld om makkelijk te ",(0,o.jsx)(n.strong,{children:"communiceren over afwezigheden van leerlingen"}),". In de module Afwezigheden van Smartschool kan je makkelijk via het afdrukcentrum afwezigheden een Overzichtslijst afwezigheden genereren. Die excel kan je meteen gebruiken om via deze module met ouders en/of leerlingen te communiceren."]}),"\n",(0,o.jsx)(l,{img:[t(81383).Z,t(1996).Z]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"bulk3",src:t(94027).Z+"",width:"1706",height:"1210"})}),"\n",(0,o.jsx)(n.p,{children:"Selecteer bovenaan via welk Smartschool-platform je berichten wenst te verzenden (indien je meerdere platformen hebt). Vervolgens vul je een titel en een bericht in."}),"\n",(0,o.jsx)(n.p,{children:"In dat bericht kan je verwijzen naar de inhoud van de kolommen in het Excel-document. Je gebruikt daarvoor de variabelen $$1$$, $$2$$, $$3$$, ... $$20$$. Die variabelen worden dan bij het verzenden vervangen door de eigenlijke waarde van die kolom."}),"\n",(0,o.jsx)(n.p,{children:"Selecteer vervolgens het gewenst Excel-document (in .xlsx formaat) en duid aan in welke kolom het systeem de interne nummers van de leerling kan terugvinden. Voor de afwezigheden is dat momenteel kolom 3."}),"\n",(0,o.jsx)(n.p,{children:"Bevat het document kolomhoofdingen, dan kan je dat ook aanduiden. Deze lijn wordt dan genegeerd en niet gebruikt voor het verzenden van een bericht."}),"\n",(0,o.jsx)(n.p,{children:"Tot slot kan je nog aanduiden naar welke accounts het bericht moet gestuurd worden: hoofdaccount en/of co-accounts."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"bulk4",src:t(74191).Z+"",width:"1970",height:"212"})}),"\n",(0,o.jsx)(n.h4,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,o.jsx)(n.p,{children:"Deze module kan je ook gebruiken om in bulk gepersonaliseerde berichten naar bv. personeel te versturen. Als voorbeeld zou je bijvoorbeeld een bijdrage voor het personeelsfeest kunnen vragen."}),"\n",(0,o.jsx)(n.p,{children:"Het excel document zou dan bijvoorbeeld deze kolommen kunnen bevatten:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"intern nummer personeelslid"}),(0,o.jsx)(n.th,{children:"totaalbedrag"}),(0,o.jsx)(n.th,{children:"aantal personen"}),(0,o.jsx)(n.th,{children:"naam"}),(0,o.jsx)(n.th,{children:"voornaam"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"123"}),(0,o.jsx)(n.td,{children:"15"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"Peeters"}),(0,o.jsx)(n.td,{children:"Jef"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"456"}),(0,o.jsx)(n.td,{children:"30"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"Wouters"}),(0,o.jsx)(n.td,{children:"Marie"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"789"}),(0,o.jsx)(n.td,{children:"30"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"Janssens"}),(0,o.jsx)(n.td,{children:"Bernard"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Als tekst zou je dan deze tekst kunnen gebruiken:"}),"\n",(0,o.jsx)(n.p,{children:"Beste $$5$$"}),"\n",(0,o.jsx)(n.p,{children:"Jij hebt ingeschreven voor het personeelsfeest voor $$3$$ personen. Hiervoor vragen we een bedrag van $$2$$ euro."}),"\n",(0,o.jsx)(n.p,{children:"Gelieve dit over te maken op de rekening van de school."}),"\n",(0,o.jsx)(n.p,{children:"Met dank,\nDe directie"}),"\n",(0,o.jsx)(n.p,{children:"In het geval van Marie, wordt de tekst dan zo verstuurd:"}),"\n",(0,o.jsx)(n.p,{children:"Beste Marie"}),"\n",(0,o.jsx)(n.p,{children:"Jij hebt ingeschreven voor het personeelsfeest voor 2 personen. Hiervoor vragen we een bedrag van 30 euro."}),"\n",(0,o.jsx)(n.p,{children:"Gelieve dit over te maken op de rekening van de school."}),"\n",(0,o.jsx)(n.p,{children:"Met dank,\nDe directie"}),"\n",(0,o.jsx)(n.p,{children:"Dit bericht stuur je vervolgens enkel naar de hoofdaccount en je vinkt aan dat er in de Excel kolomhoofdingen staan."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},81383:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/bulk1-0adbc4aee77d50b471ee16be254b8de8.png"},1996:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/bulk2-009e21e3fcb47e9d3bef573438f07fa1.png"},94027:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/bulk3-10b5169448113604d430565ba53346bf.png"},74191:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/bulk4-ec7b16fea805dcfa6260adec27cb24d5.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>l});var o=t(67294);const r={},i=o.createContext(r);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);