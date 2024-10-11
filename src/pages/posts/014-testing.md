---
title: Qu'est-ce que le testing ?
date: 2020-01-19
author: "SocraticDev"
image: ../../images/testing.png
tags:
  - technologie
  - productivité
---

Le rôle du testeur ou « analyste de l’assurance de la qualité » (QA) est de faire en sorte que les logiciels déployés chez les clients fonctionnent correctement et offrent les fonctionnalités promises.

L’objectif du testeur n’est pas de trouver tous les bogues ou de rendre le logiciel meilleur. Son rôle est plutôt de réduire les risques pouvant affecter négativement le client. De façon proactive, le testeur élimine les problèmes pouvant avoir un impact néfaste pour l’utilisateur du logiciel. Le testeur mesure la gravité d’un problème selon deux axes: la gravité d’un problème et la fréquence d’un problème. Par exemple, le testeur ne lèvera pas la main s’il détecte une lenteur au niveau de la suppression d’un dossier de client causé par un algorithme mal optimisé car la suppression d’un tel dossier arrive rarement (pas grave et peu fréquent). Toutefois, il enverra un mémo au programmeur s’il détecte une erreur de calcul pour toutes les factures dépassant les $1000 (plutôt fréquent et très grave).

En plus d’être le juge de la qualité du logiciel, le testeur est aussi un analyste. Son travail débute avant même qu’une ligne de code soit écrite. Il connaît le comportement et les fonctionnalités du logiciel et décide ce qui doit être testé et comment cela doit être testé. Il échafaude un plan systématique de tests et effectue les tests nécessaires après avoir reçu le produit final des mains du programmeur.

## Différents types de test

### black-box testing

Les tests à la boîte noire sont les plus courants. Le logiciel y est testé dans le même contexte que celui d’un usager ordinaire : sans connaître le code ou les technologies impliquées à l’arrière-plan. Tout ce que le testeur connaît sont les entrées et les sorties. Il s’agit donc de tests non biaisés : le testeur se fiche de savoir si la base de données ou le service web est bien configuré. Le test est un succès quand il reçoit le résultat escompté. Par exemple, si on teste la fonction de multiplication, alors on s’attend à recevoir 6 quand on saisit l’opération 2 \* 3.

### white-box testing

Les tests à la boîte blanche représentent l’envers du black-box testing. On dit parfois que ce genre de tests implique une connaissance du code source; un peu comme un test unitaire. Or, c’est une exagération. Les tests à la boîte blanche implique une certaine connaissance des algorithmes du code source. Mais, ils ne nécessitent pas l’assistance continue d’un programmeur. Par exemple, certaines fonctionnalités d’un logiciel sont modulées différemment selon le contexte. Le calcul de sommes remboursées par l’assurance primaire et secondaire peut être modulé selon le statut familial d’un client. Cette modulation est effectuée par un certain branchement dans le code. Sachant cela, le testeur modulera ses scénarios de test en prenant en compte ce branchement.
Acceptance testing

### Tests d'acceptation

Les tests d’acceptation représentent une comparaison entre le comportement et les fonctionnalités attendues d’un système et le comportement et les fonctionnalités actuelles de la solution. Ces tests sont effectués de façon globale : on teste l’ensemble du système et non pas des zones isolées.

Le but des tests d’acceptation est de juger si le système développé remplit les exigences fonctionnelles et non-fonctionnelles demandées par le client.
Automated testing

### Tests automatisés

> On définit les tests automatisés comme tout test dont l’exécution et la vérification est automatisée.

Avec le cycle de développement Agile, une équipe est appelée à livrer fréquemment des fonctionnalités et des correctifs au client; souvent de façon bimensuelle. Cela signifie que les cahiers de test élaborés par le testeur doivent être roulés tout aussi fréquemment. La meilleure façon d’assurer une couverture optimale est d’automatiser ces tests.

Il existe de nombreux outils technologiques pour automatiser les tests. Je pense au serveur d’intégration continue Jenkins qui roule les tests unitaires et les tests d’intégration à chaque commit dans le trunk ou à Selenium qui simule des manipulations dans un navigateur web.

Automatiser le testing permet d’augmenter la qualité logicielle en libérant le testeur de la tâche ingrate de tester manuellement pour lui laisser le temps d’analyser et bâtir des cahiers de test.
Regression testing

En fait, la plupart des tests automatisés sont des tests de régression. Avec le cycle de développement Agile, de nouvelles fonctionnalités sont développées à chaque sprint. Or, est-ce que ces nouveautés ont brisé des fonctionnalités existantes? Les tests de régression sont élaborés autour des fonctionnalités existantes d’un logiciel. Ils permettent de détecter efficacement des bris provoqués par le développement de nouvelles fonctionnalités.

Il s’agit donc d’un filet de sécurité qui permet d’augmenter la valeur d’une solution en limitant les risques inhérents à un cycle de développement itératif rapide.
Functional testing

On serait tenté de croire que tous les tests sont des tests fonctionnels car le testeur teste principalement les fonctionnalités d’un système. Ici, le terme « fonctionnel » doit être pris de façon plus large. Plusieurs aspects autre que les fonctionnalités d’un système peuvent être la cible du testeur : la performance, la facilité d’utilisation, la résilience, l’évolutivité (scalability), etc.

En effet, une calculatrice peut très bien retourner le nombre 6 quand on multiplie 2 par 3. Toutefois, si ça prend 5 minutes pour obtenir le résultat et que l’appareil émet de la fumée bleue pendant le calcul, alors il y a des problèmes devant être détectés par des tests fonctionnels!

### Exploratory testing

Il s’agit des tests à faire quand on aurait mieux aimer rester au lit cette journée-là.

C’est une blague! L’idée c’est d’avoir un plan de match à propos des zones du système qu’on aimerait tester. Ensuite, le testeur navigue et explore le système sans scénarios de test précis. Il est à l’affût et recherche des trucs qui clochent. Souvent, le testeur va enregister sa séance afin d’être en mesure de reproduire facilement les problèmes rencontrés.

Il s’agit donc de tests non-systématiques mais relativement utiles pour améliorer la qualité d’un logiciel.
Autres formes de testing

### Load testing

Déterminer le comportement d’une application fortement sollicitée

### Performance testing

Mesurer la performance d’une application selon un scénario précis

### Recovery testing

Évaluer comment une application réagit lorsqu’elle rencontre des erreurs ou lors de bris matériels

### Autres types de test

Security testing, stress testing, usability testing, etc.

#### Source :

John Sonmez, The Complete Software Developer’s Career’s Guide

[https://simpleprogrammer.com/products/careerguide/](https://simpleprogrammer.com/products/careerguide/)
