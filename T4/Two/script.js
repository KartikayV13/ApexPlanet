let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  // document.querySelector("#taskList").innerHTML = "";
  tasks.forEach((task) => renderTask(task));
}

function renderTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const dltBtn = document.createElement("button");
  dltBtn.textContent = "Delete";
  dltBtn.classList.add("dlt-btn");

  dltBtn.onclick = () => {
    li.remove();
    tasks = tasks.filter((t) => t !== taskText);
    saveTasks();
  };

  li.appendChild(dltBtn);
  document.querySelector("#taskList").appendChild(li);
}

function addTask() {
  const inputText = document.querySelector(".inputText");
  const taskText = inputText.value.trim();

  if (taskText === "") return;

  tasks.push(taskText);
  saveTasks();
  renderTask(taskText);
  inputText.value = "";
}

loadTasks();