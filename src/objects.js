const createPerson = (name, age) => ({ name, age });

const getName = object => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => !!object[property];

const isOver65 = person => person.age > 65;

const getAges = people => people.map(person => person.age);

const findByName = (name, people) =>
  people.find(person => person.name === name);

const findHondas = cars => cars.filter(car => car.manufacturer === 'Honda');

const averageAge = people => {
  const totalAges = people.reduce((total, person) => total + person.age, 0);
  return totalAges / people.length;
};

const createTalkingPerson = (name, age) => ({
  name,
  age,
  introduce(friend) {
    return `Hi ${friend}, my name is ${this.name} and I am ${this.age}!`;
  }
});

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
