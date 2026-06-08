const formulario = document.getElementById('form-contato');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const feedback = document.getElementById('feedback');

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex de validação pego da internet

    if (!nome || !email || !assunto || !mensagem) {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.className = 'feedback-msg erro';
        feedback.style.display = 'block';
        return;
    }

    if (!regexEmail.test(email)) {
        feedback.textContent = 'Informe um e-mail válido.';
        feedback.className = 'feedback-msg erro';
        feedback.style.display = 'block';
        return;
    }

    feedback.textContent = 'Formulário enviado';
    feedback.className = 'feedback-msg sucesso';
    feedback.style.display = 'block';
    formulario.reset();
});
