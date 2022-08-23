// Programming Foundations - Module 1
// Lesson Task 3 Questions

// Question 1
// Given these two variables
// var firstNumber = 34;
// var secondNumber = 89;
// write an if statement that checks whether firstNumber is smaller than secondNumber.
// If it is, log the message "The first number is smaller than the second".

var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
}

// Question 2
// Given these two variables
// var age = 11;
// var minimumAge = "13";
// write code that checks whether age meets the minimumAge requirement.
//Log a message if it passes the test and use an else block to log a message if it doesn't.

var age = 11;
var minimumAge = "13";

if (age >= parseInt(minimumAge)) {
    console.log("Age is accepted");
} else {
    console.log("You are too young");
}

// Question 3
// Given these two variables
// var income = "11.050";
// var maximumIncome = "13.075";
// write code that checks whether income meets the maximumIncome requirement.
//Log a message if it passes the test and use an else block to log a message if it doesn't.

var income = "14.050";
var maximumIncome = "13.075";

if (parseFloat(income) < parseFloat(maximumIncome)) {
    console.log("Income meets income requirements");
} else {
    console.log("Income is above the maximum income requirements");
}

// Question 4
// Fix this code:
// var colour = "blue";
// if ((colour = "orange")) {
//     console.log("This colour is a bit rubbish");
// }

var colour = "blue";
if (colour === "orange") {
    console.log("This colour is a bit rubbish");
} else {
    console.log("Nice color");
}

// Question 5
// Given the following variable
// var invoicePaid = false;
// write code that logs the message "Not paid" if the invoice has not been paid.

var invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not paid");
}

// Question 6
// Given these two variables
// var selectedNumber = 11;
// var winningNumber = "15";
// write code that checks if the winning number hasn't been selected.
//If it hasn't, log the message "You lose again". Use the strict inequality operator.

var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
    console.log("You lose again.");
}

// Question 7
// Given this variable
// var dayOfTheWeek = 2;
// write a switch statement that log the weekday name depending on the value of dayOfTheWeek.
//If dayOfTheWeek is 1, log "Monday", if it is 2 log "Tuesday".
// If the dayOfTheWeek is not a number between 1 and 7, log the message "Invalid day number".

var dayOfTheWeek = 8;

var weekdayName;

switch (dayOfTheWeek) {
    case 1:
        weekdayName = "Monday";
        break;
    case 2:
        weekdayName = "Tuesday";
        break;
    case 3:
        weekdayName = "Wednesday";
        break;
    case 4:
        weekdayName = "Thursday";
        break;
    case 5:
        weekdayName = "Friday";
        break;
    case 6:
        weekdayName = "Saturday";
        break;
    case 7:
        weekdayName = "Sunday";
        break;
    default:
        weekdayName = "Invalid day number";
}

console.log(weekdayName);
