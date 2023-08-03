export default function shuffle(arr) {
  // Create a copy of the input array to avoid modifying the original one
  const shuffledArr = [...arr];

  // Use Fisher-Yates shuffle algorithm to shuffle the array in-place
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }

  return shuffledArr;
}
