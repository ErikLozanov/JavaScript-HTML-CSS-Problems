class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name,salary,position,department) {
        if(name == undefined || name == '' || name == null ||
        salary == undefined || salary == '' || salary == null ||
        position == undefined || position == '' || position == null ||
        department == undefined || department == '' || department == null) {
            throw new Error('Invalid input!');
        }
        if(salary < 0) {
            throw new Error('Invalid input!');
        }
        if(!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {};
        }
        this.departments[department][name] = [salary,position];
        return `New employee is hired. Name: ${name}. Position: ${position}`        
    }
    bestDepartment() {
        let biggestAverage = 0;
        let biggestDepartment;
        for(let [department,workers] of Object.entries(this.departments)) {
            let averageSalaryTest = 0;
            let workersCount = Object.keys(workers).length;
            for(let [worker,info] of Object.entries(workers)) {
                averageSalaryTest+= info[0];
            }
            averageSalaryTest /= workersCount
            if(averageSalaryTest > biggestAverage) {
                biggestAverage = averageSalaryTest;
                biggestDepartment = department;
            }
        }

        let workersSort = Object.entries(this.departments[biggestDepartment]).sort((a,b) => b[1][0] - a[1][0] || a[0].localeCompare(b[0]));
        workersSort = workersSort.map(x=> x[0] + ' ' + x[1].join(' '));
        return `Best Department is: ${biggestDepartment}\nAverage salary: ${biggestAverage.toFixed(2)}\n${workersSort.join('\n')}`;
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources")
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
