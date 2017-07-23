const order = (sentence) => {
  // Extract the number from a token.
  const extractNumberFromToken = (token) => {
    // Break token into characters.
    const chars = token.split("");

    // Keep only characters which can be converted to numbers.
    const numbers = token.split("").filter((item) => (Number(item)));

    // Join the numbers
    return Number(numbers.join(""));
  }

  // If string is empty, return empty string.
  if (sentence.length === 0) { return ""; };

  // Tokenize the string.
  let tokens = sentence.split(" ");

  // Loop over the tokens, extract the resulting position, and store it.
  const mapping = {};
  for (let i=0; i<tokens.length; i++) {
    // Get the current word and index.
    const currentWord = tokens[i];
    const resultIndex = extractNumberFromToken(currentWord);

    // Store index and word.
    mapping[resultIndex] = currentWord;
  }

  // Resulting sentence.
  return Object.keys(mapping).map((word) => (mapping[word])).join(" ");
}
