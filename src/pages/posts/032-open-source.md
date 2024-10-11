---
title: "Voulez-vous vraiment rendre votre projet open-source ?"
date: 2020-05-30
author: "SocraticDev"
image: ../../images/open-source.png
tags:
  - technologie
  - business
---

Les étiquettes `FOSS` et `F/OSS` ('Free and Open-Source Software' et 'Free/Libre and Open-Source Software') décrivent un modèle de développement de logiciels à code source ouvert. Selon une licence légale souple, on permet à tous l'exécution, l'étude ainsi que la redistribution du code source. De même que son adaptation afin de vendre un nouveau produit ou service. Ce genre de logiciels se distinguent des logiciels propriétaires dont le code source est protégé, plus difficilement modifiable et dont l'utilisation est payante.

Les systèmes d'exploitation `Windows`, `MacOs` et `Unix` sont un exemple de logiciels propriétaires. Alors que les distributions `GNU/Linux` demeurent `FOSS`. Ce cas de figure illustre bien l'écosystème du logiciel libre car certaines distributions (systèmes d'exploitation) `GNU/Linux` destinées aux grandes organisations sont accompagnées de licences restrictives et demandent des frais annuels conséquents.

#### avantages

Les coûts de développement et d'utilisation d'un logiciel libre sont beaucoup moindre que pour un logiciel propriétaire. Inutile de payer des licences pour les utiliser et, la plupart du temps, les collaborateurs développent de façon bénévole. Certaines organisations peuvent assurer un 'service après-vente' auprès des utilisateurs. Ce modèle d'affaires assure la pérennité du projet tout en faisant économiser du temps et des soucis aux utilisateurs finaux ayant besoin d'une assistance spécialisée.

L'absence de brevet favorise l'innovation technologique. Les licences _open-source_ sont simples et peu restrictives. Cela a pour effet d'assurer une protection efficace aux membres de la communauté tout en leur assurant de ne pas être ralentis par des considérations légales.

> More eyes, more security
> <cite>-- Red Hat, spécialiste de l'Open Source</cite>

Les logiciels libres sont souvent plus sécuritaires que les logiciels propriétaires. Le code source étant accessible à tous : il est scruté par une multitude d'experts et corrigé rapidement lorsque nécessaire.

Le code source étant disponible à tous : il devient éternel. Un logiciel libre a une durée de vie presque infinie. Même si la communauté abandonne un projet, le code source demeurera disponible pour l'utilisation et l'amélioration du logiciel.

#### quelques enjeux

Tout de même, le développement de logiciels libres a ses enjeux. Toute organisation désirant se tourner vers l'_open-source_ doit évaluer la valeur qu'elle récupérera de cet effort. Rendre un projet disponible en _open-source_, c'est beaucoup de travail : avant, pendant et après. Et il y a le risque que notre communauté de contributeurs abandonne le projet est toujours présent...

L'organisation doit tout d'abord déterminer en quoi cet effort lui rapportera. Ensuite, elle doit déterminer en quoi son projet va contribuer à la communauté. Pour attirer des contributeurs talentueux, il est impératif que le projet leur soit profitable. Aucun développeur ne travaillera bénévolement sur un projet qui lui est indifférent !

La culture du logiciel libre favorise le respect, l'ouverture et la transparence. Tout le travail de développement doit se faire de façon ouverte et publique. La communauté doit être en communication constante. Le projet accepte la contribution de n'importe quel membre de la communauté. Toute contribution, que ce soit du code ou des ajouts à la feuille de route, doit être reçue et examinée avec diligence par les administrateurs du projet. Toute rétroaction doit être donnée rapidement et publiquement.

Ces exigences sont nécessaires à l'acquisition et l'entretien du lien de confiance entre la communauté et le projet mis de l'avant par l'organisation. Toute décision prise en privée ou de façon unilatérale érodera ce lien de confiance. Une communauté aliénée aura donc le droit de quitter le projet avec le code et poursuivre le développement de façon autonome.

#### les incontournables

La qualité du code est le premier enjeu d'un projet de logiciel libre. Tout projet qui se respecte impose des normes non-négociables au sujet de la qualité du code. Tout code ne respectant pas les exigences sera refusé par les contributeurs principaux. On parle autant du nommage des variables et fonctions que de l'utilisation d'espaces au lieu d'un `tab`. Les bons projets, comme Apache et Google, fournissent de la documentation étoffée énoncant ses normes accompagnées d'explications justifiant leur adoption. Les meilleurs projets obligent une converture conséquente du code source par des tests unitaires automatisés afin d'éviter les régressions.

> Quatre fichiers contenant du texte (`.md`) déposés à la racine d'un projet _open-source_ sont omniprésents dans tout projet de logiciel libre.

Le fichier `LICENCE` contient le texte juridique exposant les droits et contraintes des utilisateurs du code source. Le plus souvent, on fera un `copier/coller` du texte des licences couramment utilisées comme `MIT` ou `GNU`.

Le fichier `README.md` explique la nature du projet. On y retrouve une description du projet. On y expose en quoi le projet est utile à la communauté. Et on informe les collaborateurs des ressources disponibles pour répondre à ses questions. Le site web de dépôt de code `GitHub` et `GitLab` formatent même le fichier _MarkDown_ et le met en forme pour l'afficher sur la page principal du projet.

Le fichier `CONTRIBUTING.md` explique comment contribuer au projet. On y retrouve les informations essentielles pour encadrer la collaboration. On y explique le processus à suivre pour créer une nouvelle demande de correction. On y suggère certaines fonctionnalités à implémenter à court terme. La feuille de route du produit y est listée ainsi que les façons à privilégier (ou à proscrire) pour entrer en communication avec les responsables du projet.

Pour les développeurs, on y explique comment paramétrer son environnement de développement. On proposera même un gabarit électronique à utiliser pour soumettre une nouvelle fonctionnalité ou un correctif via une _pull request_ (ou _merge request_ dans l'écosystème de `GitLab`).

De plus en plus de projets contiennent un fichier `CODE_OF_CONDUCT.md` servant à établir les normes sociales et éthiques encadrant la collaboration. On y décrit comment on désire que les participants se conduisent. On souligne l'importance d'être chaleureux et empathique. C'est-à-dire traiter les autres comme on aimerait l'être. L'emphase est mise sur le respect des opinions, de la culture et des expériences de vie de chacun. En reconnaissant que nous sommes tous faillibles, on recommande de prendre l'initiative de présenter des excuses lorsque c'est approprié et, surtout, de tirer des leçons de ces expériences désagréables. Finalement, on recommande de prioriser le bien du projet et de la communauté versus nos ambitions et préférences personnelles.

Comme pour les fichiers de licence légale, il existe un document 'Code de Conduite' accepté par des centaines de projet pouvant être `copier/coller` à la racine du répertoire de votre projet : [Contributor Covenant : A Code of Conduct for Open Source Projects](https://www.contributor-covenant.org/).

#### sources

[https://redhatofficial.github.io/#!/main](https://redhatofficial.github.io/#!/main)

[https://opensource.com/article/17/6/what-know-you-open-source-your-project](https://opensource.com/article/17/6/what-know-you-open-source-your-project)

[https://portals.apache.org/development/code-standards.html](https://portals.apache.org/development/code-standards.html)

[https://opensource.guide/starting-a-project/](https://opensource.guide/starting-a-project/)
