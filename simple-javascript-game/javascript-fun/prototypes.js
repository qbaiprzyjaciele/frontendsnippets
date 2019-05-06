function Person(name,lastName) {
    this.name = name;
    this.lastName = lastName;
}

Person.prototype.nameAndLastName = function() {
    return this.name + " " + this.lastName;
}



