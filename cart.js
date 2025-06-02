document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('taskInput');
  const btn = document.getElementById('addTask');
  const list = document.getElementById('taskList');

  function createTask(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.style.marginLeft = '10px';

    delBtn.addEventListener('click', () => {
      list.removeChild(li);
    });

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  }

  btn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task) {
      createTask(task);
      input.value = '';
    }

  btn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task) {
      createTask(task);
      input.value = '';
    }

  });

  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      btn.click();
    }
  });
});

