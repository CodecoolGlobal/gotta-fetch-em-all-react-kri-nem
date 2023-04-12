import React, { useEffect, useState } from 'react'
import { useImmer } from 'use-immer'

function Encounter ({ onEncounterEnd, selectedPokemonUrl, encounteredPokemonUrl }) {
  const [ownPokemon, setOwnPokemon] = useImmer({})
  const [encounteredPokemon, setEncounteredPokemon] = useImmer({})
  const [attacker, setAttacker] = useState(null)

  useEffect(() => {
    Promise.all([
      fetch(selectedPokemonUrl),
      fetch(encounteredPokemonUrl)
    ])
      .then((res) => Promise.all(res.map(r => r.json())))
      .then((data) => {
        setOwnPokemon(data[0])
        setEncounteredPokemon(data[1])
        setAttacker(data[0])
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

  const fight = (ownPokemon, encounteredPokemon) => {

  }

  return (
    <> {ownPokemon && encounteredPokemon && (
      <>
        <div className="ownPoke">
          <div className="pokeName">{ownPokemon.name}</div>
          {ownPokemon.stats.map((stat, index) => (
            <div key={index}>{stat.stat.name}: {stat.base_stat}</div>
          ))}
          <img className="pokeImage" src={ownPokemon.sprites.front_default}></img>
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
