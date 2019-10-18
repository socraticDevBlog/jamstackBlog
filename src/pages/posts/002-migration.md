---
title: "Migration du blog vers le JAMstack"
date: 2019-10-17
author: "SocraticDev"
image: ../../images/jamstack.jpg
tags:
  - web
  - jamstack
  - blogging
---

Le nouveau site de blog de Socratic Dev est en ligne. Après l'abandon de la plate-forme WordPress, je passe enfin au fameux JamStack. Grâce au framework GatsbyJS, j'obtiens un plus grand contrôle sur la conception du site. Gatsby est un générateur de site web statique. En résumé, un site web statique c'est un site web simplement constitués de fichiers hébergés sur un serveur de fichiers. Plus besoin de serveur web ni de langages de programmation 'côté serveur' comme PHP ou ASP.net. Il n'y a aucune génération de contenu du côté serveur.

>Après tout :  est-ce qu'un simple blog personnel a besoin d'une base de données et d'une infrastructure gourmande en ressources ?

L'acronyme "JAM" signifie "JavaScript", "API" et "MarkDown". Le JavaScript est le dialecte de rigueur pour la programmation du site. Non seulement les événements mais aussi la génération du code HTML sont gérés par des fonctions asynchrones qui récupèrent le data et l'insère dans les gabaris de page.

De plus, GatsbyJS intègre la librairie JavaScript React. Dans le cadre de ce blogue, j'utilise des composantes React comme un panneau de navigation. Comme cette composante fait partie de la librairie ReactStrap, elle est rendue de façon optimale sur tous les médias.

La gestion du contenu est confiée au format MarkDown (.md). Le MarkDown est une syntaxe permettant de formatter un document en mettant l'emphase sur la lisibilité du contenu. Un humain pourrait lire un texte formatté en MarkDown sans être gêné par la présence de balises envahissantes comme le HTML ou le LaTeX. L'utilisation de tirets, d'astérisques et de dièses permettent de signifier à un lecteur machine la présence d'un titre ou d'une énumération. Ces catégories sémantiques seront ensuites traitées conformément aux feuilles de style appliquées lors de la compilation du site. Pour l'humain : ça lui est indifférent.

La notion d'API (application programming interface) remplace le traditionnel accès à une base de données côté serveur. Un blogue peut utilisé l'API GraphQL pour récupéré son contenu. Une application plus complexe pourrait utiliser des APIs plus sophistiquées. Par exemple, une boutique en-ligne utilisera un plugin comme SnipCart pour permettre des achats et des transactions en ligne.

Il y a de nombreux avantages au JamStack :

1. Performance : l'hébergement de fichiers précompilés sur un CDN permet une vitesse de téléchargement incomparable

2. Facilité : il est facile de démarrer et mettre en ligne un site en quelques heures

3. Coût : l'hébergement d'un site statique est abordable et souvent gratuit

4. Référencement : les frameworks permettent d'ajouter des balises de référencement (SEO) et un site précompilé est facilement 'rampable' par le robot de Google

Malgré tout, les applications web plus complexes sont mieux servies par des frameworks web traditionnels.

Pour terminer ce premier post, j'aimerais remercier les gens de Snipcart pour l'organisation des Meetups 'JAMStack' dans le quartier Saint-Roch de la ville de Québec. C'est un groupe de gens passionnés par le web qui se rencontrent mensuellement pour parler web, javascript, API et Markdown. C'est vraiment rassurant de pouvoir compter sur des gens plus expérimentés que soi quand on se lance dans la belle aventure de découvrir de nouvelles technologies !
