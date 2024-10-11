---
title: "Comment collaborer à un projet open-source ?"
date: 2020-11-18
author: "SocraticDev"
image: ../../images/simpson-open-source.png
tags:
  - programmation
---

##### Qu'est-ce qu'un projet open source ?

Quand on parle d'_open source_, on parle bien sûr de projets relatifs au développement, l'entretien et l'utilisation d'un logiciel. L'attrait du logiciel est sa non-finitude : il intrinsèquement est inépuisable. C'est-à-dire que peu importe si un logiciel est installé sur une ou mille ordinateurs différents, il ne reste pas moins de logiciel. Les compagnies de logiciels et de jeux vidéo misent sur cette caractéristique. Une fois les coûts de développement absorbés, toute vente supplémentaire est pur profit.

> Un projet logiciel _open source_ réfère à un logiciel dont le code source original est gratuitement mis à la disposition de tous et ce code source peut être modifié et le produit redistribué librement.

Le logiciel libre n'est pas une mode éphémère. La société `Microsoft` a massivement investi dans la plate-forme de gestion de code source `GitHub` et a ouvert son code source aux développeurs de tout horizon. D'autre part, un nombre croissant de gouvernements adopte cette philosophie afin de tirer profit des projets pertinents à ses besoins, économiser les ressources attribuées au développement informatique et offrir de meilleurs services à ses citoyens.

##### Pourquoi contribuer à un projet _open source_ ?

Quand on utilise déjà un logiciel libre et qu'on découvre un bogue ou constate qu'on aimerait bénéficier d'une nouvelle fonctionnalité, alors nous avons toutes les raisons du monde de `cloner` le code source, travailler sur le code et soumettre le résultat aux responsables du projet.

Sinon, on peut contribuer à un projet afin d'améliorer ses compétences en développement de logiciel. Il n'y a pas de meilleure façon d'améliorer ses compétences en s'attaquant régulièrement à une nouvelle base de code. Habituellement, c'est en joignant une nouvelle équipe, au travail, que nous sommes confrontés à une nouvelle base de code.

Pourquoi ne pas revivre ce "thrill" de la nouveauté en visitant régulièrement de nouveaux projets. Contrairement à un emploi, on n'a pas à s'engager à long terme envers un projet. Les projets _open source_ recoivent généralement un maximum d'une ou deux contributions de la même personne. Et c'est une réalité acceptée.

Si vous découvrez qu'un projet ne vous convient pas, vous pouvez passer à autre chose. Pas de stress !

##### cinq choses à connaître pour être un bon contributeur

1. Vous devez absolument maîtriser les bases du système de gestion de version `git`. Prenez le temps d'apprendre la mécanique interne de ce système. C'est un système puissant mais relativement simple et élégant. Si vous n'avez pas le temps d'ausculter les viscères du système, alors vous pouvez vous en sortir en apprenant les commandes de base : `git clone`, `git status`, `git commit`, `git push`, `git pull`

2. Avant de proposer un correctif ou une nouvelle fonctionnalité, vous allez devoir mettre en place un environnement de développement sur votre propre machine ... et tester votre code. Étant donné l'aspect éphémère de votre engagement envers un projet, je vous suggère de toujours travailler sur une machine virtuelle (`vm`) ou, à tout le moins, dans un environnement virtuel distinct de votre ordinateur. Prenez le temps nécessaire pour mettre en place un environnement de développement de qualité.

3. Ne soyez pas surpris si les standards de qualité de code sont plus élevés qu'à votre milieu de travail. Ne soumettez pas du code avec des variables mal nommées, du code-spaghetti, des ajouts de code mort (i.e. commenté), des modifications apportées à des bouts de code qui n'ont rien à voir avec la tâche traitée. Bref, vos soumissions devront être de qualité sinon elles seront refusées.

4. Les tests unitaires deviendront vos amis. La pratique du `TDD` deviendra une deuxième nature. Vous allez voir !

5. Avant de contribuer à un projet, vous allez vérifier le nombre d'étoiles d'un projet, le nombre de tâches ("issues") et la fréquence à laquelle les `pull requests` sont traitées. Vous voulez travailler sur un projet vivant. Rien de pire qu'attendre des semaines avant que sa contribution soit traitée.

Vous allez aussi prendre l'habitude de lire les fichiers suivants :

- `README.md` : une description informative du projet. Souvent on y explique comment installer l'environnement de développement sur sa machine ainsi que les informations primordiales au bon fonctionnement du logiciel

- `CONTRIBUTING.md` : ce fichier explique de façon explicite comment contribuer au projet. Sachez que la présence de ce fichier signifie que le projet cherche et apprécie les contributions de développeurs externes. C'est bon signe !

- `CODE-OF-CONDUCT.md` : ce fichier contient le code de conduite à adopter dans ses relations avec les autres membres de la communauté. Contrairement à un milieu de travail où règne (eh oui!) une homogénéité culturelle, sociale et sexuelle, une communauté _open source_ est constituée de membre provenant de pays différents, ayant des valeurs différentes, des opinions différentes, etc. Bref, ce que vous considérez "normal" et "bien" n'est peut-être pas universellement accepté par tous 👼

La plupart des projets _open source_ encourage des valeurs comme le respect, la tolérance de la différence et l'inclusivité. Si cela vous énerve ... eh bien restez chez-vous !

##### sources

[https://www.wikiwand.com/fr/Open_Source_Definition](https://www.wikiwand.com/fr/Open_Source_Definition)

[Comment contribuer à l'open source ?](https://opensource.guide/fr/how-to-contribute/)

[https://github.co](https://github.co)
