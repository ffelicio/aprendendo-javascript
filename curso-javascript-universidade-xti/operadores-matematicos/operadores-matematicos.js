/*
	+  = Adição - binário
	-  = Subtração
	*  = Multiplicação
	/  = Divisão
	%  = Módulo - resto
	+  = Positivo - unário
	-  = Negativo - unário
	++ = Incremento +1
	-- = Decremento -1
*/

var adicao = 7 + 3;
alert(adicao);

var concatenacao = 'Oi ' + 'pessoal!';
alert(concatenacao);

var subtracaoFloatInteger = 12.3 - 5;
alert(subtracaoFloatInteger);

var subtracaoEntreStrings = 'texto' - '5';
alert(subtracaoEntreStrings); // Retorna "NaN"

var multiplicacao = 5 * 3;
alert(multiplicacao);

var divisao = 15 * 3;
alert(divisao);

var modulo = 6 % 2; // Geralmente utilizado para saber se é par ou impar.
alert(modulo);

var unarioPositivo = +4;
alert(unarioPositivo);

var unarioPositivoString = +'4'; // realiza a conversão para número.
alert(unarioPositivoString);

var unarioNegativo1 = -4;
alert(unarioNegativo1);

var unarioNegativo2 = -(+4);
alert(unarioNegativo2);

var unarioNegativo3 = -(-4);
alert(unarioNegativo3);

var a = 6;
var b = ++a; // igual a 'a + 1'.´Chamado de pré incremento
alert('a = ' + a); // igual a 7, devido ao incremento guardado na variável "b"
alert('b = ' + b); // igual a 7, resultado do incremento.

var c = 6;
var d = c++; // Pós incremento
alert('c = ' + c); // igual a 7, devido ao incremento guardado na variável "b"
alert('d = ' + d); // igual a 6, como há o prosseguimento do script ainda não houve a soma.

var e = 6;
var f = --e; // igual a 'a + 1'.´Chamado de pré decremento
alert('e = ' + e); // igual a 5, devido ao decremento guardado na variável "b"
alert('f = ' + f); // igual a 5, resultado do decremento.

var g = 6;
var h = g--; // Pós decremento
alert('g = ' + g); // igual a 5, devido ao decremento guardado na variável "b"
alert('h = ' + h); // igual a 6, como há o prosseguimento do script ainda não houve a subtração.