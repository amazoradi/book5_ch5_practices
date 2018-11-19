import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owners/OwnerList"


class ApplicationViews extends Component {
  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" },
    { id: 3, name: "Nashville East", address: "123 Fictitious Ave N" },
    { id: 4, name: "Nashville West", address: "999 Imagiation Station S" }
  ]


  animalsFromAPI = [
    { id: 1, name: "Luna", type: "cat" },
    { id: 2, name: "Chewy", type: "cat" },
    { id: 3, name: "Beorn", type: "Doberman" },
    { id: 4, name: "King", type: "German Shephard" },
    { id: 5, name: "Santa's Little Helper", type: "Greyhound" }
  ]

  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay" , phone: 6151112233},
    { id: 2, name: "Emma Beaton", phone: 8059690012 },
    { id: 3, name: "Dani Adkins", phone: 3129876543},
    { id: 4, name: "Adam Oswalt", phone: 6158743265 },
    { id: 5, name: "Fletcher Bangs", phone: 6199680967},
    { id: 6, name: "Angela Lee", phone: 8053343567}
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
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList owners={this.state.owners} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews