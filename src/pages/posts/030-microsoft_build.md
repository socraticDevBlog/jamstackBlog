---
title: "Microsoft Build 2020 en quelques thèmes - première partie"
date: 2020-05-20
author: "SocraticDev"
image: ../../images/devs.jpg
tags:
  - technologie
  - programmation
---

La conférence Microsoft Build est un événement annuel destiné aux développeurs oeuvrant dans l'écosystème Microsoft.
En 2020, en raison de la pandémie de la COVID-19, toutes les activités se sont déroulées en direct sur le site web de Microsoft. Certains ateliers accueillaient un nombre limité de participants et se déroulaient dans l'intimité de l'application de communication ``Teams``. Comme les présentateurs nous invitaient en quelque sorte dans leur univers privé, il y règnait une ambiance plus chaleureuse que celle retrouvée habituellement dans les centres de congrès. 

Satya Nadella, l'actuel PDG de Microsoft, a suscité la curiosité du public par un objet étrange placé derrière lui ; dans une bibliothèque de son domicile...   Je vous mets au défi de trouver (sans l'aide de Google !) ce que ce biblot signifie.

#### Une expérience de développement de bout en bout

Les nouvelles technologies au menu furent présentées sous le thème de la facilité d'utilisation pour les développeurs. L'expression "expérience développeur" semble être un mot-clé pour Microsoft. Scott Hanselman, ce fameux développeur-évangéliste de Microsoft, a débuté l'événement en nous invitant à un petit cours pour apprendre à utiliser deux nouveaux outils qui vont sûrement s'ajouter à notre coffre à outils de développeur : le ``Windows Terminal`` et le ``Windows Package Manager``. 

Le ``Windows Terminal`` est une application ultra-personnalisable regroupant tous les terminaux installés sur votre poste de travail : ``Powershell``, ``CMD``, ``WSL2 Linux terminal`` et ``Azure Cloud Shell``. 

La notion de _package manager_ est déjà bien connue par les adeptes de GNU/Linux. En résumé, un _package manager_ est un système servant à installer, mettre à jour et configurer des applications sur son poste de travail. Les développeurs utilisent un _package manager_ pour définir les prérequis d'une solutions pour un projet en développement. Nous allons donc bientôt apprivoiser la commande <code>winget</code> comme l'équivalent 'Microsoft' de ``apt install`` ou ``dnf install``. Les adeptes de l'outil ``Chocolatey`` (qui fait déjà pas mal le même travail !) seront rassurés d'apprendre que le nouveau produit de la firme de Redmond s'intégrera naturellement à leur _package manager_ préféré.

L'atelier avec les créateurs de l'éditeur de texte ``Visual Studio Code`` fut très apprécié des participants. Nous y avons appris que ce projet a vu le jour pour répondre à l'absence d'un éditeur de texte léger dans l'écurie Microsoft. Il s'agit donc d'une application de bureau très versatile développée sur la plate-forme ``Electron JS``. L'équipe du produit ``VS Code`` compte un peu moins d'une trentaine de personnes et est partagée entre le siège social de Redmond, dans l'état de Washington, et Zurich en Suisse. L'équipe produit des builds quotidiennees (``daily build``) et automatise plusieurs aspects de sa relation avec les utilisateurs. Par exemple, elle utilise un ``Twitter tracker`` pour détecter les posts d'usagers à son sujet. Ce dispositif peut même rediriger ces utilisateurs vers des humains pour solutionner des problématiques ponctuelles avec le produit !

##### Quelles extensions à Visual Studio Code sont les plus utiles pour un développeur ?  
Ma nouvelle extension préférée est ``Peacock`` qui permet de personnaliser subtilement la couleur de l'application selon le projet sur lequel on travaille. Dans le but de distinguer la fenêtre qu'on veut utiliser, ``Peacock`` permet de paramétrer le thème de mon application. Par exemple, afin que la fenêtre utilisée pour travailler sur du ``SQL`` soit de couleur verte, alors que celle où je prends des notes soit de couleur rouge. 

L'extension ``Close All`` permet de faire un ménage rapide de son espace de travail en fermant tous les onglets ouverts appartenant au même groupe. 

D'autres extensions plairont imanquablement aux utilisateurs de GNU/Linux : ``Remote SSH`` et ``Remote - WSL``. La première permet aux développeurs travaillant sur des serveurs GNU/Linux distant de travailler directement sur leur _file system_ via le protocole SSH : ``secure socket shell``. Le second permet de faire la même chose, mais sur une instance locale de GNU/Linux préalablement installé sur le poste : Ubuntu, Debian, OpenSuse, par exemple.

Pour avoir l'air d'un pro de ``Visual Studio Code`` : apprenez le seul raccourci que vous devriez connaître : ``ctrl-shift-p``.  Ce raccourci ouvre une barre de recherche vous permettant d'invoquer n'importe quelle fonctionnalité rendue disponible par les extensions installées.

#### Prochain post

Dans un prochain post, je traiterai des thèmes de la collaboration à distance via ``Teams`` et la plate-forme ``Fluid``, l'infonuagique ``Azure``, ``Power Apps``, le développement web de demain avec _WebAssembly_ grâce au framework ``Blazor`` et davantage !

###### Les conférences en rediffusion

- [https://mybuild.microsoft.com/](https://mybuild.microsoft.com/)
- [https://channel9.msdn.com/Events/Build/2020](https://channel9.msdn.com/Events/Build/2020)
- [https://youtube.com/c/microsoftdeveloper](https://youtube.com/c/microsoftdeveloper)