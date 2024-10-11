---
title: "Migration du blog vers le JAMstack"
date: 2019-10-17
author: "SocraticDev"
image: ../../images/jamstack.jpg
tags:
  - web
  - technologie
---

Le nouveau site de blog de Socratic Dev est en ligne. Après l'abandon de la plate-forme WordPress, je passe enfin au fameux JamStack. Grâce au framework GatsbyJS, j'obtiens un plus grand contrôle sur la conception du site. Gatsby est un générateur de site web statique. En résumé, un site web statique c'est un site web constitué de fichiers hébergés sur un serveur de fichiers. Plus besoin de serveur web générant dynamiquement des pages web !

> Après tout : est-ce qu'un simple blog personnel a besoin d'une base de données et d'une infrastructure gourmande en ressources ?

L'acronyme "JAM" signifie "Javascript", "API" et "Markdown". Le Javascript est le dialecte de rigueur pour la programmation du site. Le programmeur web conçoit différents modules appelés 'component', 'page' et 'template'. Ces modules sont intégrés dans un fichier central appelé 'layout'. Le framework GatsbyJs pousse l'enveloppe en permettant la création de composants React et l'utilisation des composants préfabriqués de la librairie Reactstrap. Comme Reactstrap dérive de Boostrap, on bénéficie d'un site web qui est aussi bien rendu sur un ordinateur, une tablette ou un smartphone.

La gestion du contenu est confiée au format Markdown (.md). Le MarkDown est une syntaxe permettant de formatter un document en mettant l'emphase sur la lisibilité du contenu. Un humain peut facilement lire le texte formatté en Markdown sans être gêné par la présence des balises envahissantes des formats HTML, XML ou LaTeX. L'utilisation de tirets, d'astérisques et de dièses permettent de signifier à un 'lecteur machine' la présence d'un titre ou d'une énumération. Ces précisions sémantiques seront ensuites traitées conformément au code exécuté lors de la compilation du site. Pour l'humain : ça lui est indifférent.

De plus, avec GatsbyJS, nous sommes invités à intégrer un 'header' au texte pour permettre au moteur GraphQL de caractériser efficacement le contenu. Par exemple, dans le blogue de SocraticDev, chaque fichier contenant le texte d'un post est caractérisé par le nom de l'auteur, la date, le titre et des tags dénotant les sujets abordés. Lors de la génération du site (build), des fonctions Javascript sont invoquées pour transformer le titre du post en une URL significative ('le-titre-avec-des-tirets-entre-chaque-mot'). Une autre fonction boucle sur les 'tags' et préparent les pastilles bleues dénotant les sujets traités dans le post.

La notion d'API (application programming interface) remplace le traditionnel accès à une base de données côté serveur. Un blogue peut utiliser l'API GraphQL pour récupérer son contenu. Une application plus complexe pourrait utiliser des APIs plus sophistiquées. Par exemple, une boutique en-ligne utilisera un plugin comme SnipCart pour permettre des achats et des transactions en ligne.

Il y a de nombreux avantages au JamStack :

1. Performance : l'hébergement de fichiers précompilés sur un CDN permet une vitesse de téléchargement incomparable

2. Facilité : il est facile de démarrer et mettre en ligne un site de qualité en quelques heures

3. Coût : l'hébergement d'un site statique est abordable et souvent gratuit

4. Référencement : les frameworks permettent d'ajouter des balises de référencement (SEO) et un site précompilé est facilement 'rampable' par le robot de Google

Malgré tout, les applications web plus complexes sont mieux servies par des frameworks web traditionnels.

Pour terminer ce premier post, j'aimerais remercier les gens de Snipcart pour l'organisation des Meetups 'JAMStack' à leur bureau du quartier Saint-Roch de la ville de Québec. C'est un groupe de passionnés du web qui se rencontrent périodiquement pour parler web, javascript, API et Markdown. C'est vraiment rassurant de pouvoir compter sur des gens plus expérimentés que soi quand on se lance dans la belle aventure de découvrir de nouvelles technologies !
