---
title: "Coder maintenant et demander pardon plus tard"
date: 2020-06-06
author: "SocraticDev"
image: ../../images/pythonesque.png
tags:
  - programmation
is_archived: true
---

Programmer en Python nous oblige à modifier notre conception des _bonnes pratiques_ de programmation. En entreprise, on vise la stabilité et la robustesse applicative. Alors que le contexte où on privilégie le langage Python est différent. Python est parfaitement approprié quand on fait des preuves de concepts, on automatise des processus via le scripting, etc. Bref, en Python, on a tendance à aller vite afin d'obtenir des résultats plus rapidement. Certaines entreprises dopent leur potentiel de développement en mettant à profit la flexibilité du langage inventé par Guido van Rossum. Cela leur permet d'arriver rapidement à un `MVP` (produit minimalement viable). Quand le projet a fait ses preuves, ensuite, on recode le tout dans un langage de qualité 'entreprise' comme `C++`, `C#` ou `Java`.

Python est un langage de programmation populaire dans l'enseignement. Étant un langage de haut niveau, on ne s'y perd pas dans les détails techniques de bas niveau comme le typage explicite ou la gestion de l'espace mémoire. Par exemple, la gestion de la mémoire est prise en charge automatiquement par un _ramasse miettes_ ('garbage collector') et les variables sont typés de façon dynamique. C'est-à-dire qu'une variable prend le type de la valeur qui lui est initialement assignée.

> `un_canard = Canard()` est un objet de la classe Canard
>
> `un_canard = 'Oiseau palmipède (anatidé), au bec large, aux ailes longues et pointues.'` est une variable de type _string_

#### Le 'typage canard' en Python

Python, comme le JavaScript, n'est pas un langage compilé. En général, le processus de compilation nous permet de détecter différentes erreurs au niveau de la syntaxe du code. Dans les langages interprétés, nous devons attendre de rouler le code pour que les erreurs se manifestent. Par exemple, dans un langage compilé, le compilateur levera immédiatement une erreur si on utilise la classe CanardAmericain plutôt que la classe CanardEuropeen. Pourtant, les deux implémentent une méthode 'voler' ! L'interpréteur Python ne se préoccupe pas du type d'une variable. En autant que la méthode 'voler' puisse être exécutée : tout est OK.

> "Si je vois un oiseau qui vole comme un canard, cancane comme un canard, et nage comme un canard, alors j'appelle cet oiseau un canard"
>
> <cite>-- James Whitcomb Riley</cite>

Dans le cas suivant, on voit que Python exécute le code sans se soucier du type des arguments passés en paramètres à la fonction `calculer(a, b, c)`.

> `def calculer(a, b, c) => return (a+b)*c` </br> > </br> > `a = calculer(1, 2, 3)`</br> > `b = calculer('pommes ', 'et oranges, ', 3)`</br> > </br> > `print(a)` </br> > `print(b)`</br> > </br>
> 9 </br>
> "pommes et oranges, pommes et oranges, pommes et oranges, "``

#### EAFP vs LBLY

L'example ci-haut démontre comment Python interprète de deux façons différentes la fonction `calculer`. Si les arguments sont des nombres entiers, alors on procède à une opération arithmétique. Si les arguments sont des chaînes de caractères, alors on procède à une concaténation et une boucle.

Généralement, le programmeur sait ce qu'il fait et maîtrise son code. Quand une erreur arrive, c'est ... une exception ! La bonne pratique du Python est d'éviter d'alourdir le code avec des validations préliminaires. Par exemple, on pourrait vérifier que les arguments soient bien des nombres entiers. Si on effectue une division, on prendra la peine de vérifier que le diviseur n'est pas zéro, etc.

Toutes ces validations ne sont pas _pythonesques_. C'est-à-dire qu'elles ne respectent pas les bonnes pratiques de Python. En Python, on veut aller vite, on veut un code ultra simple et facile à lire. Pour ce faire, on adopte le principe `EAFP` : il est plus facile de demander pardon que demander la permission ('Easier to ask forgiveness than permission'). Ainsi, la structure du `try except` est prévalente dans toute base de code pythonesque. On exécute librement le code et, quand ça pète, on récupère et gère l'exception.

> `try:` </br> > &nbsp;&nbsp;&nbsp; `x = my_dict["key"]`</br> > `except KeyError:`</br> > &nbsp;&nbsp;&nbsp; `manage_error('item doesn't exist')`

Les programmeurs ont traditionnellement l'habitude de valider les arguments reçus en paramètre avant de les utiliser. C'est d'ailleurs une bonne pratique des langages `C#` et `Java` ! Dans la mesure du possible, dans les logiciels d'entreprise, on n'utilise pas les `Exceptions` comme des structures de décisions ... On adopte un principe de prudence que les Pythoniciens appellent : `LBYL` ('Look Before You Leap'). C'est-à-dire : regarde devant avant de bondir.

L'exemple suivant ferait rager un Pythonicien car le code est un peu plus complexe et moins performant : on regarde deux fois de suite dans le dictionnaire ! Toutefois, cette façon de faire respecte les règles de l'art en entreprise.

> `if "key" in my_dict:`</br> > &nbsp;&nbsp;&nbsp; `  x = my_dict["key"]`</br> > `else:` </br> > &nbsp;&nbsp;&nbsp; `manage_error('item doesn't exist')`

##### Source

[https://stackoverflow.com/questions/11360858/what-is-the-eafp-principle-in-python](https://stackoverflow.com/questions/11360858/what-is-the-eafp-principle-in-python)

[https://www.wikiwand.com/fr/Python\_(langage)](<https://www.wikiwand.com/fr/Python_(langage)>)

[http://eikke.com/how-not-to-write-python-code/index.html](http://eikke.com/how-not-to-write-python-code/index.html)
