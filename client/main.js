
import { insertLast,tiger,delayP, getNode, renderUserCard } from "./lib/index.js";

// rendingUserList
// ajax get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

// 1. userList.js로 간다
// 2. renderUserCard 함수 만든다
// 3. 만들어진 함수 안에 createUserCard를 던진다
// 4. renderUserCard 함수를 사용했을 때 랜더링이 잘 되게 한다

const userCardContainer = getNode('.user-card-inner');
async function rendingUserList(){
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users');
  let userData = response.data;
  userData.forEach(data => renderUserCard(userCardContainer,data))
}

rendingUserList();



/*
async function render(){
  await delayP(2000)
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users/1')
  console.log(response.data);
}
render()
*/
/*
xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1')
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})
*/
/*
xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res)=>{
    insertLast('body',JSON.stringify(res))
  },
  (err)=>{
    insertLast('body','데이터 로딩에 실패했습니다')
  }
)
*/