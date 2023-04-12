import './App.css'
import React, { useState } from 'react'
import World from './components/World'
import Location from './components/Location'
import Encounter from './components/Encounter'

function App () {
  const [displayedComponent, setDisplayedComponent] = useState('World')

  const userPokemons = [
    'https://pokeapi.co/api/v2/pokemon/bulbasaur',
    'https://pokeapi.co/api/v2/pokemon/charizard',
    'https://pokeapi.co/api/v2/pokemon/poliwhirl'
  ]

  function handleLocationSelect () {
  }

  function handleOwnPokemonSelect () {
  }

  function handleEncounterEnd () {
  }

  return (
    <div className="App">
      {displayedComponent === 'World'
        ? <World onLocationSelect={handleLocationSelect}/>
        : displayedComponent === 'Location'
          ? <Location onOwnPokemonSelect={handleOwnPokemonSelect}/>
          : displayedComponent === 'Encounter'
            ? <Encounter onEncounterEnd={handleEncounterEnd}/>
            : null
      }
    </div>
  )
}

export default App
