//variable declarations


const allTodo = document.querySelectorAll('.todo');
const allTodoli = document.querySelectorAll('.todo li');
const newTodo = document.querySelector('#newtodo');
const newTodobtn = document.querySelector('#addbtn');
const todos = document.querySelector('#todos');

//completed/uncompleted todo
allTodo.forEach((todo,index)=>{
    
    todo.addEventListener('click',function(){
        if(allTodoli[index].style.textDecoration!='line-through')
        {
            allTodoli[index].style.textDecoration ='line-through';
        }
        else
        {
            allTodoli[index].style.textDecoration ='none';
        }
    })
})

//add todo

let newTododiv = document.createElement('div');
let newTodoli = document.createElement('li');
let newTodospan = document.createElement('span');

newTodobtn.addEventListener('click',function(){
    newTododiv.classList.add('todo');
    newTodoli.innerText = newTodo.value;
    newTodospan.classList.add('delbtn');
    newTodospan.innerText = 'Delete';
    newTododiv.appendChild(newTodoli);
    newTododiv.appendChild(newTodospan)
    if(newTodoli.innerText!='')
    {todos.appendChild(newTododiv);}
})

//delete todo

todos.addEventListener('click',function(e){
    if(e.target.className=='delbtn'){
        const parentelm = e.target.parentElement;
        todos.removeChild(parentelm);
        
    }
})