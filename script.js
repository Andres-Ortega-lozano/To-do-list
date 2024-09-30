function addTask() {

    let newTextTask = document.getElementById("newTask").value;

    if (newTextTask === "") {
        alert("Please, add a task");
        return;
    }

    let newTask = document.createElement("li");
    newTask.textContent = newTextTask + " ";
       
    let trashButton = document.createElement("button");
    trashButton.textContent = "Delete";
    trashButton.onclick = function() { newTask.remove();}
    
    newTask.appendChild(trashButton);
    
    document.getElementById("taskList").appendChild(newTask);

    document.getElementById("newTask").value = "";
    
}
const dateNumber = document.getElementById("dateNumber");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const dateText = document.getElementById("dateText");


const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('en', { day: 'numeric' });
    dateMonth.textContent = date.toLocaleString('en', { month: 'short' });
    dateYear.textContent = date.toLocaleString('en', { year: 'numeric' });
    dateText.textContent = date.toLocaleString('en', { weekday: 'long' });
};
    setDate();






