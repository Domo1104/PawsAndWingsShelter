import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AnimalListingCard from "./AnimalListingCard";

function selectAnimal() {
  const { currentAnimal, setCurrentAnimal } = useState({});

  const { id } = useParams

  function selectAnimal(id) {
    navigate(`/animal/${id}`)
  }

  return <AnimalListingCard animal={currentAnimal} />;
}

export default selectAnimal;
