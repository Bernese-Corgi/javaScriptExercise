/* --------------------------------------------- */
/* 상태 관리를 위한 closure 활용 예시                  */
/*  - 함수가 호출될 때마다 누적되는 카운터 함수            */
/*  - 1번부터 끝번까지 코드를 리팩토링하는 방식의 예시입니다. */
/* --------------------------------------------- */

/* 1. 전역 변수에서 관리 (클로저 x) */
// 카운트 상태 변수
let numGlobal = 0;

// 카운트 상태 변경 함수
const increaseGlobal = function () {
  // 카운트 상태를 1만큼 증가 시킨다.
  return ++numGlobal;
};

//! increaseGlobal 함수 외의 다른 함수도 상태 변수 numGlobal을 변경할 수 있다.

console.log(increaseGlobal()); // 1
console.log(increaseGlobal()); // 2
console.log(increaseGlobal()); // 3

/* 2. 지역 변수에서 관리 (클로저 x) */
// 카운트 상태 변경 함수
const increaseLocal = function () {
  // 카운트 상태 변수
  let num = 0;

  // 카운트 상태를 1만큼 증가 시킨다.
  return ++num;
};

//! 이전 상태를 유지하지 못한다. (상태 변수가 호출될때마다 초기화된다.)
console.log(increaseLocal()); // 1
console.log(increaseLocal()); // 1
console.log(increaseLocal()); // 1

/* 3. IIFE로 클로저 생성 */
// 카운트 상태 변경 함수
const increaseIIFE = (function () {
  // 카운트 상태 변수
  let num = 0;

  // 클로저
  return function () {
    // 카운트 상태를 1만큼 증가 시킨다.
    return ++num;
  };
})();

//! 클로저 함수가 한가지의 반환값만 반환한다.

console.log(increaseIIFE()); // 1
console.log(increaseIIFE()); // 2
console.log(increaseIIFE()); // 3
