![GitHub commit activity](https://img.shields.io/github/commit-activity/y/socraticDevBlog/jamstackBlog?style=plastic)
# Le blogue de socraticDev porte sur la technologie et la philosophie

## (2022-07-04) end of life

Situation critique: il devient de plus en plus difficile pour moi de compiler le site en local. Je constate la présence de plusieurs vulnérabilités. Beaucoup de librairies utilisées ne sont plus maintenu.

La décision que je dois prendre c'est soit recoder l'ensemble du site avec des technologies à jour ou mettre à jour le site, une dépendance à la fois.

À suivre.

![assets de socraticDev](src/images/assets.jpeg?raw=true)

## Bâti autour du _framework_ GatsbyJS, la plate-forme techno du blogue est au goût du jour : 

![static site sequence](https://dzone.com/storage/temp/11453293-static-site-generator.jpg)

- Site web généré via ``NodeJS``
- Site web hébergé sur un ``CDN``
- Pipeline d'intégration et déploiement continu via ``GitHub`` et ``Netlify``
- Contenu éditable au format ``Markdown``
- Contenu queryable par ``GraphQL``
- Composants visuels réutilisables ``React``
- Style avec ``Saas`` : Syntactically Awesome Style Sheets
- Optimisation du format des images livrées selon la compatibilité du browser : ``WebP`` quand c'est possible

## Performant

![Métrique de performance du site](src/images/pageSpeedDesktop.png?raw=true)
