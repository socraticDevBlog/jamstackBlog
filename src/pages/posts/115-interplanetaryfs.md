---
title: "interplanetary file system: une autre arnaque à la blockchain ?"
date: 2024-01-15
author: "socraticDev"
image: ../../images/ipfs.png
tags:
  - idées
  - technologie
---

"InterPlanetary File System (`IPFS`) est un système ouvert permettant de gérer
des données sans serveur central." C'est un protocole alternatif à `http`
proposé en 2014 par le chercheur et innovateur américain Juan Benet. Il s'agit
d'une initiative chaleureusement accueillie par la communauté _open source_ et
les adeptes d'un monde décentralisé.

### Qu'est-ce qu'un _filesystem_

Un système de fichier est une façon d'organiser et d'entreposer des données sur
un ordinateur ou un média physique. En plus d'encadrer les processus d'écriture
et de lecture de données, il permet une gestion de la localisation des données,
de l'autorisation en écriture et lecture, l'ajout de metadata aux fichiers, etc.

Il existe plusieurs systèmes de fichier et on en préfère certains selon nos cas
d'utilisation. Certains systèmes garantissent de meilleures performances pour
la gestion des _logs_ (HTFS), alors que d'autres sont conçues pour des systèmes
complexes distribués (HDFS).

### IPFS

`IPFS` agit en quelque sorte comme bitTorrent. Les fichiers partagés ne sont pas
entreposés sur des serveurs centralisés mais bien sur les machines des
utilisateurs. Un système de _hashing_ permet de caractériser chacun de ceux-ci
et rendre disponible aux pairs le fichier au complet, ou une portion de
ceux-ci.

Les avantages d'un tel système? la liberté des utilisateurs de ne pas être
soumis à une autorité centrale, l'amélioration de la persistance des données
dans le temps, l'amélioration du software : les applications ayant une vocation
de partage sans autorité centrale.

### Donc une autre arnaque à la blockchain?

Pas vraiment ... Le problème fondamental d'un système décentralisé est de
motiver les acteurs à y participer dans le long terme ; de partager leurs
ressources informatiques (espace disque, compute power, bande passante, électricité) avec des inconnus.

`IPFS` est discuté dans les mêmes cercles que ceux fréquentés par les adeptes
de la blockchain. Mais le protocole `IPFS` n'est pas nécessairement lié à technologie du blockchain. L'idée d'un
système décentralisé est ce qui les unit. Dans le cas du protocole `IPFS`, ce
sont les données et les fichiers qui sont décentralisés.

Considérer la blockchain comme essentiellement une arnaque manque la cible
selon nous. La cible pour un système d'information décentralisé est d'établir
un système de récompense qui motive les acteurs à partager leurs ressources
physiques: espace de stockage, réseautique et ressources de _compute_ sur leurs
machines personnelles (smartphones, laptops, etc.)

Par exemple, un projet comme [FileCoin](https://filecoin.io/) se veut comme une
réponse au problème de l'incentif. Au lieu de télécharger un fichier depuis un
serveur centralisé, je vais être en mesure de le télécharger depuis plusieurs
sources situés beaucoup plus près de chez moi: 1.5 MB de ma voisine, 0.7 MB d'un
autre voisin, etc. Chacun va être dûment compensé pour avoir contribué au partage.

### conclusion

Ici, je partage simplement ma découverte récente de l'InterPlanetary File System. Je crois comprendre les grandes lignes et j'aime bien le concept.
Mais je suis loin d'être expert et, si ce nouveau protocole décentralisé vous
plaît aussi, je vous invite à creuser davantage voire participer au projet !

### sources

[Discover What's Out There with IPFS](https://ipfs.tech/)

[https://github.com/ipfs](https://github.com/ipfs)

[page web de Juan Benet](https://juan.benet.ai/)

[Filecoin is an open-source cloud storage marketplace, protocol, and incentive layer.](https://filecoin.io/)
