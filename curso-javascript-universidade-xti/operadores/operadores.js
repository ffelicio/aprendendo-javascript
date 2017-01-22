/**
 * Description: Estudo dos operadores
 */

alert(2 + 3); // Operador binário
alert(-2); // Operador unário

// Como a operação é feita entre números, irá realizar a soma.
var a = 9 + 4;
alert(a);

// Como a operação é feita utilizando um número e uma string, irá fazer a concatenação.
var b = 9 + '4';
alert(b);

/*
 * Neste caso, haverá a conversão dos valores em formato string,
 * porque com o operador "/" a ação só pode ser realizada com números.
 */
var c = 9 / '4';
alert(c);

/*
 * Neste caso, haverá a conversão dos valores em formato string,
 * porque com o operador "/" a ação só pode ser realizada com números.
 */
var d = 9 * '4';
alert(d);

/*
 * Neste caso, haverá a conversão dos valores em formato string,
 * porque com o operador "/" a ação só pode ser realizada com números.
 */
var e = 9 - '4';
alert(e);

/*
 * Neste caso explica a precêdencia dos operadores.
 * Primeiro haverá a multiplicação, segundo a subtração e depois a soma.
 */
var f = 7 - 4 + 3 * 2;
alert(f);

/*
 * Neste caso explica a precêdencia dos operadores.
 * Como existe a separação entre os parentêses, irá fazer o cálculo
 * e após haverá a multiplicação do resultado obtido entre os valores dentro dos parentêses. 
 */
var g = (7 - 4 + 3) * 2;
alert(g);