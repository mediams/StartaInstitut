/* document.write('Test')
console.log('Hi, Guten Morgen!')
let a= 'Variablen'
console.log(a + ' Beide')

let a2=12
let b='test'
let c=true
console.log(typeof a2);
console.log(typeof b);
console.log(typeof c);

console.log(a2);
console.log(String(a2)); */


/* const num1=+prompt('Введите число 1:')
const num2=+prompt('Введите число 2:')
console.log(`Вы ввели число ${num1} и число ${num2} Давайте сравним это`);

if(num1>num2){
    console.log(`Число ${num1} больше чем ${num2}`);
}
else if (num1==num2){
    console.log(`Число ${num1} Равно ${num2}`);
}
else {
    console.log(`Число ${num2} больше чем ${num1}`);
} */

// -------------------------------------
/* const num =prompt()
console.log(`Вы ввели: ${num}`);
if (num%2===0 && num>0){
    console.log(`Это чётное число И оно положительное`);
} else if (num%2!==0 && num<0){
    console.log('Это  neчётное число и оно отрицательное');
} else if (num%2!==0 && num>0){
    console.log('Это  neчётное число И оно положительное');
} else if (num==0){
    console.log(`Это ноль`);
} else if (num%2===0 && num<0){
    console.log(`Это чётное число и оно отрицательное`);
}else{
    console.log(`Рекомендую ввести число!`);
} */
// ********************************************





// ---------------------------------------------------------
/* const arr=[12, -8, "lol", true]
console.log(typeof arr);
console.log(arr);
console.log(arr[3]);
arr[2]=9
console.log(arr);
arr[19]=161616
console.log(arr);

arr.push("new push") //Add Wert am Ende
console.log(arr);

arr.pop()   //Löschen Wert am Ende
console.log(arr);
arr.pop()
console.log(arr);
arr.pop()
console.log(arr);
arr.pop()
console.log(arr);
arr.pop()
console.log(arr);
arr.push("new push") //Add Wert am Ende
console.log(arr);

console.log(`Add Wert am Anfang`);
arr.unshift(777) //Add Wert am Anfang
console.log(arr);
console.log(`Löschen Wert am Anfang`);
arr.shift() //Löschen Wert am Anfang
console.log(arr); */
// ***************************************************************




// ----------------------------------------------
// создать программу, которая считывает три числа через prompt и добавляет их в массив.
/* const arr1=[]
const num1 =+prompt()
const num2 =+prompt()
const num3 =+prompt()

arr1.push(num1, num2, num3) //Add Wert am Ende
console.log(arr1); */
// *************************************************

/* Задание: Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.
Пример: 
Исходный массив [1, 4, 2, 5, 3]
Итоговый массив [1, 16, 4, 125 9] */


/* const arr=[1, 4, 2, 5, 3]
const arr2=[]
console.log(arr);
arr[0]=arr[0]**2
arr[1]=arr[1]**2
arr[2]=arr[2]**2
arr[3]=arr[3]**2
arr[4]=arr[4]**2

console.log(arr);

arr2.push(arr[0]**2, arr[1]**2, arr[2]**2, arr[3]**2, arr[4]**2)
console.log(arr2); */

// ----------------------------------------
// const arr=[1, 4, 2, 5, 3]
// console.log(`Schleifen`);

// // arr=[11, 40, 2, 5, 3]
// arr3=[11, 40, 2, 5, 3]
// console.log(`Числа в массиве ${arr3}`);

// for(let i=0; i<arr3.length; i=i+2){
//     arr3[i]=arr3[i]**2
// }
// console.log(`Числа в массиве после возведения в корень ${arr3}`);
// console.log(arr3);
// ************************************************

// ------------------------------------------
/* let arr=[1, 4, 2, 5, 3]
console.log(arr);
arr=[11, 40, 2, 5, 3]
console.log(arr); */
// ***********************************************


// Создай функцию, которая принимает массив чисел и возвращает объект с максимальным и минимальным значениями.

let arr_1 = []
// arr_1 = [46, 654, 984, 123, -11, 56, 47]
let max;
let min;


for (i=0; i<=5; i++){
    // arr_1.push [i](+prompt(`Enter the numbers:${i+1}`));
    arr_1[i] = +prompt(`Enter the number ${i + 1}:`);
}
console.log(arr_1);

max=arr_1[0]
min=arr_1[0]

for(let i=0; i< arr_1.length; i++){
    if (arr_1[i]>max){
        max=arr_1[i]
    }
    else if(arr_1[i]<min){
        min=arr_1[i]
    }

}
console.log(min);
console.log(max);

