/*
	== Igualdade
	=== Igualdade (valor e tipo iguais) - operador de identidade
	!= Diferente
	!== Identidade Diferente (valor e tipo diferente)
	> Maior
	< Menor
	>= Maior ou igual
	<= Menor ou igual 
*/

var a = 6;

/*
alert(a == 6); // true
alert(a == 7); // false
alert(a == '6'); // true - só faz a comparação sem verificar o tipo.
alert(a === '6'); // false - valor igual, mas com tipo diferente
alert(a != '6'); // false - comparação de valores.
alert(a != '5'); // true
alert(a !== 6); // true - valor igual, mas com tipo diferente
*/

// Operador 'Maior que'
alert(a > 7); // false
alert(a > 5); // true
alert('a' > '5'); // true
alert('a' > 'b'); // false

// Operador 'Menor que'
alert('a' < 'b'); // true
alert(a < 7); // true
alert(a < 5); // false

// Operador 'Maior ou igual'
alert(a >= 6); // true
alert(a >= 5); // true
alert(a >= 7); // false

// Operador 'Menor ou igual'
alert(a <= 6); // true
alert(a <= 7); // true
alert(a <= 5); // false