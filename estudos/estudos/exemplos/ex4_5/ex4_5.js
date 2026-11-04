const frm = document.querySelector("form"); // Seleciona o formulário do documento
const resp1 = document.querySelector("#outResp1"); // Seleciona os elementos do formulário e os elementos de saída para exibir os resultados
const resp2 = document.querySelector("#outResp2"); // Seleciona os elementos do formulário e os elementos de saída para exibir os resultados
const resp3 = document.querySelector("#outResp3"); // Seleciona os elementos do formulário e os elementos de saída para exibir os resultados

frm.addEventListener("submit", (e) => { // Adiciona um ouvinte de evento para o envio do formulário
  e.preventDefault(); // Impede o envio do formulário para evitar recarregar a página
  
    const saque = Number(frm.inSaque.value); // Converte o valor do saque para número
    if (saque % 10 != 0) { // Verifica se o valor do saque não é múltiplo de 10
        alert("Valor inválido. O valor do saque deve ser múltiplo de 10."); // Exibe um alerta se o valor do saque não for múltiplo de 10
        frm.inSaque.focus(); // Retorna o foco para o campo de entrada
        return; // Interrompe a execução da função se o valor do saque não for múltiplo de 10
    }

    const notas100 = Math.floor(saque / 100); // Calcula o número de notas de R$ 100
    let resto = saque % 100; // Calcula o restante após retirar as notas de R$ 100
    const notas50 = Math.floor(resto / 50); // Calcula o número de notas de R$ 50
    resto = resto % 50; // Atualiza o restante após retirar as notas de R$ 50
    const notas10 = Math.floor(resto / 10); // Calcula o número de notas de R$ 10
    resp1.innerText = notas100 > 0 ? `Notas de R$ 100: ${notas100}` : ""; // Exibe o número de notas de R$ 100, se houver
    resp2.innerText = notas50 > 0 ? `Notas de R$ 50: ${notas50}` : ""; // Exibe o número de notas de R$ 50, se houver
    resp3.innerText = notas10 > 0 ? `Notas de R$ 10: ${notas10}` : ""; // Exibe o número de notas de R$ 10, se houver
})  
