import { useNavigate, useParams } from "react-router-dom";

function DeleteHouse() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmitDeleteHouse = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/api/houses/${id}`, {
      method: "delete",
    }).then((response) => {
      if (response.status === 204) {
        navigate("/houses");
      }
    });
  };
  return (
    <main className="delete-house-main">
      <form onSubmit={handleSubmitDeleteHouse} className="delete-house-form">
        <h1>
          {" "}
          ❌ Êtes-vous sûr de vouloir supprimer la maison ? Attention ! Cette
          action est irréversible ❌
        </h1>
        <button type="submit">Supprimer</button>
      </form>
    </main>
  );
}

export default DeleteHouse;
