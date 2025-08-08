function openFeatures() {
  let allElems = document.querySelectorAll(".elem");
  let fullElemPage = document.querySelectorAll(".fullElem");
  let backBtn = document.querySelectorAll(".back");
  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "initial";
    });
  });
  backBtn.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "none";
    });
  });
}
openFeatures();

let currentTask = [];
function renderTask() {
const allTask = document.querySelector(".allTask");
  let sum = "";
  currentTask.forEach((elem, idx) => {
    sum += `
              <div class="task">
                            <div class="task-heading">
                                <h3 class= "task-title">${elem.text}<span class="${elem.imp}">IMP</span></h3>
                                <div class="task-modifications">
                                    <button class="task-complete" data-index= "${idx}">Mark As completed</button>
                                    <button class="task-delete" data-index = "${idx}"><i class="ri-delete-bin-line"></i></button>
    
                                </div>
                            </div>
                          <div class="task-detail">
                               <p>${elem.detail}</p> 
                          </div>
                          
                        </div>
        `;
              
       
  });
  allTask.innerHTML = sum;
  const completeBtn =document.querySelectorAll(".task-complete");
  completeBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        const index = btn.dataset.index;
        const taskElement = btn.closest(".task");
        const h3 = taskElement.querySelector(".task-title");
        h3.style.textDecoration = "line-through";
    })
  })
  
}
function addTaskfnc() {
  const taskText = document.querySelector(".addTask input");
  const taskDetail = document.querySelector(".addTask textarea");
  const impChecked = document.querySelector(".mark-imp input");
  const addTask = document.querySelector(".addTask button");
  addTask.addEventListener("click", function (e) {
      e.preventDefault();
      if (taskText.value != "") {
          currentTask.push({
              text: taskText.value.trim(),
              detail: taskDetail.value.trim(),
              imp: impChecked.checked,
            });
        }
        
        renderTask();
        

    taskText.value = "";
    taskDetail.value = "";
    if (impChecked.checked) {
      impChecked.checked = false;
    }
  });  
 
  
}
addTaskfnc();



