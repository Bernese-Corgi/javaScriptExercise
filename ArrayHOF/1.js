const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// forEach: html 변수 사용 O
// const render = () => {
//   let html = '';

//   todos.forEach((todo) => {
//     html += `<li id="${todo.id}"${todo.completed ? 'checked' : ''}>
//     <label><input type="checkbox">${todo.content}</label>
//   </li>`;
//   });

//   return html;
// }

// map: html 변수 사용 X
const render = () => {
  return todos
    .map(todo => `
    <li id="${todo.id}"${todo.completed ? 'checked' : ''}>
      <label><input type="checkbox">${todo.content}</label>
    </li>`)
    .join('');
};

console.log(render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
