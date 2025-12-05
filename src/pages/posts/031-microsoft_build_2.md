---
title: "Microsoft Build 2020 : l'application de communication Teams"
date: 2020-05-23
author: "SocraticDev"
image: ../../images/hanselman.png
tags:
  - technologie
  - programmation
is_archived: true
---

Microsoft a profité de cette conférence internationale de deux jours tenue 100% à distance pour souligner les forces de son application de communication et de collaboration `Teams`. L'application fut lancée en 2016 pour remplacer graduellement `Skype`.

Scott Hanselman, développeur et porte-parole de Microsoft, a exposé deux cas d'utilisation forts intéressants de l'application offerte avec l'abonnement à la suite d'applications de bureau `Office 365`.

`Teams` offre sensiblement les mêmes fonctionalités sur un téléphone intelligent. Une personne invitée à la présentation fut jointe par le présentateur alors qu'elle était à l'extérieur de la maison. Elle a tout de même pu prendre l'appel grâce à l'application `Teams mobile` installée sur son téléphone intelligent. Encore plus impressionnant, elle fut en mesure d'effectuer un partage d'écran depuis son appareil !

`Teams` s'intégre avec les objets connectés à Internet (_IoT_).
Par exemple, depuis la webcam du présentateur, nous pouvions voir un bandeau lumineux près de la porte de son bureau. Il s'agit d'un object connecté (_IoT_) à son compte d'usager Microsoft. Quand `Teams` détecte qu'il est occupé par une réunion à distance, alors le bandeau lumineux prend la couleur rouge. Quand la plage horaire de l'utilisateur est libre, alors le bandeau lumineux redevient vert. Excellente idée pour gérer les interactions avec les autres occupants de la maison !

L'extensibilité de `Teams` via la connexion à des applications tiers est une force indéniable. Il y a trois principales façons d'interfacer avec l'application : les `Connectors`, les _bots_ et les `tabs`. Un connector est une façon pour l'utilisateur de s'abonner à un service (_publish-and-subscribe method_). Par exemple, le service de gestion de bases de code `GitHub` publie un `connector` afin d'offrir des fonctionnalités utiles à une équipe de développeurs. Ainsi, un développeur s'occupant d'effectuer des revues de code et d'autoriser des _pull requests_ sera averti via `Teams` dès qu'un collègue aura publié le correctif d'un bogue urgent. Comme `Teams` est disponible sur mobile, il pourra réviser le code et autoriser un déploiement de n'importe où !

Un `tab` est un onglet disponible dans `Teams`. Par défaut, un membre d'une équipe a accès à l'onglet destiné à la conversation ainsi qu'à celui des fichiers partagés par l'équipe. Il est toutefois possible d'ajouter des onglets afin de mettre de l'avant un fichier en particulier. Par exemple, si un document doit être fréquemment consulté par les membres d'une équipe, il est recommandé de créer un onglet qui lui sera dédié. Cela permet d'y accéder encore plus rapidement.

Il est aussi possible d'ajouter des applications complètes à un `tab`. Par exemple, lors de la conférence, on nous a présenté une application développée en quelques jours, par un hôpital italien. Cette petite application a pour utilité de tenir un inventaire serré des patients, des lits disponibles, du personnel et du matériel disponible. Un petit miracle !

#### Prochain post

Dans un prochain post, je traiterai des thèmes de l'infonuagique `Azure`, de la notion de `Power Apps`, du développement web de demain avec _WebAssembly_ grâce au framework `Blazor` et davantage !
