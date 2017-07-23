const addBinary = (a,b) => {
  // Array to hold remainders.
  const binaryDigits = [];

  // Set initial dividend.
  let dividend = a + b;

  // Add initial digit.
  binaryDigits.unshift(dividend % 2);

  // While the floor of the dividend/2 is non-zero, set the new dividend,
  // and store the remainder.
  while (Math.floor(dividend / 2) !== 0) {
    dividend = Math.floor(dividend / 2);
    binaryDigits.unshift(dividend % 2);
  }

  // Return string representation of binary digits.
  return binaryDigits.join("");
}
