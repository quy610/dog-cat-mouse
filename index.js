var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./dog');

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog();

try{
	cat.eat(dog);
}catch(err){
	console.log('Error while cat eating dog!');
}

console.log(cat);