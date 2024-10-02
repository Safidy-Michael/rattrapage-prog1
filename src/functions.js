
export function removeWords(original, wordsToRemove) {
  return original
    .split(' ')
    .filter(word => !wordsToRemove.includes(word))
    .join(' ');
}
export function getMostPopularPlaces(...places) {
  const countMap = places.reduce((acc, place) => {
    acc[place] = (acc[place] || 0) + 1;
    return acc;
  }, {});

  const sortedPlaces = Object.entries(countMap)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  return `${sortedPlaces[0]} ${sortedPlaces[1]}`;
}