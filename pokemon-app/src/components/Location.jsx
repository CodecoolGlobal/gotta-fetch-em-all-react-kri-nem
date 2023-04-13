import React, { useEffect, useState } from "react";
import FightingPokemon from "./FightingPokemon";

function Location({ onOwnPokemonSelect, areaPokemonsUrl, userPokemonsURL }) {
  const [encounterPokemonUrl, setEncounterPokemonUrl] = useState('');
  const [encounterPokemon, setEncounterPokemon] = useState(null);
  const [userPokemons, setUserPokemons] = useState([]);

  useEffect(() => {
    let encounterURL = '';

    fetch(areaPokemonsUrl)
      .then((res) => res.json())
      .then((data) => {
        setEncounterPokemonUrl(data.pokemon_encounters[0].pokemon.url)
        return data.pokemon_encounters[0].pokemon.url;
      })
      .then(url => {
        Promise.all([...userPokemonsURL.map(p => fetch(p)), fetch(url)])
        .then(res => Promise.all(res.map(r => r.json())))
        .then(data => {setUserPokemons(data.slice(0, data.length - 1)); 
          console.log(data);
          setEncounterPokemon(data[data.length - 1])});
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  }, [areaPokemonsUrl]);

  function handleCLick (event) {
    onOwnPokemonSelect(event.currentTarget.dataset.url, encounterPokemonUrl)
  }

  return (
  <>
  {encounterPokemon && userPokemons && (<div className='ownPokemons'>
    {userPokemons.map((pokemon, index) => <div key={index} data-url={userPokemonsURL[index]} onClick={handleCLick}>
      <div></div> 
    <FightingPokemon   className='own' pokemon={pokemon}/></div>)}
  </div>)}
  <div><FightingPokemon className='encountered' pokemon={encounterPokemon}/></div>
  </>
  );
}

export default Location;
