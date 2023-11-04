import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/context";
import Card from "../component/Card";
import '../../styles/index.css';
import characters from '../../img/characters.jpeg';
import vehicles from '../../img/vehicles.jpeg';
import planets from '../../img/planets.jpeg';





function Home(props) {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getPeople();
    actions.getPeopleInfo(params.id);
    actions.getPlanet();
    actions.getVehicle();
  }, []);
  return (
    <div className="App">
      <div className="py-2 card-bg">
        <h1 >Personajes de StarWars</h1>
        <div className="container-fluid row justify-content-center m-0">
          {store.listOfPeople.map((people, index) => {
            return (
              <Card
                key={index}
                id={people.uid}
                name={people.name}
                gender={people.gender}
                homeworld={people.homeworld}
                route="people"
                img= {characters}
              />
            );
          })}
        </div>
      </div>
      <div className="py-2 card-bg">
        <h1 >Vehículos en StarWars</h1>
        <div className="container-fluid row justify-content-center m-0">
          {store.listOfVehicles.map((vehicle, index) => {
            return (
              <Card
                key={index}
                id={vehicle.uid}
                name={vehicle.name}
                route="vehicle"
                img={vehicles}
              />
            );
          })}
        </div>
      </div>
      <div className="py-2 card-bg">
        <h1 >Planetas en StarWars</h1>
        <div className="container-fluid row justify-content-center px-0">
          {store.listOfPlanets.map((planet, index) => {
            return (
              <Card
                key={index}
                id={planet.uid}
                name={planet.name}
                route="planet"
                img={planets}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;