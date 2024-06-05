---
title: "En 2024, il faut vraiment cesser de partager du texte via des captures d'écran!"
date: 2024-06-05
author: "socraticDev"
image: ../../images/pastebin-proj.png
tags:
  - technologie
  - productivité
---

Plusieurs systèmes de base de données, surtout les bd "no-sql", offrent la
possibilité d'assigner un `TTL` à chacun des items insérées. La fonctionnalité
de _Time To live_ est habituellement utilisée pour le cycle de vie d'items
rendus disponible à partir de système de cache comme un `cdn` ou du `dns`.

Mais une base de données c'est fait pour conserver des données... pour
toujours, non??

### le projet Pastebin

Mon projet [poor man cloud-native
pastebin](https://github.com/socraticDevBlog/pastebin)
avait d'abord pour object de créer un outil de travail utile en parasitant
l'offre Free Tier d'AWS

Une Pastebin c'est un endroit sur le web où des utilisateurs peuvent
sauvegarder des morceaux de texte pour ensuite les partager via un URL. C'est un
outil très utilisé par les adeptes d'IRC (Internet Relay Chat). Ces réseaux
sociaux primitifs ne tolèrent pas la transmission de longs textes. Pour
transmettre plusieurs phrases ou un bout de code informatique, il y est coutume
d'utiliser une Pastebin

### augmenter la productivité des informaticiens

La plupart des gens qui travaillent en informatique sont appelés à manipuler
quotidiennement des fichiers de texte contenant du code, des scripts, ou des
configurations. Surtout, ils sont appelés à transporter ces fichiers d'un
serveur à l'autre. Et la plupart du temps, faire sortir ou faire rentrer du
code d'un serveur à l'autre représente une gymnastique considérable

Tout serveur connecté à internet a accès à un Pastebin pour faciliter ce
transport. Par exemple, si je veux extraire un long message d'erreur trouvé sur
un serveur pour le communiquer à un collègue, quoi de mieux que de le
sauvegarder dans un Pastebin et transmettre son URL à mon collègue.

Prendre une capture d'écran d'un message d'erreur est un acte très gentil, mais
potentiellement frustrant pour celui qui doit se débrouiller pour travailler
avec !

### confidentialité

Par sécurité, je tiens à encrypter toutes les données que j'envoi sur des
serveurs qui ne m'appartiennent pas

Il existe déjà bien sûr des Pastebin public et gratuit. Étant donné que
j'ignore ce que leurs propriétaires font avec les données que les utilisateurs
y envoient, je juge que le seul Pastebin utilisable est celui dont vous
contrôlez le code source et la base de données

Avec [poor man cloud-native
pastebin](https://github.com/socraticDevBlog/pastebin),
vous avez non seulement accès au code source de l'application, mais aussi au
code utilisé pour provisionner l'infrastructure cloud sur AWS ainsi que le code
des pipelines de livraison

La communauté Dailybuild utilise librement ma Pastebin via son site web:
https://dailybuild.org/pastebin. Pour ceux qui utilisent cette Pastebin je
garantie ces mesures:

- Seulement les gens avec qui vous partagez l'URL de vos pastes y auront accès
- Vos Pastes ne seront conservés que pendant 3 jours
- Votre adresse IP est hashée avant d'être sauvegardée avec votre Paste
- Les logs applicatifs contenant votre adresse IP sont purgés après 7 jours

### TTL sur DynamoDB

Il n'y a aucune raison de conserver tous les Pastes dans mon instance de
DynamoDB

Comme je n'ai ni le temps ni le désir d'optimiser certaines requêtes coûteuses,
je préfère garder la table "Paste" la plus petite possible

En assignant un _Time To Live_(`TTL`) à chacun des items enregistrés, je
délègue la responsabilité de détruire ponctuellement des items à DynamoDB. Et
ces opérations se font sans frais. Alors qu'il y a des coûts pour des
opérations manuelles.

Comme cette fonctionnalité est configurée via le code d'infrastructure
Terraform, ça donne une raison de plus de faire confiance en mon produit, non??

```
resource "aws_lambda_function" "apigw_lambda_ddb" {
  function_name = "${var.app_name}-${random_string.random.id}"

  runtime = var.python_runtime

  environment {
    variables = {
      DDB_TABLE     = var.dynamodb_table,
      PASTE_TTL     = 259200, # a paste self-deletes 3 days after insert
      BASE_URL      = var.api_base_url
    }
  }
}
```

### Self-host ta propre Pastebin

Si jamais me faire confiance n'est pas une option, alors il vous est possible
de prendre mon code source et déployer la Pastebin dans votre propre compte AWS

### Conclusion

Peu importe la façon dont vous décidez d'utiliser une Pastebin, je vous assure
que vous allez faire des gains en termes de productivité et de qualité du
travail produit

En 2024, il faut vraiment cesser de partager du texte via des captures d'écran
!

### sources

- https://github.com/socraticDevBlog/pastebin
- https://www.wikiwand.com/en/Pastebin
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html

