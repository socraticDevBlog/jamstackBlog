---
title: "Méfiez-vous du mime"
date: 2021-11-21
author: "SocraticDev"
image: ../../images/mime.png
tags:
  - technologie
  - sécurité
---
Le _Multipurpose Internet Mail Extension_ est ce qui se cache derrière l'acronyme `MIME`. Il s'agit d'une solution proposée par Bell Labs en 1991 à divers problèmes rencontrés avec l'usage du protocole `SMTP`. Le _Simple Mail Transfer Protocol_ est utilisé par les serveurs de email pour envoyer et recevoir des emails. À l'origine il ne permettait que l'échange de texte au format ascii.

> Comme le protocole utilisait du texte en ASCII (7 bits), il ne fonctionnait pas pour l'envoi de n'importe quels octets dans des fichiers binaires. Pour pallier ce problème, des standards comme MIME ont été développés pour permettre le codage des fichiers binaires au travers de SMTP. Aujourd'hui, la plupart des serveurs SMTP acceptent le MIME sur 8 bits, ce qui permet de transférer des fichiers binaires presque aussi facilement que du texte simple.

`MIME` permet d'inclure des informations supplémentaires à un message transféré par le protocole `TCP`. Cette information est souvent appelée `metadata`. Dans le contexte du protocole `http` on adopte un dialogue entre client et serveur : le client envoit une requête (_request_) et le serveur renvoit une réponse (_response_). L'information assignée dans les en-têtes (_headers_) consiste en, dans la requête, une liste des formats acceptés par le client (_Accept_) et, pour une réponse du serveur, la nature et le type du fichier envoyé (_Content-type_).

Le client se fie à la valeur du `content-type` (ex.: `text/html`, `application/json`) pour déterminer comment interpréter le fichier reçu.

##### quiz
Si vous étiez développeur d'un browser web, comment traiteriez-vous une réponse dont aucun `Content-Type` n'est précisé ?

##### sources
[https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol#Modern_SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol#Modern_SMTP)

[https://webmasters.stackexchange.com/questions/31212/difference-between-the-accept-and-content-type-http-headers](https://webmasters.stackexchange.com/questions/31212/difference-between-the-accept-and-content-type-http-headers)