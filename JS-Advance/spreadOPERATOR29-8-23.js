let father = {
  name: "john",
  age: 45,
  location: {
    adress: "Lahore",
  },
};
daughter = {
  ...father,
  name: "Lilli",
  age: 25,
  location: {
    ...father.location,
    adress: "Karachi",
  },
};

console.log(father);
console.log(daughter);
