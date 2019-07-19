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

  findPets = () => {
      fetch(
          `/api/pets${
              this.state.filters.type === "all"
              ?  ""
              : "?type=" + this.state.filters.type
          }`
      )
      .then(res => res.json())
      .then(data =>
          this.setState({
              pets: data
          })
      )
      .catch(err => console.log(err))
  }

  changeType = (newType) => {
        this.setState({
            filters: {
                type: newType
            }
        })
  }
  adoptPet = (id) => {
      console.log(id)
      this.setState(prevState => {
          return prevState.pets.map(pet => {
              pet.id === id? pet.isAdopted=true: null
          })
          // return prevState
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
