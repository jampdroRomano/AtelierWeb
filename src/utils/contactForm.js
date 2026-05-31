const WHATSAPP_NUMBER = '5511999999999';

const SERVICO_LABELS = {
  design: 'Design Personalizado',
  curadoria: 'Curadoria de Cores',
  restauracao: 'Restauração',
  outro: 'Outro',
};

function buildWhatsAppMessage(form) {
  const nome = form.nome.value.trim();
  const servicoValue = form.servico.value;
  const servico =
    SERVICO_LABELS[servicoValue] || form.servico.options[form.servico.selectedIndex]?.text || servicoValue;
  const descricao = form.descricao.value.trim();

  return [
    'Olá! Gostaria de iniciar um diálogo com o ateliê.',
    '',
    `Nome: ${nome}`,
    `Serviço: ${servico}`,
    `Descrição: ${descricao}`,
  ].join('\n');
}

export function initContactForm() {
  const form = document.getElementById('contato-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const message = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  });
}
