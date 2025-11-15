// 1. 1부터 5까지 출력하는 while문을 작성하세요.

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// 2. 배열 [3, 7, 1, 9]에서 최대값을 구하는 코드를 작성하세요.

let arr = [3, 7, 1, 9];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);

// 3. 배열 [4, 2, 8, 6]에서 최소값을 구하는 코드를 작성하세요.

let arr1 = [4, 2, 8, 6];
let ia = 1;
let min = arr1[0];

while (ia < arr1.length) {
  if (arr1[ia] < min) {
    min = arr1[ia];
  }
  ia++;
}

console.log(min);

// 4. 1부터 10까지 합을 구하는 while문을 작성하세요.

let ib = 1;
let sum = 0;

while (ib <= 10) {
  sum += ib;
  ib++;
}
console.log(sum);

// 5. 1부터 20까지 숫자 중 짝수만 출력하는 for문을 작성하세요.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 6. 부터 10까지 출력하다가 6에서 멈추도록 break문을 사용하세요.

for (let i = 1; i <= 10; i++) {
  if (i >= 6) {
    break;
  }
  console.log(i);
}

// 7. 1부터 10까지 중 5만 건너뛰고 출력하도록 continue문을 사용하세요.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// 8. 배열 {a:10, b:20, c:30}의 키를 for...in문으로 출력하세요.

let arr2 = {
  a: 10,
  b: 20,
  c: 30,
};

for (let i in arr2) {
  console.log(i);
}

// 9. 배열 {a:10, b:20, c:30}의 값을 for...in문으로 출력하세요.

let arr3 = {
  a: 10,
  b: 20,
  c: 30,
};

for (let i in arr3) {
  console.log(arr3[i]);
}

// 10. 배열 [10, 20, 30]을 for...of문으로 출력하세요.

let arr4 = [10, 20, 30];

for (let i of arr4) {
  console.log(i);
}

// 11. 배열 [2, 5, 7, 3]의 요소 합을 for...of문으로 구하세요.

let arr5 = [2, 5, 7, 3];
let sumA = 0;
for (let i of arr5) {
  sumA += i;
}
console.log(sumA);

// 12. 배열 [12, 25, 7, 19]에서 최소값과 최대값을 구하세요.

let arr6 = [12, 25, 7, 19];
let max0 = arr6[0];
let min0 = arr6[0];

for (let i = 1; i < arr6.length; i++) {
  if (arr6[i] > max0) {
    max0 = arr6[i];
  }
  if (arr6[i] < min0) {
    min0 = arr6[i];
  }
}
console.log(max0, min0);

// 13. 1부터 10까지 do...while문으로 출력하세요.

let a = 1;

do {
  console.log(a);
  a++;
} while (a <= 10);

// 14. 1부터 100까지 합을 do...while문으로 구하세요.

let c = 1;
let sum7 = 0;

do {
  sum7 += c;
  c++;
} while (c <= 100);

console.log(sum7);

// 15. 배열 [5, 10, 15]의 제곱값을 for문으로 출력하세요.

let arrC = [5, 10, 15];

for (let i = 0; i < arrC.length; i++) {
  console.log(arrC[i] * arrC[i]);
}

// 21. 1부터 10까지 홀수의 합을 for문으로 구하세요.

let sum8 = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    sum8 += i;
  }
}

console.log(sum8);

// 22. 배열 [7, 14, 21, 3]에서 10보다 큰 값만 출력하세요.

let arr10 = [7, 14, 21, 3];

for (let i of arr10) {
  if (i > 10) {
    console.log(i);
  }
}

// 23. 배열 [5, 2, 9, 1]에서 최소값을 while문으로 구하세요.

let iA = 1;
let arrD = [5, 2, 9, 1];
let minA = arrD[0];

while (iA < arrD.length) {
  if (arrD[iA] < minA) {
    minA = arrD[iA];
  }
  iA++;
}
console.log(minA);

// 24. 배열 [10, 20, 30, 40]에서 25 이상인 값만 출력하세요.

let arrG = [10, 20, 30, 40];

for (let i = 1; i < arrG.length; i++) {
  if (arrG[i] >= 25) {
    console.log(arrG[i]);
  }
}

// 25. 1부터 5까지 곱을 구하는 while문을 작성하세요.

let x = 1;
let product = 1;

while (x <= 5) {
  product *= x;
  x++;
}

console.log(product);

// 26. 1부터 50까지 수 중 7의 배수만 출력하세요.

for (let i = 0; i <= 50; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

// 27. 배열 [2, 4, 6, 8]을 do...while문으로 출력하세요.
let arrJ = [2, 4, 6, 8];
let iX = 0;

do {
  console.log(arrJ[iX]);
  iX++;
} while (iX < arrJ.length);

// 28. 1부터 100까지 짝수의 합을 for문으로 구하세요.
let sumE = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sumE += i;
  }
}

console.log(sumE);

// 29. 객체 {name:"Tom", age:20}의 키와 값을 함께 출력하세요.

let person = {
  name: "Tom",
  age: 20,
};

for (let i in person) {
  console.log(i, person[i]);
}
