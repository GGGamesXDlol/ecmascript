function NewFunction(name, age, country)
{
    var name = name || "Roberto ";
    var age = age || 23;
    var country = country || " ES";
    console.log(name, age, country);
};


//es6
function NewFunction2(name = "Roberto ", age = 23, country = " ES")
{
    console.log(name, age, country);
};


NewFunction2();
NewFunction2("Pablo", "52", "MX");