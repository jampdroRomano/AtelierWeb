export function startSlideshow() {
    const slides = document.querySelectorAll('.servicos-card--featured .servicos-card__img');
    let indexAtual = 0;

    if (slides.length === 0) {
        console.warn('Imagens do slideshow não encontradas!');
        return;
    }

    setInterval(() => {
        slides[indexAtual].classList.remove('active');
        indexAtual = (indexAtual + 1) % slides.length;
        slides[indexAtual].classList.add('active');
    }, 4000); 
}