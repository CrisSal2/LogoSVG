/******************************************************** Imports *************************************************************/

const inquirer = require('inquirer');
const fs = require('fs');

// Imports Shapes classes from shapes.js
const { Triangle, Square, Circle } = require('./lib/shapes');


/********************************************* Function to render logo using answers ************************************************/

function writeToFile(fileName, answers) {

  // Starts file height and width
  let svgString = '';
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    // Wraps the logo in <g> tags (The <g> SVG element is a container used to group other SVG elements.)
  svgString += '<g>';
  svgString += `${answers.shape}`;

  // Uses answers from prompt and creates new shape and logo text
  let shapeChoice;
  if (answers.shape === 'Triangle') {
    shapeChoice = new Triangle();
    svgString += `<polygon points='150, 18 244, 182 56, 182' fill='${answers.shapeBackgroundColor}'/>`;
  } else if (answers.shape === 'Square') {
    shapeChoice = new Square();
    svgString += `<rect x='73' y='40' width='160' height='160' fill='${answers.shapeBackgroundColor}'/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx='150' cy='115' r='80' fill='${answers.shapeBackgroundColor}'/>`;
  }

  svgString += `<text x='150' y='130' text-anchor='middle' font-size='40' fill='${answers.textColor}'>${answers.text}</text>`;
  svgString += '</g>';
  svgString += '</svg>';

  // The writeFile() method is used to asynchronously write the specified data to a file
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log('Generated logo.svg');
  });
};


/***************************************************** Inquirer Prompt ********************************************************/

// Inquirer prompt questions for logo
function createLogo() {
    inquirer
      .prompt([
        {
          type: 'input',
          message:
            'Enter up to three characters for your logo text:',
          name: 'text',
        },
        {
          type: 'input',
          message:
            'Enter color keyword or a hexadecimal number for your text color:',
          name: 'textColor',
        },
        {
          type: 'list',
          message: 'What shape would you like your logo to render?',
          choices: ['Triangle', 'Square', 'Circle'],
          name: 'shape',
        },
        {
          type: 'input',
          message:
            'Enter color keyword or a hexadecimal number for your shape color:',
          name: 'shapeBackgroundColor',
        },
      ])
      .then((answers) => {
        if (answers.text.length > 3) {
          console.log('Must enter a value of no more than 3 characters');
          createLogo();
        } else {
          writeToFile('logo.svg', answers);
        }
      });
};


/****************************************************** Initializes function ****************************************************/


createLogo();
