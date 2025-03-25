// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
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

    fetch(`https://www.swapi.dev/api/${type}/${id}/`)
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



  return (
    <div className="container">
      <div className="row row-content">
        <img src={rigoImageUrl} alt={id} />
        <p className="content"></p>
      </div>

      <hr className="my-4" />
      
      <div className="row row-attributes">
      
      </div>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>

    </div>
  );
};
