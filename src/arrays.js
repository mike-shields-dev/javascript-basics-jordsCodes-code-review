const getNthElement = (index, array) => array[index % array.length];

const arrayToCSVString = array => array.join();

const csvStringToArray = string => string.split(',');

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => array.concat(element);

const removeNthElement = (index, array) => array.splice(index, 1);

const numbersToStrings = numbers => numbers.map(n => `${n}`);

const uppercaseWordsInArray = strings => strings.map(s => s.toUpperCase());

const reverseWordsInArray = strings =>
  strings.map(string =>
    string
      .split('')
      .reverse()
      .join('')
  );

const onlyEven = numbers => numbers.filter(n => n % 2 === 0);

const removeNthElement2 = (index, array) => [
  ...array.slice(0, index),
  ...array.slice(index + 1)
];

const elementsStartingWithAVowel = strings =>
  strings.filter(string => 'aAeEiIoOuU'.includes(string.at(0)));

const removeSpaces = string => string.split(' ').join('');

const sumNumbers = numbers => numbers.reduce((sum, number) => sum + number);

const sortByLastLetter = strings =>
  strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );

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
