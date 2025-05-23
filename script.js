const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to create a new task element
function createTask(taskText) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.textContent = taskText;

  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'task-buttons';

  const doneBtn = document.createElement('button');
  doneBtn.innerHTML = '✔';
  doneBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑';
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  buttonGroup.appendChild(doneBtn);
  buttonGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonGroup);

  taskList.appendChild(li);
}

// Add Task Event
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createTask(taskText);
    taskInput.value = '';
  }
});

// Enter key also adds task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
