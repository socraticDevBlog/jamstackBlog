---
title: "La petite révolution .Net Core"
date: 2020-08-06
author: "SocraticDev"
image: ../../images/coreRazor.png
tags:
  - programmation
  - technologie
---

`.Net Core` (prononcé "dot net core") est à la fois un framework de développement open-source et un environnement d'exécution (_runtime_) arrimé sur une machine virtuelle. C'est-à-dire que le code `VB`, `C#` ou `F#` est compilé en un langage-machine intermédiaire, `bytecode`, pour ensuite être exécuté par le runtime `CLR` (Common Library Runtime). Contrairement à du code compilé en code-machine (`C` ou `C++`), la machine virtuelle gère elle-même les particularités du hardware sur lequel l'application est exécutée. Aussi, diverses optimisations deviennent possibles dont celles assurées par la _compilation à la volée_ `JIT` (Just In Time compilation).

Juin 2016 marque la première version de `.Net Core`. La grande nouveauté est de permettre l'exécution d'applications sur d'autres systèmes d'exploitation que `Microsoft Windows` : `Linux` et `MacOs`. De plus, il n'est plus nécessaire d'avoir installé le runtime `.Net` sur les machines hôtes. Il est possible de livrer l'application en mode _stand alone_. C'est-à-dire qu'on accompagne l'exécutable de toutes ses dépendances. `.Net Core` permet le développement d'applications véritablement portables.

> Avec `.Net Core`, le développement de l'éditeur de code `Visual Studio Code` ainsi qu'avec l'achat de `Github.com` et `npm`, Microsoft s'aligne aggressivement sur le créneau `open-source`.

C'est un immense avantage pour les programmeurs oeuvrants déjà dans l'environnement `Microsoft`. La stratégie du géant de Redmond leur ouvre la porte à l'environnement Linux. Bien que Microsoft domine le domaine des postes clients, l'univers de la computation sérieuse abritée sur des serveurs robustes et performants est le fief de `Linux`. Par exemple, l'utilisation du framework de développement web `ASP MVC` permettant de développer facilement des solutions web évolutives ne sera plus limitée à un environnement de production coûteux (licences dispendieuses de `Microsoft Server`), mais pourra être mis en production sur un simple serveur Linux à peu de frais.

Une fois installée sur le poste du développeur, la `sdk` de `.Net Core` est accessible via la ligne de commande. La création de projets, de librairies et la compilation se fait aisément en ligne de commande. Cela a pour avantage de nous libérer du mammouth Visual Studio pour adopter un éditeur de texte plus léger.

Il n'en demeure pas moins que le passage à `.Net Core` nécessite des adaptations. Par exemple, en `ASP NET`, on était habitué de pouvoir visualiser nos modification apportées dans le code d'une `View` (fichiers `.cshtml`) en rechargeant la page. Toutefois, en `Razor core`, nous aurons à adapter notre fichier de démarrage `startup.cs` afin d'injecter spécifiquement la composante de compilation razor à notre container de services.

> Adoptez `.Net Core` le plus tôt possible et apprenez à vous adapter sans stress. N'attendez pas d'être obligé à apprendre. Car `.Net Core` deviendra le runtime privilégié à partir de la version `.Net 5`.

En plus d'ajuster votre expérience de développement pour la rendre semblable à ce que vous viviez dans avec le `.Net` standard, il faut absolument aller plus loin et s'inspirer de l'expérience de développement des framework `JavaScript` propulsés par `NodeJS` : `VueJs`, `GatsbyJS`, etc. Par exemple, en plus de corriger, en `.Net core`, le fait que la View n'était pas compilée au runtime, j'ai ajouté le plugin `Westwind.AspnetCore.LiveReload` afin de provoquer un rafraîchissement de la page à chaque fois que le système remarque une différence dans la View.

La touche F5 de votre clavier vous remerciera !

##### Sources

[.NET Core](https://www.wikiwand.com/fr/.NET_Core)

[Getting started with .NET for Linux](https://opensource.com/article/17/11/net-linux)

[Introducing .NET 5](https://devblogs.microsoft.com/dotnet/introducing-net-5/)

[Live Reload Middleware for ASP.NET Core](https://github.com/RickStrahl/Westwind.AspnetCore.LiveReload)

[Building a Live Reload Middleware Component for ASP.NET Core](https://weblog.west-wind.com/posts/2019/Jun/03/Building-Live-Reload-Middleware-for-ASPNET-Core#configuration)
