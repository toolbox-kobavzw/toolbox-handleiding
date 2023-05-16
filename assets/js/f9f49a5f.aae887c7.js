"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[6964],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>c});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=d(r),m=i,c=g["".concat(s,".").concat(m)]||g[m]||p[m]||a;return r?t.createElement(c,o(o({ref:n},u),{},{components:r})):t.createElement(c,o({ref:n},u))}));function c(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50316:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=r(87462),i=(r(67294),r(3905));const a={title:"Synchronisatie leraren",hide_title:!0},o=void 0,l={unversionedId:"synchronisatie/synchronisatie_leraren/index",id:"synchronisatie/synchronisatie_leraren/index",title:"Synchronisatie leraren",description:"Synchronisatie leraren",source:"@site/docs/synchronisatie/2-synchronisatie_leraren/index.mdx",sourceDirName:"synchronisatie/2-synchronisatie_leraren",slug:"/synchronisatie/synchronisatie_leraren/",permalink:"/synchronisatie/synchronisatie_leraren/",draft:!1,tags:[],version:"current",frontMatter:{title:"Synchronisatie leraren",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Synchronisatie leerlingen (basisschool) en internaten",permalink:"/synchronisatie/synchronisatie_lln/"},next:{title:"Synchronisatie externen",permalink:"/synchronisatie/synchronisatie_externen/"}},s={},d=[{value:"Gegevens uit Informat ophalen",id:"gegevens-uit-informat-ophalen",level:2},{value:"Gegevens uit Wisa ophalen",id:"gegevens-uit-wisa-ophalen",level:2}],u=(g="ImageTitle",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var g;const p={toc:d},m="wrapper";function c(e){let{components:n,...r}=e;return(0,i.kt)(m,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(u,{img:"leraren.png",mdxType:"ImageTitle"},"Synchronisatie leraren"),(0,i.kt)("p",null,"De module Synchronisatie leraren haalt gegevens van personeel uit Informat of Wisa op. In de module Instellingen > Synchronisatie leraren kan je instellen uit welke software de gegevens moeten komen."),(0,i.kt)("p",null,"Toolbox maakt gebruik van het intern nummer/pointer uit Informat of Wisa. Bij Informat is die sowieso uniek, bij Wisa kan die nummering door elkaar lopen. Om dat op te lossen kan een prefix gedefinieerd worden die voor de pointer wordt gezet. Op die manier kunnen leraren en leerlingen uit elkaar gehouden worden."),(0,i.kt)("p",null,"Na het ophalen van de gegevens worden gebruikersnamen aangemaakt. Het formaat kan je ook in de instellingen instellen. Het is ook mogelijk om een maximale lengte in te stellen: gebruikersnamen worden dan ingekort. Staat de lengte op 0, dan is er geen limiet."),(0,i.kt)("p",null,"Het synchroniseren gebeurt altijd in twee stappen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Informat/Wisa uitlezen = het ophalen van de gegevens uit Informat of Wisa"),(0,i.kt)("li",{parentName:"ol"},"Synchroniseer leraren = het intern synchroniseren/gegevens overzetten naar Toolbox")),(0,i.kt)("p",null,"Daarna kan er gesynchroniseerd worden met andere software al naargelang die optie is aangevinkt in de instellingen."),(0,i.kt)("p",null,"Via PDF afdrukken kan je de gebruikersnamen en wachtwoorden voor de leraren afdrukken. "),(0,i.kt)("h2",{id:"gegevens-uit-informat-ophalen"},"Gegevens uit Informat ophalen"),(0,i.kt)("p",null,"Het ophalen van gegevens uit Informat gebeurt via de webservices van Informat. Hiervoor zijn drie WSDLs voorzien:"),(0,i.kt)("p",null,"Algemeen\n",(0,i.kt)("a",{parentName:"p",href:"https://webservice.informatsoftware.be/wsInfSoft/wsInformat.asmx?wsdl"},"https://webservice.informatsoftware.be/wsInfSoft/wsInformat.asmx?wsdl")," "),(0,i.kt)("p",null,"Leerlingen\n",(0,i.kt)("a",{parentName:"p",href:"https://webservice.informatsoftware.be/wsInfSoftLeerlingen.asmx?wsdl"},"https://webservice.informatsoftware.be/wsInfSoftLeerlingen.asmx?wsdl")," "),(0,i.kt)("p",null,"Leraren\n",(0,i.kt)("a",{parentName:"p",href:"https://webservice.informatsoftware.be/wsInfSoftpersoneel.asmx?wsdl"},"https://webservice.informatsoftware.be/wsInfSoftpersoneel.asmx?wsdl")),(0,i.kt)("p",null,"Om de gegevens op te kunnen halen, moet in Informat een gebruiker worden aangemaakt. Die moet in een Toegangsgroep (niet in een Programmagroep) zitten met leesrechten op de nodige instellingen.\nBelangrijk: na het aanmaken van die gebruiker, vraag je via de Informat helpdesk om deze gebruiker te koppelen aan de webservices, incl. de KOBAM webservices."),(0,i.kt)("p",null,"In de instellingen vul je zeker ook de instellingsnummers in waarvoor je gegevens wenst op te halen."),(0,i.kt)("p",null,"Als de verschillende instellingsnummers bij Informat in \xe9\xe9n databank zitten \xe9n de aangemaakte gebruiker heeft rechten op al die instellingsnummers, zullen de gegevens zonder problemen doorkomen."),(0,i.kt)("p",null,"Heb je echter een gebruiker die geen toegang heeft tot alle instellingsnummers, dan kan je in de instellingen bijkomende gebruikers/paswoorden opgeven. In de configuratie gebruikers webservice kan je dan aangeven voor welke instellingsnummers een andere gebruiker moet gebruikt worden dan de standaard gebruiker."),(0,i.kt)("p",null,"Bijvoorbeeld: voor de instellingsnummers 117093 en 048728 moet een andere gebruiker worden gebruikt dan de standaard gebruiker die is ingevuld bij Gebruiker webservice Informat. Dan voeg je die bijkomende gebruiker bij Gebruiker/paswoord webservice Informat 2 toe."),(0,i.kt)("p",null,"In de configuratie zet je deze regels:"),(0,i.kt)("p",null,"117093=2;\n048728=2;"),(0,i.kt)("p",null,"Die regels zeggen dat voor die twee instellingsnummers de tweede gebruiker/paswoord moet worden gebruikt."),(0,i.kt)("h2",{id:"gegevens-uit-wisa-ophalen"},"Gegevens uit Wisa ophalen"),(0,i.kt)("p",null,"Om gegevens uit Wisa op te halen, moeten er enkele stappen doorlopen worden:"),(0,i.kt)("p",null,"Zorg dat de Wisa webservices ge\xefnstalleerd staan op de Wisa server. Staat de server bij Wisa, dan mag je deze stap overslaan. Staat de server in jouw school, dan moet je deze stap zeker nakijken.\nHandleiding hiervoor: WISA_API_Service.pdf\nIn het Querybeheer moeten 3 queries worden toegevoegd:\nLeerlingen algemene informatie\nLeerlingen loopbanen\nLeerlingen bijkomende informatie\nPersoneel"),(0,i.kt)("p",null,"De inhoud van deze queries wordt bij de opstart van Toolbox doorgestuurd.\nIn de instellingen van Toolbox - Wisa vul je bij Queries de namen van de verschillende queries in. TB_LLN, TB_LLNLB, TB_LLNDATA en TB_PERS zijn de standaard namen.\nIn Wisa maak je een gebruiker aan die leesrechten heeft op de nodige instellingsnummers. De credentials van die gebruiker vul je in bij Instellingen - Wisa - Authenticatie.\nVul ook de naam van de databank in alsook de SOAP url van de webservice. Die ziet er meestal zo uit: ",(0,i.kt)("a",{parentName:"p",href:"http://londen.wisa-asp.net:8080/SOAP?service=WisaAPIService"},"http://londen.wisa-asp.net:8080/SOAP?service=WisaAPIService"),"\nAls dat is gebeurd, komen de huidige leerlingen en leraren binnen via de synchronisatie."),(0,i.kt)("p",null,"Wil je de leerlingen/personeel van een andere datum opvragen, dan vul je bij de Synchronisatiedata (instellingen - Wisa) de gewenste datum in. Op die manier kan je bijvoorbeeld eind augustus al de leerlingen die in september beginnen opvragen."))}c.isMDXComponent=!0}}]);