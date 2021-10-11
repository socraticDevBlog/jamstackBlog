---
title: "Site Reliability Engineering"
date: 2021-10-11
author: "SocraticDev"
image: ../../images/shift-left-sre.png
tags:
  - SRE
  - infrastructure
---
"`SRE` est ce que vous obtenez lorsque vous traitez les opérations comme s'il s'agissait d'un problème logiciel" (`Google`)

Le paradigme `DevOps` commence à laisser place à celui de `SRE` ou 'Site Reliability Engineering'. `SRE` est le modèle d'opération pratiqué et théorisé par `Google`. Ce n'est pas tant une remise en question des principes `DevOps` qu'une adaptation rendant ce mode de gestion d'infrastructures technologiques plus adapté aux acteurs sur le terrain.

> L'ingénierie de fiabilité de site (`SRE`) est une approche d'ingénierie logicielle des opérations informatiques. Les équipes `SRE` utilisent le logiciel comme un outil pour gérer les systèmes, résoudre les problèmes et automatiser les tâches opérationnelles.  
> 
 > `SRE` prend les tâches qui ont historiquement été effectuées par les équipes d'exploitation, souvent manuellement, et les confie à la place aux ingénieurs ou aux équipes d'exploitation qui utilisent des logiciels et l'automatisation pour résoudre les problèmes et gérer les systèmes de production.

 ## cas d'utilisation de SRE
 Toute pratique de développement moderne bénéficie de la méthodologie `SRE`. C'est-à-dire tout développement de produits ou services où on déploie en production à tous les jours, où on doit respecter des `SLAs` (Service Level Agreements) rigoureux en termes de `uptime` et de latence, et où la complexité des systèmes requiert un haut niveau d'automatisation.

 Les deux objectifs de `SRE` est d'assurer la fiabilité du produit ainsi qu'une haute disponibilité. Pour ce faire, les spécialistes responsables des infrastructures doivent maintenir un équilibre entre la capacité de déployer de nouvelles fonctionnalités rapidement tout en assurant un produit fiable pour les usagers finaux.

 ## portrait d'un spécialiste SRE
 Deux types de parcours professionnel peuvent mener à un poste dans une équipe `SRE`. 
 
 Un développeur de logiciel ayant de l'expérience en termes de gestion des opérations. 
 
Un administrateur de système ('sysadmin') ou responsable TI ayant de l'expérience en programmation et en développement de logiciels.

 ##  contexte de travail et concepts importants de SRE
 Une équipe `SRE` est responsable de la livraison et de la fiabilité de systèmes et produits. Elle s'occupe de : 
 - comment le code est déployé, configuré et surveillé (monitoring)
 - surveiller la disponibilité et la latence des services et produits
 - assurer la gestion du changement
 - assurer la gestion d'incident dans un contexte d'urgence technologique
 - gérer et planifier la capacité des systèmes en production

 Mesurer et quantifier est le premier réflexe du spécialiste en `SRE`. On s'éloigne de l'aspect artisanal de la conception de logiciels. On adopte une position pragmatique, voire scientifique. La seule façon d'améliorer un processus est de le mesurer.

 À l'aide de ses projections fondées sur des mesures, l'équipe `SRE` conseille et informe les équipes de développement à propos de la possibilité de déployer de nouvelles fonctionnalités à la clientèle tout en assurant un produit fiable.

 > L'ingénierie de la fiabilité du site (`SRE`) aide les équipes à déterminer quelles nouvelles fonctionnalités peuvent être déployées et à quel moment en utilisant des accords de niveau de service (`SLA`) pour définir la fiabilité requise du système via des indicateurs de niveau de service (`SLI`) et des objectifs de niveau de service (`SLO`).

 ## SLI
 "Un `SLI` est une mesure définie des aspects spécifiques des niveaux de service fournis. Les `SLI` clés incluent la latence des demandes, la disponibilité, le taux d'erreur et le débit du système. Un `SLO` est basé sur la valeur ou la plage cible pour un niveau de service spécifié basé sur le `SLI`." (Redhat, "What is SRE", 2021)

 ## SLO
 "Un `SLO` pour la fiabilité requise du système est ensuite déterminé sur la base du temps d'arrêt convenu comme acceptable. Ce niveau de temps d'arrêt est appelé budget d'erreur, le seuil maximal autorisé pour les erreurs et les pannes." (_Ibidem_)

## Et on fait quoi avec DevOps ?
On peut considérer `DevOps` comme une approche faisant la promotion de l'automatisation et le design de plate-forme destinée à l'augmentation de la valeur pour la _business_ via un système de livraison rapide et de haute-qualité. En ce sens, `SRE` est une implémentation particulière de `DevOps`.

Autant `DevOps` que `SRE` agissent comme un pont entre la sphère du développement et la sphère propre aux opérations.

Les spécialistes `SRE` sont généralement impliqués directement avec les équipes de développement afin d'éliminer les failles dans la communication ou l'incompatibilité des _workflows_.

En termes de développement de fonctionnalités. `DevOps` a un focus sur l'efficacité du pipeline de déploiement alors que `SRE` travaille avec l'objectif d'un équilibre entre la fiablité des produits et la création de nouvelles fonctionnalités.

## conclusion
En guise de conclusion, si vous désirez augmenter la portée de vos efforts envers votre organisation, je recommande la lecture du livre gratuit préparé par `Google` :  

[Betsy Beyer(Ed.) et al. (2016),"Site Reliability Engineering", O'Reilly](https://sre.google/sre-book/table-of-contents/)

##### sources
[https://en.wikipedia.org/wiki/Site_reliability_engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering)

[https://www.redhat.com/en/topics/devops/what-is-sre](https://www.redhat.com/en/topics/devops/what-is-sre)

[https://sre.google](https://sre.google)