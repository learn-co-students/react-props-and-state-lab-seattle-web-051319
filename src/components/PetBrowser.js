import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  createPetCards = () => {
    return this.props.pets.map((pet, index) => {
      return <div className="ui cards" key={index}><Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/></div>
    })
  }
  render() {
    return this.createPetCards()
  }
}

export default PetBrowser
