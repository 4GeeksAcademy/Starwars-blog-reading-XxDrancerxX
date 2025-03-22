import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";



export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const baseUrl = "https://www.swapi.tech/api/" // or: https://swapi.tech/api/   //
    
	

	const getCharacters = () => {
        fetch(`${baseUrl}people`)
		.then((resp) =>{
			console.log("All the Characters(rsp):", resp)
			return resp.json()
			
		})
		.then((data) => {
			console.log("Data of Characters:", data);
			 dispatch({type:"set_character", payload:data.results})
		})
		.catch((error) => {
			console.log("This is the error character",error);			
		})
	  };

	  const getPlanets = () => {
        fetch(`${baseUrl}planets`)
		.then((resp) =>{
			console.log("All the planets(rsp):", resp)
			return resp.json()
			
		})
		.then((data) => {
			console.log("Data of planets:", data);
			dispatch({type:"set_planets", payload:data.results})
		})
		.catch((error) => {
			console.log("This is the error planets",error);
			
		})
		
    };

	const getVehicles = () => {
        fetch(`${baseUrl}vehicles`)
		.then((resp) =>{
			console.log("All the vehicles(rsp):", resp)
			return resp.json()
			
		})
		.then((data) => {
			console.log("Data of vehicles:", data);
			dispatch({type:"set_vehicles", payload:data.results})
		})
		.catch((error) => {
			console.log("This is the error vehicles",error);
			
		})
		
    };
	

 console.log(store,"Data stored");
 
 

	const cardData = [
		{
			id: 1,
			title: "Card title 1",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			imageUrl: rigoImageUrl,
		},
		{
			id: 2,
			title: "Card title 2",
			text: "Some more example text to build on the card title and make up the bulk of the card's content.",
			imageUrl: rigoImageUrl,
		}
		
	];
	useEffect(() => {
        getCharacters()
		getVehicles()
		getPlanets()
    }, []);

	return (
		<div className="container">

			


		</div>
	);
};