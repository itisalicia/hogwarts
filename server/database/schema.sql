CREATE TABLE Subject (
  id INT AUTO_INCREMENT PRIMARY KEY,
  img VARCHAR(255),
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE House (
  id INT AUTO_INCREMENT PRIMARY KEY,
  img VARCHAR(255),
  name VARCHAR(255) NOT NULL,
  traits TEXT,
  founder VARCHAR(255),
  description TEXT
);

INSERT INTO House (img, name, traits, founder, description) 
VALUES 
(
    "/imgHouses/slytherin.webp",
    "Serpentard",
    "Dirigeants. Fierté. Ambition. Ruse. Dédain des règles. Grandeur. Noblesse. Provocation",
    "Salazar Serpentard",
    "Serpentard est une des quatre maisons de Poudlard. Elle a pour couleurs le vert et argent. Son emblème est le serpent, une référence aux pouvoirs de son fondateur, Salazar Serpentard, qui était un fourchelang."
),
(
    "/imgHouses/gryffindor.webp",
    "Gryffondor",
    "Courage. Hardiesse. Force. Bravoure. Détermination",
    "Godric Gryffondor",
    "La maison Gryffondor tient son nom de Godric Gryffondor, un des quatre fondateurs de Poudlard. Elle a pour couleur rouge et or. Son emblème est un lion doré sur fond rouge."
),
(
    "/imgHouses/ravenclaw.webp",
    "Serdaigle",
    "Intelligence. Sagesse. Érudition. Réflexion. Curiosité. Originalité. Créativité",
    "Rowena Serdaigle",
    "La maison tient son nom de Rowena Serdaigle, un des quatre fondateurs de Poudlard. Elle a pour couleurs bleu et bronze. Son emblème est un aigle, symbole de la sagesse de cette maison."
),
(
    "/imgHouses/hufflepuff.webp",
    "Poufsouffle",
    "Loyauté. Patience. Gentillesse. Sincérité. Tolérance. Persévérance. Amour de la nature. Modestie. Justice. Fair-play. Travail acharné",
    "Helga Poufsouffle",
    "La maison tient son nom de Helga Poufsouffle, un des quatre fondateurs de Poudlard. Son insigne représente un blaireau sur fond de jaune et noir, tel que le blé et la terre."
);

INSERT INTO Subject (img, name, description) 
VALUES
    ("/imgSubjects/potion.png", "Potions", "Les cours de potions consistent en la mémorisation des propriétés des différents ingrédients et en la composition de certaines potions. Les élèves sont aussi amenés à préparer certaines potions et à réaliser des essais sur les propriétés des ingrédients de potions."),
    ("/imgSubjects/botanique.png", "Botanique", "La botanique consiste à l'étude des plantes, herbes et champignons magiques. Les cours ont lieu dans des serres qui se trouvent dans le parc, plus précisément à l'arrière du château et à proximité du potager."),
    ("/imgSubjects/sortileges.png", "Sortilèges", "Les cours de sortilèges consistent en l'apprentissage des sortilèges de base. À partir de la sixième année, les élèves apprennent les sortilèges informulés."),
    ("/imgSubjects/metamorphose.png", "Métamorphose", "Les cours de métamorphose consistent en la transformation d'objets ou de créatures en d'autres objets ou créatures. Les élèves apprennent à se transformer eux-mêmes en animaux. Il s'agit d'une forme de magie très complexe à acquérir."),
    ("/imgSubjects/HDM.png", "Histoire de la magie", "Le cours d'histoire de la magie a pour but d'apprendre aux jeunes sorciers ce qui a fait leur monde, entre autres les sanglantes révoltes des gobelins et les guerres des géants."),
    ("/imgSubjects/DCFM.png", "Défense contre les forces du Mal", "Les cours de défense contre les forces du Mal permettent aux élèves de se protéger, comme le dit son nom, contre les forces du Mal."),
    ("/imgSubjects/astronomie.png", "Astronomie", "L'astronomie est une matière dans laquelle les élèves apprennent le nom des différents astres et leurs particularités. Les cours ont lieu en soirée, tout en haut de la tour d'astronomie."),
    ("/imgSubjects/SCM.png", "Soins aux créatures magiques", "Matière optionnelle à partir de la troisième année. Le cours de soins aux créatures magiques permet aux élèves d'étudier la faune magique."),
    ("/imgSubjects/divination.png", "Divination", "Matière optionnelle à partir de la troisième année. La divination est une branche de la magie qui consiste à tenter de prévoir l'avenir, ou de recueillir des informations sur des évènements à venir, à travers divers rituels ou outils. Certains pensent qu'il s'agit d'une matière peu précise."),
    ("/imgSubjects/arithmancie.png", "Arithmancie", "Matière optionnelle à partir de la troisième année. L'arithmancie est une pratique de divination qui consiste en des prédictions basées sur des nombres et des calculs compliqués. Il s'agit d'un art employé par les briseurs de maléfice."),
    ("/imgSubjects/moldus.png", "Étude des moldus", "Matière optionnelle à partir de la troisième année. Les cours d'études de moldus consistent en l'apprentissage du mode de vie Moldu."),
    ("/imgSubjects/runes.png", "Étude des runes anciennes", "Matière optionnelle à partir de la troisième année. Ces cours étudient des symboles magiques gravés sur des objets pour leur conférer des propriétés magiques. Les élèves apprennent à les lire et à les interpréter.");
