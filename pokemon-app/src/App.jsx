import './App.css'
import React, { useState } from 'react'
import World from './components/World'
import Location from './components/Location'
import Encounter from './components/Encounter'

function App () {
  const [displayedComponent, setDisplayedComponent] = useState('World')

  const [userPokemons, setUserPokemons] = useState([
    'https://pokeapi.co/api/v2/pokemon/bulbasaur',
    'https://pokeapi.co/api/v2/pokemon/charizard',
    'https://pokeapi.co/api/v2/pokemon/poliwhirl'
  ])

  function handleLocationSelect () {
  }

  function handleOwnPokemonSelect () {
  }

  function handleEncounterEnd (pokeUrl) {
    setUserPokemons([...userPokemons, pokeUrl])
  }

  let activeComponent
  if (displayedComponent === 'World') {
    activeComponent = <World onLocationSelect={handleLocationSelect}/>
  } else if (displayedComponent === 'Location') {
    <Location onOwnPokemonSelect={handleOwnPokemonSelect}/>
  } else if (displayedComponent === 'Encounter') {
    <Encounter
      onEncounterEnd={handleEncounterEnd}
      selectedPokemonUrl="https://pokeapi.co/api/v2/pokemon/bulbasaur"
      encounteredPokemonUrl="https://pokeapi.co/api/v2/pokemon/poliwhirl"/>
  }

  return (
    <div className="App">
      {activeComponent}
    </div>
  )
}

export default App
