var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    }, 
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"<dmitro.porohov@yahoo.com>"
    }, 

    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

let regex = /<?\w+(\.\w+)?@(gmail\.com|yahoo\.com)>?/;
for (let i = 0; i < arr.length; i++) {
    let email = arr[i].email;
    if (regex.test(email)) {
        console.log("Trusted email: " + email);
    }; 
 };
