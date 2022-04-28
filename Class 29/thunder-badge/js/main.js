//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes

class Pokemon {
    constructor(level) {
        this.nickname = nickname;
        this.number = number;
        this.level = level;
        this.ability = ability;
        this.gender = gender;
        this.experience = experience;
        this.height = height;
        this.nature = nature;
        this.heldItem = heldItem;
        this.moves = [
            {
                name: "Tackle",
                accuracy: 100,
                type: "Normal",
                category: "physical",
                power: 40,
                pp: 40,
            },
            {
                name: "Growl",
                accuracy: 100,
                type: "None",
                category: "Status",
                power: 0,
                pp: 40,
            },
            {
                name: "Ember",
                accuracy: 100,
                type: "Fire",
                category: "Special",
                power: 40,
                pp: 20,
            },
            {
                name: "Fire Blast",
                accuracy: 80,
                type: "Fire",
                category: "Special",
                power: 120,
                pp: 5,
            },
            
        ];
        this.shiny = shiny;
        this.stats = stats;
    }
    useMove = moveNum => console.log(`${this.nickname} used ${this.moves[moveNum].name}. It has a final offensive value of ${this.moves[moveNum].power}`)
}