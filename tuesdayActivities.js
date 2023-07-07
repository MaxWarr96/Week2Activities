// ---------Activity 1---------

// let age = 18
// if (age > 17) {
//     console.log("I can serve you")
// } else {
//     console.log("I can't serve you")
// }

// ---------Activity 1 Stretch---------

// let age = 18
// let country = "UK"

// if (age > 17 && country == "UK") {
//     console.log("I can serve you")
// } else {
//     console.log("I can't serve you")
// }

// ---------Activity 2---------

// let pizza = "Pepperoni";
// switch(pizza){
//     case "Pepperoni":
//     case "Margherita":
//         console.log("These are important ingredients for my pizza");
//         break;
//     case "Pinapple":
//     case "Mushroom":
//         console.log("These toppings should not be on my pizza")         
// }

// ---------Activity 3---------

// let password = "phoTo";

// if (password.length < 8) {
//     console.log("Password too short");
// } else {
//     console.log("Password accepted")
// }

// ---------Activity 3 Stretch---------

// let num = 18

// if (num % 3 == 0 || num % 5 == 0) {
//     console.log("This number is divisable by 3 or 5")
// }else {
//     console.log("This number is not divisable by 3 or 5")
// }

// let num = 15

// if(num % 3 === 0 && num % 5 === 0) {
//     console.log (`${num} is divisable by both 3 and 5`)
// }else if(num % 3 === 0) {
//     console.log (`${num} is divisable by only 3`)
// }else if(num % 5 === 0) {
//     console.log (`${num} is divisable by only 5`)
// }

// ---------Activity 4---------

// let num = 15

// if(num % 3 === 0 && num % 5 === 0) {
//     console.log ("fizz buzz")
// }else if(num % 3 === 0) {
//     console.log ("fizz")
// }else if(num % 5 === 0) {
//     console.log ("buzz")
// }

// ---------Activity 5---------

// function checkPalindrome(string) {

//     const len = string.length;

//     for (let i = 0; i < len / 2; i++) {

//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// const string = "1001";

// const value = checkPalindrome(string);

// console.log(value)


// ---------Activity 6---------

// let placeOfWork = "CodeNation"
// let townOfHome = "Cottam"
// let time = 9

// if (time == 7) {
//     console.log(`I'm at ${townOfHome}`)
// } else if (time == 8) {
//     console.log(`I'm commuting to ${placeOfWork}`)
// } else if (time == 9) {
//     console.log(`I'm at ${placeOfWork}`)
// }

// ---------Activity 7---------


// function countVowel(str) { 

//     const count = str.match(/[aeiou]/gi).length;

//     return count;
// }

// const string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// const result = countVowel(string);

// console.log(result);

// ---------Activity 7 Continued---------

// const str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// const vow = ['a', 'e', 'i', 'o', 'u'];
// const result = [];
// [...str.toLowerCase()].forEach((char, index) => {
//   if (vow.includes(char)) {
//     result.push(index + 1);
//   }
// })

// console.log(result)

// ---------Activity 8---------