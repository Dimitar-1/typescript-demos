function  add(n1: number, n2: number) {
    return n1 + n2;
}

const number1 = 2323;
const number2 = 5.3;

console.log(add(number1, number2));

enum Role {ADMIN, USER}
const person = {
    name: "Dimitar",
    age: 23,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
}

if (person.role == Role.ADMIN) {
    for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
    }
}