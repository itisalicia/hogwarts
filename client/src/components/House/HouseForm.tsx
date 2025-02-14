import type { ReactNode } from "react";

type HouseData = {
  id: number;
  img: string;
  name: string;
  traits: string;
  founder: string;
  description: string;
};

interface HouseFormProps {
  children: ReactNode;
  defaultValue: HouseData;
  onSubmit: (event: HouseData) => void;
}

function HouseForm({ children, defaultValue, onSubmit }: HouseFormProps) {
  return (
    <main className="HouseForm-main">
      <form
        className="house-form"
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const img = formData.get("img") as string;
          const name = formData.get("name") as string;
          const traits = formData.get("traits") as string;
          const founder = formData.get("founder") as string;
          const description = formData.get("description") as string;
          onSubmit({
            id: defaultValue.id,
            img,
            name,
            traits,
            founder,
            description,
          });
        }}
      >
        <section className="house-form-section">
          <label htmlFor="img">Symbole de la maison</label>
          <textarea
            className="house-form-textarea"
            name="img"
            id="img"
            defaultValue={defaultValue.img}
            placeholder="Symbole de la maison"
          />
        </section>
        <section className="house-form-section">
          <label htmlFor="name">Nom de la maison</label>
          <textarea
            className="house-form-textarea"
            name="name"
            id="name"
            defaultValue={defaultValue.name}
            placeholder="Nom de la maison"
          />
        </section>
        <section className="house-form-section">
          <label htmlFor="traits">Caractéristiques de la maison</label>
          <textarea
            className="house-form-textarea"
            name="traits"
            id="traits"
            defaultValue={defaultValue.traits}
            placeholder="Caractéristiques de la maison"
          />
        </section>
        <section className="house-form-section">
          <label htmlFor="founder">Fondateur de la maison</label>
          <textarea
            className="house-form-textarea"
            name="founder"
            id="founder"
            defaultValue={defaultValue.founder}
            placeholder="Fondateur de la maison"
          />
        </section>
        <section className="house-form-section">
          <label htmlFor="description">Description de la maison</label>
          <textarea
            className="house-form-textarea"
            name="description"
            id="description"
            defaultValue={defaultValue.description}
            placeholder="Description de la maison"
          />
        </section>
        <button type="submit">{children}</button>
      </form>
    </main>
  );
}

export default HouseForm;
