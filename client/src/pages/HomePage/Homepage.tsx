import "./Homepage.css";

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
          des objets
        </p>
      </section>
    </main>
  );
}

export default Homepage;
