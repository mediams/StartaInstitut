// console.log('Test');

// function test_1(a) {
//     return a**2
// }

// // function exspression
// let func2

// func2=function name_2(a) {
//     return a**2
// }


// --------------------------------------------------------
// let btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'blue'
// })

// // --------------------------

// let funcClick = function () {
//     document.body.style.backgroundColor = 'red'
// }

// btn.addEventListener('click', funcClick)

// // --------------------------

// btn.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'gray'
// })
// ***********************************************************************
// ***********************************************************************

// let sum = function (a,b){
//     return a+b
// }

// function _name3(num_1, num_2, num_3, x ){ 
//     let result = num_1 * x(num_2, num_3) // 2 Step Внутри функции _name3: Вызывается функция sum с аргументами num_2 и num_3: sum(23, 56). Функция sum возвращает 23 + 56 = 79. result = num_1 * 79 = 34 * 79 = 2686.
//     return result
// }

// let res=_name3(34, 23, 56, sum) // 1 Step Вызов функции _name3: num_1 = 34 num_2 = 23 num_3 = 56 x = sum
// console.log(res);


// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.

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

// // ---------------------------------------------------
// function arr_sort(a1,b1) {
//     let arr_1 =[]
//     if(a1<b1){
//         arr_1.forEach(element_sort => {
//             arr_1.push(i)
//         });
//     }
//     if(a1>b1){
//         for(let i=b1; i <=a1; i++){
//             arr_1.push(i)
//         }
//     }
//     return arr_1
// }
// a1=11
// b1=6
// result = arr_sort(a1,b1)
// console.log(result);



// ------------------------------------------------------------
// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.
// const list = [65, 98, 34, 54, 3, 2, 8, 67]

// sum = 0
// const list = [65, 98, 34, 54, 3, 2, 8, 67]
// list.forEach(element => {    
//     sum+=element    
// });
// console.log(sum);
// ----------------------------------------------------------------------------------------------------------------------------------

// В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.
// sum = 0
// const list_2 = [-65, 98, -34, 54, -3, 2, -8, 67]
//     list_2.forEach(element => {
//         if (element>0) {
//             sum+=element
//         }
//     });
// console.log(sum);
// ----------------------------------------------------------------------------------------------------------------------------------

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте 'разность суммы`' всех 'четных чисел' и суммы всех нечетны

// const list = [65, 98, 34, 54, 3, 2, 8, 67]
// let sum_even =0
// let sum_odd =0
// res =0
// list.forEach(element => {
//     if (element%2===0){ //<------------------------------- ne dobavil  ===0
//         sum_even+=element;
//     } else {
//         sum_odd+=element
//     }
// });
// res = sum_even -sum_odd
// console.log(list ,sum_even, sum_odd, res);
// ----------------------------------------------------------------------------------------------------------------------------------

// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает 'объект' со свойствами min, max, avg с соответствующими значениями по массиву. sum na kol

const list = [65, 98, 34, 54, 3, 2, 8, 67, -1]
let max=0
let min =Infinity;
let sum =0
result=0
function sort(list) {   
    list.forEach(element => {
        sum+=element
        if (max<element){
            max=element
        } else if(min>element){
            min=element
        }
    });
    const avg = sum / list.length;
    const count = list.length;

    return {
        min: min,
        max: max,
        avg: avg,
        sum: sum,
        count: count
    };
}
// sort(list)
// console.log(max, min);
console.log('Ваш массив: ' + list);

result = sort(list);
console.log(result);

console.log(`Минимальное значение в массиве: ${result.min}`);
console.log(`Максимальное значение в массиве: ${result.max}`);
console.log(`Среднее арифметическое чисел в массиве: ${result.avg}`);
console.log(`Сумма чисел в массиве: ${result.sum}`);
console.log(`Количество чисел массиве: ${result.count}`);
// ----------------------------------------------------------------------------------------------------------------------------------
// ***********************************************************************
// ***********************************************************************
  

