import React, { Component } from "react"

// original way of tackling the challenge..mostly worked...did not show multiple owners in same line  

// class AnimalList extends Component {
//   render() {
//     return (
//       <section className="animals">
//         <h2>Our Animals</h2>
//         {
//           this.props.animalOwners.map((animalOwner) => {
//             let ownerName = this.props.owners.find(owner => owner.id === animalOwner.ownerId)
//             let animalName = this.props.animals.find(animal => animal.id === animalOwner.animalId)


//             return (
//               <div key={animalOwner.id}>
//                 {animalName.name} the {animalName.type} is owned by {ownerName.name}.
//             </div>
//             )
//           }
//           )
//         }

//       </section>
//     )
//   }
// }

class AnimalList extends Component {
  animalOwner(taco) {
    console.log("owners", taco)
    // filter map find
    let animalOwners = this.props.animalOwners
      .filter(join => join.animalId === taco)
      .map(join => this.props.owners.find(owner => owner.id === join.ownerId).name)
    console.log(animalOwners)

    if(animalOwners.length ===0){
      animalOwners = ["no one"]
    }

    return animalOwners
  }


  render() {
    return (
      <section className="animals">
        <h2>Our Animals</h2>
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
            This is {animal.name} the {animal.type}, owned by {this.animalOwner(animal.id).join(" and ")}.
            </div>
          )
        }

      </section>
    )
  }
}




export default AnimalList