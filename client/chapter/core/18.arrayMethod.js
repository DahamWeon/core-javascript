/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10,100,1000,10000]
Array.isArray([])

function isArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}

function isNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}
/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {}

arr.forEach(function(item,index){
  // user[0] = 10
  this[index] = item
},user)


const span = document.querySelectorAll('span');

span.forEach((item,index)=>{
  item.addEventListener('click',(e)=>{
    console.log(e.target.style.background = 'orange');
    // console.log(index);
  })
})

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse()

// splice
arr.splice(1,0,23,5)  //1번째부터, 제거는 0개, 추가할 수는 23, 5
// console.log(arr);
// sort

// 반환 값 < 0: a가 b보다 앞에 있어야 함
// 반환 값 = 0: a와 b의 순서를 바꾸지 않음
// 반환 값 > 0: b가 a보다 앞에 있어야 함
arr.sort((a,b)=>{
  return a-b;
})
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo = ['밥','오후수업','레슨'];

let template = todo.map((todoList)=>{
  return /*html*/ `<li>${todoList}</li>`
})

template.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item)
})

// console.log(template);
let newArray = arr.map(item => item * 2 )
// console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// console.log(arr.indexOf(8));

// lastIndexOf
// includes
// console.log(arr.includes(99))

/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]
// find: 한 번 비교해서 true이면 그 값 리턴하고 끝냄
const find = users.find((item,index)=>{
  return item.id < 5
})
console.log(find)

// findIndex
const findIndex = users.findIndex((item)=>{
  return item.id < 3
})
console.log(findIndex)
/* 요소 걸러내기 ----------------------------------------------------------- */

// filter: 다 찾아서 찾은 요소를 배열로 넣어줌
let result = arr.filter((number)=>{
  return number > 100
})
console.log(result)
/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
const friends = [
  {
    name: '권피치',
    age: 19,
    job: '십',
  },
  {
    name: '고피치',
    age: 19,
    job: '란',
  },
  {
    name: '이원석',
    age: 25,
    job: '데',
  }
];
// reduce
// friends age의 합계
let age = friends.reduce((acc,cur)=>{
  return acc+cur.age
},0)

let template2 = todo.reduce((acc,cur)=>{
  return /* html */ acc+`<li>할일: ${cur}</li>`
},'')
// console.log(template2);
console.log(age);
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */
let str='권 피 치 고 피 치';
// split: 문자 -> 배열
let nameArray = str.split('');
console.log(nameArray);

// join: 배열->문자
console.log(nameArray.toLocaleString('/'));