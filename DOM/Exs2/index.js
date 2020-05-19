const button = document.querySelector(".button")
const modal = document.querySelector(".modal")
const h1 = document.querySelector("h1")

button.addEventListener("click", () => {
    modal.classList.toggle("none")
})

modal.addEventListener("mouseover", () => {
    modal.classList.add("perrito")
    h1.innerText = "Acá sí tá";

})

modal.addEventListener("mouseout", () => {
    modal.classList.remove("perrito")
    h1.innerText = "Acá no tá";
})