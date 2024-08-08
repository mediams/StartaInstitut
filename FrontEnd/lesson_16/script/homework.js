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

