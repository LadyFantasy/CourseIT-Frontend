//////-Primer ejercicio
const inputs = document.querySelectorAll(".inputText")


const clean = () => {
   inputs.forEach(input=>input.value="")
}


///////Segundo y tercer ejercicios
const inputAdd = document.querySelector(".input-add")

const list = document.querySelector(".inputs-li")

const addInput = () => {
    const li = document.createElement("li")
    list.appendChild(li)
    li.innerText = inputAdd.value
    inputAdd.value = ""  
}

const deleteInput = () => {
    list.innerHTML = ""
}