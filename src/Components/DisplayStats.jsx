import React from "react";
import maxStats from "../HelperFunctions/maxStats";

const DisplayStats = (pokemon, statName, index) => {
  return (
    <div className='flex flex-col'>
      <li>
        <p className='text-yellow-400'>
          {statName}: {pokemon.stats[index].base_stat}
        </p>
      </li>
      <li>
        <p className='text-green-400'>
          Max {statName}: {maxStats(pokemon.stats[index].base_stat)}
        </p>
      </li>
    </div>
  );
};

export default DisplayStats;
