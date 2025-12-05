---
title: "Craignez-vous de perdre votre emploi de programmeur ?"
date: 2020-10-17
author: "SocraticDev"
image: ../../images/dslanguages.png
tags:
  - programmation
  - technologie
is_archived: false
---

On caractérise les langages de programmation les plus populaires (`C`, `C++`, `C#`, `JavaScript`, `python`) comme des langagues de programmation généraux ('general purpose programming language'). Ils nous permettent de scripter des actions, développer des applications, des sites webs, des jeux vidéo, etc. On caractérise ces langages de programmation comme des langages de troisième génération (`3GPL`). La première génération étant celle du code machine et la seconde, les langages `Assembleur`. La plupart des programmeurs utilisent quotidiennement un langage de 3ième génération car ils permettent pratiquement de tout faire tout en étant agréable pour le programmeur. Le propre d'un `3GPL` est qu'il est indépendant de la machine sur lequel il sera exécuté. Le même logiciel destiné à `Microsoft Windows` fonctionnera aussi bien si votre PC a un processeur `Intel` qu'`AMD`. Autre exemple, le langage `C#` reconnu comme le joyau de `Microsoft` s'affranchit de plus en plus de l'écosystème `Windows` et peut être exécuté sur des machines roulant d'autres systèmes d'opération comme `Linux` et `MacOS`.

Qu'en est-il des langages de quatrième et cinquième génération ? Ce sont des langages qui augmentent d'un cran (ou deux) l'indépendance de l'utilisateur-programmeur envers l'infrastructure matérielle : processeur, mémoire, réseau, etc. On dit que ces langages proposent un plus haut niveau d' `abstraction`. En faisant abstraction des détails techniques et en gérant en coulisse les limites techniques, ces langages permettent à l'utilisateur de se concentrer sur les problèmes qu'il tente de résoudre.

> Vous avez rendez-vous avec un ami dans un café bondé et mal éclairé. En entrant, au lieu de vérifier les visages un par un, vous allez **faire abstraction** de la foule et vous concentrer sur l'image de ce visage familier.

#### Langages spécifiques au domaine

Les DSLs (`Domain Specific Languages`) sont des langages de petite envergure dédiés à un aspect spécifique d'un système informatisé. On ne peut pas construire un programme complet avec un DSL, mais on trouve souvent plusieurs DSLs dans un système programmé dans un langage de programmation général. (Martin Fowler)

On utilise des DLSs pour différentes applications :

- application et gestion de règles d'affaire (`business rules engine`),
- shell (`BASH`, `sh`, `PowerShell`, etc.),
- langages de balisage (`html`, `xml`, `markdown`, etc.),
- modélisation (`UML`),
- gestion et manipulation de données (`sql`, `LINQ`),
- développement de matériel (hardware) (`verilog`, `VHDL`),
- outils de build (`Maven`, `Gradle`, etc.),
- computation mathématique et simulation (`MATLAB`),
- parsers et générateurs (`ANTLR`, `Lex`, etc.)
- tests unitaires automatisés (`*Unit`),
- etc.

#### Pourquoi utiliser des langages spécifiques au domaine ?

- faciliter la programmation :
  - en travaillant le style d'une page web avec le `CSS`, on n'a pas l'impression de "programmer", non?
- améliorer la productivité des développeurs,
- améliorer la communication avec les experts du domaine d'affaires (`SME`),
- améliorer la qualité du produit :
  - moins de bogues,
  - meilleur respect de l'architecture logicielle,
  - meilleure maintenabilité du système,
  - réduction de la duplication de code,
  - automatisation de tâches répétitives

#### Craignez-vous perdre votre emploi de programmeur ?

La popularisation des langages de haut-niveau devrait être vécue comme une libération pour les programmeurs. Au lieu d'être ce cowboy se battant à chaque jour pour plier la machine aux besoins d'affaires de ses clients, construisons plutôt des outils de programmation de haut-niveau et confions aux experts en la matière la tâche de développer leurs propres applications. Il restera amplement de travail pour nous à produire des outils techniques qui défrisent en utilisant des techniques comme: l' `introspection`, la `reflection`, la génération de code, le chargement dynamique de types, etc.

> "Lorsqu'un DSL permet à une entreprise de transférer une partie du développement de sa propriété intellectuelle des programmeurs traditionnels aux analystes le temps de mise sur le marché peut être considérablement réduit."

#### sources

[K. Hazzard, J. Bock(2012), "Metaprogramming in .net"](https://www.manning.com/books/metaprogramming-in-dot-net)

[https://opensource.com/article/20/2/domain-specific-languages](https://opensource.com/article/20/2/domain-specific-languages)

[https://www.dslfin.org/resources.html](https://www.dslfin.org/resources.html)

[Martin Fowler, Domain-Specific Languages](https://martinfowler.com/books/dsl.html)

[https://www.jetbrains.com/mps/concepts/domain-specific-languages/](https://www.jetbrains.com/mps/concepts/domain-specific-languages/)
