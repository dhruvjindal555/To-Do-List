console.log("welcome here!")

const btn = document.querySelector(".btn")
const input = document.querySelector(".addingTask input")
const ul = document.querySelector(".listContainer ul")
btn.addEventListener("click", () => {
    let value = input.value;
    if (value == "") {
        console.log("click working")
        alert('You must try entering something')
        input.placeholder = "Please enter task"
    } else {
        // ul.insertAdjacentHTML("beforeend",`<li class="unChecked">${value}</li>`)


        //CREATIVE WAY
        let li = document.createElement('li')
        li.innerHTML = input.value
        ul.appendChild(li)
        li.classList.add('unChecked')
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value="";
    saveData()
})

ul.addEventListener("click", (e) => {
    console.log("check click working")
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('unChecked');
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data",ul.innerHTML)
}

function getData(){
    ul.innerHTML = localStorage.getItem('data')
}
getData();