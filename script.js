function showCurrentDate() {
    const dateElement = document.getElementById("dateToday");
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const updatedDate = date.toLocaleDateString('en', options);
    dateElement.textContent = `Today is ${updatedDate}`;
}

showCurrentDate();

function addTask() {
    const inputTask = document.getElementById("inputTask");
    const task = inputTask.value.trim();
    const msg = document.getElementById("msg");

    if (task === "") {
        msg.textContent = "Type a task to add it to your list.";
    } else {
        msg.textContent = "Task added successfully!";
        const todoList = document.getElementById("todoList");
        const newTask = document.createElement("li");
        newTask.className = "task";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                textTask.style.textDecoration = "line-through";
            } else {
                textTask.style.textDecoration = "none";
            }
        });

        const textTask = document.createElement("span");
        textTask.textContent = task;
        textTask.className = "task-text"; // Adicionado para estilo

        const buttonDelete = document.createElement("button");
        buttonDelete.innerHTML = "🗑️";
        buttonDelete.className = "b-icon";
        buttonDelete.addEventListener("click", function () {
            todoList.removeChild(newTask);
        });

        const taskContainer = document.createElement("div");
        taskContainer.className = "task-container";
        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(textTask);

        newTask.appendChild(taskContainer); // Adicionando checkbox e texto juntos
        newTask.appendChild(buttonDelete);
        todoList.appendChild(newTask);
        inputTask.value = "";
    }
}

