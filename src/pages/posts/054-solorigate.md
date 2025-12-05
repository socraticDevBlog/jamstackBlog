---
title: "Solorigate : l'attaque qui va marquer la cybersécurité à venir"
date: 2020-12-21
author: "SocraticDev"
image: ../../images/solarwinds-hack.png
tags:
  - sécurité
is_archived: true
---

Le 8 décembre dernier, la firme de sécurité américaine `FireEye` a divulgué avoir été victime d'une attaque majeure lors de laquelle des outils propriétaires furent subtilisés. Ces outils nommés `Red Team Tools` sont des processus sophistiqués pour simuler des attaques afin d'identifier des vulnérabilités et apprendre à l'organisation comment prendre des mesures afin d'améliorer la sécurité de leurs systèmes.

> "Une `red team` est un groupe de professionnels de sécurité informatique organisés et autorisés à simuler des attaques ou exploitation de ressources contre l'infrastructure de sécurité d'une organisation. [FireEye a] effectué des consultations de type `Red Team` depuis plus de 15 ans. Pendant ce temps, [ils ont] élaboré un ensemble de scripts, outils, scanners et techniques pour améliorer la sécurité de [leurs] clients. Malheureusement, ces outils furent volés par un attaquant ultra sophistiqué."

Ces outils furent spécifiquement ciblés par une attaque tellement patiente et sophistiquée qu'on croit que l'auteur est subventionné par un État-nation.

> Récemment, nous avons été attaqué par un acteur ultra sophistiqué dont la discipline, la sécurité opérationnelle et les techniques nous mènent à conclure à une attaque parraînée par un État. En lien direct avec les efforts de cyber-espionnage d'un État-nation, l'attaquant était principalement à la recherche d'informations liées à certains clients du gouvernement.

Le 13 décembre 2020, `Reuters` a annoncé que le `département du Trésor américain` fut aussi infiltré par une attaque d'un adversaire sophistiqué. Cette attaque fut perpétrée par le même groupe ayant ciblé `FireEye`, selon la journaliste Ellen Nakashima du `Washington Post`.

L'attaque fut attribuée à la Russie. Au groupe de hackers connu sous le nom de `APT29` ou `Cozy Bear`. Ce groupe ferait partie du `SVR` : Service des renseignements extérieurs de la fédération de Russie. Ce groupe fut pointé du doigt pour la brèche des serveurs de courriels de la Maison Blanche et du département d'État sous l'administration Obama. L'été dernier, il fut aussi soupconné d'avoir essayé de voler des recherches au sujet de vaccins contre la COVID19.

##### SolarWinds : point d'entré d'une attaque de la chaîne d'approvisionnement

SolarWinds est une compagnie technologique offrant principalement un service logiciel d'outils de gestion de systèmes informatiques utilisés par les professionnels de IT. Le système ciblé par les hackers est la plate-forme `Orion`. Cette plate-forme est utilisée par un grand nombre d'agences gouvernementales ainsi que par la majorité des grandes organisations composants le `Fortune 500`. `Orion` est un `NMS` : `Network Management System`. Ce système est responsable de l'orchestration des sous-systèmes et on lui assigne habituellement un haut niveau de privilèges. Il peut même effectuer des modifications de configurations. Bref, l'attaquant s'est confortablement installé dans la chaise de l'administrateur du système ; au-dessus des logiciels antivirus et des listes de contrôle d'accès (`ACL`).

C'est en mars 2020 que le `malware` introduit dans une librairie (`DLL`) de la solution `Orion` fut déployé via le serveur de mise à jour de `SolarWinds` ; entre le mois de mars et juin 2020. Il était numériquement signé par un certificat émis par une firme reconnue : `Symantec`. À ce jour, on ne sait pas comment cela fut rendu possible.
SolarWinds déclare que seule la plate-forme `Orion` fut touchée. Cela représente 18 000 clients. À ce jour, 40 organisations se sont déclarées victimes de l'attaque.

> "Une attaque de la chaîne d'approvisionnement est une cyberattaque qui cherche à endommager une organisation en ciblant des éléments moins sécurisés de la chaîne d'approvisionnement . Une attaque de la chaîne d'approvisionnement peut se produire dans n'importe quel secteur, du secteur financier, de l'industrie pétrolière ou du secteur gouvernemental. Les cybercriminels altèrent généralement le processus de fabrication d'un produit en installant un rootkit ou des composants d'espionnage matériels."

##### attaque sophistiquée

- L'attaquant aurait compromis le système de gestion du code source pour apporter des modifications directement au niveau du code source. Cela signifie que le processus de _build_ et de signature électronique aurait aussi été compromis. L'attaquant a ouvert une _backdoor_ au niveau du code. La librairie compromise est donc compilée, signée et déployée chez les clients selon le processus habituel;

- Le malware demeure en dormance pendant au moins deux semaines avant de s'activer;

- Le malware vérifie la topologie du système avant de s'activer. Par exemple, il demeure inactif s'il détecte être installé dans une _sandbox_ ou un laboratoire de recherche en cybersécurité;

- S'il détecte être installé sur un réel système, alors il agit sous le voile de l'identité du _Orion Improvement Program_ grâce à des commandes dissimulées;

- Il s'intéresse principalement aux comptes utilisateurs possédant des droits d'administration. Il tente d'obtenir le contrôle de l'administrateur global ou du jeton `SAML` lui permettant de gérer des signatures électroniques.

- On croit aussi que le malware s'adapte à chacune des organisations infectées. C'est-à-dire que l'attaquant pourrait aussi espionner un utilisateur régulier mais détenant des informations privilégiées ou un pouvoir décisionnel.

##### Concrètement: que peut faire ce malware ?

- Effectuer des transferts de fichiers;
- Exécuter des fichiers;
- Profiler le système;
- Redémarrer le système;
- Désactiver des services du systèmes.

##### Quels sont les risques ?

À ce jour les risques ne sont pas connus. Toutefois, on commence à réaliser qu'un État-nation a pris le contrôle des systèmes informatiques d'un grand nombre d'organisations. A priori, on peut conclure que l'objectif principal est l'espionnage.

Quelques conséquences connues à ce jour :

0. Un État étranger a eu accès prolongé aux systèmes d'entreprises et gouvernements;
1. FireEye : vol d'outils sophistiqués de pénétration de systèmes informatiques;
2. Agence de sécurité nucléaires des États-Unis d'Amérique;
3. Agence du Trésor, Commerce et Département d'état américain;
4. ville d'Austin;
5. Think tanks (groupes de réflexion) et contracteurs gouvernementaux américains

La majorité des victimes sont des organisations américaines (80%). D'autres victimes proviennent du Canada, Mexique, Grande-Bretagne, Belgique, Israël, Espagne et Émirats arabes unis.

##### conclusion

Au fil des jours, la liste des victimes du `Solorigate` augmente. Les experts en cybersécurité font du temps supplémentaires pendant le temps des Fêtes à éplucher les journaux de communication de leur système afin de découvrir s'ils hébergent le malware.

Une stratégie de défense plus aggresive est aussi implémentée : les organisations implenteraient des `canary` et des `trip wires` pour identifier la présence de l'ennemi dans leurs systèmes et analyser leur comportement.

À suivre

##### sources

[https://www.bloomberg.com/news/videos/2020-12-18/consequences-of-hack-remain-to-be-seen-says-crowdstrike-ceo-video](https://www.bloomberg.com/news/videos/2020-12-18/consequences-of-hack-remain-to-be-seen-says-crowdstrike-ceo-video)

[https://www.bloomberg.com/news/videos/2020-12-18/hundreds-likely-hit-by-solarwinds-hack-microsoft-s-smith-video](https://www.bloomberg.com/news/videos/2020-12-18/hundreds-likely-hit-by-solarwinds-hack-microsoft-s-smith-video)

[https://www.fireeye.com/blog/products-and-services/2020/12/fireeye-shares-details-of-recent-cyber-attack-actions-to-protect-community.html](https://www.fireeye.com/blog/products-and-services/2020/12/fireeye-shares-details-of-recent-cyber-attack-actions-to-protect-community.html)

[https://www.fireeye.com/blog/threat-research/2020/12/unauthorized-access-of-fireeye-red-team-tools.html](https://www.fireeye.com/blog/threat-research/2020/12/unauthorized-access-of-fireeye-red-team-tools.html)

[https://www.wikiwand.com/fr/FireEye](https://www.wikiwand.com/fr/FireEye)

[https://www.washingtonpost.com/national-security/russian-government-spies-are-behind-a-broad-hacking-campaign-that-has-breached-us-agencies-and-a-top-cyber-firm/2020/12/13/d5a53b88-3d7d-11eb-9453-fc36ba051781_story.html](https://www.washingtonpost.com/national-security/russian-government-spies-are-behind-a-broad-hacking-campaign-that-has-breached-us-agencies-and-a-top-cyber-firm/2020/12/13/d5a53b88-3d7d-11eb-9453-fc36ba051781_story.html)

[https://fr.qaz.wiki/wiki/Supply_chain_attack](https://fr.qaz.wiki/wiki/Supply_chain_attack)

[https://thehackernews.com/2020/12/new-evidence-suggests-solarwinds.html](https://thehackernews.com/2020/12/new-evidence-suggests-solarwinds.html)

[https://web.archive.org/web/20201215011256/https://twitter.com/vinodsparrow/status/1338431183588188160](https://web.archive.org/web/20201215011256/https://twitter.com/vinodsparrow/status/1338431183588188160)

[https://financialpost.com/technology/russia-linked-solarwinds-hack-ensnares-widening-list-of-victims](https://financialpost.com/technology/russia-linked-solarwinds-hack-ensnares-widening-list-of-victims)

[https://www.microsoft.com/security/blog/2020/12/18/analyzing-solorigate-the-compromised-dll-file-that-started-a-sophisticated-cyberattack-and-how-microsoft-defender-helps-protect/](https://www.microsoft.com/security/blog/2020/12/18/analyzing-solorigate-the-compromised-dll-file-that-started-a-sophisticated-cyberattack-and-how-microsoft-defender-helps-protect/)
