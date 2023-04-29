const todo_btn = document.querySelector(".todo_form");
const todo_input = document.querySelector(".todo_form input");
const ul = document.querySelector(".todo_list");

const clock = document.querySelector(".clock");
const quote_span = document.querySelector(".quote_box span:first-child");
const quote_author = document.querySelector(".quote_box span:last-child");

const submit_btn = document.querySelector(".login_form");
const Exist = localStorage.getItem("user");

const TODOS_KEY = "todos";

let todo_list = [];

function save_todos(list){
    localStorage.setItem(TODOS_KEY,JSON.stringify(list));
}
function delete_todos(event){
    const remove_li =  event.target.parentElement;
    remove_li.remove();
    todo_list = todo_list.filter((a) => a.id !== parseInt(remove_li.id));
    save_todos(todo_list);
}
function todobtn(event){ //값 받고 나타내기
    event.preventDefault();
    ul.style.backgroundColor = "rgba(255, 255, 255,0.4)";;
    const a = {
        text:todo_input.value,
        id:Date.now(),
    }
    todo_list.push(a);
    todo_input.value = '';
    create_list(a);
    save_todos(todo_list);
}

function create_list(list){
    const li = document.createElement("li");
    li.id = list.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = list.text;
    btn.innerText = "❌";
    btn.addEventListener("click",delete_todos);
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
}
function delete_hidden(){
    todo_input.classList.remove("hidden");
    clock.classList.remove("hidden");
    quote_span.classList.remove("hidden");
    quote_author.classList.remove("hidden");
}
submit_btn.addEventListener("submit",delete_hidden)
todo_btn.addEventListener("submit",todobtn);
const saved_todos = localStorage.getItem(TODOS_KEY);


if(Exist !==null ){
    delete_hidden();
    todo_btn.addEventListener("submit",todobtn);
    
    const saved_todos = localStorage.getItem(TODOS_KEY);
    
    if (saved_todos !== null){
        const parsed_todos = JSON.parse(saved_todos);
        todo_list = parsed_todos;
        parsed_todos.forEach(create_list);
        ul.style.backgroundColor = "rgba(255, 255, 255,0.3)";
    }
} 
else{
    todo_btn.classList.add("hidden");
}