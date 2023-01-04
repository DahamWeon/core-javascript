/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

let arr = [1,2,3,4];
function sum(...args) {
  console.log(args);
}
// rest parameter
const calculateTotal = (...args) => {   //...args로 하면 모든 값을 받음
  let total = 0;
  args.forEach(function(item,index){
    total += item
  })
  console.log();

  return;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a+b+c+d;



// 화살표 함수와 this
function normalFunction() {
  console.log('일반 함수', this);
}
const arrowFunction = () => {
  console.log('화살표 함수', this);   //화살표 함수는 this를 바인딩 하지 않음
}

// normalFunction();
// arrowFunction();
// 객체의 method로 함수를 슬행할 경우에는 일반 함수로 실행해야 this가 객체를 찾음
// method 안에서 this를 찾기 위해서는 arrowFunction이 오히려 좋음(부모만 찾기 때문)
const user = {
  name:'함',
  age:25,
  address: '평택시 동삭동',
  grades: [90,80,100],
  totalGrades: function () => {   // 그래서 객체 안에서의 method는 일반 함수가 더 좋음
    // let total = 0;
    // this.grades.forEach(function(item) {
    //   total += item
    // })
    // return total
    function foo() {
      console.log('foo:', this);
    }
    const bar = () => {
      console.log('bar:', this);
    }
    foo.call(user)   // user
    bar()   // user object
  }
}

console.log(user.totalGrades());

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for(let i = 0; i < powerCount; i++) {
    result *= numeric
  }
  return result;
}; 

let powExpression = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc=>acc * numeric,1)


// pow(2,53)   // 2의53제곱 값이 나올 수 있게(단, 거듭제곱연산자 X)
// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for(let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(null.reduce(acc)=>acc+text,'')

// repeat('hi',3)  // 'hihihi' 반복되게 만들기