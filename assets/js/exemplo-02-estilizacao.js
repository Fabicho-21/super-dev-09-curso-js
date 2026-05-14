function alternarVisibilidadeBotao(){
    // Busca no HTML o elemento que possui o id "caixa-01"
    const divCaixa01 = document.getElementById("caixa-01");
    //Busca no HTML o botao que possui o id "botao-alternar-visibilidade"
    const botaoAlternarVisibilidade = document.getElementById("botao-alternar-visibilidade");

    //Verificar se a caixa está sem valor de display ou escondida
    if(divCaixa01.style.display === "" || divCaixa01.style.display === "none"){
        // Mostra a caixa na tela
        divCaixa01.style.display = "block";
        // Altera o texto do botão para indicar que a caixa pode ser ocultada
        botaoAlternarVisibilidade.innerText = "Ocultar caixa";

    // Caso a caixa já esteja visível
    }else{
        // Esconde a caixa da tela
        divCaixa01.style.display = "none";
        // Altera o texto do botão para indicar que a caixa pode ser apresentada novamente
        botaoAlternarVisibilidade.innerText = "Apresentar caixa";
    }
}

function definirCorVermelho(){
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList.remove("caixa-azul");
    divCaixa01.classList.add("caixa-vermelha");
}

function redefinirCor(){
    const divCaixa01 = document.getElementById("caixa-01");
    //Apagar todas as classes atribuídas a div
    divCaixa01.classList = [];
}

function definirCorAzul(){
    const divCaixa01 = document.getElementById("caixa-01");
    // Remove a classe 'caixa-vermelha' da div
    divCaixa01.classList.remove("caixa-vermelha");
    // Adicionar a classe 'caixa-azul' na div
    divCaixa01.classList.add("caixa-azul");
}

function arcoIris(){
    const cores = ["vermelha", "azul", "laranja", "amarela", "verde","anil","violeta"];
    const divCaixa01 = document.getElementById("caixa-01");
    debugger
    for (let i = 0; i < cores.length; i++){
        // alert(cores[i]);
        setTimeout(() => {
            const cor = `caixa-${cores[i]}`;
            divCaixa01.classList = [cor];
        }, i * 1000);
    } 
}

function apresentarCamposPessoaFisica(){
    const divCamposPf = document.getElementById("campos-pf");
    divCamposPf.classList.remove("hidden");

    const divCamposPj = document.getElementById("campos-pj");
    divCamposPj.classList.add("hidden");
}

function apresentarCamposPessoaJuridica(){
    const divCamposPj = document.getElementById("campos-pj");
    divCamposPj.classList.remove("hidden");

    const divCamposPf= document.getElementById("campos-pf");
    divCamposPf.classList.add("hidden");

}

function alterarImagem(evento){
    if(evento.key === "Enter"){
        
    }
}