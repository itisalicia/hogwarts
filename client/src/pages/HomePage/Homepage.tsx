import "./Homepage.css";
import { Link } from "react-router-dom";

interface homepagecards {
  id: number;
  img: string;
  descritpion: string;
  button: JSX.Element;
}

const homepagecards = [
  {
    id: 1,
    img: "./imgHomePage/potions-homepage.webp",
    description:
      " À Poudlard, chaque cours est une porte ouverte sur l’extraordinaire. Entre l’art subtil des potions, la maîtrise des enchantements et l’exploration des mystères de la magie ancienne, les élèves découvrent un enseignement aussi fascinant que rigoureux. Les professeurs, passionnés et parfois excentriques, transmettent bien plus que des savoirs : ils forgent les sorciers de demain. Que l'on préfère manier la baguette, déchiffrer les secrets des astres ou s'aventurer dans l'étude des créatures magiques, chaque journée à Poudlard est une aventure en soi !",
    button: (
      <Link to="/subjects">
        <button type="button" className="homepage-card-button" key={1}>
          En savoir plus
        </button>
      </Link>
    ),
  },
  {
    id: 2,
    img: "./imgHomePage/sabliers-homepage.webp",
    description:
      "À Poudlard, chaque élève trouve sa place grâce à l’ancestral Choixpeau magique. Sage et perspicace, il sonde le cœur et l’esprit des nouveaux arrivants avant de les envoyer dans l’une des quatre grandes maisons. Courage, ambition, sagesse ou loyauté : chaque maison incarne des valeurs uniques qui soudent ses membres comme une véritable famille. Entre rivalités amicales, défis inter-maison et une compétition féroce pour la Coupe des Quatre Maisons, l’esprit de Poudlard se forge autant dans les salles de classe que dans les salles communes.",

    button: (
      <Link to="./houses">
        <button type="button" className="homepage-card-button" key={2}>
          En savoir plus
        </button>
      </Link>
    ),
  },
];

function Homepage() {
  return (
    <main className="homepage-container">
      <h1 className="homepage-h1">Bienvenue à Poudlard !</h1>
      <img
        src="./imgHomePage/poudlard.webp"
        alt="Hogwarts by night"
        className="homepage-img-hogwarts"
      />
      <section className="hogwarts-details-container">
        <p className="hogwarts-details">
          Poudlard est une école de sorcellerie située en Écosse. Elle est
          dirigée par un directeur et une directrice adjointe, et compte quatre
          maisons : Gryffondor, Poufsouffle, Serdaigle et Serpentard. Les élèves
          sont répartis dans ces maisons à leur arrivée à Poudlard, et y restent
          jusqu'à la fin de leurs études.
        </p>
        <p className="hogwarts-details">
          Les élèves de Poudlard suivent des cours de magie, de potions, de
          métamorphose, de défense contre les forces du mal, d'histoire de la
          magie, de botanique, de soins aux créatures magiques, d'astronomie, de
          divination, d'arithmancie, d'étude des moldus, de runes anciennes, de
          soins aux créatures magiques, de vol sur balai, de sortilèges, de
          légilimancie, d'occlumancie, de magie noire, de magie blanche, de
          magie élémentaire, de magie des potions, de magie des runes, de magie
          des sortilèges, de magie des créatures, de magie des plantes, de magie
          des objets !
        </p>
      </section>
      <section className="homepage-card-container">
        {homepagecards.map((card) => (
          <article className="homepage-cards" key={card.id}>
            <img
              src={card.img}
              alt="Contoir de potions"
              className="homepage-card-img"
            />
            <div className="homepage-card-text-button">
              <p className="homepage-card-description">{card.description}</p>
              {card.button}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Homepage;
