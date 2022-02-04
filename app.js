class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    brag() {
        //console.log("My car is a " + this.year + " " + 
        //     this.brand + " " + this.model + "!");
    }
}

const myCoolCar = new Car("Ford", "Mustang", 2022);
myCoolCar.brag();


class Calculator {
    addNums(num1, num2) {
        return (num1 + num2);
    }
}

const calc = new Calculator();
//console.log("My Ad is " + calc.addNums(7,33));


class Casino {
    constructor(name) {
        this.name = name;
        this.timesPlayed = 0;
    }
    playGame(betAmount) {
        let chance = Math.random();
        if (chance < 0.5) {
            console.log("The " + this.name + " casino wins! " + chance)
        }
        else
        {
            this.timesPlayed ++;
            let money = betAmount * (this.timesPlayed + 1)
            console.log("YOU WIN!  Win# " + this.timesPlayed + " You're up $" + money)

        }
    }
}

const myCasino = new Casino("HackerU Casino");

for (let i=0; i < 10; i++)
   myCasino.playGame(5);





// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
