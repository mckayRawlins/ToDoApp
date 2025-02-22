class TaskItem {
    constructor(name) {
        this.name = name;
        this.id = Date.now();
    }
}

class TaskGroup {
    constructor(name) {
        this.name = name;
    }

    taskItems = [];
    selected = false;
}

let taskGroupsDB = [];
refreshUI();

function getElement(id) {
    return document.getElementById(id);
}

function refreshUI() {
    var taskGroupUl = getElement('task-group-ul');
    taskGroupUl.innerHTML = '';

    taskGroupsDB.forEach(taskGroup => {
        const taskGroupLi = document.createElement('li');
        taskGroupLi.taskGroup = taskGroup;
        taskGroupLi.innerText = taskGroup.name;
        taskGroupLi.addEventListener('click', () => {
            taskGroupLi.classList.add('selected');
            selectTaskGroup(taskGroup.name);
        });

        taskGroupUl.appendChild(taskGroupLi);
        taskGroup.taskItems.forEach(taskItemForeach);
    });
}

function taskItemForeach(taskItem) {
    const taskItemLi = document.createElement('li');
    taskItemLi.taskItem = taskItem;
    taskItemLi.innerText = taskItem.name;
    taskItemLi.addEventListener('click', () => {
        console.log(`Task Item ${taskItem.name} is complete.`);
    });

    tasksUl.appendChild(taskItemLi);
}

// function createLi(propertyName, liObject, clickHandler) {
//     const li = document.createElement('li');
//     li[propertyName] = liObject;
//     li.innerText = liObject.name;
//     li.addEventListener('click', clickHandler);

//     tasksUl.appendChild(li);
// }

// function selectNewestGroup() {
//     const taskGroupUl = getElement('task-group-ul');

//     var newestGroup = taskGroupUl.children[taskGroupUl.children.length - 1];
//     newestGroup.taskGroup.selected = true;
//     newestGroup.classList.add('selected');
// }

function selectTaskGroup(taskGroupName) {
    const taskGroupUl = getElement('task-group-ul');

    for (let li of taskGroupUl.children) {
        li.taskGroup.selected = false;
        li.classList.remove('selected');
    }

    for (let li of taskGroupUl.children) {
        if (li.taskGroup.name === taskGroupName) {
            li.taskgGroup.selected = true;
            li.classList.add('selected');
        }
    }
}

function addGroup() {
    const newGroupInput = getElement('new-group-input');
    // clear all selected from the current list

    taskGroupsDB.push(new TaskGroup(newGroupInput.value, true));
    newGroupInput.value = '';
    refreshUI();
    selectNewestGroup();
}

function addNewTask() {
    const newTaskInput = getElement('new-task-input');
    // Add a new TaskItem to the first taskgroup in the database with the user's input
    taskGroupsDB[0].taskItems.push(new TaskItem(newTaskInput.value));
    newTaskInput.value = '';
    refreshUI();
}


/* 
const houseChores = new TaskGroup('house chores');
const cleanDishes = new TaskItem('clean the dishes');
const batheDog = new TaskItem('bathe the dog');
houseChores.taskItems.push(cleanDishes);
houseChores.taskItems.push(batheDog);

const lawnAndGarden = new TaskGroup('lawn and garden');
const mowLawn = new TaskItem('mow the lawn');
const trimBushes = new TaskItem('trim the bushes');
lawnAndGarden.taskItems.push(mowLawn);
lawnAndGarden.taskItems.push(trimBushes);

const birthdayTasks = new TaskGroup('birthday party');
const cake = new TaskItem('make the cake');
const decore = new TaskItem('decorate house');
birthdayTasks.taskItems.push(cake);
birthdayTasks.taskItems.push(decore);

lawnAndGarden.taskItems.forEach(taskItem => console.log(taskItem.taskName));
houseChores.taskItems.forEach(taskItem => console.log(taskItem.taskName));
birthdayTasks.taskItems.forEach(taskItem => console.log(taskItem.taskName));



taskGroupsDB.push(birthdayTasks);
taskGroupsDB.push(lawnAndGarden);
console.log(taskGroupsDB)  */
