//Envio Formulario Contacto
emailjs.init('a7dp95oyQ5p5PCC1e')
const btn = document.getElementById('button-contacto');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();



const serviceID = 'default_service';
const templateID = 'template_9q06kmp';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {

        Swal.fire({
            icon: 'success',
            title: 'Se envió el mensaje',
            timer: 2500,
            showConfirmButton: false
          })

    window.location = "index.html";

    }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
    });
});


