---
title: "Deux ou trois bonnes raisons d'utiliser des <table> html"
date: 2020-12-08
author: "SocraticDev"
image: ../../images/tabular.png
tags:
  - programmation
  - web
is_archived: false
---

Parlez à différents développeurs et vous découvrirez un chauvinisme qui défrise. Certains ne jurent que par les outils édités par `Microsoft` alors que d'autres n'y toucheraient pas avec le manche d'un balai. Les fans de `gnu/linux` sont souvent des amateurs d'anciens laptop `Thinkpad` solidement construits alors que les spécialistes du web demeurent fidèles à leur `Macbook Pro`.

Bref, en tant qu'artisans-techno, nous sommes trop souvent prisonniers d'idées reçues pouvant freiner notre productivité. Pour moi, par exemple, l'idée d'utiliser des `<table>` en `HTML` au lieu de `grids` et de `css` était **_en 2020_** objectivement indéfendable.

Pourquoi ? Sûrement des échos entendus lors de conférence ou ailleurs... Comme tout mythe, il y a quand même un fond de vérité.

##### Ça commence sur Twitter

Le thème des `<table>` en `HTML` est inlassablement discuté sur les médias sociaux fréquentés par les développeurs. On peut même dire qu'il existe un consensus au sein de la communauté. L'idée que les `<table>` en `HTML` "c'est mal" remonte au début du web ; avant l'arrivée du `css`. Le `css`, _feuille de style en cascade_, est un langage informatique de présentation permettant de styliser une page web. C'est-à-dire mettre en page le contenu, gérer les couleurs, etc.

Personnellement, j'associe instinctivement `Twitter Boostrap` à la notion de `css`. `Bootstrap` est une librarie spécialisée permettant de gérer facilement le contenu d'une page web avec des composants génériques reprenant le concept de quadrillage utilisé en typographie. En bonus, à l'aide de la magie du `JavaScript`, `Bootstrap` est informé en permanence de la taille de votre fenêtre. Cela lui permet de conserver une mise en page harmonieuse malgré le redimensionnement de la fenêtre du navigateur web. Ce qu'on appelle dans le jargon : `responsive design`.

Avant l'arrivée du `CSS`, les développeurs futés utilisaient des `tables` comme outil de mise en page. Cette pratique est fortement déconseillée car :

- Rend la page web non _responsive_ : la `<table>` ne répond pas bien au changement de taille de la fenêtre;
- Ça nuit au `seo` (optimisation du référencement par les moteurs de recherche comme `Google`) : les moteurs de recherche n'indexe pas le contenu des tables
- Nuit aussi à la performance du site : le navigateur attend d'avoir entièrement téléchargé le tableau avant de procéder au rendu de la page.
- Sémantiquement, une `<table>` indique la présence de données sous forme tabulaire. En l'utilisant à d'autres fins, on distortionne la signification du contenu de notre site web.

##### Présenter des données

L'utilisation de tables est encouragé pour présenter des données tabulaires. Le type de données typiquement retrouvées sur une feuille du chiffrier `Excel`. Pourquoi?

- Parce que la balise html `<table>` est conçue pour ça
- en accessibilité, pour les utilisateurs non-voyants ou mal-voyants, le lecteur d'écran sait instinctivement comment lire les données
- pour un analyste d'affaires ou un scientifique des données, il est facile de "copier-coller" les données depuis la page web

Un truc du métier pour les développeurs : au lieu de construire des tableaux à partir de zéro, utilisez un générateur de tableaux. Plusieurs générateurs de tableau sont disponibles sur le web. Ils vous permettront d'économiser du temps tout en vous assurant d'avoir un code optimal.

##### N'oublions pas les courriels

Il est suggéré d'utiliser un tableau pour composer efficacement un courriel généré automatiquement par une application. Les éléments html d'un tableau seront visuellement bien rendus par l'ensemble des lecteurs de courriels.

##### Sources

[https://www.freecodecamp.org/news/html-tables-all-there-is-to-know-about-them-d1245980ef96/](https://www.freecodecamp.org/news/html-tables-all-there-is-to-know-about-them-d1245980ef96/)
