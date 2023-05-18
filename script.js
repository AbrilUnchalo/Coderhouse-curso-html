function enviarMensaje() {
  var nombre = document.getElementById("nameInput").value;
  var mensaje = document.getElementById("messageInput").value;

  // Reemplaza "TU_NUMERO_DE_TELEFONO" con tu número de teléfono
  var url = "https://api.whatsapp.com/send?phone=+5492236931171&text=Soy " + encodeURIComponent(nombre) + "! Estoy buscando más información sobre: " + encodeURIComponent(mensaje);


  window.open(url, '_blank');
}

document.getElementById("chatButton").onclick = enviarMensaje;