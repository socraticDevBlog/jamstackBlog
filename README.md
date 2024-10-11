[![Netlify Status](https://api.netlify.com/api/v1/badges/5649699f-11d8-4880-befe-755133eccba8/deploy-status)](https://app.netlify.com/sites/modest-hugle-a4dc07/deploys)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/socraticDevBlog/jamstackBlog?style=plastic)

# Le blogue de socraticDev porte sur la technologie et la philosophie

on utilise le framework [Gatsby - The Best React-Based
Framework](https://www.gatsbyjs.com/) pour générer ce blogue. Un site web
simple et réactif doté de peu de _features_:

1. blog posts rédigés dans des fichiers markdown
2. un serveur GraphQL intégré qui manage les blog posts en fonction du
   meta-data (frontMatter) ajouté dans l'en-tête de tous les fichiers markdowns
3. un feed RSS
4. une liste de sujets discutés dans le blogue (généré dynamiquement)

## en production

le site web est buildé et déployé sur le CDN de
[netlify](https://www.netlify.com/) via une intégration simple avec github

> Netlify is the modern development platform for Enterprises to realize the speed, agility and performance of a scalable, composable web architecture.

## rouler le site web localement en mode _développement_ (macOS, linux)

_l'utilisation est [nvm - Node Version Manager](https://github.com/nvm-sh/nvm)
est recommendé_

```bash
git clone git@github.com:socraticDevBlog/jamstackBlog.git

cd jamstackBlog
```

install appropriate NodeJs as configured in `.nvmrc` file

```bash
nvm install

node --version # to validate node installation
```

install project dependencies with npm

```bash
npm install .

npm run build

npm run develop
```

run website locally to url [localhost:8000](http://localhost:8000)

![assets de socraticDev](src/images/assets.jpeg?raw=true)

## Bâti autour du _framework_ GatsbyJS, la plate-forme techno du blogue est au goût du jour :

![static site sequence](https://dzone.com/storage/temp/11453293-static-site-generator.jpg)

- Site web généré via `NodeJS`
- Site web hébergé sur un `CDN`
- Pipeline d'intégration et déploiement continu via `GitHub` et `Netlify`
- Contenu éditable au format `Markdown`
- Contenu queryable par `GraphQL`
- Composants visuels réutilisables `React`
- Style avec `Saas` : Syntactically Awesome Style Sheets
- Optimisation du format des images livrées selon la compatibilité du browser : `WebP` quand c'est possible

## Performant

![Métrique de performance du site](src/images/pageSpeedDesktop.png?raw=true)
