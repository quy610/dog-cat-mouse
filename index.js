var Dog = require('./dog');
var Cat = require('./Cat');

var dog = new Dog('Tom');
var cat = new Cat();
dog.eat(cat);
console.log(dog);
console.log(cat); 