import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";



export const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	

	const baseUrl = "https://www.swapi.tech/api/" // or: https://swapi.tech/api/   //



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

const addFavoritesAndRemoveClick = (item) =>{
	console.log("Clicked item:", item);
    console.log("Current favorites:", store.favorites);
	if (store.favorites.includes(item)) {
        console.log("Removing from favorites:", item);
        dispatch({ type: "remove_favorites", payload: item });
        console.log("Updated favorites after removal:", store.favorites);
    } else {
        console.log("Adding to favorites:", item);
        dispatch({ type: "add_favorites", payload: item });
        console.log("Updated favorites after addition:", store.favorites);
    }
}

	return (
		<div className="container">
			<h1 className="title" style={{ fontSize: "40px", color: "red" }}>Characters</h1>
			<div className="cards-characters row">
				{store.characterData.map((item, index) => (
				  <div key={index} className="card col-auto" style={{ width: "18rem", margin: "10px auto", padding: "0" }}>
						 <img src={rigoImageUrl} className="card-img-top" alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">1</p>
							<p className="card-text">2</p>
							<p className="card-text">3</p>
							<p className="card-text">{item.url}</p>
							<a href="#" className="btn btn-primary mr-3" style={{ marginRight: "35%" }}>
								Learn more
							</a>
							<button onClick={()=>{addFavoritesAndRemoveClick(item)}} className="btn btn-light">
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
						 <img src={rigoImageUrl} className="card-img-top" alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
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
						 <img src={rigoImageUrl} className="card-img-top" alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
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