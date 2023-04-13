import React, { useEffect, useState } from 'react'

function Location ({onOwnPokemonSelect, areaPokemonsUrl, userPokemons}) {
  const [encounterPokemonUrl, setEncounterPokemonUrl] = useState([])

  useEffect(() => {
    fetch(areaPokemonsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setEncounterPokemonUrl(data.pokemon_encounters[0].pokemon.url)
      })
      .catch((error) => {
        console.log('Error fetching data: ', error)
      })
  }, [])

  return (
    <ul>
      {encounterPokemonUrl.map((encounter, index) => (
        <li key={index}>{encounter.url}</li>
      ))}
    </ul>
  )
}

export default Location
