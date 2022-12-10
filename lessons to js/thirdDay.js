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

console.log(sum) // 8 '''


// ------------ Присваивание значение функции к переменной

ourSum = sum(5, 12); // sum это функция с аргументами

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);