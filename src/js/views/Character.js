import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";
import characters from '../../img/characters.jpeg';

const Character = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getPeopleInfo(params.id);
  }, []);

  return (
    <div className="container-fluid">
      <h1
        className="title"
      >
        {store.people.name}
      </h1>
      <hr className="line" />

      <br />
      <div className="row justify-content-md-center">
        <div className="col-6">
          <img
            src={characters}
            className="imagen-personaje"
            alt="..."
          />
        </div>
        <div className="col-6 mt-4">
          <ul>
            <li className="texto">Height: {store.people.height}</li>
            <li className="texto">Mass: {store.people.mass}</li>
            <li className="texto">Hair: {store.people.hair_color}</li>
            <li className="texto">Skin Color: {store.people.skin_color}</li>
            <li className="texto">Eye Color: {store.people.eye_color}</li>
            <li className="texto">Birth year: {store.people.birth_year}</li>
            <li className="texto">Gender: {store.people.gender}</li>
            <li className="texto">Created: {store.people.created}</li>
            <li className="texto">Edited: {store.people.edited}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;