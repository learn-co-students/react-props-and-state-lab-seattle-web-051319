import React from 'react'

class Pet extends React.Component {

    handleAdoptPet = () => {
        // console.log(this.props.pet)
        this.props.onAdoptPet(this.props.pet.id)

    }
  render() {
      // let currentPet = this.props.pet
      const {name, type, age, weight, gender, isAdopted} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female" ? '♀' : '♂' }
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
        {isAdopted === !false ? (
          <button className="ui disabled button">Already adopted</button>
            ) : (
          <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
