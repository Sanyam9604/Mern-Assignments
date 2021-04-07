let readline = require('readline-sync');

let amount = readline.question("Enter amount: ");
let rate = readline.question("Enter rate: ");
let time = readline.question("Enter time: ");


function si(amount, rate, time) {
    return (amount * rate * time)/100;
}

console.log(si(amount, rate, time));