function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Create a new Car object
var myCar = new Car('Toyota', 'Corolla', 2005);

console.log(myCar.make); // Output: Toyota
console.log(myCar.model); // Output: Corolla
console.log(myCar.year); // Output: 2005
