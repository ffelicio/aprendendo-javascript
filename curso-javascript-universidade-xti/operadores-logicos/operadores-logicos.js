/*
	&& AND (e)
	|| OR  (ou)
	!  NOT (não)
*/

var x = 6;
alert((x >=  1) && (x <= 10)); // true
alert((x >=  1) && (x <= 5)); // false - verifica se as duas comparações são verdadeiras

alert((x >=  1) || (x <= 5)); // true - porque uma das 2 instruções retornou verdadeira

alert(!(x >= 1)); // false - Retorna o inverso da verificação realizada (verificação inicial).