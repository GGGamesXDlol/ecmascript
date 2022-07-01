const string = "Maravillosamente maravilloso X D D D D D D D D D D D D D D D D D D D Maravillosamente";

const replacedString = string.replace("Maravillosamente", "Feamente");

console.log(replacedString);

const replacedString2 = string.replaceAll("Maravillosamente", "Feamente");

console.log(replacedString2);


class Message
{
    show(val)
    {
        console.log(val);
    };
}

const message = new Message();
message.show("hola");


const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


class anyClass
{
    constructor(element)
    {
        this.ref = new WeakRef(element)
    }
}


let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

isTrue = true;
isFalse = false;
console.log(isTrue ||= isFalse);

isTrue = undefined;
isFalse = false;
console.log(isTrue ??= isFalse);