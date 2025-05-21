

let listElement = document.querySelector('#box ul');
let inputElement = document.querySelector('#box input');
let buttonElement = document.querySelector('#box button');

let tasks = JSON.parse(localStorage.getItem('@listaTask')) || [];

function renderTask(){
    listElement.innerHTML = '';

    tasks.map((todo) => {
        let liElement = document.createElement('li');
        liElement.className = 'liElement';
        let taskText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        let linkText = document.createTextNode(" Excluir");
        linkElement.appendChild(linkText);

        let position = tasks.indexOf(todo);
        linkElement.setAttribute('onclick', `deleteTask(${position})`);


        liElement.appendChild(taskText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

renderTask();

function addTask(){
    if( inputElement.value === ''){
        alert('Enter a valid task...');
        return false;

    }else{
        let newTaks = inputElement.value;

        tasks.push(newTaks);
        inputElement.value = '';
        
        renderTask();
        saveDados();
    }
}
buttonElement.onclick = addTask;

function deleteTask(position){
    tasks.splice(position, 1);
    renderTask();
    saveDados();
}

function saveDados(){
    localStorage.setItem('@listaTask', JSON.stringify(tasks));
}