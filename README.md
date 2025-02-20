<main>
        <label for="create-group-input">Create New Task Group:</label>
        <input id="create-group-input" type="text" placeholder="Enter group name">
        <button id="add-group" onclick="addGroup()">Add Group</button>

        <div id="groups-container" class="flex justify-evenly flex-wrap w-[80%] mx-auto bg-slate-100">

        </div>
        
        <template>
            <div id="new-sticky-note" class="w-auto bg-amber-200 p-5 m-5">
                <div class="flex justify-between mb-5"> <!--Sticky note header-->
                    <h1 class="group-name">Title</h1>
                    <button id="delete-group">Delete Group</button>
                    <button id="clear-tasks">Clear Tasks</button>
                </div>

                <input id="new-task-input" type="text" placeholder="Add task">
                <button id="add-task" onclick="addTask(event)">Add</button>

                <div id="added-task-container" class="flex">
                </div>
            </div>
        </template>
        
    </main>

    /* const groups = [];

class TaskItem {
    constructor(label, group) {
        this.id = Date.now();
        this.label = label;
        this.group = group;
    }

    editTask() {
        console.log('edit');
    }
    completeTask() {
        console.log('completed');
    }
}

function renderGroups() {

}

function addGroup() {
    let addGroupTitle = document.getElementById('create-group-input');
    addGroupTitle.value = addGroupTitle.value.trim();
    if (addGroupTitle.value === "") {
        return;
    } 

    const newGroup = stickyNoteTemplate.content.cloneNode(true).children[0];
    const groupsContainer = document.getElementById('groups-container');
    const newTaskList = document.createElement('ul');
    newTaskList.id = addGroupTitle.value;

    let groupName = newGroup.querySelector('.group-name');

    groupName.innerText = addGroupTitle.value;
    newGroup.appendChild(newTaskList);
    groupsContainer.appendChild(newGroup);

    addGroupTitle.value = '';

}



function addTask(event) {

    const groupDiv = event.target.parentElement; // Find which "Add" button was clicked
    let newTaskInput = groupDiv.querySelector('#new-task-input');
    newTaskInput.value = newTaskInput.value.trim();
    const taskList = groupDiv.querySelector('ul'); // Find the task list inside this group
    const task = new TaskItem(newTaskInput.value, taskList.id)
    console.log(task);

    if (newTaskInput.value === "") {
        alert('Please enter task')
        return;
    }

    const listItem = document.createElement('li');
    const editTask = document.createElement('button');
    editTask.addEventListener('click', () => {
        console.log('edit');
    })
    const deleteTask = document.createElement('button');
    deleteTask.addEventListener('click', () => {
        console.log('delete');
    })
    listItem.innerText = newTaskInput.value;
    deleteTask.innerText = "Delete";
    editTask.innerText = "Edit"
    taskList.appendChild(listItem);
    listItem.appendChild(editTask);
    listItem.appendChild(deleteTask);


    groups.push(task);
    console.log(groups);

    newTaskInput.value = '';
}
 */