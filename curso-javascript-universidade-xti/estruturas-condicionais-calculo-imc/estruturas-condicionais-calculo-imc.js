function calcularIMC() {
	var formulario = document.getElementById('formulario');
	var mensagem = '';

	// O resgate dos valores dessa forma, se dá porque o mesmo está sendo resgatado com o atributo 'name' do input.
	// Caso não houvesse o atributo name, haveria a necessidade de resgate de outra forma, como pelo id do input.
	var kilos = formulario.kilos.value; // nesse momento está com o tipo String
	var metros = formulario.metros.value; // nesse momento está com o tipo String
	var centimetros = formulario.centimetros.value; // nesse momento está com o tipo String

	kilos = +kilos; // se o valor não for númerico, forçará a conversão para número (somente se for positivo).
	metros = +metros; // se o valor não for númerico, forçará a conversão para número (somente se for positivo).
	centimetros = +centimetros; // se o valor não for númerico, forçará a conversão para número (somente se for positivo).

	// Caso não houvesse a conversão dos valores para número, haveria a concatenação das informações somente, por exemplo
	// uma pessoa com 1m69cm, iria ficar '10069', não fazendo o cáculo corretamente.
	var altura = ((metros * 100) + centimetros) / 100; // cáculo dos centimetros -> 1m = 100cm
	var imc = kilos / (altura * altura);

	formulario.imc.value = imc.toFixed(2);

	if( imc < 20 ) {
		mensagem = 'Abaixo do peso.';
	} else if( imc >= 20 && imc < 25 ) {
		mensagem = 'Peso Ideal.';
	} else if( imc >= 25 && imc < 30 ) {
		mensagem = 'Sobrepeso';
	} else if( imc >= 30 && imc < 35 ) {
		mensagem = 'Obesidade Moderada.';
	} else if( imc >= 35 && imc < 40 ) {
		mensagem = 'Obesidade Severa.';
	} else if( imc >= 40 && imc < 50 ) {
		mensagem = 'Obesidade Mórbida.';
	} else {
		mensagem = 'Super Obesidade.';
	}

	document.getElementById('mensagem').innerText = mensagem;
}