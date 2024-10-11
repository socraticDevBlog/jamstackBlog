---
title: "utiliser Terraform sur mon mac"
date: 2021-09-18
author: "SocraticDev"
image: ../../images/tfswitch-mac.jpg
tags:
  - technologie
  - productivité
---

`GNU/Linux` est le système d'opération privilégié pour la gestion d'infrastructure dans l'infonuagique. Toutefois, travailler sur un mac est une expérience plaisante. Alors pourquoi pas installer `Terraform` sur son mac !

Je suggère d'installer `tfswitch` au lieu d'installer la version du site d' `HashiCorp`.

`tfswitch` permet d'installer et switcher à n'importe quelle version de `Terraform` ; versions passées, présentes et futures.

Avec `Homebrew`, il suffit d'exécuter la commande suivante dans le `terminal` :

```
brew install tfswitch
```

#### astuce : ajouter le fichier binaire à votre path

Suite à l'installation de `Terraform` via `tfswitch`, je rencontrai la réponse suivante en tentant d'exécuter `terraform`:

```
terraform version
> zsh: command not found: zsh
```

Où `tfswitch` a-t-il déposé le fichier binaire de `Terraform` ? Voilà la question à se poser.

Dans mon cas, c'était dans un répertoire propre à mon utilisateur:

```
which terraform
> /Users/socraticdev/bin/terraform
```

Il suffit donc d'ajouter ce répertoire `bin` au `PATH`:

```
sudo vi /etc/paths
```

On ajoute à la fin le path complet : `/Users/{votre username}/bin`

On ferme et réouvre le `terminal`.

Ça devrait fonctionner ®️

##### sources

[https://tfswitch.warrensbox.com/Install/](https://tfswitch.warrensbox.com/Install/)
