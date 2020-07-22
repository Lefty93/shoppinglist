
let button = document.getElementById("adding");
// let button = document.getElementsByTagName("button")[0]
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
    if (input.value.length === 0) {
        alert("Please enter something");
    }
    else if (input.value.length > 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""
    }
    
    })

