/*
 * functions-01.js
 * Language: javascript
 * Test: tests/functions-01.test.js
 * Path: src/functions-01.js
 *
 *
 */


/* very-easy.js */

function nameShuffle(str) {
  // Create a function that accepts a string
  // of a person's first and last name and
  // returns a string with "lastname, firstname"
  // For example get 'Buzz Lightyear'
  // and return 'Lightyear, Buzz'
}

function isStrangePair(str1, str2) {
  // Let's say a pair of strings form a "strange pair" if:
  // 1st string's first letter = 2nd string's last letter.
  // 1st string's last letter = 2nd string's first letter.
  // Create a function that returns true if a pair of strings
  // is a "strange pair", and false otherwise.
}

function convertToDecimal(percents) {
  // Create a function to convert an array of
  // percents to their decimal equivalents.
  // Required: use ES6 array method(s)
  // Hint: use string.replace()
}

function verifySubstrs(mainStr, head, body, tail) {
  // Write a function that takes four string arguments.
  // You will be comparing the first string to the three
  // next strings. Verify if the first string starts with
  // the second string, includes the third string in the middle,
  // and ends with the fourth string.
  // If the first string passes all checks, return 'complete'
  // else return 'incomplete'
  // the tests are not case sensitive
  // there maybe overlap between strings and the test will pass
  // this means you cannot just test if
  // "theonering" == "the" + "one" "ring"
}

function checkSameSum(a1, a2) {
  // Write a function that returns true
  // if two arrays sum up to a constant array
  // required: use ES6 array method(s)
  // https://www.tutorialspoint.com/es6/es6_arrays.htm
}

module.exports = {
  nameShuffle,
  isStrangePair,
  convertToDecimal,
  verifySubstrs,
  checkSameSum,
};
