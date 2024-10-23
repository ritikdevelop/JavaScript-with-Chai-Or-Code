// ! There are 7 types of Bitwise operator in JavaScript.

//? 1. Bitwise AND (&)
//? 2. Bitwise OR (|)
//? 3. Bitwise XOR (^)
//? 4. Bitwise NOT (~)
//? 5. Bitwise Left Shift (<<)
//? 6. Bitwise Right Shift (>>)
//? 7. Bitwise Right Shift with zero fill (>>>)


/*The Bitwise AND (&) operator compares each bit of the first operand to the corresponding bit
of the second operand. If both bits are 1, the result is 1. If both bits are 0, the result is 0. If
one bit is 1 and the other is 0, the result is 0. The result is 0 if both bits are 0. If one bit
is 1 and the other is 1, the result is 1. The result is 0 if both bits are 0. If one bit is 1
and the other is 0, the result is 0. The result is 0 if both bits are 0. If one bit is 1 and
the other is 1, the result is 1. The result is 0 if both bits are 0. */

// * Bitwise AND

let a = 10;
let b = 20;

console.log(a & b); // 0

// * Bitwise OR

console.log(a | b); // 30

// * Bitwise XOR

console.log(a ^ b); // 30

// * Bitwise NOT

console.log(~a); // -11

// * Bitwise Left Shift

console.log(a << 2); // 40

// * Bitwise Right Shift

console.log(a >> 2); // 2

// * Bitwise Right Shift with zero fill

console.log(a >>> 2); // 2

