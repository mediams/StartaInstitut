// Задание: Создайте объект person с полями name, age, и city. Затем добавьте новое поле country со значением 'Germany'. Выведите изменённый объект в консоль.

person={
    name: 'Ivan',
    age: 0,
    city: 'München'
}
person.country = 'Germany';
console.log(person);

let arr_new = new Array (5);
console.log(arr_new);


let arr_new_2 = [
    {name: '', age: 0, city: ''},
    {name: '', age: 0, city: ''},
]
console.log(arr_new_2);

arr_new_2[0].name='Ivan-2';
arr_new_2[0].age=23;
arr_new_2[0].city='Augsburg'

console.log(arr_new_2);

arr_new[0]=123;
arr_new[1]='Test';
arr_new[3]=777

console.log(arr_new);


arr_new_2[1].name='Vano';
arr_new_2[1].age=12;
arr_new_2[1].city='Donetsk'

console.log(arr_new_2);


// Задание: Создайте массив books, где каждый элемент — это объект с полями title, author, и price. Отфильтруйте книги, у которых цена больше 1000, и выведите отфильтрованный массив в консоль.
let books = [
    {title: 'Kider', author: 'Lisa', price: 150 },
    {title: 'Germass', author: 'Borya', price: 1150 },
    {title: 'Kotleta', author: 'Poser', price: 900 },
    {title: 'Zeras', author: 'Pol', price: 1220 },
    {title: 'Loloshka', author: 'Petr', price: 90 }
]
let arr_filter = []
books.forEach(filter=>{
    if (filter.price>1000){
        arr_filter.push(`${filter.title} - ${filter.price}`)
        // console.log('forEach' + filter.title + filter.price);     
    }
})
console.log('forEach: '+arr_filter);

arr_filter = []

for(i=0; i<books.length; i++){
    let {title, author, price} =books[i];
    if(price>1000){
        arr_filter.push(`${title} - ${price}`)
    }
}
console.log('деструктуризацией: '+arr_filter);

// Задание: Используйте массив products. Подсчитайте и выведите общую сумму цен товаров, у которых скидка больше 20%.
const products = [
    { id: 1, type: 'sport', title: "Велосипед", price: 45000, discount: 35 },
    { id: 2, type: 'sport', title: "Лыжи", price: 25000, discount: 15 },
    { id: 3, type: 'sport', title: "Ролики", price: 17000, discount: 10 },
    { id: 4, type: 'product', title: "Масло", price: 1500, discount: 50 },
    { id: 5, type: 'product', title: "Coffe", price: 3500, discount: 40 },
    { id: 6, type: 'product', title: "cola", price: 2000, discount: 30 },
];
let summ =0;
price_discount =0;
products.forEach(sort_products=>{
    if(sort_products.discount>20){
        price_discount=sort_products.price- (sort_products.discount /100* sort_products.price)
        summ+=price_discount
    }
})
console.log(summ);

// Использование деструктуризации для вывода информации о продукте:
// Задание: Используйте массив products. Для каждого продукта выведите его название, цену и скидку, используя деструктуризацию.
for(i=0; i<products.length; i++){
    let {title, price, discount}=products[i];
    console.log('' + title, price, discount);    
}

products.forEach(ausgeben=>{
    console.log('2:: ' + ausgeben.title, ausgeben.price, ausgeben.discount); 
})

// Задание: Создайте функцию printSquare, которая принимает число, вводимое через prompt, и выводит его квадрат в консоль.

function printSquare(a){
    console.log(a**2);
    
}
printSquare (+prompt('Введите число: '))

// Задание: Используйте массив products. Создайте новый массив, содержащий только те продукты, которые являются типа 'product' и стоят меньше 3000. Выведите этот массив в консоль.
arr_filter = []
products.forEach(ausgeben=>{
    if(ausgeben.type==='product'&&ausgeben.price<3000){
        arr_filter.push(ausgeben)
    }
})
console.log(arr_filter);

let filteredProducts = products.filter(product => product.type === 'product' && product.price < 3000);
console.log(filteredProducts);

// Задание: Создайте новый массив moreProducts с несколькими дополнительными продуктами. Объедините его с массивом products, затем отсортируйте объединённый массив по цене и выведите его в консоль.
const moreProducts = [
    { id: 7, type: 'sport', title: "Велосипед", price: 45000, discount: 35 },
    { id: 8, type: 'product', title: "Лыжи Sport", price: 21500, discount: 17 }
];

// Объединение двух массивов
let allProducts = products.concat(moreProducts);

// Сортировка объединенного массива по цене
allProducts.sort((a, b) => a.price - b.price);

// Фильтрация по типу
allProducts = allProducts.filter(product_new => product_new.type==='product');

console.log(allProducts);


// Функция для нахождения максимального элемента в массиве:
// Задание: Создайте функцию findMax, которая принимает массив чисел и возвращает максимальное число в этом массиве. Выведите результат в консоль.

arr_new=[]
let max =0;
function findMax_1(){
    arr_new=[1,2,6,7,4,6,3];
    for(i=0;i<arr_new.length;i++){
        if(max<arr_new[i]){
            max=arr_new[i]
        }
    }
    console.log(max);
    
}
// findMax_1()

function findMax_2(){
    arr_new =[];
    for(i=0; i<5; i++){
        arr_new.push(+prompt('Введите числа которые вы хотите сравнить'));
        
    }

    if (arr_new.length === 0) {
        return null; // Возвращаем null, если массив пуст
    }

    max=arr_new[0]
    arr_new.forEach(sort=>{
        if(max<sort){
            max=sort
        }
    })
    console.log(arr_new, max);
    
    return max;
    
}
// console.log(findMax_2([1, 3, 11, 7, 2, 9]));
// findMax_2()




// Функция, проверяющая, является ли число простым:
// Задание: Создайте функцию isPrime, которая принимает число и возвращает true, если число простое, и false в противном случае. Выведите результат проверки числа, вводимого через prompt, в консоль.

function isPrime(number){
    console.log(number);    
    if(number%2===0) return true;
    if(number%2===0) return false
    
}
let number=isPrime(+prompt('Функция, проверяющая, Делится ли число на два без остатка \nВведите число:'))
console.log('... '+number);