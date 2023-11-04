import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";
import vehicles from '../../img/vehicles.jpeg';

const Vehicle = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getVehicleInfo(params.id);
  }, []);

  return (
    <div className="container-fluid">
      <h1
        className="title"

      >
        {store.vehicle.name}
      </h1>
      <hr className="line" />
      <br />
      <div className="row justify-content-md-center">
        <div className="col-6">
          <img
            src={vehicles}
            className="imagen-vehiculo"
            alt="..."
          />
        </div>
        <div className="col-6 ">
          <ul>
            <li className="texto">Model: {store.vehicle.model}</li>
            <li className="texto">Length: {store.vehicle.length}</li>
            <li className="texto">Passengers: {store.vehicle.passengers}</li>
            <li className="texto">Capacity: {store.vehicle.cargo_capacity}</li>
            <li className="texto">Consumables: {store.vehicle.consumables}</li>
            <li className="texto">Crew: {store.vehicle.crew}</li>
            <li className="texto">Created: {store.vehicle.created}</li>
            <li className="texto">Edited: {store.vehicle.edited}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Vehicle;