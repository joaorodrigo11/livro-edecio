const prompt = require("prompt-sync") ()
const veiculo = prompt("Veículo: ")
const preco = Number(prompt("Preço: "))
const entrada = preco * 0.50
const parcela = (preco * 0.50) / 12

console.log(`Promoção ${veiculo}!!!`)
console.log(`Entrada no valor de R$: ${entrada}`)
console.log(`Parcelas no valor de 12x: ${parcela.toFixed(2)}`)