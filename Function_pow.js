function pow(x, y) {
    let finalResult = 1; 
    for (let i = 0; i < y; i++ ) {
        finalResult *= x;
    }
    console.log(finalResult);
}
pow(6, 2); 