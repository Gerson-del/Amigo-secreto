// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// primero creamos un array para los nombres
let amigos = [];


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

