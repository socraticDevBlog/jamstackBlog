---
title: "Coques logicielles: se retrouver entre shell, bash et autres"
date: 2022-01-01
author: "SocraticDev"
image: ../../images/shell_blog.png
tags:
  - technologie
  - linux
---

Tout système informatisé est une structure complexe reposant sur plusieurs couches de protocoles logiciels et des éléments matériels. Le modèle `OSI` part de la couche physique, des impulsions électriques pour aboutir sur la couche applicative. Pour le commun des mortels la couche applicative est une interface utilisateur attrayante (`UI` pour _user interface_) : une application web ou mobile.

Habituellement, pour les développeurs, la couche applicative se présente comme des fonctionnalités rendues disponibles via des commandes textuelles tappées sur un clavier et visualisées sur un terminal.

##### autre analogie

Le modèle `linux` repose sur un kernel, un noyau logiciel orchestrant les interactions entre logiciels et hardware. La couche extérieure, la coque logicielle, est appelée en anglais `shell`. Dans le monde `Unix/Unix-like`, l'informaticien accède à la puissance du système via une coque logicielle comme `shell`, `bash` ou `zsh`.

> "Le terme anglais « shell » vient à l'origine de la terminologie employée avec les premiers systèmes d'exploitation de type Unix où il avait le sens plus spécifique de shell Unix. Cette appellation est une métaphore (on peut la traduire par coque en français) pour désigner la couche la plus haute des interfaces des systèmes Unix, par opposition à la couche de bas niveau, appelée noyau.
>
> Les premiers concepteurs informatiques américains avaient l’habitude de décrire les différentes couches logicielles d’un système par une analogie : celle du noyau et de la coque de noix.
>
> En anglais, le mot « kernel » désigne le cerneau, la partie comestible du noyau de la noix. Il s’agit de la partie renfermée dans la coque. La coque étant la partie non comestible du fruit, appelée « shell » en anglais. L’idée sous-jacente étant que « pour accéder à la partie comestible (utile), il faut passer par la coque »."

#### POSIX

`POSIX` est un acronyme signifiant _Portable Operating System Interface_. Il s'agit d'une norme technique définie en 1988 par l'IEEE(Institute of Electrical and Electronics Engineers). Il s'agit d'un ensemble de normes prescrites pour assurer l'interopérabilité de différents systèmes informatisés. Les services d'entrées et sorties (`IO`), les interfaces utilisateurs (`Bourne shell`) ainsi que les commandes utilitaires comme `awk` et `echo` y sont caractérisées.

Cette norme datant de la fin des années 1980 assure une compatibilité entre les différents systèmes d'exploitation. Par exemple, `Microsoft Windows NT 3.0, 4.0` sont certifiés `POSIX`.

Toutefois, la norme n'est pas parfaite. Certains bogues subsistent et plusieurs innovations ne sont pas prises en charge. Donc, ne pas être 'POSIX compliant' n'est pas un défaut en soi.

#### sh ou Bourne Shell

`sh` ou `Bourne shell` est un langage de programmation de commandes respectant la norme `POSIX`. Son avantage est la compatibilité avec différents systèmes. Ce langage utilise la syntaxe et la sémantique d'anciens langages de programmation ; en majeure partie `ALGOL68`.

Un script `sh` va donc s'exécuter sans problème sur un système roulant `bash`. C'est le langage de scripting le plus portable. On est certain qu'il pourra être exécuté sur tout système `POSIX`, `UNIX` et `UNIX-like`.

#### bash ou Bourne Again Shell

`bash` ou `Bourne Again Shell` est un langage de programmation reprenant certaines fonctionnalités de `sh` tout en l'enrichissant. Il s'agit de la coque logicielle par défaut de la plupart des distributions `GNU/Linux`. Il n'est pas certifié `POSIX` mais se conforme tout de même à certains standards comme `IEEE POSIX Shell and Tools`.

`bash` est tout de même très portable au sein de l'écosystème `GNU/Linux`. On le retrouve au même endroit sur à peu près tous nos systèmes : `/bin/bash`.

On peut préférer `bash` pour la richesse de ses fonctionnalités en termes de programmation et d'utilisation interactive.

#### bash vs. sh

| bash                                                    | sh                                                           |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| Bourne Again SHell                                      | SHell                                                        |
| développé par Brain Fox                                 | développé par Stephen R. Bourne                              |
| successeur de sh                                        | prédécesseur de bash                                         |
| davantage de fonctionnalités                            | moins de fonctionnalités                                     |
| n'est pas POSIX compliant                               | est POSIX compliant                                          |
| facile d'utilisation                                    | plus difficile à utiliser que bash                           |
| moins portable que sh                                   | plus portable que bash                                       |
| scripting en bash est spécifique à l'environnement bash | scripting en sh cible toutes les coques logicielles (shells) |
| implémente la commande `history`                        | n'implémente pas la commande `history`                       |

#### zsh et autres délires

`Z shell` ou `zsh` est la coquille logicielle par défaut sur le système d'opération MacOS. Plusieurs utilisateurs de `GNU/linux` aiment aussi utiliser ce _shell_ en raison de ses fonctionnalités et son esthétique plaisante.

> La première version de zsh a été écrite par Paul Falstad en 1990, à l'époque étudiant à l'université de Princeton. Le nom « zsh » vient de Zhong Shao, professeur à Yale, et assistant d'enseignement à l'université de Princeton. Paul Falstad pensait que l'identifiant de connexion de Shao, « zsh », était un nom convenable pour un shell.

##### (tiré de wikipedia)

En particulier, zsh apporte les fonctionnalités suivantes :

- Complétion des commandes, des options et des arguments de la plupart des commandes. En particulier, taper la suite de caractères « cd <TAB> » ne permettra la complétion que par des répertoires.
- Des fonctions de "Globbing" ou "Expansion [archive]" très avancées
- Partage de l'historique des commandes entre tous les shells zsh actuellement actifs.
- Utilisation améliorée des variables et des tableaux.
- Édition des commandes multi lignes dans un seul buffer.
- Correction « orthographique » des commandes tapées.
- Plusieurs modes de compatibilité (zsh peut par exemple être vu comme un shell bourne quand il est exécuté en tant que /bin/sh).
- Invite de commande personnalisable, avec la possibilité d'afficher des informations sur le côté droit de l'écran qui disparaissent si la commande tapée est trop longue.
- zsh prend en charge l'Unicode depuis la version 4.32 et s'avère plus flexible et léger que bash[réf. nécessaire], notamment grâce à une découpe du code en modules chargeables dynamiquement.

#### sources

[https://fr.wikipedia.org/wiki/Interface_système](https://fr.wikipedia.org/wiki/Interface_système)

[https://www.geeksforgeeks.org/difference-between-sh-and-bash/](https://www.geeksforgeeks.org/difference-between-sh-and-bash)

[https://fr.wikipedia.org/wiki/POSIX](https://fr.wikipedia.org/wiki/POSIX)

[https://fr.wikipedia.org/wiki/Z_Shell](https://fr.wikipedia.org/wiki/Z_Shell)
