class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    let invited = [];
    footballPlayers.forEach((x) => {
      let eachPlayer = x.split("/");
      let isFound = this.invitedPlayers.find(
        (player) => player == eachPlayer[0]
      );

      if (!isFound) {
        this.invitedPlayers.push({
          name: eachPlayer[0],
          age: Number(eachPlayer[1]),
          playerValue: Number(eachPlayer[2]),
        });
        invited.push(eachPlayer[0]);
      } else {
        if (isFound.playerValue < eachPlayer[2]) {
          isFound.playerValue = eachPlayer[2];
        }
      }
    });
    return `You successfully invite ${invited.join(", ")}.`;
  }
  signContract(selectedPlayer) {
    let [name, offer] = selectedPlayer.split("/");
    offer = Number(offer);
    let isPlayerPresent = this.invitedPlayers.find((x) => x.name == name);

    if (!isPlayerPresent) {
      throw new Error(`${name} is not invited to the selection list!`);
    } else {
      if (isPlayerPresent.playerValue > offer) {
        let priceDifference = isPlayerPresent.playerValue - offer;
        throw new Error(
          `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!"`
        );
      } else {
        isPlayerPresent.playerValue = 'Bought';
      }
      return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`
    }
  }
  ageLimit(name,age) {
    let isPlayerPresent = this.invitedPlayers.find(x=> x.name == name);

    if(!isPlayerPresent) {
        throw new Error(`${name} is not invited to the selection list!`);
    }
    if(isPlayerPresent.age < age) {
        let ageDifference = Math.abs(age - isPlayerPresent.age);
        if(ageDifference < 5) {
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        } else if(ageDifference > 5){
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
    } else {
        return `${name} is above age limit!`;

    }
  }
  transferWindowResult() {
    let result = [];
    result.push('Players list:');
    this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));
    this.invitedPlayers.forEach(x => {
        result.push(`Player ${x.name}-${x.playerValue}`);
    })
    return result.join('\n');
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
console.log(fTeam.transferWindowResult());


