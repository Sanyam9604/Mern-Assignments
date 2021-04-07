let readline = require('readline-sync');

let n = readline.question("Enter the number: ");

let count = 0;
let rem = 0;
while(n>0){
    // cal. the remainder for later
    rem = n%10;
    // eliminating the last digit
    n = n / 10;
    n = n - (rem/10);
    // inc. the count of digits
    count++;
}

console.log(count);