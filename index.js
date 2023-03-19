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

// set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }

// 7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должен спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let result;

// do {
//   result = prompt("Pls enter number greater than 100");
// } while (result <= 100 && result !== null);

// if (result > 100) {
//   alert(`your number is less than ${result}`);
// } else {
//   alert("you canceled your operation");
// }

// 8. При завантаженні сторінки користувачу у prompt пропонується ввести число від 0 до 59 'Hello, enter please the number between  0 and 59'.
//Зроби перевірку на відповідність введеного числа вказаному діапазону (0-59). Якщо число не відповідає виведіть
//alert з повідомленням "The [number] is outside 0 and 59"
// Визначте в яку чверть години попаде
// це число(в першу, другу, третю чи четверту) та виведіть це повідомлення у консоль, наприклад, "Number [number] refers to 2 quarters".
// 0 - 15 1ша чверть
// 16 - 30 2га чверть
// 31 - 45 3тя чверть
// 46 - 59 4та чверть

// let number;

// number = prompt("Hello, enter please the number between  0 and 59");
// if (number < 0 || number > 59) {
//   alert(`The ${number} is outside 0 and 59`);
// } else {
//   if (number > 0 && number < 15) {
//     alert(`Number ${number} refers to 1 quarters`);
//   } else if (number > 16 && number < 30) {
//     alert(`Number ${number} refers to 2 quarters`);
//   } else if (number > 31 && number < 45) {
//     alert(`Number ${number} refers to 3 quarters`);
//   } else {
//     alert(`Number ${number} refers to 4 quarters`);
//   }
// }

// if (number < 0 && number > 59) {
//   alert(`The ${number} is outside 0 and 59`);
// } else {
//   alert(`Number ${number} refers to ${Math.ceil(number / 15 || 1)} quarters`);
// }

// 10. Напишіть функцію, яка приймає два параметри довжину і елемент-заповнювач та повертає масив з вказаною довжиною і заповнює його переданим елементом
// наприклад, виклик функції fillArray(3, 'a') має повернути масив ['a', 'a', 'a']

// function fillArray(length, value) {
//   const array = [];
//   for (let index = 0; index < length; index++) {
//     array.push(value);
//   }
//   return array;
// }
// console.log(fillArray(5, "Ukraine"));

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
// 12. Напишіть функцію getUserNames , яка приймає як параметр масив об'єктів
// та поверне масив усіх імен користувачів

// function getUserNames(array) {
//   return array.map((user) => user.name);
// }
// console.log(getUserNames(users));

// 13. Напишіть функцію getUsersWithEyeColor, яка приймає як параметр масив об'єктів і рядок з кольором очей
// та поверне масив усіх користувачів з таким кольором очей

// function getUsersWithEyeColor(array, eyeColor) {
//   return array.filter((user) => user.eyeColor === eyeColor);
// }
// console.log(getUsersWithEyeColor(users, "brown"));

// 14. Напишіть функцію getUserWithEmail, яка приймає як параметр масив об'єктів і рядок з електронною поштою
// та поверне об'єкт користувача з такою поштою

// function getUserWithEmail(array, email) {
//   return array.find((user) => user.email === email);
// }
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

// colorPickerOptions.find(option => option.label === "blue")

// 15. Напишіть функцію getUsersWithAge, яка приймає як параметр масив об'єктів і два числа (від і до)
// та поверне масив імен користувачів, у яких вік між мінімальним і максимальним значеннями включно

// function getUsersWithAge(array, min, max) {
//   return array.filter((user) => user.age >= min && user.age <= max);
// }
// console.log(getUsersWithAge(users, 35, 39));

// 16. Напишіть функцію getTotalBalance, яка приймає як параметр масив об'єктів і повертає загальну суму балансів усіх користувачів

// function getTotalBalance(array) {
//   return array.reduce((acc, user) => {
//     acc += user.balance;
//     return acc;
//   }, 0);
// }
// console.log(getTotalBalance(users));

// 17. Напишіть функцію getUsersWithFriend, яка приймає як параметр масив об'єктів і повертає загальну суму балансів усіх користувачів

// function getUsersWithFriend(array, friend) {
//   return array.filter((user) => user.friends.includes(friend));
// }
// console.log(getUsersWithFriend(users, "Sharron Pace"));

// function getUsersWithFriend(array, friend) {
//   return array.reduce((acc, user) => {
//     if (user.friends.includes(friend)) {
//       acc.push(user);
//     }
//     return acc;
//   }, []);
// }

// console.log(getUsersWithFriend(users, "Sharron Pace"));

// Change value of isSuccess variable to call resolve or reject
