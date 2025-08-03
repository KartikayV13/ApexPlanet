function addTask () {
    const inputText = document.querySelector(".inputText")
    const taskText = inputText.value.trim();

    if(taskText === "") return;

    const li = document.createElement("li")
    li.textContent = taskText;

    const dltBtn = document.createElement("button")
    dltBtn.textContent = "Delete";
    dltBtn.classList.add("dlt-btn");
    dltBtn.onclick = () => li.remove();

    li.appendChild(dltBtn)
    document.querySelector("#taskList").appendChild(li)

    inputText.value="";
}


