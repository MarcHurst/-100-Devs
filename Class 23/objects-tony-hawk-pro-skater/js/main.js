//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkProSkater(name, nationality, catchphrase, attack, defense, health) {
    this.name=name;
    this.nationality=nationality;
    this.catchphrase=catchphrase;
    this.attack=attack;
    this.defense=defense;
    this.armor=0;
    this.HP=health;
    this.maxHP=health;
    this.taunt = _ => console.log("Beware my might!");
    this.doAttack = (target) => console.log(`Attacking ${target} for ${this.attack} damage.`);
    this.block = _ => {
        console.log(`Blocking for ${this.defense} points of damage soak.`);
        this.armor += this.defense;
    };
    this.isDying = _ => this.HP <= 0;
    this.die = _ => console.log(`${this.name} has fallen in battle.  All shall mourn him.`);
    this.damage = dmg => {
        this.HP -= dmg;
        if (this.isDying()) {
            this.die();
        };
    };
    this.heal = num => {
        this.HP += num;
        if (this.HP > this.maxHP) {this.HP = this.maxHP};
    };
};