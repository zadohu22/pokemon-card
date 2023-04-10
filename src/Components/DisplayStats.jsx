import React from "react";
import maxStats from "../HelperFunctions/maxStats";

const DisplayStats = (pokemon, statName, index) => {
  return (
    <div className='flex flex-col'>
      <li>
        {statName}: {pokemon.stats[index].base_stat}
      </li>
      <li>
        Max {statName}: {maxStats(pokemon.stats[index].base_stat)}
      </li>
    </div>
  );
};

export default DisplayStats;
