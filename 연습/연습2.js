/* 🔹 1. 함수 선언과 호출 (기초) */

// 문제 1
// sayHi라는 함수를 선언하고, 호출했을 때 "Hi, JavaScript!"를 출력하도록 작성하세요.
// 상세설명: function 선언문을 사용해 함수를 만들고, console.log로 문자열을 출력한다.

function sayHi(text) {
  console.log(text);
}

sayHi("Hi, JavaScript!");

// 문제 2
// printToday 함수를 선언하고, 오늘 날짜를 문자열로 직접 적어 출력해보세요. (예: "2025-09-15")
// 상세설명: console.log 안에 날짜 문자열을 적는다.

function printToday(date) {
  console.log(date);
}

printToday("2025-09-15");

// 문제 3
// doubleCheck라는 함수를 만들어 "Check!"를 두 번 연속 출력해보세요.
// 상세설명: console.log를 두 번 작성한다.

function doubleCheck(text) {
  console.log(text);
  console.log(text);
}

doubleCheck("Check!");

// 문제 4
// repeatThree 함수를 선언하여 "반복합니다"라는 문자열을 3번 출력하도록 작성하세요.
// 상세설명: 함수 안에서 console.log를 3번 사용한다.

function repeatThree(text) {
  console.log(text);
  console.log(text);
  console.log(text);
}

repeatThree("반복합니다");

// 문제 5
// printSymbol 함수를 선언하고, 호출 시 "★" 문자를 출력하세요.
// 상세설명: console.log("★") 작성.

function printSymbol(star) {
  console.log(star);
}

printSymbol("★");

/* 🔹 2. 매개변수 사용 */

// 문제 6
// sayName(name) 함수를 만들어, 전달된 이름을 "안녕하세요, OOO!" 형식으로 출력하세요.
// 상세설명: 매개변수를 받아 문자열 연결.

function sayName(name) {
  console.log(`안녕하세요, ${name}!`);
}

sayName("톰");

// 문제 7
// square(num) 함수를 만들어 전달된 숫자의 제곱을 출력하세요.
// 상세설명: console.log(num * num) 사용.

function square(num) {
  console.log(num * num);
}

square(5);

// 문제 8
// printDouble(num) 함수를 선언해 전달된 숫자의 2배 값을 출력하세요.
// 상세설명: num * 2 결과를 출력한다.

function printDouble(num) {
  console.log(num * 2);
}

printDouble(7);

// 문제 9
// showMessage(msg) 함수를 만들어 전달된 문자열을 출력하세요.
// 상세설명: console.log(msg) 작성.

function showMessage(msg) {
  console.log(msg);
}

console.log("공부중");

// 문제 10
// sumTwoNumbers(a, b) 함수를 선언해 두 수의 합을 출력하세요.
// 상세설명: a + b 값을 출력한다.

function sumTwoNumbers(a, b) {
  console.log(a + b);
}

sumTwoNumbers(3, 4);

/* 🔹 3. return 사용 */

// 문제 11
// getTriple(num) 함수를 선언하고, 전달된 값의 3배를 반환하세요.
// 상세설명: return 문으로 num * 3 반환.
// 예상결과 (console.log(getTriple(6))):

function getTriple(num) {
  return num * 3;
}

console.log(getTriple(6));

// 문제 12
// getGreeting(name) 함수를 만들어 "Hello, OOO" 문자열을 반환하세요.
// 상세설명: return "Hello, " + name.
// 예상결과 (console.log(getGreeting("Tom"))):

function getGreeting(name) {
  return `Hello, ${name}`;
}

console.log(getGreeting("Tom"));

// 문제 13
// addFive(num) 함수를 선언하고, 입력된 값에 5를 더한 결과를 반환하세요.
// 상세설명: return num + 5.
// 예상결과 (console.log(addFive(10))):

function addFive(num) {
  return num + 5;
}

console.log(addFive(10));

// 문제 14
// concatText(a, b) 함수를 만들어 두 문자열을 합쳐 반환하세요.
// 상세설명: return a + b.
// 예상결과 (console.log(concatText("Hi", "There"))):

function concatText(a, b) {
  return a + b;
}

console.log(concatText("Hi ", "there"));

// 문제 15
// getLength(str) 함수를 선언하고 문자열 길이를 반환하세요.
// 상세설명: return str.length.
// 예상결과 (console.log(getLength("Apple"))):

function getLength(str) {
  return str.length;
}

console.log(getLength("Apple"));

/* 🔹 4. 조건문과 함수 */

// 문제 16
// checkEvenOdd(num) 함수를 선언해, 짝수면 "짝수", 홀수면 "홀수"를 출력하세요.
// 상세설명: if문으로 % 2 결과 판별.
// 예상결과 (checkEvenOdd(7)):

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "찍수";
  } else {
    return "홀수";
  }
}

console.log(checkEvenOdd(7));

// 문제 17
// checkAdult(age) 함수를 선언해 20세 이상이면 "성인", 아니면 "미성년자"를 출력하세요.
// 상세설명: if-else 사용.
// 예상결과 (checkAdult(18)):

function checkAdult(age) {
  if (age >= 20) {
    return "성인";
  } else {
    return "미성년자";
  }
}

console.log(checkAdult(18));

// 문제 18
// checkScore(score) 함수를 선언해 90점 이상이면 "A", 80점 이상이면 "B", 나머지는 "C"를 출력하세요.
// 상세설명: if-else if 구조 사용.
// 예상결과 (checkScore(85)):

function checkScore(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else {
    return "C";
  }
}

console.log(checkScore(85));

// 문제 19
// isPositive(num) 함수를 선언해 양수면 "양수", 0이면 "0", 음수면 "음수"를 출력하세요.
// 상세설명: if-else if-else 구조 사용.
// 예상결과 (isPositive(-3)):

function isPositive(num) {
  if (num > 0) {
    return "양수";
  } else if (num === 0) {
    return 0;
  } else {
    return "음수";
  }
}
console.log(isPositive(-3));

// 문제 20
// checkPassword(pw) 함수를 선언해 비밀번호가 "1234"면 "통과", 아니면 "실패"를 출력하세요.
// 상세설명: 문자열 비교 사용.
// 예상결과 (checkPassword("1111")):

function checkPassword(pw) {
  if (pw === "1234") {
    return "통과";
  } else {
    return "실패";
  }
}

console.log(checkPassword("1111"));

/* 🔹 5. 반복문과 함수 */

// 문제 21
// printOneToFive 함수를 만들어 1부터 5까지 출력하세요.
// 상세설명: for문을 사용해 반복 출력.
// 예상결과:

function printOneToFive(num) {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

printOneToFive();

// 문제 22
// printStars(n) 함수를 만들어 ★을 n번 출력하세요.
// 상세설명: for문 안에서 console.log("★").
// 예상결과 (printStars(3)):

function printStars(n) {
  for (let i = 1; i <= n; i++) {
    console.log("★");
  }
}

printStars(3);

// 문제 23
// sumToN(n) 함수를 선언해 1부터 n까지의 합을 반환하세요.
// 상세설명: for문 사용, 합 변수에 더하기.
// 예상결과 (console.log(sumToN(5))):

function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

sumToN(5);

// 문제 24
// printEvenNumbers(n) 함수를 만들어 1부터 n까지의 짝수를 출력하세요.
// 상세설명: for문과 if문 사용.
// 예상결과 (printEvenNumbers(6)):

function printEvenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(6);

// 문제 25
// printArray(arr) 함수를 선언해 배열 요소를 순서대로 출력하세요.
// 상세설명: for문으로 arr[x] 출력.
// 예상결과 (printArray(["a", "b", "c"])):

function printArray(arr) {
  for (let i in arr) {
    console.log(arr[i]);
  }
}

printArray(["a", "b", "c"]);

/* 🔹 6. 화살표 함수 응용 */

// 문제 26
// 화살표 함수 add = (a, b) => a + b 를 선언하고, 3과 7을 더한 결과를 출력하세요.
// 상세설명: console.log(add(3, 7)).
// 예상결과:

const add = (a, b) => a + b;

console.log(add(3, 7));

// 문제 27
// 화살표 함수 getSquare = n => n * n 을 선언하고, 9를 제곱한 값을 출력하세요.
// 상세설명: console.log(getSquare(9)).
// 예상결과:

const getSquare = (n) => n * n;

console.log(getSquare(9));

// 문제 28
// 화살표 함수 shout = msg => msg + "!" 를 선언하고, "Hello"를 넣어 호출하세요.
// 상세설명: console.log(shout("Hello")).
// 예상결과:

const shout = (msg) => msg + "!";

console.log(shout("Hello"));

// 문제 29
// 화살표 함수 getLastChar = str => str[str.length - 1] 를 선언하고, "Cat"의 마지막 문자를 출력하세요.
// 상세설명: console.log(getLastChar("Cat")).
// 예상결과:

const getLastChar = (str) => str[str.length - 1];

console.log(getLastChar("Cat"));

// 문제 30
// 화살표 함수 multiply = (x, y) => x * y 를 선언하고, 4와 5를 곱한 값을 출력하세요.
// 상세설명: console.log(multiply(4, 5)).
// 예상결과:

const multiply = (x, y) => x * y;

console.log(multiply(4, 5));
