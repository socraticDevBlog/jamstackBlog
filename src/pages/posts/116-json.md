---
title: "JSON : n'assumez rien sauf une chose"
date: 2024-01-27
author: "socraticDev"
image: ../../images/json.png
tags:
  - programmation
  - devops
---

`JSON` est un acronyme signifiant "JavaScript Object Notation". C'est une
structure de données complexe native dans le langage de programmation
JavaScript et y représente habituellement un objet. C'est surtout une structure
de données structurant de l'information sous la forme d'une chaîne de caractère
(`string`). Surement en vertu de sa simplicitié, le `JSON` est devenu le format
le plus utilisé pour représenter de l'information dans un transfert entre deux
systèmes.

Programmeurs: n'assumez rien lorsqu'il s'agit de JSON. Surtout si vous ne
programmez pas en JavaScript. Ce n'est pas parce que vous avez une chaîne de
caractères qui ressemble à JSON que votre langage de programmation préféré va pouvoir
la traiter sans un traitement préliminaire.

En JavaScript, vous avez de la chance: le langage le prend
nativement en charge

```javascript
let a = { foo: "bar" }

console.log(a.foo)

// bar
```

L'équivalent en Python ne fonctionnera pas

```python

a = {"foo": "bar"}

print(a.foo)

# Traceback (most recent call last):
#  File "<stdin>", line 1, in <module>
# AttributeError: 'dict' object has no attribute 'foo'

```

Python ne connaît pas JSON nativement, on doit importer la librairie `json`
pour être en mesure de le manipuler dans le code

```python
import json

json_string = '{"foo": "bar"}'

json_object = json.loads(json_string)

print(json_object["foo"])

# bar
```

La librairie `json` permet de désérialiser la chaîne de caractères
`"{'foo': 'bar'}"` en un objet programmatique. Une fois désérialisé, le
programmeur sera capable d'effectuer différentes opérations sur l'object.
Opérations qui seraient beaucoup plus difficiles à effectuer directement à
partir d'une chaîne de caractères !

### courage ! assumez que vous serez en mesure de traiter du JSON dans la plupart des langages de programmation

La plupart des langages de programmation ont des fonctions spécialisées pour
sérialiser et désérialiser le `JSON`. Si c'est votre première fois, alors c'est
normal de galérer un peu. Il faut lire la documentation du langage et parfois faire
quelques essais avant que ça fonctionne.

`JSON` est une façon de représenter de l'information. Il apparaît le plus sous
la forme d'une chaîne de caractère (string) qui devra être désérialisé en objet
pour être compris par le code.

Mais, dans votre travail quotidien, vous allez réaliser que certains programmes
demandent à recevoir du `JSON` sous la forme d'une _string_, alors que d'autres
exigent que vous l'ayiez désérialisé. N'assumez rien et garder l'oeil ouvert
pour vous adapter.

Par exemple, cette [ressource Terraform](https://registry.terraform.io/providers/mongodb/mongodbatlas/latest/docs/resources/auditing)(langage de programmation utilisé pour
provisionner et configurer des ressources infonuagiques) demande à recevoir un
`JSON` sous la forme d'une _string_. On voit que le programmeur utilise la
fonction utilitaire `jsonencode` pour construire un object JSON clairement
indenté pour faciliter la lecture du code. Il laisse le soin au compilateur de le
transformer en chaîne de caractères lors de l'exécution du code.

```terraform
resource "mongodbatlas_auditing" "this" {
  enabled    = true
  project_id = module.atlas_project.id
  audit_authorization_success = true

  audit_filter = jsonencode({
    "$and" : [
      {
        "roles" : {
          "$elemMatch" : {
            "role" : "readWriteAll",
            "db" : "panamaPapers"
          }
        }
      },
      {
        "$or" : [
          {
            "atype" : "authCheck",
            "param.command" : {
              "$in" : [
                "aggregate",
                "mapReduce",
                "delete",
                "eval",
                "findAndModify",
                "insert",
                "update",
                "resetError"
              ]
            }
          },
          {
            "atype" : {
              "$in" : [
                "createCollection",
                "createDatabase",
                "createIndex",
                "renameCollection",
                "dropCollection",
                "dropDatabase",
                "dropIndex",
                "createUser",
                "dropUser",
                "dropAllUsersFromDatabase",
                "updateUser",
                "grantRolesToUser"
              ]
            }
          }
        ]
      }
    ]
  })
}
```
