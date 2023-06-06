import AnimalListingCard from "./AnimalListingCard"

function CatAdoption({ cats }) {

    return (
        <div>
        {cats.map((cat) => {
            return (
                <div key={cat.id} >
                    <AnimalListingCard animal = {cat} />
                </div>
            )
        })}
        </div>
    )

}

export default CatAdoption