import React, { Component } from "react";

class Pet extends Component {
			
	displayButton = () => {
		const pet = this.props.pet;
		
		if (pet.isAdopted === false) {
			return <button className="ui primary button" onClick={(event) => this.props.onAdoptPet(pet.id)}>Adopt pet</button>
		} else {
			return <button className="ui disabled button">Already adopted</button>
		}
	};

	render() {
		const pet = this.props.pet;
				
		return (			
			<div className="card">
				<div className="content">
					<a className="header">
						{(pet.gender === "male") ? "♂ ": "♀ "}
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
					{this.displayButton()}
				</div>
			</div>
		);
	}
	
}

export default Pet;