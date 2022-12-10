

// ---------------

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun + " " + myVerb + " " + myAdjective + " " + myAdverb // Change this line
// Only change code above this line

console.log(wordBlanks) // dog ran big quickly


// ----------- Массив 

const myArray = ["Alex", 20];


// ----------- Многоммерный массив (массив массивов)

const myArrays = [["Alex", 20], ["Anastasya", 19]];


// ----------- Индекс массива


const myArrayNumber = [50, 60, 70];

const myData = myArrayNumber[0]; // 50


// ----------- Изменяемый массив. Массив можно менять, даже при const

const myArray = [18, 64, 99];
myArray[0] = 45;



// ----------- Доступ к многоммерному массиву 

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3]; // [[10, 11, 12], 13, 14]
  const nestedSubarray = arr[3][0]; // [10, 11, 12]
  const element = arr[3][0][1]; // 11



// ---------------- Управление массивами с помощью push()

/* 

Простой способ добавления данных в конец массива — через push()функцию.
.push()принимает один или несколько параметров и "помещает" их в конец массива.

*/

const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

myArray.push(["dog", 3]);

console.log(myArray) // [ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]



// ---------------- Управление массивами с помощью pop()

/*

.pop()используется для извлечения значения из конца массива. 
Мы можем сохранить это всплывающее значение, назначив его переменной. 
Другими словами, .pop()удаляет последний элемент из массива и возвращает этот элемент.

*/
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

console.log(myArray); // [ [ 'John', 23 ] ]
console.log(removedFromMyArray); // [ 'cat', 2 ]



// ---------------- Работа с массивами с помощью shift()

/*
 
 .shift() работает так же, как .pop(), за исключением того, 
 что он удаляет первый элемент вместо последнего.

*/

const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

console.log(myArray); // [ [ 'dog', 3 ] ]
console.log(removedFromMyArray); // [ 'John', 23 ]



// ---------------- Работа с массивами с помощью unshift()

/*

.unshift()работает точно так же .push(), но вместо добавления
элемента в конец массива unshift()добавляет элемент в начало массива.

*/

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

console.log(myArray) // [ [ 'Paul', 35 ], [ 'dog', 3 ] ]


// ----------- функция

function reusableFunction() {
    console.log("Hi World");
  }
  
reusableFunction() // Hi World






// ----------- Передача значений функциям с аргументами

/*

Параметры — это переменные, которые действуют как заполнители для значений, 
которые должны быть введены в функцию при ее вызове. 
Когда функция определена, она обычно определяется вместе с одним или 
несколькими параметрами. Фактические значения, которые вводятся (или «передаются» ) 
в функцию при ее вызове, называются аргументами .

Вот функция с двумя параметрами param1и param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}

Тогда мы можем вызвать testFunтак: testFun("Hello", "World");. 
Мы передали два строковых аргумента Helloи World. Внутри функции param1 будет 
равно строке Helloи param2будет равно строке World. Обратите внимание, 
что вы можете testFunснова вызвать с другими аргументами, и параметры примут 
значение новых аргументов.


*/

function functionWithArgs(a, b) {
    console.log(a + b)
  }
  
  functionWithArgs(1, 2,); // 3
  functionWithArgs(7, 9);  // 16



  // ----------- Возврат значения из функции с возвратом

/*

Мы можем передавать значения в функцию с аргументами. 
Вы можете использовать returnоператор для отправки значения обратно из функции.

*/



// ----------- Глобальный охват и функции

/*

В JavaScript область видимости относится к видимости переменных. 
Переменные, определенные вне функционального блока, имеют 
глобальную область действия. Это означает, что их можно 
увидеть повсюду в вашем коде JavaScript.

Переменные, объявленные без ключевых слов let или const автоматически
создаются в globalобласти видимости. Это может привести к непредвиденным 
последствиям в другом месте вашего кода или при повторном запуске функции. 
Вы всегда должны объявлять свои переменные с помощью let или const.

*/


// ----------- Локальный охват и функции

/*

Переменные, объявленные внутри функции, а также параметры функции 
имеют локальную область видимости. Это означает, что они видны только внутри этой функции.


Вот функция myTestс локальной переменной с именем loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc); // error

Вызов функции myTest() отобразит строку fooв консоли. 
Строка console.log(loc) (вне myTest функции) выдаст ошибку, 
так как loc не определена вне функции.

*/

function myLocalScope() {
    const myVar = 5;
    console.log('inside myLocalScope', myVar);
  }
  
myLocalScope(); // inside myLocalScope 5
console.log(myVar); // error


// -------------- Глобальная и локальная область видимости в функциях

/* Локальная переменная имеет приоритет над глобальной. */

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  const myOutfit = outerWear;
  return outerWear;
}

myOutfit();


// --------------- Понимание неопределенного значения, возвращаемого функцией

/*

Функция может включать return оператор, но это не обязательно. 
В случае, если у функции нет return инструкции, при ее вызове 
функция обрабатывает внутренний код, но возвращаемое значение равно undefined.

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3); // undefined

*/

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
   sum = sum + 5
}

// Only change code above this line

addThree(); // undefiend
addFive(); // undefiend

console.log(sum) // 8


// ------------ 