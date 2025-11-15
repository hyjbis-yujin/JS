const result = (10, 20);
console.log(result);

// 함수에 전달하는 데이터를 인수라고함
// 함수를 호출할 때 함수명옆()안에 인수를 넣으면 됨 콤마' , '로 구분
// 모든 자료형 데이터를 사용할 수 있음
// 매개변수명이랑 인수랑 갯수가 동일해야
// 호출이 됨 갯수가 부족하면 undefined가 할당되어서 호출이 안됨
// return문을 사용하면 그 즉시 함수가 종료된다
// 변수안에 있는 객체 key(이름)안에 함수를 선언하면 그걸 메소드라고 함
// 키값안에 함수를 선언하면 그 데이터를 메소드라고 함
// (객체명)에 (키값)메소드를 호출한다라고 말함
// 화살표 함수는 this키워드를 사용할 수 없다
// 화살표함수는 함수명을 지우고 소괄호와 중괄호 사이에 () => {}
// 화살표를 집어넣으면 됨
// 함수외부영역은 '전역 스코프' 함수내부영역은 '지역 스코프'

/* while문 */

while (condition /* 조건식(표현식, 값) */) {
  // code
}

let num = 1;
while (
  num < 10 /* num = 1 이 10보다 작다라는 조건이 거짓이 될 때까지 실행된다*/
) {
  console.log(num);
  num++ /* 무한반복문이 되지 않게 주의해야함 증감식은 num = 1에 +1을 해줘서 10보다 크다에 가까워질 수 있도록 해줌 그럼 식의 조건이 10보다 작다가 조건이기때문에 9에서 멈추게 됨 */;
}

/* do while문*/

do {
  // code
} while (
  condition
); /* while문과 차이점은 참과 거짓 유무 상관없이 무조건 한 번은 실행됨 */

let num0 = 1;
do {
  console.log(num0);
  num0++;
} while (num0 < 10);

// while문에 있는 조건식이 거짓이라도 do에 있는 건 한번은 출력된다 트루일경우 무한반복문이 될 수 있음

/* for문 */

for (초기값; 조건식; 증감문) {
  // code
}

// 초기값을 검토 후 조건식으로 넘어가서 참과 거짓을 판별하고 참이면 증감문으로 거짓이면 반복문이 종료
// 조건식이 거짓일 때 까지 증감문 <> 조건식이 반복된다

for (let i = 0; i < 5; i++) {
  console.log("i는 ${i}");
}

for (변수 in 데이터 /* 배열, 객체 */) {
  //code
  //배열 > 인덱스(숫자) / 객체 > key
}

const arr = [10, 20, 30];
for (let index in arr) {
  console.log(index);
}

//index는 배열 갯수를 알려줌 배열 갯수는 0, 1, 2 배열안에 숫자를 알고 싶으면 console.log(arr(변수명)[index]
//객체에 접근하는 방법도 동일함

for (변수 of 데이터 /* 배열 */) {
}
for (let value in arr) {
  console.log(value);
}

//for in문은  console.log(arr(변수명)[index] 이렇게 배열 접근했지만 for of문은 배열에 있는 숫자에 바로 접근 할 수 있음

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

// * 함수명이 없으면 익명함수라고 부름
 */

function sum(num1, num2) {
  const result = num1 + num2;
  console.log(result);
  return result;
}

const result = sum(10, 20);
console.log(result);
