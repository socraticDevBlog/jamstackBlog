---
title: "Tu n'as qu'à utiliser Postgresql comme cache au lieu de Redis"
date: 2026-02-28
author: "SocraticDev"
image: ../../images/pgsql-cache-blog.png
tags:
  - technologie
  - devops
is_archived: false
---

_Le blog post de 2023 de Martin Heinz, "You Don't Need a Dedicated Cache Service - PostgreSQL as a Cache", je l'ai lu au complet. Et #DevOps ou pas, j'ai testé l'implémentation pour voir ce qui en retournait._

L'envers de la passion pour la technologie c'est le risque d'adopter des
croyances inadéquates à propos de sujets qu'on ne maîtrise pas complètement. Un
exemple, je lis un post sur Hackernews à propos du système de base de
données Postgresql. Postgresql peut aussi agir comme sous-système de cache
(pensons à Redis) et même comme un message broker. C'est tout benef, on se
débarrasse de Redis et de RabbitMQ et on s'offre la semaine de quatre jours.

Et Postgresql ça peut aussi me dire l'heure de départ du prochain autobus vers Montréal
?

### c'est quoi les requis ?

Avant d'énerver tout le monde avec la dernière révélation reçue entre deux
bouchées dans une toast au beurre de peanut, il faut voir si ça fonctionne.

On ouvre les yeux et les oreilles pour déterminer ce que c'est qu'une cache et
c'est quoi les requis. Un cache comme Redis est un système qui stocke
temporairement des données en mémoire pour les rendre accessibles beaucoup plus
rapidement que si on allait les chercher dans la base de données principale.

Alors ça nous fait une belle jambe de dire qu'on va utiliser une base de
données pour mettre des items en cache. Tout de même on note que les éléments en
cache sont stockés de façon temporaires et que la principale qualité d'un
sous-système de cache c'est la performance en lecture.

Ensuite, pour l'aspect temporaire, nous avons besoin d'une mécanique qui libère
les items en mémoire après un certains temps.

### la vérité est dans le blog

L'astuce c'est de prolonger le petit-déjeuner en mangeant une banane ou des
petits fruits. Comme ça on peut aller plus loin que le titre accrocheur du
blog et prendre le temps de lire pour en apprendre davantage.

Le blog post de 2023 Martin Heinz, "You Don't Need a Dedicated Cache Service -
PostgreSQL as a Cache", je l'ai lu au complet. Et [#DevOps](https://socratic.dev/tag/devops/) ou pas, j'ai testé
l'implémentation pour voir ce qui en retournait.

```sql
CREATE UNLOGGED TABLE cache (
    id serial PRIMARY KEY,
    key text UNIQUE NOT NULL,
    value jsonb,
    inserted_at timestamp);
```

Premièrement, ce n'est pas _plug and play_. La première étape est plutôt
simple. On crée une table SQL `cache` en lui donnant l'attribut `unlogged`. Une
table UNLOGGED est une table dont les écritures ne sont pas enregistrées dans
le journal de transactions (WAL), ce qui la rend plus rapide mais fait en sorte
qu’elle peut perdre ses données en cas de crash du serveur.

Pas trop épeurant, non ?

Ensuite, pour s'assurer que les items ne vont pas faire grossir la table
`cache` on doit implémenter une  mécanique qui gère le time-to-live
(`ttl`) des éléments gardés en mémoire. Martin Heinz propose d'utiliser la fonctionnalité `pg_cron` pour
configurer des événements planifiés (_scheduled_) qui vont déclencher une
procédure stockée SQL qui va effacer tous les items plus vieux que le
paramètre passé.

Juste le mot "procédure stockée" pour moi évoque le même sentiment que la
madeleine de Proust.

En 2026, imaginons que votre ingénieur DevOps le moins grognon initie la
nouvelle vague de développeurs au mystère occulte des procédures stockées dans une
base de données SQL. 

Remettre du dentifrice dans le tube, c'est encore plus
difficile que de faire atterrir une fusée à la verticale, non?

### SWOT la proposition de Martin Heinz

#### forces (Strenght)

Votre équipe DevOps peine à se tenir la tête hors de l'eau. Vous avez déjà des
serveurs Postgresql disponibles. En moins d'une matinée, on peut vous monter
une table de cache avec la mécanique TTL et rendre ça disponible aux
développeurs.

Pas besoin de provisionner de nouvelles ressources ni de s'engager à les
supporter à long terme.

#### faiblesses (Weaknesses)

C'est pas Redis. Les développeurs vont bien voir qu'ils doivent interagir avec
la "cache" avec leur ORM préféré. 

Ils ne vont pas pouvoir ajouter "Redis" à leur CV.

Aussi, jusqu'à preuve du contraire, ça risque d'être moins performant que
Redis.

#### opportunités (Opportunities)

Avec l'arrivée du Cloud et des services managed, on a vu disparaître les DBAs
(databases administrator). En amenant vos ingénieurs DevOps à bidouiller dans
PGSQL, vous allez peut-être réussir à leur attribuer la responsabilité de
l'administration des serveurs de base de données en douce!

#### risques (Risks)

Si vous savez que votre système est habituellement fortement sollicité, doit
offrir une performance parfaite en temps réel et doit être facilement
évolutif (scalable), alors il faut éviter de se laisser séduire par les sirènes du web et
sélectionner Redis.

#### C'est quand même cool, je veux essayer

- Docker Desktop
- git
- DBeaver ou n'importe quel IDE qui permet de se connecter à un serveur `pgsql`
- le runtime `dotnet` et sa CLI

Si tu as ces trois requis, clone mon GitHub repository [`sandboxes`](https://github.com/socraticDevBlog/sandboxes/) et va dans le
dossier `/pgsql-cache`. Ouvre le fichier `README.md` en mode Preview (si tu
n'es pas masochiste) et suit les instructions.

J'ai monté un petit laboratoire qui va provisionner un serveur pgsql containerisé et configurer une base de
données avec une table `cache` et une table `cron` pour le `ttl`. Ensuite, tu vas pouvoir
exécuter une petite API codée en `C#` qui va te montrer comment on peut interagir
avec la cache pgsql.

### sources

[You Don't Need a Dedicated Cache Service - PostgreSQL as a Cache](https://www.martinheinz.dev/blog/105)

[pgsql database used as a
cache](https://github.com/socraticDevBlog/sandboxes/tree/main/pgsql-cache)
