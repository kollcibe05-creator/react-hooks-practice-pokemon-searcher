import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemon(data))
  }, [])
  function postPokemon(formData) {
      fetch("http://localhost:3001/pokemon", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
          "Accept": "application/json"
        }, 
        body: JSON.stringify(formData)
      })
      .then(r => r.json())
      .then(data => setPokemon([...pokemon, data]))
  }
  const pokemonDisplayed = pokemon.filter(pokemon => pokemon.name.includes(searchTerm))
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmission={postPokemon}/>
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <br />
      <PokemonCollection pokemonList={pokemonDisplayed}/>
    </Container>
  );
}

export default PokemonPage;
