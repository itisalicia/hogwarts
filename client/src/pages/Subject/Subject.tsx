import { useEffect, useState } from "react";
import SubjectCard from "../../components/SubjectCard/SubjectCard";
import "./Subject.css";

type Subject = {
  id: number;
  img: string;
  name: string;
  description: string;
};

function Subject() {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/subjects`)
      .then((response) => response.json())
      .then((data: Subject[]) => {
        setSubjects(data);
      });
  }, []);

  return (
    <main className="subject-main">
      <h1 className="main-title-subjects">
        Le cursus au sein de notre établissement
      </h1>
      <h2 className="second-title-subjects">
        {" "}
        Cursus sur une période de sept ans
      </h2>
      <section className="subject-container">
        {subjects.map((subject) => (
          <SubjectCard subject={subject} key={subject.name} />
        ))}
      </section>
      <section className="more-details">
        <h2 className="second-title-subjects"> Les B.U.S.E.S</h2>
        <article className="subject-more-details">
          Les B.U.S.E.S (Brevet Universel de Sorcellerie Élémentaire) sont des
          examens passés par les élèves de cinquième année. Ils déterminent les
          matières que les élèves pourront continuer en sixième et septième
          années, en fonction de leurs résultats. Les notes possibles vont de O
          (Optimal) à T (Troll), avec des mentions comme Effort Exceptionnel (E)
          et Acceptable (A) pour les réussites, tandis que Piètre (P), Désolant
          (D) et Troll (T) signifient l'échec.
        </article>
        <h2 className="second-title-subjects"> Les A.S.P.I.C.S</h2>
        <article className="subject-more-details">
          Les A.S.P.I.C. (Accumulation de Sorcellerie Particulièrement Intensive
          et Contraignante) sont les examens finaux passés en septième année à
          Poudlard. Ils sont l'équivalent des B.U.S.E., mais à un niveau bien
          plus avancé, et jouent un rôle clé pour l'avenir professionnel des
          sorciers. Comme pour les B.U.S.E., les notes vont de Optimal (O) à
          Troll (T). Certains métiers, comme Auror, nécessitent d’excellents
          résultats dans plusieurs matières.
        </article>
      </section>
      <h2 className="second-title-subjects"> À savoir...</h2>
      <article className="specific-details">
        Jusqu'en cinquième année, certains cours sont obligatoires :
        <ul>
          <li>Potions</li>
          <li>Botanique</li>
          <li>Sortilèges</li>
          <li>Métamorphose</li>
          <li>Histoire de la magie</li>
          <li>Défense contre les forces du Mal</li>
          <li>Astronomie</li>
        </ul>
        Par la suite, ce sont vos résultats aux <b>BUSES</b> que vous passerez à
        la fin de votre cinquième année qui détermineront les matières que vous
        pourrez continuer, ou non.
        <br />
        De plus, c'est en troisième année qu'il vous sera demandé de choisir au
        moins deux de ces matières optionnelles :
        <ul>
          <li>Divination</li>
          <li>Soins aux créatures magiques</li>
          <li>Étude des Moldus</li>
          <li>Étude des Runes Anciennes</li>
          <li>Arithmancie</li>
        </ul>
      </article>
    </main>
  );
}

export default Subject;
