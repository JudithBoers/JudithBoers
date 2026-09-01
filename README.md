# Model

Het staat model voor digitale tuintjes welke bij 'Het web is voor iedereen' door studenten worden gemaakt.

## Learning Log

### [...]

[...]

### 3 sept - [Workshop]

[...]

### Voorbereiding voor 3 sept.

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
