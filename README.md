# Model

Het staat model voor digitale tuintjes welke bij 'Het web is voor iedereen' door studenten worden gemaakt.

tekst + foto's

## Learning Log

## sprint 0

## maandag 3 september

## Voorbereidingen 3 september

# Voorbereiding basis HTML, CSS, fonts en kleur

Voor de voorbereiding van de les heb ik informatie gelezen over webfonts, HTML en CSS. Hierdoor begrijp ik beter hoe een website wordt opgebouwd en welke keuzes ik moet maken bij het gebruiken van lettertypen.

Web-safe fonts en @font-face
Ik heb geleerd dat een lettertype beschikbaar moet zijn op het apparaat van de bezoeker of door de website geladen moet worden. Er zijn hiervoor drie mogelijkheden:
Web-safe fonts: deze lettertypen staan standaard op de meeste apparaten. Ze laden snel en gebruiken geen extra data. Voorbeelden hiervan zijn Arial, Verdana, Georgia en Times New Roman.
Webfontservices: dit zijn diensten zoals Google Fonts en Adobe Fonts. Tijdens deze opdracht mogen wij deze niet gebruiken. Ze kunnen namelijk zorgen voor minder privacy, extra laadtijd en afhankelijkheid van een externe dienst.

@font-face: hiermee kan ik een lettertype zelf downloaden, in mijn projectmap zetten en vanuit mijn CSS-bestand laden.
Met font-family bepaal ik welk lettertype een element krijgt. Als ik een lettertype aan de body geef, wordt dit meestal automatisch overgenomen door de elementen die hierin staan. Dit heet inheritance.
Ik kan ook verschillende lettertypen achter elkaar plaatsen. Dit heet een font-stack. Als het eerste lettertype niet geladen kan worden, probeert de browser automatisch het volgende lettertype.
body {
font-family: Georgia, Times, serif;
}
Met system-ui gebruikt de website het standaardlettertype van het besturingssysteem. Hierdoor kan het lettertype er op een Windows-computer bijvoorbeeld iets anders uitzien dan op een MacBook.
Wanneer ik een zelf gedownload lettertype wil gebruiken, maak ik eerst een map voor de fontbestanden. Daarna koppel ik het lettertype bovenaan mijn CSS-bestand met @font-face.
@font-face {
font-family: "Dyna Puff";
src: url("../fonts/DynaPuff-Bold.ttf");
}

body {
font-family: "Dyna Puff", sans-serif;
}

Een fontfamilie kan uit verschillende bestanden bestaan, zoals regular, italic, bold en bold italic. Met font-weight en font-style geef ik aan welke variant bij ieder bestand hoort. De browser kan daarna automatisch de juiste variant gebruiken.
Ik heb ook geleerd dat het niet slim is om heel veel lettertypen en varianten aan mijn website toe te voegen. Hierdoor moet de bezoeker meer bestanden downloaden en kan de website langzamer worden. Daarnaast moet ik controleren of de licentie van een lettertype het gebruik op een website toestaat.

# HTML & CSS Is Hard

Voor de voorbereiding heb ik de onderdelen Introduction, Basic Web Pages en Hello, CSS van HTML & CSS Is Hard gelezen.
In Introduction heb ik geleerd dat HTML, CSS en JavaScript ieder een eigen functie hebben. HTML bepaalt de inhoud en structuur van een website. CSS wordt gebruikt voor de vormgeving en JavaScript maakt interacties mogelijk.

In Basic Web Pages heb ik geleerd hoe een HTML-pagina wordt opgebouwd met <html>, <head> en <body>. Ook kwamen headings, paragrafen en lijsten aan bod. HTML bepaalt dus niet alleen wat er op een pagina staat, maar geeft ook betekenis en structuur aan de inhoud.
In Hello, CSS heb ik geleerd hoe ik een CSS-bestand aan HTML kan koppelen. Een CSS-regel bestaat uit een selector, een property en een value. Daarnaast heb ik gelezen over kleuren, lettertypen, meeteenheden, inheritance en de cascade.
Door deze artikelen begrijp ik beter dat HTML en CSS twee verschillende taken hebben, maar wel met elkaar samenwerken. HTML bepaalt wat een onderdeel is en CSS bepaalt hoe dit onderdeel eruitziet.

Na het lezen had ik nog twee vragen:
Wanneer kan ik beter een HTML-element, zoals p of h1, als selector gebruiken en wanneer is een class handiger?
Hoe bepaalt CSS welke regel voorrang krijgt als meerdere regels hetzelfde element aanpassen?

# MDN – Structuring content with HTML

Ik heb ongeveer een half uur scannend gelezen op MDN. Ik heb vooral gekeken naar semantische elementen, zoals <header>, <nav>, <main>, <section>, <article> en <footer>. Deze elementen geven betekenis aan de verschillende onderdelen van een pagina. Dit is duidelijker dan wanneer een hele website alleen met <div>-elementen wordt opgebouwd.
Ook heb ik gekeken naar links, afbeeldingen, formulieren en tabellen. Bij deze onderwerpen kwam toegankelijkheid vaak terug. Goede HTML helpt niet alleen de browser, maar ook zoekmachines en screenreaders om een website beter te begrijpen.

Ik vond het opvallend dat niet iedere afbeelding een uitgebreide alt-tekst nodig heeft. Als een afbeelding alleen ter decoratie wordt gebruikt, kan deze alt="" krijgen. Een screenreader weet dan dat de afbeelding kan worden overgeslagen.
Ook heb ik geleerd dat ‘klik hier’ geen goede linktekst is. Zonder extra context is namelijk niet duidelijk waar de link naartoe gaat. Een tekst zoals ‘Bekijk mijn contactgegevens’ vertelt veel duidelijker wat iemand na het aanklikken kan verwachten.

# Wat ik hiervan heb geleerd

Ik heb vooral geleerd dat HTML niet alleen bepaalt wat er op het scherm staat. Door semantische elementen, duidelijke linkteksten en passende alt-teksten te gebruiken, kan ik mijn website begrijpelijker en toegankelijker maken.
Daarnaast begrijp ik nu beter hoe lettertypen op het web werken. Voor deze opdracht kan ik een web-safe font gebruiken of een zelf opgeslagen lettertype met @font-face aan mijn website koppelen. Daarbij moet ik niet alleen kijken naar wat ik mooi vind, maar ook letten op leesbaarheid, fallbacks, bestandsgrootte, privacy en de licentie van het lettertype.
Voor mijn eigen website wil ik daarom bewust omgaan met de hoeveelheid fonts en varianten die ik toevoeg. Ik wil een stijl kiezen die bij mijn onderwerp past, maar mijn website moet ook duidelijk leesbaar zijn en snel blijven laden.

foto: van mijn aantekeningen.

## kick-off

31 augustus: Check out

1. Wat is een source hosting platform en welke heb ik gekozen?
   Een source hosting platform is een online plek waar je de bestanden en code van een project kunt opslaan en beheren. Het handige hiervan is dat verschillende versies van je code worden bijgehouden. Hierdoor kun je later terugzien welke aanpassingen je hebt gemaakt en wanneer je deze hebt gemaakt.

Voor mijn website gebruik ik GitHub als source hosting platform. De code van mijn website staat hierdoor online in een repository. De bestanden pas ik aan in Visual Studio Code en daarna stuur ik de nieuwste versie naar GitHub. Met GitHub Pages kan ik mijn website vervolgens online publiceren.

Mijn repository op GitHub, waarin de bestanden en verschillende versies van mijn website worden opgeslagen.
<img src="assets/Images-readme/gitthubstart.png" alt="Gitthub" />
Deze foto is wel later toegevoeegd omdat ik niet wist dat dat moest.

2. Welke domeinnaam heb ik gekozen en hoe heb ik deze gekoppeld?
   Ik heb gekozen voor de domeinnaam madebyjudith.nl. Ik heb bewust voor deze naam gekozen omdat ik de website uiteindelijk als mijn persoonlijke portfolio wil blijven gebruiken. Ik kan hier mijn projecten uit het eerste jaar op zetten, maar later ook nieuw werk toevoegen. Zo kan mijn portfolio met mij meegroeien en kan ik de website later gebruiken bij het zoeken naar een stage of werk.

   Om mijn domeinnaam aan mijn website te koppelen, heb ik binnen GitHub Pages mijn eigen domein ingevuld. Daarna heb ik bij mijn domein de benodigde DNS-instellingen aangepast. De uitleg en gegevens die ik hiervoor nodig had, kon ik op DLO vinden.
   Nadat ik deze instellingen had toegevoegd, controleerde GitHub de verbinding. Ik kreeg daarna de melding ‘DNS check successful’. Dit betekende dat mijn GitHub-pagina goed was gekoppeld aan madebyjudith.nl.

Foto: domeinkiezen

3. Hoe pas ik mijn website aan en publiceer ik deze online?
   Ik pas mijn website aan in Visual Studio Code. Hier kan ik bijvoorbeeld veranderingen maken in mijn HTML- en CSS-bestanden. Tijdens het werken gebruik ik Go Live om mijn website lokaal in de browser te bekijken. Zo kan ik eerst controleren hoe mijn aanpassingen eruitzien, voordat ik ze online publiceer.
   Wanneer ik tevreden ben, sla ik mijn bestanden op. Daarna open ik in Visual Studio Code het onderdeel Source Control. Hier zet ik de aangepaste bestanden klaar en maak ik een commit. Bij deze commit schrijf ik een korte beschrijving van wat ik heb veranderd. Vervolgens push of synchroniseer ik de commit naar GitHub.
   GitHub ontvangt dan de nieuwste versie van mijn bestanden. Via GitHub Pages wordt deze versie automatisch gepubliceerd. Na een korte tijd zijn mijn veranderingen ook zichtbaar op madebyjudith.nl.
   Mijn werkwijze is:
   Aanpassen → testen met Go Live → opslaan → committen → pushen naar GitHub → online publiceren via GitHub Pages

Foto: eerste versie van mijn website.
