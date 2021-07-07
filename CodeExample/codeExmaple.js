/* -------------------------- call, apply, bind 메서드 ------------------------- */

// call, apply 메서드 사용해서 arguments 객체를 배열로 변환
function convertArgsToArray() {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }

  const arr = Array.prototype.slice.call(arguments);
  // const arr = Array.prototype.slice.apply(arguments);
  console.log(arr); // [ 1, 2, 3 ]

  return arr;
}

convertArgsToArray(1, 2, 3);

// 콜백 함수의 this와 메서드의 this가 일치하지 않는 문제를 bind 메서드로 해결
const person = {
  name: 'Lee',
  foo(callback) {
    setTimeout(callback.bind(this), 100);
  },
};

person.foo(function () {
  console.log(`Hi! My name is ${this.name}.`); // Hi! My name is Lee.
});
