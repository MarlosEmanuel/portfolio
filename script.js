// Aguarda o DOM estar completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Função para aplicar a classe 'is-visible' com um atraso
    const animateElement = (elementId, delay) => {
        const element = document.getElementById(elementId);
        if (element) {
            setTimeout(() => {
                element.classList.add('is-visible');
            }, delay);
        }
    };

    // Função para o efeito de máquina de escrever (typing effect)
    const typeWriter = (elementId, text, speed, delay) => {
        const element = document.getElementById(elementId);
        if (!element) return;

        // Remove classes de animação de fade-in para evitar conflitos
        element.classList.remove('animate-fade-in');
        // Garante que o elemento esteja visível antes de começar a digitar
        element.classList.add('opacity-100');

        let i = 0;
        element.textContent = ''; // Limpa o texto existente para digitar do zero

        setTimeout(() => { // Atraso antes de iniciar a digitação
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed); // Velocidade de digitação (milissegundos por caractere)
        }, delay);
    };

    // Animações para os elementos principais
    // O header aparece primeiro
    animateElement('header-animate', 100);

    // A seção da imagem aparece logo depois
    animateElement('image-section-animate', 300);

    // O texto de "Backend Developer" aparece com um pequeno atraso após a imagem
    animateElement('role-animate', 600);

    // O nome "Marlos Emanuel" aparece logo em seguida
    animateElement('name-animate', 800);

    // Pega o texto original da descrição antes de limpá-lo para o efeito de digitação
    const descriptionElement = document.getElementById('description-animate');
    const originalDescriptionText = descriptionElement ? descriptionElement.textContent : '';

    // A descrição aparece com efeito de máquina de escrever
    const typingSpeed = 50; // Velocidade de digitação: 50ms por caractere
    const typingDelay = 1000; // Atraso para começar a digitar
    typeWriter('description-animate', originalDescriptionText, typingSpeed, typingDelay);

    // O footer aparece por último, ajustando o atraso com base na duração da digitação
    // 200ms de buffer após o término da digitação para uma transição mais suave
    animateElement('footer-animate', typingDelay + (originalDescriptionText.length * typingSpeed) + 200);
});