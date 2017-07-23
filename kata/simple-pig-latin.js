const pigIt = (str) => (str.split(" ").map((word) => (`${word.substr(1, word.length)}${word[0]}ay`)).join(" "));
