"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[5006],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},k=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),m=d(t),v=r,p=m["".concat(s,".").concat(v)]||m[v]||u[v]||i;return t?a.createElement(p,o(o({ref:n},k),{},{components:t})):a.createElement(p,o({ref:n},k))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=v;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},91501:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const i={title:"Inventaris",hide_title:!0,slug:"/inventaris"},o=void 0,l={unversionedId:"inventaris/index",id:"inventaris/index",title:"Inventaris",description:"Inventaris",source:"@site/docs/inventaris/index.mdx",sourceDirName:"inventaris",slug:"/inventaris",permalink:"/inventaris",draft:!1,tags:[],version:"current",frontMatter:{title:"Inventaris",hide_title:!0,slug:"/inventaris"},sidebar:"tutorialSidebar",previous:{title:"Importeren in Informat",permalink:"/inschrijvingen/verwerking/importeren_informat/"},next:{title:"Kas",permalink:"/kas"}},s={},d=[{value:"Voorbereiding",id:"voorbereiding",level:2},{value:"Items aanmaken",id:"items-aanmaken",level:2},{value:"Items wijzigen en zoeken",id:"items-wijzigen-en-zoeken",level:2},{value:"IP-adressen koppelen",id:"ip-adressen-koppelen",level:2},{value:"Herstellingen",id:"herstellingen",level:2},{value:"Toestellen toewijzen aan gebruikers",id:"toestellen-toewijzen-aan-gebruikers",level:2}],k=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},m=k("ImageTitle"),u=k("Youtube"),v={toc:d},p="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(m,{img:"inventaris.png",mdxType:"ImageTitle"},"Inventaris"),(0,r.kt)("p",null,"De module Inventaris is bedoeld om alle items die in de school aanwezig zijn makkelijk bij te kunnen houden. Zo kan je de inventaris gebruiken om al je ICT materiaal bij te houden: computers, beamers, printers,... De inventaris heeft ook opties om de administratie van Digisprong makkelijk op te volgen. Je kan toestellen toewijzen aan leerlingen en personeel, je kan herstellingen registreren, opvolgen en zelfs factureren, je kan gepersonaliseerde contracten aanmaken,... Elk item kan een eigen QR code krijgen en je kan items in een bepaald lokaal plaatsen. Daarvoor linkt de module inventaris aan de modules van de Gebouwen en lokalen. Je kan deze module ook gebruiken in combinatie met de module Netwerken om documentatie rond je netwerk, gebruikte IP-adressen, patchkasten, netwerkoutlets,... te noteren."),(0,r.kt)("p",null,"In deze screencast leggen we de werking van deze module uit."),(0,r.kt)(u,{url:"https://www.youtube.com/embed/O4u-2SnFxjQ",mdxType:"Youtube"}),(0,r.kt)("h2",{id:"voorbereiding"},"Voorbereiding"),(0,r.kt)("p",null,"Om de module Inventaris vlot te kunnen gebruiken, moeten enkele zaken ingesteld worden. Het eerste zijn de verschillende types van items die je wenst te registreren. In de module Inventaris ga je naar het menu Types. Daar kan je een type toevoegen. Denk bijvoorbeeld aan Beamer, Computer, Meubilair, Netwerk, Printer, Randapparatuur, Virtuele machines, Tablets, Brandblussers,..."),(0,r.kt)("p",null,"Via de knop 'Voeg type toe' kan je nieuwe types aanmaken."),(0,r.kt)("p",null,"Per type kan je nog bijkomende subtypes aanmaken. In het voorbeeld van het type 'Computer' kan je bijvoorbeeld de subtypes Desktop en Laptop aanmaken. In het voorbeeld van het type Netwerk kan je de subtypes Firewall, Switch, Wireless access point,... voorzien. Die subtypes maak je aan door in de kolom Subtypes op het plusje te drukken."),(0,r.kt)("p",null,"Naast de items kan je ook zelf de statussen van de items aanmaken via het menu Statussen. Daar voeg je zelf de gewenste statussen toe. Enkele voorbeelden: Actief, Defect, Te koop, Verloren, Uitgeleend, Afgevoerd, In herstelling, In bestelling, Verkocht. Bij elke status kan je aangeven of het item met die status nog in de school is of uit de school."),(0,r.kt)("p",null,"Elk item kan voorzien worden van \xe9\xe9n of meerdere labels. Door middel van labels kan je zelf bijkomende informatie toevoegen waarop je makkelijk items kan groeperen. Je kan zelf labels aanmaken via het menu Labels. Elk label bevat een tekst, een voorgrondkleur en een achtergrondkleur die je zelf kan instellen. "),(0,r.kt)("p",null,"Elk item dat je toevoegt, kan je koppelen aan een leverancier. Alvorens items aan te maken, kan je best de nodige leveranciers aanmaken via het menu Leveranciers."),(0,r.kt)("h2",{id:"items-aanmaken"},"Items aanmaken"),(0,r.kt)("p",null,"Nieuwe items voeg je toe in het scherm 'Items school' door op het plusje te klikken. Je krijgt nu een scherm waarin je de leverancier en het type item kan selecteren. Als dat type nog subtypes heeft, krijg je een extra lijst te zien."),(0,r.kt)("p",null,"In het volgende scherm kan je bijkomende informatie van het item opgeven. Merk en model kan je type of je kan reeds eerder ingevulde merken of modellen uit de lijst selecteren."),(0,r.kt)("p",null,"Als het item wordt toegevoegd ter vervanging van een bestaand item (bv. defecte tablet vervangen), dan kan je in het veld 'Ter vervanging van item nr.' het item nr van het originele item invullen."),(0,r.kt)("p",null,"Het veld serienummers is groot en kan meerdere serienummers bevatten; telkens \xe9\xe9n serienummer per lijn. Hierdoor kan je in \xe9\xe9n beweging meerdere items van dezelfde soort, leverancier en facturatiedatum aanmaken. Denk maar aan een bestelling van 30 laptops van hetzelfde type."),(0,r.kt)("p",null,"Als je reeds lokalen hebt aangemaakt via de module Gebouwen en lokalen dan kan je hier alvast opgeven in welk lokaal het item komt te staan. Als je netwerkoutlets hebt aangemaakt in de module Netwerken dan kan je hier ook selecteren via welke outlet het items met je netwerk is verbonden. Dit zijn optionele velden."),(0,r.kt)("p",null,"Ook optioneel is de naam die je aan een item geeft. Een naam kan je gebruiken om een toestel snel te identificeren. Bijvoorbeeld 'Laptop van de directeur bovenbouw' of 'Printer in het open leercentrum'. Verder in de handleiding zal je zien dat door het invullen van een lokaal of een naam er meteen ook een historieklijn wordt aangemaakt voor dit item."),(0,r.kt)("p",null,"Je kan een nieuw item alvast een label meegeven alsook het jaar waarin je dat item mogelijk wil gaan vervangen. Als je schat dat een computer die je in 2021 toevoegt 5 jaar mee zal gaan, dan kan je hier alvast 2026 invullen zodat je hiermee rekening kan houden in je begroting van dat jaar."),(0,r.kt)("h2",{id:"items-wijzigen-en-zoeken"},"Items wijzigen en zoeken"),(0,r.kt)("p",null,"Zodra een items is aangemaakt kan je via het overzicht de nodige wijzigingen aanbrengen. Dat kan per item of door middel van de vinkjes voor elk item in bulk. Gebruik de menu-opties bovenaan de tabel."),(0,r.kt)("p",null,"In de tabel kan je items opzoeken door middel van de snelfilter. Je kan op serienummer, naam, merk,... opzoeken. Wil je geavanceerder zoeken, dan kan je de filter helemaal bovenaan gebruiken. In die filter kan je zelf criteria toevoegen door middel van de blauwe plus achter het veld. Zo kan je heel fijn items gaan opzoeken."),(0,r.kt)("p",null,"Als je een item verplaatst, wordt dit bijgehouden in de historiek van het toestel. Hetzelfde geldt voor het wijzigen van de status: ook dat wordt historisch bijgehouden. Door op het icoontje voor een item te klikken, kan je die historiek per toestel opvragen."),(0,r.kt)("h2",{id:"ip-adressen-koppelen"},"IP-adressen koppelen"),(0,r.kt)("p",null,"Als toestellen in je netwerk een (vast) ip-adres krijgen, kan je dat hier ook registreren. Klik op het wijzig icoontje van een item en ga naar het tabblad netwerk. Daar kan je \xe9\xe9n of meerdere ip-adressen toevoegen. Je kan ook het type van netwerkadapter opgeven (vast, draadloos, virtueel,...). Een overzicht van alle gebruikte IP-adressen kan je opvragen via de module Netwerken."),(0,r.kt)("h2",{id:"herstellingen"},"Herstellingen"),(0,r.kt)("p",null,"Achteraan elk item staat een icoontje waarme je een defect of herstelling kan registreren. In dat scherm kan je invullen over welk onderdeel van het item het gaat (bv. harde schijf of schermbreuk of ...) en bijkomende informatie over de schade/herstelling toevoegen. Je kan hier ook de prijs van de herstelling invullen en het item meteen een andere status meegeven (bv. defect). Krijg je van een leverancier die de herstelling uitvoert een case nummer of incident nummer, dan kan je dat hier ook in vullen."),(0,r.kt)("p",null,"Herstellingen kan je per toestel opvragen via het icoontje voor elk item. In het tabblad Herstellingen worden ze opgelijst."),(0,r.kt)("p",null,"In het menu Herstellingen kan je een overzicht krijgen van alle defecten en herstellingen. Je kan hier ook in zoeken."),(0,r.kt)("h2",{id:"toestellen-toewijzen-aan-gebruikers"},"Toestellen toewijzen aan gebruikers"),(0,r.kt)("p",null,"Hoe je een toestel aan een gebruiker (leerling of personeelslid) toewijst, lees je hier: toestellen toewijzen"))}g.isMDXComponent=!0}}]);