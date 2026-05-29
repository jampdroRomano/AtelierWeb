export function initContactForm() {
    const form = document.querySelector('[data-contact-form]');

    if (!form) return;

    const inputs = form.querySelectorAll('input, select, textarea');
    const feedback = form.querySelector('.form-feedback');

    // Validação em tempo real ao sair do campo (blur)
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });

        // Remove erro ao começar a digitar novamente
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                validateField(input);
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isFormValid = true;

        // Força validação de todos os campos no submit
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            processSubmit(form, feedback);
        }
    });
}

function validateField(field) {
    const errorElement = field.nextElementSibling;

    if (!field.checkValidity()) {
        field.classList.add('is-invalid');

        // Mensagens personalizadas
        if (field.validity.valueMissing) {
            errorElement.textContent = 'Este campo é obrigatório.';
        } else if (field.validity.typeMismatch) {
            errorElement.textContent = 'Insira um formato válido (ex: e-mail correto).';
        } else {
            errorElement.textContent = 'Campo inválido.';
        }
        return false;
    } else {
        field.classList.remove('is-invalid');
        errorElement.textContent = '';
        return true;
    }
}

function processSubmit(form, feedback) {
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    feedback.hidden = true;

    // Simula o tempo de requisição a uma API (Substitua pelo seu fetch real)
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        // Feedback de Sucesso
        feedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        feedback.className = 'form-feedback form-group--full success';
        feedback.hidden = false;

        form.reset();

        // Esconde o feedback após 5 segundos
        setTimeout(() => {
            feedback.hidden = true;
        }, 5000);

    }, 1500);
}