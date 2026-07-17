# Portfolio — Housseïne TCHATAKOURA

Refonte complète du portfolio personnel : thème sombre premium, structure
nettoyée, bugs corrigés, contenu clarifié.

## Ce qui a été corrigé

1. **Deux images cassées réparées.** Les fichiers "Développement Web.jpg" et
   "Suivi-Évaluation.png" avaient des noms corrompus lors de l'export
   (`D#U00e9veloppement Web.jpg`, `Suivi-#U00c9valuation.png`) — le HTML
   pointait vers des noms qui n'existaient pas, donc ces images ne
   s'affichaient jamais sur le site en ligne. Tous les fichiers ont été
   renommés proprement (sans espaces ni accents) et les références corrigées.
2. **Section Témoignages retirée** (à ta demande — contenu à réintroduire
   plus tard avec de vrais avis si tu en reçois).
3. **Section Blog retirée** (à ta demande — les articles n'existaient pas
   encore en ligne).
4. **Cohérence rétablie sur KOURA AgriData Impact** : présenté partout comme
   un projet à venir (lancement avant décembre 2027), sans contradiction.
5. **Lien GitHub corrigé partout** : `tchatakourah-hash` (l'ancien portfolio
   mélangeait deux variantes différentes selon les endroits).
6. **Liens Kaggle / Facebook / Twitter retirés** du footer (ils pointaient
   vers des pages d'accueil génériques, pas vers de vrais profils).
7. **Menu mobile fonctionnel** : l'ancienne version masquait simplement les
   liens de navigation sous 768px sans aucun moyen d'y accéder. Vrai menu
   burger ajouté.
8. **Logo KOURA** : le fichier a un fond blanc opaque intégré ; encadré dans
   un petit badge clair arrondi pour un rendu propre sur fond sombre (sinon
   ça aurait fait un carré blanc disgracieux dans la barre de nav).

## Ce qui a été refait

- **Thème sombre premium** cohérent avec l'identité déjà posée pour le
  cabinet (vert profond / or), en gardant une identité propre au portfolio
  personnel (charbon chaud plutôt que le vert-noir du site cabinet).
- **Badges d'icônes circulaires**, cartes projets/services restructurées,
  animations d'apparition au scroll (désactivées si la personne préfère
  moins de mouvement), contrastes vérifiés (8,4 à 16,9 — largement au-dessus
  du minimum d'accessibilité de 4,5).
- **CSS et JS externalisés** (`assets/css/style.css`, `assets/js/main.js`)
  au lieu d'un unique fichier HTML géant — plus facile à maintenir.
- **Images optimisées** : la photo (3,1 Mo → 96 Ko) et toutes les icônes de
  compétences/certifications compressées, le site pèse désormais 464 Ko au
  total (contre plusieurs Mo avant).

## Captures d'écran intégrées

Les 5 cartes projets affichent maintenant tes vraies captures de dashboards
(AgriAccess Togo, KOURA AgriData Impact, Dashboard Climat Togo, TG Dashboard
Impact — Data Lab, Population du Togo), recadrées et optimisées.

## Déploiement

Identique à la procédure déjà vue pour le site du cabinet :

**Par clics (Netlify)** : glisse ce dossier entier sur
[app.netlify.com/drop](https://app.netlify.com/drop)

**Par Git (GitHub Pages)** :
```bash
cd portfolio-housseine
git init
git add .
git commit -m "Portfolio Housseïne TCHATAKOURA"
git branch -M main
git remote add origin https://github.com/tchatakourah-hash/TON-DEPOT.git
git push -u origin main
```
Puis **Settings → Pages → Source : Deploy from a branch → main / root → Save**.

⚠️ Si tu utilises "Add file → Upload files" sur GitHub au lieu de `git`,
sélectionne bien `index.html` **et** le dossier `assets` ensemble en une
seule fois par glisser-déposer, pour que la structure des sous-dossiers ne
soit pas perdue (c'est ce qui a cassé le déploiement précédent du site du
cabinet).
