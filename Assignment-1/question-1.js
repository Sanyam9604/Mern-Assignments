const readline = require('readline-sync');

const credit = readline.question("Enter your credit: ");

if( credit >= 7500 ){
    console.log("Tera Leader");
} else if( credit >= 6000 && credit < 7500 ){
    console.log("Gega Leader");
} else if( credit >= 4500 && credit < 6000 ){
    console.log("Mega Leader");
}else {
    console.log("Rising Star");
}