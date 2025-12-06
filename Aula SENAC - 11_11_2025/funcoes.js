function mudarTexto() {
    document.getElementById("Mensagem").innerHTML = "Texto alterado via JavaScript!";
}

function voceClicou() {
    alert("Você clicou no botão!");
}

function calcular() {
var x = Number(prompt("Digite o primeiro valor"));
var y = Number(prompt("Digite o segundo valor"));
var calc = x + y;
alert("O total do cálculo entre "+x+" e "+y+" é "+calc+".");
}

function saudar() {
let nome = prompt("Digite o nome do usuário");
alert("Olá, " + nome + "!");
console.log("Olá, " + nome + "!");
}

