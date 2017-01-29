/*
	ESTRUTURAS PARA LOOPS - REPETIÇÃO
*/

/*
	1 passo. Inicialização
	2 passo. Teste
	3 passo. Ação
	4 passo. Atualização
	 [1 passo]    [2 passo]  [4 passo]
for( [var i = 0]; [i < 3];   [i++] ) {
	[3 passo]
	...
}
*/
for( var i = 0; i < 3; i++ ) {
	alert(i);
}

var texto = '';
for( var i = 0; i < 3; i++ ) {
	// texto = texto + i;
	texto += i + ',';
}
alert(texto); // texto 012

texto = '';
for( var i = 10; i > 0; i-- ) {
	texto += i + ',';
}
alert(texto);

texto = '';
for( var i = 0; i <= 8; i++ ) {
	if( i % 2 == 0 ) {
		texto += i;

		if( i != 8 ) {
			texto += ',';
		}
	}
}
alert(texto);

texto = '';
for( var i = 0; i <= 20; i++ ) {
	if( i % 2 == 0 ) {
		if( i == 20 ) {
			texto += i;
			break;
		}

		texto += i + ',';
	}
}
alert(texto);