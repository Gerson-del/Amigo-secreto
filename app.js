// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// primero creamos un array para los nombres
let amigos = [];

resultado = document.getElementById("resultado");

// Creamos una funcion para  agregar amigos:
function agregarAmigo(){
    let input = document.getElementById("amigo");
    // trim se encarga de deshacerse de los espacios vacios a los lados del texto
    amigo = input.value.trim();
    
    if (amigo == ""){
        alert("El campo donde ingresas el nombre no debe estar vacio");
    }else{
        amigos.push(amigo);
        // Esto limpia el valor de entrada despues de agregar el amigo
        input.value = "";
        alert("amigo agregado con exito!");
    }

    console.log(amigos);
    
}

function sortearAmigo(){
    // antes de todo comprobar que el array amigos no esta vacio :3

    size_amigos = amigos.length

    if (amigos.length == 0){
        alert("No has agregado ningun amigo ");
    }

    else{
        // Esto te da un indice random
        randomIndex = Math.floor(Math.random() * size_amigos);  
        // con esta linea de codigo obtienes un nombre aleatorio de la lista
        nombre_aleatorio = amigos[randomIndex];
        // Esta linea de codigo te muestra el resultado en pantalla
        resultado.innerHTML = `Tu amigo secreto es ${nombre_aleatorio}`;
        
    }
}