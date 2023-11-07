const plants = ["broccoli","cauliflower", "cabbage", "kale"]

console.log(plants.shift()); // "broccoli"
console.log(plants); // ["cauliflower", "cabbage", "kale"]

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // ["camel", "duck"]