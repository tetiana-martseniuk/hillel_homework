let words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"]; 
let regex = /^[^Aa]{6,}$/;
let results = words.filter(words => regex.test(words)); 
console.log(results); 