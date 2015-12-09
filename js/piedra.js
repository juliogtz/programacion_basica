var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina=piedra;

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPael: 1\nTijera: 2", 0);


if(opcionUsuario==0){
	alert("Elegiste Piedra");
	if(opcionMaquina == piedra){
		alert("Empate!");
	}
}else if (opcionUsuario == 1){
	alert("Elegiste Papel!");
	if(opcionMaquina == papel){
		alert("Perdiste :(");
	}
}else if(opcionUsuario == 2){
	alert("Elegiste Tijeta");
	if(opcionMaquina == tijera){
		alert("Ganaste (");
	}
}else{
	alert("¿Pos qué carajo");
}






