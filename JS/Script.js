let adicionar = document.getElementById("addTarefa");
let btn_adicionar = document.getElementById("add_tarefa");


const exibirInformacao = function(){

    if ( adicionar.value == ""){
        alert("Tarefa não infomada!");
    }
    else{
        console.log(adicionar.value);
    }
}

btn_adicionar.addEventListener("click", exibirInformacao );

