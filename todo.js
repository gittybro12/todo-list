const inputbox = document.getElementById("box");
const listcont = document.getElementById("list-cont");

function AddTask(){
    if(inputbox.value === ''){
        alert("Hello dear, please fill in something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcont.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    inputbox.value = ''
    save();
}

listcont.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("check");
    save();
}else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    save();
}
},false);

function save(){
    localStorage.setItem("data",listcont.innerHTML)
}

function display(){
    listcont.innerHTML = localStorage.getItem("data")
}
display();