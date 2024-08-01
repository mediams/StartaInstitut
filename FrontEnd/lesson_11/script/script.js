/* console.log('Hello Welt! Test')
console.log(5+5)
document.write(1+2) */


// alert('Hello!')


/* let a=12
let b=23
console.log(a+b)
a=2
const c=2
console.log('Die Summe von', a, 'plus', c, 'ist gleich', a+b,'.')
const w = 'Hi'
console.log(w)
console.log(`${a} mal ${c} ist gleich ${a * c}.`);
const user_Name = 'wo' */


// ----------------------------------
// const userName = prompt('Geben Sie Ihren Namen ein.')
// const userNachName = prompt('Gib deinen Nachnamen ein.')
// console.log(`Name: ${userName} Nachname: ${userNachName}`)

/* const num1 = Number (prompt())
const num2 = Number (prompt()) */

/* const num1 = +prompt()
const num2 = +prompt() */

// console.log(num1*num2, `${num1}*${num2}`)


/* console.log(typeof(w))
console.log(typeof(a)) */

// console.log(num1 + num2)

/* const str1='Hello '
const str2='Welt!'
console.log(str1+str2) */


// -------------------------------------------
/* const Name = prompt('Geben Sie Ihren Namen')
const age = prompt('Gib dein alt') */

// console.log('Hallo ' + Name + ',  du bist  ' + age + ' Jahre alt ')
/* console.log(`Hallo ${Name}, du bist ${age} Jahre alt.`)   */
// *******************************************************



// ---------------------------------------------------------Задача: есть переменные r, g, b с числовыми // значениями. Вывести в консоль строку “rgb(12, 34, 14)” 
// используя конкатенацию и интерполяцию
// Задача: есть переменные r, g, b с числовыми 
// значениями. Вывести в консоль строку “rgb(12, 34, 14)” 
// используя конкатенацию '+r+'  и интерполяцию ${r}

/* const r = 12
const g = 34
const b = 14
console.log('rgb(' + r + ', ' + g + ', ' + b + ')');
console.log('rgb('+r+', '+g+', '+b+')')
console.log(`rgb(${r}, ${g}, ${b})`) */

// ****************************************************


// ---------------------------------------------Написать программу, которая запрашивает у пользователя его возраст (в годах) и выводит, сколько ему лет.
/* const age = prompt('Gib dein alt')
const dateNow=new Date().getFullYear();
console.log(`Du bist ${age} Jahre alt.`)
document.write('<h1>Alle Informationen in der JS-Datei.</h1></br>')
console.log(`Sie sind ${dateNow-age} geboren.`)
document.write(`Du bist ${age} Jahre alt.</br>`)
document.write(`Sie sind ${dateNow-age} geboren.`) */

// ***********************************************


// ----------------------------------Задача: Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат
/* const num = prompt('Gib nummer')
console.log(`Das Quadrat von ${num} ist gleich ${num**2}`) */
// *************************************************************


// ---------------------------------------------KOren 
/* console.log(Math.sqrt(1000))
console.log(17%3) */
// ************************************************


// -----------------------------Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забудьте преобразовать полученные значения в число.
/* const num1 = +(prompt('Gib nummer 1'))
const num2 = Number (prompt('Gib nummer 2'))
console.log(`Die Summe ${num1} + ${num2} ist gleich ${num1+num2}.`) */
// ********************************************************



// ----------------------------------------------SRAVNENIE
/* console.log(4>5) //false
console.log(4<5) //true
console.log(4<=5) //true
console.log(4>=5) //false
console.log(4==5) //false
console.log(5===5) //true
console.log(5=='5') // ne strogoe sravnenie
console.log(5===`5`) // strogoe sravnenie
console.log(4!==5) //true
console.log(5!==5) //false */


/* console.log('a'==='A') // false
console.log('A'==='A') // true
console.log('a'=='A') // false
console.log('numb'>'numa') // true
console.log('a'<'z') //true */
// ********************************************


// ------------------------------------------------------DOP
// Напишите программу, которая запрашивает у пользователя его имя и возраст, а затем выводит сообщение, например: Hallo Name, du bist age Jahre alt.
/* const name=prompt('Giben Sie Ihren Namen:')
const age=prompt('Wie alt sind Sie:')
console.log(`Hallo ${name}, du bist ${age} Jahre alt.`) */

// Напишите программу, которая считывает два числа через prompt и выводит их произведение и разность.
/* const num1=+prompt('Gib nummer 1:')
const num2=+prompt('Gib nummer 2:')
console.log(`Nemmer sind ${num1} und ${num2}, Multiplikation ist gleich ${num1*num2} und разность ist gleich ${num1-num2}`) */

// Напишите программу, которая запрашивает у пользователя два числа и сравнивает их, выводя результаты всех возможных операций сравнения (>, <, ==, === и т.д.).
/* const num1=+prompt('Gib nummer 1:')
const num2=+prompt('Gib nummer 2:')
console.log(`Zählen ${num1}>${num2} ist ${num1>num2}`)
console.log(`Zählen ${num1}<${num2} ist ${num1<num2}`)
console.log(`Zählen ${num1}==${num2} ist ${num1==num2}`)
console.log(`Zählen ${num1}===${num2} ist ${num1===num2}`)
console.log(`Zählen ${num1}!=${num2} ist ${num1!=num2}`)
console.log(`Zählen ${num1}!==${num2} ist ${num1!==num2}`) */


// Создайте программу, которая запрашивает у пользователя значения r, g и b, а затем выводит строку в формате rgb(r, g, b) с использованием как конкатенации, так и интерполяции.
/* const r=+prompt('Gib R:')
const g=+prompt('Gib g:')
const b=+prompt('Gib b:')
console.log(`rgb(${r}, ${g}, ${b})`) */

// Напишите программу, которая запрашивает число у пользователя и выводит его квадрат.
/* const num1=+prompt('Gib nummer 1:')
console.log(num1**2) */


// Напишите программу, которая сравнивает две строки, введенные пользователем, и выводит, равны ли они, и какая из них больше (в лексикографическом порядке).
/* const num1=prompt('Gib nummer 1:')
const num2=prompt('Gib nummer 2:')
console.log(`Zählen ${num1}==${num2} ist ${num1==num2}`)
if(num1>num2) {
    console.log(`${num1} ist > als ${num2} `);
}    
else if (num1<num2){
    console.log(`${num1} ist < als ${num2} `);
}    
else {
    console.log(`${num1} ist gleich ${num2} `);
} */
    

/* const str1 = prompt('Gib die erste Zeichenkette ein:');
const str2 = prompt('Gib die zweite Zeichenkette ein:');
console.log(`Zeichenketten ${str1} == ${str2} ist ${str1 == str2}`);
if (str1 > str2) {
    console.log(`${str1} ist lexikographisch größer als ${str2}`);
} else if (str1 < str2) {
    console.log(`${str1} ist lexikographisch kleiner als ${str2}`);
} else {
    console.log(`${str1} ist gleich ${str2}`);
}
 */

// Напишите программу, которая выводит различные строки и результаты арифметических операций не только в консоль, но и на страницу с помощью document.write.
/* const num1=+prompt('Gib nummer 1:')
const num2=+prompt('Gib nummer 2:')
console.log(`${num1} und ${num2}`)
document.write(`${num1} und ${num2}`) */


// Задание 1: Определение четности числа  ---- Напишите программу, которая запрашивает у пользователя число и определяет, является ли оно четным или нечетным. Выведите результат в консоль.
/* const nummer=+prompt('Gib eine Zahl:')
console.log(`Die Zahl ${nummer} ist четное: ${nummer%2===0}`)
if (nummer===0){
    console.log('Вы вели 0, не шутите так...')
}
else if (nummer%2===0){
    console.log(`Число ${nummer} четное`)
}
else {
    console.log(`Число ${nummer} нечетное`)
} */



// Напишите программу, которая запрашивает у пользователя три числа и выводит наибольшее из них. Если числа равны, выведите соответствующее сообщение.


/* const num1=+prompt('Введите первое число:')
const num2=+prompt('Введите второе число:')
const num3=+prompt('ведите третье число:')

if (num1>num2){
    if (num1>num3){
        console.log(`Das größte Zahl ist ${num1}.`)
    }
}
else if (num2>num3){
    console.log(`Das größte Zahl ist ${num2}.`)
}
else
console.log(`Das größte Zahl ist ${num3}.`) */


// ---------------------------------------ver2
/* const num1 = +prompt('Введите первое число:');
const num2 = +prompt('Введите второе число:');
const num3 = +prompt('Введите третье число:');

console.log(`Вы ввели числа: ${num1}, ${num2}, ${num3}.`)

if (num1 === num2 && num2 === num3) {
    console.log('Alle drei Zahlen sind gleich.');
} else if (num1 >= num2 && num1 >= num3) {
    console.log(`Das größte Zahl ist ${num1}.`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`Das größte Zahl ist ${num2}.`);
} else {
    console.log(`Das größte Zahl ist ${num3}.`);
} */