// Test this file out by running it: node functions/gameLogic.js
// Export the functions you create and use them inside of your index.js startGame() function

// Use these classes in your functions to start the game, and create a game loop
const Player = require('../classes/Player')
const AlienShip = require('../classes/AlienShip')
const inquirer = require('inquirer')

// Use the inquirer package to give the player the choice to make different moves: Attack, Defend(boosts armor), Power Up()

// Bonus: use the cli-spinner package 

// Function example using inquirer:
async function playGame() {
    const { action } = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Choose your action:',
          choices: ['•Attack', '•Defend', '•Power Up'],
        },
      ]);
  
    switch (action) {
      case 'Attack':
        // player.attack()
        console.log('Player chose to Attack!');
        // Implement attack logic
        break;
      case 'Defend':
        console.log('Player chose to Defend!');
        // Implement defend logic
        break;
      case 'Power Up':
        console.log('Player chose to Power Up!');
        // Implement power up logic
        break;
      default:
        console.log('Invalid choice');
    }
}

playGame()