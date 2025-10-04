//obtenemos los elementos del DOM
const form = document.getElementById('messageForm');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const messageSection = document.getElementById('messages');

//Evento cuando se envia el formulario
form.addEventListener('submit', (event) =>{
    event.preventDefault(); //Evita que se recargue la página.

    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    if (username && message){
        //creamos un div para el mensaje
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');

    // Insertamos el contenido
    messageDiv.innerHTML = `
      <strong>${username}</strong>
      <p>${message}</p>
    `;

    //Lo agregamos a la sección de mensajes
    messageSection.prepend(messageDiv);

    //Limpiamos el formulario
    messageInput.value = '';
    }
});