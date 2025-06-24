// Validación del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const formContacto = document.getElementById('form-contacto');
    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gracias por tu mensaje. Te responderemos pronto.');
            this.reset();
        });
    }

    // Botón para subir al inicio
    const btnSubir = document.getElementById('btn-subir');
    if (btnSubir) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                btnSubir.style.display = 'block';
            } else {
                btnSubir.style.display = 'none';
            }
        });
        btnSubir.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
