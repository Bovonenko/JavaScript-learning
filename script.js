"use strict"; 

//conditions

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too much');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log("Ok!") : console.log('Error');

const num = 51;
switch (num) {
    case 49: 
        console.log('Error');
        break;
    case 100: 
        console.log('Error');
        break;
    case 50: 
        console.log('OK');
        break;
    default: 
        console.log('Not this time!');
        break;
}