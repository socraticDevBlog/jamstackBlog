---
title: Allez vraiment vite ! Si quelque chose vous gêne ... changez de cap !!
date: 2020-03-08
author: "SocraticDev"
image: ../../images/dogfight.jpg
tags:
  - productivité
  - technologie
is_archived: false
---

Quel est la durée idéale d'un sprint de développement ? Dans le doute : itérez le plus rapidement ! Voilà le conseil de Jeff Atwood : co-créateur du site web Stack Overflow et artisan techno respecté.

> <abbr title="Extrait du film Better off Dead">["Go that way, really fast. If something gets in your way … turn."](https://www.imdb.com/title/tt0088794/)</abbr>

Colonel John Boyd était un stratège militaire spécialisé dans les combats aériens. Il a participé à la Deuxième Guerre mondiale, la Guerre de Corée ainsi que la Guerre du Vietnam. Il est ensuite devenu consultant pour le Pentagone. Ses théories eurent un fort impact dans plusieurs autres domaines que l'art militaire : le sport, les affaires, et les litiges en Droit.

### Prise de décision : le cycle OODA

Boyd a proposé une série d'actes mentaux à poser afin d'optimiser toute prise de décision. Il s'agit d'un cycle répétable portant l'acronyme OODA et signifiant : "_Observer, Orienter, Décider, Agir_". C'est un pattern générique décrivant comment un individu tout comme une organisation prend des décisions efficacement.

Dans le cadre d'une opération de combat, les militaires sont appelés à effectuer cette boucle de façon continue. La phase d'_observation_ consiste en l'acquisition d'informations brutes. La phase d'_orientation_ consiste à filtrer et interpréter ces informations brutes. Par exemple, un pilote de chasse aguerri filtre et interprète les informations selon ses connaissances à propos de la psychologie humaine, ses traditions culturelles ainsi que ses expériences préalables. À la lumière de l'interprétation (orientation) des informations observées, il peut prendre une décision éclairée. Par exemple, placer son avion dans le soleil, au-dessus de son adversaire. Une fois l'action effectuée, le cycle recommence.

La force de la théorie de Boyd n'est pas d'avoir divisé l'acte de prise de décision en quatre phases. C'est plutôt d'avoir pris conscience que nos adversaires, consciemment ou non, effectuent le même cycle. En prenant conscience de ça, le stratège distingue les quatre moments critiques sur lesquels agir pour assurer la victoire. Par exemple, le stratège veillera à dissimuler ses intentions tout en cherchant à connaître les intentions de son adversaire. Bref, il cherchera à se rendre imprévisible allant peut-etre jusqu'à semer la confusion chez son adversaire.

### Le secret est la vitesse d'itération

Colonel John Boyd s'intéressait particulièrement aux combats aériens entre le MIG-15 (Russe) et le F-86 (Américain). En tant que pilote et concepteur d'avions de combat, il savait que le MIG-15 était supérieur au F-86 sur la majorité des points. Toutefois, lors de combats entre avions de chasse, le F-86 l'emportait 9 fois sur 10. Le MIG-15 n'était qu'inférieur selon deux facteurs : la visibilité latérale et une direction manuelle plutôt qu'hydraulique.

D'un point de vue d'ingénieur, ces deux faiblesses étaient largement compensée par la vitesse du MIG-15. Même si le pilote russe réagissait un peu plus lentement que l'américain, une fois la décision de grimper ou de virer était prise, le MIG-15 pouvait rapidement déjouer le F-86 par sa pure vitesse de grimpe et de virage.

Bien que le MIG-15 était considéré supérieur par les ingénieurs, le F-86 était le préféré des pilotes. Comment un produit techniquement inférieur peut-il être préféré par l'utilisateur final ?

Pour expliquer cette réalité, Boyd a raffiné sa théorie du cycle OODA. Le succès ne vient pas de la qualité du cycle itératif. Le succès vient de la rapidité du cycle itératif. Il a proposé que le véritable point faible du MIG-15 était son manche à balai manuel. Le manche à balai hydraulique demande moins de force au pilote pour répondre aux changements de direction. À chaque cycle OODA, le pilote russe se fatigue davantage car il doit appliquer davantage de force au manche à balai. Avec la fatigue, le cycle OODA s'effectue de moins en moins rapidement. Le pilote perd la joute non pas par la supériorité de l'adversaire mais bien par le fait que sa vitesse d'itération est moins rapide quelle de l'adversaire.

### Leçons à tirer en termes de développement logiciel

- La vitesse d'itération l'emporte sur la qualité de l'itération
- Le processus de testing doit être léger et rapide afin de pouvoir le rouler automatiquement à chaque _build_
- Les tests fonctionnels sont plus appropriés si vous faites de petits changements toutes les deux semaines et élaguez rapidement ce qui ne fonctionne pas
- Une itération ne devrait pas dépasser quatre semaines
- Vos tests logiciels doivent adopter la philosophie : échouer tôt et échouer souvent
- Les spécifications fonctionnelles sont plus appropriées si elles sont concises et évolutives

#### Source

- Jeff Atwood (2007), "Boyd's Law of Iteration", [https://blog.codinghorror.com/boyds-law-of-iteration/](https://blog.codinghorror.com/boyds-law-of-iteration/)

- Ibid. (2010), "Go That Way, Really Fast", [https://blog.codinghorror.com/go-that-way-really-fast/](https://blog.codinghorror.com/go-that-way-really-fast/)

- Wikipedia "OODA loop", [https://www.wikiwand.com/en/OODA_loop](https://www.wikiwand.com/en/OODA_loop)

- Wikipedia, "John Boyd (stratège)", [https://www.wikiwand.com/fr/John*Boyd*(strat%C3%A8ge)](<https://www.wikiwand.com/fr/John_Boyd_(strat%C3%A8ge)>)

- Wikipedia, "Mikoyan-Gurevich MiG-15", [https://www.wikiwand.com/en/Mikoyan-Gurevich_MiG-15](https://www.wikiwand.com/en/Mikoyan-Gurevich_MiG-15)

- Wikipedia, "North American F-86 Sabre", [https://www.wikiwand.com/en/North_American_F-86_Sabre](https://www.wikiwand.com/en/North_American_F-86_Sabre)
