
var vez = "x";

function clicado(botao) {
	if (botao.innerText != "")
		return; // botão já clicado
		
	if (vez == "x") {
		botao.innerText = "x";
		vez = "o";
	} else {
		botao.innerText = "o";
		vez = "x";
	}
}

function inicia(){
	document.getElementById('jogo').style.display = "grid";
	document.getElementById('boas-vindas').style.display = "none";
}