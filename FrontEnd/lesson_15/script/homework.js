// Написать функцию, которая принимает два числа и возвращает их произведение:

// function multi(a,b){
//     // Проверяем, что введены корректные числа
// if (isNaN(a) || isNaN(b)) {
//     return 'Пожалуйста, введите корректные числа.';
// } else {
//     // Выводим результат умножения
//     return a*b;
// }    
// }
// let a = +prompt('принимает два числа и возвращает их произведение: a=')
// let b = +prompt('принимает два числа и возвращает их произведение: b=')
// console.log(multi(a,b));

// Написать функцию, которая принимает массив чисел и возвращает их сумму:

// function numbers(arr_1){
//     let sum = 0; // Инициализируем sum внутри функции
//     arr_1.forEach(element => {
//         sum+=element;
//     });
//     console.log('Ich war hier!');
//     return sum;
    
    
// }
// let arr_1 =[1,2,3,4,5,6]
// // let sumResult = numbers(arr_1)
// // console.log(sumResult);
// console.log(numbers(arr_1));


// Создать функцию, которая принимает строку и возвращает её длину:
// function string_length(a) {
//     if (isNaN(a) || a === null) return a.length
    
//     return 'Enter the string!'
// }
// let a= prompt('Создать функцию, которая принимает строку и возвращает её длину:\ a=')
// console.log(string_length(a));

// Написать функцию, которая принимает два числа и возвращает true, если первое число больше второго, и false в ином случае:

function max(a,b) {
    if (a>b) {
        console.log('a mehr als b');
        
    } else  {
        console.log('b mehr als a');
    }
}
let a = +prompt ()
let b = +prompt ()
max(a,b);



function isGreater(a, b) {
    return a > b;
}
a = +prompt ()
b = +prompt ()
let result =isGreater(a, b)  
console.log(result );

