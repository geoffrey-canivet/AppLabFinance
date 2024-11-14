# AppLab Finance.
## Guide utilisateur.

**Partie 1**  

<u>L'utilisateur arrive sur la page index:</u>

- **Inscription.**

  - L'utilisateur est redirigé sur la page de création de  compte.

- **Reinitialisation du mot de passe.**

  - L'utilisateur est redirigé vers la page de récpération du mot de passe. 
  
- **Connexion.**

  - L'utilisateur est redirigé vers la page dashboard.  

---

**Partiee 2**  

<u>L'utilisateur arrive pour la premiere fois sur le dashboard:</u>

- **Bienvenue.**

  - L'utilisateur est invité à choisir un nom d'utilisateur. Un bref message de bienvenue s'affiche et donne acces au dashboard.

---

**Partie 3**  

<u>L'utilisateur arrive pour la premiere fois sur le dashboard:</u>

- **Détails du dashboard.**

  - 1/ Menu side bar gauche, liste des autres application AppLab.
  - 2/ Menu général de l'application finance. 
  - 3/ Menu des périodes.
  - 4/ Slider récapitulatif.
  - 5/ Accordion des dépenses fixes.
  - 6/ Accordion des dépenses occasionnelles.
  - 7/ Accordion des détails mensuelles.
  - 8/ Accordion de visualisation graphique et comparaison.
  - 9/ Footer bar, mémoire local storage utilisée, logo applab, heure.

  ![APLF-dashboard-details.png](https://github.com/geoffrey-canivet/Technofuturtic/blob/main/Readme/APLF-dashboard-details.png)

---

**Partiee 4**  

<u>Cartes dépenses fixes:</u>

- **Détails d'une carte.**

  - 1/ Nom de la carte.
  - 2/ Nom des dépenses.
  - 3/ Coup d'une dépenses.
  - 4/ Afficher graphique circulaire de la carte.
  - 5/ Ajouter une nouvelles dépense.
  - 6/ Modifier coup d'une dépense.
  - 7/ Supprimer une dépense.
  - 8/ scrollbar.
  - 9/ Total de la carte de dépense. 

![APLF-card-fixe-details.png](https://github.com/geoffrey-canivet/Technofuturtic/blob/main/Readme/APLF-card-fixe-details.png)
![APLF-card-fixe-graphique-details.png](https://github.com/geoffrey-canivet/Technofuturtic/blob/main/Readme/APLF-card-fixe-graphique-details.png)
![APLF-card-fixe-ajout-categorie-details.png](https://github.com/geoffrey-canivet/Technofuturtic/blob/main/Readme/APLF-card-fixe-ajout-categorie-details.png)
![APLF-card-fixe-modifiert-categorie-details.png](https://github.com/geoffrey-canivet/Technofuturtic/blob/main/Readme/APLF-card-fixe-modifiert-categorie-details.png)

---

**Partiee 5**  

<u>Cartes dépenses Occasionnelles:</u>

- **Détails d'une carte.**

  - 1/ Nom de la carte.
  - 2/ Nom des dépenses.
  - 3/ Somme des coups d'une dépenses.
  - 4/ Affiche les détailles de chaques dépenses. 
  - 5/ Afficher graphique circulaire de la carte.
  - 6/ Ajouter une nouvelles dépense.
    - 6.1/ Nom de l'achat.
    - 6.2/ Date de l'achat.
    - 6.3/ Nom du commerce, possbilité de rajouter des commerce via le menu rêglages.
    - 6.4/ Prix de l'achat.
    - 6.5/ Commentaire. 
  - 7/ Modifier le coup d'une dépense.
    - 7.1/ Prix de l'achat.
    - 7.2/ Date de l'achat.
    - 7.3/ Nom du commerce, possbilité de rajouter des commerce via le menu rêglages.
    - 7.4/ Commentaire
  - 8/ Supprimer une dépense.
  - 9/ scrollbar.
  - 10/ Total de la carte de dépense. 

![APLF-card-fixe-details.png](https://github.com/geoffrey-canivet/Technofuturtic/blob/main/Readme/APLF-card-occasionnelle-details.png)
![APLF-card-fixe-graphique-details.png](https://github.com/geoffrey-canivet/Technofuturtic/blob/main/Readme/APLF-card-occasionnelle-graphique-details.png)
![APLF-card-fixe-ajout-categorie-details.png](https://github.com/geoffrey-canivet/Technofuturtic/blob/main/Readme/APLF-card-coccasionnelle-ajout-categorie-details.png)
![APLF-card-fixe-modifiert-categorie-details.png](https://github.com/geoffrey-canivet/Technofuturtic/blob/main/Readme/APLF-card-coccasionnelle-ajout-depense-details.png)

---

**Partiee 6**  

<u>Tableau détaillé des dépenses par carte:</u>

- **Détails du tableau.**

  - 1/ Choix du nombres de type de dépense.
  - 2/ Rechercher dans n'importe quelle colonne du tableau
  - 3/ Nombre d'achat par dépense.
  - 4/ Nom de la dépense. 
  - 5/ Somme du type de dépense.
  - 6/ Barre de progression.
  - 7/ Pourcentage de progression.
  - 8/ Outils.

![APLF-card-fixe-modifiert-categorie-details.png](https://github.com/geoffrey-canivet/Technofuturtic/blob/main/Readme/APLF-table-coccasionnelle-details.png)

---

**Partiee 7**  

<u>Les différent reglages:</u>

- **Rêglages utilisateur.**

  - 1/ Renvois vers la gestion du profil utilisateur.
  - 2/ Renvois vers la gestion des préférances de l'interface utilisateur. 
  - 3/ Renvois vers la gestion des rêglages de l'application. 
  - 4/ Renvois vers la gestion des élèments critiques.
  - 5/ déconnexte l'utilisateur et renvois vers l'index. 


![APLF-card-fixe-modifiert-categorie-details.png](https://github.com/geoffrey-canivet/Technofuturtic/blob/main/Readme/APLF-menu-droite-details.png)

---

### Technologies

- Html
- Css
  - Bootstrap
  - Sass
- Javascript
  - JQuery 
  - Flickity (Pour le slider récapitulatif) [Lien](https://flickity.metafizzy.co/)
  - Chart.js (Pour les graphiques) [Lien](https://www.chartjs.org/)
  - SweetAlert (Pour les alerts) [Lien](https://sweetalert2.github.io/)
  - DataTables (Pour les tableau détaillé) [Lien](https://datatables.net/)

---
