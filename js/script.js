//Question 1: Given these two variables
//var firstNumber = 34;
//var secondNumber = 89;
//write an if statement that checks whether firstNumber is smaller than secondNumber.
//If it is, log the message "The first number is smaller than the second".

var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
}

//Question 2: Given these two variables
//var age = 11;
//var minimumAge = "13";
//write code that checks whether age meets the minimumAge requirement.
//Log a message if it passes the test and use an else block to log a message if it doesn't.

var age = 11;
var minimumAge = "13";

if (age >= parseInt(minimumAge)) {
    console.log("Welcome, you are old enough");
} else {
    console.log("I'm sorry, you're not old enough");
}

//Question 3: Given these two variables
//var income = "11.050";
//var maximumIncome = "13.075";
//write code that checks whether income meets the maximumIncome requirement.
//Log a message if it passes the test and use an else block to log a message if it doesn't.

var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat(income) <= parseFloat(maximumIncome)) {
    console.log("You passed the income check!. Maximum income requirement met");
} else {
    console.log("I'm sorry, you'reincome is too high! Maximum income requirement not met");
}

//Question 4: Fix this code:
/*
var colour = "blue";
if ((colour = "orange")) {
    console.log("This colour is a bit rubbish");
}
*/

var colour = "blue";
if (colour === "orange") {
    console.log("This colour is a bit rubbish");
}

//Question 5: Given the following variable
//var invoicePaid = false;
//write code that logs the message "Not paid" if the invoice has not been paid.

var invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not paid");
}

// or
if (invoicePaid !== true) {
    console.log("Not paid");
}

// or
if (!invoicePaid) {
    console.log("Not paid");
}

//Question 6: Given these two variables
//var selectedNumber = 11;
//var winningNumber = "15";
//write code that checks if the winning number hasn't been selected.
//If it hasn't, log the message "You lose again". Use the strict inequality operator.

var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
    console.log("You lose again");
}

//Question 7: Given this variable
//var dayOfTheWeek = 2;
//write a switch statement that log the weekday name depending on the value of dayOfTheWeek.
//If dayOfTheWeek is 1, log "Monday", if it is 2 log "Tuesday".
//If the dayOfTheWeek is not a number between 1 and 7, log the message "Invalid day number".

var dayOfTheWeek = 7;
var day;

switch (dayOfTheWeek) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        day = "Invalid day number";
}

console.log(day);

// LOOPS

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//LOOPS - Lesson Task 4

//Question 1
//Write a loop that logs the numbers 0 to 7.

for (var i = 0; i <= 7; i++) {
    console.log(i);
}

//Question 2: Write a loop that logs the numbers 10 to 1. Count down from 10 to 1.

for (var i = 10; i >= 0; i = i - 1) {
    console.log(i);
}

//Question 3: Write a loop that counts from 10 to 20, and log only the odd numbers. 11, 13, 15, etc
for (var i = 11; i <= 19; i = i + 2) {
    console.log(i);
}
