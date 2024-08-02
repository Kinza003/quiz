#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1. Which operator is used to check both equality and type checking?",
        choices: ["1. ==", "2. !=", "3. ===", "4. <="],
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2. Which is the following character is allowed in variable names in Typescript?",
        choices: ["1. @", "2. $", "3. #", "4. &"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3. Which method of inquirer.js is used to start the prompt interface and receive your input?",
        choices: ["1. prompt()", "2. start()", "3. init()", "4. run()"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4. In typescript, which symbol is commonly used to terminate a statement?",
        choices: ["1. :", "2. ,", "3. .", "4. ;"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5. Which operator is commonly used for string concatenation in typescript?",
        choices: ["1. +", "2. -", "3. *", "4. /"]
    },
    {
        name: "question_6",
        type: "list",
        message: "Q6. How to access object properties in typescript?",
        choices: ["1. dot notation", "2. curly bracket notation", "3. round bracket notation", "4. both 1 and 3"]
    },
    {
        name: "question_7",
        type: "list",
        message: "Q7. Which is the correct syntax for defining union type?",
        choices: ["1. let num: string | number;", "2. let num = string | number;", "3. let num: string & number", "4. let num: (string, number);"]
    },
    {
        name: "question_8",
        type: "list",
        message: "8. What is the output of the following typescript code?\n enum color {\n red : 2, \n blue, \n green} \n console.log(color.green);",
        choices: ["1. 2", "2. green", "3. 4", "4. 3"]
    },
    {
        name: "question_9",
        type: "list",
        message: "Q9. What is the output of the following code?\n let age: number = 25; \n console.log(typeof age);",
        choices: ["1. number", "2. boolean", "3. string", "4. undefined"]
    },
    {
        name: "question_10",
        type: "list",
        message: "Q10. How do you declare an array of numbers in TypeScript?",
        choices: ["1. let arr: number[];", "2. let arr: Array<number>;", "3. Both a and b", "4. Neither a nor b"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "3. ===":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect! \n ===");
}
;
switch (quiz.question_2) {
    case "2. $":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect! \n $");
}
;
switch (quiz.question_3) {
    case "1. prompt()":
        console.log("3. Correct!!");
        ++score;
        break;
    default:
        console.log("3. Incorrect! \n prompt()");
}
;
switch (quiz.question_4) {
    case "4. ;":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect! \n ;");
}
;
switch (quiz.question_5) {
    case "1. +":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect! \n +");
}
;
switch (quiz.question_6) {
    case "4. both 1 and 3":
        console.log("6. Correct!");
        ++score;
        break;
    default:
        console.log("6. Incorrect! \n both 1 and 3");
}
;
switch (quiz.question_7) {
    case "1. let num: string | number;":
        console.log("7. Correct!");
        ++score;
        break;
    default:
        console.log("7. Incorrect! \n let num: string | number;");
}
;
switch (quiz.question_8) {
    case "3. 4":
        console.log("8. Correct!");
        ++score;
        break;
    default:
        console.log("8. Incorrect! \n let num: string | number;");
}
;
switch (quiz.question_9) {
    case "1. number":
        console.log("9. Correct!");
        ++score;
        break;
    default:
        console.log("9. Incorrect! \n number");
}
;
switch (quiz.question_10) {
    case "3. Both a and b":
        console.log("10. Correct!");
        ++score;
        break;
    default:
        console.log("10. Incorrect! \n Both a and b");
}
;
console.log(`Total Score: 10`);
console.log(`Obtained Score: ${score}`);
