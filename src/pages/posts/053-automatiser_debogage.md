---
title: "Automatiser votre débogage sur le web"
date: 2020-12-15
author: "SocraticDev"
image: ../../images/selenium.png
tags:
  - programmation
  - web
---

Avoir à naviguer vers une page web en vue d'effectuer un test ou démarrer une séance de débogage peut être vécu comme un supplice pour un développeur web. En plus d'avoir à manoeuvrer la souris et saisir des informations à répétition, il y a les temps d'attente. Les performances d'un serveur de développement sont souvent moindre que celles des environnements supérieurs. Cela a pour effet de ralentir significativement votre _flow_ ... et vous faire dépenser des calories de poignet sans valeur ajoutée.

> "L'automatisation : système simplifiant tellement le travail qu'on finira par avoir besoin d'un cerveau électronique pour se tourner les pouces."
> <br><cite>--Noctuel</cite>

La solution : automatiser toute manipulation répétive

Vous faites du web? Il suffit d'utiliser le framework de test automatisé `Selenium` pour automatiser votre navigation. Pas d'excuses : c'est gratuit. À la base, `Selenium` est concue pour enregistrer des scénarios de test intégré et les rejouer automatiquement afin de détecter des régressions et bogues dans votre application au fil du temps.

En tant que développeur, votre cas d'utilisation est encore plus simple : naviguer et remplir des informations automatiquement sur différentes pages de votre application web afin de vous rendre finalement à l'endroit désiré.

Comment faire? Une fois authentifié, vous allez créer un nouveau projet de test dans `Selenium` et enregistrer votre navigation vers la page où se trouve la fonctionnalité sur laquelle vous désirez travailler. Une fois rendu, vous allez stopper l'enregistrement et sauvegarder votre test afin de pouvoir le rejouer à volonté.

##### étape par étape

1. Si vraiment tu ne connais pas `Selenium` et les tests automatisés sur le web, va écouter un vidéo sur YouTube et ça devrait devenir plus clair pour toi en moins de 5 minutes;

2. Installe le _plugin_ (ou _addon_) `Selenium` sur le browser que tu utilises pour développer;

3. Identifie un scénario où tu répètes plusieurs fois les mêmes étapes : tu vas créer un scénario de test qui va les jouer automatiquement pour toi;

4. Rend toi à la page d'accueil de l'application (après t'être authentifié bien sûr);

5. Clique sur l'icône du _plugin_ `Selenium` dans le coin haut-droit de ton browser;

6. Crée un nouveau projet de test;

7. Clic sur le bouton `Record`;

8. Ça va te demander l'URL de base de ton application : copie-colle l'URL qui se trouve dans la barre d'adresse de ton browser (ex.: `http://localhost:8000`);

9. Navigue vers la page désirée en entrant toutes les informations nécessaires dans les formulaires obligatoires (s'il y'en a);

10. Une fois rendu à destination : clic sur le bouton `Stop` de la fenêtre de test;

11. Si tu prévois avoir à répéter souvent cette navigation, effectue une sauvegarde du fichier `.side`. Sinon, tu peux garder la petite fenêtre de test ouverte et appuyer sur `Play` au besoin.

##### conclusion

Automatiser les tâches répétitives devraient être l'objectif principal de tout développeur. Au lieu de cycler dans l'application, vous allez avoir le temps de vous lever de votre chaise, vous étirer, aller boire un verre d'eau ... ou mieux : un café! ☕
