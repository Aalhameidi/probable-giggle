
// Global identifiers

let form = document.querySelector('#form')
let taskList = document.querySelector('#tasks')
let input = document.querySelector('input')

//  Add item

form.addEventListener('submit', function(e){
    e.preventDefault();
    let task = document.createElement('li')
    task.textContent = input.value;
    taskList.append(task);
})

// Delete item

taskList.addEventListener('click', (e)=>{
    if(e.target.tagName == 'LI'){
    e.target.remove();
}})


