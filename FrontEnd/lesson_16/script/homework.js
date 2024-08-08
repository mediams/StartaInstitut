// function arr_sort(a1,b1) {
//     let arr_1 =[];
//     if(a1<b1){
//         for(let i=a1; i <=b1; i++){
//             arr_1.push(i);
//         }
//     }
//     else if(a1>b1){
//         for(let i=b1; i <=a1; i++){
//             arr_1.push(i);
//         }
//     }
//     else console.log('Error');
    
//     return arr_1;
// }
// let a1= 1;  /* +prompt('Enter a number 1: ') */
// let b1= 11; /* +prompt('Enter a number 2: ') */
// let result = arr_sort(a1,b1);
// console.log(result);


// Задание 1
// Описание: Напишите функцию, которая принимает два числа и возвращает их произведение.

// function multi(a,b) {
//     return a*b;    
// }
// // let result = multi(5,5)
// // let result = multi(+prompt('Enter a number: '), +prompt('Enter a number: '))
// console.log(result);

// ****************************************************************************************************************
// ****************************************************************************************************************

// Задание 2
// Описание: Напишите функцию, которая принимает массив чисел и возвращает их сумму.
// function arr_from_user() {
//     let arr_numbers=[]
//     for (let i = 0; i  < 5; i++) {
//         let k=+prompt()
//         if (isNaN(k)) {
//             console.log('Error!');
//             i--;            
//         }else
//         arr_numbers.push(k);
//         }
//         return arr_numbers
// }
// function sum(arr_1) {
//     let sum_2=0
//     arr_1.forEach(element => sum_2+=element);
//     return sum_2;
// }
// // let arr_1 =[1,2,3,4,5,6,7,8,10];
// // let result=sum([1,2,3,4,5,6,7,8,1])
// let numbers = arr_from_user()
// let result=sum(numbers)
// console.log("Массив чисел:", numbers, "Сумма чисел:", result);

// ****************************************************************************************************************
// ****************************************************************************************************************

// Задание 3
// Описание: Напишите функцию, которая принимает строку и возвращает её длину.

// function stringthLength(a) {
//     let count=0
//     for (let i  = 0; i < a.length; i++)  count++;    
//     return count; 
// }
// // result = stringthLength('Test')
// let word = prompt('Enter the word: ');
// let result = stringthLength(word)
// console.log(word, result);

// ****************************************************************************************************************
// ****************************************************************************************************************

// Задание 4
// Описание: Напишите функцию, которая принимает два числа и возвращает true, если первое число больше второго, и false в ином случае.

// function vergleichen(a,b) {
// /*         if(a>b)  return true
//         else return false */
//         return a>b
// }
// // let result =vergleichen(4,4)
// let result = vergleichen(+prompt(), +prompt())
// console.log(result);

// ****************************************************************************************************************
// ****************************************************************************************************************

// Задание 5
// Описание: Напишите функцию, которая принимает массив чисел и возвращает объект с минимальным, максимальным и средним значениями массива.

// function user_arr() {
//     let start_arr =[]
//     for (let i = 0; i < 5; i++) start_arr.push(+prompt())
//     return start_arr
// }

// function sort(arr_2) {
//     let max = -Infinity
//     let min = Infinity
//     let avg = 0
//     let sum = 0
//     arr_2.forEach(element => {
//         if (max < element) max = element;
//         if (min > element) min = element;

//         sum+=element
//     });
//     avg = sum/arr_2.length

//     return {
//         maxNumber: max,
//         minNumber: min,
//         count: arr_2.length,
//         avg: avg,
//         sum: sum
//     }
// }

// // let arr_2 = [-7,2,3,4,5,6]
// let arr_2 = user_arr()
// let result = sort (arr_2)
// console.log(result);

// ****************************************************************************************************************
// ****************************************************************************************************************

// function getArrayStats(arr) {
//     let sum = arr.reduce((acc, num) => acc + num, 0);
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     let avg = sum / arr.length;
    
//     return { min, max, avg };
// }

// // Пример вызова функции
// let result5 = getArrayStats([1, 2, 3, 4, 5]);
// console.log(result5); // { min: 1, max: 5, avg: 3 }


// arr = [1, 2, 3, 4];
// sum = 0;
// arr.forEach(element => {
//     sum += element;
// });
// console.log(sum); // 10


// arr = [1, 2, 3, 4];
// sum = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 10

// ****************************************************************************************************************
// ****************************************************************************************************************

// Задание 6
// Описание: Напишите функцию, которая принимает строку и возвращает её в верхнем регистре.

// function toUpperCase(str) {
//     return str.toUpperCase();
// }

// // Пример вызова функции
// let result6 = toUpperCase("hello");
// console.log(result6); // "HELLO"

// ****************************************************************************************************************
// ****************************************************************************************************************

// Задание 7
// Описание: Напишите функцию, которая принимает массив чисел и возвращает новый массив только с четными числами.

// function sort_arr(arr_2) {
//     const new_arr = []
//     arr_2.forEach(element => {
//         if(element % 2 === 0) new_arr.push(element)
//     });
//     return new_arr;
// }
// let arr_2 = [-7,2,3,4,5,6]
// console.log(sort_arr(arr_2));

// ****************************************************************************************************************
// ****************************************************************************************************************

// Задание 8
// Описание: Напишите функцию, которая принимает массив строк и возвращает новый массив с длинами этих строк.

// function my_arr(arr_1)  {
//     const new_arr =[];
//     arr_1.forEach(element => {
//         new_arr.push(element.length) 
//     }); 
//     return new_arr
// }
// const arr_1 = ['Ass','bass', 'Krass']
// const result = my_arr(arr_1)
// console.log(result);

// Задание 9
// Описание: Напишите функцию, которая принимает массив чисел и возвращает массив чисел от минимального до максимального значения, входящего в массив.

// function my_arr(arr_1) {
//     let new_arr =[];
//     let min = Math.min(...arr_1);
//     let max = Math.max(...arr_1);


//     for (let i = min; i <= max; i++) {
//         new_arr.push(i)
//     }
//     return new_arr
// }
// let result = my_arr([4,5,6,7,5,2,1])
// console.log(result);

// ****************************************************************************************************************
// ****************************************************************************************************************

// Задание 10
// Описание: Напишите функцию, которая принимает объект с именем и возрастом и возвращает строку с приветствием.

// function names(name, age) {
//     console.log('Hello, ' + name,"you'r " + age);
    
// }
// names (prompt('Your name: '), +prompt('Age: '))

