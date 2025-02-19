<main>
        <label for="create-group-input">Create New Task Group:</label>
        <input id="create-group-input" type="text" placeholder="Enter group name">
        <button id="add-group" onclick="addGroup()">Add Group</button>

        <div id="groups-container" class="flex justify-evenly flex-wrap w-[80%] mx-auto bg-slate-100">

        </div>

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
        
    </main>