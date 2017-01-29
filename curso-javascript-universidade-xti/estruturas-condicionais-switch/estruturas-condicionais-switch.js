/**
	DECLARAÇÕES PARA ESTRUTURAS DE
		. CONTROLE
		. CONDICIONAIS *
		. LOOPS
		. EXCEÇÕES
**/
var sexo = 'M';
switch( sexo ) {
	case 'M':
		alert('Macho');
		break;
	case 'F':
		alert('Femêa');
		break;
	default:
		alert('Indefinido');
}

var tecnologia = 'Javascript';
switch( tecnologia ) {
	case 'Java':
	case 'C++':
	case 'Javascript':
	case 'C#':
		alert('Linguagem de Programação.');
		break;
	case 'SqlServer':
	case 'PostgreSql':
	case 'Oracle':
	case 'MySql':
		alert('Banco de Dados.');
		break;
	default:
		alert('Tecnologia não conhecida.');
}