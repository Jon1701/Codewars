function findOdd(A) {

  // Object to hold the number of occurrences for each number.
  let occurrences = {};

  for (var i=0; i<A.length; i++) {
    // If the number has already been recorded, increment its number of occurrences by 1
    if (occurrences.hasOwnProperty(A[i])) {
      occurrences[A[i]] = occurrences[A[i]] + 1;
    } else {
      // If not, record it with 1 occurrences
      occurrences[A[i]] = 1;
    }
  }

  // Record lowest number and occurrence
  let lowest_num = Object.keys(occurrences)[0];
  let lowest_occ = occurrences[lowest_num];

  // Go through all the occurrences.
  for (var key in occurrences) {

    // Get current number and occurrences.
    let curr_num = key;
    let curr_occ = occurrences[curr_num];

    // If current num of occurrences is odd and smaller
    // than lowest_occ, update lowest_num and lowest_occ.
    if ((curr_occ % 2 != 0)) {
      lowest_num = curr_num;
      lowest_occ = curr_occ;
    }
  }

  //happy coding!
  return Number(lowest_num);
}
