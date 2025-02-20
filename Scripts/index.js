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

let taskGroupsDB = [houseChores, lawnAndGarden];
refreshUI();

function getElement(id) {
    return document.getElementById(id);
}

function refreshUI() {
    const taskGroupUl = getElement('task-group-ul');
    taskGroupUl.innerHTML = '';

    taskGroupsDB.forEach(taskGroup => {
        const taskGroupLi = document.createElement('li');
        taskGroupLi.taskGroup = taskGroup;
        taskGroupLi.innerText = taskGroup.name;
        taskGroupLi.addEventListener('click', () => {
            deselectTaskGroups();
            taskGroup.selected = true;
            taskGroupLi.classList.add('selected');
        });

        taskGroupUl.appendChild(taskGroupLi);

        const tasksUl = getElement('tasks-ul');
        tasksUl.innerHTML = '';

        taskGroup.taskItems.forEach(taskItem => {
            const taskItemLi = document.createElement('li');
            taskItemLi.taskItem = taskItem;
            taskItemLi.innerText = taskItem.name;
            taskItemLi.addEventListener('click', () => {
                console.log("taskItem " + taskItem.name);
            });

            tasksUl.appendChild(taskItemLi);
        });
    });
}

function deselectTaskGroups() {
    const taskGroupUl = getElement('task-group-ul');

    for (let li of taskGroupUl.children) {
        li.taskGroup.selected = false;
        li.classList.remove('selected');
    }
}

function addGroup() {
    const newGroupInput = getElement('new-group-input');
    taskGroupsDB.push(new TaskGroup(newGroupInput.value));
    refreshUI();
}

function addNewTask() {
    const newTaskInput = getElement('new-task-input');
    // Add a new TaskItem to the first taskgroup in the database with the user's input
    taskGroupsDB[0].taskItems.push(new TaskItem(newTaskInput.value));
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
