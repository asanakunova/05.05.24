//! 05.05.24
//? задание 1
// Создайте функцию checkTask(arr), которая принимает в аргументы
// массив состоящий из строк и выводит в консоль новый массив
// состояший только из первых и последних букв каждой строки.
// Например, для массива:
// ['hi', 'goodbye', 'smile']
// Вывод будет:
// ['hi', 'ge', 'se']

// let checkTask = (arr) => {
//   return arr.map((str) => str[0] + str[str.length - 1]);
// };
// console.log(checkTask(["hi", "goodbye", "smile"]));

//? задание 2
// Дан массив let lengthName = [`Patricia` , William , Barbara , James , Chloe , Elizabeth ];
// Преобразуйте каждый элемент в его длину и выведите в console. Используйте метод map().
// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// let lengthName = [
//   "Patricia",
//   "William",
//   "Barbara",
//   "James",
//   "Chloe",
//   "Elizabeth",
// ];

// function functionLimit(limit) {
//   let res = lengthName.map((el) => el.length * limit);
//   return res.join(" ");
// }

// console.log(functionLimit(50));

// let lengthName = [
//   "Patricia",
//   "William",
//   "Barbara",
//   "James",
//   "Chloe",
//   "Elizabeth",
// ];
// let res = lengthName.map((el) => el.length);
// console.log(res);

//? задание 3
// При помощи метода reduce, вывести средний возраст всех юзеров.

// let users = [
//   {
//     name: "Askat",
//     age: 21,
//   },
//   {
//     name: "Mirdin",
//     age: 20,
//   },
//   {
//     name: "Begimay",
//     age: 24,
//   },
//   {
//     name: "Mikhail",
//     age: 27,
//   },
//   {
//     name: "Almas",
//     age: 38,
//   },
// ];

// let sum = users.reduce((acc, el) => acc + el.age, 0);
// let res = sum / users.length;
// console.log(res);

//? задание 4
// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}

// ]
// задача: реализовать рассылку сообщений типа: 'Hello, [Здесь должно быть имя клиента],
// the grand sale has begun, prices are reduced by 20%!',
// игнорировать клиентов, которым нет 18-ти лет.

// let arr = [
//   { name: "Jack", age: 15 },
//   { name: "Helen", age: 34 },
//   { name: "Tom", age: 20 },
//   { name: "Bob", age: 54 },
//   { name: "Jessica", age: 13 },
// ];
// arr.forEach((el) => {
//   if (el.age >= 18) {
//     alert(
//       `Hello, ${el.name}, the grand sale has begun, prices are reduced by 20%!`
//     );
//   }
// });

//? задание 5
// Дан массив с объектами: [
//     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//     {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ]
// задача: на все автомобили, которые старше 2007 года, поставить
// скидку 20%(для скидки использовать свойство 'sale')

// let cars = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];

// cars.forEach((car) => {
//   if (car.year < 2007) {
//     car.sale = car.price * 0.2;
//   }
// });

// console.log(cars);

// for (const car of cars) {
//   if (car.year < 2008) {
//     car.sale = car.price * 0.2;
//   }
// }

// console.log(cars);

//? задание 6
// let person = [
//   {
//     name: "John",
//     price: 2000,
//     work: "IT-BACKEND",
//     salary: 20000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "BANK",
//     salary: 9000,
//   },
//   {
//     name: "Dastan",
//     price: 2000,
//     work: "IT-FRONTEND",
//     salary: 15000,
//   },
//   {
//     name: "John",
//     price: 2000,
//     work: "JOURNALIST",
//     salary: 10000,
//   },
// ];
// let res = person.filter((el) => {
//   if (el.work.includes("IT")) {
//     return el;
//   }
// });
// console.log(res);
