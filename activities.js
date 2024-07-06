// ACTIVITY 01

let person = {
    myName: "Kyle",
    age: 24,
    faveSongs: [
        "Muse - Hysteria",
        "Level 42 - Something About You",
        "ACDC - Back In Black"
    ],
    sayHi: function() {
        console.log("Hi, my name is " + this.myName + "!");
    }
}

person.sayHi ()