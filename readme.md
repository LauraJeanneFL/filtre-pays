# Épreuve finale du cours de 31W – Introduction à un système de gestion de contenu

## Durée de l’épreuve : 3 heures Compte pour 25% de la note globale du cours

## Objectifs : Utilisez la structure de thème de votre TP2 pour réaliser le développement de l’épreuve finale

Assurez-vous que votre pied de page contienne deux liens github :

- Un lien vers votre nouvelle branche « ef » de votre thème.

- Un lien vers le dépôt de l’extension « pays »

Il s’agira de créer une nouvelle page basée sur le modèle « template-pays » qui affichera les destinations par pays. Cette page sera partagée en deux sections :

## Section 1

L’entête de la page contiendra un titre,  une courte introduction, une galerie d’images de différentes destinations, un carrousel qui s’activera en cliquant sur une image de la galerie. Le nombre de personnes qui voyage ensemble, la date du départ et la date de retour.

## Section 2

Une série de liens ou boutons contenant chacun un pays. Chaque lien permet d’exécuter une requête HTTPS permettant d’afficher les destinations par pays. Les pays que l’on peut sélectionner sont les suivants :     "France","États-Unis", "Canada", "Argentine", "Chili", "Belgique", "Maroc", "Mexique", "Japon", "Italie", "Islande", "Chine", "Grèce", "Suisse"
Cette application sera intégrée à partir d’une extension que vous allez créer et qui ressemble beaucoup à l’extension filtre du TP2 permettant d’extraire les destinations par catégorie. Cette fois vous allez créer une extension qui permet d’extraire les destinations par pays.
Utiliser la requête rest-api suivante pour extraire les destinations par pays :
Cette instruction permet d’extraire l’adresse du domaine
window.location.origin + "/31w"; // pour ajouter un dossier au domaine
/wp-json/wp/v2/posts?search=canada&per_page=30 // la requête rest

## À remettre 

• Sur Github dans votre dépôt 31w,  une branche epreuve-finale qui contiendra au minimum  5 commits.
• Un nouveau dépôt « filtre-pays » qui contiendra au minimum 5 commits
• Les  commits s’étalent pendant toutes la durée de l’épreuve. Faite les deux push vers votre Github seulement à la fin de l’épreuve
• Sur WHC.ca votre site est fonctionnel avec
o Le modèle de page template-pays.php
o Plugin API-REST « pays »

### Remarques importantes 

Fraude et plagiat (PDEA)
La fraude ou le plagiat entraînent la note zéro (0) pour l’épreuve finale. La participation ou la collaboration au plagiat peuvent également entraîner la note zéro (0). Les sanctions institutionnelles qui peuvent être appliquées dans les cas de fraude et plagiat, ainsi que les recours possibles pour l'étudiant, peuvent être consultées à partir d'Omnivox dans la section « Documents de référence ».