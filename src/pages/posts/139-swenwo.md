---
title: "Le flux et le reflux de la tech"
date: 2025-10-18
author: "SocraticDev"
image: ../../images/maree.png
tags:
  - idées
  - carrière
  - croissance
is_archived: false
---

Comparer le cycle de développement logiciel (SDLC) avec le cycle des marées
éclaire un aspect obscur du métier. Si vous habitez loin de la mer, alors je
vous propose de comparer avec le cycle des saisons. Si vous habitez là où il
n'y a ni marées ni saisons, alors vous vivez peut-être dans un data center!

### la vie est belle sur `localhost`

Pour un développeur, la marée est haute quand il est devant un nouveau projet.
Tout va vite et tout va bien. On ne se soucie pas trop des librairies externes
ajoutées au projet, du coût d'opération à terme.

Et la sécurité est bien sûr un détail.

### quand les clients commencent à utiliser notre service

La marée commence à descendre dès qu'on déploie ce nouveau service en
production. Les développeurs commencent à se rendre compte que la mer est moins
profonde près des rives. La coque du navire s'érafle un peu en rencontrant
l'équipe SRE et l'équipe de sécurité. On exige un processus de déploiement
standardisé et auditable. La pérennité et la sécurité des données doit être
assurée. SRE exige même de pouvoir facilement rollbacker tout nouveau
déploiement en production si un incident causé par une nouvelle mise en
production est détectée.

### scaling et le combat quotidien de garder les dépendances à jour

Le souvenir d'un système ultra rapide sur `localhost` est bien loin.
Aujourd'hui, les lenteurs envahissent votre système. La gestion d'index dans
les bases de données et le profilage des appels d'API deviennent une partie de
votre routine. Les coûts du cloud montent plus vite que
vos revenus.

Non seulement ça, mais garder vos dépendances à jour devient une course contre
la montre. Dès que vous pensiez être à jour avec la dernière version de
kubernetes, une nouvelle version mineure est publiée. Encore pire, on vous
annonce que la version d'OS utilisée sur vos serveurs ne sera plus supportée
dans trois mois.

La marée touche le fond quand un projet open source adoré des développeurs
finit entre les mains d’un conglomérat qui le transforme en abonnement mensuel.

### une question de perspective

Ce qui est marée basse pour les développeurs est marée haute pour d'autres.
Quand les petits bateaux restent pris dans la vase, sur le bord de la mer, on
voit des gens aux longues bottes s'aventurer loin sur le rivage et ramasser des
trucs qui leurs font plaisir: des coquillages, des algues et des poissons
égarés. Dans le monde de la tech, ce sont les propriétaires de la boîte et les
actionnaires qui célèbrent votre système qui devient de plus en plus utilisé et
rapporte de l'argent à l'organisation.

C’est un cycle qu’on subit souvent sans le nommer. Pourtant, le reconnaître
change tout.

### leçons

Cette analogie avec la marée est riche en leçons. Premièrement, notre terrain
de jeu en technologie est en perpétuel mouvement. Il y a quelques années, on
s'arrachait les développeurs et ils obtenaient des salaires confortables tout
en se disant qu'ils pouvaient quitter leur emploi si jamais les circonstances
commençaient à moins leur plaire. Aujourd'hui les développeurs subissent la
crainte, l'incertitude et le doute induit par la bulle AI ; ils restent au même
endroit plus longtemps, quitte à s'enliser dans la vase de la marée basse.

C'est une question de perspective. Un nouveau projet informatique c'est
excitant pour les développeurs, mais stressant pour un investisseur. Un produit
informatique mature qui a du succès c'est grisant pour l'investisseur, mais
devient un mal de tête pour les développeurs.

Tout est en changement. La principale leçon est de cesser de penser en termes
absolus. Les idéaux de _clean code_, de liberté totale et de marée haute
perpétuelle sont des illusions. Il faut bâtir en prenant en compte le cycle des
marées: être moins ambitieux à marée haute et être moins anxieux à marée basse.
Et la même chose pour les gestionnaires et exécutifs: le niveau de performance
et de productivité de vos équipes vont fluctuer. À marée haute, vous allez
pouvoir présenter des démos puissantes lors de vos sprint reviews. Mais à marée
basse, quand l'essentiel du temps de vos développeurs est passé à débugger des
problèmes intermittents et à mettre à jour leurs librairies, vos présentations
Powerpoint risquent d'être moins sexy!

### actions

Votre devoir c'est d'identifier à quel stade de la marée votre industrie se
situe présentement et à quel stade de la marée votre équipe opère en ce moment.
Sachant que votre réalité obéit à une forme de cycle, savoir où vous vous
trouvez présentement a toutes les chances de mieux informer vos décisions du
jour ainsi que votre stratégie à long terme.
