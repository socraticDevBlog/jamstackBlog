---
title: "Fix-it-twice - Répondre par la bouche du produit"
date: 2022-04-17
author: "SocraticDev"
image: ../../images/firefighting.png
tags:
  - productivité
  - foss
---

Si votre workflow consiste à éteindre des feux à répétition. Surtout si la cause des problèmes est connue, mais jamais corrigée. Vous faites partie du problème.

`Fix-it-twice` est une expression qui signifie que tout bogue doit être réglé à sa racine pour ne plus qu'il se reproduise.

À ce sujet, le bloggeur [Yegor Bugayenko](https://www.yegor256.com/) aka `@yegor256` propose le workflow suivant:

1. le développeur lit la description du problème
2. le développeur répare le produit
3. le développeur répond au demander en lui disant que le problème a été réglé et lui demander de réessayer.

## le réflexe humain
> "J'ai découvert votre plugin et voulu l'essayer. J'ai fait un petite preuve de concept avec peu de code, mais ça ne fonctionne pas. Pouvez-vous m'aider?"

Quand un utilisateur rapporte un bogue à un développeur, le réflexe du développeur est de vouloir aider cet utilisateur.

Ce type d'interaction est naturelle dans le monde du logiciel libre ("free and open-source"). `@yegor256` insiste que ce genre d'interaction est aussi courante en entreprise ; pour des développeurs qui développent des outils destinés à des équipes de développement internes, ou même des produits destinés aux clients de l'entreprise.

Donc à chacune des demandes d'aide, le développeur stoppe ses activités courantes et se lance à la rescousse du demandeur d'aide.

> "Et réagir ainsi est une erreur" <cite>@yegor256</cite> 

Réagir en aidant les gens individuellement est une erreur car ce n'est pas _évolutif_ ("scalable"). Si le produit gagne en popularité, alors ces demandes individuelles d'assistance ne saurait que croître. Bien sûr, les utilisateurs vont être heureux de recevoir de l'assistance, mais pendant ce temps le produit ne sera pas amélioré. Les développeurs maîtrisant le produit sont désormais occupés à faire du service à la clientèle au lieu d'être occupé à améliorer le produit.

À chaque fois que le développeur propose des explications via email, chat ou téléphone avec l'utilisateur, il se tire dans le pied.

> "N'expliquez pas le produit à l'utilisateur. Améliorez la documentation et réparez le produit." <cite>@yegor256</cite> 

## le réflexe produit

`@yegor256` recommande de réagir autrement aux demandes et questions provenant d'utilisateurs. Au lieu de commencer à les aider individuellement, le développeur devrait réfléchir à la raison de la demande.

>"Pourquoi demande-t-il de l'aide? En quoi est-ce que le produit est fautif? Comment l'utilisateur en est-il venu à ce problème; jusqu'à écrire un email pour demander de l'aide?
>
>Si un utilisateur a besoin d'aide c'est qu'il y a un problème avec le produit. Réparez le problème à sa racine." <cite>@yegor256</cite>

Bien sûr le développeur sait comment aider rapidemment l'utilisateur. Il connaît bien le produit. En plus il va se sentir bien d'avoir aidé quelqu'un. Mais c'est une erreur car le problème n'est pas réglé à sa racine.

## conclusion
> "La documentation du produit a été ajustée. S'il-vous-plaît réessayez en suivant la nouvelle procédure."

La véritable assistance qu'un développeur apporte à l'utilisateur est de régler les problèmes du produit. Par exemple, ajouter de la documentation ou la corriger. Ensuite, il peut répondre à l'utilisateur:


## source

[M191: When a bug report is not as simple as it can be, don't fix it](https://soundcloud.com/yegor256/m191-when-a-bug-report-is-not-as-simple-as-it-can-be-dont-fix-it)