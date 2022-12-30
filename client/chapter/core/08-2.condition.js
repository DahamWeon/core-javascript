/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 24;
if(age>=14 && age<=90) {
  console.log('Yes!!');
} else {
  console.log('Noooo....');
}




let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsFalsy: true };

// 로그인 구현
let userName = prompt('사용자 이름을 입력해주세요');

if(userName?.toLowerCase() === 'admin') {
  let pw = prompt('비밀번호를 입력해주세요');

  if(pw?.toLowerCase() === 'themaster') {
    console.log('Welcome');
  }else {
    console.log('Canceled');
  }
} else if(userName.replace(/\s*/g,'') === ' ' || userName === null) {
  console.log('Canceled');
} else {
  console.log('Idk');
}




