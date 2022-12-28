/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> '2022'
const YEAR = 2022;

console.log(typeof String(YEAR));

// undefined -> 'undefined'
// null -> 'null'

console.log(String(undefined));
let days = null;
console.log(String(days));

// boolean -> 'true' or 'false'
let isKind = true;
console.log(isKind + '');



/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean -> true: 1, false: 0
let cutie = true;
console.log(+cutie);

// string
let num = '  123'; // 공백 제거하고 숫자만 출력
console.log(num/1);

// numeric string
let width = '320px';
console.log(parseInt(width,10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(2022));
console.log(!! "0");