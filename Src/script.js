function openFeatures(){
    let allElems = document.querySelectorAll(".elem");
let fullElemPage = document.querySelectorAll(".fullElem");
let fullElemPageBtn = document.querySelectorAll(".back");
allElems.forEach(function(elem){
    console.log(elem.id);
    
    elem.addEventListener("click", function(){
        fullElemPage[elem.id].style.display = "initial";    
        
    })
    
})
fullElemPageBtn.forEach(function(back){
    back.addEventListener("click", function(){
        
        fullElemPage[back.id].style.display = "none";    
    })
})
}
openFeatures();
let form = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form input");
let textareaInput = document.querySelector(".addTask form textarea");
let taskCheckBox = document.querySelector(".mark-imp #check");

// var currentTask = [];
// // to put data into localstorage
// if(localStorage.getItem("currentTask")){
//     currentTask = JSON.parse(localStorage.getItem("currentTask"));
//     // if i get something in currentask then put it into currentTask array
// }

 var currentTask = []

    if (localStorage.getItem('currentTask')) {
        currentTask = JSON.parse(localStorage.getItem('currentTask'))
    } else {
        console.log('Task list is Empty');
    }

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    // NOw i want ky form ky submit krny pr current task mien data push ho
    if(taskInput.value !=""){
        currentTask.push({
            task: taskInput.value,
            details: textareaInput.value,
            imp: taskCheckBox.checked
        })

    }
    renderTask();
    taskInput.value = "";
    textareaInput.value= "";
    taskCheckBox.checked = false;
   
})

function renderTask(){
    let allTask = document.querySelector(".allTask");
let sum = "";
currentTask.forEach(function(elem, idx){
      sum += `
              <div class="task">
                            <div class="task-heading">
                                <h3 class= "task-title">${elem.task}<span class="${elem.imp}">IMP</span></h3>
                                <div class="task-modifications">
                                    <button class="task-complete" data-index= "${idx}">Mark As completed</button>
                                </div>
                            </div>
                          <div class="task-detail">
                               <p>${elem.details}</p> 
                          </div>
                          
                        </div>
        `;
})
allTask.innerHTML = sum;
localStorage.setItem("currentTask", JSON.stringify(currentTask))
}

renderTask();

let markCompletedBtn = document.querySelector(".task-complete")









// if(localStorage.getItem("currentTask")){
//     currentTask = JSON.parse(localStorage.getItem("currentTask"));
// }
// function renderTask(){
//     let allTask = document.querySelector(".allTask");
//     let sum = "";
//     currentTask.forEach(function(elem){
//         sum+=` <div class="task">
//         <h3>${elem.task} <span class = "${elem.imp}">Imp</span></h3>
//         <button>Mark as Completed</button>
//         </div>`
        
//     })
//     allTask.innerHTML = sum;
//     localStorage.setItem('currentTask', JSON.stringify(currentTask));
// }
// renderTask();
// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     currentTask.push({
//         task: taskInput.value,
//         details: textareaInput.value,
//         imp: taskCheckBox.checked
//     })
//     renderTask();
    
// })