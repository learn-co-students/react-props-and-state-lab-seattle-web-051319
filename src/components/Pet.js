import React from 'react'

class Pet extends React.Component {

  isPetAdopted = () => {
    return (this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={()=>{this.props.onAdoptPet(this.props.pet.id)}} className="ui primary button">Adopt pet</button>)
  }

  render() {

    const pet = this.props.pet;
    let gender = this.props.pet.gender;
    if (gender === "male"){
      gender = "♂"
    } else if (gender === "female"){
      gender = "♀"
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {pet.name}
            {gender}
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
          {this.isPetAdopted()}
        </div>
      </div>
    )
  }
}

export default Pet
