function verificarCredito() {
    // Obtém os valores dos campos
    const historicoCredito = document.querySelector('input[name="historicoCredito"]:checked');
    const renda = document.querySelector('#renda');
    const emprego = document.querySelector('input[name="emprego"]:checked');
    const pontuacaoCredito = document.querySelector('#pontuacaoCredito');

    // Obtém o elemento de resultado
    const resultado = document.getElementById('resultado');

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!historicoCredito || !renda || !emprego || !pontuacaoCredito) {
        resultado.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        return; // Impede a execução da lógica principal se algum campo estiver vazio
    }

    // Obtém os valores dos campos após a verificação de nulidade
    const historicoCreditoValue = historicoCredito.value;
    const rendaValue = parseFloat(renda.value);
    const empregoValue = emprego.value;
    const pontuacaoCreditoValue = parseInt(pontuacaoCredito.value);

    // Verifica se todos os campos obrigatórios têm valores válidos
    if (historicoCreditoValue === '' || isNaN(rendaValue) || empregoValue === '' || isNaN(pontuacaoCreditoValue)) {
        resultado.textContent = 'Por favor, preencha todos os campos obrigatórios com valores válidos.';
        return; // Impede a execução da lógica principal se algum campo contiver valores inválidos
    }

    // Lógica principal para verificar o crédito
    if (historicoCreditoValue === 'sim' && rendaValue >= 2000 && empregoValue === 'sim' && pontuacaoCreditoValue >= 700) {
        resultado.textContent = 'Parabéns! Seu crédito foi aprovado.';
    } else {
        resultado.textContent = 'Desculpe, seu crédito não foi aprovado.';
    }
}


