---
title: "Je veux être fonctionnel"
date: 2022-03-26
author: "SocraticDev"
image: ../../images/closure-blog.png
tags:
  - programmation
---

On ne m'a pas enseigné la `programmation fonctionnelle` à l'école. Les lieux de travail ne l'utilisaient pas explicitement. Néanmoins, je suis intrigué par cette autre façon de programmer depuis quelques temps.

Maintenant que j'ai le temps et la motivation, j'ai choisi un livre fiable à ce sujet : [Michael Fogus(2013), Functional Javascript: Introducting Functional Programming with Underscore.js](https://www.oreilly.com/library/view/functional-javascript/9781449360757/)

L'apprentissage commence lorsque vous reconnaissez votre ignorance sur un sujet. C'est un moment d'humilité qui devrait être utilisé comme un tremplin vers l'amélioration de soi.

## concepts fondamentaux

La `programmation fonctionnelle` diffère de la programmation impérative et orientée objet. Son élément de base est la fonction. Il encourage une autre façon de programmer les logiciels. "Les programmes sont construits en appliquant et en composant des fonctions". Au lieu de programmer explicitement des étapes dans lesquelles un état d'exécution est modifié par le programme, la programmation fonctionnelle est un "paradigme de programmation déclarative dans lequel les définitions de fonctions sont des arbres d'expressions qui mappent des valeurs à d'autres valeurs"

Les `fonctions de première classe` sont une condition préalable à la programmation fonctionnelle. Lorsque nous disons qu'un langage de programmation a des fonctions de première classe, cela signifie que le langage nous permet d'utiliser la fonction comme une variable. Un langage de programmation fonctionnel nous permet d'assigner une fonction à une variable, de passer une fonction en tant qu'arguments à d'autres fonctions et de retourner une fonction sous la forme d'une valeur retournée par une autre fonction. De plus, en programmation fonctionnelle, un nom de fonction n'a pas d'importance. Nous allons très probablement utiliser des fonctions anonymes : une fonction sans nom :

> `const squared = (a) => a * a`

La `portée des variables` est fondamentale. Il a de nombreuses définitions, mais vous ne pouvez pas vous tromper en définissant la portée comme la "durée de vie" d'une variable.

Autres définitions (proches du domaine JavaScript) :

- La valeur de la liaison `this`
- Le contexte d'exécution défini par la valeur de la liaison `this`
- Le schéma de résolution des valeurs variables, ou les liaisons lexicales

La `liaison de variables` est quelque chose qui dépasse ma compréhension pour le moment. Je pense que connaître le comportement des variables dans les portées globales et lexicales est un must pour un programmeur. Si vous avez besoin de quelque chose de plus fort, étudiez la `portée dynamique` !

`Closure` est l'endroit où la programmation fonctionnelle devient vraiment intéressante. Une `closure` c'est écrire une fonction pour capturer des variables dans sa portée et les "empaqueter" dans une fonction qui conserve les valeurs à utiliser dans une portée différente.

Pour moi, dès le départ, c'est une solution géniale à un problème de programmation courant dans la vie réelle : lorsque vous aviez accès à une variable, mais plus maintenant. Avec une closure, vous pouvez retourner une fonction contenant les valeurs dont vous avez besoin là où vous n'y avez plus accès.

>Sur le plan opérationnel, une closure est un enregistrement stockant une fonction[a] avec un environnement.L'environnement est un mappage associant chaque variable libre de la fonction (variables utilisées localement, mais définies dans une portée englobante) à la valeur ou à la référence à laquelle le nom était lié lors de la création de la closure. [b] Contrairement à une fonction ordinaire. , une closure permet à la fonction d'accéder à ces variables capturées via les copies de la closure de leurs valeurs ou références, même lorsque la fonction est invoquée en dehors de leur portée. (Wikipedia, "closure")

### exemple d'utilisation d'une `closure`

```
function createScaleFunction(FACTOR) {
  return function(v) {
    return _.map(v, function(n) {
      return (n * FACTOR);
    });
  };
}

var scale10 = createScaleFunction(10);

scale10([1,2,3]);
//=> [10, 20, 30]
```

## apprentissages

En creusant dans la programmation fonctionnelle, j'ai découvert beaucoup de choses sur mon manque de compréhension de certaines fonctions de base du langage de programmation (en particulier `JavaScript`) telles que la liaison de variables et la portée. J'apprends également à comprendre le chaînage de fonctions. Ce qui était/est ma grande bête noire : ce n'est pas amusant de déboguer des chaînes de fonctions. Non??

Les prochaines étapes concerneront les `fonctions d'ordre supérieur`, les `fonctions de création de fonctions` et `currying`, `l'immuabilité` et la `programmation basée sur les flux`.

Ne peut pas attendre!

`Traduit de l'anglais par google translate`

## sources

[https://www.oreilly.com/library/view/functional-javascript/9781449360757/](https://www.oreilly.com/library/view/functional-javascript/9781449360757/)

[https://www.wikiwand.com/en/Functional_programming](https://www.wikiwand.com/en/Functional_programming)  

[https://en.wikipedia.org/wiki/First-class_function](https://en.wikipedia.org/wiki/First-class_function)  

[https://www.wikiwand.com/en/Closure_(computer_programming)](https://www.wikiwand.com/en/Closure_(computer_programming))