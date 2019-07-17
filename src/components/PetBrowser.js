import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const allPets = this.props.pets.map((element) => {
      return <Pet pet={element} key={element.id} onAdoptPet={this.props.onAdoptPet}/>
    })
    return (
      <div className="ui cards">
        {allPets}
      </div>
    )
  }
}

export default PetBrowser
