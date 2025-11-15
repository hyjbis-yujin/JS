// 문제 1
let arr = [1, 3, 5, 7, 9];

for (let a of arr) {
  console.log(a * a);
}

// 문제 2

let arr1 = [6, 14, 2, 18, 9];
let max = arr1[0];
let min = arr1[0];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
  if (arr1[i] < min) {
    min = arr1[i];
  }
}

console.log("최대값:", max);
console.log("최소값:", min);

// 문제3

let arr2 = [4, 7, 10, 13, 16];
let sum = 0;

for (let b in arr2) {
  sum += arr2[b];
}
console.log(sum);

// 문제 4

let arr3 = [2, 4, 6, 8, 10];

for (let c of arr3) {
  if (c % 2 === 0) {
    console.log(c);
  }
}

// 문제 5

let arr4 = [5, 12, 8, 130, 44];

for (let d in arr4) {
  if (arr4[d] > 10) {
    console.log(arr4[d]);
  }
}

// 문제 6

let e = 1;

do {
  console.log(e);
  e++;
} while (e <= 10);

// 문제 7

let f = 1;
sumA = 0;

while (f <= 100) {
  sumA += f;
  f++;
}

console.log(sumA);

// 문제 8

for (let g = 1; g <= 20; g++) {
  if (g % 5 !== 0) {
    continue;
  }
  console.log(g);
}

// 문제 9

for (let i = 1; i <= 100; i++) {
  if (i > 50) {
    break;
  }
  console.log(i);
}

// 문제 10

let arr5 = [3, 6, 9];
let j = 0;
let sumB = 0;

while (j < arr5.length) {
  sumB += arr5[j];
  j++;
}
console.log("평균 :", sumB / arr5.length);

/* 최소값 & 최대값 구하기 문제 */

// 문제 1

let arr6 = [3, 7, 2, 9, 5];
let max0 = arr[0];

for (let k = 0; k < arr6.length; k++) {
  if (arr[k] > max0) {
    max0 = arr[k];
  }
}

console.log("최대값:", max0);

// 문제 2

let arr7 = [15, 4, 8, 22, 6];
let min0 = arr7[0];
let l = 0;

while (l < arr7.length) {
  if (arr7[l] < min0) {
    min0 = arr7[l];
  }
  l++;
}

console.log("최소값:", min0);

// 문제 3

let arr8 = [10, 25, 30, 5, 18];
let max1 = arr8[0];
let min1 = arr8[0];

for (let n = 0; n < arr8.length; n++) {
  if (arr8[n] > max1) {
    max1 = arr8[n];
  }
  if (arr8[n] < min1) {
    min1 = arr8[n];
  }
}

console.log("최대값:", max1);
console.log("최소값:", min1);

// 문제 4

let arr9 = [40, 12, 28, 7, 19];
let max2 = arr9[0];
let min2 = arr9[0];

for (let o = 0; o < arr9.length; o++) {
  if (arr9[o] > max2) {
    max2 = arr9[o];
  }
  if (arr9[o] < min2) {
    min2 = arr9[o];
  }
}

console.log(max2 - min2);

// 문제 5

let arrA = [100, 55, 77, 32, 120];
let max3 = arrA[0];
let min3 = arrA[0];
let sumC = 0;

for (let p = 0; p < arrA.length; p++) {
  sumC += arrA[p];
  if (arrA[p] > max3) {
    max3 = arrA[p];
  }
  if (arrA[p] < min3) {
    min3 = arrA[p];
  }
}

console.log("최대값:", max3);
console.log("최소값:", min3);
console.log(sumC);

// 문제 6

let arrB = {
  name: "Tom",
  age: 20,
  city: "Seoul",
};

for (let a in arrB) {
  console.log(a);
}

// 문제 7

let arrC = {
  apple: 3,
  banana: 5,
  orange: 2,
};

for (let a in arrC) {
  console.log(arrC[a]);
}

// 문제 8

let arrD = [2, 4, 6, 8, 10];

for (let a of arrD) {
  console.log(a);
}

// 문제 9

let str = "Hello";

for (let a of str) {
  console.log(a);
}

// 문제 10

let arrE = [7, 14, 21];
let sumD = 0;

for (let a of arrE) {
  sumD += a;
}
console.log(sumD);

/* do while 문제 */

// 문제 11

let q = 1;

do {
  console.log(q);
  q++;
} while (q <= 5);

// 문제 12

let y = 1;

do {
  y++;
} while (y <= 20);

console.log("합계:", y);

// 문제 13

let s = 1;

do {
  if (s % 2 === 0) {
    console.log(s);
  }
  s++;
} while (s <= 10);

// 문제 14

let aA = 5;

do {
  console.log(aA);
  aA--;
} while (aA >= 1);

// 문제 15

let arrF = [3, 6, 9];
let aB = 0;

do {
  console.log(arrF[aB] * arrF[aB]);
  aB++;
} while (aB < arrF.length);

// 문제 16

for (let i = 1; i < 10; i++) {
  if (i > 5) {
    break;
  }
  console.log(i);
}

// 문제 17

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// 문제 18

let arrG = [2, 4, 6, 7, 8];

for (let i = 0; i < arrG.length; i++) {
  if (arrG[i] % 2 !== 0) {
    break;
  }
  console.log(arrG[i]);
}

// 문제 19

let arrJ = [1, 3, 5, 7, 9];

for (let i = 0; i < arrJ.length; i++) {
  if (arrJ[i] === 5) {
    continue;
  }
  console.log(arrJ[i]);
}

// 문제 20

let bA = 1;

while (bA <= 20) {
  if (bA > 10) {
    break;
  }
  console.log(bA);
  bA++;
}

// 문제 21

function add(a, b) {
  return a + b;
}
let result = add(3, 7);
console.log(result);

// 문제 22

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "짝수";
  }
  if (num % 2 !== 0) {
    return "홀수";
  }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));

// 문제 23

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

let number = [1, 2, 3, 4];
let total = sumArray(number);
console.log(total);

// 문제 24

function square(n) {
  return n * n;
}

console.log(square(5));
console.log(square(10));

// 문제 25

function getLength(txt) {
  return txt.length;
}

let str1 = "Hello";
let txt = getLength(str1);
console.log(txt);

// 문제 26

let add0 = (a, b) => a + b;

console.log(add0(5, 7));

/* // 함수선언문

function 함수명() {
  //code
}

변수명();

호출 = 실행;

// 함수표현식

const 변수명 = function 함수명() {
  // code
};

변수명();
*/
