#! /usr/dev/env node

import inquirer from "inquirer";

const numbers = await inquirer.prompt([
  {
    messege: "Enter your first number: ",
    type: "number",
    name: "num1",
  },
  {
    messege: "Enter your second number: ",
    type: "number",
    name: "num2",
  },
  {
    message: "Please choose one operator",
    type: "list",
    choices: ["add", "sub", "multiply", "Divide"],
    name: "operator",
  },
]);
if(numbers.operator === "add"){
    console.log( 'Your number is ' +  numbers.num1 + numbers.num2)
}
else if(numbers.operator === "sub"){
    console.log(numbers.num1 - numbers.num2)
}
else if(numbers.operator === "multiply"){
    console.log( 'Your number is ' +  numbers.num1 * numbers.num2)
}
else if(numbers.operator === "Divide"){
    console.log( 'Your number is ' +  numbers.num1 / numbers.num2)
}
else(
    console.log("Please choose a valid operator")
)
