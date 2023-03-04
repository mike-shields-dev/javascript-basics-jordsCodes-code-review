const createPerson = (name, age) => {
  const person = Object();
  person.name = name;
  person.age = age;
  return person;
};

const getName = object => {
  const name = object.name;
  return name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return !!object[property];
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const ages = people.map(person => {
    console.log(person.age);
    return person.age;
  });
  console.log(ages);
  return ages;
};

const findByName = (name, people) => {
  // your code here
};

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
