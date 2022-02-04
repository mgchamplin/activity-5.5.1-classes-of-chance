class Vehicle {
    constructor (price, color, highway_mpg, city_mpg, isDiesel) {
        price = price;
        this.color = color;
        highway_mpg = highway_mpg;
        this.city_mpg = city_mpg;
        isDiesel = isDiesel;
    }

    isUnder50Grand () {
        return(this.price < 50000)
    }

    isHighwayMpgMoreThan30 () {
        return(this.highway_mpg > 30)
    }

    ifColorRedGreenOrBlue () {
        return(this.color === 'red' || this.color === 'green' || this.color === 'blue')
    }
}

console.log("HELLO")

car = new Vehicle (10000, 'red', 40, 20, false)
truck = new Vehicle (60000, 'blue', 31, 10, true)

console.log("Car is <50k: " + car.isUnder50Grand())
console.log("Truck is <50k: " + truck.isUnder50Grand())
console.log("Truck is red/green/blue: " + truck.ifColorRedGreenOrBlue())
console.log("Truck HW MPG > 30: " + truck.isHighwayMpgMoreThan30())