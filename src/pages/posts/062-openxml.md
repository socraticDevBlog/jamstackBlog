---
title: "Ce qui se cache derrière vos fichiers Microsoft Office"
date: 2021-03-07
author: "SocraticDev"
image: ../../images/openxml.png
tags:
  - technologie
  - programmation
---

Les fichiers produits par `Microsoft Word` et `Microsoft Excel` sont le résultat d'une compression `Zip` de répertoires bien organisés contenant des fichiers `XML`.

Sceptique ? Utilisez votre outil de compression de fichier `7zip` et décompressez un fichier Word au format `.docx`. Vous trouverez un fichier principal contient le texte du document mis en forme à l'aide d'un langage spécifique au domaine : `openxmlformats`.

> "Office Open XML, également connu sous le nom d'OpenXML ou OOXML, est un format basé sur XML pour les documents bureautiques, y compris les documents de traitement de texte, les feuilles de calcul, les présentations, ainsi que les graphiques, diagrammes, formes et autres éléments graphiques. La spécification a été développée par Microsoft et adoptée par ECMA International comme ECMA-376 en 2006."

> "Bien que les anciens formats binaires (.doc, xls et .ppt) soient toujours pris en charge par Microsoft, OOXML est désormais le format par défaut de tous les documents Microsoft Office (.docx, .xlsx et .pptx)."

##### Un outil précieux pour le data wrangling et l'exploitation des données

L'utilisation d'un format et d'un langage spécifique (`DSL`) ouvert permet au programmeur d'interagir programmatiquement avec toutes les formes de documents utilisés dans un environnement de bureau :

- Traitement de texte (`Word`);
- Chiffrier (`Excel`);
- Présentation (`Powerpoint`);
- Dessins (`DrawingML`).

Il est primordial de connaître ces possibilités car ça ouvre la porte à une infinité de possibilités pour produire, consommer et exploiter l'information générée dans une organisation :

- Utiliser un programme et des algorithmes spécialisés pour lire et extraire l'information consignée dans des fichiers de bureautique, particulièrement des chiffriers `Excel`;

- Effectuer des recherches dans des documents à l'aide d'expressions régulières (`regex`);

- Mettre à jour dynamiquement des documents (des présentations Powerpoint) en y injectant les données tirées d'une autre source;

- Appliquer méthodiquement des modifications à un éventail de documents (ex.: supprimer des informations confidentielles)

##### sources

[https://www.codingame.com/playgrounds/11047/edit-word-documents-using-openxml-and-c-without-automationinterop](https://www.codingame.com/playgrounds/11047/edit-word-documents-using-openxml-and-c-without-automationinterop)

[http://officeopenxml.com/](http://officeopenxml.com/)

[https://www.nuget.org/packages/DocumentFormat.OpenXml/](https://www.nuget.org/packages/DocumentFormat.OpenXml/)
