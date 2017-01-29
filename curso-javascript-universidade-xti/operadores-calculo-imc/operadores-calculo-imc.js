function calcularIMC() {
	var formulario = document.getElementById('formulario');

	// O resgate dos valores dessa forma, se dá porque o mesmo está sendo resgatado com o atributo 'name' do input.
	// Caso não houvesse o atributo name, haveria a necessidade de resgate de outra forma, como pelo id do input.
	var kilos = formulario.kilos.value; // nesse momento está com o tipo String
	var metros = formulario.metros.value; // nesse momento está com o tipo String
	var centimetros = formulario.centimetros.value; // nesse momento está com o tipo String

	kilos = +kilos; // se o valor não for númerico, forçará a conversão para número (somente se for positivo).
	metros = +metros; // se o valor não for númerico, forçará a conversão para número (somente se for positivo).
	centimetros = +centimetros; // se o valor não for númerico, forçará a conversão para número (somente se for positivo).

	// Caso não houvesse a conversão dos valores para número, haveria a concatenação das informações somente, por exemplo
	// uma pessoa com 1m69cm, iria ficar '10069', não fazendo o cálculo corretamente.
	var altura = ((metros * 100) + centimetros) / 100; // cálculo dos centimetros -> 1m = 100cm
	var imc = kilos / (altura * altura);

	formulario.imc.value = imc.toFixed(2);
}