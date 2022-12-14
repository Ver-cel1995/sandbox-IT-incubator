// ----------- Задача с удалением элемента массива

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const c = arr.shift();
    return c;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


/*

Не совсем была понятна задача, т.к. нету 
запуска функции с параметрами nextInLine([2], 1)

*/


// ---------- операторы

"!=", "!=="; // не равно и строгое не равно
"<=", ">=", "<", ">"; // больше, меньше; больше либо равно/ меньше либо равно
"&&"; // и

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
      return "Yes"
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10); // No
  testLogicalAnd(80); // No
  testLogicalAnd(25); // Yes
  testLogicalAnd(30); // Yes



"||"; // или

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15); // Inside
  testLogicalOr(25); // Outside



// ----------- Инструкция else

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    } else { // у else нет условий
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

/* Если нужно 2-е условие, то используем else if */

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
    return "Between 5 and 10";
    }
  }
  
  testElseIf(7);

/* Порядок важен в if, else if заявлениях. Функция выполняется сверху вниз, 
поэтому вам нужно быть осторожным с тем, какой оператор идет первым. */

