---
title: Extraction de données sur le web
date: 2020-04-11
author: "SocraticDev"
image: ../../images/harvester.jpg
tags:
  - web
  - productivité
---

Tout intervenant dans le monde du logiciel et du web sait à quel point le _data_, les données, est le nerf de la guerre.
Autrefois un domaine réservé au modélisateur et à l'administrateur de bases de données, le savoir-faire en matière de gestion des données distingue les amateurs des professionnels. Les organisations sont de plus en plus propulsées par les données (_data driven_). Pour tirer son épingle du jeu, il m'apparaît évident qu'une expertise dans l'ingestion, la transformation et l'exploitation des données vaut son pesant d'or.

Une grande partie des données publiquement disponibles sont présentes sur les milliards de pages web qui populent l'internet. Un peu comme le pétrole de l'Alberta, ces données ne sont pas immédiatement disponibles à l'extraction car elles se trouvent prisonnières du ``HTML`` et, encore pire, du ``JavaScript`` de pages générées dynamiquement sur l'appareil de l'utilisateur. Toutefois, si des données sont accessibles depuis un navigateur web, alors elles peuvent être extraites par un processus automatisé.

#### La technique du Web Scraping

Le _Web Scraping_, ou "extraction du contenu de site web", est une technique consistant à parcourir des pages web de façon automatisé par le biais de scripts ou de programmes afin d'en extraire certaines informations. Ces informations peuvent ensuite être filtrées et rediffusées sur des pages web spécialisées. Le plus souvent, on enregistrera les résultats dans une base de données en vue de poursuivre un travail de raffinage et d'analyse.

Cette technique a parfois mauvaise presse car elle fut souvent utilisée à mauvais escient. Par exemple, un programmeur à l'éthique douteuse pouvait extraire des données de sites web et rediffusant leur contenu sur son propre site web à faible coût. Google va même jusqu'à pénaliser cette pratique en retirant les sites web fautifs de ses résultats de recherche. D'autres sites web se dotent de services spécialisés dans la détection de 'robots' et interdisent l'accès au contenu à des utilisateurs non-humains.

Pourtant, cette technique un peu artisanale permet à de nombreuses organisations d'exploiter ses propres données à faible coût. En effet, la façon la plus élégante d'acquérir des données est d'utiliser une API (_interface de programmation d'application_) spécialement conçue à cet effet. Une API expose des fonctions utilitaires habituellement via le protocole HTTP. Par exemple, pour récupérer les données des ventes pour le mois d'avril 2020, je peux invoquer l'API ainsi : ``GetVentesParMoisEtAnnee(4, 2020)``. Toutefois le développement d'une API nécessite une équipe de développement dédiée à cette tâche et ensuite, elle doit être documentée, maintenue et gardée opérationnelle. Cela entraîne des coûts beaucoup plus élevés que les quelques heures passées par un programmeur expérimenté à rédiger un script de web scraping.

Le web scraping permet d'automatiser une recherche à faible coût. Par exemple, un programmeur est en amour avec un certain modèle de Porsche 911. Afin d'en obtenir une au meilleur prix, il se promet d'être patient et attendre la bonne occasion. Il sait aussi que les voitures disponibles aux États-Unis sont parfois meilleurs marchés. Il se propose donc d'étendre sa recherche au marché américain. Ainsi, il rédigera quelques scripts récoltant les annonces qui l'intéresse depuis plusieurs sites de vente de voitures usagées. Pour encore plus d'efficacité, il programmera l'envoi de courriels quotidiens l'informant des nouvelles annonces pertinentes.

Un script de web scraping codé en ``Python`` est habituellement court. En découplant l'accès données et la fonction principale du script de la logique spécifique à chaque page web, on rédige des scripts d'environ cinquante lignes en peu de temps.

#### Sources
[https://fr.wikipedia.org/wiki/Web_scraping](https://fr.wikipedia.org/wiki/Web_scraping)