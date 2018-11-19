import React, { Component } from "react"
class AnimalList extends Component {
  animalOwner(taco) {
    // filter map find
    let animalOwners = this.props.animalOwners
      .filter(join => join.animalId === taco)
      .map(join => this.props.owners.find(owner => owner.id === join.ownerId).name)

    if(animalOwners.length ===0){
      animalOwners = ["no one"]
    }

    return animalOwners
  }

  render() {
    return (
      <section className="animals list">
        <h2>Our Animals</h2>
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
                <strong>{animal.name}</strong> the {animal.type}, owned by {this.animalOwner(animal.id).join(" and ")}.
            </div>
          )
        }

      </section>
    )
  }
}




export default AnimalList