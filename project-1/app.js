// Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
    // Dom load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add Task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTask);
    // Filter tasks event
    filter.addEventListener('keyup',filterTask);
}

// Get Tasks from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
         // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(task)); 

    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add icon html

    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li

    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
    })
}

// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value)); 

    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add icon html

    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li

    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);

    // store in local storage
    storeTaskInLocalStorage(taskInput.value);

    //Clear inpur
    taskInput.value = '';

    e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task
function removeTask(e){
    // console.log(e.target);
    if(e.target.parentElement.classList.contains('delete-item')){
    // console.log(e.target);
        if(confirm('Are you sure')){
            e.target.parentElement.parentElement.remove();

            // REmove from LocalStorage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }

}

// REmove from LocalStorage
function removeTaskFromLocalStorage(taskItem){
    // console.log(taskItem);
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taslItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//clear Tasks
function clearTask(){
    // taskList.innerHTML = '';
    // Faster way
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    // https://jsperf.com/innerhtml-vs-removechild

    // Clear from Local Storage
    clearTasksFromLocalStorage();
 }

 //Clear Tasks form Local Storage
 function clearTasksFromLocalStorage() {
     localStorage.clear();
 }

 // Filter tasks
 function filterTask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
 }