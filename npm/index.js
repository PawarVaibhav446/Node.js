const chalk     = require('chalk');
const validtor  = require('validator');

const res = validtor.isEmail("Vaibhav@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

// console.log(chalk.blue("Hello World"));
// console.log(chalk.blue.italic("Hello World"));
// console.log(chalk.blue.underline.italic("Hello World"));
// console.log(chalk.blue.underline.italic.inverse("Hello World"));
// console.log(chalk.green.underline.italic.inverse("Success"));
// console.log(chalk.red.underline.italic.inverse("Failure"));

