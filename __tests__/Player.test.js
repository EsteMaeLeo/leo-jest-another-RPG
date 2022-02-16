const { TestWatcher } = require('jest');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());

const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
    console.log(player);
})

test("gets player's stats as an object", () =>{

    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () =>{

    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

test("get player's health value", () => {

    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('check if player is alive or nor', () =>{
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
})

test('substract from player health', () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});

test('gets player attack value', () => {

    const player = new Player('Dave');

    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

test('adds potion to the inventory', () => {

    const player = new Player('Dave');
    const oldCount =  player.inventory.length;
    console.log(player);
    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThanOrEqual(oldCount);
    console.log(player);
});

test('uses a potion from inventory', () => {

    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(),new Potion()];
    const oldCount = player.inventory.length;
    console.log(oldCount);

    player.usePotion(1);
    expect(player.inventory.length).toBeLessThan(oldCount);
});

// jest.mock('../lib/Potion');
// console.log(new Potion());

// const Player = require('../lib/Player');

// test('creates a player object', () => {
//     const player = new Player('Dave');
  
//     expect(player.name).toBe('Dave');
//     expect(player.health).toEqual(expect.any(Number));
//     expect(player.strength).toEqual(expect.any(Number));
//     expect(player.agility).toEqual(expect.any(Number));
//     expect(player.inventory).toEqual(
//         expect.arrayContaining([expect.any(Object)])
//       );
//   });

//   test("gets player's stats as an object", () => {
//     const player = new Player('Dave');
  
//     expect(player.getStats()).toHaveProperty('potions');
//     expect(player.getStats()).toHaveProperty('health');
//     expect(player.getStats()).toHaveProperty('strength');
//     expect(player.getStats()).toHaveProperty('agility');
//   });

//   test('gets inventory from player or returns false', () => {
//     const player = new Player('Dave');
  
//     expect(player.getInventory()).toEqual(expect.any(Array));
  
//     player.inventory = [];
  
//     expect(player.getInventory()).toEqual(false);
//   });