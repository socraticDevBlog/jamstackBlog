---
title: "Opérationnaliser vos developpeurs grâce à l'observabilité"
date: 2022-08-10
author: "SocraticDev"
image: ../../images/observability.png
tags:
  - idées
  - infonuagique
---

L'observabilité est un sujet tendance dans les systèmes logiciels natifs du cloud.

"L'observabilité" est un concept relativement nouveau dans les opérations de développement de logiciels.
Il est proche de la culture DevOps. Quand les développeurs arrivent à intégrer
déploiements et opérations dans leur cycle de vie logiciel, un ensemble différent de soucis apparaissent :

- savoir que les clients recoivent des erreurs 500 n'est pas suffisant pour
  résoudre un incident
- en tant que développeur, j'ai besoin d'avoir plus de visibilité sur les
  systèmes en production afin de résoudre les incidents
- le monitoring c'est bien, mais pas assez car on ne peut pas savoir à l'avance quelle partie du
  le système provoquera une panne

Fondamentalement, l'observabilité est la qualité d'un système qui permet aux développeurs de
comprendre son état à partir de ses _outputs_.

> "notre définition de "l'observabilité" pour les systèmes logiciels est une mesure de
> 'Eh bien, vous pouvez comprendre et expliquer n'importe quel état dans lequel votre système peut entrer, 
> peu importe qu'il soit nouveau ou bizarre'."

Les systèmes informatiques modernes sont complexes. Les systèmes informatiques en tant que piles monolithiques vivant sur des serveurs sont une chose du
passé. De nos jours, la plupart des nouveaux systèmes sont conçus pour le cloud. Privilégier une
composition de micro-services interconnectés. Cela implique de nombreuses
processus, charges utiles dépendant de différents sous-systèmes ; dont la plupart des développeurs
ne sont pas responsables.

## le monitoring n'est pas l'observabilité

Il y a un risque à approcher les systèmes informatiques modernes avec l'état
d'esprit d'un administrateur système traditionnel. L'observabilité n'est pas du
monitoring. Le monitoring d'une application ne donne qu'un mince aperçu du
système : le nombre de requêtes par minute, un décompte d'erreurs 500, etc.

Ce dont les développeurs ont besoin, ce sont des outils qui leur permettent de
jeter un coup d'œil à l'intérieur des systèmes qu'ils entretiennent. 
Par exemple, ils doivent être en mesure de retracer une erreur depuis la
requête qu'un utilisateur a soumis.

> "Un état d'esprit et une culture ancrés dans les habitudes du monitoring - tableaux de bord,
> alertes, seuils statiques — n'est pas utile pour libérer le plein potentiel de
> observabilité. Un outil d'observabilité peut avoir accès à un très grand volume
> de données très granulaires, mais réussissant à donner un sens à la montagne de
> les données, qui sont l'arbitre ultime de la viabilité et de l'utilité globales de
> l'outil, et sans doute celui de l'observabilité elle-même! 
> Un état d'esprit de débogage itératif basé sur des hypothèses."
> <cite>Charity Majors and al.(2022), "Observability Engineering", O'Reilly</cite>

## DevOps est la voie à suivre

La culture DevOps est certainement la voie la plus pratique pour une organisation de publier un
produit. Les habitudes et l'état d'esprit de l'administration système traditionnelle sont trop étroits
pour répondre aux exigences des systèmes distribués complexes modernes.

Soyez sérieux au sujet de DevOps.

Donnez aux développeurs la responsabilité de leurs pipelines de déploiement.

Donnez aux développeurs la responsabilité de leurs systèmes exécutés en production.

## Pourquoi les développeurs doivent-ils gérer les opérations système ?

Parce que presque tout est désormais construit "en tant que code" et que les
développeurs savent coder.

Parce que les problèmes de systèmes complexes sont de la catégorie "inconnues inconnues". Ce
signifie que vous ne savez pas et vous ne pouvez pas savoir à l'avance quelle serait la cause de
une panne. Si vous le faites, cela signifie que vous publiez sciemment un produit défectueux. Ça veut dire
les développeurs connaissent la cause du problème mais sont incapables de le résoudre. Ce
signifie que l'organisation n'a pas donné la priorité à la fabrication de logiciels de qualité.

Les systèmes complexes nécessitent l'état d'esprit d'un développeur. Un développeur est formé et
expérimenté dans le débogage de systèmes. Les développeurs sont également doués
pour la résolution de problèmes. Ils ont seulement besoin de l'outillage
approprié pour creuser dans les états d'un système roulant en production.

## instrumentation du code

L'instrumentation est un mot abstrait qui se rapporte à toutes les actions
entreprises par les développeurs pour rendre leur système plus observable.

Avec la transition vers DevOps et SRE (Ingénierie de la fiabilité des sites),
l'instrumentation de systèemes a souvent été déléguée aux personnes «opsie» (sysAdmin et al.).
Cependant, les développeurs sont, à mon avis, les meilleures personnes pour
instrumenter la base de code.

Ce concept de pointe est le _développement propulsé par l'observabilité_. Il y a
peu de littérature sur ce sujet à ce jour.

## observabilité imposée - une équipe d'observabilité à l'échelle de l'organisation

Certaines organisations ont imposé l'observabilité en mettant sur pied des
équipes d'observabilité. L'objectif de cette équipe est d'instrumenter les bases
de code des développeurs.

[Splunk](splunk.com) a sponsorisé _State of Observability 2022_ note que les leaders
en matière d'observabilité sont les organisations où l'instrumentation du code
et la maintenance du produit sont pris en charge par les développeurs eux-mêmes.

> Clay a trois exigences pour utiliser l'instrumentation afin de rendre les microservices et les fonctions _serverless_ observables :
>
> - Les systèmes observables doivent émettre des événements : métriques, journaux et traces.
> - Chacun a ses utilisations, vous avez donc besoin d'un équilibre entre les trois.
> - Tous les composants, pas seulement les services critiques, doivent être instrumentés.
> - Une couverture complète de tous les composants est nécessaire pour raconter toute l'histoire.
> - L'instrumentation ne doit pas être facultative, manuelle ou difficile à réaliser.
> - L'instrumentation doit être intégrée à tout ce que vous construisez et exécutez.
> - Des équipes dédiées à l'observabilité peuvent contribuer à en faire une pratique à l'échelle de l'entreprise.

## et après

SocraticDev pioche sérieusement dans les systèmes distribués et l'observabilité
ces jours-ci.

Bien que ce billet de blog soit une humble introduction à l'observabilité, un lecteur peut s'attendre à
voir des posts plus détaillés à venir. Des cas d'utilisation concrets et des preuves de concepts.

Restez à l'écoute!

`traduction par Google translate`

## sources

Charity Majors and al.(2022), "Observability Engineering", O'Reilly

https://newrelic.com/blog/best-practices/observability-instrumentation

https://www.splunk.com/en_us/form/state-of-observability.html

https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability