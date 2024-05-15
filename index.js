const chalk = require('chalk')
const chalkAnimation = require('chalk-animation');
const figlet = require('figlet')
const gradient = require('gradient-string');


const startGame = () => {
    console.log(chalk.yellow(figlet.textSync('Space Battle Game', {
        font: 'Standard',
        horizontalLayout: 'default', 
    })))


    // Create an animated text effect
    const rainbow = chalkAnimation.rainbow('Welcome to Space Battle, Player', .8);

    // Create a gradient effect
    const gradientText = gradient('red', 'blue')('Welcome to Space Battle');

    // Display the gradient text
    console.log(gradientText);


    // Start animation
    rainbow.start();

    // Stop animation after 3 seconds
    setTimeout(() => {
        rainbow.stop(); // Stop animation
    }, 4000);

    

}


startGame()


