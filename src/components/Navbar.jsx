import { Link } from "react-router-dom";
const starWarsImageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b8/StarWarsLogo.jpeg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";


export const Navbar = () => {
	const { store } = useGlobalReducer();
	console.log("Navbar favorites:", store.favorites);
	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<div className="navbar-brand">
						<img style={{ width: "92px", height: "50px" }} src={starWarsImageUrl} alt="Star Wars Iocn" />
					</div>
				</Link>
				<form className="d-flex" role="search">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					<div className="dropdown">
						<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown link
						</a>

						<ul className="dropdown-menu" style={{ left: 'auto', right: '-10px' }}>
							{store.favorites.length === 0 ? (
								 <li className="dropdown-item">No favorites for now</li>
							) : (
								store.favorites.map((item, index) => (
									<React.Fragment key={index}>
									<li className="dropdown-item">{item.name}</li>
									{index < store.favorites.length - 1 && <hr style={{ width: '100%', margin: '0' }} />}
									
								</React.Fragment>
								))
							)}
						</ul>
					</div>
				</form>
			</div>

		</nav >
	);
};


