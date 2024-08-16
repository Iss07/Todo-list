let todoList = [];

displayItems();



function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem,dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}
function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml='';
  for (let i = 0; i < todoList.length; i++) {
    let {item,dueDate}=todoList[i];
    let dateParts = dueDate.split("-");
    let formattedDate = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
    newHtml +=`

        <span>${item}</span> 
        <span>${formattedDate}</span> 
        <button class="btn-delete"onclick="todoList.splice(${i}, 1);displayItems();"><b>DELETE</b></button>
      
    `;
  }
  containerElement.innerHTML = newHtml;
}

