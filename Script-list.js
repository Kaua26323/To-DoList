let h2Element = document.querySelector("#box h2");
let listElement = document.querySelector("#box ul");
let inputElement = document.querySelector("#box input");
let buttonElement = document.querySelector("#box button");

let tasks = JSON.parse(localStorage.getItem("@listaTask")) || [];

function renderTask() {
  listElement.innerHTML = "";

  tasks.map((todo) => {
    let liElement = document.createElement("li");
    liElement.className = "liElement";
    let taskText = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    let position = tasks.indexOf(todo);
    linkElement.setAttribute("onclick", `deleteTask(${position})`);

    liElement.appendChild(taskText);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);
  });

  if (Array.isArray(tasks) && tasks.length === 0) {
    h2Element.innerHTML = "Você não tem nenhuma task ainda :(";
    h2Element.className = "h2Element";
  } else {
    h2Element.innerHTML = "";
  }
}

renderTask();

function addTask() {
  if (inputElement.value === "") {
    alert("Enter a valid task...");
    return false;
  } else {
    let newTaks = inputElement.value;

    tasks.push(newTaks);
    inputElement.value = "";

    renderTask();
    saveDados();
  }
}
buttonElement.onclick = addTask;

function deleteTask(position) {
  tasks.splice(position, 1);
  renderTask();
  saveDados();
}

function saveDados() {
  localStorage.setItem("@listaTask", JSON.stringify(tasks));
}
