function cadastrarProduto(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";

        const nomeProduto = prompt("Digite o nome do produto: ");
        const categoriaProduto = prompt("Digite a categoria do produto: ");
        const precoProduto = parseInt(prompt("Digite o preço do produto: ")); 

    const dados = {
        nome: nomeProduto,
        categoria: categoriaProduto,
        preco: precoProduto
    }
    fetch(url, {
        method: "POST",//criar
        headers: {
            //como vai ser enviado
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(dado => {
            alert("Produto cadastrado:");
        })
        .catch(error => {
            alert("Erro ao cadastrar produto:" + error);
        });
}
//------------------------
function listarProdutos(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";

    const textarea = document.getElementById ("produtos");

    textarea.value = "";

    fetch(url, {
        method: "GET"//presquisar ou listar
    })
        .then(response => response.json())
        .then(produtos => {
            for(let i = 0; i < produtos.length; i++) {
                const produto = produtos[i];
                const texto =`${produto.id} | ${produto.nome} | R$ ${produto.preco.toFixed(2)}\n`;
                textarea.value = textarea.value + texto;
            }
        })
        .catch(error => {
            alert("Erro ao listar produtos:" + error);
        });
}
//------------------------
function consultarProdutoPorId(){
    
    const idProduto = parseInt(prompt("Digite o id do produto: "));
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/{id}";

    const textarea = document.getElementById ("produto");

    textarea.value = "";

    fetch(url.replace("{id}", idProduto))
        .then(response => response.json())
        .then(produto => {
            const texto = `ID: ${produto.id}\nNome: ${produto.nome}\nPreço: R$ ${produto.preco}\nCategoria: ${produto.categoria}\n`;
            textarea.value = textarea.value + texto;
        })
        .catch(error => {
            alert("Erro ao consultar produto:" + error);
        });

}
//------------------------
function editarProduto(){

}
//------------------------
function apagarProduto(){

}