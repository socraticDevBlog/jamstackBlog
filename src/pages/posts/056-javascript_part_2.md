---
title: "Quelques fonctionnalités en JavaScript (deuxième partie)"
date: 2021-01-09
author: "SocraticDev"
image: ../../images/javascript-blog-fr-2n.png
tags:
  - programmation
---

Toujours dans l'optique de respecter les principes de programmation modernes : continuons notre découverte de quelques fonctionnalités sympathiques de JavaScript.

##### l'opérateur 'Spread'

Le _Spread operator_ permet de transformer un Array (tableau) en liste. En soi ce n'est pas une révolution. Mais ça enrichie le langage dans le sens que ça permet de simplifier votre code en mettant en profit cette fonctionnalité. Cet opérateur consiste en trois petits points (``...``) placé devant le nom de la variable contenant l'array.

>```
> const presidents = ['Clinton', 'Obama'];
>
> // mettre à jour un Array
> const updatedPresidents = [...presidents, 'Biden'];
>
> const milliardaires = ['Gates', 'Bezos', 'Zuckerberg'];
> const etrangers = ['Putin'];
>
> // combiner plusieurs arrays
> const passengers = [...presidents, ...milliardaires, ...etrangers];
>

##### les paramètres du reste ('Rest parameters')

Les paramètres du reste ('Rest parameters') "permet de représenter un nombre indéfini d'arguments sous forme d'un tableau." Cela simplifie la maintenance du code à long terme car on peut ajouter davantage d'arguments à l'appel de fonction sans avoir à changer la signature de celle-ci.

>```
>function sum(...theArgs) {
>  return theArgs.reduce((previous, current) => {
>    return previous + current;
>  });
>}
>
>console.log(sum(1, 2, 3));
>// expected output: 6
>
>console.log(sum(1, 2, 3, 4));
>// expected output: 10

##### utiliser des fonctions en guise de données

La flexibilité offerte par JavaScript nous permet d'écrire du code plus lisible et offrant davantage de flexibilité. En mettant à profit ces nouvelles fonctionnalités ajoutées au langage au fil du temps, nous voyons une tendance se dessiner : les fonctions de haut niveau deviennent des citoyens de première classe. On parle de haut niveau en terme de haut niveau d'abstraction : la fonction décrit concrètement le résultat final en nous épargnant les détails techniques d'implémentation. 

Ce faisant, on est encouragé à utiliser des fonctions comme si c'étaient des données. Dans le paradigme de la programmation orientée-objet, l'objet était l'expression de haut-niveau de la donnée ... à un certain prix en termes de complexité. Ici, en JavaScript, on est plutôt encouragé à encapsuler dans une fonction un traitement sur des données brutes. Pour ensuite, transférer la fonction contenant toute la logique du traitement. Ca sort de l'ordinaire, mais ca ouvre de vastes opportunités en termes de lisibilité, flexibilité, testabilité, etc.

Par exemple, on vous demande d'implémenter un petit système pour optimiser l'offre d'assistance psychologique aux enfants dont le parcours académique fut bouleversé par la pandémie de COVID 19. Au lieu de perdre votre temps à déterminer ... comment déterminer (!) les critères propres à un 'enfant COVID', vous allez pouvoir utiliser la variable-fonction ``enfantsCovid`` et démarrer le développement de votre système. Par la suite, il vous sera possible de modifier à votre guise l'implémentation sans avoir à modifier le code en aval.

>```
>const enfantsCovid = obtenirCoordonnes(...[...elevesPrimaire, ...elevesSecondaires]);
>
> function inscrireAidePsychologique(enfantsCovid);
>```

##### conclusion

Je crois que ces deux nouveaux opérateurs suffisent pour l'instant. Pour bien juger de leur valeur et utilité, il est bien de comparer leur utilisation avec le code équivalent pour obtenir le même résultat.

Il nous restera donc à parler des fonctions ``Map()``, ``zip()`` et ``Object.FromEntries()`` dans une troisième partie !

##### sources

[https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/param%C3%A8tres_du_reste](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/param%C3%A8tres_du_reste)