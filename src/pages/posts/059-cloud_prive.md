---
title: "Vos données dans votre propre cloud personnel"
date: 2021-02-09
author: "SocraticDev"
image: ../../images/personal-cloud.png
tags:
  - technologie
  - sécurité
  - productivité
is_archived: false
---

Vos données valent leur pesant d'or, alors pourquoi les confier à n'importe quel géant d'Internet ? Google docs et Microsoft 365 assurent la facilité d'utilisation et la haute disponibilité. Sachez toutefois que vous déposez vos documents dans ces applications infonuagiques en espérant qu'ils sont en sécurité. Peut-être qu'ils le sont. Peut-être pas...

Si vous avez un fort volume de données ou si vous exigez un certain niveau de sécurité pour vos documents, l'utilisation d'un `NAS` (network attached storage) pourrait répondre à vos besoins. Héberger un grand volume de données en infonuagique est dispendieux. Entreposer des documents non-encryptés en infonuagique publique est risqué.

Le stockage en réseau local est incontournable pour les entreprises et les grandes organisations. Afin de fluidifier le travail, on y entrepose et rend disponible tout document essentiel au bon fonctionnement des affaires. La plupart du temps, ce stockage se présente sous la forme d'un lecteur supplémentaire disponible sur votre PC lorsque vous êtes connecté au réseau interne de l'entreprise. Les utilisateurs y maintiennent habituellement un ordre rigoureux, des administrateurs de systèmes gèrent les différentes permissions en lecture et écriture, et un système automatisé effectue un backup régulier de l'ensemble des données.

##### pourquoi avoir un `NAS` chez soi?

Différents besoins motivent l'utilisation d'un `NAS` à domicile. Beaucoup de collectionneurs de film et autres fichiers numériques utilisent un `NAS` afin d'entreposer leur collection. En ajoutant un système de redondance `RAID`, ils s'assurent une protection contre des disques durs défectueux.

Pour ma part, j'utilise un `NAS` car il m'offre une source centralisée de données. Parce que je travaille à partir de plusieurs ordinateurs, la duplication des fichiers était devenue problématique. Grâce au `NAS`, je peux accéder au même fichier via n'importe quel appareil connecté au réseau local.

##### peser le pour et le contre

contre :

- Il est plus facile de centraliser ses données en utilisant de l'espace-disque dans le cloud public comme `dropbox` ou `Google drive`;
- Ce système ne fonctionne pas bien pour ceux qui travaillent sur la route ou à l'extérieur du domicile;
- Ce système demande des efforts d'administration supplémentaires : mise à jour, backup, etc.

pour :

- Obtenir à faible coût un grand espace de stockage;
- Conserver et gérer soi-même ses données personnelles;
- Encrypter toutes ses données personnelles (fortement suggéré);
- Les taux de transfert de données sur un réseau local tournent autour de 100 mb/s, il n'y a presqu'aucune différence entre charger un fichier situé sur son PC que le même fichier vivant sur le `NAS`;
- Réduire son empreinte écologique: un petit `NAS` roulant sous linux consomme à peu près pas d'électricité.

##### stratégie pour conserver vos données

1. Conservez tous vos fichiers sur le `NAS`. Ne gardez pas de copies sur différents postes de travail;
2. Classifiez et gardez vos fichiers en ordre;
3. Effectuez des backups réguliers : tout fichier précieux devrait avoir 3 copies. Une version courante sur votre `NAS`, une copie dans un backup stocké sur une autre machine. Une troisième copie, encryptée, stockée dans le cloud public (ou sur un disque dur situé à un autre endroit que votre domicile);
4. Encryptez le disque dur en entier. Les `NAS` modernes sont assez puissants pour encrypter et décrypter vos données à la volée sans perte de performance.

##### conclusion

L'utilisation d'un `NAS` n'est pas un remède magique mais bien un outil précieux pour faciliter votre vie numérique. L'installation et l'administration d'un tel système vous demandera du temps, mais se révélera bénéfique.

Essayez-le !
