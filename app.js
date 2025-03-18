// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

/* MOSTRAR MENSAJE DE ALERTA AL DEJAR CAMPO DE TEXTO VACIO */
function mostrarMensajeAlerta(selector, mensaje) {
  let etiqueta = document.querySelector(selector);
  etiqueta.textContent = mensaje;
}

function limpiarCampoInput(inputNombre) {
  inputNombre.value = "";
}

function mostrarListaAmigos(arrayAmigos) {
  let listaAmigos = document.querySelector(".lista-amigos");

  /*  LIMPIAR LA LISTA DE AMIGOS ANTES DE VOLVER A MOSTRARLA EN PANTALLA */
  listaAmigos.innerHTML = "";
  arrayAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function agregarAmigo(e) {
  e.preventDefault();

  const inputNombre = document.getElementById("nombre-input");
  const nombre = inputNombre.value;
  if (!nombre.trim()) {
    mostrarMensajeAlerta(".mensaje-error", "Porfavor inserte un nombre");
    return;
  }

  if (amigos.includes(inputNombre.value)) {
    alert('Nombre ya agregado!');
    return;
}

  /* AGREGAR EL NUEVO AMIGO AL ARRAY DE: amigos[]*/
  amigos.push(nombre);

  mostrarListaAmigos(amigos);

  /* QUITAR MENSAJE DE ERROR AL INGRESAR UN NOMBRE VALIDO */
  mostrarMensajeAlerta(".mensaje-error", "");

  limpiarCampoInput(inputNombre);

  return amigos;
}

/*MOSTRAR EN PANTALLA EL AMIGO SECRETO QUE FUE SORTEADO*/
function mostrarAmigosSecreto(nombreAmigoSecreto) {
  let mensajeAmigo = document.querySelector(".amigo-secreto");
  mensajeAmigo.innerHTML = `Tu amigo secreto es: ${nombreAmigoSecreto}`;
  mensajeAmigo.style.display = "block";
}
/*QUITAR DE LA PANTALLA EL AMIGO SECRETO QUE FUE SORTEADO*/
function quitarAmigosSecreto() {
  let mensajeAmigo = document.querySelector(".amigo-secreto");
  mensajeAmigo.innerHTML = "";
  mensajeAmigo.style.display = "none";
}

/*DESHABILITAR Y HABILITAR BOTONES AL ENCONTRAR UN AMIGO O AL REINICIAR EL SORTEO */
function deshabilitarBotonSortear() {
  let botonSortear = document.querySelector(".button-draw");
  botonSortear.disabled = true;
}
function habilitarBotonSortear() {
  let botonSortear = document.querySelector(".button-draw");
  botonSortear.disabled = false;
}

function deshabilitarBotonAgregar() {
  let botonAgregar = document.querySelector(".button-add");
  botonAgregar.disabled = true;
}
function habilitarBotonAgregar() {
  let botonAgregar = document.querySelector(".button-add");
  botonAgregar.disabled = false;
}

function generarIndiceAleatorio(longitudArrayAmigos) {
  let numeroAleatorio = Math.floor(Math.random() * longitudArrayAmigos);
  return numeroAleatorio;
}

function sortearAmigo() {
  let amigosASortear = amigos;
  if (amigosASortear.length < 4) {
    mostrarMensajeAlerta(
      ".mensaje-error",
      "Porfavor inserte al menos 3 amigos"
    );
  } else {
    /*OBTENER UN INDICE ALEATORIO PARA ENCONTRAR EL AMIGO SECRETO*/
    let indiceAmigoSorteado = generarIndiceAleatorio(amigosASortear.length);
    let amigoSorteado = amigosASortear[indiceAmigoSorteado];
    mostrarAmigosSecreto(amigoSorteado);
    deshabilitarBotonSortear();
    deshabilitarBotonAgregar();
  }
}

function reiniciarSorteo() {
  amigos = [];
  mostrarListaAmigos(amigos);
  mostrarMensajeAlerta(".mensaje-error", "");
  habilitarBotonSortear();
  quitarAmigosSecreto();
  habilitarBotonAgregar();
}
