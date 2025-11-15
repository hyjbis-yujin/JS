/* 1. 함수 기초 (10문제) */

// 문제 1: sayHello라는 이름의 함수를 선언하고, 함수가 호출되면 콘솔에 "Hello, World!"를 출력하도록 작성하세요.
// *IN: Hello, World *OUT: Hello, World
// 기능:
function sayHello(txt) {
  console.log(txt);
}

sayHello("Hello, World");

// 문제 2: greet라는 함수를 만들어 콘솔에 "안녕하세요!"를 출력하고, 이 함수를 3번 호출해보세요.
// *IN: 안녕하세요! *OUT: 안녕하세요!, 안녕하세요!, 안녕하세요!
// 기능:
function greet(txt) {
  console.log(txt);
  console.log(txt);
  console.log(txt);
}

greet("안녕하세요!");

// 문제 3: printMyName 함수를 선언해 콘솔에 자신의 이름을 출력하도록 작성하세요.
// *IN: 한유진 *OUT: 한유진
// 기능:
function printMyName(name) {
  console.log(`${name}`);
}
printMyName("한유진");

// 문제 4: sayGoodMorning 함수를 만들어 콘솔에 "Good Morning!"를 출력하고, 이 함수를 바로 호출해보세요.
// *IN: GoodMorning! *OUT: GoodMorning!
// 기능:
function sayGoodMorning(txt) {
  console.log(txt);
}
sayGoodMorning("GoodMorning!");

// 문제 5: addTen 함수를 선언해 숫자 10을 콘솔에 출력하도록 작성하세요.
// *IN: 10 *OUT: 10
// 기능:
function addTen(num) {
  console.log(num);
}

addTen(10);
// 문제 6: welcomeMessage 함수를 만들어 "Welcome to JavaScript!"를 출력하고, 함수를 두 번 호출해보세요.
// *IN: Welcome to JavaScript! *OUT: Welcome to JavaScript!, Welcome to JavaScript!
// 기능:
function welcomeMessage(txt) {
  console.log(txt);
  console.log(txt);
}

welcomeMessage("Welcome to JavaScript!");

// 문제 7: printNumber 함수를 선언해 숫자 42를 콘솔에 출력하도록 작성하세요.
// *IN: 42 *OUT: 42
// 기능:
function printNumber(num) {
  console.log(num);
}

printNumber(42);

// 문제 8: sayGoodbye 함수를 만들어 콘솔에 "Goodbye!"를 출력하고, 이 함수를 호출하지 않고 선언만 해보세요. 애매함
// *IN: Goodbye! *OUT: Goodbye!
// 기능:
function sayGoodbye() {
  console.log("Goodbye!");
}

// 문제 9: showMessage 함수를 선언해 콘솔에 "I am learning functions!"를 출력하도록 작성하세요.
// *IN: I am learning functions! *OUT: I am learning functions!
// 기능:
function showMessage(txt) {
  console.log(txt);
}
showMessage("I am learning functions!");

// 문제 10: alertUser 함수를 만들어 콘솔에 "Warning! Learning in progress!"를 출력하고, 함수를 호출해보세요.
// *IN: Waring! Learning in progress! *OUT: Waring! Learning in progress!
// 기능:
function alertUser(txt) {
  console.log(txt);
}
alertUser("Waring! Learning in progress!");

/* 2. 함수 파라미터 관련 (10문제) */

// 문제 1: sayName 함수를 만들어 파라미터로 받은 name을 콘솔에 출력하도록 작성하세요.
// *IN: Alice *OUT: Alice
// 기능:
function sayName(name) {
  console.log(name);
}

sayName("Alice");

// 문제 2: doubleNumber 함수를 만들어 파라미터로 받은 숫자를 두 배로 만들어 콘솔에 출력하도록 작성하세요.
// *IN: 5 *OUT: 10
// 기능:
function doubleNumber(num) {
  console.log(num * 2);
}

doubleNumber(5);

// 문제 3: addFive 함수를 만들어 파라미터로 받은 숫자에 5를 더해 콘솔에 출력하도록 작성하세요.
// *IN: 3 *OUT: 8
// 기능:
function addFive(num) {
  console.log(num + 5);
}

addFive(3);

// 문제 4: greetUser 함수를 만들어 파라미터로 받은 name을 사용해 "Hello, [name]!"를 콘솔에 출력하도록 작성하세요.
// *IN: Bob *OUT: Hello Bob!
// 기능:
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

greetUser("Bob");

// 문제 5: squareNumber 함수를 만들어 파라미터로 받은 숫자의 제곱을 콘솔에 출력하도록 작성하세요.
// *IN: 4 *OUT: 16
// 기능:
function squareNumber(num) {
  console.log(num * num);
}

squareNumber(4);

// 문제 6: sayAge 함수를 만들어 파라미터로 받은 age를 사용해 "My age is [age]."를 콘솔에 출력하도록 작성하세요.
// *IN: 20 *OUT: My age is 20
// 기능:
function sayAge(age) {
  console.log(`My age is ${age}`);
}

sayAge(20);

// 문제 7: subtractTen 함수를 만들어 파라미터로 받은 숫자에서 10을 뺀 값을 콘솔에 출력하도록 작성하세요.
// *IN: 15 *OUT: 5
// 기능:
function subtractTen(num) {
  console.log(num - 10);
}

subtractTen(15);

// 문제 8: printMessage 함수를 만들어 파라미터로 받은 message를 콘솔에 두 번 출력하도록 작성하세요.
// *IN: Hi *OUT: Hi, Hi
// 기능:
function printMessage(txt) {
  console.log(txt);
  console.log(txt);
}

printMessage("Hi");

// 문제 9: multiplyByThree 함수를 만들어 파라미터로 받은 숫자에 3을 곱한 값을 콘솔에 출력하도록 작성하세요.
// *IN: 7 *OUT: 21
// 기능:
function multiplyByThree(num) {
  console.log(num * 3);
}

multiplyByThree(7);

// 문제 10: welcomeUser 함수를 만들어 파라미터로 받은 name과 age를 사용해 "Welcome, [name]! You are [age] years old."를 콘솔에 출력하도록 작성하세요.
// *IN: "Alice", 25 *OUT: Welcome, Alice! You are 25 years old.
// 기능:
function welcomeUesr(name, age) {
  console.log(`Welcome, ${name}! You are ${age} years old.`);
}

welcomeUesr("Alice", 25);

/* 3. 함수 살짝 응용한 문제 (10문제) */

// 문제 1: getDouble 함수를 만들어 파라미터로 받은 숫자의 두 배를 반환하도록 작성하세요. 반환값을 콘솔에 출력해보세요.
// *IN: 6 *OUT: 12
// 기능 :
function getDouble(num) {
  return num * 2;
}

console.log(getDouble(6));

// 문제 2: addNumbers 함수를 만들어 두 개의 파라미터 숫자를 더한 값을 **반환**하도록 작성하세요. 반환값을 변수에 저장해 출력해보세요.
// *IN: 3, 4 *OUT: 7
// 기능:
function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(3, 4));

// 문제 3: isPositive 함수를 만들어 파라미터로 받은 숫자가 양수인지 확인해 true 또는 false를 반환하도록 작성하세요.
// *IN: 5, -2 *OUT: 5(ture), -2(false)
// 기능:
function isPositive(...num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPositive(5));
console.log(isPositive(-2));

// 문제 4: makeGreeting 함수를 만들어 파라미터로 받은 name을 사용해 "Hi, [name]!" 문자열을 반환하도록 작성하세요. 반환값을 콘솔에 출력해보세요.
// *IN: Tom *OUT: Hi, Tom!
// 기능 :
function makeGreeting(name) {
  return `Hi, ${name}!`;
}

console.log(makeGreeting("Tom"));

// 문제 5: getSquare 함수를 만들어 파라미터로 받은 숫자의 제곱을 **반환**하도록 작성하세요. 반환값을 변수에 저장해 출력해보세요.
// *IN: 3 *OUT: 9
// 기능 :
function getSquare(num) {
  return num * num;
}

console.log(getSquare(3));

// 6. 문제 6: isEven 함수를 만들어 파라미터로 받은 숫자가 짝수인지 확인해 true 또는 false를 반환 하도록 작성하세요.
// *IN : 4, 7 *OUT: 4(ture), 7(false)
// 기능:
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(7));

// 문제 7: multiplyNumbers 함수를 만들어 두 개의 파라미터 숫자를 곱한 값을 반환하도록 작성하세요. 반환값을 콘솔에 출력해보세요.
// *IN : 5, 3 *OUT: 15
// 기능:
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

console.log(multiplyNumbers(5, 3));

// 8. 문제 8: getFullName 함수를 만들어 파라미터로 받은 firstName과 lastName을 결합해 "[firstName] [lastName]"을 반환하도록 작성하세요.
// *IN : John, Doe *OUT: John Doe
// 기능:
function getFullName(name1, name2) {
  return `${name1} ${name2}`;
}
console.log(getFullName("John", "Doe"));

// 문제 9: isAdult 함수를 만들어 파라미터로 받은 age가 19 이상인지 확인해 true 또는 false를 반환하도록 작성하세요.
// *IN: 20, 15 *OUT: 20(true), 15(false)
// 기능:
function isAdult(age) {
  if (age >= 19) {
    return true;
  } else {
    return false;
  }
}

console.log(isAdult(20));
console.log(isAdult(15));

// 10. **문제 10**: getBiggerNumber 함수를 만들어 두 개의 파라미터 숫자 중 더 큰 값을 **반환**하도록 작성하세요. 반환값을 콘솔에 출력해보세요.
// *IN: 8, 2 *OUT: 8
// 기능:
function getBiggerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(getBiggerNumber(8, 2));
