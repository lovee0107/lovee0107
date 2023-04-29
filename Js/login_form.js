const login_form = document.querySelector(".login_form");
const hello_user = document.querySelector(".user");
const loginID = document.querySelector(".login_form input");
const body = document.querySelector("body");
const a = ["sea.jpeg","sea_house.jpeg","sea_town.jpeg"];
const number = Math.floor(Math.random()*3);



function background(){
    body.style.backgroundImage = `url(img/${a[number]})`;
}

function LogIn(event){
    event.preventDefault();
    login_form.classList.add("hidden") ;
    const username = loginID.value;
    localStorage.setItem("user",username);
    print_user(username);
    background();
}
function print_user(username){
    hello_user.innerText = `Hello ${username}`;
    hello_user.classList.remove("hidden"); 
}

const saved_username = localStorage.getItem("user");

if (saved_username === null){
    body.style.backgroundImage = "none";
    login_form.addEventListener("submit",LogIn);
}
else {
    login_form.classList.add("hidden") ;
    print_user(saved_username);
    background();  
}