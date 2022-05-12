let taskArray = Array();

const getInputs = (event) => {
    //cancelamento parcial do evento apra não atualizar a pag
    event.preventDefault()

    //recolhendo texto digitado no input    
    let adicionarTarefa = document.getElementById('add_tarefa').value

    //adicionar o objeto no array
    taskArray.push({adicionarTarefa, status: "Pendente"})
    console.log({taskArra})
    addElementToList()
    checkItem()
}



    