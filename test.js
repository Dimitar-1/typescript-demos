"use strict";
console.log(new Date());
let button = document.querySelector("button");
button.addEventListener('click', () => {
    console.log('Clicked!');
});
const hobbies = ["Sports", "Cooking"];
console.log(hobbies);
const activeHobbies = ["Hiking", ...hobbies];
console.log(activeHobbies);
const person1 = {
    name: "Dimitar",
    age: 23
};
const newPerson = Object.assign({}, person1);
person1.age = 24;
console.log(person1);
console.log(newPerson);
const addNumbers = (...numbers) => {
    let result = 0;
    numbers.forEach(value => result += value);
    return result;
};
console.log(addNumbers(1, 32, 34, 43, 54));
console.log(addNumbers(1, 32));
console.log(addNumbers(1, 5, 4));
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2, hobbies);
