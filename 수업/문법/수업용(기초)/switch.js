const area = "강남구";

switch (area) {
  case "중랑구":
    console.log("서울");
    break;
}
switch (area) {
  case "마포구":
    console.log("서울");
    break;
}
switch (area) {
  case "강남구":
    console.log("서울");
    break;
}
switch (area) {
  case "강동구":
    console.log("서울");
    break;
  default:
    console.log("서울외 지역");
    break;
}

const studentScore = 70;
let studentGrade;

switch (studentScore) {
  case 100:
  case 90:
    studentGrade = "A";
    break;
  case 80:
  case 70:
    studentGrade = "B";
    break;
  case 60:
  case 50:
    studentGrade = "C";
    break;
  case 40:
  case 30:
    studentGrade = "D";
    break;
  default:
    studentGrade = "F";
    break;
}

console.log(`학생의 최종 학점은 ${studentGrade} 학점입니다.`);
