---
title: "AI curriculum pour DevOps - une série"
date: 2025-08-04
author: "SocraticDev"
image: ../../images/ai-natives.png
tags:
  - croissance
  - ai
  - devops
is_archived: false
---

_Première partie d'une série sur l'intégration de l'intelligence artificielle
dans les pratiques DevOps_

Je crois que la formalisation du titre de développeur opérationnel (ou
spécialiste DevOps) a mûri avec
l'éclosion du cloud computing (infonuagique). 

Une valeur ajoutée par les fournisseurs de cloud publics effet c'était de rationaliser le rôle d'administrateur de système (sysadmin) ainsi
que d'autres postes connexes comme technicien de réseau. Le cloud commercial se
présente comme des blocs de ressource préfabriquées, optimisées out-of-the-box et souvent gérées
(managed) par le fournisseur cloud suivant un SLA déterminé. Il ne resterait donc plus qu'à former des développeurs ou recycler des
administrateurs de système volontaires pour faire le pont entre les
programmeurs (dev) et les opérations (ops).

L'intelligence artificielle générative, c'est-à-dire les IA capables de générer
du texte, du code et des images, vient déranger cette idée. La toute-puissance
du programmeur est remise en question ; un paquet de code peut être généré en
quelques secondes. Même chose du côté des opérations: des problèmes mystérieux
peuvent être débogués et résolus en beaucoup moins de temps grâce à ChatGPT ; c'est prouvé.

### pourquoi les DevOps sont-ils les mieux positionnés pour devenir "AI natifs" ?

Nonobstant que DevOps c'est pas tant une profession qu'une culture entourant
les produits technologiques, je crois que les premiers à devenir des AI natifs
c'est les DevOps d'aujourd'hui. Pourquoi? 

Premièrement parce que les DevOps ont généralement une __mentalité opportuniste__. Ils aiment solutionner des problèmes et sont
naturellement enclin à mettre leurs idées reçues en parenthèse pour adopter des
solutions simples et efficaces comme l'automatisation de processus et le
"tout-par-le-code". 

Deuxièmement parce qu'être développeur opérationnel c'est
moins un titre qu'un état d'esprit. En pivotant vers l'IA le DevOps renforce
cet état d'esprit qui se résume à un pragmatisme de premier ordre.

Surtout, __le principal objectif d'un DevOps c'est le cycle de
développement logiciel (SDLC)__. C'est faire en sorte d'amener des idées à se transformer
en produits et en services qui ajoutent de la valeur pour ses clients. Tout le
reste: l'infrastructure-as-code, les pipelines automatisés et la collaboration
avec les programmeurs ne sont pas des fins en soi. 

L'objectif principal c'est toujours
d'amener un produit ou un service de qualité à des gens qui sont prêts à payer
pour les utiliser. Et ça ne changera pas avec l'IA.

### comment pivoter vers l'IA : une approche pragmatique

C'est drôle, mais l'idée d'embrasser l'intelligence artificielle en tant que
développeur opérationnel, c'est encore controversé. On aime se moquer des
suggestions de l'IA __quand le coupable ce n'est pas tant l'outil que la personne
qui l'utilise.__

Pour moi, pivoter vers l'IA ne veut pas dire de déléguer aveuglément toutes nos tâches à ChatGPT. Ca veut dire d'abord dire d'accepter cet outil en apprenant mieux à
s'en servir. 

- __Maîtriser l'art du prompt engineering__: Comprendre comment optimiser nos
  questions pour obtenir de meilleurs réponses. 
- __Développer un jugement critique__: Savoir déterminer quand utiliser ChatGPT
  et quand prendre le temps de réfléchir et de lire soigneusement la
  documentation. 

Un peu comme quand on est appelé à accomplir une tâche qui nous prend 2 minutes une fois
par 6 mois : est-ce qu'un bon DevOps va passer une semaine à automatiser cette
tâche ou passer son tour ?

### fondements techniques : par où commencer ?

Pour apprendre à mieux utiliser l'IA, il faut commencer par les fondements.

Comme on aime livrer de la valeur rapidement je suggère de sauter quelques chapitres de
l'histoire de l'intelligence artificielle et commencer immédiatement avec le
sujet du jour: 

Le [traitement du langage naturel (Natural Language Processing)](https://www.wikiwand.com/fr/articles/Traitement_automatique_des_langues)
et les [grands modèles de langage (Large Language
Models)](https://www.cloudflare.com/fr-fr/learning/ai/what-is-large-language-model/).
Ces deux concepts représentent le fondement des outils révolutionnaires de
l'intelligence artificielle générative. Comprendre comment ChatGPT fonctionne
nous aidera à mieux l'exploiter tout en sachant gérer ses déficiences.

#### ressources d'apprentissage recommandées

Il existe une myriade de ressources en ligne pour se familiariser avec le NLP
et les LLMs. D'articles de magazine jusqu'à des cours universitaires j'aimerais
choisir des options gratuites qui comprennent des travaux pratiques ainsi
qu'une certaine forme de certification.

[hugging face's natural language processing course (gratuit) avec examens ](https://huggingface.co/learn/nlp-course)

[5 activités d'apprentissage - Introduction to Generative AI Learn Path
(managed by Google Cloud) avec des exercices sur la plateform Vertex AI Studio](https://www.cloudskillsboost.google/paths/118)

### conclusion

J'ai donc proposé l'idée que les DevOps (ou développeurs opérationnels)
présentent des traits professionnels favorables pour pivoter vers un univers où
l'intelligence artificielle a une place primordiale dans la conception et la
livraison de produits et services technologiques

Comme appel à l'action je me propose de suivre deux tracés introductifs
proposés par des organisations réputées en IA: HuggingFace et Google.
Comprendre la technologie derrière des outils révolutionnaires comme ChatGPT
nous permettra d'emblée de mieux les utiliser et ensuite poursuivre notre pivot
en creusant davantage 

Il est encore tôt, mais je crois qu'ensuite nous étudierons les librairies et
frameworks utilisés par les acteurs du domaine (ex.: TensorFlow, PyTorch et
scikit-learn), pour ensuite explorer l'aspect de gestion des données: data
wrangling, ETL et preprocessing avec des outils comme Pandas, NumPy et SQL.
Puis pourquoi ne pas démontrer nos acquis en creusant l'automatisation de
workflows pour des cas d'utilisations réels impliquant des modèles et des APIs
externes

à suivre


<!-- #### librairies et frameworks

Familiarize yourself with popular AI libraries such as TensorFlow, PyTorch, and
scikit-learn. These will help you understand the machine learning
model-building process in greater detail.

#### data wrangling et preprocessing

Understanding how to collect, clean, and transform data is crucial for building
valuable AI products. Learn how to use tools like Pandas, NumPy, and SQL.

### creuser le volet AI automation

#### API Integrations & Workflow Automation:

    Learn how to integrate AI models into real-world applications via APIs. This is a critical skill for AI products and automation.

    n8n can integrate AI models (using nodes) as part of a larger workflow. You’ll need to understand how APIs work, including REST and GraphQL, as well as authentication methods like OAuth2.

    Experiment with creating workflows in n8n that trigger actions based on external events (e.g., webhooks, time-based triggers).

#### comment élaborer des workflows

Learn the core principles behind automating workflows. Understand triggers, actions, and how to chain them together.

Investigate how to handle exceptions and retries in workflows. You’ll also want
to understand state management and scheduling.

n8n: low-code workflow
Airflow: for time-based or data-pipeline
LangChain Expression Language (LCEL): code-first
Zapier + OpenAI: fast prototyping

### veille technologique - lister des cas d'utilisation

#### cas d'utilisation
- predictive maintenance
- web scraping + service de résumer

#### AI engineer skills

Prompt engineering and prompt chaining

Evaluation of AI products (hallucinations, latency, cost trade-offs)

Examples of AI use cases by domain: customer support, marketing automation,
internal search, etc.

### AI devops - CI/CD and monitoring

### travaux pratiques

- home lab

Build an AI email summarizer that triggers via webhook.

Build a chatbot that logs user queries in a database, sends alerts via Slack.

Scrape websites on a schedule and extract structured summaries with GPT. -->
