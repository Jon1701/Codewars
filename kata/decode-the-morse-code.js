const decodeMorse = (morseCode) => {
  // Remove leading and trailing spaces.
  // Split the morse code sequence by 3 spaces, returning an array of morse coded words.
  // Go through each word, split into individual morse coded characters.
  // Decode morse coded characters.
  // Join characters into words.
  // Concatenate words.
  return morseCode
    .trim()
    .split("   ")
    .map((word) => (
      word.split(" ").map((char) => (
        MORSE_CODE[char])
      )
      .join("")))
    .join(" ");
}
