import { useNavigate } from "react-router-dom";
import HouseForm from "../../../components/House/HouseForm";

function NewHouse() {
  const navigate = useNavigate();
  const newHouse = {
    id: 0,
    img: "",
    name: "",
    traits: "",
    founder: "",
    description: "",
  };

  return (
    <>
      <HouseForm
        defaultValue={newHouse}
        onSubmit={(houseData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/houses`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(houseData),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.insertId) {
                navigate("/houses");
              }
            });
        }}
      >
        {" "}
        Ajouter
      </HouseForm>
    </>
  );
}

export default NewHouse;
