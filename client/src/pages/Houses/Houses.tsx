import "./Houses.css";
import { useEffect, useState } from "react";

type House = {
  id: number;
  img: string;
  name: string;
  traits: string;
  founder: string;
  description: string;
};

function Houses() {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`${import.meta.env.VITE_API_URL}/api/houses`)
      .then((response) => response.json())
      .then((data: House[]) => {
        setHouses(data);
      });
  }, []);

  return (
    <main className="houses-main">
      <h1 className="houses-title">Les différentes maisons</h1>
      <section className="houses-card-container">
        {houses.map((house) => (
          <article className="house-card" key={house.id}>
            <img src={house.img} alt={house.name} className="house-card-img" />
            <div className="house-card-details">
              <h2 className="house-name">{house.name}</h2>
              <p className="house-traits">
                <u>Caractéristiques</u>: {house.traits}
              </p>
              <p className="house-founder">
                <u>Fondateur</u>: {house.founder}
              </p>
              <p className="house-description">{house.description}</p>
              <button type="button" className="house-card-button">
                En découvrir plus
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Houses;
