import React, { Component } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends Component {
	constructor() {
		super();
		this.state = {
			pets: [],
			filters: {
				type: "all"
			}
		};
	}
	
	onChangeType = (event) => {
		this.setState({
			filters: {type: event.target.value}
		});
	};
	
	onFindPetsClick = () => {
		let urlPath = null;
		
		if (this.state.filters.type === "all") {
			urlPath = "/api/pets";
		} else {
			urlPath = `/api/pets?type=${this.state.filters.type}`
		}
		
		fetch(urlPath)
			.then(response => response.json())
			.then(json => {
				this.setState({
					pets: json
				})
			});
	};
	
	onAdoptPet = (petId) => {
		const petsUpdate = this.state.pets.map(pet => {
				if (pet.id === petId) {
					return {...pet, isAdopted: true};
				} else {
					return pet;
				}
		});
		
		this.setState({
			pets: petsUpdate
		});
	}

	render() {			
		return (
			<div className="ui container">
				<header>
					<h1 className="ui dividing header">React Animal Shelter</h1>
				</header>
				<div className="ui container">
					<div className="ui grid">
						<div className="four wide column">
							<Filters onFindPetsClick={this.onFindPetsClick}
											 onChangeType={this.onChangeType} />
						</div>
						<div className="twelve wide column">
							<PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;