const obj = 
{
    name: "Pedro", 
    age: 32,
    country: "ES"
};

let { name , ...all } = obj;
console.log(all);

const obj2 = 
{ 
    name : "Pedro",
    age: 32,
}

const obj3 =
{
    ...obj2,
    country : "ES"
}

console.log(obj3);

const helloWorld = () => 
{
    return new Promise((resolve, reject) =>
    {
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000) 
            : reject(new Error("Test error"));
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("FINALIZACION HERMANO"))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2022-06-30");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);