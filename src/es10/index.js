let array = [1,2,3,  [4,5,6, [7,8,9]]];

console.log(array.flat(2));

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));

let hello = "                               hello World";

console.log(hello);
console.log(hello.trimStart());

let hello2 = "hello World                                       ";

console.log(hello2);
console.log(hello2.trimEnd());

let hello3 = "                                hello World                                       ";

console.log(hello3);
console.log(hello3.trimEnd().trimStart());

try 
{
    
} catch
{
    error
}


let entries = [["name", "oscar"], ["age", 32]];

console.log(Object.fromEntries(entries));

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);