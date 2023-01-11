/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');
/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(first.className);
// first.classList.add('hello')
// first.classList.remove('hello')
// console.log(first.classList.contains('hello'));


/*
addClass('.first','hello')  // <span class="first hello">hello</span>
removeClass('.first','hello')
*/

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.background = 'red';

// console.log(first.style.fontSize);

/* 계산된 스타일 읽기 ------------------------------------------------------- */

let size = getComputedStyle(first).fontSize;

console.log(size);

// 자바스크립트에서 객체의 key, value 값을 변수로 받기 위해서는 [] 사용

// console.log(getCss('.first','font-size'));
// getCss('.first','font-size')
setCss('.first','color','blue')
// - getComputedStyle(element, [pseudoElement]) `읽기 전용`