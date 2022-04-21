abstract class Department {
    private readonly id: string;
    private readonly name: string;
    protected employees: string[] = [];

    static createEmployee(name: string) {
        return {name: name};
    }

    protected constructor(name: string) {
        this.name = name;
        this.id = (Math.random() + 1).toString(36).substring(7);
    }

    describe(): void {
        console.log(`Id: ${this.id}, Department: ${this.name}`);
    }

    addEmployee(employee: string): void {
        this.employees.push(employee);
    }

    printEmployeesInformation(): void {
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
    private admins: string[] = [];

    constructor(name: string) {
        super(name);
    }

    addAdmin(admin: string): void {
        this.admins.push(admin);
    }

    printAdminInformation(): void {
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
    private reports: string[] = [];
    private lastReport: string;
    private static instance: AccountingDepartment;

    private constructor(name: string) {
        super(name);
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("Accounting");
        return this.instance;
    }

    addReport(report: string): void {
        this.reports.push(report);
        this.lastReport = report;
    }

    get mostRecentReport() {
        if (this.reports.length !== 0) {
            return this.lastReport;
        }
        throw Error("No report found.");
    }

    set mostRecentReport(report: string) {
        if (!report) {
            throw new Error("Please enter a valid report");
        }
        this.lastReport = report;
    }

    getReportByIndex(index: number): string {
        if (this.reports.length <= index) {
            throw Error(`Report by index ${index} is not found. Last index ${this.reports.length - 1}`);
        }
        return this.reports[index];
    }

    printReportsInformation(): void {
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
























