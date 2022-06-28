function NewFunction(name, age, country)
{
    var name = name || "Roberto";
    var age = age || 23;
    var country = country || "ES";
    console.log(name, age, country);
};


//es6
function NewFunction2(name = "Roberto", age = 23, country = "ES")
{
    console.log(name, age, country);
};


NewFunction2();
NewFunction2("Pablo", "52", "MX");

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Lorem ipsum dolor sit amet, consectetur \n"
+ "Lorem ipsum dolor sit amet";

let lorem2 = `Lorem ipsum dolor sit amet
Lorem ipsum dolor sit amet`;
console.log(lorem);
console.log(lorem2);

let person =
{
    'name': 'John',
    'age': '27',
    'country': 'ES'
}

console.log(person.name, person.age, person.country);

let {name, age, country} = person;
console.log(name, age, country)

let team1 = ["Roberto", "Oscar", "Ricardo"]
let team2 = ["Pedro", "Pablo", "John"]

let education = ["David", ...team1, ...team2]
console.log(education);

{
    var globalVar = "global var";
}

{
    let globalLet = "Global Let";
console.log(globalLet);
}

console.log(globalVar);

var a = "b";
a = "a";
console.log(a);

let name2 = "pablo";
let age2 = "57"

obj = {name2: name2, age2: age2};
//es6
obj2 = {name2, age2};

console.log(obj2);

const names = [
    {name: "Pedro", age: 37},
    {name: "Pabla", age: 35}
]

let listOfNames = names.map(function (item)
{
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) =>
{
    console.log(name);
}

const listOfNames4 = name =>
{
    console.log(name);
}

const square = num => num * num;

const helloPromise = () => 
{
    return new Promise((resolve, reject) =>
    {
        if (true) 
        {
            resolve("Hey!");
        }
        else
        {
            reject("Ups!!");
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

class calculator
{
    constructor()
    {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB)
    {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from "./module";

hello();

function* helloWorld()
{
    if (true) 
    {
        yield "Hello, ";
    }

    if(true)
    {
        yield "world";
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);