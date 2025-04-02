import { Fragment, useState } from 'react';
import './App.css'

import City from "./assets/city.jpg";
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from "./components/Container";
import ExecuteFunction from './components/ExecuteFunction';


function App() {
  const [userName] = useState('Maria');
  
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 6652 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ];

  function showMessage () {
    console.log("componente pai")
  }
  return (
    <>
      <div>
        <h1>Avançando em React</h1>
      </div>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Img em asset*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
      <CarDetails  brand="VW" km={10000} color="azul"/>

      {/*loop*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      <Container>
        <p>teste container</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
    </>
  );
}

export default App
