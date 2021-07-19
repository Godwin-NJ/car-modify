import React,{useContext} from 'react';
import Car from './component/Car'
import CarFeatures from './component/Features'
// import {useGlobalContext} from './context'

function App() {


  return (
    <div className="App">
      < Car />
      <CarFeatures />
    </div>
  );
}

export default App;



