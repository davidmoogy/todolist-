document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todoInput');
    const addButton = document.getElementById('addTask');
    const todoList = document.getElementById('todoList');

    addButton.addEventListener('click', () => {
        const taskText = input.value.trim();
        if (taskText) {
            addTask(taskText);
            input.value = '';
        }
    });

    function addTask(text) {
        const listItem = document.createElement('li');
        listItem.textContent = text;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        removeButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        todoList.appendChild(listItem);
    }

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
