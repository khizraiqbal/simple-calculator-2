#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([{ message: "ENTER FIRST NUMBER", type: "number", name: "firstnumber"},
{ message: "ENTER SECOND NUMBER", type: "number", name: "secondnumber" },

{ message: "Select one of the operator", 
type: "list", 
name: "operator",
choices:["addition","subtraction","multiplication","division"],

},]);

// conditional statement
if(answer.operator === "addition"){
    console.log(answer.firstnumber + answer.secondnumber);
}else if (answer.operator === "subtraction"){
    console.log(answer.firstnumber - answer.secondnumber);}
else if (answer.operator === "multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);}
    else if (answer.operator === "division"){
        console.log(answer.firstnumber / answer.secondnumber);}

else {
    console.log("Invalid Operator");
}
