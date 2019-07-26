import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  // this.props = {pets: []}

  displayPets = () => {
  return this.props.pets.map((pet, i) => {
      // console.log()
      return <Pet onAdoptPet={this.props.onAdoptPet} key={i} pet={pet} />
    })
  }
  render() {
    return <div className="ui cards">
              {this.displayPets()}
          </div>
  }
}

export default PetBrowser
