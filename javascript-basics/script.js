const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    createIncompleteTodo(inputText);
}

const createIncompleteTodo = (text) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = text;
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const completeTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            const backTarget = backButton.previousElementSibling.innerText;
            createIncompleteTodo(backTarget);
            backButton.closest("li").remove();
        });
        completeTarget.firstElementChild.appendChild(backButton);
        document.getElementById("complete-list").appendChild(completeTarget);
    });
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });
    deleteButton.innerText = "削除";
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);