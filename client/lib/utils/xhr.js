// readyState
// 0: uninitalized(초기화)
// 1: loading(로딩)
// 2: loaded(로딩 완료) 보통 이 시점부터 출력
// 3: interative(인터렉티브)
// 4: complete(완료)

// xhrData 함수 만들기
export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}){
  // const{url,method,body} = options;

  const xhr = new XMLHttpRequest();
  // console.log(xhr);
  // 비동기 통신 오픈
  xhr.open(method,url);
  
  // Object.entries(headers).forEach(([key,value])=>{
  //   xhr.setRequestHeader(key,value);  // header를 rwquest할 때 set하는 역할
  // });

  // readystatechange 값이 변경될 때마다 xhr.addEventListener 호출 됨
  xhr.addEventListener('readystatechange',()=>{
    const{status,readyState,response} = xhr;  // 객체 구조분해 할당
    if(status >= 200 && status < 400){
      if(readyState === 4){
        console.log('통신 성공');
        onSuccess(JSON.parse(response));
      }
    } else{
      onFail('통신 실패')
      // console.error('통신 실패');
      }
    })

    // 서버에 요청
    xhr.send(JSON.stringify(body));
}

/*
xhrData({
  url:'https://jsonplaceholder.typicode.com/users/1',
  onSucess: (result)=>{
    console.log(result);
  },
  onFail: (err)=>{
    console.error(err);
  }
})
*/
// 함수는 object 

// xhrData에 get이라는 method를 추가하는
xhrData.get = (url,onSuccess,onFail) => {
  // xhrData 실행
  xhrData({
    // method 넣지 않은 이유: 기본 값으로 'GET'을 입력했기 때문
    url,
    onSuccess,
    onFail
  })
}

xhrData.post = (url,body,onSuccess,onFail) => {
  // xhrData 실행
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.put = (url,body,onSuccess,onFail) => {
  // xhrData 실행
  xhrData({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url,onSuccess,onFail) => {
  // xhrData 실행
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}
/*
xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)
*/
/*
xhrData('POST','https://jsonplaceholder.typicode.com/users',{
  "name": "jeongyeol",
  "username": "10cm",
  "email": "10ran@casperradio",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "010-0301-1010",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
})
*/
