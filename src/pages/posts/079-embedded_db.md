---
title: "Pourquoi embarquer une base de données ?"
date: 2021-10-08
author: "SocraticDev"
image: ../../images/embedded.jpeg
tags:
  - technologie
  - programmation
---

Pour moi, choisir et implémenter un système de gestion de base de données pour une nouvelle application est une torture. Plusieurs questions me tourmentent : ai-je fait le bon choix de base de données, sélectionné le bon `ORM`, les modèles de données et schémas ? Toutes ces inquiétudes pour m'éviter d'avoir à modifier des schémas et scripter des migrations de données. Car je sais qu'en cours de route, il y aura des imprévus et des changements de cap dans le développement de l'application.

Ma solution? Évitez tout projet où je dois implémenter une base de données. Triste, non ?

Honnêtement, la base de données embarquée `SQLite` m'a toujours paru comme la solution la plus simple et la plus sensée dans un contexte de début de projet.

> Contrairement aux serveurs de bases de données traditionnels, comme MySQL ou PostgreSQL, sa particularité est de ne pas reproduire le schéma habituel client-serveur mais d'être directement intégrée aux programmes. L'intégralité de la base de données (déclarations, tables, index et données) est stockée dans un fichier indépendant de la plateforme.

##### qu'est-ce qu'une base de données embarquée ?

Tout d'abord, une base de données embarquée ne se résume pas aux base de données utilisées dans les systèmes embarquées en temps réel (commutateurs de réseau ou appareils électroniques destinés aux consommateurs).

Ce sont des bases de données étroitement couplées avec un logiciel applicatif. Cela contraste avec le modèle client-serveur étant le plus répandu dans l'industrie.

> Une base de données intégrée est une technologie de base de données dans laquelle les solutions de gestion de base de données sont intégrées dans une application plutôt que fournies en tant qu'outils autonomes. Dans de nombreux cas, cela "cache" efficacement les outils de gestion de base de données à l'utilisateur final.

##### cas d'utilisation pour une base de données embarquée

Le système traditionnel est l'architecture client-serveur où la base de données est administrée de façon autonome et s'exécutant sur son propre serveur. Les applications clients communiquent avec le serveur de base de données via le réseau. Habituellement en moins de quelques centaines de millisecondes. Mais encourant tout de même une latence.

Les cas d'utilisation où une base de données embarqués sont préférables sont ceux où un accès immédiat (en termes de micro-secondes) est requis. Bien sûr, même un accès à un fichier local ou à un espace de mémoire vive encourt de la latence. Mais beaucoup moins que sur le réseau.

On retrouve donc des base de données embarquées dans les systèmes exigeant une très faible latence en lecture et en écriture. Parfois, la base de données consiste en une collection de paires clef-valeur persistant dans la mémoire vive du système hôte.

- Un système vérifiant une série de critères à chaque requête `http` devrait utiliser une base de données en mémoire. La latence de ce système doit être extrêment faible pour ne pas ralentir les interactions avec les utilisateurs.

- Un système basé sur la structure de données de la file (`queue`) comme `Kafka`, `in-memory db` ou `Bigstreams`. Ce système favorise une écriture ultra-rapide, avec faible latence, pour un traitement rapide de données.

Aussi, on utilisera une base de données intégrée lorsque l'application ne peut doit pas se connecter à un serveur externe. Les fureteurs web (`web browsers`) utilise des base de données embarqués pour assurer la persistance et la confidentialité des données de ses utilisateurs.

Certains systèmes intégrés permettent l'utilisation d'une base de données relationnelle pouvant être exploitée par le langage `SQL`. Par exemple, `SQLite` est une base de données embarquée relationnelle assurant les propriétés `ACID`:

- Atomicité : une transaction se fait au complet ou pas du tout
- Cohérence : chaque transition passe d'un état valide à un autre état valide
- Isolation : aucune transaction ne dépend d'une autre ; chaque transaction est isolée une de l'autre
- Durabilité : lorsqu'une transaction est confirmée, elle demeure enregistrée même en cas de panne électrique ou de panne de l'ordinateur

##### inconvénients

Pourquoi est-ce que le modèle client-serveur est tout de même le plus répandu ?

Le modèle client-serveur permet la centralisation des données. Ce faisant, elle assure à l'organisation qui gère les données un contrôle absolu sur le système.

Comme les données sont centralisées, elles peuvent être mieux administrées.

Comme les données sont centralisées, il est possible de les protéger via des sauvegardes de backups.

Étant autonome et disponible sur le réseau, plusieurs différentes applications peuvent s'y connecter.

Ayant une architecture de type serveur, il y a une économie de ressources. Le serveur est passif et attend simplement qu'on le sollicite pour agir. Plusieurs instances de clients peuvent effectuer des transactions de façon simultanée.

Historiquement, un serveur était beaucoup plus puissant qu'un simple terminal client. On s'y connectait pour exploiter sa puissance. Cela n'est plus aussi vrai aujourd'hui où même un simple téléphone mobile est dôté d'une puissance de calcul appréciable.

##### sources

[https://en.wikipedia.org/wiki/Embedded_database#Advantage_Database_Server](https://en.wikipedia.org/wiki/Embedded_database#Advantage_Database_Server)

[https://www.techopedia.com/definition/30660/embedded-database](https://www.techopedia.com/definition/30660/embedded-database)

[https://medium.com/@azifali/the-case-for-embedded-databases-5b7d5b57e736](https://medium.com/@azifali/the-case-for-embedded-databases-5b7d5b57e736)

[https://dba.stackexchange.com/questions/227955/what-are-the-advantages-and-disadvantages-of-using-a-embedded-sql-database](https://dba.stackexchange.com/questions/227955/what-are-the-advantages-and-disadvantages-of-using-a-embedded-sql-database)

[https://fr.wikipedia.org/wiki/Propriétés_ACID#Atomicité](https://fr.wikipedia.org/wiki/Propriétés_ACID#Atomicité)

[https://www.quora.com/What-are-the-benefits-of-a-client-server-architecture](https://www.quora.com/What-are-the-benefits-of-a-client-server-architecture)
