class JobOffers {

    constructor(employer,position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(jobCandidates) {

        for(let person of jobCandidates) {
            let [name,education,yearsExp] = person.split('-');
            yearsExp = Number(yearsExp);

            let isFound = this.jobCandidates.find(x=> x.name == name);

            if(!isFound) {
                this.jobCandidates.push({name,education,yearsExp});
            } else {
                if(isFound.yearsExp < yearsExp) {
                    isFound.yearsExp = yearsExp;
                }
            }
        }
        let addedPersons = [];
        this.jobCandidates.forEach(x=> addedPersons.push(x.name));
        return `You successfully added candidates: ${addedPersons.join(', ')}`;
    }
    jobOffer(chosenPerson) {
        let [name,minExp] = chosenPerson.split('-');
        minExp = Number(minExp);

        let isFound = this.jobCandidates.find(x=> x.name == name);
        
        if(!isFound) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if(minExp > isFound.yearsExp) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minExp} years.`)
        }

        isFound.yearsExp = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`;
    }
    salaryBonus(name) {
        let isFound = this.jobCandidates.find(x=> x.name == name);

        if(!isFound) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if(isFound.education == 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        }
        if(isFound.education == 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        }
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
    candidatesDatabase() {
        if(this.jobCandidates.length == 0) {
            throw new Error("Candidate Database is empty!");
        }
        let result = [];
        result.push('Candidates list:');

        this.jobCandidates.sort((a,b)=>a.name.localeCompare(b.name));

        this.jobCandidates.forEach(x=> result.push(`${x.name}-${x.yearsExp}`));

        return result.join('\n');
    }
}


let Jobs = new JobOffers ("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());




