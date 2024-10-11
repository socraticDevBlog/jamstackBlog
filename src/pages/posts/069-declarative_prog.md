---
title: "Les bienfaits de la programmation déclarative"
date: 2021-05-16
author: "SocraticDev"
image: ../../images/declarative_vs_imperative.png
tags:
  - programmation
  - productivité
---

Travailler à l'aide de certains outils comme `React`, `Terraform` et `SQL` permet au programmeur de se concentrer sur la réalisation d'une tâche sans se soucier des effets de bord. `React` permet moduler automatiquement la couche présentation selon les modifications apportées à l'état de la page, `Terraform` permet de monter et paramétriser une infrastructure chez un fournisseur en infonuagique et `SQL` permet de récupérer des données dans une base de données relationnelle. Ces outils procurent les abstractions nécessaires au programmeur pour atteindre ses objectifs. En empêchant le programmeur de préciser l'implémentation et d'écrire du code de bas niveau, ces outils limitent aussi les risques de générer des effets de bords et autres bogues.

> "En informatique, la programmation déclarative est un paradigme de programmation - un style de construction de la structure et des éléments de programmes informatiques - qui exprime la logique d'un calcul sans décrire son flux de contrôle."

En résumé, la programmation déclarative s'oppose à la programmation impérative. La programmation impérative est la façon traditionnelle de programmer. Le langage de programmation y offre des types primitifs (int, bool, string, etc.) et des structures de décision (boucles, if, etc.) pour finalement laisser le programmeur se débrouiller pour instruire la machine à l'aide d'algorithmes.

En programmation déclarative, on ne laisse pas au programmeur la liberté de définir le comportement du programme à l'aide d'algoritmes (ou très peu). Le programmeur définit ce qui doit être fait ; le résultat final. Et laisse au langage ou au framework le soin de le réaliser. Ici, le langage offre lui aussi des types primitifs. Mais ce sont des types beaucoup plus près du domaine d'affaires. En d'autres termes, ce sont des langages de programmation spécifiques au domaine (`Domain-Specific languages`).

Par exemple, `Terraform` est un framework de programmation déclarative permettant de monter et provisionner des infrastructures en infonuagique. `Terraform` utilise le `HashiCorp Configuration Language`. C'est un langage spécifique offrant davantage de flexibilité que les fichiers de configuration statiques `json` ou `yaml` tout en demeurant déclaratif afin d'être utilisé dans des contextes complexes où la possibilité d'effets de bord ne peuvent être tolérés.

> `HCL` tente de trouver un compromis entre les formats de sérialisation génériques tels que `JSON` et les formats de configuration construits autour de langages de programmation complets tels que `Ruby`. La syntaxe `HCL` est conçue pour être facilement lue et écrite par des humains, et permet l'usage d'une logique déclarative dans des applications plus complexes.

`Terraform` est architecturé de façon modulaire afin de soutenir la programmation `Infrastructure as Code` sur tous les plans. Grâce à la notion de `Providers`, le programmeur a rapidement accès aux API publics de différents fournisseurs de service comme `AWS`, `Azure`, `GitHub`, `Akamai`, `Oracle Cloud`, `Alibaba`, `VMware`, etc. Chacun des `Providers` offrent des blocs de constructions clef en main pour répondre aux besoins du programmeur. Par exemple, sur `AWS`, nous devons d'abord déployer et paramétriser un `VPC` (Virtual private cloud) ainsi qu'appliquer des groupes de sécurité à notre réseautique. Nous trouverons donc des modules prêts à être utilisés pour faire lever ces ressources dans un projet de façon consistante et sans risque d'erreur.

```
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "my-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  enable_vpn_gateway = true

  tags = {
    Terraform = "true"
    Environment = "dev"
  }
}
```

```
resource "aws_vpc" "mainvpc" {
  cidr_block = "10.1.0.0/16"
}

resource "aws_default_security_group" "default" {
  vpc_id = aws_vpc.mainvpc.id

  ingress {
    protocol  = -1
    self      = true
    from_port = 0
    to_port   = 0
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```

##### sources

[https://www.wikiwand.com/en/Declarative_programming](https://www.wikiwand.com/en/Declarative_programming)

[https://github.com/hashicorp/hcl](https://github.com/hashicorp/hcl)

[https://registry.terraform.io/](https://registry.terraform.io/)
