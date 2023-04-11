import './App.css'
import React, { useState } from 'react'
import World from './components/World'
import Location from './components/Location'
import Encounter from './components/Encounter'

function handleLocationSelect () {
}

function handleOwnPokemonSelect () {
}

function handleEncounterEnd () {
}

function App () {
  const [displayedComponent, setDisplayedComponent] = useState('World')
  return (
    <div className="App">
      {displayedComponent === 'Locations'
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
