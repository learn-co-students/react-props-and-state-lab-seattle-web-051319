import React from 'react'

class Filters extends React.Component {

  constructor() {
    super()
    this.state = {
      pet: ''
    }
  }

  changeType = event => {
    this.setState({pet: event.target.value})
    this.props.onChangeType(event.target.value)
  }


  findPets = () => {
    this.props.onFindPetsClick(this.state.pet)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.changeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.findPets}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
