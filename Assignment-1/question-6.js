let readline = require('readline-sync');

let n = readline.question("Enter the number: ");

let temp = n;
let count = 0;
let rem = 0;
// calculating the no. of digits
while(temp>0){
    rem = temp%10;
    temp = temp / 10;
    temp = temp - (rem/10);
    count++;
}

// reversing the no. storing into temporary variable
while( count > 0 ){
    rem = n%10;
    temp = (temp*10) + rem;
    n = (n/10) - (rem/10);
    count--;
}
// number reversed
n = temp;

console.log(n);