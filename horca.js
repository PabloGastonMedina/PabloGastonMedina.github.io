var pantallaMunieco = document.querySelector("#munieco");
var horca = pantallaMunieco.getContext("2d");
/*Funcion para dibujar la estructura de la horca y partes del cuerpo*/

function estructuraHorca() {
    horca.fillStyle = '#fcb424';
    horca.fillRect(30, 125, 130 , 40);
    horca.fillRect(80,30,30,200);
    horca.fillRect(80,20,160,22);
    horca.fillRect(215,40,5,15);


/*Partes del cuerpo a medida que va teniendo errores*/
}

function dibujarAhorcado(){

if(errores === 7){
    horca.beginPath()
    horca.fillStyle = "black";
    horca.arc(217,65,11,0,2 * 3.14);
    horca.stroke();
    horca.lineWidth = "5";

    horca.beginPath()
    horca.fillStyle = "black";
    horca.arc(217,65,11,0,2 * 3.14);
    horca.stroke();
    horca.lineWidth = "5";
}

if (errores === 6){
    horca.beginPath()
    horca.fillStyle ="black";
    horca.fillRect(214,75,5,30);
    horca.lineWidth = "5";
}
    

if (errores === 5){
    horca.beginPath()
    horca.fillStyle = "black";
    horca.moveTo(216,84);
    horca.lineTo(195,94);
    horca.stroke();
}
    

if (errores === 4){
    horca.beginPath()
    horca.fillStyle = "black";
    horca.moveTo(216,84);
    horca.lineTo(237,94);
    horca.lineWidth = "5";
    horca.stroke();
}
    

if (errores === 3){
    horca.beginPath()
    horca.fillStyle = "black";
    horca.moveTo(216,103);
    horca.lineTo(195,114);
    horca.lineWidth = "5";
    horca.stroke();
}
    

if (errores === 2){
    horca.beginPath()
    horca.fillStyle = "black";
    horca.moveTo(216,103);
    horca.lineTo(237,114);
    horca.lineWidth = "5";
    horca.stroke();
}
    

if (errores === 1){
    horca.beginPath()
    horca.fillStyle ="red";
    horca.fillRect(200,78,34,4);
}

}


/*Funcion para restaurar la horca a la hora de presionar comenzar*/

 function estructuraHorca2() {
    horca.beginPath();
    horca.fillStyle = "#7f59b0";
    horca.fillRect(170, 50, 100, 90);
    
}