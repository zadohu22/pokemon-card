const maxStats = (baseStat) => {
  let maxStat = (2 * baseStat + 31 + 252 / 4) * 0.5 + 5;
  return maxStat;
};

export default maxStats;
