import "./App.css";
import React, { useState } from "react";
import World from "./components/World";
import Location from "./components/Location";
import Encounter from "./components/Encounter";

<<<<<<< HEAD
function App () {
  const [displayedComponent, setDisplayedComponent] = useState('Location')
  const [selectedLocationUrl, setSelectedLocationUrl] = useState('')
  const [selectedPokemomonUrl, setSelectedPokemonUrl] = useState('')
  const [encounteredPokemonUrl, setEncounteredPokemonUrl] = useState('')
=======
function App() {
  const [displayedComponent, setDisplayedComponent] = useState("World");
  const [selectedLocationUrl, setSelectedLocationUrl] = useState("");
  const [selectedPokemomonUrl, setSelectedPokemonUrl] = useState("");
  const [encounteredPokemonUrl, setEncounteredPokemonUrl] = useState("");
>>>>>>> development

  const [userPokemons, setUserPokemons] = useState([
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl",
  ]);

  function handleLocationSelect(url) {
    setSelectedLocationUrl(url);
  }

  function handlePokemonSelect(selectedUrl, encounteredUrl) {
    setSelectedPokemonUrl(selectedUrl);
    setEncounteredPokemonUrl(encounteredUrl);
  }

  function handleEncounterEnd(pokeUrl) {
    if (pokeUrl) setUserPokemons([...userPokemons, pokeUrl]);
  }

  let activeComponent;
  if (displayedComponent === "World") {
    activeComponent = (
      <World
        onLocationSelect={handleLocationSelect}
        setDisplayedComponent={setDisplayedComponent}
      />
<<<<<<< HEAD
  } else if (displayedComponent === 'Location') {
    activeComponent =
      <Location
        onOwnPokemonSelect={handlePokemonSelect}
        areaPokemonsUrl="https://pokeapi.co/api/v2/location-area/115/"
        userPokemons={userPokemons}
      />
  } else if (displayedComponent === 'Encounter') {
    activeComponent =
=======
    );
  } else if (displayedComponent === "Location") {
    activeComponent = <Location onOwnPokemonSelect={handlePokemonSelect} />;
  } else if (displayedComponent === "Encounter") {
    activeComponent = (
>>>>>>> development
      <Encounter
        onEncounterEnd={handleEncounterEnd}
        selectedPokemonUrl="https://pokeapi.co/api/v2/pokemon/bulbasaur"
        encounteredPokemonUrl="https://pokeapi.co/api/v2/pokemon/poliwhirl"
      />
    );
  }

  return <div className="App">{activeComponent}</div>;
}

export default App;
