var a = 5;
var a = 10;

console.log(a);
let b = 10;
if (a > b) {
    console.log(`${a} is greater`);
} else {
    console.log(`${b} is greater`);
}


let a = 10;
let b = 20;
console.log(a > b);

switch (a > b) {
    case true:
        console.log("a is greater");
        break;

    case false:
        console.log("b is equal or lesser");
        break;

    default:
        console.log("not found");
        break;
}


//  LOOPING STATEMENT
// ENTRY CHECK
// EXIT CHECK


// ENTRY CHECK
for (let i = 1; i <= 10; i++) {
    console.log(i);




}


let i = 1;
while (i <= 10) {
    console.log(i);
    i = i + 1; // i++;
}

// EXIT CHECK

let i = 1;
do {
    console.log(i);
    i = i + 1;
} while (i <= 10);


for (let i = 1; i <= 10; i++) {
    
    console.log(i * 2);
    
}



