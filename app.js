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
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        let li = document.createElement("li");
        li.textContent = amigos[i];

        // Agregar el <li> a la lista
        lista.appendChild(li);
    }
}

