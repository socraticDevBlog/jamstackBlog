---
title: "dotnet linux sur votre pc Windows 10"
date: 2021-03-31
author: "SocraticDev"
image: ../../images/dotnetlinux.png
tags:
  - linux
  - programmation
---

Vous êtes un développeur et vous aimez travailler sur des projets intéressants? En ajoutant la maîtrise de l'écosystème `linux` à votre CV, vous allez décidément être mieux placé pour intégrer des équipes travaillant sur des projets motivants.

Par où commencer? Il n'est pas nécessaire d'acheter un nouvel ordinateur et passer des jours à tout réapprendre. Loin de là! Par exemple, si vous êtes à l'aise avec le _framework_ web `ASP MVC` de Microsoft et que vous possédez un PC doté de `Windows 10`, il vous suffira d'activer `WSL`, le Windows Subsystem Linux, installer une distribution Linux et paramétrer votre éditeur de texte `Visual Studio Code`. Ce dernier remplace avantageusement le lourdeau `Visual Studio` traditionnel.

En moins d'une heure, vous allez être en mesure d'écrire votre premier `Hello World` en C# ... sous Linux.

> Les instructions ci-dessous ne représentent pas un tutoriel, mais un survol des étapes nécessaire à l'installation d'un environnement de développement dotnet core sous Linux. Si vous êtes bloqués, utilisez Google ou demander de l'aide

#### 1. Installer WSL - le sous-système linux pour Windows

Depuis quelque temps, Windows 10 inclut sans frais un sous-système permettant de rouler (en mode terminal seulement) un système d'exploitation GNU/Linux. Comme cette possibilité n'intéresse pas la majorité des utilisateurs, elle est désactivée par défaut. Il existe de nombreux tutoriels sur Internet qui vous aideront à l'activer. Il suffit ensuite de redémarrer le PC pour appliquer le changement.

Ensuite, il faut installer un système d'exploitation Linux. Pour ce faire, il suffit d'ouvrir l'application `Windows Store` sur votre ordinateur. Effectuer une recherche pour `linux`. Je vous suggère de sélectionner `Ubuntu 20.04 LTS` car elle est la plus complète et la plus répandue. Vous n'aurez donc pas de difficulté à trouver des informations sur Internet pour tous vos projets.

> Important! En aucun temps l'installation de linux ne peut endommager votre ordinateur ou vous faire perdre des fichiers. Il n'y a aucun risque de bousiller votre PC.

    étapes détaillées (en anglais):

[https://docs.microsoft.com/en-us/windows/wsl/install-win10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

#### 2. Installer la .net SDK et .net runtime sur votre nouvelle machine linux wsl

Comme Linux favorise la simplicité et la modularité, vous n'allez pas trouver d'IDE clef-en-main comme `Visual Studio 2019` pour cajoler et adoucir vos caprices de développeurs. Vous allez avoir à installer vous-même la `SDK` et le runtime `.net`. Et c'est drôlement facile si vous suivez les instructions préparées par Microsoft.

[https://docs.microsoft.com/en-us/dotnet/core/install/linux-ubuntu](https://docs.microsoft.com/en-us/dotnet/core/install/linux-ubuntu)

#### 3. Installer l'extension WSL sur VS Code

Développer sous linux signifiait autrefois de multiple allers-retours entre un éditeur de texte et le terminal. Ou bien coder directement dans le terminal avec des éditeurs de texte ésotériques comme ``Vi`` ou ``Emacs``. Heureusement, Microsoft a mis le paquet et, avec un plugin s'intégrant à votre éditeur de texte `Visual Studio Code` vous allez être en mesure d'être connecté directement sur votre système linux tout en restant dans l'environnement fenêtré de Windows.

Pour ce faire, il suffit d'installer `Remote WSL` à votre éditeur de texte. Cliquez sur le symbole spécial (><) en bas à gauche de votre VS Code. Et voilà: vous êtes directement lié à votre système d'exploitation linux.

[https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

#### 3. Paramétrer votre VS Code pour optimiser l'utilisation du terminal (optionnel)

Si vous voulez développer en `C#` sous linux, il faudra apprendre à utiliser le terminal. La création de projets, la paramétrisation, l'exécution du code ainsi que le déboguage est contrôlé à partir du terminal ; en ligne de commande.

Sur tous mes postes de travail, dans `Visual Studio Code`, je garde un terminal ouvert en bas de la fenêtre et la section 'éditeur de texte' prend tout l'espace supérieur. Pour alterner rapidement entre le code et le terminal, j'utilise un raccourci que j'ai défini sur mesure : `Ctrl-T`.

Il suffit d'insérer ce paramétrage, sous la forme d'une configuration en `JSON` dans le fichier de configuration de `VS Code`. Pour ouvrir la zone de paramétrage des raccourcis clavier : `Ctrl-K, Ctrl-S`. Ensuite cliquer, en haut à droite, sur l'icône pour 'Open keyboard shortcuts(JSON)'. Rendez vous à la page du lien ci-dessous et coller ce code dans le fichier `keybindings.json` que vous venez d'ouvrir.

[https://gist.github.com/socraticDevBlog/53dbbc09671cab910f0634db2f6c5c33](https://gist.github.com/socraticDevBlog/53dbbc09671cab910f0634db2f6c5c33)

#### 4. Commencer votre épopée de développeur linux en créant un nouveau projet dotnet

Il est maintenant temps de créer votre premier projet dotnet Core. Je vous suggère un simple 'Hello World' en console. La `sdk` que vous avez installé plus tôt contient des gabarits pour la plupart des projets que vous désirez entamer : du `ASP core`, `ASP MVC core`, projet de tests unitaire, de librairie, même des `protocol buffer` pour le super `gRPC`.

Tout se passe au terminal :

Tappez `dotnet new` et la touche 'Enter'. Le terminal va énumérer une liste de gabarit de projets. Compléter la commande et ca va générer le boilerplate code de votre nouveau projet.

À vous de jouer
