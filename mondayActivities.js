// ---------Activity 1---------

let myName = "Max";
let myAge = 26;
let favouriteColour = "Blue";

console.log (`Hello, my name is ${myName}, my age is ${myAge}, and my favourite colour is ${favouriteColour}.`)

// ---------Activity 1 Stretch---------

let myHeight = "5'11";
let myWeight = "79kg";
let favouriteFood = "Steak";

console.log (`My height is ${myHeight}, I weigh ${myWeight}, and my favourite food is ${favouriteFood}.`)

// ---------Activity 2---------

let myBreakfast = "Porridge"
let myLunch = "BLT Sandwich"
let myDinner = "Spaghetti Bolognese"

console.log (`Today I ate ${myBreakfast} for breakfast, ${myLunch} for lunch, and will be having ${myDinner} for dinner.`)

// ---------Activity 2 Stretch---------

let myBreakfastTomorrow = "CoCo Pops"
let myLunchTomorrow = "Eggs on Toast"
let myDinnerTomorrow = "Salmon"

console.log (`Tomorrow I will have ${myBreakfastTomorrow} for breakfast, ${myLunchTomorrow} for lunch, and will be having ${myDinnerTomorrow} for dinner.`)

// ---------Activity 3---------

let date1 = new Date("08/28/1996")
let date2 = new Date("07/03/2023")

const date1InMs = date1.getTime()
const date2InMs = date2.getTime()

const msDiff = date2InMs - date1InMs
const dayInMS = 24 * 60 * 60 * 1000
const diff = Math.round(
msDiff / dayInMS
)

console.log(diff)