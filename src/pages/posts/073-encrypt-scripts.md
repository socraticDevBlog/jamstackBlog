---
title: "projet simple : automatiser l'encryption de fichiers de backup"
date: 2021-07-21
author: "SocraticDev"
image: ../../images/merlin-encrypteur.png
tags:
  - sécurité
  - programmation
  - foss
  - linux
---

Une bonne stratégie de backup de fichiers est de conserver une copie des fichiers sur un autre support physique que l'original ainsi qu'une copie des mêmes fichiers à une autre localisation physique. Une excellente option pour entreproser ses backups à une différente localisation est de les envoyer sur le `cloud`. On peut souvent utiliser une option gratuite avec les grands joueurs `Google`, `Microsoft` ou `Dropbox`.

Toutefois, il faut être prudent et envisager le destin de ces fichiers confiés à une infrastructure étrangère. Sommes-nous à l'aise que nos fichiers soient rendus disponibles à des hackers en cas de faille de sécurité. Ou, un peu moins grave, sommes nous à l'aise que ces goliaths de la techno exploitent le contenu de nos fichiers ?

Ma réponse est non. Et la solution que je propose est de n'entreposer que des fichiers encryptés sur l'infonuagique publique. C'est-à-dire sur des serveurs rendus disponibles et gérés par quelqu'un d'autre que soi-même.

##### Processus manuel sous `linux`
Sous linux, le processus est très simple. En moins de 3 lignes de commande, on encrypte le contenu d'un répertoire à l'aide de la librairie `GPG - GNU Privacy Guard`.  Toutefois, le processus de backup devrait être effectué régulièrement et de façon consistante. La meilleure option demeure l'automatisation. Automatiser nous évitera des erreurs et nous évitera surtout de négliger par paresse ces manoeuvres qui vont nous sauver la vie en cas de bris de matériel ou attaque par rançongiciels ('ransomware').

##### Automatiser à l'aide de scripts `bash`

En termes d'automatisation, la façon la plus économique est de scripter les commandes exécutées manuellement sur un terminal.

Le scripting est souvent une étape temporaire et intermédiaire. Avant d'en arriver à une solution robuste et professionnelle, on se mouille les orteils en produisant rapidement des scripts réutilisables.

Par exemple, dans le temps d'une soirée, j'ai codé deux scripts `bash` pour répondre à mon besoin. Un premier script pour encrypter un répertoire. Un second script pour décrypter le fichier encrypté. Avec ces deux scripts, je suis en mesure d'économiser du temps dans le processus de backup. Et surtout, ça me motive à rester discipliné et backupper régulièrement mes fichiers.

> Ces scripts sont disponibles et prêts à être utilisés : [https://github.com/socraticDevBlog/encrypted-backups](https://github.com/socraticDevBlog/encrypted-backups)


Le fichier `encrypt.sh` compresse le contenu d'un répertoire ; c'est-à-dire qu'il le réduit à un fichier compressé. Enuite, il utilise la librairie `GPG` pour l'encrypter. `GPG` a besoin d'une `passphrase` pour son algorithme d'encryption symétrique. Alors notre script passe la main à cette librairie qui ouvre une fenêtre modale et demande à l'utilisateur de saisir un phrase 'mot de passe'.

On utilisera ce même mot de passe afin de décrypter notre répertoire.

```
# compress given directory to a custom named archive
archive_filename=${archive}-$(date +"%Y-%m-%d").tar.gz
tar -zcvf ${archive_filename} ${dir_path}/*

# encrypt archived file
gpg --output ${archive_filename}.gpg --symmetric $archive_filename

# remove temporary compressed directory
rm ${archive_filename}
```

Le fichier `decrypt.sh` permet de décrypter le répertoire encrypté. Il effectue simplement les actions inverses du processus d'encryption. Au final, on retrouvera le répertoire d'origine contenant tous les fichiers originaux!

```
# decrypt file to compressed archive
gpg --output $archive_file_name --decrypt ${1}

# decompress archive to original folder
tar xzvf ${archive_file_name}

# remove compressed archive
rm ${archive_file_name}
```

##### Conclusion

Grâce à ces deux scripts je me sens armé pour implémenter une stratégie saine de sauvegarde de fichiers personnels sur l'infonuagique publique.

Toutefois, j'envisage de modifier ces scripts et éventuellement automatiser de A à Z le processus de sauvegarde. C'est-à-dire céduler un processus régulier (quotidien ou hebdomadaire) qui se chargera d'envoyer un jeu de sauvegardes sur le cloud.  Cela me permettra d'avoir l'esprit en paix : en cas de problème technique ou attaque `ransomware`, je serai en mesure de récupérer mes données essentielles en peu de temps.

Si vous êtes tentés d'utiliser une stratégie semblable à la mienne, j'aimerais en entendre parler. N'hésitez jamais à me contacter via `Twitter` ou `LinkedIn` pour entamer une discussion techno!