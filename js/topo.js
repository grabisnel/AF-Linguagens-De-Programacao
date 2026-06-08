const buttonTopo = document.getElementById('button-topo');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        buttonTopo.style.display = 'block';
    } else {
        buttonTopo.style.display = 'none';
    }
});

buttonTopo.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
