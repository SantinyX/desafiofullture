//criar conexão entre o Login e a pag index
const logado = JSON.parse(sessionStorage.getItem("controleAtividade.logado"))

if (logado) {
    //Ajustar formulario e declarar as variaveis 
    const formulario = document.querySelector("form")

    //Criando local storage para armazenamento de string.
    let atividadeArmazenada = localStorage.getItem('controleAtividades.atividade')

    let lista = Array()
    if (atividadeArmazenada != null) {
        lista = JSON.parse(atividadeArmazenada)

        lista.forEach((obj) => {
            return;
        })
    }
    
    console.log(lista)

    document.addEventListener('DOMContentLoaded', function (Dom) {

        atualizar(lista);
        return;

    });

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();
        let tarefa = document.getElementById('tarefa');

        if (tarefa.value == "") {
            alert("Preencha o campo")
            return false
        }

        lista.push({
            tittle: tarefa.value,
            status: "uncompleted"
        });
        atualizar(lista);
    });

    //seleção do status
    let selectStatus = document.getElementById("selectStatus");

    //evento change
    selectStatus.addEventListener('change', function (event) {
        event.preventDefault();

        let itensTemp = new Array();
        console.log(itensTemp)
        if (selectStatus.value === 'all') {
            for (i = 0; i < lista.length; i++) {
                itensTemp.push(lista[i]);
            }
            atualizar(itensTemp);
            return;
        }

        for (i = 0; i < lista.length; i++) {
            if (lista[i].status === selectStatus.value) {
                itensTemp.push(lista[i]);
            }
        }
        atualizar(itensTemp);

    });

    //Função de criação da div do item
    function getItem(tittle, index) {
        let div = document.createElement('div');
        div.setAttribute('class', 'todo');

        //Criação do li para lista
        let li = document.createElement('li');
        div.appendChild(li);
        li.appendChild(document.createTextNode(tittle));
        li.setAttribute('class', 'todo-item')
        //nome e valor
        //cria
        let btnCheck = document.createElement('button');
        btnCheck.setAttribute('class', 'check-btn');
        btnCheck.addEventListener('click', function (event) {

            //função!!!!(index)
            finalizar(index)
        });
        let iconCheck = document.createElement('i');

        //pesquisar "aria-hidden"
        iconCheck.setAttribute('class', 'fas fa-check');
        iconCheck.setAttribute('aria-hidden', 'true');
        //appendchild = item dentro de item
        btnCheck.appendChild(iconCheck);
        div.appendChild(btnCheck);

        //criar botão trash
        let btnTrash = document.createElement('button');
        btnTrash.setAttribute('class', 'trash-btn');
        btnTrash.addEventListener('click', function (event) {
            //função!!!!(index)
            remover(index)
        });

        let iconTrash = document.createElement('i');
        iconTrash.setAttribute('class', 'fas fa-trash');
        iconTrash.setAttribute('aria-hidden', 'true');
        btnTrash.appendChild(iconTrash);
        div.appendChild(btnTrash)

        return div;
    }

    function atualizar(itens) {
        //Limpa a lista
        let itensTemp = Array();

        //atualizar lista
        let todolist = document.querySelector(".todo-list");
        todolist.textContent = "";
        for (i = 0; i < itens.length; i++) {
            itensTemp.push(itens[i]);
            todolist.appendChild(getItem(itens[i].tittle, i));
        }
        listaTemp = itensTemp;

        localStorage.setItem("controleAtividades.atividade", JSON.stringify(lista))
        console.log(JSON.stringify(lista))
        console.log(itensTemp)

    }

    function remover(index) {
        //remoção do item do array
        listaTemp.shift(index)
        lista.shift(index)

        atualizar(listaTemp)
    }

    function finalizar(index) {
        //remoção do item do array
        listaTemp[index].status = 'completed'
        atualizar(listaTemp)
    }
    
} else {
    window.location = "Login.html"
}