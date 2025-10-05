let user
{
    user =
    {
        name: "Jhon",
        age:18,
        Location:"USA"
    }
    null
    user.name = "Mike"
    user.age = 20
    user.Location = "canada"
    console.log(user);
    console.log(user.name);
    console.log(user.age);
    console.log(user.Location);
    user.isMarried = false
    console.log(user.isMarried);
    user.hobby = ["reading","travelling","swimming"]
    console.log(user.hobby);
    console.log(user.hobby[1]);
    user.greet = function()
    {
        console.log("Hello, my name is "+user.name);
        console.log("I am "+user.age+"years old");
        console.log("I Live in "+user.Location);
        console.log("My hobbies are "+user.hobby);
        if(user.isMarried)
        {
            console.log("I am married");
            console.log("I have a family");
        }
        else
        {
            console.log("I am not married");
            console.log("I am Single");
            console.log("I am looking for a partner");
        }
    }
    user.greet()
}