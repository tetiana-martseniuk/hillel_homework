function checkProbabilityTheory(count) {
    let odd = 0;
    let even = 0;
    for (let i =0; i < count; i ++ ) {
    let rnd = Math.random();
    rnd = rnd * (1000 - 100 + 1);
    rnd = Math.floor(rnd) + 100;
    if (rnd % 2 === 0) {
        even ++;
    } else {
        odd ++; 
    }
}
console.log("Кількість згенерованих чисел:", count);
console.log("Парних чисел:", even);
console.log("Непарних чисел:", odd);
console.log("Відсоток парних:", ((even / count) * 100).toFixed(2) + "%");
console.log("Відсоток непарних:", ((odd / count) * 100).toFixed(2) + "%")
}

checkProbabilityTheory(700);

