let input=document.querySelector("input")
let btn=document.querySelector("button")
let list=document.querySelector("ol")
btn.addEventListener("click",taskHandler)
function taskHandler(){
    let data=input.value;
    if(data==""){
        alert("Please enter a task");
        return;
    }
    let li=document.createElement("li")
    li.innerHTML=data;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.addEventListener("click",function(){
        li.remove();
    });
    li.appendChild(delbtn);
    list.appendChild(li);
    input.value="";
}