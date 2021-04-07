let readline = require('readline-sync');


let n = readline.question("Enter the number: ");

let x = 2;

for( i = 1; x<=n; i=i+2 ){
   // printing the current no. in the series
   console.log(x);
   // now putting the no. into the formula to cal. the next no. in series
   x = x + ((i+1)*2);
}