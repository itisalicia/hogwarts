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
    </main>
  );
}

export default Subject;
