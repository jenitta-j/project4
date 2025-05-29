const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add Task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);

  const btnGroup = document.createElement('div');
  btnGroup.classList.add('task-buttons');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  editBtn.onclick = () => editTask(span);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = () => li.remove();

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);
  li.appendChild(btnGroup);

  taskList.appendChild(li);
  taskInput.value = '';
}

// Edit Task
function editTask(span) {
  const newText = prompt('Edit task:', span.textContent);
  if (newText !== null && newText.trim() !== '') {
    span.textContent = newText.trim();
  }
}
