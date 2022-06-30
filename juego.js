var palabras = ["VERDE", "MANZANA", "PERRO", "MOUSE", "COMIDA", "CASA", "TECLADO"];
var textoNuevaPalabra = document.querySelector(".label-nueva-palabra");
var palabraEscrita = document.querySelector("#nueva-palabra");
var btnAgregarPalabra = document.querySelector(".bnt-nueva-palabra")

var btnComenzar = document.querySelector("#btn-comenzar");
var letrasAMostrar = document.querySelector("#letras-erradas");
var guionesYLetras = document.querySelector("#guiones");


var letrasDeLaPalabra;
var errores = 8;
var aciertos;
  
//-------------------------------------------------------------//
////FUNCION PARA CREAR PALABRA AL AZAR
var palabra;
function palabraALAzar(){
    palabra = palabras[Math.floor((Math.random() * palabras.length))];//Agarro una palabra al azar dentro de el array palabras.
   letrasDeLaPalabra = palabra.split(""); // Con este metodo split es para que la palabra quede dividida en distintos caracteres dentro de un arry.
}

//-------------------------------------------------------------//
//FUNCION PARA CREAR EL ELEMENTO HTML QUE VA A LLEVAR LA LETRA
var elementoLetra;

function dibujarPalabra(){
   letrasDeLaPalabra.forEach(letra => { //Recorro cada una de las letras 
      elementoLetra = document.createElement("span"); //Creo elemento span
      elementoLetra.innerHTML = letra.toUpperCase(); //Hago que el contenido sea la letra en mayuscula
      //Le agrego 2 clases al elemento
      elementoLetra.classList.add("letra");
      elementoLetra.classList.add("oculto");
      // 
      guionesYLetras.appendChild(elementoLetra);
   });
}


//-------------------------------------------------------------//
//FUNCIONES PARA VER QUE LETRA FUE PRESIONADA

function eventoLetra (event) { 
   
   var letraPresionada = event.key.toUpperCase();
   //expresion regular, si la tecla que preciono el usuario esta entre la a y la z o es una ñ
   if((/[A-ZÑ]/i.test(letraPresionada)))  {
      correctaOIncorrecta(letraPresionada);
   } 
 }
 


function correctaOIncorrecta(letra){
   if(letrasDeLaPalabra.includes(letra)){
      letraCorrecta(letra);
      
  } else {
     letraIncorrecta();
     }
     agregarLetraPresionada(letra);
  }


  
//-------------------------------------------------------------//
//FUNCIONES SEGUN LETRA PRESIONADA
function letraCorrecta (letra){
   const {children} = guionesYLetras;
    for (let i = 0; i < children.length; i++){
      if (children[i].innerHTML===letra){
        children[i].classList.add("mostrar");
         aciertos++;
      }  
      if (aciertos === letrasDeLaPalabra.length){
         ganaste();
         finDelJuego();
      } 
 }
}

function letraIncorrecta(){
    errores = errores - 1;
    dibujarAhorcado();
      if(errores === 1){
        perdiste();
        finDelJuego();
}
}

function agregarLetraPresionada(letra){
    const elementoLetra2 = document.createElement("span");
    elementoLetra2.innerHTML = letra.toUpperCase() + " ";
    letrasAMostrar.appendChild(elementoLetra2);
}

//-------------------------------------------------------------//
//FUNCION PARA ACABAR EL JUEGO
function finDelJuego(){
   document.removeEventListener("keydown", eventoLetra);
   btnComenzar.style.display = "block";
   palabraEscrita.classList.add("mostrado");
   textoNuevaPalabra.classList.add("mostrado");
   btnAgregarPalabra.classList.add("mostrado");
}

  
//-------------------------------------------------------------//
//SWEETALERT PERDISTE O GANASTE

function ganaste(){
   swal("Ganaste","Felicitaciones, la palabra correcta era " + palabra, "success");
}

function perdiste(){
   swal("Perdiste", "Intentalo nuevamente, la palabra correcta era " + palabra, "error");
}


//-------------------------------------------------------------//
//FUNCION PARA AGREGAR NUEVA PALABRA AL ARRAY

function agregarPalabra(){
    
   if (palabraEscrita.value === palabraEscrita.value.toUpperCase()) {
      palabras.push(palabraEscrita.value);
      swal("¡LISTO", "Palabra agregada", "success");
      
  }
  if (palabraEscrita.value === palabraEscrita.value.toLowerCase()){
      swal("¡ERROR!", "Solo se aceptan letras mayusculas", "error");
      palabraEscrita.value="";
  }

}

//-------------------------------------------------------------//
//FUNCION QUE SERA EJECUTADA AL PRESIONAR EL BOTON COMENZAR

function comenzarJuego(){
   //letrasUsadas = [];
   errores = 8;
   aciertos = 0;
   letrasAMostrar.innerHTML = "";
   guionesYLetras.innerHTML = "";
   btnComenzar.style.display = "none";

   estructuraHorca();
   estructuraHorca2();
   palabraALAzar();
   dibujarPalabra();
   palabraEscrita.classList.add("novisible");
   textoNuevaPalabra.classList.add("novisible");
   btnAgregarPalabra.classList.add("novisible");
   
   document.addEventListener("keydown", eventoLetra);
   
}


btnComenzar.addEventListener("click",comenzarJuego);


