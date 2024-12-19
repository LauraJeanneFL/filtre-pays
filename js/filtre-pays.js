document.addEventListener("DOMContentLoaded", () => {
  const resultats = document.querySelector("#resultats");

  // Fonction pour charger les destinations via l'API REST
  async function chargerDestinations(pays) {
    try {
      // Remplacez par l'URL complète de votre API
      const response = await fetch(
        `https://gftnth00.mywhc.ca/31w13/wp-json/wp/v2/posts?search=${pays}&per_page=30`
      );

      // Vérifie si la réponse est valide
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const destinations = await response.json();

      // Insérer les résultats dans le conteneur
      resultats.innerHTML = destinations
        .map(
          (destination) => `
            <article>
              <h3 class="destination-titre" data-id="${destination.id}">
                ${destination.title.rendered}
              </h3>
              <div class="description" id="description-${destination.id}" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                ${destination.content.rendered}
              </div>
            </article>`
        )
        .join("");

      // Active les fonctionnalités de l'accordéon
      activerAccordeon();
    } catch (error) {
      console.error("Erreur lors du chargement des destinations :", error);
      resultats.innerHTML = `<p>Une erreur est survenue lors du chargement des destinations.</p>`;
    }
  }

  // Fonction pour activer l'accordéon
  function activerAccordeon() {
    const titres = document.querySelectorAll(".destination-titre");
    titres.forEach((titre) => {
      titre.addEventListener("click", () => {
        const id = titre.dataset.id;
        const description = document.querySelector(`#description-${id}`);
        const descriptions = document.querySelectorAll(".description");

        // Ferme les autres descriptions
        descriptions.forEach((desc) => {
          if (desc !== description) {
            desc.style.maxHeight = "0";
            desc.classList.remove("description--visible");
          }
        });

        // Bascule l'état de la description sélectionnée
        if (description.classList.contains("description--visible")) {
          description.style.maxHeight = "0";
          description.classList.remove("description--visible");
        } else {
          description.style.maxHeight = description.scrollHeight + "px";
          description.classList.add("description--visible");
        }
      });
    });
  }

  // Ajoute un événement à chaque bouton
  document.querySelectorAll(".pays-button").forEach((button) => {
    button.addEventListener("click", () => {
      const pays = button.dataset.pays;
      chargerDestinations(pays);
    });
  });
});
