import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  
  onChangeType = (event) => {
    let newType = event.target.value; 
    let filters = {...this.state.filters};
    filters.type = newType

    this.setState({
      filters
    })
  }

  onFindPetsClick = (type) => {
    let ending = ""

    switch(type) {
      case "all":
        break
      case "cat":
      case "dog":
      case "micropig":
        ending = `?type=${type}`
        break
      default:
        console.log("AY!")
    }
    
    fetch(`/api/pets${ending}`)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        pets: json
      })
      console.log(this.state)
    })
  }

  onAdoptPet = (petId) => {
    let pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet;
    })
    this.setState({
      pets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} petType={this.state.filters.type}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
