import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import ToySearch from "./ToySearch";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

const filteredArray = toys.filter(toy =>{
   return toy.name.toLowerCase().includes(search.toLowerCase())
})

  return (
    <>
      <Header />
      <ToySearch search={search} setSearch={setSearch} setToys={setToys}/>
      {showForm ? <ToyForm setToys={setToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={filteredArray} setToys={setToys}/>
    </>
  );
}

export default App;
