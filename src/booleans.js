const negate = a => {
  if (a) {
    return false;
  }
  return true;
};

const both = (a, b) => {
  if (a && b) {
    return true;
  }
  return false;
};

const either = (a, b) => {
  if (a || b) {
    return true;
  }
  return false;
};

const none = (a, b) => {
  if (a === false && b === false){
    return true;
  }
  return false;
};

const one = (a, b) => {
  if ((a && b === false) || (b && a === false)) {
    return true;
  }
  return false;
};

const truthiness = a => {
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  }
  return false;
};

const isOdd = a => {
  if (a % 2 === 0) {
    return false;
  }
  return true;
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

const isSquare = a => {
  const n = Math.sqrt(a);
  if (n * n === a) {
    return true;
  }
  return false;
};

const startsWith = (char, string) => {
  if (string.charAt(0) === char) {
    return true;
  }
  return false;
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
