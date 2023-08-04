import React, {useState, useEffect} from "react";
import PokemonList from "./PokemonList";
import axios from 'axios';

function App() {
  const  [pokemon, setPokemon] = useState(['Drippy', 'Gengar'])
  return (
   
    <PokemonList pokemon={pokemon} />

  );
}

export default App;
