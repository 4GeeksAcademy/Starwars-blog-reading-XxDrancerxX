import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const getIdFromUrl = (url) => {
	console.log("item.url:", url); 
	const parts = url.split("/");
	const id = parts[parts.length - 2];
	console.log("Extracted ID:", id); 
	return id;
};

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	const [loading, setLoading] = useState(true);


	const baseUrl = "https://swapi.dev/api/" // or: https://swapi.tech/api/   //

	const allPromises = Promise.all([
		fetch(`${baseUrl}people`).then(resp => resp.json()),
		fetch(`${baseUrl}planets`).then(resp => resp.json()),
		fetch(`${baseUrl}vehicles`).then(resp => resp.json()),
	  ])
		.then(([peopleData, planetsData, vehiclesData]) => {
		  dispatch({ type: "set_character", payload: peopleData.results });
		  dispatch({ type: "set_planets", payload: planetsData.results });
		  dispatch({ type: "set_vehicles", payload: vehiclesData.results });
		  setLoading(false);
		})
		.catch(error => {
		  console.error(error);
		  setLoading(false);
		});

	// const getCharacters = () => {
	// 	fetch(`${baseUrl}people`)
	// 		.then((resp) => {
	// 			return resp.json()
	// 		})
	// 		.then((data) => {
	// 			dispatch({ type: "set_character", payload: data.results })
	// 		})
	// 		.catch((error) => {
	// 			console.log("This is the error character", error);
	// 		})
	// };

	// const getPlanets = () => {
	// 	fetch(`${baseUrl}planets`)
	// 		.then((resp) => {
	// 			return resp.json()
	// 		})
	// 		.then((data) => {

	// 			dispatch({ type: "set_planets", payload: data.results })
	// 		})
	// 		.catch((error) => {
	// 			console.log("This is the error planets", error);
	// 		})



	// };

	// const getVehicles = () => {
	// 	fetch(`${baseUrl}vehicles`)
	// 		.then((resp) => {
	// 			return resp.json()
	// 		})
	// 		.then((data) => {
	// 			dispatch({ type: "set_vehicles", payload: data.results })
	// 		})
	// 		.catch((error) => {
	// 			console.log("This is the error vehicles", error);
	// 		})
	// };

	// useEffect(() => {
	// 	getCharacters()
	// 	getVehicles()
	// 	getPlanets()
	// }, []);
	
	useEffect(() => {
		allPromises
	}, []);

	const addFavoritesAndRemoveClick = (item) => {

		if (store.favorites.includes(item)) {
			dispatch({ type: "remove_favorites", payload: item });
		} else {
			dispatch({ type: "add_favorites", payload: item });
		}
	}





	return (
		<div className="container">
			<h1 className="title" style={{ fontSize: "40px", color: "red" }}>Characters</h1>
			<div className="cards-characters row">
				{store.characterData.map((item, index) => (
					<div key={index} className="card col-auto" style={{ width: "18rem", margin: "10px auto", padding: "0" }}>
						<img src={rigoImageUrl} className="card-img-top" alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
						<div className="card-body">
							<h5 className="card-title"> {item.name}</h5>
							<p className="card-text">Gender: {item.gender}</p>
							<p className="card-text">Eye-color: {item.eye_color}</p>
							<p className="card-text">Hair-color: {item.hair_color}</p>
							<Link to={`/people/${getIdFromUrl(item.url)}`} className="btn btn-primary mr-3" style={{ marginRight: "35%" }}>
								Learn More
							</Link>
							<button onClick={() => { addFavoritesAndRemoveClick(item) }} className="btn btn-light">
								<i className="fas fa-heart"></i>
							</button>
						</div>
					</div>
				))}
			</div>

			<hr className="my-4" />

			<h1 className="title-3" style={{ fontSize: "40px", color: "red" }}>Planets</h1>
			<div className="cards-characters row">
				{store.planetsData.map((item, index) => (
					<div key={index} className="card col-auto" style={{ width: "18rem", margin: "10px auto", padding: "0" }}>
						<img src={rigoImageUrl} className="card-img-top" alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">Climate: {item.climate}</p>
							<p className="card-text">Diameter: {item.diameter}</p>
							<p className="card-text">Gravity: {item.gravity}</p>
							<Link to={`/planets/${getIdFromUrl(item.url)}`}>
								<button style={{ marginRight: "35%" }} className="btn btn-primary mr-3">Learn More</button>
							</Link>
							<button className="btn btn-light">
								<i className="fas fa-heart"></i>
							</button>
						</div>
					</div>
				))}
			</div>

			<hr className="my-4" />

			<h1 className="title-2" style={{ fontSize: "40px", color: "red" }}>Vehicles</h1>
			<div className="cards-characters row">
				{store.vehiclesData.map((item, index) => (
					<div key={index} className="card col-auto" style={{ width: "18rem", margin: "10px auto", padding: "0" }}>
						<img src={rigoImageUrl} className="card-img-top" alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">Cargo capacity: {item.cargo_capacity}</p>
							<p className="card-text">Consumables: {item.consumables}</p>
							<p className="card-text">Cost in Credits: {item.cost_in_credits}</p>
							<Link to={`/vehicles/${getIdFromUrl(item.url)}`}>
								<button style={{ marginRight: "35%" }} className="btn btn-primary mr-3">Learn More</button>
							</Link>
							<button className="btn btn-light">
								<i className="fas fa-heart"></i>
							</button>
						</div>
					</div>
				))}
			</div>

		</div>




	);
};