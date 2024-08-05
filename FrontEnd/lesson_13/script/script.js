const arr = [456, 65465, 89]

console.log(arr[1]);

arr.push('qqq')

console.log(arr);
let arr_i = [];

arr_i = [45,16,88,53,4];

let max =0
for(let i=0; i<=arr_i.length; i++){
    if (max<arr_i[i]){
        max=arr_i[i]
    }
}console.log(max);

for(let i=0; i<=10; i+=2){
    arr_i.push(i)
       
}console.log(arr_i); 

arr_i = [];
for(let i=10; i>=0; i-=2){
    arr_i.push(i)      
}
console.log(arr_i);  

// let a = 0;
// console.log(a++);
// console.log(a++);
// console.log(a--);
// console.log(a--);

// Задача: Написать цикл, который выводит только положительные числа из массива

arr_i = [];
let arr_1 = [46, 654, 984, 123, -11, 56, 47]
console.log(arr_i);
for (let i=0; i<arr_1.length; i++){
    if(arr_1[i]>0){
        console.log('только положительные числа из массива: '+arr_1[i]);
        
    }
}


// Задача: Написать цикл, который выводит только четные числа

arr_1 = [];
arr_1 = [46, 654, 984, 123, -11, 56, 47]
console.log(arr_1);
for(let i=0; i<arr_1.length; i++){
    if (arr_1[i] % 2 === 0){
        console.log('только четные числа: ' +arr_1[i]);        
    }
}

// Задача: Вывести только те значения массива, индекс которых кратен трем

arr_1 = [];
arr_1 = [46, 654, 984, 123, -11, 56, 47]
console.log(arr_1);
for(let i =0; i<arr_1.length; i++){
    if (i%3===0){
        console.log('значения массива, индекс которых кратен трем: '+ i + ' ' + arr_1[i]);
        
    }
}

// Задача: Вывести значения массива справа налево с шагом два
arr_1 = [];
arr_1 = [46, 654, 984, 123, -11, 56, 47]

console.log("Исходный массив:", arr_1);
console.log("Значения массива справа налево с шагом два:");
for (let i = arr_1.length - 1; i >= 0; i -= 2) {
    console.log(arr_1[i]);
}

// arr_1 = [];
// arr_1 = [46, 654, 984, 123, -11, 56, 47]
// for(i=arr_1.length-1; i>=0; i--){
//     console.log(arr_1[i]);
    
// }

// Найти сумму положительных чисел.

arr_1 = [];
arr_1 = [46, 654, 984, 123, -11, 56, 47]
let sum =0;
for(let i=0; i<arr_1.length; i++){
    if(arr_1[i]>0){
        sum+=arr_1[i]
    }
}console.log(sum);


// Erstell neu array

arr_1 = [];
arr_1 = [46, 654, 984, 123, -11, 56, 47]
arr_new =[]
for(let i=0; i<arr_1.length; i++){
    if (arr_1[i]>0){
        arr_new.push(arr_1[i]);
    }
}console.log(arr_new);


// Создай функцию, которая принимает массив чисел и возвращает объект с максимальным и минимальным значениями.

arr_1 = []
arr_1 = [46, 654, 984, 123, -11, 56, 47]


for (i=0; i<=5; i++){
    // arr_1.push [i](+prompt(`Enter the numbers:${i+1}`));
    // arr_1[i] = +prompt(`Enter the number ${i + 1}:`);
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
console.log('минимальным значениями.: '+min);
console.log('максимальным значениями.: '+max);


// Задача: Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
arr_1 = []
arr_1 = [46, 654, 984, 123, -11, 56, 47,1111]

let evenSum =0;
let oddSum =0;

for(let i=0; i<arr_1.length;i++){
    if (arr_1[i]%2===0){
        evenSum+=arr_1[i];
    }
    else {
        oddSum+=arr_1[i];
    }
    
}

console.log('сумму четных чисел из массива: ' +evenSum);
console.log('сумму нечетных чисел из массива: ' +oddSum);
if(evenSum>oddSum){
    console.log('Вычесть из большего меньшее.: '+ (evenSum-oddSum));    
}else console.log('Вычесть из большего меньшее.: '+(oddSum-evenSum));   


//object

let person = ['ivan', 34, 'm', 180, 90]
console.log(person);

let person_2 = {
    userName: 'ivan',
    age: 34,
    gender: 'm',
    height: 180,
    weight: 90
}
console.log(person_2);
console.log(person_2.age);
console.log(person_2['gender']);

person_2.age=11
console.log(person_2);

person_2.lastName='Ivanov'
console.log(person_2);

person_2.lastName=['Ivanov', 'Serega']

console.log(person_2);

const products = [
    {
        productName: 'Milch',
        price: 12
    },
    {
        productName: 'Bred',
        price: 2
    },
    {
        productName: 'Eis',
        price: 3
    }
]
console.log(products);

console.log(products[0].productName); // Доступ к свойству первого объекта
console.log(products[1].price); // Доступ к свойству второго объекта

products[2].price = 5; // Изменение значения свойства третьего объекта
console.log(products[2]);

// -------------------

function addProduct(products, productName, price) {
    products.push({ productName, price });
}

addProduct(products, 'Cheese', 4);
console.log(products);



// products.push(products)(+prompt('Enter product Name: '+({productName})))
// products.push({ productName: newProductName, price: newProductPrice });
// products.push('Enter product Name: '+(price))
// Запрашиваем у пользователя информацию о новом продукте
// const newProductName = prompt("Enter the product name:");
const newProductPrice = parseFloat(+prompt("Enter the product price:"));

// Добавляем новый продукт в массив
products.push({ productName: prompt("Enter the product name:"), price: newProductPrice });

console.log("Updated products:", products);

// --------------------------------
console.log(products[2].price);
console.log(products);

// console.log((products[0].productName, +' '+ products[0].price));               // ERROR
// Выводим имя и цену первого продукта
console.log(products[0].productName + ' ' + products[0].price);

sum=0
for(let i=0; i<products.length; i++){
    console.log((products[i]).productName + ' ' + products[i].price);
    sum +=products[i].price;    
}
console.log(sum);

for(let i=0; i<products.length; i++){
    if(products[i].price>15){
        console.log('название товаров, которые дороже 15: '+products[i].productName);        
    }
}

