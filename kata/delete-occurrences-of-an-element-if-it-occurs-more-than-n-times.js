const deleteNth = (arr, x) => {
  // If x is 0, return empty array.
  if (x === 0) { return []; };

  // Create a blank array to hold the result.
  const result = [];

  // Object to track occurrences of each array element.
  const occurrences = {};

  // Iterate over the array, recording the number of occurences.
  for (let i in arr) {
    // Current element.
    const currElement = arr[i];

    // Track occurrences.
    if (occurrences.hasOwnProperty(currElement)) {
      // Check to see if the current item has been encountered fewer than x times.
      // If so, store in resulting array.
      if (occurrences[currElement] < x) {
        result.push(currElement);
      }

      occurrences[currElement]++;
    } else {
      // Record the first instance of the element.
      occurrences[currElement] = 1;

      // Store element in resulting array.
      result.push(currElement);
    }
  }

  return result;
}
