function cadastrarEmpresa() {
    //URL que será chamada do back-end
    const url = "https://api.franciscosensaulas.com/api/v1/empresa";
    //request body
    const dados = {
        nome: "Fabicho LTDA",
        cnpj: "19.783.660/0001-14"
    }
    //faz o pedido do front para o back-end
    fetch(url, {
        method: "POST", //POST serve para criar ou cadastrar
        headers: {
            // serve para dizer como vai ser enviado o dado
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados) // converte de objetos(dicionário) para string
    })
        .then(response => response.json()) // converte de string para objeto(dicionário)
        .then(dado => {
            // Deu certo, alerta o usuario 
            alert("Empresa cadastrada com sucesso!");
        }) 
        .catch(erro => {
            // Deu errado, mostra o erro no console e alerta o usuário
            console.error("Erro: " + erro)
            alert("Ocorreu um erro ao tentar cadastrar empresa!");
        });
}
function listarEmpresa() {
    const url = "https://api.franciscosensaulas.com/api/v1/empresa";

    const textarea = document.getElementById ("empresas");

    //limpar textarea
    textarea.value = "";

    fetch(url, {
        method: "GET" //GET serve para buscar ou listar
    })
        .then(response => response.json())
        .then(empresas => {
            for(let i = 0; i < empresas.length; i++) {
                const empresa = empresas[i];
                const texto =`${empresa.id} | ${empresa.nome} | ${empresa.cnpj}\n`;
                textarea.value = textarea.value + texto;
            }
        })
        .catch(erro => {
            // Código executado quando o corre algum erro
            console.error("Erro: " + erro)
            alert("Ocorreu um erro ao tentar listar empresas!");
        });
}

function apagarEmpresa() {
    const idParaApagar = parseInt(prompt("Digite o id que será apagado: "));
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaApagar;
    
    fetch(url, {
        method: "DELETE"
    })
        .then(response => response)
        .then(dados => {
            alert("Empresa apagada com sucesso!");
            listarEmpresa();   
        })
        .catch(erro => {
            //codigo executado quando ocorre um erro
            console.error("Erro: " + erro);
            alert("Ocorreu um erro ao tentar apagar empresa!");
        });
}

function consultarEmpresa() {
    const idParaConsultar = parseInt(prompt("Digite o id que será consultado: "));
     const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaConsultar;

     const textarea = document.getElementById("empresas");

        //limpar textarea
        textarea.value = "";

    fetch(url) 
        .then(response => response.json())
        .then(empresa => {
            const texto = `ID: ${empresa.id}\nNome: ${empresa.nome}\nCNPJ: ${empresa.cnpj}\n`;
            textarea.value = textarea.value + texto;
        })
        .catch(erro => {
            //codigo executado quando ocorre um erro
            console.error("Erro: " + erro);
            alert("Ocorreu um erro ao procurar a empresa!");
        });

}

function editarEmpresa() {
    const idParaEditar = parseInt(prompt("Digite o id que será editado: "));
    const novoNome = prompt("Digite o novo nome: ");
    const novoCNPJ = prompt("Digite o novo CNPJ: ");

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaEditar;

    const dados = {
        nome: novoNome,
        cnpj: novoCNPJ
    }
    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(response => response)
        .then(empresa => {
            alert("Empresa editada com sucesso!");
            listarEmpresa();
        })
        .catch(erro => {
            //codigo executado quando ocorre um erro
            console.error("Erro: " + erro);
            alert("Ocorreu um erro ao tentar editar empresa!");
        });
}