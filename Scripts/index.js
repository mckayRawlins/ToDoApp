class TodoApp {
    taskGroupsDB = [];

    renderUI() {
        const taskGroupUl = this.taskGroupUl();
        taskGroupUl.innerHTML = '';
        this.taskItemsUl().innerHTML = '';

        this.taskGroupsDB.forEach(taskGroup => {
            const taskGroupLi = document.createElement('li');
            taskGroupLi.taskGroup = taskGroup;
            taskGroupLi.innerText = taskGroup.name;

            if (taskGroup.selected) {
                taskGroupLi.classList.add('selected');
                this.taskGroupNameElement().innerText = taskGroup.name;
                taskGroup.taskItems.forEach(this.renderTaskItems.bind(this)); //google .bind
            }

            taskGroupUl.appendChild(taskGroupLi);
            taskGroupLi.addEventListener('click', this.taskGroupLiClicked.bind(this));
        });

        if (this.taskGroupsDB.length === 0) {
            this.taskGroupNameElement().innerText = 'No task group selected';
        }

        this.save();
    }

    renderTaskItems(taskItem) {
        const taskItemLi = document.createElement('li');
        taskItemLi.taskItem = taskItem;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        if (taskItem.completed) {
            checkbox.checked = true;
        }

        checkbox.addEventListener('click', () => taskItem.completed = !taskItem.completed);

        const nameSpan = document.createElement('span');
        nameSpan.innerHTML = taskItem.name;

        const editTaskButton = document.createElement('span');
        editTaskButton.classList.add('fa');
        editTaskButton.classList.add('fa-pencil-alt');


        taskItemLi.appendChild(checkbox);
        taskItemLi.appendChild(nameSpan);
        taskItemLi.appendChild(editTaskButton);

        this.taskItemsUl().appendChild(taskItemLi);

        let originalText;

        editTaskButton.addEventListener('click', () => {
            originalText = nameSpan.textContent;
            const editTaskInput = document.createElement('input');
            const saveTaskEdit = document.createElement('span');
            saveTaskEdit.classList.add('fa');
            saveTaskEdit.classList.add('fa-save');
            taskItemLi.removeChild(editTaskButton);
            taskItemLi.appendChild(saveTaskEdit);
            editTaskInput.type = 'text';
            editTaskInput.value = originalText;
            nameSpan.textContent = '';
            nameSpan.appendChild(editTaskInput);

            saveTaskEdit.addEventListener('click', () => {
                console.log('saved');
                nameSpan.textContent = editTaskInput.value;
                taskItem.name = editTaskInput.value;
                taskItemLi.removeChild(saveTaskEdit);
                taskItemLi.appendChild(editTaskButton);
                console.log(this.taskGroupsDB);
                this.save();
            });
        }


        )
    }

    clearCompletedTasks() {
        const selectedTaskGroup = this.selectedTaskGroup();
        selectedTaskGroup.taskItems = selectedTaskGroup.taskItems.filter(listItem => !listItem.completed);

        this.renderUI();
    }

    removeTaskGroup() {
        const selectedTaskGroup = this.selectedTaskGroup();
        const remainingTaskGroups = this.taskGroupsDB.filter(taskGroup => taskGroup.name !== selectedTaskGroup.name);

        if (remainingTaskGroups.length > 0) {
            remainingTaskGroups.forEach(taskGroup => taskGroup.selected = false);
            remainingTaskGroups[0].selected = true;
            this.save();
        } else {
            this.load();
        }

        this.taskGroupsDB = remainingTaskGroups;

        this.renderUI();
    }


    taskGroupLiClicked(mouseEvent) {
        for (let taskGroupLi of this.taskGroupUl().children) {
            taskGroupLi.taskGroup.selected = false;
            taskGroupLi.classList.remove('selected');
        }

        const taskGroupLi = mouseEvent.target;
        taskGroupLi.taskGroup.selected = true;
        taskGroupLi.classList.add('selected');

        this.renderUI()
    }

    addGroup() {
        const newTaskGroupInput = this.getElement('new-group-input');
        const existingTaskGroup = this.taskGroupsDB.find(taskGroup => taskGroup.name === newTaskGroupInput.value);

        if (newTaskGroupInput.value.length > 0 && !existingTaskGroup) {
            this.taskGroupsDB.forEach(taskGroup => taskGroup.selected = false)

            const newTaskGroup = new TaskGroup(newTaskGroupInput.value);
            newTaskGroupInput.value = '';
            newTaskGroup.selected = true;
            this.taskGroupsDB.push(newTaskGroup);
            this.renderUI();
        }
    }

    addTask() {
        const newTaskInput = this.getElement('new-task-input');

        if (newTaskInput.value.length > 0) {
            this.selectedTaskGroup().taskItems.push(new TaskItem(newTaskInput.value));
            newTaskInput.value = '';
            this.renderUI();
        }
    }

    getElement(id) {
        return document.getElementById(id);
    }

    taskGroupNameElement() {
        return this.getElement('task-group-name');
    }

    taskGroupUl() {

        return this.getElement('task-group-ul');
    }

    taskItemsUl() {
        return this.getElement('task-items');
    }

    selectedTaskGroup() {
        return this.taskGroupsDB.find(taskGroup => taskGroup.selected);
    }

    save() {
        localStorage.setItem('task-groups', JSON.stringify(this.taskGroupsDB));
    }

    load() {
        const savedTaskGroups = localStorage.getItem('task-groups');

        if (savedTaskGroups === null) {
            localStorage.setItem('task-groups', JSON.stringify([this.defaultTaskGroup()]));
        }

        this.taskGroupsDB = JSON.parse(localStorage.getItem('task-groups'));
    }

    start() {
        this.load();
        this.renderUI();
    }

    defaultTaskGroup() {
        const defaultTodo = new TaskGroup("Todo");
        defaultTodo.taskItems.push(new TaskItem("Task 1"));
        defaultTodo.taskItems.push(new TaskItem("Task 2"));
        return defaultTodo;
    }
}

class TaskItem {
    constructor(name) {
        this.name = name;
        this.id = Date.now();
        this.completed = false;
    }
}

class TaskGroup {
    constructor(name) {
        this.name = name;
    }

    taskItems = [];
    selected = true;
}

const todoApp = new TodoApp();
todoApp.start();