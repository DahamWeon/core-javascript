/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */
/* 
let number = prompt('숫자를 입력해주세요', 0);

if(number>0) {
  console.log('1');
} else if(number < 0) {
  console.log('-1');
} else {
  console.log('아무것도 아님');
}
*/
/* 
let message =
(number > 0) ? '1':
(number < 0) ? '-1':
'아무것도 아님';
console.log(message);
*/
// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';


// if 문(statement)
if (didWatchMovie === 'yes') {
  console.log('ㅇㅋ');
} else if(goingToWatchMovie === 'yes') {
  console.log('아하');
} else {
  console.log('그렇구나');
}

let movieMessage = (didWatchMovie.includes('yes')) ? 'ㅇㅋ' : (goingToWatchMovie === 'yes') ? '아하' : '그렇구나';

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식