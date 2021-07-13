/* ---------------------------------- */
/* 상태 관리를 위한 closure 활용 예시       */
/*  - 함수가 호출될 때마다 누적되는 카운터 함수 */
/* ---------------------------------- */

/* 1. 전역 변수에서 관리 (클로저 x) */
// 카운트 상태 변수
let numGlobal = 0;

// 카운트 상태 변경 함수
const increaseGlobal = function () {
  // 카운트 상태를 1만큼 증가 시킨다.
  return ++num;
};

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

// 이전 상태를 유지하지 못한다.
console.log(increaseLocal()); // 1
console.log(increaseLocal()); // 1
console.log(increaseLocal()); // 1
