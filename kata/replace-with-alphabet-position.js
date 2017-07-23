const alphabetPosition = (sentence) => (
  sentence
    .toLowerCase()
    .split("")
    .map((char) => {
      // Get current ASCII code.
      const code = char.charCodeAt(0);

      // If the ASCII code is between 97 and 122 (a to z),
      // subtract 96 from the ASCII code so that a is 1, b is 2, ...
      // z is 26, so we can determine the position of the letter in the
      // alphabet.
      if (code >= 97 && code <= 122) {
        return code - 96;
      }
    })
    .filter((item) => (typeof item != "undefined"))
    .join(" ")
)
