let input = document.getElementById("inp") ;
let ul = document.querySelector("ul");

arr = JSON.parse(localStorage.getItem("todos"))||[] ;

function save(){
    localStorage.setItem("todos" , JSON.stringify(arr));
}
function addtodo(){
    if(input.value.trim()==""){
        alert("please enter value:");
        return ;
    }
    else{
        arr.push({data:input.value , done:false});
        save();
        display();
        input.value = "";
    }
}
 function display(){
    ul.innerHTML = "";

    arr.forEach((val , idx)=>{
     let checkbox = document.createElement("input");
     checkbox.type="checkbox";  
     checkbox.onchange =  ()=>{
        if(checkbox.checked == true){
        span.style.textDecoration = 'line-through';
        }
        else{
        span.style.textDecoration = 'none';
        }
        arr[idx].done = checkbox.checked ;
        save();

     } 
     let li = document.createElement("li");
     let span = document.createElement("span");
     span.textContent = arr[idx].data ;

     let del = document.createElement("button");
     del.textContent = "delete" ;
     del.onclick = ()=>{
        arr.splice(idx , 1);
       save();
        display()
     }
     let edit = document.createElement("button");
     edit.textContent = "edit";
     edit.onclick = ()=>{
        let New = prompt("enter new value ",val);
        if(New.trim()=="")return ;
        arr[idx].data = New ;
        save();
        display();
     } 
     ul.appendChild(li);
     li.appendChild(checkbox);
    li.appendChild(span);
     li.appendChild(del);
     li.appendChild(edit);
    });
 }
 
 window.onload = display;
