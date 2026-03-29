---
title: "Utiliser une chaîne de confiance cryptographique pour garantir l'imputabilité des auteurs de scripts et d'autres produits logiciels exécutés en entreprise"
date: 2026-03-28
author: "SocraticDev"
image: ../../images/azure-identity.png
tags:
  - technologie
  - sécurité
is_archived: false
---

Que jette la première pierre celui qui n'a jamais exécuté un script sans savoir
exactement ce qu'il faisait ou sans comprendre les risques encourus.

Développeurs et bidouilleurs informatiques détestent avoir leurs mouvements
limités par des licences ou un manque de permissions nécessaire pour accomplir
leurs tâches. À la maison ou en équipe au sein d'une communauté informelle, nous
passons outre ces freins en travaillant sur des serveurs que nous administrons
nous-mêmes.

On veut aller vite.

Ce n'est pas que se fout de la sécurité. C'est plutôt qu'on fait un calcul
mental pour mesurer l'impact des risques encourus. Surtout avec l'infonuagique.
Si on ne fait plus confiance à notre serveur, on peut l'effacer d'un clic et en
provisionner un nouveau en quelques minutes.

Les choses sont autrement plus sérieuses pour les ordinateurs intégrés à des
réseaux de grandes organisations comme des écoles, hôpitaux, banques, ou
gouvernements. Ces ordinateurs corporatifs doivent être bien protégés car un
simple script exécuté à la légère pourrait ouvrir la porte à un acteur malveillant : 

- rançongiciel
- espionnage corporatif
- vol d'identité

Comme la majorité des ordinateurs utilisés dans les grandes organisations
roulent sous Windows, alors ce système d'opération devient ipso facto un vecteur
d'attaque privilégié.

### Set-ExecutionPolicy

Windows est livré avec Powershell. Une solution d'automatisation et de
configuration combinant un interpréteur de ligne de commande et un
langage de scripting roulant sur le puissant runtime .NET

Les bons administrateurs de système bloquent l'exécution de scripts Powershell
sur l'ensemble de la flotte d'ordinateurs sauf si ceux-ci sont signés par leurs auteurs.

Mais un script signé n'est pas nécessairement sécuritaire?

Dans un environnement corporatif, l'utilisation de systèmes informatisés est
encadré par deux pôles :

- donner aux employés les outils et la liberté dont ils ont besoin pour
  effectuer leur travail
- protéger l'organisation contre une utilisation inappropriée de ses ressources qui
  pourrait lui porter préjudice

Il existe plusieurs raisons légitimes pour lesquels des scripts Powershell
soient exécutés sur les ordinateurs d'employés. En termes de sécurité, et ça
peut paraître étonnant, l'essentiel n'est pas tant de valider que les scripts ne
contiennent pas de virus mais plutôt de valider l'identité de leurs auteurs.

On parle de chaîne de confiance ("chain of trust"). Dans un monde qui évolue
rapidement et où beaucoup d'interactions se font de façon numérique, il est
essentiel de valider l'identité de nos interlocuteurs. Et ce n'est pas si
facile qu'on puisse croire. Imaginons être sans emploi depuis quelque temps et
être en recherche de travail. Un recruteur nous contacte pour un poste avec une
compagnie reconnue. Comment valider que ce recruteur travaille bien pour cette
compagnie ? Comment valider qu'on transmette nos informations personnelles à un
honnête représentant ce cette compagnie plutôt qu'à des fraudeurs? Imaginez le
désastre de remettre vos coordonnés bancaires, numéro d'assurance sociale. Ou
même prendre la décision de déménager pour un emploi fictif!

Dans l'univers Microsoft, le défi d'identifier avec certitude la source de
ses produits logiciels est assuré une solution intégrée de cryptographie
asymétrique. L'outil _Authenticode_ et maintenant le
service géré [Azure
Artifact Signing](https://azure.microsoft.com/en-us/products/artifact-signing)
propose une service extrêmement convivial de signature de code. Surtout pour
l'utilisateur final qui n'a absolument rien à faire pour valider ces signatures. 

Microsoft Azure, sous la forme du service géré Azure Artifact Signing,
orchestre les étapes du processus de création d'une chaîne de confiance:

  1. Azure valide l'identité du créateur du script en demandant des
     informations précises comme un identifiant de l'entreprise (tax number,
     Duns number, etc.) ainsi qu'une pièce d'identité
  2. Azure génère un certificat lié à l'identité de l'entreprise
  3. Le développeur signe son script avec ce certificat et le distribue à des
     partenaires internes ou externes
  4. N'importe quelle machine Windows peut voir cette signature et retracer la
     chaîne de confiance jusqu'à l'organisation légalement imputable qui l'a
     créé.
     
L'imputabilité est ce qui est garanti par cette signature

C'est aussi pourquoi, au-delà de sa simple commodité, il est véritablement utile en entreprise :

- **Aucune importation unique requise** — approuvé d’emblée sur tous les ordinateurs Windows

- **Vérification possible** — les équipes de sécurité peuvent voir précisément qui a signé quoi et quand

- **Révocable** — si un certificat est compromis, Microsoft peut le révoquer et tous les scripts signés avec celui-ci deviennent immédiatement peu fiables

- **Inviolable** — l’horodatage prouve la date et l’heure de signature du script, même après l’expiration du certificat


```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            AUTHOR PHASE                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────┐          ┌──────────────────┐      ┌───────────────┐  │
│  │ Script Author    │          │Digital Signature │      │  .ps1 File    │  │
│  │                  │          │                  │      │               │  │
│  │ Creates .ps1     │─────────▶│ Sign with        │─────▶│ Script body + │  │
│  │ Holds private    │  Script  │ private key      │      │ Signature     │  │
│  │ key/ use managed |          │ (SHA256 hash)    │      │ block         │  │
│  │ service          │   Key    │                  │      │               │  │
│  └──────────────────┘          └──────────────────┘      └───────────────┘  │
│                                                                             │
│  ┌──────────────────┐                                                       │
│  │ Code Signing     │◀─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─           │
│  │ Certificate      │  (Includes cert details in signature block)           │
│  │                  │                                                       │
│  │ Public key       │                                                       │
│  │ embedded in sig  │                                                       │
│  └──────────────────┘                                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      │
                                      ▼
                        ┌──────────────────────┐
                        │  DISTRIBUTION PHASE  │
                        │                      │
                        │ Share via email,     │
                        │ repo, or network     │
                        └──────────────────────┘
                                      │
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          EMPLOYEE/EXECUTOR PHASE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────┐    PowerShell Validation    ┌──────────────────────┐  │
│  │ Employee         │────────────────────────────▶│ Signature Check      │  │
│  │                  │                             │                      │  │
│  │ Receives script  │                             │ 1. Hash script       │  │
│  │ file             │                             │ 2. Decrypt with      │  │
│  │                  │                             │    public key        │  │
│  └──────────────────┘                             └──────────────────────┘  │
│                                                            │                │
│  ┌──────────────────┐                                      │                │
│  │ Root CA Trust    │◀─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘      |                │
│  │ Store            │  (Verify cert chain & revocation)    |                │
│  │                  │                                      |                │
│  │ Verify cert      │                                      |                │
│  │ chain validity   │                                      |                │
│  └──────────────────┘                                      |                │
│                                                            │                │
│                                                            ▼                │
│                                                  ┌──────────────────┐       │
│                                                  │ Signature Valid? │       │
│                                                  └──────────────────┘       │
│                                                            │                │
│                                      ┌─────────────────────┘                │
│                                      │                                      │
│                            YES       │                NO                    │
│                                      ▼                                      │
│                         ┌──────────────────────┐   ┌──────────────────┐     │
│                         │ Execute Script       │   │ Reject/Warn      │     │
│                         │ ✓ Trusted author     │   │ Script blocked   │     │
│                         │ ✓ Not modified       │   │ Not executed     │     │
│                         └──────────────────────┘   └──────────────────┘     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```



