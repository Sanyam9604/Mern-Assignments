let readline = require('readline-sync');

var n1 = readline.question("Enter first number: ");
var n2 = readline.question("Enter second number: ");

function gcdCal(n1, n2) {
    var min= n1;
    var gcd = 1;
    if( n2 < n1 ){
    min = n2;
    }
    for( i = 2; i<min; i++ ){

    while( n1%i == 0 || n2%i == 0 ){

       if( n1%i == 0 && n2%i == 0 ){
           gcd *= i;
           n1 /= i; n2 /= i;
       } else if( n1%i == 0 && n2%i != 0 ){
           n1 /= i;
       }else{
           n2 /= i;
       }

    }

    if( n1 == 0 || n2 == 0 ){
       break;
    }
    }
    return gcd;
}


console.log(gcdCal(n1, n2));