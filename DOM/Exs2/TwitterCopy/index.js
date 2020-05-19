const input = document.querySelector(".input")
const list = document.querySelector(".list")
const firstLi = document.querySelector(".first-li")
const clearAllLi = document.querySelector(".firstli2")



// crea <li> con input.value
input.addEventListener("keydown", (e) => {

    if (e.key === "Enter" && input.value != "") {
        list.style.display = "block"
        firstLi.style.display = "flex"

        const li = document.createElement("li")
        li.classList.add("li")
        li.innerHTML = `<span><i class="fa fa-search"></i><span>${input.value}</span></span><i class="fa fa-times">`
        list.appendChild(li)

        input.value = ""
    }
})


//elimina todos los <li>
clearAllLi.addEventListener("click", () => {
   while(list.childNodes.length > 2) {
       list.removeChild(list.lastChild)
   }
   firstLi.style.display = "none"
   })



//elimina <li> en particular
document.addEventListener("click", (e) => {
    if (e.target.closest(".fa.fa-times")) {
        console.log(e.target.parentNode)
    e.target.parentNode.remove()
    }
})



//oculta list al clickear afuera
document.addEventListener("click", (event) => {	
    if (event.target.closest(".container-input") || event.target.closest(".fa.fa-times")) return;

    list.style.display = "none"
})
