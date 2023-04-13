import './App.css'
import React, { useState } from 'react'
import World from './components/World'
import Location from './components/Location'
import Encounter from './components/Encounter'

function App () {
  const [displayedComponent, setDisplayedComponent] = useState('Location')
  const [selectedLocationUrl, setSelectedLocationUrl] = useState('')
  const [selectedPokemomonUrl, setSelectedPokemonUrl] = useState('')
  const [encounteredPokemonUrl, setEncounteredPokemonUrl] = useState('')

  const [userPokemons, setUserPokemons] = useState([
    'https://pokeapi.co/api/v2/pokemon/bulbasaur',
    'https://pokeapi.co/api/v2/pokemon/charizard',
    'https://pokeapi.co/api/v2/pokemon/poliwhirl'
  ])

  function handleLocationSelect (url) {
    setSelectedLocationUrl(url)
  }

  function handlePokemonSelect (selectedUrl, encounteredUrl) {
    setSelectedPokemonUrl(selectedUrl)
    setEncounteredPokemonUrl(encounteredUrl)
  }

  function handleEncounterEnd (pokeUrl) {
    setUserPokemons([...userPokemons, pokeUrl])
  }

  let activeComponent
  if (displayedComponent === 'World') {
    activeComponent =
      <World
        onLocationSelect={handleLocationSelect}
      />
  } else if (displayedComponent === 'Location') {
    activeComponent =
      <Location
        onOwnPokemonSelect={handlePokemonSelect}
        areaPokemonsUrl="https://pokeapi.co/api/v2/location-area/115/"
        userPokemons={userPokemons}
      />
  } else if (displayedComponent === 'Encounter') {
    activeComponent =
      <Encounter
        onEncounterEnd={handleEncounterEnd}
        selectedPokemonUrl="https://pokeapi.co/api/v2/pokemon/bulbasaur"
        encounteredPokemonUrl="https://pokeapi.co/api/v2/pokemon/poliwhirl"
      />
  }

  return (
    <div className="App">
      {activeComponent}
    </div>
  )
}

export default App
