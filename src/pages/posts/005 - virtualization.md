---
title: Apprendre et expérimenter sans frais grâce à la virtualisation
date: 2019-11-03
author: "SocraticDev"
image: ../../images/virtualization.png
tags:
  - technologie
  - linux
---

L'avenir de l'informatique passe par la virtualisation. Il existe présentement deux modèles dominants : la virtualisation par hyperviseurs et la virtualisation par conteneurs. Ces deux approches permettent de rentabiliser les ressources matérielles (serveurs et connexions au réseau) en permettant de rouler de façon isolée de multiples 'OS clients' sur la même machine physisique. Ces _clients_ ont l'impression de rouler de façon autonome sur leur propre quincaillerie physiques.

> Mais ce n'est pas le cas !

Grâce à l'hyperviseur, la machine virtuelle (OS client) roule comme un processus système et obtient un accès virtualisé aux ressources matérielles de la machine hôte. Les plate-formes hyperviseurs les plus connues sont celles exploitées par AWS (XEN et KVM), VMware ESXi et Hyper-V de Microsoft.

Les conteneurs (_containers_) sont des serveurs virtuels ultra-légers roulants comme des OS complets. Ils ont même accès au kernel de l'OS hôte. Un nouveau conteneur peut être généré et déployé en quelques secondes à partir d'un simple script de configuration. Il est ensuite facilement rendu disponible sur les réseaux. La technologie la plus connue est _Docker_. Cette technologie est fortement inspirée du projet Linux Container (LXC).

## Apprendre sur des systèmes étrangers

L'utilisation de la virtualisation est ultra présente dans le monde éducatif. Lorsqu'on débute une formation dans une nouvelle technologie, le formateur distribue habituellement des copies d'une machine virtuelle (VM) qu'il a configuré lui-même. Cela permet d'éviter les pertes de temps engendrées par l'installation et la configuration d'un nouvel environnement de développement. De toute façon, il serait trop dispendieux d'équiper une salle de cours avec une vingtaine de serveurs prêts à l'emploi !

En utilisant l'application VirtualBox d'Oracle, nous sommes en mesure de rouler de façon virtuelle n'importe quel système d'exploitation (Windows, MacOs, Linux). En formation, il est habituel d'utiliser l'OS d'un serveur Linux (CentOS). Par exemple, lors d'une formation en Big Data, le formateur nous a fourni une machine CentOS complètement configurée pour utiliser l'écosystème Hadoop. Comme la majorité des participants n'étaient pas experts en administration Linux, cela nous a certainement permis de passer rapidement aux choses sérieuses !

Malgré tout, si vous faites cavalier seul, il est plutôt facile de créer vos propres machines virtuelles. Il suffit de télécharger le système d'exploitation désiré en format `.iso`. Ubuntu, CentOs, Fedora, Arch, Kali offrent gratuitement ce fichier sur leurs sites web respectifs. Ensuite, on crée une nouvelle machine virtuelle avec VirtualBox. On lance la machine virtuelle et pendant le démarrage, on installe l'OS en liant le processus au fichier `.iso`. Il suffit de laisser le système se charger et suivre les instructions pour le paramétrage initial.

### Quelques astuces pour tirer profit de votre VirtualBox

Avec l'expérience on apprend de ses erreurs. Voici quelques conseils qui vous permettrons d'éviter les difficultés habituelles.

#### Conserver une librairie de machines vierges (templates)

Chacune des nouvelles machines virtuelles créées devraient être gardée telle quelle. C'est-à-dire, on n'utilise pas immédiatement la machine qu'on vient de créer. On garde cette première machine _vanille_. On clone cette première machine et on effectue nos tests et expérimentation avec ce clone. Ainsi, à la première gaffe, on peut le supprimer et s'en créer un nouveau à partir de la VM initiale.

Il existe deux façon de cloner une VM. Le premier s'appelle 'link'. Le clone partagera certains fichiers de base avec la VM initiale. C'est l'option simple et rapide. Elle a comme inconvénient de rendre le clone difficilement portable. Si vous prévoyez utiliser votre VM sur différents PC hôte, il faudra effectuer un 'full clone' afin d'avoir une machine totalement autonome.

#### Paramètres à vérifier avant de démarrer la VM

La machine virtuelle utilise la mémoire vive (ram), le processeur et l'adapteur réseau du PC hôte. Habituellement, les serveurs linux demande peu de RAM. Donc, la quantité initiale par défaut de 768mb de RAM est suffisante. De toute façon, si votre PC n'a que 8gig de RAM, vous ne devriez pas en allouer plus de la moitié à vos VMs. Même chose pour les processeurs.

La VM utilisera aussi votre carte réseau. Il est plus sécuritaire d'utiliser le protocole NAT pour accéder à internet. Toutefois, si vous travaillez en mode _laboratoire_ avec d'autres PC, vous pourrez préférer le protocole _bridge_ afin que que votre machine virtuelle utilise la même adresse IP que le PC hôte.

Dans un environnement de laboratoire ou dans une classe d'informatique, comme vous allez probablement interagir avec d'autres VMs identiques à la vôtre, il faudra modifier l'adresse MAC virtuelle de votre VM afin de lui garantir une identité propre. L'adresse MAC est un code unique et (habituellement!) non-modifiable attribué à tout matériel informatique. Or, dans le cas de machines virtuelles, nous avons le droit de tricher en attribuant une adresse MAC aléatoire à notre machine.

#### Faciliter votre travail avec votre machine virtuelle sur VirtualBox

Si vous prévoyez travailler sur le PC hôte et votre VM en même temps, il est souhaitable d'installer les 'guest-additions' sur votre VM. Ces additions permettent de partager des répertoires entre le PC hôte et la VM. Il sera plus facile d'utiliser la souris sur les deux machines. Vous aurez la possibilité de faire du _drag&drop_ de fichiers entre les deux machines. Et cetera !

VirtualBox intègre aussi les fonctionnalités de l'application en ligne de commande. L'administration d'un cluster de VMs en réseau s'en trouve ainsi facilité. Il suffit d'utiliser la commande `$ vboxmanage` dans le terminal de la machine hôte.

#### Éteindre la machine virtuelle proprement

Pour éteindre la machine virtuelle, il faut absolument le faire DANS la machine virtuelle. Beaucoup trop d'étudiants ferment simplement l'application VirtualBox. Faire ceci éteint effectivement la machine virtuelle ... mais c'est exactement comme si on éteignait un serveur physique en débranchant le cordon d'alimentation électrique. Ça peut briser définitivement la machine virtuelle.

Pour éteindre la machine virtuelle : sous linux, en ligne de commande, il suffit de faire :

``$ sudo init 0`
