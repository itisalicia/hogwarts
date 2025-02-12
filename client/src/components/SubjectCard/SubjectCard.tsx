import { useState } from "react";

// type Subject = {
//   id: number;
//   img: string;
//   name: string;
//   description: string;
// };

type Subject = {
  id: number;
  img: string;
  name: string;
  description: string;
};

interface SubjectCardProps {
  subject: Subject;
}

function SubjectCard({ subject }: SubjectCardProps) {
  const [subjectDetails, setSubjectDetails] = useState(false);

  const handleClick = () => {
    setSubjectDetails(!subjectDetails);
  };

  return (
    <article className="all-subjects" key={subject.id}>
      <img
        src={subject.img}
        alt={subject.name}
        className="subject-img"
        onClick={handleClick}
        onKeyUp={handleClick}
      />
      <h3>{subject.name}</h3>
      {subjectDetails && <p>{subject.description}</p>}
    </article>
  );
}

export default SubjectCard;
