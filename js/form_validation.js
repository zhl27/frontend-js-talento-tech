
document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['formulario'];
    const emailInput = form['email'];

    form.addEventListener('submit', function (event) {
        if (!validateEmail(emailInput.value)) {
            alert('Mail inválido. Reingrese los datos.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});