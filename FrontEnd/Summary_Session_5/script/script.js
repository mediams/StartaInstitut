// Задание : Написать программу, которая считывает два числа (объявляем две переменные (a b) и записываем туда результат работы двух вызовов prompt) и выводит их разницу, сумму и произведение.
// Вывод должен быть по шаблону: (“Разность чисел a и b равна sub, сумма чисел a и b равна sum, произведение чисел a и b равно mult”)

// let a = +prompt('Enter the number a: ');
// let b = +prompt('Enter the number a: ');

// console.log(`Разность чисел ${a} и ${b} равна ${a-b}, сумма чисел ${a} и ${b} равна ${a+b}, произведение чисел ${a} и ${b} равно ${a*b}`);

// Задачи на условные операторы и циклы: 
// 1. Объявить три числовых переменных и вывести наибольшее из них.

// const a = 6;
// const b = 9;
// const c = 11;

// if (a>b && a>c) console.log('A - max');
// else if (b>a && b>c) console.log('B - max');
// else console.log('C - max');

// 2. Вывести все числа от 1 до 10, которые без остатка делятся на 3.

// for (let i = 0; i <= 10; i++) {
//     if (i%3 === 0) console.log(i);    
// }

// 3. Вывести все четные числа от 1 до 100.

// for (let i = 0; i <= 100; i++) {
//     if (i%2 === 0) console.log(i);    
// }

// ------------------------------------------------------------------------------------------
// let userNames = ['John', 'Derek', 'Tom', 'Lily', 'Jenifer'];

// userNames.push('Helen');
// userNames.pop();
// userNames.unshift('Ann');
// userNames.shift();

// userNames[3] = 'Laura';

// console.log(userNames);

// // userNames.splice(start, deleteCount, [elem1, elem2, ...]);

// // Удалить два элемента начиная с третьего
// // Начиная с элемента с индекском 2 удалить два элемента
// userNames.splice(2, 2);
// console.log(userNames);

// // Добавить один элемент с индексом 1
// userNames.splice(1, 0, 'Ken');
// // userNames[2] = 'Laura-2';
// console.log(userNames);

// // Начиная с индекса 2 удалить один элемент и добавить два элемента
// userNames.splice(2, 1, 'Thomas', 'Bob');
// console.log(userNames);

// **************************************************************************************************************
// **************************************************************************************************************


// ------------------------------------------------------------------------------------------
// // Из массива Numbers вывести все нечетные числа
// // Из массива Numbers вывести положительные числа
// // Найти сумму четных элементов массива
// let numbers = [4, 2, 0, -1, 6, 0, 2, -56, 38, 103, -25, -6, 4];
// let sum =0;
// let odd_1 = [];
// let odd_2 = '';
// let positive = [];
// numbers.forEach(element => {    
//     if (element % 2 !== 0)  odd_2+= element + ', ' ;//odd.push(element) // console.log('odd numbers: '+ element);
//     if (element % 2 !== 0)  odd_1.push(element) ;// console.log('odd numbers: '+ element);
//     if (element > 0) positive.push(element) ;//console.log('positve numbers: '+ element); 
//     if (element %2 === 0) sum+=element;
// });
// console.log('все нечетные числа: '+ odd_1);
// console.log('все нечетные числа: '+ odd_2);
// console.log('положительные числа: '+ positive);
// console.log('сумму четных элементов массива: ' + sum);

// **************************************************************************************************************
// **************************************************************************************************************

// let user = {
//     firstName: "John",
//     "last Name": "Smith"
// }

// console.log(user["last Name"]);
// console.log(user.firstName);

// ------------------------------------------------------------------------------------------

// let user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 35,
//     address: {
//         country: 'Armenia', 
//         city: 'Yerevan',
//         street: 'Stepanyan'
//     },
//     friends: ['Tom', 'Taylor', 'Bob', 'Helen']
// };
// // Вывести всех друзей пользователя
// console.log(user.friends);
// // Вывести город пользователя
// console.log(user.address.city);
// // Вывести второго друга
// console.log(user.friends[1]);
// // Добавить в объект user свойство is_married - true
// user.is_married = true;
// console.log(user);
// // Добавить нового друга
// user.friends.push('Thomas');
// // Изменить имя на 'Jameson'
// user.firstName = 'Jameson';
// console.log(user);

// ------------------------------------------------------------------------------------------
// Написать цикл который выводит только название товаров
let arr = [
    {
        id: 1,
        title: "bicycle",
        price: 45000,
        discount: 10
    },
    {
        id: 2,
        title: "roller-skates",
        price: 15000,
        discount: 5
    },
    {
        id: 3,
        title: "Kick scooter",
        price: 10000,
        discount: 30
    },
    {
        id: 4,
        title: "skis",
        price: 25000,
        discount: 20
    },
    {
        id: 5,
        title: "skate",
        price: 10000,
        discount: 0
}
];

console.log(arr[0].title);
console.log(arr[1].title);

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
for (let i = 0; i< arr.length; i++) {
  console.log(arr[i].title, `(${arr[i].price})` );
}

arr.forEach(element => {
    console.log(`${element.id})`, element.title, `(${element.price})`);
    
});

let text = "";
function FuFu1(item, index) {


    text += index + ": " + item.title + "(" + item.price + ")\n";

}
arr.forEach(FuFu1);
console.log(text);

array.forEach(element => {


    
    
});


// ------------------------------------------------------------------------------------------
// console.log(greet);
// grPeet_a()
// // function declaration и function expression
// function greet_a() {
//     console.log("Hello-1!");
// };

// const greet = function() {
//     console.log("Hello-2!");
// };


// showMessage();
// // showMessage1();

// function showMessage() {
//     console.log('Hello');
// }

// let showMessage1 = function(){
//     console.log('Hello1');
// }
// showMessage();
// showMessage1();
// // ------------------------------------------------------------------------------------------
// let getMax = function(a, b) {
//     if(a>b){
//         return a;
//     }
//     return b;
// }
// console.log(getMax(6, 3));

