document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input').value;
    const dateInput = document.getElementById('date-input').value;
    const timeInput = document.getElementById('time-input').value;
    
    if (taskInput && dateInput && timeInput) {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${taskInput} - ${dateInput} - ${timeInput}`;
        taskList.appendChild(listItem);

        document.getElementById('task-input').value = '';
        document.getElementById('date-input').value = '';
        document.getElementById('time-input').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('clear-list').addEventListener('click', function() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
});
