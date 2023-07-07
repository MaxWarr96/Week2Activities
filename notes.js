// let weather = "sunny";

// if (weather == "sunny") {
//     console.log("Wear some sunscreen")
// } else if (weather =="rainy") {
//     console.log("Better take an umbrella")
// } else {
//     console.log("Hmmm, it could go either way!")
// }

// console.log(weather=="sunny")

// let place = "Manc";
// let weather = "Sunny";

// if (place == "Manc" && weather == "Sunny") {
//     console.log ("Check again")
// } else if (place == "Manc" && weather == "Rain") { 
//     console.log("Obvs")
// } else {
//     console.log("What, it isn't raining")
// }

// let car = "Peugeot"

// switch(car) {
//     case "Ford":
//     case "GM":
//         console.log("You've got an American car!");
//         break;
//     case "Peugeot":
//     case "Citoen":
//         console.log("You've got a French boy");
//         break;
//     case "Honda":
//     case "Toyota":
//     case "Suzuki":
//         console.log("Japanese cars are dead quiet");
//         break;
//     case "Mercedes":
//         console.log("You are a proper posh German");
//         break;
//     case "Volkswagen":
//         console.log("German aren't that bad at all");
//     case "Hyundai":
//     case "Kia":
//         console.log("South Korean cars are getting popular");
//         break;
//     default:
//         console.log("Your car is not in the top ten companies in the world")
// }


// ------- Arrays -------

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ]

// console.log(coffeeOrder)

// let age = 18
// let price = 0

// if (age <18){
//     price = 8
// } else if (age >=18) && (age <60){
//     price = 10.95
// } else {
//     price = 7.50
// }  

// ------- Functions -------

// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds")
// }

// pressGrindBeans()

// const favColour = (colour) => {
//     console.log(`My favourite colour is ${colour}`)
// }

// favColour("blue")

// let coffeeIsGrinding = false
// const pressGrindBeans = () => {
//     if (coffeeIsGrinding){
//         console.log("Stopping the grind")
//         coffeeIsGrinding = false
//     } else {
//         console.log("Grinding is about to begin")
//         coffeeIsGrinding = true
//     }
// }

// pressGrindBeans()

// pressGrindBeans()

// pressGrindBeans()

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from ${accnum}`)
// }

// cashWithdrawal(300,12345678)

// ------- objects -------

// const person = {
//     name: "Max",
//     age: 26 ,
//     favouriteSongs: [

//     ]
// }

// console.log(person.age)

// let offer = "none";

// let time = 1400;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot Chocolate"
    ],

    breakfastOffer:"Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "No offers on at the moment"
 }

if (time <1100){
    offer = cafe.breakfastOffer
    console.log(cafe.breakfastOffer)
}else if (time <1500){
    offer = cafe.lunchOffer
    console.log(cafe.lunchOffer)
}else {
    offer = cafe.noOffer
    console.log(cafe.noOffer)   
}

// const alarm = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am",
// } 

// let day = "Saturday"
// let alarmMsg =""

// if (day == "Saturday" || day == "Sunday"){
//     alarmMsg = alarm.weekendAlarm
// } else {
//     alarmMsg = alarm.weekdayAlarm
// }

// console.log(alarmMsg)