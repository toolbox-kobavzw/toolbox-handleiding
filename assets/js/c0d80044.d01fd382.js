"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[5273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=k(e,["components","mdxType","originalType","parentName"]),c=d(n),v=r,u=c["".concat(l,".").concat(v)]||c[v]||s[v]||o;return n?i.createElement(u,a(a({ref:t},g),{},{components:n})):i.createElement(u,a({ref:t},g))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=v;var k={};for(var l in t)hasOwnProperty.call(t,l)&&(k[l]=t[l]);k.originalType=e,k[c]="string"==typeof e?e:r,a[1]=k;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},56596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>k,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const o={title:"Kasverrichting toevoegen"},a=void 0,k={unversionedId:"kas/administratieve_verwerking/kasverrichting_toevoegen/index",id:"kas/administratieve_verwerking/kasverrichting_toevoegen/index",title:"Kasverrichting toevoegen",description:"Klik op dit symbool  om het kasblad te openen voor het toevoegen of raadplegen van verrichtingen.",source:"@site/docs/kas/02-administratieve_verwerking/01-kasverrichting_toevoegen/index.md",sourceDirName:"kas/02-administratieve_verwerking/01-kasverrichting_toevoegen",slug:"/kas/administratieve_verwerking/kasverrichting_toevoegen/",permalink:"/kas/administratieve_verwerking/kasverrichting_toevoegen/",draft:!1,tags:[],version:"current",frontMatter:{title:"Kasverrichting toevoegen"},sidebar:"tutorialSidebar",previous:{title:"Administratieve verwerking",permalink:"/kas/administratieve_verwerking/"},next:{title:"Kasverrichting wijzigen en documenten toevoegen",permalink:"/kas/administratieve_verwerking/kasverrichting_wijzigen/"}},l={},d=[{value:"Datum",id:"datum",level:2},{value:"Relatie",id:"relatie",level:2},{value:"Omschrijving",id:"omschrijving",level:2},{value:"Grootboekrekening",id:"grootboekrekening",level:2},{value:"Bedrag",id:"bedrag",level:2},{value:"Dit bedrag",id:"dit-bedrag",level:2}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=g("LegacyAction"),s=g("Text"),v={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,i.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Klik op dit symbool ",(0,r.kt)(c,{img:"geld.png",mdxType:"LegacyAction"})," om het kasblad te openen voor het toevoegen of raadplegen van verrichtingen."),(0,r.kt)("p",null,"Klik vervolgens op ",(0,r.kt)(c,{img:"pluscircle.png",text:"kasverrichting toevoegen",mdxType:"LegacyAction"}),". Een pop-up scherm zal verschijnen om een verrichting te kunnen toevoegen. Geef hier de gevraagde gegevens op."),(0,r.kt)("h2",{id:"datum"},"Datum"),(0,r.kt)("p",null,"De datum is standaard de dag van ingave. Deze datum is desgewenst aanpasbaar. In Exact Online zal dit tevens de boekingsdatum zijn van de verrichting. Om boekhoudkundige redenen is het niet mogelijk om een kasverrichting toe te voegen waarbij de datum v\xf3\xf3r de laatst geregistreerde kasverrichting ligt. "),(0,r.kt)("h2",{id:"relatie"},"Relatie"),(0,r.kt)("p",null,"Van zodra er tenminste twee karakters worden opgegeven begint het systeem alle bekende relaties te filteren die in het systeem voorkomen. Dit zijn alle relaties (leerlingen + leraren) die via het administratieve pakket Informat of Wisa aan de Toolbox zijn toegevoegd. Vervolgens kan je uit de verkregen lijst de desbetreffende relatie geselecteren. Afhankelijk van de eerder geconfigureerde instellingen kan een relatie zowel een klant als een leverancier zijn. Het is belangrijk dit juist te selecteren, omdat klant en leverancier een verschillende boekhoudkundige verwerking kennen."),(0,r.kt)("p",null,"De kas is ook verbonden met de module openstaande facturen. Eens een leerling als klant wordt geselecteerd, zullen alle openstaande facturen voor deze leerling worden getoond. Selecteer een factuur om ze te koppelen aan de cash betaling. Ook wanneer het gaat om een deelbetaling, kan je een factuur selecteren. Het betaalde gedeelte wordt automatisch afgepunt in Exact Online nadat de betalingen uit de kasmodule zijn overgezet. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Openstaande factuur",src:n(62467).Z,width:"516",height:"69"})),(0,r.kt)("h2",{id:"omschrijving"},"Omschrijving"),(0,r.kt)("p",null,"Geef hier een vrij in te vullen omschrijving mee. Bijvoorbeeld: \u201cBetaling schoolfactuur\u201d. Dit is tevens de omschrijving van de boeking in Exact Online."),(0,r.kt)("h2",{id:"grootboekrekening"},"Grootboekrekening"),(0,r.kt)("p",null,"De grootboekrekening die als tegenrekening van het gekozen dagboek zal worden gebruikt is standaard bepaald aan de hand van het type relatie, boeking en de eerder opgegeven instellingen. Dit is eventueel aanpasbaar door te klikken op       en een andere grootboekrekening uit de lijst te selecteren. De lijst bevat alle actieve grootboekrekeningen in het gekoppelde Exact Online dossier."),(0,r.kt)("h2",{id:"bedrag"},"Bedrag"),(0,r.kt)("p",null,"Geef hier het bedrag op. Dit moet altijd een positief bedrag zijn."),(0,r.kt)("h2",{id:"dit-bedrag"},"Dit bedrag"),(0,r.kt)("p",null,"Bepaal hier of het bedrag uit de kas wordt onttrokken (",(0,r.kt)(s,{color:"red",mdxType:"Text"},"gaat UIT kas"),") ofwel aan de kas wordt toegevoegd (",(0,r.kt)(s,{color:"green",mdxType:"Text"},"gaat IN kas"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Openstaande factuur",src:n(8987).Z,width:"137",height:"124"})))}p.isMDXComponent=!0},8987:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAB8CAYAAABde5NjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAB1gSURBVHhe7V0FeBVH1764W4AiQYO7tUih0A/XtljhR0qLtLRQWrS4BA0klOBWoFgobkFLKF48JZTiQRpcgnve/5zZ2cvezb13L19JyRfmfZ7zkD0jO/LOOWdmdy82KChYQJFEwRKKJAqWUCRRsIQiiYIlXitJ7t27h5CQEGzatEnI77//jhcvXsjU14OoqCjs3bvXfo/du3fj+fPnMvXNIba263VAkOTGjRv4+eefMWvWrGgyZ84cbNiwASdPnrTs9JEjRxAvXjzYbDYhhQsXxuPHj2UqRPlHjx7Z5dmzZzLFczx9+hTFihWz3yN37ty4e/euTH1z4L4UL17c3q5cuXLFina9DgiS8ArQO+dKUqZMKQZhyJAhuHz5sihsBpPEWKZQoUIOJFm7di28vb3tMn78eJniOZgkZcuWtd+jSJEiwoK9aTBJypUrZ28XL5DY0K7XAUGSgwcPImnSpPYOWomPjw+2bNkiKjDi9OnTqFSpEkqXLi2kVatWePLkiUwFFi1a5FAPE+5VwSQxTkbRokVjDUnKly9vb1dsIe/rgFOSpEmTBvXq1UP9+vVRt25dYRH0NF1SpUol/O6rYOPGjQ51jBs3TqZ4DmckuX//vkx9s6hQoYK9XXGeJO+9955I1MGTsGDBAuEi9DwsZcqUwYMHD2QuLXCdO3cupk6dKoQDOAZPbFBQEDp06OBQ/qOPPsLkyZOFTJ8+XcRGVjCTpGTJkkLPLrNTp07CgnH7e/TogRMnTog0V1izZg2+//57VK5cWcQ5/C9f6+12he3bt6Nz584oVaqUGAP+mxeAO0vCVlbvK8uff/4p9Bybbd68WejCw8OFjsd04cKFGDx4MJo3by7Ix+3jvjVs2BADBw50asmN2Lp1qxgPvY38N28q1q9fb28Dx6GeLDCnJOHGcLRuxp49e4SV0fOxcGd0cCcTJUpkT6tevbrQ37lzB5kyZXIo50wOHDgg8ruDmST58+fH119/7XBfXTJnzizIYwYH4dWqVYuW3yjt27cXE2hGv379nOZnSZgwof1vM0nmzZvnkHfChAkIDg52CMKXLVsm8p46dcohryv56quvHNy5Dl4gzvKbhef84sWLspRruCSJq61ru3btHG7Utm1bmQKcP3/egQyNGjUSeiZJzpw5Hco5k0OHDon87mAmiZVw3ocPH8rSEEG3cWKSJEmCd999V+QzE9nX11eW0sDW0ZjOwnVxWSZrggQJ7HozSRYvXuxQjndlxmuW5cuXi7xsAXUdB8Bcv34PY36WGTNmiDI6/P39o+XhtnB5rsu4mLJmzYqIiAhZ0jVemSSzZ8+252N5//337VtjVyTh9H379gnzaSzLq5XNIsu2bds88uFmkqRIkQLffPON2KZzPSNHjhQ64304TQe7E12fI0cOB0vz999/C9Osp/MgXr16VaRdu3bNwd0mS5ZMHA/ofWcXweOmp1uRhIXdIo+RLvv37xd5eXUPHz5cWG6zRWe3z8TW6/j4449lCnDp0iW888479rTEiRNjypQpYswYPKc1a9a0p8cYScw7lHz58tlXqiuS6GDzaiwbEBAgUzyHmSS8ks0wm9sBAwYI/fXr15EtWza7nmMJro8tXWRkpHAvbD2MZXXfz5Nj1LOLM4MXjJ5uRZKhQ4fKFPdgkvBEMoF4/CZOnIjUqVPb6+F76vjll18c7tG6dWuZ8hJMKj09xkjCgamej4WDNStLomPJkiUOZXm1vCrMJHG2u+HgzHifNm3aCD2fAMePH9+u57OftGnTOgjrjGV54Bm9e/d20HMgboTVFthMkmnTpskU5+C4qXv37uJsytwmo3zwwQeyBIQVNaY5O4dq0KCBPT3GSNKtWzd7PhZ9AhhviiRmN8VRvPE+zZo1E3ozeTwRnQwdO3Z00OtBpo5XJQlbBFdg65UhQwaH/Exg3snxQSK7EV1vJMmgQYMcyvAOxowYJwnvXrJkyWLPx2Lc3bwqSUaMGCFTPIcnJOEtpfE+HPsweOtqfGzAeo5J+LzHmXAcdevWLVH2u+++c6hTtzA6XhdJOLYpUaKEPV/69OnFVvXChQsi/fbt22Jy9XQjScaOHWvXs7BlMeOTTz6xp/8jkjBbzeBBYybreViYTMaBsCKJeaD8/PxkiudwFpMYz2oYo0aNcriPbna5fbwidb2+RXcHPXDk+MlYZ5cuXYTeiFeJSVyRhB9tGANTjpuM4DqNAbSRJKtXr7brWXjXZjx74rGrWrWqPf0fkSRjxoxix8AHMBygcURs3N6x8A5i586dohIdViRZuXKlQx1NmzaVKRAPw8yT7QxmkvC2znhWwHGH0dqxP+dzBx3sevQ0FnafvHMxgoPYpUuXirMUfVtujme4/0yco0eP4vDhwyLgTZcunT39vyUJ12V0J3zqzVZKBxPBuHszkoR3YkYrw8Lt4Hlk4Z2bsQ//iCRWwodUfFpphhVJjh075jAALPysh09e2SJwO6xgJgnv+3kFcx1MZvP2t2/fvrKkBj7pNLaRJXv27OLxA9fBjyN4x6an8aQxODjnPMZy7uS/JQnvtMznITy53LaKFSs66FmMJGGYXY47eSWSePIUmIVXKDOSj5idgWMW46mj2Zyz6WbLZKzTKJ6euDo7VHImvAXk/Gbw+YPxSbIrYUKHhYXJUtqOI0+ePE7z8qEin7vo1zxWxlcF5plOXMeMGSNTooMJ5ewEmYXH3+iOnB0BDBs2DF5eXg7luD6OwZhUuo5JwmcrVhAk4Yy8b+fo2Cx8Qz5A27FjhzhncAc206NHj7aX5TMVM3jS+ICHVyyfwnJDOfjkJ8aeNJhXND/n0e/B77zwaufAkh9Ecn1sojnYcwduBweffLTNK5TPT7gsD3qTJk3EePDiMZOMFwIfyOn34mcp/AoEgw/X9HaxpTC6QXZLehqLs8cFRvAOhy0xxx/sUtn9h4aGijS2Fno9P/30k9CZwa5n/vz5Ik9gYKD9WZHxISQvNo+f3bwp8OEVxyFGn/tPwBPqSVzjDHwg+Cpt4XsZj/tjCnwPM1HdgY/0J02a5PSZDOuNsWWLFi1kinu8UZIovH6wxWcCJE+eXGzJa9WqJcT41hwLu59du3bJUu6hSBLHwDtOIxmcCe9eOYTwFIokcQwc1/GDVI7xeOfIbxFy7MeWhGMtPmBztfFwBUWSOA6OZ1icvR/kKRRJFCxh4wMsJUrciY2PpJUocSfK3ShYQpFEwRKKJAqWUCRRsIQiiYIlFEkULKFIomAJRRIFSyiSxFHwC0f6G/buwC8y6Z+XuoIiSRwFf9PEXzNcuXJFaqKDXxflb5Jdvd2mQ5EkDoNfPWWiOPtlKv6pDH6FgN+ntYIiSRwHWxR+295IFP4qkd8zYaJ4AkWStwBMFP5Qi4nCL2vnzZvX41cXGYokbwn4d0v4eyP+5SP9zXlPoUjyFoF3PGfOnJFXnkORRMESiiQKllAkUbBENJLwW9VK3m4xw8Y/VmMU/tZWydstZk7Y+NtXFv37DCVKjMKksfGX7/zhNgt/nKxECQvzgf/zCOaHjRX88wP8gyv8AypKlPDvqjAf+FcWmCy2+5E38OD6Bdy7dh53roQj8vJZJW+xMAfuXj2H+8SJhzcu4sGdG7D1+XE+2k/ejq8mbsOXSpRI+WrSNsGLvuMWwPaf/sFI/iPgFaBEiaMwL6oNWAdbnUFrkWk8kGOcEiWOwryo77ueSbIGmSY4z6Tk7RY7SWoPVCRR4lzsJKk1YDUyK5IocSKKJEoshUlSbwgFrookSlyJIokSS1EkUWIpiiRKLEWRRImlKJIosRRFEiWWokiixFIUSZRYiiKJEktRJFFiKYokSixFkUSJpSiSKLEUO0lq9F+NjIGA91glShwlAxGlzmAiSW2yJFknArmIKEqUGCULeZj6bEnmLVmN8Egg/LYSJY5ylngRtIJIsm7tavntuIJCdGzaQCRZvVqRRME11q37HyCJk5/LcMCT+xFYcGgudkeckhrg0tV9mLtvLvZejpCa6AgLX4u5oWsQ6e4/FH96G6tC5yLkwnGpePsQq0ly4ux6+AaPw42n7llykybb1sWGZmso+pZYF9Ieto42pPOvjXP3X0itIwbM9oGtVy6E3ZUKJ4i6fRiZe9nw4S9jpObtQywmyXO0meiNhKPr4q6FJbl1fiOS9Lah7YYZUgNs3v4dbD/YYOtuw8crJkutI0YsLAXboBI4dk8qnCAq8ggKDrKhwQoK899SxGKSRKHNlFxIO+5TPJQaV3BOks6w9U4Mn5FZ6N/k+Omvl65Ixz8mSdQzPH3h3ErFJXhEkn1Hg9B8RiV4+3mjysxWCDl/CnM3tEStoO54bBijMxe24YfFn6NUQG54+3uj1MQaGP5bEG4/khkkXjy4hDkhQ1BzYhmRL9fYomi7uC/2XpI/a33nNCpPyofkgxMivm8yZB3ujf6//6alOYEzkmza3pFcSRrM2r8K5UbGQ8pRVaO5nf+WJFEPzqPdTxVQdmojhF67JbXkHsM3oVtQKxSR/S83uT78d63Avacyg8QfJ1fgi59qIfsYb/iMLYVOq0bi6A3ab8ZSWJJk9bYfEK+rDUUm1Uevzb3wxbxayOSbDT6DkiLHhKZ4KMf9SNg0ZKSJyupfBV039hR5m8woC9t3NtRZ4g89rHhy7xyaTchFqzsNWizrIvJ9u6wlMvazIfmw93DwFs3Y4+sYs7UvivqlQZKRBfBdcC+sPHtCq8AJXJKkawIEX32EY2FjRcxSZ6mjNXgVktRfMV5TPLiINhNykyvLjjlH/9B0hN2H/JG2pw0+gdXRY5PW/4+mlBD9b7x6FtlFDYeOTEB6coOliWCcp8eqdshEfU8zshL+uHlf5opdcEuSu1e2IxMNfpmfe+PRc6kkbNzWE7ZuNhSY3haPWRH1EO3HZ0OqEVUQ8UBksaP/XJqIgT74I1Ibpu07foDt23gI+CNMXOs4cYQmkga03+87pQb4alpepAtsKa9cwx1JFpy/Jq4HziPCdk2EGUdfks1TkhQgkjQO/pkYfhvtp+aHrV8+rD5j2DU9uYVP/NIhY0Bj3DRZjfbTiFDDiiJCWtP2U3Mj4ZiPtAuJU8emIRGRuMd219byTcItSVZtJb/eIz7WnH9pUgWe30XtgFTINqkFHvHcRz3F2Yg/cemeoIwdkbcuYNB8mpyBebD7hmZybt0+jyOXwsXfOp49uoede/0Rj1biDzt/ldqnFJPkppikCe5YuH13JJkfflFcP7kdhlJDEiDZyMo4J0kx3EOSFPaNj4ZBfdFtTnmygJkQLIlnx/MnOHkxDJdNwdPNG+fQZkYpxB+eG2flPfrNK0d1eGHYroX4y/C/Rpy//Bci7tyRV7ELbkkyfBF1aHAB/OWk7f1/LgDv8U3s7oYRdjoY/Vd1Qb3JlZFzdFZkGZoRSfrTDmNEKey7+TLjk8jTmLZ1MNrM+Rgl/fMg84isSEPuKx6Z4YF79NX0ukjyt9RQbHVwlHA7tZZqrsMvyDOSlBuVFAnIJdjoHrb+aTD96F8y1REHT6xEnxWdUHtSBWQbnRlZfTMgYb94SOtfEuHyHjcv70H1AG/RDlufxMgXWB7d1wfggB6PxUK4JcmwhaWJJAWdkmTAzwWJJI2lJXmGmetai+1mhlHF0CyoA/psHoolYb8hcFltsiR58bskSfiplSg4OCmZ7FT4cEZjdA3ujcDdCxGybyYS9rGh9+6tIl9MkIRsFlm292H7PjF+OX0K01dUIZIUtyRJ6WHxkcqvLDYc241mgekpmC6N43cMJ3AvHmLc8qai/1lGl0DLRR3Rb8sQrAnbiS4LqiL+iDx26yXw/D42HZqHbktaoSgFr7YeRJhe6TB492aZIXbBLUmWb/maOpAA6y6aWBL1GI3GpYX3pObg+Yu8tAEpaIDKLRyCB6bTy4nLqtLqy4Xfhcd6hLZTshJpcmHPZcdo/nZ4kIhzeu7YIDUaSdIFfop7etTnAp6ThGqNJLczNDHS/1gZraYURbxh73oUkzRYOUVcnzs5H4kpkK+4aLi4Zpw7FYSEpKuxdCweG2I3Rq+5FLwO9cFpcWD3AhFXTyPinmG79/w5Tp7dgoojE8PmVwtXTTFNbIBbkkRe3iIi8SqLRsLY9/0H/JCI4of8078Q15fOzNFOPNc7/jddEedWwWcwrZJB+bHjBtdwDzX94yGpXwXcMJLp8U10nk1W63sbuoUskMqnaDU5B1KN/VgLjt3gVUjCOHh4DBL0onb1tSHhqMqWJOHdzUcrX57mTlxeV/R3bOgRcf3H4XEi6O4Usk5c6zh1IgjvkLuNP7wQ/hRr4g6ajkkP73EtcMdEhv8LTIP4o+viprtHBG8IbknCWLKli5i8sjOaw3ebL7osboIcvu/Ae2AKFJz6GZ7QKo96eBENx2Ukk5kMn63oSfkGo/MvTZB7RC4U88tDvjcDgiM0a7Ro0zdigItOayTqG7SxGyr550cR/xJITRPdbO1UkY9qxaAFFYUJrzPjcyw8eljqo+PmOeoEWaGWwdpqZ6zf2ha2TjbMOasFro6Igm9QZdEv29CyOOr2WD4UOYlMbCV0PL9/Bh8MT0bkL4TDtx7Q9UlUo92NrW9atF3dG0Oo/x0XfIIcI3xQcnQOsqTvYNuVJ6Lsxp19kYCsTp7xtTAgxFeMVaPJZG16pMbIAztEntgGQZJVq1bJS+fYdXg6ak8oAa/hXig7tSk2ngrFZ1OyIeekpoIkjMgbYei3qCVy+GWA16gcqD+7LdacOY4r5zaQ382PqWGhWsZnj7BsxwhU+bEAvEZ4oURgNQzbsRh3H9xDlzmlUWXxMHudVy7txeczqyOzb0a0XqeTJzruXNqJYgEF0Jfq0bFr/yAUGFkIq/92/j9ZPrv9J+pNKooCU5vhtGnbbkTU3ROoM74AOm6eJzUawo5OQ8HhudBhc5C4vn7lALov+BQ5R6WnuCw3Gs79EpvPnyH3tAD5RxfEvJOnRT7GnqPz0WpGDWQd5QWvkVlQ86c2WHbc9SJ403BLkovngtFtcX9cjHYuHknbQhvKLxwsr60QhacvnNhRJ7HGc8rnLAR5EWVy9q8Nzu7mKaLwmEjvAKfVReHZCxft/ye3/5fgliQ3LwQjAbmGYjM74eztSJqoF7gbeQ4jltQjf58Ik48ekzkV4jIs3c3GXb7IMTAJkg1MhRTDUyD1oJRIOiAr+mxb+b+wCBReAzyKSe7eOovl++fgx10/YvaBVQi/6SbSU4hz8IgkCm83FEkULKFIomAJRRIFSyiSKFjif4MkVnvtwzuAiROBi6b3Xux4AayeB8xcCGin4wTSLZ8PzFsurx/Q31OAgICXEjheq3fsWEf9tv2yjAlPIoGplP+3A1IRNxCLSULM2L4M6DkS9ncfXWFYB8Bmo94clQozngHl01OeLHxYLEG64hmAtMU1EkZdAUpk1OphiR/v5d8s8QzX3UdrVZhx+7iW3rq/VMQNxGKS0EqvQpOauZ68doOA77XJ2ez8ZSBBiFp5gfSF+UGsBOk+yAf4fMAPnAl0v2uXgL//BiIigKtEmm/f1+rdEgpcuazpL14korl4bBx5CkhG+b8eIRVxA69GEuOndPy3u0/rrD670+EqXxT5hao5gbxN5L2k3hn+KUnsLsiEAdW0eo97+Ca7O5I8Inf2mO7pDJ6MlafjGQPwjCTLZwAfliTTnJYm7hNyA0eAfg2BZp1lBok964E2NKnZ39HylqwA+M0kd2/q4K1wYEhPoHQhLZ93bqBtFyD0nJZ++yRQ2BtIGJ/MfiItz6wtWpozxBRJ+vxHq/eI8yfJ0eCMJHfOA9VLk7urA5w2vBu7ew3wGY2Vd2Y5VhWpH7MQ7SOjNaSrSRaN82QvSNZtABB+Uyb+O7AmySgiAg9Urf8j3z8M+KIxDTZ1LFNScgfNZCbC8h+1fGXrAkOHanmbyEFuTX/rPLlGBCiZCUhKROrWT8vXvSNdU74MxYALNIuPaRACKRbJk47uVUTLc/CMrMAJYhtJOsq31u5dACqRNUxE8qshXlrir9VbwTBWjT7UdB0oTcdCin1Y90kbLU+fb4GUdJ2NFl/Ev/doxD1JTv6qNfIzX6mQmDNY09duKxVkSj+ggShCq8VsURu/ByTJRdZBsmTuD2QhkgGbTF/UbZ2k1TnV8OJNXZrYAtafVMQqkjDZu9MO5ylFyNUKAMnzA3sNn1+8uA+8n53GqlF0F/opWRwmlHzVEZVTAkWbiyQ7QsgyJ6Igev6/94KSe5L4fU2DlAA4YR9ZCeqoTxoaZLIuAjTg58mFGF+teEbRYPgxMpXU8dQ0Qdeo04ybNOCXrmp/M6JIH0lmeC6tKJ6Q8bpbofLVyQ1xTGIFT0hSmwjxb5AkNY1XG1rxTcpSWS/anps+v4ii+16gsTK+k8ljdYba3oAWVAqy0mInTwxqTi4+Ho1zALn7v6iMTqorZKHuuHlT6jXDPUm+okYnoLjBmQusR/7xfXI9RqwPAr78nPwvESMduYpMtO3kuCJHKeC6JAnjHO0W+nalOigwzE6Dkp62nqmSaxMy9eUnFR6TZMx3WtkQV1/50cTUoroyUJvtVjqGSOKdWivDEo9c8oI9MtGEtQtprMiNVCAieBERMtJ2nMcqK1kefbxP7QfepQWm15eHtuvdBgKH3LjeGIA1SeJTo6/LayPqkCm1k4RGuTuZT+5IkfIUXHUn9o8Hdh2gVUV+N1Ue4IZcBiFEpLQ0GMkpJmlGhBpKscciCuL49UAuP/HlJxUek2RaH63sUsevAl+CdiclExIhadKJGxpiiCRedJ8cZYD9fwA1qN/JqQ/nDJ9vRpG57UTjxvUWLwd06QGMpXhu10EKeGlTkJy2/Q6L8jktvqVAz2+AYjQXXM6WApjh+NJ1TMI9SQI4aCX/d9S8BaQQXLgb6S9D12qNb+vkkKlVFS0muc4koXIVyGp40eRcNr32d0iSJJB2SAJMEiqX71N57Qb752tle9FOwBmuElkTUXotIq8dMUQSjkk6y98yOUZ94fL1yB3qOLxC031jCFB1fE4BaRIK6sVYETmOEdGu2U//NBzbRYFrEqBQ9ZfuJ4bhniThFBwloA61oG2XEbMHaR3VA9cdc7Xr/jRZRuxYQJ0mfUqyOhH8jietqCK00rxpBRlxlwK7GhQvcB1jX35Sgf/kAHI3kNdu8Ij8fmHaIialgHCzfOFaR+QloCURleteuk8qGTFEEt7dfEPWUYfvZ1ods7Zp19tma9dDTGMVQu4nMenT0MLg272ghZmfAvzyZEkd2kcLLXcqoDTpYwVJGJOkKa9Yj/xhNwrIapPfzEougxpagwaA8fAybfVogjjIbdEB6ErxRlPKl43MbTmefJrAUGmNxtFq5vreq6HV16k9TbAP5aNVxPo+tMsRoBFoI7eFtRvSBO+Vehc4SCs0O7WJ85eqSNvu1rSC6R7pEmm67uNkRh1EkjLUj0zkGlyRpBuRmcuGevgJ5m2KiTj/F4YXxJ8QgYuT9UxE7vU4+e2HRNp3eaxosbT6UhurxjRWOWmsSlHMxK7kuIyuZ8rFWKyyNlZdySKVJhIlobqCTYshBmFNEsYmiiPqVKJJoM41IusRRoNRxpuI0VRmIFylVfRDR3IPtIXzoWC3PQWToeepwxRjlKTAdZ3eKZqchRNoe0eTw/XV/BiYR2b5OYX7zWlVdxgl8xHOkrn9jPy0D/n1vrT1s0IEtWsUBXZViXA5qR2FKSjsQJOwxRnByLK1o7obtBNGyykm0CSWpiD8lIeHV3wuUoHyjzC5vb3LaCtbBBgk9ZdPUoxBY5WXLGUeGqsvqY1HqCy7p1I0Vpv+1PIxQigeaUnt5LHKRTFJOyLKPlcBeszAPUn2rwQ60mRH+9kMWhFpieEth8lrD8Bb3bcdrj6rMCOWjZV7kpzcpJm7KrQLOUsm9z6xhc8+Pmc3QP7yN1oRCnEe1u5mYQCQhfb+iSmiTkAxRzIiR0byn3M2ygwKcR2CJO6+BRbgHcIq8o0zKS4I/pUCNFeRnkJchCDJ+vX62YSCQnT8+uuvsPn5+YFdzooVK4QsX75ciRLBBeZFQEAA/h+fEnqDYM25bgAAAABJRU5ErkJggg=="},62467:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/openstaand_factuur-684fd839c9d204b0347eb65447c84ce7.jpg"}}]);