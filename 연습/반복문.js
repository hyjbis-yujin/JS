const a = 10;
if (a > 0) {
  console.log("양수입니다.");
} else {
  console.log("음수입니다.");
}

const b = 0;
if (b == 0) {
  console.log("b가 0이면 0입니다.");
}

const c = 100;
if (c > 90) {
  console.log("90점 이상은 a 출력");
} else if (c > 80) {
  console.log("70점 이상은 b 출력");
} else if (c > 70) {
  console.log("60점 이상은 c 출력");
} else {
  console.log("나머지는 탈락");
}

/* 문제 1: 기본 조건문
let score = 85;를 선언하고, score가 90 이상이면 "A등급", 80 이상이면 "B등급", 그 외에는 "C등급"을 출력하는 조건문을 작성하세요.
 */

const score = 85;
if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else {
  console.log("C등급");
}

/* 문제 2: 논리 연산자 - and
let age = 16;와 let hasPermission = true;를 선언하고, age가 18 미만이고 hasPermission가 true일 때 "입장 가능"을 출력하는 조건문을 작성하세요. (&& 사용) 
*/

let age = 16;
let hasPermission = true;

if (age < 18 && hasPermission) {
  console.log("입장 가능");
}

/* ## 문제 3: 논리 연산자 - or
let isMember = false;와 let hasCoupon = true;를 선언하고, isMember가 true이거나 hasCoupon이 true일 때 "할인 적용"을 출력하는 조건문을 작성하세요. (|| 사용) */

let isMember = false;
let hasCoupon = true;

if (isMember || hasCoupon) {
  console.log("할인적용");
}

/* ## 문제 4: 논리 연산자 - not
let isClosed = false;를 선언하고, isClosed가 false일 때 "영업 중"을 출력하는 조건문을 작성하세요. (! 사용) */

let isClosed = false;

if (!isClosed) {
  console.log("영업 중");
}

/* ## 문제 5: 복합 논리 연산자

다음 문장을 분석해 올바른 논리식을 작성:

"18은 20보다 작고 짝수이다."

- a: 18은 짝수이다.
- b: 18은 20보다 작다.

정답 예시: a and b*/

/* ## 문제 6: 중첩 조건문
let temperature = 25;와 let isRaining = false;를 선언하고, temperature가 20 이상이고 isRaining이 false일 때 "외출하기 좋음"을 출력하는 조건문을 작성하세요. 단, temperature가 30 이상이면 "덥습니다"를 추가로 출력하세요. */

let temperature = 25;
let isRaining = false;

if (temperature >= 20 && !isRaining) {
  console.log("외출하기 좋음");

  if (temperature >= 30) {
    console.log("덥습니다");
  }
}

/* ## 문제 7: 논리 연산자 분석

다음 문장을 분석해 올바른 논리식을 작성:

"5는 10보다 크거나 홀수이다."

- a: 5는 홀수이다.
- b: 5는 10보다 크다.

정답 예시: a and b */

/* ## 문제 8: 조건문과 비교 연산자
let number = 42;를 선언하고, number가 50보다 작고 3의 배수가 아닌 경우 "조건 만족"을 출력하는 조건문을 작성하세요. (%와 && 사용) */

let numberr = 42;

if (numberr < 50 && numberr % 3 === 0) {
  console.log("조건 만족");
}

/* ## 문제 10: 조건문과 문자열 비교
let day = "일요일";를 선언하고, day가 "토요일"이거나 "일요일"일 때 "주말입니다"를 출력하는 조건문을 작성하세요. (===와 || 사용) */

let day = "월요일";

if (day === "일요일" || day === "토요일") {
  console.log("주말입니다");
}
