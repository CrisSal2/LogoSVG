/******************************************************** Imports *************************************************************/

const inquirer = require("inquirer");
const fs = require("fs");
const writeToFile = require("./lib/generateSVG");
const { Triangle, Square, Circle } = require("./lib/shapes");


/***************************************************** Inquirer Prompt ********************************************************/


function createLogo() {
    inquirer
      .prompt([
        {
          type: "input",
          message:
            "Enter up to three characters for your logo text:",
          name: "text",
        },
        {
          type: "input",
          message:
            "Enter color or a hexadecimal number for your text color:",
          name: "textColor",
        },
        {
          type: "list",
          message: "What shape would you like your logo to render?",
          choices: ["Triangle", "Square", "Circle"],
          name: "shape",
        },
        {
          type: "input",
          message:
            "Enter color or a hexadecimal number for your shape color",
          name: "shapeBackgroundColor",
        },
      ])
      .then((answers) => {
        if (answers.text.length > 3) {
          console.log("Must enter a value of no more than 3 characters");
          createLogo();
        } else {
          writeToFile("logo.svg", answers);
        }
      });
};


/**************************************************** Initializes function **************************************************/


createLogo();
