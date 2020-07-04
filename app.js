// selectors
const todoInput = document.querySelector(".todo__input");
console.log(todoInput);
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");

// Event Listener

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event) {
  // prevent default behaviour due to submitting
  event.preventDefault();

  // want to build this:
  //  <div class="todo__item">
  //    <li class="todo__descr"></li>
  //    <button>delete</button>
  //    <button>checked</button>
  //   </div>

  // todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo__item");

  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo__descr");
  // I take the div and put the li item inside
  todoDiv.appendChild(newTodo);

  // check mark button
  const completedButton = document.createElement("button");
  // to add itag to the button not text - need to use innerHTML instead of innerTEXT
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("btn-completed");
  todoDiv.appendChild(completedButton);

  // check trash button
  const trashButton = document.createElement("button");
  // to add itag to the button not text - need to use innerHTML instead of innerTEXT
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("btn-trash");
  todoDiv.appendChild(trashButton);

  // append all to ul list
  todoList.appendChild(todoDiv);

  // after all i want to get rid of the text
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  // DELETE TODO
  if (item.classList[0] === "btn-trash") {
    // assign item to the entire parent Element - that we can delete everything instead of only the button class.
    const todo = item.parentElement;
    todo.remove();
  }

  // CHECK TODO
  if (item.classList[0] === "btn-completed") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
