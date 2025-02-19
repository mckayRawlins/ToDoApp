class TaskItem {
    constructor(taskName) {
        this.taskName = taskName;
        this.id = Date.now();
    }
}

class TaskGroup {
    constructor(groupName) {
        this.groupName = groupName;
    }

    taskItems = [];
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

const birthdayTasks = new TaskGroup('birthday party');
const cake = new TaskItem('make the cake');
const decore = new TaskItem('decorate house');
birthdayTasks.taskItems.push(cake);
birthdayTasks.taskItems.push(decore);

lawnAndGarden.taskItems.forEach(forEachTask);
houseChores.taskItems.forEach(forEachTask);
birthdayTasks.taskItems.forEach(forEachTask);

function forEachTask(taskItem) {
    console.log(taskItem.taskName);
}
