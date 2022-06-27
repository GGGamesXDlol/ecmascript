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