const chalk     = require('chalk');
const validtor  = require('validator');

const res = validtor.isEmail("Vaibhav@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
