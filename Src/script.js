function openFeatures() {
  let allElems = document.querySelectorAll(".elem");
  let fullElemPage = document.querySelectorAll(".fullElem");
  let fullElemPageBtn = document.querySelectorAll(".back");
  allElems.forEach(function (elem) {
    console.log(elem.id);

    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "initial";
    });
  });
  fullElemPageBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}
openFeatures();
let form = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form input");
let textareaInput = document.querySelector(".addTask form textarea");
let taskCheckBox = document.querySelector(".mark-imp #check");

// TODO FUNCTIONALITY
function todo() {
  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task list is Empty");
  }
  function renderTask() {
    let allTask = document.querySelector(".allTask");
    let sum = "";
    currentTask.forEach(function (elem, idx) {
      sum += `
              <div class="task">
                            <div class="task-heading">
                                <h3 class= "task-title">${elem.task}<span class="${elem.imp}">IMP</span></h3>
                                <div class="task-modifications">
                                    <button class="task-complete" id= "${idx}">Mark As completed</button>
                                </div>
                            </div>
                          <div class="task-detail">
                               <p>${elem.details}</p> 
                          </div>
                          
                        </div>
        `;
    });
    allTask.innerHTML = sum;
    localStorage.setItem("currentTask", JSON.stringify(currentTask));
    let markCompletedBtn = document.querySelectorAll(".task-complete");
    console.log(markCompletedBtn);

    markCompletedBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(Number(btn.id), 1);
        renderTask();
      });
    });
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // NOw i want ky form ky submit krny pr current task mien data push ho
    if (taskInput.value != "") {
      currentTask.push({
        task: taskInput.value,
        details: textareaInput.value,
        imp: taskCheckBox.checked,
      });
    }
    renderTask();
    taskInput.value = "";
    textareaInput.value = "";
    taskCheckBox.checked = false;
  });

  renderTask();
}

todo();

// DAILY PLANNER FUNCTIONALITY
let dayPlanner = document.querySelector(".day-planner");
let clutter = "";
for (let i = 0; i < 18; i++) {
  clutter += `
      <div class="day-planner-time">
                    <p>${i + 6}:00 - ${i + 7}:00</p>
                    <input id=${i} type="text" placeholder="...">
                </div>
    `;
  dayPlanner.innerHTML = clutter;
}

let inputOfdayPlanner = document.querySelectorAll(".day-planner-time input");
let inputValArr = [];
let jsonArr = JSON.parse(localStorage.getItem("plannerDate")) || [];
inputOfdayPlanner.forEach(function (input, idx) {
  input.addEventListener("blur", function () {
    if (input.value != "") {
      let foundPosition = inputValArr.findIndex((obj) => obj.index === idx);
      
      if (foundPosition === -1) {
        inputValArr.push({
          input: input.value.trim(),
          index: idx,
        });
        jsonArr.push(JSON.stringify(localStorage.setItem()))
      }else{
        inputValArr[foundPosition].input = input.value.trim()
      }
    }
    console.log(inputValArr);
    
  });
});

// let dayPlannerTime = document.querySelectorAll(".day-planner-time");
// dayPlannerTime.forEach(function(elem){
//     let inputElem = document.querySelector("input");
//     console.log(inputElem.value);

// })
