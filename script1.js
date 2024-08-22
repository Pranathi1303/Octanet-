document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const renderTodos = () => {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <span class="todo-text">${todo.text}</span>
                <div class="todo-actions">
                    <button class="complete-btn" onclick="toggleComplete(${index})">✓</button>
                    <button class="edit-btn" onclick="editTodo(${index})">✎</button>
                    <button class="delete-btn" onclick="deleteTodo(${index})">✕</button>
                </div>
            `;
            todoList.appendChild(li);
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoText = input.value.trim();
        if (todoText) {
            todos.push({ text: todoText, completed: false });
            input.value = '';
            saveTodos();
            renderTodos();
        }
    });

    window.toggleComplete = (index) => {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        renderTodos();
    };

    window.editTodo = (index) => {
        const newText = prompt('Edit your task:', todos[index].text);
        if (newText !== null) {
            todos[index].text = newText.trim();
            saveTodos();
            renderTodos();
        }
    };

    window.deleteTodo = (index) => {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    };

    renderTodos();
});