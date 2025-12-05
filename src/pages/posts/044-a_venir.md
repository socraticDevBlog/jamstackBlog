---
title: "Dépôt du bilan annuel pour le blogue de SocraticDev"
date: 2020-09-04
author: "SocraticDev"
image: ../../images/board-meeting.jpg
tags:
  - blogue
is_archived: true
---

L'actuel site web du blogue de SocraticDev fut mis en ligne il y a un peu moins d'un an : le `17 octobre 2019`. Auparavant, le blogue profitait d'un hébergement gratuit sur la plate-forme `wordpress.com`. Malgré la facilité de mettre un site en ligne et y ajouter du contenu, je désirais avoir un contrôle absolu sur mon contenu. En tant que programmeur, il n'y a pas vraiment d'excuse pour ne pas prendre en charge la construction et la mise en ligne de son blogue personnel. La création d'un site de blogue personnel est d'ailleurs le projet de base pour tous les frameworks JavaScript disponible sur le marché 😉

> "Pour la langue, le mieux est d’en maîtriser plusieurs, le texto et le français par exemple. Concernant les blogs, ma position est simple. Jamais dans l’histoire de l’humanité on a autant écrit. C’est une vraie révolution, la parole est répartie de façon plus équitable. C’est dommage pour les aristocrates du verbe qui perdent leurs privilèges, mais je m’en réjouis !"
>
> <cite>--François Bégaudeau</cite>

#### Avantages à prendre le contrôle sur son blogue personnel :

- être propriétaire de son contenu;
- ne pas ennuyer ses lecteurs avec de la publicité;
- maîtriser une nouvelle façon de programmer
  - un site web statique ouvert au grand public est très différent d'une application web connectée à une base de données
  - apprendre à se soumettre avec humilité à un framework JavaScript, utiliser ses modules, écrire des fichiers `MarkDown`, lire la documentation et ... `ça va bien aller`
- mieux comprendre comment le web fonctionne :
  - achat et gestion de nom de domaines;
  - utilisation d'un certificat de sécurité `TLS`
  - utilisation d'un pipeline de déploiement continu (`CI/CD`)
  - choisir d'héberger son site sur un `CDN` parce que c'est vraiment mieux 🌎
  - utilisation de métriques pour déterminer comment ajouter de la valeur à son site web :
    - [Google Analytics](https://analytics.google.com) pour connaître l'origine de ses lecteurs, le temps passé sur chacune des pages, s'ils reviennent visiter le site, etc
    - [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=fr) pour mesurer la performance de son site web ainsi que suivre les suggestions offerts pour améliorer la vitesse de chargement et l'expérience utilisateur

#### Quelques features implémentées et des bogues résolus

Le site web du blogue de SocraticDev est propulsé par le framework [GatsbyJS](https://developers.google.com/speed/pagespeed/insights/?hl=fr). En fier programmeur, je n'ai pas utilisé le projet _boilerplate_ inclus pour la création d'un blogue. J'ai plutôt suivi un tutoriel en ligne où un développeur aguéri nous guide vers un site performant et bien conçu.

Ce développeur-pédagogue avait eu la bonne idée de proposer l'utilisation de pastilles contenant les sujets traités dans un post. Cela permet de lister, dans une page indépendante, les différents sujets traités. Ensuite, l'utilisateur peut cliquer sur un sujet qui l'intéresse et consulter une liste de billets portant sur ce sujet. Le seul hic était que je voulais voir la liste des sujets en ordre décroissant de fréquence. Par exemple, je voulais voir la pastille "Technologie" tout en haut car la plupart des billets parlent de technos alors que le sujet "Interview" doit demeurer en bas car je n'ai conduis qu'une seule interview à ce jour. Pour ce faire, j'ai dû créer une petite fonction de tri sur mesure ... qui utilise l'algorithme `BubbleSort` 😎 Parce que ca fonctionne !

Cet été, en mettant à jour mes dépendances avec `npm`, les hyperliens internes au site ont tout bonnement cesser de fonctionner. Avec l'aide de [Bernie](http://vezquex.com/) et de Google j'ai rapidement trouvé la solution au problème. La morale de l'histoire : en utilisant beaucoup de librairies externes, en mettant ses dépendances à jour régulièrement il est facile de remédier rapidement aux `breaking changes`.

#### Que nous réserve l'avenir ?

D'autres `issues` furent crées pour l'avenir : un `dark theme` dynamique permettant à mes lecteurs insomniaques de préserver leurs petits yeux. J'anticipe le besoin de retravailler la pagination des billets car le visuel n'est pas joli sur mobile ... Du côté technique, il est possible que je refasse totalement le site afin de m'amuser avec une autre technologie.

J'aimerais conduire davantage d'interviews. Je crois que parler à des gens ayant différentes expériences du métier nous aide à mieux comprendre notre domaine ainsi que faire des liens avec nos propres expériences. L'interview avec [ptdel](https://socratic.dev/question-et-reponse-avec-un-professionnel-en-devops) m'a permis de mieux connaître ce développeur américain. Nous gardons toujours contact jusqu'à ce jour.

Au sujet de projets, l'acquisition d'un [serveur vps](https://www.linode.com/) me motive à développer de nouveaux projets et expérimenter à souhait. À partir de ce serveur, j'utilise le domaine [dailybuild.org](https://dailybuild.org/) comme vitrine de la communauté de programmeurs #dailybuild et des `cron job` y roulent quotidiennement pour visiter des sites d'emploi et sauvegarder des offres pertinentes pour moi.

Sinon voici une liste de sujets que j'aimerais aborder :

- [Lexicon](https://www.lexiconbranding.com/) : une firme de branding influente qui trouve des noms sympas pour vos produits;
- est-ce que `jQuery` est vraiment mort ?;
- le concept de `geo fencing`;
- `Concurrency, threading` et parallélisme;
- `Langages dédiés` ("domain specific languages);
- `Graph API`;
- Est-ce que ca existe vraiment un développeur 'FullStack' ?;
- Les `enquêtes juridico-informatiques` ("Digital Forensics");
- etc.

#### Remerciements

Je veux d'abord remercier la gang de [snipcart](https://snipcart.com/fr) qui a mis sur pied un meet-up mensuel pour parler du `JamStack` et aider les programmeurs de la ville de Québec à apprivoiser cette technologie.

[MrRoach](https://twitter.com/eggbertx) a fait un super travail en améliorant le logo original que j'avais fait produire via [Fiverr](https://www.fiverr.com/). J'adore travailler avec des fichiers `SVG` 🎉

Je remercie aussi les lecteurs. Surtout ceux qui prennent le temps de m'écrire un petit mot. Vous n'avez pas idée comme c'est beaucoup plus apprécié que les graphiques de l'app `Google Analytics` !
