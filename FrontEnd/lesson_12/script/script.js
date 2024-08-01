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


const num =prompt()
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
}


