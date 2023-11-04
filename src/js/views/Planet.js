
import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";
import planets from '../../img/planets.jpeg';

const Planet = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getPlanetInfo(params.id);
  }, []);

  return (
    <div className="container-fluid">
      <h1
        className="title text-center mb-4"

      >
        {store.planet.name}
      </h1>
      <hr className="line" />
      <br />
      <div className="row justify-content-md-center">
        <div className="col-6">
          <img
            src={planets}
            className="imagen-planetas"
            alt="..."

          />
        </div>
        <div className="col-6  mt-4">
          <ul>
            <li className="texto">Rotation Period: {store.planet.rotation_period}</li>
            <li className="texto">Orbital Period: {store.planet.orbital_period}</li>
            <li className="texto">Diameter: {store.planet.diameter}</li>
            <li className="texto">Climate: {store.planet.climate}</li>
            <li className="texto">Gravity: {store.planet.gravity}</li>
            <li className="texto">Terrain: {store.planet.terrain}</li>
            <li className="texto">Surface Water: {store.planet.surface_water}</li>
            <li className="texto">Population: {store.planet.poliulation}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Planet;