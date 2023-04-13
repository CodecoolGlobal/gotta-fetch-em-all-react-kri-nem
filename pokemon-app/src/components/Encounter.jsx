import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import FightingPokemon from "./FightingPokemon";

function Encounter({
  onEncounterEnd,
  selectedPokemonUrl,
  encounteredPokemonUrl,
}) {
  const [selectedPokemon, setSelectedPokemon] = useImmer(null);
  const [encounteredPokemon, setEncounteredPokemon] = useImmer(null);
  const [round, setRound] = useState(0);

  useEffect(() => {
    Promise.all([fetch(selectedPokemonUrl), fetch(encounteredPokemonUrl)])
      .then((res) => Promise.all(res.map((r) => r.json())))
      .then((data) => {
        setSelectedPokemon(data[0]);
        setEncounteredPokemon(data[1]);
      });
  }, [selectedPokemonUrl, encounteredPokemonUrl]);

  const calculateAttack = (
    attack,
    defense,
    random = ((min = 217, max = 255) => {
      const difference = max - min;
      let rand = Math.random();
      rand = Math.floor(rand * difference);
      rand = rand + min;
      return rand;
    })()
  ) => ((((2 / 5 + 2) * attack * 60) / defense / 50 + 2) * random) / 255;

  const fight = () => {
    const selectedAttack = selectedPokemon.stats[1].base_stat;
    const selectedDefense = selectedPokemon.stats[2].base_stat;
    const encounteredAttack = encounteredPokemon.stats[1].base_stat;
    const encounteredDefense = encounteredPokemon.stats[2].base_stat;

    const isSelectedPokemonsTurn = !(round % 2);
    const isEncounterRunning =
      selectedPokemon.stats[0].base_stat > 0 &&
      encounteredPokemon.stats[0].base_stat > 0;
    const isSelectedWinning = encounteredPokemon.stats[0].base_stat <= 0;

    if (isSelectedPokemonsTurn && isEncounterRunning) {
      setEncounteredPokemon((draft) => {
        const newHp = Math.round(
          draft.stats[0].base_stat -
            calculateAttack(selectedAttack, encounteredDefense)
        );
        if (newHp > 0) {
          draft.stats[0].base_stat = newHp;
        } else {
          draft.stats[0].base_stat = 0;
        }
      });
      setRound(round + 1);
    } else if (isEncounterRunning) {
      setSelectedPokemon((draft) => {
        const newHp = Math.round(
          draft.stats[0].base_stat -
            calculateAttack(selectedAttack, encounteredDefense)
        );
        if (newHp > 0) {
          draft.stats[0].base_stat = newHp;
        } else {
          draft.stats[0].base_stat = 0;
        }
      });
      setRound(round + 1);
    } else {
      if (isSelectedWinning) {
        onEncounterEnd(encounteredPokemonUrl);
      } else {
        onEncounterEnd();
      }
    }
  };

  return (
    <>
      {selectedPokemon && encounteredPokemon && (
        <>
          <FightingPokemon className="ownPoke" pokemon={selectedPokemon} />
          <FightingPokemon
            className="encounteredPoke"
            pokemon={encounteredPokemon}
          />
        </>
      )}
      <button onClick={fight}>Try to catch</button>
    </>
  );
}

export default Encounter;
