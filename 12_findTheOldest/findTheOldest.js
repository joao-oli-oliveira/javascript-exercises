const findTheOldest = function (people) {
  let agePeople = people.map(function (person) {
    if (person.yearOfDeath === undefined) {
      return 2024 - person.yearOfBirth;
    } else {
      return person.yearOfDeath - person.yearOfBirth;
    }
  });
  const max = Math.max(...agePeople);
  const maxIndex = agePeople.findIndex((personAge) => personAge === max);
  return people[maxIndex];

  console.log(agePeople);
  console.log(max);
  console.log(maxIndex);
  console.log(personName);
};

// const arr = [1, 2, 3];
// const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
