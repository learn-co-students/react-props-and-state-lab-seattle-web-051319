import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  // this.props = {pets: []}

  displayPets = () => {
  return this.props.pets.map(pet => {
      return <Pet onAdoptPet={this.props.onAdoptPet} key={pet.id} pet={pet} />
    })
  }
  render() {
    return <div className="ui cards">
              {this.displayPets()}
          </div>
  }
}

export default PetBrowser
