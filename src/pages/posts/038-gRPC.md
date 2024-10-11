---
title: "gRPC pour dotnet : effritement du monopole du protocole REST"
date: 2020-07-21
author: "SocraticDev"
image: ../../images/grpc.png
tags:
  - technologie
  - programmation
---

> [Développé principalement par Google], `gRPC` est un _framework_ `RPC` haute performance open source moderne qui peut s'exécuter dans n'importe quel environnement. Il peut connecter efficacement les services dans et entre les centres de données avec une prise en charge enfichable pour l'équilibrage de charge, le traçage, la vérification de l'état et l'authentification. Il est également applicable dans le dernier kilomètre de l'informatique distribuée pour connecter des appareils, des applications mobiles et des navigateurs aux services backend.

L'écosystème Microsoft a fêté, en juin dernier, l'arrivée d'une version prête à la production du protocole `gRPC`. Le _runtime_ `.net core` prend donc du galon grâce l'ajout d'une implémentation complète du protocole d'appels de procédure distante (`RPC - Remote Procedure Call`) utilisé à l'interne par `Google` depuis des années.

Un _appel de procédure distante_, dans le cadre de systèmes informatiques distribués, est l'événement où un système déclenche l'exécution d'une procédure sur un système localisé à une différente adresse que la sienne. Du point de vue du programmeur lisant le code source, bien que ce ne soit pas le cas, on peut imaginer cette procédure distante comme s'exécutant sur le poste local. Toutefois, en raison de l'utilisation d'un réseau, ce genre de procédure est moins fiable et plus lente. La plupart des grandes entreprises oeuvrant principalement sur Internet utilise une forme ou une autre de `RPC` : Facebook a développé `Apache Thrift` alors que WhatsApp utilise les fonctionnalités intrinsèques du langage `Erlang`.

L'intérêt pour cette technologie plutôt ancienne s'explique par la popularité croissante des architectures orientées services (`SOA`) et l'arrivée de la technologie prometteuse `webAssembly` dans le porte-feuille techno de Microsoft.

##### La fin prochaine du protocole HTTP REST ?

L'arrivée de `gRPC` sur le web signe probablement la fin de la toute-puissance des APIs REST. Les exigences de performances et d'interopérabilité pour les systèmes modernes favorisent ce nouveau venu.

- `gRPC` l'emporte en termes de performances. Il assure la transmission de messages légers sous forme binaire alors que REST transmet des chaînes de caractères au format `JSON` qui sont plus lourdes sur le réseau. Cela fait une différence notable pour les _smartphones_

- Tous les _framework_ gRPC assure une génération de code impeccable pour la construction de clients et serveurs de messages binaires. La génération automatique de ces entités critiques permettra aux développeurs d'économiser un temps précieux ... et d'éviter les erreurs difficiles à diagnostiquer !

- Un peu comme le _framework_ `WCF` de Microsoft, `gRPC` impose le respect de spécifications strictes. Les APIs HTTP avec messages JSON n'impose aucune spécifications. Ainsi, les développeurs web d'aujourd'hui sont constamment en train de débattre à propos des verbes HTTP ou des codes de retour appropriés. `gRPC` assure une expérience consistante sur toutes les plate-formes et à travers toutes les implémentations.

- `gRPC`, via le protocole `HTTP/2`, supporte tous les types de streaming : unitaire, serveur-vers-client, client-vers-serveur et bi-directionnel

- `gRPC` permet au client de gérer le comportement des procédures distantes : _deadlines_, _timeouts_ et _cancellations_

##### Cas d'utilisation

- Micro-services où la faible latence et le haut début sont de rigueur de

- La communication point-à-point bi-directionnelle en temps réel

- Les environnements polyglottes où plusieurs langages de programmation sont utilisés : `gRPC` offre des frameworks complets dans plusieurs langage.

- Les environnements où la capacité du réseau est limité. Un message `gRPC` sera toujours beaucoup plus léger qu'un `JSON`

##### Faiblesses de grpc

- Les navigateurs modernes ne supportent pas `gRPC` à l'heure actuelle. Le pari de Microsoft est de favoriser l'adoption du _framework_ `Blazor` qui, lui, propose un client web compatible avec `gRPC`

- Les messages échangés par un client et un serveur, étant des _buffers_ binaires, ne sont pas lisibles par un humain

- `gRPC` a des limitations en termes de _broadcast_ en temps réel sur un réseau. Pour ce cas d'utilisation, un _framework_ comme `SignalR` est plus approprié

- Parce qu'elle nécessite des clients `HTTP/2`, la communication inter-processus est mieux servie par d'autres technologies pouvant s'en passer. Par exemple, Microsoft utilise des `pipes` comme méthode légère de communication rapide entre processus.

##### Source

[https://docs.microsoft.com/en-us/aspnet/core/grpc/comparison?view=aspnetcore-3.1](https://docs.microsoft.com/en-us/aspnet/core/grpc/comparison?view=aspnetcore-3.1)

[https://grpc.io/](https://grpc.io/)
