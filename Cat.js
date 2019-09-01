var chalk = require('chalk');

function Cat(name, color) {
	this.name = name,
	this.color = color
}

Cat.prototype.sayHi = function() {
	console.log(`Hi I am a Cat. My name is ${chalk.red(this.name)}`);
};
module.exports = Cat;