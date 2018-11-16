import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from './locations/LocationList'
import AnimalList from "./animals/AnimalList"
import "./Kennel.css"


class Kennel extends Component {
  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  // This will eventually get pulled from the API
  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "123 Fictitious Ave N" },
    { id: 2, name: "Nashville South", address: "999 Imagiation Station S" }
  ]

  animalsFromAPI = [
    { id: 1, name: "Luna", type: "cat" },
    { id: 2, name: "Chewy", type: "cat" },
    { id: 3, name: "Beorn", type: "Doberman" },
    { id: 4, name: "King", type: "German Shephard" },
    { id: 5, name: "Santa's Little Helper", type: "Greyhound" }
  ]
  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay" },
    { id: 2, name: "Emma Beaton" },
    { id: 3, name: "Dani Adkins" },
    { id: 4, name: "Adam Oswalt" },
    { id: 5, name: "Fletcher Bangs" },
    { id: 6, name: "Angela Lee" }
  ]
  animalOwnersFromAPI = [
    { id: 1, ownerId: 1, animalId: 4 },
    { id: 2, ownerId: 2, animalId: 3 },
    { id: 3, ownerId: 3, animalId: 2 },
    { id: 4, ownerId: 4, animalId: 2 },
    { id: 5, ownerId: 6, animalId: 4 },
    { id: 6, ownerId: 5, animalId: 1 },
     { id: 7, ownerId: 6, animalId: 2 }
  ]

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    owners: this.ownersFromAPI,
    animalOwners: this.animalOwnersFromAPI
  }

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners}/>
      </article>
    )
  }

}

export default Kennel