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

  updatePetInfo = petId => {
    const allPets = this.state.pets
    const singlePet = allPets.find(onePet => petId === onePet.id)
    if (singlePet.isAdopted === true) {
      singlePet.isAdopted = false
    }
    else {
      singlePet.isAdopted = true
    }

    this.setState({pets: allPets})
  }

  updateTypeFilters = type => {
    const updatedType = {...this.state.filters}
    updatedType.type = type
    this.setState({filters: updatedType})
  }

  fetchPets = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(res => res.json())
      .then(json => this.setState({pets: json}))
    }
    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(json => this.setState({pets: json}))
    }
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
              <Filters onChangeType={this.updateTypeFilters} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.updatePetInfo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
