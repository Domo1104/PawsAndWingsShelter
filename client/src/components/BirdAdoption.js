import AnimalListingCard from "./AnimalListingCard"

function BirdAdoption({ birds }) {
    return (
        <div>
            {birds.map((bird) => {
                return (
                    <div key={bird.id} >
                        <AnimalListingCard animal={bird} />
                    </div>
                )
            })}
        </div>
    )
}

export default BirdAdoption