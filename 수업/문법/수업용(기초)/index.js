for (let i = 1; i < 10; i++) {
  for (let k = 0; k < 10; k++) {
    for (let j = 0; j < 10; j++) {
      let sum = Math.pow(i, 3) + Math.pow(k, 3) + Math.pow(j, 3);
      let currentNumber = i * 100 + k * 10 + j * 1;

      if (sum === currentNumber) {
        console.log(currentNumber);
      }
    }
  }
}

// if는 참일때만 결과를 반환함
// if(10<20){
// console.log('10은 20보다 작다')
//} 참이므로 console을 반환한다
// if문(만약~일때) 참이 아니면 결과를 도출하지 않음
// else if(만약 ~ 아니면) 역시 참이 아니면 결과를 도출하지 않지만 여러가지 조건을 걸때 else if문을 사용함
// const tall = 187;
// if(조건문이 거짓일 경우){console.log(~)}
// else if(조건문이 참일 경우){console.log(~)} => 조건문이 참이면 판단이 종료되며 결과를 반환한다
// 몇개의 else if문이 있어도 중간에 참이 있으면 그 즉시 첫번 쨰의 참인 조건문에서 판단이 종료되며//
// 첫번째의 참의 결과 값만 도출한다
// 여기서 말하는 if에 들어가는 조건문은 참과 거짓 증감 비교 모두 포함 됨
// else문(앞에 조건문이 모두 거짓일 경우에 실행) if, else if에서 가장 마지막에 사용되어야하며 한번만 사용
// else문은 표현식이나 값을 적을 필요가 없다 '앞에 조건문이 모두 거짓일 때'가 조건이기 때문에
// if > if else(조건문이 여러개 일 때) > else(한번만 사용) 순으로 작성
// const 변수명 = '(찾아야할 조건)';
// switch(변수명){
//     case '1':
//         console.log('숫자')
//     break(멈추다);
//     case '2':
//         console.log('숫자')
//     break(멈추다);
//     case '3':
//         console.log('숫자')
//     break(멈추다);
//     default(찾는 조건이 없으면 기본 값):
//         console.log('문자')
//     break(멈추다);
// }

// const 변수명 = '(1)';
// switch(변수명){
//     case '1':
//     case '2':
//     case '3':
//         console.log('숫자') => 출력할 문구가 같으면 이렇게 작성
//     break(멈추다);
//     default(찾는 조건이 없으면 기본 값):
//         console.log('문자')
//     break(멈추다);
// }
