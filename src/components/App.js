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

  /* define onChangeType function
  Will change App's state.filters.type */
  onChangeType = (event) => {
    console.log(event.target.value)
    this.setState({
      ...this.state,
      filters: {
        type: event.target.value
      }

    })
  }

  /* define onFindPetsClick
  Will fetch list of pets using fetch() */
  onFindPetsClick = () => {
    let url = '';
    if (this.state.filters.type === "all") {
      url = "/api/pets"
    } else if (this.state.filters.type === "cat") {
      url = "/api/pets?type=cat"
    } else if (this.state.filters.type === "dog") {
      url = "/api/pets?type=dog"
    } else if (this.state.filters.type === "micropig") {
      url = "/api/pets?type=micropig"
    }

    fetch(url)
    .then(resp => resp.json())
    .then(json => this.setState({
      ...this.state,
      pets: json
    }))
  }

  onAdoptPet = (id) =>  {
    // let newPets = this.state.pets.map(
    //   pet => {
    //   if (pet.id === id){ pet.isAdopted = true
    //   }
    //   return pet}
    // )
    let newPets = this.state.pets.map(pet => { pet.id === id ? pet.isAdopted = true :  null; return pet })


    // console.log("I'm adopted!", id, newPets)
    this.setState({
      ...this.state,
      pets: newPets
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
            {/*Pass onChangeType to Filters component*/}
            {/*Pass onFindPetsClick */}
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
