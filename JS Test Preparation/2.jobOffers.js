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
}


let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.salaryBonus("Peter Parker"));



