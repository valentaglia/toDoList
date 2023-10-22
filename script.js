let input = document.querySelector("input")
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")
let nuevaTarea = ""

class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea) {

        let inputItem = document.createElement("input")
        inputItem.setAttribute("type", "text")
        inputItem.value = nuevaTarea
        inputItem.disabled = true
        inputItem.classList.add("item-input")

        let div = document.createElement("div")
        div.classList.add("Item")

        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = "<i class=\"fas fa-lock\"></i>"
        botonEditar.classList.add("boton-editar")

        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = "<i class=\"fas fa-trash\"> </i>"
        botonRemover.classList.add("boton-remover")

        div.appendChild(inputItem)
        div.appendChild(botonEditar)
        div.appendChild(botonRemover)
        container.appendChild(div)

        botonEditar.addEventListener("click", function desbloquear() {
            if (inputItem.disabled == true) {
                inputItem.disabled = false
                botonEditar.innerHTML = "<i class=\"fas fa-lock-open\"></i>"
            }
            else {
                inputItem.disabled = true
                botonEditar.innerHTML = "<i class=\"fas fa-lock\"></i>"
            }
        })

        botonRemover.addEventListener("click", function () {
            container.removeChild(div)
        })
    }
}

botonAgregar.addEventListener("click", function chequearInput() {

    if (input.value != "") {

        new Item(input.value)
        input.value = ""
    }
})
