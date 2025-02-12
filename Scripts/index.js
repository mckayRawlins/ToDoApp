let newArray = [];

function addGroup() {
    const newGroup = stickyNoteTemplate.content.cloneNode(true).children[0];
    const groupsContainer = document.getElementById('groups-container');
    const newTaskList = document.createElement('ul');

    let addGroupTitle = document.getElementById('create-group-input').value;
    let groupName = newGroup.querySelector('.group-name');


    if (addGroupTitle.trim() === "") {
        alert('Please enter group name');
        return;
    }

    groupName.innerText = addGroupTitle;
    newGroup.appendChild(newTaskList);
    groupsContainer.appendChild(newGroup);

    document.getElementById('create-group-input').value = '';


}
function addTask(event) {
    //Code suggested by ChatGPT. Review meaning and why I needed to do it this way

    const buttonClicked = event.target; // Find which "Add" button was clicked
    const groupDiv = buttonClicked.closest('.group-div'); // Find the parent group
    const newTaskInput = groupDiv.querySelector('#new-task-input').value.trim();
    const taskList = groupDiv.querySelector('ul'); // Find the task list inside this group

    if (newTaskInput === "") {
        alert('Please enter task')
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerText = newTaskInput;
    taskList.appendChild(listItem);

    newArray.push(groupDiv.querySelector('#new-task-input').value);
    console.log(newArray);

    groupDiv.querySelector('#new-task-input').value = '';
}











