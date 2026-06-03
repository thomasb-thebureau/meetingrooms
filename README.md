# The Bureau — Nos salles & espaces

Page de présentation des salles de réunion et espaces de **The Bureau Paris**, avec demande de devis / documentation.

Site statique (HTML / CSS / JS), sans dépendance ni build.

## Contenu

- **8 salles & espaces**, regroupés par arrondissement :
  - **Paris 8ᵉ** (Alma, bord de Seine) — The Board Room, The Deal Room, The Café, The Conference Room
  - **Paris 2ᵉ** (Opéra · Bourse) — The Board Room, The Deal Room, The Board Room, Le Floor
- Mise en page **Index / répertoire** : on survole une salle → la photo et la fiche (adresse, capacité, tarifs, prestations) s'actualisent.
- **Bilingue FR / EN** (sélecteur dans la navigation).

## Structure

```
index.html                  Redirection vers la page
nossalles/
  Nos Salles.html           Page principale
  assets/
    salles.css              Feuille de style (charte The Bureau)
    fonts/                   Plus Jakarta Sans, Spectral
    logo-light.svg, chevrons.svg
  salles-data.js            Données des salles, i18n & rendu
  photos/                   Photos des salles
```

## Lancer en local

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000/nossalles/Nos%20Salles.html
```

## Déploiement

Compatible **GitHub Pages** (le `index.html` racine redirige vers la page). Activer Pages sur la branche `main`, dossier racine.
