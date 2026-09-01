# Model

Het staat model voor digitale tuintjes welke bij 'Het web is voor iedereen' door studenten worden gemaakt.

## Learning Log

### [...]

[...]

### 3 sept - [Workshop]

[...]

### Voorbereiding voor 3 sept.

Voorbereiding voor CSS: fonts met kleur en effecten van Sanne:

Aantekeningen: Web-safe fonts & @font-face
Intro: lettertypen op het web
Een lettertype dat je in je ontwerp gebruikt, moet ook beschikbaar zijn op het apparaat van iemand die je website bezoekt. Anders kan de browser het lettertype niet zomaar laten zien.

Er zijn drie manieren om fonts op een website te gebruiken:
Web-safe fonts
Lettertypen die standaard op bijna alle apparaten aanwezig zijn.

Web font services
Diensten zoals Google Fonts en Adobe Fonts. Deze zijn makkelijk te gebruiken, maar hebben nadelen op het gebied van privacy, snelheid en afhankelijkheid. Voor onze website mogen we deze niet gebruiken.

@font-face
Hiermee zet je zelf fontbestanden in je website en laad je deze via CSS. Zo kun je veel meer verschillende lettertypen gebruiken.

1. Web-safe fonts
   Web-safe fonts zijn lettertypen die standaard op bijna alle computers, telefoons en tablets aanwezig zijn.
   Het voordeel hiervan is dat de browser geen extra fontbestand hoeft te downloaden.

Hierdoor:
laadt de website sneller;
kost de website minder data/energie;
is de kans groot dat het lettertype overal goed wordt weergegeven.

Voorbeelden van web-safe fonts zijn:
Arial
Verdana
Tahoma
Trebuchet MS
Times New Roman
Georgia
Courier New

font-family
Met de CSS-property font-family bepaal je welk lettertype een element gebruikt.
Bijvoorbeeld:
body {
font-family: Tahoma;
}
Je kunt ook alleen een bepaald element een ander lettertype geven:
h2 {
font-family: "Courier New";
}
Belangrijk: als er een spatie in de naam van een font staat, moet je de naam tussen aanhalingstekens zetten.

Inheritance bij fonts
Lettertypen kunnen worden geërfd van een parent-element.
Wanneer ik bijvoorbeeld dit doe:
body {
font-family: Tahoma;
}
krijgen de elementen binnen de <body> automatisch ook Tahoma, tenzij ik voor een bepaald element iets anders instel.

Dit is dus inheritance: een child kan bepaalde CSS-eigenschappen van zijn parent erven.
system-ui

Je kunt ook het standaardlettertype van het besturingssysteem gebruiken:
body {
font-family: system-ui;
}
Het lettertype kan hierdoor per apparaat verschillen.
Bijvoorbeeld:
Windows → Segoe
macOS → San Francisco
Android → Roboto

De website ziet er dus niet op ieder apparaat exact hetzelfde uit, maar sluit wel aan bij het besturingssysteem van de gebruiker.

Font-stack
Je hoeft niet maar één lettertype bij font-family op te geven. Je kunt meerdere fonts achter elkaar zetten.

Dit heet een font-stack.
Bijvoorbeeld:
font-family: Georgia, Times, "Times New Roman", serif;
De browser probeert de fonts van links naar rechts.
Dus:
Georgia beschikbaar? → gebruik Georgia.
Niet beschikbaar? → probeer Times.
Ook niet? → probeer Times New Roman.
Nog steeds niet? → gebruik een standaard serif-font.
Hierdoor heb je altijd een goede fallback.

Generieke fontfamilies
Aan het einde van een font-stack kun je een algemene fontfamilie zetten:
serif → met schreefjes
sans-serif → zonder schreefjes
monospace → ieder teken even breed
cursive → handschriftachtig
fantasy → decoratief

Bijvoorbeeld:
font-family: Arial, Helvetica, sans-serif;
Belangrijk om te onthouden: zet altijd een goede fallback aan het einde van je font-stack.

2. Web font services

Een andere mogelijkheid is een externe dienst zoals:
Google Fonts
Adobe Fonts
Deze diensten maken het makkelijk om bijzondere lettertypen te gebruiken, maar voor onze website mogen we ze niet gebruiken.

Waarom niet?
Een belangrijk probleem is privacy. Sommige diensten kunnen gegevens van bezoekers verwerken of opslaan, wat problemen kan geven met de AVG.
Daarnaast moeten de fonts vanaf een externe server worden opgehaald. Dit kan:
extra downloads veroorzaken;
de website trager maken;
extra energie kosten.

Ook maak je je website afhankelijk van een externe dienst. Als die dienst niet goed werkt, kan dat invloed hebben op je fonts.

Voor deze opdracht dus: geen web font services gebruiken.

3. @font-face
   Als je een ander lettertype wilt gebruiken dan een web-safe font, kunnen we @font-face gebruiken.
   Hiermee bewaar je het fontbestand in je eigen website.

Bijvoorbeeld:
website/
├── css/
│ └── style.css
├── fonts/
│ └── DynaPuff-Bold.ttf
└── index.html
De website heeft hier dus een aparte map fonts met daarin het fontbestand.
De basis van @font-face

In CSS moet je vervolgens vertellen:
-hoe je het lettertype wilt noemen;
-waar het bestand staat.

Bijvoorbeeld:
@font-face {
font-family: "Dyna Puff";
src: url("../fonts/DynaPuff-Bold.ttf");
}
font-family
font-family: "Dyna Puff";
Hier geef je het lettertype een naam die je later in je CSS kunt gebruiken.
src
src: url("../fonts/DynaPuff-Bold.ttf");
Hier vertel je waar het fontbestand staat.
De .. betekent:
één map omhoog.

Als mijn CSS-bestand in:
css/style.css
staat, ga ik met:
../
eerst uit de map css.
Daarna ga ik naar:
fonts/
en vervolgens naar het fontbestand.

Dus:
../fonts/DynaPuff-Bold.ttf
Belangrijk: @font-face-declaraties zet je bovenaan je CSS-bestand.

Het font vervolgens gebruiken
Nadat het font met @font-face is gekoppeld, kun je het gewoon gebruiken met font-family.

body {
font-family: "Dyna Puff", sans-serif;
}

sans-serif is hier de fallback.
Als Dyna Puff om een bepaalde reden niet geladen kan worden, heeft de browser dus nog een alternatief.

Alleen headings een ander font geven
Je hoeft natuurlijk niet je hele website hetzelfde font te geven.

Je kunt bijvoorbeeld alle headings tegelijk selecteren:
h1,h2,h3,h4,h5,h6 {
font-family: "Dyna Puff", sans-serif;
}
Dan krijgen alleen de headings dit lettertype.
Een lettertypefamilie maken

Een font bestaat vaak niet uit maar één bestand.
Een basisfamilie heeft meestal vier varianten:
-Regular
-Italic
-Bold
-Bold Italic

Voor iedere variant maak je een aparte @font-face.
Ze krijgen allemaal dezelfde font-family-naam, maar een andere font-weight en/of font-style.

Regular
@font-face {
font-family: "Museo Moderno";
src: url("../fonts/MuseoModerno-Regular.ttf");
font-weight: 400;
font-style: normal;
}

Italic
@font-face {
font-family: "Museo Moderno";
src: url("../fonts/MuseoModerno-Italic.ttf");
font-weight: 400;
font-style: italic;
}

Bold
@font-face {
font-family: "Museo Moderno";
src: url("../fonts/MuseoModerno-Bold.ttf");
font-weight: 700;
font-style: normal;
}

Bold Italic
@font-face {
font-family: "Museo Moderno";
src: url("../fonts/MuseoModerno-BoldItalic.ttf");
font-weight: 700;
font-style: italic;
}
Omdat ze allemaal dezelfde font-family hebben, begrijpt de browser dat deze bestanden bij dezelfde lettertypefamilie horen.

font-weight en font-style
Met font-weight geef je aan hoe dik het lettertype is.

Bijvoorbeeld:
font-weight: 400;
is normaal/regular.
font-weight: 700;
is bold.

Er zijn nog meer gewichten mogelijk:
100 → thin
400 → regular/normal
700 → bold
900 → black/heel dik

Met font-style geef je bijvoorbeeld aan of tekst normaal of italic is:
font-style: normal;
of:
font-style: italic;

De browser kiest de juiste variant
Als alle varianten goed zijn ingesteld met @font-face, kan de browser zelf bepalen welk fontbestand nodig is.

Bijvoorbeeld:
Een heading (<h1>) is standaard meestal bold. De browser kan daardoor automatisch de variant met:
font-weight: 700;
gebruiken.

Een normale paragraaf gebruikt:
font-weight: 400;

En <em> is standaard italic.

Je hoeft dus niet voor ieder element apart het juiste fontbestand te selecteren. Je geeft met @font-face aan welke bestanden bij welke font-weight en font-style horen.

Uitgebreidere fontfamilies
Sommige fonts hebben nog meer varianten dan regular en bold.

Bijvoorbeeld:
font-weight: 100;
voor thin.

Of:
font-weight: 900;
voor black.

Daarvoor maak je opnieuw aparte @font-face-declaraties met dezelfde font-family.
Vervolgens kun je bijvoorbeeld schrijven:

h1 {
font-weight: 100;
}

h2 {
font-weight: 900;
}

De browser zoekt dan automatisch het juiste fontbestand binnen de familie.

Niet te veel fonts gebruiken
Eigen fonts geven veel vrijheid in het ontwerp, maar fontbestanden kunnen behoorlijk groot zijn.
Hoe meer verschillende fonts en varianten je toevoegt, hoe meer de browser moet downloaden.

Dat kan zorgen voor:
-een tragere website;
-meer dataverbruik;
-meer energieverbruik.

Daarnaast moet je opletten met licenties. Niet ieder lettertype mag zomaar gratis op een website gebruikt worden.

Voorbereiding voor Basis HTML en CSS Justus:

HTML & CSS Is Hard: artikelen lezen

Voor de voorbereiding op de les heb ik drie onderdelen van HTML & CSS Is Hard gelezen: Introduction, Basic Web Pages en Hello, CSS. Tijdens het lezen heb ik per onderdeel aantekeningen gemaakt van de belangrijkste begrippen en codevoorbeelden.

In Introduction heb ik vooral gelezen over hoe HTML, CSS en JavaScript samenwerken bij het maken van websites. HTML wordt gebruikt voor de inhoud en structuur, CSS voor de vormgeving en JavaScript voor interactie. Ook ging dit gedeelte over de basisworkflow van een webdeveloper en het werken met een code-editor en browser.

Bij Basic Web Pages ging het veel meer over het daadwerkelijk schrijven van HTML. Hier heb ik onder andere geleerd hoe een HTML-pagina is opgebouwd met <html>, <head> en <body> en hoe je elementen zoals headings, paragrafen en lijsten gebruikt. Wat hierin vaak terugkwam, is dat HTML niet alleen bepaalt wat er op een pagina staat, maar ook betekenis geeft aan de content. Zo gebruik je bijvoorbeeld <h1> omdat iets de belangrijkste heading is en niet alleen omdat je grote tekst wilt hebben.

In Hello, CSS werd vervolgens CSS aan de HTML toegevoegd. Hier heb ik geleerd hoe een CSS-regel is opgebouwd uit een selector, property en value en hoe je een extern CSS-bestand aan je HTML koppelt. Ook kwamen onderwerpen zoals kleuren, lettertypes, verschillende meeteenheden, inheritance en de cascade voorbij.

Door deze drie artikelen begrijp ik nu beter hoe HTML en CSS van elkaar gescheiden zijn, maar juist wel samenwerken: HTML bepaalt wat iets is en CSS bepaalt hoe het eruitziet.

Vragen die tijdens het lezen bij mij ontstonden
Na het lezen moest ik twee vragen meenemen naar de les. Ik wilde hiervoor niet zomaar twee begrippen kiezen die ik niet kende, maar juist dingen waar ik na het lezen nog niet helemaal van wist hoe ik ze in de praktijk moet toepassen.

Mijn eerste vraag werd daarom:
Wanneer kan ik in CSS beter een HTML-element zoals p of h1 als selector gebruiken en wanneer is het beter om een class te gebruiken?

In het artikel zag ik namelijk vooral voorbeelden waarbij direct een HTML-element werd geselecteerd, zoals p { } of h1 { }. Ik snap dat je daarmee alle elementen van dat type aanpast, maar ik vroeg mij af wat je moet doen wanneer je maar één of een paar specifieke onderdelen dezelfde styling wilt geven. Daarom wilde ik beter begrijpen wanneer je een element-selector gebruikt en wanneer een class handiger is.

Mijn tweede vraag werd:
Hoe weet ik welke CSS-regel uiteindelijk voorrang krijgt als meerdere regels hetzelfde element aanpassen?

In Hello, CSS werd de cascade uitgelegd en kwam ook inheritance voorbij. Ik begrijp het idee dat meerdere CSS-regels invloed kunnen hebben op hetzelfde element, maar ik vond het nog niet helemaal duidelijk hoe CSS uiteindelijk beslist welke styling wordt gebruikt. Daarom leek mij dit een goed onderwerp om tijdens de les verder naar te vragen.

MDN: Structuring Content with HTML

Voor het tweede gedeelte van de voorbereiding heb ik ongeveer een half uur scannend door de MDN-pagina's over Structuring Content with HTML gekeken. Hierbij heb ik niet ieder artikel helemaal gelezen, maar verschillende onderdelen bekeken en vanuit de teksten verder geklikt naar onderwerpen die mij interessant leken.

Veel onderwerpen herkende ik al uit HTML & CSS Is Hard, maar MDN ging op sommige punten verder. Zo heb ik gekeken naar semantische HTML en elementen zoals <header>, <nav>, <main>, <section>, <article> en <footer>. Ik kwam erachter dat het beter is om een passend HTML-element te gebruiken dan alles met <div> op te bouwen, omdat semantische elementen ook betekenis geven aan de structuur van de pagina.

Daarnaast heb ik onder andere gekeken naar links, afbeeldingen, formulieren en tabellen. Wat hierin steeds terugkwam, was toegankelijkheid. De manier waarop je HTML schrijft heeft niet alleen invloed op wat ik zelf visueel in de browser zie, maar ook op hoe bijvoorbeeld een screenreader de website kan begrijpen.

Zo las ik dat teksten als “klik hier” eigenlijk geen goede linktekst zijn, omdat de bestemming van de link zonder de omliggende tekst niet duidelijk is. Ook zag ik dat je met een <label> een tekst daadwerkelijk aan een invoerveld kunt koppelen en dat tabellen extra informatie kunnen bevatten over welke headings bij bepaalde rijen en kolommen horen.

Wat mij het meest verwonderde:
Tijdens het scannen waren er twee dingen die mij vooral verwonderden.

Het eerste was het gebruik van alt-tekst bij afbeeldingen. Ik wist dat je met alt een beschrijving aan een afbeelding kunt toevoegen en dat dit onder andere belangrijk is voor mensen die een screenreader gebruiken. Ik ging er daarom vanuit dat het voor toegankelijkheid altijd beter was om iedere afbeelding te beschrijven (want zo heb ik het ook geleerd in blok 2 vorige jaar).

Op MDN las ik dat dit juist niet altijd het geval is. Wanneer een afbeelding alleen ter decoratie wordt gebruikt en geen belangrijke informatie toevoegt, kun je bijvoorbeeld gebruiken:
<img src="afbeelding.jpg" alt="">
Door alt="" te gebruiken kan een screenreader begrijpen dat de afbeelding geen belangrijke inhoud bevat en deze overslaan. Dit vond ik opvallend, omdat ik toegankelijkheid eerst vooral zag als zoveel mogelijk informatie toevoegen. Door dit voorbeeld begreep ik dat toegankelijkheid soms juist betekent dat je onnodige informatie weglaat.

Het tweede wat mij verwonderde was dat “klik hier” eigenlijk geen goede linktekst is. Ik dacht juist dat dit een duidelijke manier was om aan te geven dat iemand ergens op kan klikken. Maar voor iemand die met een screenreader door alleen de links op een pagina navigeert, zegt “klik hier” helemaal niets over waar de link naartoe gaat.

Een link als:
<a href="contact.html">Bekijk mijn contactgegevens</a>
geeft veel meer informatie dan:
<a href="contact.html">Klik hier</a>
Hierdoor begreep ik dat je ook bij iets kleins als de tekst van een link moet nadenken over toegankelijkheid en context.

Wat ik uit het scannen heb gehaald:
Wat ik vooral uit het scannen van MDN heb gehaald, is dat HTML niet alleen gaat over wat je uiteindelijk op het scherm ziet. De manier waarop je HTML schrijft geeft ook betekenis aan de inhoud.

Door bijvoorbeeld de juiste semantische elementen, duidelijke linkteksten, goede labels en passende alt-teksten te gebruiken, kunnen browsers, zoekmachines en hulpmiddelen zoals screenreaders beter begrijpen hoe een website is opgebouwd en wat de verschillende onderdelen betekenen.

Ik keek hiervoor vooral naar HTML als een manier om mijn content op een webpagina te krijgen. Door deze artikelen begrijp ik beter dat je tijdens het schrijven van HTML eigenlijk al rekening kunt houden met hoe verschillende mensen de website gebruiken en begrijpen.

Dat is voor mij denk ik de belangrijkste conclusie uit deze opdracht: goede HTML gaat niet alleen over of iets werkt en er goed uitziet, maar ook over of de structuur en inhoud voor iedereen goed te begrijpen zijn.

### 31 aug - Kickoff

1. Leg uit wat een source hosting platform is en voor welke jij gekozen hebt.

Een source hosting platform is een online plek waar je de bestanden en code van een project kunt opslaan en beheren. Het handige hiervan is dat verschillende versies van je code worden bijgehouden. Hierdoor kun je terugzien welke aanpassingen je hebt gemaakt en wanneer je deze hebt gemaakt.

Voor mijn website gebruik ik GitHub als source hosting platform. Via GitHub staat de code van mijn website online en kan ik mijn lokale aanpassingen vanuit Visual Studio Code naar mijn repository sturen. GitHub Pages zorgt er vervolgens voor dat mijn website ook daadwerkelijk online gepubliceerd kan worden.

2. Vertel welke domeinnaam jij gekozen hebt en hoe je die hebt gekoppeld aaan jouw pagina.

Ik heb gekozen voor de domeinnaam madebyjudith.nl. Ik heb bewust voor deze naam gekozen omdat ik deze website uiteindelijk als mijn persoonlijke portfolio wil blijven gebruiken. Hier kan ik het werk uit mijn eerste jaar op zetten, maar ook toekomstige projecten. Hierdoor kan mijn portfolio met mij meegroeien en kan ik hem later ook gebruiken bij het zoeken naar een stage of werk.

Om mijn domein aan mijn website te koppelen heb ik binnen GitHub Pages mijn eigen domeinnaam ingesteld. Vervolgens heb ik bij mijn domein de benodigde DNS-instellingen aangepast (deze stonden gelukkig op DLO), zodat het domein naar GitHub Pages verwijst. Nadat GitHub de DNS had gecontroleerd, kreeg ik de melding ‘DNS check successful’. Vanaf dat moment was mijn GitHub-pagina gekoppeld aan mijn eigen domeinnaam.

3. Beschrijf hoe je aanpassingen aan jouw pagina kunt maken en hoe je ervoor zorgt dat die op het web gepubliceerd worden.

Ik pas mijn website aan in Visual Studio Code. Hier kan ik bijvoorbeeld mijn HTML en CSS veranderen. Tijdens het werken gebruik ik Go Live om mijn website lokaal in de browser te bekijken. Hierdoor kan ik eerst controleren hoe mijn veranderingen eruitzien, zonder dat ik ze meteen online hoef te publiceren.

Wanneer ik tevreden ben met een aanpassing, sla ik mijn bestanden op. Daarna ga ik in Visual Studio Code naar Source Control. Hier zet ik de aangepaste bestanden klaar en maak ik een commit met een korte beschrijving van wat ik heb veranderd. Vervolgens synchroniseer/push ik deze commit naar GitHub.

GitHub ontvangt hierdoor de nieuwste versie van mijn bestanden. Via GitHub Pages wordt deze versie vervolgens gepubliceerd, waardoor mijn veranderingen uiteindelijk ook zichtbaar worden op madebyjudith.nl.

Mijn werkwijze is dus:
Aanpassen - lokaal testen met Go Live - opslaan - committen - pushen/synchroniseren met GitHub - online gepubliceerd via GitHub Pages.
