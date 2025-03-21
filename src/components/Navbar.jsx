import { Link } from "react-router-dom";
const starWarsImageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b8/StarWarsLogo.jpeg";

export const Navbar = () => {

	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand"><img style={{width: "92px", height: "50px"}} src={starWarsImageUrl} alt="Star Wars Iocn"/></a>
				</Link>
				<form className="d-flex" role="search">
					<Link to="/demo">
						<button classNameName="btn btn-primary">Check the Context in action</button>
					</Link>
					<div className="dropdown">
						<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown link
						</a>

						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</form>
			</div>

		</nav >
	);
};


