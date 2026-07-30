let input = document.getElementById("inp");
let ul = document.querySelector("ul");

let arr = JSON.parse(localStorage.getItem("todos")) || [];

function save() {
    localStorage.setItem("todos", JSON.stringify(arr));
}

function addtodo() {

    if (input.value.trim() === "") {
        alert("Please enter value");
        return;
    }

    arr.push({
        data: input.value.trim(),
        done: false
    });

    save();
    display();
    input.value = "";
}

function display() {

    ul.innerHTML = "";

    arr.forEach((val, idx) => {

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = val.done;

        let span = document.createElement("span");
        span.textContent = val.data;

        if (val.done) {
            span.style.textDecoration = "line-through";
        }

        checkbox.onchange = () => {

            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }

            arr[idx].done = checkbox.checked;
            save();
        };

        let li = document.createElement("li");

        let btnBox = document.createElement("div");
        btnBox.className = "btn-box";

        let edit = document.createElement("button");
        edit.textContent = "Edit";

        edit.onclick = () => {

            let New = prompt("Enter new value", val.data);

            if (New === null || New.trim() === "") return;

            arr[idx].data = New.trim();

            save();
            display();
        };

        let del = document.createElement("button");
        del.textContent = "Delete";

        del.onclick = () => {

            arr.splice(idx, 1);

            save();
            display();
        };

        btnBox.appendChild(edit);
        btnBox.appendChild(del);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(btnBox);

        ul.appendChild(li);

    });

}

window.onload = display;