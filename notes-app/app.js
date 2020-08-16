const validator = require("validator");
const chalk = require("chalk");
const add = require("./utils.js");

console.log(
  chalk.bold.inverse.blue("Sri Satchidananda Sadguru Sainath Maharaj Ki Jai!")
);
console.log(
  chalk.bold.inverse.green("Sadguru Sri Sainathuni Sarath Babuji Ki Jai!!")
);

console.log("nodemon running...");
console.log(add(4, 5));
