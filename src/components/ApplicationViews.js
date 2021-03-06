import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owners/OwnerList"


export default class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    animalOwners: []
  }

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/animals")
      .then(response => response.json())
      .then(animals => newState.animals = animals)
      .then(() => fetch("http://localhost:5002/employees")
        .then(response => response.json()))
      .then(employees => newState.employees = employees)
      .then(() => fetch("http://localhost:5002/locations")
        .then(response => response.json()))
      .then(locations => newState.locations = locations)
      .then(() => fetch("http://localhost:5002/owners")
        .then(response => response.json()))
      .then(owners => newState.owners = owners)
      .then(() => fetch("http://localhost:5002/animalOwners")
        .then(response => response.json()))
      .then(animalOwners => newState.animalOwners = animalOwners)
      .then(() => this.setState(newState))
  }

  deleteAnimal = id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch("http://localhost:5002/animals"))
      .then(e => e.json())
      .then(animals => this.setState({
        animals: animals
      })
      )
  }

  fireEmployee = id => {
    return fetch(`http://localhost:5002/employees/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch("http://localhost:5002/employees"))
      .then(response => response.json())
      .then(employees => this.setState({
        employees: employees
      })
      )
  }

  deleteOwner = id => {
    return fetch(`http://localhost:5002/owners/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch("http://localhost:5002/owners"))
      .then(response => response.json())
      .then(owners => this.setState({
        owners: owners
      })
      )
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} deleteAnimal={this.deleteAnimal} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} fireEmployee={this.fireEmployee} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner} />
        }} />
      </React.Fragment>
    )
  }
}

