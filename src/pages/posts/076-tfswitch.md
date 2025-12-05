---
title: "switch Terraform version à la volée"
date: 2021-09-03
author: "SocraticDev"
image: ../../images/tfswitch.png
tags:
  - technologie
  - productivité
is_archived: true
---

Que ce soit sur votre machine locale ou sur le pipeline CI/CD, le `tfswitch` de warrensbox vous permet de changer la version de Terraform à la volée.

## qu'est-ce que Terraform?

> Terraform est un environnement logiciel d'« infrastructure as code » publié en open-source par la société HashiCorp. Cet outil permet d'automatiser la construction des ressources d'une infrastructure de centre de données comme un réseau, des machines virtuelles, un groupe de sécurité ou une base de données.
>
> L'infrastructure est décrite sous forme du langage de configuration HCL (Hashicorp Configuration Language). Il est aussi possible d'utiliser le langage JSON. [https://fr.wikipedia.org/wiki/Terraform\_(logiciel)](<https://fr.wikipedia.org/wiki/Terraform_(logiciel)>)

Fondamentalement, lorsque vous choisissez d'utiliser des ressources de fournisseurs de cloud telles qu'Amazon « aws » et Microsoft « Azure », le moyen le plus efficace de provisionner des ressources consiste à écrire et à exécuter du code. Terraform est un langage déclaratif de haut niveau spécialement conçu pour cela.

## toute base de code de production contiendra du code écrit dans des versions plus ou moins obsolètes de Terraform

La cadence de sortie de Terraform est fulgurante. Très probablement, le code que vous avez écrit il y a quelques mois est de nombreuses versions obsolètes par rapport à celle d'aujourd'hui. Pire encore, puisque la plupart du code Terraform est défini et oublié, ce n'est pas comme si vous aviez la possibilité de mettre régulièrement à jour vos dépendances afin de suivre le rythme. Habituellement, vous ne découvrez qu'il y a rupture de changement qu'une fois que vous devez revenir dans le code pour changer quelque chose.

Que diriez-vous d'un outil qui vous permettra de contourner ce problème en étant capable de changer de version de Terraform à la volée ?

> L'outil de ligne de commande `tfswitch` vous permet de basculer entre différentes versions de Terraform. `tfswitch` archive les versions que vous avez déjà utilisées et télécharge toute version requise si elle est manquante. Le processus d'installation est minimal et facile. Une fois installé, sélectionnez simplement la version dont vous avez besoin dans la liste déroulante et commencez à utiliser Terraform.

Dans la philosophie Unix de l'outillage, `tfswitch` fait une seule chose et le fait bien.

Sur n'importe quelle machine sur laquelle Terraform n'est pas installé, je ne pense même pas à installer une version actuelle de Terraform à partir du site Web de HashiCorp. Je préfèere installer `tfswitch`, ce qui signifie que j'installe toutes les versions passées, actuelles et futures de Terraform.

fais-le!

`traduit par Google Translate`

## sources

[https://tfswitch.warrensbox.com](https://tfswitch.warrensbox.com)
