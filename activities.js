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

let pet = {
        petName: "Coco",
        tyoeOfPet: "Dog", 
        petAge: 4,
        petColour: "Brown",

    eat () {
         console.log(this.petName + " is eating steak. ");
    },
    drink () { 
        console.log(this.petName + " is drinking water. ");
    }
}

pet.eat (), pet.drink ()