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
}

The Petar Petarson was successfully registered.
Uncaught Error: The Petar is not registered in the camp.
The Petar Petarson removed successfully.


