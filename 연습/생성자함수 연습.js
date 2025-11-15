function Book(title, author) {
  this.title = title;
  this.author = author;
  this.displayInfo = function () {
    console.log(`Titile: ${this.title}`);
    console.log(`Author: ${this.author}`);
  };
}

let book1 = new Book("The Great Gatsby", "F Scott Fitzgerald");
let book2 = new Book("To Kill a Monkingbird", "Harper Lee");

book1.displayInfo();
book2.displayInfo();

// 계산기 객체를 생성하고, 덧셈과 뺄셈 기능을 가진 메서드를 작성하세요.

function Calculator() {
  this.add = function (a, b) {
    return a + b;
  };
  this.subtract = function (a, b) {
    return a - b;
  };
}

let calculator = new Calculator();

console.log(calculator.add(3, 5));
console.log(calculator.subtract(7, 2));

// 객체와 특정 속성을 입력받아 해당 속성이 객체에 존재하는지 확인하는 함수를 작성하세요.
//checkProperty John 25 male name address

function checkProperty(obj, property) {
  return property in obj;
}

let person = {
  name: "Jhon",
  age: 25,
  gender: "male",
};

console.log(checkProperty(person, "name"));
console.log(checkProperty(person, "address"));

// 주어진 배열에서 중복된 요소를 제거한 새로운 배열을 반환하는 함수를 작성하세요.

// removeDuplicates(함수명) uniqueArr(배열을 저장할 변수) uniqueArr 배열

function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

let numbers = [1, 2, 3, 3, 4, 4, 5];
let result = removeDuplicates(numbers);

console.log(result);

// 주어진 객체 배열을 특정 속성을 기준으로 오름차순으로 정렬하는 함수를 작성하세요.

function sortByProperty(arr, property) {
  arr.sort(function (a, b) {
    return a[property] - b[property];
  });
  return arr;
}

let books = [
  { title: "The Great Gatsby", author: "F. Scott Firzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

let sortBooks = sortByProperty(books, "year");

console.log(sortBooks);

// 주어진 객체의 속성 값들의 평균을 계산하는 함수를 작성하세요. calculateAverage(obj)

function calculateAverage(obj) {
  let sum = 0;
  let count = 0;

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
      count++;
    }
  }
  return sum / count;
}

let data = {
  a: 10,
  b: 20,
  c: 30,
  d: "hello",
};

let result0 = calculateAverage(data);

console.log(result0);

// 주어진 객체의 숫자 속성들의 최댓값, 최솟값, 평균을 계산하는 함수를 작성하세요.

// calculateStatistics(obj)  values max  min sum average

function calculateStatistics(obj) {
  let values = Object.values(obj).filter((value) => typeof value === "number");
  let max = Math.max(...values);
  let min = Math.min(...values);
  let sum = values.reduce((acc, value) => acc + value, 0);
  let average = sum / values.length;

  return {
    max: max,
    min: min,
    average: average,
  };
}

let data2 = {
  a: 10,
  b: 20,

  c: 30,
  d: 40,
};

let result2 = calculateStatistics(data2);
console.log(result2);
