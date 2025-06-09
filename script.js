let task_input = document.querySelector("#task-input");
let date_input = document.querySelector("#date-input");
let add_btn = document.querySelector("#add-btn");
let task_div = document.querySelector("#task-div");

let task = JSON.parse(localStorage.getItem("task-item")) || [];
add_btn.addEventListener("click", () => {
  let task_val = task_input.value.trim();
  let date_val = date_input.value.trim();
  if (task_val === "" || date_val === "") {
    return alert("Please Enter All Values");
  }
  let all_task = {
    task_value: task_val,
    task_date: date_val,
  };
  task.push(all_task);
  localStorage.setItem("task-item", JSON.stringify(task));
  task_input.value = "";
  date_input.value = "";
  displayTask();
});

function displayTask() {
  let displayHTML = "";
  for (let i = 0; i < task.length; i++) {
    let input_value = task[i].task_value;
    let input_date = task[i].task_date;
    displayHTML += `
    <div>
    <span id="sp-1">${input_value}</span>
    <span id="sp-2">${input_date}</span>
    <button id="del-btn" onclick = "delFun(${i})">Delete</button>
    </div>
    `;
  }
  task_div.innerHTML = displayHTML;
}

document.addEventListener("DOMContentLoaded", displayTask);

function delFun(index) {
  task.splice(index, 1);
  localStorage.setItem("task-item", JSON.stringify(task));
  displayTask();
}
