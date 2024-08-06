// let obj ={
//     user: 'Ivan',
//     lastName: prompt('lastName: '),
//     age: 25,
//     user: 'Ivan',
// }

// obj.height = 180

// console.log(typeof obj);
// console.log(obj);


const products = [
    {
        id: 1,
        type: 'sport',
        title: "Велосипед",
        price: 45000,
        discount: 35
    },
    {
        id: 2,
        type: 'sport',
        title: "Лыжи",
        price: 25000,
        discount: 15
    },
    {
        id: 3,
        type: 'sport',
        title: "Ролики",
        price: 17000,
        discount: 10
    },
    {
        id: 4,
        type: 'product',
        title: "Масло",
        price: 1500,
        discount: 50
    },
    {
        id: 5,
        type: 'product',
        title: "Coffe",
        price: 3500,
        discount: 40
    },
    {
        id: 6,
        type: 'product',
        title: "cola",
        price: 2000,
        discount: 30
    },
];
let summ =0
let price_discount =0
let price_discount2 =0
for(i=0; i<products.length; i++){
    // if(products[i].type=='sport'){
    //     summ+=products[i].price
    // }
   
    price_discount=products[i].price- (products[i].discount /100* products[i].price)
    console.log(`Товары со скидкой: ${products[i].title}: ${products[i].type} - ${price_discount}`);
    
    // console.log(`товар: ${products[i].title}; цена ${products[i].price}`);
    // if(products[i].price>15000){
    //     console.log(`1-название товаров, которые дороже 15000: ${products[i].title} цена: ${products[i].price}`);  

    // }
//     if(products[i].type=='sport'){
//         console.log(`Sport - ${products[i].title} цена: ${products[i].price}`); 
// }
}

products.forEach(discount_product=>{
    price_discount=discount_product.price- (discount_product.discount /100* discount_product.price)
    console.log(`2::Товары со скидкой: ${discount_product.title}: ${discount_product.type} - ${price_discount}`);

})
console.log(summ);

for(i=0; i<products.length; i++){
    let{price, discount}=products[i]   
    price_discount=price- (discount /100* price)
    console.log(`3::Товары со скидкой: ${products[i].title}: ${products[i].type} - ${price_discount}`);

}

// создайте новый пустой массив. Пройдитесь циклом по массиву с продуктами и в новый массив добавьте те продукты, которые дешевле определенной суммы.
let arr_new =[]
for(i=0; i<products.length; i++){
    let {title, price}=products[i]
    if(price<15000){
        arr_new.push(title)
    }
}
console.log(`продукты, которые дешевле определенной суммы: ${arr_new}`);

arr_new =[]
products.forEach(weniger_products=>{
    if(weniger_products.price<15000){
        arr_new.push(weniger_products.title)
    }
})
console.log(`2::продукты, которые дешевле определенной суммы: ${arr_new}`);


summ =0
products.forEach(product_summ=>{
    if(product_summ.type=='sport'){
        summ+=product_summ.price
    }
    
})
console.log(summ);

products.forEach(sport_product=>{
    if(sport_product.type=='sport'){
        console.log(`2-Sport - ${sport_product.title} цена: ${sport_product.price}`);
        
    }
})
// for(let i in products){
//     console.log(`Tovar: ${products[i].title} Cena: ${products[i].price} `);
    
// }
products.forEach(product => {
    console.log(`товар: ${product.title}; цена: ${product.price}`);
});

// вывести название товаров, которые дороже 15000
products.forEach(new2=>{
    if(new2.price > 15000){
        console.log(`название товаров, которые дороже 15000: ${new2.title}`);        
    }
});

products.forEach(product => {
    if (product.price > 15000) {
        console.log(`название товаров, которые дороже 15000: ${product.title} цена: ${product.price}`);
    }
});
// ----------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});


// -------------------------------------------------------------

const fruits = ['apple', 'banana', 'mango'];

fruits.forEach((fruitA, index) => {
    console.log(`Index: ${index}, FruitA: ${fruitA}`);
});



// --------------------------------------------------
const prices = [100, 200, 300];
const discountedPrices = [];

prices.forEach((price) => {
    discountedPrices.push(price * 0.9);  // Скидка 10%
});

console.log(discountedPrices);  // [90, 180, 270]


// let arr_1 =[1,2,3]

// let a = arr_1[0]
// let b = arr_1[1]
// let c = arr_1[2]

// let [a1,b1,c1]=arr_1

// console.log(c1,b1,a1);


// let obj_2={
//     name2: 'Ivan',
//     age: 23,
//     gender: 'm'
// }
// console.log(obj_2.name);
// let name1 = obj_2.name;
// console.log(name1);
// let age1=obj_2.age;
// let gender1=obj_2.gender;
// console.log(age1, gender1);

// let {age, name2, gender} =obj_2
// console.log(gender, name2, age, );




// function

// function say_hello(){
//     console.log(prompt());
//     console.log(prompt()*prompt());
    
// }

// say_hello()

// Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.

function odd_even(){
    if(prompt('odd-even')%2 === 0){
        console.log(`Этот чётное число`);
        
    } else console.log(`Этот neчётное число`);    
}
odd_even()



function func(a) {
    console.log('Erste function: '+ a ** 3);
}
// func()
func(prompt())


function func_1(a, b) {
    console.log('Zweite function: '+ a+ '**'+ b+' = '+a ** b);
}
func_1(prompt(), prompt())