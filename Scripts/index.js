class TaskItem {
    constructor(taskName) {
        this.taskName = taskName;
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

let anyTaskGroup = new TaskGroup("Any task");
anyTaskGroup.anythingIWant = { paramater: "Any thing I want" };

function addGroup() {
    const newGroupInput = document.getElementById('new-group-input');
    taskGroupsDB.push(new TaskGroup(newGroupInput.value));
    refreshUI();
}

let taskGroupsDB = [new TaskGroup('house chores'), new TaskGroup('lawn and garden')];
refreshUI();

function refreshUI() {
    refreshTaskGroups();
}

function refreshTaskGroups() {
    const taskGroupUl = document.getElementById('task-group-ul');
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
    });
}

function deselectTaskGroups() {
    const taskGroupUl = document.getElementById('task-group-ul');

    for (let li of taskGroupUl.children) {
        li.taskGroup.selected = false;
        li.classList.remove('selected');
    }
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
