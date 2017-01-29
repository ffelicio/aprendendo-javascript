/*
	OPERADORES DE BITS (BITWISE)

	OPERADORES ESPECIAIS

	?: 			 Operador Ternário	
	, 			 Separa expressões avaliadas
	delete		 Apaga atributo de um objeto ou um elemento de um array
	in 			 Indica se existe a propriedade especificada
	instanceof	 Indica se o objeto é do tipo especificado
	new			 Cria nova instância de objeto
	this		 Referência ao objeto atual
	typeof		 Retorna o tipo do operando
	()			 Chama uma função
*/

// operador ternário
var idade = 6;
var x = (idade >= 18) ? 'Maior de idade' : 'Menor de idade'; 
alert(x);

// operador ,
var sexo = 'Masculino',
    nacionalidade = 'Brasileiro';
alert(sexo + ' ' + nacionalidade);

// operador delete
var Pessoa = {nome: 'Fernando', idade: 34};
var arrayPessoa = [];
arrayPessoa['nome'] = 'Fernando';
arrayPessoa['idade'] = 34;
alert(Pessoa.nome);
alert(arrayPessoa['nome']);
delete Pessoa.nome;
delete arrayPessoa['nome'];
alert(Pessoa.nome); // undefined
alert(arrayPessoa['nome']); // undefined

// operador in
alert('idade' in Pessoa); // true
alert('idades' in Pessoa); // false

// operador instanceof
var novaIdade = new Number(31);
alert(novaIdade instanceof Number); // true
alert(novaIdade instanceof String); // false

// operador new
var objeto = new String('Testando a criação de um novo objeto.');
alert(objeto);

// operador this
alert(this.document.title); // nesse lugar representa o objeto window

function oi() {
	console.log(this); // aqui dentro, faz referência a função
}

// operador typeof
alert(typeof(3)); // Number
alert(typeof(true)); // Boolean
alert(typeof(function(){})); // Function

// operando ()
alert("operando () - chamada de função"); // chamada de função do objeto window. 'window.alert("operando () - chamada de função")'