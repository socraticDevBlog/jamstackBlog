---
title: "Expect : automatisation et semi-automatisation de vos processus sous Linux"
date: 2020-07-30
author: "SocraticDev"
image: ../../images/expect.png
tags:
  - linux
  - productivité
---

``Expect`` est un utilitaire basé sur ``TCL`` qui excelle dans l'automatisaton de tâches interactives.

> ``Expect`` est un programme qui "parle" avec d'autres programmes interactifs selon un scénario. En interprétant le script, ``Expect`` sait ce qu'il peut attendre d'un programme et quelle devrait être la bonne réponse. Un langage interprété fournit des branches et des structures de contrôle de haut niveau pour diriger le dialogue. En plus, l'utilisateur peut prendre le contrôle et interagir directement quand il le souhaite et, par la suite, redonner le contrôle au script.
>
> <cite>-- man page pour ``Expect``</cite>

Le petit script ci-dessous (**fortement déconseillé**) fournit automatiquement votre mot de passe d'administrateur quand le système en fait la demande. Cet exemple illustre l'aspect interactif de l'automatisation avec ``Expect``. Le script démarre, exécute certaines actions et redonne le contrôle à l'utilisateur.

```
expect -c '
spawn bash
sleep 0.3
send -- "sudo ls\n"
expect "password for"
send -- "<Your Password>\n"
interact
exit
'
```

##### Quelques cas d'utilisation

- Fiabilité et perennité : il est utilisé comme outil de testing automatisé par des composantes critiques de ``GNUL/Linux`` comme ``gcc`` et ``LLVM``. Ca vaut donc le coût d'investir temps et effort pour apprendre à bien l'utiliser et l'intégrer à son _workflow_;

- ``Expect`` était utilisé, dans le temps des connexions par modem téléphoniques, pour que le serveur se charge d'appeler l'utilisateur et, ainsi, lui éviter des frais pour l'appel;

- Exécution de tâches habituellement accomplies par des humains car elles impliquesnt des périodes d'inactivité, des déplacements de curseurs, etc;

- Déclencher automatiquement la complétion par ``tab`` et passer ensuite la main à l'utilisateur;

- Invoquer automatiquement des raccouris clavier dans ``bash``;

- Interagir naturellement avec des programmes comme un être humain le ferait;

- Combler les lacunes d'un programme où il manquerait des façons d'interagir programmatiquement avec lui, mais permettant par contre à un utilisateur humain de le faire de façon manuelle;

- Automatisation partielle : effectuer certaines opérations et ensuite passer la main à l'utilisateur humain.

##### Pourquoi ``Expect`` n'est pas davantage connu ?

- C'est une application très ecclectique. D'abord son nom, ``Expect``, n'est vraiment pas génial en termes de ``SEO``. Plutôt difficile d'effectuer des recherches sur ``Google`` en utilisant ce mot-clé.

- Ensuite, c'est un interpréteur qui ne possède pas vraiment son propre langage. ``Expect`` utilise ``TCL`` tout en lui ajoutant des extensions. Ainsi, il est parfois difficile de déterminer si nous avons affaire à du ``TCL`` vanille ou une particularité de ``Expect``.

- Malgré sa faible présence sur le web, en lisant la documentation en lien avec ``TCL`` on découvre un univers de possibilités insoupçonnées à exploiter pour vos systèmes ``UNIX`` ou ``GNU/Linux`` 

##### Sources

[Don Libes' Expect: A Surprisingly Underappreciated Unix Automation Tool](https://blog.robertelder.org/don-libes-expect-unix-automation-tool/)

[https://wiki.tcl-lang.org/page/Expect](https://wiki.tcl-lang.org/page/Expect)