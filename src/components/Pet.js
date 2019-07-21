import React from 'react'

class Pet extends React.Component {
  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }
  
  render() {
    let pet = this.props.pet;

    let gender = "";

    if (pet.gender === "male") {
      gender = '♂'
    } else if (pet.gender === "female") {
      gender = '♀'
    }

    // Should receive an onAdoptPet callback prop. This callback prop gets called with the pet's id when the user clicks the adopt pet button — not when they click the disabled button!
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (<button onClick={this.handleClick} className="ui primary button">Adopt pet</button>)}         
        </div>
      </div>
    )
  }
}

export default Pet
