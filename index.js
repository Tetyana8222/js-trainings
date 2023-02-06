// const max = 30;
// const min = 10;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//   }
//   console.log(i);
// }

// let counter = 0;
// while (counter < 10) {
//   console.log("counter:", counter);
//   counter += 1;
// }
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//   // console.log(cart[i]);
//   total += cart[i];
// }
// console.log(total);
// const numbers = [5, 99, 309, 7, 754];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNumber) {
//   }
//   biggestNumber = number;
// }

// console.log(biggestNumber);

// const numbers = [2, 17, 94, 1, 23, 37, -1, 100, -2];
// let min = numbers[0];

// for (const number of numbers) {
//   if (min > number) {
//     min = number;
//   }
// }

// for (let i = 8; i < 17; i += 1) {
//   if (i % 3 === 0) {
//     number = i;
//   }

//   return number;
//   // Change code above this line
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// Change code below this line
// console.log(3 > 2 > 1);
//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//   { name: 'emerald', price: 1300, quantity: 4 },
//   { name: 'diamond', price: 2700, quantity: 6 },
//   { name: 'sapphire', price: 400, quantity: 7 },
//   { name: 'rubble', price: 150, quantity: 100 },
// ]

// Change code below this line
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (newPotion.name === potion.name) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (potionName === this.pitions[i].name)

//         return `Potion ${oldName} is not in inventory!`;
//     }
//   },
//   return `Potion ${potionName} is not in inventory!`
// };

//   updatePotionName(oldName, newName) {
//   for (let i = 0; i < this.potions.length; i++){
//       (if newName ===this.pitions[i].name){
//         this.potions. slpice(i, 1);
//     }
//       else if (oldName ===this.potions[i].name){
//         this.potions.splice(i,1,newName);
//       }
//     }

//       return `Potion ${oldName} is not in inventory!`;
//     }

// };
// Колбек-функція
// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// Change code above this line
// Change code below this line
// Change code below this line
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
// const getSortedFriends = (users) => {
//   return users.flatMap((user) => user)
// };
const getNamesSortedByFriendCount = (users) => {
  return users
    .map((user) => user)
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};
console.log(user.name);
