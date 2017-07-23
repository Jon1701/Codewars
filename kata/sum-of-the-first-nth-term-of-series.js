const SeriesSum = (n) => {
  // Return "0.00" if n is 0.
  if (n === 0) { return "0.00"; };

  // Generate a sequence of n-terms.
  //
  // Create an array of n undefined elements.
  // Replace each undefined element with a term from the sequence.
  // Calculate the sum of the sequence.
  const sum = Array
    .apply(null, Array(n))
    .map((value, index) => ((index === 0) ? 1 : 1/(3*index + 1)))
    .reduce((sum, value) => (sum + value), 0);

  // Round to 2 decimal places, fill in any necessary trailing zeroes,
  // and return as a String.
  return (Math.round(sum * 100) / 100).toFixed(2);
}
