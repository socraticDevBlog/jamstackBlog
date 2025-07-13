---
title: "Scattered Spider : comment se protéger face à la nouvelle génération de cybercriminels"
date: 2025-07-13
author: "SocraticDev"
image: ../../images/scattered_spiders.png
tags:
  - sécurité
---

"Rien au monde n’est aussi mou et fluide que l’eau. Mais pour dissoudre le dur
et l’inflexible, rien ne la surpasse" &mdash; Tao te king

Scattered Spider, aussi connu comme _UNC3944_, _Scattered Swine_,_Octo Tempest_
et _Muddled Libra_,  est un groupe informel de jeunes
pirates informatiques en provenance de Grande-Bretagne, des États-Unis et du
Canada. D'après des enquêtes policières et suivant des arrestations, ils sont
jeunes et parlent l'anglais comme langue maternelle. Contrairement à d'autres
groupes de hackers connus par les chercheurs et les intervenants en sécurité,
ils s'organisent de façon spontanée et ils adaptent leurs techniques en
fonction des opportunités et des embûches qu'ils rencontrent lors de leurs
missions.

> MGM Resorts International et Caesars Entertainment figurent parmi une
> centaine d’organisations visées par des cyberattaques attribuées au groupe de
> hackers “Scattered Spider”. Selon les inculpations rendues publiques
> mercredi, les accusés auraient ciblé au moins 12 organisations américaines
> pour voler des données, et dérobé environ 11 millions de dollars en
> cryptomonnaies à au moins 29 personnes. 

Ce sont réellement des missions contre des cibles précises qu'ils mènent.
Contrairement à beaucoup de pirates opportunistes utilisant des techniques peu raffinées,
Scattered Spider vise méticuleusement les organisations qu'ils frappent. Leur principal objectif
étant l'argent, ils se sont fait connaître pour avoir littéralement paralysé
les casinos américains Caesars et MGM en 2023. Caesars aurait payé la rançon de
15 millions de dollars alors que MGM aurait refusé.

> Le social engineering est une technique de manipulation psychologique visant
> à tromper une personne pour obtenir un accès non autorisé à des informations
> ou à des systèmes.

Les médias soulignent l'excellence de Scattered Spider dans le _social
engineering_. Bien en contrôle de la langue de Shakespeare et connaissant la
culture locale, ces jeunes pirates font dans l'efficacité quand vient d'usurper
l'identité d'employés et faire appel au service d'assistance TI (_helpdesk_)
pour réinitialiser des mots de passe ou des systèmes d'authentification
multifacteur (_MFA_).

> Le vishing est une technique d’ingénierie sociale où un attaquant utilise des appels téléphoniques ou vidéo pour tromper sa victime et obtenir des informations sensibles.

D'autres sources affirment aussi que Scattered Spider utiliserait le vishing
pour à son tour se faire passer pour le service d'assistance TI. Dans l'attaque
contre les casinos américains, ils ont bombardé certains employés de SMS pour
leur faire craindre que leurs accès et permissions seraient suspendues s'ils ne
contactaient pas rapidement le _helpdesk_ ...

Certes on adore parler de _social engineering_ comme le premier atout d'un
hacker. L'humain est souvent le maillon faible en cybersécurité. Or pour avoir
pris connaissance des exploits de ces jeunes gens, il faut reconnaître qu'ils
sont aussi de fins stratèges et de bons tacticiens en plus d'avoir une solide
expertise en administration de systèmes.

> Le SIM-swapping est une technique de piratage consistant à transférer
> frauduleusement le numéro de téléphone d’une victime vers une carte SIM
> contrôlée par l’attaquant afin d’intercepter ses appels, SMS et codes de
> vérification.

Avec Scattered Spider rien ne va plus. Leur approche remet en question le
status quo pour les intervenants de première ligne. Ces _first responders_ en
sécurité étaient presque devenus blasés puisque la plupart des attaques
suivaient des méthodes plutôt classiques. À l'origine, ses membres utilisaient
la technique du SIM-swapping pour subtiliser des grosses sommes de
crypto-monnaies. Par-delà le social engineering, ils peuvent même aller jusqu'à la
violence physique pour arriver à leurs fins. Par exemple, ils sont connus pour
littéralement avoir attaqué des boutiques de téléphone afin de s'emparer des
tablettes des superviseurs. Cela faciliterait leurs effort de SIM-swapping. 

Aujourd'hui ils se présentent comme des "chasseurs de gros gibier" qui n'hésite
pas à s'attaquer à de grandes compagnies technologiques (Okta, Twilio,
Snowflake, Lastpass), financières (Visa, Transamerica, Truist bank) et cible récemment l'industrie du voyage (Qantas). 

> [La compagnie aérienne australienne] Qantas a annoncé [au début juillet 2025]
> que des millions de comptes clients ont été exposés lors d’une cyberattaque
> « importante ».
> 
>La compagnie aérienne n’a pas confirmé si elle avait été ciblée par le groupe Scattered Spider, mais des experts estiment que l’attaque porte sa signature.

Tout indique que Scattered Spider maîtrise parfaitement les rudiments des
systèmes informatisés modernes et connaît bien les failles habituelles des
grandes organisations.

Pour s'introduire dans un nouveau système, ils visent le personnel TI ayant des
accès privilégiés comme des administrateurs de système seniors et des cadres
dirigeants. Ils misent sur le service d'assistance TI ("Helpdesk") comme une
porte d'entrée privilégiée puisqu'il s'agit souvent d'un groupe très sollicité
et moins bien intégrés à l'organisation. Ils misent aussi sur la "fatigue du
MFA" qui hante tous les acteurs en TI. En les submergeant de demandes
d'authentification, il est courant que les employés relâchent leur vigilance et
acceptent machinalement toute demande d'authentification.

> Contrairement aux attaques par malware classiques, qui s’appuient sur des
> fichiers malveillants, les attaques LOTL (Living off the Land) sont dites
> sans fichier, car elles ne nécessitent l’installation d’aucun code ou script
> sur le système ciblé. L’attaquant exploite plutôt des outils déjà présents
> dans l’environnement, comme PowerShell, WMI ou Mimikatz.
>
> En utilisant des outils natifs, ces attaques sont beaucoup plus difficiles à
> détecter, surtout si l’organisation repose sur des solutions de sécurité
> traditionnelles axées sur la détection de fichiers ou de scripts connus.
> Cette faille permet souvent au pirate de rester invisible pendant des
> semaines, des mois, voire des années.

Une fois dans le système leurs actions relèvent de l'exploit. Ils sont capable
de simuler des pages d'authentification pour subtiliser des informations de
connexion. Ils utilisent la technique d'attaque _Living Off The Land_ (LOTL) qui
consiste à utiliser les ressources déjà disponibles sur le réseau de sa victime.

> Un contrôleur de domaine est un serveur qui gère l'authentification et les
> autorisations des utilisateurs et des ordinateurs dans un réseau informatique
> centralisé.

Ensuite la variété de leur méthode d'exploitation est épatante. Certains
experts en sécurité ont noté leur intérêt particulier pour les services
Single-Sign-On (SSO). En clonant le service Okta de la victime sur leur propre
service Okta obtenu en mode "free trial", ils établissent une persistance dans
le réseau de leur victime tout en échappant à la détection. D'une façon
semblable ils sont connus pour provisionner leur propre contrôleur de domaine
("domain controller") et s'octroyer les permissions nécessaires pour arriver à
leurs fins.

Bref, leur expertise technique en administration de système est amplifiée par
leur agilité. Leur philosophie est foncièrement amorale. Ils sont motivés par
le gain financier et ne semblent pas se soucier des victimes collatérales de
leurs crimes. On croit que ces jeunes pirates forment des communautés
virtuelles sur le réseau de communication cloud Telegram. Ils y partagent leurs
apprentissages et raffinent leurs techniques. Leur force de frappe vient d'une
excellente préparation et d'une inventivité sans scrupule. L'homogénéité
culturelle entre ces fraudeurs et leurs victimes fait aussi lever les sourcils.

> Un profil de menace ("threat profile") est une description détaillée des menaces potentielles
> auxquelles une organisation pourrait être confrontée, incluant leurs
> capacités, leurs motivations et leur impact potentiel. Il aide les
> organisations à prioriser leurs mesures de sécurité en comprenant qui
> pourrait les attaquer, comment ces attaques pourraient se produire, et quels
> actifs seraient en danger. Les profils de menace sont essentiels à une
> cybersécurité proactive, car ils permettent d’anticiper et d’atténuer les
> attaques potentielles.

Est-ce que toute tentative de se défendre contre Scattered Spider est futile ?
Pas tout à fait mais les incidents des dernières années ne laissent aucun choix
aux organisations pouvant être qualifiée de "gros gibier". Selon moi qui ne
suis absolument pas expert en sécurité, la première étape consiste à établir le
profile de la menace ("threat profile"). Ce dossier permet de lister et
qualifier les différents risques auxquelles l'entreprise pourrait être
vulnérable.

> MDR (Managed Detection and Response) est un service de sécurité géré par des
> experts qui surveillent en continu les systèmes pour détecter et répondre
> rapidement aux menaces. 
> 
> XDR (Extended Detection and Response) est une
> solution qui regroupe et analyse les données de plusieurs sources (emails,
> ordinateurs, serveurs, etc.) pour mieux détecter les attaques et y répondre
> de façon plus coordonnée.

De façon non-équivoque, plusieurs pratiques devraient être abandonnées pour
être remplacées par d'autres plus solides:

- cesser d'utiliser le SMS comme façon de transmettre des jetons
  d'authentification multifacteur (MFA)
- faire en sorte qu'un utilisateur ne soit même pas en mesure de communiquer
  son code MFA:
  - utilisation de la fonctionnalité _Windows Hello for business_ de Microsoft
  - utilisation de clés matérielles FIDO (yubikeys)
- obligation d'utiliser des mots de passe uniques et d'utiliser un logiciel de gestion de mots de passe
- utilisation d'authentification par certificat
  - Microsoft Intune
- investir dans la formation du service d'assistance TI (helpdesk)
  - inculquer les meilleures procédures pour authentifier un correspondant
- investir dans la formation de tous les employés
  - si quelqu'un vous contacte en disant qu'ils sont du service TI, êtes-vous
    en mesure de confirmer leur identité ?
- utiliser un service de protection de la marque
  - recevoir des alertes quand quelqu'un achète des noms de domaines qui
    ressemblent aux vôtres
  - placer des "honey tokens" sur vos pages web pour détecter des tentatives de
    clonage de vos _web assets_
- utiliser un darknet monitoring service
- investir dans les fondements de la sécurité
  - Managed Detection and Response (MDR)
  - Extended Detection and Response (XDR)
- avoir une bonne stratégie de sauvegarde et un plan de reprise des activités
  éprouvé (Disaster Recovery plan)

### sources

Matt Burgess and Lily Hay Newman (2025-07-02), [Wired - A Group of Young Cybercriminals Poses the ‘Most Imminent Threat’ of Cyberattacks Right Now](https://www.wired.com/story/scattered-spider-most-imminent-threat/)

[What is Brand Protection Software?](https://www.gartner.com/reviews/market/brand-protection-software )

[Scattered Spider: British-American hacker group](https://www.wikiwand.com/en/articles/Scattered_Spider)

[5 defendants linked to ‘Scattered Spider’ hacker group behind 2023 MGM,Caesars cyberattacks](https://www.8newsnow.com/news/local-news/5-defendants-linked-to-scattered-spider-hacker-group-behind-2023-mgm-caesars-cyberattacks/)

[Scattered Spider Targets Tech Companies for Help-DeskExploitation](https://reliaquest.com/blog/scattered-spider-cyber-attacks-using-phishing-social-engineering-2025/)

[Shaking up the Ransomware Game: Introducing Scattered Spider](https://www.youtube.com/watch?v=cOwUyjXdkZ0)

[What we know about Scattered Spider, the hacker group targeting airlines](https://www.abc.net.au/news/2025-07-02/who-are-scattered-spider-hackers-qantas-data-breach/105485674)
