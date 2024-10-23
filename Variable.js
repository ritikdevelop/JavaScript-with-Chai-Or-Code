// ! There are three types of variable in JavaScript

// 1. const
// 2. var //* Prefer not to use var because of issue in block scope & functional scope 
// 3. let



const name = "Ritik";   
let number = 1234;
var message = "Hello, I'm Ritik";


// name = "Ritik Rana"; //! Const not allow to change
number = 5678;
message = "Hello, My self Ritik Rana";


console.table([name, number, message]);

