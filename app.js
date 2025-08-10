// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo").value.trim();

    // Validar que no esté vacío
    if (inputAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(inputAmigo);

    // Actualizar la lista en pantalla
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}

// Función para mostrar la lista en pantalla
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar contenido anterior
    lista.innerHTML = "";

    // Recorrer el array y crear los elementos de la lista
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
