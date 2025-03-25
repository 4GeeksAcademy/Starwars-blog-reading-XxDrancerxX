// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";


export const SinglePage = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const type = location.pathname.split("/")[1];

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://swapi.dev/api/${type}/${id}/`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch data");
        }
        else {
          return resp.json()
        }
      })
      .then((data) => {
        console.log(data)
        setItem(data)
        setLoading(false);
      })
      .catch((error) => {
        console.error(error)
        setError("Failed to load data. Please try again.");
        setLoading(false);
      })

  }, [id, type]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container" >
      <div className="row row-content">
        <div className="col-6">
          <img className="img-fluid" src={rigoImageUrl} alt={id} />
        </div>
        <div className="col-6">
          <h4>{item.name}</h4>
          <p className="content">This is the content for the second column.</p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="row row-attributes">
        <div className="col-3">
          <h4>Birth year:</h4>
          <p>{item.birth_year}</p>
        </div>
        <div className="col-3">
          <h4>Height:</h4>
          <p>{item.height}</p>
        </div>
        <div className="col-3">
          <h4>Mass:</h4>
          <p>{item.mass}</p>
          
        </div>
        <div className="col-3">
          <h4>Starships</h4>
          <p>{item.starships[0]}</p>
          <p>{item.starships[1]}</p>
        </div>
      </div>


    </div>
  );
};
