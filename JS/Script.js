
//Ajustar formulario e declarar as variaveis 
const formulario = document.querySelector("form")

formulario.addEventListener("submit", function(event){
    //criar array para armazenar os itens
    let adicionar = document.getElementById("addTarefa")

    event.preventDefault();
    //capturar os elementos digitado pelos usuários 
       if ( adicionar.value == ""){
        alert("Digite a tarefa");
        return false;
        }
      
    //criação do item
    let item = {
        addTarefa: adicionar.value, status:"Pendente"        
    }

    

     console.log(item)

})

function addTarefa(event){

}



//FUNCTION DOM(OBJ){}
//criar tabela que já existe no HTML
/*const form = documento.querySelector("local que deseja")*/

//CRIAR LAÇOS ENTRE ELEMENTOS

/**/

