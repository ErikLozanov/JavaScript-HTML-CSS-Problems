class SummerCamp{
    constructor(organizer,location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name,condition,money) {
        let isFound = this.listOfParticipants.find(x=> x.name == name);
        if(!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error(`Unsuccessful registration at the camp.`);
        }
        if(isFound) {
            return `The ${name} is already registered at the camp.`;
        }
        if(money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({name, condition, power: 100, wins: 0});
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant(name) {
        let isFound = this.listOfParticipants.find(x=> x.name == name);

        if(!isFound) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants = this.listOfParticipants.filter(x=> x !== isFound);

        return `The ${name} removed successfully.`;
    }
    timeToPlay(typeOfGame,participant1,participant2) {
        let isFound = this.listOfParticipants.find(x=> x.name == participant1);
        
        if(!isFound) {
            throw new Error(`Invalid entered name/s.`);
        }
        if(typeOfGame == 'WaterBalloonFights') {
            let isFoundTwo = this.listOfParticipants.find(x=> x.name == participant2);
            if(!isFoundTwo) {
            throw new Error(`Invalid entered name/s.`);
            }
            if(isFound.condition !== isFoundTwo.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if(isFound.power > isFoundTwo.power) {
                isFound.wins++;
                return `The ${isFound.name} is winner in the game ${typeOfGame}.`
            } else if(isFound.power < isFoundTwo.power){
                isFoundTwo.wins++;
                return `The ${isFoundTwo.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            }
        } else if(typeOfGame == 'Battleship') {
            isFound.power += 20;

            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }
    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants.sort((a,b)=>b.wins - a.wins);
        this.listOfParticipants.forEach(x=> result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`))
        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "child", 300));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("Battleship", "Sara Dickinson"));
console.log(summerCamp.timeToPlay("WaterBalloonFights","Sara Dickinson","Petar Petarson"));


console.log(summerCamp.toString());




