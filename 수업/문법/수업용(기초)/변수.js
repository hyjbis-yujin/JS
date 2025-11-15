const str1 = "코딩 공부는 역시 '수코딩' ";
console.log(str1);

const str2 = '오늘 점심은 "순대국" 어때? ';
console.log(str2);

const str3 = `'알고있다'와 \"가르친다\"의 차이"`;
console.log(str3);

const level = 99;
const exp = 20.12;

console.log("나의 게임 레벨은 " + level + "레벨입니다.");
console.log("현재 경험치는 " + exp + "% 입니다.");

// 문자열은 "", '' 사용 숫자형은 "", '' 안씀

/* 배열 */
const arr = ["복숭아", "멜론", "애플망고", "키위", "딸기"];
console.log(arr[3]);

/* 객체 */
const obj = {
  name: "철수" /* 속성*/,
  age: 30,
  /* key:value */
};
console.log(obj["name"]);
console.log(obj.age);

/* 함수 */
function number() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
}

number();

/* 함수표현식 */
const num = function ber() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
};

num();

function gugudan() {
  console.log("3 * 1 = 3");
  console.log("3 * 2 = 6");
  console.log("3 * 3 = 9");
  console.log("3 * 4 = 12");
  console.log("3 * 5 = 15");
  console.log("3 * 6 = 18");
  console.log("3 * 7 = 21");
  console.log("3 * 8 = 24");
  console.log("3 * 9 = 37");
}
gugudan();

/* 1 */
let num1 = 10;
let num2 = 20;

console.log(num1 > num2);
num1 += 10;
console.log(num1 === num2);

/* 2 */
const tall = 178 / 10;
const kg = 84;

const bmi = kg / (tall * tall);
console.log(`철수의 체질량 지수는 ${bmi}입니다.`);

const studentScore = 50;
let studentGrade;

if (studentScore >= 90) {
  studentGrade = "A";
} else if (studentScore >= 80 && studentScore < 90) {
  studentGrade = "B";
} else if (studentScore >= 70 && studentScore < 80) {
  studentGrade = "C";
} else if (studentScore >= 60 && studentScore < 70) {
  studentGrade = "D";
} else {
  studentGrade = "F";
}
console.log(`학생의 최종 학점은 ${studentGrade} 학점입니다.`);

//&& 하나라도 거짓이면 종료 ||하나라도 참이면 종료
5 % 2 !== 0 || 5 > 10;
