import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  return (
    <div id="toy-collection">
              {toys.map(toy =>{
                return <ToyCard key={toy.id} {...toy} setToys={setToys} />
              })}
    </div>
  );
}

export default ToyContainer;
