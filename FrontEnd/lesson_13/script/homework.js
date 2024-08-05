// Найти произведение всех элементов массива

let arr_1 = [45, 56, 12, 5, -7, 66]
let multi=1;
for(let i = 0; i<arr_1.length; i++){
    multi *= arr_1[i];
}
console.log(multi);


// Задача 2: Создать массив из квадратов элементов другого массива
arr_1 = [45, 56, 12, 5, -7, 66];
let arr_2 =[];

for(let i =0; i<arr_1.length; i++){
    arr_2.push(arr_1[i]**2);
}
console.log(arr_2);

// Задача 3: Найти количество положительных элементов в массиве

arr_1 = [45, 56, 12, 5, -7, 66];
let wert=1
for(let i=0; i<arr_1.length; i++){
    if(arr_1[i]>0){
        wert++;
    }
}
console.log('количество положительных элементов в массиве: ' + wert);

// Задача 4: Проверить, является ли массив палиндромом
arr_1 = [45, 56, 12, 5, -7, 66];
// arr_1 = [1, 5, 2, 8, 2, 5, 1];
check = false
for(let i =0; i<arr_1.length/2; i++){
    if (arr_1[i]!==arr_1[arr_1.length -1 -i]){
        // console.log(arr_1[i] + ' ' + arr_1[arr_1.length -1 -i] + ' False');
        check = false;        
    }else check = true;
    console.log(check);    
}


// Задача 5: Найти второй по величине элемент в массиве
arr_1 = [45, 56, 12, 5, -7, 66, 99, 99];
arr_2 = [];
max=-Infinity
second_max=-Infinity
for(i=0; i<arr_1.length; i++){
    if(max<arr_1[i]){
        second_max=max
        max=arr_1[i]
    }console.log(max);
}
console.log(max +' '+second_max);

// Задача 6: Перевернуть массив
arr_1 = [45, 56, 12, 5, -7, 66];
reverse_arr = [];

for(let i=arr_1.length-1; i>=0; i--){
   reverse_arr.push(arr_1[i])
}
console.log('arr:       . '+arr_1);

console.log('reverse_arr: '+reverse_arr);

// Найти минимальное значение в массиве:
arr_1 = [45, 56, 12, 5, -7, 66];
min=-0;

for(i=0; i<arr_1.length;i++){
    if (min>arr_1[i]){
        min=arr_1[i]
    }
}console.log('минимальное значение в массиве:: '+min);

// Отсортировать массив в порядке возрастания:
const arr = [45, 56, 12, 5, -7, 66];
arr.sort((a, b) => a - b);
console.log("Отсортированный массив:", arr);

arr_1 = [45, 56, 12, 5, -7, 66];
arr_1.sort((a, b) => b-a);
console.log("Отсортированный массив:", arr_1);

// Удалить все отрицательные числа из массива:
arr_1 = [45, 56, 12, 5, -7, 66];

arr_1 = arr_1.filter(num => num >= 0);
console.log(arr_1);

// Создать объект, представляющий книгу, и вывести информацию о книге:

let book = {
    Autor: 'Nina',
    Seiten: 104,
    Price: 5
}
console.log('информацию о книге: ', book);
console.log('Autor: ', book.Autor);

// Добавить новое свойство к объекту и изменить существующее:
book.lang = 'eng';
book.Seiten = 114;
console.log('информацию о книге: ', book);



let person = {
    name: 'Anna',
    age: 15,
    country: 'the USA'
}
person.name=prompt('Gib dein Name: ');

console.log(`Hallo ${person.name}, du bist ${person.age} jahre alt und du wohnst in ${person.country}`);



