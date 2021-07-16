자바스크립트의 함수 레벨 스코프 특성으로 인해 for 문의 초기화 문에서 var 키워드로 선언한변수가 전역 변수가 되기 때문에 발생하는 문제

**문제 코드**
```js
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]()); // 3 3 3
}
```

**해결 1. 즉시 실행 함수로 감싸고, 매개 변수를 자유 변수로 활용하는 방법**

```js
// 1. 전역 실행 컨텍스트 push
// 2. var로 선언된 funcs 변수를 전역 객체에 프로퍼티로 등록
// 3. 배열 객체 생성 후 funcs 식별자에 값 바인딩
var funcs = [];

// 4. var로 선언된 변수 i를 전역 객체의 프로퍼티로 등록
// 12, 17. i++ 연산한 값을 i에 할당한다.
for (var i = 0; i < 3; i++) {
  // 5. funcs 배열의 0번 요소에 IIFE가 실행하여 반환하는 값을 할당한다.
  // 6, 13, 18. IIFE 실행 : IIFE 실행 컨텍스트 push
  // 8. 매개변수 id에 전역변수 i의 현재 값을 할당한다.
  // 9, 14. id에 현재 전역변수 i 값을 할당한다.
  funcs[i] = (function (id) {
    // 7. arguments 객체를 함수 환경 레코드에 등록
    // 10, 15. IIFE의 반환값인 중첩 함수의 객체 생성 및 반환 (클로저)
    return function () {
      return id;
    };
  })(i);
  // 11, 16. 반환한 함수를 funcs[0] 요소에 추가하고 IIFE 실행 컨텍스트 pop
}

for (var j = 0; j < funcs.length; j++) {
  funcs[j]();
}
```

![image](https://user-images.githubusercontent.com/72931773/125965291-1b9e7133-14c7-484b-a446-092df6254a69.png)
