function Cat(name, color) {
	this.name = name,
	this.color = color
}

Cat.prototype.eat = {
	console.log('Eatingg');
}

module.exports = Cat;