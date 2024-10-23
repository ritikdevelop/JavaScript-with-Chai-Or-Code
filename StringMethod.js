// ! There are many methods in JavaScript

// String length
// String charAt()
// String charCodeAt()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()
// String toLowerCase()
// String toUpperCase()
// String trim()
// String replace()
// String concat()
// String localeCompare()
// String match()
// String search()
// String replaceAll()
// String includes()
// String startsWith()
// String endsWith()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String trimLeft()
// String trimRight()




// * String Length

let name = "Ritik";

console.log(name.length);
// Output: 5

// * String charAt()

console.log(name.charAt(0));
// Output: R

// * String charCodeAt()

console.log(name.charCodeAt(0));
// Output: 82

// * String at()

console.log(name.at(0));
// Output: R

// * String [ ]

console.log(name[0]);
// Output: R

// * String slice()

console.log(name.slice(0, 3));
// Output: Rit

// * String substring()

console.log(name.substring(0, 3));
// Output: Rit

// * String substr()

console.log(name.substr(0, 3));
// Output: Rit

// * String toLowerCase()

console.log(name.toLowerCase());
// Output: ritik

// * String toUpperCase()

console.log(name.toUpperCase());
// Output: RITIK

// * String trim()

let message = "   Hello, I'm Ritik   ";

console.log(message.trim());
// Output: Hello, I'm Ritik

// * String replace()

console.log(message.replace("Ritik", "Ritik Rana"));
// Output: Hello, I'm Ritik Rana

// * String concat()

console.log(name.concat(" Rana"));
// Output: Ritik Rana

// * String localeCompare()

console.log(name.localeCompare("Ritik"));
// Output: 0

// * String match()

console.log(message.match("Ritik"));
// Output: [ 'Ritik', index: 6, input: '   Hello, I\'m Ritik   ' ]

// * String search();

console.log(message.search("Ritik"));
// Output: 6

// * String replaceAll()

console.log(message.replaceAll("Ritik", "Ritik Rana")); 
// Output: Hello, I'm Ritik Rana

// * String includes()

console.log(message.includes("Ritik"));
// Output: true

// * String startsWith()

console.log(message.startsWith("Hello"));
// Output: true

// * String endsWith()

console.log(message.endsWith("Rana"));
// Output: true

// * String trimStart()

console.log(message.trimStart());
// Output: Hello, I'm Ritik

// * String trimEnd()

console.log(message.trimEnd());
// Output:   Hello, I'm Ritik

// * String padStart()

console.log(message.padStart(20, "*"));
// Output: *****Hello, I'm Ritik

// * String padEnd()

console.log(message.padEnd(20, "*"));
// Output: Hello, I'm Ritik*****

// * String trimLeft()

console.log(message.trimLeft());
// Output: Hello, I'm Ritik

// * String trimRight()

console.log(message.trimRight());
// Output: Hello, I'm Ritik



