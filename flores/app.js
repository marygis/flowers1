// Espera el evento "click" en el botón
document
 .getElementById('showFlowersBtn')
 .addEventListener('click', function () {
  // Oculta el mensaje y el botón
  document.getElementById('message').style.display = 'none'
  document.getElementById('showFlowersBtn').style.display = 'none'

  // Muestra las flores removiendo la clase 'hidden'
  document.getElementById('flowers').classList.remove('hidden')
 })
