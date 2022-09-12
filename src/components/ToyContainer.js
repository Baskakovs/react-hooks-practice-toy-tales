import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  return (
    <div id="toy-collection">{toys.map((item)=>{
      return <ToyCard toy={item}/>
    })}</div>
  );
}

export default ToyContainer;
