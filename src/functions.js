
export function removeWords(original, wordsToRemove) {
  return original
    .split(' ')
    .filter(word => !wordsToRemove.includes(word))
    .join(' ');
}
