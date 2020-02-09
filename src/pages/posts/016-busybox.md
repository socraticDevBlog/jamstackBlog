---
title: Qu'est-ce que BusyBox ?
date: 2020-02-09
author: "SocraticDev"
image: ../../images/busybox.jpg
tags:
  - linux
  - technologie
---
BusyBox (_boîte occupée_) se considère __le Couteau Suisse du Linux des systèmes embarqués__. BusyBox combine des versions minimales de plusieurs utilitaires UNIX dans un petit fichier exécutable. Les utilitaires offerts par BusyBox sont moins complets que ceux disponibles dans les distributions complètes comme Ubuntu et CentOS. Toutefois, elle assure sensiblement toutes les fonctionnalités attendues d'un système Linux comme ``ls``, ``vi``, ``chmod``, etc.

BusyBox a été conçue pour répondre aux contraintes d'espace mémoire et de ressources limitées des systèmes embarqués et, aujourd'hui, les conteneurs soutenant les microservices. BusyBox est extrêmement modulaire : on peut y inclure ou exclure des fonctionnalités et commandes au moment de la compilation. Elle est donc facile à personnaliser pour les besoins spécifiques des systèmes qui l'utilisent.

En tant qu'exécutable interfaçant avec le noyau Linux, BusyBox est utilisée dans de nombreux environnement POSIX comme le système d'exploitation mobile Android et les distributions Linux minimalistes utilisées dans le monde des micro-services. On la voit même utilisée par les grandes distributions comme Ubuntu au moment de l'amorce du système (__boot flow__).

Le système d'exploitation [Alpine Linux](https://alpinelinux.org/) utilise les fonctionnalités de BusyBox pour l'ensemble de ses commandes et fonctionnalités. En exécutant la commande ``ls -lh /bin`` dans un terminal Alpine, on constate que la majorité des commandes ne font pas référence à des fichiers exécutables occupant de l'espace disque. Il s'agit plutôt de liens symboliques (_symlink_) vers le fichier binaire de BusyBox. Par exemple : ``netstat -> /bin/busybox``.

### sources

[https://www.busybox.net](https://www.busybox.net)

[https://www.wikiwand.com/fr/BusyBox](https://www.wikiwand.com/fr/BusyBox)