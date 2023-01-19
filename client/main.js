/* global gsap */
import { insertLast, tiger, delayP, getNode as $, renderUserCard, changeColor, renderSpinner, renderEmptyCard, attr } from "./lib/index.js";

// rendingUserList
// ajax get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

// 1. userList.js로 간다
// 2. renderUserCard 함수 만든다
// 3. 만들어진 함수 안에 createUserCard를 던진다
// 4. renderUserCard 함수를 사용했을 때 랜더링이 잘 되게 한다

const userCardContainer = $('.user-card-inner');
async function rendingUserList(){
  renderSpinner(userCardContainer);
  
  try{
    await delayP(2000)
    $('.loadingSpinner').remove();
    let response = await tiger.get('http://localhost:3000/users');
    let userData = response.data;
    userData.forEach(data => renderUserCard(userCardContainer,data))
    
    changeColor('.user-card')
    gsap.to(gsap.utils.toArray('.user-card'),{
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2    // stagger: 시차를 주다
    })
  }catch(err){
    renderEmptyCard(userCardContainer);
  }
}

rendingUserList();

// 삭제 버튼을 클릭하면 콘솔 창에 '삭제' 글자가 출력될 수 있도록 만들기
// hint: 이벤트 위임했을 때 누른 대상 찾기 e.target,e.currentTarget
function handler(e){
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article')
  if(!deleteButton || !article) return;
  let id = attr(article,'data-index').slice(5);
  tiger.delete(`http://localhost:3000/users/${id}`).then(()=>{
    userCardContainer.innerHTML = '';
    rendingUserList();
  })
}
userCardContainer.addEventListener('click',handler)




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