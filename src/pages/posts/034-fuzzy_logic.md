---
title: "Fuzzy Logic ou logique floue"
date: 2020-06-13
author: "SocraticDev"
image: ../../images/fuzzy-logic.png
tags:
  - technologie
  - philosophie
---

La logique floue (_Fuzzy Logic_) est fondée sur la théorie des ensembles flous élaborée par le mathématicien et ingénieur Lotfi Aliasker Zadeh en 1965. La logique floue facilite la modélisation du raisonnement logique opéré sur des propositions vagues ou imprécis comme "Pierre est jeune" ou "L'eau est chaude". Elle appartient à la famille des logiques à plusieurs valeurs (_many-valued logics_). Contrairement à la logique classique opérant sur deux valeurs de vérité (vrai et faux), la logique floue permet de faire des inférences à partir de prémisses n'étant ni vraies ni fausses, mais possédant un certain degré de vérité. 

Étant plus nuancée et flexible, la logique floue s'apparente au raisonnement humain. À la question "Fait-il beau dehors aujourd'hui ?", la logique classique nous contraint de répondre 'Oui' ou 'Non'. Alors qu'en réalité, on répondra qu'il fait parfaitement beau (1), plus ou moins beau (0,6) ou plutôt mauvais temps (0,3).

#### Pourquoi utiliser la logique floue ?

La logique floue a des applications industrielles, commerciales et domestiques. Elle est utile dans le contexte où il est acceptable qu'un système prenne une décision suivant un raisonnement acceptable, mais pas 100% certain. En ingénierie, en raison de la complexité des systèmes et la variabilité des entrées, il est souvent plus économique de se rabattre sur la logique floue.

##### Un contrôleur traditionnel

- Besoin d'avoir les propriétés physiques détaillées du système
- La plupart des systèmes sont trop complexes et doivent être idéalisés afin de développer un contrôleur traditionnel
    - i.e. Nous n'avons pas accès à une représentation du système entier
- Le contrôleur traditionnel ne peut fonctionner que dans un cadre où les conditions sont limitées

##### Un contrôleur avec logique floue

- Pas besoin d'avoir une connaissance approfondie du système
    - les décisions à prendre par le contrôleur sont déterminées par des règles linguistiques
- En utilisant des outils d'optimisation comme des algorithmes génétiques, on peut s'en sortir sans rien connaître du système
- Le système n'a pas besoin d'être réduit ou idéalisé pour développer le contrôleur
- Le contrôleur est plus robuste car il tolère une grande variabilité dans les entrées

#### Caractérisation d'une fonction floue

Une fonction floue prend une entrée nette (Crisp Input) et retourne une sortie nette (Crisp Output). L'entrée est floutée (_fuzzified_) par une fonction 'fuzzifier'. C'est-à-dire qu'elle est traduite en ensembles floues. 

La fonction d'appartenance (_Membership function_) est un graphe définissant comment chaque point de l'entrée est lié à une valeur entre 0 et 1 selon des termes linguistiques. La fonction d'appartenance représente le degré d'appartenance d'un ensemble flou à un univers de discours.  

Par exemple, on pourrait utiliser la logique floue pour déterminer si "la température de l'eau de la piscine de l'hôtel est agréable". En plus de l'entrée nette (température actuelle de l'eau de la piscine), la fonction quantifiera aussi les termes linguistiques comme "agréable" ou "désagréable" afin de répondre à la question par une sortie nette : Oui ou Non.

#### Logique floue vs probabilité

La logique floue n'est pas lié à la notion de probabilité

- La logique floue est liée au concept de vérité alors que la probabilité est liée au concept de connaissance. 
- La logique floue s'intéresse principalement à l'essence de la notion d'imprécision alors que la probablité s'intéresse à des événements : si ces événements auront lieu ou pas. 
- La logique floue a un fondement mathématique et découpe la vérité en degrés de vérité. Quant à elle, la probabilité est la modélisation mathématique de l'ignorance quant aux événements futurs.

#### Sources

[https://plato.stanford.edu/entries/logic-fuzzy/](https://plato.stanford.edu/entries/logic-fuzzy/)

[An Introduction to Fuzzy Logic](https://www.youtube.com/watch?v=rln_kZbYaWc)

[Fuzzy Logic in Artificial Intelligence | Introduction to Fuzzy Logic & Membership Function | Edureka](https://www.youtube.com/watch?v=xD1c8jTFF78&t=945s)