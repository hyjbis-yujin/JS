// 문제1 객체 생성자를 사용하여 도서 정보를 관리하는 프로그램을 작성하세요. 각 도서는 제목과 저자를 속성으로 가지며, 속성을 출력하는 메서드를 포함해야 합니다.

function Book(title, author) {
  // 객체생성자를 이용해서 도서(Book)라는 객체를 만들고 제목(title)과 저자(author)를 전달받아 객체 속성에 저장
  this.title = title; // Book의 객체에 title이라는 상자에 았는 함수를 호출 시 전달 될 값(title)을 상자(this.title)에 전달
  this.author = author;
  this.displayInfo = function () {
    // Book이라는 객체에 도서정보를 출력하기 위한 displayInpo 메서드 생성
    console.log("Title: " + this.title); // 'Title'이라는 문자열과 값(title)을 전달받은 인수를 합치기 위해 연산자 +를 이용해 연결
    console.log("Author: " + this.author);
  };
}

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald"); // 새로운 객체를 값을 넣어 생성하고 생성자 함수에 전달한 값으로 속성을 초기화
let book2 = new Book("To Kill a Mockingbird", "Harper Lee");

book1.displayInfo(); // 호출
book2.displayInfo();

// 문제2 계산기 객체를 생성하고, 덧셈과 뺄셈 기능을 가진 메서드를 작성하세요.

function Calculator() {
  // 객체생성자로 계산기(Calculator) 객체를 만듬
  this.add = function (a, b) {
    // 각각의 덧셈과 뺄셈의 기능을 가진 메서드를 작성
    return a + b;
  };
  this.subtract = function (a, b) {
    return a - b;
  };
}

let calculator = new Calculator(); // Calculator 생성자를 이용해 새로운 계산기 객체를 생성 후 계산
console.log(calculator.add(3, 5)); // 객체의 메서드를 호출해 인수를 계산 후 출력
console.log(calculator.subtract(7, 2));

// 문제3  객체와 특정 속성을 입력받아 해당 속성이 객체에 존재하는지 확인하는 함수를 작성하세요.

function checkProperty(obj, property) {
  // 객체와 속성을 파마미터로 받는다
  return property in obj; // 객체에 해당 속성이 있는 지 in 연산자로 확인 후 ture/false 반환
}

let person = {
  // 확인 할 객체 정의
  name: "Jhon",
  age: 25,
  gender: "male",
};

console.log(checkProperty(person, "name")); // person 객체에 name 속성이 있는 지 함수를 통해 확인 후 출력
console.log(checkProperty(person, "address"));

// 문제4 주어진 배열에서 중복된 요소를 제거한 새로운 배열을 반환하는 함수를 작성하세요.

function removeDuplicates(arr) {
  let uniqueArr = []; // 배열을 저장할 변수 생성
  for (let i = 0; i < arr.length; i++) {
    // 배열을 처음부터 끝까지 순회하기 위한 반복문
    if (!uniqueArr.includes(arr[i])) {
      // 배열안에 값이 있는 지 확인하는 includes메서드 변수
      // 부정연산자도 같이 썼기 때문에 배열안에 값이 없을 때만 실행
      uniqueArr.push(arr[i]); // 해당하는 배열을 순서대로 저장
    }
  }
  return uniqueArr; // 새로운 배열을 담은 변수 반환
}

let number = [1, 2, 3, 3, 4, 4, 5]; // 검사할 배열 생성
let result = removeDuplicates(number); // 작성한 함수를 이용하여 중복되는 배열 검사
console.log(result); // 출력

//문제5  주어진 객체 배열을 특정 속성을 기준으로 오름차순으로 정렬하는 함수를 작성하세요.

function sortByProperty(arr, property) {
  // 객체 배열을 특정 속성을 기준으로 하는 오름차순 정렬하는 함수 정의
  arr.sort(function (a, b) {
    // book의 정렬을 위한 sort 메서드를 사용
    return a[property] - b[property]; // 오름차순 정렬을 위한 비교식
  });
  return arr; // 정렬된 배열 반환
}

let books = [
  // 정렬할 객체 배열
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

let sortedBooks = sortByProperty(books, "year"); // 함수를 사용하여 year의 속성을 기준으로 정렬
console.log(sortedBooks); // 출력

// 문제 6 주어진 객체의 속성 값들의 평균을 계산하는 함수를 작성하세요.

function calculateAverage(obj) {
  let sum = 0; //조건문이 true일 때 저장을 위한 변수
  let count = 0; //true인 속성의 갯수
  for (let key in obj) {
    // 객체의 속성 순회를 위한 반복문
    if (typeof obj[key] === "number") {
      //숫자형인지 확인하기 위한 조건문
      sum += obj[key]; //ture일 때 key를 sum 저장
      count++; // key가 ture일 때 마다 1씩 증가
    }
  }

  return sum / count; // 전체의 합(60) / ture인 key의 갯수(3) = 20 => 반환
}

let data = {
  // 속성 값들의 평균을 계산할 객체
  a: 10,
  b: 20,
  c: 30,
  d: "hello",
};

let result0 = calculateAverage(data); // 함수를 이용해 평균을 계산
console.log(result0); // 출력

// 문제7 주어진 객체의 숫자 속성들의 최댓값, 최솟값, 평균을 계산하는 함수를 작성하세요.

function calculateStatistics(obj) {
  let values = Object.values(obj).filter((value) => typeof value === "number"); // 객체에 있는 숫자만 있는 새로운 배열을 만들기 위해 속성을 꺼내고 숫자만 필터함
  let max = Math.max(...values); // 새로운 배열에서 최대값을 찾기 위해 Math.max를 사용
  let min = Math.min(...values); // 새로운 배열에서 최소값을 찾기 위해 Math.min를 사용
  let sum = values.reduce((acc, value) => acc + value, 0); // 배열에 있는 값들을 합하기 위한 메서드를 사용
  //건전지(reduce)를 넣으면 비어있는(0) 저금통(acc)과 동전을 집는 손가락이 작동(value)
  let average = sum / values.length; // 평균을 구하기 위해 배열의 원소 합한 결과를 담은 sum(100)과 배열 원소의 갯수(4)를 나눔

  return {
    // 최대, 최소, 평균 값 반환
    max: max,
    min: min,
    average: average,
  };

  /*   return [max, min, average]; */
}

let data2 = {
  // 최대, 최소, 평균 값을 구할 객체 작성
  a: 10,
  b: 20,
  C: 30,
  d: 40,
};

let result2 = calculateStatistics(data); // 함수를 이용해 최대, 최소, 평균 값 계산
console.log(result); //  출력
