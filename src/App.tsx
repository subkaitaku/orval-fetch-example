import React from "react";
import type { Pet } from "./generated/endpoints";
import { listPets } from "./generated/endpoints";
import "./App.css";

function App() {
	const [pets, setPets] = React.useState<Pet[]>([]);

	React.useEffect(() => {
		listPets().then((res) => {
			setPets(res.data);
		});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Pets</h1>
				<ul>
					{pets.map((pet: Pet) => (
						<li key={pet.id}>{pet.name}</li>
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
