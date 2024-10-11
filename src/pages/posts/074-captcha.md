---
title: "CAPTCHA pour distinguer l'humain de la machine"
date: 2021-08-07
author: "SocraticDev"
image: ../../images/captcha.png
tags:
  - technologie
---

L'acronyme `CAPTCHA` signifie littéralement "Completely Automated Public Turing test to tell Computers and Humans Apart". L'objectif du `CAPTCHA` est de distinguer l'humain d'un robot. La plupart des sites et applications web sont destinées aux êtres humains. Par exemple, l'administrateur d'un site web de vente de billets de spectacle a tout intérêt à restreindre l'accès à sa plate-forme de réservation aux humains. Des revendeurs de billets pourraient utiliser un programme informatique pour acheter tous les billets intéressants et les revendre avec profits.

On utilise aussi la procédure pour limiter le `spam` pouvant être généré par des robots malveillants.

##### qu'est-ce qu'un test de Turing ?

Le `test de Turing` est aussi appelé `jeu d'imitation`. Il s'agit d'un jeu où l'ordinateur tente d'imiter le comportement humain. Si on ne réussit pas à distinguer l'humain de la machine, alors la machine a passé le test avec succès.

Dans le contexte du `CAPTCHA` on tente de faire l'inverse : prouver que l'utilisateur est bel et bien un être humain.

> "Le test de Turing est une proposition de test d’intelligence artificielle fondée sur la faculté d'une machine à imiter la conversation humaine. Décrit par Alan Turing en 1950 dans sa publication _Computing Machinery and Intelligence_, ce test consiste à mettre un humain en confrontation verbale à l’aveugle avec un ordinateur et un autre humain.
>
> Si la personne qui engage les conversations n’est pas capable de dire lequel de ses interlocuteurs est un ordinateur, on peut considérer que le logiciel de l’ordinateur a passé avec succès le test. Cela sous-entend que l’ordinateur et l’humain essaieront d’avoir une apparence sémantique humaine."

##### invention académique

Le `CAPTCHA` est une marque déposée de l'université américaine Carnegie-Mellon. Mais, des ingénieurs du défunt moteur de recherche `Altavista` soutiennent avoir développé un processus pour contrer les mécanismes de reconnaissance de caractères (`OCR`) d'attaquer leurs systèmes en 1997. Soit plus de cinq années avant l'université de Pittsburgh. Les ingénieurs de Silicone Valley expliquent s'être inspirésy du manuel d'instruction de leur scanneur optique de marque `Brother` afin de rendre la reconnaissance de caractères encore plus difficile. En pivotant les lettres et en ajoutant des lignes, etc.

Remarquons que `CAPTCHA` est un concept plutôt qu'une invention. L'implémentation du début des années 2000 a cédé le pas à d'autres implémentations plus complexes. Les ordinateurs d'aujourd'hui étant assez puissants pour berner sans peine les premiers `CAPTCHA`.

##### variants

`Google` a breveté un système plus complexe baptisé `reCAPTCHA`. Il s'agit d'une forme plus complexe du test de Turing. Il est essentiellement distribué. C'est-à-dire que la réponse au challenge découle généralement d'une corroboration entre le résultat d'un système de reconnaissance optique (`OCR`) et d'interactions avec plusieurs utilisateurs.

En 2012, la firme de Mountain View a ajouté des images tirées de `Google Maps` dans ses challenges.

Ensuite, nous voyons le `noCAPTCHA` devenir plus répandu. Essentiellement, une boîte à cocher pour prouver que l'utilisateur est un humain. C'est en analysant le mouvement de la souris que le serveur distingue l'humain de la machine.

##### controverses

Depuis longtemps, `Google` offre son service de `reCAPTCHA` gratuitement. En échange, la firme met les utilisateurs au travail pour l'aider à déchiffrer des caractères imprimés difficiles à reconnaître pour une machine. En effet, `Google` participe à un vaste projet de numérisation de toute publication imprimée. Le challenge est aussi utilisé pour entraîner des systèmes d'intelligence artificielle. Le scandale est donc d'utiliser les utilisateurs d'internet sans rémunérer leurs efforts.

Un autre scandale récent est celui nourri par la société `Defenders of the American Dream, LLC`. Elle prétend détenir un brevet pour la mécanique de `reCAPTCHA` et envoie des mises en demeure à une multitude de propriétaires de site web ; elle demande plusieurs milliers de dollars pour couvrir des frais de licences.

##### sources

[https://fr.wikipedia.org/wiki/ReCAPTCHA](https://fr.wikipedia.org/wiki/ReCAPTCHA)

[https://fr.wikipedia.org/wiki/Test_de_Turing](https://fr.wikipedia.org/wiki/Test_de_Turing)

[https://www.eff.org/deeplinks/2021/08/captcha-patent-all-american-nightmare](https://www.eff.org/deeplinks/2021/08/captcha-patent-all-american-nightmare)
