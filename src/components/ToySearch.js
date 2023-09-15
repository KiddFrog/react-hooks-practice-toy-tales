import React from "react";

export default function ToySearch({search, setSearch}){
    function handleChange(event){
       setSearch(event.target.value)    
        //console.log(event.target.value);
    }
return (
<div className="Toy-Search">
    <label>Search Toys!</label>
    <input type="search" name="search" id="search" onChange={handleChange}></input>
</div>
);

}