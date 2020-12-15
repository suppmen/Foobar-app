
import { getData, getBeers } from "./Modules/rest";
import React, {useState, useEffect} from "react";
import './App.css';
import OrderList from "./Components/OrderList";

function App() {
  const [data, setData] = useState({});
  const [beers, setBeers] = useState({});

  
  
  useEffect(() => {
    getData(setData);
   getBeers(setBeers);

   setInterval(() => {
     getData(setData);
   }, 10000);
      getData(setData);
  }, []); 

  return (
    <div className="App">
     <h1>Hello World</h1>
     {data.bar && <OrderList data={data} />}
    </div>
  );
}

export default App;
