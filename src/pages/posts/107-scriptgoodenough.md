---
title: "parfait du premier coup"
date: 2023-04-23
author: "socraticDev"
image: ../../images/plan-quality.png
tags:
  - business
  - programmation
---

La clé du succès c'est de livrer un produit qui répond aux besoins du client.
Ni davantage ni moins.

Pourquoi pas livrer une solution logicielle qui est parfaite du premier coup? En
regardant l'historique du dépôt de code (code repository) on constate qu'à part
quelques ajustements, l'ensemble des fichiers n'ont jamais eu à être retouché
de façon significative.

Je sais qu'avancer une telle proposition va à l'encontre d'idées reçues dans le 
monde du développement logiciel. Et franchement c'est tant mieux!

Présenter différentes perspectives ne peut qu'enrichir le dialogue et
faire progresser notre métier.

## planifiez!

C'est plutôt arrogant de dire qu'on livre un ouvrage parfait du premier coup, non?

C'est peut-être arrogant mais ça vaut le coup parce qu'on aura un client
heureux. Un client qui n'aura pas à dépenser quatre fois plus qu'il avait d'abord
budgété pour un produit qui répond à la moitié de ses attentes. 

La clé du succès est dans le mot "planification". Avant d'écrire centaine de
lignes de code et déployer un tas de ressources infonuagiques coûteuses, il est
primordial de planifier les différents aspects du système qu'on va livrer.

## un blogue

Le code [blogue de socraticDev](https://github.com/socraticDevBlog/jamstackBlog) est
un petit système qui génère un site web statique dont le contenu est conservé
sous la forme de fichiers `markdown` comportant des métadonnées structurées
sous la forme d'un "Front Matter"

```
---
title: "parfait du premier coup"
date: 2023-04-23
author: "socraticDev"
image: ../../images/plan-quality.png
tags:
  - business
  - programmation
---
```
<small>fig 1. Front Matter du présent article</small>

En somme, le code source du blogue (`JavaScript React`) n'a pas beaucoup évolué
depuis le premier billet publié le 17 octobre 2019. À part l'ajout de quelques
fonctionnalités, comme un feed RSS, tout avait déjà été implémenté dès le départ.

Je triche un peu ici ... Je dois révéler que socraticDev publiait déjà un blogue sur une autre
plate-forme auparavant. Cette expérience a informé la décision de migrer vers
un système dont il était entièrement propriétaire. Cette expérience préalable
lui avait permis d'élaborer un cahier de charge complet.

## deux minuscules scripts BASH

Sur son compte GitHub, socraticDev met en évidence le projet
[encrypted-backups](https://github.com/socraticDevBlog/encrypted-backups). Loin
d'être un chef d'oeuvre d'ingénierie logicielle, il utilise pourtant ce projet régulièrement dans
sa stratégie de sauvegarde de fichiers informatiques personnels. 

Une stratégie complète de sauvegarde de fichiers informatiques, dans les
grandes lignes, consiste à conserver trois copies du même fichier. Une copie
principale sur son poste de travail, une autre sur un disque dur séparé du
premier et une troisième sur un support géographiquement situé ailleurs que la
machine principale. Pour moi, conserver des backups de fichiers importants sur
le cloud répond à cette troisième exigence.

Toutefois, tout ce que j'envoie sur le cloud doit être encrypté. Il y a
plusieurs solution possible pour gérer l'encryption et la décryption des
fichiers. J'ai opté pour l'encryption-décryption du côté du client assuré par un
petit outil open-source fiable: [The GNU Privacy Guard](https://gnupg.org/)

## traits communs d'un succès

On peut tirer quelques leçons de ces deux projets qui représentent pour
moi, en tant que développeur et client, des succès.

1. Le besoin doit être clairement et complètement identifié. L'aspect
   fonctionnel doit être clairement compris par le développeur.

   Dans le cas d'un système de publication de blogue sur mesure, on parle du
   besoin du technologue désirant s'approprier son outil pour rédiger et
   publier un blogue sur le web. 
   
   J'ajoute l'adverbe "complètement" de façon intentionnelle. Parce que c'est
   souvent là que ça dérape. On peut craindre que le développeur utilise l'excuse typique du
   "good enough" pour éviter de sortir de sa zone de confort et effectuer des
   tâches qu'il maîtrise moins bien. Par exemple, dans le cas du système de
   blogue, il était primordial d'avoir un processus de déploiement continu
   automatisé simple et fiable. Dès que je pousse un nouveau billet sur mon
   compte GitHub, via `git`, je veux que le nouveau billet soit mis en ligne sans
   plus d'effort de ma part. L'aspect `devops` du développement logiciel étant
   moins souvent pris en charge par un développeur de logiciel, il y a toujours
   le risque de voir des développeurs déclarer son travail complet dès que ça
   fonctionne sur sa machine plaidant que c'est "good enough".

   Si le client n'est pas en mesure d'utiliser son système sans avoir à payer
   quelqu'un pour fignoler avec l'infrastructure en arrière-plan alors le
   travail n'est pas complet.

2. Le besoin et seulement le besoin du client doit être comblé. Le développeur doit se
   limiter à implémenter les fonctionnalités liées au besoin du client. Il ne doit pas
   extrapoler et ajouter des fonctionnalités qui, au bout du compte, ne servent
   pas le client.

   Pour le blogue, on peut noter qu'il ne repose pas sur un système de base de
   données. Pourquoi?  Pas besoin et, surtout, ça ajouterait inutilement de la
   complexité au produit.

   Pour le système d'encryption de backups, le client-développeur a tout
   d'abord pris la décision de ne pas utiliser d'encryption côté serveur. Il a
   ensuite pris la décision de ne pas utiliser un outil déjà disponible et prêt
   à être utilisé. Pourquoi? Il voulait garder le système simple et, surtout,
   comprendre ce qui se passe pendant l'encryption et la décryption de ses
   fichiers.
   
   Ici le concept de "good enough" s'applique en toute bonne foi. Utiliser un
   petit script BASH réutilisable et utiliser une librairie fiable pour gérer
   l'encryption et la décryption est vraiment un produit minimal viable (MVP)
   pouvant être mis entre les mains du client.

   Est-ce que la solution retenue est la meilleure du point de vue de la
   sécurité? Pas du tout!  Quelques personnes ont révisé mon script et pointé
   des failles de sécurité
   (https://github.com/socraticDevBlog/encrypted-backups/pulls). Or, comme je
   suis appelé à utiliser ce script sur
   mes propres machines et que mes fichiers téléversés sur le cloud ne
   contiennent pas de secrets d'État, c'est amplement suffisant.

## de l'empathie pour le client

En conclusion, je crois que la clé du succès c'est d'avoir de l'empathie envers
nos clients et nos utilisateurs finaux. 

Lors de l'élaboration d'un système logiciel, le besoin est rarement clairement
circonscrit. Habituellement, client ne sait pas ce dont il a besoin exactement. 
Dans ce cas, le rôle du concepteur de logiciels est de creuser davantage, poser
des questions et conseiller le client. Creuser autant du côté des besoins du
client que du côté des technologies à utiliser pour livrer une solution parfaite.

La clé du succès c'est de livrer un produit qui répond aux besoins du client.
Ni davantage ni moins.

<small>attribution pour l'image d'en-tête: <a href="https://www.vecteezy.com/free-vector/sign">Sign Vectors by Vecteezy</a>
</small>