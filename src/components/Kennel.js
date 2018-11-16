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
    { id: 1, name: "Luna", type: "cat"},
    { id: 2, name: "Chewy", type: "cat" },
    { id: 3, name: "Beorn", type: "Doberman" },
    { id: 4, name: "King", type: "German Shephard" }
  ]

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
  }

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList animals={this.state.animals} />
      </article>
    )
  }

}

export default Kennel