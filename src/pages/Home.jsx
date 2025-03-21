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
			return data
		})
    };
	



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
        getCharacters();
    }, []);

	return (
		<div className="container">

			<h1 className="text-center" style={{ fontSize: "40px", color: "red" }}>Characters</h1>
			<div className="cards-characters  row">
				{cardData.map((item) => (
					<div key={item.id} className="card col-auto" style={{ width: "18rem", margin: "10px auto" }}>
						<img src={item.imageUrl} className="card-img-top" alt={item.title} />
						<div className="card-body">
							<h5 className="card-title">{item.title}</h5>
							<p className="card-text">{item.text}</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				))}
			</div>



		</div>
	);
};