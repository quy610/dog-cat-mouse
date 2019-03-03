function Mouse(name) {
	this.name = name;
	this.dead = fasle;
}

Mouse.prototype.die = function() {
	this.dead = true;
};

module.exports = Mouse;