/*
	ESTRUTURAS PARA LOOPS - REPETIÇÃO
*/
var numeros = ['um', 'dois', 'três'];

var Carro = {
	marca: 'Nissan',
	modelo: '350Z',
	comprimento: '3.345mm',
	velocidade: '320km/h',
	cavalos: '350'
};

for( i = 0; i < numeros.length; i++ ) {
	alert(numeros[i]);
}

for( i in numeros ) {
	alert(numeros[i]);
}

for( props in Carro ) {
	alert(props + ' = ' + Carro[props]);
}