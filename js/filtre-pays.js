document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".pays-button");
  const container = document.querySelector("#resultats");

  console.log("Boutons trouvés :", buttons);

  buttons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();

      // Indique quel bouton est actif
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const pays = button.dataset.pays;
      console.log(`Pays sélectionné : ${pays}`);

      try {
        const response = await fetch(
          `/31w13/wp-json/filtre-pays/v1/destinations?pays=${pays}`
        );
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }


        const destinations = await response.json();
        console.log("Destinations reçues :", destinations);

        // Gère les cas où aucune destination n'est trouvée
        if (destinations.length === 0) {
          container.innerHTML =
            "<p>Aucune destination trouvée pour ce pays.</p>";
          return;
        }

        // Affiche les destinations
        container.innerHTML = destinations
          .map(
            (destination) => `
              <article>
                <h5><a href="${destination.link}">${destination.title}</a></h5>
              </article>
            `
          )
          .join("");
      } catch (error) {
        console.error("Erreur lors de la requête :", error);
        container.innerHTML =
          "<p>Une erreur est survenue lors de la récupération des données.</p>";
      }
    });
  });
});
