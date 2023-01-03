import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import imgCard from "../../img/img-card.webp";
import { Context } from "../store/appContext";

export const Home = () => {

  const [loading, modifyLoading] = useState(true);
  const { store, actions } = useContext(Context)


  useEffect(() => {
    async function fetchData() {
      await actions.getPeople();
      await actions.getPlanets();
      await actions.getVehicles();
      modifyLoading(false);
    }
    fetchData();
  }, []);
  

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-warning" role="status"></div>
      </div>
    );
  }

  return (
    <div className="container-fluid px-5">
      <h2>PEOPLES</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {store.people.map((character) => {
          return (
            <div className="col" key={character.uid}>
              <div className="card my-2" style={{ width: "18rem" }}>
                <img src={imgCard} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">{character.gender}</p>
                  <Link
                    className="btn btn-outline-dark"
                    to={`/character/${character.uid}`}
                  >
                    Learn more!
                  </Link>
                  <button
							    type="button"
							    className="btn btn-outline-dark float-end"
                  onClick={(e)=>actions.handleFavorites(character.name)}
                  >
                    
                  <i className={"fas fa-heart"}/>
						      </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2>PLANETS</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {store.planets.map((planet) => {
          return (
            <div className="col" key={planet.uid}>
              <div className="card my-2" style={{ width: "18rem" }}>
                <img src={imgCard} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{planet.name}</h5>
                  <p className="card-text">{planet.terrain}</p>
                  <Link
                    className="btn btn-outline-dark"
                    to={`/planet/${planet.uid}`}
                  >
                    Learn more!
                  </Link>
                  <button
							    type="button"
							    className="btn btn-outline-dark float-end"
                  onClick={(e)=>actions.handleFavorites(planet.name)}
                  >
                    
                  <i className={"fas fa-heart"}/>
						      </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2>VEHICLES</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {store.vehicles.map((vehicle) => {
          return (
            <div className="col" key={vehicle.uid}>
              <div className="card my-2" style={{ width: "18rem" }}>
                <img src={imgCard} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{vehicle.name}</h5>
                  <p className="card-text">{vehicle.model}</p>
                  <Link
                    className="btn btn-outline-dark"
                    to={`/vehicle/${vehicle.uid}`}
                  >
                    Learn more!
                  </Link>
                  <button
							    type="button"
							    className="btn btn-outline-dark float-end"
                  onClick={(e)=>actions.handleFavorites(vehicle.name)}
                  >
                    
                  <i className={"fas fa-heart"}/>
						      </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home