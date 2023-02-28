const getNthElement = (index, array) => {
  if (index > array.length - 1) {
    return array[index - array.length];
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  console.log(string.split(','));
  return string.split(',');
};

const addToArray = (element, array) => {
  const newarray = array.push(element);
  console.log (newarray);
};

const addToArray2 = (element, array) => {
  // your code here
};

const removeNthElement = (index, array) => {
  // your code here
};

const numbersToStrings = numbers => {
  // your code here
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
