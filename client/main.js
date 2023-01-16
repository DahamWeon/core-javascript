/* global gsap */
import { clearContents, getInputValue, getNode, getRandom, insertLast,isNumericString, showAlert, copy, addClass, removeClass } from './lib/index.js';
import { jujeobData } from "./data/data.js";

const submit = getNode('#submit');
const resultArea = getNode('.result');

function clickSubmitHandler(e){
  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];
  if(!name) {
    showAlert(".alert",'이름을 입력해주세요',2000);

    // GSAP
    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})

    // addClass(resultArea,'shake');
    // setTimeout(()=>{
    //   removeClass(resultArea,'shake');
    // },1000)
    return
  }

  if(isNumericString(name)){
    showAlert(".alert",'제대로 된 이름을 입력해주세요',2000);
    return
  }
  clearContents(resultArea);
  insertLast(resultArea,pick);

}

function clickCopyHandler(){
  let text = resultArea.textContent;
  // navigator.clipboard.writeText(text)
  copy(text).then(()=>{
    showAlert('.alert-success','클립보드에 복사가 완료됐습니다',2000);
  });

}

submit.addEventListener('click',clickSubmitHandler)
resultArea.addEventListener('click',clickCopyHandler);