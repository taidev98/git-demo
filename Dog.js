var chalk = require('chalk');
function Dog(name) {
	this.name = name;
}
Dog.prototype.sayHello = function() {
	console.log(`Hi! I am a dog. My name is ${chalk.blue(this.name)}`)
};
module.exports = Dog;