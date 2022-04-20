class Department {
    name:string;

    constructor(name:string) {
        this.name = name;
    }

    describe():void {
        console.log("Department name: " + this.name);
    }
}

let department = new Department("Accounting");
department.describe();