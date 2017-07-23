const printerError = (s) => {
  // Capture the groups of characters consisting of error characters.
  const results = s.match(/[n-z]+/gi);

  // Extract a string containing just the error characters.
  const errorChars = (results) ? results.join("") : "";

  // Return String representation of the error rate.
  return `${errorChars.length}/${s.length}`;
}
