function exercicio01CompararDoisNumeros(){
    const campoNumero1 = document.getElementById("numero1");
    const numero1 = parseInt(campoNumero1.value);

    const campoNumero2 = document.getElementById("numero2");
    const numero2 = parseInt(campoNumero2.value);

    if (numero1 < numero2){
        alert(`Maior número:  ${numero1}`);
    }else if (numero1 == numero2){
        alert(`Os numeros ${numero1} e ${numero2} são iguais`);
    }else {
        alert(`Menor número: ${numero2}`);
    }

     if (campoNumero1 === null){
        alert("Selecione um tipo");
        return;
    }
}

function exercicio02ClassificarIdade(){
    const campoNome = document.getElementById("nome");
    const nome = campoNome.value;

    const campoIdade = document.getElementById("idade");
    const idade = campoIdade.value;

    if (idade > 18){
        alert(nome + " " + "tem menos que 18 anos, ainda é menor de idade");
    }else if((idade <= 18) && (idade > 60)){
        alert(`${nome} é adulto`);
    }
}