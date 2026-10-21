// een collega van mij heeft geholpen met deze code er in zetten (hij is zelf afgestudeert in programmeren of coderen//

// Zoek de knoppen voor licht en donker.
const themaKnoppen = document.querySelectorAll('input[name="theme"]');

// Haal de eerder opgeslagen keuze op.
const opgeslagenThema = localStorage.getItem("thema");

themaKnoppen.forEach((knop) => {
  // Vink de opgeslagen keuze opnieuw aan.
  if (opgeslagenThema === knop.value) {
    knop.checked = true;
  }

  // Sla de keuze op wanneer iemand wisselt.
  knop.addEventListener("change", () => {
    localStorage.setItem("thema", knop.value);
  });
});
