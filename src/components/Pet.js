import React from 'react'

class Pet extends React.Component {

  // handleAdoptPet = () => {
  //         // console.log(this.props.pet)
  //         this.props.onAdoptPet(this.props.pet.id)
  //
  //      }

  handleClickAdoptPet = () => {
    // console.log(this.props.pet.id)
      this.props.onAdoptPet(this.props.pet.id)

  }

  render() {
    const {name, age, weight, type, gender, isAdopted} = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female"? '♀' :'♂' }
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
            {isAdopted === "false"? (
          <button className="ui disabled button">Already adopted</button>):

          (<button onClick={this.handleClickAdoptPet} className="ui primary button">Adopt Me</button>)
              }
        </div>
      </div>
    )
  }
}

export default Pet
