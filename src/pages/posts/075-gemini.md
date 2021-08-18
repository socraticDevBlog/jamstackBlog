---
title: "gemini un protocole alernatif à http"
date: 2021-08-16
author: "SocraticDev"
image: ../../images/gemini.png
tags:
  - technologie
  - web
  - foss
  - actualité
---

Que diriez-vous de lire les nouvelles sur votre terminal? Et que ça soit une expérience plaisante. Le protocole `Gemini` propose une alternative au protocole web `http` pour servir du contenu sémantiquement riche suivant la dynamique client/serveur.

La plupart des bidouilleurs trouvent que le web est gonflé. Un site web ordinaire effectue plusieurs appels à différents serveurs pour télécharger les fichiers nécessaires à son fonctionnement. En plus de la publicité que personne ne désire voir, le site moyen offre beaucoup de fonctionnalités qui n'ajoute pas de valeur à l'utilisateur. Les frameworks ``JavaScript``sont de véritables cathédrales ; des pyramides de dépendances que personne ne désire maintenir. Ce n'est absoluement pas le ``web`` dont Sir Berners-Lee avait rêvé. 

Est-ce que notre expérience quotidienne avec le ``web`` est une fatalité ? Pouvons-nous échapper à ce cirque et revenir à un ``web`` simple et épuré qui livre exactement ce que le lecteur recherche. Un ``web`` _lean_ hyper léger, rapide qui répond au besoin de la majorité des utilisateurs : accéder à l'information.

##### qu'est-ce que le protocole `Gemini`
Gemini est un nouveau protocole Internet qui :

- Est plus lourd que `gopher`
- Est plus léger que le ``web``
- Ne remplacera pas le ``web`` non plus
- Vise un rapport poids/puissance maximal
- Prend la confidentialité des utilisateurs très au sérieux

Le protocole a été établi par le hacker [`Solderpunk`](https://tilde.zone/@solderpunk) en juin 2019. Une communauté ouverte lui a apporté de l'aide.

> "Gemini est conçu dans le cadre de la suite de protocoles Internet. Comme HTTP(S), Gemini fonctionne comme un protocole requête-réponse dans le modèle informatique client-serveur. Un navigateur Gemini (analogue à un navigateur Web), par exemple, peut être le client et une application s'exécutant sur un ordinateur hébergeant un site Gemini peut être le serveur. Le client envoie un message de requête Gemini au serveur, et le serveur renvoie un message de réponse. Gemini utilise une connexion distincte au même serveur pour chaque demande de ressource."
>
><cite>-- Wikipedia, "Gemini(protocol)"</cite>

##### concrètement
Au lieu de page web, on parle de _capsule gemini_. Ces _capsules_ sont composées dans un langage de formattage léger appelé `gemtext` qui ressemble beaucoup au `markdown`. La bonne pratique est de composer la capsules à partir de 'longues lignes' et ne pas se soucier de la mise en page. La mise en page est confiée au client ``Gemini`` qui optimise l'espace disponible pour favoriser l'expérience de lecture. 

Personnellement, j'ai essayé et adopté le client `amfora` (``Go``) qui s'installe rapidement via le gestionnaire de paquets ``Homebrew``:
```
brew install amfora
```

##### côté serveur
Du côté du serveur, il existe une multitude d'implémentations de serveur `gemini` dans la plupart des langages de programmation : `python`, `c`, `Haskell`, etc.

Personnellement, j'ai adopté le serveur de Bruno Bord [https://github.com/brunobord/gemeaux](https://github.com/brunobord/gemeaux). Pourquoi? Il est écrit en `python` et ne nécessite pas de nombreuses dépendances. Le `readme.md` est complet et j'ai rapidement réussi à le faire tourner sur mon serveur personnel ouvert sur Internet.

J'ai ensuite esquissé une petite _capsule_ pour ma communauté en ligne. Il suffit de créer un fichier principal `index.gmi` et indiquer au serveur le répertoire à partir duquel servir les fichiers.

```
gemini://dailybuild.org
```

##### est-ce que j'utilise Gemini à tous les jours ?
Je visite quotidiennement différentes _capsules_ d'actualité comme `npr`, `CNN` et le `Christian Science Monitor`. Les _capsules_ chargent instantanément, il n'y pas de publicités, pas de vidéos et les articles sont mis en page pour une lecture efficace :  

```
gemini://rawtext.club/~sloum/geminews/
```

##### sources
[https://gemini.circumlunar.space/](https://gemini.circumlunar.space/)

[https://www.wikiwand.com/en/Gemini_(protocol)](https://www.wikiwand.com/en/Gemini_(protocol))