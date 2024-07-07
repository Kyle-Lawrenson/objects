// ACTIVITY 01

// let person = {
//     myName: "Kyle",
//     age: 24,
//     faveSongs: [
//         "Muse - Hysteria",
//         "Level 42 - Something About You",
//         "ACDC - Back In Black"
//     ],
//     sayHi () {
//         console.log("Hi, my name is " + this.myName + "!");
//     }
// }

// person.sayHi ()

// ACTIVITY 02

// let pet = {
//         petName: "Coco",
//         tyoeOfPet: "Dog", 
//         petAge: 4,
//         petColour: "Brown",

//     eat () {
//          console.log(this.petName + " is eating steak. ");
//     },
//     drink () { 
//         console.log(this.petName + " is drinking water. ");
//     }
// }

// pet.eat (), pet.drink ()

// ACTIVITY 03

const coffeeShop = {
    branch: "Central",

    drinks: {
        "Coffee": 3.00,
        "Latte": 2.50,
        "Expresso": 4.00,
        "Cappuccino":3.50,
        "Americano":3.70

    },

    food: {
        "Sandwich": 2.00,
        "Pizza slice": 3.00,
        "Burger": 4.00,
        "Cookie": 1.50,
        "Croissant": 1.80
    },

    drinksOrdered: function(...drinks) {
        let totalCost = 0;
        let orderSummary = drinks.map(drink => {
            if (this.drinks[drink]) {
                totalCost += this.drinks[drink];
                return `${drink} ($${this.drinks[drink].toFixed(2)})`;
            } else {
                return `${drink} (not available)`;
            }
        }).join(", ");
        
        return `Your drinks order is: ${orderSummary}. Total: $${totalCost.toFixed(2)}`;
    },

    foodOrdered: function(...foods) {
        let totalCost = 0;
        let orderSummary = foods.map(food => {
            if (this.food[food]) {
                totalCost += this.food[food];
                return `${food} ($${this.food[food].toFixed(2)})`;
            } else {
                return `${food} (not available)`;
            }
        }).join(", ");
        
        return `Your food order is: ${orderSummary}. Total: $${totalCost.toFixed(2)}`;
    }
};

console.log(coffeeShop.drinksOrdered("Coffee", "Americano")); 
console.log(coffeeShop.foodOrdered("Pizza slice", "Croissant"));
