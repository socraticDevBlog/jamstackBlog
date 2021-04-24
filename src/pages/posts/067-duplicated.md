---
title: "Garder ses disques durs propres"
date: 2021-04-24
author: "SocraticDev"
image: ../../images/dupeGuru.png
tags:
  - productivité
---

Au fil du temps, nos disques durs se remplissent de nombreux fichiers. Comme nous utilisons divers fournisseurs de stockage cloud comme ``dropbox`` ou ``oneDrive`` et que nous travaillons à partir de différentes machines, nous finissons souvent par avoir les mêmes fichiers en double, en triple, etc.

Ceci est inacceptable.

#### Évitez la duplication de fichiers

Les fichiers de travail dupliqués nuisent à votre productivité. Ils mettent votre stratégie de sauvegarde en péril. Que faire? Analysez vos fichiers pour les doublons et supprimez-les!

Ce n'est pas quelque chose que vous voulez passer des jours à faire manuellement. Utilisez un outil logiciel spécialisé pour vous aider.

J'ai récemment découvert le petit logiciel libre [dupeGuru](https://dupeguru.voltaicideas.net/) et l'utilise actuellement pour remettre de l'ordre dans mes disques durs.

> dupeGuru est un outil d'interface graphique multiplateforme (Linux, OS X, Windows) pour trouver les fichiers en double dans un système. Il est principalement écrit en Python 3 et a la particularité d'utiliser plusieurs boîtes à outils d'interface graphique, toutes utilisant le même code Python de base. Sous OS X, la couche d'interface utilisateur est écrite en Objective-C et utilise Cocoa. Sous Linux 7 Windows, il est écrit en Python et utilise Qt5.

Comment ça marche? Après l'avoir installé sur votre machine, vous le pointez vers un répertoire du disque dur et le laissez l'analyser. Il ne vérifiera pas seulement les noms de fichiers en double. Il analysera également les images, les fichiers audio et vidéo pour trouver les doublons.

> dupeGuru est bon avec les images. Il dispose d'un mode d'image spécial qui peut numériser des images de manière floue, vous permettant de trouver des images similaires, mais pas exactement les mêmes.

Ensuite, il listera tous les fichiers et certains d'entre eux seront des doublons, des triplicats, etc. Ensuite, vous sélectionnez celui à supprimer et tapez ``ctrl-D`` pour les supprimer.

Un disque dur propre est un disque dur heureux.

#### sources
https://dupeguru.voltaicideas.net/
