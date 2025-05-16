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
 
let regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
let results = arr.filter(element => {
    if (!element.email) return false;
    let cleanEmail = element.email.replace(/[<>]/g, '');
    return regex.test(cleanEmail);
  });
for (let i = 0; i < arr.length; i++) {
    let email = arr[i].email.replace(/[<>]/g, '');
    if (regex.test(email)) {
        console.log("Валідний імейл: " + email);
    } else {
        console.log("Невалідний імейл: " + email);
    }
 };

