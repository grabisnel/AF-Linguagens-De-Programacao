const btnTema = document.getElementById('button-tema');

btnTema.addEventListener('click', function () {
    document.body.classList.toggle('tema-escuro');
    if (document.body.classList.contains('tema-escuro')) {
        btnTema.textContent = 'Claro';
    } else {
        btnTema.textContent = 'Escuro';
    }
});
