// ------- Activity 1 -------

// const person = {
//     name: "Max",
//     age: 26 ,
//     sayHi() {
//         return `Hello my name is ${this.name}`
//     }
// }

// console.log(person.sayHi())

//------- Activity 2 -------

// const pet = {
//     name: "Indy",
//     typeOfpet: "dog",
//     age: 4,
//     colour:"black",
//     eating() {
//         return `Your ${this.colour} ${this.typeOfpet} named ${this.name}, is eating`
//     },
//     drinking() {
//         return `Your ${pet.colour} ${pet.typeOfpet} named ${pet.name}, is drinking`
//     }
// }   

// console.log(pet.eating())
        
// ------- Activity 3 -------

const coffeeShop = {

    branch: "Starbucks",
    
    drinkMenu: ["Tea", 1.50, "Coffee", 2.30],
    foodMenu: ["Pizza", 2.75, "Cheese", 3.45],


    drinkOrder(drink){
        for (let i = 0; i<this.drinkMenu.length; i++){
            if(drink===this.drinkMenu[i]){
                let drinkPrice = this.drinkMenu[i+1]
                return this.drinkMenu[i+1]
            } 
            }
            return false
        },

    foodOrder(food){
    for (let i = 0; i<this.foodMenu.length; i++){
        if(food===this.foodMenu[i]){
            let foodPrice = this.foodMenu[i+1]
            return this.foodMenu[i+1]
        }
        }
        return False
    },

    order(drink, food){
        if (this.foodOrder(food)&& this.drinkOrder(drink)){
        console.log(`You have ordered ${drink} at ${this.drinkOrder(drink)}`)
        console.log(`You have ordered ${food} at ${this.foodOrder(food)}`)
        console.log(`Total Cost £${this.foodOrder(food)+this.drinkOrder(drink)}`)
    } else {
        console.log("We do not have that item")
    }
},
}
// coffeeShop.drinkOrder("Coffee")
// coffeeShop.foodOrder("Cheese")

coffeeShop.order("Tea","Pizza")