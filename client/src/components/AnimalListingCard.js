import { useNavigate } from "react-router-dom";
import "./AnimalListingCard.css"

function AnimalListingCard({ animal }) {
  const navigate = useNavigate()


  return (
    <div className="row" onClick={() => selectAnimal(animal.name)}>
      <img className="card" src={animal.primary_photo_cropped ? animal.primary_photo_cropped.small : ""} alt={animal.name} />
      <h1 className="card" > {animal.name} </h1>
      <h3 className="card" > Age - {animal.age} </h3>
      <h3 className="card"> Breed - {animal.breeds.primary}  {animal.breeds.tertiary} {animal.breeds.secondary} </h3>
      {/* <h3> House trained - {animal.attributes.house_trained ? "Yes" : "No" } </h3> */}
    </div>
  );
}

export default AnimalListingCard;
