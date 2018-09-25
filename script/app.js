/*
var numero1=10.5;
var numero2=5;
var resultado= numero1*numero2;

console.log(resultado);

var nombre ='Yefersson ';
var profesion ="Desarrollador Full Stack";

console.log(nombre + profesion);

var tiene_mascota=true;

console.log(tiene_mascota);

var datos=["Juan",26,false,25,78,"Desarrollador"];

console.log(datos[2]);



var edad = 41;

if(edad>=18 && edad<=40){
	console.log("Eres un adulto JOVEN!");
}
else{
	console.log("No! eres un adulto JOVEN...");
}

var dias=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

for(var cont=0; cont<7; cont++){

	console.log(dias[cont]);
}



function suma(numero1, numero2){
	var resultado= numero1 + numero2;
	return resultado;
}

var res=suma(88, 55);
console.log(res);



function ivaproducto(valor_Producto){
	var iva = valor_Producto*0.19;
	return iva;
}

var resul=ivaproducto(20000);

console.log(resul);


var titulos = document.getElementsByTagName('h1');

console.log(titulos[0]);

var clasetexto= document.getElementsByClassName('texto');

console.log(clasetexto);

var sede= document.getElementById("sede");

console.log(sede);
*/

function iva(precio_Producto, porcentaje_iva){
	var iva_producto = precio_Producto* (porcentaje_iva/100);
	return iva_producto;
}

function calcular_iva(){
	var precio= parseInt(document.getElementById('precio').value);
	var porcentaje_iva= parseInt(document.getElementById('iva').value);
	var resultado= iva(precio, porcentaje_iva);
    var salida= document.getElementById('resultado');
    var texto=document.createTextNode(resultado);

    salida.value=resultado;	
}


