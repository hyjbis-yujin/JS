/* 초급 */

//문제 1  for 문을 사용해 1부터 10까지의 숫자를 콘솔에 하나씩 출력하세요.
for (let i = 1; i <= 10; ++i) {
  console.log(i);
}

//문제 2 for 문을 사용해 1부터 20까지의 짝수만 콘솔에 출력하세요.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 문제 3 for 문을 사용해 15부터 1까지 거꾸로 숫자를 콘솔에 출력하세요.

for (let i = 15; i >= 1; i--) {
  console.log(i);
}

// 문제 4  for 문을 사용해 1부터 12까지의 홀수만 콘솔에 출력하세요.

for (let i = 1; i <= 12; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 문제 5 while 문을 사용해 1부터 15까지의 숫자를 콘솔에 출력하세요.

let num = 1;

while (num <= 15) {
  console.log(num);
  num++;
}

// 문제 6 for 문을 사용해 10부터 100까지 10의 배수만 콘솔에 출력하세요.

for (let i = 10; i <= 100; ++i) {
  if (i % 10 === 0) {
    console.log(i);
  }
}

// 문제 7  while 문을 사용해 25부터 5까지 거꾸로 숫자를 콘솔에 출력하세요.

let num1 = 25;

while (num1 >= 5) {
  console.log(num1);
  num1--;
}

// 문제 8  for 문을 사용해 1부터 50까지의 숫자 중 4의 배수만 콘솔에 출력하세요.

for (let a = 1; a <= 50; ++a) {
  if (a % 4 === 0) {
    console.log(a);
  }
}

// 문제 9 while 문을 사용해 1부터 30까지의 숫자 중 6의 배수를 출력하세요.

let b = 1;

while (b <= 30) {
  if (b % 6 === 0) {
    console.log(b);
  }
  b++;
}

// 문제 10  for 문을 사용해 1부터 40까지의 숫자 중 8의 배수를 출력하세요.

for (let c = 1; c <= 40; c++) {
  if (c % 8 === 0) {
    console.log(c);
  }
}

/* 중급 */

// 문제 1  for 문을 사용해 1부터 50까지의 숫자 중 7로 나누어 떨어지는 숫자를 출력하세요.

for (let d = 1; d <= 50; d++) {
  if (d % 7 === 0) {
    console.log(d);
  }
}

// 문제 2   while 문을 사용해 1부터 60까지의 숫자 중 3과 5의 공배수를 출력하세요.

let e = 1;

while (e <= 60) {
  if (e % 3 === 0 && e % 5 === 0) {
    console.log(e);
  }
  e++;
}

//  문제 3 for 문을 사용해 1부터 25까지의 숫자 중 2와 3으로 나누어 떨어지지 않는 숫자를 출력하세요.

for (let f = 1; f <= 25; f++) {
  if (f % 2 !== 0 && f % 3 !== 0) {
    console.log(f);
  }
}

//  문제 4 while 문을 사용해 1부터 100까지의 숫자 중 9로 끝나는 숫자(예: 9, 19, 29)를 출력하세요.

let g = 1;

while (g <= 100) {
  if (g % 10 === 9) {
    console.log(g);
  }
  g++;
}

//  문제 5 for 문을 사용해 1부터 15까지의 숫자의 합을 계산하고 출력하세요.

let sum = 0;

for (let j = 1; j <= 15; j++) {
  sum += j;
}

console.log(sum);

// 문제 6  while 문을 사용해 1부터 20까지의 홀수의 합을 계산하고 출력하세요.

let k = 1;
let sum0 = 0;

while (k <= 20) {
  if (k % 2 !== 0) {
    sum0 += k;
  }
  k++;
}
console.log(sum0);

// 문제 7 for 문을 사용해 1부터 30까지의 숫자 중 6의 배수이면서 12의 배수가 아닌 숫자를 출력하세요.

for (let l = 1; l <= 30; l++) {
  if (l % 6 === 0 && l % 12 !== 0) {
    console.log(l);
  }
}

// 문제 8 while 문을 사용해 1부터 100까지의 숫자 중 5로 시작하는 숫자(예: 5, 50~59)를 출력하세요.

let n = 1;
while (n <= 100) {
  if (Math.floor(n / 10) === 5 || n === 5) {
    console.log(n);
  }
  n++;
}

// 문제 9 for 문을 사용해 1부터 50까지의 숫자 중 7로 나누어 떨어지는 숫자의 개수를 세어 출력하세요.

let count = 0;

for (let k = 1; k <= 50; k++) {
  if (k % 7 === 0) {
    count++;
  }
}
console.log(count);

//문제 10  while 문을 사용해 1부터 40까지의 숫자 중 짝수이면서 5의 배수인 숫자를 출력하세요.

let o = 1;

while (o <= 40) {
  if (o % 2 === 0 && o % 5 === 0) {
    console.log(o);
  }
  o++;
}

/* 고급 */

// 문제 1  for 문을 사용해 1부터 100까지의 숫자 중 3의 배수와 5의 배수의 합을 계산하고 출력하세요.

let sum3 = 0;

for (let p = 1; p <= 100; p++) {
  if (p % 3 === 0 || p % 5 === 0) {
    sum3 += p;
  }
}
console.log(sum3);

// 문제 2 while 문을 사용해 1부터 20까지의 짝수의 곱을 계산하고 출력하세요.

let num3 = 1;
let product = 1;

while (num3 <= 20) {
  if (num3 % 2 === 0) {
    product *= num3;
  }
  num3++;
}
console.log(product);

// 문제 3 for 문을 사용해 1부터 30까지의 숫자 중 홀수의 제곱의 합을 계산하고 출력하세요. 답이 틀림

let num4 = 0;

for (let q = 1; q <= 30; q++) {
  if (q % 2 !== 0) {
    num4 += q * q;
  }
}
console.log(num4);

// 문제 4 while 문을 사용해 1부터 50까지의 숫자 중 9의 배수의 합을 계산하고 출력하세요. 답이 틀림

let s = 1;
let num5 = 0;

while (s <= 50) {
  if (s % 9 === 0) {
    num5 += s;
  }
  s++;
}

console.log(num5);

// 문제 5 for 문을 사용해 1부터 40까지의 숫자 중 4의 배수이면서 8의 배수가 아닌 숫자의 개수를 세어 출력하세요.

let count1 = 0;

for (let r = 1; r <= 40; r++) {
  if (r % 4 === 0 && r % 8 !== 0) {
    count1++;
  }
}
console.log(count1);

// 문제 6 while 문을 사용해 100부터 1까지의 숫자 중 6의 배수의 합을 계산하고 출력하세요.

let y = 100;
let sum5 = 0;

while (y >= 1) {
  if (y % 6 === 0) {
    sum5 += y;
  }
  y--;
}
console.log(sum5);

// 문제 7 for 문을 사용해 주어진 배열 [10, 20, 30, 40, 50]의 요소 합을 계산하고 출력하세요.

let sum6 = 0;
let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
  sum6 += arr[i];
}

console.log(sum6);

// 문제 8 while 문을 사용해 주어진 배열 [5, 12, 8, 21, 3]에서 최대값을 찾아 출력하세요.

let i = 1;
let arr1 = [5, 12, 8, 21, 3];
let max = arr1[0];

while (i < arr1.length) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
  i++;
}
console.log(max);

// 문제 9 for 문을 사용해 주어진 배열 [1, 3, 5, 7, 9]의 각 요소를 제곱한 결과를 콘솔에 출력하세요.

let arr2 = [1, 3, 5, 7, 9];
let max0 = 0;

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i] * arr2[i]);
}

// 문제 10 while 문을 사용해 주어진 배열 [15, 22, 8, 37, 4]에서 10보다 큰 숫자의 개수를 세어 출력하세요.

let arr3 = [15, 22, 8, 37, 4];
let i0 = 0;
let count0 = 0;

while (i0 < arr3.length) {
  if (arr3[i0] > 10) {
    count0++;
  }
  i0++;
}
console.log(count0);
