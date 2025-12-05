---
title: "Qu'est-ce que Salt ?"
date: 2020-08-16
author: "SocraticDev"
image: ../../images/saltstack.png
tags:
  - technologie
  - productivité
is_archived: true
---

`SaltStack` est une plate-forme hyper rapide assurant le provisionnement et le contrôle de ressources informatiques distribuées. `Salt Cloud` est un outil de gestion de configuration qui permet aux utilisateurs de provisionner des systèmes sur des hôtes en infonuagique (_cloud_) ou des hyperviseurs. Lors de l'installation, `Salt Cloud` installe `Salt` sur tous les systèmes provisionnés par défaut. Cela permet à l'utilisateur de mettre les systèmes dans l'état souhaité pendant l'approvisionnement.

`Salt` a été publié en novembre 2011 et `LinkedIn` fut la première grande organisation à l'adopter.

J'ai pris connaissance de `Salt` en écoutant le podcast [The Hacks] (https://www.saltstack.com/the-hacks/): un podcast techno hébergé par le fondateur de Salt, Thomas Hatch, et Jimmy Chonga, un débutant en technologie et ancien animateur radio.

N'étant pas spécialisé en gestion d'infrastructure, j'ai interrogé un pro du devops à propos de _Salt_ et il m'a dit que c'était ['based'](https://www.urbandictionary.com/define.php?term=Based). Il s'est frotté à `Salt` en aidant une organisation à configurer son infrastructure et il était satisfait du produit.

`SaltStack` développe une solution pour la gestion de systèmes complexes à grande échelle. `SaltStack` est la société qui a créé et maintient le projet `Open Salt` et développe et vend le logiciel, les services et le support aux entreprises. Suffisamment simple pour paramétrer en quelques minutes, suffisamment évolutif pour gérer des dizaines de milliers de serveurs et suffisamment rapide pour communiquer avec eux en quelques secondes.

`Salt` est une nouvelle approche de la gestion des infrastructures basée sur un bus de communication dynamique. `Salt` peut être utilisé pour l'orchestration basée sur les données, l'exécution à distance pour toute infrastructure, la gestion de la configuration pour n'importe quelle pile d'applications, et bien plus encore.

Les alternatives viables à `Salt` sont `Chef`, `Puppet` et `Ansible`.

Cependant, les adopteurs deviennent généralement des fans inconditionnels du produit. Un CTO souligne que `Salt` était le meilleur produit pour gérer son infrastructure à grande échelle basée sur `Windows Server`. La facilité de maintenance est principalement garantie grâce à "un bon mécanisme de reporting qui permet de visualiser facilement toutes les opérations".

Par rapport aux concurrents, `Salt` demeure le meilleur produit quand la **scalability** et la **résilience** sont les préoccupations les plus importantes pour votre organisation.

##### sources

[https://github.com/saltstack/salt](https://github.com/saltstack/salt)

[Chef vs Puppet vs Ansible vs Saltstack | Configuration Management Tools | DevOps Tools | Simplilearn](https://www.youtube.com/watch?v=_TVNCTK808I)

[Configure and Use `Salt` Cloud and Cloud Maps to Provision Systems](https://www.linode.com/docs/applications/configuration-management/configure-and-use-salt-cloud-and-cloud-maps-to-provision-systems/)

[https://www.wikiwand.com/en/Salt\_(software)](<https://www.wikiwand.com/en/Salt_(software)>)

[https://www.wikiwand.com/en/Infrastructure_as_code](https://www.wikiwand.com/en/Infrastructure_as_code)

[https://www.wikiwand.com/en/ZeroMQ](https://www.wikiwand.com/en/ZeroMQ)
