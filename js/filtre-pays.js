document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".pays-button");
  const container = document.querySelector(".principal__conteneur");

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const pays = button.dataset.pays;
      const response = await fetch(
        `/wp-json/filtre-pays/v1/destinations?pays=${pays}`
      );
      const destinations = await response.json();

      container.innerHTML = destinations
        .map(
          (destination) => `
                <article>
                    <h5><a href="${destination.link}">${destination.title}</a></h5>
                </article>
            `
        )
        .join("");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Script chargé");
  const buttons = document.querySelectorAll(".pays-button");
  console.log("Boutons trouvés :", buttons);

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      console.log(`Bouton cliqué : ${button.dataset.pays}`);
      try {
        const pays = button.dataset.pays;
        const response = await fetch(
          `/wp-json/filtre-pays/v1/destinations?pays=${pays}`
        );
        console.log("Réponse brute :", response);
        const destinations = await response.json();
        console.log("Destinations reçues :", destinations);
      } catch (error) {
        console.error("Erreur lors de la requête :", error);
      }
    });
  });
});