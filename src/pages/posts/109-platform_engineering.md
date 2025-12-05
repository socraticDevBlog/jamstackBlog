---
title: "Platform Engineering est le prochain buzzword après DevOps"
date: 2023-08-26
author: "socraticDev"
image: ../../images/platform-engineering-dalle.png
tags:
  - idées
  - devops
is_archived: true
---

Un nouveau concept a fait son apparition dans le domaine du développement de
logiciels : le "plateform engineering". Une idée séduisante qui est (mal)interprétée de
différentes façons. Probablement en raison de ma formation en philosophie, j'ai envie d'examiner
avec un esprit ouvert pour évaluer sa valeur. Est-ce du battage médiatique ? Est-ce vraiment la solution
à tous les problèmes du développement logiciel ?

> "L'ingénierie de plate-forme est la discipline de conception et de création de chaînes d'outils et de flux de travail qui permettent des capacités en libre-service pour les organisations d'ingénierie logicielle à l'ère du cloud natif. Les ingénieurs de plate-forme fournissent un produit intégré le plus souvent appelé « plate-forme de développement interne » couvrant les nécessités opérationnelles de l'ensemble du cycle de vie d'une application."
>
> <cite>Luca Galante, "What is platform engineering"</cite>

## Quels compétences doit posséder un bon développeur de plate-forme ?

Camille Fournier, responsable d'équipes plateformes, souligne que les principales qualités de
un bon ingénieur de plate-forme n'est pas technique. _Patience_, _empathie_
ainsi que des _compétences en communication_ sont les qualités qu’elle recherche lors de
l’embauche de nouveaux coéquipiers.

Les équipes de plateforme attirent souvent les développeurs souhaitant jouer avec les dernières technologies
et avides de construire des systèmes de pointe. Cependant, selon Camille
Fournier, la construction de tels systèmes n’est pas la manière dont un
ingénieur de plate-forme apporte de la valeur à son organisation.

Tout d'abord, les ingénieurs de plate-forme doivent comprendre les « développeurs alignés sur le flux » ;
c'est-à-dire les développeurs qui créent les fonctionnalités pour lesquelles les clients paient. Avec
patience et empathie, un excellent ingénieur de plate-forme collabore avec les
équipes de développement pour comprendre ce qui les ralentit, comment
fonctionnent leurs systèmes actuels et comment les aider à migrer leurs
solutions vers la plateforme ; effectuant souvent la migration pour eux.

En résumé, l'une des priorités des ingénieurs de plate-forme est d'offrir un excellent "service client" aux équipes de développement. Construire des systèmes de nouvelle génération n'est qu'un
façon de le faire!

## L'ingénierie de plateforme n'est pas une solution miracle

Dave Farley, développeur de logiciels indépendant et consultant, fondateur et
Directeur de Continu Delivery Ltd., a récemment exprimé sa réticence à l'égard
du concept d'ingénierie de plate-forme. Selon lui, construire des plates-formes utiles pour
les systèmes distribués non triviaux n'est pas possible. D’abord et avant tout, ce n’est pas le cas
possible de construire des systèmes hautement génériques du premier coup.

### démonstration

En tant qu'ingénieur logiciel expérimenté, il propose un scénario probable qui
prouve que la « plate-forme » est une entreprise vaine. Disons qu'une équipe de
la plateforme au sein d'une grande organisation décide de créer un module
générique représentant un "compte"(Account). Ce module est destiné à être
consommé par différentes équipes dont les systèmes utilisent un concept de
_Account_.

Selon Dave Farley, il ne faudra pas attendre trop longtemps avant qu'une équipe ait
besoin d'ajouter une fonctionnalité particulière au module _Account_.
Peut-être que l'équipe financière devra se conformer avec des réglementations «
connaissez votre client » (_KYC_) pour éviter le blanchiment d’argent.

Ensuite quoi ? Ils demandent à l'équipe de la plateforme d'ajouter une fonctionnalité
_KYC_ à leur module générique de *Compte* ; brisant ainsi potentiellement le
module _Account_ pour d'autres équipes.

Ou plutôt, l'équipe financière cesserait d'utiliser le module générique pour créer son propre module
plutôt; perdant ainsi des fonctionnalités utiles telles que l'authentification unique (_SSO_).

### rien ne peut remplacer la maîtrise des fondamentaux

L’ingénierie de plateforme semble être une excellente idée : supprimer tous les
éléments complexes et difficiles du travail des équipes de développement et
refiler ces aspects à une équipe d'experts travaillant en silo.

Mais ça ne marchera jamais !

Penser que l’ingénierie de plateforme permettra aux entreprises de sous-traiter
le processus développement auprès de programmeurs peu qualifiés est un rêve vain.

Au lieu de cela, je suis d'accord avec Dave Farley pour insister sur le fait
que les ingénieurs logiciels sont des professionnels qualifiés. Ils doivent
être soutenus dans la gestion de la complexité via des stratégies éprouvées
telles que
comme:

- abstraction et dissimulation d'informations;
- bonne séparation des aspects;
- une bonne utilisation de la modularité;
- conceptions à haute cohésion et à faible couplage.

## une institution

Les équipes d’ingénierie de plateforme doivent être considérées comme une forme d’institution interne à une
organisation.

> "Une institution sociale est une structure sociale dotée d'une certaine stabilité et durabilité, dans le temps. Il s'agit d'un mode de régulation d'interactions sociales vouées à se reproduire; les interactions vouées à se reproduire tendent à faire émerger des institutions sociales telles que le mariage, chômage, l'école ou la famille, afin d'y réguler les interactions. Toute institution sociale se présente comme un ensemble de croyances, de normes, d'attitudes et de pratiques. "
>
> <cite>"Institution sociale", _fr.wikipedia.org_, 2023-08-26</cite>

En tant qu'institution, une équipe d'ingénierie de plateforme assure la continuité des
produits logiciels d'une organisation. Elle est consciente de son passé, consciente de son
présent et prépare son avenir. Autant cela contraint l'alignement des flux
équipes de développement, cela les aide à atteindre les résultats souhaités :

- des systèmes plus faciles à entretenir ;
- des systèmes plus sûrs ;
- des cycles de développement plus rapides ;
- etc.

`traduit de l'anglais par Google Translate`

## sources

[Continuous Delivery YouTube channel - Platform Engineering Is The New Kid On
The Block](https://youtu.be/wXyNHngEN-s)

[HashiCorp YouTube channel - What is a Platform
Engineer?](https://youtu.be/q6vbxk3hq-o)

[LevelUp engineering podcast with Camille Fournier - Managing Platform Teams:
How to Build and Structure Platform Engineering?](https://youtu.be/jjwrIra7Dx4)

[Luca Galante - What is platform engineering?](https://platformengineering.org/blog/what-is-platform-engineering)
