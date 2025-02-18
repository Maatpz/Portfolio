
const botaoTema = document.getElementById('theme-toggle');
const corpo = document.body;
botaoTema.addEventListener('click', () => {
    corpo.classList.toggle('dark-mode');
    const isModoEscuro = corpo.classList.contains('dark-mode');
    botaoTema.innerHTML = isModoEscuro ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

const secoes = document.querySelectorAll('section');
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
        }
    });
}, { threshold: 0.1 });

secoes.forEach(secao => {
    observador.observe(secao);
});

const botaoTopo = document.getElementById('botao-topo');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        botaoTopo.classList.add('visivel');
    } else {
        botaoTopo.classList.remove('visivel');
    }
});
botaoTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});