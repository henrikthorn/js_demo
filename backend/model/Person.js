class Person {
  constructor() {
    this.id = 'id_1';
  }
  setName(name) {
    this._name = name.charAt(0).toUpperCase() + name.slice(1);
  }
  getName() {
    return this._name;
  }
  sayHello() {
    console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
  }
}

module.exports = Person

