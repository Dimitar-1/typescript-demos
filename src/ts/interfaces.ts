interface Named {
    name: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }

    toString(): void {
        console.log(`Person:
        name: ${this.name}
        age: ${this.age}`);
    }
}

let kid = new Person('Raya', 10);
kid.greet('Hi there - I am');
kid.toString();
