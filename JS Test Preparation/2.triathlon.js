class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if(!this.participants.hasOwnProperty(participantName)) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        } else {
            return `${participantName} has already been added to the list`;
        }
    }
    completeness(participantName, condition) {

        if(!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        } else {
            let conditionsCount = Math.trunc(condition / 30);
            if(condition < 30) {
                throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
            }

            if(conditionsCount <= 2) {
                return `${participantName} could only complete ${conditionsCount} of the disciplines`;
            } else {
                this.listOfFinalists.push({participantName: participantName, participantGender: this.participants[participantName]});
                delete this.participants[participantName];

                return `Congratulations, ${participantName} finished the whole competition`;
            }
        }
    }
    rewarding(participantName) {
        let isFound = this.listOfFinalists.find(x=> x.participantName == participantName);

        if(!isFound) {
            return `${participantName} is not in the current finalists list`;
        } else {
            return `${participantName} was rewarded with a trophy for his performance`;
        }
    }
    showRecord(criteria) {
        if(this.listOfFinalists.length == 0) {
            return `There are no finalists in this competition`;
        }
        if(criteria == 'all') {
            let result = [];
            result.push(`List of all ${this.competitionName} finalists:`);
            this.listOfFinalists.sort((a,b)=> a.participantName.localeCompare(b.participantName));
            this.listOfFinalists.forEach(x=>{
                result.push(x.participantName);
            })
            return result.join('\n');
        }
        let criteriaFilter = this.listOfFinalists.filter(x=> x.participantGender == criteria);
        if(criteriaFilter.length == 0) {
            return `There are no ${criteria}'s that finished the competition`
        } if(criteriaFilter.length > 0) {
            let firstlyAdded = this.listOfFinalists[0];
            return `${firstlyAdded.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }

    }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));
console.log(contest.showRecord("all"));




