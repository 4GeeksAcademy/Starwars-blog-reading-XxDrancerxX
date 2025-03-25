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
				<div className="navbar-brand">
					<img style={{ width: "92px", height: "50px" }} src={starWarsImageUrl} alt="Star Wars Iocn" />
				</div>

				<form className="d-flex" role="search">
					<div className="dropdown">
						<Link to="/">
							<button className="btn btn-primary">Back home</button>
						</Link>
						<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<span
								style={{
									width: "10px",
									height: "10px",
									backgroundColor: "#fff",
									borderRadius: "50%",
									display: "inline-block",
									marginLeft: "10px"
								}}
								className="me-2"
							/>
						</a>

						<ul className="dropdown-menu" style={{ left: 'auto', right: '-2px' }}>
							{store.favorites.length === 0 ? (
								<li className="dropdown-item">No favorites for now</li>
							) : (
								store.favorites.map((item, index) => (
									<React.Fragment key={index}>
										<li className="dropdown-item d-flex justify-content-between align-items-center">
											{item.name}
											<i className="fa-solid fa-trash r"></i>
										</li>
										{index < store.favorites.length - 1 && <hr style={{ width: '100%', margin: '0' }} />}
									</React.Fragment>
								))
							)}
						</ul>
					</div>
				</form>
			</div >

		</nav >
	);
};


