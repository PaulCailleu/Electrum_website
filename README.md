# Electrum Website

Site statique présentant les solutions d'investissement Electrum (Growth et Yield), avec pages dédiées, graphiques de performance illustratifs, traductions EN/FR, et sections tokenisation, équipe, whitepaper, contact et feuille de route.

## Structure
- `index.html` : page d'accueil avec cartes solutions et sections principales.
- `growth.html` / `yield.html` : pages détaillées recyclant les charts et métriques.
- `style.css` : thème sombre, grille, cartes et responsive.
- `script.js` : traductions, gestion des CTA, chart init (Chart.js), loaders de métriques/perf.
- `performance_data.json`, `metrics.json` : données d'exemple pour les graphiques/indicateurs.
- `assets/` : logo et favicons.

## Prérequis
- Navigateur moderne.
- Accès réseau pour Google Fonts et CDN Chart.js (cdn.jsdelivr.net).

## Démarrage local
1) Cloner le dépôt.  
2) Ouvrir `index.html` dans le navigateur, ou servir le dossier avec un petit serveur statique (ex: `python -m http.server 8000` puis http://localhost:8000).

## Personnalisation
- Contenus : éditer les clés `translations` dans `script.js` pour EN/FR.
- Données : remplacer `performance_data.json` et `metrics.json` par vos séries réelles (adapter si besoins spécifiques par solution).
- Styles : ajuster `style.css` (couleurs, rayons, largeurs max, grids).
- Roadmap : remplir les jalons dans `index.html` ou via les clés correspondantes dans `script.js`.
- Formulaires : connecter `#contact-form` et `#wp-form` à un service d'email/CRM (Formspree, Netlify Forms, backend maison).

## Notes
- Les métriques et performances sont illustratives; remplacer par des données validées.
- L'algo de gestion n'est pas exposé côté front. Conservez les détails sensibles hors du site public.
