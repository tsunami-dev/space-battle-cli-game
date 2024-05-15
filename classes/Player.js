class Player {
    constructor(name){
    this.name = name;
    this.health = 1000;
    this.power = Math.floor(Math.random() * 50) + 50;
    this.armor = Math.floor(Math.random() * 20) + 20;
    }
    // And these methods
    // - attack
    // - defend
    // - power up
}

    const player1 = new Player("tim")
    console.log(player1)



module.exports = Player