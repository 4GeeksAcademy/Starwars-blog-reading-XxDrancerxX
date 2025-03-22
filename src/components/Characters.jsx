import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Characters = () => {

    const [store, dispatch] = useGlobalReducer();

    return (
        <div className="condition">

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

