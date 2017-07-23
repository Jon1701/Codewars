function findShort(s){
  // Convert string to lowercase.
  s = s.toLowerCase();

  // Split the string by space.
  let tokens = s.split(" ");

  // Filter out empty strings.
  tokens = tokens.filter((item) => (item.length > 0));

  // Calculate the lengths of each token.
  let lengths = tokens.map((item) => (item.length));

  // Sort the lengths in ascending order.
  lengths.sort((a,b) => (a-b));

  // Return the smallest length.
  return lengths[0];
}
