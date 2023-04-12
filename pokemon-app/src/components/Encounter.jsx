import React, { useEffect, useState } from 'react'

function Encounter ({ onEncounterEnd, selectedPokemonUrl, encounteredPokemonUrl }) {
  const [selectedPokemomon, setSelectedPokemon] = useState(null)
  const [encounteredPokemon, setEncounteredPokemon] = useState(null)
  const [attacker, setAttacker] = useState(selectedPokemomon)

  useEffect(() => {
    Promise.all([
      fetch(selectedPokemonUrl),
      fetch(encounteredPokemonUrl)
    ])
      .then((res) => Promise.all(res.map(r => r.json())))
      .then((data) => {
        setSelectedPokemon(data[0])
        setEncounteredPokemon(data[1])
      })
  }, [selectedPokemonUrl, encounteredPokemonUrl])

  const calculateAttack = (
    attack,
    defense,
    random = ((min = 217, max = 255) => {
      const difference = max - min
      let rand = Math.random()
      rand = Math.floor(rand * difference)
      rand = rand + min
      return rand
    })()
  ) => ((((2 / 5 + 2) * attack * 60 / defense) / 50) + 2) * random / 255

  return (
    <> {selectedPokemomon && encounteredPokemon && (
      <>
        <div className="ownPoke">
          <div className="pokeName">{selectedPokemomon.name}</div>
          {selectedPokemomon.stats.map((stat, index) => (
            <div key={index}>{stat.stat.name}: {stat.base_stat}</div>
          ))}
          <img className="pokeImage" src={selectedPokemomon.sprites.front_default}></img>
        </div>
        <div className="encounteredPoke">
          <div className="pokeName">{encounteredPokemon.name}</div>
          {encounteredPokemon.stats.map((stat, index) => (
            <div key={index}>{stat.stat.name}: {stat.base_stat}</div>
          ))}
          <img className="pokeImage" src={encounteredPokemon.sprites.front_default}></img>
        </div>
        <button>Your turn</button>
      </>)}
    </>
  )
}

export default Encounter
