import './App.css'

import City from "./assets/city.jpg";
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {

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
    </>
  );
}

export default App
