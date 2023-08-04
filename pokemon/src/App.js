import React, {useState, useEffect} from "react";
import PokemonList from "./PokemonList";
import axios from 'axios';

function App() {
  const  [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancel
    setLoading(true)
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
    setPokemon(res.data.results.map(p => p.name))
  })

  return () => cancel.cancel()

  }, [currentPageUrl])
  
if (loading) return 'loading...'
  return (
   
    
    <PokemonList pokemon={pokemon} />

  );
}

export default App;
