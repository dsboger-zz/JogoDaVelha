
var vez = "x";
var tempo = 20;
var x;

function relogio(){
	tempo = tempo - 1;
	document.getElementById('timer').innerText = tempo;
	if (tempo == 0) {
		document.getElementById('gameover').innerText = 'VOCÊ PERDEU!!!!!';
		clearInterval(x);
		tempo = 0
		var all = document.getElementsByTagName('button');
		for (var i=0, max=all.length; i < max; i++) {
     	all[i].disabled = true;
	}
}
}

var pontoO = 0;
var pontoX = 0;
var empate = 0;

function clicado(botao) {

	if (botao.innerText != "")
		return; // botão já clicado
		
	if (vez == "x") {
		tempo = 21;
		botao.innerText = "x";
		vez = "o";
	} else {
		tempo = 21;
		botao.innerText = "o";
		vez = "x";
	} 
}

function marcarX () {
	pontoX += 1;
	document.getElementById("px").innerText = pontoX;
}

function marcarO () {
	pontoO += 1;
	document.getElementById("po").innerText = pontoO;
}

function marcarE () {
	empate += 1;
	document.getElementById("pe").innerText = empate;
}

function inicia(){
	document.getElementById('jogo').style.display = "grid";
	document.getElementById('boas-vindas').style.display = "none";
	x = setInterval(relogio, 1000);
}

