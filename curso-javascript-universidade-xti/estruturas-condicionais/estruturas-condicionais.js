/**
	DECLARAÇÕES PARA ESTRUTURAS DE
		. CONTROLE
		. CONDICIONAIS *
		. LOOPS
		. EXCEÇÕES
**/
// Estruturas condicionais - if/else
var idade = 10;
if( idade < 11 ) {
	alert('criança');
}

var numero = 18;
if( (numero % 2) == 0 ) {
	alert('par');
} else {
	alert('impar');
}

var passou = true;
if( passou ) {
	alert('contratado(a)');
} else {
	alert('não passou.');
}

var novaIdade = 28;
if( novaIdade <= 11 ) {
	alert('criança');
} else if( novaIdade > 11 && novaIdade <= 16 ) {
	alert('pré adolescente');
} else if( novaIdade > 16 && novaIdade <= 21 ) {
	alert('adolescente');
} else if( novaIdade > 21 && novaIdade < 60 ) {
	alert('adulto');
} else {
	alert('melhor idade');
}

var nota = 6;
if( nota >= 7 ) {
	alert('passou');
} else {
	alert('reprovou');

	if( nota == 6 ) {
		alert('Você está em recuperação.');
	}
}