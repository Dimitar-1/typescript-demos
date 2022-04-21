class Department {
    private readonly id: string;
    private readonly name: string;
    private employees: string[] = [];

    constructor(name: string) {
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

let department = new Department("Accounting");
department.describe();

department.addEmployee("Max");
department.addEmployee("Maria");
department.addEmployee("Joanna");
department.printEmployeesInformation();


class ITDepartment extends Department {
    private admins: string[];

    constructor(name:string, admins: string[]) {
        super(name);
        this.admins = admins;
    }
}

let itDepartment = new ITDepartment("IT Department",["Wot"]);
itDepartment.describe();
itDepartment.printEmployeesInformation();




























