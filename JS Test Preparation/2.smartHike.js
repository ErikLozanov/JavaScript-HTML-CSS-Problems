class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak,altitude) {
        if(!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`;
        } else {
            return `${peak} has already been added to your goals`;
        }
    }
    hike(peak,time,difficultyLevel) {
        if(!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        } 
        if(this.resources == 0) {
            throw new Error("You don't have enough resources to start the hike");
        }
        let difference = this.resources - (time * 10);

        if(difference < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.listOfHikes.push({peak,time,difficultyLevel});
        this.resources -= (time*10);

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
    rest(time) {
        this.resources += time*10;

        if(this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time*10}% resources`;
        }
    }
    showRecord(criteria) {
        if(this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }
        if(criteria == 'all') {
            let result = [];
            result.push('All hiking records:');
            this.listOfHikes.forEach(x=>{ result.push(`${this.username} hiked ${x.peak} for ${x.time} hours`)})
            return result.join('\n');
        } else {
            let criteriaHikes = this.listOfHikes.filter(x=> x.difficultyLevel == criteria);

            if(criteriaHikes.length == 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            } else {
            let bestTimeHiker = criteriaHikes.sort((a,b)=> a.time - b.time);

            return `${this.username}'s best ${criteria} hike is ${bestTimeHiker[0].peak} peak, for ${bestTimeHiker[0].time} hours`
        }
        }


    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));




