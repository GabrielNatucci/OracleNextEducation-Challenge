
var cripto = document.getElementById("btncripto");
var descripto = document.getElementById("btndescritpo");
var copiar = document.getElementById("copiar");
var apagar = document.getElementById("btnapagar");
var input = document.getElementById("inputvalor").value;

cripto.addEventListener("click", function(event){ // Adiciona um evento à página html.
    event.preventDefault(); // Evita que a página recarregue.
    criptografar(input);
});

descripto.addEventListener("click", function(event){ // Adiciona um evento à página html.
    event.preventDefault(); // Evita que a página recarregue.
    descriptografar(input); 
}); 

apagar.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("inputvalor").value = " ";
});

copiar.addEventListener("click",function(event){
    var msg = document.getElementById("msg"); // Seleciona o a caixa de texto onde mostra a mensagem.
    event.preventDefault(); // Evita que a página recarregue.
    navigator.clipboard.writeText(msg.innerHTML);
});


function criptografar(input){
    msg.innerHTML = input // Criptografa e imediatamente mostra na caixa de texto.
        .toLowerCase() // Tira os caractéres maíusculos
        .normalize("NFD")
        .replace(/e/g,"enter")
        .replace(/i/g,"imes")
        .replace(/a/g,"ai")
        .replace(/o/g,"ober")
        .replace(/u/g,"ufat");
}

function descriptografar(){
    msg.innerHTML = input // Criptografa e imediatamente mostra na caixa de texto.
        .toLowerCase() // Tira os caractéres maíusculos
        .normalize("NFD") // Remove acentos
        .replace(/enter/g,"e")
        .replace(/ai/g,"a")
        .replace(/imes/g,"i")
        .replace(/ober/g,"o")
        .replace(/ufat/g,"u");
}