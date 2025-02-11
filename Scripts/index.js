let taskData = [
    {
        title: 'task title',
        complete: 'false'
    }
]

function addGroup() {
    const newGroup = stickyNoteTemplate.content.cloneNode(true).children[0];
    const groupsContainer = document.getElementById('groups-container');
    groupsContainer.appendChild(newGroup);
}

const taskContainer = document.getElementById('added-task-container');
const newTaskList = document.createElement('ul');
taskContainer.appendChild(newTaskList);

function addTask() {
    const listItem = document.createElement('li');
    newTaskList.appendChild(listItem);
    listItem.innerText = document.getElementById('new-task-input').value;
    console.log('it works');
}