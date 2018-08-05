// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  for (let char of str) {
    /*if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }*/
    obj[char] = obj[char] + 1 || 1;
  }
  let maxChar = str[0];
  for (let char in obj) {
    // char is key
    if (obj[char] > obj[maxChar]) {
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
