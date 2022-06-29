const data =
{
    frontend: "Pedro",
    backend: "Fredo",
    design: "Huevo",
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 =
{
    frontend: "Pedro",
    backend: "Fredo",
    design: "Huevo",
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

const string = "hello";
console.log(string.padStart(8, "hi "));
console.log(string.padEnd(12, " -----"));
console.log("food".padEnd(12, "  -----"));

const helloWorld = () => 
{
    return new Promise((resolve, reject) => 
    {
        (true)
            ? setTimeout(() => resolve("helloWorld"), 3000)
            : reject(new Error("Test error"))
    }) 
}

const helloAsync = async () =>
{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () =>
{
    try 
    {
        const hello = await helloAsync();
        console.log(hello);
    } 
    catch (error) 
    {
        console.log(error);
    }
}
