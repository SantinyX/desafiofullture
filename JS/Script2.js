//SCRIPT DE ESTUDO!!!

/*

JSON O QUE É*
Eviar para o DOM e armazenar para o localStorage
IF(TAREFA != NULL){
    mais o que foi no array = localstorage
}
*/

//CRIAÇÃO DO FORMULARIO E SEUS EVENTOS
const formulario = document.querySelector('form')

const listaAtividades = Array()

//Adicionar o evento de formulário
formulario.addEventListener("submit", function (event) {

    const adicionar = document.getElementById('addTarefa')
    
    event.preventDefault()

    if (adicionar.value == "");{
        alert("Preencha o campo!")
        return false
    }

    let item = {
        addTarefa: adicionar.value,
        status: "Pendente"
    }
    console.log(item)

})



function addElementToArray(taskArray) {
    let div = document.createElement("div");
    div.className = "todo"
    
    let li = document.createElement("li", "todo-list")
    let inputValue = document.getElementById("task-input").value
    let textNode = document.createTextNode(inputValue)
        li.appendChild(textNode)
        
        li.className = "todo-item"

  
    for (let i = taskArray.length; i < taskArray.length+1; i++){
        div.id = 'todo-list-div' + [i]
        li.id = "todo-list-item" + [i]
    }
    //button setups
    let buttonCheck = document.createElement("button")
        buttonCheck.className="check-btn"
        buttonCheck.setAttribute("id", "checked-btn");
//sets the images of check button
    let imageButton = document.createElement("i")
        imageButton.className = "fas fa-check"
        buttonCheck.appendChild(imageButton)
//initializes trash button
    let buttonTrash = document.createElement("button")
        buttonTrash.className = "trash-btn"
        buttonTrash.setAttribute("id", "delete-btn")
       
//sets the images of trash button
    let imageTrashButton = document.createElement("i")
        imageTrashButton.className = "fas fa-trash"
        buttonTrash.appendChild(imageTrashButton)
}
//criar validação de recebimento

//Criar recebimento do input*/