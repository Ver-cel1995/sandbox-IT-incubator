var catName = "Oliver";
var catName = "Meow!"; // var всегда можно переписать в отличии от let;

let catName = 1;
catname = 2; // с помощью let можно переназначить значение;

const a = 20;
a = 15; // --ошибка. const нельзя ни переназначить, ни переписать;

//-----------------------

let myVar = 87;

//  оператор ++ добавляет единицу к переменной
myVar++;

// ----------------------

let myVars = 87;

//  оператор -- уменьшает единицу у переменной
myVar--;

// ----------------------

/* оператор % возвразает остаток от деления 2-х чисел

    5 % 2 = 1, потому что
    Math.floor(5 / 2) = 2 (частное)
    2 * 2 = 4
    5 - 4 = 1 (остаток)
*/

// --------------------

 
let a = 5;
let b = 12;
let c = 4.6;

// Можно умножать, складывать, уменьшать и делить
a *= 5;
b *= 3;
c *= 10;

// -------------------- 

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

console.log(myStr) // I am a "double quoted" string inside "double quotes".

// Чтобы сохранить двойные кавычки у атрибутов, лучше использовать одинарные кавычки;

const myString = '<a href="http://www.example.com" target="_blank">Link</a>';



// ------------------- Конкатенация

const str = "This is the start."+" This is the end."; // This is the start. This is the end.

/* В случае присваивание чере += не забывать, что нужно использовать let */

let ourStr = "I come first. ";
    ourStr += "I come second."; // I come first. I come second.



/* 

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

*/    

const myName = "alex";
const myStrings = "My name is "+ myName +"and I am well!";

const someAdjective = "123";
let strings = "Learning to code is ";
myStr += someAdjective; // Learning to code is 123




// ------------------- Чтобы найти длину строки(учитываются также и пробелы), нужно свойство lenght

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length; // 8



// ------------------- Скобочная нотация(Что-то типа индекса массива) " [] "

/* Пример */

const firstName = "Charles";
const firstLetter = firstName[0];

console.log(firstLetter) // C

// Setup
let firstLetterOfLastName = "";
const name = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

/* Строка является неизменным значением, т.е. её нельзя изменить после создания

let myStr = "Bob";
myStr[0] = "J"; // будет ОШИБКА!!!!

*/

/* Чтобы узнать последнюю букву строки, нужно свойство length. Индекс начинается не с 0, а с 1. */

const lastsName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

console.log(lastLetterOfLastName) // e
console.log(lastName.length) // 8