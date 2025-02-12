import { useState } from "react";

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
  const [popUp, setPopUp] = useState(false);

  const handleClickPopUp = () => {
    setPopUp(!popUp);
  };

  const handleClick = () => {
    setSubjectDetails(!subjectDetails);
  };

  const handleClosePopUp = () => {
    setPopUp(false);
  };

  return (
    <section className="all-subjects" key={subject.id}>
      <img
        src={subject.img}
        alt={subject.name}
        className="subject-img"
        onClick={() => {
          handleClick();
          handleClickPopUp();
        }}
        onKeyUp={() => {
          handleClick();
          handleClickPopUp();
        }}
      />
      <h3>{subject.name}</h3>
      {popUp && subjectDetails && (
        <article className="pop-up-article">
          <div className="pop-up-container">
            <p className="pop-up-description">
              {subject.description}{" "}
              <p
                className="close-button"
                onClick={handleClosePopUp}
                onKeyUp={handleClosePopUp}
              >
                X
              </p>
            </p>
          </div>
        </article>
      )}
    </section>
  );
}

export default SubjectCard;
