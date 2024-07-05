// NAME & AGE ACTIVITY

// let person = {
//     myName: "Kyle",
//     age: 24
// };

// console.log(person);
// console.log(person.myName);
// console.log(person.age);
// console.log(person["myName"]);

// CAFE ACTIVITY

// let offer = "none";
// let time = 1600;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100, 
//     hasSpecialOffers: true,
//     drinks: [
//         "cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],
//     breakfastOffer: "free croissant with coffee",
//     lunchOffer: "Free drink with suprisingly priced sandwich",
//     noOffer: "Sorry! No offer"
// };

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     // console.log(cafe.breakfastOffer);
// }

// else if
//     (time < 1500) {
//         offer = cafe.lunchOffer;
//         // console.log(cafe.lunchOffer);
//     }

// else {offer = cafe.noOffer;
//     // (console.log (cafe.noOffer));
// }

// console.log (offer)

// ALARM ACTIVITY

// let day = "Monday";
// let message = " ";
// let alarm = {
//     weekendAlarm: "No alarm needed.",
//     weekdayAlarm: "Wake up at 7am"
// }

// if ( (day == "Saturday") || (day == "Sunday") ) {
//     message = alarm.weekendAlarm }

// else { message = alarm.weekdayAlarm }

// console.log(message)

// ADD SONGS TO PERSON ACTIVITY

// let person = {
//     myName: "Kyle",
//     age: 24,
//     faveSongs: [
//         "Muse - Hysteria",
//         "Level 42 - Something About You",
//         "ACDC - Back In Black"
//     ]
// };

// console.log( person.faveSongs[1] )

// CAFE OPEN/CLOSE ACTIVITY

let offer = "none";
let time = 1600;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100, 
    hasSpecialOffers: true,
    drinks: [
        "cappuccino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot chocolate"
    ],
    breakfastOffer: "free croissant with coffee",
    lunchOffer: "Free drink with suprisingly priced sandwich",
    noOffer: "Sorry! No offer",
    
    openCafe ( ) { 
        if (this.hasSpecialOffers) {
            return "Time for special offer"
        }
    },
    closeCafe ( ) { 
        return "We are closed!" }
};

console.log (cafe.openCafe ())