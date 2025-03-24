import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";



export const Home = () => {
	const { store, dispatch } = useGlobalReducer();


	const baseUrl = "https://swapi.dev/api/" // or: https://swapi.tech/api/   //



	const getCharacters = () => {
		fetch(`${baseUrl}people`)
			.then((resp) => {
				return resp.json()
			})
			.then((data) => {
				dispatch({ type: "set_character", payload: data.results })
			})
			.catch((error) => {
				console.log("This is the error character", error);
			})
	};

	const getPlanets = () => {
		fetch(`${baseUrl}planets`)
			.then((resp) => {
				return resp.json()
			})
			.then((data) => {
				dispatch({ type: "set_planets", payload: data.results })
			})
			.catch((error) => {
				console.log("This is the error planets", error);
			})



	};

	const getVehicles = () => {
		fetch(`${baseUrl}vehicles`)
			.then((resp) => {
				return resp.json()
			})
			.then((data) => {
				dispatch({ type: "set_vehicles", payload: data.results })
			})
			.catch((error) => {
				console.log("This is the error vehicles", error);
			})
	};

	useEffect(() => {
		getCharacters()
		getVehicles()
		getPlanets()
	}, []);

	const addFavoritesAndRemoveClick = (item) => {

		if (store.favorites.includes(item)) {
			dispatch({ type: "remove_favorites", payload: item });
		} else {
			dispatch({ type: "add_favorites", payload: item });
		}
	}
	console.log(store);

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
							<p className="card-text">Skin color: {item.skin_color}</p>
							<a href="#" className="btn btn-primary mr-3" style={{ marginRight: "35%" }}>
								Learn more
							</a>
							{/* <Link to="/demo">
								<button style={{ marginRight: "35%" }} className="btn btn-primary mr-3">Learn More</button>
							</Link> */}
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
							<p className="card-text">1</p>
							<p className="card-text">2</p>
							<p className="card-text">3</p>
							<p className="card-text">{item.url}</p>
							<a href="#" className="btn btn-primary mr-3" style={{ marginRight: "35%" }}>
								Learn more
							</a>
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
							<p className="card-text">1</p>
							<p className="card-text">2</p>
							<p className="card-text">3</p>
							<p className="card-text">{item.url}</p>
							<a href="#" className="btn btn-primary mr-3" style={{ marginRight: "35%" }}>
								Learn more
							</a>
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