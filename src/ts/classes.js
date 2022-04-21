"use strict";
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
        this.id = (Math.random() + 1).toString(36).substring(7);
    }
    static createEmployee(name) {
        return { name: name };
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
// let department = new Department("Accounting");
// department.describe();
//
// department.addEmployee("Max");
// department.addEmployee("Maria");
// department.addEmployee("Joanna");
// department.printEmployeesInformation();
class ITDepartment extends Department {
    constructor(name) {
        super(name);
        this.admins = [];
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
    printAdminInformation() {
        console.log(this.admins.length);
        console.log(this.admins);
    }
}
console.log('***************** IT *****************');
let itDepartment = new ITDepartment("IT Department");
itDepartment.describe();
itDepartment.addAdmin("admin123");
itDepartment.printAdminInformation();
class AccountingDepartment extends Department {
    constructor(name) {
        super(name);
        this.reports = [];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("Accounting");
        return this.instance;
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    get mostRecentReport() {
        if (this.reports.length !== 0) {
            return this.lastReport;
        }
        throw Error("No report found.");
    }
    set mostRecentReport(report) {
        if (!report) {
            throw new Error("Please enter a valid report");
        }
        this.lastReport = report;
    }
    getReportByIndex(index) {
        if (this.reports.length <= index) {
            throw Error(`Report by index ${index} is not found. Last index ${this.reports.length - 1}`);
        }
        return this.reports[index];
    }
    printReportsInformation() {
        console.log(this.reports.length);
        for (let i = 0; i < this.reports.length; i++) {
            console.log(`Index: ${i}, Report: ${this.reports[i]}`);
        }
    }
}
console.log('***************** ACCOUNTING *****************');
let employee123 = Department.createEmployee("Rose").name;
let accountingDepartment = AccountingDepartment.getInstance();
accountingDepartment.addEmployee(employee123);
accountingDepartment.describe();
accountingDepartment.addReport('report123243435');
accountingDepartment.addReport('report344343');
accountingDepartment.printReportsInformation();
accountingDepartment.mostRecentReport = 'report----123';
console.log('report by index: ' + accountingDepartment.getReportByIndex(0));
console.log('report by index: ' + accountingDepartment.getReportByIndex(1));
accountingDepartment.mostRecentReport;
