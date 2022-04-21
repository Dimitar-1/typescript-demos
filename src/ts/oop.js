"use strict";
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
        this.id = (Math.random() + 1).toString(36).substring(7);
    }
    describe() {
        console.log(`Id: ${this.id}, Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
let department = new Department("Accounting");
department.describe();
department.addEmployee("Max");
department.addEmployee("Maria");
department.addEmployee("Joanna");
department.printEmployeesInformation();
class ITDepartment extends Department {
    constructor(name, admins) {
        super(name);
        this.admins = admins;
    }
}
let itDepartment = new ITDepartment("IT Department", ["Wot"]);
itDepartment.describe();
itDepartment.printEmployeesInformation();
