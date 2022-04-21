"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
    toString() {
        console.log(`Person:
        name: ${this.name}
        age: ${this.age}`);
    }
}
let kid = new Person('Raya', 10);
kid.greet('Hi there - I am');
kid.toString();
