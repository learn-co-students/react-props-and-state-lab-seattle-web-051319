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

  adoptPet = id => {
    console.log('id in adopt pet', id)
    const newPets = this.state.pets.map(pet => {
      return pet.id ===id ? {...pet, isAdopted: true} : pet

    })
    console.log('new pets', newPets)
    // console.log(id)
    this.setState({
      pets: newPets
    })
  }

  changeType = newType => {
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  findPets = () => {
    fetch(`/api/pets${this.state.filters.type==="all"?"":"?type="+ this.state.filters.type}`)
    .then(res => res.json())
    .then(pets =>
      this.setState({
        pets: pets
    }))
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
              <Filters onChangeType = {this.changeType} onFindPetsClick = {this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet ={this.adoptPet}  pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
