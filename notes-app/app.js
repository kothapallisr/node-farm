const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const add = require("./utils.js");

// console.log(
//   chalk.bold.inverse.blue("Sri Satchidananda Sadguru Sainath Maharaj Ki Jai!")
// );
// console.log(
//   chalk.bold.inverse.green("Sadguru Sri Sainathuni Sarath Babuji Ki Jai!!")
// );

yargs.version("1.1.0");
console.log(yargs.argv);

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});
