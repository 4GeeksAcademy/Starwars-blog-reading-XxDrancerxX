import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Characters = () => {

    const [store, dispatch] = useGlobalReducer();

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
                                <Link to="/demo">
                                    <button style={{ marginRight: "35%" }} className="btn btn-primary mr-3">Learn More</button>
                                </Link>
                                <button onClick={() => { addFavoritesAndRemoveClick(item) }} className="btn btn-light">
                                    <i className="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
      

            {/* 
            {store.characterData.length > 0 ?
                store.characterData.map(
                    (chr) => {
                        return (
                            <div>
                                {chr}
                            </div>
                        )
                    }
                ) : "not found"} */}
        </div>
    )
}

