//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighterCharacter (name, nationality, themeFile, rival) {
    this.name = name;
    this.nationality = nationality;
    this.themeFile = themeFile;
    this.rival = rival;

    this.doTaunt = () => console.log(`${this.name}: You'll never beat me!`);
    this.playTheme = () => console.log(`Call function to play ${this.themeFile}`);
    this.attack = () => console.log("HIGH PUNCH");
}

let p1 = new StreetFighterCharacter("Blanka", "Some Jungle", "BlankaTheme.mp3", "M. Bison");

p1.doTaunt()