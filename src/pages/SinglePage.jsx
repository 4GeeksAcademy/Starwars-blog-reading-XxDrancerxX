// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { getIdFromUrl } from "./Home";

export const SinglePage = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  console.log(`SinglePage rendered for ${type}/${id}`);

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



  const displayProperties = {
    people: {
      description: [
        { key: "created", label: "Created" },
        { key: "edited", label: "Edited" },
        { key: "homeworld", label: "Homeworld" },
      ],
      attributes: [
        { key: "birth_year", label: "Birth year" },
        { key: "height", label: "Height" },
        { key: "mass", label: "Mass" },
        { key: "skin_color", label: "Skin color" },
      ],
    },
    planets: {
      description: [
        { key: "climate", label: "Climate" },
        { key: "diameter", label: "Diameter" },
        { key: "gravity", label: "Gravity" },
      ],
      attributes: [
        { key: "orbital_period", label: "Orbital Period" },
        { key: "terrain", label: "Terrain" },
        { key: "population", label: "Population" },
        { key: "surface_water", label: "Surface water" },
      ],
    },
    vehicles: {
      description: [
        { key: "crew", label: "Crew" },
        { key: "manufacturer", label: "Manufacturer" },
        { key: "length", label: "Length" },
      ],
      attributes: [
        { key: "max_atmosphering_speed", label: "Max Atmosphering Speed" },
        { key: "model", label: "Model" },
        { key: "passengers", label: "Passengers" },
        { key: "vehicle_class", label: "Vehicle Class" },
      ],
    },
  };

  if (!displayProperties[type]) {
    return <div>Unknown type</div>;
  }
  if (loading) return (
    <div className="text-center my-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Loading data...</p>
    </div>
  );
  if (error) return <div>{error}</div>;

  return (
    <div className="container" >
      <div className="row row-content">
        <div className="col-6">
          <img className="img-fluid" style={{ width: "100%" }} src="https://images.alphacoders.com/251/251641.jpg" alt={id} />
        </div>
        <div className="col-6">
          <h4>{item.name}</h4>
          {displayProperties[type].description.map(
            ({ key, label }, index) => {
              return (
                <p key={index} className="content">
                  {label}: {item[key] || "Unknown"}
                </p>

              )
            }
          )}
        </div>
      </div>

      <hr className="my-4" />

      <div className="row row-attributes">
        {displayProperties[type].attributes.map(
          ({ key, label }, index) => {
            return (
              <div key={index} className="col-3">
                <h4>{label}</h4>
                <p>{item[key]|| "Unknown"} </p>
              </div>

            )
          }
        )}


      </div>
    </div>)
};
