---
title: Question et réponse avec un professionnel en DevOps
date: 2019-12-28
author: "SocraticDev"
image: ../../images/ptdel.png
tags:
  - interview
  - technologie
---

Patrick Thomas Delaney est un développeur full-stack focusant sur le développement d'applications 'cloud-native'. Il code autant en Python qu'en C# et s'occupe d'architecture de solution et design d'application. Il travaille présentement pour _Ahead_ : un compagnie techno basée à Chicago et dédiée à aider d'autres compagnies à construire l'infrastructure de leurs affaires numériques.

##### Dis-nous en davantage sur toi : ton parcours, tes passions. Tout ce qui est pertinent à ta carrière actuelle. Qu'est-ce qui t'a amené à travailler dans l'infonuagique ?

(_Patrick Thomas Delaney_) Je vais vous épargner une histoire d'origine ennuyeuse mais je mentionnerai que _The Matrix_ est sorti quand j'étais un garçon de onze ans. Ce film m'a donné l'idée que les ordinateurs sont perpetuellement excitants et que les filles adorent les pirates. Cela s'est avéré être tout à fait vrai, et ma carrière n'a vraiment pas été une sorte d'éveil difficile me prouvant le contraire.

##### Tous les développeurs ont une histoire d'échec. Un événement significatif où ils ont raté ou manqué une opportunité. Habituellement, nous en tirons des enseignements et nous nous améliorons. As-tu une histoire d'échec à partager? Qu'en as-tu appris?

(_Ptdel_) Bien que les échecs soient inhérents au développement, j'ai un cas dont je me retrouve à rire avec le recul. L'une de mes premières tâches facturables pour un client m'a amené à supprimer tout son site Web pendant quinze heures pendant le week-end (leurs heures de pointe). La cause principale était un seul caractère mal placé dans un fichier de configuration _yaml_ pour le sel. Comme par hasard, le prestataire de surveillance du client a également flanché. Ils avaient donc l'impression qu'ils n'étaient jamais tombés hors-ligne qu'une heure (une coïncidence dont j'étais reconnaissant). Bien qu'embarrassant au départ, c'était vraiment juste un exemple que l'erreur humaine est toujours un facteur de risque, mais qui peut être atténué avec les _processus_ et l'_automatisation_.

##### Nous entendons que «devops» et «Agile» sont la solution à tous les problèmes de développement logiciel. Dans le même temps, ce que je vois autour de moi dans l’organisation du travail, ce sont des rôles essentiellement distincts et des demandes venant du «haut vers le bas» (cascade). Les rôles sont répartis entre le programmeur, un analyste fonctionnel / commercial, un testeur d'assurance qualité / acceptation et le client. Les bases de données et les opérations sont le fief des administrateurs de base de données, des modélisateurs de données, des analystes de sécurité, des administrateurs système, etc. ?

(_Ptdel_) L'utilisation des heures de développement est extrêmement inefficace dans la plupart des grandes organisations traditionnelles. Un développeur peut écrire une seule ligne de code et se retrouver devant le soumettre à l'ensemble du "système" que vous décrivez pour progresser. Il pourrait facilement arriver qu'ils soient coincés dans les limbes en attendant un résultat pendant une semaine entière. Alors que je voudrais dire que c'est vraiment mauvais, j'ai en fait vu bien pire, comme avoir besoin de planifier des livraisons un mois à l'avance.

Je pense que je peux mieux exprimer les avantages du passage à une méthodologie agile en me parlant d'un de mes anciens clients: une société financière. Ils étaient sur un calendrier de mise en production semestrielle pour les mises à jour majeures. Ces mises à jour majeures ne contenaient pas nécessairement de nouvelles fonctionnalités, mais n'étaient souvent que des tentatives de réduire la dette technique. Ils ont pris six mois de pause afin de mettre pleinement en œuvre un environnement complet adapté au développement agile. Du fait qu'ils ont choisi de sacrifier un cycle de publication pour changer de cap, ils publient désormais régulièrement plus de fonctionnalités et de correctifs en une seule semaine qu'ils n'en avaient cumulé pendant toutes les années précédentes.

##### Quels sont les pièges dont vous avez été témoins au sujet des entreprises traditionnelles qui souhaitent migrer vers le cloud et les devops. Quels sont les problèmes habituels auxquels ils sont confrontés?

(_Ptdel_) Pour le bénéfice de tous, les propriétaires d'entreprise doivent être en mesure de reconnaître quand il y a une véritable raison pour passer à un fournisseur hébergé. Il est extrêmement difficile de justifier le passage au «cloud» si une entreprise conserve toutes ses pratiques traditionnelles centrées sur une infrastructure sur place.

Je vais me débrouiller et ne fournir aucun écueil technique spécifique. Au lieu de cela, je vais décrire des situations que j'ai souvent vécues pendant mon temps en tant que consultant. Nous nous présentions à une entreprise où un département spécifique de l'entreprise allait être le cobaye [pour une transformation agile]. Les clients n'avaient pas vraiment d'exigences précises et beaucoup de membres du personnel étaient toujours redevables de tâches manuelles quotidiennes banales. Ils voyaient souvent l'intérêt de passer à une méthodologie agile, pour finalement réaliser que leur département financier ou l'équipe de sécurité rendait impossible toute tentative réelle de changement. À mi-chemin du projet, d'autres départements prenaient conscience du projet pilote et cherchaient soit à prendre les rênes soit à élargir la portée du projet. Au moment où le contrat avait été épuisé, la portée de la mission était complètement méconnaissable par rapport à l'original et rien n'avait été réalisé à un niveau satisfaisant.

Tout cela est une façon détournée de dire qu'il doit y avoir l'adhésion de tout le monde, et c'est la direction qui doit le communiquer à tout le monde. Si c'est un projet pilote d'une équipe laissée à elle-même, j'espère que les fonds derrière lui sont fongibles ou que la perte est justifiable.

##### De nombreux développeurs se préoccupent principalement du code et des fonctionnalités disponibles dans leur environnement de développement. Nous ne connaissons pas vraiment les pipelines de livraison, l'automatisation, la sécurité et les performances des bases de données, etc. As-tu des suggestions à offrir à de jeunes développeurs qui désirent rester 'pertinent' dans les 15-20 prochaines années ?

(_Ptdel_) Honnêtement, avec l'état des choses aujourd'hui, je n'ai vraiment aucune idée de ce à quoi ressemblerait la pertinence dans quinze ou vingt ans.

Pour ceux qui entrent dans la profession maintenant, ou peut-être essaient de progresser eux-mêmes, je dirais simplement ceci: vous n'êtes pas spécial. Pendant longtemps, les développeurs ont gardé une certaine mystique autour de leur profession, mettant en avant que ce qu'ils font est un défi unique. Bien que cela ait pu être vrai à un moment donné, ce n'est plus le cas. Si vous ne vous familiarisez pas avec l'environnement dans lequel votre code vit et comment contrôler tout cela, je peux vous assurer que quelqu'un d'autre avec plus de motivation le fera et que son avantage sera significatif.

Ayez la volonté d'acquérir des compétences dans de nouvelles choses en sachant que c'est pour votre bien. Enfin, abandonnez tout dogmatisme ou prétention que vous avez sur la façon dont les choses devraient être dans le monde réel et concentrez-vous sur la livraison de résultats concrets.

`L'entrevue a été conduite en anglais et traduite en grande partie par Google Translate`
