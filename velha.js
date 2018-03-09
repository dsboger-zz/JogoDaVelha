
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

var ultima;


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
	ultima = botao;
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

function depoisqueacabareinicia() {
	vez = "x"
		
	document.getElementById("bt_0_0").innerText = "";
	document.getElementById("bt_0_1").innerText = "";
	document.getElementById("bt_0_2").innerText = "";
	document.getElementById("bt_1_0").innerText = "";
	document.getElementById("bt_1_1").innerText = "";
	document.getElementById("bt_1_2").innerText = "";
	document.getElementById("bt_2_0").innerText = "";
	document.getElementById("bt_2_1").innerText = "";
	document.getElementById("bt_2_2").innerText = "";
	
}

function desfazendo(refazer){
    ultima.innerText = "";
    
    if(vez == "x"){
        vez = "o"
    } else {
        vez = "x"
    }

}
