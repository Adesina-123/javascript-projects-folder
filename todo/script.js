let todoList = [
  {
    task: 'Wash dishes',
    complete: false,
  },
  {
    task: 'Driving kids to school',
    complete: false,
  },
  {
    task: 'Painting Rooms',
    complete: false,
  },
];
const listTodo = document.querySelector ('.list-todo');
console.log (listTodo);

/*********** write our function ******* */
function copyArray () {
  listTodo.innerHTML = '';
  todoList.foreach (function (activty, index) {
    const newElement = document.createElement ('div');
    newElement.className = 'todo-list';

    newElement.setAttribute ('data-id', index);

    newElement.innerHTML = `
    <div>
    <p>
    ${activity.task}
    </p>
    </div>`;
  });
}
