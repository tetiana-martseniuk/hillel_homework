let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн", 
    price () {
        let total = 0; 
        for (let services in this) {
            if (typeof this[services] === 'string' && this [services].includes('грн')) {
                total += parseFloat(this[services]);
            }
        }
        return total + " грн";
 }, 

 minPrice() {
    let min = Infinity; 
    for (let services in this) {
        if (typeof this[services] === 'string' && this [services].includes('грн')) {
            let value = parseFloat(this[services]);
            if (value < min) {
                min = value;
            } 
        }
    }
    return min + " грн"; 
 },

 maxPrice() {
    let max = -Infinity;
    for (let services in this) {
        if (typeof this[services] === 'string' && this [services].includes('грн')) {
            let value = parseFloat(this[services]);
            if (value > max) {
                max = value;
    }
        }    
    }
    return max + " грн";
 }
};

services['Розбити скло'] = "200 грн"; 

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());








 

