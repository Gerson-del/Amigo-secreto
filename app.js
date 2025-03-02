let amigos = []; // Esto es un array vacio

//Obtenemos el elemento de la lista
listaAmigos = document.getElementById("listaAmigos");

// Esto obtiene el tamaño de la lista amigos 
listaAmigosSize = amigos.length;


function agregarAmigo(){
    
    input = document.getElementById("amigo");
    amigo = input.value;

    if (amigo == ""){
        alert("Por favor, inserte un nombre.");
    }
    else{
        amigos.push(amigo);
        console.log(amigos);

        // esto limpia el campo de entrada
        input.value = "";
    }

    actualizarListaAmigos();

}

//creamos la funcion
function actualizarListaAmigos(){

    // Esta linea de codigo limpia la lista existente
    listaAmigos.innerHTML = "";



    // Usamos un for loop para iterar sobre la lista:
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Debe ser "li", no el nombre del amigo
        li.innerHTML = amigos[i]; // Asigna el texto del amigo al elemento <li>
        listaAmigos.appendChild(li); // Agrega el <li> a la lista
    }

}


// Creamos una funcion para sortear los amigos
// validar que haya amigos disponibles
// Obtener el nombre sorteado
// Mostrar el nombre sorteado


function sortearAmigo(){

    if (amigos.length == 0){
        alert("No tienes ningun amigo agregado");
    }

    else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");

        let nombreAleatorio = amigos[indiceAleatorio];

        resultado.innerHTML = nombreAleatorio; 

    }



}
