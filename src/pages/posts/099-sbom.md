---
title: "Software Bill of Materials: documenter votre chaîne d'approvisionnement logicielle"
date: 2022-09-12
author: "SocraticDev"
image: ../../images/sbom.png
tags:
  - idée
  - sécurité
---

Un SBOM est le graphe des dépendances d'un logiciel de façon à pouvoir
identifier ce qui se trouve dans sa chaîne d'approvisionnement.

J'ai déjà ouvert la porte à l'idée que les développeurs de logiciels
s'inspirent du processus de développement de produits physiques dans un billet
publié en décembre 2021: [S'inspirer du processus de développement de produits
physiques](https://socratic.dev/sinspirer-du-processus-de-developpement-de-produits-physiques).

Depuis, je suis à l'affût de toute publication qui supportant cette opinion.

Le concept de "bill of materials" ou "BOM" est fondamental dans l'industrie
manufacturière. Il s'agit de la liste des matériaux requis pour la fabrication
d'un produit physique. Cette liste d'ingrédients est utile à différents aspects
de la conception, de la production et du service asscocié au produit durant sa
vie utile.

L'idée d'un "Software BOM" ou "SBOM" est en train de gagner de la traction dans
la sphère du logiciel. C'est-à-dire une liste exhaustive de toutes les
composantes (librairies, binaires, etc.) nécessaire à un produit logiciel.

## qu'est-ce qu'un BOM

"BOM" est l'acronyme de "bill of materials" et se traduit par "nomenclature
logistique" en français".

> Une nomenclature (en anglais Bill Of Materials ou BOM) est une structure
> arborescente permettant de représenter l'emboitement des articles composants
> (articles "enfants") pour former les produits ou articles composés (articles
> "parents") . Le nombre de niveaux d'une nomenclature est fonction de
> l'organisation de la production. Une nomenclature peut être utilisée comme
> objet virtuel pour échanger des besoins entre des partenaires de fabrication
> (nomenclature étendue), ou confinée à une seule usine ou atelier de
> fabrication. En d'autres termes, c'est le recensement structuré de l'ensemble
> des articles qui composent un produit.
> <cite>Wikipedia.fr(2022-09-12), "Nomenclature_(logistique)"</cite>

## Software Bill of Materials

La forme et le contenu d'un SBOM est analogue au traditionnel BOM du secteur
manufacturier. C'est une liste ou un inventaire de toutes les dépendances d'un
système logiciel déployé en production: 

Les librairies open-source et les sous-systèmes provenant d'une source tierce.
Leurs versions. L'état d'application des patches. Et leur licence d'utilisation.

## le gouvernement américain en tête du peloton

L'attaque de Solarwinds découverte en décembre 2020 ciblait plusieurs agences
publiques américaines, plusieurs organisations privées ainsi que des
institutions étrangères. 

>Début 2020, des pirates ont secrètement pénétré dans les systèmes de SolarWind, basé au Texas, et ont ajouté du code malveillant dans le système logiciel de l'entreprise. Le système, appelé "Orion", est largement utilisé par les entreprises pour gérer les ressources informatiques. Solarwinds compte 33 000 clients qui utilisent Orion, selon les documents de la SEC.
>
>La plupart des fournisseurs de logiciels envoient régulièrement des mises à
>jour à leurs systèmes, qu'il s'agisse de corriger un bogue ou d'ajouter de
>nouvelles fonctionnalités. SolarWinds ne fait pas exception. Dès mars 2020,
>SolarWinds a involontairement envoyé des mises à jour logicielles à ses
>clients qui incluaient le code piraté.
><cite>Business Insider.com, "Solarwinds hack explained"</cite>

Le gouvernement américain a récemment introduit un décret exécutif exigeant la
production de "SBOM" pour tout produit logiciel développé par un
sous-contracteur.

## décembre 2021 - log4j

Moins de 1% des organisations documentent leurs chaînes d'approvisionnement
logicielle.

Un peu avant le départ des vacances l'an dernier, la plupart des opérateurs de
systèmes informatisés ont
dû mettre des bouchées doubles pour traiter une vulnérabilité critique
découverte dans la populaire librairie de logging 
[log4j](https://theconversation.com/what-is-log4j-a-cybersecurity-expert-explains-the-latest-internet-vulnerability-how-bad-it-is-and-whats-at-stake-173896).

C'est ça le monde de la TI sans SBOM. Beaucoup de stress et beaucoup de travail
manuel.

Les quelques acteurs ayant une saine gestion de leur chaîne d'approvisionnement
ont traité la situation avec calme et rigueur. Ils savaient exactement sur quels systèmes
ils utilisaient la librairie log4j. Pendant que leurs confrères scannaient des
dizaines de serveurs, ils avaient déjà patché leurs systèmes !  

## les étapes fondamentales

Le développement et l'adoption d'un standard commun pour le "Software Bill Of
Materials" est un enjeu fondamental pour l'amélioration de la transparence de
la chaîne d'approvisionnement logicielle. Un format standard pour faciliter
l'échange d'information, par exemple.

Ensuite, il faut automatiser la génération du SBOM. À chaque déploiement on
doit générer un nouveau SBOM. De plus en plus d'organisation déploie en
production plusieurs fois par jour. Alors, il va de soi que la génération du
SBOM aie lieu dans le processus de déploiement continu (CI/CD).

## arguments contre le SBOM ?

"Pourquoi voudriez-vous ne pas savoir de quoi vos systèmes logiciels sont
composés ? Quels avantages de ne pas être en mesure d'informer vos clients sur
ce que les logiciels que vous leur vendez contient ?".

On tombe rapidement dans l'absurde.

Avoir en main un SBOM à jour va vous faire économiser des centaines d'heures de
travail. Va vous permettre d'avoir des produits plus sécuritaires et
facile à faire évoluer. 

En plus d'alléger vos coûts d'opération, ayez en tête la rétention d'employé, la diminution du
stress, la diminution du sentiment d'impuissance de vos employés de TI envers
des systèmes qu'ils ne comprennent pas et ne sont pas en mesure de faire évoluer.

## sources

https://malicious.life/episode/episode-183/

https://www.cisa.gov/sbom

https://www.wikiwand.com/en/Bill_of_materials

https://www.wikiwand.com/fr/Nomenclature_(logistique)

https://www.businessinsider.com/solarwinds-hack-explained-government-agencies-cyber-security-2020-12
