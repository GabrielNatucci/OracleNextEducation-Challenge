
var cripto = document.getElementById("btncripto");
var descripto = document.getElementById("btndescritpo");
var copiar = document.getElementById("copiar");

cripto.addEventListener("click", function(event){ // Adiciona um evento à página html.
    event.preventDefault(); // Evita que a página recarregue.
    input = document.getElementById("inputvalor").value;
    criptografar(input); 
});

descripto.addEventListener("click", function(event){ // Adiciona um evento à página html.
    var input = document.getElementById("inputvalor").value;
    event.preventDefault(); // Evita que a página recarregue.
    descriptografar(input); 
});

copiar.addEventListener("click",function(event){
    var msg = document.getElementById("msg").value; // Seleciona o a caixa de texto onde mostra a mensagem.
    event.preventDefault(); // Evita que a página recarregue.
    navigator.clipboard.writeText(msg);
});


function criptografar(input){
    msg.value = input // Criptografa e imediatamente mostra na caixa de texto.
        .toLowerCase() // Tira os caractéres maíusculos
        .normalize("NFD")
        .replace(/e/g,"enter")
        .replace(/i/g,"imes")
        .replace(/a/g,"ai")
        .replace(/o/g,"ober")
        .replace(/u/g,"ufat");
}

function descriptografar(){
    msg.value = input // Criptografa e imediatamente mostra na caixa de texto.
        .toLowerCase() // Tira os caractéres maíusculos
        .normalize("NFD") // Remove acentos
        .replace(/enter/g,"e")
        .replace(/imes/g,"i")
        .replace(/ai/g,"a")
        .replace(/ober/g,"o")
        .replace(/ufat/g,"u");
}