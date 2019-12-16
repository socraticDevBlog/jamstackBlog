---
title: TDD et code modulaire
date: 2019-12-15
author: "SocraticDev"
image: ../../images/jasmineTestRunner.webp
tags:
  - productivité
  - programmation
---

À la conférence "Architecture web maintenable et testable" présentée au Agile Tour Québec 2019, le conférencier a dit quelque chose qui m'a vigoureusement fait hocher la tête et réchauffé le coeur:

``L'important ce n'est pas de faire du TDD en tout temps. L'important c'est de savoir comment développer par les tests afin d'éviter le problème trop fréquent du code non-modulaire et difficilement testable.``

Le TDD c'est l'acronyme de 'développement propulsé par les tests'. Plus particulièment les tests unitaires automatisés. On résume cette pratique à une séquence d'étapes répétées en boucle :

1. Écrire le test
2. Écrire assez de code pour que le test puisse être roulé ... et échouer
3. Écrire du code pour faire passer le test
4. Refactorer
5. Recommencer

Cette pratique génère indéniablement du code modulaire et peu couplé. Le code est modulaire car il se limite à remplir le contrat (_specs_) établi par le test. Le contrat établit deux choses : les entrées et la sortie. Entre les deux, il y a une boite noire où le programmeur est le seul maître à bord. Peu importe que les entrées proviennent d'un appel à la base de donnée, à un service web ou du _parsing_ d'une page web avec jQuery, la sortie devra toujours être la même que celle établie dans les scénarios de tests unitaires. Ainsi, la classe testée est fortement découplée et modulaire : si aujourd'hui, les données en entrées proviennent d'un appel à la base de données, dans six mois, le même code effectuera un travail tout aussi valide avec des données provenant d'une requête à un service web.

## Écris-tu du code fortement couplé et non-modulaire ?

Le code _legacy_ et beaucoup de code écrit sans harnais de tests est habituellement fortement couplé et difficile à maintenir. Ce code ne met pas à profit les librairies d'injection de dépendance (ex. [Autofac en C#](https://autofac.org/)), les _frameworks_ de tests unitaires et les concepts de la programmation orientée-objet (polymorphisme, composition, encapsulation, niveaux d'abstraction, etc).

On définit habituellement le code _legacy_ comme "du code n'étant pas couvert par des test unitaires".
Aussi, c'est souvent du code qui effectue des lectures et écritures (I/0) et qui utilise les ressources du système sur lequel il roule (ex.: ``DateTime.Now``). Bref du code qui s'ennuie tout seul.

Malheureusement, ce genre de code est habituellement plutôt facile à lire et à produire. Tout se trouve pêle-mêle dans le même fichier. En lisant le code de haut en bas, le programmeur comprend rapidement ce qui se passe et se sent apte à effectuer rapidement un correctif en rajoutant quelques lignes de code de plus à travers du code existant.

## Implémenter le TDD à votre quotidien 

Il faut d'abord apprendre à maîtriser un framework de tests unitaires : il y a xUnit en C#, jUnit en Java, Jasmine en JavaScript. Essayez de coder une classe 'Calculatrice' et assurez-vous d'écrire un test simulant une  division par zéro.  [https://www.dotnetdojo.com/kata-1-calculatrice-tdd/](https://www.dotnetdojo.com/kata-1-calculatrice-tdd/)

Ensuite, il faudra vous familiariser avec la notion d'inversion de contrôle et apprendre à utiliser un conteneur d'injection de dépendance. Comme vos classes sont des modules spécialisés dans une tâche, vous les injecterez dans vos classes généralistes selon vos besoins. Ça sonne complexe, mais je vous jure que vous allez être capable de faire fonctionner Autofac en moins de trois quarts d'heure !

Finalement, libérez-vous de votre mentalité d'esclave et cessez de trouver des excuses pour ne pas écrire des tests unitaires : 

1 - N'attendez pas que votre supérieur vous demande des tests unitaires. Votre supérieur vise l'efficacité et il vous fait confiance pour gérer votre base de code.

2 - Selon des [études](https://link.springer.com/article/10.1007/s10664-008-9062-z), le TDD permet de réduire les défectuosités de 40% à 90% relativement à des équipes ne pratiquant pas le TDD. 

3- Cessez de vous mentir à vous même en disant 'Je vais écrire les codes plus tard' : ça n'arrivera pas ! Écrire les scénarios de test en premier est beaucoup plus effectif. De [40% à 80% moins de bogues en production](https://www.computer.org/csdl/magazine/so/2007/03/s3024/13rRUygT7kK)!

### Il n'y a pas de raison de ne pas faire du TDD

Testez bande de [paresseux](https://1u594u31nvw01cjgyx4gvsr15ge-wpengine.netdna-ssl.com/fr/files/2011/11/sloth2-600x450.jpg) !

### Source 
Félix-Antoine Bourbonnais, [Architecture web maintenable et testable](https://agilequebec.ca/calendrier/architecture-web-maintenable-et-testable-avec-react/), Agile Tour Québec 2019

Nachiappan Nagappan(2008), "Realizing quality improvement through test driven development: results and experiences of four industrial teams", https://link.springer.com/article/10.1007/s10664-008-9062-z

IEEE Software (May/June 2007), "Guest Editors' Introduction: TDD--The Art of Fearless Programming", pp. 24-30, 
https://www.computer.org/csdl/magazine/so/2007/03/s3024/13rRUygT7kK


