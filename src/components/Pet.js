import React from 'react'

class Pet extends React.Component {

  handleAdoptPet = () => {
    console.log('hit handle adopt pet in pet')
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    let {type, name, weight, age, isAdopted, gender} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female" ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
          <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted === false ?
            <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>:
            <button className="ui disabled button">Already adopted</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
