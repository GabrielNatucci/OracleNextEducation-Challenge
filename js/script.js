var msg = document.getElementById("msg"); // Seleciona o a caixa de texto onde mostra a mensagem.

document.addEventListener("click", function(event){ // Adiciona um evento à página html.
    input = document.getElementById("inputvalor").value;
    event.preventDefault(); // Evita que a página recarregue.
    let botao = event.target.value; // Lê o valor do botão que foi apertado.
    if (botao == "Criptografar"){
        criptografar(input);
    } else if (botao === "Descriptografar"){
        descriptografar(input);
    } else if (botao == "Clique para copiar"){
        navigator.clipboard.writeText(msg.value)
    }

});

function criptografar(input){
    msg.value = input // Criptografa e imediatamente mostra na caixa de texto.
        .replace(/e/g,"enter")
        .replace(/i/g,"imes")
        .replace(/a/g,"ai")
        .replace(/o/g,"ober")
        .replace(/u/g,"ufat");
}

function descriptografar(){
    msg.value = input // Descriptografa e imediatamente mostra na caixa de texto.
        .replace(/enter/g,"e")
        .replace(/imes/g,"i")
        .replace(/ai/g,"a")
        .replace(/ober/g,"o")
        .replace(/ufat/g,"u");
}