
const Potion = require('./Potion');
const Character = require('./Character');
class Enemy extends Character {
    constructor(name, weapon) {
        // call parent constructor here:
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();

    }

    getDescription = function () {
        return `A ${this.name}'s holding a ${this.weapon}! has apperead!`;
    };
}
module.exports = Enemy;

// function Enemy(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//     this.potion = new Potion();

//     this.health = Math.floor(Math.random() * 10 + 85);
//     this.strength = Math.floor(Math.random() * 5 + 5);
//     this.agility = Math.floor(Math.random() * 5 + 5);

// }

// Enemy.prototype = Object.create(Character.prototype);

// // Enemy.prototype.getHealth = function () {
// //     return `${this.name}'s health is now ${this.health}!`;
// // };

// // Enemy.prototype.isAlive = function () {
// //     if (this.health === 0) {
// //         return false;
// //     }
// //     return true;
// // }

// // Enemy.prototype.reduceHealth = function (health) {
// //     this.health -= health;

// //     if (this.health < 0) {
// //         this.health = 0;
// //     }
// // }

// // Enemy.prototype.getAttackValue = function () {
// //     const min = this.strength - 5;
// //     const max = this.strength + 5;

// //     return Math.floor(Math.random() * (max - min) + min);


// // };

// Enemy.prototype.getDescription = function () {
//     return `A ${this.name}'s holding a ${this.weapon}! has apperead!`;
// };

// module.exports = Enemy;