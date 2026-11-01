const frm = document.querySelector("form"); //obtendo os elementos do formulário
const resp1 = document.querySelector("#outResp1"); //obtendo os elementos do formulário
const resp2 = document.querySelector("#outResp2"); //obtendo os elementos do formulário
const resp3 = document.querySelector("#outResp3"); //obtendo os elementos do formulário

//adicionando um evento ao formulário para prevenir o envio do formulário
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  
    const saque = Number(frm.inSaque.value); //obtendo o valor do saque
    if (saque % 10 != 0) {
        alert("Valor inválido. O valor do saque deve ser múltiplo de 10.");
        frm.inSaque.focus();
        return; //se o valor do saque não for múltiplo de 10, o programa termina

    } //verificando se o valor do saque é múltiplo de 10
    const notas100 = Math.floor(saque / 100); //calculando o número de notas de 100
    let resto = saque % 100;
    const notas50 = Math.floor(resto / 50); //calculando o número de notas de 50
    resto = resto % 50;
    const notas10 = Math.floor(resto / 10); //calculando o número de notas de 10
    if (notas100 > 0) {
        resp1.innerText = `Notas de R$ 100: ${notas100}`; //exibindo o número de notas de 100
    }
    if (notas50 > 0) {
        resp2.innerText = `Notas de R$ 50: ${notas50}`; //exibindo o número de notas de 50
    }
    if (notas10 > 0) {
        resp3.innerText = `Notas de R$ 10: ${notas10}`; //exibindo o número de notas de 10  
    }
})  
 