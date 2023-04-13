import React from "react";

function FightingPokemon({ className, pokemon }) {
  return (
    <>
      {pokemon && (
        <div className={className}>
          <img className="pokeImage" src={pokemon.sprites.front_default}></img>
          <h2>{pokemon.name}</h2>
          {pokemon.stats.map((stat, index) => (
            <div key={index}>
              {stat.stat.name}: {stat.base_stat}
            </div>
          ))}
          <div></div>
        </div>
      )}
    </>
  );
}

export default FightingPokemon;
