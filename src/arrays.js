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
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newarray = array.concat(element);
  return newarray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  const string1 = numbers.toString();
  return string1.split(',');
};

const uppercaseWordsInArray = strings => {
  const uppercasearray = [];
  for (let n = 0; n < strings.length; n += 1) {
    uppercasearray[n] = strings[n].toUpperCase();
    console.log(uppercasearray);
  }
  return uppercasearray;
};

const reverseWordsInArray = strings => {
  const newarray = [];
  let newstring = [];
  for (let n = 0; n < strings.length; n += 1) {
    // Take strings[n] and make it an array:
    newstring = strings[n].split('');
    // Reverse the string:
    newstring.reverse();
    // Put the string back together:
    const reversedstring = newstring.join('');
    // Now, add it back to the strings array:
    newarray[n] = reversedstring;
  }
  return newarray;
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
