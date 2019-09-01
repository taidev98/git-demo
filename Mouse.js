var Mouse(name, weight) = {
	this.name = name,
	this.weight = weight
}
this.prototype.eat = {
	console.log('Eatingg');
}
var micky = new Mouse('Tai',1);
console.log(micky);