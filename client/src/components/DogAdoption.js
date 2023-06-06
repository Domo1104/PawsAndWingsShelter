// import { useEffect } from "react";
// import { redirect } from "react-router-dom";
import AnimalListingCard from "./AnimalListingCard";

function DogAdoption({ dogs }) {
  return (
    <div>
      {dogs.map((dog) => {
        return (
          <div key={dog.id}>
            <AnimalListingCard animal={dog} />
          </div>
        );
      })}
    </div>
  );
}

export default DogAdoption;
