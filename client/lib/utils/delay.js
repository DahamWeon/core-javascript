import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode('.first');

function delay(callback,timeout=1000){
  setTimeout(callback,timeout);
}

delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    first.style.transform = 'rotate(360deg)';
    delay(()=>{

      first.style.top = '0px';
    })  
  })
})

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다'
}

export function delayP(options = {}){
  let config = {...defaultOptions};
  if(isNumber(options)){
    config.timeout = options;
  }
  // 객체 합성 mixin: 함수를 전달할 때 새로운 값을 던지면 그걸로 대체가 되어야 함 그래서 기존 값과 내가 옵션으로 전달한 값을 섞는 것
  if(isObject(options)){
    config = {...config, ...options};   // 앞에 뒤에 있는 것이 씌워짐
  }

  const {shouldReject,data,errorMessage,timeout} = config;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    },timeout);
  })
}


// delayP()를 했을 때 반환되는 것이 promise 그렇기 때문에 .then을 사용할 수 있음
// delayP(3000).then((res)=>{
//   console.log(res)  // 진짜 성공
// })

// delayP()
// .then(res => console.log(res))
// .catch(err => console.log(err))


// async & await
// async: 일반 함수를 Promise를 반환하는 함수로 만든다.
// await: 1. Promise가 반환하는 result 를 가져오기.
//        2. 코드 실행 흐름 제어
async function delayA() {
  return '완료'
}
let result = await delayA()
console.log(result);  // '완료'가 출력됨

/*
async function lamen(){
  try{
    await delayP()
    console.log('계란 넣기');
    throw new Error('계란 껍질이 들어감..!');
    await delayP()
    console.log('그릇에 담기');

  }catch(err){
    console.log(err);
  }
}
*/