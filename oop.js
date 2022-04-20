"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log("Department name: " + this.name);
    }
}
let department = new Department("Accounting");
department.describe();
