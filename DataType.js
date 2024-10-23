//todo Thee are many types of data types in javaScript


// 1. String => ""
// 2. Number => 123   //* 2 to the power 53
// 3. Boolean => true/false
// 4. Object => {}
// 5. Array =>[]
// 6. Date => function
// 7. Function => ()
// 8. undefined => 
// 9. null => standalone value
// 10. BigInt => 
// 11. Symbol =>


const name = "Ritik"; 
const number = 123;
const isLogin = true;
const object = {
    name: "Ritik",
    age: 21,
    address: "Delhi"
}

const array = [1,2,3,4,5];
const date = new Date();

function myFunction(a,b) {
    return a + b;
}

let result = myFunction(2 , 3);

let message;

let myVar = null;

const sym = Symbol();

console.table([name, number, isLogin, object, array, date, result, message, myVar, sym]);