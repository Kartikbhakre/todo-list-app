let input = document.querySelector("#input");
let ul = document.querySelector("ul");

let arr = JSON.parse(localStorage.getItem("todos"))||[];

function save(){
 localStorage.setItem("todos",JSON.stringify(arr));
}

function add(){
    if(input.value.trim()=="")return ;
    arr.push(input.value);
    save();
    display();
    input.value="";
    
    function display(){
        ul.innerHTML = "";
        arr.forEach((val, idx)=>{
        let li  = document.createElement("li");
        li.textContent = val;

        let del = document.createElement("button");
        del.textContent = "delete" ;
        del.onclick = ()=>{
            arr.splice(idx,1);
            save();
            display();
        }

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.onclick = ()=>{
            let New = prompt("Enter new value " , val);
            if(New.trim()=="")return ;
            arr[idx]=New ;
            save();
            display();
        }
        li.append(del);
        li.append(edit);
        ul.append(li);
        });
    }
}
