import React, { Component } from "react";
import Pet from "./Pet";

class PetBrowser extends Component {
	render() {
		return (
			this.props.pets.map(pet => {
				return (
					<div className="ui cards" key={pet.id}>
						<Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>
					</div>
				);
			})
		);
	}
}

export default PetBrowser;