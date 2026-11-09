const prompt = require("prompt-sync")() // adiciona o pacote prompt-sync
const pessoas = Number(prompt("Número de Pessoas: ")) // lê entrada de dados
const peixes = Number(prompt("Número de Peixes: ")) // lê entrada de dados
let pagar
if (peixes <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}
console.log(`Pagar R$: ${pagar.toFixed(2)}`)