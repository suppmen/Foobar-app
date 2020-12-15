import React from "react";


export default function OrderList(props) {
 
  const beerArray = props.data.taps;
console.log(beerArray)
  return (

      <div>
        <h1>Beer List</h1>

        {beerArray.map((name, i) => {
          return <p key={i}>{name.beer}</p>
        })}
      </div>
  );
}