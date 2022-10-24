
document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  const btnClick = document.querySelector('[type="submit"]')
  btnClick.addEventListener("click", (e) => {
    e.preventDefault();
    //get value from input
    const newTask = document.getElementById("new-task-description").value;
    const liElement = document.createElement('li');
    liElement.textContent = newTask;

    //create a li tag in ul tag and create a button for delete function
    const taskList = document.getElementById("tasks");
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "  X";
    liElement.appendChild(deleteButton);
    taskList.appendChild(liElement);

    deleteButton.addEventListener('click', deleteTask)
    
  })
});

 function deleteTask(e){
  e.target.parentNode.remove();
}

