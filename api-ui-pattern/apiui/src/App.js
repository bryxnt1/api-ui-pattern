import './App.css';
import Card from './Card.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState({});
const [pokemonIndex, setPokemonIndex] = useState(1)

useEffect(() => {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
.then(res => res.json())
.then(data => setData(data))
}, [pokemonIndex]);

function nextPokemon()
{
    setPokemonIndex((prev) => prev ++)

}

function prevPokemon()
{
    setPokemonIndex(((prev) => prev - 1))

}
  return (
   < div className="box">

    <button onClick={() => prevPokemon()} >prev</button>

    <Card data={data}/>

    <button onClick={() => {
      setPokemonIndex(((prev) => prev + 1))
    }}>next</button>

   </div>
  );
}

export default App;
